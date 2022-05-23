import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Galerija = () => {
  if(document.getElementById("drugi").classList.contains('l1'))
  {
    return <>
    <div contentEditable="false" className='container'>
    <Card className='card col'>
      <div className='imgContainer'>
      <Card.Img className='img' variant="top" src={require('./slike/zemlja.png')}/>
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
      <Card.Img className='img' variant="top" src={require('./slike/svemir.jpg')} />
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
      <Card.Img className='img' variant="top" src={require('./slike/svemir br2.jpg')} />
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
      <Card.Img className='img' variant="top" src={require('./slike/astronaut.jpg')} />
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
      <Card.Img className='img' variant="top" src={require('./slike/svemir br3.jpg')} />
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
      <Card.Img className='img' variant="top" src={require('./slike/svemir br4.jpg')} />
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
      <Card.Img className='img' variant="top" src={require('./slike/zemlja.png')}/>
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
      <Card.Img className='img' variant="top" src={require('./slike/svemir.jpg')} />
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
      <Card.Img className='img' variant="top" src={require('./slike/svemir br2.jpg')} />
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
      <Card.Img className='img' variant="top" src={require('./slike/astronaut.jpg')} />
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
      <Card.Img className='img' variant="top" src={require('./slike/svemir br3.jpg')} />
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
      <Card.Img className='img' variant="top" src={require('./slike/svemir br4.jpg')} />
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