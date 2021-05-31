# datadog-api-client.v1.DowntimesApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelDowntime**](DowntimesApi.md#cancelDowntime) | **DELETE** /api/v1/downtime/{downtime_id} | Cancel a downtime
[**cancelDowntimesByScope**](DowntimesApi.md#cancelDowntimesByScope) | **POST** /api/v1/downtime/cancel/by_scope | Cancel downtimes by scope
[**createDowntime**](DowntimesApi.md#createDowntime) | **POST** /api/v1/downtime | Schedule a downtime
[**getDowntime**](DowntimesApi.md#getDowntime) | **GET** /api/v1/downtime/{downtime_id} | Get a downtime
[**listDowntimes**](DowntimesApi.md#listDowntimes) | **GET** /api/v1/downtime | Get all downtimes
[**listMonitorDowntimes**](DowntimesApi.md#listMonitorDowntimes) | **GET** /api/v1/monitor/{monitor_id}/downtimes | Get all downtimes for a monitor
[**updateDowntime**](DowntimesApi.md#updateDowntime) | **PUT** /api/v1/downtime/{downtime_id} | Update a downtime


## **cancelDowntime**
> void cancelDowntime()

Cancel a downtime.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiCancelDowntimeRequest = {
  // number | ID of the downtime to cancel.
  downtimeId: 123456,
};

apiInstance.cancelDowntime(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downtimeId** | [**number**] | ID of the downtime to cancel. | defaults to undefined


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
**204** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Downtime not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **cancelDowntimesByScope**
> CanceledDowntimesIds cancelDowntimesByScope(body)

Delete all downtimes that match the scope of `X`.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiCancelDowntimesByScopeRequest = {
  // CancelDowntimesByScopeRequest | Scope to cancel downtimes for.
  body: {
    scope: "host:myserver",
  },
};

apiInstance.cancelDowntimesByScope(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **CancelDowntimesByScopeRequest**| Scope to cancel downtimes for. |


### Return type

**CanceledDowntimesIds**

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
**404** | Downtimes not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createDowntime**
> Downtime createDowntime(body)

Schedule a downtime.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiCreateDowntimeRequest = {
  // Downtime | Schedule a downtime request body.
  body: {
    disabled: false,
    end: 1412793983,
    message: "Message on the downtime",
    monitorId: 123456,
    monitorTags: ["*"],
    parentId: 123,
    recurrence: {
      period: 1,
      rrule: "FREQ=MONTHLY;BYSETPOS=3;BYDAY=WE;INTERVAL=1",
      type: "weeks",
      untilDate: 1447786293,
      untilOccurrences: 2,
      weekDays: ["Mon","Tue"],
    },
    scope: ["env:staging"],
    start: 1412792983,
    timezone: "America/New_York",
  },
};

apiInstance.createDowntime(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Downtime**| Schedule a downtime request body. |


### Return type

**Downtime**

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

## **getDowntime**
> Downtime getDowntime()

Get downtime detail by `downtime_id`.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiGetDowntimeRequest = {
  // number | ID of the downtime to fetch.
  downtimeId: 123456,
};

apiInstance.getDowntime(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **downtimeId** | [**number**] | ID of the downtime to fetch. | defaults to undefined


### Return type

**Downtime**

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
**404** | Downtime not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listDowntimes**
> Array<Downtime> listDowntimes()

Get all scheduled downtimes.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiListDowntimesRequest = {
  // boolean | Only return downtimes that are active when the request is made. (optional)
  currentOnly: true,
};

apiInstance.listDowntimes(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currentOnly** | [**boolean**] | Only return downtimes that are active when the request is made. | (optional) defaults to undefined


### Return type

**Array<Downtime>**

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

## **listMonitorDowntimes**
> Array<Downtime> listMonitorDowntimes()

Get all downtimes for the specified monitor

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiListMonitorDowntimesRequest = {
  // number | The id of the monitor
  monitorId: 1,
};

apiInstance.listMonitorDowntimes(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitorId** | [**number**] | The id of the monitor | defaults to undefined


### Return type

**Array<Downtime>**

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
**404** | Monitor Not Found error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateDowntime**
> Downtime updateDowntime(body)

Update a single downtime by `downtime_id`.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiUpdateDowntimeRequest = {
  // number | ID of the downtime to update.
  downtimeId: 123456,
  // Downtime | Update a downtime request body.
  body: {
    disabled: false,
    end: 1412793983,
    message: "Message on the downtime",
    monitorId: 123456,
    monitorTags: ["*"],
    parentId: 123,
    recurrence: {
      period: 1,
      rrule: "FREQ=MONTHLY;BYSETPOS=3;BYDAY=WE;INTERVAL=1",
      type: "weeks",
      untilDate: 1447786293,
      untilOccurrences: 2,
      weekDays: ["Mon","Tue"],
    },
    scope: ["env:staging"],
    start: 1412792983,
    timezone: "America/New_York",
  },
};

apiInstance.updateDowntime(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Downtime**| Update a downtime request body. |
 **downtimeId** | [**number**] | ID of the downtime to update. | defaults to undefined


### Return type

**Downtime**

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
**404** | Downtime not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

