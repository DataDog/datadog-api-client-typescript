# @datadog/datadog-api-client-ci-visibility-git-hub-accounts

## Description

Manage CI Visibility opt-in status for your GitHub accounts and repositories. See the
[CI Visibility GitHub Actions setup page](https://docs.datadoghq.com/continuous_integration/setup_dd_ci_visibility_pipelines/github_actions/) for more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-ci-visibility-git-hub-accounts
# Yarn
yarn add @datadog/datadog-api-client-ci-visibility-git-hub-accounts
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { CIVisibilityGitHubAccountsApiV2 } from "@datadog/datadog-api-client-ci-visibility-git-hub-accounts";
import { v2 } from "@datadog/datadog-api-client-ci-visibility-git-hub-accounts";

const configuration = createConfiguration();
const apiInstance = new CIVisibilityGitHubAccountsApiV2(configuration);

apiInstance.listCIAppGitHubAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```