function Carousel() {
  return (
    <div id="carouselExampleDark" className="carousel slide">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src={`${import.meta.env.BASE_URL}img/imgcentro.jpg`}
            className="d-block w-100"
            alt="slide1"
          />
        </div>

        <div className="carousel-item">
          <img
            src={`${import.meta.env.BASE_URL}img/centro.jpg`}
            className="d-block w-100"
            alt="slide2"
          />
        </div>

        <div className="carousel-item">
          <img
            src={`${import.meta.env.BASE_URL}img/running.feli.trail.jpg`}
            className="d-block w-100"
            alt="slide3"
          />
        </div>

      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}

export default Carousel;