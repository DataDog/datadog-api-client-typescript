# @datadog/datadog-api-client-csm-threats

## Description

Workload Protection monitors file, network, and process activity across your environment to detect real-time threats to your infrastructure. See [Workload Protection](https://docs.datadoghq.com/security/workload_protection/) for more information on setting up Workload Protection.

**Note**: The `/api/v2/security_monitoring/cloud_workload_security` endpoints are deprecated. Use the `/api/v2/remote_config/products/cws` endpoints on all sites, including US1-FED.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-csm-threats
# Yarn
yarn add @datadog/datadog-api-client-csm-threats
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CSMThreatsApiV2 } from "@datadog/datadog-api-client-csm-threats";
import { v2 } from "@datadog/datadog-api-client-csm-threats";

const configuration = createConfiguration();
const apiInstance = new CSMThreatsApiV2(configuration);
const params = {/* parameters */};

apiInstance.listCSMThreatsAgentRules(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```