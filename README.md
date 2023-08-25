# Node.js Datadog API Client

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This repository contains a Node.js API client for the [Datadog API](https://docs.datadoghq.com/api/).

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

configuration.setServerVariables({
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

### Enable retry 

To enable the client to retry when rate limited (status 429) or status 500 and above:

```typescript
import { client } from '@datadog/datadog-api-client';
const configurationOpts = {
  enableRetry: true
};

const configuration = client.createConfiguration(configurationOpts);
```
The interval between 2 retry attempts will be the value of the x-ratelimit-reset response header when available. If not, it will be :

```typescript
(backoffMultiplier ** current_retry_count) * backoffBase
```
The maximum number of retry attempts is 3 by default and can be modified with

```typescript
maxRetries
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

### Zstd compression

Zstd compression support requires users to supply their own zstd compressor callback function.
The callback should accept string arg and return compressed Buffer data.
Callback signature `(body: string) => Buffer`.
For example, using `zstd.ts` package:

```typescript
import { compressSync } from 'zstd.ts'
import { client, v2 } from "@datadog/datadog-api-client";

async function main() {
  const configurationOpts = {
    zstdCompressorCallback: (body: string) => compressSync({input: Buffer.from(body, "utf8")})
  }
  const configuration = client.createConfiguration(configurationOpts);
  const apiInstance = new v2.MetricsApi(configuration);
  const params: v2.MetricsApiSubmitMetricsRequest = {
      body: {
          series: [
              {
                  metric: "system.load.1",
                  type: 0,
                  points: [
                      {
                          timestamp: Math.round(new Date().getTime() / 1000),
                          value: 0.7,
                      },
                  ],
              },
          ],
      },
      contentEncoding: "zstd1",
  };

  apiInstance.submitMetrics(params).then((data: v2.IntakePayloadAccepted) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  }).catch((error: any) => console.error(error));
}

main();
```

### Configure proxy

You can provide custom `HttpLibrary` implementation with proxy support to `configuration` object. See example below:

```typescript
import pako from "pako";
import bufferFrom from "buffer-from";
import fetch from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";
import { v1, client } from "@datadog/datadog-api-client";

const proxyAgent = new HttpsProxyAgent('http://127.0.0.11:3128');

class HttpLibraryWithProxy implements client.HttpLibrary {
    public debug = false;

    public send(request: client.RequestContext): Promise<client.ResponseContext> {
        const method = request.getHttpMethod().toString();
        let body = request.getBody();

        let compress = request.getHttpConfig().compress;
        if (compress === undefined) {
            compress = true;
        }

        const headers = request.getHeaders();
        if (typeof body === "string") {
            if (headers["Content-Encoding"] == "gzip") {
                body = bufferFrom(pako.gzip(body).buffer);
            } else if (headers["Content-Encoding"] == "deflate") {
                body = bufferFrom(pako.deflate(body).buffer);
            }
        }

        const resultPromise = fetch(request.getUrl(), {
            method: method,
            body: body as any,
            headers: headers,
            signal: request.getHttpConfig().signal,
            compress: compress,
            agent: proxyAgent,
        }).then((resp: any) => {
            const headers: { [name: string]: string } = {};
            resp.headers.forEach((value: string, name: string) => {
                headers[name] = value;
            });

            const body = {
                text: () => resp.text(),
                binary: () => resp.buffer(),
            };
            const response = new client.ResponseContext(resp.status, headers, body);
            return response;
        });

        return resultPromise;
    }
}

const configuration = client.createConfiguration({httpApi: new HttpLibraryWithProxy()});
const apiInstance = new v1.DashboardsApi(configuration);

apiInstance
    .listDashboards()
    .then((data: v1.DashboardSummary) => {
        console.log(
            "API called successfully. Returned data: " + JSON.stringify(data)
        );
    })
    .catch((error: any) => console.error(error));
```

## Documentation

Documentation for API endpoints can be found in [GitHub pages][github pages].

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
