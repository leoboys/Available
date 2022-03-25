import { Box, Button, Container, Divider, Grid, Icon, TextareaAutosize, TextField, Typography } from '@mui/material';
import React from 'react';
import './Contact.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
    return (
        <div >
          <Container >
          <Typography variant="h4" color="WindowFrame" textAlign="center" pt={12} >
                Contact Us
            </Typography>
            <Divider orientation='horizontal' className='divider' />
            <Grid container  marginTop={10} >
              <Grid container  item lg={5}  >
                <Grid container display="flex" spacing={-10} >
            
                <Grid item lg={6} >
                <Box className='left1'  >
                  <Icon className='location-icon' >
                  <LocationOnIcon  />
                  </Icon>
                 
                  <Typography variant="body1" fontWeight="bold" sx={{ marginTop:"-5%" }} >
                   OUR MAIN OFFICE
                  </Typography>
                  <Typography variant="caption" >
                   KK Nagar, Chennai
                 </Typography>
               </Box>

                </Grid>

                <Grid item lg={6} >
                <Box className='left2'  >
                  <Icon className='location-icon' >
                  <CallIcon />
                  </Icon>
                <Typography  variant="body1" fontWeight="bold" sx={{ marginTop:"-5%"}} >
                    PHONE NUMBER
                  </Typography>
                  <Typography variant="caption" >
                   +91 94442 08901
                 </Typography>
               </Box>
                </Grid>

                <Grid item lg={6}  >
                <Box className='left3'  >
                <Icon className='social-icon'  sx={{display:"flex", flexGrow:0 ,width:"300px", color:"goldenrod"}} >
                  <FacebookIcon   /> <InstagramIcon  /> 
                  <LinkedInIcon  /> <TwitterIcon />
                  </Icon>
                <Typography variant="body1" fontWeight="bold" p="5px" >
                    SOCIAL MEDIA
                  </Typography>
                  <Typography variant="caption" >
                   @available2k22
                 </Typography>
               </Box>
                </Grid>

                <Grid item lg={6}  >
                <Box className='left4'  >
                <Icon className='location-icon' >
                  <EmailIcon />
                  </Icon>
                <Typography variant="body1" fontWeight="bold" sx={{ marginTop:"-5%"}} >
                   EMAIL
                  </Typography>
                 <Typography variant="caption" >
                   available2k22@gmail.com
                 </Typography>
               </Box>
                </Grid>
              
             
             
              </Grid>
              </Grid>
            
          <Grid item lg={7} >

          <Box className='boxright' >
            <Typography className='boxtitle' variant="h4" > Ping us Your Doubts! </Typography>
               <TextField className="text1" placeholder='Name' variant="outlined" />
               <TextField className="text2" gutterBottom placeholder='Email Id' variant="outlined" />
               <TextareaAutosize className="textarea" placeholder='Queries?' variant="outlined"  minRows={3}  />
               <Button className="btn" variant="contained" >Submit</Button>
            </Box>

          </Grid>
            
            </Grid>
          
          </Container>
       
        </div>
    );
};

export default Contact;