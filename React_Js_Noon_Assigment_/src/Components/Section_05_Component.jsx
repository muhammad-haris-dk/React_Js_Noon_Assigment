import { Grid } from "@mui/material";
import React from "react";
import { Cards_Third_Component } from "./Cards_Third_Component";

const render_Details = [
  {
    img_url:
      "https://f.nooncdn.com/products/tr:n-t_240/v1635071675/N42934460A_7.jpg",
    title:
      "Switch Headboard - Twin Size Bed Glossy White Color - Size 934 X 206...",
    org_Price: "939",
    dis_Price: "289 AED",
  },
  {
    img_url:
      "https://f.nooncdn.com/products/tr:n-t_240/v1646914144/N46569464A_1.jpg",
    title:
      "Switch Headboard - Twin Size Bed Glossy White Color - Size 934 X 206...",
    org_Price: "939",
    dis_Price: "289 AED",
  },
  {
    img_url:
      "https://f.nooncdn.com/products/tr:n-t_240/v1645647238/N26505142A_1.jpg",
    title:
      "Switch Headboard - Twin Size Bed Glossy White Color - Size 934 X 206...",
    org_Price: "939",
    dis_Price: "289 AED",
  },
  {
    img_url:
      "https://f.nooncdn.com/products/tr:n-t_240/v1652078576/N43431945A_1.jpg",
    title:
      "Switch Headboard - Twin Size Bed Glossy White Color - Size 934 X 206...",
    org_Price: "939",
    dis_Price: "289 AED",
  },
];
const Section_05_Component = () => {
  return (
    <div style={{backgroundColor:"rgb(225, 239, 250)"}}>
      <h1 style={{marginLeft:"20px",marginTop:"20px"}}>Deals Only on noon</h1>
      <Grid sx={{marginTop:"20px"}} container>
        {
            render_Details.map((obj,index)=>{
                return(
                    <Grid key={index} item xs={12} sm={12} md={6} lg={3} xl={3}>
                        <Cards_Third_Component 
                        image_url={obj.img_url}
                        title={obj.title}
                        org_Price={obj.org_Price}
                        dis_Price={obj.dis_Price}
                        />
                    </Grid>
                )
            })
        }
      </Grid>
    </div>
  );
};

export { Section_05_Component };
