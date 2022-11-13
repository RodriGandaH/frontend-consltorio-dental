import React from 'react';
import img_login from '../assets/images/login_img.jpg';
import img_happy from '../assets/images/happy.png';

const Login = () => {
  return (
    <>
      <section className="login py-5 bg-light">
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-7 text-center py-5">
              <img
                src={img_happy}
                alt=""
                className="img-fluid animate__animated animate__bounce animate__infinite"
                id="img_happy"
              />
              <h1 className="animate__animated animate__heartBeat">AliDent</h1>
              <form action="">
                <div className="form-row py-5 pt-5">
                  <div className="offset-1 col-lg-10">
                    <input
                      type="text"
                      placeholder="Usuario"
                      className="inp px-3"
                    />
                  </div>
                </div>
                <div className="form-row ">
                  <div className="offset-1 col-lg-10">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="inp px-3"
                    />
                  </div>
                </div>
                <div className="form-row py-5">
                  <div className="offset-1 col-lg-10">
                    <button className="btn1">Iniciar Sesión</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <img
                src={img_login}
                alt=""
                className="img-fluid"
                id="image-login"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
