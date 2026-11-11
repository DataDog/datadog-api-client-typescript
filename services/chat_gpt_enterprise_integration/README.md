# @datadog/datadog-api-client-chat-gpt-enterprise-integration

## Description

Manage your Datadog ChatGPT Enterprise integration accounts and account resources
directly through the Datadog API. See the
[ChatGPT Enterprise integration page](https://docs.datadoghq.com/integrations/chatgpt-enterprise/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-chat-gpt-enterprise-integration
# Yarn
yarn add @datadog/datadog-api-client-chat-gpt-enterprise-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ChatGPTEnterpriseIntegrationApiV2 } from "@datadog/datadog-api-client-chat-gpt-enterprise-integration";
import { v2 } from "@datadog/datadog-api-client-chat-gpt-enterprise-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "ChatGPTEnterpriseIntegrationApi.v2.listChatGPTEnterpriseIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new ChatGPTEnterpriseIntegrationApiV2(configuration);

apiInstance.listChatGPTEnterpriseIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```