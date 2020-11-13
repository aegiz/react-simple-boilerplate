import React from "react";
import "./styles.css";
import PropTypes from "prop-types";
import Header from "../../components/Header";
import Form from "../../components/Form";
import CTA from "../../components/CTA";

class Homepage extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  state = {
    name: "Adrien Rahier",
    height: "190",
  };

  // FYI Proper way to use setState for a nested object's state
  // updateNestedInputs = (key, newInput) => {
  //   const inputs = { ...this.state.inputs };
  //   inputs[key] = newInput;
  //   this.setState({ inputs });
  // };

  updateInputs = (newInputs) => {
    this.setState(newInputs);
  };

  goToShare = () => {
    this.props.history.push({
      pathname: "/share",
      state: [this.state],
    });
  };

  render() {
    return (
      <div className="homepage">
        <Header />
        <p className="description">
          My name is {this.state.name} and I am {this.state.height}cm
        </p>
        <Form
          history={this.props.history}
          name={this.state.name}
          height={this.state.height}
          updateInputs={this.updateInputs}
        />
        <CTA
          text="Share this page"
          type="button"
          onClick={this.goToShare}
          buttonColor="blue"
        />
      </div>
    );
  }
}

export default Homepage;
