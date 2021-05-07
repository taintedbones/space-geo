import { Typography } from "@material-ui/core";

function Mercury(props) {
  return (
    <div>
      <Typography variant={props.v.title}>Mercury</Typography>
      <Typography variant={props.v.body}>
          Test
      </Typography>
    </div>
  );
}

export default Mercury;
