# datadog-api-client.v1.LogsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listLogs**](LogsApi.md#listLogs) | **POST** /api/v1/logs-queries/list | Search logs
[**submitLog**](LogsApi.md#submitLog) | **POST** /v1/input | Send logs


## **listLogs**
> LogsListResponse listLogs(body)

List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

let params:v1.LogsApiListLogsRequest = {
  // LogsListRequest | Logs filter
  body: {
    index: "retention-3,retention-15",
    limit: 1,
    query: "service:web* AND @http.status_code:[200 TO 299]",
    sort: "asc",
    startAt: "startAt_example",
    time: {
      from: new Date('2020-02-02T02:02:02Z'),
      timezone: "timezone_example",
      to: new Date('2020-02-02T20:20:20Z'),
    },
  },
};

apiInstance.listLogs(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsListRequest**| Logs filter |


### Return type

**LogsListResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **submitLog**
> any submitLog(body)

Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 200: OK - 400: Bad request (likely an issue in the payload formatting) - 403: Permission issue (likely using an invalid API Key) - 413: Payload too large (batch is above 5MB uncompressed) - 5xx: Internal error, request should be retried after some time

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

let params:v1.LogsApiSubmitLogRequest = {
  // Array<HTTPLogItem> | Log to send (JSON format).
  body: [
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

apiInstance.submitLog(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Array<HTTPLogItem>**| Log to send (JSON format). |
 **contentEncoding** | **ContentEncoding** | HTTP header used to compress the media-type. | (optional) defaults to undefined
 **ddtags** | [**string**] | Log tags can be passed as query parameters with &#x60;text/plain&#x60; content type. | (optional) defaults to undefined


### Return type

**any**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/logplex-1, text/plain
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Response from server (always 200 empty JSON). |  -  |
**400** | unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

