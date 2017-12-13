import URI from 'urijs';
import { CALL_API } from 'redux-api-middleware';
import { stringify } from 'query-string';
import _ from 'lodash';
import { subsituteUrl, formData, processType } from 'helpers/api';
export function addSandWich() {
  return {
    type: 'ADD_SAND_WICH',
  };
}

export function request(pathName, { method, data, subst }, types) {
  return async (dispatch, getState) => {
    const pathEntity = _.get(getState().api.paths, pathName);
    let realPath = pathName;

    if (subst) {
      realPath = subsituteUrl(realPath, subst);
    }

    // //TODO Header should be create by Header constructor instead of plain object
    let headers = {
      ...getState().api.headers,
      ...pathEntity.headers,
    };
    let body;
    if (method == 'get') {
      realPath = realPath + '?' + stringify(data);
    } else {
      body = formData(data, headers['Content-Type']);
    }

    if (headers['Content-Type'] === 'multipart/form-data') {
      delete headers['Content-Type'];
      delete headers['content-type'];
    }
    //
    const result = {
      endpoint:
        getState().api.protocol +
        '://' +
        getState().api.host +
        getState().api.basePath +
        realPath,
      method: method,

      headers: headers,
      body: body,
      types: processType(types, pathName),
    };

    return await dispatch({
      [CALL_API]: result,
    });
  };
}
