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
import { v1 } from '@datadog/datadog-api-client';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params:v1.MonitorsApiGetMonitorRequest = {
  // number | The ID of the monitor
  monitorId: 1,
};

apiInstance.getMonitor(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));

```

### Changing Server

When talking to a different server, like the `eu` instance, change the server variables:

```typescript
import { v1 } from '@datadog/datadog-api-client';

const configurationOpts = {
  httpConfig: {
    compress: false
  },
};

const configuration = v1.createConfiguration(configurationOpts);

v1.setVariables(configuration, {
  site: "datadoghq.eu"
});
```

### Disable compressed payloads

If you want to disable GZIP compressed responses, set the `compress` flag
on your configuration options:

```typescript
import { v1 } from '@datadog/datadog-api-client';
const configurationOpts = {
  httpConfig: {
    compress: false
  },
};

const configuration = v1.createConfiguration(configurationOpts);
```

## Documentation

Documentation for API endpoints can be found under the docs subdirectories, in [v1](/docs/v1/)
and [v2](/docs/v2/).

## Contributing

As most of the code in this repository is generated, we will only accept PRs for files
that are not modified by our code-generation machinery (changes to the generated files
would get overwritten). We happily accept contributions to files that are not autogenerated,
such as tests and development tooling.

## Author

support@datadoghq.com

## License

[Apache License, v2.0](LICENSE)
