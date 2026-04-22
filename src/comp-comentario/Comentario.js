import  { useState, useEffect } from 'react';



 function Comentarios(){

    const [comentario, setComentario] = useState("");
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("comentarios"));
        if (data) setLista(data);
    },[]);

    useEffect(() => {
        localStorage.setItem("comentarios", JSON.stringify(lista));
    }, [lista]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!comentario.trim()) return;

        const nuevoComentario = {
            id: Date.now(),
            texto: comentario,
            fecha: new Date().toLocaleString()
        };

        setLista([nuevoComentario, ...lista]);
        setComentario("");
    };

    return (
        <div style={{ marginTop:'20px'}}>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={comentario}
                    onChange={(e) => setComentario(e.target.value)}
                    placeholder="Escribe tu comentario aquí..."
                    rows="4"
                    cols="50"
                />
                <br />
                <button type="submit" style={{marginTop:'10px', padding:'5px', borderRadius:'10px', width:'70px'}}>Enviar </button>
            </form>

            <ul>
                {lista.map((item) => (
                    <li key={item.id}>
                        <p>{item.texto}</p>
                        <small>{item.fecha}</small>
                    </li>
                ))}
            </ul>
        </div>
    );

    }



export default Comentarios;