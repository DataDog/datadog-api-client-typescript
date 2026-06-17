# @datadog/datadog-api-client-intake-key

## Description

Exchange a cloud-provider identity proof for a Datadog API key via Workload Identity Federation intake mappings.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-intake-key
# Yarn
yarn add @datadog/datadog-api-client-intake-key
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IntakeKeyApiV2 } from "@datadog/datadog-api-client-intake-key";
import { v2 } from "@datadog/datadog-api-client-intake-key";

const configuration = createConfiguration();
const apiInstance = new IntakeKeyApiV2(configuration);

apiInstance.getIntakeKey().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```