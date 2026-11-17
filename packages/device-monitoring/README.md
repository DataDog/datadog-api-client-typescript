# Device Monitoring

`@datadog/datadog-api-client-device-monitoring`

## Description

End-user devices reported by the Datadog Agent, with their health, hardware and connectivity attributes.

Products: Device Monitoring

Inspect devices reported by the Datadog Agent on end-user laptops, desktops,
and mobile devices, including their health, hardware, and connectivity attributes.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-device-monitoring
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-device-monitoring
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-device-monitoring";

const configuration = createConfiguration();
configuration.unstableOperations["v2.getEUDMDevices"] = true;
const apiInstance = new v2.EndUserDeviceMonitoringApi(configuration);
const params = {/* parameters */};

apiInstance.getEUDMDevices(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```