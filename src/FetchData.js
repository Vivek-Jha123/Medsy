import "./items.scss"
import Medecine  from "../../assets/med.jpg";
import Medecine2  from "../../assets/med2.jpg";
import Medecine3  from "../../assets/med3.jpg";
import Medecine4  from "../../assets/med4.jpg";
import Medecine5  from "../../assets/med5.jpg";
import Medecine6 from "../../assets/med6.jpg";
import Medecine7  from "../../assets/med7.jpg";
import Medecine8  from "../../assets/med8.jpg";
import Medecine9  from "../../assets/med9.jpg";
import Medecine10  from "../../assets/med10.jpg";
import Medecine11  from "../../assets/med11.jpg";
import Medecine12  from "../../assets/med12.jpg";
import Medecine13  from "../../assets/med13.jpg";
import Medecine14  from "../../assets/med14.jpg";
import Medecine15  from "../../assets/med15.jpg";
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
                                <img src={Medecine} alt="" />
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
