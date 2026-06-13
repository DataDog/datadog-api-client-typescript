# @datadog/datadog-api-client-specs

## Description

View API specs stored in the system.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-specs
# Yarn
yarn add @datadog/datadog-api-client-specs
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SpecsApiV2 } from "@datadog/datadog-api-client-specs";
import { v2 } from "@datadog/datadog-api-client-specs";

const configuration = createConfiguration();
const apiInstance = new SpecsApiV2(configuration);

apiInstance.listSpecs().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```