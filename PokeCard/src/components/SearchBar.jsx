import { Button, InputGroup } from "react-bootstrap";

function SearchBar() {
  return (
    <>
      <div className="input-box col-4 d-flex mb-3 align-items-center">
        <h4 className="col-5 text-white">Pokemon List</h4>
        <input type="text" className="form rounded px-2" />
      </div>
    </>
  );
}

export default SearchBar;
