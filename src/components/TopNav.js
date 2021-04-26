import { AppBar, Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appbar: {
        position: "fixed",
        display: "inline-block",
        background: "darkslateblue",
    },
    button: {
        maxWidth: "150px",
        height: "80px",
        variant: "outlined",
    },
    link: {
        textDecoration: "none",
        color: "white",
    }
}));

function TopNav() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appbar}>
                <Button className={classes.button} variant="outlined">
                    <Link className={classes.link} to='/space-geo'>
                        Home
                    </Link>
                </Button>
                <Button className={classes.button} variant="outlined">
                    <Link className={classes.link} to='/space-geo/exp-tools'>
                        Exploration Tools
                    </Link>
                </Button>
                <Button className={classes.button} variant="outlined">
                    <Link className={classes.link} to='/space-geo/features'>
                        Geological Features
                    </Link>
                </Button>
                <Button className={classes.button} variant="outlined">
                    <Link className={classes.link} to='/space-geo/moon'>
                        Geology of the Moon
                    </Link>
                </Button>
                <Button className={classes.button} variant="outlined">
                    <Link className={classes.link} to='/space-geo/planets'>
                        Geology of the Planets
                    </Link>
                </Button>
                <Button className={classes.button} variant="outlined">
                    <Link className={classes.link} to='/space-geo/sources'>
                        Sources
                    </Link>
                </Button>
            </AppBar>
        </div>
    );
}

export default TopNav;