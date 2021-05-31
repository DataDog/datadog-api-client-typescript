# datadog-api-client.v1.UsageMeteringApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDailyCustomReports**](UsageMeteringApi.md#getDailyCustomReports) | **GET** /api/v1/daily_custom_reports | Get the list of available daily custom reports
[**getIncidentManagement**](UsageMeteringApi.md#getIncidentManagement) | **GET** /api/v1/usage/incident-management | Get hourly usage for incident management
[**getIngestedSpans**](UsageMeteringApi.md#getIngestedSpans) | **GET** /api/v1/usage/ingested-spans | Get hourly usage for ingested spans
[**getMonthlyCustomReports**](UsageMeteringApi.md#getMonthlyCustomReports) | **GET** /api/v1/monthly_custom_reports | Get the list of available monthly custom reports
[**getSpecifiedDailyCustomReports**](UsageMeteringApi.md#getSpecifiedDailyCustomReports) | **GET** /api/v1/daily_custom_reports/{report_id} | Get specified daily custom reports
[**getSpecifiedMonthlyCustomReports**](UsageMeteringApi.md#getSpecifiedMonthlyCustomReports) | **GET** /api/v1/monthly_custom_reports/{report_id} | Get specified monthly custom reports
[**getTracingWithoutLimits**](UsageMeteringApi.md#getTracingWithoutLimits) | **GET** /api/v1/usage/tracing-without-limits | Get hourly usage for tracing without limits
[**getUsageAnalyzedLogs**](UsageMeteringApi.md#getUsageAnalyzedLogs) | **GET** /api/v1/usage/analyzed_logs | Get hourly usage for analyzed logs
[**getUsageAttribution**](UsageMeteringApi.md#getUsageAttribution) | **GET** /api/v1/usage/attribution | Get Usage Attribution
[**getUsageBillableSummary**](UsageMeteringApi.md#getUsageBillableSummary) | **GET** /api/v1/usage/billable-summary | Get billable usage across your account
[**getUsageComplianceMonitoring**](UsageMeteringApi.md#getUsageComplianceMonitoring) | **GET** /api/v1/usage/compliance-monitoring | Get hourly usage for Compliance Monitoring
[**getUsageFargate**](UsageMeteringApi.md#getUsageFargate) | **GET** /api/v1/usage/fargate | Get hourly usage for Fargate
[**getUsageHosts**](UsageMeteringApi.md#getUsageHosts) | **GET** /api/v1/usage/hosts | Get hourly usage for hosts and containers
[**getUsageIndexedSpans**](UsageMeteringApi.md#getUsageIndexedSpans) | **GET** /api/v1/usage/indexed-spans | Get hourly usage for indexed spans
[**getUsageInternetOfThings**](UsageMeteringApi.md#getUsageInternetOfThings) | **GET** /api/v1/usage/iot | Get hourly usage for IoT
[**getUsageLambda**](UsageMeteringApi.md#getUsageLambda) | **GET** /api/v1/usage/aws_lambda | Get hourly usage for Lambda
[**getUsageLogs**](UsageMeteringApi.md#getUsageLogs) | **GET** /api/v1/usage/logs | Get hourly usage for Logs
[**getUsageLogsByIndex**](UsageMeteringApi.md#getUsageLogsByIndex) | **GET** /api/v1/usage/logs_by_index | Get hourly usage for Logs by Index
[**getUsageLogsByRetention**](UsageMeteringApi.md#getUsageLogsByRetention) | **GET** /api/v1/usage/logs-by-retention | Get hourly logs usage by retention
[**getUsageNetworkFlows**](UsageMeteringApi.md#getUsageNetworkFlows) | **GET** /api/v1/usage/network_flows | Get hourly usage for Network Flows
[**getUsageNetworkHosts**](UsageMeteringApi.md#getUsageNetworkHosts) | **GET** /api/v1/usage/network_hosts | Get hourly usage for Network Hosts
[**getUsageProfiling**](UsageMeteringApi.md#getUsageProfiling) | **GET** /api/v1/usage/profiling | Get hourly usage for profiled hosts
[**getUsageRumSessions**](UsageMeteringApi.md#getUsageRumSessions) | **GET** /api/v1/usage/rum_sessions | Get hourly usage for RUM Sessions
[**getUsageSNMP**](UsageMeteringApi.md#getUsageSNMP) | **GET** /api/v1/usage/snmp | Get hourly usage for SNMP devices
[**getUsageSummary**](UsageMeteringApi.md#getUsageSummary) | **GET** /api/v1/usage/summary | Get usage across your multi-org account
[**getUsageSynthetics**](UsageMeteringApi.md#getUsageSynthetics) | **GET** /api/v1/usage/synthetics | Get hourly usage for Synthetics Checks
[**getUsageSyntheticsAPI**](UsageMeteringApi.md#getUsageSyntheticsAPI) | **GET** /api/v1/usage/synthetics_api | Get hourly usage for Synthetics API Checks
[**getUsageSyntheticsBrowser**](UsageMeteringApi.md#getUsageSyntheticsBrowser) | **GET** /api/v1/usage/synthetics_browser | Get hourly usage for Synthetics Browser Checks
[**getUsageTimeseries**](UsageMeteringApi.md#getUsageTimeseries) | **GET** /api/v1/usage/timeseries | Get hourly usage for custom metrics
[**getUsageTopAvgMetrics**](UsageMeteringApi.md#getUsageTopAvgMetrics) | **GET** /api/v1/usage/top_avg_metrics | Get all custom metrics by hourly average
[**getUsageTrace**](UsageMeteringApi.md#getUsageTrace) | **GET** /api/v1/usage/traces | Get hourly usage for Trace Search


## **getDailyCustomReports**
> UsageCustomReportsResponse getDailyCustomReports()

Get daily custom reports.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetDailyCustomReportsRequest = {
  // number | The number of files to return in the response. `[default=60]`. (optional)
  pageSize: 1,
  // number | The identifier of the first page to return. This parameter is used for the pagination feature `[default=0]`. (optional)
  pageNumber: 1,
  // UsageSortDirection | The direction to sort by: `[desc, asc]`. (optional)
  sortDir: "desc",
  // UsageSort | The field to sort by: `[computed_on, size, start_date, end_date]`. (optional)
  sort: "start_date",
};

apiInstance.getDailyCustomReports(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;. | (optional) defaults to undefined
 **pageNumber** | [**number**] | The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;. | (optional) defaults to undefined
 **sortDir** | **UsageSortDirection** | The direction to sort by: &#x60;[desc, asc]&#x60;. | (optional) defaults to undefined
 **sort** | **UsageSort** | The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;. | (optional) defaults to undefined


### Return type

**UsageCustomReportsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getIncidentManagement**
> UsageIncidentManagementResponse getIncidentManagement()

Get hourly usage for incident management.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetIncidentManagementRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getIncidentManagement(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageIncidentManagementResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getIngestedSpans**
> UsageIngestedSpansResponse getIngestedSpans()

Get hourly usage for ingested spans.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetIngestedSpansRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getIngestedSpans(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageIngestedSpansResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getMonthlyCustomReports**
> UsageCustomReportsResponse getMonthlyCustomReports()

Get monthly custom reports.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetMonthlyCustomReportsRequest = {
  // number | The number of files to return in the response `[default=60].` (optional)
  pageSize: 1,
  // number | The identifier of the first page to return. This parameter is used for the pagination feature `[default=0]`. (optional)
  pageNumber: 1,
  // UsageSortDirection | The direction to sort by: `[desc, asc]`. (optional)
  sortDir: "desc",
  // UsageSort | The field to sort by: `[computed_on, size, start_date, end_date]`. (optional)
  sort: "start_date",
};

apiInstance.getMonthlyCustomReports(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | The number of files to return in the response &#x60;[default&#x3D;60].&#x60; | (optional) defaults to undefined
 **pageNumber** | [**number**] | The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;. | (optional) defaults to undefined
 **sortDir** | **UsageSortDirection** | The direction to sort by: &#x60;[desc, asc]&#x60;. | (optional) defaults to undefined
 **sort** | **UsageSort** | The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;. | (optional) defaults to undefined


### Return type

**UsageCustomReportsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getSpecifiedDailyCustomReports**
> UsageSpecifiedCustomReportsResponse getSpecifiedDailyCustomReports()

Get specified daily custom reports.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetSpecifiedDailyCustomReportsRequest = {
  // string | The specified ID to search results for.
  reportId: "report_id_example",
};

apiInstance.getSpecifiedDailyCustomReports(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | [**string**] | The specified ID to search results for. | defaults to undefined


### Return type

**UsageSpecifiedCustomReportsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden - User is not authorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getSpecifiedMonthlyCustomReports**
> UsageSpecifiedCustomReportsResponse getSpecifiedMonthlyCustomReports()

Get specified monthly custom reports.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest = {
  // string | The specified ID to search results for.
  reportId: "report_id_example",
};

apiInstance.getSpecifiedMonthlyCustomReports(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | [**string**] | The specified ID to search results for. | defaults to undefined


### Return type

**UsageSpecifiedCustomReportsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getTracingWithoutLimits**
> UsageTracingWithoutLimitsResponse getTracingWithoutLimits()

Get hourly usage for tracing without limits.  **Note** This endpoint has been renamed to `/api/v1/usage/ingested-spans`.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetTracingWithoutLimitsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getTracingWithoutLimits(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageTracingWithoutLimitsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageAnalyzedLogs**
> UsageAnalyzedLogsResponse getUsageAnalyzedLogs()

Get hourly usage for analyzed logs (Security Monitoring).

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageAnalyzedLogsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageAnalyzedLogs(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageAnalyzedLogsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageAttribution**
> UsageAttributionResponse getUsageAttribution()

Get Usage Attribution.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageAttributionRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage beginning in this month. Maximum of 15 months ago.
  startMonth: new Date('1970-01-01T00:00:00.00Z'),
  // UsageAttributionSupportedMetrics | Comma-separated list of usage types to return, or `*` for all usage types.
  fields: "custom_timeseries_usage",
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage ending this month. (optional)
  endMonth: new Date('1970-01-01T00:00:00.00Z'),
  // UsageSortDirection | The direction to sort by: `[desc, asc]`. (optional)
  sortDirection: "desc",
  // UsageAttributionSort | The field to sort by. (optional)
  sortName: "custom_timeseries_usage",
};

apiInstance.getUsageAttribution(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startMonth** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago. | defaults to undefined
 **fields** | **UsageAttributionSupportedMetrics** | Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types. | defaults to undefined
 **endMonth** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month. | (optional) defaults to undefined
 **sortDirection** | **UsageSortDirection** | The direction to sort by: &#x60;[desc, asc]&#x60;. | (optional) defaults to undefined
 **sortName** | **UsageAttributionSort** | The field to sort by. | (optional) defaults to undefined


### Return type

**UsageAttributionResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageBillableSummary**
> UsageBillableSummaryResponse getUsageBillableSummary()

Get billable usage across your account.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageBillableSummaryRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage starting this month. (optional)
  month: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageBillableSummary(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **month** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month. | (optional) defaults to undefined


### Return type

**UsageBillableSummaryResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageComplianceMonitoring**
> UsageComplianceResponse getUsageComplianceMonitoring()

Get hourly usage for Compliance Monitoring.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageComplianceMonitoringRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageComplianceMonitoring(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageComplianceResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageFargate**
> UsageFargateResponse getUsageFargate()

Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageFargateRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageFargate(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageFargateResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageHosts**
> UsageHostsResponse getUsageHosts()

Get hourly usage for hosts and containers.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageHostsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageHosts(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageHostsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageIndexedSpans**
> UsageIndexedSpansResponse getUsageIndexedSpans()

Get hourly usage for indexed spans.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageIndexedSpansRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageIndexedSpans(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageIndexedSpansResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageInternetOfThings**
> UsageIoTResponse getUsageInternetOfThings()

Get hourly usage for IoT.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageInternetOfThingsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageInternetOfThings(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageIoTResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageLambda**
> UsageLambdaResponse getUsageLambda()

Get hourly usage for lambda.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageLambdaRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageLambda(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageLambdaResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageLogs**
> UsageLogsResponse getUsageLogs()

Get hourly usage for logs.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageLogsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageLogs(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageLogsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageLogsByIndex**
> UsageLogsByIndexResponse getUsageLogsByIndex()

Get hourly usage for logs by index.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageLogsByIndexRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
  // Array<string> | Comma-separated list of log index names. (optional)
  indexName: [
    "index_name_example",
  ],
};

apiInstance.getUsageLogsByIndex(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined
 **indexName** | **Array&lt;string&gt;** | Comma-separated list of log index names. | (optional) defaults to undefined


### Return type

**UsageLogsByIndexResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageLogsByRetention**
> UsageLogsByRetentionResponse getUsageLogsByRetention()

Get hourly usage for indexed logs by retention period.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageLogsByRetentionRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageLogsByRetention(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageLogsByRetentionResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageNetworkFlows**
> UsageNetworkFlowsResponse getUsageNetworkFlows()

Get hourly usage for network flows.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageNetworkFlowsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageNetworkFlows(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageNetworkFlowsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageNetworkHosts**
> UsageNetworkHostsResponse getUsageNetworkHosts()

Get hourly usage for network hosts.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageNetworkHostsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageNetworkHosts(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageNetworkHostsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageProfiling**
> UsageProfilingResponse getUsageProfiling()

Get hourly usage for profiled hosts.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageProfilingRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageProfiling(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageProfilingResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageRumSessions**
> UsageRumSessionsResponse getUsageRumSessions()

Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageRumSessionsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
  // string | RUM type: `[browser, mobile]`. Defaults to `browser`. (optional)
  type: "type_example",
};

apiInstance.getUsageRumSessions(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined
 **type** | [**string**] | RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;. | (optional) defaults to undefined


### Return type

**UsageRumSessionsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageSNMP**
> UsageSNMPResponse getUsageSNMP()

Get hourly usage for SNMP devices.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageSNMPRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: `[YYYY-MM-DDThh]` for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageSNMP(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageSNMPResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageSummary**
> UsageSummaryResponse getUsageSummary()

Get usage across your multi-org account. You must have the multi-org feature enabled.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageSummaryRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage beginning in this month. Maximum of 15 months ago.
  startMonth: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to month: `[YYYY-MM]` for usage ending this month. (optional)
  endMonth: new Date('1970-01-01T00:00:00.00Z'),
  // boolean | Include usage summaries for each sub-org. (optional)
  includeOrgDetails: true,
};

apiInstance.getUsageSummary(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startMonth** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago. | defaults to undefined
 **endMonth** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month. | (optional) defaults to undefined
 **includeOrgDetails** | [**boolean**] | Include usage summaries for each sub-org. | (optional) defaults to undefined


### Return type

**UsageSummaryResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageSynthetics**
> UsageSyntheticsResponse getUsageSynthetics()

Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageSyntheticsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageSynthetics(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageSyntheticsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageSyntheticsAPI**
> UsageSyntheticsAPIResponse getUsageSyntheticsAPI()

Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageSyntheticsAPIRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageSyntheticsAPI(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageSyntheticsAPIResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageSyntheticsBrowser**
> UsageSyntheticsBrowserResponse getUsageSyntheticsBrowser()

Get hourly usage for synthetics browser checks.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageSyntheticsBrowserRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageSyntheticsBrowser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageSyntheticsBrowserResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageTimeseries**
> UsageTimeseriesResponse getUsageTimeseries()

Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageTimeseriesRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageTimeseries(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageTimeseriesResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageTopAvgMetrics**
> UsageTopAvgMetricsResponse getUsageTopAvgMetrics()

Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageTopAvgMetricsRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both) (optional)
  month: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both) (optional)
  day: new Date('1970-01-01T00:00:00.00Z'),
  // Array<string> | Comma-separated list of metric names. (optional)
  names: [
    "names_example",
  ],
  // number | Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified. (optional)
  limit: 500,
  // string | List following results with a next_record_id provided in the previous query. (optional)
  nextRecordId: "next_record_id_example",
};

apiInstance.getUsageTopAvgMetrics(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **month** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both) | (optional) defaults to undefined
 **day** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both) | (optional) defaults to undefined
 **names** | **Array&lt;string&gt;** | Comma-separated list of metric names. | (optional) defaults to undefined
 **limit** | [**number**] | Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified. | (optional) defaults to 500
 **nextRecordId** | [**string**] | List following results with a next_record_id provided in the previous query. | (optional) defaults to undefined


### Return type

**UsageTopAvgMetricsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUsageTrace**
> UsageTraceResponse getUsageTrace()

Get hourly usage for trace search.  **Note** This endpoint has been renamed to `/api/v1/usage/indexed-spans`.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

let params:v1.UsageMeteringApiGetUsageTraceRequest = {
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
  startHr: new Date('1970-01-01T00:00:00.00Z'),
  // Date | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. (optional)
  endHr: new Date('1970-01-01T00:00:00.00Z'),
};

apiInstance.getUsageTrace(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour. | defaults to undefined
 **endHr** | [**Date**] | Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour. | (optional) defaults to undefined


### Return type

**UsageTraceResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;datetime-format=rfc3339


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - User is not authorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

