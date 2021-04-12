
const Login = () => {
  return (
    <div className='container'>
      <form className='mt-5'>
        <h1 className='mb-4 text-center'>Register</h1>
        <div className="form-group mb-2">
          <label >Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group mb-2">
          <label >Password</label>
          <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" />
        </div>
        <div className="form-group mb-3">
          <label >Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

// test
export default Login
