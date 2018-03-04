## Usuage
```
npm install redux-api-middleware-addon
```

## Code Usage
```
store.dispatch(Action.setProtocol('https'));

store.dispatch(Action.setSwagger(SWAGGER));
store.dispatch(
  Action.setHeaders({
    // 'X-Token': 'base64TokenForApiCall',
    Accept: 'application/json',
    ['Content-Type']: 'application/json',
  })
);
store
  .dispatch(
    Action.request(
      '/pet/findByStatus',
      {
        method: 'get',
        data: { status: 'available' },
        subst: null,
      },
      BASIC
    )
  )
  .then(res => console.log(res));
store
  .dispatch(
    Action.request(
      '/pet',
      {
        method: 'post',
        data: {
          name: 'ronald',
          id: 3,
          photoUrls: [
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Letter_d.svg/1200px-Letter_d.svg.png',
          ],
        },
      },
      BASIC
    )
  )
  .then(res => console.log(res));
store
  .dispatch(
    Action.request(
      '/pet/findByStatus',
      {
        method: 'get',
        data: { status: 'available' },
        subst: null,
      },
      entity('PETS_BY_ID')
    )
  )
  .then(res => console.log(res));
  ```

## Features
1. Support file upload
2. Support swagger.json
3. Domain reducer

### Action
1. SET_SWAGGER
2. Request
3. SET_HEADER(default empty)
4. SET_PROTOCOL(default http)

### helpers
1. Generate Basic types
2. Generate Get Entity types

//TODO
Generate update,delete,create which help network reducer record which api has api result that failed

### Reducer
1. network (reducer,where is network result located)
2. domain (reducer,where is CRUD resource result located)
3. api (reducer,where is the api located)
