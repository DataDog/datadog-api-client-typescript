# datadog-api-client.v1.KeyManagementApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                               | HTTP request                             | Description               |
| -------------------------------------------------------------------- | ---------------------------------------- | ------------------------- |
| [**createAPIKey**](KeyManagementApi.md#createAPIKey)                 | **POST** /api/v1/api_key                 | Create an API key         |
| [**createApplicationKey**](KeyManagementApi.md#createApplicationKey) | **POST** /api/v1/application_key         | Create an application key |
| [**deleteAPIKey**](KeyManagementApi.md#deleteAPIKey)                 | **DELETE** /api/v1/api_key/{key}         | Delete an API key         |
| [**deleteApplicationKey**](KeyManagementApi.md#deleteApplicationKey) | **DELETE** /api/v1/application_key/{key} | Delete an application key |
| [**getAPIKey**](KeyManagementApi.md#getAPIKey)                       | **GET** /api/v1/api_key/{key}            | Get API key               |
| [**getApplicationKey**](KeyManagementApi.md#getApplicationKey)       | **GET** /api/v1/application_key/{key}    | Get an application key    |
| [**listAPIKeys**](KeyManagementApi.md#listAPIKeys)                   | **GET** /api/v1/api_key                  | Get all API keys          |
| [**listApplicationKeys**](KeyManagementApi.md#listApplicationKeys)   | **GET** /api/v1/application_key          | Get all application keys  |
| [**updateAPIKey**](KeyManagementApi.md#updateAPIKey)                 | **PUT** /api/v1/api_key/{key}            | Edit an API key           |
| [**updateApplicationKey**](KeyManagementApi.md#updateApplicationKey) | **PUT** /api/v1/application_key/{key}    | Edit an application key   |

## **createAPIKey**

> ApiKeyResponse createAPIKey(body)

Creates an API key with a given name.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

let params: v1.KeyManagementApiCreateAPIKeyRequest = {
  // ApiKey
  body: {
    name: "example user",
  },
};

apiInstance
  .createAPIKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type       | Description | Notes |
| -------- | ---------- | ----------- | ----- |
| **body** | **ApiKey** |             |

### Return type

**ApiKeyResponse**

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
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createApplicationKey**

> ApplicationKeyResponse createApplicationKey(body)

Create an application key with a given name.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

let params: v1.KeyManagementApiCreateApplicationKeyRequest = {
  // ApplicationKey
  body: {
    name: "example user",
  },
};

apiInstance
  .createApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type               | Description | Notes |
| -------- | ------------------ | ----------- | ----- |
| **body** | **ApplicationKey** |             |

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
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **409**     | Conflict          | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteAPIKey**

> ApiKeyResponse deleteAPIKey()

Delete a given API key.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

let params: v1.KeyManagementApiDeleteAPIKeyRequest = {
  // string | The specific API key you are working with.
  key: "key_example",
};

apiInstance
  .deleteAPIKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name    | Type         | Description                                | Notes                 |
| ------- | ------------ | ------------------------------------------ | --------------------- |
| **key** | [**string**] | The specific API key you are working with. | defaults to undefined |

### Return type

**ApiKeyResponse**

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

## **deleteApplicationKey**

> ApplicationKeyResponse deleteApplicationKey()

Delete a given application key.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

let params: v1.KeyManagementApiDeleteApplicationKeyRequest = {
  // string | The specific APP key you are working with.
  key: "key_example",
};

apiInstance
  .deleteApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name    | Type         | Description                                | Notes                 |
| ------- | ------------ | ------------------------------------------ | --------------------- |
| **key** | [**string**] | The specific APP key you are working with. | defaults to undefined |

### Return type

**ApplicationKeyResponse**

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

## **getAPIKey**

> ApiKeyResponse getAPIKey()

Get a given API key.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

let params: v1.KeyManagementApiGetAPIKeyRequest = {
  // string | The specific API key you are working with.
  key: "key_example",
};

apiInstance
  .getAPIKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name    | Type         | Description                                | Notes                 |
| ------- | ------------ | ------------------------------------------ | --------------------- |
| **key** | [**string**] | The specific API key you are working with. | defaults to undefined |

### Return type

**ApiKeyResponse**

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

## **getApplicationKey**

> ApplicationKeyResponse getApplicationKey()

Get a given application key.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

let params: v1.KeyManagementApiGetApplicationKeyRequest = {
  // string | The specific APP key you are working with.
  key: "key_example",
};

apiInstance
  .getApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name    | Type         | Description                                | Notes                 |
| ------- | ------------ | ------------------------------------------ | --------------------- |
| **key** | [**string**] | The specific APP key you are working with. | defaults to undefined |

### Return type

**ApplicationKeyResponse**

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

## **listAPIKeys**

> ApiKeyListResponse listAPIKeys()

Get all API keys available for your account.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

apiInstance
  .listAPIKeys()
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

**ApiKeyListResponse**

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
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listApplicationKeys**

> ApplicationKeyListResponse listApplicationKeys()

Get all application keys available for your Datadog account.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

apiInstance
  .listApplicationKeys()
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

**ApplicationKeyListResponse**

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
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateAPIKey**

> ApiKeyResponse updateAPIKey(body)

Edit an API key name.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

let params: v1.KeyManagementApiUpdateAPIKeyRequest = {
  // string | The specific API key you are working with.
  key: "key_example",
  // ApiKey
  body: {
    name: "example user",
  },
};

apiInstance
  .updateAPIKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type         | Description                                | Notes                 |
| -------- | ------------ | ------------------------------------------ | --------------------- |
| **body** | **ApiKey**   |                                            |
| **key**  | [**string**] | The specific API key you are working with. | defaults to undefined |

### Return type

**ApiKeyResponse**

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

## **updateApplicationKey**

> ApplicationKeyResponse updateApplicationKey(body)

Edit an application key name.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

let params: v1.KeyManagementApiUpdateApplicationKeyRequest = {
  // string | The specific APP key you are working with.
  key: "key_example",
  // ApplicationKey
  body: {
    name: "example user",
  },
};

apiInstance
  .updateApplicationKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type               | Description                                | Notes                 |
| -------- | ------------------ | ------------------------------------------ | --------------------- |
| **body** | **ApplicationKey** |                                            |
| **key**  | [**string**]       | The specific APP key you are working with. | defaults to undefined |

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
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **409**     | Conflict          | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
