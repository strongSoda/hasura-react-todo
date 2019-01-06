import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth0-variables';
import Forage from 'react-localforage'

export default class Auth {
  accessToken;
  idToken;
  expiresAt;

  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientId,
    redirectUri: AUTH_CONFIG.callbackUrl,
    responseType: 'token id_token',
    scope: 'openid',
    sso: true,
    autoParseHash: false
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/home');
      } else if (err) {
        history.replace('/home');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());

    <div>
    <Forage.SetItem
  itemKey='auth-token'
  itemValue={authResult.accessToken}
  render={({inProgress, value, error}) => {
    return (
      <div>
        {error &&
        <div>
          {error.message}
        </div>}
        {inProgress && <progress/>}
        {value &&
        <div>
          {value}
        </div>}
      </div>
    )
  }}
/>

<Forage.SetItem
itemKey='auth-token'
itemValue={authResult.idToken}
render={({inProgress, value, error}) => {
  return (
    <div>
      {error &&
      <div>
        {error.message}
      </div>}
      {inProgress && <progress/>}
      {value &&
      <div>
        {value}
      </div>}
    </div>
  )
}}
/>

<Forage.SetItem
itemKey='expires_at'
itemValue={expiresAt}
render={({inProgress, value, error}) => {
  return (
    <div>
      {error &&
      <div>
        {error.message}
      </div>}
      {inProgress && <progress/>}
      {value &&
      <div>
        {value}
      </div>}
    </div>
  )
}}
/>

<Forage.SetItem
itemKey='sub'
itemValue={authResult.idTokenPayload.sub}
render={({inProgress, value, error}) => {
  return (
    <div>
      {error &&
      <div>
        {error.message}
      </div>}
      {inProgress && <progress/>}
      {value &&
      <div>
        {value}
      </div>}
    </div>
  )
}}
/>
</div>
    // localforage.setItem('access_token', authResult.accessToken);
    // localforage.setItem('id_token', authResult.idToken);
    // localforage.setItem('expires_at', expiresAt);
    // localforage.setItem('sub', authResult.idTokenPayload.sub);

    // navigate to the home route
    history.replace('/home');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localforage.removeItem('access_token');
    localforage.removeItem('id_token');
    localforage.removeItem('expires_at');
    localforage.removeItem('sub');
    // navigate to the  route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt =  <Forage.GetItem
    key='expires_at'
    render={({inProgress, value, error}) => {
      return (
        <div>
          {error &&
          <div>
            {error.message}
          </div>}
          {inProgress && <progress/>}
          {value &&
          <pre>{JSON.stringify(value, null, 2)}</pre>}
        </div>
      )
    }}
  />
    
    // JSON.parse(localforage.getItem('expires_at'));
    
    return new Date().getTime() < expiresAt;
  }

}