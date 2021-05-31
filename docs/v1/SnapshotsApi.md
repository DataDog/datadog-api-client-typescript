# datadog-api-client.v1.SnapshotsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGraphSnapshot**](SnapshotsApi.md#getGraphSnapshot) | **GET** /api/v1/graph/snapshot | Take graph snapshots


## **getGraphSnapshot**
> GraphSnapshot getGraphSnapshot()

Take graph snapshots. **Note**: When a snapshot is created, there is some delay before it is available.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SnapshotsApi(configuration);

let params:v1.SnapshotsApiGetGraphSnapshotRequest = {
  // number | The POSIX timestamp of the start of the query.
  start: 1,
  // number | The POSIX timestamp of the end of the query.
  end: 1,
  // string | The metric query. (optional)
  metricQuery: "metric_query_example",
  // string | A query that adds event bands to the graph. (optional)
  eventQuery: "event_query_example",
  // string | A JSON document defining the graph. `graph_def` can be used instead of `metric_query`. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded. (optional)
  graphDef: "graph_def_example",
  // string | A title for the graph. If no title is specified, the graph does not have a title. (optional)
  title: "title_example",
};

apiInstance.getGraphSnapshot(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | The POSIX timestamp of the start of the query. | defaults to undefined
 **end** | [**number**] | The POSIX timestamp of the end of the query. | defaults to undefined
 **metricQuery** | [**string**] | The metric query. | (optional) defaults to undefined
 **eventQuery** | [**string**] | A query that adds event bands to the graph. | (optional) defaults to undefined
 **graphDef** | [**string**] | A JSON document defining the graph. &#x60;graph_def&#x60; can be used instead of &#x60;metric_query&#x60;. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded. | (optional) defaults to undefined
 **title** | [**string**] | A title for the graph. If no title is specified, the graph does not have a title. | (optional) defaults to undefined


### Return type

**GraphSnapshot**

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

