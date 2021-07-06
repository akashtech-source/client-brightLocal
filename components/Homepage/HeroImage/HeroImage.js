import React, { useState } from 'react';
import Image from 'next/image';
import heroImg from '../../../public/SEO-Tools-BrightLocal (1).png';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import { useEffect } from 'react';
import PartnerData from './PartnerData';


const useStyles = makeStyles({
    

    heroTxt: {
        marginTop: '80px',
        fontWeight: 600,
    },
    allImg: {
        marginTop: 50,
    }
})

const HeroImage = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/partners')
        .then(res => res.json())
        .then(data => setPartners(data))
    }, [])
    const classes = useStyles();

    return (
        <div className="hero-image" style={{textAlign: 'center', marginTop: '40px'}}>
            <Image className={classes.img} src={heroImg} alt="hero-image"></Image>
            <Typography
            variant="h5"
            className= {classes.heroTxt}
            >
            Trusted by top brands, local businesses, and agencies alike
            </Typography>
            <PartnerData partners={partners} />
            
        </div>
    );
};

export default HeroImage;