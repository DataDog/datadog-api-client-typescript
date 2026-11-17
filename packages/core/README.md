# @datadog/datadog-api-client-core
## Description

This package is the runtime core of the @datadog/datadog-api-client-* client packages: configuration,
authentication, HTTP, retries, compression, servers, errors, pagination and serialization. Install it with the
packages of the APIs you use.

Exports marked `@internal` are for the generated packages: they stay backward compatible within a major version of
this package, but aren't meant for direct use.

## Navigation

- [Usage](#usage)
  - [Authentication](#authentication)
  - [Unstable Endpoints](#unstable-endpoints)
  - [Changing Server](#changing-server)
  - [Disable compressed payloads](#disable-compressed-payloads)
  - [Enable requests logging](#enable-requests-logging)
  - [Enable retry](#enable-retry)
  - [Adding timeout to requests](#adding-timeout-to-requests)
  - [Pagination](#pagination)
  - [Zstd compression](#zstd-compression)
  - [Configure proxy](#configure-proxy)
- [Several copies of the core](#several-copies-of-the-core)
- [Migration gaps](#migration-gaps)

## Usage

```typescript
import { createConfiguration } from "@datadog/datadog-api-client-core";

const configuration = createConfiguration();
```

### Authentication

By default the library will use the `DD_API_KEY` and `DD_APP_KEY` environment variables to authenticate against the Datadog API.
To provide your own set of credentials, you need to set the appropriate keys on the configuration:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client-core';
import { v1 } from '@datadog/datadog-api-client-monitors';

const configurationOpts = {
  authMethods: {
    apiKeyAuth: "<API KEY>",
    appKeyAuth: "<APPLICATION KEY>"
  },
};

const configuration = createConfiguration(configurationOpts);
const apiInstance = new v1.MonitorsApi(configuration);
```

### Unstable Endpoints

Clients can include access to Datadog API endpoints while they are in an unstable state and may undergo breaking changes. An extra configuration step is required to enable these endpoints:

```typescript
configuration.unstableOperations["<version>.<operationName>"] = true
```

where `<version>` is the path version (`v1` or `v2`) and `<operationName>` is the name of the method used to interact with that endpoint.

### Changing Server

When talking to a different server, like the `eu` instance, change the server variables:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client-core';

const configurationOpts = {
    serverVariables: {
        "site": "datadoghq.eu"
    }
};

const configuration = createConfiguration(configurationOpts);
```

or, on an existing configuration:

```typescript
configuration.setServerVariables({
  site: "datadoghq.eu"
});
```

The `site` variable also applies to operations with their own servers. The `DD_SITE` environment variable sets it
when the configuration sets neither a site nor a `baseServer`. With a `baseServer`, every operation uses that server,
so `setServerVariables` only sets that server's own `site` variable.

#### Changing Server on operations

Some operations may require a different server than the one specified in the configuration.
See the `operationServers` property of each API class for the servers an operation can use.
`<ApiName>` is the operation's class in the monolith client, which differs from its package's class for operations
moved to another package; `package-mapping.json` lists it as `monolith`.

```typescript
const configurationOpts = {
    operationServerIndices: {
        "<version>.<ApiName>.<operationName>": 0
    },
    operationServerVariables: {
        "<version>.<ApiName>.<operationName>": {
            "site": "datadoghq.eu"
        }
    }
};

const configuration = createConfiguration(configurationOpts);
```
### Disable compressed payloads

If you want to disable GZIP compressed responses, set the `compress` flag
on your configuration options:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client-core';
const configurationOpts = {
  httpConfig: {
    compress: false
  },
};

const configuration = createConfiguration(configurationOpts);
```

### Enable requests logging

If you want to enable requests logging, set the `debug` flag on your configuration object:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client-core';
const configurationOpts = {
  debug: true
};

const configuration = createConfiguration(configurationOpts);
```

### Enable retry 

To enable the client to retry when rate limited (status 429) or status 500 and above:

```typescript
import { createConfiguration } from '@datadog/datadog-api-client-core';
const configurationOpts = {
  enableRetry: true
};

const configuration = createConfiguration(configurationOpts);
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
import { createConfiguration } from '@datadog/datadog-api-client-core';
import { v1 } from '@datadog/datadog-api-client-monitors';

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

const configuration = createConfiguration(configurationOpts);

const apiInstance = new v1.MonitorsApi(configuration);
apiInstance.listMonitors().then((data: v1.Monitor[]) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error)).finally(() => clearTimeout(timeout));
```

### Pagination

Several listing operations have a pagination method to help consume all the items available.
For example, to retrieve all your monitors:

```typescript
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v1 } from "@datadog/datadog-api-client-monitors";

async function main() {
  const configuration = createConfiguration();
  const apiInstance = new v1.MonitorsApi(configuration);

  for await (const monitor of apiInstance.listMonitorsWithPagination()) {
      console.log("Got monitor " + monitor.id);
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
import { createConfiguration } from "@datadog/datadog-api-client-core";

const configurationOpts = {
  zstdCompressorCallback: (body: string) => compressSync({input: Buffer.from(body, "utf8")})
}
const configuration = createConfiguration(configurationOpts);
```

Operations that accept it then take `contentEncoding: "zstd1"` in their parameters.

### Configure proxy

You can provide custom `HttpLibrary` implementation with proxy support to `configuration` object. See example below:

```typescript
import pako from "pako";
import bufferFrom from "buffer-from";
import fetch from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";

import { createConfiguration, ResponseContext, RequestContext, HttpLibrary } from "@datadog/datadog-api-client-core";
import { v1 } from "@datadog/datadog-api-client-monitors";

const proxyAgent = new HttpsProxyAgent('http://127.0.0.11:3128');

class HttpLibraryWithProxy implements HttpLibrary {
    public debug = false;

    public send(request: RequestContext): Promise<ResponseContext> {
        const method = request.getHttpMethod().toString();
        let body = request.getBody();

        let compress = request.getHttpConfig().compress;
        if (compress === undefined) {
            compress = true;
        }

        const headers = request.getHeaders();
        if (typeof body === "string") {
            if (headers["Content-Encoding"] === "gzip") {
                body = bufferFrom(pako.gzip(body).buffer);
            } else if (headers["Content-Encoding"] === "deflate") {
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
            const response = new ResponseContext(resp.status, headers, body);
            return response;
        });

        return resultPromise;
    }
}

const configuration = createConfiguration({httpApi: new HttpLibraryWithProxy()});
const apiInstance = new v1.MonitorsApi(configuration);

apiInstance
    .listMonitors()
    .then((data: v1.Monitor[]) => {
        console.log(
            "API called successfully. Returned data: " + JSON.stringify(data)
        );
    })
    .catch((error: any) => console.error(error));
```

## Several copies of the core

Each client package depends on a compatible version range of this package, and a package manager installs one
copy when the ranges overlap. When they don't, several copies are installed side by side and work together,
but `instanceof` checks against this package's classes, such as `error instanceof ApiException`, are false for
objects created by another copy. Check `error.code` instead, or keep the client packages on overlapping core
versions.

## Migration gaps

The `preserveLargeIntegers` configuration option and the `Int64` types of `@datadog/datadog-api-client` aren't
available yet in the client packages.