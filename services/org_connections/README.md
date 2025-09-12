# @datadog/datadog-api-client-org-connections

## Description

Manage connections between organizations. Org connections allow for controlled sharing of data between different Datadog organizations. See the [Cross-Organization Visibiltiy](https://docs.datadoghq.com/account_management/org_settings/cross_org_visibility/) page for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-org-connections
# Yarn
yarn add @datadog/datadog-api-client-org-connections
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OrgConnectionsApiV2 } from "@datadog/datadog-api-client-org-connections";
import { v2 } from "@datadog/datadog-api-client-org-connections";

const configuration = createConfiguration();
const apiInstance = new OrgConnectionsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listOrgConnections(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```