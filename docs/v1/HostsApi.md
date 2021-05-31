# datadog-api-client.v1.HostsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHostTotals**](HostsApi.md#getHostTotals) | **GET** /api/v1/hosts/totals | Get the total number of active hosts
[**listHosts**](HostsApi.md#listHosts) | **GET** /api/v1/hosts | Get all hosts for your organization
[**muteHost**](HostsApi.md#muteHost) | **POST** /api/v1/host/{host_name}/mute | Mute a host
[**unmuteHost**](HostsApi.md#unmuteHost) | **POST** /api/v1/host/{host_name}/unmute | Unmute a host


## **getHostTotals**
> HostTotals getHostTotals()

This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

let params:v1.HostsApiGetHostTotalsRequest = {
  // number | Number of seconds from which you want to get total number of active hosts. (optional)
  from: 1,
};

apiInstance.getHostTotals(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | [**number**] | Number of seconds from which you want to get total number of active hosts. | (optional) defaults to undefined


### Return type

**HostTotals**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid Parameter Error |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listHosts**
> HostListResponse listHosts()

This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

let params:v1.HostsApiListHostsRequest = {
  // string | String to filter search results. (optional)
  filter: "filter_example",
  // string | Sort hosts by this field. (optional)
  sortField: "sort_field_example",
  // string | Direction of sort. Options include `asc` and `desc`. (optional)
  sortDir: "sort_dir_example",
  // number | Host result to start search from. (optional)
  start: 1,
  // number | Number of hosts to return. Max 1000. (optional)
  count: 1,
  // number | Number of seconds since UNIX epoch from which you want to search your hosts. (optional)
  from: 1,
  // boolean | Include information on the muted status of hosts and when the mute expires. (optional)
  includeMutedHostsData: true,
  // boolean | Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.). (optional)
  includeHostsMetadata: true,
};

apiInstance.listHosts(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | [**string**] | String to filter search results. | (optional) defaults to undefined
 **sortField** | [**string**] | Sort hosts by this field. | (optional) defaults to undefined
 **sortDir** | [**string**] | Direction of sort. Options include &#x60;asc&#x60; and &#x60;desc&#x60;. | (optional) defaults to undefined
 **start** | [**number**] | Host result to start search from. | (optional) defaults to undefined
 **count** | [**number**] | Number of hosts to return. Max 1000. | (optional) defaults to undefined
 **from** | [**number**] | Number of seconds since UNIX epoch from which you want to search your hosts. | (optional) defaults to undefined
 **includeMutedHostsData** | [**boolean**] | Include information on the muted status of hosts and when the mute expires. | (optional) defaults to undefined
 **includeHostsMetadata** | [**boolean**] | Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.). | (optional) defaults to undefined


### Return type

**HostListResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid Parameter Error |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **muteHost**
> HostMuteResponse muteHost(body)

Mute a host.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

let params:v1.HostsApiMuteHostRequest = {
  // string | Name of the host to mute.
  hostName: "host_name_example",
  // HostMuteSettings | Mute a host request body.
  body: {
    end: 1579098130,
    message: "Muting this host for a test!",
    override: false,
  },
};

apiInstance.muteHost(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HostMuteSettings**| Mute a host request body. |
 **hostName** | [**string**] | Name of the host to mute. | defaults to undefined


### Return type

**HostMuteResponse**

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

## **unmuteHost**
> HostMuteResponse unmuteHost()

Unmutes a host. This endpoint takes no JSON arguments.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

let params:v1.HostsApiUnmuteHostRequest = {
  // string | Name of the host to unmute.
  hostName: "host_name_example",
};

apiInstance.unmuteHost(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **hostName** | [**string**] | Name of the host to unmute. | defaults to undefined


### Return type

**HostMuteResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid Parameter Error |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

