import './Home.css'
import zh1 from '../assets/zh1.png';
import zm1 from '../assets/zm1.png';
import zh2 from '../assets/zh2.jpg';
import zm2 from '../assets/zm2.png';
import zh3 from '../assets/zh3.png';
import zm3 from '../assets/zm3.png';

function Home() {
  return (
    <div className='cuerpo'>
      <h2>Elige los mejores productos</h2>
      <ul>
        <li className='item'> <img src={zh1} alt='zapato hombre 1'/> $ 4,000</li>

        <li className='item'> <img src={zm1} alt='zapato de mujer 1'/>$ 4,000</li>

        <li className='item'> <img src={zh2} alt='zapato de hombre 2'/>$ 4,000</li>

        <li className='item'> <img src={zm2} alt='zapato de mujer 2'/>$ 4,000</li>

        <li className='item'> <img src={zh3} alt='zapato de hombre 3'/>$ 4,000</li>

        <li className='item'> <img src={zm3} alt='zapato de mujer 3'/>$ 4,000</li>
        
      </ul>
    </div>
  );
}
export default Home;