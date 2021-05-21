import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CheckCanDeleteSLOResponse } from '../models/CheckCanDeleteSLOResponse';
import { SLOBulkDeleteResponse } from '../models/SLOBulkDeleteResponse';
import { SLODeleteResponse } from '../models/SLODeleteResponse';
import { SLOHistoryResponse } from '../models/SLOHistoryResponse';
import { SLOListResponse } from '../models/SLOListResponse';
import { SLOResponse } from '../models/SLOResponse';
import { SLOTimeframe } from '../models/SLOTimeframe';
import { ServiceLevelObjective } from '../models/ServiceLevelObjective';
import { ServiceLevelObjectiveRequest } from '../models/ServiceLevelObjectiveRequest';
/**
 * no description
 */
export declare class ServiceLevelObjectivesApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
     * Check if SLOs can be safely deleted
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     */
    checkCanDeleteSLO(ids: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Create a service level objective object.
     * Create an SLO object
     * @param body Service level objective request object.
     */
    createSLO(body: ServiceLevelObjectiveRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
     * Delete an SLO
     * @param sloId The ID of the service level objective.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    deleteSLO(sloId: string, force?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
     * Bulk Delete SLO Timeframes
     * @param body Delete multiple service level objective objects request body.
     */
    deleteSLOTimeframeInBulk(body: {
        [key: string]: Array<SLOTimeframe>;
    }, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a service level objective object.
     * Get an SLO's details
     * @param sloId The ID of the service level objective object.
     * @param withConfiguredAlertIds Get the IDs of SLO monitors that reference this SLO.
     */
    getSLO(sloId: string, withConfiguredAlertIds?: boolean, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
     * Get an SLO's history
     * @param sloId The ID of the service level objective object.
     * @param fromTs The &#x60;from&#x60; timestamp for the query window in epoch seconds.
     * @param toTs The &#x60;to&#x60; timestamp for the query window in epoch seconds.
     * @param target The SLO target. If &#x60;target&#x60; is passed in, the response will include the error budget that remains.
     */
    getSLOHistory(sloId: string, fromTs: number, toTs: number, target?: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a list of service level objective objects for your organization.
     * Get all SLOs
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     * @param query The query string to filter results based on SLO names.
     * @param tagsQuery The query string to filter results based on a single SLO tag.
     * @param metricsQuery The query string to filter results based on SLO numerator and denominator.
     */
    listSLOs(ids?: string, query?: string, tagsQuery?: string, metricsQuery?: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Update the specified service level objective object.
     * Update an SLO
     * @param sloId The ID of the service level objective object.
     * @param body The edited service level objective request object.
     */
    updateSLO(sloId: string, body: ServiceLevelObjective, options?: Configuration): Promise<RequestContext>;
}
export declare class ServiceLevelObjectivesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to checkCanDeleteSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    checkCanDeleteSLO(response: ResponseContext): Promise<CheckCanDeleteSLOResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    createSLO(response: ResponseContext): Promise<SLOListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteSLO(response: ResponseContext): Promise<SLODeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteSLOTimeframeInBulk
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteSLOTimeframeInBulk(response: ResponseContext): Promise<SLOBulkDeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLO(response: ResponseContext): Promise<SLOResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSLOHistory
     * @throws ApiException if the response code was not in [200, 299]
     */
    getSLOHistory(response: ResponseContext): Promise<SLOHistoryResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listSLOs
     * @throws ApiException if the response code was not in [200, 299]
     */
    listSLOs(response: ResponseContext): Promise<SLOListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateSLO
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateSLO(response: ResponseContext): Promise<SLOListResponse>;
}
