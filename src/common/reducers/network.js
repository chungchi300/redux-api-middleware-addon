export default function network(state = {}, action) {
  switch (true) {
    case action.type == 'SUCCESS':
      return { ...state, [action.meta.source]: 'SUCCESS' };

    case action.type == 'FAILURE':
      return { ...state, [action.meta.source]: 'FAILURE' };

    case action.type == 'REQUEST':
      return { ...state, [action.meta.source]: 'REQUEST' };
  }
  return state;
}
