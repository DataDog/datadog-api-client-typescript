# Real User Monitoring

`@datadog/datadog-api-client-rum`

## Description

RUM applications, configuration, metrics, retention filters, operations, Managed Archive configurations and archived session recovery.

Products: RUM

Manage your Real User Monitoring (RUM) applications, and search or aggregate your RUM events over HTTP. See the [RUM & Session Replay page](https://docs.datadoghq.com/real_user_monitoring/) for more information

Manage the [Real User Monitoring (RUM)](https://docs.datadoghq.com/real_user_monitoring/)
configuration for your organization.

Get insights into the performance of your Real User Monitoring (RUM) applications over HTTP. See the [RUM & Session Replay page](https://docs.datadoghq.com/real_user_monitoring/) for more information

Configure Managed Archives for RUM applications. Your organization must have Managed Archives enabled.

Requires `rum_rehydration_filter_read` to list or get configurations, or `rum_rehydration_filter_write` to create, update, or delete them.

Manage configuration of [RUM-based metrics](https://app.datadoghq.com/rum/generate-metrics) for your organization.

Manage [RUM Operations](https://docs.datadoghq.com/real_user_monitoring/), business
transactions detected from RUM events through a configurable journey, and their links
to journeys. See the [RUM & Session Replay page](https://docs.datadoghq.com/real_user_monitoring/)
for more information.

Search archived RUM sessions and recover individual sessions or query-based batches. Your organization must have Managed Archives enabled. Creating, counting, listing, and canceling batches also require batch recovery enablement.

Requires `rum_rehydration_filter_read` for search and request details, or `rum_rehydration_index` to create, estimate recoverable sessions, list batches, or cancel recovery requests.

Manage [RUM SDK configurations](https://docs.datadoghq.com/real_user_monitoring/) delivered to RUM applications via Remote Configuration.

Manage retention filters through [Manage Applications](https://app.datadoghq.com/rum/list) of RUM for your organization.

Manage RUM retention quota configurations for your organization's RUM applications.

Manage teams ownership mappings between RUM views and the teams that own them.
See <https://docs.datadoghq.com/real_user_monitoring/ownership_of_views/>.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-rum
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-rum
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-rum";

const configuration = createConfiguration();
const apiInstance = new v2.RUMApi(configuration);
const params = {/* parameters */};

apiInstance.aggregateRUMEvents(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```