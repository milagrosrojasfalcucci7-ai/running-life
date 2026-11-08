import React from "react";
import "../../css/style.css";
import Galeria from "../Galeria";
import Card from "../Card";
import Carousel from "../Carousel";

function Home() {
  return (
    <>
      <Carousel />

      <section>
        <h1>Trail Running 20K</h1>
      </section>

      <section className="distancia-section">
        <h2>DISTANCIAS PARA CORREDORES</h2>

        <div className="distancia-container">
          <Card
            titulo="ULTRA 50KM"
            descripcion="La distancia máxima para quienes buscan ir más allá de sus límites. Senderos técnicos, desnivel exigente y una prueba mental y física inolvidable."
          />

          <Card
            titulo="TRAIL 21KM"
            descripcion="El equilibrio perfecto entre desafío y velocidad."
          />
        </div>
      </section>

      <Galeria />
    </>
  );
}

export default Home;