# Container Monitoring

`@datadog/datadog-api-client-containers`

## Description

Containers and container images.

Products: Modern Compute: Containers

The Container Images API allows you to query Container Image data for your organization. See the [Container Images View page](https://docs.datadoghq.com/infrastructure/containers/container_images/) for more information.

The Containers API allows you to query container data for your organization.
See the [Container Monitoring page](https://docs.datadoghq.com/containers/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-containers
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-containers
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-containers";

const configuration = createConfiguration();
const apiInstance = new v2.ContainerImagesApi(configuration);
const params = {/* parameters */};

apiInstance.listContainerImages(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```