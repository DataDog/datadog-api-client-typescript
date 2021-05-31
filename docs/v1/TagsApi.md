# datadog-api-client.v1.TagsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createHostTags**](TagsApi.md#createHostTags) | **POST** /api/v1/tags/hosts/{host_name} | Add tags to a host
[**deleteHostTags**](TagsApi.md#deleteHostTags) | **DELETE** /api/v1/tags/hosts/{host_name} | Remove host tags
[**getHostTags**](TagsApi.md#getHostTags) | **GET** /api/v1/tags/hosts/{host_name} | Get host tags
[**listHostTags**](TagsApi.md#listHostTags) | **GET** /api/v1/tags/hosts | Get Tags
[**updateHostTags**](TagsApi.md#updateHostTags) | **PUT** /api/v1/tags/hosts/{host_name} | Update host tags


## **createHostTags**
> HostTags createHostTags(body)

This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params:v1.TagsApiCreateHostTagsRequest = {
  // string | This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
  hostName: "host_name_example",
  // HostTags | Update host tags request body.
  body: {
    host: "test.host",
    tags: [
      "environment:production",
    ],
  },
  // string | The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). (optional)
  source: "chef",
};

apiInstance.createHostTags(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HostTags**| Update host tags request body. |
 **hostName** | [**string**] | This endpoint allows you to add new tags to a host, optionally specifying where the tags came from. | defaults to undefined
 **source** | [**string**] | The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). | (optional) defaults to undefined


### Return type

**HostTags**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteHostTags**
> void deleteHostTags()

This endpoint allows you to remove all user-assigned tags for a single host.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params:v1.TagsApiDeleteHostTagsRequest = {
  // string | This endpoint allows you to remove all user-assigned tags for a single host.
  hostName: "host_name_example",
  // string | The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). (optional)
  source: "source_example",
};

apiInstance.deleteHostTags(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hostName** | [**string**] | This endpoint allows you to remove all user-assigned tags for a single host. | defaults to undefined
 **source** | [**string**] | The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value). | (optional) defaults to undefined


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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getHostTags**
> HostTags getHostTags()

Return the list of tags that apply to a given host.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params:v1.TagsApiGetHostTagsRequest = {
  // string | When specified, filters list of tags to those tags with the specified source.
  hostName: "host_name_example",
  // string | Source to filter. (optional)
  source: "source_example",
};

apiInstance.getHostTags(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hostName** | [**string**] | When specified, filters list of tags to those tags with the specified source. | defaults to undefined
 **source** | [**string**] | Source to filter. | (optional) defaults to undefined


### Return type

**HostTags**

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

## **listHostTags**
> TagToHosts listHostTags()

Return a mapping of tags to hosts for your whole infrastructure.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params:v1.TagsApiListHostTagsRequest = {
  // string | When specified, filters host list to those tags with the specified source. (optional)
  source: "source_example",
};

apiInstance.listHostTags(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | [**string**] | When specified, filters host list to those tags with the specified source. | (optional) defaults to undefined


### Return type

**TagToHosts**

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

## **updateHostTags**
> HostTags updateHostTags(body)

This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

let params:v1.TagsApiUpdateHostTagsRequest = {
  // string | This endpoint allows you to update/replace all in an integration source with those supplied in the request.
  hostName: "host_name_example",
  // HostTags | Add tags to host
  body: {
    host: "test.host",
    tags: [
      "environment:production",
    ],
  },
  // string | The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value) (optional)
  source: "source_example",
};

apiInstance.updateHostTags(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HostTags**| Add tags to host |
 **hostName** | [**string**] | This endpoint allows you to update/replace all in an integration source with those supplied in the request. | defaults to undefined
 **source** | [**string**] | The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value) | (optional) defaults to undefined


### Return type

**HostTags**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

