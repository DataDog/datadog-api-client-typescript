# datadog-api-client.v2.LogsMetricsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLogsMetric**](LogsMetricsApi.md#createLogsMetric) | **POST** /api/v2/logs/config/metrics | Create a log-based metric
[**deleteLogsMetric**](LogsMetricsApi.md#deleteLogsMetric) | **DELETE** /api/v2/logs/config/metrics/{metric_id} | Delete a log-based metric
[**getLogsMetric**](LogsMetricsApi.md#getLogsMetric) | **GET** /api/v2/logs/config/metrics/{metric_id} | Get a log-based metric
[**listLogsMetrics**](LogsMetricsApi.md#listLogsMetrics) | **GET** /api/v2/logs/config/metrics | Get all log-based metrics
[**updateLogsMetric**](LogsMetricsApi.md#updateLogsMetric) | **PATCH** /api/v2/logs/config/metrics/{metric_id} | Update a log-based metric


## **createLogsMetric**
> LogsMetricResponse createLogsMetric(body)

Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

let params:v2.LogsMetricsApiCreateLogsMetricRequest = {
  // LogsMetricCreateRequest | The definition of the new log-based metric.
  body: {
    data: {
      attributes: {
        compute: {
          aggregationType: "distribution",
          path: "@duration",
        },
        filter: {
          query: "service:web* AND @http.status_code:[200 TO 299]",
        },
        groupBy: [
          {
            path: "@http.status_code",
            tagName: "status_code",
          },
        ],
      },
      id: "logs.page.load.count",
      type: "logs_metrics",
    },
  },
};

apiInstance.createLogsMetric(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsMetricCreateRequest**| The definition of the new log-based metric. |


### Return type

**LogsMetricResponse**

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
**403** | Not Authorized |  -  |
**409** | Conflict |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteLogsMetric**
> void deleteLogsMetric()

Delete a specific log-based metric from your organization.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

let params:v2.LogsMetricsApiDeleteLogsMetricRequest = {
  // string | The name of the log-based metric.
  metricId: "metric_id_example",
};

apiInstance.deleteLogsMetric(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricId** | [**string**] | The name of the log-based metric. | defaults to undefined


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
**403** | Not Authorized |  -  |
**404** | Not Found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getLogsMetric**
> LogsMetricResponse getLogsMetric()

Get a specific log-based metric from your organization.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

let params:v2.LogsMetricsApiGetLogsMetricRequest = {
  // string | The name of the log-based metric.
  metricId: "metric_id_example",
};

apiInstance.getLogsMetric(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricId** | [**string**] | The name of the log-based metric. | defaults to undefined


### Return type

**LogsMetricResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Not Authorized |  -  |
**404** | Not Found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listLogsMetrics**
> LogsMetricsResponse listLogsMetrics()

Get the list of configured log-based metrics with their definitions.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);


apiInstance.listLogsMetrics().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LogsMetricsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Not Authorized |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateLogsMetric**
> LogsMetricResponse updateLogsMetric(body)

Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

let params:v2.LogsMetricsApiUpdateLogsMetricRequest = {
  // string | The name of the log-based metric.
  metricId: "metric_id_example",
  // LogsMetricUpdateRequest | New definition of the log-based metric.
  body: {
    data: {
      attributes: {
        filter: {
          query: "service:web* AND @http.status_code:[200 TO 299]",
        },
        groupBy: [
          {
            path: "@http.status_code",
            tagName: "status_code",
          },
        ],
      },
      type: "logs_metrics",
    },
  },
};

apiInstance.updateLogsMetric(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsMetricUpdateRequest**| New definition of the log-based metric. |
 **metricId** | [**string**] | The name of the log-based metric. | defaults to undefined


### Return type

**LogsMetricResponse**

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
**403** | Not Authorized |  -  |
**404** | Not Found |  -  |
**429** | Too many requests |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

