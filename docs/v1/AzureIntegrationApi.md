# datadog-api-client.v1.AzureIntegrationApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                                      | HTTP request                                    | Description                           |
| --------------------------------------------------------------------------- | ----------------------------------------------- | ------------------------------------- |
| [**createAzureIntegration**](AzureIntegrationApi.md#createAzureIntegration) | **POST** /api/v1/integration/azure              | Create an Azure integration           |
| [**deleteAzureIntegration**](AzureIntegrationApi.md#deleteAzureIntegration) | **DELETE** /api/v1/integration/azure            | Delete an Azure integration           |
| [**listAzureIntegration**](AzureIntegrationApi.md#listAzureIntegration)     | **GET** /api/v1/integration/azure               | List all Azure integrations           |
| [**updateAzureHostFilters**](AzureIntegrationApi.md#updateAzureHostFilters) | **POST** /api/v1/integration/azure/host_filters | Update Azure integration host filters |
| [**updateAzureIntegration**](AzureIntegrationApi.md#updateAzureIntegration) | **PUT** /api/v1/integration/azure               | Update an Azure integration           |

## **createAzureIntegration**

> any createAzureIntegration(body)

Create a Datadog-Azure integration.

Using the `POST` method updates your integration configuration by adding your new
configuration to the existing one in your Datadog organization.

Using the `PUT` method updates your integration configuration by replacing your
current configuration with the new one sent to your Datadog organization.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AzureIntegrationApi(configuration);

let params: v1.AzureIntegrationApiCreateAzureIntegrationRequest = {
  // AzureAccount | Create a Datadog-Azure integration for your Datadog account request body.
  body: {
    automute: true,
    clientId: "testc7f6-1234-5678-9101-3fcbf464test",
    clientSecret: "testingx./Sw*g/Y33t..R1cH+hScMDt",
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    newClientId: "new1c7f6-1234-5678-9101-3fcbf464test",
    newTenantName: "new1c44-1234-5678-9101-cc00736ftest",
    tenantName: "testc44-1234-5678-9101-cc00736ftest",
  },
};

apiInstance
  .createAzureIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type             | Description                                                               | Notes |
| -------- | ---------------- | ------------------------------------------------------------------------- | ----- |
| **body** | **AzureAccount** | Create a Datadog-Azure integration for your Datadog account request body. |

### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteAzureIntegration**

> any deleteAzureIntegration(body)

Delete a given Datadog-Azure integration from your Datadog account.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AzureIntegrationApi(configuration);

let params: v1.AzureIntegrationApiDeleteAzureIntegrationRequest = {
  // AzureAccount | Delete a given Datadog-Azure integration request body.
  body: {
    automute: true,
    clientId: "testc7f6-1234-5678-9101-3fcbf464test",
    clientSecret: "testingx./Sw*g/Y33t..R1cH+hScMDt",
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    newClientId: "new1c7f6-1234-5678-9101-3fcbf464test",
    newTenantName: "new1c44-1234-5678-9101-cc00736ftest",
    tenantName: "testc44-1234-5678-9101-cc00736ftest",
  },
};

apiInstance
  .deleteAzureIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type             | Description                                            | Notes |
| -------- | ---------------- | ------------------------------------------------------ | ----- |
| **body** | **AzureAccount** | Delete a given Datadog-Azure integration request body. |

### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listAzureIntegration**

> Array<AzureAccount> listAzureIntegration()

List all Datadog-Azure integrations configured in your Datadog account.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AzureIntegrationApi(configuration);

apiInstance
  .listAzureIntegration()
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**Array<AzureAccount>**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateAzureHostFilters**

> any updateAzureHostFilters(body)

Update the defined list of host filters for a given Datadog-Azure integration.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AzureIntegrationApi(configuration);

let params: v1.AzureIntegrationApiUpdateAzureHostFiltersRequest = {
  // AzureAccount | Update a Datadog-Azure integration's host filters request body.
  body: {
    automute: true,
    clientId: "testc7f6-1234-5678-9101-3fcbf464test",
    clientSecret: "testingx./Sw*g/Y33t..R1cH+hScMDt",
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    newClientId: "new1c7f6-1234-5678-9101-3fcbf464test",
    newTenantName: "new1c44-1234-5678-9101-cc00736ftest",
    tenantName: "testc44-1234-5678-9101-cc00736ftest",
  },
};

apiInstance
  .updateAzureHostFilters(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type             | Description                                                         | Notes |
| -------- | ---------------- | ------------------------------------------------------------------- | ----- |
| **body** | **AzureAccount** | Update a Datadog-Azure integration&#39;s host filters request body. |

### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateAzureIntegration**

> any updateAzureIntegration(body)

Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`.
Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`,
use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.AzureIntegrationApi(configuration);

let params: v1.AzureIntegrationApiUpdateAzureIntegrationRequest = {
  // AzureAccount | Update a Datadog-Azure integration request body.
  body: {
    automute: true,
    clientId: "testc7f6-1234-5678-9101-3fcbf464test",
    clientSecret: "testingx./Sw*g/Y33t..R1cH+hScMDt",
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    newClientId: "new1c7f6-1234-5678-9101-3fcbf464test",
    newTenantName: "new1c44-1234-5678-9101-cc00736ftest",
    tenantName: "testc44-1234-5678-9101-cc00736ftest",
  },
};

apiInstance
  .updateAzureIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type             | Description                                      | Notes |
| -------- | ---------------- | ------------------------------------------------ | ----- |
| **body** | **AzureAccount** | Update a Datadog-Azure integration request body. |

### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication Error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
