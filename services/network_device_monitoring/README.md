# @datadog/datadog-api-client-network-device-monitoring

## Description

The Network Device Monitoring API allows you to fetch devices and interfaces and their attributes. See the [Network Device Monitoring page](https://docs.datadoghq.com/network_monitoring/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-network-device-monitoring
# Yarn
yarn add @datadog/datadog-api-client-network-device-monitoring
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { NetworkDeviceMonitoringApiV2 } from "@datadog/datadog-api-client-network-device-monitoring";
import { v2 } from "@datadog/datadog-api-client-network-device-monitoring";

const configuration = createConfiguration();
const apiInstance = new NetworkDeviceMonitoringApiV2(configuration);
const params = {/* parameters */};

apiInstance.listDevices(params).then((data: v2.ListDevicesResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```