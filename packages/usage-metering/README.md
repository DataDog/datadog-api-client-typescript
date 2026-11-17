# Usage and Billing

`@datadog/datadog-api-client-usage-metering`

## Description

Usage metering, cost attribution, seat assignment and the product SKU catalog.

Products: Account Management

Look up the Datadog SKUs that are generally available, together with the public list
prices, allotments, and tiered pricing that apply to them on a given date.

The seats API allows you to view, assign, and unassign seats for your organization.

The usage metering API allows you to get hourly, daily, and
monthly usage across multiple facets of Datadog.
This API is available to all Pro and Enterprise customers.

**Note**: Usage data is delayed by up to 72 hours from when it was incurred.
It is retained for 15 months.

You can retrieve up to 24 hours of hourly usage data for multiple organizations,
and up to two months of hourly usage data for a single organization in one request.
Learn more on the [usage details documentation](https://docs.datadoghq.com/account_management/billing/usage_details/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-usage-metering
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-usage-metering
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-usage-metering";

const configuration = createConfiguration();
configuration.unstableOperations["v2.listProductCatalogSKUs"] = true;
const apiInstance = new v2.ProductCatalogApi(configuration);
const params = {/* parameters */};

apiInstance.listProductCatalogSKUs(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```