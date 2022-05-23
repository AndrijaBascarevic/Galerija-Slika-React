import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import {token} from './credent/Tokeni';
import { Link } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    var g=0;
    for(var i=0;i<token.length;i=i+2)
    {
      if(inputs.username==token[i].title&&inputs.pass==token[i+1].title)
      {
        const log = document.getElementById('prvi').classList.add('l1');
        const log1 = document.getElementById('drugi').classList.remove('l1');
        const log2 = document.getElementById('loginform').classList.add('l1');
        alert("USPESNO ULOGOVANJE!" + "\n" + "\n" + "Dobro dosli " + inputs.username);
        break;
      } else
      {
        g++;
      }
      if(g==token.length/2)
      {
        alert("Pogresna lozinka ili username!");
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} id='loginform'>
      <div class="form-group">
        <label for="username" className='labels'>Enter your name: </label>
      <input type="text" id="username" name='username' class="form-control" placeholder="Username..." value={inputs.username || ""} onChange={handleChange}/>
      </div>
      <div class="form-group">
        <label for="password" className='labels'>Enter your password: </label>
        <input type="password" id='pass' name="pass" class="form-control" placeholder="Sifra..." value={inputs.pass || ""} onChange={handleChange}/>
        </div>
        <br></br>
        <button type="submit" class="btn btn-primary form-control">Log In</button>
    </form>
  )
  };
  
  export default Login;
