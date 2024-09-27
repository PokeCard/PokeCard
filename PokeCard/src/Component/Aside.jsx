function Aside({ level, titlePlayer }) {
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <h5>Bang Maju</h5>
        <img
          src="../public/character.png"
          alt="character"
          style={{ height: "18rem", width: "9rem" }}
        />
        <h6 className="mt-2">Level {level}</h6>
        <h6 style={{ fontWeight: "400" }}>{titlePlayer}</h6>
      </div>
    </>
  );
}

export default Aside;
