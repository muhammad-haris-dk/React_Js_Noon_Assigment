import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

function Cards_Third_Component(props) {
  return (
    <Card sx={{ maxWidth: "100%",mx:"10px",borderRadius:"10px" }}>
      <CardMedia
        sx={{ height: 140,width:"150px",mx:"auto" }}
        image={props.image_url}
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {props.title}
        </Typography>
        <Stack flexDirection="row" gap={2}>
            <Typography sx={{textDecoration:"line-through"}} variant="h4">
                {props.org_Price}
            </Typography>
            <Typography variant="h4">
                {props.dis_Price}
            </Typography>
        </Stack>
      </CardContent>

    </Card>
  );
}

export { Cards_Third_Component };
