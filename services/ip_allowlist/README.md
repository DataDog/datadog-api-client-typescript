# @datadog/datadog-api-client-ip-allowlist

## Description

The IP allowlist API is used to manage the IP addresses that
can access the Datadog API and web UI. It does not block
access to intake APIs or public dashboards.

This is an enterprise-only feature. Request access by
contacting Datadog support, or see the [IP Allowlist page](https://docs.datadoghq.com/account_management/org_settings/ip_allowlist/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ip-allowlist
# Yarn
yarn add @datadog/datadog-api-client-ip-allowlist
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { IPAllowlistApiV2 } from "@datadog/datadog-api-client-ip-allowlist";
import { v2 } from "@datadog/datadog-api-client-ip-allowlist";

const configuration = createConfiguration();
const apiInstance = new IPAllowlistApiV2(configuration);

apiInstance.getIPAllowlist().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```