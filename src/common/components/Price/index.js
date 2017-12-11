import React from 'react';
import PropTypes from 'prop-types';
import {total} from 'helpers/priceCalculation';
import styled from 'styled-components';
const Div = styled.div`
  background:yellow;
`;

export default class Price extends React.Component {
  static propTypes = {
    sandWichNo: PropTypes.number.isRequired
  };
  render () {
    return (
      <div>
        <div>Current Sandwich :{this.props.sandWichNo}</div>
        <Div>
          Current Total(Per sandwich cost 100,discount is 80%) :
          {total(this.props.sandWichNo * 100, 0.8)}
        </Div>
      </div>
    );
  }
}
