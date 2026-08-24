# @datadog/datadog-api-client-twilio-integration-accounts

## Description

Manage your Datadog Twilio integration accounts directly through the Datadog API.
Create, update, and delete accounts, configure authentication and settings, and
enable or disable dataflows such as message logs, event logs, alerts, call
summaries, and Cloud Cost Management metrics. See the
[Twilio integration page](https://docs.datadoghq.com/integrations/twilio/) for
more information.

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
        "TwilioIntegrationAccountsApi.v2.listTwilioIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new TwilioIntegrationAccountsApiV2(configuration);

apiInstance.listTwilioIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```