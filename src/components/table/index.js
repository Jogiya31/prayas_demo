import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import "./index.css";

function CustomTable({ data, columns, headerStyle, loader }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <div className={` table-responsive`}>
        <table className="table table-bordered">
          <thead className="table_header">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={headerStyle}>
                    {header.isPlaceholder ? null : (
                      <h6 className="">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </h6>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full justify-center items-center">
        {loader ? (
          <div className="loading-container">
            <div className="loading"></div>
            <div id="loading-text">loading...</div>
          </div>
        ) : data.length > 0 ? (
          ""
        ) : (
          <span className="no-data">SP is awaited.</span>
        )}
      </div>
    </div>
  );
}
export default CustomTable;
