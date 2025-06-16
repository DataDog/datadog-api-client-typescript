# @datadog/datadog-api-client-tags

## Description

The tag endpoint allows you to assign tags to hosts,
for example: `role:database`. Those tags are applied to
all metrics sent by the host. Refer to hosts by name
(`yourhost.example.com`) when fetching and applying
tags to a particular host.

The component of your infrastructure responsible for a tag is identified
by a source. For example, some valid sources include nagios, hudson, jenkins,
users, feed, chef, puppet, git, bitbucket, fabric, capistrano, etc.

Read more about tags on [Getting Started with Tags](https://docs.datadoghq.com/getting_started/tagging/).

## Navigation

- [Installation](#installation)
- [Getting Started](#getting-started)

## Installation

```sh
# NPM
npm install @datadog/datadog-api-client-tags
# Yarn
yarn add @datadog/datadog-api-client-tags
```

## Getting Started
```ts
import { createConfiguration } from "@datadog/datadog-api-client";
import { TagsApiV1 } from "@datadog/datadog-api-client-tags";
import { v1 } from "@datadog/datadog-api-client-tags";

const configuration = createConfiguration();
const apiInstance = new TagsApiV1(configuration);
const params = {/* parameters */};

apiInstance.listHostTags(params).then((data) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
}).catch((error) => {
    console.error("Error calling API: " + error);
});
```