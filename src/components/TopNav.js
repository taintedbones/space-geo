import { AppBar, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    appbar: {
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        background: "darkslateblue",
        alignItems:'center',
        paddingLeft: "5%",
        marginBottom: "15px"
    },
    button: {
        height: "70px",
        width: "100%",
        variant: "outlined",
        color: "white"
    },
    link: {
        textDecoration: "none",
        color: "white",
        width: "150px"
    }
}));

function TopNav() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.appbar}>
                <Link className={classes.link} to='/space-geo'>
                    <Button className={classes.button} variant="outlined">
                        Home
                    </Button>
                </Link>
                <Link className={classes.link} to='/space-geo/exp-tools'>
                    <Button className={classes.button} variant="outlined">
                        Exploration Tools                    
                    </Button>
                </Link>
                <Link className={classes.link} to='/space-geo/features'>
                    <Button className={classes.button} variant="outlined">                    
                        Geological Features                    
                    </Button>
                </Link>
                <Link className={classes.link} to='/space-geo/moon'>
                    <Button className={classes.button} variant="outlined">                    
                        Geology of the Moon                    
                    </Button>
                </Link>
                <Link className={classes.link} to='/space-geo/planets'>
                    <Button className={classes.button} variant="outlined">
                        Geology of the Planets                    
                    </Button>
                </Link>
                <Link className={classes.link} to='/space-geo/sources'>
                    <Button className={classes.button} variant="outlined">                    
                        Sources                    
                    </Button>
                </Link>
            </AppBar>
        </div>
    );
}

export default TopNav;