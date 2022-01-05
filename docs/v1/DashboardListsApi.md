# datadog-api-client.v1.DashboardListsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDashboardList**](DashboardListsApi.md#createDashboardList) | **POST** /api/v1/dashboard/lists/manual | Create a dashboard list
[**deleteDashboardList**](DashboardListsApi.md#deleteDashboardList) | **DELETE** /api/v1/dashboard/lists/manual/{list_id} | Delete a dashboard list
[**getDashboardList**](DashboardListsApi.md#getDashboardList) | **GET** /api/v1/dashboard/lists/manual/{list_id} | Get a dashboard list
[**listDashboardLists**](DashboardListsApi.md#listDashboardLists) | **GET** /api/v1/dashboard/lists/manual | Get all dashboard lists
[**updateDashboardList**](DashboardListsApi.md#updateDashboardList) | **PUT** /api/v1/dashboard/lists/manual/{list_id} | Update a dashboard list


## **createDashboardList**
> DashboardList createDashboardList(body)

Create an empty dashboard list.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

let params:v1.DashboardListsApiCreateDashboardListRequest = {
  // DashboardList | Create a dashboard list request body.
  body: {
    name: "My Dashboard",
  },
};

apiInstance.createDashboardList(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DashboardList**| Create a dashboard list request body. |


### Return type

**DashboardList**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteDashboardList**
> DashboardListDeleteResponse deleteDashboardList()

Delete a dashboard list.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

let params:v1.DashboardListsApiDeleteDashboardListRequest = {
  // number | ID of the dashboard list to delete.
  listId: 1,
};

apiInstance.deleteDashboardList(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | ID of the dashboard list to delete. | defaults to undefined


### Return type

**DashboardListDeleteResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getDashboardList**
> DashboardList getDashboardList()

Fetch an existing dashboard list's definition.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

let params:v1.DashboardListsApiGetDashboardListRequest = {
  // number | ID of the dashboard list to fetch.
  listId: 1,
};

apiInstance.getDashboardList(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | [**number**] | ID of the dashboard list to fetch. | defaults to undefined


### Return type

**DashboardList**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listDashboardLists**
> DashboardListListResponse listDashboardLists()

Fetch all of your existing dashboard list definitions.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);


apiInstance.listDashboardLists().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**DashboardListListResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateDashboardList**
> DashboardList updateDashboardList(body)

Update the name of a dashboard list.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

let params:v1.DashboardListsApiUpdateDashboardListRequest = {
  // number | ID of the dashboard list to update.
  listId: 1,
  // DashboardList | Update a dashboard list request body.
  body: {
    name: "My Dashboard",
  },
};

apiInstance.updateDashboardList(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DashboardList**| Update a dashboard list request body. |
 **listId** | [**number**] | ID of the dashboard list to update. | defaults to undefined


### Return type

**DashboardList**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

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
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

