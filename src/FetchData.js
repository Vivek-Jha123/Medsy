import "./items.scss"
import Medecine  from "../../assets/med.jpg";

import axios  from "axios";
import {useEffect,useState} from "react";

export default function Items({itemsidebarOpen, setItemSideBarOpen}) {
const[blogD,setblogD] = useState([])
useEffect( (e) =>{
        blogData() ;  
},[])
  const blogData = async e =>{
    var api = 'http://rohanpahwa71.pythonanywhere.com/blog/post/'
     await axios.get(api).then(res =>{
             var fetchData = res.data
             console.log('dxgfchjbklm;---------->',fetchData);
             setblogD(fetchData);
     })
     .catch(err =>console.log('something is wrong'))
  }   
  return (
          <div className="container">{
                  blogD.map(data=>(
                        <div className="items" >
                        <div className="photos">
                        <div>
                                <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/med.jpg" alt="" />
                                <h3>{data.id}</h3>
                                <p>{data.slug}</p>
                                </div>
                        </div>
                        
                        </div>    
                        ))
          }
    
    </div>
  )
}
