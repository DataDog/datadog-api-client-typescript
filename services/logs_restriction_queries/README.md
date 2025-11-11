# @datadog/datadog-api-client-logs-restriction-queries

## Description

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
npm install @datadog/datadog-api-client-logs-restriction-queries
# Yarn
yarn add @datadog/datadog-api-client-logs-restriction-queries
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { LogsRestrictionQueriesApiV2 } from "@datadog/datadog-api-client-logs-restriction-queries";
import { v2 } from "@datadog/datadog-api-client-logs-restriction-queries";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "LogsRestrictionQueriesApi.v2.listRestrictionQueries": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new LogsRestrictionQueriesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listRestrictionQueries(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```