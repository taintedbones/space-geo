import { Grid, makeStyles, Typography } from "@material-ui/core";
import MoonImg from "../assets/Moon/Moon.jpg";
import HighlandsImg from "../assets/Moon/Moon-Highlands.jpg";
import MariaImg from "../assets/Moon/Moon-Maria.jpg";
import CraterImg from "../assets/Moon/Moon-Crater.jpg";
import MariaRocksImg from "../assets/Moon/Moon-Maria-Rocks.jpg";
import ImgCaption from "../components/ImgCaption.js";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%",
  },
}));

function GeoMoonPage(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} justify='space-evenly' alignItems='center'>
        <Grid item sm={12} md={4}>
          <img src={MoonImg} className={classes.img} alt='The Moon' />
          <ImgCaption
            text="The Moon"
            url="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/opo9914d.jpg"
            source="NASA"
          />
        </Grid>
        <Grid item sm={12} md={7}>
          <Typography variant={props.v.title}>The Moon</Typography>
          <Typography variant={props.v.body} gutterBottom>
            We know from the age of lunar rocks that the Moon at least partially
            solidified 4.4 billion years ago. The actual time of formation is a
            bit harder to determine than that of Earth’s formation. Most
            Astronomers believe it formed after a collision between a Mars-sized
            object and molten phase Earth. Researchers were able to deduce that
            this theory was possible using a series of computer simulations.
            Because of the differences in density and composition, it is clear
            that the Moon and Earth were not formed simultaneously and of the
            same matter. However, similarities in their mantles tell us that it
            is unlikely they formed independently but instead subsequentially.
          </Typography>
        </Grid>
        <Grid item sm={12} md={7}>
          <Typography variant={props.v.section}>
            Maria -- the ancient dark lava seas of the Moon
          </Typography>
          <Typography variant={props.v.body} paragraph>
            The most recognizable features of the Moon’s surface are the large
            dark regions visible through a telescope and the naked eye. These
            dark regions are vast flat areas called maria (from the Latin
            meaning “seas”). Early researchers noted that the maria looked
            similar to the oceans we see on Earth. Interestingly, they were not
            too far off with that observation. Maria results from the spread of
            lava from an earlier volcanic period that solidified into the dark
            regions we see today. So in a sense, maria are the molten lava seas
            of the Moon. The Moon’s maria are only found on the side closest to
            Earth. This is due to Earth’s gravitational pull making that side’s
            crust thinner and the impact that caused lava upwelling to occur.
            Therefore, the non-Earth facing side of the Moon is all highlands.
          </Typography>
          <Typography gutterBottom> </Typography>
          <Typography variant={props.v.sub_sec}>Maria Rocks</Typography>
          <Typography variant={props.v.body}>
            Since the Moon’s maria regions are solidified lava, the regions’
            matter is basaltic and iron-rich, giving it a higher density and
            dark color. Based on samples taken from the Moon’s surface,
            geologists believe that these basaltic rocks came about similar to
            those on Earth, from the upwelling of lava through the crust.
            Through radioactive dating, researchers have found maria rock ages
            dating back 3.2 to 3.9 billion years
          </Typography>
        </Grid>
        <Grid item container direction="column" spacing={2} sm={12} md={4}>
          <Grid item>
            <img src={MariaImg} className={classes.img}
              alt='Layers of a section of Maria' />
            <ImgCaption
              text="Layers of lunar Maria"
              url="https://www.nasa.gov/images/content/580638main_080211a.jpg"
              source="NASA"
            />
          </Grid>
          <Grid item>
            <img src={MariaRocksImg} className={classes.img}
              alt='Sample of basaltic Moon rock' />
            <ImgCaption
              text="Sample of a basaltic Moon rock"
              url="https://history.nasa.gov/SP-350/i14-11a.jpg"
              source="NASA"
            />
          </Grid>
        </Grid>
        <Grid item sm={12} md={4}>
          <img src={HighlandsImg} className={classes.img} 
            alt='Astronaut on Lunar Highlands'/>
          <ImgCaption
            text="Astronaut on Lunar Highlands"
            url="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/as16-113-18339.jpg"
            source="NASA"
          />
        </Grid>
        <Grid item sm={12} md={7}>
          <Typography variant={props.v.section}>Lunar Highlands</Typography>
          <Typography variant={props.v.body} paragraph>
            The light regions of the Moon’s surface are called the lunar
            highlands, originally named terrae from the Latin word for “land.”
            Just as maria are compared to the Earth’s seas, the lunar
            highlands look similar to Earth’s continents when viewed from the
            naked eye.
          </Typography>
          <Typography variant={props.v.sub_sec}>Highland Rocks</Typography>
          <Typography variant={props.v.body}>
            The highlands are mostly made up of aluminum-rich rocks, giving
            them a lower density and light color. Through radioactive dating,
            researchers have found highland rock ages dating back 4 billion
            years.
          </Typography>
        </Grid>
        <Grid item sm={12} md={7}>
          <Typography variant={props.v.section}>Craters</Typography>
          <Typography variant={props.v.body}>
            Craters can be found all over the Moon’s surface; however, they
            are more prevalent in the highlands. Because there is no air on
            the Moon, these impacts stay relatively preserved in space and are
            the primary source of erosion. Using what we know about lunar rock
            ages, scientists have been able to get an idea of the Moon’s
            geologic record. It is believed that between 3.9 and 4.1 billion
            years ago, after the lunar highlands had solidified, there was a
            massive rise in meteoric impacts. During this time, some of the
            impacts were so large and powerful that they cracked the Moon’s
            crust, allowing lava to well up and fill the basins we know as the
            maria.
          </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <img src={CraterImg} className={classes.img} alt='Lunar crater'/>
          <ImgCaption
            text="Lunar Craters"
            url="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/as11_44_6609.jpg"
            source="NASA"
          />
        </Grid>
        </Grid>
    </div>
  );
}

export default GeoMoonPage;
