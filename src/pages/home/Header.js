// import React/Hook/Router...
import React from "react";

// import component
import HeaderFormSearch from "./HeaderFormSearch";

// function Component
const Header = function () {
  return (
    <div className="bg-primary-cus mb-5">
      <div className="container text-light p-3">
        <div className="mb-3">
          <h1 className="mb-3">A lifetime of discounts? It's Genius.</h1>
          <p>
            Get rewarded for your travels - unlock instant savings of 10% or
            more with a free account
          </p>
          <a className="btn rounded-0 bg-btn-cus text-light" href="#">
            Sign in / Register
          </a>
        </div>
        <HeaderFormSearch />
      </div>
    </div>
  );
};

// export
export default Header;
