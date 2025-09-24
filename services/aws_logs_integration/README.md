# @datadog/datadog-api-client-aws-logs-integration

## Description

Configure your Datadog-AWS-Logs integration directly through Datadog API.
For more information, see the [AWS integration page](https://docs.datadoghq.com/integrations/amazon_web_services/#log-collection).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-aws-logs-integration
# Yarn
yarn add @datadog/datadog-api-client-aws-logs-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AWSLogsIntegrationApiV2 } from "@datadog/datadog-api-client-aws-logs-integration";
import { v2 } from "@datadog/datadog-api-client-aws-logs-integration";

const configuration = createConfiguration();
const apiInstance = new AWSLogsIntegrationApiV2(configuration);

apiInstance.listAWSLogsServices().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```