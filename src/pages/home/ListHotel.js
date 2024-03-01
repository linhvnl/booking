// import React/Hook/Router...
import React from "react";

// function Component
const ListHotel = function (props) {
  // lấy dữ liệu từ props
  const hotels = props.hotels;

  // content
  const list = hotels?.map((item, i) => (
    <div key={i} className="col">
      <div className="card border-0 h-100">
        <img
          className="card-img-top rounded-0 h-100"
          src={item.photos[0]}
          alt={"hotel" + i}
        />
        <div className="card-body px-0 pt-2 pb-4">
          <h5 className="mb-2">
            <a className="text-cus-grape fw-bold" href={`/detail/${item._id}`}>
              {item.name}
            </a>
          </h5>

          <p className="text-secondary fs-5 mb-2">{item.city}</p>
          <p className="fw-bold fs-5 mb-2">{`Starting from $${item.cheapestPrice}`}</p>
          <div className="d-flex align-items-center">
            <span className="bg-primary-cus px-1 me-2 fw-bold text-light">
              {item.rating}
            </span>
            <span className="">{item.type}</span>
          </div>
        </div>
      </div>
    </div>
  ));

  // return
  return (
    <div className="container mb-5">
      <h3 className="fw-bolder mb-4">Homes guests love</h3>
      <div className="row row-cols-3 mb-2">{list}</div>
    </div>
  );
};

// export
export default ListHotel;
