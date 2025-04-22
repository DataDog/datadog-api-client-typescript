# @datadog/datadog-api-client-spans

## Description

Search and aggregate your spans from your Datadog platform over HTTP.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-spans
# Yarn
yarn add @datadog/datadog-api-client-spans
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SpansApiV2 } from "@datadog/datadog-api-client-spans";
import { v2 } from "@datadog/datadog-api-client-spans";

const configuration = createConfiguration();
const apiInstance = new SpansApiV2(configuration);
const params = {/* parameters */};

apiInstance.aggregateSpans(params).then((data: v2.SpansAggregateResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```