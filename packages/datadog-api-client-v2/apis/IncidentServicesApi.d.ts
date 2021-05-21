import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { IncidentRelatedObject } from '../models/IncidentRelatedObject';
import { IncidentServiceCreateRequest } from '../models/IncidentServiceCreateRequest';
import { IncidentServiceResponse } from '../models/IncidentServiceResponse';
import { IncidentServiceUpdateRequest } from '../models/IncidentServiceUpdateRequest';
import { IncidentServicesResponse } from '../models/IncidentServicesResponse';
/**
 * no description
 */
export declare class IncidentServicesApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Creates a new incident service.
     * Create a new incident service
     * @param body Incident Service Payload.
     */
    createIncidentService(body: IncidentServiceCreateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Deletes an existing incident service.
     * Delete an existing incident service
     * @param serviceId The ID of the incident service.
     */
    deleteIncidentService(serviceId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get details of an incident service. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get details of an incident service
     * @param serviceId The ID of the incident service.
     * @param include Specifies which types of related objects should be included in the response.
     */
    getIncidentService(serviceId: string, include?: IncidentRelatedObject, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get a list of all incident services
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     * @param filter A search query that filters services by name.
     */
    listIncidentServices(include?: IncidentRelatedObject, pageSize?: number, pageOffset?: number, filter?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident service
     * @param serviceId The ID of the incident service.
     * @param body Incident Service Payload.
     */
    updateIncidentService(serviceId: string, body: IncidentServiceUpdateRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class IncidentServicesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createIncidentService
     * @throws ApiException if the response code was not in [200, 299]
     */
    createIncidentService(response: ResponseContext): Promise<IncidentServiceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteIncidentService
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteIncidentService(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getIncidentService
     * @throws ApiException if the response code was not in [200, 299]
     */
    getIncidentService(response: ResponseContext): Promise<IncidentServiceResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listIncidentServices
     * @throws ApiException if the response code was not in [200, 299]
     */
    listIncidentServices(response: ResponseContext): Promise<IncidentServicesResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateIncidentService
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateIncidentService(response: ResponseContext): Promise<IncidentServiceResponse>;
}
