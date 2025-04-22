# @datadog/datadog-api-client-powerpack

## Description

The Powerpack endpoints allow you to:

- Get a Powerpack
- Create a Powerpack
- Delete a Powerpack
- Get a list of all Powerpacks

The Patch and Delete API methods can only be performed on a Powerpack by
a user who has the powerpack create permission for that specific Powerpack.

Read [Scale Graphing Expertise with Powerpacks](https://docs.datadoghq.com/dashboards/guide/powerpacks-best-practices/) for more information.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-powerpack
# Yarn
yarn add @datadog/datadog-api-client-powerpack
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { PowerpackApiV2 } from "@datadog/datadog-api-client-powerpack";

const configuration = createConfiguration();
const apiInstance = new PowerpackApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.listPowerpacks(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```