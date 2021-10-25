import React from 'react'
import  { useState } from "react";
import { useForm } from "react-hook-form";
// import Header from "./Header"


export default function SubmitForm() {

  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)}>
       
       <input {...register("firstName")} placeholder="First name" />
       <input {...register("lastName")} placeholder="Last name" />
       <select {...register("category")}>
         <option value="">Select...</option>
         <option value="A">Category A</option>
         <option value="B">Category B</option>
       </select>
 
       <p style={{marginLeft:300 }}>{result}</p>
       <input type="submit" />
     </form>
 
    </div>
  )
}
