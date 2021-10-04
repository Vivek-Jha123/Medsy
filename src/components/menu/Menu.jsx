import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#info">Medsy Modern</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#product">Medsy Minimal</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#items">Medsy Classic</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#items">FAQ</a>
        </li>

        <li onClick={()=>setMenuOpen(false)}>
          <a href="#items">Terms & Conditions</a>
        </li>
      </ul>
    </div>
  )
}
