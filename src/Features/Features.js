import React, { Component } from 'react';
import './Features.css';
import Options from '../Options/Options';
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

export default class Features extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            
            const options = this.props.features[feature].map(item => {
                const itemHash = slugify(JSON.stringify(item));
                return (
                    <Options 
                        item={item}
                        key={itemHash}
                        feature={feature}
                        selected={this.props.selected}
                        USCurrencyFormat={this.props.USCurrencyFormat}
                        handleUpdate={this.props.handleUpdate}/>        
                    );
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
            <div>
                {features}  
            </div>  
        );
    }
}