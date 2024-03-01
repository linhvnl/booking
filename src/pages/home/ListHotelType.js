// import React/Hook/Router...
import React from "react";

// function Component
const ListHotelType = function (props) {
  // lấy dữ liệu từ props
  const hotelByType = props.hotelByType;

  // lấy số lượng theo type
  const number = (type) => {
    return hotelByType?.find((item) => item._id === type)?.count || 0;
  };

  // array dummy info
  const dummyListHotelType = [
    {
      name: "Hotels",
      count: number("hotel"),
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: number("apartment"),
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: number("resort"),
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: number("villa"),
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: number("cabin"),
      image: "./images/type_5.jpg",
    },
  ];

  // content
  const list = dummyListHotelType.map((item, i) => (
    <div key={i} className="col">
      <div className="card border-0 h-100">
        <img
          className="card-img-top rounded-top-4 h-100"
          src={item.image}
          alt={"type" + i}
        />
        <div className="card-body p-0 pt-2">
          <h5 className="fw-bolder mb-0">{item.name}</h5>
          <p className="mb-0">{`${item.count} hotels`}</p>
        </div>
      </div>
    </div>
  ));

  // return
  return (
    <div className="container mb-5">
      <h3 className="fw-bolder mb-4">Browse by property type</h3>
      <div className="row row-cols-5">{list}</div>
    </div>
  );
};

// export
export default ListHotelType;
