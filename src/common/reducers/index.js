import sandWichNo from './sandWichNo';
import customer from './customer';
import api from './api';
import network from './network';
const rootReducer = function(state = {}, action) {
  return {
    sandWichNo: sandWichNo(state.sandWichNo, action),
    customer: customer(state.sandWichNo, action),
    api: api(state.api, action),
    network: network(state.network, action),
  };
};
export default rootReducer;
