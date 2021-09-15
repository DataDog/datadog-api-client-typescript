# datadog-api-client.v2.RolesApi

All URIs are relative to *https://api.datadoghq.com*

| Method                                                               | HTTP request                                   | Description                 |
| -------------------------------------------------------------------- | ---------------------------------------------- | --------------------------- |
| [**addPermissionToRole**](RolesApi.md#addPermissionToRole)           | **POST** /api/v2/roles/{role_id}/permissions   | Grant permission to a role  |
| [**addUserToRole**](RolesApi.md#addUserToRole)                       | **POST** /api/v2/roles/{role_id}/users         | Add a user to a role        |
| [**createRole**](RolesApi.md#createRole)                             | **POST** /api/v2/roles                         | Create role                 |
| [**deleteRole**](RolesApi.md#deleteRole)                             | **DELETE** /api/v2/roles/{role_id}             | Delete role                 |
| [**getRole**](RolesApi.md#getRole)                                   | **GET** /api/v2/roles/{role_id}                | Get a role                  |
| [**listPermissions**](RolesApi.md#listPermissions)                   | **GET** /api/v2/permissions                    | List permissions            |
| [**listRolePermissions**](RolesApi.md#listRolePermissions)           | **GET** /api/v2/roles/{role_id}/permissions    | List permissions for a role |
| [**listRoleUsers**](RolesApi.md#listRoleUsers)                       | **GET** /api/v2/roles/{role_id}/users          | Get all users of a role     |
| [**listRoles**](RolesApi.md#listRoles)                               | **GET** /api/v2/roles                          | List roles                  |
| [**removePermissionFromRole**](RolesApi.md#removePermissionFromRole) | **DELETE** /api/v2/roles/{role_id}/permissions | Revoke permission           |
| [**removeUserFromRole**](RolesApi.md#removeUserFromRole)             | **DELETE** /api/v2/roles/{role_id}/users       | Remove a user from a role   |
| [**updateRole**](RolesApi.md#updateRole)                             | **PATCH** /api/v2/roles/{role_id}              | Update a role               |

## **addPermissionToRole**

> PermissionsResponse addPermissionToRole(body)

Adds a permission to a role.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiAddPermissionToRoleRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
  // RelationshipToPermission
  body: {
    data: {
      id: "id_example",
      type: "permissions",
    },
  },
};

apiInstance
  .addPermissionToRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type                         | Description         | Notes                 |
| ---------- | ---------------------------- | ------------------- | --------------------- |
| **body**   | **RelationshipToPermission** |                     |
| **roleId** | [**string**]                 | The ID of the role. | defaults to undefined |

### Return type

**PermissionsResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **404**     | Not found            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **addUserToRole**

> UsersResponse addUserToRole(body)

Adds a user to a role.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiAddUserToRoleRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
  // RelationshipToUser
  body: {
    data: {
      id: "00000000-0000-0000-0000-000000000000",
      type: "users",
    },
  },
};

apiInstance
  .addUserToRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type                   | Description         | Notes                 |
| ---------- | ---------------------- | ------------------- | --------------------- |
| **body**   | **RelationshipToUser** |                     |
| **roleId** | [**string**]           | The ID of the role. | defaults to undefined |

### Return type

**UsersResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **404**     | Not found            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **createRole**

> RoleCreateResponse createRole(body)

Create a new role for your organization.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiCreateRoleRequest = {
  // RoleCreateRequest
  body: {
    data: {
      attributes: {
        name: "developers",
      },
      relationships: {
        permissions: {
          data: [
            {
              id: "id_example",
              type: "permissions",
            },
          ],
        },
        users: {
          data: [],
        },
      },
      type: "roles",
    },
  },
};

apiInstance
  .createRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name     | Type                  | Description | Notes |
| -------- | --------------------- | ----------- | ----- |
| **body** | **RoleCreateRequest** |             |

### Return type

**RoleCreateResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **deleteRole**

> void deleteRole()

Disables a role.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiDeleteRoleRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
};

apiInstance
  .deleteRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type         | Description         | Notes                 |
| ---------- | ------------ | ------------------- | --------------------- |
| **roleId** | [**string**] | The ID of the role. | defaults to undefined |

### Return type

**void**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **204**     | OK                   | -                |
| **403**     | Authentication error | -                |
| **404**     | Not found            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **getRole**

> RoleResponse getRole()

Get a role in the organization specified by the role’s `role_id`.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiGetRoleRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
};

apiInstance
  .getRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type         | Description         | Notes                 |
| ---------- | ------------ | ------------------- | --------------------- |
| **roleId** | [**string**] | The ID of the role. | defaults to undefined |

### Return type

**RoleResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication error | -                |
| **404**     | Not found            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listPermissions**

> PermissionsResponse listPermissions()

Returns a list of all permissions, including name, description, and ID.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

apiInstance
  .listPermissions()
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

**PermissionsResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listRolePermissions**

> PermissionsResponse listRolePermissions()

Returns a list of all permissions for a single role.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiListRolePermissionsRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
};

apiInstance
  .listRolePermissions(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type         | Description         | Notes                 |
| ---------- | ------------ | ------------------- | --------------------- |
| **roleId** | [**string**] | The ID of the role. | defaults to undefined |

### Return type

**PermissionsResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication error | -                |
| **404**     | Not found            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listRoleUsers**

> UsersResponse listRoleUsers()

Gets all users of a role.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiListRoleUsersRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // string | User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example `sort=-name`. Options: `name`, `email`, `status`. (optional)
  sort: "name",
  // string | Filter all users by the given string. Defaults to no filtering. (optional)
  filter: "filter_example",
};

apiInstance
  .listRoleUsers(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type         | Description                                                                                                                                                                                                                                                      | Notes                            |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **roleId**     | [**string**] | The ID of the role.                                                                                                                                                                                                                                              | defaults to undefined            |
| **pageSize**   | [**number**] | Size for a given page.                                                                                                                                                                                                                                           | (optional) defaults to 10        |
| **pageNumber** | [**number**] | Specific page number to return.                                                                                                                                                                                                                                  | (optional) defaults to 0         |
| **sort**       | [**string**] | User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;email&#x60;, &#x60;status&#x60;. | (optional) defaults to 'name'    |
| **filter**     | [**string**] | Filter all users by the given string. Defaults to no filtering.                                                                                                                                                                                                  | (optional) defaults to undefined |

### Return type

**UsersResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication error | -                |
| **404**     | Not found            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **listRoles**

> RolesResponse listRoles()

Returns all roles, including their names and IDs.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiListRolesRequest = {
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // RolesSort | Sort roles depending on the given field. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example: `sort=-name`. (optional)
  sort: "name",
  // string | Filter all roles by the given string. (optional)
  filter: "filter_example",
};

apiInstance
  .listRoles(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name           | Type          | Description                                                                                                                                                                                          | Notes                            |
| -------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| **pageSize**   | [**number**]  | Size for a given page.                                                                                                                                                                               | (optional) defaults to 10        |
| **pageNumber** | [**number**]  | Specific page number to return.                                                                                                                                                                      | (optional) defaults to 0         |
| **sort**       | **RolesSort** | Sort roles depending on the given field. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example: &#x60;sort&#x3D;-name&#x60;. | (optional) defaults to undefined |
| **filter**     | [**string**]  | Filter all roles by the given string.                                                                                                                                                                | (optional) defaults to undefined |

### Return type

**RolesResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **403**     | Authentication error | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **removePermissionFromRole**

> PermissionsResponse removePermissionFromRole(body)

Removes a permission from a role.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiRemovePermissionFromRoleRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
  // RelationshipToPermission
  body: {
    data: {
      id: "id_example",
      type: "permissions",
    },
  },
};

apiInstance
  .removePermissionFromRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type                         | Description         | Notes                 |
| ---------- | ---------------------------- | ------------------- | --------------------- |
| **body**   | **RelationshipToPermission** |                     |
| **roleId** | [**string**]                 | The ID of the role. | defaults to undefined |

### Return type

**PermissionsResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **404**     | Not found            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **removeUserFromRole**

> UsersResponse removeUserFromRole(body)

Removes a user from a role.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiRemoveUserFromRoleRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
  // RelationshipToUser
  body: {
    data: {
      id: "00000000-0000-0000-0000-000000000000",
      type: "users",
    },
  },
};

apiInstance
  .removeUserFromRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type                   | Description         | Notes                 |
| ---------- | ---------------------- | ------------------- | --------------------- |
| **body**   | **RelationshipToUser** |                     |
| **roleId** | [**string**]           | The ID of the role. | defaults to undefined |

### Return type

**UsersResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **404**     | Not found            | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

## **updateRole**

> RoleUpdateResponse updateRole(body)

Edit a role. Can only be used with application keys belonging to administrators.

### Example

```typescript
import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params: v2.RolesApiUpdateRoleRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
  // RoleUpdateRequest
  body: {
    data: {
      attributes: {
        name: "name_example",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "roles",
    },
  },
};

apiInstance
  .updateRole(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
```

### Parameters

| Name       | Type                  | Description         | Notes                 |
| ---------- | --------------------- | ------------------- | --------------------- |
| **body**   | **RoleUpdateRequest** |                     |
| **roleId** | [**string**]          | The ID of the role. | defaults to undefined |

### Return type

**RoleUpdateResponse**

### Authorization

[AuthZ](README.md#AuthZ), [apiKeyAuth](README.md#apiKeyAuth), [appKeyAuth](README.md#appKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### HTTP response details

| Status code | Description          | Response headers |
| ----------- | -------------------- | ---------------- |
| **200**     | OK                   | -                |
| **400**     | Bad Request          | -                |
| **403**     | Authentication error | -                |
| **404**     | Not found            | -                |
| **422**     | Unprocessable Entity | -                |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)
