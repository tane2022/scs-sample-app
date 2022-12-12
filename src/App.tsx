import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import EndReport from "./components/pages/EndReport";
import StartReport from "./components/pages/StartReport";
import InfoDeliver from "./components/pages/InfoDeliver";
import RemoteCheckVideo from "./components/pages/RemoteCheckVideo";
import ExitStaff from "./components/pages/ExitStaff";
import EntStaff from "./components/pages/EntStaff";
import ConstInfo from "./components/pages/ConstInfo";
import RemoteCheckStart from "./components/pages/RemoteCheckStart";
import RemoteCheckInsert from "./components/pages/RemoteCheckInsert";
import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/endReport" component={EndReport} exact />
        <Route path="/startReport" component={StartReport} exact />
        <Route path="/infoDeliver" component={InfoDeliver} exact />
        <Route path="/remoteCheckVideo" component={RemoteCheckVideo} exact />
        <Route path="/exitStaff" component={ExitStaff} exact />
        <Route path="/entStaff" component={EntStaff} exact />
        <Route path="/constInfo" component={ConstInfo} exact />
        <Route path="/remoteCheckStart" component={RemoteCheckStart} exact />
        <Route path="/remoteCheckInsert" component={RemoteCheckInsert} exact />
        <Route path="/products" component={ProductPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
};

export default App;