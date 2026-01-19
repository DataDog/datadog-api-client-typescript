# @datadog/datadog-api-client-google-chat-integration

## Description

Configure your [Datadog Google Chat integration](https://docs.datadoghq.com/integrations/google-hangouts-chat/)
directly through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-google-chat-integration
# Yarn
yarn add @datadog/datadog-api-client-google-chat-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { GoogleChatIntegrationApiV2 } from "@datadog/datadog-api-client-google-chat-integration";
import { v2 } from "@datadog/datadog-api-client-google-chat-integration";

const configuration = createConfiguration();
const apiInstance = new GoogleChatIntegrationApiV2(configuration);
const params = {/* parameters */};

apiInstance.getSpaceByDisplayName(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```