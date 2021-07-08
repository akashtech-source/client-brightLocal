import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import Image from 'next/image';
import fivestar from '../../../public/Stars_4.5-1.png';

const CompanyStar = ({stars}) => {
    return (
        <div>
            <Grid container spacing={3}>
                {
                    stars.map(star => (
                        <Grid key={star._id} item lg={3}>
                    <div style={{textAlign: 'center'}}>
                    <Image src={star.imageURL} alt="leader" height="120px" width="250px"></Image>
                    <Image src={fivestar} alt="4.5 star" height="25px" width="180px"></Image>
                    <p style={{fontSize: '19px'}}><span style={{fontWeight: 700}}>4.5 stars</span> out of 5</p>
                    </div>
                </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default CompanyStar;