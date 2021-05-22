import { Grid, makeStyles, Typography } from "@material-ui/core";
import ImgCaption from "../components/ImgCaption.js";
import MercuryImg from "../assets/Mercury/Mercury.jpg";
import MercurySurfaceImg from "../assets/Mercury/Mercury-Surface.jpg";
import MercuryScarpImg from "../assets/Mercury/Mercury-Scarp.jpg";

const useStyles = makeStyles((theme) => ({
  body: {
    justifyContent: "left",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%",
  },
}));

function Mercury(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} alignItems="center" justify="space-evenly">
        <Grid item sm={12} md={4}>
          <img src={MercuryImg} className={classes.img} alt="Mercury" />
          <ImgCaption
            text="Mercury"
            url="https://solarsystem.nasa.gov/system/resources/detail_files/439_MercurySubtleColors1200w.jpg"
            source="NASA"
          />
        </Grid>
        <Grid item sm={12} md={7}>
          <Typography variant={props.v.title}>Mercury</Typography>
          <Typography variant={props.v.body}>
            Mercury is the smallest planet in the solar system, a little larger
            than Earth’s Moon and closest to the Sun. Although it is closest to
            the Sun, Mercury is not the hottest planet in the solar system. Like
            the other terrestrial planets, it comprises a central core, rocky
            mantle, and solid crust. Additionally, Mercury has no real
            atmosphere but a thin exosphere made of oxygen, sodium, hydrogen,
            helium, and potassium. Because of this, the planet experiences
            extreme polar temperatures. During a Mercury day, the planet’s
            surface temperatures jump as high as 800 degrees Fahrenheit.
            However, at night the surface temperature drops as low as -290
            degrees Fahrenheit.
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant={props.v.section}>
            Mercury's Rocky Surface
          </Typography>
          <Typography variant={props.v.body}>
            Mercury’s surface has a strong resemblance to our Moon’s highlands.
            However, the craters found on Mercury are much shallower due to
            Mercury’s higher surface gravity. Additionally, Mercury contains
            smooth regions similar to the Moon’s maria due to lava filling
            basins left behind from meteoric impacts. However, Mercury’s maria
            are less noticeable due to their similarity in color to the rest of
            the planet’s surface. Mercury has a relative lack of craters due to
            repeated volcanic eruptions erasing older impact craters.
            Astronomers also believe that these repeated eruptions are how
            Mercury’s crust was formed.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img src={MercurySurfaceImg} alt="Mercury's cratered surface"  className={classes.img} />
          <ImgCaption
            text="Mercury's cratered surface"
            url="https://solarsystem.nasa.gov/resources/769/the-beauty-of-calibration/?category=planets_mercury"
            source="NASA"
          />
        </Grid>
        <Grid item xs={4}>
          <img src={MercuryScarpImg} alt='Scarp on Mercury' className={classes.img} />
          <ImgCaption
            text="Scarp on Mercury"
            url="https://photojournal.jpl.nasa.gov/catalog/PIA12054"
            source="NASA - JPL"
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant={props.v.sub_sec}>Mercury's Scarp</Typography>
          <Typography variant={props.v.body}>
            Mercury’s scarp is a cliff on the planet’s surface that stretches
            about 400 km and is 3 km high in some places. This scarp cuts
            through multiple craters, which tells us that it formed after the
            bombardment of impact craters. Although scarps seem similar to
            Earth’s faults, there is no evidence of crustal movements on the
            planet. Therefore, it is apparent that tectonics were not what
            formed it. Researchers believe the scarp was most likely created by
            Mercury’s crust cooling, shrinking, and then splitting, a process
            that is also found to happen on Earth’s Moon.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Mercury;
