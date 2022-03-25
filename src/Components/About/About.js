import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import './About.css';
import Clip from './aboutus.svg';

function About(){
    return(
        <div className='body' >
            <Grid sx={{display:"flex"}} >
                
                <Grid item lg={7}  className='gridleft' >
                   <Typography variant='h5' fontWeight= "800" paddingTop="10%" textAlign="left" marginLeft="5%" >
                       About Us
                   </Typography>
                   <Box sx={{width:"80%" , marginLeft:"7%"}}>
                   <Typography variant="subtitle1" textAlign="left" paddingTop="5%" >
                   You should now have a decent idea of what an About Us page should and shouldn’t contain.We’re going to follow this with a few tips to help youstand out and create an About Us page that works foryou and your business. Be creative. Don’t fall into the trap of simply writing a brief summary of your business and calling it a day.The best About Us pages are creative, informative, and interesting. Don’t follow the crowd. If someone’s reading your About page, there’s a good chance they’ve been reading (or will read) your competitors’ conversions
   
                   </Typography>
                   <Typography variant="subtitle1" textAlign="left" paddingTop="5%" >
                   You should now have a decent idea of what an About Us page should and shouldn’t contain.We’re going to follow this with a few tips to help youstand out and create an About Us page that works foryou and your business. Be creative. Don’t fall into the trap of simply writing a brief summary of your business and calling it a day.The best About Us pages are creative, informative, and interesting. Don’t follow the crowd. If someone’s reading your About page, there’s a good chance they’ve been reading (or will read) your competitors’ conversions
   
                   </Typography>
                   </Box>
                </Grid>
                <Grid item lg={5} className='gridright' >

                <img src={Clip} className="clip" alt="logo" />
                </Grid>
                
            </Grid>
        </div>
    )
}

export default About;