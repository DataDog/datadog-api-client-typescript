# @datadog/datadog-api-client-temporal-cloud-open-metrics-integration

## Description

Manage your Datadog Temporal Cloud OpenMetrics integration accounts and account resources
directly through the Datadog API. See the
[Temporal Cloud OpenMetrics integration page](https://docs.datadoghq.com/integrations/temporal-cloud-openmetrics/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-temporal-cloud-open-metrics-integration
# Yarn
yarn add @datadog/datadog-api-client-temporal-cloud-open-metrics-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TemporalCloudOpenMetricsIntegrationApiV2 } from "@datadog/datadog-api-client-temporal-cloud-open-metrics-integration";
import { v2 } from "@datadog/datadog-api-client-temporal-cloud-open-metrics-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "TemporalCloudOpenMetricsIntegrationApi.v2.listTemporalCloudOpenMetricsIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new TemporalCloudOpenMetricsIntegrationApiV2(configuration);

apiInstance.listTemporalCloudOpenMetricsIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```