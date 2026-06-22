# @datadog/datadog-api-client-ecs-remediation

## Description

Manage ECS remediation investigations and execute proposed remediation plans.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ecs-remediation
# Yarn
yarn add @datadog/datadog-api-client-ecs-remediation
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { ECSRemediationApiV2 } from "@datadog/datadog-api-client-ecs-remediation";
import { v2 } from "@datadog/datadog-api-client-ecs-remediation";

const configuration = createConfiguration();
const apiInstance = new ECSRemediationApiV2(configuration);
const params = {/* parameters */};

apiInstance.executeRemediation(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```