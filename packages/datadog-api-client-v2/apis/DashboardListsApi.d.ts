import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { DashboardListAddItemsRequest } from '../models/DashboardListAddItemsRequest';
import { DashboardListAddItemsResponse } from '../models/DashboardListAddItemsResponse';
import { DashboardListDeleteItemsRequest } from '../models/DashboardListDeleteItemsRequest';
import { DashboardListDeleteItemsResponse } from '../models/DashboardListDeleteItemsResponse';
import { DashboardListItems } from '../models/DashboardListItems';
import { DashboardListUpdateItemsRequest } from '../models/DashboardListUpdateItemsRequest';
import { DashboardListUpdateItemsResponse } from '../models/DashboardListUpdateItemsResponse';
/**
 * no description
 */
export declare class DashboardListsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Add dashboards to an existing dashboard list.
     * Add Items to a Dashboard List
     * @param dashboardListId ID of the dashboard list to add items to.
     * @param body Dashboards to add to the dashboard list.
     */
    createDashboardListItems(dashboardListId: number, body: DashboardListAddItemsRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete dashboards from an existing dashboard list.
     * Delete items from a dashboard list
     * @param dashboardListId ID of the dashboard list to delete items from.
     * @param body Dashboards to delete from the dashboard list.
     */
    deleteDashboardListItems(dashboardListId: number, body: DashboardListDeleteItemsRequest, options?: Configuration): Promise<RequestContext>;
    /**
     * Fetch the dashboard list’s dashboard definitions.
     * Get items of a Dashboard List
     * @param dashboardListId ID of the dashboard list to get items from.
     */
    getDashboardListItems(dashboardListId: number, options?: Configuration): Promise<RequestContext>;
    /**
     * Update dashboards of an existing dashboard list.
     * Update items of a dashboard list
     * @param dashboardListId ID of the dashboard list to update items from.
     * @param body New dashboards of the dashboard list.
     */
    updateDashboardListItems(dashboardListId: number, body: DashboardListUpdateItemsRequest, options?: Configuration): Promise<RequestContext>;
}
export declare class DashboardListsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDashboardListItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDashboardListItems(response: ResponseContext): Promise<DashboardListAddItemsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDashboardListItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDashboardListItems(response: ResponseContext): Promise<DashboardListDeleteItemsResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDashboardListItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDashboardListItems(response: ResponseContext): Promise<DashboardListItems>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDashboardListItems
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDashboardListItems(response: ResponseContext): Promise<DashboardListUpdateItemsResponse>;
}
