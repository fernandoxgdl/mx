import { useState, useEffect } from "react";
import "./Comentario.css";

function Comentarios() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
  });

  const [estado, setEstado] = useState(null);
  const [total, setTotal] = useState(0);

  const fetchTotal = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/comentario/total`,
      );
      const data = await res.json();
      setTotal(data.total);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTotal();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEstado("enviando");

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/comentario`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      if (res.ok) {
        setEstado("ok");
        setForm({
          nombre: "",
          telefono: "",
          mensaje: "",
        });

        fetchTotal();

      } else {
        setEstado("error");
      }
    } catch (err) {
      console.error(err);
      setEstado("error");
    }
  };

  return (
    <div className="comentario-main">

      <div className="comentario-container">
        <h2 className="comentario-titulo">Alguna duda?</h2>
        <p className="Comentario-subtitulo">
          Deja tu comentario y nos pondremos en contacto contigo lo antes
          posible.
        </p>

        <form className="comentario-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Escribe tu Nombre Aqui..!"
              required
            />
          </div>

          <div className="form-group">
            <label>Telefono</label>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              placeholder="Escribe tu Telefono Aqui..!"
              required
            />
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Dinos como ayudarte..!"
              rows="5"
              required
            />
          </div>

          <button
            type="submit"
            className="btn-enviar"
            disabled={estado === "enviando"}
          >
            {estado === "enviando" ? "Enviando..." : "Enviar comentario"}
          </button>

          {estado === "ok" && (
            <p className="mensaje-ok">!Comentario enviado con éxito!</p>
          )}
          {estado === "error" && (
            <p className="mensaje-error">
              Error al enviar el Comentario. Por favor, inténtalo de nuevo.
            </p>
          )}
        </form>
      </div>

      <div className="total-comentarios">
        <span className="contador-numero">{total}</span>
        <span className="contador-label">Comentarios Recibidos</span>
      </div>

    </div>
  );
}

export default Comentarios;
