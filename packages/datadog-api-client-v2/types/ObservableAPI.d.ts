import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { APIKeyCreateRequest } from '../models/APIKeyCreateRequest';
import { APIKeyResponse } from '../models/APIKeyResponse';
import { APIKeyUpdateRequest } from '../models/APIKeyUpdateRequest';
import { APIKeysResponse } from '../models/APIKeysResponse';
import { APIKeysSort } from '../models/APIKeysSort';
import { ApplicationKeyCreateRequest } from '../models/ApplicationKeyCreateRequest';
import { ApplicationKeyResponse } from '../models/ApplicationKeyResponse';
import { ApplicationKeyUpdateRequest } from '../models/ApplicationKeyUpdateRequest';
import { ApplicationKeysSort } from '../models/ApplicationKeysSort';
import { DashboardListAddItemsRequest } from '../models/DashboardListAddItemsRequest';
import { DashboardListAddItemsResponse } from '../models/DashboardListAddItemsResponse';
import { DashboardListDeleteItemsRequest } from '../models/DashboardListDeleteItemsRequest';
import { DashboardListDeleteItemsResponse } from '../models/DashboardListDeleteItemsResponse';
import { DashboardListItems } from '../models/DashboardListItems';
import { DashboardListUpdateItemsRequest } from '../models/DashboardListUpdateItemsRequest';
import { DashboardListUpdateItemsResponse } from '../models/DashboardListUpdateItemsResponse';
import { IncidentCreateRequest } from '../models/IncidentCreateRequest';
import { IncidentRelatedObject } from '../models/IncidentRelatedObject';
import { IncidentResponse } from '../models/IncidentResponse';
import { IncidentServiceCreateRequest } from '../models/IncidentServiceCreateRequest';
import { IncidentServiceResponse } from '../models/IncidentServiceResponse';
import { IncidentServiceUpdateRequest } from '../models/IncidentServiceUpdateRequest';
import { IncidentServicesResponse } from '../models/IncidentServicesResponse';
import { IncidentTeamCreateRequest } from '../models/IncidentTeamCreateRequest';
import { IncidentTeamResponse } from '../models/IncidentTeamResponse';
import { IncidentTeamUpdateRequest } from '../models/IncidentTeamUpdateRequest';
import { IncidentTeamsResponse } from '../models/IncidentTeamsResponse';
import { IncidentUpdateRequest } from '../models/IncidentUpdateRequest';
import { IncidentsResponse } from '../models/IncidentsResponse';
import { ListApplicationKeysResponse } from '../models/ListApplicationKeysResponse';
import { LogsAggregateRequest } from '../models/LogsAggregateRequest';
import { LogsAggregateResponse } from '../models/LogsAggregateResponse';
import { LogsArchive } from '../models/LogsArchive';
import { LogsArchiveCreateRequest } from '../models/LogsArchiveCreateRequest';
import { LogsArchiveOrder } from '../models/LogsArchiveOrder';
import { LogsArchives } from '../models/LogsArchives';
import { LogsListRequest } from '../models/LogsListRequest';
import { LogsListResponse } from '../models/LogsListResponse';
import { LogsMetricCreateRequest } from '../models/LogsMetricCreateRequest';
import { LogsMetricResponse } from '../models/LogsMetricResponse';
import { LogsMetricUpdateRequest } from '../models/LogsMetricUpdateRequest';
import { LogsMetricsResponse } from '../models/LogsMetricsResponse';
import { LogsSort } from '../models/LogsSort';
import { MetricAllTagsResponse } from '../models/MetricAllTagsResponse';
import { MetricTagConfigurationCreateRequest } from '../models/MetricTagConfigurationCreateRequest';
import { MetricTagConfigurationMetricTypes } from '../models/MetricTagConfigurationMetricTypes';
import { MetricTagConfigurationResponse } from '../models/MetricTagConfigurationResponse';
import { MetricTagConfigurationUpdateRequest } from '../models/MetricTagConfigurationUpdateRequest';
import { MetricVolumesResponse } from '../models/MetricVolumesResponse';
import { MetricsAndMetricTagConfigurationsResponse } from '../models/MetricsAndMetricTagConfigurationsResponse';
import { PermissionsResponse } from '../models/PermissionsResponse';
import { ProcessSummariesResponse } from '../models/ProcessSummariesResponse';
import { QuerySortOrder } from '../models/QuerySortOrder';
import { RelationshipToPermission } from '../models/RelationshipToPermission';
import { RelationshipToRole } from '../models/RelationshipToRole';
import { RelationshipToUser } from '../models/RelationshipToUser';
import { RoleCreateRequest } from '../models/RoleCreateRequest';
import { RoleCreateResponse } from '../models/RoleCreateResponse';
import { RoleResponse } from '../models/RoleResponse';
import { RoleUpdateRequest } from '../models/RoleUpdateRequest';
import { RoleUpdateResponse } from '../models/RoleUpdateResponse';
import { RolesResponse } from '../models/RolesResponse';
import { RolesSort } from '../models/RolesSort';
import { SecurityFilterCreateRequest } from '../models/SecurityFilterCreateRequest';
import { SecurityFilterDeleteResponse } from '../models/SecurityFilterDeleteResponse';
import { SecurityFilterResponse } from '../models/SecurityFilterResponse';
import { SecurityFilterUpdateRequest } from '../models/SecurityFilterUpdateRequest';
import { SecurityFiltersResponse } from '../models/SecurityFiltersResponse';
import { SecurityMonitoringListRulesResponse } from '../models/SecurityMonitoringListRulesResponse';
import { SecurityMonitoringRuleCreatePayload } from '../models/SecurityMonitoringRuleCreatePayload';
import { SecurityMonitoringRuleResponse } from '../models/SecurityMonitoringRuleResponse';
import { SecurityMonitoringRuleUpdatePayload } from '../models/SecurityMonitoringRuleUpdatePayload';
import { SecurityMonitoringSignalListRequest } from '../models/SecurityMonitoringSignalListRequest';
import { SecurityMonitoringSignalsListResponse } from '../models/SecurityMonitoringSignalsListResponse';
import { SecurityMonitoringSignalsSort } from '../models/SecurityMonitoringSignalsSort';
import { UserCreateRequest } from '../models/UserCreateRequest';
import { UserInvitationResponse } from '../models/UserInvitationResponse';
import { UserInvitationsRequest } from '../models/UserInvitationsRequest';
import { UserInvitationsResponse } from '../models/UserInvitationsResponse';
import { UserResponse } from '../models/UserResponse';
import { UserUpdateRequest } from '../models/UserUpdateRequest';
import { UsersResponse } from '../models/UsersResponse';
import { DashboardListsApiRequestFactory, DashboardListsApiResponseProcessor } from "../apis/DashboardListsApi";
export declare class ObservableDashboardListsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DashboardListsApiRequestFactory, responseProcessor?: DashboardListsApiResponseProcessor);
    /**
     * Add dashboards to an existing dashboard list.
     * Add Items to a Dashboard List
     * @param dashboardListId ID of the dashboard list to add items to.
     * @param body Dashboards to add to the dashboard list.
     */
    createDashboardListItems(dashboardListId: number, body: DashboardListAddItemsRequest, options?: Configuration): Observable<DashboardListAddItemsResponse>;
    /**
     * Delete dashboards from an existing dashboard list.
     * Delete items from a dashboard list
     * @param dashboardListId ID of the dashboard list to delete items from.
     * @param body Dashboards to delete from the dashboard list.
     */
    deleteDashboardListItems(dashboardListId: number, body: DashboardListDeleteItemsRequest, options?: Configuration): Observable<DashboardListDeleteItemsResponse>;
    /**
     * Fetch the dashboard list’s dashboard definitions.
     * Get items of a Dashboard List
     * @param dashboardListId ID of the dashboard list to get items from.
     */
    getDashboardListItems(dashboardListId: number, options?: Configuration): Observable<DashboardListItems>;
    /**
     * Update dashboards of an existing dashboard list.
     * Update items of a dashboard list
     * @param dashboardListId ID of the dashboard list to update items from.
     * @param body New dashboards of the dashboard list.
     */
    updateDashboardListItems(dashboardListId: number, body: DashboardListUpdateItemsRequest, options?: Configuration): Observable<DashboardListUpdateItemsResponse>;
}
import { IncidentServicesApiRequestFactory, IncidentServicesApiResponseProcessor } from "../apis/IncidentServicesApi";
export declare class ObservableIncidentServicesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IncidentServicesApiRequestFactory, responseProcessor?: IncidentServicesApiResponseProcessor);
    /**
     * Creates a new incident service.
     * Create a new incident service
     * @param body Incident Service Payload.
     */
    createIncidentService(body: IncidentServiceCreateRequest, options?: Configuration): Observable<IncidentServiceResponse>;
    /**
     * Deletes an existing incident service.
     * Delete an existing incident service
     * @param serviceId The ID of the incident service.
     */
    deleteIncidentService(serviceId: string, options?: Configuration): Observable<void>;
    /**
     * Get details of an incident service. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get details of an incident service
     * @param serviceId The ID of the incident service.
     * @param include Specifies which types of related objects should be included in the response.
     */
    getIncidentService(serviceId: string, include?: IncidentRelatedObject, options?: Configuration): Observable<IncidentServiceResponse>;
    /**
     * Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get a list of all incident services
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     * @param filter A search query that filters services by name.
     */
    listIncidentServices(include?: IncidentRelatedObject, pageSize?: number, pageOffset?: number, filter?: string, options?: Configuration): Observable<IncidentServicesResponse>;
    /**
     * Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident service
     * @param serviceId The ID of the incident service.
     * @param body Incident Service Payload.
     */
    updateIncidentService(serviceId: string, body: IncidentServiceUpdateRequest, options?: Configuration): Observable<IncidentServiceResponse>;
}
import { IncidentTeamsApiRequestFactory, IncidentTeamsApiResponseProcessor } from "../apis/IncidentTeamsApi";
export declare class ObservableIncidentTeamsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IncidentTeamsApiRequestFactory, responseProcessor?: IncidentTeamsApiResponseProcessor);
    /**
     * Creates a new incident team.
     * Create a new incident team
     * @param body Incident Team Payload.
     */
    createIncidentTeam(body: IncidentTeamCreateRequest, options?: Configuration): Observable<IncidentTeamResponse>;
    /**
     * Deletes an existing incident team.
     * Delete an existing incident team
     * @param teamId The ID of the incident team.
     */
    deleteIncidentTeam(teamId: string, options?: Configuration): Observable<void>;
    /**
     * Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get details of an incident team
     * @param teamId The ID of the incident team.
     * @param include Specifies which types of related objects should be included in the response.
     */
    getIncidentTeam(teamId: string, include?: IncidentRelatedObject, options?: Configuration): Observable<IncidentTeamResponse>;
    /**
     * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get a list of all incident teams
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     * @param filter A search query that filters teams by name.
     */
    listIncidentTeams(include?: IncidentRelatedObject, pageSize?: number, pageOffset?: number, filter?: string, options?: Configuration): Observable<IncidentTeamsResponse>;
    /**
     * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident team
     * @param teamId The ID of the incident team.
     * @param body Incident Team Payload.
     */
    updateIncidentTeam(teamId: string, body: IncidentTeamUpdateRequest, options?: Configuration): Observable<IncidentTeamResponse>;
}
import { IncidentsApiRequestFactory, IncidentsApiResponseProcessor } from "../apis/IncidentsApi";
export declare class ObservableIncidentsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IncidentsApiRequestFactory, responseProcessor?: IncidentsApiResponseProcessor);
    /**
     * Create an incident.
     * Create an incident
     * @param body Incident payload.
     */
    createIncident(body: IncidentCreateRequest, options?: Configuration): Observable<IncidentResponse>;
    /**
     * Deletes an existing incident from the users organization.
     * Delete an existing incident
     * @param incidentId The UUID the incident.
     */
    deleteIncident(incidentId: string, options?: Configuration): Observable<void>;
    /**
     * Get the details of an incident by `incident_id`.
     * Get the details of an incident
     * @param incidentId The UUID the incident.
     * @param include Specifies which types of related objects should be included in the response.
     */
    getIncident(incidentId: string, include?: Array<IncidentRelatedObject>, options?: Configuration): Observable<IncidentResponse>;
    /**
     * Get all incidents for the user's organization.
     * Get a list of incidents
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     */
    listIncidents(include?: Array<IncidentRelatedObject>, pageSize?: number, pageOffset?: number, options?: Configuration): Observable<IncidentsResponse>;
    /**
     * Updates an incident. Provide only the attributes that should be updated as this request is a partial update.
     * Update an existing incident
     * @param incidentId The UUID the incident.
     * @param body Incident Payload.
     */
    updateIncident(incidentId: string, body: IncidentUpdateRequest, options?: Configuration): Observable<IncidentResponse>;
}
import { KeyManagementApiRequestFactory, KeyManagementApiResponseProcessor } from "../apis/KeyManagementApi";
export declare class ObservableKeyManagementApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: KeyManagementApiRequestFactory, responseProcessor?: KeyManagementApiResponseProcessor);
    /**
     * Create an API key.
     * Create an API key
     * @param body
     */
    createAPIKey(body: APIKeyCreateRequest, options?: Configuration): Observable<APIKeyResponse>;
    /**
     * Create an application key for current user
     * Create an application key for current user
     * @param body
     */
    createCurrentUserApplicationKey(body: ApplicationKeyCreateRequest, options?: Configuration): Observable<ApplicationKeyResponse>;
    /**
     * Delete an API key.
     * Delete an API key
     * @param apiKeyId The ID of the API key.
     */
    deleteAPIKey(apiKeyId: string, options?: Configuration): Observable<void>;
    /**
     * Delete an application key
     * Delete an application key
     * @param appKeyId The ID of the application key.
     */
    deleteApplicationKey(appKeyId: string, options?: Configuration): Observable<void>;
    /**
     * Delete an application key owned by current user
     * Delete an application key owned by current user
     * @param appKeyId The ID of the application key.
     */
    deleteCurrentUserApplicationKey(appKeyId: string, options?: Configuration): Observable<void>;
    /**
     * Get an API key.
     * Get API key
     * @param apiKeyId The ID of the API key.
     * @param include Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     */
    getAPIKey(apiKeyId: string, include?: string, options?: Configuration): Observable<APIKeyResponse>;
    /**
     * Get an application key owned by current user
     * Get one application key owned by current user
     * @param appKeyId The ID of the application key.
     */
    getCurrentUserApplicationKey(appKeyId: string, options?: Configuration): Observable<ApplicationKeyResponse>;
    /**
     * List all API keys available for your account.
     * Get all API keys
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort API key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @param filter Filter API keys by the specified string.
     * @param filterCreatedAtStart Only include API keys created on or after the specified date.
     * @param filterCreatedAtEnd Only include API keys created on or before the specified date.
     * @param filterModifiedAtStart Only include API keys modified on or after the specified date.
     * @param filterModifiedAtEnd Only include API keys modified on or before the specified date.
     * @param include Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     */
    listAPIKeys(pageSize?: number, pageNumber?: number, sort?: APIKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, filterModifiedAtStart?: string, filterModifiedAtEnd?: string, include?: string, options?: Configuration): Observable<APIKeysResponse>;
    /**
     * List all application keys available for your org
     * Get all application keys
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @param filter Filter application keys by the specified string.
     * @param filterCreatedAtStart Only include application keys created on or after the specified date.
     * @param filterCreatedAtEnd Only include application keys created on or before the specified date.
     */
    listApplicationKeys(pageSize?: number, pageNumber?: number, sort?: ApplicationKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, options?: Configuration): Observable<ListApplicationKeysResponse>;
    /**
     * List all application keys available for current user
     * Get all application keys owned by current user
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @param filter Filter application keys by the specified string.
     * @param filterCreatedAtStart Only include application keys created on or after the specified date.
     * @param filterCreatedAtEnd Only include application keys created on or before the specified date.
     */
    listCurrentUserApplicationKeys(pageSize?: number, pageNumber?: number, sort?: ApplicationKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, options?: Configuration): Observable<ListApplicationKeysResponse>;
    /**
     * Update an API key.
     * Edit an API key
     * @param apiKeyId The ID of the API key.
     * @param body
     */
    updateAPIKey(apiKeyId: string, body: APIKeyUpdateRequest, options?: Configuration): Observable<APIKeyResponse>;
    /**
     * Edit an application key
     * Edit an application key
     * @param appKeyId The ID of the application key.
     * @param body
     */
    updateApplicationKey(appKeyId: string, body: ApplicationKeyUpdateRequest, options?: Configuration): Observable<ApplicationKeyResponse>;
    /**
     * Edit an application key owned by current user
     * Edit an application key owned by current user
     * @param appKeyId The ID of the application key.
     * @param body
     */
    updateCurrentUserApplicationKey(appKeyId: string, body: ApplicationKeyUpdateRequest, options?: Configuration): Observable<ApplicationKeyResponse>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export declare class ObservableLogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    /**
     * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
     * Aggregate events
     * @param body
     */
    aggregateLogs(body: LogsAggregateRequest, options?: Configuration): Observable<LogsAggregateResponse>;
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to build complex logs filtering and search.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param body
     */
    listLogs(body?: LogsListRequest, options?: Configuration): Observable<LogsListResponse>;
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to see your latest logs.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Get a list of logs
     * @param filterQuery Search query following logs syntax.
     * @param filterIndex For customers with multiple indexes, the indexes to search Defaults to &#39;*&#39; which means all indexes
     * @param filterFrom Minimum timestamp for requested logs.
     * @param filterTo Maximum timestamp for requested logs.
     * @param sort Order of logs in results.
     * @param pageCursor List following results with a cursor provided in the previous query.
     * @param pageLimit Maximum number of logs in the response.
     */
    listLogsGet(filterQuery?: string, filterIndex?: string, filterFrom?: Date, filterTo?: Date, sort?: LogsSort, pageCursor?: string, pageLimit?: number, options?: Configuration): Observable<LogsListResponse>;
}
import { LogsArchivesApiRequestFactory, LogsArchivesApiResponseProcessor } from "../apis/LogsArchivesApi";
export declare class ObservableLogsArchivesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsArchivesApiRequestFactory, responseProcessor?: LogsArchivesApiResponseProcessor);
    /**
     * Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Grant role to an archive
     * @param archiveId The ID of the archive.
     * @param body
     */
    addReadRoleToArchive(archiveId: string, body: RelationshipToRole, options?: Configuration): Observable<void>;
    /**
     * Create an archive in your organization.
     * Create an archive
     * @param body The definition of the new archive.
     */
    createLogsArchive(body: LogsArchiveCreateRequest, options?: Configuration): Observable<LogsArchive>;
    /**
     * Delete a given archive from your organization.
     * Delete an archive
     * @param archiveId The ID of the archive.
     */
    deleteLogsArchive(archiveId: string, options?: Configuration): Observable<void>;
    /**
     * Get a specific archive from your organization.
     * Get an archive
     * @param archiveId The ID of the archive.
     */
    getLogsArchive(archiveId: string, options?: Configuration): Observable<LogsArchive>;
    /**
     * Get the current order of your archives. This endpoint takes no JSON arguments.
     * Get archive order
     */
    getLogsArchiveOrder(options?: Configuration): Observable<LogsArchiveOrder>;
    /**
     * Returns all read roles a given archive is restricted to.
     * List read roles for an archive
     * @param archiveId The ID of the archive.
     */
    listArchiveReadRoles(archiveId: string, options?: Configuration): Observable<RolesResponse>;
    /**
     * Get the list of configured logs archives with their definitions.
     * Get all archives
     */
    listLogsArchives(options?: Configuration): Observable<LogsArchives>;
    /**
     * Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Revoke role from an archive
     * @param archiveId The ID of the archive.
     * @param body
     */
    removeRoleFromArchive(archiveId: string, body: RelationshipToRole, options?: Configuration): Observable<void>;
    /**
     * Update a given archive configuration.  **Note**: Using this method updates your archive configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an archive
     * @param archiveId The ID of the archive.
     * @param body New definition of the archive.
     */
    updateLogsArchive(archiveId: string, body: LogsArchiveCreateRequest, options?: Configuration): Observable<LogsArchive>;
    /**
     * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change the structure and content of the data processed by other archives.  **Note**: Using the `PUT` method updates your archive's order by replacing the current order with the new one.
     * Update archive order
     * @param body An object containing the new ordered list of archive IDs.
     */
    updateLogsArchiveOrder(body: LogsArchiveOrder, options?: Configuration): Observable<LogsArchiveOrder>;
}
import { LogsMetricsApiRequestFactory, LogsMetricsApiResponseProcessor } from "../apis/LogsMetricsApi";
export declare class ObservableLogsMetricsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsMetricsApiRequestFactory, responseProcessor?: LogsMetricsApiResponseProcessor);
    /**
     * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
     * Create a log-based metric
     * @param body The definition of the new log-based metric.
     */
    createLogsMetric(body: LogsMetricCreateRequest, options?: Configuration): Observable<LogsMetricResponse>;
    /**
     * Delete a specific log-based metric from your organization.
     * Delete a log-based metric
     * @param metricId The name of the log-based metric.
     */
    deleteLogsMetric(metricId: string, options?: Configuration): Observable<void>;
    /**
     * Get a specific log-based metric from your organization.
     * Get a log-based metric
     * @param metricId The name of the log-based metric.
     */
    getLogsMetric(metricId: string, options?: Configuration): Observable<LogsMetricResponse>;
    /**
     * Get the list of configured log-based metrics with their definitions.
     * Get all log-based metrics
     */
    listLogsMetrics(options?: Configuration): Observable<LogsMetricsResponse>;
    /**
     * Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.
     * Update a log-based metric
     * @param metricId The name of the log-based metric.
     * @param body New definition of the log-based metric.
     */
    updateLogsMetric(metricId: string, body: LogsMetricUpdateRequest, options?: Configuration): Observable<LogsMetricResponse>;
}
import { MetricsApiRequestFactory, MetricsApiResponseProcessor } from "../apis/MetricsApi";
export declare class ObservableMetricsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor);
    /**
     * Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric. Optionally, include percentile aggregations on any distribution metric. Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
     * Create a tag configuration
     * @param metricName The name of the metric.
     * @param body
     */
    createTagConfiguration(metricName: string, body: MetricTagConfigurationCreateRequest, options?: Configuration): Observable<MetricTagConfigurationResponse>;
    /**
     * Deletes a metric's tag configuration. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Delete a tag configuration
     * @param metricName The name of the metric.
     */
    deleteTagConfiguration(metricName: string, options?: Configuration): Observable<void>;
    /**
     * Returns the tag configuration for the given metric name.
     * List tag configuration by name
     * @param metricName The name of the metric.
     */
    listTagConfigurationByName(metricName: string, options?: Configuration): Observable<MetricTagConfigurationResponse>;
    /**
     * Returns all configured count/gauge/rate/distribution metric names (with additional filters if specified).
     * List tag configurations
     * @param filterConfigured Filter metrics that have configured tags.
     * @param filterTagsConfigured Filter tag configurations by configured tags.
     * @param filterMetricType Filter tag configurations by metric type.
     * @param filterIncludePercentiles Filter distributions with additional percentile aggregations enabled or disabled.
     * @param filterTags Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
     * @param windowSeconds The number of seconds of look back (from now) to apply to a filter[tag] query. Defaults value is 3600 (1 hour), maximum value is 172,800 (2 days).
     */
    listTagConfigurations(filterConfigured?: boolean, filterTagsConfigured?: string, filterMetricType?: MetricTagConfigurationMetricTypes, filterIncludePercentiles?: boolean, filterTags?: string, windowSeconds?: number, options?: Configuration): Observable<MetricsAndMetricTagConfigurationsResponse>;
    /**
     * View indexed tag key-value pairs for a given metric name.
     * List tags by metric name
     * @param metricName The name of the metric.
     */
    listTagsByMetricName(metricName: string, options?: Configuration): Observable<MetricAllTagsResponse>;
    /**
     * View distinct metrics volumes for the given metric name.  Custom distribution metrics will return both ingested and indexed custom metric volumes. For Metrics without Limits&trade; beta customers, all metrics will return both ingested/indexed volumes. Custom metrics generated in-app from other products will return `null` for ingested volumes.
     * List distinct metric volumes by metric name
     * @param metricName The name of the metric.
     */
    listVolumesByMetricName(metricName: string, options?: Configuration): Observable<MetricVolumesResponse>;
    /**
     * Update the tag configuration of a metric or percentile aggregations of a distribution metric. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Update a tag configuration
     * @param metricName The name of the metric.
     * @param body
     */
    updateTagConfiguration(metricName: string, body: MetricTagConfigurationUpdateRequest, options?: Configuration): Observable<MetricTagConfigurationResponse>;
}
import { ProcessesApiRequestFactory, ProcessesApiResponseProcessor } from "../apis/ProcessesApi";
export declare class ObservableProcessesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ProcessesApiRequestFactory, responseProcessor?: ProcessesApiResponseProcessor);
    /**
     * Get all processes for your organization.
     * Get all processes
     * @param search String to search processes by.
     * @param tags Comma-separated list of tags to filter processes by.
     * @param from Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window will be 15 minutes before the &#x60;to&#x60; timestamp. If neither &#x60;from&#x60; nor &#x60;to&#x60; are provided, the query window will be &#x60;[now - 15m, now]&#x60;.
     * @param to Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window will be 15 minutes after the &#x60;from&#x60; timestamp. If neither &#x60;from&#x60; nor &#x60;to&#x60; are provided, the query window will be &#x60;[now - 15m, now]&#x60;.
     * @param pageLimit Maximum number of results returned.
     * @param pageCursor String to query the next page of results. This key is provided with each valid response from the API in &#x60;meta.page.after&#x60;.
     */
    listProcesses(search?: string, tags?: string, from?: number, to?: number, pageLimit?: number, pageCursor?: string, options?: Configuration): Observable<ProcessSummariesResponse>;
}
import { RolesApiRequestFactory, RolesApiResponseProcessor } from "../apis/RolesApi";
export declare class ObservableRolesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor);
    /**
     * Adds a permission to a role.
     * Grant permission to a role
     * @param roleId The ID of the role.
     * @param body
     */
    addPermissionToRole(roleId: string, body: RelationshipToPermission, options?: Configuration): Observable<PermissionsResponse>;
    /**
     * Adds a user to a role.
     * Add a user to a role
     * @param roleId The ID of the role.
     * @param body
     */
    addUserToRole(roleId: string, body: RelationshipToUser, options?: Configuration): Observable<UsersResponse>;
    /**
     * Create a new role for your organization.
     * Create role
     * @param body
     */
    createRole(body: RoleCreateRequest, options?: Configuration): Observable<RoleCreateResponse>;
    /**
     * Disables a role.
     * Delete role
     * @param roleId The ID of the role.
     */
    deleteRole(roleId: string, options?: Configuration): Observable<void>;
    /**
     * Get a role in the organization specified by the role’s `role_id`.
     * Get a role
     * @param roleId The ID of the role.
     */
    getRole(roleId: string, options?: Configuration): Observable<RoleResponse>;
    /**
     * Returns a list of all permissions, including name, description, and ID.
     * List permissions
     */
    listPermissions(options?: Configuration): Observable<PermissionsResponse>;
    /**
     * Returns a list of all permissions for a single role.
     * List permissions for a role
     * @param roleId The ID of the role.
     */
    listRolePermissions(roleId: string, options?: Configuration): Observable<PermissionsResponse>;
    /**
     * Gets all users of a role.
     * Get all users of a role
     * @param roleId The ID of the role.
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;email&#x60;, &#x60;status&#x60;.
     * @param filter Filter all users by the given string. Defaults to no filtering.
     */
    listRoleUsers(roleId: string, pageSize?: number, pageNumber?: number, sort?: string, filter?: string, options?: Configuration): Observable<UsersResponse>;
    /**
     * Returns all roles, including their names and IDs.
     * List roles
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort Sort roles depending on the given field. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example: &#x60;sort&#x3D;-name&#x60;.
     * @param filter Filter all roles by the given string.
     */
    listRoles(pageSize?: number, pageNumber?: number, sort?: RolesSort, filter?: string, options?: Configuration): Observable<RolesResponse>;
    /**
     * Removes a permission from a role.
     * Revoke permission
     * @param roleId The ID of the role.
     * @param body
     */
    removePermissionFromRole(roleId: string, body: RelationshipToPermission, options?: Configuration): Observable<PermissionsResponse>;
    /**
     * Removes a user from a role.
     * Remove a user from a role
     * @param roleId The ID of the role.
     * @param body
     */
    removeUserFromRole(roleId: string, body: RelationshipToUser, options?: Configuration): Observable<UsersResponse>;
    /**
     * Edit a role. Can only be used with application keys belonging to administrators.
     * Update a role
     * @param roleId The ID of the role.
     * @param body
     */
    updateRole(roleId: string, body: RoleUpdateRequest, options?: Configuration): Observable<RoleUpdateResponse>;
}
import { SecurityMonitoringApiRequestFactory, SecurityMonitoringApiResponseProcessor } from "../apis/SecurityMonitoringApi";
export declare class ObservableSecurityMonitoringApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SecurityMonitoringApiRequestFactory, responseProcessor?: SecurityMonitoringApiResponseProcessor);
    /**
     * Create a security filter.
     * Create a security filter
     * @param body The definition of the new security filter.
     */
    createSecurityFilter(body: SecurityFilterCreateRequest, options?: Configuration): Observable<SecurityFilterResponse>;
    /**
     * Create a detection rule.
     * Create a detection rule
     * @param body
     */
    createSecurityMonitoringRule(body: SecurityMonitoringRuleCreatePayload, options?: Configuration): Observable<SecurityMonitoringRuleResponse>;
    /**
     * Delete a specific security filter.
     * Delete a security filter
     * @param securityFilterId The ID of the security filter.
     */
    deleteSecurityFilter(securityFilterId: string, options?: Configuration): Observable<SecurityFilterDeleteResponse | void>;
    /**
     * Delete an existing rule. Default rules cannot be deleted.
     * Delete an existing rule
     * @param ruleId The ID of the rule.
     */
    deleteSecurityMonitoringRule(ruleId: string, options?: Configuration): Observable<void>;
    /**
     * Get the details of a specific security filter.
     * Get a security filter
     * @param securityFilterId The ID of the security filter.
     */
    getSecurityFilter(securityFilterId: string, options?: Configuration): Observable<SecurityFilterResponse>;
    /**
     * Get a rule's details.
     * Get a rule's details
     * @param ruleId The ID of the rule.
     */
    getSecurityMonitoringRule(ruleId: string, options?: Configuration): Observable<SecurityMonitoringRuleResponse>;
    /**
     * Get the list of configured security filters with their definitions.
     * Get all security filters
     */
    listSecurityFilters(options?: Configuration): Observable<SecurityFiltersResponse>;
    /**
     * List rules.
     * List rules
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     */
    listSecurityMonitoringRules(pageSize?: number, pageNumber?: number, options?: Configuration): Observable<SecurityMonitoringListRulesResponse>;
    /**
     * The list endpoint returns security signals that match a search query. Both this endpoint and the POST endpoint can be used interchangeably when listing security signals.
     * Get a quick list of security signals
     * @param filterQuery The search query for security signals.
     * @param filterFrom The minimum timestamp for requested security signals.
     * @param filterTo The maximum timestamp for requested security signals.
     * @param sort The order of the security signals in results.
     * @param pageCursor A list of results using the cursor provided in the previous query.
     * @param pageLimit The maximum number of security signals in the response.
     */
    listSecurityMonitoringSignals(filterQuery?: string, filterFrom?: Date, filterTo?: Date, sort?: SecurityMonitoringSignalsSort, pageCursor?: string, pageLimit?: number, options?: Configuration): Observable<SecurityMonitoringSignalsListResponse>;
    /**
     * Returns security signals that match a search query. Both this endpoint and the GET endpoint can be used interchangeably for listing security signals.
     * Get a list of security signals
     * @param body
     */
    searchSecurityMonitoringSignals(body?: SecurityMonitoringSignalListRequest, options?: Configuration): Observable<SecurityMonitoringSignalsListResponse>;
    /**
     * Update a specific security filter. Returns the security filter object when the request is successful.
     * Update a security filter
     * @param securityFilterId The ID of the security filter.
     * @param body New definition of the security filter.
     */
    updateSecurityFilter(securityFilterId: string, body: SecurityFilterUpdateRequest, options?: Configuration): Observable<SecurityFilterResponse>;
    /**
     * Update an existing rule. When updating `cases`, `queries` or `options`, the whole field must be included. For example, when modifying a query all queries must be included. Default rules can only be updated to be enabled and to change notifications.
     * Update an existing rule
     * @param ruleId The ID of the rule.
     * @param body
     */
    updateSecurityMonitoringRule(ruleId: string, body: SecurityMonitoringRuleUpdatePayload, options?: Configuration): Observable<SecurityMonitoringRuleResponse>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class ObservableUsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    /**
     * Create a user for your organization.
     * Create a user
     * @param body
     */
    createUser(body: UserCreateRequest, options?: Configuration): Observable<UserResponse>;
    /**
     * Disable a user. Can only be used with an application key belonging to an administrator user.
     * Disable a user
     * @param userId The ID of the user.
     */
    disableUser(userId: string, options?: Configuration): Observable<void>;
    /**
     * Returns a single user invitation by its UUID.
     * Get a user invitation
     * @param userInvitationUuid The UUID of the user invitation.
     */
    getInvitation(userInvitationUuid: string, options?: Configuration): Observable<UserInvitationResponse>;
    /**
     * Get a user in the organization specified by the user’s `user_id`.
     * Get user details
     * @param userId The ID of the user.
     */
    getUser(userId: string, options?: Configuration): Observable<UserResponse>;
    /**
     * Get a user organization. Returns the user information and all organizations joined by this user.
     * Get a user organization
     * @param userId The ID of the user.
     */
    listUserOrganizations(userId: string, options?: Configuration): Observable<UserResponse>;
    /**
     * Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.
     * Get a user permissions
     * @param userId The ID of the user.
     */
    listUserPermissions(userId: string, options?: Configuration): Observable<PermissionsResponse>;
    /**
     * Get the list of all users in the organization. This list includes all users even if they are deactivated or unverified.
     * List all users
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;modified_at&#x60;, &#x60;user_count&#x60;.
     * @param sortDir Direction of sort. Options: &#x60;asc&#x60;, &#x60;desc&#x60;.
     * @param filter Filter all users by the given string. Defaults to no filtering.
     * @param filterStatus Filter on status attribute. Comma separated list, with possible values &#x60;Active&#x60;, &#x60;Pending&#x60;, and &#x60;Disabled&#x60;. Defaults to no filtering.
     */
    listUsers(pageSize?: number, pageNumber?: number, sort?: string, sortDir?: QuerySortOrder, filter?: string, filterStatus?: string, options?: Configuration): Observable<UsersResponse>;
    /**
     * Sends emails to one or more users inviting them to join the organization.
     * Send invitation emails
     * @param body
     */
    sendInvitations(body: UserInvitationsRequest, options?: Configuration): Observable<UserInvitationsResponse>;
    /**
     * Edit a user. Can only be used with an application key belonging to an administrator user.
     * Update a user
     * @param userId The ID of the user.
     * @param body
     */
    updateUser(userId: string, body: UserUpdateRequest, options?: Configuration): Observable<UserResponse>;
}
