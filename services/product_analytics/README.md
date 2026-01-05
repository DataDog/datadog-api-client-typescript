# @datadog/datadog-api-client-product-analytics

## Description

Send server-side events to Product Analytics. Server-Side Events Ingestion allows you to collect custom events
from any server-side source, and retains events for 15 months. Server-side events are helpful for understanding
causes of a funnel drop-off which are external to the client-side (for example, payment processing error).
See the [Product Analytics page](https://docs.datadoghq.com/product_analytics/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-product-analytics
# Yarn
yarn add @datadog/datadog-api-client-product-analytics
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ProductAnalyticsApiV2 } from "@datadog/datadog-api-client-product-analytics";
import { v2 } from "@datadog/datadog-api-client-product-analytics";

const configuration = createConfiguration();
const apiInstance = new ProductAnalyticsApiV2(configuration);
const params = {/* parameters */};

apiInstance.submitProductAnalyticsEvent(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```