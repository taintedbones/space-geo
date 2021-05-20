import { Grid, Typography } from "@material-ui/core";

function ImgCaption(props) {
  return (
    <div>
      <Grid item container justify="center">
        <Typography variant="caption">
          {props.text} - Source:
          <a href={props.url} target="_blank" rel="noreferrer">
            {props.source}
          </a>
        </Typography>
      </Grid>
    </div>
  );
}

export default ImgCaption;