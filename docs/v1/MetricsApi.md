# datadog-api-client.v1.MetricsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMetricMetadata**](MetricsApi.md#getMetricMetadata) | **GET** /api/v1/metrics/{metric_name} | Get metric metadata
[**listActiveMetrics**](MetricsApi.md#listActiveMetrics) | **GET** /api/v1/metrics | Get active metrics list
[**listMetrics**](MetricsApi.md#listMetrics) | **GET** /api/v1/search | Search metrics
[**queryMetrics**](MetricsApi.md#queryMetrics) | **GET** /api/v1/query | Query timeseries points
[**submitMetrics**](MetricsApi.md#submitMetrics) | **POST** /api/v1/series | Submit metrics
[**updateMetricMetadata**](MetricsApi.md#updateMetricMetadata) | **PUT** /api/v1/metrics/{metric_name} | Edit metric metadata


## **getMetricMetadata**
> MetricMetadata getMetricMetadata()

Get metadata about a specific metric.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params:v1.MetricsApiGetMetricMetadataRequest = {
  // string | Name of the metric for which to get metadata.
  metricName: "metric_name_example",
};

apiInstance.getMetricMetadata(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **metricName** | [**string**] | Name of the metric for which to get metadata. | defaults to undefined


### Return type

**MetricMetadata**

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

## **listActiveMetrics**
> MetricsListResponse listActiveMetrics()

Get the list of actively reporting metrics from a given time until now.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params:v1.MetricsApiListActiveMetricsRequest = {
  // number | Seconds since the Unix epoch.
  from: 1,
  // string | Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag. (optional)
  host: "host_example",
  // string | Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters. (optional)
  tagFilter: "env IN (staging,test) AND service:web",
};

apiInstance.listActiveMetrics(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | [**number**] | Seconds since the Unix epoch. | defaults to undefined
 **host** | [**string**] | Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag. | (optional) defaults to undefined
 **tagFilter** | [**string**] | Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters. | (optional) defaults to undefined


### Return type

**MetricsListResponse**

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

## **listMetrics**
> MetricSearchResponse listMetrics()

Search for metrics from the last 24 hours in Datadog.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params:v1.MetricsApiListMetricsRequest = {
  // string | Query string to search metrics upon. Must be prefixed with `metrics:`.
  q: "q_example",
};

apiInstance.listMetrics(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Query string to search metrics upon. Must be prefixed with &#x60;metrics:&#x60;. | defaults to undefined


### Return type

**MetricSearchResponse**

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

## **queryMetrics**
> MetricsQueryResponse queryMetrics()

Query timeseries points.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params:v1.MetricsApiQueryMetricsRequest = {
  // number | Start of the queried time period, seconds since the Unix epoch.
  from: 1,
  // number | End of the queried time period, seconds since the Unix epoch.
  to: 1,
  // string | Query string.
  query: "query_example",
};

apiInstance.queryMetrics(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **from** | [**number**] | Start of the queried time period, seconds since the Unix epoch. | defaults to undefined
 **to** | [**number**] | End of the queried time period, seconds since the Unix epoch. | defaults to undefined
 **query** | [**string**] | Query string. | defaults to undefined


### Return type

**MetricsQueryResponse**

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

## **submitMetrics**
> IntakePayloadAccepted submitMetrics(body)

The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards. The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).  If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:  - 64 bits for the timestamp - 32 bits for the value - 20 bytes for the metric names - 50 bytes for the timeseries - The full payload is approximately 100 bytes. However, with the DogStatsD API, compression is applied, which reduces the payload size.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params:v1.MetricsApiSubmitMetricsRequest = {
  // MetricsPayload
  body: {
    series: [
      {
        host: "test.example.com",
        interval: 20,
        metric: "system.load.1",
        points: [[1575317847,0.5]],
        tags: ["environment:test"],
        type: "rate",
      },
    ],
  },
};

apiInstance.submitMetrics(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MetricsPayload**|  |


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
**403** | Authentication error |  -  |
**408** | Request timeout |  -  |
**413** | Payload too large |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateMetricMetadata**
> MetricMetadata updateMetricMetadata(body)

Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params:v1.MetricsApiUpdateMetricMetadataRequest = {
  // string | Name of the metric for which to edit metadata.
  metricName: "metric_name_example",
  // MetricMetadata | New metadata.
  body: {
    description: "description_example",
    perUnit: "second",
    shortName: "shortName_example",
    statsdInterval: 1,
    type: "count",
    unit: "byte",
  },
};

apiInstance.updateMetricMetadata(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **MetricMetadata**| New metadata. |
 **metricName** | [**string**] | Name of the metric for which to edit metadata. | defaults to undefined


### Return type

**MetricMetadata**

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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

