# Host Monitoring

`@datadog/datadog-api-client-host-monitoring`

## Description

Hosts, host tags and processes.

Products: Infra Host Monitoring

The processes API allows you to query processes data for your organization. See the [Live Processes page](https://docs.datadoghq.com/infrastructure/process/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-host-monitoring
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-host-monitoring
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-host-monitoring";

const configuration = createConfiguration();
const apiInstance = new v2.ProcessesApi(configuration);
const params = {/* parameters */};

apiInstance.listProcesses(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```