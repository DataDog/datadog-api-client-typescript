# @datadog/datadog-api-client-user-authorized-clients

## Description

Manage OAuth2 client authorizations at the user level.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-user-authorized-clients
# Yarn
yarn add @datadog/datadog-api-client-user-authorized-clients
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { UserAuthorizedClientsApiV2 } from "@datadog/datadog-api-client-user-authorized-clients";
import { v2 } from "@datadog/datadog-api-client-user-authorized-clients";

const configuration = createConfiguration();
const apiInstance = new UserAuthorizedClientsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listUserAuthorizedClients(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```