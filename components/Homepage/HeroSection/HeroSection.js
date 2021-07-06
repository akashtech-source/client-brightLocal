import React from 'react';
import localSeo from '../../../public/Local-SEO-Tools.svg'
import Image from 'next/image';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    heroText: {
        fontWeight: 600,
        marginBottom: 20,

    }
})

const HeroSection = () => {
    const classes = useStyles();

    return (
        <div style={{textAlign: 'center',
        marginTop: '40px'
        }}>
            <Image src={localSeo} alt="localseo"></Image>
            <h3 className="slogan">Local SEO Tools</h3>
            <Typography
            variant="h2"
            className={classes.heroText}
            >
            An all-in-one platform to monitor, audit, and <br/> improve local SEO
            </Typography>
            <Typography
            variant="h6"
            >
                Save time and make smarter decisions with BrightLocal.
            </Typography>
            <button className="btn-brand">TRY FOR FREE</button>
        </div>
    );
};

export default HeroSection;