import './Redes.css';
import face from "../assets/face.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitch from "../assets/twitch.svg";

 function Redes () {
 return(
<div className='container'>

<div className='icono'>
     <a href="https://www.facebook.com/" target="_blank">
        <img className='face' src={face} alt="facebook"/>
      </a>
</div>


<div className='icono'>
<a href='https://www.instagram.com/' target='_blank'>
<img className='insta' src={instagram} alt='instagram'/>
</a>
</div>

<div className='icono'>
    <a href='https://www.twitch.tv/' target='_blank'>
<img className='twitch' src={twitch} alt='twitch'/>
</a>
</div>

<div className='icono'>
<a href='https://mx.linkedin.com/' target='_blank'>
<img className='link' src={linkedin} alt='linkedin'/>
</a>
</div>

</div>
 );
}
export default Redes;