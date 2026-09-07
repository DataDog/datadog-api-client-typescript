# @datadog/datadog-api-client-dem

## Description

Manage Digital Experience Monitoring journeys.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-dem
# Yarn
yarn add @datadog/datadog-api-client-dem
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DEMApiV2 } from "@datadog/datadog-api-client-dem";
import { v2 } from "@datadog/datadog-api-client-dem";

const configuration = createConfiguration();
const apiInstance = new DEMApiV2(configuration);
const params = {/* parameters */};

apiInstance.createJourney(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```