# Notebooks

`@datadog/datadog-api-client-notebooks`

## Description

Notebooks.

Products: Notebooks

Interact with your notebooks through the API to make it easier to organize, find, and
share all of your notebooks with your team and organization. For more information, see the
[Notebooks documentation](https://docs.datadoghq.com/notebooks/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-notebooks
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-notebooks
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v1 } from "@datadog/datadog-api-client-notebooks";

const configuration = createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);
const params = {/* parameters */};

apiInstance.listNotebooks(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```