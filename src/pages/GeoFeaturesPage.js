import { Grid, makeStyles, Typography } from "@material-ui/core";
import ImpactCraterImg from "../assets/GeoFeatures/Impact-Craters-Moon.jpg";
import WeatheringImg from "../assets/GeoFeatures/Weathering-Mars.jpg";
import StormsImg from "../assets/GeoFeatures/Storms-Jupiter.jpg";
import VolcanoImg from "../assets/GeoFeatures/Venus-Volcano.jpg";
import ImgCaption from "../components/ImgCaption.js";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%",
  },
}));

function GeoFeaturesPage(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} alignItems="flex-start" justify="space-evenly">
        <Grid item xs={11}>
          <Typography variant={props.v.title}>
            Geologic Features in Space Page
          </Typography>
          <Typography variant={props.v.body}>
            The geologic features we see on planets are greatly determined by
            their position in the solar system. Planets closer to the Sun have
            rocky, hard surfaces and display similar geologic features to what
            we observe on Earth. Planets farther away from the Sun do not have
            true surfaces, which is why they are referred to as “gas giants.”
            Other factors that affect what features appear on planets are the
            planet’s size and atmosphere. Using what we know from studying
            Earth, scientists can apply that knowledge to their observations of
            the geologic features found in space to understand our solar system
            better.
          </Typography>
        </Grid>
        <Grid item xs={11} sm={5}>
          <img
            src={VolcanoImg}
            alt="Idunn Mons volcano on Venus"
            className={classes.img}
          />
          <ImgCaption
            text="Idunn Mons volcano on Venus"
            url="https://www.jpl.nasa.gov/images/surface-warmth-on-a-venus-volcano"
            source="NASA JPL"
          />
          <Typography variant={props.v.section}>
            Tectonics and Volcanoes
          </Typography>
          <Typography variant={props.v.body}>
            On the terrestrial planets, closer to the Sun, we can find evidence
            of tectonics and volcanoes, just like on Earth. All of the
            terrestrial planets have signs of recent or past volcanism.
            Additionally, some of them possess a significant number of
            volcanoes, for example, shield volcanoes found on Mars and Venus. We
            also see signs of past volcanism in the basins of the Moon and
            Mercury, where those areas are made up of hardened magma.{" "}
          </Typography>
        </Grid>
        <Grid item xs={11} sm={5}>
          <img
            src={WeatheringImg}
            alt="Before and After of Mars dust storm"
            className={classes.img}
          />
          <ImgCaption
            text="Before and After of Mars dust storm"
            url="https://mars.nasa.gov/resources/21928/duluth-after-dust-storm/"
            source="NASA"
          />
          <Typography variant={props.v.section}>
            Weathering and Erosion
          </Typography>
          <Typography variant={props.v.body}>
            On some planets, weathering and erosion occur in the form of
            resurfacing. A prime example of this is Mars’s dust storms, which
            frequently change the appearance of the planet’s surface. In
            addition to Earth, Venus and Mars show signs of wind erosion today.
            Dust particles get picked up by the wind and blown across the
            planets’ surfaces, creating ripples and sand dunes.
          </Typography>
        </Grid>
        <Grid item xs={11} sm={5}>
          <img
            src={ImpactCraterImg}
            alt="Impact craters on the Moon"
            className={classes.img}
          />
          <ImgCaption
            text="Impact craters on the Moon"
            url="https://moon.nasa.gov/news/155/theres-water-on-the-moon/"
            source="NASA"
          />
          <Typography variant={props.v.section}>Impact Craters</Typography>
          <Typography variant={props.v.body}>
            An impact crater results from an object, such as a meteoroid or
            comet, hitting a planetary surface at a high velocity. The aftermath
            of this impact is a circular crater. At the time of impact, massive
            shockwaves occur that melt and recrystallize rock
          </Typography>
        </Grid>
        <Grid item xs={11} sm={5}>
          <img
            src={StormsImg}
            alt="Storm system on Jupiter's north pole"
            className={classes.img}
          />
          <ImgCaption
            text="Storm system on Jupiter's north pole"
            url="https://solarsystem.nasa.gov/system/resources/detail_files/736_PIA22335-16.jpg"
            source="NASA"
          />
          <Typography variant={props.v.section}>Storms</Typography>
          <Typography variant={props.v.body}>
            Storms and storm systems are more prevalent in the outer Jovian
            planets. Prime examples of these storms are seen on Jupiter and
            Saturn. Both planets experience jetstreams within their atmospheres
            and massive visible storms with different colors than the rest of
            the planet’s atmosphere.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default GeoFeaturesPage;
