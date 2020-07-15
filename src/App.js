import React from 'react';
import { connect } from "react-redux"; 
import {removeFeature, addFeature} from './actionTitles/actionTitles'


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = (props) => {
  console.log(addFeature)
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    additionalFeatures: state.additionalFeatures,
    car: state.car,
    additionalPrice: state.additionalPrice
  };
};

export default connect(mapStateToProps,{addFeature, removeFeature})(App);
