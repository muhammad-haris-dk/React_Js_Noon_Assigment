import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

function Cards_Component(props) {
  return (
    <Card sx={{ maxWidth: "100%",marginLeft:"20px",marginRight:"2px" }}>
      <Stack flexDirection="row">
        <Typography >
            <img style={{width:"200px"}} src={props.img_1} />
        </Typography>
        <Typography sx={{marginLeft:"10px"}}>
            <img style={{width:"200px"}} src={props.img_2} alt="" />
        </Typography>
      </Stack>
      <Stack flexDirection="row">
        <Typography >
            <img style={{width:"200px"}} src={props.img_3} />
        </Typography>
        <Typography sx={{marginLeft:"10px"}}>
            <img style={{width:"200px"}} src={props.img_4} alt="" />
        </Typography>
      </Stack>
    </Card>
  );
}

export { Cards_Component };
