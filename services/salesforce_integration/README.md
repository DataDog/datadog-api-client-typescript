# @datadog/datadog-api-client-salesforce-integration

## Description

Configure your [Datadog Salesforce integration](https://docs.datadoghq.com/integrations/salesforce/)
directly through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-salesforce-integration
# Yarn
yarn add @datadog/datadog-api-client-salesforce-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SalesforceIntegrationApiV2 } from "@datadog/datadog-api-client-salesforce-integration";
import { v2 } from "@datadog/datadog-api-client-salesforce-integration";

const configuration = createConfiguration();
const apiInstance = new SalesforceIntegrationApiV2(configuration);

apiInstance.getIncidentTemplates().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```