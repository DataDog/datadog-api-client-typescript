# @datadog/datadog-api-client-csm-threats

## Description

Workload Protection monitors file, network, and process activity across your environment to detect real-time threats to your infrastructure. See [Workload Protection](https://docs.datadoghq.com/security/workload_protection/) for more information on setting up Workload Protection.

**Note**: These endpoints are split based on whether you are using the US1-FED site or not. Please reference the specific resource for the site you are using.

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

apiInstance.listCSMThreatsAgentRules(params).then((data: v2.CloudWorkloadSecurityAgentRulesListResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```