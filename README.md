# Hashura Test App

this react app is a proof of concept of and an app with a Graqhql API powered by [`Hasura Cloud`](https://hasura.io/)

This app has:

- Authentication Login Flow with [`Auth0`](https://auth0.com/)
- Apollo client and hooks configuration with [`Apollo React`](https://www.apollographql.com/docs/react/)
- Autogenerated schema types using [`Graphql Code Generator`](https://www.graphql-code-generator.com/)
- Routing with [`React Router`](https://reactrouter.com/docs/en/v6/getting-started/overview)

## Requirements

### `.env` File

```.env
REACT_APP_HASURA_SCHEMA="Hasura schema endpoint"
HASURA_ADMIN_SECRET="to allow the fetch of the schema"

# AUTH0
REACT_APP_AUTH0_DOMAIN="auth app domain"
REACT_APP_AUTH0_CLIENT_ID="app client id"
REACT_APP_AUTH0_AUDIENCE="Audience of the API created in auth0"
REACT_APP_AUTH0_SCOPE="auth scopes"
```

### Auth0

in order to the app to work a API audience must be created in `Applications>APIs` on the auth0 dashboard

![image](https://user-images.githubusercontent.com/34176666/172035378-493f395a-9da9-4837-a572-87881ba7787c.png)


An Auth0 action(`onExecutePostLogin`) to save the custom claims in the user `accessToken` like this:

```js
exports.onExecutePostLogin = async (event, api) => {
  const namespace = "https://hasura.io/jwt/claims";
  const id = event.user.user_id;
  console.log(namespace, id);

  if (event.authorization) {
    // Set claims
    api.accessToken.setCustomClaim(`${namespace}`, {
      "x-hasura-default-role": "user",
      "x-hasura-allowed-roles": ["user"],
      "x-hasura-user-id": id,
    });
  }
};
```

other action(`onExecutePostUserRegistration`) to save the user in the hasura data base after login

```js
const { GraphQLClient, gql } = require("graphql-request");

exports.onExecutePostUserRegistration = async (event) => {
  const client = new GraphQLClient(event.secrets.HASURA_SCHEMA_ENDPOINT, {
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": event.secrets.HASURA_ADMIN_SECRET,
    },
  });
  const { user } = event;

  // This query should match the database schema
  const query = gql`
    mutation CreateUser($id: String!, $email: String!) {
      insert_users_one(
        object: { id: $id, email: $email }
        on_conflict: { constraint: users_pkey, update_columns: [] }
      ) {
        id
      }
    }
  `;
  const userResult = await client.request(query, {
    id: user.user_id,
    email: user.email,
  });

  console.log(userResult);
};
```
