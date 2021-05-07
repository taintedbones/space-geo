import { Typography } from "@material-ui/core";

function Saturn(props) {
  return (
    <div>
      <Typography variant={props.v.title}>Saturn</Typography>
      <Typography variant={props.v.body}>
          Test
      </Typography>
    </div>
  );
}

export default Saturn;