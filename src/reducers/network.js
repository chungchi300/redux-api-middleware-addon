export default function network(state = {}, action) {
  switch (true) {
    case action.type == 'SUCCESS':
      console.log('action', action);
      return {
        ...state,
        [action.meta.name]: 'SUCCESS',
      };

    case action.type == 'FAILURE':
      return {
        ...state,
        [action.meta.name]: 'FAILURE',
      };

    case action.type == 'REQUEST':
      return {
        ...state,
        [action.meta.name]: 'REQUEST',
      };
  }
  return state;
}
