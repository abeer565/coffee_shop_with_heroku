/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-1qgup88m.us', // the auth0 domain prefix
    audience: 'tenant', // the audience set for the auth0 app
    clientId: 'QxIAyB6ckF7Uo8Ed9jtAiJBm4VyTkxn8', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:4200', // the base url of the running ionic application. 
  }
};

