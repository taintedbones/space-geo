import { Grid, makeStyles, Typography } from "@material-ui/core";
import JupiterImg from '../assets/Jupiter.png';

const useStyles = makeStyles((theme) => ({
  body: {
    justifyContent: "left",
  },
  jupiterImg: {
    maxWidth: "300px",
    height: "auto",
    borderRadius: "5%",
  },
}));

function Jupiter(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} alignItems='center'>
        <Grid item sm={12} md={4}>
          <img src={JupiterImg} className={classes.jupiterImg} alt='Jupiter' />
        </Grid>
        <Grid item sm={12} md={7}>
          <Typography variant={props.v.title}>Jupiter</Typography>
          <Typography variant={props.v.body} paragraph>
          	Jupiter’s clouds are a banded structure in the planet’s 
            atmosphere that are separated into two categories: zones and 
            belts. The zones are areas of high pressure that sit above 
            upward-moving convective currents. They make up the yellow, 
            blue, and tan colors seen on Jupiter. Conversely, belts are 
            areas of low pressure where materials sink in. These areas make 
            up the deep browns and reds seen on Jupiter. Mixed in between 
            Jupiter’s belts and bands are layers of white ammonia clouds. 
            Scientists believe the colors produced in zones and belts result 
            from the intricate chemical process occurring within Jupiter’s 
            atmosphere. Correspondingly, the variation in colors is 
            determined by temperature, which allows us to see the difference 
            in heights of various zones. The closer they are to Jupiter’s 
            center, the temperature increases, making the colors darker. 
            Jupiter’s clouds can be compared to the weather systems seen on 
            Earth. However, rather than forming in a centralized area, they 
            spread around the entire planet. 
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={props.v.section}>Great Red Spot</Typography>
          <Typography variant={props.v.body} paragraph>
          	Based on observations made by Voyager and Galileo, we know that 
            Jupiter’s Great Red Spot is made up of circulating whirlpool-like 
            winds that are a massive continuous atmospheric storm. The Spot 
            is about 25,00 km and, based on observational data over the 
            years, appears to be shrinking. Scientists speculate that the 
            Spot’s base is much lower in the atmosphere than we can see. 
            This is because the Spot rotates at a rate similar to the 
            planet’s interior. 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Jupiter;