import { Grid, Box, Card } from '@material-ui/core';
import React, { useState } from 'react';
import Image from 'next/image';
import image1 from '../../../public/tool.png'
import image2 from '../../../public/aduit.png'
import image3 from '../../../public/monitor.png'
import image4 from '../../../public/view.png'
import image5 from '../../../public/label.jpg.png'
import image6 from '../../../public/location.png'
import image7 from '../../../public/gmb.png'
import image8 from '../../../public/connect.png'
import user from '../../../public/nielson-hall-iprospect.png';
import star from '../../../public/Stars_4.8-1.png';
import map from '../../../public/bl-icon-green.svg';
import { useEffect } from 'react';

const OurTools = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data[0]));
    },[])
    return (
        <section className="tool-container">
            <h1 className="headerOne" style={{textAlign: 'center'}}>
                Tools that help you rank higher and grow your local search visibility
            </h1>
            <div style={{marginLeft: '2px'}}>
                <Grid container>
                    <Grid item lg={7}>

                    <div style={{display: 'flex', marginTop: '50px', marginBottom: '150px', textAlign: 'center'}}>
                        <div>
                            <Image src={image1} alt="123"></Image>
                            <h4>Track local ranking</h4>
                        </div>
                        <div style={{marginLeft: '20px'}}>
                            <Image src={image2} alt="123"></Image>
                            <h4>Audit citations</h4>
                        </div>
                        <div style={{marginLeft: '20px'}}>
                            <Image src={image3} alt="123"></Image>
                            <h4>Monitor & grow reviews</h4>
                        </div>
                        <div style={{marginLeft: '20px'}}>
                            <Image src={image4} alt="123"></Image>
                            <h4>View & reply to reviews</h4>
                        </div>
                        
                    </div>
                    
                    <div style={{display: 'flex', marginTop: '-100px', textAlign: 'center'}}>
                        <div>
                            <Image src={image5} alt="123"></Image>
                            <h4>White-label reporting</h4>
                        </div>
                        <div style={{marginLeft: '20px'}}>
                            <Image src={image6} alt="123"></Image>
                            <h4>Multi-Location reporting</h4>
                        </div>
                        <div style={{marginLeft: '20px'}}>
                            <Image src={image7} alt="123"></Image>
                            <h4>Integrate GMB Insights</h4>
                        </div>
                        <div style={{marginLeft: '20px'}}>
                            <Image src={image8} alt="123"></Image>
                            <h4>Connect Google Analytics</h4>
                            <button 
                        style={{position: 'inherit',
                        height: '70px', width: '200px'
                    }} 
                        className="btn-brand">
                            START YOUR TRIAL <br />
                            No card needed
                        </button>
                        </div>
                        
                    </div>
                
                        
                    </Grid>
                    
                    <Grid item lg={4}
                    
                    >
                        <Card className="ceo">
                            <div style={{textAlign: 'center'}}>
                                <h2 style={{color: '#a5c559',
                                }}>
                                <i>`{review.quote}`</i>
                                </h2>
                                <Image src={user} alt="23"></Image>
                                <h4 style={{color: 'grey'}}>{review.name}</h4>
                                <p style={{color: 'grey'}}>{review.position}</p>
                                <p style={{color: 'grey'}}>{review.company}</p>
                                <Image src={star} height="25px" width="150px" alt="star"></Image>
                                <div style={{display: 'flex', marginLeft: '30px'}}>
                                    <Image src={map} height="10px" width="50px" alt="map"></Image>
                                    <h3 style={{marginLeft: '10px'}}>9.5 out of 10 on Trustpilot</h3>
                                </div>
                            </div>
                            
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </section>
    );
};

export default OurTools;