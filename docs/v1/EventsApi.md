# datadog-api-client.v1.EventsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEvent**](EventsApi.md#createEvent) | **POST** /api/v1/events | Post an event
[**getEvent**](EventsApi.md#getEvent) | **GET** /api/v1/events/{event_id} | Get an event
[**listEvents**](EventsApi.md#listEvents) | **GET** /api/v1/events | Query the event stream


## **createEvent**
> EventCreateResponse createEvent(body)

This endpoint allows you to post events to the stream. Tag them, set priority and event aggregate them with other events.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

let params:v1.EventsApiCreateEventRequest = {
  // EventCreateRequest | Event request object
  body: {
    aggregationKey: "aggregationKey_example",
    alertType: "info",
    dateHappened: 1,
    deviceName: "deviceName_example",
    host: "host_example",
    priority: "normal",
    relatedEventId: 1,
    sourceTypeName: "sourceTypeName_example",
    tags: ["environment:test"],
    text: "Oh boy!",
    title: "Did you hear the news today?",
  },
};

apiInstance.createEvent(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **EventCreateRequest**| Event request object |


### Return type

**EventCreateResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | OK |  -  |
**400** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getEvent**
> EventResponse getEvent()

This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

let params:v1.EventsApiGetEventRequest = {
  // number | The ID of the event.
  eventId: 1,
};

apiInstance.getEvent(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | [**number**] | The ID of the event. | defaults to undefined


### Return type

**EventResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Authentication Error |  -  |
**404** | Item Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listEvents**
> EventListResponse listEvents()

The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results. You can also use the page parameter to specify which set of `1000` results to return.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

let params:v1.EventsApiListEventsRequest = {
  // number | POSIX timestamp.
  start: 1,
  // number | POSIX timestamp.
  end: 1,
  // EventPriority | Priority of your events, either `low` or `normal`. (optional)
  priority: "normal",
  // string | A comma separated string of sources. (optional)
  sources: "sources_example",
  // string | A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. (optional)
  tags: "host:host0",
  // boolean | Set unaggregated to `true` to return all events within the specified [`start`,`end`] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won't be available in the output. Aggregated events with `is_aggregate=true` in the response will still be returned unless exclude_aggregate is set to `true.` (optional)
  unaggregated: true,
  // boolean | Set `exclude_aggregate` to `true` to only return unaggregated events where `is_aggregate=false` in the response. If the `exclude_aggregate` parameter is set to `true`, then the unaggregated parameter is ignored and will be `true` by default. (optional)
  excludeAggregate: true,
  // number | By default 1000 results are returned per request. Set page to the number of the page to return with `0` being the first page. The page parameter can only be used when either unaggregated or exclude_aggregate is set to `true.` (optional)
  page: 1,
};

apiInstance.listEvents(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | [**number**] | POSIX timestamp. | defaults to undefined
 **end** | [**number**] | POSIX timestamp. | defaults to undefined
 **priority** | **EventPriority** | Priority of your events, either &#x60;low&#x60; or &#x60;normal&#x60;. | (optional) defaults to undefined
 **sources** | [**string**] | A comma separated string of sources. | (optional) defaults to undefined
 **tags** | [**string**] | A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. | (optional) defaults to undefined
 **unaggregated** | [**boolean**] | Set unaggregated to &#x60;true&#x60; to return all events within the specified [&#x60;start&#x60;,&#x60;end&#x60;] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won&#39;t be available in the output. Aggregated events with &#x60;is_aggregate&#x3D;true&#x60; in the response will still be returned unless exclude_aggregate is set to &#x60;true.&#x60; | (optional) defaults to undefined
 **excludeAggregate** | [**boolean**] | Set &#x60;exclude_aggregate&#x60; to &#x60;true&#x60; to only return unaggregated events where &#x60;is_aggregate&#x3D;false&#x60; in the response. If the &#x60;exclude_aggregate&#x60; parameter is set to &#x60;true&#x60;, then the unaggregated parameter is ignored and will be &#x60;true&#x60; by default. | (optional) defaults to undefined
 **page** | [**number**] | By default 1000 results are returned per request. Set page to the number of the page to return with &#x60;0&#x60; being the first page. The page parameter can only be used when either unaggregated or exclude_aggregate is set to &#x60;true.&#x60; | (optional) defaults to undefined


### Return type

**EventListResponse**

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
**403** | Authentication Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

