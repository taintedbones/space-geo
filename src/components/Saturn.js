import { Grid, makeStyles, Typography } from "@material-ui/core";
import SaturnImg from '../assets/Saturn/Saturn.jpg';
import SaturnRingsImg from '../assets/Saturn/Saturn-Rings.jpg';
import SaturnHexImg from '../assets/Saturn/Saturn-Hexagon.jpg';
import NorthPoleImg from '../assets/Saturn/Saturn-North-Pole.jpg';
import SouthPoleImg from '../assets/Saturn/Saturn-South-Pole.jpg';

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%",
    marginTop: "10%",
  }
}));

function Saturn(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2} alignItems='center'>
        <Grid item sm={5}>
          <img src={SaturnImg} alt='Saturn' className={classes.img}/>        
        </Grid>
        <Grid item sm={7}>
          <Typography variant={props.v.title}>Saturn</Typography>
          <Typography variant={props.v.body}>
            Saturn is a gas giant planet that does not have an actual surface. 
            The planet’s atmosphere is made up of molecular hydrogen, helium, 
            and small amounts of methane and ammonia. There are three main 
            layers to Saturn’s atmosphere. The lowest layer is made of water 
            ice. Sitting above is a layer of ammonium hydrosulfide ice, 
            followed by a layer of ammonia ice. These three layers are 
            wrapped up in a thick layer of haze, which is why Saturn’s yellow, 
            brown, and grey variations appear so subtle to the visible eye. 
            Additionally, similar to Jupiter’s atmosphere, Saturn contains a 
            stable east to west zonal flow.
          </Typography>
        </Grid>
        <Grid item sm={12}>
          <Typography variant={props.v.section}>Storms on Saturn</Typography>
          <Typography variant={props.v.body}>
            Storm systems have been recorded in Saturn’s atmosphere through 
            the use of spacecraft sent into the planet’s orbit. These massive 
            storms can be compared to Earth’s thunderstorms, however, on a much 
            grander scale. Researchers know these storms exist after Cassini 
            detected powerful bursts of radio waves while orbiting the planet. 
            It is believed the lightning is powered by water and ammonia rain, 
            with lightning bursts that disperse deep within Saturn’s clouds.
          </Typography>
        </Grid>
        <Grid item container alignItems='center' justify='center' spacing={5}>
        <Grid item sm={4}>
          <img src={SaturnHexImg} alt='Saturn Hexagonal Storm' className={classes.img} />
        </Grid>
        <Grid item sm={5}>
          <img src={SouthPoleImg} alt='Saturn South Pole' className={classes.img} />
        </Grid>
        </Grid>
        <Grid item sm={12}>
          <Typography variant={props.v.sub_sec}>Polar vertices</Typography>
          <Typography variant={props.v.body}>
            Cassini also documented two other storm systems on Saturn known as 
            the polar vertices named because they exist on the north and south 
            poles of the planet. The northern vortex is encircled by smaller 
            storms, which all exist inside of a hexagonal jet stream. Saturn’s 
            southern vortex is similar in size to Earth and is equivalent to a 
            hurricane, with an eye in the center. 
          </Typography>          
        </Grid>
        <Grid item sm={5}>
          <img src={SaturnRingsImg} alt='Rings of Saturn' className={classes.img} />
        </Grid>
        <Grid item sm={7}>
          <Typography variant={props.v.section}>Saturn's Rings</Typography>
          <Typography variant={props.v.body} paragraph>
            Saturn’s rings are believed to be made of fragments of moons, 
            comets, and asteroids. Presumably, these pieces were already 
            broken up before reaching the planet’s orbit but were broken up 
            even more by Saturn’s gravity. The materials in Saturn’s rings 
            range from tiny particles the size of dust to massive chunks as 
            big as a house. 
          </Typography>
          <Typography variant={props.v.sub_sec}>Layout of Rings</Typography>
          <Typography variant={props.v.body} paragraph>
            There are seven main rings we know of, labeled A-G, in the order 
            of their discovery. The closest ones to Saturn are D, C, and B. 
            Following these rings is a gap known as the Cassini Division. 
            Following this gap are rings A, F, G, and E. Overall, the rings 
            span up to 175,000 miles from the planet, with a vertical height 
            of about 30 feet.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Saturn;