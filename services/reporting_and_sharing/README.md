# @datadog/datadog-api-client-reporting-and-sharing

## Description

The Reporting and Sharing endpoints allow you to create snapshots of graph widgets and other shareable resources.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-reporting-and-sharing
# Yarn
yarn add @datadog/datadog-api-client-reporting-and-sharing
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ReportingAndSharingApiV2 } from "@datadog/datadog-api-client-reporting-and-sharing";
import { v2 } from "@datadog/datadog-api-client-reporting-and-sharing";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ReportingAndSharingApi.v2.createSnapshot": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ReportingAndSharingApiV2(configuration);
const params = {/* parameters */};

apiInstance.createSnapshot(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```