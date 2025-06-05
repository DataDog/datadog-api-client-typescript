# @datadog/datadog-api-client-dora-metrics

## Description

Search or send events for DORA Metrics to measure and improve your software delivery performance. See the [DORA Metrics page](https://docs.datadoghq.com/dora_metrics/) for more information.

**Note**: DORA Metrics are not available in the US1-FED site.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-dora-metrics
# Yarn
yarn add @datadog/datadog-api-client-dora-metrics
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DORAMetricsApiV2 } from "@datadog/datadog-api-client-dora-metrics";
import { v2 } from "@datadog/datadog-api-client-dora-metrics";

const configuration = createConfiguration();
const apiInstance = new DORAMetricsApiV2(configuration);
const params = {/* parameters */};

apiInstance.createDORADeployment(params).then((data: v2.DORADeploymentResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```