import Header from "../components/Header";

export default function Login() {
  return (
    <>
    <Header/>
        <div className="container-flex col-md-12 loginContainer justify-content-center">
          <div className="card logincard">
            <div className="card-body login">
              <div className="col-md-12 innercard">
                <img
                  src="/images/logos/amali.png"
                  width="200px"
                  height="50px"
                  className=" logo1"
                />

                <div className="input-group mb-3 justify-content-around">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-envelope" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="input-group mb-3 justify-content-around">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fa fa-key" />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
                <div className="">
                  <a href="#" className="btn btn-primary buttons">
                    Log In <i className="fe fe-circle" />
                  </a>
                  <a href="#" className="ml-3 forgotpaswrd">
                    Forgot Password?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
