// import React/Hook/Router...
import React from "react";

// function Component
const ListCity = function (props) {
  // lấy dữ liệu từ props
  const hotelByCity = props.hotelByCity;

  // lấy số lượng theo city
  const number = (city) => {
    return hotelByCity?.find((item) => item._id === city)?.count || 0;
  };

  // list thông tin để render
  const dummyListCity = [
    {
      name: "Ha Noi",
      subText: `${number("Ha Noi")} properties`,
      image: "./images/CityImage/HaNoi.jpg",
    },
    {
      name: "Ho Chi Minh",
      subText: `${number("Ho Chi Minh")} properties`,
      image: "./images/CityImage/HCM.jpg",
    },
    {
      name: "Da Nang",
      subText: `${number("Da Nang")} properties`,
      image: "./images/CityImage/DaNang.jpg",
    },
  ];

  // render list
  const list = dummyListCity.map((item, i) => (
    <div key={i} className="col position-relative">
      <img
        className="img-fluid rounded-4 shadow"
        style={{ height: "300px" }}
        src={item.image}
        alt={"city" + i}
      ></img>
      <div className="position-absolute bottom-0 start-0 p-3 ps-4 m-2 bg-transparent shadow-lg">
        <h2 className="fw-bold">{item.name}</h2>
        <p className="mb-0 fs-4 fw-bold">{item.subText}</p>
      </div>
    </div>
  ));

  // return
  return (
    <div className="container mb-5">
      <div className="row row-cols-3 text-light">{list}</div>
    </div>
  );
};

// export
export default ListCity;
