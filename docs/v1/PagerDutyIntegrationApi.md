# datadog-api-client.v1.PagerDutyIntegrationApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPagerDutyIntegrationService**](PagerDutyIntegrationApi.md#createPagerDutyIntegrationService) | **POST** /api/v1/integration/pagerduty/configuration/services | Create a new service object
[**deletePagerDutyIntegrationService**](PagerDutyIntegrationApi.md#deletePagerDutyIntegrationService) | **DELETE** /api/v1/integration/pagerduty/configuration/services/{service_name} | Delete a single service object
[**getPagerDutyIntegrationService**](PagerDutyIntegrationApi.md#getPagerDutyIntegrationService) | **GET** /api/v1/integration/pagerduty/configuration/services/{service_name} | Get a single service object
[**updatePagerDutyIntegrationService**](PagerDutyIntegrationApi.md#updatePagerDutyIntegrationService) | **PUT** /api/v1/integration/pagerduty/configuration/services/{service_name} | Update a single service object


## **createPagerDutyIntegrationService**
> PagerDutyServiceName createPagerDutyIntegrationService(body)

Create a new service object in the PagerDuty integration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.PagerDutyIntegrationApi(configuration);

let params:v1.PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest = {
  // PagerDutyService | Create a new service object request body.
  body: {
    serviceKey: "",
    serviceName: "",
  },
};

apiInstance.createPagerDutyIntegrationService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PagerDutyService**| Create a new service object request body. |


### Return type

**PagerDutyServiceName**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Authentication error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deletePagerDutyIntegrationService**
> void deletePagerDutyIntegrationService()

Delete a single service object in the Datadog-PagerDuty integration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.PagerDutyIntegrationApi(configuration);

let params:v1.PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest = {
  // string | The service name
  serviceName: "service_name_example",
};

apiInstance.deletePagerDutyIntegrationService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | [**string**] | The service name | defaults to undefined


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
**200** | OK |  -  |
**403** | Authentication error |  -  |
**404** | Item Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getPagerDutyIntegrationService**
> PagerDutyServiceName getPagerDutyIntegrationService()

Get service name in the Datadog-PagerDuty integration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.PagerDutyIntegrationApi(configuration);

let params:v1.PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest = {
  // string | The service name.
  serviceName: "service_name_example",
};

apiInstance.getPagerDutyIntegrationService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceName** | [**string**] | The service name. | defaults to undefined


### Return type

**PagerDutyServiceName**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Authentication error |  -  |
**404** | Item Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updatePagerDutyIntegrationService**
> void updatePagerDutyIntegrationService(body)

Update a single service object in the Datadog-PagerDuty integration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.PagerDutyIntegrationApi(configuration);

let params:v1.PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest = {
  // string | The service name
  serviceName: "service_name_example",
  // PagerDutyServiceKey | Update an existing service object request body.
  body: {
    serviceKey: "",
  },
};

apiInstance.updatePagerDutyIntegrationService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **PagerDutyServiceKey**| Update an existing service object request body. |
 **serviceName** | [**string**] | The service name | defaults to undefined


### Return type

**void**

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
**403** | Authentication error |  -  |
**404** | Item Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

