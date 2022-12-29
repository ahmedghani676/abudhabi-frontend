const Loader = () => {
  return (
    <div className="col-12 text-center">
      <div
        className="spinner-border"
        style={{ color: '#002245' }}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Loader
