// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration, getServer } from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { APIErrorResponse } from '../models/APIErrorResponse';
import { ApiKey } from '../models/ApiKey';
import { ApiKeyListResponse } from '../models/ApiKeyListResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { ApplicationKey } from '../models/ApplicationKey';
import { ApplicationKeyListResponse } from '../models/ApplicationKeyListResponse';
import { ApplicationKeyResponse } from '../models/ApplicationKeyResponse';

/**
 * no description
 */
export class KeyManagementApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates an API key with a given name.
     * Create an API key
     * @param body 
     */
    public async createAPIKey(body: ApiKey, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createAPIKey.');
        }


        // Path Params
        const localVarPath = '/api/v1/api_key';

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.createAPIKey').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ApiKey", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create an application key with a given name.
     * Create an application key
     * @param body 
     */
    public async createApplicationKey(body: ApplicationKey, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createApplicationKey.');
        }


        // Path Params
        const localVarPath = '/api/v1/application_key';

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.createApplicationKey').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ApplicationKey", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a given API key.
     * Delete an API key
     * @param key The specific API key you are working with.
     */
    public async deleteAPIKey(key: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError('Required parameter key was null or undefined when calling deleteAPIKey.');
        }


        // Path Params
        const localVarPath = '/api/v1/api_key/{key}'
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.deleteAPIKey').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Delete a given application key.
     * Delete an application key
     * @param key The specific APP key you are working with.
     */
    public async deleteApplicationKey(key: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError('Required parameter key was null or undefined when calling deleteApplicationKey.');
        }


        // Path Params
        const localVarPath = '/api/v1/application_key/{key}'
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.deleteApplicationKey').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a given API key.
     * Get API key
     * @param key The specific API key you are working with.
     */
    public async getAPIKey(key: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError('Required parameter key was null or undefined when calling getAPIKey.');
        }


        // Path Params
        const localVarPath = '/api/v1/api_key/{key}'
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.getAPIKey').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get a given application key.
     * Get an application key
     * @param key The specific APP key you are working with.
     */
    public async getApplicationKey(key: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError('Required parameter key was null or undefined when calling getApplicationKey.');
        }


        // Path Params
        const localVarPath = '/api/v1/application_key/{key}'
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.getApplicationKey').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all API keys available for your account.
     * Get all API keys
     */
    public async listAPIKeys(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/api/v1/api_key';

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.listAPIKeys').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get all application keys available for your Datadog account.
     * Get all application keys
     */
    public async listApplicationKeys(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/api/v1/application_key';

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.listApplicationKeys').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Edit an API key name.
     * Edit an API key
     * @param key The specific API key you are working with.
     * @param body 
     */
    public async updateAPIKey(key: string, body: ApiKey, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError('Required parameter key was null or undefined when calling updateAPIKey.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updateAPIKey.');
        }


        // Path Params
        const localVarPath = '/api/v1/api_key/{key}'
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.updateAPIKey').makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ApiKey", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Edit an application key name.
     * Edit an application key
     * @param key The specific APP key you are working with.
     * @param body 
     */
    public async updateApplicationKey(key: string, body: ApplicationKey, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError('Required parameter key was null or undefined when calling updateApplicationKey.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updateApplicationKey.');
        }


        // Path Params
        const localVarPath = '/api/v1/application_key/{key}'
            .replace('{' + 'key' + '}', encodeURIComponent(String(key)));

        // Make Request Context
        const requestContext = getServer(config, 'KeyManagementApi.updateApplicationKey').makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "ApplicationKey", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["apiKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = config.authMethods["appKeyAuth"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class KeyManagementApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAPIKey(response: ResponseContext): Promise<ApiKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyResponse", ""
            ) as ApiKeyResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyResponse", ""
            ) as ApiKeyResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyResponse", ""
            ) as ApplicationKeyResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(409, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyResponse", ""
            ) as ApplicationKeyResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAPIKey(response: ResponseContext): Promise<ApiKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyResponse", ""
            ) as ApiKeyResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyResponse", ""
            ) as ApiKeyResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyResponse", ""
            ) as ApplicationKeyResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyResponse", ""
            ) as ApplicationKeyResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAPIKey(response: ResponseContext): Promise<ApiKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyResponse", ""
            ) as ApiKeyResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyResponse", ""
            ) as ApiKeyResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyResponse", ""
            ) as ApplicationKeyResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyResponse", ""
            ) as ApplicationKeyResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listAPIKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listAPIKeys(response: ResponseContext): Promise<ApiKeyListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiKeyListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyListResponse", ""
            ) as ApiKeyListResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiKeyListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyListResponse", ""
            ) as ApiKeyListResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listApplicationKeys
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listApplicationKeys(response: ResponseContext): Promise<ApplicationKeyListResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApplicationKeyListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyListResponse", ""
            ) as ApplicationKeyListResponse;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApplicationKeyListResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyListResponse", ""
            ) as ApplicationKeyListResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateAPIKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateAPIKey(response: ResponseContext): Promise<ApiKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyResponse", ""
            ) as ApiKeyResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApiKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApiKeyResponse", ""
            ) as ApiKeyResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateApplicationKey
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateApplicationKey(response: ResponseContext): Promise<ApplicationKeyResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyResponse", ""
            ) as ApplicationKeyResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(403, body);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(404, body);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(409, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ApplicationKeyResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ApplicationKeyResponse", ""
            ) as ApplicationKeyResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
