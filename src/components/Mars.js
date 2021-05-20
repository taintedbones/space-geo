import { Grid, makeStyles, Typography } from "@material-ui/core";
import MarsImg from "../assets/Mars/Mars.jpg";
import VallesMarinerisImg from "../assets/Mars/Valles-Marineris.jpg";
import ChannelsImg from "../assets/Mars/Mars-Channels.jpg";
import CrossBeddingImg from "../assets/Mars/Mars-Cross-Bedding.jpg";
import TopographicImg from "../assets/Mars/Mars-Topographic.jpg";
import VolcanoImg from "../assets/Mars/Mars-Volcano.jpg";
import PerserveranceImg from "../assets/Mars/Perserverance.jpg";
import ImgCaption from "../components/ImgCaption.js";

const useStyles = makeStyles((theme) => ({
  img: {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "5%",
    marginTop: "10%",
  },
  gridItem: {
    height: "100%",
  },
  topoImg: {
    width: "80%",
    borderRadius: "2%",
  },
}));

function Mars(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item sm={12} md={5} className={classes.gridItem}>
          <img src={MarsImg} className={classes.img} alt="Mars" />
          <ImgCaption
            text="Mars"
            url="https://solarsystem.nasa.gov/planets/mars/galleries/?page=0&per_page=25&order=created_at+desc&search=&href_query_params=category%3Dplanets_mars&button_class=big_more_button&tags=mars&condition_1=1%3Ais_in_resource_list&category=51"
            source="NASA"
          />
        </Grid>
        <Grid item sm={12} md={7} className={classes.gridItem}>
          <Typography variant={props.v.title}>Mars</Typography>
          <Typography variant={props.v.body} paragraph>
            Mars is the easiest planet for us to observe because it is the
            closest. Because of it’s axial tilt and unusual orbit, the planet
            experiences slow seasonal changes throughout its period of a year.
            Based on the current season, Mars’s polar ice caps grow or shrink.
            These surface changes make the planet’s dark regions, or cratered
            and eroded areas, fluctuate in size and shape. In Mars’s summer
            season, there are planetwide dust storms that often last for months.
            During the dust storms, dry dust is carried from one area of the
            planet and deposited in another. All of these seasonal changes make
            it seem, when viewing Mars from Earth, that the planet’s surface is
            constantly changing. However, the only real surface changes are
            changes in the dust. Mars’s terrain is split up into two
            hemispheres, North and South. The southern hemisphere is made up of
            mostly highlands while the northern hemisphere contains volcanic
            plains, like the Moon’s maria. As is seen with the other terrestrial
            planets, the southern highlands of Mars are presumably the planet’s
            original crust.
          </Typography>
        </Grid>
        <Grid item container justify="center" xs={12}>
          <Typography variant={props.v.section} paragraph>
            Major Geological Features
          </Typography>
          <img
            src={TopographicImg}
            alt="Topographic Map of Mars"
            className={classes.topoImg}
          />
          <Grid item container justify="center" sm={12}>
            <Typography variant={props.v.caption}>
              Topographic map of Mars
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Typography variant={props.v.sub_sec}>Tharsis Bulge</Typography>
          <Typography variant={props.v.body} paragraph>
            The Tharsis Bulge is the youngest region on Mars, estimated to be
            about 2-3 billion years old. It is roughly the size of North America
            and close to 10 km tall. Although there are no signs of plate
            tectonics on Mars, Tharsis would be the closest thing the planet has
            to a continent.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant={props.v.sub_sec}>Valles Marineris</Typography>
          <Typography variant={props.v.body} paragraph>
            To the east of Tharsis is Valles Marineris, or the Mariner Valley.
            Valles Marineris is a massive crack in Mars’s surface that is
            believed to be at least 2 billion years old. This crack spans over
            4000 km, about one-fifth of the way around Mars, and can be seen
            from Earth. At this size, the Grand Canyon could fit into one of
            smaller cracks branching off of Valles Marineris. Geologists believe
            that Valles Marineris formed from the crustal forces that pushed the
            Tharsis region up from the ground. When this occurred, it caused the
            neighboring surface to split and crack, thus giving us Valles
            Marineris.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant={props.v.sub_sec}>Hellas Basin</Typography>
          <Typography variant={props.v.body} paragraph>
            In the southern highlands lies the Hellas Basin. This region is the
            lowest part of Mars, spanning 3000 km wide and about 9 km deep.
            Because of the basin’s shape and structure, it is believed to have
            formed from an impact. Some researchers believe that the impact that
            created Hellas Basin is also responsible for the large portion of
            highlands making up the planet’s surface. Researchers believe the
            basin was formed very early in Mars’s history, about 4 billion years
            ago, because of its heavily cratered floor.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant={props.v.sub_sec}>Borealis Basin</Typography>
          <Typography variant={props.v.body} paragraph>
            In the north region of Mars is the Borealis Basin. Similar to the
            Helles Basin, many researchers believe that the Borealis Basin was
            formed by one of the largest impacts in the solar system, as far as
            we know today. Although this theory is heavily debated, researchers
            have conducted computer simulations suggesting the basin could be
            the result of an impact with an object over 2000 km wide. Those
            supporting the theory believe that this impact occurred during the
            planet’s early stages and could explain why Mars’s north hemisphere
            is much lower than the southern hemisphere.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={VolcanoImg} alt="Mars Volcano" className={classes.img} />
          <Grid item container justify="center">
            <Typography variant={props.v.caption}>Volcano on Mars</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant={props.v.section}>Volcanoes on Mars</Typography>
          <Typography variant={props.v.body} paragraph>
            Mars is known for having the largest volcanoes in our solar system.
            Images taken by various spacecrafts sent to Mars tell us that the
            planet has several hundreds of volcanoes on its surface. Since Mars
            has no plate tectonics, its volcanoes are shield volcanoes that sit
            on various hot spots in the planet’s mantle. Although it is unknown
            if these volcanoes are still active, there is evidence that some of
            them have erupted in the last 100 million years.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant={props.v.section}>
            Is there water on Mars?
          </Typography>
          <Typography variant={props.v.body} paragraph>
            One of the biggest questions that researchers have spent countless
            missions trying to uncover is if there is or was water on Mars. This
            is another heavily debated subject amongst the scientific community.
            The belief that water once existed on Mars came about after the
            Viking orbiters caught glimpses of features on the planet’s surface
            that look similar to river systems found on Earth. Specifically, two
            features seen were runoff channels and outflow channels. Geologists
            believe that these features are in fact dried up river channels and
            proof that water once existed on Mars.
          </Typography>
          <Typography variant={props.v.sub_sec}>Arguments For</Typography>
          <Typography variant={props.v.body} paragraph>
            Those in support of the idea that Mars once had water believe the
            outflow channels were possibly the result of a massive flood long
            ago. Also, they believe that in Mars’s early years there were lakes,
            rivers, and even oceans. In addition to the images of possible river
            systems, the Mars Global Surveyor caught images of what appeared to
            have been a delta. Some even argue that this delta is evidence
            suggesting that Mars once has oceans.
          </Typography>
          <Typography variant={props.v.sub_sec}>Arguments Against</Typography>
          <Typography variant={props.v.body} paragraph>
            Those against the idea that Mars once had water claim that some of
            these features seen on the planet’s surface could be a result of
            geologic activity. More specifically, they believe the tectonic
            forces that created Tharis and Valles Marineris also created these
            features. Additionally, deniers point out that there are not enough
            carbonate rock layers on Mars’s surface, which is found in ancient
            oceans. Another theory against Mars having water is
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={ChannelsImg} alt="Mars Channels" className={classes.img} />
          <Grid item container justify="center">
            <Typography variant={props.v.caption}>
              Suspected Water Channels on Mars (Source: NASA)
            </Typography>
          </Grid>
          <img
            src={CrossBeddingImg}
            alt="Mars Crossbedding"
            className={classes.img}
          />
          <Grid item container justify="center">
            <Typography variant={props.v.caption}>
              Crossbedding in Mars rocks (Source: NASA)
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img
            src={PerserveranceImg}
            alt="Perserverance on Mars"
            className={classes.img}
          />
          <Grid item container justify="center">
            <Typography variant={props.v.caption}>
              Perserverance Rover Selfie on Mars (Source: NASA)
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography variant={props.v.section}>
            Earth's Exploration on Mars
          </Typography>
          <Typography variant={props.v.body} paragraph>
            The United States has successfully landed several spacecraft across
            Mars. Each of these missions had the goal of geologic and chemical
            analyses of Mars rocks, searching for life, and searching for water.
            Using landers, researchers have been able to get a better
            understanding of Mars’s surface, climate, and the structure of the
            planet’s crust. Additionally, researchers were able to discover the
            presence of subsurface water ice, clay, and carbonates in Martian
            soil. These pieces of evidence are crucial in helping us determine
            if Mars once had bodies of water and life. The most recent mission
            to Mars is the landing of the Perseverance Rover in 2020, which
            recently was able to convert some of the planet’s carbon
            dioxide-rich atmosphere into oxygen.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Mars;
