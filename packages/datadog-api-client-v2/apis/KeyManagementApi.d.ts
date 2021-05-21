import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { APIKeyCreateRequest } from '../models/APIKeyCreateRequest';
import { APIKeyResponse } from '../models/APIKeyResponse';
import { APIKeyUpdateRequest } from '../models/APIKeyUpdateRequest';
import { APIKeysResponse } from '../models/APIKeysResponse';
import { APIKeysSort } from '../models/APIKeysSort';
import { ApplicationKeyCreateRequest } from '../models/ApplicationKeyCreateRequest';
import { ApplicationKeyResponse } from '../models/ApplicationKeyResponse';
import { ApplicationKeyUpdateRequest } from '../models/ApplicationKeyUpdateRequest';
import { ApplicationKeysSort } from '../models/ApplicationKeysSort';
import { ListApplicationKeysResponse } from '../models/ListApplicationKeysResponse';
/**
 * no description
 */
export declare class KeyManagementApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create an API key.
     * Create an API key
     * @param body
     */
    createAPIKey(body: APIKeyCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Create an application key for current user
     * Create an application key for current user
     * @param body
     */
    createCurrentUserApplicationKey(body: ApplicationKeyCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete an API key.
     * Delete an API key
     * @param apiKeyId The ID of the API key.
     */
    deleteAPIKey(apiKeyId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete an application key
     * Delete an application key
     * @param appKeyId The ID of the application key.
     */
    deleteApplicationKey(appKeyId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete an application key owned by current user
     * Delete an application key owned by current user
     * @param appKeyId The ID of the application key.
     */
    deleteCurrentUserApplicationKey(appKeyId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get an API key.
     * Get API key
     * @param apiKeyId The ID of the API key.
     * @param include Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     */
    getAPIKey(apiKeyId: string, include?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get an application key owned by current user
     * Get one application key owned by current user
     * @param appKeyId The ID of the application key.
     */
    getCurrentUserApplicationKey(appKeyId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * List all API keys available for your account.
     * Get all API keys
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort API key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @param filter Filter API keys by the specified string.
     * @param filterCreatedAtStart Only include API keys created on or after the specified date.
     * @param filterCreatedAtEnd Only include API keys created on or before the specified date.
     * @param filterModifiedAtStart Only include API keys modified on or after the specified date.
     * @param filterModifiedAtEnd Only include API keys modified on or before the specified date.
     * @param include Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     */
    listAPIKeys(pageSize?: number, pageNumber?: number, sort?: APIKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, filterModifiedAtStart?: string, filterModifiedAtEnd?: string, include?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * List all application keys available for your org
     * Get all application keys
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @param filter Filter application keys by the specified string.
     * @param filterCreatedAtStart Only include application keys created on or after the specified date.
     * @param filterCreatedAtEnd Only include application keys created on or before the specified date.
     */
    listApplicationKeys(pageSize?: number, pageNumber?: number, sort?: ApplicationKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * List all application keys available for current user
     * Get all application keys owned by current user
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @param filter Filter application keys by the specified string.
     * @param filterCreatedAtStart Only include application keys created on or after the specified date.
     * @param filterCreatedAtEnd Only include application keys created on or before the specified date.
     */
    listCurrentUserApplicationKeys(pageSize?: number, pageNumber?: number, sort?: ApplicationKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Update an API key.
     * Edit an API key
     * @param apiKeyId The ID of the API key.
     * @param body
     */
    updateAPIKey(apiKeyId: string, body: APIKeyUpdateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit an application key
     * Edit an application key
     * @param appKeyId The ID of the application key.
     * @param body
     */
    updateApplicationKey(appKeyId: string, body: ApplicationKeyUpdateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit an application key owned by current user
     * Edit an application key owned by current user
     * @param appKeyId The ID of the application key.
     * @param body
     */
    updateCurrentUserApplicationKey(appKeyId: string, body: ApplicationKeyUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class KeyManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAPIKey(response: ResponseContext): Promise<APIKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createCurrentUserApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAPIKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApplicationKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteCurrentUserApplicationKey(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIKey(response: ResponseContext): Promise<APIKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getCurrentUserApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAPIKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAPIKeys(response: ResponseContext): Promise<APIKeysResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApplicationKeys(response: ResponseContext): Promise<ListApplicationKeysResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listCurrentUserApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listCurrentUserApplicationKeys(response: ResponseContext): Promise<ListApplicationKeysResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAPIKey(response: ResponseContext): Promise<APIKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateCurrentUserApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateCurrentUserApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
}
