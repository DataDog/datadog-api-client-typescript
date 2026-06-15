# @datadog/datadog-api-client-tag-policies

## Description

Tag Policies define rules that govern which tag values are accepted for a given tag key,
scoped to a particular telemetry source (such as logs, spans, or metrics). Policies can be
`blocking` (data not matching the policy is rejected) or `surfacing` (matching data is
highlighted but not blocked). Each policy reports a compliance `score` derived from how
much recent telemetry adheres to the policy.

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