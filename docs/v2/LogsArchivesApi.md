# datadog-api-client.v2.LogsArchivesApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addReadRoleToArchive**](LogsArchivesApi.md#addReadRoleToArchive) | **POST** /api/v2/logs/config/archives/{archive_id}/readers | Grant role to an archive
[**createLogsArchive**](LogsArchivesApi.md#createLogsArchive) | **POST** /api/v2/logs/config/archives | Create an archive
[**deleteLogsArchive**](LogsArchivesApi.md#deleteLogsArchive) | **DELETE** /api/v2/logs/config/archives/{archive_id} | Delete an archive
[**getLogsArchive**](LogsArchivesApi.md#getLogsArchive) | **GET** /api/v2/logs/config/archives/{archive_id} | Get an archive
[**getLogsArchiveOrder**](LogsArchivesApi.md#getLogsArchiveOrder) | **GET** /api/v2/logs/config/archive-order | Get archive order
[**listArchiveReadRoles**](LogsArchivesApi.md#listArchiveReadRoles) | **GET** /api/v2/logs/config/archives/{archive_id}/readers | List read roles for an archive
[**listLogsArchives**](LogsArchivesApi.md#listLogsArchives) | **GET** /api/v2/logs/config/archives | Get all archives
[**removeRoleFromArchive**](LogsArchivesApi.md#removeRoleFromArchive) | **DELETE** /api/v2/logs/config/archives/{archive_id}/readers | Revoke role from an archive
[**updateLogsArchive**](LogsArchivesApi.md#updateLogsArchive) | **PUT** /api/v2/logs/config/archives/{archive_id} | Update an archive
[**updateLogsArchiveOrder**](LogsArchivesApi.md#updateLogsArchiveOrder) | **PUT** /api/v2/logs/config/archive-order | Update archive order


## **addReadRoleToArchive**
> void addReadRoleToArchive(body)

Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiAddReadRoleToArchiveRequest = {
  // string | The ID of the archive.
  archiveId: "archive_id_example",
  // RelationshipToRole
  body: {
    data: {
      id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
      type: "roles",
    },
  },
};

apiInstance.addReadRoleToArchive(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RelationshipToRole**|  |
 **archiveId** | [**string**] | The ID of the archive. | defaults to undefined


### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createLogsArchive**
> LogsArchive createLogsArchive(body)

Create an archive in your organization.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiCreateLogsArchiveRequest = {
  // LogsArchiveCreateRequest | The definition of the new archive.
  body: {
    data: {
      attributes: {
        destination: {
    container: "container-name",
    integration: {
      clientId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
      tenantId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
    },
    path: "path_example",
    region: "region_example",
    storageAccount: "account-name",
    type: "azure",
  },
        includeTags: false,
        name: "Nginx Archive",
        query: "source:nginx",
        rehydrationTags: [
          "team:intake",
          "team:app",
        ],
      },
      type: "archives",
    },
  },
};

apiInstance.createLogsArchive(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsArchiveCreateRequest**| The definition of the new archive. |


### Return type

**LogsArchive**

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
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteLogsArchive**
> void deleteLogsArchive()

Delete a given archive from your organization.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiDeleteLogsArchiveRequest = {
  // string | The ID of the archive.
  archiveId: "archive_id_example",
};

apiInstance.deleteLogsArchive(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **archiveId** | [**string**] | The ID of the archive. | defaults to undefined


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
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getLogsArchive**
> LogsArchive getLogsArchive()

Get a specific archive from your organization.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiGetLogsArchiveRequest = {
  // string | The ID of the archive.
  archiveId: "archive_id_example",
};

apiInstance.getLogsArchive(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **archiveId** | [**string**] | The ID of the archive. | defaults to undefined


### Return type

**LogsArchive**

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
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getLogsArchiveOrder**
> LogsArchiveOrder getLogsArchiveOrder()

Get the current order of your archives.
This endpoint takes no JSON arguments.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);


apiInstance.getLogsArchiveOrder().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LogsArchiveOrder**

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

## **listArchiveReadRoles**
> RolesResponse listArchiveReadRoles()

Returns all read roles a given archive is restricted to.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiListArchiveReadRolesRequest = {
  // string | The ID of the archive.
  archiveId: "archive_id_example",
};

apiInstance.listArchiveReadRoles(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **archiveId** | [**string**] | The ID of the archive. | defaults to undefined


### Return type

**RolesResponse**

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
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listLogsArchives**
> LogsArchives listLogsArchives()

Get the list of configured logs archives with their definitions.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);


apiInstance.listLogsArchives().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**LogsArchives**

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

## **removeRoleFromArchive**
> void removeRoleFromArchive(body)

Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiRemoveRoleFromArchiveRequest = {
  // string | The ID of the archive.
  archiveId: "archive_id_example",
  // RelationshipToRole
  body: {
    data: {
      id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
      type: "roles",
    },
  },
};

apiInstance.removeRoleFromArchive(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **RelationshipToRole**|  |
 **archiveId** | [**string**] | The ID of the archive. | defaults to undefined


### Return type

**void**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateLogsArchive**
> LogsArchive updateLogsArchive(body)

Update a given archive configuration.

**Note**: Using this method updates your archive configuration by **replacing**
your current configuration with the new one sent to your Datadog organization.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiUpdateLogsArchiveRequest = {
  // string | The ID of the archive.
  archiveId: "archive_id_example",
  // LogsArchiveCreateRequest | New definition of the archive.
  body: {
    data: {
      attributes: {
        destination: {
    container: "container-name",
    integration: {
      clientId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
      tenantId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
    },
    path: "path_example",
    region: "region_example",
    storageAccount: "account-name",
    type: "azure",
  },
        includeTags: false,
        name: "Nginx Archive",
        query: "source:nginx",
        rehydrationTags: [
          "team:intake",
          "team:app",
        ],
      },
      type: "archives",
    },
  },
};

apiInstance.updateLogsArchive(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsArchiveCreateRequest**| New definition of the archive. |
 **archiveId** | [**string**] | The ID of the archive. | defaults to undefined


### Return type

**LogsArchive**

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
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateLogsArchiveOrder**
> LogsArchiveOrder updateLogsArchiveOrder(body)

Update the order of your archives. Since logs are processed sequentially, reordering an archive may change
the structure and content of the data processed by other archives.

**Note**: Using the `PUT` method updates your archive's order by replacing the current order
with the new one.

### Example


```typescript
import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

let params:v2.LogsArchivesApiUpdateLogsArchiveOrderRequest = {
  // LogsArchiveOrder | An object containing the new ordered list of archive IDs.
  body: {
    data: {
      attributes: {
        archiveIds: [
          "a2zcMylnM4OCHpYusxIi1g",
          "a2zcMylnM4OCHpYusxIi2g",
          "a2zcMylnM4OCHpYusxIi3g",
        ],
      },
      type: "archive_order",
    },
  },
};

apiInstance.updateLogsArchiveOrder(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **LogsArchiveOrder**| An object containing the new ordered list of archive IDs. |


### Return type

**LogsArchiveOrder**

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
**403** | Forbidden |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

