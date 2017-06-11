import React, { Component } from 'react';
import CheckList from './Checklist';

class Card extends Component {
  render(){
    return(
      <div>
        <div>{ this.props.title }</div>
        <div>
          { this.props.description }
          <CheckList cardId={ this.props.id } tasks={ this.props.tasks } />
        </div>
      </div>
    );
  }
}
export default Card;