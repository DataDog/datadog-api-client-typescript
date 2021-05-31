# datadog-api-client.v2.IncidentServicesApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIncidentService**](IncidentServicesApi.md#createIncidentService) | **POST** /api/v2/services | Create a new incident service
[**deleteIncidentService**](IncidentServicesApi.md#deleteIncidentService) | **DELETE** /api/v2/services/{service_id} | Delete an existing incident service
[**getIncidentService**](IncidentServicesApi.md#getIncidentService) | **GET** /api/v2/services/{service_id} | Get details of an incident service
[**listIncidentServices**](IncidentServicesApi.md#listIncidentServices) | **GET** /api/v2/services | Get a list of all incident services
[**updateIncidentService**](IncidentServicesApi.md#updateIncidentService) | **PATCH** /api/v2/services/{service_id} | Update an existing incident service


## **createIncidentService**
> IncidentServiceResponse createIncidentService(body)

Creates a new incident service.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params:v2.IncidentServicesApiCreateIncidentServiceRequest = {
  // IncidentServiceCreateRequest | Incident Service Payload.
  body: {
    data: {
      attributes: {
        name: "an example service name",
      },
      type: "services",
    },
  },
};

apiInstance.createIncidentService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IncidentServiceCreateRequest**| Incident Service Payload. |


### Return type

**IncidentServiceResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | CREATED |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteIncidentService**
> void deleteIncidentService()

Deletes an existing incident service.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params:v2.IncidentServicesApiDeleteIncidentServiceRequest = {
  // string | The ID of the incident service.
  serviceId: "service_id_example",
};

apiInstance.deleteIncidentService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | [**string**] | The ID of the incident service. | defaults to undefined


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
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getIncidentService**
> IncidentServiceResponse getIncidentService()

Get details of an incident service. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params:v2.IncidentServicesApiGetIncidentServiceRequest = {
  // string | The ID of the incident service.
  serviceId: "service_id_example",
  // IncidentRelatedObject | Specifies which types of related objects should be included in the response. (optional)
  include: "users",
};

apiInstance.getIncidentService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | [**string**] | The ID of the incident service. | defaults to undefined
 **include** | **IncidentRelatedObject** | Specifies which types of related objects should be included in the response. | (optional) defaults to undefined


### Return type

**IncidentServiceResponse**

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
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listIncidentServices**
> IncidentServicesResponse listIncidentServices()

Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params:v2.IncidentServicesApiListIncidentServicesRequest = {
  // IncidentRelatedObject | Specifies which types of related objects should be included in the response. (optional)
  include: "users",
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific offset to use as the beginning of the returned page. (optional)
  pageOffset: 0,
  // string | A search query that filters services by name. (optional)
  filter: "ExampleServiceName",
};

apiInstance.listIncidentServices(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **IncidentRelatedObject** | Specifies which types of related objects should be included in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | Size for a given page. | (optional) defaults to 10
 **pageOffset** | [**number**] | Specific offset to use as the beginning of the returned page. | (optional) defaults to 0
 **filter** | [**string**] | A search query that filters services by name. | (optional) defaults to undefined


### Return type

**IncidentServicesResponse**

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
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateIncidentService**
> IncidentServiceResponse updateIncidentService(body)

Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params:v2.IncidentServicesApiUpdateIncidentServiceRequest = {
  // string | The ID of the incident service.
  serviceId: "service_id_example",
  // IncidentServiceUpdateRequest | Incident Service Payload.
  body: {
    data: {
      attributes: {
        name: "an example service name",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "services",
    },
  },
};

apiInstance.updateIncidentService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IncidentServiceUpdateRequest**| Incident Service Payload. |
 **serviceId** | [**string**] | The ID of the incident service. | defaults to undefined


### Return type

**IncidentServiceResponse**

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
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

