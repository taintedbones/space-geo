import { Grid, makeStyles, Typography } from "@material-ui/core";
import HubbleImg from '../assets/ExpTools/Hubble-Telescope.jpg';
import InSightImg from '../assets/ExpTools/InSight-Lander.jpg';
import MessengerImg from '../assets/ExpTools/Messenger-Probe.jpg';
import ParkerSolarImg from '../assets/ExpTools/Parker-Solar-Probe.jpg';
import PerseveranceImg from '../assets/ExpTools/Perseverance-Rover.jpg';

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%"
  }
}));

function ExpToolsPage(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} alignItems="center">
        <Grid item sm={12}>
          <Typography variant={props.v.title}>
            Exploration Tools Page
          </Typography>
          <Typography variant={props.v.body} paragraph>
            Add text here.
          </Typography>
        </Grid>
        <Grid item sm={5}>
            <img src={HubbleImg} alt='Hubble Telescope' className={classes.img} />
        </Grid>
        <Grid item sm={7}>
          <Typography variant={props.v.section}>Telescopes</Typography>
          <Typography variant={props.v.body} paragraph>
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
        <Grid item sm={12}>
          <Typography variant={props.v.section}>Rovers & Landers</Typography>
          <Typography variant={props.v.body} paragraph>
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
        <Grid item sm={12}>
          <Typography variant={props.v.section}>Spacecrafts</Typography>
          <Typography variant={props.v.body} paragraph>
            Add text here.
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography variant={props.v.section}>Radar</Typography>
          <Typography variant={props.v.body} paragraph>
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
        <Grid item sm={12}>
          <Typography variant={props.v.section}>
            Models & Simulations
          </Typography>
          <Typography variant={props.v.body} paragraph>
            Add text here.
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography variant={props.v.section}>Instruments</Typography>
          <Typography variant={props.v.body} paragraph>
            Add text here.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default ExpToolsPage;
