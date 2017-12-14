import React, { PropTypes } from 'react';
import _ from 'lodash';

import { Provider, connect } from 'react-redux';

class PetList extends React.Component {
  render() {
    let pets = this.props.pets.map(pet => <div key={pet.id}>{pet.name}</div>);
    return (
      <div>
        <div>Network:{this.props.network}</div>
        <div>Pets:{pets}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //
  return {
    network: state.network['/pet/findByStatus'],
    pets: _.values(state.domain.petsById),
  };
}

// Map Redux actions to component props,a way that allow presentation component to get dispatch action function from parent
function mapDispatchToProps(dispatch, ownProps) {
  //
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PetList);
