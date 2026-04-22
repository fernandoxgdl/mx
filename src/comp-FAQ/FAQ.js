
import "./FAQ.css"
import { Link } from "react-router-dom"


function FAQ() {
  return (
    <footer >
     
        
      <Link to="/preguntas" >
        <button className="linki"> FAQ's</button>
      </Link>
       <p><span className="copy">© 2026 Moda MX</span></p>
    </footer>
  )
}

export default FAQ;