# @datadog/datadog-api-client-spa

## Description

SPA (Spark Pod Autosizing) API. Provides resource recommendations and cost insights to help optimize Spark job configurations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-spa
# Yarn
yarn add @datadog/datadog-api-client-spa
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SpaApiV2 } from "@datadog/datadog-api-client-spa";
import { v2 } from "@datadog/datadog-api-client-spa";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "SpaApi.v2.getSPARecommendations": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new SpaApiV2(configuration);
const params = {/* parameters */};

apiInstance.getSPARecommendations(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```