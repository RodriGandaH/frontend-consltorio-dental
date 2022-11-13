import React, { useState } from 'react';
import img_login from '../assets/images/login_img.jpg';
import img_happy from '../assets/images/happy.png';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim().length === 0 || password.trim().length === 0) {
      setError(true);
    }
  };

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
              <form onSubmit={handleSubmit}>
                <div className="form-row py-5 pt-5">
                  <div className="offset-1 col-lg-10">
                    <input
                      onChange={(e) => setUser(e.target.value)}
                      type="text"
                      placeholder="Usuario"
                      className="inp px-3"
                    />

                    {error && user.length <= 0 ? (
                      <label id="error">El campo Usuario es obligatorio</label>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className="form-row ">
                  <div className="offset-1 col-lg-10">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Contraseña"
                      className="inp px-3"
                    />
                    {error && password.length <= 0 ? (
                      <label id="error">
                        El campo Contraseña es obligatorio
                      </label>
                    ) : (
                      ''
                    )}
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
