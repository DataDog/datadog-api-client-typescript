# @datadog/datadog-api-client-end-user-device-monitoring

## Description

Inspect devices reported by the Datadog Agent on end-user laptops, desktops,
and mobile devices, including their health, hardware, and connectivity attributes.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-end-user-device-monitoring
# Yarn
yarn add @datadog/datadog-api-client-end-user-device-monitoring
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { EndUserDeviceMonitoringApiV2 } from "@datadog/datadog-api-client-end-user-device-monitoring";
import { v2 } from "@datadog/datadog-api-client-end-user-device-monitoring";

const configuration = createConfiguration();
const apiInstance = new EndUserDeviceMonitoringApiV2(configuration);

apiInstance.getEUDMDevices().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```