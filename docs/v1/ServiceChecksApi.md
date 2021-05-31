# datadog-api-client.v1.ServiceChecksApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**submitServiceCheck**](ServiceChecksApi.md#submitServiceCheck) | **POST** /api/v1/check_run | Submit a Service Check


## **submitServiceCheck**
> IntakePayloadAccepted submitServiceCheck(body)

Submit a list of Service Checks.  **Note**: A valid API key is required.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceChecksApi(configuration);

let params:v1.ServiceChecksApiSubmitServiceCheckRequest = {
  // Array<ServiceCheck> | Service Check request body.
  body: [
    {
      check: "app.ok",
      hostName: "app.host1",
      message: "app is running",
      status: 0,
      tags: ["environment:test"],
      timestamp: 1,
    },
  ],
};

apiInstance.submitServiceCheck(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Array<ServiceCheck>**| Service Check request body. |


### Return type

**IntakePayloadAccepted**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Payload accepted |  -  |
**400** | Bad Request |  -  |
**403** | Authentication Error |  -  |
**408** | Request timeout |  -  |
**413** | Payload too large |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

