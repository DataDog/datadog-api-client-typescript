# Log Management

`@datadog/datadog-api-client-logs`

## Description

Log submission and search, archives, archive searches, custom destinations, indexes, pipelines, log-based metrics and restriction queries.

Products: Log Management

Search your logs and send them to your Datadog platform over HTTP. See the [Log Management page](https://docs.datadoghq.com/logs/) for more information.

Archive Search queries logs directly from long-term storage archives without prior
rehydration and charges only for the data scanned.

A search runs in one of two modes. By default, it scans the archive and retains up to
100,000 matching logs for 24 hours on a dedicated results page. Include a `rehydration`
object to run a Search & Rehydration instead, which retains the matches for a longer
custom retention period and makes them available beyond Log Explorer, such as in Dashboards and Notebooks.

A search requires the `logs_write_historical_view` or `logs_write_archive_search`
permission. Rehydration requires `logs_write_historical_view`.

Archives forward all the logs ingested to a cloud storage system.

See the [Archives Page](https://app.datadoghq.com/logs/pipelines/archives)
for a list of the archives currently configured in Datadog.

Custom Destinations forward all the logs ingested to an external destination.

**Note**: Log forwarding is not available for the Government (US1-FED) site. Contact your account representative for more information.

See the [Custom Destinations Page](https://app.datadoghq.com/logs/pipelines/log-forwarding/custom-destinations)
for a list of the custom destinations currently configured in web UI.

Manage configuration of [log-based metrics](https://app.datadoghq.com/logs/pipelines/generate-metrics) for your organization.

**Note: This endpoint is in public beta. If you have any feedback, contact [Datadog support](https://docs.datadoghq.com/help/).**

A Restriction Query is a logs query that restricts which logs the `logs_read_data` permission grants read access to.
For users whose roles have Restriction Queries, any log query they make only returns those log events that also match
one of their Restriction Queries. This is true whether the user queries log events from any log-related feature, including
the log explorer, Live Tail, re-hydration, or a dashboard widget.

Restriction Queries currently only support use of the following components of log events:

- Reserved attributes
- The log message
- Tags

To restrict read access on log data, add a team tag to log events to indicate which teams own them, and then scope Restriction Queries to the relevant values of the team tag. Tags can be applied to log events in many ways, and a log event can have multiple tags with the same key (like team) and different values. This means the same log event can be visible to roles whose restriction queries are scoped to different team values.

See [How to Set Up RBAC for Logs](https://docs.datadoghq.com/logs/guide/logs-rbac/?tab=api#restrict-access-to-logs) for details on how to add restriction queries.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-logs
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-logs
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-logs";

const configuration = createConfiguration();
const apiInstance = new v2.LogsApi(configuration);
const params = {/* parameters */};

apiInstance.submitLog(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```