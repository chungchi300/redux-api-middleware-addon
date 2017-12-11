import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
class Role extends React.Component {
  get roleName () {
    return this.props.customer.isVip ? 'Vip' : 'Normal';
  }
  render () {
    return <span className={this.props.className}>{this.roleName}</span>;
  }
}
const StyledRole = styled(Role)`
  background:green;
  color:white;
`;
export default class Customer extends React.Component {
  static propTypes = {
    customer: PropTypes.object.isRequired
  };
  render () {
    return (
      <span>
        {this.props.customer.name}
        {' '}
        -
        {' '}
        <StyledRole customer={this.props.customer} />
      </span>
    );
  }
}
