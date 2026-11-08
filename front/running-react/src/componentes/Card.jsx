function Card({ titulo, descripcion }) {
  return (
    <div className="distancia-card">
      <h3>{titulo}</h3>

      <p>{descripcion}</p>

      <button>INSCRIBIRME</button>
    </div>
  );
}

export default Card;