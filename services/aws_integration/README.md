# @datadog/datadog-api-client-aws-integration

## Description

Configure your Datadog-AWS integration directly through the Datadog API.
For more information, see the [AWS integration page](https://docs.datadoghq.com/integrations/amazon_web_services).

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-aws-integration
# Yarn
yarn add @datadog/datadog-api-client-aws-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AWSIntegrationApiV2 } from "@datadog/datadog-api-client-aws-integration";
import { v2 } from "@datadog/datadog-api-client-aws-integration";

const configuration = createConfiguration();
// Enable unstable operations
configuration.unstableOperations["v2.listAWSAccounts"] = true;
const apiInstance = new AWSIntegrationApiV2(configuration);
const params = {/* parameters */};

apiInstance.listAWSAccounts(params).then((data: v2.AWSAccountsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```