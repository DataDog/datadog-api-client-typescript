# Network Monitoring

`@datadog/datadog-api-client-network-monitoring`

## Description

Network connection and DNS aggregations, and network devices, interfaces and their tags.

Products: Network Monitoring

The Cloud Network Monitoring API allows you to fetch aggregated connections and DNS traffic with their attributes. See the [Cloud Network Monitoring page](https://docs.datadoghq.com/network_monitoring/cloud_network_monitoring/) and [DNS Monitoring page](https://docs.datadoghq.com/network_monitoring/dns/) for more information.

The Network Device Monitoring API allows you to fetch devices and interfaces and their attributes. See the [Network Device Monitoring page](https://docs.datadoghq.com/network_monitoring/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-network-monitoring
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-network-monitoring
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-network-monitoring";

const configuration = createConfiguration();
const apiInstance = new v2.CloudNetworkMonitoringApi(configuration);
const params = {/* parameters */};

apiInstance.getAggregatedConnections(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```