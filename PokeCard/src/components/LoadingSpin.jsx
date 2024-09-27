import Spinner from 'react-bootstrap/Spinner';

const LoadingSpin = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center my-5'  >
      <Spinner animation="border" role="status">
        <div className="visually-hidden">Loading...</div>
      </Spinner>
      <p>Loading...</p>
    </div>
  )
}

export default LoadingSpin
