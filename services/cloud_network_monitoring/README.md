# @datadog/datadog-api-client-cloud-network-monitoring

## Description

The Cloud Network Monitoring API allows you to fetch aggregated connections and their attributes. See the [Cloud Network Monitoring page](https://docs.datadoghq.com/network_monitoring/cloud_network_monitoring/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-cloud-network-monitoring
# Yarn
yarn add @datadog/datadog-api-client-cloud-network-monitoring
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CloudNetworkMonitoringApiV2 } from "@datadog/datadog-api-client-cloud-network-monitoring";
import { v2 } from "@datadog/datadog-api-client-cloud-network-monitoring";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "CloudNetworkMonitoringApi.v2.getAggregatedConnections": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new CloudNetworkMonitoringApiV2(configuration);
const params = {/* parameters */};

apiInstance.getAggregatedConnections(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```