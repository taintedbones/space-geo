import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    body: {
        justifyContent: "left"
    }
}));

function GeoMoonPage(props) {
    const classes = useStyles();

    return(
        <div className={classes.body}>
            <Typography variant={props.v.title}>The Moon</Typography>
            <Typography variant={props.v.body} gutterBottom="true">
                We know from the age of lunar rocks that the Moon at least partially solidified 
                4.4 billion years ago. The actual time of formation is a bit harder to determine 
                than that of Earth’s formation.  Most Astronomers believe it formed after a 
                collision between a Mars-sized object and molten phase Earth. Researchers were 
                able to deduce that this theory was possible using a series of computer simulations. 
                Because of the differences in density and composition, it is clear that the Moon 
                and Earth were not formed simultaneously and of the same matter. However, 
                similarities in their mantles tell us that it is unlikely they formed independently
                 but instead subsequentially.
            </Typography>
            <Typography variant={props.v.section}>
                Maria -- the ancient dark lava seas of the Moon
            </Typography>
            <Typography variant={props.v.body} gutterBottom="true">
            	The most recognizable features of the Moon’s surface are the large dark regions 
                visible through a telescope and the naked eye. These dark regions are vast flat 
                areas called maria (from the Latin meaning “seas”). Early researchers noted that 
                the maria looked similar to the oceans we see on Earth. Interestingly, they were 
                not too far off with that observation. Maria results from the spread of lava from 
                an earlier volcanic period that solidified into the dark regions we see today. So 
                in a sense, maria are the molten lava seas of the Moon.

                The Moon’s maria are only found on the side closest to Earth. This is due to 
                Earth’s gravitational pull making that side’s crust thinner and the impact that 
                caused lava upwelling to occur. Therefore, the non-Earth facing side of the Moon 
                is all highlands.
            </Typography>
            <Typography variant={props.v.sub_sec}>
                Maria Rocks
            </Typography>
            <Typography variant={props.v.body} gutterBottom="true">
            	Since the Moon’s maria regions are solidified lava, the regions’ matter is basaltic 
                and iron-rich, giving it a higher density and dark color. Based on samples taken from 
                the Moon’s surface, geologists believe that these basaltic rocks came about similar 
                to those on Earth, from the upwelling of lava through the crust.

                Through radioactive dating, researchers have found maria rock ages dating back 3.2 
                to 3.9 billion years
            </Typography>
            <Typography variant={props.v.section}>
                Lunar Highlands
            </Typography>
            <Typography variant={props.v.body} gutterBottom="true">
            	The light regions of the Moon’s surface are called the lunar highlands, originally 
                named terrae from the Latin word for “land.” Just as maria are compared to the 
                Earth’s seas, the lunar highlands look similar to Earth’s continents when viewed 
                from the naked eye. 
            </Typography>
            <Typography variant={props.v.sub_sec}>
                Highland Rocks
            </Typography>
            <Typography variant={props.v.body} gutterBottom="true">
            	The highlands are mostly made up of aluminum-rich rocks, giving them a lower density 
                and light color. Through radioactive dating, researchers have found highland rock 
                ages dating back 4 billion years.
            </Typography>
            <Typography variant={props.v.section}>
                Craters
            </Typography>
            <Typography variant={props.v.body} gutterBottom="true">
            	Craters can be found all over the Moon’s surface; however, they are more prevalent 
                in the highlands. Because there is no air on the Moon, these impacts stay relatively 
                preserved in space and are the primary source of erosion. Using what we know about 
                lunar rock ages, scientists have been able to get an idea of the Moon’s geologic 
                record. It is believed that between 3.9 and 4.1 billion years ago, after the lunar 
                highlands had solidified, there was a massive rise in meteoric impacts. During this 
                time, some of the impacts were so large and powerful that they cracked the Moon’s 
                crust, allowing lava to well up and fill the basins we know as the maria.
            </Typography>
        </div>
    );
}

export default GeoMoonPage;