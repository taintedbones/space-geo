import { Grid, Typography, makeStyles } from "@material-ui/core";
import MilkyWayImg from "../assets/Milky-Way.jpg";
import SpaceTimeline from "../components/Timeline.js";
import SolarSysFormImg from "../assets/Solar-System-Formation.jpg";
import ImgCaption from "../components/ImgCaption.js";

const useStyles = makeStyles((theme) => ({
  img: {
    width: "100%",
    height: "auto",
    borderRadius: "5%"
  },
}));

function HomePage(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={11}>
          <img
            src={MilkyWayImg}
            className={classes.img}
            alt="Milky Way Galaxy"
          />
          <ImgCaption
            text="Panoramic of the Solar System"
            url="https://solarsystem.nasa.gov/solar-system/our-solar-system/galleries/?page=1&per_page=25&order=created_at+desc&search=&fancybox=true&href_query_params=category%3Dsolar-system_our-solar-system&button_class=big_more_button&tags=our+solar+system&condition_1=1%3Ais_in_resource_list&category=51"
            source="NASA"
          />
        </Grid>
        <Grid item xs={11}>
          <Typography variant={props.v.title}>The Solar System</Typography>
          <Typography variant={props.v.body} paragraph>
            Our solar system resides within an outer spiral arm of the Milky Way
            Galaxy. There is one star (the Sun), eight planets, about 173 moons,
            five dwarf planets, seven asteroids, and more than 100 objects
            within the solar system. There are other planets; however, they are
            so far away, we have yet to discover them. The planets within our
            solar system are separated into two categories: terrestrial and
            jovian planets. The terrestrial planets are those similar to Earth
            and closer to the Sun. This category consists of Mercury, Venus,
            Earth, and Mars. Further out in the solar system are the jovian
            planets, made up of gas and ice giants. This category contains
            Jupiter, Saturn, Uranus, and Neptune. Separating the two planet
            groups is the asteroid belt, made up of bits and pieces of planetary
            matter and dust.
          </Typography>          
        </Grid>
        <Grid item xs={11} lg={6}>
          <Typography variant={props.v.section}>
              How did our solar system form?
          </Typography>
          <Typography variant={props.v.body}>
            About 4.6 billion years ago, a dense cloud of interstellar gas and
            dust collapsed, presumably due to a shockwave from a nearby
            exploding star. The result of this collapse was a swirling disk of
            material called a solar nebula. At the center of the solar nebula,
            gravity continuously sucked in material until the pressure in the
            core became too great and eventually formed our Sun. Matter spread
            farther out in the solar nebula also began to clump together and
            smash into each other, forming larger masses. The largest of these
            masses were shaped into spheres by their gravity, eventually
            becoming the planets and moons we know today. The masses that were
            not as large became asteroids, comets, meteoroids, and the material
            that makes up the asteroid belt. As billions of years passed, the
            more giant gas planets drifted farther out into the galaxy, creating
            the orbit pattern we see today.
          </Typography>
        </Grid>
        <Grid item xs={11} lg={5}>
          <img src={SolarSysFormImg} alt="Solar System Formation" className={classes.img} />
          <ImgCaption
            text="Illustration of the formation of the Solar System"
            url="http://www.sci-news.com/space/science-half-water-earth-older-than-sun-02173.html"
            source="Sci-News"
          />
        </Grid>
        <Grid item xs={11}>
          <Typography variant={props.v.section}>
            Timeline of the Universe
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SpaceTimeline />
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
