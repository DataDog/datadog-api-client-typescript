# @datadog/datadog-api-client-roles

## Description

The Roles API is used to create and manage Datadog roles, what
[global permissions](https://docs.datadoghq.com/account_management/rbac/)
they grant, and which users belong to them.

Permissions related to specific account assets can be granted to roles
in the Datadog application without using this API. For example, granting
read access on a specific log index to a role can be done in Datadog from the
[Pipelines page](https://app.datadoghq.com/logs/pipelines).

Roles can also be managed in bulk through the Datadog UI, which provides
the capability to assign a single permission to multiple roles simultaneously.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-roles
# Yarn
yarn add @datadog/datadog-api-client-roles
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RolesApiV2 } from "@datadog/datadog-api-client-roles";
import { v2 } from "@datadog/datadog-api-client-roles";

const configuration = createConfiguration();
const apiInstance = new RolesApiV2(configuration);

apiInstance.listPermissions().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```