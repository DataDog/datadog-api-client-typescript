# @datadog/datadog-api-client-org-authorized-clients

## Description

Manage OAuth2 client authorizations at the organization level.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-org-authorized-clients
# Yarn
yarn add @datadog/datadog-api-client-org-authorized-clients
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OrgAuthorizedClientsApiV2 } from "@datadog/datadog-api-client-org-authorized-clients";
import { v2 } from "@datadog/datadog-api-client-org-authorized-clients";

const configuration = createConfiguration();
const apiInstance = new OrgAuthorizedClientsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listOrgAuthorizedClients(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```