import { Grid, makeStyles, Typography } from "@material-ui/core";
import UranusImg from "../assets/Uranus/Uranus.jpg";
import UranusRingsImg from "../assets/Uranus/Uranus-Rings.png";
import UranusAtmosImg from "../assets/Uranus/Uranus-Surface-Detail.jpg";
import ImgCaption from "../components/ImgCaption.js";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%",
  },
}));

function Uranus(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} alignItems="center" justify='space-evenly'>
        <Grid item xs={12} sm={4}>
          <img src={UranusImg} alt="Uranus" className={classes.img} />
          <ImgCaption
            text="Uranus"
            url="https://airandspace.si.edu/files/images/microsites/etp/hubble-uranus.jpg"
            source="Smithsonian"
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant={props.v.title}>Uranus</Typography>
          <Typography variant={props.v.body}>
            Uranus is the seventh planet from the Sun and is known as an “ice
            giant.” This planet is also known for having a couple of interesting
            quirks. The first is its tilt. Uranus rotates at a unique 90-degree
            tilt, making it appear to spin on its side. Because of this odd
            tilt, the planet endures some of the most extreme seasons observed
            in the solar system. Additionally, Uranus is one of two planets to
            rotate from east to west, opposite other planets. The only other
            planet to display this behavior is Venus.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant={props.v.section}>Uranus's Atmosphere</Typography>
          <Typography variant={props.v.body}>
            Uranus doesn’t have a true surface but instead is made up of at
            least 80 percent dense hot fluid. This fluid is composed of “icy”
            materials such as water, methane, and ammonia. Additionally, the
            planet has a small rocky core that is surrounded by hot dense fluid.
            Uranus’s atmosphere is composed of mostly helium and hydrogen, with
            small amounts of methane, ammonia, and water. The methane gas within
            its atmosphere is what gives the planet its characteristic
            blue-green color. When sunlight passes through the planet’s
            atmosphere, methane absorbs most of the red reflected light, leaving
            the blue-green color that we see.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={UranusAtmosImg} alt="Detailed Uranus's Atmosphere" className={classes.img} />
          <ImgCaption
            text="Detailed photo or Uranus's Atmosphere"
            url="https://solarsystem.nasa.gov/resources/455/uranus-in-detail/?category=planets_uranus"
            source="NASA"
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={UranusRingsImg} alt="Uranus's Rings" className={classes.img} />
          <ImgCaption
            text="Uranus's Ring System - Solid lines(rings) & dashed lines(moon orbits)"
            url="https://en.wikipedia.org/wiki/Rings_of_Uranus"
            source="Wikipedia"
          />
        </Grid>
        <Grid item container xs={12} sm={7}>
          <Grid item xs={12}>
            <Typography variant={props.v.section}>Uranus's Rings</Typography>
            <Typography variant={props.v.body}>
              Uranus has 13 rings that we know of: </Typography>
          </Grid>
          <Grid item xs={6}>
            <ul>
              <li>Zeta (inner most)</li>
              <li>6</li>
              <li>5</li>
              <li>4</li>
              <li>Alpha</li>
              <li>Beta</li>
              <li>Eta</li>
            </ul>
          </Grid>
          <Grid item xs={6}>
            <ul>
              <li>Gamma</li>
              <li>Delta</li>
              <li>Lambda</li>
              <li>Epsilon</li>
              <li>Nu</li>
              <li>Mu (outer most)</li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography  variant={props.v.body}>        
              The inner ring system contains primarily narrow and dark grey rings,
              while the outer system contains a dusty reddish ring and a blue
              ring. Uranus’s rings were the first to be seen after the discovery
              of Saturn and its rings. Their discovery was an important one
              because it made it apparent that rings were a common feature on
              plants and not unique to Saturn.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Uranus;
