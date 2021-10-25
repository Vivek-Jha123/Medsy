import React from 'react'
import axios  from "axios";
import {useEffect,useState} from "react";
// import Medecine  from '../src/assets/med.jpg';
import '../src/components/contact.scss';

export default function Contact() {
  const[blogD,setblogD] = useState([])
useEffect( (e) =>{
        blogData() ;  
},[])
  const blogData = async e =>{
    var api = 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-21&sortBy=publishedAt&apiKey=6bb7d73fcb4645ae988628774dc2c4ca'
     await axios.get(api).then(res =>{
             var fetchData = res.data.articles
             console.log('api222222;---------->',fetchData);
             setblogD(fetchData);
     })
     .catch(err =>console.log('something is wrong'))
  }   
  return (
          <div className="contact-container">{
                  blogD.map(data=>(
                        <div className="contact-items" >
                        <div className="contact-photo">
                        <div className="image">
                                <img src={data.urlToImage} alt="" />
                                <h3>{data.author}</h3>
                                <p>{data.content}</p>
                                <p>{data.description}</p>
                                </div>
                        </div>
                        
                        </div>    
                        ))
          }
    
    </div>
  )
}
