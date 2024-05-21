// eslint-disable-next-line no-unused-vars
import React from 'react';
import './daftar.css';

function Daftar() {
  return (
    <div className="App">
      <div className="container">
        <h1>Selamat Datang</h1>
        <br />
        <form>
          <div className="form-group">
            <label htmlFor="email">Alamat Email</label>
            <input type="email" className="form-control" id="email" placeholder="Masukkan alamat email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Kata Sandi</label>
            <input type="password" className="form-control" id="password" placeholder="Masukkan kata sandi" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">Buat saya tetap masuk</label>
          </div>
          <div className="form-group">
            <a href="#" className="btn btn-primary">Login</a>
          </div>
          <div className="form-group">
            <p>Belum Memiliki Akun? <a href="#">Daftar</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Daftar;