# datadog-api-client.v2.IncidentsApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIncident**](IncidentsApi.md#createIncident) | **POST** /api/v2/incidents | Create an incident
[**deleteIncident**](IncidentsApi.md#deleteIncident) | **DELETE** /api/v2/incidents/{incident_id} | Delete an existing incident
[**getIncident**](IncidentsApi.md#getIncident) | **GET** /api/v2/incidents/{incident_id} | Get the details of an incident
[**listIncidents**](IncidentsApi.md#listIncidents) | **GET** /api/v2/incidents | Get a list of incidents
[**updateIncident**](IncidentsApi.md#updateIncident) | **PATCH** /api/v2/incidents/{incident_id} | Update an existing incident


## **createIncident**
> IncidentResponse createIncident(body)

Create an incident.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

let params:v2.IncidentsApiCreateIncidentRequest = {
  // IncidentCreateRequest | Incident payload.
  body: {
    data: {
      attributes: {
        customerImpacted: false,
        fields: {
          "key": {
    type: "dropdown",
    value: "SEV-1",
  },
        },
        initialTimelineCells: [
          {
    cellType: "markdown",
    content: {
      content: "An example timeline cell message.",
    },
    important: false,
  },
        ],
        notificationHandles: [
          "@test.user@test.com",
        ],
        title: "A test incident title",
      },
      relationships: {
        commander: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
      },
      type: "incidents",
    },
  },
};

apiInstance.createIncident(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IncidentCreateRequest**| Incident payload. |


### Return type

**IncidentResponse**

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

## **deleteIncident**
> void deleteIncident()

Deletes an existing incident from the users organization.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

let params:v2.IncidentsApiDeleteIncidentRequest = {
  // string | The UUID the incident.
  incidentId: "incident_id_example",
};

apiInstance.deleteIncident(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incidentId** | [**string**] | The UUID the incident. | defaults to undefined


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

## **getIncident**
> IncidentResponse getIncident()

Get the details of an incident by `incident_id`.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

let params:v2.IncidentsApiGetIncidentRequest = {
  // string | The UUID the incident.
  incidentId: "incident_id_example",
  // Array<IncidentRelatedObject> | Specifies which types of related objects should be included in the response. (optional)
  include: [
    "users",
  ],
};

apiInstance.getIncident(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **incidentId** | [**string**] | The UUID the incident. | defaults to undefined
 **include** | **Array&lt;IncidentRelatedObject&gt;** | Specifies which types of related objects should be included in the response. | (optional) defaults to undefined


### Return type

**IncidentResponse**

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

## **listIncidents**
> IncidentsResponse listIncidents()

Get all incidents for the user's organization.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

let params:v2.IncidentsApiListIncidentsRequest = {
  // Array<IncidentRelatedObject> | Specifies which types of related objects should be included in the response. (optional)
  include: [
    "users",
  ],
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific offset to use as the beginning of the returned page. (optional)
  pageOffset: 0,
};

apiInstance.listIncidents(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include** | **Array&lt;IncidentRelatedObject&gt;** | Specifies which types of related objects should be included in the response. | (optional) defaults to undefined
 **pageSize** | [**number**] | Size for a given page. | (optional) defaults to 10
 **pageOffset** | [**number**] | Specific offset to use as the beginning of the returned page. | (optional) defaults to 0


### Return type

**IncidentsResponse**

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

## **updateIncident**
> IncidentResponse updateIncident(body)

Updates an incident. Provide only the attributes that should be updated as this request is a partial update.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentsApi(configuration);

let params:v2.IncidentsApiUpdateIncidentRequest = {
  // string | The UUID the incident.
  incidentId: "incident_id_example",
  // IncidentUpdateRequest | Incident Payload.
  body: {
    data: {
      attributes: {
        customerImpactEnd: new Date('1970-01-01T00:00:00.00Z'),
        customerImpactScope: "Example customer impact scope",
        customerImpactStart: new Date('1970-01-01T00:00:00.00Z'),
        customerImpacted: false,
        detected: new Date('1970-01-01T00:00:00.00Z'),
        fields: {
          "key": {
    type: "dropdown",
    value: "SEV-1",
  },
        },
        notificationHandles: [
          "@test.user@test.com",
        ],
        resolved: new Date('1970-01-01T00:00:00.00Z'),
        title: "A test incident title",
      },
      id: "00000000-0000-0000-0000-000000000000",
      relationships: {
        commanderUser: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
        createdByUser: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
        integrations: {
          data: [
            {
              id: "00000000-0000-0000-0000-000000000000",
              type: "incident_integrations",
            },
          ],
        },
        lastModifiedByUser: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "users",
          },
        },
        postmortem: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "incident_postmortems",
          },
        },
      },
      type: "incidents",
    },
  },
};

apiInstance.updateIncident(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **IncidentUpdateRequest**| Incident Payload. |
 **incidentId** | [**string**] | The UUID the incident. | defaults to undefined


### Return type

**IncidentResponse**

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

