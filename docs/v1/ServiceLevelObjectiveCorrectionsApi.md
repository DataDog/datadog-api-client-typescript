# datadog-api-client.v1.ServiceLevelObjectiveCorrectionsApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                                                | HTTP request                                          | Description                      |
| ------------------------------------------------------------------------------------- | ----------------------------------------------------- | -------------------------------- |
| [**createSLOCorrection**](ServiceLevelObjectiveCorrectionsApi.md#createSLOCorrection) | **POST** /api/v1/slo/correction                       | Create an SLO correction         |
| [**deleteSLOCorrection**](ServiceLevelObjectiveCorrectionsApi.md#deleteSLOCorrection) | **DELETE** /api/v1/slo/correction/{slo_correction_id} | Delete an SLO correction         |
| [**getSLOCorrection**](ServiceLevelObjectiveCorrectionsApi.md#getSLOCorrection)       | **GET** /api/v1/slo/correction/{slo_correction_id}    | Get an SLO correction for an SLO |
| [**listSLOCorrection**](ServiceLevelObjectiveCorrectionsApi.md#listSLOCorrection)     | **GET** /api/v1/slo/correction                        | Get all SLO corrections          |
| [**updateSLOCorrection**](ServiceLevelObjectiveCorrectionsApi.md#updateSLOCorrection) | **PATCH** /api/v1/slo/correction/{slo_correction_id}  | Update an SLO correction         |

## **createSLOCorrection**

> SLOCorrectionResponse createSLOCorrection(body)

Create an SLO Correction.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

let params: v1.ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest = {
  // SLOCorrectionCreateRequest | Create an SLO Correction
  body: {
    data: {
      attributes: {
        category: "Scheduled Maintenance",
        description: "description_example",
        end: 1600000000,
        sloId: "sloId",
        start: 1600000000,
        timezone: "UTC",
      },
      type: "correction",
    },
  },
};

apiInstance
  .createSLOCorrection(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                           | Description              | Notes |
| -------- | ------------------------------ | ------------------------ | ----- |
| **body** | **SLOCorrectionCreateRequest** | Create an SLO Correction |

### Return type

**SLOCorrectionResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description   | Response headers |
| ----------- | ------------- | ---------------- |
| **200**     | OK            | -                |
| **400**     | Bad Request   | -                |
| **403**     | Forbidden     | -                |
| **404**     | SLO Not Found | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteSLOCorrection**

> void deleteSLOCorrection()

Permanently delete the specified SLO correction object.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

let params: v1.ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest = {
  // string | The ID of the SLO correction object.
  sloCorrectionId: "slo_correction_id_example",
};

apiInstance
  .deleteSLOCorrection(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                | Type         | Description                          | Notes                 |
| ------------------- | ------------ | ------------------------------------ | --------------------- |
| **sloCorrectionId** | [**string**] | The ID of the SLO correction object. | defaults to undefined |

### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **204**     | OK          | -                |
| **403**     | Forbidden   | -                |
| **404**     | Not found   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getSLOCorrection**

> SLOCorrectionResponse getSLOCorrection()

Get an SLO correction.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

let params: v1.ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest = {
  // string | The ID of the SLO correction object.
  sloCorrectionId: "slo_correction_id_example",
};

apiInstance
  .getSLOCorrection(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                | Type         | Description                          | Notes                 |
| ------------------- | ------------ | ------------------------------------ | --------------------- |
| **sloCorrectionId** | [**string**] | The ID of the SLO correction object. | defaults to undefined |

### Return type

**SLOCorrectionResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

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

## **listSLOCorrection**

> SLOCorrectionListResponse listSLOCorrection()

Get all Service Level Objective corrections.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

apiInstance
  .listSLOCorrection()
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

**SLOCorrectionListResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |
| **403**     | Forbidden   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateSLOCorrection**

> SLOCorrectionResponse updateSLOCorrection(body)

Update the specified SLO correction object object.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectiveCorrectionsApi(configuration);

let params: v1.ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest = {
  // string | The ID of the SLO correction object.
  sloCorrectionId: "slo_correction_id_example",
  // SLOCorrectionUpdateRequest | The edited SLO correction object.
  body: {
    data: {
      attributes: {
        category: "Scheduled Maintenance",
        description: "description_example",
        end: 1600000000,
        start: 1600000000,
        timezone: "UTC",
      },
      type: "correction",
    },
  },
};

apiInstance
  .updateSLOCorrection(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name                | Type                           | Description                          | Notes                 |
| ------------------- | ------------------------------ | ------------------------------------ | --------------------- |
| **body**            | **SLOCorrectionUpdateRequest** | The edited SLO correction object.    |
| **sloCorrectionId** | [**string**]                   | The ID of the SLO correction object. | defaults to undefined |

### Return type

**SLOCorrectionResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |
| **400**     | Bad Request | -                |
| **403**     | Forbidden   | -                |
| **404**     | Not Found   | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
