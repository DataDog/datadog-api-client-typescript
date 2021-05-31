# datadog-api-client.v1.OrganizationsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChildOrg**](OrganizationsApi.md#createChildOrg) | **POST** /api/v1/org | Create a child organization
[**getOrg**](OrganizationsApi.md#getOrg) | **GET** /api/v1/org/{public_id} | Get organization information
[**listOrgs**](OrganizationsApi.md#listOrgs) | **GET** /api/v1/org | List your managed organizations
[**updateOrg**](OrganizationsApi.md#updateOrg) | **PUT** /api/v1/org/{public_id} | Update your organization
[**uploadIdPForOrg**](OrganizationsApi.md#uploadIdPForOrg) | **POST** /api/v1/org/{public_id}/idp_metadata | Upload IdP metadata


## **createChildOrg**
> OrganizationCreateResponse createChildOrg(body)

Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `pi_key.key`, and `application_key.hash` provided in the response.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

let params:v1.OrganizationsApiCreateChildOrgRequest = {
  // OrganizationCreateBody | Organization object that needs to be created
  body: {
    billing: {
      type: "type_example",
    },
    name: "New child org",
    subscription: {
      type: "type_example",
    },
  },
};

apiInstance.createChildOrg(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **OrganizationCreateBody**| Organization object that needs to be created |


### Return type

**OrganizationCreateResponse**

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

## **getOrg**
> OrganizationResponse getOrg()

Get organization information.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

let params:v1.OrganizationsApiGetOrgRequest = {
  // string | The `public_id` of the organization you are operating within.
  publicId: "abc123",
};

apiInstance.getOrg(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] | The &#x60;public_id&#x60; of the organization you are operating within. | defaults to undefined


### Return type

**OrganizationResponse**

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

## **listOrgs**
> OrganizationListResponse listOrgs()

List your managed organizations.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);


apiInstance.listOrgs().then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**OrganizationListResponse**

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

## **updateOrg**
> OrganizationResponse updateOrg(body)

Update your organization.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

let params:v1.OrganizationsApiUpdateOrgRequest = {
  // string | The `public_id` of the organization you are operating within.
  publicId: "abc123",
  // Organization
  body: {
    billing: {
      type: "type_example",
    },
    description: "some description",
    name: "New child org",
    publicId: "abcdef12345",
    settings: {
      privateWidgetShare: false,
      saml: {
        enabled: false,
      },
      samlAutocreateAccessRole: "st",
      samlAutocreateUsersDomains: {
        domains: [
          "example.com",
        ],
        enabled: false,
      },
      samlCanBeEnabled: false,
      samlIdpEndpoint: "https://my.saml.endpoint",
      samlIdpInitiatedLogin: {
        enabled: false,
      },
      samlIdpMetadataUploaded: false,
      samlLoginUrl: "https://my.saml.login.url",
      samlStrictMode: {
        enabled: false,
      },
    },
    subscription: {
      type: "type_example",
    },
  },
};

apiInstance.updateOrg(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Organization**|  |
 **publicId** | [**string**] | The &#x60;public_id&#x60; of the organization you are operating within. | defaults to undefined


### Return type

**OrganizationResponse**

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

## **uploadIdPForOrg**
> IdpResponse uploadIdPForOrg()

There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

let params:v1.OrganizationsApiUploadIdPForOrgRequest = {
  // string | The `public_id` of the organization you are operating with
  publicId: "abc123",
  // HttpFile | The path to the XML metadata file you wish to upload.
  idpFile: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
};

apiInstance.uploadIdPForOrg(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] | The &#x60;public_id&#x60; of the organization you are operating with | defaults to undefined
 **idpFile** | [**HttpFile**] | The path to the XML metadata file you wish to upload. | defaults to undefined


### Return type

**IdpResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**415** | Unsupported Media Type |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

