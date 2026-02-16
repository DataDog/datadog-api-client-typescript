# @datadog/datadog-api-client-organizations

## Description

Create, edit, and manage your organizations. Read more about [multi-org accounts](https://docs.datadoghq.com/account_management/multi_organization).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-organizations
# Yarn
yarn add @datadog/datadog-api-client-organizations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OrganizationsApiV2 } from "@datadog/datadog-api-client-organizations";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "OrganizationsApi.v2.updateLoginOrgConfigMaxSessionDuration": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new OrganizationsApiV2(configuration);
const params = {/* parameters */};

apiInstance.updateLoginOrgConfigMaxSessionDuration(params).then(() => {
    console.log("API called successfully.");
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```