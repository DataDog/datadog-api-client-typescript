# @datadog/datadog-api-client-slack-integration

## Description

Configure your [Datadog-Slack integration](https://docs.datadoghq.com/integrations/slack)
directly through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-slack-integration
# Yarn
yarn add @datadog/datadog-api-client-slack-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SlackIntegrationApiV1 } from "@datadog/datadog-api-client-slack-integration";
import { v1 } from "@datadog/datadog-api-client-slack-integration";

const configuration = createConfiguration();
const apiInstance = new SlackIntegrationApiV1(configuration);
const params = {/* parameters */};

apiInstance.getSlackIntegrationChannels(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```