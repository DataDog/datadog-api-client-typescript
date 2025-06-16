# @datadog/datadog-api-client-service-level-objectives

## Description

[Service Level Objectives](https://docs.datadoghq.com/monitors/service_level_objectives/#configuration)
(SLOs) are a key part of the site reliability engineering toolkit.
SLOs provide a framework for defining clear targets around application performance,
which ultimately help teams provide a consistent customer experience,
balance feature development with platform stability,
and improve communication with internal and external users.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-service-level-objectives
# Yarn
yarn add @datadog/datadog-api-client-service-level-objectives
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ServiceLevelObjectivesApiV2 } from "@datadog/datadog-api-client-service-level-objectives";
import { v2 } from "@datadog/datadog-api-client-service-level-objectives";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ServiceLevelObjectivesApi.v2.createSLOReportJob": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ServiceLevelObjectivesApiV2(configuration);
const params = {/* parameters */};

apiInstance.createSLOReportJob(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```