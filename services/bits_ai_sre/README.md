# @datadog/datadog-api-client-bits-ai-sre

## Description

Use the Bits AI SRE endpoints to retrieve AI-powered investigations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-bits-ai-sre
# Yarn
yarn add @datadog/datadog-api-client-bits-ai-sre
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { BitsAISREApiV2 } from "@datadog/datadog-api-client-bits-ai-sre";
import { v2 } from "@datadog/datadog-api-client-bits-ai-sre";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "BitsAISREApi.v2.listInvestigations": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new BitsAISREApiV2(configuration);
const params = {/* parameters */};

apiInstance.listInvestigations(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```