# @datadog/datadog-api-client-bits-security-analyst

## Description

Use the Bits Security Analyst endpoints to find the investigations of your Cloud SIEM signals, read an
investigation's verdict and findings, and count investigations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-bits-security-analyst
# Yarn
yarn add @datadog/datadog-api-client-bits-security-analyst
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { BitsSecurityAnalystApiV2 } from "@datadog/datadog-api-client-bits-security-analyst";
import { v2 } from "@datadog/datadog-api-client-bits-security-analyst";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "BitsSecurityAnalystApi.v2.listSecurityAgentInvestigations": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new BitsSecurityAnalystApiV2(configuration);
const params = {/* parameters */};

apiInstance.listSecurityAgentInvestigations(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```