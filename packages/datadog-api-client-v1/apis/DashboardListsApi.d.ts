import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { DashboardList } from '../models/DashboardList';
import { DashboardListDeleteResponse } from '../models/DashboardListDeleteResponse';
import { DashboardListListResponse } from '../models/DashboardListListResponse';
/**
 * no description
 */
export declare class DashboardListsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create an empty dashboard list.
     * Create a dashboard list
     * @param body Create a dashboard list request body.
     */
    createDashboardList(body: DashboardList, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a dashboard list.
     * Delete a dashboard list
     * @param listId ID of the dashboard list to delete.
     */
    deleteDashboardList(listId: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Fetch an existing dashboard list's definition.
     * Get a dashboard list
     * @param listId ID of the dashboard list to fetch.
     */
    getDashboardList(listId: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Fetch all of your existing dashboard list definitions.
     * Get all dashboard lists
     */
    listDashboardLists(options?: Configuration): Promise<RequestContext>;
    /**
     * Update the name of a dashboard list.
     * Update a dashboard list
     * @param listId ID of the dashboard list to update.
     * @param body Update a dashboard list request body.
     */
    updateDashboardList(listId: number, body: DashboardList, options?: Configuration): Promise<RequestContext>;
}
export declare class DashboardListsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDashboardList
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDashboardList(response: ResponseContext): Promise<DashboardList>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDashboardList
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDashboardList(response: ResponseContext): Promise<DashboardListDeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDashboardList
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDashboardList(response: ResponseContext): Promise<DashboardList>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDashboardLists
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDashboardLists(response: ResponseContext): Promise<DashboardListListResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDashboardList
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDashboardList(response: ResponseContext): Promise<DashboardList>;
}
