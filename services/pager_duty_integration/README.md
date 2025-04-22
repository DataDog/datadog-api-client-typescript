# @datadog/datadog-api-client-pager-duty-integration

## Description

Configure your [Datadog-PagerDuty integration](https://docs.datadoghq.com/integrations/pagerduty/)
directly through the Datadog API.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-pager-duty-integration
# Yarn
yarn add @datadog/datadog-api-client-pager-duty-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { PagerDutyIntegrationApiV1 } from "@datadog/datadog-api-client-pager-duty-integration";
import { v1 } from "@datadog/datadog-api-client-pager-duty-integration";

const configuration = createConfiguration();
const apiInstance = new PagerDutyIntegrationApiV1(configuration);
const params = {/* parameters */};

apiInstance.createPagerDutyIntegrationService(params).then((data: v1.PagerDutyServiceName) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```