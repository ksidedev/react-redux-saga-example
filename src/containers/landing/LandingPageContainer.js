import React from 'react';
import './styles/scss/styles.scss';
import RequestDataFromSaga from '../RequestData/RequestDataFromSaga';


const LandingPage = () => (
  <div className="landing-page">
    <RequestDataFromSaga />
  </div>);

export default LandingPage;
