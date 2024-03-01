// import React/Hook/Router...
import React from "react";
import { useLoaderData } from "react-router-dom";

// import component
import Header from "./Header";
import ListCity from "./ListCity";
import ListHotelType from "./ListHotelType";
import ListHotel from "./ListHotel";

// function Component
const Home = () => {
  // danh sách hotels trả về từ Server
  const { hotelByCity, hotelByType, hotelTop3Rating } = useLoaderData();

  // return
  return (
    <>
      <Header />

      {/* Số lượng các khách sạn theo khu vực: Hà Nội, HCM và Đà Nẵng. */}
      <ListCity hotelByCity={hotelByCity} />

      {/* Số lượng khách sạn theo từng loại. */}
      <ListHotelType hotelByType={hotelByType} />

      {/* Top 3 khách sạn có rating cao nhất */}
      <ListHotel hotels={hotelTop3Rating} />
    </>
  );
};

export default Home;

/////////////////////
// LOADER
// hàm loader để lấy dữ liệu HOTELS từ API
export async function loader({ request, params }) {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT_ORIGIN}/client/hotels`);
}
