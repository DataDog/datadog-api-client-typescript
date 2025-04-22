# @datadog/datadog-api-client-metrics

## Description

The metrics endpoint allows you to:

- Post metrics data so it can be graphed on Datadog’s dashboards
- Query metrics from any time period (timeseries and scalar)
- Modify tag configurations for metrics
- View tags and volumes for metrics

**Note**: A graph can only contain a set number of points
and as the timeframe over which a metric is viewed increases,
aggregation between points occurs to stay below that set number.

The Post, Patch, and Delete `manage_tags` API methods can only be performed by
a user who has the `Manage Tags for Metrics` permission.

See the [Metrics page](https://docs.datadoghq.com/metrics/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-metrics
# Yarn
yarn add @datadog/datadog-api-client-metrics
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { MetricsApiV2 } from "@datadog/datadog-api-client-metrics";

const configuration = createConfiguration();
const apiInstance = new MetricsApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listTagConfigurations(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```