import { Grid, Typography, makeStyles } from "@material-ui/core";
import MilkyWayImg from "../assets/Milky-Way.jpg";
import SpaceTimeline from "../components/Timeline.js";

const useStyles = makeStyles((theme) => ({
  body: {
    height: 'inherit'
  },
  gridItem: {
    width: "inherit",
  },
  milkyWayImg: {
    width: "100%",
    height: "auto",
  },
}));

function HomePage(props) {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item sm={12}>
          <Typography variant={props.v.title}>Home Page</Typography>
        </Grid>
        <Grid item sm={12}>
          <img
            src={MilkyWayImg}
            className={classes.milkyWayImg}
            alt="Milky Way Galaxy"
          />
        </Grid>
        <Grid item sm={12}>
          <Typography variant={props.v.body}>
            The Milky Way contains 1 star(Sun), 8 planets, ~173 moons, 5 dwarf
            planets, 7 asteroids, more than 100 objects as far as we know.
          </Typography>
        </Grid>
        <Grid item sm={12}>
            <Typography variant={props.v.section}>
                Timeline of the Universe
            </Typography>
        </Grid>
        <Grid item sm={12}>
            <SpaceTimeline />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
