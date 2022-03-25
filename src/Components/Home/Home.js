import React from 'react';
import {  Card, CardActionArea, CardContent, CardMedia, Container,  Typography} from "@mui/material";
import './Home.css';
// import { Link } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export default function Home() {
    const content =[
      {
          
        title: "New User Offer",
        description: "hgjhgkjgk;gh;igjhgvs",
        image :"https://it.sheridancollege.ca/images/project-puzzle-pieces.jpg",
        id : 0
        
      },
      {
          
        title: "30% Offer",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://cdn.flatworldsolutions.com/featured-images/top-10-online-video-editing-tools.jpg",
            id : 3
      },
      {
          
        title: "Discount Mela",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://thumbs.dreamstime.com/b/innovative-architecture-civil-engineering-plan-building-construction-project-creative-graphic-design-showing-concept-174256642.jpg",
            id : 1
      },
      {
          
        title: "Intern with projects",
        description: "hgjhgkjgk;gh;igjhgvs",
        image:"https://www.galaxyeduworld.com/storage/blogs/1602683459_5f870243cc6a9_750_351.jpg",
        id : 2
      },
    ]

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          partialVisibilityGutter: 30
        }
      };
    return (
        <div className= "home-body" >
         
            
                <Typography  variant="h1" sx={{ textAlign:"center" , color:"Window", paddingTop:"10%" }}>
                    AVAILABLE
                </Typography>
                <Typography variant="caption" sx={{ fontSize:"10px", textAlign:"center" , color:"Window", paddingTop:"-20px" , textTransform:"uppercase" }}>
                Available is a platform to showcase your skills and your friends to this world
                </Typography>
               
               <Container maxWidth="lg" className="box1" >
      
               <Typography color="whitesmoke" variant="h5" fontWeight="700" padding="20px" textAlign="center" >
                          TOP OFFERS
                       </Typography>
             <Carousel 
              responsive={responsive} 
              showDots={true}
              sliderClass=""
              slidesToSlide={1}
              swipeable // means to render carousel on server-side.
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={1}
              centerMode={false}
              customTransition=""
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={100}
              renderButtonGroupOutside={true}
              renderDotsOutside={true}  >
                         
                {content.map((item) => (
                            
                  <div > 
                    <Card className='card' >
                    
                    <CardMedia
                        component="img"
                        height="220"
                        image= {item.image}
                        alt={item.id}
                        
                      />
                     <CardActionArea>
                      <CardContent className="hide" >
                      
                        <Typography variant="h5" component="div">
                          {item.title}
                        </Typography>

                      </CardContent>
                    
                      </CardActionArea>
                  </Card>
                            
                        </div>

                         ))}
                       
                            </Carousel>

              
               </Container>

        
        </div>
    )
}


