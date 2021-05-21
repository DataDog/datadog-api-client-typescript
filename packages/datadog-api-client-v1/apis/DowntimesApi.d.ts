import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { CancelDowntimesByScopeRequest } from '../models/CancelDowntimesByScopeRequest';
import { CanceledDowntimesIds } from '../models/CanceledDowntimesIds';
import { Downtime } from '../models/Downtime';
/**
 * no description
 */
export declare class DowntimesApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Cancel a downtime.
     * Cancel a downtime
     * @param downtimeId ID of the downtime to cancel.
     */
    cancelDowntime(downtimeId: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete all downtimes that match the scope of `X`.
     * Cancel downtimes by scope
     * @param body Scope to cancel downtimes for.
     */
    cancelDowntimesByScope(body: CancelDowntimesByScopeRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Schedule a downtime.
     * Schedule a downtime
     * @param body Schedule a downtime request body.
     */
    createDowntime(body: Downtime, options?: Configuration): Promise<RequestContext>;
    /**
     * Get downtime detail by `downtime_id`.
     * Get a downtime
     * @param downtimeId ID of the downtime to fetch.
     */
    getDowntime(downtimeId: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all scheduled downtimes.
     * Get all downtimes
     * @param currentOnly Only return downtimes that are active when the request is made.
     */
    listDowntimes(currentOnly?: boolean, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all downtimes for the specified monitor
     * Get all downtimes for a monitor
     * @param monitorId The id of the monitor
     */
    listMonitorDowntimes(monitorId: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Update a single downtime by `downtime_id`.
     * Update a downtime
     * @param downtimeId ID of the downtime to update.
     * @param body Update a downtime request body.
     */
    updateDowntime(downtimeId: number, body: Downtime, options?: Configuration): Promise<RequestContext>;
}
export declare class DowntimesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    cancelDowntime(response: ResponseContext): Promise<void>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cancelDowntimesByScope
     * @throws ApiException if the response code was not in [200, 299]
     */
    cancelDowntimesByScope(response: ResponseContext): Promise<CanceledDowntimesIds>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDowntime(response: ResponseContext): Promise<Downtime>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDowntime(response: ResponseContext): Promise<Downtime>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDowntimes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDowntimes(response: ResponseContext): Promise<Array<Downtime>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listMonitorDowntimes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listMonitorDowntimes(response: ResponseContext): Promise<Array<Downtime>>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDowntime
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDowntime(response: ResponseContext): Promise<Downtime>;
}
