# Migration Notes: Moving from v1 Client to Logically Grouped Packages

This guide goes over how to migrate your code from using the monolithic `@datadog/datadog-api-client` package to the new logically grouped packages structure.

## Major changes

### Package structure changes
- The `@datadog/datadog-api-client` package now only contains core components and configuration objects.
- Service-specific code (e.g., `Monitor`) has been moved to individual packages in `services/` directory
  - Each API grouping is in its own dedicated package following the naming convention `@datadog/datadog-api-client-{apiName}`

### Configuration object updates
- `serverVariables`, `operationServerVariables` and `unstableOperation` keys in the configuration object now follow the same format:

  ```
  { apiName }.{ apiVersion }.{operation}
  ```

## Migration steps

### 1. Package installation

Install the required packages:

```bash
# Service-specific packages (install only the ones you need)
npm install @datadog/datadog-api-client-monitors
# OR
yarn add @datadog/datadog-api-client-monitors
# ... and so on for other services
```

All of the clients directly depend on the `@datadog/datadog-api-client` package for core components such as `Configuration` object. 
You can manually install the client using:

```bash
npm install @datadog/datadog-api-client@^2.0.0-beta.1
# OR
yarn add @datadog/datadog-api-client@^2.0.0-beta.1
```

### 2. Update core imports
Replace imports of core components from the main package:

```typescript
// Old
import { client } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration()
```

```typescript
// New
import { createConfiguration } from "@datadog/datadog-api-client";

const configuration = createConfiguration()
```

### 3. Update service specific imports
Update imports for service-specific models and APIs:

```typescript
// Old
import { v1 } from "@datadog/datadog-api-client";

const apiInstance = new v1.MonitorsApi();
```

```typescript
// New
import { v1 } from "@datadog/datadog-api-client-monitors";

const apiInstance = new v1.MonitorsApi();
```

### 4. Update configuration
Update your configuration object to use the new format `{ apiName }.{ apiVersion }.{ operation }`

```typescript
// Old
const configuration = createConfiguration({
  operationServerIndices: {
      "v2.LogsApi.submitLog": 0
  },
  unstableOperations: {
    "v2.createOpenAPI": true
  }
});
```

```typescript
// New
const configuration = createConfiguration({
  operationServerIndices: {
      "LogsApi.v2.submitLog": 0
  },
  operationServerVariables: {
      "LogsApi.v2.submitLog": {
          "site": "datadoghq.eu"
      }
  },
  unstableOperations: {
    "APIManagementApi.v2.createOpenAPI": true
  }
});
```

## Example migration

Here's a complete example showing how to migrate a typical use case:

```typescript
// Old
import { v1, client } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    apiKeyAuth: "YOUR_API_KEY",
    appKeyAuth: "YOUR_APP_KEY"
  }
});

const api = new v1.MonitorsApi(configuration);
```

```typescript
// New
import { Configuration, createConfiguration } from "@datadog/datadog-api-client";
import { v1 } from "@datadog/datadog-api-client-monitors";

const configuration = createConfiguration({
  authMethods: {
    apiKeyAuth: "YOUR_API_KEY",
    appKeyAuth: "YOUR_APP_KEY"
  }
});

const api = new v1.MonitorsApi(configuration);
```

## Available service packages

See [#Clients] section in the following [README.md](./packages/datadog-api-client/README.md#clients)

## Support

If you encounter any issues during migration, please:
1. Check the [API documentation](https://docs.datadoghq.com/api/)
2. Open an issue in the [GitHub repository](https://github.com/DataDog/datadog-api-client-typescript)
3. Contact [Datadog Support](https://www.datadoghq.com/support/)
