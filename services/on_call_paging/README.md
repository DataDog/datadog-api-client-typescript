# @datadog/datadog-api-client-on-call-paging

## Description

Trigger and manage [Datadog On-Call](https://docs.datadoghq.com/service_management/on-call/)
pages directly through the Datadog API.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-on-call-paging
# Yarn
yarn add @datadog/datadog-api-client-on-call-paging
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OnCallPagingApiV2 } from "@datadog/datadog-api-client-on-call-paging";
import { v2 } from "@datadog/datadog-api-client-on-call-paging";

const configuration = createConfiguration();
const apiInstance = new OnCallPagingApiV2(configuration);
const params = {/* parameters */};

apiInstance.createOnCallPage(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```