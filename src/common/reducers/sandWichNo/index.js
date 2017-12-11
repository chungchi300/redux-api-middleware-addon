export default function index (state = 1, action) {
  switch (action.type) {
    case 'ADD_SAND_WICH':
      return state * 2;
    default:
      return state;
  }
}
