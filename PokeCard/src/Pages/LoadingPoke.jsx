function Loading() {
  return (
    <>
      <div
        className="min-vh-100 d-flex flex-column justify-content-center align-items-center"
        style={{ background: "#0E181F" }}
      >
        <img
          src="../public/loading.png"
          alt="loading"
          style={{ width: "15rem", height: "8rem" }}
        />
        <h5 className="text-white">Loading...</h5>
      </div>
    </>
  );
}

export default Loading;
