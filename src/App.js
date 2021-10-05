import Topbar from "./components/topbar/Topbar";
import Info from "./components/info/Info";
import Product from "./components/product/Product";
import Items from "./components/items/Items";
import "./app.scss";
import {useState} from "react";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import SwipeToSlide from "./components/swipetoslide/SwipeToSlide";
import Slider2 from "./components/slider2/Slider2";
import ItemSideBar from "./components/itemsidebar/ItemSideBar";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  const [itemsidebarOpen,setItemSideBarOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <SwipeToSlide/>
      <Info/>
      <Slider2/>
      <Items itemsidebarOpen={itemsidebarOpen} setItemSideBarOpen={setItemSideBarOpen}/>
      <ItemSideBar itemsidebarOpen={itemsidebarOpen} setItemSideBarOpen={setItemSideBarOpen}/>
      <Product/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
