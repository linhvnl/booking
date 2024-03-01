// import React/Hook/Router...
import React from "react";

// function Component
const SearchResult = (props) => {
  // map render content html
  const content = !props.result ? (
    // nếu chưa search
    <h5 className="text-center fw-bolder fs-4 mt-5">
      Input your key to search!
    </h5>
  ) : typeof props.result === "string" ? (
    // nếu search không có kết quả phù hợp
    <h5 className="text-center fw-bolder fs-4 mt-5">{props.result}</h5>
  ) : (
    // render kết quả
    props.result.map((item, i) => (
      <div key={i} className="card mb-4">
        <div className="container p-2">
          <div className="row g-3">
            <div className="col-3">
              <img
                className="img-fluid h-100"
                src={item.photos[0]}
                alt="search"
              />
            </div>

            <div className="col-6">
              <h5 className="text-primary fw-bolder fs-4 mb-2">
                <a
                  href={`/detail/${item._id}`}
                  className="text-decoration-none"
                >
                  {item.name}
                </a>
              </h5>
              <p className="mt-1 mb-2">{`${item.distance}m from center`}</p>
              <p className="btn btn-success fw-lighter p-0 mb-2">
                {item.featured ? "Has features" : "No features"}
              </p>
              <p className="fw-bold mb-2">{item.type}</p>
              <p className="mb-2">
                {item.rooms.map((r, i) => (
                  <span key={i}> • {r.title}</span>
                ))}
              </p>

              {item.featured ? (
                <div>
                  <p className="fw-bold text-success mb-2">Free cancellation</p>
                  <p className="text-success mb-0">
                    You can cancel later, so lock in this great price today!
                  </p>
                </div>
              ) : (
                <div>
                  <p className="placeholder d-block bg-white"></p>
                  <p className="placeholder d-block bg-white"></p>
                </div>
              )}
            </div>

            <div className="col-3">
              <div className="d-flex flex-column justify-content-between h-100">
                <div className="d-flex align-items-start justify-content-between">
                  <span className="fw-bold fs-5">
                    {item.rate === 5 ? "Exceptional" : "Excellent"}
                  </span>
                  <span className="bg-primary-cus p-1 fw-bold text-light">
                    {item.rating}
                  </span>
                </div>

                <div className="d-flex flex-column align-items-end">
                  <p className="fw-bold fs-3 mb-1">{`$${item.cheapestPrice}`}</p>
                  <p className="text-secondary mb-1">Includes taxes and fees</p>
                  <button
                    type="button"
                    className="btn bg-btn-cus p-2 text-light fw-bolder w-100"
                    onClick={() =>
                      window.location.replace(`/detail/${item._id}`)
                    }
                  >
                    See availability
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))
  );

  // return
  return <div className="col-9">{content}</div>;
};

// export
export default SearchResult;
