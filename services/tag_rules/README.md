# @datadog/datadog-api-client-tag-rules

## Description

Tag Rules define rules that govern which tag values are accepted for a given tag key,
scoped to a particular telemetry source (such as logs, spans, or metrics). Rules can be
`blocking` (data not matching the rule is rejected) or `surfacing` (matching data is
highlighted but not blocked). Each rule reports a compliance `score` derived from how
much recent telemetry adheres to the rule.

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-tag-rules
# Yarn
yarn add @datadog/datadog-api-client-tag-rules
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TagRulesApiV2 } from "@datadog/datadog-api-client-tag-rules";
import { v2 } from "@datadog/datadog-api-client-tag-rules";

const configuration = createConfiguration();
// Enable unstable operations
const configurationOpts = {
    unstableOperations: {
        "TagRulesApi.v2.listTagRules": true
    }
}

const configuration = createConfiguration(configurationOpts);
const apiInstance = new TagRulesApiV2(configuration);
const params = {/* parameters */};

apiInstance.listTagRules(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```