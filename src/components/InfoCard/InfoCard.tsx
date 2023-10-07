import React from "react";
import "./InfoCard.css";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import headshot from "../.././assets/images/headshot_circle.png";
import SocialBar from "./SocialBar";

const InfoCard = () => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          columns={2}
        >
          <Grid item xs={0}>
            <img src={headshot} alt="headshot" className="headshot_circle" />
          </Grid>
          <Grid item xs={1}>
            <Typography sx={{ fontSize: "2rem", fontWeight: "500"}}>Evan Cohen</Typography>
            <Typography>Junior at UMich</Typography>
            <Typography>Perseverant | Creative | Ambitious</Typography>
            <Typography>CS + French</Typography>
            <SocialBar />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default InfoCard;