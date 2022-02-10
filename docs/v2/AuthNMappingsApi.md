# datadog-api-client.v2.AuthNMappingsApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                           | HTTP request                                         | Description                  |
| ---------------------------------------------------------------- | ---------------------------------------------------- | ---------------------------- |
| [**createAuthNMapping**](AuthNMappingsApi.md#createAuthNMapping) | **POST** /api/v2/authn_mappings                      | Create an AuthN Mapping      |
| [**deleteAuthNMapping**](AuthNMappingsApi.md#deleteAuthNMapping) | **DELETE** /api/v2/authn_mappings/{authn_mapping_id} | Delete an AuthN Mapping      |
| [**getAuthNMapping**](AuthNMappingsApi.md#getAuthNMapping)       | **GET** /api/v2/authn_mappings/{authn_mapping_id}    | Get an AuthN Mapping by UUID |
| [**listAuthNMappings**](AuthNMappingsApi.md#listAuthNMappings)   | **GET** /api/v2/authn_mappings                       | List all AuthN Mappings      |
| [**updateAuthNMapping**](AuthNMappingsApi.md#updateAuthNMapping) | **PATCH** /api/v2/authn_mappings/{authn_mapping_id}  | Edit an AuthN Mapping        |

## **createAuthNMapping**

> AuthNMappingResponse createAuthNMapping(body)

Create an AuthN Mapping.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

let params: v2.AuthNMappingsApiCreateAuthNMappingRequest = {
  // AuthNMappingCreateRequest
  body: {
    data: {
      attributes: {
        attributeKey: "member-of",
        attributeValue: "Development",
      },
      relationships: {
        role: {
          data: {
            id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
            type: "roles",
          },
        },
      },
      type: "authn_mappings",
    },
  },
};

apiInstance
  .createAuthNMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                          | Description | Notes |
| -------- | ----------------------------- | ----------- | ----- |
| **body** | **AuthNMappingCreateRequest** |             |

### Return type

**AuthNMappingResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication Error | -                |
| **404**     | Not Found            | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteAuthNMapping**

> void deleteAuthNMapping()

Delete an AuthN Mapping specified by AuthN Mapping UUID.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

let params: v2.AuthNMappingsApiDeleteAuthNMappingRequest = {
  // string | The UUID of the AuthN Mapping.
  authnMappingId: "authn_mapping_id_example",
};

apiInstance
  .deleteAuthNMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name               | Type         | Description                    | Notes                 |
| ------------------ | ------------ | ------------------------------ | --------------------- |
| **authnMappingId** | [**string**] | The UUID of the AuthN Mapping. | defaults to undefined |

### Return type

**void**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **204**     | OK                   | -                |
| **403**     | Authentication Error | -                |
| **404**     | Not Found            | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getAuthNMapping**

> AuthNMappingResponse getAuthNMapping()

Get an AuthN Mapping specified by the AuthN Mapping UUID.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

let params: v2.AuthNMappingsApiGetAuthNMappingRequest = {
  // string | The UUID of the AuthN Mapping.
  authnMappingId: "authn_mapping_id_example",
};

apiInstance
  .getAuthNMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name               | Type         | Description                    | Notes                 |
| ------------------ | ------------ | ------------------------------ | --------------------- |
| **authnMappingId** | [**string**] | The UUID of the AuthN Mapping. | defaults to undefined |

### Return type

**AuthNMappingResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication Error | -                |
| **404**     | Not Found            | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listAuthNMappings**

> AuthNMappingsResponse listAuthNMappings()

List all AuthN Mappings in the org.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

let params: v2.AuthNMappingsApiListAuthNMappingsRequest = {
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // AuthNMappingsSort | Sort AuthN Mappings depending on the given field. (optional)
  sort: "created_at",
  // Array<string> (optional)
  include: ["include_example"],
  // string | Filter all mappings by the given string. (optional)
  filter: "filter_example",
};

apiInstance
  .listAuthNMappings(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type                    | Description                                       | Notes                            |
| -------------- | ----------------------- | ------------------------------------------------- | -------------------------------- |
| **pageSize**   | [**number**]            | Size for a given page.                            | (optional) defaults to 10        |
| **pageNumber** | [**number**]            | Specific page number to return.                   | (optional) defaults to 0         |
| **sort**       | **AuthNMappingsSort**   | Sort AuthN Mappings depending on the given field. | (optional) defaults to undefined |
| **include**    | **Array&lt;string&gt;** |                                                   | (optional) defaults to undefined |
| **filter**     | [**string**]            | Filter all mappings by the given string.          | (optional) defaults to undefined |

### Return type

**AuthNMappingsResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication Error | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateAuthNMapping**

> AuthNMappingResponse updateAuthNMapping(body)

Edit an AuthN Mapping.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

let params: v2.AuthNMappingsApiUpdateAuthNMappingRequest = {
  // string | The UUID of the AuthN Mapping.
  authnMappingId: "authn_mapping_id_example",
  // AuthNMappingUpdateRequest
  body: {
    data: {
      attributes: {
        attributeKey: "member-of",
        attributeValue: "Development",
      },
      id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
      relationships: {
        role: {
          data: {
            id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
            type: "roles",
          },
        },
      },
      type: "authn_mappings",
    },
  },
};

apiInstance
  .updateAuthNMapping(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name               | Type                          | Description                    | Notes                 |
| ------------------ | ----------------------------- | ------------------------------ | --------------------- |
| **body**           | **AuthNMappingUpdateRequest** |                                |
| **authnMappingId** | [**string**]                  | The UUID of the AuthN Mapping. | defaults to undefined |

### Return type

**AuthNMappingResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication Error | -                |
| **404**     | Not Found            | -                |
| **409**     | Conflict             | -                |
| **422**     | Unprocessable Entity | -                |
| **429**     | Too many requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
