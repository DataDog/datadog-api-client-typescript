# @datadog/datadog-api-client-rum-recovery

## Description

Search archived RUM sessions and recover individual sessions or query-based batches. Your organization must have Managed Archives enabled. Creating, counting, listing, and canceling batches also require batch recovery enablement.

Requires `rum_rehydration_filter_read` for search and request details, or `rum_rehydration_index` to create, estimate recoverable sessions, list batches, or cancel recovery requests.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-rum-recovery
# Yarn
yarn add @datadog/datadog-api-client-rum-recovery
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RUMRecoveryApiV2 } from "@datadog/datadog-api-client-rum-recovery";
import { v2 } from "@datadog/datadog-api-client-rum-recovery";

const configuration = createConfiguration();
const apiInstance = new RUMRecoveryApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRUMRecoverySessionCount(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```