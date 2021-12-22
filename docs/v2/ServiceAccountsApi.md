# datadog-api-client.v2.ServiceAccountsApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                                                             | HTTP request                                                                           | Description                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [**createServiceAccountApplicationKey**](ServiceAccountsApi.md#createServiceAccountApplicationKey) | **POST** /api/v2/service_accounts/{service_account_id}/application_keys                | Create an application key for this service account |
| [**deleteServiceAccountApplicationKey**](ServiceAccountsApi.md#deleteServiceAccountApplicationKey) | **DELETE** /api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id} | Delete an application key for this service account |
| [**getServiceAccountApplicationKey**](ServiceAccountsApi.md#getServiceAccountApplicationKey)       | **GET** /api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}    | Get one application key for this service account   |
| [**listServiceAccountApplicationKeys**](ServiceAccountsApi.md#listServiceAccountApplicationKeys)   | **GET** /api/v2/service_accounts/{service_account_id}/application_keys                 | List application keys for this service account     |
| [**updateServiceAccountApplicationKey**](ServiceAccountsApi.md#updateServiceAccountApplicationKey) | **PATCH** /api/v2/service_accounts/{service_account_id}/application_keys/{app_key_id}  | Edit an application key for this service account   |

## **createServiceAccountApplicationKey**

> ApplicationKeyResponse createServiceAccountApplicationKey(body)

Create an application key for this service account.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

let params: v2.ServiceAccountsApiCreateServiceAccountApplicationKeyRequest = {
  // string | The ID of the service account.
  serviceAccountId: "00000000-0000-0000-0000-000000000000",
  // ApplicationKeyCreateRequest
  body: {
    data: {
      attributes: {
        name: "Application Key for managing dashboards",
        scopes: [
          "dashboards_read",
          "dashboards_write",
          "dashboards_public_share",
        ],
      },
      type: "application_keys",
    },
  },
};

apiInstance
  .createServiceAccountApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                 | Type                            | Description                    | Notes                 |
| -------------------- | ------------------------------- | ------------------------------ | --------------------- |
| **body**             | **ApplicationKeyCreateRequest** |                                |
| **serviceAccountId** | [**string**]                    | The ID of the service account. | defaults to undefined |

### Return type

**ApplicationKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **201**     | Created           | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteServiceAccountApplicationKey**

> void deleteServiceAccountApplicationKey()

Delete an application key owned by this service account.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

let params: v2.ServiceAccountsApiDeleteServiceAccountApplicationKeyRequest = {
  // string | The ID of the service account.
  serviceAccountId: "00000000-0000-0000-0000-000000000000",
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
};

apiInstance
  .deleteServiceAccountApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                 | Type         | Description                    | Notes                 |
| -------------------- | ------------ | ------------------------------ | --------------------- |
| **serviceAccountId** | [**string**] | The ID of the service account. | defaults to undefined |
| **appKeyId**         | [**string**] | The ID of the application key. | defaults to undefined |

### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **204**     | No Content        | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getServiceAccountApplicationKey**

> PartialApplicationKeyResponse getServiceAccountApplicationKey()

Get an application key owned by this service account.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

let params: v2.ServiceAccountsApiGetServiceAccountApplicationKeyRequest = {
  // string | The ID of the service account.
  serviceAccountId: "00000000-0000-0000-0000-000000000000",
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
};

apiInstance
  .getServiceAccountApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                 | Type         | Description                    | Notes                 |
| -------------------- | ------------ | ------------------------------ | --------------------- |
| **serviceAccountId** | [**string**] | The ID of the service account. | defaults to undefined |
| **appKeyId**         | [**string**] | The ID of the application key. | defaults to undefined |

### Return type

**PartialApplicationKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listServiceAccountApplicationKeys**

> ListApplicationKeysResponse listServiceAccountApplicationKeys()

List all application keys available for this service account.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

let params: v2.ServiceAccountsApiListServiceAccountApplicationKeysRequest = {
  // string | The ID of the service account.
  serviceAccountId: "00000000-0000-0000-0000-000000000000",
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // ApplicationKeysSort | Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign. (optional)
  sort: "name",
  // string | Filter application keys by the specified string. (optional)
  filter: "filter_example",
  // string | Only include application keys created on or after the specified date. (optional)
  filterCreatedAtStart: "2020-11-24T18:46:21+00:00",
  // string | Only include application keys created on or before the specified date. (optional)
  filterCreatedAtEnd: "2020-11-24T18:46:21+00:00",
};

apiInstance
  .listServiceAccountApplicationKeys(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                     | Type                    | Description                                                                                                                                                        | Notes                            |
| ------------------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| **serviceAccountId**     | [**string**]            | The ID of the service account.                                                                                                                                     | defaults to undefined            |
| **pageSize**             | [**number**]            | Size for a given page.                                                                                                                                             | (optional) defaults to 10        |
| **pageNumber**           | [**number**]            | Specific page number to return.                                                                                                                                    | (optional) defaults to 0         |
| **sort**                 | **ApplicationKeysSort** | Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign. | (optional) defaults to undefined |
| **filter**               | [**string**]            | Filter application keys by the specified string.                                                                                                                   | (optional) defaults to undefined |
| **filterCreatedAtStart** | [**string**]            | Only include application keys created on or after the specified date.                                                                                              | (optional) defaults to undefined |
| **filterCreatedAtEnd**   | [**string**]            | Only include application keys created on or before the specified date.                                                                                             | (optional) defaults to undefined |

### Return type

**ListApplicationKeysResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateServiceAccountApplicationKey**

> PartialApplicationKeyResponse updateServiceAccountApplicationKey(body)

Edit an application key owned by this service account.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

let params: v2.ServiceAccountsApiUpdateServiceAccountApplicationKeyRequest = {
  // string | The ID of the service account.
  serviceAccountId: "00000000-0000-0000-0000-000000000000",
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
  // ApplicationKeyUpdateRequest
  body: {
    data: {
      attributes: {
        name: "Application Key for managing dashboards",
        scopes: [
          "dashboards_read",
          "dashboards_write",
          "dashboards_public_share",
        ],
      },
      id: "00112233-4455-6677-8899-aabbccddeeff",
      type: "application_keys",
    },
  },
};

apiInstance
  .updateServiceAccountApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                 | Type                            | Description                    | Notes                 |
| -------------------- | ------------------------------- | ------------------------------ | --------------------- |
| **body**             | **ApplicationKeyUpdateRequest** |                                |
| **serviceAccountId** | [**string**]                    | The ID of the service account. | defaults to undefined |
| **appKeyId**         | [**string**]                    | The ID of the application key. | defaults to undefined |

### Return type

**PartialApplicationKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
