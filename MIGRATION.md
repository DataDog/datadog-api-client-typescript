# Migration Notes: Moving from v1 Client to Logically Grouped Packages

This guide will help you migrate your code from using the monolithic `@datadog/datadog-api-client` package to the new logically grouped packages structure.

## Major Changes

### Package Structure Changes
- The `@datadog/datadog-api-client` package now only contains core components and configuration objects.
- Service-specific code (e.g., `Monitor` API) has been moved to individual packages in `services/` directory
  - Each service is its own dedicated package following the naming convention `@datadog/datadog-api-client-{service}`

### Configuration Object Updates
- `serverVariables`, `operationServerVariables` and `unstableOperation` keys in the configuration object now follow the same format:
  ```
  { apiName }.{ apiVersion }.{operation}
  ```

## Migration Steps

### 1. Update core imports
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

### 2. Update service specific imports
Update imports for service-specific models and APIs:

```typescript
// Old
import { v1 } from "@datadog/datadog-api-client";

const apiInstance = new v1.MonitorsApi();

// New
import { v1 } from "@datadog/datadog-api-client-monitors";

const apiInstance = new v1.MonitorsApi();
```

### 3. Update Configuration
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

## Example Migration

Here's a complete example showing how to migrate a typical use case:

```typescript
// Old
import { v1, createConfiguration } from "@datadog/datadog-api-client";

const configuration = createConfiguration({
  authMethods: {
    apiKeyAuth: "YOUR_API_KEY",
    appKeyAuth: "YOUR_APP_KEY"
  }
});

const api = new v1.MonitorsApi(configuration);

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

## Package Installation

Install the required packages:

```bash
# Core package
npm install @datadog/datadog-api-client

# Service-specific packages (install only the ones you need)
npm install @datadog/datadog-api-client-monitors
npm install @datadog/datadog-api-client-dashboards
# ... and so on for other services
```

## Available Service Packages

The following service packages are available:

- See [#Clients] section in the packages [README.md](./packages/datadog-api-client/README.md#clients)

## Support

If you encounter any issues during migration, please:
1. Check the [API documentation](https://docs.datadoghq.com/api/)
2. Open an issue in the [GitHub repository](https://github.com/DataDog/datadog-api-client-typescript)
3. Contact [Datadog Support](https://www.datadoghq.com/support/)
