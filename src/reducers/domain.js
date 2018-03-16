import _ from 'lodash';
export default function domain(state = {}, action) {
  let idsRegexResult = /^(.+)S_BY_ID$/.exec(_.get(action, 'meta.data'));

  switch (true) {
    case idsRegexResult != null:
      let relatedIdsName = _.camelCase(idsRegexResult[1]) + 'sById';
      let newObjectWithIds = {};
      newObjectWithIds[relatedIdsName] = action.payload;

      return { ...state, ...newObjectWithIds };
  }
  return state;
}
