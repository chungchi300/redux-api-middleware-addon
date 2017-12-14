import api from './api';
import network from './network';
import domain from './domain';
const rootReducer = function(state = {}, action) {
  return {
    api: api(state.api, action),
    network: network(state.network, action),
    domain: domain(state.domain, action),
  };
};
export default rootReducer;
