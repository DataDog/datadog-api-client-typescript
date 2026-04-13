# @datadog/datadog-api-client-org-groups

## Description

Manage organization groups, memberships, policies, policy overrides, and policy configurations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-org-groups
# Yarn
yarn add @datadog/datadog-api-client-org-groups
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OrgGroupsApiV2 } from "@datadog/datadog-api-client-org-groups";
import { v2 } from "@datadog/datadog-api-client-org-groups";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "OrgGroupsApi.v2.listOrgGroupMemberships": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new OrgGroupsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listOrgGroupMemberships(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```