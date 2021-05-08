import { makeStyles } from '@material-ui/core';
import { 
  BrowserRouter as Router,
  Route,
  Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExpToolsPage from "./pages/ExpToolsPage";
import GeoFeaturesPage from "./pages/GeoFeaturesPage";
import GeoMoonPage from "./pages/GeoMoonPage";
import GeoPlanetsPage from "./pages/GeoPlanetsPage";
import SourcesPage from "./pages/SourcesPage";
import TopNav from './components/TopNav';
import Background from './assets/Space-Background.jpg';

const b_margins = "150px";

const useStyles = makeStyles((theme) => ({
  app: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'repeat-y',
    backgroundSize: '100%',
    backgroundAttachment: 'fixed',
    height: '100vv'
  },
  body: {
    background: 'white',
    backgroundAttachment: 'fixed',
    marginLeft: b_margins,
    marginRight: b_margins,
    paddingTop: '100px',
    height: '100vv'
  }
}));

function App() {
  const classes = useStyles();
  const format = {
    title: "h2",
    section: "h4",
    sub_sec: "h5",
    body: "body1",
  }

  return (
    <div className={classes.app}>
      <div className={classes.body}>
        <Router>
          <Route path="/" component={TopNav} />
          <Switch>
              <Route path="/space-geo/exp-tools" component={ExpToolsPage} />
              <Route path="/space-geo/features" component={GeoFeaturesPage} />
              <Route path="/space-geo/moon">
                <GeoMoonPage v={format} />
              </Route>
              <Route path="/space-geo/planets">
                <GeoPlanetsPage v={format} />
              </Route>
              <Route path="/space-geo/sources" component={SourcesPage} />
              <Route path="/space-geo" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
