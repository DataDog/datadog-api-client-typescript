# @datadog/datadog-api-client-ip-ranges

## Description

Get a list of IP prefixes belonging to Datadog.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ip-ranges
# Yarn
yarn add @datadog/datadog-api-client-ip-ranges
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IPRangesApiV1 } from "@datadog/datadog-api-client-ip-ranges";
import { v1 } from "@datadog/datadog-api-client-ip-ranges";

const configuration = createConfiguration();
const apiInstance = new IPRangesApiV1(configuration);

apiInstance.getIPRanges().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```