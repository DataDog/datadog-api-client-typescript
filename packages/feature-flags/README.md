# Feature Flags

`@datadog/datadog-api-client-feature-flags`

## Description

Feature flags, environments and allocations.

Products: Feature Flags

Manage feature flags and environments.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-feature-flags
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-feature-flags
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-feature-flags";

const configuration = createConfiguration();
const apiInstance = new v2.FeatureFlagsApi(configuration);
const params = {/* parameters */};

apiInstance.listFeatureFlags(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```