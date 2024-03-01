// import React/Hook/Router...
import React from "react";
import { useOutletContext } from "react-router-dom";

// import component
import FormLogin from "./FormLogin";

// function Component
function Login() {
  // sử dụng Context
  const { username } = useOutletContext();

  // return
  return (
    <>
      {/* nếu đang có user LOG IN thì không hiển thị form LOG IN */}
      {username ? (
        <h1 className="text-center py-5">Welcome {username}!</h1>
      ) : (
        <FormLogin />
      )}
    </>
  );
}

// export
export default Login;
