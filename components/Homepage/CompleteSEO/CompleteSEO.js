import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import Table from './Table';

const useStyles = makeStyles({
    title: {
        marginBottom: 20,
    },
    price: {
        marginBottom: 15,
    }
})

const CompleteSEO = () => {
    const classes = useStyles();

    return (
        <div>
            <Typography
            variant="h4"
            align="center"
            className={classes.title}
            >
            The most complete and cost-effective set of <br /> tools to tackle local SEO
            </Typography>
            <Typography align="center" className={classes.price}>
            From just $1.50 per location per month!
            </Typography>
            <div style={{textAlign: 'center'}}>
            <small>(Based on tracking 50 locations on our SEO Pro plan – just $79/month)</small>
            </div>
                <div style={{padding: '100px'}}>
                 <Table />
                </div>
                <div style={{display: 'flex', color: 'white', alignItems: 'center', justifyContent: 'center',
            marginLeft: '200px', padding: '30px' }} className="trial">
                    <div style={{marginTop: '40px', marginRight: '70px'}}>
                    <Typography
                    variant="h5"
                    color="white"
                    >
                        Try BrightLocal free for 14 days
                    </Typography>
                    <Typography>
                        All feature.Unlimited access.No card required
                    </Typography>
                    </div>
                    <div style={{marginLeft: '30px'}}>
                        <button className="btn-brand">START YOUR TRIAL</button>
                    </div>
                </div>
        </div>
    );
};

export default CompleteSEO;