import { makeStyles } from "@material-ui/core";
import { HashRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExpToolsPage from "./pages/ExpToolsPage";
import GeoFeaturesPage from "./pages/GeoFeaturesPage";
import GeoMoonPage from "./pages/GeoMoonPage";
import GeoPlanetsPage from "./pages/GeoPlanetsPage";
import SourcesPage from "./pages/SourcesPage";
import TopNav from "./components/TopNav";
import Background from "./assets/Space-Background.jpg";
import AppFooter from "./components/Footer.js";
import '@fontsource/roboto';


const useStyles = makeStyles((theme) => ({
  app: {
    backgroundImage: `url(${Background})`,
    backgroundRepeat: "repeat-y",
    backgroundSize: "100%",
    backgroundAttachment: "fixed",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  body: {
    background: "white",
    position: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    height: "100%",
    width: "100%",
    maxWidth:"1000px",
  },
}));

function App() {
  const classes = useStyles();
  const format = {
    title: "h2",
    section: "h4",
    sub_sec: "h5",
    body: "body1",
    caption: "caption",
  };

  return (
    <div className={classes.app}>
      <div className={classes.body}>
        <HashRouter basename="/">
          <Route path="/" component={TopNav} />
          <Switch>
            <Route path="/exp-tools">
              <ExpToolsPage v={format} />
            </Route>
            <Route path="/features">
              <GeoFeaturesPage v={format} />
            </Route>
            <Route path="/moon"> 
              <GeoMoonPage v={format} />
            </Route>
            <Route path="/planets">
              <GeoPlanetsPage v={format} />
            </Route>
            <Route path="/sources">
              <SourcesPage v={format} />
            </Route>
            <Route path="/">
              <HomePage v={format} />
            </Route>            
          </Switch>
          <Route path="/" component={AppFooter} />
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
