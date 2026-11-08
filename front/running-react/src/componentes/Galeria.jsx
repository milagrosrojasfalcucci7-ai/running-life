function Galeria() {
  return (
    <section id="galeria"> 
    <h2>Galeria </h2>
     <div className="grid-galeria">
        <img src={`${import.meta.env.BASE_URL}img/img1.jpg`} alt="Galería 1" />
        <img src={`${import.meta.env.BASE_URL}img/centro.jpg`} alt="Galería 2" />
        <img src={`${import.meta.env.BASE_URL}img/imagenx.jpg`} alt="Galería 3" />
        <img src={`${import.meta.env.BASE_URL}img/card2.jpg`} alt="Galería 4" />
        <img src={`${import.meta.env.BASE_URL}img/images.run.fem.jpg`} alt="Galería 5" />
        <img src={`${import.meta.env.BASE_URL}img/img6.jpg`} alt="Galería 6" />
      </div>
    </section>
  )
}
export default Galeria;