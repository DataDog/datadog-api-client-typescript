# @datadog/datadog-api-client-logs

## Description

Search your logs and send them to your Datadog platform over HTTP. See the [Log Management page](https://docs.datadoghq.com/logs/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

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
import { v2 } from "@datadog/datadog-api-client-logs";

const configuration = createConfiguration();
const apiInstance = new LogsApiV2(configuration);
const params = {/* parameters */};

apiInstance.submitLog(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```