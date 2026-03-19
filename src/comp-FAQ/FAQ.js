import { BrowserRouter } from "react-router-dom"
import "./FAQ.css"
import { Link } from "react-router-dom"


function FAQ() {
  return (
    <footer >
     
        
      <Link to="/preguntas" >
        <button className="linki"> FAQ's</button>
      </Link>
       <p>© 2026 Tu Tienda</p>
    </footer>
  )
}

export default FAQ