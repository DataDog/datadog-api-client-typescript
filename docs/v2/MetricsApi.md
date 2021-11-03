# datadog-api-client.v2.MetricsApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                                     | HTTP request                                   | Description                                 |
| -------------------------------------------------------------------------- | ---------------------------------------------- | ------------------------------------------- |
| [**createTagConfiguration**](MetricsApi.md#createTagConfiguration)         | **POST** /api/v2/metrics/{metric_name}/tags    | Create a tag configuration                  |
| [**deleteTagConfiguration**](MetricsApi.md#deleteTagConfiguration)         | **DELETE** /api/v2/metrics/{metric_name}/tags  | Delete a tag configuration                  |
| [**listTagConfigurationByName**](MetricsApi.md#listTagConfigurationByName) | **GET** /api/v2/metrics/{metric_name}/tags     | List tag configuration by name              |
| [**listTagConfigurations**](MetricsApi.md#listTagConfigurations)           | **GET** /api/v2/metrics                        | List tag configurations                     |
| [**listTagsByMetricName**](MetricsApi.md#listTagsByMetricName)             | **GET** /api/v2/metrics/{metric_name}/all-tags | List tags by metric name                    |
| [**listVolumesByMetricName**](MetricsApi.md#listVolumesByMetricName)       | **GET** /api/v2/metrics/{metric_name}/volumes  | List distinct metric volumes by metric name |
| [**updateTagConfiguration**](MetricsApi.md#updateTagConfiguration)         | **PATCH** /api/v2/metrics/{metric_name}/tags   | Update a tag configuration                  |

## **createTagConfiguration**

> MetricTagConfigurationResponse createTagConfiguration(body)

Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric.
Optionally, include percentile aggregations on any distribution metric or configure custom aggregations
on any count, rate, or gauge metric.
Can only be used with application keys of users with the `Manage Tags for Metrics` permission.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params: v2.MetricsApiCreateTagConfigurationRequest = {
  // string | The name of the metric.
  metricName: "dist.http.endpoint.request",
  // MetricTagConfigurationCreateRequest
  body: {
    data: {
      attributes: {
        aggregations: [
          {
            space: "sum",
            time: "sum",
          },
          {
            space: "sum",
            time: "sum",
          },
        ],
        includePercentiles: true,
        metricType: "count",
        tags: ["app", "datacenter"],
      },
      id: "test.metric.latency",
      type: "manage_tags",
    },
  },
};

apiInstance
  .createTagConfiguration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type                                    | Description             | Notes                 |
| -------------- | --------------------------------------- | ----------------------- | --------------------- |
| **body**       | **MetricTagConfigurationCreateRequest** |                         |
| **metricName** | [**string**]                            | The name of the metric. | defaults to undefined |

### Return type

**MetricTagConfigurationResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **201**     | Created           | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **409**     | Conflict          | -                |
| **429**     | Too Many Requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteTagConfiguration**

> void deleteTagConfiguration()

Deletes a metric's tag configuration. Can only be used with application
keys from users with the `Manage Tags for Metrics` permission.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params: v2.MetricsApiDeleteTagConfigurationRequest = {
  // string | The name of the metric.
  metricName: "dist.http.endpoint.request",
};

apiInstance
  .deleteTagConfiguration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type         | Description             | Notes                 |
| -------------- | ------------ | ----------------------- | --------------------- |
| **metricName** | [**string**] | The name of the metric. | defaults to undefined |

### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **204**     | No Content        | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not found         | -                |
| **429**     | Too Many Requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listTagConfigurationByName**

> MetricTagConfigurationResponse listTagConfigurationByName()

Returns the tag configuration for the given metric name.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params: v2.MetricsApiListTagConfigurationByNameRequest = {
  // string | The name of the metric.
  metricName: "dist.http.endpoint.request",
};

apiInstance
  .listTagConfigurationByName(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type         | Description             | Notes                 |
| -------------- | ------------ | ----------------------- | --------------------- |
| **metricName** | [**string**] | The name of the metric. | defaults to undefined |

### Return type

**MetricTagConfigurationResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | Success           | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too Many Requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listTagConfigurations**

> MetricsAndMetricTagConfigurationsResponse listTagConfigurations()

Returns all configured count/gauge/rate/distribution metric names
(with additional filters if specified).

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params: v2.MetricsApiListTagConfigurationsRequest = {
  // boolean | Filter metrics that have configured tags. (optional)
  filterConfigured: true,
  // string | Filter tag configurations by configured tags. (optional)
  filterTagsConfigured: "app",
  // MetricTagConfigurationMetricTypes | Filter tag configurations by metric type. (optional)
  filterMetricType: "count",
  // boolean | Filter distributions with additional percentile aggregations enabled or disabled. (optional)
  filterIncludePercentiles: true,
  // string | Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters. (optional)
  filterTags: "env IN (staging,test) AND service:web",
  // number | The number of seconds of look back (from now) to apply to a filter[tag] query. Defaults value is 3600 (1 hour), maximum value is 172,800 (2 days). (optional)
  windowSeconds: 3600,
};

apiInstance
  .listTagConfigurations(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                         | Type                                  | Description                                                                                                                                        | Notes                            |
| ---------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **filterConfigured**         | [**boolean**]                         | Filter metrics that have configured tags.                                                                                                          | (optional) defaults to undefined |
| **filterTagsConfigured**     | [**string**]                          | Filter tag configurations by configured tags.                                                                                                      | (optional) defaults to undefined |
| **filterMetricType**         | **MetricTagConfigurationMetricTypes** | Filter tag configurations by metric type.                                                                                                          | (optional) defaults to undefined |
| **filterIncludePercentiles** | [**boolean**]                         | Filter distributions with additional percentile aggregations enabled or disabled.                                                                  | (optional) defaults to undefined |
| **filterTags**               | [**string**]                          | Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.     | (optional) defaults to undefined |
| **windowSeconds**            | [**number**]                          | The number of seconds of look back (from now) to apply to a filter[tag] query. Defaults value is 3600 (1 hour), maximum value is 172,800 (2 days). | (optional) defaults to undefined |

### Return type

**MetricsAndMetricTagConfigurationsResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | Success           | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **429**     | Too Many Requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listTagsByMetricName**

> MetricAllTagsResponse listTagsByMetricName()

View indexed tag key-value pairs for a given metric name.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params: v2.MetricsApiListTagsByMetricNameRequest = {
  // string | The name of the metric.
  metricName: "dist.http.endpoint.request",
};

apiInstance
  .listTagsByMetricName(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type         | Description             | Notes                 |
| -------------- | ------------ | ----------------------- | --------------------- |
| **metricName** | [**string**] | The name of the metric. | defaults to undefined |

### Return type

**MetricAllTagsResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | Success           | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too Many Requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listVolumesByMetricName**

> MetricVolumesResponse listVolumesByMetricName()

View distinct metrics volumes for the given metric name.

Custom distribution metrics will return both ingested and indexed custom metric volumes.
For Metrics without Limits&trade; beta customers, all metrics will return both ingested/indexed volumes.
Custom metrics generated in-app from other products will return `null` for ingested volumes.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params: v2.MetricsApiListVolumesByMetricNameRequest = {
  // string | The name of the metric.
  metricName: "dist.http.endpoint.request",
};

apiInstance
  .listVolumesByMetricName(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type         | Description             | Notes                 |
| -------------- | ------------ | ----------------------- | --------------------- |
| **metricName** | [**string**] | The name of the metric. | defaults to undefined |

### Return type

**MetricVolumesResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | Success           | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too Many Requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateTagConfiguration**

> MetricTagConfigurationResponse updateTagConfiguration(body)

Update the tag configuration of a metric or percentile aggregations of a distribution metric or custom aggregations
of a count, rate, or gauge metric.
Can only be used with application keys from users with the `Manage Tags for Metrics` permission.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params: v2.MetricsApiUpdateTagConfigurationRequest = {
  // string | The name of the metric.
  metricName: "dist.http.endpoint.request",
  // MetricTagConfigurationUpdateRequest
  body: {
    data: {
      attributes: {
        aggregations: [
          {
            space: "sum",
            time: "sum",
          },
          {
            space: "sum",
            time: "sum",
          },
        ],
        includePercentiles: true,
        tags: ["app", "datacenter"],
      },
      id: "test.metric.latency",
      type: "manage_tags",
    },
  },
};

apiInstance
  .updateTagConfiguration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type                                    | Description             | Notes                 |
| -------------- | --------------------------------------- | ----------------------- | --------------------- |
| **body**       | **MetricTagConfigurationUpdateRequest** |                         |
| **metricName** | [**string**]                            | The name of the metric. | defaults to undefined |

### Return type

**MetricTagConfigurationResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Forbidden            | -                |
| **422**     | Unprocessable Entity | -                |
| **429**     | Too Many Requests    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
