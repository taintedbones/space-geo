import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    justifyContent: "left",
  }
}));

function Uranus(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} alignItems='center'>
        <Typography variant={props.v.title}>Uranus</Typography>
        <Typography variant={props.v.body}>
        	Uranus is an ice giant known for rotating on its unique 90-degree 
          tilt, making it appear to spin on its side. Additionally, Uranus 
          is one of two planets to rotate from east to west, the opposite 
          direction of other planets. The planet has a small rocky core 
          that is surrounded by hot dense fluid. This fluid is composed of 
          “icy” materials such as water, methane, and ammonia. Uranus’s 
          characteristic blue-green color is due to large amounts of methane 
          gas within its atmosphere. When sunlight passes through the 
          planet’s atmosphere, methane absorbs all the red reflected light, 
          only leaving the blue-green that we see.
        </Typography>
      </Grid>
    </div>
  );
}

export default Uranus;