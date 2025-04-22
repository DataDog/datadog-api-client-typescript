# @datadog/datadog-api-client-microsoft-teams-integration

## Description

Configure your [Datadog Microsoft Teams integration](https://docs.datadoghq.com/integrations/microsoft_teams/)
directly through the Datadog API. Note: These endpoints do not support legacy connector handles.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-microsoft-teams-integration
# Yarn
yarn add @datadog/datadog-api-client-microsoft-teams-integration
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { MicrosoftTeamsIntegrationApiV2 } from "@datadog/datadog-api-client-microsoft-teams-integration";
import { v2 } from "@datadog/datadog-api-client-microsoft-teams-integration";

const configuration = createConfiguration();
const apiInstance = new MicrosoftTeamsIntegrationApiV2(configuration);
const params = {/* parameters */};

apiInstance.getChannelByName(params).then((data: v2.MicrosoftTeamsGetChannelByNameResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```