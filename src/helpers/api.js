import FormData from 'form-data';
import { stringify } from 'query-string';

// ['REQUEST', 'SUCESS', 'FAILURE'];
import _ from 'lodash';
// mapById(['entity']);
// defaultGuessing by name;
export const BASIC = ['REQUEST', 'SUCCESS', 'FAILURE'];
export function entity(name) {
  return [
    'REQUEST',
    {
      type: 'SUCCESS',
      meta: { data: name },
      payload: (action, state, res) => {
        return res.json();
      },
    },
    'FAILURE',
  ];
}
export function formData(dataMap, contentType) {
  if (!dataMap) return null;
  if (contentType === 'multipart/form-data') {
    let formData = new FormData();

    Object.keys(dataMap).forEach(key => formData.append(key, dataMap[key]));

    return formData;
  } else if (contentType === 'application/x-www-form-urlencoded') {
    return stringify(dataMap);
  } else if (contentType === 'application/json') {
    return JSON.stringify(dataMap);
  } else {
    throw new Error('unknown contentType for ' + contentType);
  }
}
function getConventionalName(pathName, method) {
  return (
    method +
    pathName
      .replace(/\{.*\}/g, '')
      .replace(/\/(.)/g, function($1) {
        return $1.toUpperCase();
      })
      .replace(/\//g, '')
  );
}
export function processType(types, pathName, method) {
  let originalTypes = _.cloneDeep(types);
  let processedTypes = [];

  originalTypes = originalTypes.map(originalType => {
    if (typeof originalType == 'string') {
      return { type: originalType };
    } else {
      return originalType;
    }
  });
  console.log('types', types);
  processedTypes[0] = {
    ...originalTypes[0],
    meta: {
      path: pathName,
      name: getConventionalName(pathName, method),
      method: method,
      ...originalTypes[0].meta,
    },
  };
  processedTypes[1] = {
    ...originalTypes[1],
    meta: {
      path: pathName,
      name: getConventionalName(pathName, method),
      method: method,
      ...originalTypes[1].meta,
    },
  };
  processedTypes[2] = {
    ...originalTypes[2],
    meta: {
      path: pathName,
      name: getConventionalName(pathName, method),
      method: method,
      ...originalTypes[2].meta,
    },
  };

  return processedTypes;
}
export function subsituteUrl(url, substitues) {
  let finalUrl = url;

  Object.keys(substitues).forEach((key, index) => {
    finalUrl = finalUrl.replace('{' + key + '}', substitues[key]);
  });
  return finalUrl;
}
