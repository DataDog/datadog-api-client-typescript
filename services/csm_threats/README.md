# @datadog/datadog-api-client-csm-threats

## Description

Cloud Security Management Threats (CSM Threats) monitors file, network, and process activity across your environment to detect real-time threats to your infrastructure. See [Cloud Security Management Threats](https://docs.datadoghq.com/security/threats/) for more information on setting up CSM Threats.

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

apiInstance.listCSMThreatsAgentRules(params).then((data: v2.CloudWorkloadSecurityAgentRulesListResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```