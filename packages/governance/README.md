# Governance

`@datadog/datadog-api-client-governance`

## Description

Audit Trail events, high availability multi-region connections, Governance Console, tag rules and data deletion requests.

Products: Governance

Search your Audit Logs events over HTTP.

The Data Deletion API allows the user to target and delete data from the allowed products. It's enabled for Logs and depends on the `logs_delete_data` permission.

The Governance Console finds issues that build up across a Datadog organization over time,
such as API keys nobody uses, users who no longer need access, or custom metrics that are
never queried, and tracks them through to a fix.

These endpoints allow you to:

- Read insights: measures of how your organization uses Datadog, each with the query behind it.
- Configure controls: the rules deciding how one kind of issue is found and what is done about it.
- Act on detections: the issues a control found. Assign, defer, accept as an exception, or fix.
- Manage settings: organization-wide configuration and notification destinations.

See the [Governance Console page](https://docs.datadoghq.com/account_management/governance_console/)
for more information.

Configure High Availability Multi-Region (HAMR) connections between Datadog organizations.
HAMR provides disaster recovery capabilities by maintaining synchronized data between primary
and secondary organizations across different datacenters.

Tag Rules define rules that govern which tag values are accepted for a given tag key,
scoped to a particular telemetry source (such as logs, spans, or metrics). Rules can be
`blocking` (data not matching the rule is rejected) or `surfacing` (matching data is
highlighted but not blocked). Each rule reports a compliance `score` derived from how
much recent telemetry adheres to the rule. RUM supports only `surfacing` rules.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-governance
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-governance
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-governance";

const configuration = createConfiguration();
const apiInstance = new v2.AuditApi(configuration);
const params = {/* parameters */};

apiInstance.listAuditLogs(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```