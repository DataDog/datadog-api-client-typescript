import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { LogsIndex } from '../models/LogsIndex';
import { LogsIndexListResponse } from '../models/LogsIndexListResponse';
import { LogsIndexUpdateRequest } from '../models/LogsIndexUpdateRequest';
import { LogsIndexesOrder } from '../models/LogsIndexesOrder';
/**
 * no description
 */
export declare class LogsIndexesApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Creates a new index. Returns the Index object passed in the request body when the request is successful.
     * Create an index
     * @param body Object containing the new index.
     */
    createLogsIndex(body: LogsIndex, options?: Configuration): Promise<RequestContext>;
    /**
     * Get one log index from your organization. This endpoint takes no JSON arguments.
     * Get an index
     * @param name Name of the log index.
     */
    getLogsIndex(name: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get the current order of your log indexes. This endpoint takes no JSON arguments.
     * Get indexes order
     */
    getLogsIndexOrder(options?: Configuration): Promise<RequestContext>;
    /**
     * The Index object describes the configuration of a log index. This endpoint returns an array of the `LogIndex` objects of your organization.
     * Get all indexes
     */
    listLogIndexes(options?: Configuration): Promise<RequestContext>;
    /**
     * Update an index as identified by its name. Returns the Index object passed in the request body when the request is successful.  Using the `PUT` method updates your index’s configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an index
     * @param name Name of the log index.
     * @param body Object containing the new &#x60;LogsIndexUpdateRequest&#x60;.
     */
    updateLogsIndex(name: string, body: LogsIndexUpdateRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * This endpoint updates the index order of your organization. It returns the index order object passed in the request body when the request is successful.
     * Update indexes order
     * @param body Object containing the new ordered list of index names
     */
    updateLogsIndexOrder(body: LogsIndexesOrder, options?: Configuration): Promise<RequestContext>;
}
export declare class LogsIndexesApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createLogsIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    createLogsIndex(response: ResponseContext): Promise<LogsIndex>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsIndex(response: ResponseContext): Promise<LogsIndex>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsIndexOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    getLogsIndexOrder(response: ResponseContext): Promise<LogsIndexesOrder>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listLogIndexes
     * @throws ApiException if the response code was not in [200, 299]
     */
    listLogIndexes(response: ResponseContext): Promise<LogsIndexListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsIndex
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsIndex(response: ResponseContext): Promise<LogsIndex>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateLogsIndexOrder
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateLogsIndexOrder(response: ResponseContext): Promise<LogsIndexesOrder>;
}
