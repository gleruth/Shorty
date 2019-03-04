import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLinks } from "../../actions";

class ShortList extends Component {
  componentDidMount() {
    this.props.fetchLinks();
  }

  renderLinks() {
    return this.props.links.slice(0, 5).map(link => {
      return (
        <div className="collection" key={link.shortLinkId}>
          <Link
            to={link.shortLinkId}
            className="collection-item"
            target="_blank"
          >
            {window.location.host + "/" + link.shortLinkId}
          </Link>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderLinks()}</div>;
  }
}

function mapStateToProps({ links }) {
  return { links };
}

export default connect(
  mapStateToProps,
  { fetchLinks }
)(ShortList);
