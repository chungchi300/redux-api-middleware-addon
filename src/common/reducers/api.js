import SWAGGER from 'swagger.js';

export default function api(state = SWAGGER, action) {
  switch (action.type) {
    case 'API:SET_BASE_HEADERS':
      return { ...state, headers: action.payload.headers };
  }
  return state;
}
