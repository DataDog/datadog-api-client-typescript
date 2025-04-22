# @datadog/datadog-api-client-audit

## Description

Search your Audit Logs events over HTTP.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-audit
# Yarn
yarn add @datadog/datadog-api-client-audit
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { AuditApiV2 } from "@datadog/datadog-api-client-audit";

const configuration = createConfiguration();
const apiInstance = new AuditApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listAuditLogs(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```