# datadog-api-client.v1.IPRangesApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                        | HTTP request | Description    |
| --------------------------------------------- | ------------ | -------------- |
| [**getIPRanges**](IPRangesApi.md#getIPRanges) | **GET** /    | List IP Ranges |

## **getIPRanges**

> IPRanges getIPRanges()

Get information about Datadog IP ranges.

### Example

```typescript
import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.IPRangesApi(configuration);

apiInstance
  .getIPRanges()
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

**IPRanges**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
| ----------- | ----------- | ---------------- |
| **200**     | OK          | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
