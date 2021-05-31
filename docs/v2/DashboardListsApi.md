# datadog-api-client.v2.DashboardListsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createDashboardListItems**](DashboardListsApi.md#createDashboardListItems) | **POST** /api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards | Add Items to a Dashboard List
[**deleteDashboardListItems**](DashboardListsApi.md#deleteDashboardListItems) | **DELETE** /api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards | Delete items from a dashboard list
[**getDashboardListItems**](DashboardListsApi.md#getDashboardListItems) | **GET** /api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards | Get items of a Dashboard List
[**updateDashboardListItems**](DashboardListsApi.md#updateDashboardListItems) | **PUT** /api/v2/dashboard/lists/manual/{dashboard_list_id}/dashboards | Update items of a dashboard list


## **createDashboardListItems**
> DashboardListAddItemsResponse createDashboardListItems(body)

Add dashboards to an existing dashboard list.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

let params:v2.DashboardListsApiCreateDashboardListItemsRequest = {
  // number | ID of the dashboard list to add items to.
  dashboardListId: 1,
  // DashboardListAddItemsRequest | Dashboards to add to the dashboard list.
  body: {
    dashboards: [
      {
        id: "q5j-nti-fv6",
        type: "host_timeboard",
      },
    ],
  },
};

apiInstance.createDashboardListItems(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DashboardListAddItemsRequest**| Dashboards to add to the dashboard list. |
 **dashboardListId** | [**number**] | ID of the dashboard list to add items to. | defaults to undefined


### Return type

**DashboardListAddItemsResponse**

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

## **deleteDashboardListItems**
> DashboardListDeleteItemsResponse deleteDashboardListItems(body)

Delete dashboards from an existing dashboard list.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

let params:v2.DashboardListsApiDeleteDashboardListItemsRequest = {
  // number | ID of the dashboard list to delete items from.
  dashboardListId: 1,
  // DashboardListDeleteItemsRequest | Dashboards to delete from the dashboard list.
  body: {
    dashboards: [
      {
        id: "q5j-nti-fv6",
        type: "host_timeboard",
      },
    ],
  },
};

apiInstance.deleteDashboardListItems(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DashboardListDeleteItemsRequest**| Dashboards to delete from the dashboard list. |
 **dashboardListId** | [**number**] | ID of the dashboard list to delete items from. | defaults to undefined


### Return type

**DashboardListDeleteItemsResponse**

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

## **getDashboardListItems**
> DashboardListItems getDashboardListItems()

Fetch the dashboard list’s dashboard definitions.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

let params:v2.DashboardListsApiGetDashboardListItemsRequest = {
  // number | ID of the dashboard list to get items from.
  dashboardListId: 1,
};

apiInstance.getDashboardListItems(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dashboardListId** | [**number**] | ID of the dashboard list to get items from. | defaults to undefined


### Return type

**DashboardListItems**

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

## **updateDashboardListItems**
> DashboardListUpdateItemsResponse updateDashboardListItems(body)

Update dashboards of an existing dashboard list.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

let params:v2.DashboardListsApiUpdateDashboardListItemsRequest = {
  // number | ID of the dashboard list to update items from.
  dashboardListId: 1,
  // DashboardListUpdateItemsRequest | New dashboards of the dashboard list.
  body: {
    dashboards: [
      {
        id: "q5j-nti-fv6",
        type: "host_timeboard",
      },
    ],
  },
};

apiInstance.updateDashboardListItems(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **DashboardListUpdateItemsRequest**| New dashboards of the dashboard list. |
 **dashboardListId** | [**number**] | ID of the dashboard list to update items from. | defaults to undefined


### Return type

**DashboardListUpdateItemsResponse**

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

