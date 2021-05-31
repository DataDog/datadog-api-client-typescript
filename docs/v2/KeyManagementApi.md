# datadog-api-client.v2.KeyManagementApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAPIKey**](KeyManagementApi.md#createAPIKey) | **POST** /api/v2/api_keys | Create an API key
[**createCurrentUserApplicationKey**](KeyManagementApi.md#createCurrentUserApplicationKey) | **POST** /api/v2/current_user/application_keys | Create an application key for current user
[**deleteAPIKey**](KeyManagementApi.md#deleteAPIKey) | **DELETE** /api/v2/api_keys/{api_key_id} | Delete an API key
[**deleteApplicationKey**](KeyManagementApi.md#deleteApplicationKey) | **DELETE** /api/v2/application_keys/{app_key_id} | Delete an application key
[**deleteCurrentUserApplicationKey**](KeyManagementApi.md#deleteCurrentUserApplicationKey) | **DELETE** /api/v2/current_user/application_keys/{app_key_id} | Delete an application key owned by current user
[**getAPIKey**](KeyManagementApi.md#getAPIKey) | **GET** /api/v2/api_keys/{api_key_id} | Get API key
[**getCurrentUserApplicationKey**](KeyManagementApi.md#getCurrentUserApplicationKey) | **GET** /api/v2/current_user/application_keys/{app_key_id} | Get one application key owned by current user
[**listAPIKeys**](KeyManagementApi.md#listAPIKeys) | **GET** /api/v2/api_keys | Get all API keys
[**listApplicationKeys**](KeyManagementApi.md#listApplicationKeys) | **GET** /api/v2/application_keys | Get all application keys
[**listCurrentUserApplicationKeys**](KeyManagementApi.md#listCurrentUserApplicationKeys) | **GET** /api/v2/current_user/application_keys | Get all application keys owned by current user
[**updateAPIKey**](KeyManagementApi.md#updateAPIKey) | **PATCH** /api/v2/api_keys/{api_key_id} | Edit an API key
[**updateApplicationKey**](KeyManagementApi.md#updateApplicationKey) | **PATCH** /api/v2/application_keys/{app_key_id} | Edit an application key
[**updateCurrentUserApplicationKey**](KeyManagementApi.md#updateCurrentUserApplicationKey) | **PATCH** /api/v2/current_user/application_keys/{app_key_id} | Edit an application key owned by current user


## **createAPIKey**
> APIKeyResponse createAPIKey(body)

Create an API key.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiCreateAPIKeyRequest = {
  // APIKeyCreateRequest
  body: {
    data: {
      attributes: {
        name: "API Key for submitting metrics",
      },
      type: "api_keys",
    },
  },
};

apiInstance.createAPIKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **APIKeyCreateRequest**|  |


### Return type

**APIKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createCurrentUserApplicationKey**
> ApplicationKeyResponse createCurrentUserApplicationKey(body)

Create an application key for current user

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiCreateCurrentUserApplicationKeyRequest = {
  // ApplicationKeyCreateRequest
  body: {
    data: {
      attributes: {
        name: "Application Key for submitting metrics",
      },
      type: "application_keys",
    },
  },
};

apiInstance.createCurrentUserApplicationKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ApplicationKeyCreateRequest**|  |


### Return type

**ApplicationKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteAPIKey**
> void deleteAPIKey()

Delete an API key.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiDeleteAPIKeyRequest = {
  // string | The ID of the API key.
  apiKeyId: "api_key_id_example",
};

apiInstance.deleteAPIKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKeyId** | [**string**] | The ID of the API key. | defaults to undefined


### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteApplicationKey**
> void deleteApplicationKey()

Delete an application key

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiDeleteApplicationKeyRequest = {
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
};

apiInstance.deleteApplicationKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appKeyId** | [**string**] | The ID of the application key. | defaults to undefined


### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteCurrentUserApplicationKey**
> void deleteCurrentUserApplicationKey()

Delete an application key owned by current user

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiDeleteCurrentUserApplicationKeyRequest = {
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
};

apiInstance.deleteCurrentUserApplicationKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appKeyId** | [**string**] | The ID of the application key. | defaults to undefined


### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getAPIKey**
> APIKeyResponse getAPIKey()

Get an API key.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiGetAPIKeyRequest = {
  // string | The ID of the API key.
  apiKeyId: "api_key_id_example",
  // string | Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`. (optional)
  include: "created_by,modified_by",
};

apiInstance.getAPIKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiKeyId** | [**string**] | The ID of the API key. | defaults to undefined
 **include** | [**string**] | Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;. | (optional) defaults to undefined


### Return type

**APIKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getCurrentUserApplicationKey**
> ApplicationKeyResponse getCurrentUserApplicationKey()

Get an application key owned by current user

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiGetCurrentUserApplicationKeyRequest = {
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
};

apiInstance.getCurrentUserApplicationKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appKeyId** | [**string**] | The ID of the application key. | defaults to undefined


### Return type

**ApplicationKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listAPIKeys**
> APIKeysResponse listAPIKeys()

List all API keys available for your account.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiListAPIKeysRequest = {
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // APIKeysSort | API key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign. (optional)
  sort: "name",
  // string | Filter API keys by the specified string. (optional)
  filter: "filter_example",
  // string | Only include API keys created on or after the specified date. (optional)
  filterCreatedAtStart: "2020-11-24T18:46:21+00:00",
  // string | Only include API keys created on or before the specified date. (optional)
  filterCreatedAtEnd: "2020-11-24T18:46:21+00:00",
  // string | Only include API keys modified on or after the specified date. (optional)
  filterModifiedAtStart: "2020-11-24T18:46:21+00:00",
  // string | Only include API keys modified on or before the specified date. (optional)
  filterModifiedAtEnd: "2020-11-24T18:46:21+00:00",
  // string | Comma separated list of resource paths for related resources to include in the response. Supported resource paths are `created_by` and `modified_by`. (optional)
  include: "created_by,modified_by",
};

apiInstance.listAPIKeys(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | Size for a given page. | (optional) defaults to 10
 **pageNumber** | [**number**] | Specific page number to return. | (optional) defaults to 0
 **sort** | **APIKeysSort** | API key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign. | (optional) defaults to undefined
 **filter** | [**string**] | Filter API keys by the specified string. | (optional) defaults to undefined
 **filterCreatedAtStart** | [**string**] | Only include API keys created on or after the specified date. | (optional) defaults to undefined
 **filterCreatedAtEnd** | [**string**] | Only include API keys created on or before the specified date. | (optional) defaults to undefined
 **filterModifiedAtStart** | [**string**] | Only include API keys modified on or after the specified date. | (optional) defaults to undefined
 **filterModifiedAtEnd** | [**string**] | Only include API keys modified on or before the specified date. | (optional) defaults to undefined
 **include** | [**string**] | Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;. | (optional) defaults to undefined


### Return type

**APIKeysResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listApplicationKeys**
> ListApplicationKeysResponse listApplicationKeys()

List all application keys available for your org

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiListApplicationKeysRequest = {
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

apiInstance.listApplicationKeys(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | Size for a given page. | (optional) defaults to 10
 **pageNumber** | [**number**] | Specific page number to return. | (optional) defaults to 0
 **sort** | **ApplicationKeysSort** | Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign. | (optional) defaults to undefined
 **filter** | [**string**] | Filter application keys by the specified string. | (optional) defaults to undefined
 **filterCreatedAtStart** | [**string**] | Only include application keys created on or after the specified date. | (optional) defaults to undefined
 **filterCreatedAtEnd** | [**string**] | Only include application keys created on or before the specified date. | (optional) defaults to undefined


### Return type

**ListApplicationKeysResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listCurrentUserApplicationKeys**
> ListApplicationKeysResponse listCurrentUserApplicationKeys()

List all application keys available for current user

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiListCurrentUserApplicationKeysRequest = {
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

apiInstance.listCurrentUserApplicationKeys(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | Size for a given page. | (optional) defaults to 10
 **pageNumber** | [**number**] | Specific page number to return. | (optional) defaults to 0
 **sort** | **ApplicationKeysSort** | Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign. | (optional) defaults to undefined
 **filter** | [**string**] | Filter application keys by the specified string. | (optional) defaults to undefined
 **filterCreatedAtStart** | [**string**] | Only include application keys created on or after the specified date. | (optional) defaults to undefined
 **filterCreatedAtEnd** | [**string**] | Only include application keys created on or before the specified date. | (optional) defaults to undefined


### Return type

**ListApplicationKeysResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateAPIKey**
> APIKeyResponse updateAPIKey(body)

Update an API key.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiUpdateAPIKeyRequest = {
  // string | The ID of the API key.
  apiKeyId: "api_key_id_example",
  // APIKeyUpdateRequest
  body: {
    data: {
      attributes: {
        name: "API Key for submitting metrics",
      },
      id: "00112233-4455-6677-8899-aabbccddeeff",
      type: "api_keys",
    },
  },
};

apiInstance.updateAPIKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **APIKeyUpdateRequest**|  |
 **apiKeyId** | [**string**] | The ID of the API key. | defaults to undefined


### Return type

**APIKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateApplicationKey**
> ApplicationKeyResponse updateApplicationKey(body)

Edit an application key

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiUpdateApplicationKeyRequest = {
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
  // ApplicationKeyUpdateRequest
  body: {
    data: {
      attributes: {
        name: "Application Key for submitting metrics",
      },
      id: "00112233-4455-6677-8899-aabbccddeeff",
      type: "application_keys",
    },
  },
};

apiInstance.updateApplicationKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ApplicationKeyUpdateRequest**|  |
 **appKeyId** | [**string**] | The ID of the application key. | defaults to undefined


### Return type

**ApplicationKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateCurrentUserApplicationKey**
> ApplicationKeyResponse updateCurrentUserApplicationKey(body)

Edit an application key owned by current user

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiUpdateCurrentUserApplicationKeyRequest = {
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
  // ApplicationKeyUpdateRequest
  body: {
    data: {
      attributes: {
        name: "Application Key for submitting metrics",
      },
      id: "00112233-4455-6677-8899-aabbccddeeff",
      type: "application_keys",
    },
  },
};

apiInstance.updateCurrentUserApplicationKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **ApplicationKeyUpdateRequest**|  |
 **appKeyId** | [**string**] | The ID of the application key. | defaults to undefined


### Return type

**ApplicationKeyResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

