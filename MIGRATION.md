# Migration Notes: Moving from `@datadog/datadog-api-client` to the client packages

This guide goes over how to migrate your code from the monolithic `@datadog/datadog-api-client` package to the
client packages in this repository.

## Navigation

- [Major changes](#major-changes)
- [Migration steps](#migration-steps)
  - [1. Package installation](#1-package-installation)
  - [2. Update core imports](#2-update-core-imports)
  - [3. Update API imports](#3-update-api-imports)
  - [4. Configuration keys](#4-configuration-keys)
- [Finding an operation's package](#finding-an-operations-package)
- [Example migration](#example-migration)
- [Differences from the monolith](#differences-from-the-monolith)
- [From the 2.0.0-beta packages](#from-the-200-beta-packages)
- [Known gaps](#known-gaps)
- [Support](#support)

## Major changes

- `@datadog/datadog-api-client-core` (`packages/core`) holds the configuration object and the shared runtime.
- Each product area is its own package, `@datadog/datadog-api-client-<id>` (`packages/<id>`), and exports the
  `v1` and `v2` namespaces it covers. API class and model names are the monolith's, except for a few operations
  that moved to another class (see [Finding an operation's package](#finding-an-operations-package)).
- Unstable operation and operation server keys keep the monolith's format.

## Migration steps

### 1. Package installation

Install the core and the packages you need:

```bash
npm install @datadog/datadog-api-client-core @datadog/datadog-api-client-monitors
# OR
yarn add @datadog/datadog-api-client-core @datadog/datadog-api-client-monitors
```

### 2. Update core imports

```typescript
// Old
import { client } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
```

```typescript
// New
import { createConfiguration } from "@datadog/datadog-api-client-core";

const configuration = createConfiguration();
```

### 3. Update API imports

```typescript
// Old
import { v2 } from "@datadog/datadog-api-client";

const apiInstance = new v2.MonitorsApi(configuration);
```

```typescript
// New
import { v2 } from "@datadog/datadog-api-client-monitors";

const apiInstance = new v2.MonitorsApi(configuration);
```

### 4. Configuration keys

Unstable operations are keyed `<version>.<method>` and operation servers `<version>.<Class>.<method>`, as in
the monolith. `<Class>` is the monolith class, the `monolith` field of `package-mapping.json`, even for an
operation that moved to another class. `operationServerVariables` is new in the client packages:

```typescript
const configuration = createConfiguration({
  operationServerIndices: {
    "v2.LogsApi.submitLog": 0,
  },
  operationServerVariables: {
    "v2.LogsApi.submitLog": {
      site: "datadoghq.eu",
    },
  },
});
configuration.unstableOperations["v2.createOpenAPI"] = true;
```

## Finding an operation's package

`package-mapping.json` at the repository root lists every operation once: its monolith name, its package, and
its namespace, class and method there. For example:

```json
{
  "monolith": "v2.SecurityMonitoringApi.listFindings",
  "package": "@datadog/datadog-api-client-security-findings",
  "namespace": "v2",
  "class": "SecurityFindingsApi",
  "method": "listFindings"
}
```

So `new v2.SecurityMonitoringApi(configuration).listFindings()` becomes:

```typescript
import { v2 } from "@datadog/datadog-api-client-security-findings";

new v2.SecurityFindingsApi(configuration).listFindings();
```

## Example migration

```typescript
// Old
import { v1, client } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    apiKeyAuth: "YOUR_API_KEY",
    appKeyAuth: "YOUR_APP_KEY",
  },
});

const api = new v1.MonitorsApi(configuration);
```

```typescript
// New
import { createConfiguration } from "@datadog/datadog-api-client-core";
import { v1 } from "@datadog/datadog-api-client-monitors";

const configuration = createConfiguration({
  authMethods: {
    apiKeyAuth: "YOUR_API_KEY",
    appKeyAuth: "YOUR_APP_KEY",
  },
});

const api = new v1.MonitorsApi(configuration);
```

## Differences from the monolith

- `v1.ObjectSerializer` and `v2.ObjectSerializer` are no longer exported from the namespaces.
- The `client.*` names, such as `client.ApiException` and `client.Configuration`, are top-level exports of
  `@datadog/datadog-api-client-core`.
- A monolith `Configuration` can't be passed to a package class. To use both side by side, create one
  configuration for each.
- A model that several packages use is a separate class in each, so `instanceof` doesn't work across packages.

## From the 2.0.0-beta packages

- The core `@datadog/datadog-api-client@2.0.0-beta.x` is now `@datadog/datadog-api-client-core`, and packages
  are grouped by product area instead of by API tag. Use `package-mapping.json` to find each operation's package.
- Operation server keys like `"LogsApi.v2.submitLog"` are now ignored without an error. Use
  `"v2.LogsApi.submitLog"`.
- Unstable keys like `"IncidentsApi.v2.createIncident"` no longer enable the operation, which throws as
  disabled. Use `"v2.createIncident"`.
- The root exports like `MonitorsApiV2` are gone. Use `import { v2 } from "@datadog/datadog-api-client-<id>"`
  and `v2.MonitorsApi`.

## Known gaps

The `preserveLargeIntegers` configuration option and the `Int64` types aren't available yet in the client
packages.

## Support

If you encounter any issues during migration, please:
1. Check the [API documentation](https://docs.datadoghq.com/api/)
2. Open an issue in the [GitHub repository](https://github.com/DataDog/datadog-api-client-typescript)
3. Contact [Datadog Support](https://www.datadoghq.com/support/)
