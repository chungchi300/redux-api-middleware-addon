import FormData from 'form-data';
import { stringify } from 'query-string';
// ['REQUEST', 'SUCESS', 'FAILURE'];
// mapById(['entity']);
// defaultGuessing by name;

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
    throw new Error('unknown contentType');
  }
}

export function subsituteUrl(url, substitues) {
  let finalUrl = url;

  Object.keys(substitues).forEach((key, index) => {
    finalUrl = finalUrl.replace('{' + key + '}', substitues[key]);
  });
  return finalUrl;
}
