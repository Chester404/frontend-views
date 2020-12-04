import React from "react";
import Layout from "../components/Layout";

export default function profile() {
  return (
    <Layout>
      <div className="card profile-card mt-3 row">
        <div className="card-title col-md-12">Personal Information</div>
        {/* <div className="row"> */}
        <div className="card-img col-md-6">
          <div className="col-md-3">
            <img
              src="/images/userimg/userimg1.jpg"
              alt=""
              className="userimg"
            />
          </div>
          <div className="col-md-3">
            <p className="username">Chester Kofi</p>
            <p className="otherinfo">Hired just today</p>
          </div>
        </div>

        {/* </div> */}
      </div>
    </Layout>
  );
}
