# @datadog/datadog-api-client-terraform-state-files

## Description

Configure synchronization of Terraform state files from S3 buckets and inspect synchronization status.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-terraform-state-files
# Yarn
yarn add @datadog/datadog-api-client-terraform-state-files
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TerraformStateFilesApiV2 } from "@datadog/datadog-api-client-terraform-state-files";
import { v2 } from "@datadog/datadog-api-client-terraform-state-files";

const configuration = createConfiguration();
const apiInstance = new TerraformStateFilesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listTerraformBackendSyncConfigs(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```