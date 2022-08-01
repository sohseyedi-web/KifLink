import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navs" dir="rtl">
      <div className="container">
        <div className="navs-container">
          <div className="navs-container__logo">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              viewBox="0 0 100 100"
              width="45"
              height="45"
              fill="#ff8e3c"
            >
              <path d="M60 20c-16.563 0-30 13.431-30 29.997 0 11.045 8.955 20 20 20s19.997-8.955 20-20c0-7.357-5.967-13.331-13.333-13.331-7.363 0-13.334 5.974-13.334 13.333 0 3.685 2.985 6.667 6.667 6.667s6.667-2.982 6.667-6.667H50c0-3.685 2.985-6.667 6.667-6.667s6.666 2.982 6.666 6.667c0 7.366-5.97 13.333-13.333 13.333S36.667 57.366 36.667 50c0-11.042 8.955-20 20-20 11.048 0 19.996 8.955 20 19.997v-.004V50v-.003C76.663 64.724 64.727 76.663 50 76.663S23.333 64.724 23.333 49.997V50v-.007.004c0-20.248 16.42-36.664 36.667-36.664 2.624 0 5.179.286 7.646.811C62.317 11.517 56.341 10 50 10c-22.09 0-40 17.91-40 40s17.91 40 40 40 40-17.91 40-40c0-1.035-.078-2.051-.156-3.066C88.308 31.807 75.534 20 60 20z" />
            </svg>
            <h1 className="navs-container__logo-title">کیفلینک</h1>
          </div>
          {!user ? (
            <Link to={"/auth"} className="navs-container__account">
              ورود به کیف
            </Link>
          ) : (
            <div className="navs-container__dropdown">
              <div
                className="navs-container__dropdown-btn"
                onClick={(e) => setIsActive(!isActive)}
              >
                خوش اومدی
              </div>
              {isActive && (
                <div className="navs-container__dropdown-content">
                  <Link
                    to={"/edit"}
                    className="navs-container__dropdown-content__item"
                  >
                    ویرایش اطلاعات
                  </Link>
                  <div className="navs-container__dropdown-content__item">
                    خروج
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
