import React from 'react';
import Image from 'next/image';
import { Grid, Typography } from '@material-ui/core';


const SingleGridOne = ({gridData}) => {
    console.log(gridData)
    return (
        <div style={{padding: '100px', marginLeft: '40px'}}>
            <Grid container>
                <Grid item lg={6} style={{marginTop: '50px'}}>
                    <h4
                    style={{color: '#A5C559', marginLeft: '20px'}}
                    >
                    {gridData.title}
                    </h4>
                    <h2
                    style={{ marginLeft: '20px'}}
                    >{gridData.slogan}</h2>
                    <ul>
                        <li><h4>{gridData.bullet1}</h4></li>
                        <li><h4>{gridData.bullet2}</h4></li>
                        <li><h4>{gridData.bullet3}</h4></li>
                        <li><h4>{gridData.bullet4}</h4></li>
                        
                    </ul>
                    <button
                    style={{width: '300px', height: '50px', marginLeft: '25px'}}
                     className="btn-brand">
                        START YOUR 14 DAY FREE TRIAL
                    </button>
                </Grid>
                <Grid item lg={6}>
                    <Image src={gridData.imageURL} height="500px" width="500px" alt="header-image"></Image>
                </Grid>
            </Grid>
        </div>
    );
};

export default SingleGridOne;