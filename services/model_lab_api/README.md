# @datadog/datadog-api-client-model-lab-api

## Description

Manage Model Lab projects, runs, artifacts, and facets for ML experiment tracking.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-model-lab-api
# Yarn
yarn add @datadog/datadog-api-client-model-lab-api
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ModelLabAPIApiV2 } from "@datadog/datadog-api-client-model-lab-api";
import { v2 } from "@datadog/datadog-api-client-model-lab-api";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ModelLabAPIApi.v2.getModelLabArtifactContent": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ModelLabAPIApiV2(configuration);
const params = {/* parameters */};

apiInstance.getModelLabArtifactContent(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```