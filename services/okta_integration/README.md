# @datadog/datadog-api-client-okta-integration

## Description

Configure your [Datadog Okta integration](https://docs.datadoghq.com/integrations/okta/) directly through the Datadog API.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-okta-integration
# Yarn
yarn add @datadog/datadog-api-client-okta-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OktaIntegrationApiV2 } from "@datadog/datadog-api-client-okta-integration";

const configuration = createConfiguration();
const apiInstance = new OktaIntegrationApiV2(configuration);

const result = await apiInstance.listOktaAccounts(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```