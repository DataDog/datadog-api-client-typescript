# @datadog/datadog-api-client-domain-allowlist

## Description

Configure your Datadog Email Domain Allowlist directly through the Datadog API.
The Email Domain Allowlist controls the domains that certain datadog emails can be sent to.
For more information, see the [Domain Allowlist docs page](https://docs.datadoghq.com/account_management/org_settings/domain_allowlist)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-domain-allowlist
# Yarn
yarn add @datadog/datadog-api-client-domain-allowlist
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { DomainAllowlistApiV2 } from "@datadog/datadog-api-client-domain-allowlist";

const configuration = createConfiguration();
const apiInstance = new DomainAllowlistApiV2(configuration);

const result = await apiInstance.getDomainAllowlist(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```