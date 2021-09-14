# datadog-api-client.v1.LogsPipelinesApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogsPipeline**](LogsPipelinesApi.md#createLogsPipeline) | **POST** /api/v1/logs/config/pipelines | Create a pipeline
[**deleteLogsPipeline**](LogsPipelinesApi.md#deleteLogsPipeline) | **DELETE** /api/v1/logs/config/pipelines/{pipeline_id} | Delete a pipeline
[**getLogsPipeline**](LogsPipelinesApi.md#getLogsPipeline) | **GET** /api/v1/logs/config/pipelines/{pipeline_id} | Get a pipeline
[**getLogsPipelineOrder**](LogsPipelinesApi.md#getLogsPipelineOrder) | **GET** /api/v1/logs/config/pipeline-order | Get pipeline order
[**listLogsPipelines**](LogsPipelinesApi.md#listLogsPipelines) | **GET** /api/v1/logs/config/pipelines | Get all pipelines
[**updateLogsPipeline**](LogsPipelinesApi.md#updateLogsPipeline) | **PUT** /api/v1/logs/config/pipelines/{pipeline_id} | Update a pipeline
[**updateLogsPipelineOrder**](LogsPipelinesApi.md#updateLogsPipelineOrder) | **PUT** /api/v1/logs/config/pipeline-order | Update pipeline order


## **createLogsPipeline**
> LogsPipeline createLogsPipeline(body)

Create a pipeline in your organization.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

let params:v1.LogsPipelinesApiCreateLogsPipelineRequest = {
  // LogsPipeline | Definition of the new pipeline.
  body: {
    filter: {
      query: "source:python",
    },
    isEnabled: true,
    name: "",
    processors: [
      {
    grok: {
      matchRules: `rule_name_1 foo
rule_name_2 bar
`,
      supportRules: `rule_name_1 foo
rule_name_2 bar
`,
    },
    isEnabled: false,
    name: "name_example",
    samples: [
      "samples_example",
    ],
    source: "message",
    type: "grok-parser",
  },
    ],
  },
};

apiInstance.createLogsPipeline(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsPipeline**| Definition of the new pipeline. |


### Return type

**LogsPipeline**

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

## **deleteLogsPipeline**
> void deleteLogsPipeline()

Delete a given pipeline from your organization.
This endpoint takes no JSON arguments.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

let params:v1.LogsPipelinesApiDeleteLogsPipelineRequest = {
  // string | ID of the pipeline to delete.
  pipelineId: "pipeline_id_example",
};

apiInstance.deleteLogsPipeline(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipelineId** | [**string**] | ID of the pipeline to delete. | defaults to undefined


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
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getLogsPipeline**
> LogsPipeline getLogsPipeline()

Get a specific pipeline from your organization.
This endpoint takes no JSON arguments.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

let params:v1.LogsPipelinesApiGetLogsPipelineRequest = {
  // string | ID of the pipeline to get.
  pipelineId: "pipeline_id_example",
};

apiInstance.getLogsPipeline(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pipelineId** | [**string**] | ID of the pipeline to get. | defaults to undefined


### Return type

**LogsPipeline**

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

## **getLogsPipelineOrder**
> LogsPipelinesOrder getLogsPipelineOrder()

Get the current order of your pipelines.
This endpoint takes no JSON arguments.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);


apiInstance.getLogsPipelineOrder().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LogsPipelinesOrder**

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

## **listLogsPipelines**
> Array<LogsPipeline> listLogsPipelines()

Get all pipelines from your organization.
This endpoint takes no JSON arguments.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);


apiInstance.listLogsPipelines().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<LogsPipeline>**

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

## **updateLogsPipeline**
> LogsPipeline updateLogsPipeline(body)

Update a given pipeline configuration to change it’s processors or their order.

**Note**: Using this method updates your pipeline configuration by **replacing**
your current configuration with the new one sent to your Datadog organization.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

let params:v1.LogsPipelinesApiUpdateLogsPipelineRequest = {
  // string | ID of the pipeline to delete.
  pipelineId: "pipeline_id_example",
  // LogsPipeline | New definition of the pipeline.
  body: {
    filter: {
      query: "source:python",
    },
    isEnabled: true,
    name: "",
    processors: [
      {
    grok: {
      matchRules: `rule_name_1 foo
rule_name_2 bar
`,
      supportRules: `rule_name_1 foo
rule_name_2 bar
`,
    },
    isEnabled: false,
    name: "name_example",
    samples: [
      "samples_example",
    ],
    source: "message",
    type: "grok-parser",
  },
    ],
  },
};

apiInstance.updateLogsPipeline(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsPipeline**| New definition of the pipeline. |
 **pipelineId** | [**string**] | ID of the pipeline to delete. | defaults to undefined


### Return type

**LogsPipeline**

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

## **updateLogsPipelineOrder**
> LogsPipelinesOrder updateLogsPipelineOrder(body)

Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change
the structure and content of the data processed by other pipelines and their processors.

**Note**: Using the `PUT` method updates your pipeline order by replacing your current order
with the new one sent to your Datadog organization.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

let params:v1.LogsPipelinesApiUpdateLogsPipelineOrderRequest = {
  // LogsPipelinesOrder | Object containing the new ordered list of pipeline IDs.
  body: {
    pipelineIds: [
      "tags",
      "org_ids",
      "products",
    ],
  },
};

apiInstance.updateLogsPipelineOrder(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsPipelinesOrder**| Object containing the new ordered list of pipeline IDs. |


### Return type

**LogsPipelinesOrder**

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
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

