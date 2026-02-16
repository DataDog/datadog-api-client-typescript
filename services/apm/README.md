# @datadog/datadog-api-client-apm

## Description

Observe, troubleshoot, and improve cloud-scale applications with all telemetry in context

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-apm
# Yarn
yarn add @datadog/datadog-api-client-apm
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { APMApiV2 } from "@datadog/datadog-api-client-apm";
import { v2 } from "@datadog/datadog-api-client-apm";

const configuration = createConfiguration();
const apiInstance = new APMApiV2(configuration);
const params = {/* parameters */};

apiInstance.getServiceList(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```