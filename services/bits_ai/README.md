# @datadog/datadog-api-client-bits-ai

## Description

Use the Bits AI endpoints to retrieve AI-powered investigations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-bits-ai
# Yarn
yarn add @datadog/datadog-api-client-bits-ai
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { BitsAIApiV2 } from "@datadog/datadog-api-client-bits-ai";
import { v2 } from "@datadog/datadog-api-client-bits-ai";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "BitsAIApi.v2.listInvestigations": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new BitsAIApiV2(configuration);
const params = {/* parameters */};

apiInstance.listInvestigations(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```