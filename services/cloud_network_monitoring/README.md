# @datadog/datadog-api-client-cloud-network-monitoring

## Description

The Cloud Network Monitoring API allows you to fetch aggregated connections and their attributes. See the [Cloud Network Monitoring page](https://docs.datadoghq.com/network_monitoring/cloud_network_monitoring/) for more information.

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
configuration.unstableOperations["v2.getAggregatedConnections"] = true;
const apiInstance = new CloudNetworkMonitoringApiV2(configuration);
const params = {/* parameters */};

apiInstance.getAggregatedConnections(params).then((data: v2.SingleAggregatedConnectionResponseArray) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```