# datadog-api-client.v1.SlackIntegrationApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSlackIntegrationChannel**](SlackIntegrationApi.md#createSlackIntegrationChannel) | **POST** /api/v1/integration/slack/configuration/accounts/{account_name}/channels | Create a Slack integration channel
[**getSlackIntegrationChannel**](SlackIntegrationApi.md#getSlackIntegrationChannel) | **GET** /api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name} | Get a Slack integration channel
[**getSlackIntegrationChannels**](SlackIntegrationApi.md#getSlackIntegrationChannels) | **GET** /api/v1/integration/slack/configuration/accounts/{account_name}/channels | Get all channels in a Slack integration
[**removeSlackIntegrationChannel**](SlackIntegrationApi.md#removeSlackIntegrationChannel) | **DELETE** /api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name} | Remove a Slack integration channel
[**updateSlackIntegrationChannel**](SlackIntegrationApi.md#updateSlackIntegrationChannel) | **PATCH** /api/v1/integration/slack/configuration/accounts/{account_name}/channels/{channel_name} | Update a Slack integration channel


## **createSlackIntegrationChannel**
> SlackIntegrationChannel createSlackIntegrationChannel(body)

Add a channel to your Datadog-Slack integration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

let params:v1.SlackIntegrationApiCreateSlackIntegrationChannelRequest = {
  // string | Your Slack account name.
  accountName: "account_name_example",
  // SlackIntegrationChannel | Payload describing Slack channel to be created
  body: {
    display: {
      message: true,
      notified: true,
      snapshot: true,
      tags: true,
    },
    name: "#general",
  },
};

apiInstance.createSlackIntegrationChannel(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SlackIntegrationChannel**| Payload describing Slack channel to be created |
 **accountName** | [**string**] | Your Slack account name. | defaults to undefined


### Return type

**SlackIntegrationChannel**

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

## **getSlackIntegrationChannel**
> SlackIntegrationChannel getSlackIntegrationChannel()

Get a channel configured for your Datadog-Slack integration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

let params:v1.SlackIntegrationApiGetSlackIntegrationChannelRequest = {
  // string | Your Slack account name.
  accountName: "account_name_example",
  // string | The name of the Slack channel being operated on.
  channelName: "channel_name_example",
};

apiInstance.getSlackIntegrationChannel(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountName** | [**string**] | Your Slack account name. | defaults to undefined
 **channelName** | [**string**] | The name of the Slack channel being operated on. | defaults to undefined


### Return type

**SlackIntegrationChannel**

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
**404** | Item Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getSlackIntegrationChannels**
> Array<SlackIntegrationChannel> getSlackIntegrationChannels()

Get a list of all channels configured for your Datadog-Slack integration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

let params:v1.SlackIntegrationApiGetSlackIntegrationChannelsRequest = {
  // string | Your Slack account name.
  accountName: "account_name_example",
};

apiInstance.getSlackIntegrationChannels(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountName** | [**string**] | Your Slack account name. | defaults to undefined


### Return type

**Array<SlackIntegrationChannel>**

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
**404** | Item Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **removeSlackIntegrationChannel**
> void removeSlackIntegrationChannel()

Remove a channel from your Datadog-Slack integration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

let params:v1.SlackIntegrationApiRemoveSlackIntegrationChannelRequest = {
  // string | Your Slack account name.
  accountName: "account_name_example",
  // string | The name of the Slack channel being operated on.
  channelName: "channel_name_example",
};

apiInstance.removeSlackIntegrationChannel(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountName** | [**string**] | Your Slack account name. | defaults to undefined
 **channelName** | [**string**] | The name of the Slack channel being operated on. | defaults to undefined


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
**204** | The channel was removed successfully. |  -  |
**400** | Bad Request |  -  |
**403** | Authentication error |  -  |
**404** | Item Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateSlackIntegrationChannel**
> SlackIntegrationChannel updateSlackIntegrationChannel(body)

Update a channel used in your Datadog-Slack integration.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

let params:v1.SlackIntegrationApiUpdateSlackIntegrationChannelRequest = {
  // string | Your Slack account name.
  accountName: "account_name_example",
  // string | The name of the Slack channel being operated on.
  channelName: "channel_name_example",
  // SlackIntegrationChannel | Payload describing fields and values to be updated.
  body: {
    display: {
      message: true,
      notified: true,
      snapshot: true,
      tags: true,
    },
    name: "#general",
  },
};

apiInstance.updateSlackIntegrationChannel(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SlackIntegrationChannel**| Payload describing fields and values to be updated. |
 **accountName** | [**string**] | Your Slack account name. | defaults to undefined
 **channelName** | [**string**] | The name of the Slack channel being operated on. | defaults to undefined


### Return type

**SlackIntegrationChannel**

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

