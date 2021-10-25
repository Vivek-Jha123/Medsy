import "./itemsidebar.scss";
import Medecine  from "../../assets/med.jpg";


export default function ItemSideBar({itemsidebarOpen, setItemSideBarOpen}) {
  return (
    <div className={"itemsidebar " + (itemsidebarOpen && "active")} >
         <h2>Details</h2>
          <div className="cart" onClick={()=>setItemSideBarOpen(!itemsidebarOpen)}>
            <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/med.jpg" alt="" />
            <h3>$5</h3>
            <p>Amino-D-Tox</p>
            <span>capsules . 30 piece</span>
            <p>More Details</p>

            <button>Add To Cart</button>
          </div>
          
        </div>
    
  )
}
