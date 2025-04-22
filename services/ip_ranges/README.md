# @datadog/datadog-api-client-ip-ranges

## Description

Get a list of IP prefixes belonging to Datadog.

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

const configuration = createConfiguration();
const apiInstance = new IPRangesApiV1(configuration);

const result = await apiInstance.getIPRanges(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```