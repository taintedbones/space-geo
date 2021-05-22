import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    width: "inherit",
    height: "50px",
    position: "relative",
    bottom: 0,
    paddingTop: "10px",
    marginTop: "15px",
    backgroundColor: "gainsboro",
  },
}));

function AppFooter() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
      <Typography variant="button">
        <center>Webpage designed and created by: Kierstyn Just</center>
      </Typography>
    </div>
  );
}

export default AppFooter;
