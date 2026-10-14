# @datadog/datadog-api-client-delivery-performance

## Description

Search, send, or delete events for Delivery Performance (formerly DORA Metrics) to measure and improve your software delivery performance. See the [Delivery Performance page](https://docs.datadoghq.com/dora_metrics/) for more information.

**Note**: Delivery Performance is not available in the US1-FED site.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-delivery-performance
# Yarn
yarn add @datadog/datadog-api-client-delivery-performance
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DeliveryPerformanceApiV2 } from "@datadog/datadog-api-client-delivery-performance";

const configuration = createConfiguration();
const apiInstance = new DeliveryPerformanceApiV2(configuration);
const params = {/* parameters */};

apiInstance.createAIImpactUserActivity(params).then(() => {
    console.log("API called successfully.");
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```