# @datadog/datadog-api-client-key-management

## Description

Manage your Datadog API and application keys. You need an API key and an
application key for a user with the required permissions to interact with these endpoints.

Consult the following pages to view and manage your keys:

- [API Keys](https://app.datadoghq.com/organization-settings/api-keys)
- [Application Keys](https://app.datadoghq.com/personal-settings/application-keys)

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-key-management
# Yarn
yarn add @datadog/datadog-api-client-key-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { KeyManagementApiV2 } from "@datadog/datadog-api-client-key-management";
import { v2 } from "@datadog/datadog-api-client-key-management";

const configuration = createConfiguration();
const apiInstance = new KeyManagementApiV2(configuration);
const params = {/* parameters */};

apiInstance.listAPIKeys(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```