import { Typography } from "@material-ui/core";

function Uranus(props) {
  return (
    <div>
      <Typography variant={props.v.title}>Uranus</Typography>
      <Typography variant={props.v.body}>
          Test
      </Typography>
    </div>
  );
}

export default Uranus;