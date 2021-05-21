import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IncidentCreateRequest } from '../models/IncidentCreateRequest';
import { IncidentRelatedObject } from '../models/IncidentRelatedObject';
import { IncidentResponse } from '../models/IncidentResponse';
import { IncidentUpdateRequest } from '../models/IncidentUpdateRequest';
import { IncidentsResponse } from '../models/IncidentsResponse';
/**
 * no description
 */
export declare class IncidentsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create an incident.
     * Create an incident
     * @param body Incident payload.
     */
    createIncident(body: IncidentCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Deletes an existing incident from the users organization.
     * Delete an existing incident
     * @param incidentId The UUID the incident.
     */
    deleteIncident(incidentId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the details of an incident by `incident_id`.
     * Get the details of an incident
     * @param incidentId The UUID the incident.
     * @param include Specifies which types of related objects should be included in the response.
     */
    getIncident(incidentId: string, include?: Array<IncidentRelatedObject>, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all incidents for the user's organization.
     * Get a list of incidents
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     */
    listIncidents(include?: Array<IncidentRelatedObject>, pageSize?: number, pageOffset?: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Updates an incident. Provide only the attributes that should be updated as this request is a partial update.
     * Update an existing incident
     * @param incidentId The UUID the incident.
     * @param body Incident Payload.
     */
    updateIncident(incidentId: string, body: IncidentUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class IncidentsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIncident
     * @throws ApiException if the response code was not in [200, 299]
     */
    createIncident(response: ResponseContext): Promise<IncidentResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIncident
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIncident(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncident
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIncident(response: ResponseContext): Promise<IncidentResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIncidents
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIncidents(response: ResponseContext): Promise<IncidentsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIncident
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIncident(response: ResponseContext): Promise<IncidentResponse>;
}
