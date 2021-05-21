import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { User } from '../models/User';
import { UserDisableResponse } from '../models/UserDisableResponse';
import { UserListResponse } from '../models/UserListResponse';
import { UserResponse } from '../models/UserResponse';
/**
 * no description
 */
export declare class UsersApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a user for your organization.  **Note**: Users can only be created with the admin access role if application keys belong to administrators.
     * Create a user
     * @param body User object that needs to be created.
     */
    createUser(body: User, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a user from an organization.  **Note**: This endpoint can only be used with application keys belonging to administrators.
     * Disable a user
     * @param userHandle The handle of the user.
     */
    disableUser(userHandle: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a user's details.
     * Get user details
     * @param userHandle The ID of the user.
     */
    getUser(userHandle: string, options?: Configuration): Promise<RequestContext>;
    /**
     * List all users for your organization.
     * List all users
     */
    listUsers(options?: Configuration): Promise<RequestContext>;
    /**
     * Update a user information.  **Note**: It can only be used with application keys belonging to administrators.
     * Update a user
     * @param userHandle The ID of the user.
     * @param body Description of the update.
     */
    updateUser(userHandle: string, body: User, options?: Configuration): Promise<RequestContext>;
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
    disableUser(response: ResponseContext): Promise<UserDisableResponse>;
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
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
    listUsers(response: ResponseContext): Promise<UserListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateUser
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateUser(response: ResponseContext): Promise<UserResponse>;
}
