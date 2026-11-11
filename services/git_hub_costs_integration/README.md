# @datadog/datadog-api-client-git-hub-costs-integration

## Description

Manage your Datadog GitHub Costs integration accounts and account resources
directly through the Datadog API. See the
[GitHub Costs integration page](https://docs.datadoghq.com/integrations/github-costs/) for
more information.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-git-hub-costs-integration
# Yarn
yarn add @datadog/datadog-api-client-git-hub-costs-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { GitHubCostsIntegrationApiV2 } from "@datadog/datadog-api-client-git-hub-costs-integration";
import { v2 } from "@datadog/datadog-api-client-git-hub-costs-integration";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "GitHubCostsIntegrationApi.v2.listGitHubCostsIntegrationAccounts": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new GitHubCostsIntegrationApiV2(configuration);

apiInstance.listGitHubCostsIntegrationAccounts().then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```