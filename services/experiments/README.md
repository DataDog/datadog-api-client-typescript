# @datadog/datadog-api-client-experiments

## Description

Create and manage experiments, metrics, subject types, SQL models, and protocols.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-experiments
# Yarn
yarn add @datadog/datadog-api-client-experiments
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ExperimentsApiV2 } from "@datadog/datadog-api-client-experiments";
import { v2 } from "@datadog/datadog-api-client-experiments";

const configuration = createConfiguration();
const apiInstance = new ExperimentsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listExperiments(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```