# @datadog/datadog-api-client-high-availability-multi-region

## Description

Configure High Availability Multi-Region (HAMR) connections between Datadog organizations.
HAMR provides disaster recovery capabilities by maintaining synchronized data between primary
and secondary organizations across different datacenters.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-high-availability-multi-region
# Yarn
yarn add @datadog/datadog-api-client-high-availability-multi-region
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { HighAvailabilityMultiRegionApiV2 } from "@datadog/datadog-api-client-high-availability-multi-region";
import { v2 } from "@datadog/datadog-api-client-high-availability-multi-region";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "HighAvailabilityMultiRegionApi.v2.getHamrOrgConnection": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new HighAvailabilityMultiRegionApiV2(configuration);

apiInstance.getHamrOrgConnection().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```