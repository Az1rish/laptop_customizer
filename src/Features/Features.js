import React, { Component } from 'react';
import './Features.css';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
import Options from '../Options/Options';

export default class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                <Options 
                    item={item}/>
            });
            return (
              <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                  <h3>{feature}</h3>
                </legend>
                {options}
              </fieldset>
            );
        });
        return (
            <>
                {features}
            </>
        );
    }
}