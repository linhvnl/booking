// import React/Hook/Router...
import React from "react";
import { useOutletContext } from "react-router-dom";

// import component
import FormSignUp from "./FormSignUp";

// function Component
function SignUp() {
  // sử dụng Context
  const { username } = useOutletContext();

  // return
  return (
    <>
      {/* nếu đang có user LOG IN thì không hiển thị form SIGN UP */}
      {username ? (
        <h1 className="text-center py-5">Welcome {username}!</h1>
      ) : (
        <FormSignUp />
      )}
    </>
  );
}

// export
export default SignUp;
