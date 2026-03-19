import logo from './assets/logo.png';


const Logo = () => {
  const divStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '80px',
    marginBottom: '5px',
    marginTop: '5px',
    borderRadius: '10px'
  };

  return  <div style={divStyle}></div>;

};
export default Logo