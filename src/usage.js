window.store.dispatch({
  type: 'API:SET_BASE_HEADERS',
  payload: {
    headers: {
      'X-Token':
        'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTUxMjYyNzUyNywicm9sZXMiOlsiV3JpdGVPd24iLCJSZWFkQWxsIiwiV3JpdGVBbGwiLCJNYW5hZ2VTbGlkZXMiLCJNYW5hZ2VFdmVudHMiXSwiaXNzIjoidGVzdC5qd3Quc2VydmVyIiwiZXhwIjoxNTEyNzEzOTI3fQ.Jymr_sazNvZ8zeoTBZ_wgAjTioMen33ZqEkAMF4M86YCdk_33fDvuwzto0nwIdeeWfbwIJZCu1Rgh4pRHQdVNexIUIB6vqLbUuCKt7Lkpi7qViV-mc6Z4xFZ09vfk1CwNQy3Q4bOGoQK2NoLFshSMFcWhqjzN7hNxeXc6NeIhEcQdOzZYvsqH7ncLJT0t3MUfkwaxCRag4CIP2lUML0XajB8VusMXkR2QtfJxqGjAC0vLtGIg4kBWH13XSNrOnFjjcdjbnBi4qLkok9HSwDNjKtPfoU3qz-7Ng74ko3qJNWCGJcHVOYC0jtPbqPZ0Gg4_Xa2WejYU20HSN3s9SreZQ',
    },
  },
});
window.store
  .dispatch(
    Action.Network.request(
      '/DPMS/case/{caseId}',
      'get',
      null,
      {
        caseId: 'ventana',
      },
      Helpers.API.Common.Constant.
      ['REQUEST', 'SUCCESS', 'FAILURE']
    )
  )
  .then(res => console.log(res));
