# datadog-api-client.v1.GCPIntegrationApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGCPIntegration**](GCPIntegrationApi.md#createGCPIntegration) | **POST** /api/v1/integration/gcp | Create a GCP integration
[**deleteGCPIntegration**](GCPIntegrationApi.md#deleteGCPIntegration) | **DELETE** /api/v1/integration/gcp | Delete a GCP integration
[**listGCPIntegration**](GCPIntegrationApi.md#listGCPIntegration) | **GET** /api/v1/integration/gcp | List all GCP integrations
[**updateGCPIntegration**](GCPIntegrationApi.md#updateGCPIntegration) | **PUT** /api/v1/integration/gcp | Update a GCP integration


## **createGCPIntegration**
> any createGCPIntegration(body)

Create a Datadog-GCP integration.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.GCPIntegrationApi(configuration);

let params:v1.GCPIntegrationApiCreateGCPIntegrationRequest = {
  // GCPAccount | Create a Datadog-GCP integration.
  body: {
    authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
    authUri: "https://accounts.google.com/o/oauth2/auth",
    automute: true,
    clientEmail: "api-dev@datadog-sandbox.iam.gserviceaccount.com",
    clientId: "123456712345671234567",
    clientX509CertUrl: "https://www.googleapis.com/robot/v1/metadata/x509/<CLIENT_EMAIL>",
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    privateKey: "private_key",
    privateKeyId: "123456789abcdefghi123456789abcdefghijklm",
    projectId: "datadog-apitest",
    tokenUri: "https://accounts.google.com/o/oauth2/token",
    type: "service_account",
  },
};

apiInstance.createGCPIntegration(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **GCPAccount**| Create a Datadog-GCP integration. |


### Return type

**any**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteGCPIntegration**
> any deleteGCPIntegration(body)

Delete a given Datadog-GCP integration.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.GCPIntegrationApi(configuration);

let params:v1.GCPIntegrationApiDeleteGCPIntegrationRequest = {
  // GCPAccount | Delete a given Datadog-GCP integration.
  body: {
    authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
    authUri: "https://accounts.google.com/o/oauth2/auth",
    automute: true,
    clientEmail: "api-dev@datadog-sandbox.iam.gserviceaccount.com",
    clientId: "123456712345671234567",
    clientX509CertUrl: "https://www.googleapis.com/robot/v1/metadata/x509/<CLIENT_EMAIL>",
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    privateKey: "private_key",
    privateKeyId: "123456789abcdefghi123456789abcdefghijklm",
    projectId: "datadog-apitest",
    tokenUri: "https://accounts.google.com/o/oauth2/token",
    type: "service_account",
  },
};

apiInstance.deleteGCPIntegration(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **GCPAccount**| Delete a given Datadog-GCP integration. |


### Return type

**any**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listGCPIntegration**
> Array<GCPAccount> listGCPIntegration()

List all Datadog-GCP integrations configured in your Datadog account.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.GCPIntegrationApi(configuration);


apiInstance.listGCPIntegration().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<GCPAccount>**

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
**403** | Authentication error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateGCPIntegration**
> any updateGCPIntegration(body)

Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.GCPIntegrationApi(configuration);

let params:v1.GCPIntegrationApiUpdateGCPIntegrationRequest = {
  // GCPAccount | Update a Datadog-GCP integration.
  body: {
    authProviderX509CertUrl: "https://www.googleapis.com/oauth2/v1/certs",
    authUri: "https://accounts.google.com/o/oauth2/auth",
    automute: true,
    clientEmail: "api-dev@datadog-sandbox.iam.gserviceaccount.com",
    clientId: "123456712345671234567",
    clientX509CertUrl: "https://www.googleapis.com/robot/v1/metadata/x509/<CLIENT_EMAIL>",
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    privateKey: "private_key",
    privateKeyId: "123456789abcdefghi123456789abcdefghijklm",
    projectId: "datadog-apitest",
    tokenUri: "https://accounts.google.com/o/oauth2/token",
    type: "service_account",
  },
};

apiInstance.updateGCPIntegration(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **GCPAccount**| Update a Datadog-GCP integration. |


### Return type

**any**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

