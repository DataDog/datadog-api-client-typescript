import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { Dashboard } from '../models/Dashboard';
import { DashboardDeleteResponse } from '../models/DashboardDeleteResponse';
import { DashboardSummary } from '../models/DashboardSummary';
/**
 * no description
 */
export declare class DashboardsApiRequestFactory extends BaseAPIRequestFactory {
    /**
     * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended. Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
     * Create a new dashboard
     * @param body Create a dashboard request body.
     */
    createDashboard(body: Dashboard, options?: Configuration): Promise<RequestContext>;
    /**
     * Delete a dashboard using the specified ID.
     * Delete a dashboard
     * @param dashboardId The ID of the dashboard.
     */
    deleteDashboard(dashboardId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get a dashboard using the specified ID.
     * Get a dashboard
     * @param dashboardId The ID of the dashboard.
     */
    getDashboard(dashboardId: string, options?: Configuration): Promise<RequestContext>;
    /**
     * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
     * Get all dashboards
     * @param filterShared When &#x60;true&#x60;, this query only returns shared custom created or cloned dashboards.
     */
    listDashboards(filterShared?: boolean, options?: Configuration): Promise<RequestContext>;
    /**
     * Update a dashboard using the specified ID.
     * Update a dashboard
     * @param dashboardId The ID of the dashboard.
     * @param body Update Dashboard request body.
     */
    updateDashboard(dashboardId: string, body: Dashboard, options?: Configuration): Promise<RequestContext>;
}
export declare class DashboardsApiResponseProcessor {
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    createDashboard(response: ResponseContext): Promise<Dashboard>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    deleteDashboard(response: ResponseContext): Promise<DashboardDeleteResponse>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    getDashboard(response: ResponseContext): Promise<Dashboard>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to listDashboards
     * @throws ApiException if the response code was not in [200, 299]
     */
    listDashboards(response: ResponseContext): Promise<DashboardSummary>;
    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDashboard
     * @throws ApiException if the response code was not in [200, 299]
     */
    updateDashboard(response: ResponseContext): Promise<Dashboard>;
}
