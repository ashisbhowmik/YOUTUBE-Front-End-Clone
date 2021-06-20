import "./App.css";
import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommandedVideos from "./RecomandedVideos";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/search/:searchTerm">
            <Header />
            <div className="app__page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>
          <Route path="/">
            <Header />
            <div className="app__page">
              <Sidebar />
              <RecommandedVideos />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
