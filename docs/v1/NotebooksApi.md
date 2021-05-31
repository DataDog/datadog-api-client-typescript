# datadog-api-client.v1.NotebooksApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNotebook**](NotebooksApi.md#createNotebook) | **POST** /api/v1/notebooks | Create a notebook
[**deleteNotebook**](NotebooksApi.md#deleteNotebook) | **DELETE** /api/v1/notebooks/{notebook_id} | Delete a notebook
[**getNotebook**](NotebooksApi.md#getNotebook) | **GET** /api/v1/notebooks/{notebook_id} | Get a notebook
[**listNotebooks**](NotebooksApi.md#listNotebooks) | **GET** /api/v1/notebooks | Get all notebooks
[**updateNotebook**](NotebooksApi.md#updateNotebook) | **PUT** /api/v1/notebooks/{notebook_id} | Update a notebook


## **createNotebook**
> NotebookResponse createNotebook(body)

Create a notebook using the specified options.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

let params:v1.NotebooksApiCreateNotebookRequest = {
  // NotebookCreateRequest | The JSON description of the notebook you want to create.
  body: {
    data: {
      attributes: {
        cells: [
          {
            attributes: {
    definition: {
      text: `# Example Header 
example content`,
      type: "markdown",
    },
  },
            type: "notebook_cells",
          },
        ],
        name: "Example Notebook",
        status: "published",
        time: {
    liveSpan: "1m",
  },
      },
      type: "notebooks",
    },
  },
};

apiInstance.createNotebook(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **NotebookCreateRequest**| The JSON description of the notebook you want to create. |


### Return type

**NotebookResponse**

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
**403** | Authentication Error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteNotebook**
> void deleteNotebook()

Delete a notebook using the specified ID.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

let params:v1.NotebooksApiDeleteNotebookRequest = {
  // number | Unique ID, assigned when you create the notebook.
  notebookId: 1,
};

apiInstance.deleteNotebook(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notebookId** | [**number**] | Unique ID, assigned when you create the notebook. | defaults to undefined


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
**400** | Bad Request |  -  |
**403** | Authentication Error |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getNotebook**
> NotebookResponse getNotebook()

Get a notebook using the specified notebook ID.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

let params:v1.NotebooksApiGetNotebookRequest = {
  // number | Unique ID, assigned when you create the notebook.
  notebookId: 1,
};

apiInstance.getNotebook(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **notebookId** | [**number**] | Unique ID, assigned when you create the notebook. | defaults to undefined


### Return type

**NotebookResponse**

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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listNotebooks**
> NotebooksResponse listNotebooks()

Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

let params:v1.NotebooksApiListNotebooksRequest = {
  // string | Return notebooks created by the given `author_handle`. (optional)
  authorHandle: "test@datadoghq.com",
  // string | Return notebooks not created by the given `author_handle`. (optional)
  excludeAuthorHandle: "test@datadoghq.com",
  // number | The index of the first notebook you want returned. (optional)
  start: 0,
  // number | The number of notebooks to be returned. (optional)
  count: 5,
  // string | Sort by field `modified` or `name`. (optional)
  sortField: "modified",
  // string | Sort by direction `asc` or `desc`. (optional)
  sortDir: "desc",
  // string | Return only notebooks with `query` string in notebook name or author handle. (optional)
  query: "postmortem",
  // boolean | Value of `false` excludes the `cells` and global `time` for each notebook. (optional)
  includeCells: false,
};

apiInstance.listNotebooks(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorHandle** | [**string**] | Return notebooks created by the given &#x60;author_handle&#x60;. | (optional) defaults to undefined
 **excludeAuthorHandle** | [**string**] | Return notebooks not created by the given &#x60;author_handle&#x60;. | (optional) defaults to undefined
 **start** | [**number**] | The index of the first notebook you want returned. | (optional) defaults to undefined
 **count** | [**number**] | The number of notebooks to be returned. | (optional) defaults to undefined
 **sortField** | [**string**] | Sort by field &#x60;modified&#x60; or &#x60;name&#x60;. | (optional) defaults to 'modified'
 **sortDir** | [**string**] | Sort by direction &#x60;asc&#x60; or &#x60;desc&#x60;. | (optional) defaults to 'desc'
 **query** | [**string**] | Return only notebooks with &#x60;query&#x60; string in notebook name or author handle. | (optional) defaults to undefined
 **includeCells** | [**boolean**] | Value of &#x60;false&#x60; excludes the &#x60;cells&#x60; and global &#x60;time&#x60; for each notebook. | (optional) defaults to undefined


### Return type

**NotebooksResponse**

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

## **updateNotebook**
> NotebookResponse updateNotebook(body)

Update a notebook using the specified ID.

### Example


```typescript
import { v1 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.NotebooksApi(configuration);

let params:v1.NotebooksApiUpdateNotebookRequest = {
  // number | Unique ID, assigned when you create the notebook.
  notebookId: 1,
  // NotebookUpdateRequest | Update notebook request body.
  body: {
    data: {
      attributes: {
        cells: [
          {
    attributes: {
    definition: {
      text: `# Example Header 
example content`,
      type: "markdown",
    },
  },
    type: "notebook_cells",
  },
        ],
        name: "Example Notebook",
        status: "published",
        time: {
    liveSpan: "1m",
  },
      },
      type: "notebooks",
    },
  },
};

apiInstance.updateNotebook(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **NotebookUpdateRequest**| Update notebook request body. |
 **notebookId** | [**number**] | Unique ID, assigned when you create the notebook. | defaults to undefined


### Return type

**NotebookResponse**

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
**403** | Authentication Error |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

