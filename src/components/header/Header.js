import React from "react";
import './Header.css';

const Header = () => {

  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a className="link-home" href="/">
          <h1 style={styles.logo}>Pine Music</h1>
        </a>

        {token ? (
          <div className="user-info">
            <h1>Olá, {name}</h1>

            <a className="link-musicas" href="/musicas">
              <h1 >Gerenciar Músicas</h1>
            </a>
            <a href="/logout">
              <button style={styles.loginButton}>Logout</button>
            </a>
          </div>
        ) : (
          <a href="/login">
            <button style={styles.loginButton}>Login</button>
          </a>
        )}

      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#000", // Fundo preto
    color: "#fff",
    padding: "10px 20px",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.5)",
    position: "fixed", // Fixa no topo
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 1000,
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logo: {
    fontSize: "1.5rem",
    margin: 0,
  },
  loginButton: {
    backgroundColor: "#212121",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
    border: "1px solid #fff",
  },
};

// Efeito hover
styles.loginButton[':hover'] = {
  backgroundColor: "#1558c1",
};

export default Header;
