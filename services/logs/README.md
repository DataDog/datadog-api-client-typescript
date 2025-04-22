# @datadog/datadog-api-client-logs

## Description

Search your logs and send them to your Datadog platform over HTTP. See the [Log Management page](https://docs.datadoghq.com/logs/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-logs
# Yarn
yarn add @datadog/datadog-api-client-logs
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { LogsApiV2 } from "@datadog/datadog-api-client-logs";

const configuration = createConfiguration();
const apiInstance = new LogsApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.submitLog(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```