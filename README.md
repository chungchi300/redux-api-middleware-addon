## Local Usage
1. git clone  git@github.com:styled-components/styled-components.git
2. npm i
3. npm run localAppStart

## Features

### File strucutre:

1.  Ability to avoid relative path hell(src/common.js)
2.  Jest integration
3.  Test file in same folder& **tests** for complex test case

### Local Dev Environment

1.  Browsersync for live reload
2.  Source map in dev environment

### Tool for develop action and reducer for component related state

1.  Redux chrome dev tool integration

### CSS

1.  Styled componenet example
2.  Other post css plugin

### Test

1.  Jest integration

### Version

1.  Automatic version command

### Code qualification

1.  Eslint
2.  Flow

### Size :

#### Min

1.  Allow es6 output for treeshaking
2.  Min js by uglify

## Usage as lib
### package.json
"rollup-babel-react-redux-lib-boilerplate":"git@github.com:chungchi300/rollup-babel-react-redux-lib-boilerplate.git",

### Shop.js - a smart component use all dummy component and action from lib
```
import React from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {
  Customer,
  Price,
  Product,
  Action,
} from 'rollup-babel-react-redux-lib-boilerplate';
export class Shop extends React.Component {
  static propTypes = {
    sandWichNo: PropTypes.number.isRequired,
  };
  static defaultProps = {
    companyName: 'Subway',
  };

  render() {
    return (
      <article>
        <h1>
          <Customer customer={this.props.customer} /> -
          {this.props.companyName}
        </h1>
        <Product />
        <div onClick={this.props.addSandWich}>Click me to order</div>
        <Price sandWichNo={this.props.sandWichNo} />
      </article>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //
  return {sandWichNo: state.sandWichNo, customer: state.customer};
}

// Map Redux actions to component props,a way that allow presentation component to get dispatch action function from parent
function mapDispatchToProps(dispatch, ownProps) {
  //
  return {
    addSandWich: () => {
      dispatch(Action.addSandWich());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
```

### Reducer
import {
  customerReducer,
  sandWichNoReducer,
} from 'rollup-babel-react-redux-lib-boilerplate';

const rootReducer = function(state = {}, action) {
  return {
    sandWichNo: sandWichNoReducer(state.sandWichNo, action),
    customer: customerReducer(state.sandWichNo, action),
    //...and other original state
  };
};
export default rootReducer;
