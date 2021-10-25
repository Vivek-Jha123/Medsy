import React from 'react'
import axios  from "axios";
import {useEffect,useState} from "react";
import Medecine  from '../src/assets/med.jpg';
import '../src/components/about.scss';

export default function About() {
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
          <div className="about-container">{
                  blogD.map(data=>(
                        <div className="about-items" >
                        <div className="about-photo">
                        <div className="image">
                                <img src="https://raw.githubusercontent.com/Vivek-Jha123/Medsy/main/src/assets/med.jpg" alt="" />
                                <h3>{data.title}</h3>
                                <p>{data.slug}</p>
                                <p>{data.body_text}</p>
                                </div>
                        </div>
                        
                        </div>    
                        ))
          }
    
    </div>
  )
}
