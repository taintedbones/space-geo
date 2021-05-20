import { Grid, Typography, makeStyles } from "@material-ui/core";
import MilkyWayImg from "../assets/Milky-Way.jpg";
import SpaceTimeline from "../components/Timeline.js";
import ImgCaption from "../components/ImgCaption.js";

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
          <ImgCaption
            text="Panoramic of the Solar System"
            url="https://solarsystem.nasa.gov/solar-system/our-solar-system/galleries/?page=1&per_page=25&order=created_at+desc&search=&fancybox=true&href_query_params=category%3Dsolar-system_our-solar-system&button_class=big_more_button&tags=our+solar+system&condition_1=1%3Ais_in_resource_list&category=51"
            source="NASA"
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
