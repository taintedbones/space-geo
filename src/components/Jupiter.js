import { Typography } from "@material-ui/core";

function Jupiter(props) {
  return (
    <div>
      <Typography variant={props.v.title}>Jupiter</Typography>
      <Typography variant={props.v.body}>
          Test
      </Typography>
    </div>
  );
}

export default Jupiter;