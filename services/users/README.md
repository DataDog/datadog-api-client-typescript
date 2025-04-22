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
import { v2 } from "@datadog/datadog-api-client-users";

const configuration = createConfiguration();
const apiInstance = new UsersApiV2(configuration);
const params = {/* parameters */};

apiInstance.sendInvitations(params).then((data: v2.UserInvitationsResponse) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```