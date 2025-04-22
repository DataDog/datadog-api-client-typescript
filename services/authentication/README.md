# @datadog/datadog-api-client-authentication

## Description

All requests to Datadog’s API must be authenticated.
Requests that write data require reporting access and require an `API key`.
Requests that read data require full access and also require an `application key`.

**Note:** All Datadog API clients are configured by default to consume Datadog US site APIs.
If you are on the Datadog EU site, set the environment variable `DATADOG_HOST` to
`https://api.datadoghq.eu` or override this value directly when creating your client.

[Manage your account’s API and application keys](https://app.datadoghq.com/organization-settings/) in Datadog, and see the [API and Application Keys page](https://docs.datadoghq.com/account_management/api-app-keys/) in the documentation.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-authentication
# Yarn
yarn add @datadog/datadog-api-client-authentication
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AuthenticationApiV1 } from "@datadog/datadog-api-client-authentication";
import { v1 } from "@datadog/datadog-api-client-authentication";

const configuration = createConfiguration();
const apiInstance = new AuthenticationApiV1(configuration);

apiInstance.validate(params).then((data: v1.AuthenticationValidationResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```