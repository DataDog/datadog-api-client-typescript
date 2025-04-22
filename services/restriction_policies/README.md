# @datadog/datadog-api-client-restriction-policies

## Description

A restriction policy defines the access control rules for a resource, mapping a set of relations
(such as editor and viewer) to a set of allowed principals (such as roles, teams, or users).
The restriction policy determines who is authorized to perform what actions on the resource.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-restriction-policies
# Yarn
yarn add @datadog/datadog-api-client-restriction-policies
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { RestrictionPoliciesApiV2 } from "@datadog/datadog-api-client-restriction-policies";
import { v2 } from "@datadog/datadog-api-client-restriction-policies";

const configuration = createConfiguration();
const apiInstance = new RestrictionPoliciesApiV2(configuration);
const params = {/* parameters */};

apiInstance.getRestrictionPolicy(params).then((data: v2.RestrictionPolicyResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```