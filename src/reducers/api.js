export default function api(
  state = { protocol: 'http', contentType: '', headers: {} },
  action
) {
  switch (action.type) {
    case 'API:SET_BASE_HEADERS':
      return { ...state, headers: action.payload.headers };
    case 'API:SET_SWAGGER':
      return { ...state, ...action.payload };
    case 'API:SET_PROTOCOL':
      return { ...state, protocol: action.payload };
  }
  return state;
}
