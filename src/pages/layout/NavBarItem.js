// import React/Hook/Router...
import React from "react";

// function Component
const NavBarItem = function (props) {
  // list thông tin hiển thị
  const dummyNavBar = [
    {
      type: "Stays",
      icon: "fa-bed",
      active: true,
    },
    {
      type: "Flights",
      icon: "fa-plane",
      active: false,
    },
    {
      type: "Car rentals",
      icon: "fa-car",
      active: false,
    },
    {
      type: "Attractions",
      icon: "fa-bed",
      active: false,
    },
    {
      type: "Airport taxis",
      icon: "fa-taxi",
      active: false,
    },
  ];

  // render list thông tin
  const list = dummyNavBar.map((item) => (
    <li
      key={item.type}
      className={`${item.active && "border rounded-pill"} px-2 py-1 me-4`}
    >
      <i className={`fa ${item.icon} me-2`} style={{ color: "white" }}></i>

      <a href="#" className="text-decoration-none text-white">
        {item.type}
      </a>
    </li>
  ));

  // return
  return (
    <div className="">
      <ul className="d-flex justify-content-start list-unstyled">{list}</ul>
    </div>
  );
};

// export
export default NavBarItem;
