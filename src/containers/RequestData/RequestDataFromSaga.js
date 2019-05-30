import React, { Component } from "react";
import { connect } from "react-redux";
import { requestApiData } from '../../redux/actions/HelloWorld';

class RequestDataFromSaga extends Component {

  constructor(props) {
    super(props)
    this.calculate = this.calculate.bind(this)
  }

  calculate() {
    this.props.requestApiData();
    if(this.props.requestData.receiveApiData.results) {
      console.log(3, this.props.requestData.receiveApiData.results[0].email)
    }
  }

  render() {
    console.log(2, this.props)
    return (
      <div className="App">
        <div className="Age-label">
          your email: {this.props.requestData.receiveApiData.results && <span>{this.props.requestData.receiveApiData.results[0].email}</span>}
        </div>
        <button onClick={this.calculate}>Get Data Sagaaa</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  requestData: state.requestData,
})

const mapDispatchToProps = {
  requestApiData: requestApiData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestDataFromSaga);
