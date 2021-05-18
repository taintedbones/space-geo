import React from 'react';
import { Box, makeStyles, Tab, Tabs, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import Mercury from '../components/Mercury.js';
import Venus from '../components/Venus.js';
import Mars from '../components/Mars.js';
import Jupiter from '../components/Jupiter.js';
import Saturn from '../components/Saturn.js';
import Uranus from '../components/Uranus.js';
import Neptune from '../components/Neptune.js';

const useStyles = makeStyles((theme) => ({
    body: {
    justifyContent: "left"
    },
    tabPanel: {
      justifySelf: "center"
    },
    tabs: {
      width: '100%'
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function GeoPlanetsPage(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
      <div>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary"
          variant='scrollable' scrollButtons='auto'>
          <Tab label="Mercury" {...a11yProps(0)}/>
          <Tab label="Venus" {...a11yProps(1)}/>
          <Tab label="Mars" {...a11yProps(2)}/>
          <Tab label="Jupiter" {...a11yProps(3)}/>
          <Tab label="Saturn" {...a11yProps(4)}/>
          <Tab label="Neptune" {...a11yProps(5)}/>
          <Tab label="Uranus" {...a11yProps(6)}/>
        </Tabs>
        {/* <Typography variant="h4">Geology of the Planets Page</Typography> */}
        <TabPanel value={value} index={0}>
            <Mercury v={props.v} />
        </TabPanel>
        <TabPanel value={value} index={1} className={classes.tabPanel}>
            <Venus v={props.v} />
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Mars v={props.v} />
        </TabPanel>
        <TabPanel value={value} index={3}>
            <Jupiter v={props.v} />
        </TabPanel>
        <TabPanel value={value} index={4}>
            <Saturn v={props.v} />
        </TabPanel>
        <TabPanel value={value} index={5}>
            <Neptune v={props.v} />
        </TabPanel>
        <TabPanel value={value} index={6}>
            <Uranus v={props.v} />
        </TabPanel>
      </div>
    );
}

export default GeoPlanetsPage;