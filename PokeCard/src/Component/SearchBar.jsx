import { FaSearch } from "react-icons/fa";

function SearchBar({ label, handleChange, display }) {
  return (
    <>
      <form action="" onSubmit={handleChange}>
        <div className="input-box d-md-flex mb-3 align-items-center pt-4">
          <h4 className="col-7 col-md-5 text-white" style={{ width: "9rem" }}>
            {label}
          </h4>
          <div className="d-flex align-items-center gap-2">
            <input
              type="text"
              className="form rounded px-2"
              placeholder="Search..."
              style={{ display: `${display}` }}
            />
            <button
              className="rounded"
              style={{ backgroundColor: "#152027", display: `${display}` }}
            >
              <FaSearch className="text-white mb-1" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
