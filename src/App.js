
import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import Headers from "./Header";

import Topbar from "./components/topbar/Topbar";
// import Info from "./components/info/Info";
// import Product from "./components/product/Product";
// import Items from "./components/items/Items";
import "./app.scss";
// import {useState} from "react";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
// import SwipeToSlide from "./components/swipetoslide/SwipeToSlide";
// import Slider2 from "./components/slider2/Slider2";
// import ItemSideBar from "./components/itemsidebar/ItemSideBar";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './About';
import Contact from './Contact';
// import Work from './Work';
import LastRouter from './LastRouter';
import Home from './Home';
import Header from "./Header";





function App() {

  // const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  const [menuOpen,setMenuOpen] = useState(false)
  // const [itemsidebarOpen,setItemSideBarOpen] = useState(false)
  return (

    
    <div className="app">

    <Router>
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    
    
    <Switch>
      <Route exact path='/' component={Home} />
      <Route  path='/about' component={About} />
      <Route  path='/contact' component={Contact} />
      <Route  path='/header' component={Header} />
      <Route  path='/LastRouter' component={LastRouter} />
    

 
     
      </Switch>
      
    </Router>
    <Footer/>
    
    </div>
  );
}

export default App;
