# @datadog/datadog-api-client-aws-wif

## Description

Manage AWS Workload Identity Federation (WIF) mappings.
Persona mappings link IAM role ARN patterns to Datadog users for delegated-token authentication.
Intake mappings link IAM role ARN patterns to managed-rotation API keys for agent telemetry ingestion.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-aws-wif
# Yarn
yarn add @datadog/datadog-api-client-aws-wif
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AWSWIFApiV2 } from "@datadog/datadog-api-client-aws-wif";
import { v2 } from "@datadog/datadog-api-client-aws-wif";

const configuration = createConfiguration();
const apiInstance = new AWSWIFApiV2(configuration);

apiInstance.listAwsWifIntakeMappings().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```