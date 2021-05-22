import { Grid, makeStyles, Typography } from "@material-ui/core";
import VenusImg from "../assets/Venus/Venus.png";
import ImgCaption from "../components/ImgCaption.js";
import VeneraImg from "../assets/Venus/Venera-Venus.jpg";
import VenusVolcanoImg from "../assets/Venus/Venus-Volcano.jpg";
import VenusCoronaeImg from "../assets/Venus/Venus-Coronae.jpg";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%",
  },
}));

function Venus(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container className="page-container" spacing={3} justify="space-evenly" alignItems="center">
        <Grid item sm={12} md={4}>
          <img src={VenusImg} className={classes.img} alt="Venus" />
          <ImgCaption
            text="Venus"
            url="https://solarsystem.nasa.gov/resources/2524/newly-processed-views-of-venus-from-mariner-10/"
            source="NASA"
          />
        </Grid>
        <Grid item sm={12} md={7}>
          <Typography variant={props.v.title}>Venus</Typography>
          <Typography variant={props.v.body}>
            Venus is the second planet from the Sun and the hottest in solar system.
            Most of what we know about Venus’s geology is from radar technology
            and probes. Based on generated radar maps, the planet’s surface
            seems mostly smooth with two main continents, Ishtar Terra and
            Aphrodite Terra. Both continents appear to have mountains similar to
            those found on Earth. While it was once speculated that Venus
            experienced tectonic activity, NASA’s Magellan took images of the
            planet’s surface that ruled this speculation out. In the images,
            Venus’s crust showed fractures and buckling, commonly seen with
            volcanic activity.
          </Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography variant={props.v.section}>Venus's Volcanoes</Typography>
          <Typography variant={props.v.body} paragraph>
            Venus is believed to be a hub of volcanic activity, and several
            areas of Venus have been found to have volcanic activity. The most
            common found on Venus are shield volcanoes. On Earth, these are the
            volcanoes that form a caldera, or crater, in the center. In addition
            to shield volcanoes, the images taken by Magellan unveiled seven
            lava domes shaped like pancakes in various locations. These domes
            are most likely formed by lava oozing out of Venus’s surface,
            creating a dome, and withdrawing back into the crust.
          </Typography>
          <Typography variant={props.v.sub_sec}>Coronae</Typography>
          <Typography variant={props.v.body}>
            Coronae are a geological feature that has only been seen on Venus.
            They are the most prominent volcanic structures on the planet and
            are made up of enormous circular regions. Scientists believe coronae
            are formed when there is upwelling in the mantle, which causes the
            planet’s surface to bulge out. The process of this formation is also
            seen on Earth; however, coronae are a more mild version.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <img
            src={VenusVolcanoImg}
            alt="Maat Mons volcanoe on Venus (Computer generated 3D)"
            className={classes.img}
          />
          <ImgCaption
            text="Maat Mons volcanoe on Venus (Computer generated 3D)"
            url="https://solarsystem.nasa.gov/resources/480/venus-3d-perspective-view-of-maat-mons/"
            source="NASA"
          />
          <img
            src={VenusCoronaeImg}
            alt="Aine coronae on Venus"
            className={classes.img}
          />
          <ImgCaption
            text="Aine coronae on Venus"
            url="https://www.lpi.usra.edu/planetary_news/2020/07/28/the-coronae-of-venus-evidence-for-ongoing-volcanic-activity/"
            source="lpi.usra.edu"
          />
        </Grid>
        <Grid item xs={5}>
          <img
            src={VeneraImg}
            alt="Venera 13 on Venus"
            className={classes.img}
          />
          <ImgCaption
            text="Venera 13 on Venus"
            url="https://astronomy.com/news/2020/08/interplanetary-probes-from-behind-the-iron-curtain-the-soviet-venera-program"
            source="astronomy.com"
          />
        </Grid>
        <Grid item xs={7}>
          <Typography variant={props.v.sub_sec}>
            Volcanism in Venus Today
          </Typography>
          <Typography variant={props.v.body}>
            Although there is no direct evidence that volcanic activity occurs
            on Venus today, there is plenty of indirect evidence to suggest that
            it does. Two essential pieces seen are fluctuations in the sulfur
            levels above Venus’s clouds and bursts of radio energy, similar to
            lightning, coming from the planet’s surface. Both are commonly
            linked to volcanism; however, there is still speculation as active
            volcanoes have not been directly seen.
          </Typography>
          <Typography variant={props.v.body}>
            Another piece of evidence that supports the theory of current
            volcanic activity on Venus was the landing of the Soviet spacecraft 
            <i> Venera 13</i> on the planet’s surface. Although the spacecraft only
            survived for about an hour in the Venus heat, it was able to send
            back images of the planet’s surface to Earth. In these images,
            several flat and young-looking rocks were seen, suggesting recent
            surface activity. In addition to <i>Venera 13</i>, Soviet landers were sent to
            the planet to conduct chemical analyses of surface matter. These
            studies were primarily composed of basaltic, cohesive with volcanic
            activity.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Venus;
