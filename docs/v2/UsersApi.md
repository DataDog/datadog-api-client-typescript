# datadog-api-client.v2.UsersApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /api/v2/users | Create a user
[**disableUser**](UsersApi.md#disableUser) | **DELETE** /api/v2/users/{user_id} | Disable a user
[**getInvitation**](UsersApi.md#getInvitation) | **GET** /api/v2/user_invitations/{user_invitation_uuid} | Get a user invitation
[**getUser**](UsersApi.md#getUser) | **GET** /api/v2/users/{user_id} | Get user details
[**listUserOrganizations**](UsersApi.md#listUserOrganizations) | **GET** /api/v2/users/{user_id}/orgs | Get a user organization
[**listUserPermissions**](UsersApi.md#listUserPermissions) | **GET** /api/v2/users/{user_id}/permissions | Get a user permissions
[**listUsers**](UsersApi.md#listUsers) | **GET** /api/v2/users | List all users
[**sendInvitations**](UsersApi.md#sendInvitations) | **POST** /api/v2/user_invitations | Send invitation emails
[**updateUser**](UsersApi.md#updateUser) | **PATCH** /api/v2/users/{user_id} | Update a user


## **createUser**
> UserResponse createUser(body)

Create a user for your organization.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiCreateUserRequest = {
  // UserCreateRequest
  body: {
    data: {
      attributes: {
        email: "jane.doe@example.com",
        name: "name_example",
        title: "title_example",
      },
      relationships: {
        roles: {
          data: [
            {
              id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
              type: "roles",
            },
          ],
        },
      },
      type: "users",
    },
  },
};

apiInstance.createUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UserCreateRequest**|  |


### Return type

**UserResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Authentication error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **disableUser**
> void disableUser()

Disable a user. Can only be used with an application key belonging to an administrator user.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiDisableUserRequest = {
  // string | The ID of the user.
  userId: "00000000-0000-0000-0000-000000000000",
};

apiInstance.disableUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The ID of the user. | defaults to undefined


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
**403** | Authentication error |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getInvitation**
> UserInvitationResponse getInvitation()

Returns a single user invitation by its UUID.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiGetInvitationRequest = {
  // string | The UUID of the user invitation.
  userInvitationUuid: "00000000-0000-0000-0000-000000000000",
};

apiInstance.getInvitation(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInvitationUuid** | [**string**] | The UUID of the user invitation. | defaults to undefined


### Return type

**UserInvitationResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Authentication error |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUser**
> UserResponse getUser()

Get a user in the organization specified by the user’s `user_id`.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiGetUserRequest = {
  // string | The ID of the user.
  userId: "00000000-0000-0000-0000-000000000000",
};

apiInstance.getUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The ID of the user. | defaults to undefined


### Return type

**UserResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK for get user |  -  |
**403** | Authentication error |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listUserOrganizations**
> UserResponse listUserOrganizations()

Get a user organization. Returns the user information and all organizations joined by this user.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiListUserOrganizationsRequest = {
  // string | The ID of the user.
  userId: "00000000-0000-0000-0000-000000000000",
};

apiInstance.listUserOrganizations(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The ID of the user. | defaults to undefined


### Return type

**UserResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Authentication error |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listUserPermissions**
> PermissionsResponse listUserPermissions()

Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiListUserPermissionsRequest = {
  // string | The ID of the user.
  userId: "00000000-0000-0000-0000-000000000000",
};

apiInstance.listUserPermissions(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The ID of the user. | defaults to undefined


### Return type

**PermissionsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**403** | Authentication error |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listUsers**
> UsersResponse listUsers()

Get the list of all users in the organization. This list includes all users even if they are deactivated or unverified.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiListUsersRequest = {
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // string | User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example `sort=-name`. Options: `name`, `modified_at`, `user_count`. (optional)
  sort: "name",
  // QuerySortOrder | Direction of sort. Options: `asc`, `desc`. (optional)
  sortDir: "desc",
  // string | Filter all users by the given string. Defaults to no filtering. (optional)
  filter: "filter_example",
  // string | Filter on status attribute. Comma separated list, with possible values `Active`, `Pending`, and `Disabled`. Defaults to no filtering. (optional)
  filterStatus: "Active",
};

apiInstance.listUsers(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | Size for a given page. | (optional) defaults to 10
 **pageNumber** | [**number**] | Specific page number to return. | (optional) defaults to 0
 **sort** | [**string**] | User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;modified_at&#x60;, &#x60;user_count&#x60;. | (optional) defaults to 'name'
 **sortDir** | **QuerySortOrder** | Direction of sort. Options: &#x60;asc&#x60;, &#x60;desc&#x60;. | (optional) defaults to undefined
 **filter** | [**string**] | Filter all users by the given string. Defaults to no filtering. | (optional) defaults to undefined
 **filterStatus** | [**string**] | Filter on status attribute. Comma separated list, with possible values &#x60;Active&#x60;, &#x60;Pending&#x60;, and &#x60;Disabled&#x60;. Defaults to no filtering. | (optional) defaults to undefined


### Return type

**UsersResponse**

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
**403** | Authentication error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **sendInvitations**
> UserInvitationsResponse sendInvitations(body)

Sends emails to one or more users inviting them to join the organization.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiSendInvitationsRequest = {
  // UserInvitationsRequest
  body: {
    data: [
      {
        relationships: {
          user: {
            data: {
              id: "00000000-0000-0000-0000-000000000000",
              type: "users",
            },
          },
        },
        type: "user_invitations",
      },
    ],
  },
};

apiInstance.sendInvitations(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UserInvitationsRequest**|  |


### Return type

**UserInvitationsResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Authentication error |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateUser**
> UserResponse updateUser(body)

Edit a user. Can only be used with an application key belonging to an administrator user.

### Example


```typescript
import { v2 } from 'datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiUpdateUserRequest = {
  // string | The ID of the user.
  userId: "00000000-0000-0000-0000-000000000000",
  // UserUpdateRequest
  body: {
    data: {
      attributes: {
        disabled: true,
        email: "email_example",
        name: "name_example",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "users",
    },
  },
};

apiInstance.updateUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **UserUpdateRequest**|  |
 **userId** | [**string**] | The ID of the user. | defaults to undefined


### Return type

**UserResponse**

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
**403** | Authentication error |  -  |
**404** | Not found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

