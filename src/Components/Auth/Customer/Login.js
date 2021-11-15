import React from "react";

const Login = () => {
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ bordeRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Customer Login
                    </p>

                    <form className="mx-1 mx-md-4 ">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0 border border-dark">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Email"
                          />
                          {/* <label className="form-label" for="form3Example3c">
                            Your Email
                          </label> */}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4 ">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0  input-group border border-dark">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            placeholder="password"
                            data-toggle="password"
                          />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <i
                                className="fa fa-eye"
                                style={{ height: "24px" }}
                              ></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                          style={{ marginLeft: "13px" }}
                        />
                        <label className="form-check-label" for="form2Example3">
                          I agree all statements in{" "}
                          <a href="#!">Terms of service and policy</a>
                        </label>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <input
                          type="button"
                          id="form3Example1c"
                          className="form-control btn border border-dark"
                          value="Submit"
                          style={{
                            backgroundColor: "#CC99FF",
                            marginLeft: "36px",
                          }}
                        />
                      </div>
                    </form>
                    <div
                      className="d-flex flex-row align-items-center mb-4"
                      style={{ marginLeft: "39px" }}
                    >
                      <div className="form-outline flex-fill mb-0 ">
                        <p style={{ marginLeft: "42px" }}>
                          Don't have an account? <a href="/login"> Sign-Up</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="../img/assessment-pic.jpg"
                      className="img-fluid"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
