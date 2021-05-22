import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import {
  GiSpikyExplosion,
  GiCaldera,
  GiExplodingPlanet,
  GiRingedPlanet,
  GiEarthAmerica,
  GiStarSwirl,
  GiOrbit,
  GiKaleidoscopePearls
} from "react-icons/gi";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
    backgroundColor: "lightblue",
  },
  icon: {
    color: "black",
    width: "25px",
    height: "auto",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function SpaceTimeline() {
  const classes = useStyles();

  return (
    <div>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>~ 13.8 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <GiSpikyExplosion className={classes.icon} />
            </TimelineDot>            
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              Big Bang forms the Universe
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 4.6 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <GiStarSwirl className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              Solar nebula forms and Archean Eon begins
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 4.59 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <GiRingedPlanet className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              The Gas Giants (Jupiter, Saturn, Uranus, and Neptune) form.
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 4.5 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <GiExplodingPlanet className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              Mercury, Venus, Earth, and Mars form. A Mercury-sized object
              collides with Earth, and the resulting debris forms the Moon.
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 4.1-3.8 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <GiOrbit className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              The giant planets’ orbits shift, scattering smalls worlds
              throughout the solar system. Some crowd inner planets, possibly
              delivering water and organics to Earth.
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 4.3 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <GiCaldera className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              Giant planets’ crowding causes volcanism in inner planets.
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 3.8-3.5 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <GiEarthAmerica className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              Life begins on Earth
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 2.5 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <GiKaleidoscopePearls className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              Proterozoic Eon begins and first eukaryotes appear on Earth
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default SpaceTimeline;
