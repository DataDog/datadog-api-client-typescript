# datadog-api-client.v2.LogsApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                        | HTTP request                              | Description        |
| --------------------------------------------- | ----------------------------------------- | ------------------ |
| [**aggregateLogs**](LogsApi.md#aggregateLogs) | **POST** /api/v2/logs/analytics/aggregate | Aggregate events   |
| [**listLogs**](LogsApi.md#listLogs)           | **POST** /api/v2/logs/events/search       | Search logs        |
| [**listLogsGet**](LogsApi.md#listLogsGet)     | **GET** /api/v2/logs/events               | Get a list of logs |
| [**submitLog**](LogsApi.md#submitLog)         | **POST** /api/v2/logs                     | Send logs          |

## **aggregateLogs**

> LogsAggregateResponse aggregateLogs(body)

The API endpoint to aggregate events into buckets and compute metrics and timeseries.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params: v2.LogsApiAggregateLogsRequest = {
  // LogsAggregateRequest
  body: {
    compute: [
      {
        aggregation: "pc90",
        interval: "5m",
        metric: "@duration",
        type: "total",
      },
    ],
    filter: {
      from: "now-15m",
      indexes: ["main", "web"],
      query: "service:web* AND @http.status_code:[200 TO 299]",
      to: "now",
    },
    groupBy: [
      {
        facet: "host",
        histogram: {
          interval: 10,
          max: 100,
          min: 50,
        },
        limit: 10,
        missing: "string_example",
        sort: {
          aggregation: "pc90",
          metric: "@duration",
          order: "asc",
          type: "alphabetical",
        },
        total: true,
      },
    ],
    options: {
      timeOffset: 1,
      timezone: "GMT",
    },
    page: {
      cursor:
        "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
    },
  },
};

apiInstance
  .aggregateLogs(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                     | Description | Notes |
| -------- | ------------------------ | ----------- | ----- |
| **body** | **LogsAggregateRequest** |             |

### Return type

**LogsAggregateResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Not Authorized    | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listLogs**

> LogsListResponse listLogs()

List endpoint returns logs that match a log search query.
[Results are paginated][1].

Use this endpoint to build complex logs filtering and search.

**If you are considering archiving logs for your organization,
consider use of the Datadog archive capabilities instead of the log list API.
See [Datadog Logs Archive documentation][2].**

[1]: /logs/guide/collect-multiple-logs-with-pagination
[2]: https://docs.datadoghq.com/logs/archives

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params: v2.LogsApiListLogsRequest = {
  // LogsListRequest (optional)
  body: {
    filter: {
      from: "now-15m",
      indexes: ["main", "web"],
      query: "service:web* AND @http.status_code:[200 TO 299]",
      to: "now",
    },
    options: {
      timeOffset: 1,
      timezone: "GMT",
    },
    page: {
      cursor:
        "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
      limit: 25,
    },
    sort: "timestamp",
  },
};

apiInstance
  .listLogs(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                | Description | Notes |
| -------- | ------------------- | ----------- | ----- |
| **body** | **LogsListRequest** |             |

### Return type

**LogsListResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Not Authorized    | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listLogsGet**

> LogsListResponse listLogsGet()

List endpoint returns logs that match a log search query.
[Results are paginated][1].

Use this endpoint to see your latest logs.

**If you are considering archiving logs for your organization,
consider use of the Datadog archive capabilities instead of the log list API.
See [Datadog Logs Archive documentation][2].**

[1]: /logs/guide/collect-multiple-logs-with-pagination
[2]: https://docs.datadoghq.com/logs/archives

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params: v2.LogsApiListLogsGetRequest = {
  // string | Search query following logs syntax. (optional)
  filterQuery: "@datacenter:us @role:db",
  // string | For customers with multiple indexes, the indexes to search Defaults to '*' which means all indexes (optional)
  filterIndex: "main",
  // Date | Minimum timestamp for requested logs. (optional)
  filterFrom: new Date("2019-01-02T09:42:36.320Z"),
  // Date | Maximum timestamp for requested logs. (optional)
  filterTo: new Date("2019-01-03T09:42:36.320Z"),
  // LogsSort | Order of logs in results. (optional)
  sort: "timestamp",
  // string | List following results with a cursor provided in the previous query. (optional)
  pageCursor:
    "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
  // number | Maximum number of logs in the response. (optional)
  pageLimit: 25,
};

apiInstance
  .listLogsGet(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description                                                                                                 | Notes                            |
| --------------- | ------------ | ----------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **filterQuery** | [**string**] | Search query following logs syntax.                                                                         | (optional) defaults to undefined |
| **filterIndex** | [**string**] | For customers with multiple indexes, the indexes to search Defaults to &#39;\*&#39; which means all indexes | (optional) defaults to undefined |
| **filterFrom**  | [**Date**]   | Minimum timestamp for requested logs.                                                                       | (optional) defaults to undefined |
| **filterTo**    | [**Date**]   | Maximum timestamp for requested logs.                                                                       | (optional) defaults to undefined |
| **sort**        | **LogsSort** | Order of logs in results.                                                                                   | (optional) defaults to undefined |
| **pageCursor**  | [**string**] | List following results with a cursor provided in the previous query.                                        | (optional) defaults to undefined |
| **pageLimit**   | [**number**] | Maximum number of logs in the response.                                                                     | (optional) defaults to 10        |

### Return type

**LogsListResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Not Authorized    | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **submitLog**

> any submitLog(body)

Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:

- Maximum content size per payload (uncompressed): 5MB
- Maximum size for a single log: 1MB
- Maximum array size if sending multiple logs in an array: 1000 entries

Any log exceeding 1MB is accepted and truncated by Datadog:

- For a single log request, the API truncates the log at 1MB and returns a 2xx.
- For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.

Datadog recommends sending your logs compressed.
Add the `Content-Encoding: gzip` header to the request when sending compressed logs.

The status codes answered by the HTTP API are:

- 202: Accepted: the request has been accepted for processing
- 400: Bad request (likely an issue in the payload formatting)
- 401: Unauthorized (likely a missing API Key)
- 403: Permission issue (likely using an invalid API Key)
- 408: Request Timeout, request should be retried after some time
- 413: Payload too large (batch is above 5MB uncompressed)
- 429: Too Many Requests, request should be retried after some time
- 500: Internal Server Error, the server encountered an unexpected condition that prevented it from fulfilling the request, request should be retried after some time
- 503: Service Unavailable, the server is not ready to handle the request probably because it is overloaded, request should be retried after some time

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params: v2.LogsApiSubmitLogRequest = {
  // Array<HTTPLogItem> | Log to send (JSON format).
  body: [
    {
      ddsource: "nginx",
      ddtags: "env:staging,version:5.1",
      hostname: "i-012345678",
      message: "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World",
      service: "payment",
    },
    {
      ddsource: "nginx",
      ddtags: "env:staging,version:5.1",
      hostname: "i-012345678",
      message: "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World",
      service: "payment",
    },
  ],
  // ContentEncoding | HTTP header used to compress the media-type. (optional)
  contentEncoding: "gzip",
  // string | Log tags can be passed as query parameters with `text/plain` content type. (optional)
  ddtags: "env:prod,user:my-user",
};

apiInstance
  .submitLog(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                | Type                   | Description                                                                          | Notes                            |
| ------------------- | ---------------------- | ------------------------------------------------------------------------------------ | -------------------------------- |
| **body**            | **Array<HTTPLogItem>** | Log to send (JSON format).                                                           |
| **contentEncoding** | **ContentEncoding**    | HTTP header used to compress the media-type.                                         | (optional) defaults to undefined |
| **ddtags**          | [**string**]           | Log tags can be passed as query parameters with &#x60;text/plain&#x60; content type. | (optional) defaults to undefined |

### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json, application/logplex-1, text/plain
- **Accept**: application/json

### HTTP response details

| Status code | Description                                              | Response headers |
| ----------- | -------------------------------------------------------- | ---------------- |
| **202**     | Request accepted for processing (always 202 empty JSON). | -                |
| **400**     | Bad Request                                              | -                |
| **401**     | Unauthorized                                             | -                |
| **403**     | Forbidden                                                | -                |
| **408**     | Request Timeout                                          | -                |
| **413**     | Payload Too Large                                        | -                |
| **429**     | Too Many Requests                                        | -                |
| **500**     | Internal Server Error                                    | -                |
| **503**     | Service Unavailable                                      | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
