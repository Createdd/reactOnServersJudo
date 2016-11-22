'use strict';

import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="athletes-selector">
          {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
        </div>
      </div>
    );//creating an AthletePreview component for each athlete while iterating through them. pass all the information about an athlete using the the JSX spread operator (...athleteData)
  }//render
}//export IndexPage component
