# Bits AI

`@datadog/datadog-api-client-bits-ai`

## Description

Bits AI SRE investigations, and Bits Security Analyst investigations of Cloud SIEM signals.

Products: Bits AI

Use the Bits AI endpoints to retrieve AI-powered investigations.

Use the Bits Security Analyst endpoints to find the investigations of your Cloud SIEM signals, read an
investigation's verdict and findings, and count investigations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-bits-ai
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-bits-ai
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-bits-ai";

const configuration = createConfiguration();
const apiInstance = new v2.BitsAIApi(configuration);
const params = {/* parameters */};

apiInstance.listInvestigations(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```