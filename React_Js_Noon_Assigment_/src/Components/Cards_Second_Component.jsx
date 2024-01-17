import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

function Cards_Second_Component(props) {
//     const [img_url,rating,views,title,aed,dis_Price,org_Price] = props
  return (
    <Card sx={{ maxWidth: "100%" ,border:"1px solid lightgrey",borderRadius:"10px",marginLeft:"10px"}}>
      <CardMedia
        sx={{ height: 250,padding:"5px" }}
        image={props.img_url}
        title="green iguana"
      />
      <CardContent>
        <Stack flexDirection="row" gap={1}>
            <Typography>
                    {props.rating}
            </Typography>
            <Typography>
                {props.views}
            </Typography>
        </Stack>
        <Typography gutterBottom variant="body2" component="div">
          {props.title}
        </Typography>
        <Stack flexDirection="row" alignItems="center" gap={2}>
            <Typography variant="p">
                    {props.aed}
            </Typography>
            <Typography variant="h5" component="div">
                {props.dis_Price}
            </Typography>
            <Typography variant="p" sx={{textDecoration:"line-through"}}>
                {props.org_Price}
            </Typography>
        </Stack>
      </CardContent>
      
    </Card>
  );
}

export { Cards_Second_Component };
