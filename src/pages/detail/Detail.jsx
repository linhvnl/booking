// import React/Hook/Router...
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

// import component
import DetailHotel from "./DetailHotel";
import FormBooking from "./FormBooking";

// function Component
const Detail = () => {
  // state ẩn/hiện Form Booking
  const [showForm, setShowForm] = useState(false);

  // a hotel detail trả về từ Server
  const hotel = useLoaderData();

  // return
  return (
    <>
      <DetailHotel hotel={hotel} onSetShowForm={setShowForm} />
      {showForm && <FormBooking hotel={hotel} />}
    </>
  );
};

export default Detail;

/////////////////////
// hàm loader để lấy dữ liệu 1 HOTEL từ API
export async function loader({ request, params }) {
  // lấy id của hotel từ params
  const hotelID = params.hotelID;

  // fetch dữ liệu
  return fetch(
    `${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/client/hotel/` + hotelID
  );
}
