import { Grid, makeStyles, Typography } from "@material-ui/core";
import NeptuneImg from '../assets/Neptune/Neptune.jpg';
import NeptuneRingsImg from '../assets/Neptune/Neptune-Rings.jpg';

const useStyles = makeStyles((theme) => ({
  body: {
    justifyContent: "left",
  },
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%"
  }
}));

function Neptune(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} alignItems='center'>
        <Grid item sm={5}>
          <img src={NeptuneImg} alt='Neptune' className={classes.img} />
        </Grid>
        <Grid item sm={7}>
          <Typography variant={props.v.title}>Neptune</Typography>
          <Typography variant={props.v.body} paragraph>
            Neptune is the farthest planet from the Sun and the only planet 
            not visible to the naked eye. Additionally, it is the second ice 
            giant in our solar system. The planet’s color is a notable deep 
            blue, resulting from the high amounts of methane in its atmosphere. 
            In addition to methane, Neptune’s atmosphere also consists of 
            hydrogen and helium. Like Uranus, the planet contains an 
            Earth-sized rocky core surrounded by hot dense fluid of “icy” 
            materials, including ammonia, methane, and water. There is also 
            speculation that the planet has an ocean made up of boiling water. 
            This would be possible due to Neptune’s incredibly high pressure, 
            which would stop the water from boiling away. Neptune is known as 
            the windiest planet in the solar system. The planet’s winds are 
            three times stronger than those found on Jupiter and nine times 
            stronger than what has been observed on Earth.
          </Typography>
        </Grid>
        <Grid item sm={7}>
          <Typography variant={props.v.section}>Neptune's Rings</Typography>
          <Typography variant={props.v.body} paragraph>
            As far as we know, Neptune has five main rings that surround it as 
            well as four ring arcs. From closest to farthest, the rings 
            are named: 
            <ul>
              <li>Galle</li>
              <li>Leverrier</li>
              <li>Lassell</li>
              <li>Arago</li>
              <li>Adams </li>
            </ul>
            The four arcs, located in the outermost ring, Adams, are named:
            <ul>
              <li>Liberté (Liberty)</li>
              <li>Egalité (Equality)</li>
              <li>Fraternité (Fraternity)</li>
              <li>Courage</li>
            </ul>
          </Typography>
        </Grid>
        <Grid item sm={5}>
          <img src={NeptuneRingsImg} alt='Rings of Neptune' className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Neptune; 