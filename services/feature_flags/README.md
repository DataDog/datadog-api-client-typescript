# @datadog/datadog-api-client-feature-flags

## Description

Manage feature flags and environments.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-feature-flags
# Yarn
yarn add @datadog/datadog-api-client-feature-flags
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { FeatureFlagsApiV2 } from "@datadog/datadog-api-client-feature-flags";
import { v2 } from "@datadog/datadog-api-client-feature-flags";

const configuration = createConfiguration();
const apiInstance = new FeatureFlagsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listFeatureFlags(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```