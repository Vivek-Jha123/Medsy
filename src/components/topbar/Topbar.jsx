import "./topbar.scss";

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")} >
      
        <div className="wrapper">
          <div className="left">
          <div className="navlogo" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
            <h1>MEDSY.</h1>
          </div>
          <div className="search-box">
          <i className="fa fa-search fa-2x" ></i>
          <input type="search" placeholder="Search Your Medecine Here" />
        
          </div>
          <div className="right">
          <i className="fas fa-phone-volume fa-2x"></i>
          <span>+91-9873565270</span>
          <i class="fa fa-shopping-bag fa-2x" aria-hidden="true"></i>
  

          </div>
        </div>
      
        
      
    </div>
  )
}
