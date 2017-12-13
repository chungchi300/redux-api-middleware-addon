import SWAGGER from 'swagger.json';

export default function api(
  state = { ...SWAGGER, protocol: 'http', headers: {} },
  action
) {
  switch (action.type) {
    case 'API:SET_BASE_HEADERS':
      return { ...state, headers: action.payload.headers };
  }
  switch (action.type) {
    case 'API:SET_PROTOCOL':
      return { ...state, protocol: action.payload };
  }
  return state;
}
