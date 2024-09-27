import { FaSearch } from "react-icons/fa";

function SearchBar({ label }) {
  return (
    <>
      <form action="">
        <div className="input-box d-md-flex mb-3 align-items-center pt-4">
          <h4 className="col-7 col-md-5 text-white">{label}</h4>
          <div className="d-flex align-items-center gap-2">
            <input
              type="text"
              className="form rounded px-2"
              placeholder="Search..."
            />
            <button className="rounded" style={{ backgroundColor: "#152027" }}>
              <FaSearch className="text-white mb-1" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
