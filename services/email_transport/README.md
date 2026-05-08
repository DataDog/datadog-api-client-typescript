# @datadog/datadog-api-client-email-transport

## Description

Endpoints for receiving email transport webhook events for audit trail processing.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-email-transport
# Yarn
yarn add @datadog/datadog-api-client-email-transport
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { EmailTransportApiV2 } from "@datadog/datadog-api-client-email-transport";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "EmailTransportApi.v2.createEmailTransportWebhookIntake": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new EmailTransportApiV2(configuration);
const params = {/* parameters */};

apiInstance.createEmailTransportWebhookIntake(params).then(() => {
    console.log("API called successfully.");
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```