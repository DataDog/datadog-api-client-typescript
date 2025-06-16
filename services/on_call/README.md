# @datadog/datadog-api-client-on-call

## Description

Configure your [Datadog On-Call](https://docs.datadoghq.com/service_management/on-call/)
directly through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-on-call
# Yarn
yarn add @datadog/datadog-api-client-on-call
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OnCallApiV2 } from "@datadog/datadog-api-client-on-call";
import { v2 } from "@datadog/datadog-api-client-on-call";

const configuration = createConfiguration();
const apiInstance = new OnCallApiV2(configuration);
const params = {/* parameters */};

apiInstance.createOnCallEscalationPolicy(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```