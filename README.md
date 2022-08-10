# Node.js Datadog API Client

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This repository contains a Node.js API client for the [Datadog API](https://docs.datadoghq.com/api/).
The code is generated using [openapi-generator](https://github.com/OpenAPITools/openapi-generator)
and [apigentools](https://github.com/DataDog/apigentools).

## How to install

The package is under [@datadog/datadog-api-client](https://www.npmjs.com/package/@datadog/datadog-api-client) and can be installed through NPM or Yarn:

```sh
# NPM
npm install @datadog/datadog-api-client

# Yarn
yarn add @datadog/datadog-api-client
```

## Getting Started

Here's an example getting a monitor:

```typescript
import { client, v1 } from '@datadog/datadog-api-client';

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params:v1.MonitorsApiGetMonitorRequest = {
  // number | The ID of the monitor
  monitorId: 1,
};

apiInstance.getMonitor(params).then((data: v1.Monitor) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));

```

### Authentication

By default the library will use the `DD_API_KEY` and `DD_APP_KEY` environment variables to authenticate against the Datadog API.
To provide your own set of credentials, you need to set the appropriate keys on the configuration:

```typescript
import { client } from '@datadog/datadog-api-client';

const configurationOpts = {
  authMethods: {
    apiKeyAuth: "<API KEY>",
    appKeyAuth: "<APPLICATION KEY>"
  },
};

const configuration = client.createConfiguration(configurationOpts);
```

### Unstable Endpoints

This client includes access to Datadog API endpoints while they are in an unstable state and may undergo breaking changes. An extra configuration step is required to enable these endpoints:

```typescript
configuration.unstableOperations["<version>.<operationName>"] = true
```

where <operationName> is the name of the method used to interact with that endpoint. For example: `listLogIndexes`, or `getLogsIndex`.

### Changing Server

When talking to a different server, like the `eu` instance, change the server variables:

```typescript
import { client } from '@datadog/datadog-api-client';

const configuration = client.createConfiguration();

client.setServerVariables(configuration, {
  site: "datadoghq.eu"
});
```

### Disable compressed payloads

If you want to disable GZIP compressed responses, set the `compress` flag
on your configuration options:

```typescript
import { client } from '@datadog/datadog-api-client';
const configurationOpts = {
  httpConfig: {
    compress: false
  },
};

const configuration = client.createConfiguration(configurationOpts);
```

### Enable requests logging

If you want to enable requests logging, set the `debug` flag on your configuration object:

```typescript
import { client } from '@datadog/datadog-api-client';
const configurationOpts = {
  debug: true
};

const configuration = client.createConfiguration(configurationOpts);
```

### Adding timeout to requests

To add timeout or other mechanism to cancel requests, you need an abort
controller, for example the one implemented by
[abort-controller](https://www.npmjs.com/package/abort-controller). You can
then pass the `signal method to the HTTP configuration options:

```typescript
import { client, v1 } from '@datadog/datadog-api-client';
import AbortController from 'abort-controller';

const controller = new AbortController();
const timeout = setTimeout(
  () => { controller.abort(); },
  1000,
);
const configurationOpts = {
  httpConfig: {
    signal: controller.signal
  },
};

const configuration = client.createConfiguration(configurationOpts);

const apiInstance = new v1.MonitorsApi(configuration);
apiInstance.listMonitors().then((data: v1.Monitor[]) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error)).finally(() => clearTimeout(timeout));
```

### Pagination

Several listing operations have a pagination method to help consume all the items available.
For example, to retrieve all your incidents:

```typescript
import { client, v2 } from "@datadog/datadog-api-client";

async function main() {
  const configuration = client.createConfiguration();
  configuration.unstableOperations["v2.listIncidents"] = true;
  const apiInstance = new v2.IncidentsApi(configuration);

  for await (const incident of apiInstance.listIncidentsWithPagination()) {
      console.log("Got incident " + incident.id);
  }
}

main();
```

## Documentation

Documentation for API endpoints can be found in in [Github pages][github pages].

## Contributing

As most of the code in this repository is generated, we will only accept PRs for files
that are not modified by our code-generation machinery (changes to the generated files
would get overwritten). We happily accept contributions to files that are not autogenerated,
such as tests and development tooling.

## Author

support@datadoghq.com

## License

[Apache License, v2.0](LICENSE)

[github pages]: https://datadoghq.dev/datadog-api-client-typescript/
