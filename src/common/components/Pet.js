import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
class Pet extends React.Component {
  render() {
    return <div className={this.props.className}>Pet</div>;
  }
}
export default styled(Pet)`

`;
