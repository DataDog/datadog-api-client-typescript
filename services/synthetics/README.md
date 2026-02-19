# @datadog/datadog-api-client-synthetics

## Description

Synthetic tests use simulated requests and actions so you can monitor the availability and performance of systems and applications. Datadog supports the following types of synthetic tests:
- [API tests](https://docs.datadoghq.com/synthetics/api_tests/)
- [Browser tests](https://docs.datadoghq.com/synthetics/browser_tests)
- [Network Path tests](https://docs.datadoghq.com/synthetics/network_path_tests/)
- [Mobile Application tests](https://docs.datadoghq.com/synthetics/mobile_app_testing)

You can use the Datadog API to create, manage, and organize tests and test suites programmatically.

For more information, see the [Synthetic Monitoring documentation](https://docs.datadoghq.com/synthetics/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

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
import { v2 } from "@datadog/datadog-api-client-synthetics";

const configuration = createConfiguration();
const apiInstance = new SyntheticsApiV2(configuration);

apiInstance.getOnDemandConcurrencyCap().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```