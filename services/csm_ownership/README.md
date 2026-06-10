# @datadog/datadog-api-client-csm-ownership

## Description

Datadog Cloud Security Management (CSM) Ownership infers the most likely owner
for a cloud resource by combining ownership signals from across the platform,
and lets you review the inference, inspect its evidence, and submit feedback to
persist, override, or correct the inferred owner.
For more information, see [Cloud Security Management](https://docs.datadoghq.com/security/cloud_security_management).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-csm-ownership
# Yarn
yarn add @datadog/datadog-api-client-csm-ownership
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CSMOwnershipApiV2 } from "@datadog/datadog-api-client-csm-ownership";
import { v2 } from "@datadog/datadog-api-client-csm-ownership";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "CSMOwnershipApi.v2.listOwnershipInferences": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new CSMOwnershipApiV2(configuration);
const params = {/* parameters */};

apiInstance.listOwnershipInferences(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```