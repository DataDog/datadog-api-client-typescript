import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IncidentRelatedObject } from '../models/IncidentRelatedObject';
import { IncidentTeamCreateRequest } from '../models/IncidentTeamCreateRequest';
import { IncidentTeamResponse } from '../models/IncidentTeamResponse';
import { IncidentTeamUpdateRequest } from '../models/IncidentTeamUpdateRequest';
import { IncidentTeamsResponse } from '../models/IncidentTeamsResponse';
/**
 * no description
 */
export declare class IncidentTeamsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Creates a new incident team.
     * Create a new incident team
     * @param body Incident Team Payload.
     */
    createIncidentTeam(body: IncidentTeamCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Deletes an existing incident team.
     * Delete an existing incident team
     * @param teamId The ID of the incident team.
     */
    deleteIncidentTeam(teamId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get details of an incident team
     * @param teamId The ID of the incident team.
     * @param include Specifies which types of related objects should be included in the response.
     */
    getIncidentTeam(teamId: string, include?: IncidentRelatedObject, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get a list of all incident teams
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     * @param filter A search query that filters teams by name.
     */
    listIncidentTeams(include?: IncidentRelatedObject, pageSize?: number, pageOffset?: number, filter?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident team
     * @param teamId The ID of the incident team.
     * @param body Incident Team Payload.
     */
    updateIncidentTeam(teamId: string, body: IncidentTeamUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class IncidentTeamsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    createIncidentTeam(response: ResponseContext): Promise<IncidentTeamResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIncidentTeam(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIncidentTeam(response: ResponseContext): Promise<IncidentTeamResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIncidentTeams
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIncidentTeams(response: ResponseContext): Promise<IncidentTeamsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIncidentTeam
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIncidentTeam(response: ResponseContext): Promise<IncidentTeamResponse>;
}
