# Workload Protection

`@datadog/datadog-api-client-workload-protection`

## Description

Workload Protection agent rules and policies.

Products: Workload Protection

Workload Protection monitors file, network, and process activity across your environment to detect real-time threats to your infrastructure. See [Workload Protection](https://docs.datadoghq.com/security/workload_protection/) for more information on setting up Workload Protection.

**Note**: These endpoints are split based on whether you are using the US1-FED site or not. Please reference the specific resource for the site you are using.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-workload-protection
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-workload-protection
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-workload-protection";

const configuration = createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);
const params = {/* parameters */};

apiInstance.listCSMThreatsAgentRules(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```