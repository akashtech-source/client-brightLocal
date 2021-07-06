import React from 'react';
import Image from 'next/image';
import { makeStyles, Grid } from '@material-ui/core';

const usesStyles = makeStyles({
    partner: {
        marginTop: '30px'
    }
})
const PartnerData = ({partners}) => {
    const classes = usesStyles();
    
    return (
        <div>
            <Grid className={classes.partner} container spacing={3}>
                {
                    partners.map(partner => (
                        <Grid item key={partner._id} xs={12} md={2}>
                            
                            <Image src={partner.imageURL} height="120px" width="150px" alt="23"></Image>
                               
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default PartnerData;