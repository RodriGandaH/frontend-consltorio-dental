import React, { useState } from 'react';
import img_login from '../assets/images/login_img.jpg';
import img_happy from '../assets/images/happy.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
  /* const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.trim().length === 0 || password.trim().length === 0) {
      setError(true);
    }
    if (user && password) {
      console.log('user: ', user);
      console.log('password: ', password);
    }
  }; */

  const history = useNavigate();

  const [loginInput, setLogin] = useState({
    email: '',
    password: '',
    error_list: [],
  });

  const handleInput = (e) => {
    e.persist();
    setLogin({ ...loginInput, [e.target.name]: e.target.value });
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: loginInput.email,
      password: loginInput.password,
    };
    axios.get('/sanctum/csrf-cookie').then((response) => {
      axios.post(`api/login`, data).then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem('auth_token', res.data.token);
          localStorage.setItem('auth_name', res.data.username);
          history('/home');
        } else if (res.data.status === 401) {
          swal('Error!', res.data.message, 'error');
          console.log(res.data);
        } else {
          setLogin({ ...loginInput, error_list: res.data.validation_errors });
        }
      });
    });
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
              <form onSubmit={loginSubmit}>
                <div className="form-row py-5 pt-5">
                  <div className="offset-1 col-lg-10">
                    <input
                      //onChange={(e) => setUser(e.target.value)}
                      onChange={handleInput}
                      value={loginInput.email}
                      //type="email"
                      name="email"
                      placeholder="Email"
                      className="inp px-3"
                    />

                    {/* {error && user.length <= 0 ? (
                      <label id="error">El campo Usuario es obligatorio</label>
                    ) : (
                      ''
                    )} */}
                    <label id="error">{loginInput.error_list.email}</label>
                  </div>
                </div>
                <div className="form-row ">
                  <div className="offset-1 col-lg-10">
                    <input
                      //onChange={(e) => setPassword(e.target.value)}
                      onChange={handleInput}
                      value={loginInput.password}
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="inp px-3"
                    />
                    {/*  {error && password.length <= 0 ? (
                      <label id="error">
                        El campo Contraseña es obligatorio
                      </label>
                    ) : (
                      ''
                    )} */}
                    <label id="error">{loginInput.error_list.password}</label>
                  </div>
                </div>
                <div className="form-row py-5">
                  <div className="offset-1 col-lg-10">
                    <button type="submit" className="btn1">
                      Iniciar Sesión
                    </button>
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
