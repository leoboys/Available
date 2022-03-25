import { Card, CardContent, CardMedia, Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import './Service.css';

function Services(){
    const content = [
        {   
            
            title: "Project Box",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://it.sheridancollege.ca/images/project-puzzle-pieces.jpg",
            id : 0,
            link : "/project_box"
        },
        {
            title: "Classy Construction",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://thumbs.dreamstime.com/b/innovative-architecture-civil-engineering-plan-building-construction-project-creative-graphic-design-showing-concept-174256642.jpg",
            id : 1,
            link : "/classyconstruction"
        },
        {
            title: "H&D Horizon",
            description: "hgjhgkjgk;gh;igjhgvs",
            image:"https://www.galaxyeduworld.com/storage/blogs/1602683459_5f870243cc6a9_750_351.jpg",
            id : 2,
            link : "/H&D_Horizons"
        },
        {
            title: "Video & Photo Editing",
            description: "hgjhgkjgk;gh;igjhgvs",
            image :"https://cdn.flatworldsolutions.com/featured-images/top-10-online-video-editing-tools.jpg",
            id : 3,
            link : "/UV_Editing"
        },
    
        {
            title: "LEOBOYS The Dance Entity",
            description: "hgjhgkjgk;gh;igjhgvs",
            image:"https://learn.podium.school/wp-content/uploads/2021/10/jumping-dancers-scaled-1.jpg",
            id : 4,
            link : "/The_Dance_Entity"
        },
    
        {
            title: "Insuvai Catering Services",
            description: "hgjhgkjgk;gh;igjhgvs",
            image: "https://k48b9e9840-flywheel.netdna-ssl.com/wp-content/uploads/2017/01/Food-Tank-Restaurant-Innovators-770x463.jpg",
            id : 5,
            link : "/insuvai"
        },
        {
            title: "Magic Menporul Software Solution",
            description: "hgjhgkjgk;gh;igjhgvs",
            image: "https://websultanate.com/wp-content/uploads/2018/03/web-Application.jpg",
            id : 6,
            link : "/Magicmenporul_softwaresolutions"
        },
        {
            title: "Pc Build Advisor",
            description: "hgjhgkjgk;gh;igjhgvs",
            image: "https://www.gamingscan.com/wp-content/uploads/2020/07/Best-Custom-PC-Builders.jpg",
            id : 7,
            link : "/Pc-build"
        },
    
    ] ;

    return(
            <div className="Service" >
                <div style={{display:"flex", flexGrow:0 , paddingTop:"2%"}}>
                <Box sx={{ bgcolor:"darkgreen",  position:"sticky", boxShadow:"6px 1px 8px rgb(28, 36, 22) " , alignItems:"flex-start" , paddingTop:"0%", borderRadius:" 0% 100% 0% 100%", width:"800px" , height:"150px" }}  />
                <Box sx={{ bgcolor:"darkgreen",  position:"sticky", alignItems:"flex-end" , marginLeft:"20%" ,marginTop:"-20px" , borderRadius:"100% 0% 100% 0%",  width:"300px" , height:"100px" }}  />
                <Box sx={{ bgcolor:"darkgreen",  position:"sticky", alignItems:"flex-end" , marginLeft:"0%" , marginTop:"-10px" , borderRadius:"0% 100% 0% 100%",  width:"300px" , height:"100px" }}  />
                <Box sx={{ bgcolor:"darkgreen",  position:"sticky", boxShadow:"6px 1px 8px rgb(28, 36, 22) " , alignItems:"flex-end" , marginLeft:"40%" , borderRadius:"100% 0% 100% 0%",  width:"300px" , height:"300px" }}  />

                </div>
                
              <Container maxWidth="lg" className="Container"    >
              <Typography color="white" variant="h4" fontFamily="serif" fontWeight="bold" marginTop="-19%" >
                    Services
                </Typography>

                <Divider variant="inset" orientation="horizontal" color ="gold"  width ="150px" sx={{ alignItems:"center" , marginLeft:"43%" }} />

                <Grid container spacing={2} pt={5} >
               
                   { content.map((card) => (  
                   <Grid item lg={3}  pr="10px" >
                       <Link display="grid" to={card.link} style={{ textDecoration:"none" }} >
                    <Card  sx={{  height:"95%", boxShadow :"4px 2px 8px rgba(241, 241, 155, 0.705)" }}>
                    
                        <CardMedia
                            component="img"
                            height="150"
                            image= {card.image}
                            alt={card.id}
                          />
                         
                          <CardContent  >
                          
                            <Typography gutterBottom variant="h5" component="div">
                              {card.title}
                            </Typography>
                            
                            <Typography variant="caption" color="text.secondary">
                                {card.description}
                            </Typography>
                          </CardContent>
                        
                        
                      </Card>
                      </Link>
                    </Grid>
                    ) ) } 
                     
                </Grid>
                
              </Container>
            

            </div>

    )
}

export default Services;