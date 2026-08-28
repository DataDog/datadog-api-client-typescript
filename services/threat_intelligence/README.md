# @datadog/datadog-api-client-threat-intelligence

## Description

Ingest and manage threat intelligence data for security enrichment and investigation.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-threat-intelligence
# Yarn
yarn add @datadog/datadog-api-client-threat-intelligence
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ThreatIntelligenceApiV2 } from "@datadog/datadog-api-client-threat-intelligence";
import { v2 } from "@datadog/datadog-api-client-threat-intelligence";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ThreatIntelligenceApi.v2.addSTIXThreatIntel": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ThreatIntelligenceApiV2(configuration);
const params = {/* parameters */};

apiInstance.addSTIXThreatIntel(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```