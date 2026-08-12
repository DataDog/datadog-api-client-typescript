# @datadog/datadog-api-client-twilio-integration-accounts

## Description

Manage Twilio accounts for the Twilio integration, served by the Account Management Service (AMS). Twilio exposes a single interface, so it has one set of concrete, strongly typed CRUD operations.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-twilio-integration-accounts
# Yarn
yarn add @datadog/datadog-api-client-twilio-integration-accounts
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TwilioIntegrationAccountsApiV2 } from "@datadog/datadog-api-client-twilio-integration-accounts";
import { v2 } from "@datadog/datadog-api-client-twilio-integration-accounts";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "TwilioIntegrationAccountsApi.v2.listTwilioAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new TwilioIntegrationAccountsApiV2(configuration);

apiInstance.listTwilioAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```