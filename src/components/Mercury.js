import { Grid, makeStyles, Typography } from "@material-ui/core";
import MercuryImg from '../assets/Mercury.jpg';

const useStyles = makeStyles((theme) => ({
  body: {
    justifyContent: "left",
  },
  mercuryImg: {
    maxWidth: "300px",
    height: "auto",
    borderRadius: "5%",
  },
}));

function Mercury(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={5} alignItems='center'>
        <Grid item sm={12} md={4}>
          <img src={MercuryImg} className={classes.mercuryImg} alt='Mercury' />
        </Grid>
        <Grid item sm={12} md={7}>
          <Typography variant={props.v.title}>Mercury</Typography>
          <Typography variant={props.v.body}>
          	Mercury’s surface has a strong resemblance to our Moon’s 
            highlands. However, the craters found on Mercury are much 
            shallower due to Mercury’s higher surface gravity. Additionally, 
            Mercury contains smooth regions similar to the Moon’s maria due 
            to lava filling basins left behind from meteoric impacts. 
            However, Mercury’s maria are less noticeable due to their 
            similarity in color to the rest of the planet’s surface. 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Mercury;
