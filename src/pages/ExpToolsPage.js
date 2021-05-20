import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import HubbleImg from "../assets/ExpTools/Hubble-Telescope.jpg";
import InSightImg from "../assets/ExpTools/InSight-Lander.jpg";
import MessengerImg from "../assets/ExpTools/Messenger-Probe.jpg";
import ParkerSolarImg from "../assets/ExpTools/Parker-Solar-Probe.jpg";
import PerseveranceImg from "../assets/ExpTools/Perseverance-Rover.jpg";
import RadarMapImg from "../assets/ExpTools/Radar-Map.jpg";
import VeritasRadarImg from "../assets/ExpTools/Veritas-Radar.jpg";
import SMBlackHoleSimImg from "../assets/ExpTools/SM-Black-Hole-Sim.gif";
import ImgCaption from "../components/ImgCaption.js";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%",
  },
}));

function ExpToolsPage(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item sm={11}>
          <Typography variant={props.v.title} paragraph>
            Space Exploration Tools
          </Typography>
          <Typography variant={props.v.body}>
            Scientists use various tools to aid them in studying the solar
            system. Combined, these tools allow us to collect data and better
            understand the working of features spotted throughout the universe.
            Additionally, these tools give us a glimpse at galaxies far, far
            away that we can’t yet access. Below are some of the tools and
            technologies used to study our solar system.
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <img src={HubbleImg} alt="Hubble Telescope" className={classes.img} />
          <ImgCaption
            text="Hubble Telescope in Space"
            url="https://images.nasa.gov/details-GSFC_20171208_Archive_e002151"
            source="NASA"
          />
        </Grid>
        <Grid item sm={6}>
          <Typography variant={props.v.section} paragraph>
            Telescopes
          </Typography>
          <Divider />
          <Typography variant={props.v.body}>
            In the same way that geologists would use a telescope to view
            regions far away, they can also be used to see objects in space.
            Telescopes are useful in helping us research other planets because
            they allow astronomers to observe various parts of the
            electromagnetic spectrum that are not visible to the naked eye. With
            telescopes sent into orbit, such as the Hubble Telescope,
            astronomers have been able to see objects of space that are about
            10-15 billion lightyears away.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant={props.v.section} paragraph>
            Rovers & Landers
          </Typography>
          <Divider />
          <Typography variant={props.v.body}>
            To get a closer look at other objects in space, space agencies such
            as NASA have used rovers and landers. These machines allow
            astronomers to get a first-person look at the surface of other
            planetary surfaces and collect data. Landers are spacecraft that
            land on a planetary surface to collect images and other data. To
            explore some more ground, rovers are small vehicles that can be
            operated virtually to drive around the surface. Rovers are crucial
            in research because they allow researchers to get up-close looks at
            planets that are not yet accessible to humankind. Without physically
            going onto other planets, researchers have been able to collect
            images, infrared readings, and data samples.
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <img src={InSightImg} alt="InSight Lander" className={classes.img} />
          <ImgCaption
            text="InSight Lander on Mars"
            url="https://mars.nasa.gov/insight/"
            source="NASA"
          />
          <img
            src={PerseveranceImg}
            alt="Perseverance Rover"
            className={classes.img}
          />
          <ImgCaption
            text="Perseverance Rover on Mars"
            url="https://mars.nasa.gov/mars2020/"
            source="NASA"
          />
        </Grid>
        <Grid item sm={4}>
          <img
            src={MessengerImg}
            alt="Messenger Probe"
            className={classes.img}
          />
          <ImgCaption
            text="Artistic rendition of Messenger Probe in front of Mercury"
            url="https://www.nasa.gov/content/nasa-s-messenger-spacecraft-10-years-in-space"
            source="NASA"
          />
          <img
            src={ParkerSolarImg}
            alt="Parker Solar Probe"
            className={classes.img}
          />
          <ImgCaption
            text="Artistic rendition of Parker Solar Probe in front of Sun"
            url="https://www.nasa.gov/sites/default/files/thumbnails/image/spp_observingsun2_0_0.jpg"
            source="NASA"
          />
        </Grid>
        <Grid item sm={6}>
          <Typography variant={props.v.section} paragraph>
            Space Probes
          </Typography>
          <Divider />
          <Typography variant={props.v.body}>
            Space probes are spacecraft sent into space to observe and collect
            data for researchers to study. These probes do not carry any humans
            and are equipped with various tools for observing different
            features. While they are used to study Earth and the Moon, they are
            also sent deep into space to observe faraway planets. To reach these
            outer planets, the probes utilize a maneuver known as a gravity
            assist. In this maneuver, the probe enters a planet’s orbit,
            completing an entire revolution around it. Then the probe launches
            itself to the following location, using the planet’s motion and
            gravitation speed to achieve the necessary speed and direction.
            Essentially, the probe plays leapfrog from planet to planet,
            extending farther out into the galaxy. Space probes have played an
            important part in learning about distant parts of the solar system
            and understanding the geology of other planets.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant={props.v.section} paragraph>
            Radar
          </Typography>
          <Divider />
          <Typography variant={props.v.body}>
            Radar allows researchers to penetrate the atmosphere of other
            planets and record the planet’s surface and topographic features.
            How does this work? A satellite will transmit radar waves onto a
            planet’s surface. Then, a sensor on the satellite measures how much
            of the radar signal gets reflected from the planet’s surface. If a
            surface is smooth or slopes away from the satellite, a large portion
            of the radar energy will be reflected away from the satellite rather
            than back towards it. On a radar image, these regions show up as
            dark areas. Contrastingly, when the planet’s surface is rough or
            slopes toward the satellite, more radar waves are reflected back to
            the satellite’s sensor. On a radar image, these regions appear as
            bright spots because more energy was reflected back.
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <img
            src={VeritasRadarImg}
            alt="Veritas Radar Art Concept"
            className={classes.img}
          />
          <ImgCaption
            text="Artist's concept of VERITAS spacecraft using radar technology"
            url="https://www.jpl.nasa.gov/news/veritas-exploring-the-deep-truths-of-venus"
            source="NASA"
          />
          <img
            src={RadarMapImg}
            alt="Map of Venus made by Radar"
            className={classes.img}
          />
          <ImgCaption
            text="Topographical Map of Venus made from radar"
            url="https://solarsystem.nasa.gov/resources/486/hemispheric-view-of-venus/"
            source="NASA"
          />
        </Grid>
        <Grid item sm={10}>
          <Typography variant={props.v.section} paragraph>
            Models & Simulations
          </Typography>
          <Divider />
          <Typography variant={props.v.body}>
            Models and simulations play a crucial part in studying geological
            events and features throughout our solar system. They allow
            researchers to observe and understand unreachable planetary objects
            and recreate significant events of the past, such as the Moon’s
            formation and the Big Bang. Using models and simulations,
            researchers have recreated events such as the Big Bang and the
            Moon’s formation. Additionally, this technology has allowed us to
            simulate how the deeper layers of Jovian planets look. Another use
            for simulations is to train individuals for various space missions.
            Typically, astronauts partake in numerous simulations to prepare for
            their journeys into space. While the other technologies mentioned on
            this page allow us to collect data on features in the solar system,
            models and simulations enable us to make sense of that data.
          </Typography>
        </Grid>
        <Grid item sm={9}>
          <img
            src={SMBlackHoleSimImg}
            alt="Super Massive Black Hole Simulation"
            className={classes.img}
          />
          <ImgCaption
            text="Super Massive Black Hole Simulation"
            url="https://www.nasa.gov/feature/goddard/2018/new-simulation-sheds-light-on-spiraling-supermassive-black-holes"
            source="NASA"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default ExpToolsPage;