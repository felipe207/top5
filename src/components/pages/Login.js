import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import LoginComponent from '../login-component/LoginComponent';

function Login() {

  return (
    <section className="w-full h-[70%] lg:h-screen  pt-44 lg:pt-56">
      <Header />
        <LoginComponent />
      <Footer />
    </section>
  );
}

export default Login;
