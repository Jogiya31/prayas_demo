import React from "react";
import emblem from "../../assets/images/emblem.svg";
import digital_india_logo from "../../assets/images/digital_india_logo.svg";
import Prayas_logo from "../../assets/images/Prayas_logo.svg";
import { Image } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <div className="CKR__header__sticky prayas__ml_250">
        <section className="CKR__header CKR_pad py-2">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <div className="Prayas__logo">
                  <Image src={emblem} alt="Prayas Logo" />
                </div>
              </div>
              <div className="text-center">
                <div className="CKR__name">
                  <Image
                    className="prayas_logo"
                    src={Prayas_logo}
                    alt="Prayas Logo"
                  />
                </div>
              </div>
              <div className="p_text_right">
                <ul className="p_rightbar">
                  <li>
                    <Image src={digital_india_logo} alt="Digital India Logo" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Header;
