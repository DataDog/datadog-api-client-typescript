# Multi-Organization

`@datadog/datadog-api-client-multi-org`

## Description

Organization groups, memberships, policies, and connections between organizations.

Products: Account Management

Manage connections between organizations. Org connections allow for controlled sharing of data between different Datadog organizations. See the [Cross-Organization Visibiltiy](https://docs.datadoghq.com/account_management/org_settings/cross_org_visibility/) page for more information.

Manage organization groups, memberships, policies, policy overrides, and policy configurations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-multi-org
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-multi-org
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-multi-org";

const configuration = createConfiguration();
const apiInstance = new v2.OrgConnectionsApi(configuration);
const params = {/* parameters */};

apiInstance.listOrgConnections(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```