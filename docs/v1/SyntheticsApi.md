# datadog-api-client.v1.SyntheticsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGlobalVariable**](SyntheticsApi.md#createGlobalVariable) | **POST** /api/v1/synthetics/variables | Create a global variable
[**createPrivateLocation**](SyntheticsApi.md#createPrivateLocation) | **POST** /api/v1/synthetics/private-locations | Create a private location
[**createSyntheticsAPITest**](SyntheticsApi.md#createSyntheticsAPITest) | **POST** /api/v1/synthetics/tests/api | Create an API test
[**createSyntheticsBrowserTest**](SyntheticsApi.md#createSyntheticsBrowserTest) | **POST** /api/v1/synthetics/tests/browser | Create a browser test
[**deleteGlobalVariable**](SyntheticsApi.md#deleteGlobalVariable) | **DELETE** /api/v1/synthetics/variables/{variable_id} | Delete a global variable
[**deletePrivateLocation**](SyntheticsApi.md#deletePrivateLocation) | **DELETE** /api/v1/synthetics/private-locations/{location_id} | Delete a private location
[**deleteTests**](SyntheticsApi.md#deleteTests) | **POST** /api/v1/synthetics/tests/delete | Delete tests
[**editGlobalVariable**](SyntheticsApi.md#editGlobalVariable) | **PUT** /api/v1/synthetics/variables/{variable_id} | Edit a global variable
[**getAPITest**](SyntheticsApi.md#getAPITest) | **GET** /api/v1/synthetics/tests/api/{public_id} | Get an API test
[**getAPITestLatestResults**](SyntheticsApi.md#getAPITestLatestResults) | **GET** /api/v1/synthetics/tests/{public_id}/results | Get an API test&#39;s latest results summaries
[**getAPITestResult**](SyntheticsApi.md#getAPITestResult) | **GET** /api/v1/synthetics/tests/{public_id}/results/{result_id} | Get an API test result
[**getBrowserTest**](SyntheticsApi.md#getBrowserTest) | **GET** /api/v1/synthetics/tests/browser/{public_id} | Get a browser test
[**getBrowserTestLatestResults**](SyntheticsApi.md#getBrowserTestLatestResults) | **GET** /api/v1/synthetics/tests/browser/{public_id}/results | Get a browser test&#39;s latest results summaries
[**getBrowserTestResult**](SyntheticsApi.md#getBrowserTestResult) | **GET** /api/v1/synthetics/tests/browser/{public_id}/results/{result_id} | Get a browser test result
[**getGlobalVariable**](SyntheticsApi.md#getGlobalVariable) | **GET** /api/v1/synthetics/variables/{variable_id} | Get a global variable
[**getPrivateLocation**](SyntheticsApi.md#getPrivateLocation) | **GET** /api/v1/synthetics/private-locations/{location_id} | Get a private location
[**getTest**](SyntheticsApi.md#getTest) | **GET** /api/v1/synthetics/tests/{public_id} | Get a test configuration
[**listGlobalVariables**](SyntheticsApi.md#listGlobalVariables) | **GET** /api/v1/synthetics/variables | Get all global variables
[**listLocations**](SyntheticsApi.md#listLocations) | **GET** /api/v1/synthetics/locations | Get all locations (public and private)
[**listTests**](SyntheticsApi.md#listTests) | **GET** /api/v1/synthetics/tests | Get the list of all tests
[**triggerCITests**](SyntheticsApi.md#triggerCITests) | **POST** /api/v1/synthetics/tests/trigger/ci | Trigger tests from CI/CD pipelines
[**updateAPITest**](SyntheticsApi.md#updateAPITest) | **PUT** /api/v1/synthetics/tests/api/{public_id} | Edit an API test
[**updateBrowserTest**](SyntheticsApi.md#updateBrowserTest) | **PUT** /api/v1/synthetics/tests/browser/{public_id} | Edit a browser test
[**updatePrivateLocation**](SyntheticsApi.md#updatePrivateLocation) | **PUT** /api/v1/synthetics/private-locations/{location_id} | Edit a private location
[**updateTestPauseStatus**](SyntheticsApi.md#updateTestPauseStatus) | **PUT** /api/v1/synthetics/tests/{public_id}/status | Pause or start a test


## **createGlobalVariable**
> SyntheticsGlobalVariable createGlobalVariable(body)

Create a Synthetics global variable.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiCreateGlobalVariableRequest = {
  // SyntheticsGlobalVariable | Details of the global variable to create.
  body: {
    description: "Example description",
    name: "MY_VARIABLE",
    parseTestOptions: {
      field: "content-type",
      parser: {
        type: "raw",
        value: "value_example",
      },
      type: "http_body",
    },
    parseTestPublicId: "abc-def-123",
    tags: ["team:front","test:workflow-1"],
    value: {
      secure: true,
      value: "example-value",
    },
  },
};

apiInstance.createGlobalVariable(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsGlobalVariable**| Details of the global variable to create. |


### Return type

**SyntheticsGlobalVariable**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createPrivateLocation**
> SyntheticsPrivateLocationCreationResponse createPrivateLocation(body)

Create a new Synthetics private location.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiCreatePrivateLocationRequest = {
  // SyntheticsPrivateLocation | Details of the private location to create.
  body: {
    description: "Description of private location",
    name: "New private location",
    tags: ["team:front"],
  },
};

apiInstance.createPrivateLocation(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsPrivateLocation**| Details of the private location to create. |


### Return type

**SyntheticsPrivateLocationCreationResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**402** | Quota reached for private locations |  -  |
**404** | Private locations are not activated for the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createSyntheticsAPITest**
> SyntheticsAPITest createSyntheticsAPITest(body)

Create a Synthetic API test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiCreateSyntheticsAPITestRequest = {
  // SyntheticsAPITest | Details of the test to create.
  body: {
    config: {
      assertions: [
        {
    operator: "contains",
    property: "property_example",
    target: {},
    type: "body",
  },
      ],
      configVariables: [
        {
          example: "example_example",
          id: "id_example",
          name: "VARIABLE_NAME",
          pattern: "pattern_example",
          type: "global",
        },
      ],
      request: {
        allowInsecure: true,
        basicAuth: {
          password: "",
          username: "",
        },
        body: "body_example",
        certificate: {
          cert: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
          key: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
        },
        dnsServer: "dnsServer_example",
        dnsServerPort: 1,
        headers: {
          "key": "key_example",
        },
        host: "host_example",
        method: "GET",
        noSavingResponseBody: true,
        numberOfPackets: 0,
        port: 1,
        query: {},
        shouldTrackHops: true,
        timeout: 3.14,
        url: "url_example",
      },
      steps: [
        {
          allowFailure: true,
          assertions: [
            {
    operator: "contains",
    property: "property_example",
    target: {},
    type: "body",
  },
          ],
          extractedValues: [
            {
              field: "content-type",
              name: "name_example",
              parser: {
                type: "raw",
                value: "value_example",
              },
              type: "http_body",
            },
          ],
          isCritical: true,
          name: "name_example",
          request: {
            allowInsecure: true,
            basicAuth: {
              password: "",
              username: "",
            },
            body: "body_example",
            certificate: {
              cert: {
                content: "content_example",
                filename: "filename_example",
                updatedAt: "updatedAt_example",
              },
              key: {
                content: "content_example",
                filename: "filename_example",
                updatedAt: "updatedAt_example",
              },
            },
            dnsServer: "dnsServer_example",
            dnsServerPort: 1,
            headers: {
              "key": "key_example",
            },
            host: "host_example",
            method: "GET",
            noSavingResponseBody: true,
            numberOfPackets: 0,
            port: 1,
            query: {},
            shouldTrackHops: true,
            timeout: 3.14,
            url: "url_example",
          },
          subtype: "http",
        },
      ],
    },
    locations: [
      "locations_example",
    ],
    message: "message_example",
    name: "name_example",
    options: {
      acceptSelfSigned: true,
      allowInsecure: true,
      deviceIds: [
        "laptop_large",
      ],
      disableCors: true,
      followRedirects: true,
      minFailureDuration: 1,
      minLocationFailed: 1,
      monitorName: "monitorName_example",
      monitorOptions: {
        renotifyInterval: 0,
      },
      monitorPriority: 1,
      noScreenshot: true,
      retry: {
        count: 1,
        interval: 3.14,
      },
      tickEvery: 30,
    },
    status: "live",
    subtype: "http",
    tags: [
      "tags_example",
    ],
    type: "api",
  },
};

apiInstance.createSyntheticsAPITest(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsAPITest**| Details of the test to create. |


### Return type

**SyntheticsAPITest**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the created test details. |  -  |
**400** | - JSON format is wrong - Creation failed |  -  |
**402** | Test quota is reached |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createSyntheticsBrowserTest**
> SyntheticsBrowserTest createSyntheticsBrowserTest(body)

Create a Synthetic browser test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiCreateSyntheticsBrowserTestRequest = {
  // SyntheticsBrowserTest | Details of the test to create.
  body: {
    config: {
      assertions: [
        {
    operator: "contains",
    property: "property_example",
    target: {},
    type: "body",
  },
      ],
      request: {
        allowInsecure: true,
        basicAuth: {
          password: "",
          username: "",
        },
        body: "body_example",
        certificate: {
          cert: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
          key: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
        },
        dnsServer: "dnsServer_example",
        dnsServerPort: 1,
        headers: {
          "key": "key_example",
        },
        host: "host_example",
        method: "GET",
        noSavingResponseBody: true,
        numberOfPackets: 0,
        port: 1,
        query: {},
        shouldTrackHops: true,
        timeout: 3.14,
        url: "url_example",
      },
      setCookie: "setCookie_example",
      variables: [
        {
          example: "example_example",
          id: "id_example",
          name: "VARIABLE_NAME",
          pattern: "pattern_example",
          type: "element",
        },
      ],
    },
    locations: [
      "locations_example",
    ],
    message: "",
    name: "name_example",
    options: {
      acceptSelfSigned: true,
      allowInsecure: true,
      deviceIds: [
        "laptop_large",
      ],
      disableCors: true,
      followRedirects: true,
      minFailureDuration: 1,
      minLocationFailed: 1,
      monitorName: "monitorName_example",
      monitorOptions: {
        renotifyInterval: 0,
      },
      monitorPriority: 1,
      noScreenshot: true,
      retry: {
        count: 1,
        interval: 3.14,
      },
      tickEvery: 30,
    },
    status: "live",
    steps: [
      {
        allowFailure: true,
        name: "name_example",
        params: {},
        timeout: 1,
        type: "assertCurrentUrl",
      },
    ],
    tags: [
      "tags_example",
    ],
    type: "browser",
  },
};

apiInstance.createSyntheticsBrowserTest(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsBrowserTest**| Details of the test to create. |


### Return type

**SyntheticsBrowserTest**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the created test details. |  -  |
**400** | - JSON format is wrong - Creation failed |  -  |
**402** | Test quota is reached |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteGlobalVariable**
> void deleteGlobalVariable()

Delete a Synthetics global variable.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiDeleteGlobalVariableRequest = {
  // string | The ID of the global variable.
  variableId: "variable_id_example",
};

apiInstance.deleteGlobalVariable(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variableId** | [**string**] | The ID of the global variable. | defaults to undefined


### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | JSON format is wrong |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deletePrivateLocation**
> void deletePrivateLocation()

Delete a Synthetics private location.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiDeletePrivateLocationRequest = {
  // string | The ID of the private location.
  locationId: "location_id_example",
};

apiInstance.deletePrivateLocation(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | The ID of the private location. | defaults to undefined


### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | OK |  -  |
**404** | - Private locations are not activated for the user - Private location does not exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteTests**
> SyntheticsDeleteTestsResponse deleteTests(body)

Delete multiple Synthetic tests by ID.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiDeleteTestsRequest = {
  // SyntheticsDeleteTestsPayload | Public ID list of the Synthetic tests to be deleted.
  body: {
    publicIds: [],
  },
};

apiInstance.deleteTests(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsDeleteTestsPayload**| Public ID list of the Synthetic tests to be deleted. |


### Return type

**SyntheticsDeleteTestsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**400** | - JSON format is wrong - Test cannot be deleted as it&#39;s used elsewhere (as a sub-test or in an uptime widget) - Some IDs are not owned by the user |  -  |
**403** | Forbidden |  -  |
**404** | - Tests to be deleted can&#39;t be found - Synthetics is not activated for the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **editGlobalVariable**
> SyntheticsGlobalVariable editGlobalVariable(body)

Edit a Synthetics global variable.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiEditGlobalVariableRequest = {
  // string | The ID of the global variable.
  variableId: "variable_id_example",
  // SyntheticsGlobalVariable | Details of the global variable to update.
  body: {
    description: "Example description",
    name: "MY_VARIABLE",
    parseTestOptions: {
      field: "content-type",
      parser: {
        type: "raw",
        value: "value_example",
      },
      type: "http_body",
    },
    parseTestPublicId: "abc-def-123",
    tags: ["team:front","test:workflow-1"],
    value: {
      secure: true,
      value: "example-value",
    },
  },
};

apiInstance.editGlobalVariable(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsGlobalVariable**| Details of the global variable to update. |
 **variableId** | [**string**] | The ID of the global variable. | defaults to undefined


### Return type

**SyntheticsGlobalVariable**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Invalid request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getAPITest**
> SyntheticsAPITest getAPITest()

Get the detailed configuration associated with
a Synthetic API test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetAPITestRequest = {
  // string | The public ID of the test to get details from.
  publicId: "public_id_example",
};

apiInstance.getAPITest(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] | The public ID of the test to get details from. | defaults to undefined


### Return type

**SyntheticsAPITest**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | - Synthetic Monitoring is not activated for the user - Test is not owned by the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getAPITestLatestResults**
> SyntheticsGetAPITestLatestResultsResponse getAPITestLatestResults()

Get the last 50 test results summaries for a given Synthetics API test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetAPITestLatestResultsRequest = {
  // string | The public ID of the test for which to search results for.
  publicId: "public_id_example",
  // number | Timestamp from which to start querying results. (optional)
  fromTs: 1,
  // number | Timestamp up to which to query results. (optional)
  toTs: 1,
  // Array<string> | Locations for which to query results. (optional)
  probeDc: [
    "probe_dc_example",
  ],
};

apiInstance.getAPITestLatestResults(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] | The public ID of the test for which to search results for. | defaults to undefined
 **fromTs** | [**number**] | Timestamp from which to start querying results. | (optional) defaults to undefined
 **toTs** | [**number**] | Timestamp up to which to query results. | (optional) defaults to undefined
 **probeDc** | **Array&lt;string&gt;** | Locations for which to query results. | (optional) defaults to undefined


### Return type

**SyntheticsGetAPITestLatestResultsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | - Synthetic is not activated for the user - Test is not owned by the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getAPITestResult**
> SyntheticsAPITestResultFull getAPITestResult()

Get a specific full result from a given (API) Synthetic test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetAPITestResultRequest = {
  // string | The public ID of the API test to which the target result belongs.
  publicId: "public_id_example",
  // string | The ID of the result to get.
  resultId: "result_id_example",
};

apiInstance.getAPITestResult(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] | The public ID of the API test to which the target result belongs. | defaults to undefined
 **resultId** | [**string**] | The ID of the result to get. | defaults to undefined


### Return type

**SyntheticsAPITestResultFull**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | - Synthetic is not activated for the user - Test or result is not owned by the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getBrowserTest**
> SyntheticsBrowserTest getBrowserTest()

Get the detailed configuration (including steps) associated with
a Synthetic browser test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetBrowserTestRequest = {
  // string | The public ID of the test to get details from.
  publicId: "public_id_example",
};

apiInstance.getBrowserTest(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] | The public ID of the test to get details from. | defaults to undefined


### Return type

**SyntheticsBrowserTest**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | - Synthetic is not activated for the user - Test is not owned by the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getBrowserTestLatestResults**
> SyntheticsGetBrowserTestLatestResultsResponse getBrowserTestLatestResults()

Get the last 50 test results summaries for a given Synthetics Browser test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetBrowserTestLatestResultsRequest = {
  // string | The public ID of the browser test for which to search results for.
  publicId: "public_id_example",
  // number | Timestamp from which to start querying results. (optional)
  fromTs: 1,
  // number | Timestamp up to which to query results. (optional)
  toTs: 1,
  // Array<string> | Locations for which to query results. (optional)
  probeDc: [
    "probe_dc_example",
  ],
};

apiInstance.getBrowserTestLatestResults(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] | The public ID of the browser test for which to search results for. | defaults to undefined
 **fromTs** | [**number**] | Timestamp from which to start querying results. | (optional) defaults to undefined
 **toTs** | [**number**] | Timestamp up to which to query results. | (optional) defaults to undefined
 **probeDc** | **Array&lt;string&gt;** | Locations for which to query results. | (optional) defaults to undefined


### Return type

**SyntheticsGetBrowserTestLatestResultsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | forbidden |  -  |
**404** | - Synthetic is not activated for the user - Test is not owned by the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getBrowserTestResult**
> SyntheticsBrowserTestResultFull getBrowserTestResult()

Get a specific full result from a given (browser) Synthetic test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetBrowserTestResultRequest = {
  // string | The public ID of the browser test to which the target result belongs.
  publicId: "public_id_example",
  // string | The ID of the result to get.
  resultId: "result_id_example",
};

apiInstance.getBrowserTestResult(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] | The public ID of the browser test to which the target result belongs. | defaults to undefined
 **resultId** | [**string**] | The ID of the result to get. | defaults to undefined


### Return type

**SyntheticsBrowserTestResultFull**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | - Synthetic is not activated for the user - Test or result is not owned by the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getGlobalVariable**
> SyntheticsGlobalVariable getGlobalVariable()

Get the detailed configuration of a global variable.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetGlobalVariableRequest = {
  // string | The ID of the global variable.
  variableId: "variable_id_example",
};

apiInstance.getGlobalVariable(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **variableId** | [**string**] | The ID of the global variable. | defaults to undefined


### Return type

**SyntheticsGlobalVariable**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getPrivateLocation**
> SyntheticsPrivateLocation getPrivateLocation()

Get a Synthetics private location.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetPrivateLocationRequest = {
  // string | The ID of the private location.
  locationId: "location_id_example",
};

apiInstance.getPrivateLocation(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | [**string**] | The ID of the private location. | defaults to undefined


### Return type

**SyntheticsPrivateLocation**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | - Synthetic private locations are not activated for the user - Private location does not exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getTest**
> SyntheticsTestDetails getTest()

Get the detailed configuration associated with a Synthetics test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetTestRequest = {
  // string | The public ID of the test to get details from.
  publicId: "public_id_example",
};

apiInstance.getTest(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publicId** | [**string**] | The public ID of the test to get details from. | defaults to undefined


### Return type

**SyntheticsTestDetails**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |
**404** | - Synthetic is not activated for the user - Test is not owned by the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listGlobalVariables**
> SyntheticsListGlobalVariablesResponse listGlobalVariables()

Get the list of all Synthetics global variables.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);


apiInstance.listGlobalVariables().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SyntheticsListGlobalVariablesResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listLocations**
> SyntheticsLocations listLocations()

Get the list of public and private locations available for Synthetic
tests. No arguments required.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);


apiInstance.listLocations().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SyntheticsLocations**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listTests**
> SyntheticsListTestsResponse listTests()

Get the list of all Synthetic tests.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);


apiInstance.listTests().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**SyntheticsListTestsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the list of all Synthetic tests. |  -  |
**403** | Forbidden |  -  |
**404** | Synthetics is not activated for the user. |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **triggerCITests**
> SyntheticsTriggerCITestsResponse triggerCITests(body)

Trigger a set of Synthetics tests for continuous integration.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiTriggerCITestsRequest = {
  // SyntheticsCITestBody | Details of the test to trigger.
  body: {
    tests: [
      {
        allowInsecureCertificates: true,
        basicAuth: {
          password: "",
          username: "",
        },
        body: "body_example",
        bodyType: "bodyType_example",
        cookies: "cookies_example",
        deviceIds: [
          "laptop_large",
        ],
        followRedirects: true,
        headers: {
          "key": "key_example",
        },
        locations: [
          "locations_example",
        ],
        metadata: {
          ci: {
            pipeline: "pipeline_example",
            provider: "provider_example",
          },
          git: {
            branch: "branch_example",
            commitSha: "commitSha_example",
          },
        },
        publicId: "aaa-aaa-aaa",
        retry: {
          count: 1,
          interval: 3.14,
        },
        startUrl: "startUrl_example",
        variables: {
          "key": "key_example",
        },
      },
    ],
  },
};

apiInstance.triggerCITests(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsCITestBody**| Details of the test to trigger. |


### Return type

**SyntheticsTriggerCITestsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | JSON format is wrong |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateAPITest**
> SyntheticsAPITest updateAPITest(body)

Edit the configuration of a Synthetic API test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiUpdateAPITestRequest = {
  // string | The public ID of the test to get details from.
  publicId: "public_id_example",
  // SyntheticsAPITest | New test details to be saved.
  body: {
    config: {
      assertions: [
        {
    operator: "contains",
    property: "property_example",
    target: {},
    type: "body",
  },
      ],
      configVariables: [
        {
          example: "example_example",
          id: "id_example",
          name: "VARIABLE_NAME",
          pattern: "pattern_example",
          type: "global",
        },
      ],
      request: {
        allowInsecure: true,
        basicAuth: {
          password: "",
          username: "",
        },
        body: "body_example",
        certificate: {
          cert: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
          key: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
        },
        dnsServer: "dnsServer_example",
        dnsServerPort: 1,
        headers: {
          "key": "key_example",
        },
        host: "host_example",
        method: "GET",
        noSavingResponseBody: true,
        numberOfPackets: 0,
        port: 1,
        query: {},
        shouldTrackHops: true,
        timeout: 3.14,
        url: "url_example",
      },
      steps: [
        {
          allowFailure: true,
          assertions: [
            {
    operator: "contains",
    property: "property_example",
    target: {},
    type: "body",
  },
          ],
          extractedValues: [
            {
              field: "content-type",
              name: "name_example",
              parser: {
                type: "raw",
                value: "value_example",
              },
              type: "http_body",
            },
          ],
          isCritical: true,
          name: "name_example",
          request: {
            allowInsecure: true,
            basicAuth: {
              password: "",
              username: "",
            },
            body: "body_example",
            certificate: {
              cert: {
                content: "content_example",
                filename: "filename_example",
                updatedAt: "updatedAt_example",
              },
              key: {
                content: "content_example",
                filename: "filename_example",
                updatedAt: "updatedAt_example",
              },
            },
            dnsServer: "dnsServer_example",
            dnsServerPort: 1,
            headers: {
              "key": "key_example",
            },
            host: "host_example",
            method: "GET",
            noSavingResponseBody: true,
            numberOfPackets: 0,
            port: 1,
            query: {},
            shouldTrackHops: true,
            timeout: 3.14,
            url: "url_example",
          },
          subtype: "http",
        },
      ],
    },
    locations: [
      "locations_example",
    ],
    message: "message_example",
    name: "name_example",
    options: {
      acceptSelfSigned: true,
      allowInsecure: true,
      deviceIds: [
        "laptop_large",
      ],
      disableCors: true,
      followRedirects: true,
      minFailureDuration: 1,
      minLocationFailed: 1,
      monitorName: "monitorName_example",
      monitorOptions: {
        renotifyInterval: 0,
      },
      monitorPriority: 1,
      noScreenshot: true,
      retry: {
        count: 1,
        interval: 3.14,
      },
      tickEvery: 30,
    },
    status: "live",
    subtype: "http",
    tags: [
      "tags_example",
    ],
    type: "api",
  },
};

apiInstance.updateAPITest(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsAPITest**| New test details to be saved. |
 **publicId** | [**string**] | The public ID of the test to get details from. | defaults to undefined


### Return type

**SyntheticsAPITest**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | - JSON format is wrong - Updating sub-type is forbidden |  -  |
**403** | Forbidden |  -  |
**404** | - Synthetic Monitoring is not activated for the user - Test is not owned by the user - Test can&#39;t be found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateBrowserTest**
> SyntheticsBrowserTest updateBrowserTest(body)

Edit the configuration of a Synthetic browser test.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiUpdateBrowserTestRequest = {
  // string | The public ID of the test to get details from.
  publicId: "public_id_example",
  // SyntheticsBrowserTest | New test details to be saved.
  body: {
    config: {
      assertions: [
        {
    operator: "contains",
    property: "property_example",
    target: {},
    type: "body",
  },
      ],
      request: {
        allowInsecure: true,
        basicAuth: {
          password: "",
          username: "",
        },
        body: "body_example",
        certificate: {
          cert: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
          key: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
        },
        dnsServer: "dnsServer_example",
        dnsServerPort: 1,
        headers: {
          "key": "key_example",
        },
        host: "host_example",
        method: "GET",
        noSavingResponseBody: true,
        numberOfPackets: 0,
        port: 1,
        query: {},
        shouldTrackHops: true,
        timeout: 3.14,
        url: "url_example",
      },
      setCookie: "setCookie_example",
      variables: [
        {
          example: "example_example",
          id: "id_example",
          name: "VARIABLE_NAME",
          pattern: "pattern_example",
          type: "element",
        },
      ],
    },
    locations: [
      "locations_example",
    ],
    message: "",
    name: "name_example",
    options: {
      acceptSelfSigned: true,
      allowInsecure: true,
      deviceIds: [
        "laptop_large",
      ],
      disableCors: true,
      followRedirects: true,
      minFailureDuration: 1,
      minLocationFailed: 1,
      monitorName: "monitorName_example",
      monitorOptions: {
        renotifyInterval: 0,
      },
      monitorPriority: 1,
      noScreenshot: true,
      retry: {
        count: 1,
        interval: 3.14,
      },
      tickEvery: 30,
    },
    status: "live",
    steps: [
      {
        allowFailure: true,
        name: "name_example",
        params: {},
        timeout: 1,
        type: "assertCurrentUrl",
      },
    ],
    tags: [
      "tags_example",
    ],
    type: "browser",
  },
};

apiInstance.updateBrowserTest(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsBrowserTest**| New test details to be saved. |
 **publicId** | [**string**] | The public ID of the test to get details from. | defaults to undefined


### Return type

**SyntheticsBrowserTest**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | - JSON format is wrong - Updating sub-type is forbidden |  -  |
**403** | Forbidden |  -  |
**404** | - Synthetic Monitoring is not activated for the user - Test is not owned by the user - Test can&#39;t be found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updatePrivateLocation**
> SyntheticsPrivateLocation updatePrivateLocation(body)

Edit a Synthetics private location.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiUpdatePrivateLocationRequest = {
  // string | The ID of the private location.
  locationId: "location_id_example",
  // SyntheticsPrivateLocation | Details of the private location to be updated.
  body: {
    description: "Description of private location",
    name: "New private location",
    tags: ["team:front"],
  },
};

apiInstance.updatePrivateLocation(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsPrivateLocation**| Details of the private location to be updated. |
 **locationId** | [**string**] | The ID of the private location. | defaults to undefined


### Return type

**SyntheticsPrivateLocation**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | - Private locations are not activated for the user - Private location does not exist |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateTestPauseStatus**
> boolean updateTestPauseStatus(body)

Pause or start a Synthetics test by changing the status.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiUpdateTestPauseStatusRequest = {
  // string | The public ID of the Synthetic test to update.
  publicId: "public_id_example",
  // SyntheticsUpdateTestPauseStatusPayload | Status to set the given Synthetic test to.
  body: {
    newStatus: "live",
  },
};

apiInstance.updateTestPauseStatus(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **SyntheticsUpdateTestPauseStatusPayload**| Status to set the given Synthetic test to. |
 **publicId** | [**string**] | The public ID of the Synthetic test to update. | defaults to undefined


### Return type

**boolean**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns a boolean indicating if the update was successful. |  -  |
**400** | JSON format is wrong. |  -  |
**403** | Forbidden |  -  |
**404** | - Synthetic is not activated for the user - Test is not owned by the user |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

