import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import logo from '../../../public/brightlocal_logo.svg';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div style={{marginTop:'30px'}} className="nav-container">
      <div  style={{position: 'relative', top: '10px'}}>
        <Image src={logo} alt="123"></Image>
      </div>
      <div style={{display: 'flex', marginLeft: '100px'}}>
        <p>Feature</p>
        <p style={{marginLeft: '20px'}}>Build Citation</p>
        <p style={{marginLeft: '20px'}}>Solution</p>
        <p style={{marginLeft: '20px'}}>Pricing</p>
        <p style={{marginLeft: '20px'}}>Book a Demo</p>
        <p style={{marginLeft: '20px'}}>About Us</p>
        <p style={{marginLeft: '20px'}}>Bright Ideas</p>
      </div>
      <div style={{display: 'flex', marginLeft: '50px'}}>
        <p style={{marginLeft: '20px', fontWeight: 700, color: '#03abf8'}}>Log in</p>
        <button style={{height: '50px', marginLeft: '30px', marginTop: '1px'}} className="btn-brand">TRY FOR FREE</button>
      </div>
    </div>
  );
};

export default Navbar;