// import React/Hook/Router...
import React from "react";

// function Component
const FormContact = function () {
  // return
  return (
    <div className="bg-primary-cus py-4 mx-2 mb-4">
      <div className="container text-light text-center p-3">
        <h1 className="fw-bold">Save time, save money!</h1>
        <p className="fs-5 my-3">
          Sign up and we'll send the best details to you
        </p>

        <form>
          <div className="d-flex justify-content-center align-items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="border-0 rounded shadow p-3 me-2"
              style={{ width: "34%" }}
            />
            <button className="btn rounded bg-btn-cus p-3 text-light shadow-lg">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// export
export default FormContact;
