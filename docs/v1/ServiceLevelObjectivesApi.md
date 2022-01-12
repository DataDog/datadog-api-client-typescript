# datadog-api-client.v1.ServiceLevelObjectivesApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                                                | HTTP request                             | Description                         |
| ------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------- |
| [**checkCanDeleteSLO**](ServiceLevelObjectivesApi.md#checkCanDeleteSLO)               | **GET** /api/v1/slo/can_delete           | Check if SLOs can be safely deleted |
| [**createSLO**](ServiceLevelObjectivesApi.md#createSLO)                               | **POST** /api/v1/slo                     | Create an SLO object                |
| [**deleteSLO**](ServiceLevelObjectivesApi.md#deleteSLO)                               | **DELETE** /api/v1/slo/{slo_id}          | Delete an SLO                       |
| [**deleteSLOTimeframeInBulk**](ServiceLevelObjectivesApi.md#deleteSLOTimeframeInBulk) | **POST** /api/v1/slo/bulk_delete         | Bulk Delete SLO Timeframes          |
| [**getSLO**](ServiceLevelObjectivesApi.md#getSLO)                                     | **GET** /api/v1/slo/{slo_id}             | Get an SLO&#39;s details            |
| [**getSLOCorrections**](ServiceLevelObjectivesApi.md#getSLOCorrections)               | **GET** /api/v1/slo/{slo_id}/corrections | Get Corrections For an SLO          |
| [**getSLOHistory**](ServiceLevelObjectivesApi.md#getSLOHistory)                       | **GET** /api/v1/slo/{slo_id}/history     | Get an SLO&#39;s history            |
| [**listSLOs**](ServiceLevelObjectivesApi.md#listSLOs)                                 | **GET** /api/v1/slo                      | Get all SLOs                        |
| [**updateSLO**](ServiceLevelObjectivesApi.md#updateSLO)                               | **PUT** /api/v1/slo/{slo_id}             | Update an SLO                       |

## **checkCanDeleteSLO**

> CheckCanDeleteSLOResponse checkCanDeleteSLO()

Check if an SLO can be safely deleted. For example,
assure an SLO can be deleted without disrupting a dashboard.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiCheckCanDeleteSLORequest = {
  // string | A comma separated list of the IDs of the service level objectives objects.
  ids: "id1, id2, id3",
};

apiInstance
  .checkCanDeleteSLO(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name    | Type         | Description                                                                | Notes                 |
| ------- | ------------ | -------------------------------------------------------------------------- | --------------------- |
| **ids** | [**string**] | A comma separated list of the IDs of the service level objectives objects. | defaults to undefined |

### Return type

**CheckCanDeleteSLOResponse**

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
| **403**     | Forbidden         | -                |
| **409**     | Conflict          | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createSLO**

> SLOListResponse createSLO(body)

Create a service level objective object.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiCreateSLORequest = {
  // ServiceLevelObjectiveRequest | Service level objective request object.
  body: {
    description: "description_example",
    groups: ["env:prod", "role:mysql"],
    monitorIds: [1],
    name: "Custom Metric SLO",
    query: {
      denominator: "sum:my.custom.metric{*}.as_count()",
      numerator: "sum:my.custom.metric{type:good}.as_count()",
    },
    tags: ["env:prod", "app:core"],
    thresholds: [
      {
        target: 99.9,
        targetDisplay: "99.9",
        timeframe: "30d",
        warning: 90.0,
        warningDisplay: "90.0",
      },
    ],
    type: "metric",
  },
};

apiInstance
  .createSLO(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                             | Description                             | Notes |
| -------- | -------------------------------- | --------------------------------------- | ----- |
| **body** | **ServiceLevelObjectiveRequest** | Service level objective request object. |

### Return type

**SLOListResponse**

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
| **403**     | Forbidden         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteSLO**

> SLODeleteResponse deleteSLO()

Permanently delete the specified service level objective object.

If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns
a 409 conflict error because the SLO is referenced in a dashboard.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiDeleteSLORequest = {
  // string | The ID of the service level objective.
  sloId: "slo_id_example",
  // string | Delete the monitor even if it's referenced by other resources (for example SLO, composite monitor). (optional)
  force: "force_example",
};

apiInstance
  .deleteSLO(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name      | Type         | Description                                                                                             | Notes                            |
| --------- | ------------ | ------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **sloId** | [**string**] | The ID of the service level objective.                                                                  | defaults to undefined            |
| **force** | [**string**] | Delete the monitor even if it&#39;s referenced by other resources (for example SLO, composite monitor). | (optional) defaults to undefined |

### Return type

**SLODeleteResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not found         | -                |
| **409**     | Conflict          | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteSLOTimeframeInBulk**

> SLOBulkDeleteResponse deleteSLOTimeframeInBulk(body)

Delete (or partially delete) multiple service level objective objects.

This endpoint facilitates deletion of one or more thresholds for one or more
service level objective objects. If all thresholds are deleted, the service level
objective object is deleted as well.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest = {
  // { [key: string]: Array<SLOTimeframe>; } | Delete multiple service level objective objects request body.
  body: {
    key: ["30d"],
  },
};

apiInstance
  .deleteSLOTimeframeInBulk(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                                        | Description                                                   | Notes |
| -------- | ------------------------------------------- | ------------------------------------------------------------- | ----- |
| **body** | **{ [key: string]: Array<SLOTimeframe>; }** | Delete multiple service level objective objects request body. |

### Return type

**SLOBulkDeleteResponse**

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
| **403**     | Forbidden         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getSLO**

> SLOResponse getSLO()

Get a service level objective object.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiGetSLORequest = {
  // string | The ID of the service level objective object.
  sloId: "slo_id_example",
  // boolean | Get the IDs of SLO monitors that reference this SLO. (optional)
  withConfiguredAlertIds: true,
};

apiInstance
  .getSLO(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                       | Type          | Description                                          | Notes                            |
| -------------------------- | ------------- | ---------------------------------------------------- | -------------------------------- |
| **sloId**                  | [**string**]  | The ID of the service level objective object.        | defaults to undefined            |
| **withConfiguredAlertIds** | [**boolean**] | Get the IDs of SLO monitors that reference this SLO. | (optional) defaults to undefined |

### Return type

**SLOResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getSLOCorrections**

> SLOCorrectionListResponse getSLOCorrections()

Get corrections applied to an SLO

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiGetSLOCorrectionsRequest = {
  // string | The ID of the service level objective object.
  sloId: "slo_id_example",
};

apiInstance
  .getSLOCorrections(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name      | Type         | Description                                   | Notes                 |
| --------- | ------------ | --------------------------------------------- | --------------------- |
| **sloId** | [**string**] | The ID of the service level objective object. | defaults to undefined |

### Return type

**SLOCorrectionListResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getSLOHistory**

> SLOHistoryResponse getSLOHistory()

Get a specific SLO’s history, regardless of its SLO type.

The detailed history data is structured according to the source data type.
For example, metric data is included for event SLOs that use
the metric source, and monitor SLO types include the monitor transition history.

**Note:** There are different response formats for event based and time based SLOs.
Examples of both are shown.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiGetSLOHistoryRequest = {
  // string | The ID of the service level objective object.
  sloId: "slo_id_example",
  // number | The `from` timestamp for the query window in epoch seconds.
  fromTs: 1,
  // number | The `to` timestamp for the query window in epoch seconds.
  toTs: 1,
  // number | The SLO target. If `target` is passed in, the response will include the remaining error budget and a timeframe value of `custom`. (optional)
  target: 0,
  // boolean | Defaults to `true`. If any SLO corrections are applied and this parameter is set to `false`, then the corrections will not be applied and the SLI values will not be affected. (optional)
  applyCorrection: true,
};

apiInstance
  .getSLOHistory(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                | Type          | Description                                                                                                                                                                                        | Notes                            |
| ------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **sloId**           | [**string**]  | The ID of the service level objective object.                                                                                                                                                      | defaults to undefined            |
| **fromTs**          | [**number**]  | The &#x60;from&#x60; timestamp for the query window in epoch seconds.                                                                                                                              | defaults to undefined            |
| **toTs**            | [**number**]  | The &#x60;to&#x60; timestamp for the query window in epoch seconds.                                                                                                                                | defaults to undefined            |
| **target**          | [**number**]  | The SLO target. If &#x60;target&#x60; is passed in, the response will include the remaining error budget and a timeframe value of &#x60;custom&#x60;.                                              | (optional) defaults to undefined |
| **applyCorrection** | [**boolean**] | Defaults to &#x60;true&#x60;. If any SLO corrections are applied and this parameter is set to &#x60;false&#x60;, then the corrections will not be applied and the SLI values will not be affected. | (optional) defaults to undefined |

### Return type

**SLOHistoryResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listSLOs**

> SLOListResponse listSLOs()

Get a list of service level objective objects for your organization.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiListSLOsRequest = {
  // string | A comma separated list of the IDs of the service level objectives objects. (optional)
  ids: "id1, id2, id3",
  // string | The query string to filter results based on SLO names. (optional)
  query: "monitor",
  // string | The query string to filter results based on a single SLO tag. (optional)
  tagsQuery: "env:prod",
  // string | The query string to filter results based on SLO numerator and denominator. (optional)
  metricsQuery: "aws.elb.request_count",
  // number | The number of SLOs to return in the response. (optional)
  limit: 1,
  // number | The specific offset to use as the beginning of the returned response. (optional)
  offset: 1,
};

apiInstance
  .listSLOs(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name             | Type         | Description                                                                | Notes                            |
| ---------------- | ------------ | -------------------------------------------------------------------------- | -------------------------------- |
| **ids**          | [**string**] | A comma separated list of the IDs of the service level objectives objects. | (optional) defaults to undefined |
| **query**        | [**string**] | The query string to filter results based on SLO names.                     | (optional) defaults to undefined |
| **tagsQuery**    | [**string**] | The query string to filter results based on a single SLO tag.              | (optional) defaults to undefined |
| **metricsQuery** | [**string**] | The query string to filter results based on SLO numerator and denominator. | (optional) defaults to undefined |
| **limit**        | [**number**] | The number of SLOs to return in the response.                              | (optional) defaults to undefined |
| **offset**       | [**number**] | The specific offset to use as the beginning of the returned response.      | (optional) defaults to undefined |

### Return type

**SLOListResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description       | Response headers |
| ----------- | ----------------- | ---------------- |
| **200**     | OK                | -                |
| **400**     | Bad Request       | -                |
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateSLO**

> SLOListResponse updateSLO(body)

Update the specified service level objective object.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiUpdateSLORequest = {
  // string | The ID of the service level objective object.
  sloId: "slo_id_example",
  // ServiceLevelObjective | The edited service level objective request object.
  body: {
    description: "description_example",
    groups: ["env:prod", "role:mysql"],
    monitorIds: [1],
    monitorTags: ["monitorTags_example"],
    name: "Custom Metric SLO",
    query: {
      denominator: "sum:my.custom.metric{*}.as_count()",
      numerator: "sum:my.custom.metric{type:good}.as_count()",
    },
    tags: ["env:prod", "app:core"],
    thresholds: [
      {
        target: 99.9,
        targetDisplay: "99.9",
        timeframe: "30d",
        warning: 90.0,
        warningDisplay: "90.0",
      },
    ],
    type: "metric",
  },
};

apiInstance
  .updateSLO(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name      | Type                      | Description                                        | Notes                 |
| --------- | ------------------------- | -------------------------------------------------- | --------------------- |
| **body**  | **ServiceLevelObjective** | The edited service level objective request object. |
| **sloId** | [**string**]              | The ID of the service level objective object.      | defaults to undefined |

### Return type

**SLOListResponse**

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
| **403**     | Forbidden         | -                |
| **404**     | Not Found         | -                |
| **429**     | Too many requests | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
