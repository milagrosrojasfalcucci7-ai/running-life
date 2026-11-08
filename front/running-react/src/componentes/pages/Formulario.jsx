import { useState } from "react";
import "../../css/formulario.css";

function Formulario() {
 const [nombre, setNombre] = useState("");
 const [telefono, setTelefono] = useState("");
 const [email, setEmail] = useState("");
 const [distancia, setDistancia] = useState("");
 const [experiencia, setExperiencia] = useState("");
 const [comentario, setComentario] = useState("");
 const handleSubmit = (e) => {
  e.preventDefault();

  console.log({
  nombre,
  email,
  telefono,
  distancia,
  experiencia,
  comentario
});

};
const handleReset = () => {
  setNombre("");
  setEmail("");
  setTelefono("");
  setDistancia("");
  setExperiencia("");
  setComentario("");
};
  return (
    <section id="contacto">
      <h2>Inscripción</h2>

      <form onSubmit={handleSubmit}>
        <label>Nombre</label>
        <input
         type="text"
         value={nombre}
         onChange={(e) => setNombre(e.target.value)}
         />

        <label>Email</label>
        <input 
        type="email" 
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />

        <label>Teléfono</label>
        <input 
        type="tel" 
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)} 
        />

        <label>Distancia</label>
        
        <select
        value={distancia}
        onChange={(e) => setDistancia(e.target.value)}
        >
          <option value="">Seleccionar</option>
          <option value="21KM">21KM</option>
          <option value="50KM">50KM</option>
        </select>

        <label>Experiencia</label>

        <input 
        type="radio" 
        name="exp" 
        value="Principiante"
        checked={experiencia === "Principiante"}
        onChange={(e) => setExperiencia(e.target.value)}
        />
        Principiante

        <input 
        type="radio" 
        name="exp" 
        value="Avanzado"
        checked={experiencia === "Avanzado"} 
        onChange={(e) => setExperiencia(e.target.value)}
        />
        Avanzado

        <label>Comentario</label>

        <textarea
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
        ></textarea>
        <button type="submit">Enviar</button>
       <button type="button" onClick={handleReset}>Reset
       </button>
      </form>
    </section>
  );
}

export default Formulario;