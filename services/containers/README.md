# @datadog/datadog-api-client-containers

## Description

The Containers API allows you to query container data for your organization. See the [Container Monitoring page](https://docs.datadoghq.com/containers/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-containers
# Yarn
yarn add @datadog/datadog-api-client-containers
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ContainersApiV2 } from "@datadog/datadog-api-client-containers";
import { v2 } from "@datadog/datadog-api-client-containers";

const configuration = createConfiguration();
const apiInstance = new ContainersApiV2(configuration);
const params = {/* parameters */};

apiInstance.listContainers(params).then((data: v2.ContainersResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```