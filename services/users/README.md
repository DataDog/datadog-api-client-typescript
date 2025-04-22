# @datadog/datadog-api-client-users

## Description

Create, edit, and disable users.

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-users
# Yarn
yarn add @datadog/datadog-api-client-users
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { UsersApiV2 } from "@datadog/datadog-api-client-users";

const configuration = createConfiguration();
const apiInstance = new UsersApiV2(configuration);
const params = {/* parameters */};

const result = await apiInstance.sendInvitations(params);
console.log("API called successfully. Returned data: " + JSON.stringify(result));
```