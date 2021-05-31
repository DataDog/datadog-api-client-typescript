# datadog-api-client.v2.IncidentTeamsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIncidentTeam**](IncidentTeamsApi.md#createIncidentTeam) | **POST** /api/v2/teams | Create a new incident team
[**deleteIncidentTeam**](IncidentTeamsApi.md#deleteIncidentTeam) | **DELETE** /api/v2/teams/{team_id} | Delete an existing incident team
[**getIncidentTeam**](IncidentTeamsApi.md#getIncidentTeam) | **GET** /api/v2/teams/{team_id} | Get details of an incident team
[**listIncidentTeams**](IncidentTeamsApi.md#listIncidentTeams) | **GET** /api/v2/teams | Get a list of all incident teams
[**updateIncidentTeam**](IncidentTeamsApi.md#updateIncidentTeam) | **PATCH** /api/v2/teams/{team_id} | Update an existing incident team


## **createIncidentTeam**
> IncidentTeamResponse createIncidentTeam(body)

Creates a new incident team.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentTeamsApi(configuration);

let params:v2.IncidentTeamsApiCreateIncidentTeamRequest = {
  // IncidentTeamCreateRequest | Incident Team Payload.
  body: {
    data: {
      attributes: {
        name: "team name",
      },
      type: "teams",
    },
  },
};

apiInstance.createIncidentTeam(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IncidentTeamCreateRequest**| Incident Team Payload. |


### Return type

**IncidentTeamResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | CREATED |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteIncidentTeam**
> void deleteIncidentTeam()

Deletes an existing incident team.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentTeamsApi(configuration);

let params:v2.IncidentTeamsApiDeleteIncidentTeamRequest = {
  // string | The ID of the incident team.
  teamId: "team_id_example",
};

apiInstance.deleteIncidentTeam(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] | The ID of the incident team. | defaults to undefined


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
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getIncidentTeam**
> IncidentTeamResponse getIncidentTeam()

Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentTeamsApi(configuration);

let params:v2.IncidentTeamsApiGetIncidentTeamRequest = {
  // string | The ID of the incident team.
  teamId: "team_id_example",
  // IncidentRelatedObject | Specifies which types of related objects should be included in the response. (optional)
  include: "users",
};

apiInstance.getIncidentTeam(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | [**string**] | The ID of the incident team. | defaults to undefined
 **include** | **IncidentRelatedObject** | Specifies which types of related objects should be included in the response. | (optional) defaults to undefined


### Return type

**IncidentTeamResponse**

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
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listIncidentTeams**
> IncidentTeamsResponse listIncidentTeams()

Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentTeamsApi(configuration);

let params:v2.IncidentTeamsApiListIncidentTeamsRequest = {
  // IncidentRelatedObject | Specifies which types of related objects should be included in the response. (optional)
  include: "users",
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific offset to use as the beginning of the returned page. (optional)
  pageOffset: 0,
  // string | A search query that filters teams by name. (optional)
  filter: "ExampleTeamName",
};

apiInstance.listIncidentTeams(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **IncidentRelatedObject** | Specifies which types of related objects should be included in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | Size for a given page. | (optional) defaults to 10
 **pageOffset** | [**number**] | Specific offset to use as the beginning of the returned page. | (optional) defaults to 0
 **filter** | [**string**] | A search query that filters teams by name. | (optional) defaults to undefined


### Return type

**IncidentTeamsResponse**

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
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateIncidentTeam**
> IncidentTeamResponse updateIncidentTeam(body)

Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentTeamsApi(configuration);

let params:v2.IncidentTeamsApiUpdateIncidentTeamRequest = {
  // string | The ID of the incident team.
  teamId: "team_id_example",
  // IncidentTeamUpdateRequest | Incident Team Payload.
  body: {
    data: {
      attributes: {
        name: "team name",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "teams",
    },
  },
};

apiInstance.updateIncidentTeam(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IncidentTeamUpdateRequest**| Incident Team Payload. |
 **teamId** | [**string**] | The ID of the incident team. | defaults to undefined


### Return type

**IncidentTeamResponse**

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
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

