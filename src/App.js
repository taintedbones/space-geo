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

const b_margins = "20px";

const useStyles = makeStyles((theme) => ({
  app: {
    background: "darkgray",
    height: "100%",
  },
  body: {
    marginTop: "120px",
    marginLeft: b_margins,
    marginBottom: b_margins,
    marginRight: b_margins,
  }
}));

function App() {
  const classes = useStyles();
  const format = {
    title: "h3",
    section: "h5",
    sub_sec: "h6",
    body: "body1",
  }

  return (
    <div className="App">
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
