## Endpoints

- AUTH API

  |     HTTP Method     | Endpoint |      Usage      |                   Body                    |
  | :-----------------: | :------: | :-------------: | :---------------------------------------: |
  | /api/v1/auth/signup |   POST   | create new user | "username", "password", "confirmPassword" |
  | /api/v1/auth/login  |   POST   |   login user    |          "username", "password"           |
