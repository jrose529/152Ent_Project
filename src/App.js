import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavigationBar from "./components/navbar.component"
import FooterBar from "./components/footerbar.component"
import Home from "./components/home.component";
import Segment from "./components/segment.component";
import Studio from "./components/studio.component";
import Store from "./components/store.component";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <NavigationBar />
        <Route path="/" exact component={Home} />
        <Route path = "/segment" component={Segment} />
        <Route path="/studio" component={Studio}/>
        <Route path="/store" component={Store} />
        <FooterBar />
       </div>
    </Router>
  );
}

export default App;
