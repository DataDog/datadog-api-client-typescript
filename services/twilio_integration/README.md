# @datadog/datadog-api-client-twilio-integration

## Description

Manage your Datadog Twilio integration accounts and account resources directly
through the Datadog API. See the
[Twilio integration page](https://docs.datadoghq.com/integrations/twilio/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-twilio-integration
# Yarn
yarn add @datadog/datadog-api-client-twilio-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TwilioIntegrationApiV2 } from "@datadog/datadog-api-client-twilio-integration";
import { v2 } from "@datadog/datadog-api-client-twilio-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "TwilioIntegrationApi.v2.listTwilioIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new TwilioIntegrationApiV2(configuration);

apiInstance.listTwilioIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```