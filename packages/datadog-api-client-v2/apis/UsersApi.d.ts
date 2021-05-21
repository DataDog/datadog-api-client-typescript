import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { PermissionsResponse } from '../models/PermissionsResponse';
import { QuerySortOrder } from '../models/QuerySortOrder';
import { UserCreateRequest } from '../models/UserCreateRequest';
import { UserInvitationResponse } from '../models/UserInvitationResponse';
import { UserInvitationsRequest } from '../models/UserInvitationsRequest';
import { UserInvitationsResponse } from '../models/UserInvitationsResponse';
import { UserResponse } from '../models/UserResponse';
import { UserUpdateRequest } from '../models/UserUpdateRequest';
import { UsersResponse } from '../models/UsersResponse';
/**
 * no description
 */
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a user for your organization.
     * Create a user
     * @param body
     */
    createUser(body: UserCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Disable a user. Can only be used with an application key belonging to an administrator user.
     * Disable a user
     * @param userId The ID of the user.
     */
    disableUser(userId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Returns a single user invitation by its UUID.
     * Get a user invitation
     * @param userInvitationUuid The UUID of the user invitation.
     */
    getInvitation(userInvitationUuid: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a user in the organization specified by the user’s `user_id`.
     * Get user details
     * @param userId The ID of the user.
     */
    getUser(userId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a user organization. Returns the user information and all organizations joined by this user.
     * Get a user organization
     * @param userId The ID of the user.
     */
    listUserOrganizations(userId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.
     * Get a user permissions
     * @param userId The ID of the user.
     */
    listUserPermissions(userId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the list of all users in the organization. This list includes all users even if they are deactivated or unverified.
     * List all users
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;modified_at&#x60;, &#x60;user_count&#x60;.
     * @param sortDir Direction of sort. Options: &#x60;asc&#x60;, &#x60;desc&#x60;.
     * @param filter Filter all users by the given string. Defaults to no filtering.
     * @param filterStatus Filter on status attribute. Comma separated list, with possible values &#x60;Active&#x60;, &#x60;Pending&#x60;, and &#x60;Disabled&#x60;. Defaults to no filtering.
     */
    listUsers(pageSize?: number, pageNumber?: number, sort?: string, sortDir?: QuerySortOrder, filter?: string, filterStatus?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Sends emails to one or more users inviting them to join the organization.
     * Send invitation emails
     * @param body
     */
    sendInvitations(body: UserInvitationsRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit a user. Can only be used with an application key belonging to an administrator user.
     * Update a user
     * @param userId The ID of the user.
     * @param body
     */
    updateUser(userId: string, body: UserUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class UsersApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    createUser(response: ResponseContext): Promise<UserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to disableUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    disableUser(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInvitation
     * @throws ApiException if the response code was not in [200, 299]
     */
    getInvitation(response: ResponseContext): Promise<UserInvitationResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    getUser(response: ResponseContext): Promise<UserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserOrganizations
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUserOrganizations(response: ResponseContext): Promise<UserResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUserPermissions
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUserPermissions(response: ResponseContext): Promise<PermissionsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUsers(response: ResponseContext): Promise<UsersResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendInvitations
     * @throws ApiException if the response code was not in [200, 299]
     */
    sendInvitations(response: ResponseContext): Promise<UserInvitationsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateUser(response: ResponseContext): Promise<UserResponse>;
}
