// import React/Hook/Router...
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

// import CUSTOM HOOK
import useLocalStorage from "../../hooks/use-local-storage";

// import component
import NavBar from "./NavBar";
import FormContact from "./FormContact";
import Footer from "./Footer";

////////////////////
// function Component
function Layout() {
  // state cho USER đang login
  const [username, setUsername] = useState();

  // state cho KEY search hotels
  const [keySearchHotel, setKeySearchHotel] = useState({
    // địa điểm
    destination: "",

    // dateStart: Ngày nhận phòng - dateEnd: Ngày trả phòng
    dateStart: "",
    dateEnd: "",
    checkInDate: "", // string

    // số lượng phòng yêu cầu
    roomQuantity: 1,
  });

  // dùng Custom Hook làm việc với Local Storage
  const { get } = useLocalStorage();

  // lưu dữ liệu vào STORE khi tải trang với useEffect
  useEffect(() => {
    // lấy username từ Local Storage
    setUsername(get("username"));
  }, [setUsername, get]);

  // return
  return (
    <>
      <NavBar username={username} onLogout={setUsername} />
      <main>
        <Outlet
          context={{
            username,
            setUsername,
            keySearchHotel,
            setKeySearchHotel,
          }}
        />
      </main>
      <FormContact />
      <Footer />
    </>
  );
}

// export
export default Layout;
