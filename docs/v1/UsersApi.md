# datadog-api-client.v1.UsersApi

All URIs are relative to *https://api.datadoghq.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUser**](UsersApi.md#createUser) | **POST** /api/v1/user | Create a user
[**disableUser**](UsersApi.md#disableUser) | **DELETE** /api/v1/user/{user_handle} | Disable a user
[**getUser**](UsersApi.md#getUser) | **GET** /api/v1/user/{user_handle} | Get user details
[**listUsers**](UsersApi.md#listUsers) | **GET** /api/v1/user | List all users
[**updateUser**](UsersApi.md#updateUser) | **PUT** /api/v1/user/{user_handle} | Update a user


## **createUser**
> UserResponse createUser(body)

Create a user for your organization.

**Note**: Users can only be created with the admin access role
if application keys belong to administrators.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);

let params:v1.UsersApiCreateUserRequest = {
  // User | User object that needs to be created.
  body: {
    accessRole: "st",
    disabled: false,
    email: "test@datadoghq.com",
    handle: "test@datadoghq.com",
    name: "test user",
  },
};

apiInstance.createUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **User**| User object that needs to be created. |


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
**200** | User created |  -  |
**400** | Bad Request |  -  |
**403** | Authentication error |  -  |
**409** | Conflict |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **disableUser**
> UserDisableResponse disableUser()

Delete a user from an organization.

**Note**: This endpoint can only be used with application keys belonging to
administrators.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);

let params:v1.UsersApiDisableUserRequest = {
  // string | The handle of the user.
  userHandle: "test@datadoghq.com",
};

apiInstance.disableUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userHandle** | **string** | The handle of the user. | defaults to undefined


### Return type

**UserDisableResponse**

### Authorization

[apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User disabled |  -  |
**400** | Bad Request |  -  |
**403** | Authentication error |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getUser**
> UserResponse getUser()

Get a user's details.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);

let params:v1.UsersApiGetUserRequest = {
  // string | The ID of the user.
  userHandle: "test@datadoghq.com",
};

apiInstance.getUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userHandle** | **string** | The ID of the user. | defaults to undefined


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
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listUsers**
> UserListResponse listUsers()

List all users for your organization.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);


apiInstance.listUsers().then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserListResponse**

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

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateUser**
> UserResponse updateUser(body)

Update a user information.

**Note**: It can only be used with application keys belonging to administrators.

### Example


```typescript
import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);

let params:v1.UsersApiUpdateUserRequest = {
  // string | The ID of the user.
  userHandle: "test@datadoghq.com",
  // User | Description of the update.
  body: {
    accessRole: "st",
    disabled: false,
    email: "test@datadoghq.com",
    handle: "test@datadoghq.com",
    name: "test user",
  },
};

apiInstance.updateUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **User**| Description of the update. |
 **userHandle** | **string** | The ID of the user. | defaults to undefined


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
**200** | User updated |  -  |
**400** | Bad Request |  -  |
**403** | Authentication error |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

