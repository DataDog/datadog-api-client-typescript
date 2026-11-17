# Cloud Cost Management

`@datadog/datadog-api-client-cloud-cost-management`

## Description

Cloud cost configuration, budgets, tag pipelines, custom costs and optimization.

Products: Cloud Cost Management

The Cloud Cost Management API allows you to set up, edit, and delete Cloud Cost Management accounts for AWS, Azure, and Google Cloud. You can query your cost data by using the [Metrics endpoint](https://docs.datadoghq.com/api/latest/metrics/#query-timeseries-data-across-multiple-products) and the `cloud_cost` data source. For more information, see the [Cloud Cost Management documentation](https://docs.datadoghq.com/cloud_cost_management/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-cloud-cost-management
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-cloud-cost-management
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-cloud-cost-management";

const configuration = createConfiguration();
const apiInstance = new v2.CloudCostManagementApi(configuration);
const params = {/* parameters */};

apiInstance.getCostAccountFilters(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```