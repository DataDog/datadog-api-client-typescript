# CI Visibility

`@datadog/datadog-api-client-ci-visibility`

## Description

CI pipelines, pipeline events, GitHub accounts and CI job logs.

Products: CI Pipeline Visibility

Manage CI Visibility opt-in status for your GitHub accounts and repositories. See the
[CI Visibility GitHub Actions setup page](https://docs.datadoghq.com/continuous_integration/pipelines/github/)
for more information.

Send CI job logs over HTTP for CI Visibility.

Search or aggregate your CI Visibility pipeline events and send them to your Datadog site over HTTP. See the [CI Pipeline Visibility in Datadog page](https://docs.datadoghq.com/continuous_integration/pipelines/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-ci-visibility
# Yarn
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-ci-visibility
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v2 } from "@datadog/datadog-api-client-ci-visibility";

const configuration = createConfiguration();
const apiInstance = new v2.CIVisibilityGitHubAccountsApi(configuration);

apiInstance.listCIAppGitHubAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```