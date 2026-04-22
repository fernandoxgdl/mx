import './Home.css'
import zh1 from '../assets/zh1.png';
import zm1 from '../assets/zm1.png';
import zh2 from '../assets/zh2.png';
import zm2 from '../assets/zm2.png';
import zh3 from '../assets/zh3.png';
import zm3 from '../assets/zm3.png';
import Slide from '../comp-slides/Slide';
import Video from '../comp-video/Video';

function Home() {
  return (
    


    <div className='cuerpo'>
      <Slide/>

      <h2>Elige los mejores productos con envio gratis 😁👍</h2>
      <ul>
        <li className='item'> <img src={zh1} alt='zapato hombre 1'/>  <div className='item-acciones'>
    
    
  </div></li>

        <li className='item'> <img src={zm1} alt='zapato de mujer 1'/>  <div className='item-acciones'>
    
    
  </div></li>

        <li className='item'> <img src={zh2} alt='zapato de hombre 2'/>  <div className='item-acciones'>
    
    
  </div></li>

        <li className='item'> <img src={zm2} alt='zapato de mujer 2'/>  <div className='item-acciones'>
    
    
  </div></li>

        <li className='item'> <img src={zh3} alt='zapato de hombre 3'/>  <div className='item-acciones'>
    
    
  </div></li>

        <li className='item'> <img src={zm3} alt='zapato de mujer 3'/>  <div className='item-acciones'>
    
    
  </div></li>
        
      </ul>

       <Video />
       
    </div>
    
  );
}
export default Home;