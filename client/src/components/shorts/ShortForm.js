import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./ShortForm.css";
import ShortField from "./ShortField";
import * as actions from "../../actions";
import validateLink from "../../utils/validateLink";

class ShortForm extends Component {
  render() {
    return (
      <div className="row">
        <form>
          <div className="grid-example col s12 m10">
            <Field
              key={"longLink"}
              component={ShortField}
              type="text"
              placeholder={"Type or paste a link to shorten it"}
              name={"longLink"}
            />
          </div>
          <div className="grid-example col s12 m2">
            <button
              className="teal btn-flat right white-text ShortForm-btn"
              onClick={() => this.props.submitLink(this.props.formValues)}
            >
              Shorten Link
              <i className="material-icons right">link</i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  errors.longLink = validateLink(values.longLink || "");

  return errors;
}

function mapStateToProps(state) {
  if (state.form.shortForm) {
    return { formValues: state.form.shortForm.values };
  }
  return { formValues: {} };
}

ShortForm = connect(
  mapStateToProps,
  actions
)(withRouter(ShortForm));

export default reduxForm({
  validate,
  form: "shortForm"
})(ShortForm);
