import { Grid, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    body: {
      height: "90vh",
    },
  }));

function SourcesPage(props) {
    const classes = useStyles();

  return (
    <div className={classes.body}>
      <Grid container spacing={3} alignItems="flex-start" justify="center">
        <Grid item xs={11}>
          <Typography variant={props.v.title}>Sources Page</Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography variant={props.v.body}>
            A Beginner’s Guide to the Universe – Eric Chaisson, Steve McMillan
            <br />
            <br />
            Exploring Geology (5th ed.) - Stephen J. Reynolds, Julia K. Johnson,
            Paul J. Morin, Charles M.Carter
            <br />
            <br />
            <a href="https://mars.nasa.gov" target="_blank" rel="noreferrer">
              https://mars.nasa.gov
            </a>
            <br />
            <br />
            <a href="https://hubblesite.org" target="_blank" rel="noreferrer">
              https://hubblesite.org
            </a>
            <br />
            <br />
            <a href="https://nasa.gov" target="_blank" rel="noreferrer">
              https://nasa.gov
            </a>
            <br />
            <br />
            <a
              href="https://solarsystem.nasa.gov/"
              target="_blank"
              rel="noreferrer"
            >
              https://solarsystem.nasa.gov/
            </a>
            <br />
            <br />
            <a
              href="https://www.planetary.org/worlds/solar-system-timeline"
              target="_blank"
              rel="noreferrer"
            >
              https://www.planetary.org/worlds/solar-system-timeline
            </a>
            <br />
            <br />
            <a
              href="https://spaceplace.nasa.gov/impact-crater/en/"
              target="_blank"
              rel="noreferrer"
            >
              https://spaceplace.nasa.gov/impact-crater/en/
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default SourcesPage;
