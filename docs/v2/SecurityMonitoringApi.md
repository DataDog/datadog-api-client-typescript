# datadog-api-client.v2.SecurityMonitoringApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                                                          | HTTP request                                                                               | Description                          |
| ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------ |
| [**createSecurityFilter**](SecurityMonitoringApi.md#createSecurityFilter)                       | **POST** /api/v2/security_monitoring/configuration/security_filters                        | Create a security filter             |
| [**createSecurityMonitoringRule**](SecurityMonitoringApi.md#createSecurityMonitoringRule)       | **POST** /api/v2/security_monitoring/rules                                                 | Create a detection rule              |
| [**deleteSecurityFilter**](SecurityMonitoringApi.md#deleteSecurityFilter)                       | **DELETE** /api/v2/security_monitoring/configuration/security_filters/{security_filter_id} | Delete a security filter             |
| [**deleteSecurityMonitoringRule**](SecurityMonitoringApi.md#deleteSecurityMonitoringRule)       | **DELETE** /api/v2/security_monitoring/rules/{rule_id}                                     | Delete an existing rule              |
| [**getSecurityFilter**](SecurityMonitoringApi.md#getSecurityFilter)                             | **GET** /api/v2/security_monitoring/configuration/security_filters/{security_filter_id}    | Get a security filter                |
| [**getSecurityMonitoringRule**](SecurityMonitoringApi.md#getSecurityMonitoringRule)             | **GET** /api/v2/security_monitoring/rules/{rule_id}                                        | Get a rule&#39;s details             |
| [**listSecurityFilters**](SecurityMonitoringApi.md#listSecurityFilters)                         | **GET** /api/v2/security_monitoring/configuration/security_filters                         | Get all security filters             |
| [**listSecurityMonitoringRules**](SecurityMonitoringApi.md#listSecurityMonitoringRules)         | **GET** /api/v2/security_monitoring/rules                                                  | List rules                           |
| [**listSecurityMonitoringSignals**](SecurityMonitoringApi.md#listSecurityMonitoringSignals)     | **GET** /api/v2/security_monitoring/signals                                                | Get a quick list of security signals |
| [**searchSecurityMonitoringSignals**](SecurityMonitoringApi.md#searchSecurityMonitoringSignals) | **POST** /api/v2/security_monitoring/signals/search                                        | Get a list of security signals       |
| [**updateSecurityFilter**](SecurityMonitoringApi.md#updateSecurityFilter)                       | **PATCH** /api/v2/security_monitoring/configuration/security_filters/{security_filter_id}  | Update a security filter             |
| [**updateSecurityMonitoringRule**](SecurityMonitoringApi.md#updateSecurityMonitoringRule)       | **PUT** /api/v2/security_monitoring/rules/{rule_id}                                        | Update an existing rule              |

## **createSecurityFilter**

> SecurityFilterResponse createSecurityFilter(body)

Create a security filter.

See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)
for more examples.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiCreateSecurityFilterRequest = {
  // SecurityFilterCreateRequest | The definition of the new security filter.
  body: {
    data: {
      attributes: {
        exclusionFilters: [
          {
            name: "Exclude staging",
            query: "source:staging",
          },
        ],
        filteredDataType: "logs",
        isEnabled: true,
        name: "Custom security filter",
        query: "service:api",
      },
      type: "security_filters",
    },
  },
};

apiInstance
  .createSecurityFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                            | Description                                | Notes |
| -------- | ------------------------------- | ------------------------------------------ | ----- |
| **body** | **SecurityFilterCreateRequest** | The definition of the new security filter. |

### Return type

**SecurityFilterResponse**

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
| **409**     | Conflict          | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createSecurityMonitoringRule**

> SecurityMonitoringRuleResponse createSecurityMonitoringRule(body)

Create a detection rule.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  // SecurityMonitoringRuleCreatePayload
  body: {
    cases: [],
    filters: [
      {
        action: "require",
        query: "query_example",
      },
    ],
    hasExtendedTitle: true,
    isEnabled: true,
    message: "",
    name: "My security monitoring rule.",
    options: {
      detectionMethod: "threshold",
      evaluationWindow: 0,
      keepAlive: 0,
      maxSignalDuration: 0,
      newValueOptions: {
        forgetAfter: 1,
        learningDuration: 0,
      },
    },
    queries: [],
    tags: ["env:prod", "team:security"],
    type: "log_detection",
  },
};

apiInstance
  .createSecurityMonitoringRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                                    | Description | Notes |
| -------- | --------------------------------------- | ----------- | ----- |
| **body** | **SecurityMonitoringRuleCreatePayload** |             |

### Return type

**SecurityMonitoringRuleResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | OK             | -                |
| **400**     | Bad Request    | -                |
| **403**     | Not Authorized | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteSecurityFilter**

> void deleteSecurityFilter()

Delete a specific security filter.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiDeleteSecurityFilterRequest = {
  // string | The ID of the security filter.
  securityFilterId: "security_filter_id_example",
};

apiInstance
  .deleteSecurityFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                 | Type         | Description                    | Notes                 |
| -------------------- | ------------ | ------------------------------ | --------------------- |
| **securityFilterId** | [**string**] | The ID of the security filter. | defaults to undefined |

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
| **204**     | OK                | -                |
| **403**     | Not Authorized    | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteSecurityMonitoringRule**

> void deleteSecurityMonitoringRule()

Delete an existing rule. Default rules cannot be deleted.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest = {
  // string | The ID of the rule.
  ruleId: "rule_id_example",
};

apiInstance
  .deleteSecurityMonitoringRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type         | Description         | Notes                 |
| ---------- | ------------ | ------------------- | --------------------- |
| **ruleId** | [**string**] | The ID of the rule. | defaults to undefined |

### Return type

**void**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **204**     | OK             | -                |
| **403**     | Not Authorized | -                |
| **404**     | Not Found      | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getSecurityFilter**

> SecurityFilterResponse getSecurityFilter()

Get the details of a specific security filter.

See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/)
for more examples.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiGetSecurityFilterRequest = {
  // string | The ID of the security filter.
  securityFilterId: "security_filter_id_example",
};

apiInstance
  .getSecurityFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                 | Type         | Description                    | Notes                 |
| -------------------- | ------------ | ------------------------------ | --------------------- |
| **securityFilterId** | [**string**] | The ID of the security filter. | defaults to undefined |

### Return type

**SecurityFilterResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **403**     | Not Authorized    | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getSecurityMonitoringRule**

> SecurityMonitoringRuleResponse getSecurityMonitoringRule()

Get a rule's details.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiGetSecurityMonitoringRuleRequest = {
  // string | The ID of the rule.
  ruleId: "rule_id_example",
};

apiInstance
  .getSecurityMonitoringRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type         | Description         | Notes                 |
| ---------- | ------------ | ------------------- | --------------------- |
| **ruleId** | [**string**] | The ID of the rule. | defaults to undefined |

### Return type

**SecurityMonitoringRuleResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |
| **404**     | Not Found   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listSecurityFilters**

> SecurityFiltersResponse listSecurityFilters()

Get the list of configured security filters with their definitions.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listSecurityFilters()
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

This endpoint does not need any parameter.

### Return type

**SecurityFiltersResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **403**     | Not Authorized    | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listSecurityMonitoringRules**

> SecurityMonitoringListRulesResponse listSecurityMonitoringRules()

List rules.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiListSecurityMonitoringRulesRequest = {
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
};

apiInstance
  .listSecurityMonitoringRules(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type         | Description                     | Notes                     |
| -------------- | ------------ | ------------------------------- | ------------------------- |
| **pageSize**   | [**number**] | Size for a given page.          | (optional) defaults to 10 |
| **pageNumber** | [**number**] | Specific page number to return. | (optional) defaults to 0  |

### Return type

**SecurityMonitoringListRulesResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listSecurityMonitoringSignals**

> SecurityMonitoringSignalsListResponse listSecurityMonitoringSignals()

The list endpoint returns security signals that match a search query.
Both this endpoint and the POST endpoint can be used interchangeably when listing
security signals.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiListSecurityMonitoringSignalsRequest = {
  // string | The search query for security signals. (optional)
  filterQuery: "security:attack status:high",
  // Date | The minimum timestamp for requested security signals. (optional)
  filterFrom: new Date("2019-01-02T09:42:36.320Z"),
  // Date | The maximum timestamp for requested security signals. (optional)
  filterTo: new Date("2019-01-03T09:42:36.320Z"),
  // SecurityMonitoringSignalsSort | The order of the security signals in results. (optional)
  sort: "timestamp",
  // string | A list of results using the cursor provided in the previous query. (optional)
  pageCursor:
    "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
  // number | The maximum number of security signals in the response. (optional)
  pageLimit: 25,
};

apiInstance
  .listSecurityMonitoringSignals(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name            | Type                              | Description                                                        | Notes                            |
| --------------- | --------------------------------- | ------------------------------------------------------------------ | -------------------------------- |
| **filterQuery** | [**string**]                      | The search query for security signals.                             | (optional) defaults to undefined |
| **filterFrom**  | [**Date**]                        | The minimum timestamp for requested security signals.              | (optional) defaults to undefined |
| **filterTo**    | [**Date**]                        | The maximum timestamp for requested security signals.              | (optional) defaults to undefined |
| **sort**        | **SecurityMonitoringSignalsSort** | The order of the security signals in results.                      | (optional) defaults to undefined |
| **pageCursor**  | [**string**]                      | A list of results using the cursor provided in the previous query. | (optional) defaults to undefined |
| **pageLimit**   | [**number**]                      | The maximum number of security signals in the response.            | (optional) defaults to 10        |

### Return type

**SecurityMonitoringSignalsListResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | OK             | -                |
| **400**     | Bad Request    | -                |
| **403**     | Not Authorized | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **searchSecurityMonitoringSignals**

> SecurityMonitoringSignalsListResponse searchSecurityMonitoringSignals()

Returns security signals that match a search query.
Both this endpoint and the GET endpoint can be used interchangeably for listing
security signals.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest = {
  // SecurityMonitoringSignalListRequest (optional)
  body: {
    filter: {
      from: new Date("2019-01-02T09:42:36.32Z"),
      query: "security:attack status:high",
      to: new Date("2019-01-03T09:42:36.32Z"),
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
  .searchSecurityMonitoringSignals(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                                    | Description | Notes |
| -------- | --------------------------------------- | ----------- | ----- |
| **body** | **SecurityMonitoringSignalListRequest** |             |

### Return type

**SecurityMonitoringSignalsListResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description    | Response headers |
| ----------- | -------------- | ---------------- |
| **200**     | OK             | -                |
| **400**     | Bad Request    | -                |
| **403**     | Not Authorized | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateSecurityFilter**

> SecurityFilterResponse updateSecurityFilter(body)

Update a specific security filter.
Returns the security filter object when the request is successful.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiUpdateSecurityFilterRequest = {
  // string | The ID of the security filter.
  securityFilterId: "security_filter_id_example",
  // SecurityFilterUpdateRequest | New definition of the security filter.
  body: {
    data: {
      attributes: {
        exclusionFilters: [],
        filteredDataType: "logs",
        isEnabled: true,
        name: "Custom security filter",
        query: "service:api",
        version: 1,
      },
      type: "security_filters",
    },
  },
};

apiInstance
  .updateSecurityFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                 | Type                            | Description                            | Notes                 |
| -------------------- | ------------------------------- | -------------------------------------- | --------------------- |
| **body**             | **SecurityFilterUpdateRequest** | New definition of the security filter. |
| **securityFilterId** | [**string**]                    | The ID of the security filter.         | defaults to undefined |

### Return type

**SecurityFilterResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description             | Response headers |
| ----------- | ----------------------- | ---------------- |
| **200**     | OK                      | -                |
| **400**     | Bad Request             | -                |
| **403**     | Not Authorized          | -                |
| **404**     | Not Found               | -                |
| **409**     | Concurrent Modification | -                |
| **429**     | Too many requests       | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateSecurityMonitoringRule**

> SecurityMonitoringRuleResponse updateSecurityMonitoringRule(body)

Update an existing rule. When updating `cases`, `queries` or `options`, the whole field
must be included. For example, when modifying a query all queries must be included.
Default rules can only be updated to be enabled and to change notifications.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest = {
  // string | The ID of the rule.
  ruleId: "rule_id_example",
  // SecurityMonitoringRuleUpdatePayload
  body: {
    cases: [
      {
        condition: "condition_example",
        name: "name_example",
        notifications: ["notifications_example"],
        status: "critical",
      },
    ],
    filters: [
      {
        action: "require",
        query: "query_example",
      },
    ],
    hasExtendedTitle: true,
    isEnabled: true,
    message: "message_example",
    name: "name_example",
    options: {
      detectionMethod: "threshold",
      evaluationWindow: 0,
      keepAlive: 0,
      maxSignalDuration: 0,
      newValueOptions: {
        forgetAfter: 1,
        learningDuration: 0,
      },
    },
    queries: [
      {
        agentRule: {
          agentRuleId: "etc_shadow",
          expression: "expression_example",
        },
        aggregation: "count",
        distinctFields: ["distinctFields_example"],
        groupByFields: ["groupByFields_example"],
        metric: "metric_example",
        name: "name_example",
        query: "query_example",
      },
    ],
    tags: ["tags_example"],
    version: 1,
  },
};

apiInstance
  .updateSecurityMonitoringRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type                                    | Description         | Notes                 |
| ---------- | --------------------------------------- | ------------------- | --------------------- |
| **body**   | **SecurityMonitoringRuleUpdatePayload** |                     |
| **ruleId** | [**string**]                            | The ID of the rule. | defaults to undefined |

### Return type

**SecurityMonitoringRuleResponse**

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
| **401**     | Concurrent Modification | -                |
| **403**     | Not Authorized          | -                |
| **404**     | Not Found               | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
