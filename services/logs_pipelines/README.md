# @datadog/datadog-api-client-logs-pipelines

## Description

Pipelines and processors operate on incoming logs, parsing
and transforming them into structured attributes for easier querying.

- See the [pipelines configuration page](https://app.datadoghq.com/logs/pipelines)
  for a list of the pipelines and processors currently configured in web UI.

- Additional API-related information about processors can be found in the
  [processors documentation](https://docs.datadoghq.com/logs/log_configuration/processors/?tab=api#lookup-processor).

- For more information about Pipelines, see the
  [pipeline documentation](https://docs.datadoghq.com/logs/log_configuration/pipelines).

**Notes:**

**Grok parsing rules may effect JSON output and require
returned data to be configured before using in a request.**
For example, if you are using the data returned from a
request for another request body, and have a parsing rule
that uses a regex pattern like `\s` for spaces, you will
need to configure all escaped spaces as `%{space}` to use
in the body data.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-logs-pipelines
# Yarn
yarn add @datadog/datadog-api-client-logs-pipelines
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { LogsPipelinesApiV1 } from "@datadog/datadog-api-client-logs-pipelines";

const configuration = createConfiguration();
const apiInstance = new LogsPipelinesApiV1(configuration);

const result = await apiInstance.getLogsPipelineOrder(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```