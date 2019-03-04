import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";

class App extends Component {
  componentDidMount() {
    this.props.fetchLinks();
  }

  renderShortRoutes() {
    return this.props.links.map(link => {
      const shortPath = "/" + link.shortLinkId;
      return (
        <Route
          key={link.shortLinkId}
          path={shortPath}
          component={() => {
            const longLink = link.longLink;
            window.location = longLink;
            return null;
          }}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            {this.renderShortRoutes()}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({ links }) {
  return { links };
}

export default connect(
  mapStateToProps,
  actions
)(App);
