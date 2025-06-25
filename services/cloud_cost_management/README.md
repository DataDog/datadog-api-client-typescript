# @datadog/datadog-api-client-cloud-cost-management

## Description

The Cloud Cost Management API allows you to set up, edit, and delete Cloud Cost Management accounts for AWS, Azure, and GCP. You can query your cost data by using the [Metrics endpoint](https://docs.datadoghq.com/api/latest/metrics/#query-timeseries-data-across-multiple-products) and the `cloud_cost` data source. For more information, see the [Cloud Cost Management documentation](https://docs.datadoghq.com/cloud_cost_management/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-cloud-cost-management
# Yarn
yarn add @datadog/datadog-api-client-cloud-cost-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CloudCostManagementApiV2 } from "@datadog/datadog-api-client-cloud-cost-management";
import { v2 } from "@datadog/datadog-api-client-cloud-cost-management";

const configuration = createConfiguration();
const apiInstance = new CloudCostManagementApiV2(configuration);

apiInstance.listCostAWSCURConfigs().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```