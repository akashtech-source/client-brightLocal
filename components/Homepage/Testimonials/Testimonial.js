import React from 'react';
import Image from 'next/image';
import { makeStyles,Typography, Grid } from '@material-ui/core';
import quote from '../../../public/quote_marks.svg';


const usesStyles = makeStyles({
    testimonial: {
        marginTop: '30px',
        padding: '30px',
    }
})
const testimonialData = ({testimonials}) => {
    const classes = usesStyles();
    
    return (
        <div style={{position: 'relative', left: '150px', top: '30px'}}>
            <Grid className={classes.testimonial} container spacing={3}>
                {
                    testimonials.map(testimonial => (
                        <Grid item key={testimonial._id} lg={3}>
                    <div><Image src={testimonial.imageURL} height="500px" width="500px" alt="user 1"></Image></div>
                    <div className="bg-container">
                        <div className="testimonial-text">
                            <Image src={quote} alt="quote"></Image> 
                            <Typography className={classes.text}>
                            {testimonial.quote}
                            </Typography>
                            <div className="user-data">
                            <small>{testimonial.name}</small>
                            <Typography className={classes.text}>{testimonial.position}</Typography>
                            </div>
                        </div>
                    </div>
                </Grid>
                    ))
                }
            </Grid>
        </div>
    );
};

export default testimonialData;