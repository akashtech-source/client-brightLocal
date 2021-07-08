import { makeStyles, Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image';
// import { faFacebook, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import BrightLocalLogo from '../../../public/brightlocal_logo.svg';

const useStyles = makeStyles({
    black: {
        color: 'black'
    }
})

const Footer = () => {
    const classes = useStyles();

    return (
        <div style={{paddingTop: '70px', marginTop: '70px', backgroundColor: 'white'}}>
            <div>
                <div style={{marginLeft: '100px', color: '#547bba'}}>
                <Grid container>
                    <Grid item lg={3}>
                        <Typography variant="h6" color={classes.black}>Products</Typography>
                        <h4>Platform</h4>
                        <Typography>Local SEO Tools</Typography>
                        <Typography>Local Search Grid</Typography>
                        <Typography>Local Search Rank Checker</Typography>
                        <Typography>Citation Tracker</Typography>
                        <Typography>Local Search Audit</Typography>
                        <Typography>Google My Business Audit</Typography>
                        <Typography>Reputation Manager</Typography>
                        <Typography>Monitor Reviews</Typography>
                        <Typography>Get Reviews</Typography>
                        <Typography>Showcase Reviews</Typography>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography variant="h6">Products</Typography>
                        <h4>Platform</h4>
                        <Typography>Local SEO Tools</Typography>
                        <Typography>Local Search Grid</Typography>
                        <Typography>Local Search Rank Checker</Typography>
                        <Typography>Citation Tracker</Typography>
                        <Typography>Local Search Audit</Typography>
                        <Typography>Google My Business Audit</Typography>
                        <Typography>Reputation Manager</Typography>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography variant="h6">Products</Typography>
                        <h4>Platform</h4>
                        <Typography>Local SEO Tools</Typography>
                        <Typography>Local Search Grid</Typography>
                        <Typography>Local Search Rank Checker</Typography>
                        <Typography>Citation Tracker</Typography>
                        <Typography>Local Search Audit</Typography>
                        <Typography>Google My Business Audit</Typography>
                        <Typography>Reputation Manager</Typography>
                        <Typography>Monitor Reviews</Typography>
                        <Typography>Get Reviews</Typography>
                        <Typography>Showcase Reviews</Typography>
                        <Typography>Monitor Reviews</Typography>
                        <Typography>Get Reviews</Typography>
                        <Typography>Showcase Reviews</Typography>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography variant="h6">Products</Typography>
                        <h4>Platform</h4>
                        <Typography>Local SEO Tools</Typography>
                        <Typography>Local Search Grid</Typography>
                        <Typography>Local Search Rank Checker</Typography>
                        <Typography>Citation Tracker</Typography>
                        <Typography>Local Search Audit</Typography>
                        
                    </Grid>
                </Grid>
                </div>
                {/* <div style={{textAlign: 'center', 
                color: '#547bba', 
                fontSize: '20px',
                borderTop: '1px solid lightgrey',
                borderBottom: '1px solid lightgrey',
                padding: '15px',
                marginTop: '40px',
                }}>
                <FontAwesomeIcon style={{marginRight: '20px'}} icon={faFacebook} />
                <FontAwesomeIcon style={{marginRight: '20px'}} icon={faTwitter} />
                <FontAwesomeIcon style={{marginRight: '20px'}} icon={faInstagram} />
                <FontAwesomeIcon style={{marginRight: '20px'}} icon={faLinkedinIn} />
                <FontAwesomeIcon style={{marginRight: '20px'}} icon={faYoutube} />
                </div> */}
                <div style={{textAlign: 'center', padding: '15px'}}>
                    <Image src={BrightLocalLogo} alt="brightlocal logo"></Image>
                </div>
            </div>
        </div>
    );
};

export default Footer;