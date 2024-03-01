// import React/Hook/Router...
import React from "react";

// function Component
const Footer = function () {
  // list thông tin render
  const dummyFooter = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];

  // render list thông tin
  const list = dummyFooter.map((item) => {
    return (
      <div key={item.col_number}>
        {item.col_values.map((value, i) => (
          <a key={i} href="#" className="d-block text-decoration-none mb-2">
            {value}
          </a>
        ))}
      </div>
    );
  });

  // return
  return (
    <div className="container d-flex justify-content-between mb-4">{list}</div>
  );
};

// export
export default Footer;
