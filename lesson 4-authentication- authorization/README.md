                Client                              Server

POST

- username /auth/login -----> - username & password are sent to server?
- password - username & password valid? - issue a token with mechanism JWT (Json web token) - response client: token
  Each time client sends a HTTP request
  they will attach the token to header/cookies ----> - Verify if token is valid 1. valid 2. invalid 3. expired
