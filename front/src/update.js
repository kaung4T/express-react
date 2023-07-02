import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, useParams, useNavigate} from 'react-router-dom';


function Update() {

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const {id} = useParams()
  const navigate = useNavigate()

  function submit (e) {
    e.preventDefault()
      axios.put("/update/" + id, {name, price})
        .then( (response) => {
            console.log(response.data)
            navigate("/")
          } )
        .catch( (error) => {console.log(error)} ) 
  }


  return (
    <div className='item_form'>

    <form onSubmit={submit}>
        <label>Name</label>
        <input type='text' onChange={ (e) => {setName(e.target.value)} } required />

        <label>price</label>
        <input type='text' onChange={ (e) => {setPrice(e.target.value)} } required />
        <br></br>
        <br></br>

        <button type='submit'>Submit</button>
    </form>
    
    </div>
  );
}

export default Update;
