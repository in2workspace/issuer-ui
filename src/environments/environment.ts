
export const environment = {
  production: false,
  loginParams: {
    has_login: true,
    // login_url: 'http://localhost:8088/realms/EAAProvider/protocol/openid-connect/token',
    login_url: 'http://localhost:8088/realms/EAAProvider',
    client_id: 'oidc4vci-wallet-client',
    scope: 'openid profile email offline_access',
    grant_type: 'code'
  },
  issuer_url: '',
  issuer_uri: '',
  base_url: 'https://localhost:8088',
  wallet_url: 'https://localhost:4200'
};
