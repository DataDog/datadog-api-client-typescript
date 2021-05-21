import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { PermissionsResponse } from '../models/PermissionsResponse';
import { RelationshipToPermission } from '../models/RelationshipToPermission';
import { RelationshipToUser } from '../models/RelationshipToUser';
import { RoleCreateRequest } from '../models/RoleCreateRequest';
import { RoleCreateResponse } from '../models/RoleCreateResponse';
import { RoleResponse } from '../models/RoleResponse';
import { RoleUpdateRequest } from '../models/RoleUpdateRequest';
import { RoleUpdateResponse } from '../models/RoleUpdateResponse';
import { RolesResponse } from '../models/RolesResponse';
import { RolesSort } from '../models/RolesSort';
import { UsersResponse } from '../models/UsersResponse';
/**
 * no description
 */
export declare class RolesApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Adds a permission to a role.
     * Grant permission to a role
     * @param roleId The ID of the role.
     * @param body
     */
    addPermissionToRole(roleId: string, body: RelationshipToPermission, options?: Configuration): Promise<RequestContext>;
    /**
     * Adds a user to a role.
     * Add a user to a role
     * @param roleId The ID of the role.
     * @param body
     */
    addUserToRole(roleId: string, body: RelationshipToUser, options?: Configuration): Promise<RequestContext>;
    /**
     * Create a new role for your organization.
     * Create role
     * @param body
     */
    createRole(body: RoleCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Disables a role.
     * Delete role
     * @param roleId The ID of the role.
     */
    deleteRole(roleId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a role in the organization specified by the role’s `role_id`.
     * Get a role
     * @param roleId The ID of the role.
     */
    getRole(roleId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Returns a list of all permissions, including name, description, and ID.
     * List permissions
     */
    listPermissions(options?: Configuration): Promise<RequestContext>;
    /**
     * Returns a list of all permissions for a single role.
     * List permissions for a role
     * @param roleId The ID of the role.
     */
    listRolePermissions(roleId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Gets all users of a role.
     * Get all users of a role
     * @param roleId The ID of the role.
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;email&#x60;, &#x60;status&#x60;.
     * @param filter Filter all users by the given string. Defaults to no filtering.
     */
    listRoleUsers(roleId: string, pageSize?: number, pageNumber?: number, sort?: string, filter?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Returns all roles, including their names and IDs.
     * List roles
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort Sort roles depending on the given field. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example: &#x60;sort&#x3D;-name&#x60;.
     * @param filter Filter all roles by the given string.
     */
    listRoles(pageSize?: number, pageNumber?: number, sort?: RolesSort, filter?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Removes a permission from a role.
     * Revoke permission
     * @param roleId The ID of the role.
     * @param body
     */
    removePermissionFromRole(roleId: string, body: RelationshipToPermission, options?: Configuration): Promise<RequestContext>;
    /**
     * Removes a user from a role.
     * Remove a user from a role
     * @param roleId The ID of the role.
     * @param body
     */
    removeUserFromRole(roleId: string, body: RelationshipToUser, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit a role. Can only be used with application keys belonging to administrators.
     * Update a role
     * @param roleId The ID of the role.
     * @param body
     */
    updateRole(roleId: string, body: RoleUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class RolesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addPermissionToRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    addPermissionToRole(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addUserToRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    addUserToRole(response: ResponseContext): Promise<UsersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    createRole(response: ResponseContext): Promise<RoleCreateResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteRole(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    getRole(response: ResponseContext): Promise<RoleResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listPermissions(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRolePermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRolePermissions(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoleUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRoleUsers(response: ResponseContext): Promise<UsersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listRoles
     * @throws ApiException if the response code was not in [200, 299]
     */
    listRoles(response: ResponseContext): Promise<RolesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removePermissionFromRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    removePermissionFromRole(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to removeUserFromRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    removeUserFromRole(response: ResponseContext): Promise<UsersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateRole
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateRole(response: ResponseContext): Promise<RoleUpdateResponse>;
}
