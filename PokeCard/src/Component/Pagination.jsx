import { useState } from "react";

const Pagination = ({ offset, setOffset, limit }) => {
  const [pagination, setPagination] = useState(1);
  const handleNext = () => {
    if (offset < 905) {
      setOffset((prev) => prev + limit);
      setPagination((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (offset > 0) {
      setOffset((prev) => prev - limit);
      setPagination((prev) => prev - 1);
    }
  };

  return (
    <div className="d-flex text-white gap-2 mt-3 justify-content-center mb-3 md-mb-0 align-items-center">
      <button
        onClick={handlePrevious}
        disabled={offset === 0}
        style={{ backgroundColor: "#152027" }}
        className="rounded text-white pb-1"
      >
        &lt;
      </button>
      <div className="rounded text-white pt-1">
        <h6>Page {pagination}</h6>
      </div>
      <button
        onClick={handleNext}
        disabled={offset >= 905}
        style={{ backgroundColor: "#152027" }}
        className="rounded text-white pb-1"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
