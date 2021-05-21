import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ApiKey } from '../models/ApiKey';
import { ApiKeyListResponse } from '../models/ApiKeyListResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { ApplicationKey } from '../models/ApplicationKey';
import { ApplicationKeyListResponse } from '../models/ApplicationKeyListResponse';
import { ApplicationKeyResponse } from '../models/ApplicationKeyResponse';
/**
 * no description
 */
export declare class KeyManagementApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Creates an API key with a given name.
     * Create an API key
     * @param body
     */
    createAPIKey(body: ApiKey, options?: Configuration): Promise<RequestContext>;
    /**
     * Create an application key with a given name.
     * Create an application key
     * @param body
     */
    createApplicationKey(body: ApplicationKey, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a given API key.
     * Delete an API key
     * @param key The specific API key you are working with.
     */
    deleteAPIKey(key: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a given application key.
     * Delete an application key
     * @param key The specific APP key you are working with.
     */
    deleteApplicationKey(key: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a given API key.
     * Get API key
     * @param key The specific API key you are working with.
     */
    getAPIKey(key: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a given application key.
     * Get an application key
     * @param key The specific APP key you are working with.
     */
    getApplicationKey(key: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all API keys available for your account.
     * Get all API keys
     */
    listAPIKeys(options?: Configuration): Promise<RequestContext>;
    /**
     * Get all application keys available for your Datadog account.
     * Get all application keys
     */
    listApplicationKeys(options?: Configuration): Promise<RequestContext>;
    /**
     * Edit an API key name.
     * Edit an API key
     * @param key The specific API key you are working with.
     * @param body
     */
    updateAPIKey(key: string, body: ApiKey, options?: Configuration): Promise<RequestContext>;
    /**
     * Edit an application key name.
     * Edit an application key
     * @param key The specific APP key you are working with.
     * @param body
     */
    updateApplicationKey(key: string, body: ApplicationKey, options?: Configuration): Promise<RequestContext>;
}
export declare class KeyManagementApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createAPIKey(response: ResponseContext): Promise<ApiKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    createApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteAPIKey(response: ResponseContext): Promise<ApiKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getAPIKey(response: ResponseContext): Promise<ApiKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    getApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAPIKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listAPIKeys(response: ResponseContext): Promise<ApiKeyListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
    listApplicationKeys(response: ResponseContext): Promise<ApplicationKeyListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateAPIKey(response: ResponseContext): Promise<ApiKeyResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse>;
}
