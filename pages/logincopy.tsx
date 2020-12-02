import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

export default function Login() {
  return (
    <>
    <Header/>
            {/* <div className="container-flex col-md-12  justify-content-center"> */}
          <div className="logincard1">
            <div className="card-body login1">
              {/* <div className="col-md-12 innercard1"> */}
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
                  <a href="#" className="btn btn-primary buttons1">
                    Log In <i className="fe fe-circle" />
                  </a>
                  <a href="#" className="ml-3 forgotpaswrd1">
                    Forgot Password?
                  </a>
                </div>
              {/* </div> */}
            </div>
          </div>
        {/* </div> */}
      
    </>
  );
}
