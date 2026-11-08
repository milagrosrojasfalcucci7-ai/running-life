import "./App.css"
function App() {
  return (
    <>
      <header>
        <nav className="menu-nav">
          <img
            className="logo"
            src={`${import.meta.env.BASE_URL}img/logo2.jpg`}
            alt="logo"
          />

          <ul className="lista-menu">
            <li>
              <a href="#RECORRIDO">RECORRIDO</a>
            </li>

            <li>
              <a href="kitcarrera.html">KIT CARRERA</a>
            </li>

            <li>
              <a href="formulario.html">FORMULARIO</a>
            </li>

            <li>
              <a href="#GALERIA">GALERIA</a>
            </li>
            <li>
              <a href="Planes">PLANES</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default App;