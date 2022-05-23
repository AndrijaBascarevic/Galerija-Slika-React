import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';


const Contact = () => {
  const [inputs, setInputs] = useState({});
  if (document.getElementById("drugi").classList.contains('l1'))
  {
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Poruka poslata");
  }
    return <>
      <form onSubmit={handleSubmit} id='contactforma'>
      <div class="form-group">
      <label for="Ime" className='labels'> Unesi svoje ime:</label>
      <input type="text" class="form-control" id="Ime" placeholder="Andrija Bascarevic" value={inputs.name || ""} onChange={handleChange}></input>
      </div>
      <div class="form-group">
      <label for="Poruka" className='labels'> Unesi poruku: </label>
      <textarea class="form-control" id="Poruka" rows="3" placeholder='Poruka...'></textarea>
      </div>
      <br></br>
      <button type="submit" class="btn btn-primary form-control">Submit</button>
    </form>
    </>
  } else
  {
    return <>
      <h1 className='obavestenje'> Vi ste admin ovog sajta! </h1>
    </>
  }
  };
  
  export default Contact;