import { Button, InputGroup } from "react-bootstrap";

function SearchBar({ label }) {
  return (
    <>
      <div className="input-box col-4 d-flex mb-3 align-items-center pt-4">
        <h4 className="col-5 text-white">{label}</h4>
        <input type="text" className="form rounded px-2" />
      </div>
    </>
  );
}

export default SearchBar;
