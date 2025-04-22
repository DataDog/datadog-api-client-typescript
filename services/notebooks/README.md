# @datadog/datadog-api-client-notebooks

## Description

Interact with your notebooks through the API to make it easier to organize, find, and
share all of your notebooks with your team and organization. For more information, see the
[Notebooks documentation](https://docs.datadoghq.com/notebooks/).

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-notebooks
# Yarn
yarn add @datadog/datadog-api-client-notebooks
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { NotebooksApiV1 } from "@datadog/datadog-api-client-notebooks";

const configuration = createConfiguration();
const apiInstance = new NotebooksApiV1(configuration);
const params = {/* parameters */};

const result = await apiInstance.listNotebooks(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```