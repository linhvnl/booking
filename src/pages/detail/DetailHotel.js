// import React/Hook/Router...
import React from "react";

// function Component
const DetailHotel = (props) => {
  // lấy hotel detail từ props
  const hotel = props.hotel;

  // render thông tin tổng thể
  const renderBrief = (
    <div className="mb-3">
      <h2 className="text-body fw-bolder">{hotel.name}</h2>

      <div className="mb-2">
        <i className="fa fa-map-marker me-2"></i>
        <span className="text-secondary">{hotel.address}</span>
      </div>
      <p className="text-primary fw-bold fs-5 mb-2">
        Excellent location - {hotel.distance}m from center
      </p>
      <p className="text-success fw-bold fs-5">
        Book a stay over ${hotel.cheapestPrice} at this property and get a free
        airport taxi
      </p>
    </div>
  );

  // render hình ảnh
  const renderImage = (
    <div className="row row-cols-3 g-2">
      {hotel.photos.map((img, i) => (
        <div key={i} className="col">
          <img className="img-fluid" src={img} alt={"hotel" + i} />
        </div>
      ))}
    </div>
  );

  // render mô tả chi tiết
  const renderDescription = (
    <div className="row g-3">
      <div className="col-9 pe-4">
        <h2 className="text-body fw-bolder mb-3">{hotel.title}</h2>
        <p>{hotel.desc}</p>
      </div>

      <div className="col-3">
        <div className="p-3 bg-light-cus">
          <p className="fw-bold fs-3 mb-4">
            {`$${hotel.cheapestPrice} `}
            <span className="fw-normal">(1 night)</span>
          </p>
          <div className="bg-info rounded">
            <button
              type="button"
              className="btn bg-btn-cus py-2 text-light fw-bolder w-100"
              onClick={() => props.onSetShowForm((prevS) => !prevS)}
            >
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // return
  return (
    <div>
      <div className="container mt-4">{renderBrief}</div>
      <div className="container mb-5">{renderImage}</div>
      <div className="container mb-3">{renderDescription}</div>
    </div>
  );
};

export default DetailHotel;
