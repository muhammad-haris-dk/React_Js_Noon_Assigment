import { Stack, Typography } from "@mui/material";
import React from "react";




const product_Array = [
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/cf847f24-9b25-4a43-b2b1-ff8881fb51ab.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/705eead8-27f2-4704-96b6-c02c873b380a.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/878b025c-c97c-432f-aa18-a430d88a813d.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/67edd848-2b6f-4c93-b2e6-c72879bafb03.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/227c14e8-9e35-4875-8462-809da174966b.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/fa870ca7-b745-4386-b11c-dd70f5660006.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/ed889b28-66e2-4ee0-aa41-be4c885ca396.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/b531fe1e-3adb-4f09-9927-0f2f64c8fa66.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/beffdc53-26ca-45b1-b3d5-84c1a0909903.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/1988c23a-de3e-41d7-9381-2cb6784a3b74.png?format=avif",
    },
    {
        img_url:"https://f.nooncdn.com/mpcms/EN0001/assets/7e179823-54ee-45c3-91c7-ed279d164314.png?format=avif",
    },

]
const Section_01_Component = () => {
  return <div style={{marginTop:"20px"}}>
    <Stack flexDirection="row">
        {
            product_Array.map((crt_obj,index)=>{
                return <Typography sx={{marginLeft:"11px",marginRight:"11px",display:"flex"}} key={index}>
                    <img width={"100px"} src={crt_obj.img_url} alt="" />
                </Typography>
            })
        }
    </Stack>
  </div>;
};

export { Section_01_Component };
