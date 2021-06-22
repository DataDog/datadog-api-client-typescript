# datadog-api-client.v1.LogsIndexesApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogsIndex**](LogsIndexesApi.md#createLogsIndex) | **POST** /api/v1/logs/config/indexes | Create an index
[**getLogsIndex**](LogsIndexesApi.md#getLogsIndex) | **GET** /api/v1/logs/config/indexes/{name} | Get an index
[**getLogsIndexOrder**](LogsIndexesApi.md#getLogsIndexOrder) | **GET** /api/v1/logs/config/index-order | Get indexes order
[**listLogIndexes**](LogsIndexesApi.md#listLogIndexes) | **GET** /api/v1/logs/config/indexes | Get all indexes
[**updateLogsIndex**](LogsIndexesApi.md#updateLogsIndex) | **PUT** /api/v1/logs/config/indexes/{name} | Update an index
[**updateLogsIndexOrder**](LogsIndexesApi.md#updateLogsIndexOrder) | **PUT** /api/v1/logs/config/index-order | Update indexes order


## **createLogsIndex**
> LogsIndex createLogsIndex(body)

Creates a new index. Returns the Index object passed in the request body when the request is successful.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

let params:v1.LogsIndexesApiCreateLogsIndexRequest = {
  // LogsIndex | Object containing the new index.
  body: {
    dailyLimit: 300000000,
    exclusionFilters: [
      {
        filter: {
          query: "*",
          sampleRate: 1,
        },
        isEnabled: true,
        name: "payment",
      },
    ],
    filter: {
      query: "source:python",
    },
    name: "main",
    numRetentionDays: 15,
  },
};

apiInstance.createLogsIndex(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsIndex**| Object containing the new index. |


### Return type

**LogsIndex**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid Parameter Error |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getLogsIndex**
> LogsIndex getLogsIndex()

Get one log index from your organization. This endpoint takes no JSON arguments.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

let params:v1.LogsIndexesApiGetLogsIndexRequest = {
  // string | Name of the log index.
  name: "name_example",
};

apiInstance.getLogsIndex(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | [**string**] | Name of the log index. | defaults to undefined


### Return type

**LogsIndex**

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

## **getLogsIndexOrder**
> LogsIndexesOrder getLogsIndexOrder()

Get the current order of your log indexes. This endpoint takes no JSON arguments.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);


apiInstance.getLogsIndexOrder().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LogsIndexesOrder**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listLogIndexes**
> LogsIndexListResponse listLogIndexes()

The Index object describes the configuration of a log index.
This endpoint returns an array of the `LogIndex` objects of your organization.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);


apiInstance.listLogIndexes().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LogsIndexListResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateLogsIndex**
> LogsIndex updateLogsIndex(body)

Update an index as identified by its name.
Returns the Index object passed in the request body when the request is successful.

Using the `PUT` method updates your index’s configuration by **replacing**
your current configuration with the new one sent to your Datadog organization.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

let params:v1.LogsIndexesApiUpdateLogsIndexRequest = {
  // string | Name of the log index.
  name: "name_example",
  // LogsIndexUpdateRequest | Object containing the new `LogsIndexUpdateRequest`.
  body: {
    dailyLimit: 1,
    disableDailyLimit: true,
    exclusionFilters: [
      {
        filter: {
          query: "*",
          sampleRate: 1,
        },
        isEnabled: true,
        name: "payment",
      },
    ],
    filter: {
      query: "source:python",
    },
    numRetentionDays: 1,
  },
};

apiInstance.updateLogsIndex(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsIndexUpdateRequest**| Object containing the new &#x60;LogsIndexUpdateRequest&#x60;. |
 **name** | [**string**] | Name of the log index. | defaults to undefined


### Return type

**LogsIndex**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid Parameter Error |  -  |
**403** | Forbidden |  -  |
**429** | Too Many Requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateLogsIndexOrder**
> LogsIndexesOrder updateLogsIndexOrder(body)

This endpoint updates the index order of your organization.
It returns the index order object passed in the request body when the request is successful.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

let params:v1.LogsIndexesApiUpdateLogsIndexOrderRequest = {
  // LogsIndexesOrder | Object containing the new ordered list of index names
  body: {
    indexNames: ["main","payments","web"],
  },
};

apiInstance.updateLogsIndexOrder(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsIndexesOrder**| Object containing the new ordered list of index names |


### Return type

**LogsIndexesOrder**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

