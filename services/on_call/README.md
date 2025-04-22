# @datadog/datadog-api-client-on-call

## Description

Configure your [Datadog On-Call](https://docs.datadoghq.com/service_management/on-call/)
directly through the Datadog API.

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

const configuration = createConfiguration();
const apiInstance = new OnCallApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.createOnCallEscalationPolicy(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```