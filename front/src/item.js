import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Item() {

  const [data, setData] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  useEffect( () => {
    axios.get("/item")
      .then( (response) => {setData(response.data)})
  } , [])

  function submit () {
      axios.post("/create_item", {name, price})
        .then( (response) => {console.log(response.data)} )
        .catch( (error) => {console.log(error)} ) 
  }

  function delete_item (id) {
      axios.post("/delete/" + id)
        .then( (response) => {console.log(response.data)} )
        .catch( (error) => {console.log(error)} ) 
  }

  return (
    <div className='item_form'>

    <form onSubmit={submit}>
        <label>Name</label>
        <input type='text' onChange={ (e) => {setName(e.target.value)} } required />

        <label>price</label>
        <input type='number' onChange={ (e) => {setPrice(e.target.value)} } required />
        <br></br>
        <br></br>

        <button type='submit'>Submit</button>
    </form>

    {
      data.map( (d, i) => (
        <div>
          <h4 key={i}>{d.name}, {d.price}</h4>

          <form onSubmit={ () => {delete_item(d.id)} }>
              <button>Delete</button>
          </form>
          <Link to={`/update/${d.id}`}>Update</Link>
        </div>
      )
      )
    }


    </div>
  );
}

export default Item;
