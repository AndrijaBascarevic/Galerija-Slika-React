import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Galerija = () => {
  function importAll(r) {
    let Slike = {};
    r.keys().map((item, index) => { Slike[item.replace('./', '')] = r(item); });
    return Slike;
  }
  const Slike = importAll(require.context('./slike', false, /\.(png|jpe?g|svg)$/));
  if(document.getElementById("drugi").classList.contains('l1'))
  {
    return <>
    <div contentEditable="false" className='container'>
    <Card className='card col'>
      <div className='imgContainer'>
      <Card.Img className='img' variant='top' src={Slike['zemlja.png']} alt='Zemlja'/>
      </div>
      <div className='content'>
        <h1> Prva slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>

<Card className='card col'>
<div className='imgContainer'>
    <Card.Img className='img' variant='top' src={Slike['svemir.jpg']} alt='Svemir'/>
      </div>
      <div className='content'>
        <h1> Druga slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>

<Card className='card col'>
<div className='imgContainer'>
    <Card.Img className='img' variant='top' src={Slike['svemir br2.jpg']} alt='Svemir2'/>
      </div>
      <div className='content'>
        <h1> Treca slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>
    </div>


    <div contentEditable="false" className='container'>
    <Card className='card col'>
      <div className='imgContainer'>
      <Card.Img className='img' variant='top' src={Slike['svemir br3.jpg']} alt='Svemir3'/>
      </div>
      <div className='content'>
        <h1> Cetvrta slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>

<Card className='card col'>
<div className='imgContainer'>
<Card.Img className='img' variant='top' src={Slike['svemir br4.jpg']} alt='Svemir4'/>
      </div>
      <div className='content'>
        <h1> Peta slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>

<Card className='card col'>
<div className='imgContainer'>
<Card.Img className='img' variant='top' src={Slike['astronaut.jpg']} alt='Astronaut'/>
      </div>
      <div className='content'>
        <h1> Sesta slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>
    </div>
    </>
  } else
  {
    return <>
    
    <div contentEditable="true" className='container'>
    <Card className='card col'>
      <div className='imgContainer'>
      <Card.Img className='img' variant='top' src={Slike['zemlja.png']} alt='Zemlja'/>
      </div>
      <div className='content' onInput={e => console.log('Text inside div', e.currentTarget.textContent)}>
        <h1> Prva slika </h1>
        <p>  Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>

<Card className='card col'>
<div className='imgContainer'>
<Card.Img className='img' variant='top' src={Slike['svemir.jpg']} alt='Svemir'/>
      </div>
      <div className='content'>
        <h1> Druga slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>

<Card className='card col'>
<div className='imgContainer'>
<Card.Img className='img' variant='top' src={Slike['svemir br2.jpg']} alt='Svemir2'/>
      </div>
      <div className='content'>
        <h1> Treca slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>
    </div>


    <div contentEditable="true" className='container'>
    <Card className='card col'>
      <div className='imgContainer'>
      <Card.Img className='img' variant='top' src={Slike['svemir b3.jpg']} alt='Svemir 3'/>
      </div>
      <div className='content'>
        <h1> Cetvrta slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>

<Card className='card col'>
<div className='imgContainer'>
<Card.Img className='img' variant='top' src={Slike['svemir br4.jpg']} alt='Svemir 4'/>
      </div>
      <div className='content'>
        <h1> Peta slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>

<Card className='card col'>
<div className='imgContainer'>
  <Card.Img className='img' variant='top' src={Slike['astronaut.jpg']} alt='Astronaut'/>
      </div>
      <div className='content'>
        <h1> Sesta slika </h1>
        <p> Nesto o slici. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget velit tristique, sollicitudin leo viverra, suscipit neque. Aliquam ut facilisis urna, in pretium nibh. Morbi in leo in eros commodo volutpat ac sed dolor.</p>
      </div>
  <Card.Body>
  </Card.Body>
</Card>
    </div>
    </>
  } 
  };
  
  export default Galerija;
