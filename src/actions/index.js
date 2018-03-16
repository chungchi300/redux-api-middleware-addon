import URI from 'urijs';
import { CALL_API } from 'redux-api-middleware';
import { stringify } from 'query-string';
import _ from 'lodash';
import { subsituteUrl, formData, processType } from '~/helpers/api';
export function setProtocol(protocol) {
  return {
    type: 'API:SET_PROTOCOL',
    payload: protocol,
  };
}

export function setSwagger(swagger) {
  return {
    type: 'API:SET_SWAGGER',
    payload: swagger,
  };
}
export function setHeaders(headers) {
  return {
    type: 'API:SET_BASE_HEADERS',
    payload: {
      headers: headers,
    },
  };
}
export function request(pathName, { method, data, subst }, types) {
  return (dispatch, getState) => {
    const pathEntity = _.get(getState().api.paths, pathName);

    let entityPath = pathName;
    if (subst) {
      entityPath = subsituteUrl(pathName, subst);
    }
    let realPath = entityPath;

    // //TODO Header should be create by Header constructor instead of plain object
    let headers = {
      ...getState().api.headers,
      ...pathEntity.headers,
    };
    let body;
    if (method == 'get' && data) {
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
      types: processType(types, pathName, method),
    };

    return dispatch({
      [CALL_API]: result,
    });
  };
}
