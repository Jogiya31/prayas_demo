import React from "react";

const groupAndMergeRows = (data) => {
  const groupedData = {};
  data.forEach((item) => {
    const key = `${item.name}_${item.class}`;

    if (!groupedData[key]) {
      groupedData[key] = {
        name: item.name,
        class: item.class,
        rows: [],
      };
    }

    groupedData[key].rows.push(item);
  });

  return Object.values(groupedData);
};

const DynamicTable = ({ data }) => {
  const groupedData = groupAndMergeRows(data);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Class</th>
          <th>Age</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        {groupedData.map((group, index) => (
          <React.Fragment key={index}>
            {group.rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {rowIndex === 0 ? (
                  <React.Fragment>
                    <td>{row.id}</td>
                    <td rowSpan={group.rows.length}>{row.name}</td>
                    <td rowSpan={group.rows.length}>{row.class}</td>
                  </React.Fragment>
                ) : null}
                <td>{row.age}</td>
                <td>{row.subject}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default DynamicTable;
