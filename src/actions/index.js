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
export async function request(pathName, { method, data, subst }, types) {
  await 'yolo';
}
