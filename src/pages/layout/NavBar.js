// import React/Hook/Router...
import React from "react";
import { useNavigate } from "react-router-dom";

// import CUSTOM HOOK
import useLocalStorage from "../../hooks/use-local-storage";

// import component
import NavBarItem from "./NavBarItem";

// function Component
const NavBar = function (props) {
  // dùng Custom Hook làm việc với Local Storage
  const { remove } = useLocalStorage();

  // dùng điều hướng
  const navigate = useNavigate();

  // return
  return (
    <div className="bg-primary-cus">
      <div className="container text-light p-3 pb-4">
        {/* navbar điều hướng */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          {/* home page */}
          <h5 className="fw-normal mb-0">
            <a href="/" className="text-decoration-none text-light">
              Booking
            </a>
          </h5>

          {/* authentications */}
          <div className="d-flex align-items-center">
            {/* nếu có user đang đăng nhập */}
            {props.username ? (
              <>
                {/* hiện tên username đang đăng nhập */}
                <h5 className="mx-2 mb-0">{props.username}</h5>

                {/* nút Transactions */}
                <a
                  href="/transactions"
                  className="btn btn-light rounded-0 text-primary py-0 mx-2"
                >
                  Transactions
                </a>

                {/* nút Logout */}
                <button
                  type="button"
                  className="btn btn-light rounded-0 text-primary py-0 mx-2"
                  onClick={() => {
                    props.onLogout(null);
                    remove("username");
                    return navigate("/");
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* nếu không có user đang đăng nhập */}
                {/* hiện nút Sign Up */}
                <a
                  href="/signup"
                  className="btn btn-light rounded-0 text-primary py-0 mx-2"
                >
                  Sign Up
                </a>

                {/* hiện nút Login */}
                <a
                  href="/login"
                  className="btn btn-light rounded-0 text-primary py-0 mx-2"
                >
                  Login
                </a>
              </>
            )}
          </div>
        </div>

        {/* feature */}
        <NavBarItem />
      </div>
    </div>
  );
};

// export
export default NavBar;
