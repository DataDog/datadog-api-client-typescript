# @datadog/datadog-api-client-organizations

## Description

Create, edit, and manage your organizations. Read more about [multi-org accounts](https://docs.datadoghq.com/account_management/multi_organization).

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-organizations
# Yarn
yarn add @datadog/datadog-api-client-organizations
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { OrganizationsApiV2 } from "@datadog/datadog-api-client-organizations";

const configuration = createConfiguration();
const apiInstance = new OrganizationsApiV2(configuration);

const result = await apiInstance.listOrgConfigs(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```