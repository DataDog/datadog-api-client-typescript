# @datadog/datadog-api-client-usage-metering

## Description

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
npm install @datadog/datadog-api-client-usage-metering
# Yarn
yarn add @datadog/datadog-api-client-usage-metering
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { UsageMeteringApiV2 } from "@datadog/datadog-api-client-usage-metering";
import { v2 } from "@datadog/datadog-api-client-usage-metering";

const configuration = createConfiguration();
const apiInstance = new UsageMeteringApiV2(configuration);
const params = {/* parameters */};

apiInstance.getActiveBillingDimensions(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```