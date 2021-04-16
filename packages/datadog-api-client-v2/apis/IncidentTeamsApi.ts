// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration, getServer } from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { APIErrorResponse } from '../models/APIErrorResponse';
import { IncidentRelatedObject } from '../models/IncidentRelatedObject';
import { IncidentTeamCreateRequest } from '../models/IncidentTeamCreateRequest';
import { IncidentTeamResponse } from '../models/IncidentTeamResponse';
import { IncidentTeamUpdateRequest } from '../models/IncidentTeamUpdateRequest';
import { IncidentTeamsResponse } from '../models/IncidentTeamsResponse';

/**
 * no description
 */
export class IncidentTeamsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a new incident team.
     * Create a new incident team
     * @param body Incident Team Payload.
     */
    public async createIncidentTeam(body: IncidentTeamCreateRequest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling createIncidentTeam.');
        }


        // Path Params
        const localVarPath = '/api/v2/teams';

        // Make Request Context
        const requestContext = getServer(config, 'IncidentTeamsApi.createIncidentTeam').makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        requestContext.setHttpConfig(config.httpConfig);

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IncidentTeamCreateRequest", ""),
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
     * Deletes an existing incident team.
     * Delete an existing incident team
     * @param teamId The ID of the incident team.
     */
    public async deleteIncidentTeam(teamId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'teamId' is not null or undefined
        if (teamId === null || teamId === undefined) {
            throw new RequiredError('Required parameter teamId was null or undefined when calling deleteIncidentTeam.');
        }


        // Path Params
        const localVarPath = '/api/v2/teams/{team_id}'
            .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));

        // Make Request Context
        const requestContext = getServer(config, 'IncidentTeamsApi.deleteIncidentTeam').makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        requestContext.setHttpConfig(config.httpConfig);

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
     * Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get details of an incident team
     * @param teamId The ID of the incident team.
     * @param include Specifies which types of related objects should be included in the response.
     */
    public async getIncidentTeam(teamId: string, include?: IncidentRelatedObject, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'teamId' is not null or undefined
        if (teamId === null || teamId === undefined) {
            throw new RequiredError('Required parameter teamId was null or undefined when calling getIncidentTeam.');
        }



        // Path Params
        const localVarPath = '/api/v2/teams/{team_id}'
            .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));

        // Make Request Context
        const requestContext = getServer(config, 'IncidentTeamsApi.getIncidentTeam').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        requestContext.setHttpConfig(config.httpConfig);

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "IncidentRelatedObject", ""));
        }

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
     * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get a list of all incident teams
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     * @param filter A search query that filters teams by name.
     */
    public async listIncidentTeams(include?: IncidentRelatedObject, pageSize?: number, pageOffset?: number, filter?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





        // Path Params
        const localVarPath = '/api/v2/teams';

        // Make Request Context
        const requestContext = getServer(config, 'IncidentTeamsApi.listIncidentTeams').makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        requestContext.setHttpConfig(config.httpConfig);

        // Query Params
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "IncidentRelatedObject", ""));
        }
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page[size]", ObjectSerializer.serialize(pageSize, "number", "int64"));
        }
        if (pageOffset !== undefined) {
            requestContext.setQueryParam("page[offset]", ObjectSerializer.serialize(pageOffset, "number", "int64"));
        }
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }

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
     * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident team
     * @param teamId The ID of the incident team.
     * @param body Incident Team Payload.
     */
    public async updateIncidentTeam(teamId: string, body: IncidentTeamUpdateRequest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'teamId' is not null or undefined
        if (teamId === null || teamId === undefined) {
            throw new RequiredError('Required parameter teamId was null or undefined when calling updateIncidentTeam.');
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError('Required parameter body was null or undefined when calling updateIncidentTeam.');
        }


        // Path Params
        const localVarPath = '/api/v2/teams/{team_id}'
            .replace('{' + 'team_id' + '}', encodeURIComponent(String(teamId)));

        // Make Request Context
        const requestContext = getServer(config, 'IncidentTeamsApi.updateIncidentTeam').makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")
        requestContext.setHttpConfig(config.httpConfig);

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "IncidentTeamUpdateRequest", ""),
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

export class IncidentTeamsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createIncidentTeam(response: ResponseContext): Promise<IncidentTeamResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: IncidentTeamResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IncidentTeamResponse", ""
            ) as IncidentTeamResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(401, body);
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
            const body: IncidentTeamResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IncidentTeamResponse", ""
            ) as IncidentTeamResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteIncidentTeam(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(401, body);
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
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getIncidentTeam(response: ResponseContext): Promise<IncidentTeamResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IncidentTeamResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IncidentTeamResponse", ""
            ) as IncidentTeamResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(401, body);
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
            const body: IncidentTeamResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IncidentTeamResponse", ""
            ) as IncidentTeamResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIncidentTeams
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listIncidentTeams(response: ResponseContext): Promise<IncidentTeamsResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IncidentTeamsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IncidentTeamsResponse", ""
            ) as IncidentTeamsResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(401, body);
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
            const body: IncidentTeamsResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IncidentTeamsResponse", ""
            ) as IncidentTeamsResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateIncidentTeam(response: ResponseContext): Promise<IncidentTeamResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: IncidentTeamResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IncidentTeamResponse", ""
            ) as IncidentTeamResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(400, body);
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            const body: APIErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "APIErrorResponse", ""
            ) as APIErrorResponse;
            throw new ApiException<APIErrorResponse>(401, body);
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
            const body: IncidentTeamResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "IncidentTeamResponse", ""
            ) as IncidentTeamResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
