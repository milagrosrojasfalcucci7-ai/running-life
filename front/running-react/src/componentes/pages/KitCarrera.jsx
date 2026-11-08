import "../../css/kit.style.css";

function KitCarrera() {
  return (
    <main>
      <h2 className="titulo-kit">KIT DE CARRERA</h2>

    <img
    alt="kit-img"
    src={`${import.meta.env.BASE_URL}img/kitcarrera.jpg`}
    />

      <p className="sponsors">
        <span>GU Energy</span> |
        <span>Gatorade</span> |
        <span>Nivea</span> |
        <span>Montagne</span> |
      </p>
    </main>
  );
}

export default KitCarrera;