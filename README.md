# Node.js Datadog API Client V2

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This repository contains the V2 rewrite of the TypeScript API client for the [Datadog API](https://docs.datadoghq.com/api/). The client is organized into logical API groups for better maintainability and usability. For supported APIs, see `services/` directory.

See [MIGRATION.md](./MIGRATION.md) for migration details.

## How to install

For detailed installation instructions, please refer to the `README.md` file in each client's directory under `services/{client}/`.

The shared package which contains the configuration object can be found in `packages/datadog-api-client` directory.

## Migration

See migration docs [MIGRATION.md](packages/datadog-api-client/README.md)

## Getting Started

See individual `README.md` in `services/{api}/` and `packages/datadog-api-client/` directories.

Here's an example of getting a monitor:

```bash
yarn add @datadog/datadog-api-client-monitors
```

```typescript
import { createConfiguration } from "@datadog/datadog-api-client";
import { v1 } from '@datadog/datadog-api-client-monitors';

const configuration = createConfiguration();
const apiInstance = new v1.MonitorsApiV1(configuration);

let params: v1.MonitorsApiGetMonitorRequest = {
  monitorId: 1,
};

apiInstance.getMonitor(params).then((data: v1.Monitor) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```
