import React from 'react';
import Image from 'next/image';
import heroImg from '../../../public/SEO-Tools-BrightLocal (1).png';
import { Typography, makeStyles, Grid } from '@material-ui/core';
import hilton from '../../../public/hilton-1.png';
import ikea from '../../../public/ikea.png';
import nandos from '../../../public/nandos.png';
import valvo from '../../../public/valvoline-1.png';
import roto from '../../../public/roto-rooter.png';
import iPropspect from '../../../public/iprospect.png';

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
            <Grid container
            className={classes.allImg}
            >
                <Grid item lg={2}>
                    <Image src={hilton} alt="hilton"></Image> 
                </Grid>
                <Grid item lg={2}>
                    <Image src={ikea} alt="hilton"></Image> 
                </Grid>
                <Grid item lg={2}>
                    <Image src={nandos} alt="hilton"></Image> 
                </Grid>
                <Grid item lg={2}>
                    <Image src={valvo} alt="hilton"></Image> 
                </Grid>
                <Grid item lg={2}>
                    <Image src={roto} alt="hilton"></Image> 
                </Grid>
                <Grid item lg={2}>
                    <Image src={iPropspect} alt="hilton"></Image> 
                </Grid>
            </Grid>
        </div>
    );
};

export default HeroImage;