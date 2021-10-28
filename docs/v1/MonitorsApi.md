# datadog-api-client.v1.MonitorsApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                            | HTTP request                            | Description                       |
| ----------------------------------------------------------------- | --------------------------------------- | --------------------------------- |
| [**checkCanDeleteMonitor**](MonitorsApi.md#checkCanDeleteMonitor) | **GET** /api/v1/monitor/can_delete      | Check if a monitor can be deleted |
| [**createMonitor**](MonitorsApi.md#createMonitor)                 | **POST** /api/v1/monitor                | Create a monitor                  |
| [**deleteMonitor**](MonitorsApi.md#deleteMonitor)                 | **DELETE** /api/v1/monitor/{monitor_id} | Delete a monitor                  |
| [**getMonitor**](MonitorsApi.md#getMonitor)                       | **GET** /api/v1/monitor/{monitor_id}    | Get a monitor&#39;s details       |
| [**listMonitors**](MonitorsApi.md#listMonitors)                   | **GET** /api/v1/monitor                 | Get all monitor details           |
| [**searchMonitorGroups**](MonitorsApi.md#searchMonitorGroups)     | **GET** /api/v1/monitor/groups/search   | Monitors group search             |
| [**searchMonitors**](MonitorsApi.md#searchMonitors)               | **GET** /api/v1/monitor/search          | Monitors search                   |
| [**updateMonitor**](MonitorsApi.md#updateMonitor)                 | **PUT** /api/v1/monitor/{monitor_id}    | Edit a monitor                    |
| [**validateMonitor**](MonitorsApi.md#validateMonitor)             | **POST** /api/v1/monitor/validate       | Validate a monitor                |

## **checkCanDeleteMonitor**

> CheckCanDeleteMonitorResponse checkCanDeleteMonitor()

Check if the given monitors can be deleted.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiCheckCanDeleteMonitorRequest = {
  // Array<number> | The IDs of the monitor to check.
  monitorIds: [1],
};

apiInstance
  .checkCanDeleteMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type                    | Description                      | Notes                 |
| -------------- | ----------------------- | -------------------------------- | --------------------- |
| **monitorIds** | **Array&lt;number&gt;** | The IDs of the monitor to check. | defaults to undefined |

### Return type

**CheckCanDeleteMonitorResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | OK                      | -                |
| **400**     | Bad Request             | -                |
| **403**     | Forbidden               | -                |
| **409**     | Deletion conflict error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createMonitor**

> Monitor createMonitor(body)

Create a monitor using the specified options.

#### Monitor Types

The type of monitor chosen from:

- anomaly: `query alert`
- APM: `query alert` or `trace-analytics alert`
- composite: `composite`
- custom: `service check`
- event: `event alert`
- forecast: `query alert`
- host: `service check`
- integration: `query alert` or `service check`
- live process: `process alert`
- logs: `log alert`
- metric: `metric alert`
- network: `service check`
- outlier: `query alert`
- process: `service check`
- rum: `rum alert`
- SLO: `slo alert`
- watchdog: `event alert`
- event-v2: `event-v2 alert`
- audit: `audit alert`

#### Query Types

**Metric Alert Query**

Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`

- `time_aggr`: avg, sum, max, min, change, or pct_change
- `time_window`: `last_#m` (with `#` between 1 and 10080 depending on the monitor type) or `last_#h`(with `#` between 1 and 168 depending on the monitor type) or `last_1d`, or `last_1w`
- `space_aggr`: avg, sum, min, or max
- `tags`: one or more tags (comma-separated), or \*
- `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert)
- `operator`: <, <=, >, >=, ==, or !=
- `#`: an integer or decimal number used to set the threshold

If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:

- `change_aggr` change, pct_change
- `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/create/types/#define-the-conditions)
- `time_window` last\_#m (between 1 and 2880 depending on the monitor type), last\_#h (between 1 and 48 depending on the monitor type), or last\_#d (1 or 2)
- `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago

Use this to create an outlier monitor using the following query:
`avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`

**Service Check Query**

Example: `"check".over(tags).last(count).by(group).count_by_status()`

- **`check`** name of the check, e.g. `datadog.agent.up`
- **`tags`** one or more quoted tags (comma-separated), or "\*". e.g.: `.over("env:prod", "role:db")`; **`over`** cannot be blank.
- **`count`** must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100.
  For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be at least 3.
- **`group`** must be specified for check monitors. Per-check grouping is already explicitly known for some service checks.
  For example, Postgres integration monitors are tagged by `db`, `host`, and `port`, and Network monitors by `host`, `instance`, and `url`. See [Service Checks](https://docs.datadoghq.com/api/latest/service-checks/) documentation for more information.

**Event Alert Query**

Example: `events('sources:nagios status:error,warning priority:normal tags: "string query"').rollup("count").last("1h")"`

- **`event`**, the event query string:
- **`string_query`** free text query to match against event title and text.
- **`sources`** event sources (comma-separated).
- **`status`** event statuses (comma-separated). Valid options: error, warn, and info.
- **`priority`** event priorities (comma-separated). Valid options: low, normal, all.
- **`host`** event reporting host (comma-separated).
- **`tags`** event tags (comma-separated).
- **`excluded_tags`** excluded event tags (comma-separated).
- **`rollup`** the stats roll-up method. `count` is the only supported method now.
- **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.

**NOTE** Only available on US1 and EU.

**Event V2 Alert Query**

Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`

- **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
- **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`.
- **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
- **`time_window`** #m (between 1 and 2880), #h (between 1 and 48).
- **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`.
- **`#`** an integer or decimal number used to set the threshold.

**NOTE** Only available on US1-FED, US3, US5 and in closed beta on EU and US1.

**Process Alert Query**

Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`

- **`search`** free text search string for querying processes.
  Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page.
- **`tags`** one or more tags (comma-separated)
- **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d
- **`operator`** <, <=, >, >=, ==, or !=
- **`#`** an integer or decimal number used to set the threshold

**Logs Alert Query**

Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`

- **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
- **`index_name`** For multi-index organizations, the log index in which the request is performed.
- **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`.
- **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
- **`time_window`** #m (between 1 and 2880), #h (between 1 and 48).
- **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`.
- **`#`** an integer or decimal number used to set the threshold.

**Composite Query**

Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors

- **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert.
- **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor.
  Email notifications can be sent to specific users by using the same '@username' notation as events.
- **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor.
  When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags.
  It is only available via the API and isn't visible or editable in the Datadog UI.

**SLO Alert Query**

Example: `error_budget("slo_id").over("time_window") operator #`

- **`slo_id`**: The alphanumeric SLO ID of the SLO you are configuring the alert for.
- **`time_window`**: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`.
- **`operator`**: `>=` or `>`

**Audit Alert Query**

Example: `audits(query).rollup(rollup_method[, measure]).last(time_window) operator #`

- **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/).
- **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`.
- **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use.
- **`time_window`** #m (between 1 and 2880), #h (between 1 and 48).
- **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`.
- **`#`** an integer or decimal number used to set the threshold.

**NOTE** Only available on US1-FED and in closed beta on US1, EU, US3, and US5.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiCreateMonitorRequest = {
  // Monitor | Create a monitor request body.
  body: {
    message: "message_example",
    name: "name_example",
    options: {
      enableLogsSample: true,
      escalationMessage: "none",
      evaluationDelay: 1,
      groupbySimpleMonitor: true,
      includeTags: true,
      locked: true,
      minFailureDuration: 0,
      minLocationFailed: 1,
      newGroupDelay: 1,
      newHostDelay: 300,
      noDataTimeframe: 1,
      notifyAudit: false,
      notifyNoData: false,
      renotifyInterval: 1,
      renotifyOccurrences: 1,
      renotifyStatuses: ["alert"],
      requireFullWindow: true,
      silenced: {
        key: 1,
      },
      syntheticsCheckId: "syntheticsCheckId_example",
      thresholdWindows: {
        recoveryWindow: "recoveryWindow_example",
        triggerWindow: "triggerWindow_example",
      },
      thresholds: {
        critical: 3.14,
        criticalRecovery: 3.14,
        ok: 3.14,
        unknown: 3.14,
        warning: 3.14,
        warningRecovery: 3.14,
      },
      timeoutH: 1,
    },
    priority: 1,
    query: "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100",
    restrictedRoles: ["restrictedRoles_example"],
    tags: ["tags_example"],
    type: "metric alert",
  },
};

apiInstance
  .createMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type        | Description                    | Notes |
| -------- | ----------- | ------------------------------ | ----- |
| **body** | **Monitor** | Create a monitor request body. |

### Return type

**Monitor**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |
| **400**     | Bad Request | -                |
| **403**     | Forbidden   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteMonitor**

> DeletedMonitor deleteMonitor()

Delete the specified monitor

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiDeleteMonitorRequest = {
  // number | The ID of the monitor.
  monitorId: 1,
  // string | Delete the monitor even if it's referenced by other resources (e.g. SLO, composite monitor). (optional)
  force: "false",
};

apiInstance
  .deleteMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name          | Type         | Description                                                                                      | Notes                            |
| ------------- | ------------ | ------------------------------------------------------------------------------------------------ | -------------------------------- |
| **monitorId** | [**number**] | The ID of the monitor.                                                                           | defaults to undefined            |
| **force**     | [**string**] | Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor). | (optional) defaults to undefined |

### Return type

**DeletedMonitor**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **401**     | Authentication error | -                |
| **403**     | Forbidden            | -                |
| **404**     | Item not found error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getMonitor**

> Monitor getMonitor()

Get details about the specified monitor from your organization.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiGetMonitorRequest = {
  // number | The ID of the monitor
  monitorId: 1,
  // string | When specified, shows additional information about the group states. Choose one or more from `all`, `alert`, `warn`, and `no data`. (optional)
  groupStates: "group_states_example",
};

apiInstance
  .getMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type         | Description                                                                                                                                                                 | Notes                            |
| --------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **monitorId**   | [**number**] | The ID of the monitor                                                                                                                                                       | defaults to undefined            |
| **groupStates** | [**string**] | When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;. | (optional) defaults to undefined |

### Return type

**Monitor**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | OK                      | -                |
| **400**     | Bad Request             | -                |
| **403**     | Authentication error    | -                |
| **404**     | Monitor Not Found error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listMonitors**

> Array<Monitor> listMonitors()

Get details about the specified monitor from your organization.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiListMonitorsRequest = {
  // string | When specified, shows additional information about the group states. Choose one or more from `all`, `alert`, `warn`, and `no data`. (optional)
  groupStates: "alert",
  // string | A string to filter monitors by name. (optional)
  name: "name_example",
  // string | A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, `host:host0`. (optional)
  tags: "host:host0",
  // string | A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, `service:my-app`. (optional)
  monitorTags: "service:my-app",
  // boolean | If this argument is set to true, then the returned data includes all current active downtimes for each monitor. (optional)
  withDowntimes: true,
  // number | Monitor ID offset. (optional)
  idOffset: 1,
  // number | The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination. (optional)
  page: 0,
  // number | The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a `page_size` limit. However, if page is specified and `page_size` is not, the argument defaults to 100. (optional)
  pageSize: 20,
};

apiInstance
  .listMonitors(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name              | Type          | Description                                                                                                                                                                                                                                                      | Notes                            |
| ----------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **groupStates**   | [**string**]  | When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.                                                                                      | (optional) defaults to undefined |
| **name**          | [**string**]  | A string to filter monitors by name.                                                                                                                                                                                                                             | (optional) defaults to undefined |
| **tags**          | [**string**]  | A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, &#x60;host:host0&#x60;.                                                                                                                | (optional) defaults to undefined |
| **monitorTags**   | [**string**]  | A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, &#x60;service:my-app&#x60;.                  | (optional) defaults to undefined |
| **withDowntimes** | [**boolean**] | If this argument is set to true, then the returned data includes all current active downtimes for each monitor.                                                                                                                                                  | (optional) defaults to undefined |
| **idOffset**      | [**number**]  | Monitor ID offset.                                                                                                                                                                                                                                               | (optional) defaults to undefined |
| **page**          | [**number**]  | The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.                                                                                                                                       | (optional) defaults to undefined |
| **pageSize**      | [**number**]  | The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a &#x60;page_size&#x60; limit. However, if page is specified and &#x60;page_size&#x60; is not, the argument defaults to 100. | (optional) defaults to undefined |

### Return type

**Array<Monitor>**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |
| **400**     | Bad Request | -                |
| **403**     | Forbidden   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **searchMonitorGroups**

> MonitorGroupSearchResponse searchMonitorGroups()

Search and filter your monitor groups details.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiSearchMonitorGroupsRequest = {
  // string | After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more.  The query can contain any number of space-separated monitor attributes, for instance `query=\"type:metric status:alert\"`.  [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage/#find-the-monitors (optional)
  query: "query_example",
  // number | Page to start paginating from. (optional)
  page: 0,
  // number | Number of monitors to return per page. (optional)
  perPage: 30,
  // string | String for sort order, composed of field and sort order separate by a comma, e.g. `name,asc`. Supported sort directions: `asc`, `desc`. Supported fields:  * `name` * `status` * `tags` (optional)
  sort: "sort_example",
};

apiInstance
  .searchMonitorGroups(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Notes                            |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| **query**   | [**string**] | After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more. The query can contain any number of space-separated monitor attributes, for instance &#x60;query&#x3D;\&quot;type:metric status:alert\&quot;&#x60;. [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage/#find-the-monitors | (optional) defaults to undefined |
| **page**    | [**number**] | Page to start paginating from.                                                                                                                                                                                                                                                                                                                                                                                                                                           | (optional) defaults to 0         |
| **perPage** | [**number**] | Number of monitors to return per page.                                                                                                                                                                                                                                                                                                                                                                                                                                   | (optional) defaults to 30        |
| **sort**    | [**string**] | String for sort order, composed of field and sort order separate by a comma, e.g. &#x60;name,asc&#x60;. Supported sort directions: &#x60;asc&#x60;, &#x60;desc&#x60;. Supported fields: _ &#x60;name&#x60; _ &#x60;status&#x60; \* &#x60;tags&#x60;                                                                                                                                                                                                                      | (optional) defaults to undefined |

### Return type

**MonitorGroupSearchResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |
| **400**     | Bad Request | -                |
| **403**     | Forbidden   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **searchMonitors**

> MonitorSearchResponse searchMonitors()

Search and filter your monitors details.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiSearchMonitorsRequest = {
  // string | After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more.  The query can contain any number of space-separated monitor attributes, for instance `query=\"type:metric status:alert\"`.  [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage/#find-the-monitors (optional)
  query: "query_example",
  // number | Page to start paginating from. (optional)
  page: 0,
  // number | Number of monitors to return per page. (optional)
  perPage: 30,
  // string | String for sort order, composed of field and sort order separate by a comma, e.g. `name,asc`. Supported sort directions: `asc`, `desc`. Supported fields:  * `name` * `status` * `tags` (optional)
  sort: "sort_example",
};

apiInstance
  .searchMonitors(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name        | Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Notes                            |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- |
| **query**   | [**string**] | After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more. The query can contain any number of space-separated monitor attributes, for instance &#x60;query&#x3D;\&quot;type:metric status:alert\&quot;&#x60;. [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage/#find-the-monitors | (optional) defaults to undefined |
| **page**    | [**number**] | Page to start paginating from.                                                                                                                                                                                                                                                                                                                                                                                                                                           | (optional) defaults to 0         |
| **perPage** | [**number**] | Number of monitors to return per page.                                                                                                                                                                                                                                                                                                                                                                                                                                   | (optional) defaults to 30        |
| **sort**    | [**string**] | String for sort order, composed of field and sort order separate by a comma, e.g. &#x60;name,asc&#x60;. Supported sort directions: &#x60;asc&#x60;, &#x60;desc&#x60;. Supported fields: _ &#x60;name&#x60; _ &#x60;status&#x60; \* &#x60;tags&#x60;                                                                                                                                                                                                                      | (optional) defaults to undefined |

### Return type

**MonitorSearchResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |
| **400**     | Bad Request | -                |
| **403**     | Forbidden   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateMonitor**

> Monitor updateMonitor(body)

Edit the specified monitor.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiUpdateMonitorRequest = {
  // number | The ID of the monitor.
  monitorId: 1,
  // MonitorUpdateRequest | Edit a monitor request body.
  body: {
    message: "message_example",
    name: "name_example",
    options: {
      enableLogsSample: true,
      escalationMessage: "none",
      evaluationDelay: 1,
      groupbySimpleMonitor: true,
      includeTags: true,
      locked: true,
      minFailureDuration: 0,
      minLocationFailed: 1,
      newGroupDelay: 1,
      newHostDelay: 300,
      noDataTimeframe: 1,
      notifyAudit: false,
      notifyNoData: false,
      renotifyInterval: 1,
      renotifyOccurrences: 1,
      renotifyStatuses: ["alert"],
      requireFullWindow: true,
      silenced: {
        key: 1,
      },
      syntheticsCheckId: "syntheticsCheckId_example",
      thresholdWindows: {
        recoveryWindow: "recoveryWindow_example",
        triggerWindow: "triggerWindow_example",
      },
      thresholds: {
        critical: 3.14,
        criticalRecovery: 3.14,
        ok: 3.14,
        unknown: 3.14,
        warning: 3.14,
        warningRecovery: 3.14,
      },
      timeoutH: 1,
    },
    priority: 1,
    query: "query_example",
    restrictedRoles: ["restrictedRoles_example"],
    tags: ["tags_example"],
    type: "metric alert",
  },
};

apiInstance
  .updateMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name          | Type                     | Description                  | Notes                 |
| ------------- | ------------------------ | ---------------------------- | --------------------- |
| **body**      | **MonitorUpdateRequest** | Edit a monitor request body. |
| **monitorId** | [**number**]             | The ID of the monitor.       | defaults to undefined |

### Return type

**Monitor**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | OK                      | -                |
| **400**     | Bad Request             | -                |
| **401**     | Authentication error    | -                |
| **403**     | Forbidden               | -                |
| **404**     | Monitor Not Found error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **validateMonitor**

> any validateMonitor(body)

Validate the monitor provided in the request.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiValidateMonitorRequest = {
  // Monitor | Monitor request object
  body: {
    message: "message_example",
    name: "name_example",
    options: {
      enableLogsSample: true,
      escalationMessage: "none",
      evaluationDelay: 1,
      groupbySimpleMonitor: true,
      includeTags: true,
      locked: true,
      minFailureDuration: 0,
      minLocationFailed: 1,
      newGroupDelay: 1,
      newHostDelay: 300,
      noDataTimeframe: 1,
      notifyAudit: false,
      notifyNoData: false,
      renotifyInterval: 1,
      renotifyOccurrences: 1,
      renotifyStatuses: ["alert"],
      requireFullWindow: true,
      silenced: {
        key: 1,
      },
      syntheticsCheckId: "syntheticsCheckId_example",
      thresholdWindows: {
        recoveryWindow: "recoveryWindow_example",
        triggerWindow: "triggerWindow_example",
      },
      thresholds: {
        critical: 3.14,
        criticalRecovery: 3.14,
        ok: 3.14,
        unknown: 3.14,
        warning: 3.14,
        warningRecovery: 3.14,
      },
      timeoutH: 1,
    },
    priority: 1,
    query: "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100",
    restrictedRoles: ["restrictedRoles_example"],
    tags: ["tags_example"],
    type: "metric alert",
  },
};

apiInstance
  .validateMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type        | Description            | Notes |
| -------- | ----------- | ---------------------- | ----- |
| **body** | **Monitor** | Monitor request object |

### Return type

**any**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description  | Response headers |
| ----------- | ------------ | ---------------- |
| **200**     | OK           | -                |
| **400**     | Invalid JSON | -                |
| **403**     | Forbidden    | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
