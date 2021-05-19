import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { GiSpikyExplosion, GiBurningMeteor, GiCaldera, GiExplodingPlanet, GiRingedPlanet } from "react-icons/gi";

const useStyles = makeStyles((theme) => ({
  spacePaper: {
    padding: "6px 16px",
    backgroundColor: "lightblue",
  },
  earthPaper: {
    padding: "6px 16px",
    backgroundColor: "lightgreen",
  },
  icon: {
      color: "black",
      width: "25px",
      height: "auto"
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
            <Paper elevation={3} className={classes.spacePaper}>
              Big Bang forms the Solar System
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
            <Paper elevation={3} className={classes.spacePaper}>
              The Gas Giants (Jupiter, Saturn, Uranus, and Neptune) form.
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 4.5 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.spacePaper}>
              Mercury, Venus, Earth, and Mars form. A Mercury-sized object
              collides with Earth, and the resulting debris forms the Moon.
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 4.1-3.8 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.spacePaper}>
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
            <Paper elevation={3} className={classes.spacePaper}>
              Giant planets’ crowding causes volcanism in inner planets.
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 3.8-3.5 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.spacePaper}>
              Life begins on Earth
            </Paper>
          </TimelineContent>
        </TimelineItem>
      <TimelineItem>
          <TimelineOppositeContent>~ 2.7 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.spacePaper}>
                Large stromatolites on Earth
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 2.5 bya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.spacePaper}>
                First eukaryotes on Earth
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>~ 66 mya</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
                <GiBurningMeteor className={classes.icon} />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.spacePaper}>
                Giant asteroid impacts Earth, causing three quarters of life to go extinct
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default SpaceTimeline;
