# @datadog/datadog-api-client-synthetics

## Description

Datadog Synthetics uses simulated user requests and browser rendering to help you ensure uptime,
identify regional issues, and track your application performance. Datadog Synthetics tests come in
two different flavors, [API tests](https://docs.datadoghq.com/synthetics/api_tests/)
and [browser tests](https://docs.datadoghq.com/synthetics/browser_tests). You can use Datadog’s API to
manage both test types programmatically.

For more information about Synthetics, see the [Synthetics overview](https://docs.datadoghq.com/synthetics/).

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-synthetics
# Yarn
yarn add @datadog/datadog-api-client-synthetics
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { SyntheticsApiV2 } from "@datadog/datadog-api-client-synthetics";

const configuration = createConfiguration();
const apiInstance = new SyntheticsApiV2(configuration);

const result = await apiInstance.getOnDemandConcurrencyCap(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```