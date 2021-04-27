import logo from './logo.svg';
import { makeStyles, Typography } from '@material-ui/core';
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
import './App.css';

const useStyles = makeStyles((theme) => ({
  app: {
    background: "darkgray",
    height: "100%",
  },
  body: {
    marginTop: "200px",
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <div className={classes.body}>
        <Router>
          <Route path="/" component={TopNav} />
          <Switch>
            <Route path="/space-geo/exp-tools" component={ExpToolsPage} />
            <Route path="/space-geo/features" component={GeoFeaturesPage} />
            <Route path="/space-geo/moon" component={GeoMoonPage} />
            <Route path="/space-geo/planets" component={GeoPlanetsPage} />
            <Route path="/space-geo/sources" component={SourcesPage} />
            <Route path="/space-geo" component={HomePage} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
