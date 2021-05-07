import { Typography } from "@material-ui/core";

function Neptune(props) {
  return (
    <div>
      <Typography variant={props.v.title}>Neptune</Typography>
      <Typography variant={props.v.body}>
          Test
      </Typography>
    </div>
  );
}

export default Neptune; 