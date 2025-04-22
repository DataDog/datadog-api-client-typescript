# @datadog/datadog-api-client-processes

## Description

The processes API allows you to query processes data for your organization. See the [Live Processes page](https://docs.datadoghq.com/infrastructure/process/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-processes
# Yarn
yarn add @datadog/datadog-api-client-processes
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ProcessesApiV2 } from "@datadog/datadog-api-client-processes";

const configuration = createConfiguration();
const apiInstance = new ProcessesApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listProcesses(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```