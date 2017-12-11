import URI from 'urijs';
import { CALL_API } from 'redux-api-middleware';

import _ from 'lodash';
import { subsituteUrl, formData } from 'helpers/api';
export function addSandWich() {
  return {
    type: 'ADD_SAND_WICH',
  };
}

export function request(pathName, { method, data, substitues }, types) {
  return async (dispatch, getState) => {
    const pathEntity = _.get(getState().api.paths, pathName);
    let realPath = pathName;

    if (substitues) {
      realPath = subsituteUrl(realPath, substitues);
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

    console.log('endPoint', pathName, pathEntity, headers, realPath, body);
    if (headers['Content-Type'] === 'multipart/form-data') {
      delete headers['Content-Type'];
      delete headers['content-type'];
    }
    //
    const result = {
      endpoint: 'http://10.6.64.19:8080' + realPath,
      method: method,
      credentials: 'include',
      headers: headers,
      body: body,
      types: types,
    };
    console.log(result);
    return await dispatch({
      [CALL_API]: result,
    });
  };
}
