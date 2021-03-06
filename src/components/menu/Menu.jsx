import "./menu.scss";
import {Link} from "react-router-dom"

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/about">About</Link>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/contact">Contact</Link>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/header">Form</Link>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <Link to="/LastRouter">Terms & Conditions</Link>
        </li>
      </ul>
    </div>
  )
}
