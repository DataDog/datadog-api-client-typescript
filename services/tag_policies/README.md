# @datadog/datadog-api-client-tag-policies

## Description

Manage tag policies to enforce tagging standards across your organization.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-tag-policies
# Yarn
yarn add @datadog/datadog-api-client-tag-policies
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TagPoliciesApiV2 } from "@datadog/datadog-api-client-tag-policies";
import { v2 } from "@datadog/datadog-api-client-tag-policies";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "TagPoliciesApi.v2.listTagPolicies": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new TagPoliciesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listTagPolicies(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```