import { HttpFile } from '../http/http';
import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { AWSAccount } from '../models/AWSAccount';
import { AWSAccountAndLambdaRequest } from '../models/AWSAccountAndLambdaRequest';
import { AWSAccountCreateResponse } from '../models/AWSAccountCreateResponse';
import { AWSAccountListResponse } from '../models/AWSAccountListResponse';
import { AWSLogsAsyncResponse } from '../models/AWSLogsAsyncResponse';
import { AWSLogsListResponse } from '../models/AWSLogsListResponse';
import { AWSLogsListServicesResponse } from '../models/AWSLogsListServicesResponse';
import { AWSLogsServicesRequest } from '../models/AWSLogsServicesRequest';
import { AWSTagFilterCreateRequest } from '../models/AWSTagFilterCreateRequest';
import { AWSTagFilterDeleteRequest } from '../models/AWSTagFilterDeleteRequest';
import { AWSTagFilterListResponse } from '../models/AWSTagFilterListResponse';
import { ApiKey } from '../models/ApiKey';
import { ApiKeyListResponse } from '../models/ApiKeyListResponse';
import { ApiKeyResponse } from '../models/ApiKeyResponse';
import { ApplicationKey } from '../models/ApplicationKey';
import { ApplicationKeyListResponse } from '../models/ApplicationKeyListResponse';
import { ApplicationKeyResponse } from '../models/ApplicationKeyResponse';
import { AuthenticationValidationResponse } from '../models/AuthenticationValidationResponse';
import { AzureAccount } from '../models/AzureAccount';
import { CancelDowntimesByScopeRequest } from '../models/CancelDowntimesByScopeRequest';
import { CanceledDowntimesIds } from '../models/CanceledDowntimesIds';
import { CheckCanDeleteMonitorResponse } from '../models/CheckCanDeleteMonitorResponse';
import { CheckCanDeleteSLOResponse } from '../models/CheckCanDeleteSLOResponse';
import { ContentEncoding } from '../models/ContentEncoding';
import { Dashboard } from '../models/Dashboard';
import { DashboardDeleteResponse } from '../models/DashboardDeleteResponse';
import { DashboardList } from '../models/DashboardList';
import { DashboardListDeleteResponse } from '../models/DashboardListDeleteResponse';
import { DashboardListListResponse } from '../models/DashboardListListResponse';
import { DashboardSummary } from '../models/DashboardSummary';
import { DeletedMonitor } from '../models/DeletedMonitor';
import { Downtime } from '../models/Downtime';
import { EventCreateRequest } from '../models/EventCreateRequest';
import { EventCreateResponse } from '../models/EventCreateResponse';
import { EventListResponse } from '../models/EventListResponse';
import { EventPriority } from '../models/EventPriority';
import { EventResponse } from '../models/EventResponse';
import { GCPAccount } from '../models/GCPAccount';
import { GraphSnapshot } from '../models/GraphSnapshot';
import { HTTPLogItem } from '../models/HTTPLogItem';
import { HostListResponse } from '../models/HostListResponse';
import { HostMuteResponse } from '../models/HostMuteResponse';
import { HostMuteSettings } from '../models/HostMuteSettings';
import { HostTags } from '../models/HostTags';
import { HostTotals } from '../models/HostTotals';
import { IPRanges } from '../models/IPRanges';
import { IdpResponse } from '../models/IdpResponse';
import { IntakePayloadAccepted } from '../models/IntakePayloadAccepted';
import { LogsIndex } from '../models/LogsIndex';
import { LogsIndexListResponse } from '../models/LogsIndexListResponse';
import { LogsIndexUpdateRequest } from '../models/LogsIndexUpdateRequest';
import { LogsIndexesOrder } from '../models/LogsIndexesOrder';
import { LogsListRequest } from '../models/LogsListRequest';
import { LogsListResponse } from '../models/LogsListResponse';
import { LogsPipeline } from '../models/LogsPipeline';
import { LogsPipelinesOrder } from '../models/LogsPipelinesOrder';
import { MetricMetadata } from '../models/MetricMetadata';
import { MetricSearchResponse } from '../models/MetricSearchResponse';
import { MetricsListResponse } from '../models/MetricsListResponse';
import { MetricsPayload } from '../models/MetricsPayload';
import { MetricsQueryResponse } from '../models/MetricsQueryResponse';
import { Monitor } from '../models/Monitor';
import { MonitorUpdateRequest } from '../models/MonitorUpdateRequest';
import { NotebookCreateRequest } from '../models/NotebookCreateRequest';
import { NotebookResponse } from '../models/NotebookResponse';
import { NotebookUpdateRequest } from '../models/NotebookUpdateRequest';
import { NotebooksResponse } from '../models/NotebooksResponse';
import { Organization } from '../models/Organization';
import { OrganizationCreateBody } from '../models/OrganizationCreateBody';
import { OrganizationCreateResponse } from '../models/OrganizationCreateResponse';
import { OrganizationListResponse } from '../models/OrganizationListResponse';
import { OrganizationResponse } from '../models/OrganizationResponse';
import { PagerDutyService } from '../models/PagerDutyService';
import { PagerDutyServiceKey } from '../models/PagerDutyServiceKey';
import { PagerDutyServiceName } from '../models/PagerDutyServiceName';
import { SLOBulkDeleteResponse } from '../models/SLOBulkDeleteResponse';
import { SLOCorrectionCreateRequest } from '../models/SLOCorrectionCreateRequest';
import { SLOCorrectionListResponse } from '../models/SLOCorrectionListResponse';
import { SLOCorrectionResponse } from '../models/SLOCorrectionResponse';
import { SLOCorrectionUpdateRequest } from '../models/SLOCorrectionUpdateRequest';
import { SLODeleteResponse } from '../models/SLODeleteResponse';
import { SLOHistoryResponse } from '../models/SLOHistoryResponse';
import { SLOListResponse } from '../models/SLOListResponse';
import { SLOResponse } from '../models/SLOResponse';
import { SLOTimeframe } from '../models/SLOTimeframe';
import { ServiceCheck } from '../models/ServiceCheck';
import { ServiceLevelObjective } from '../models/ServiceLevelObjective';
import { ServiceLevelObjectiveRequest } from '../models/ServiceLevelObjectiveRequest';
import { SlackIntegrationChannel } from '../models/SlackIntegrationChannel';
import { SyntheticsAPITest } from '../models/SyntheticsAPITest';
import { SyntheticsAPITestResultFull } from '../models/SyntheticsAPITestResultFull';
import { SyntheticsBrowserTest } from '../models/SyntheticsBrowserTest';
import { SyntheticsBrowserTestResultFull } from '../models/SyntheticsBrowserTestResultFull';
import { SyntheticsCITestBody } from '../models/SyntheticsCITestBody';
import { SyntheticsDeleteTestsPayload } from '../models/SyntheticsDeleteTestsPayload';
import { SyntheticsDeleteTestsResponse } from '../models/SyntheticsDeleteTestsResponse';
import { SyntheticsGetAPITestLatestResultsResponse } from '../models/SyntheticsGetAPITestLatestResultsResponse';
import { SyntheticsGetBrowserTestLatestResultsResponse } from '../models/SyntheticsGetBrowserTestLatestResultsResponse';
import { SyntheticsGlobalVariable } from '../models/SyntheticsGlobalVariable';
import { SyntheticsListTestsResponse } from '../models/SyntheticsListTestsResponse';
import { SyntheticsLocations } from '../models/SyntheticsLocations';
import { SyntheticsPrivateLocation } from '../models/SyntheticsPrivateLocation';
import { SyntheticsPrivateLocationCreationResponse } from '../models/SyntheticsPrivateLocationCreationResponse';
import { SyntheticsTestDetails } from '../models/SyntheticsTestDetails';
import { SyntheticsTriggerCITestsResponse } from '../models/SyntheticsTriggerCITestsResponse';
import { SyntheticsUpdateTestPauseStatusPayload } from '../models/SyntheticsUpdateTestPauseStatusPayload';
import { TagToHosts } from '../models/TagToHosts';
import { UsageAnalyzedLogsResponse } from '../models/UsageAnalyzedLogsResponse';
import { UsageAttributionResponse } from '../models/UsageAttributionResponse';
import { UsageAttributionSort } from '../models/UsageAttributionSort';
import { UsageAttributionSupportedMetrics } from '../models/UsageAttributionSupportedMetrics';
import { UsageBillableSummaryResponse } from '../models/UsageBillableSummaryResponse';
import { UsageComplianceResponse } from '../models/UsageComplianceResponse';
import { UsageCustomReportsResponse } from '../models/UsageCustomReportsResponse';
import { UsageFargateResponse } from '../models/UsageFargateResponse';
import { UsageHostsResponse } from '../models/UsageHostsResponse';
import { UsageIncidentManagementResponse } from '../models/UsageIncidentManagementResponse';
import { UsageIndexedSpansResponse } from '../models/UsageIndexedSpansResponse';
import { UsageIngestedSpansResponse } from '../models/UsageIngestedSpansResponse';
import { UsageIoTResponse } from '../models/UsageIoTResponse';
import { UsageLambdaResponse } from '../models/UsageLambdaResponse';
import { UsageLogsByIndexResponse } from '../models/UsageLogsByIndexResponse';
import { UsageLogsByRetentionResponse } from '../models/UsageLogsByRetentionResponse';
import { UsageLogsResponse } from '../models/UsageLogsResponse';
import { UsageNetworkFlowsResponse } from '../models/UsageNetworkFlowsResponse';
import { UsageNetworkHostsResponse } from '../models/UsageNetworkHostsResponse';
import { UsageProfilingResponse } from '../models/UsageProfilingResponse';
import { UsageRumSessionsResponse } from '../models/UsageRumSessionsResponse';
import { UsageSNMPResponse } from '../models/UsageSNMPResponse';
import { UsageSort } from '../models/UsageSort';
import { UsageSortDirection } from '../models/UsageSortDirection';
import { UsageSpecifiedCustomReportsResponse } from '../models/UsageSpecifiedCustomReportsResponse';
import { UsageSummaryResponse } from '../models/UsageSummaryResponse';
import { UsageSyntheticsAPIResponse } from '../models/UsageSyntheticsAPIResponse';
import { UsageSyntheticsBrowserResponse } from '../models/UsageSyntheticsBrowserResponse';
import { UsageSyntheticsResponse } from '../models/UsageSyntheticsResponse';
import { UsageTimeseriesResponse } from '../models/UsageTimeseriesResponse';
import { UsageTopAvgMetricsResponse } from '../models/UsageTopAvgMetricsResponse';
import { UsageTraceResponse } from '../models/UsageTraceResponse';
import { UsageTracingWithoutLimitsResponse } from '../models/UsageTracingWithoutLimitsResponse';
import { User } from '../models/User';
import { UserDisableResponse } from '../models/UserDisableResponse';
import { UserListResponse } from '../models/UserListResponse';
import { UserResponse } from '../models/UserResponse';
import { AWSIntegrationApiRequestFactory, AWSIntegrationApiResponseProcessor } from "../apis/AWSIntegrationApi";
export declare class ObservableAWSIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AWSIntegrationApiRequestFactory, responseProcessor?: AWSIntegrationApiResponseProcessor);
    /**
     * Create a Datadog-Amazon Web Services integration. Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization. A unique AWS Account ID for role based authentication.
     * Create an AWS integration
     * @param body AWS Request Object
     */
    createAWSAccount(body: AWSAccount, options?: Configuration): Observable<AWSAccountCreateResponse>;
    /**
     * Set an AWS tag filter.
     * Set an AWS tag filter
     * @param body Set an AWS tag filter using an &#x60;aws_account_identifier&#x60;, &#x60;namespace&#x60;, and filtering string. Namespace options are &#x60;application_elb&#x60;, &#x60;elb&#x60;, &#x60;lambda&#x60;, &#x60;network_elb&#x60;, &#x60;rds&#x60;, &#x60;sqs&#x60;, and &#x60;custom&#x60;.
     */
    createAWSTagFilter(body: AWSTagFilterCreateRequest, options?: Configuration): Observable<any>;
    /**
     * Generate a new AWS external ID for a given AWS account ID and role name pair.
     * Generate a new external ID
     * @param body Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://github.com/DataDog/documentation/blob/master/integrations/amazon_web_services/#installation).
     */
    createNewAWSExternalID(body: AWSAccount, options?: Configuration): Observable<AWSAccountCreateResponse>;
    /**
     * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
     * Delete an AWS integration
     * @param body AWS request object
     */
    deleteAWSAccount(body: AWSAccount, options?: Configuration): Observable<any>;
    /**
     * Delete a tag filtering entry.
     * Delete a tag filtering entry
     * @param body Delete a tag filtering entry for a given AWS account and &#x60;dd-aws&#x60; namespace.
     */
    deleteAWSTagFilter(body: AWSTagFilterDeleteRequest, options?: Configuration): Observable<any>;
    /**
     * List all Datadog-AWS integrations available in your Datadog organization.
     * List all AWS integrations
     * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @param roleName Only return AWS accounts that matches this role_name.
     * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;.
     */
    listAWSAccounts(accountId?: string, roleName?: string, accessKeyId?: string, options?: Configuration): Observable<AWSAccountListResponse>;
    /**
     * Get all AWS tag filters.
     * Get all AWS tag filters
     * @param accountId Only return AWS filters that matches this &#x60;account_id&#x60;.
     */
    listAWSTagFilters(accountId: string, options?: Configuration): Observable<AWSTagFilterListResponse>;
    /**
     * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
     * List namespace rules
     */
    listAvailableAWSNamespaces(options?: Configuration): Observable<Array<string>>;
    /**
     * Update a Datadog-Amazon Web Services integration.
     * Update an AWS integration
     * @param body AWS request object
     * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @param roleName Only return AWS accounts that match this &#x60;role_name&#x60;. Required if &#x60;account_id&#x60; is specified.
     * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;. Required if none of the other two options are specified.
     */
    updateAWSAccount(body: AWSAccount, accountId?: string, roleName?: string, accessKeyId?: string, options?: Configuration): Observable<any>;
}
import { AWSLogsIntegrationApiRequestFactory, AWSLogsIntegrationApiResponseProcessor } from "../apis/AWSLogsIntegrationApi";
export declare class ObservableAWSLogsIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AWSLogsIntegrationApiRequestFactory, responseProcessor?: AWSLogsIntegrationApiResponseProcessor);
    /**
     * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this endpoint can be polled intermittently instead of blocking.  - Returns a status of 'created' when it's checking if the Lambda exists in the account. - Returns a status of 'waiting' while checking. - Returns a status of 'checked and ok' if the Lambda exists. - Returns a status of 'error' if the Lambda does not exist.
     * Check that an AWS Lambda Function exists
     * @param body Check AWS Log Lambda Async request body.
     */
    checkAWSLogsLambdaAsync(body: AWSAccountAndLambdaRequest, options?: Configuration): Observable<AWSLogsAsyncResponse>;
    /**
     * Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.
     * Check permissions for log services
     * @param body Check AWS Logs Async Services request body.
     */
    checkAWSLogsServicesAsync(body: AWSLogsServicesRequest, options?: Configuration): Observable<AWSLogsAsyncResponse>;
    /**
     * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
     * Add AWS Log Lambda ARN
     * @param body AWS Log Lambda Async request body.
     */
    createAWSLambdaARN(body: AWSAccountAndLambdaRequest, options?: Configuration): Observable<any>;
    /**
     * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
     * Delete an AWS Logs integration
     * @param body Delete AWS Lambda ARN request body.
     */
    deleteAWSLambdaARN(body: AWSAccountAndLambdaRequest, options?: Configuration): Observable<any>;
    /**
     * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
     * Enable an AWS Logs integration
     * @param body Enable AWS Log Services request body.
     */
    enableAWSLogServices(body: AWSLogsServicesRequest, options?: Configuration): Observable<any>;
    /**
     * List all Datadog-AWS Logs integrations configured in your Datadog account.
     * List all AWS Logs integrations
     */
    listAWSLogsIntegrations(options?: Configuration): Observable<Array<AWSLogsListResponse>>;
    /**
     * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
     * Get list of AWS log ready services
     */
    listAWSLogsServices(options?: Configuration): Observable<Array<AWSLogsListServicesResponse>>;
}
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor } from "../apis/AuthenticationApi";
export declare class ObservableAuthenticationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor);
    /**
     * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
     * Validate API key
     */
    validate(options?: Configuration): Observable<AuthenticationValidationResponse>;
}
import { AzureIntegrationApiRequestFactory, AzureIntegrationApiResponseProcessor } from "../apis/AzureIntegrationApi";
export declare class ObservableAzureIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: AzureIntegrationApiRequestFactory, responseProcessor?: AzureIntegrationApiResponseProcessor);
    /**
     * Create a Datadog-Azure integration.  Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization.  Using the `PUT` method updates your integration configuration by replacing your current configuration with the new one sent to your Datadog organization.
     * Create an Azure integration
     * @param body Create a Datadog-Azure integration for your Datadog account request body.
     */
    createAzureIntegration(body: AzureAccount, options?: Configuration): Observable<any>;
    /**
     * Delete a given Datadog-Azure integration from your Datadog account.
     * Delete an Azure integration
     * @param body Delete a given Datadog-Azure integration request body.
     */
    deleteAzureIntegration(body: AzureAccount, options?: Configuration): Observable<any>;
    /**
     * List all Datadog-Azure integrations configured in your Datadog account.
     * List all Azure integrations
     */
    listAzureIntegration(options?: Configuration): Observable<Array<AzureAccount>>;
    /**
     * Update the defined list of host filters for a given Datadog-Azure integration.
     * Update Azure integration host filters
     * @param body Update a Datadog-Azure integration&#39;s host filters request body.
     */
    updateAzureHostFilters(body: AzureAccount, options?: Configuration): Observable<any>;
    /**
     * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`. Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`, use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
     * Update an Azure integration
     * @param body Update a Datadog-Azure integration request body.
     */
    updateAzureIntegration(body: AzureAccount, options?: Configuration): Observable<any>;
}
import { DashboardListsApiRequestFactory, DashboardListsApiResponseProcessor } from "../apis/DashboardListsApi";
export declare class ObservableDashboardListsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DashboardListsApiRequestFactory, responseProcessor?: DashboardListsApiResponseProcessor);
    /**
     * Create an empty dashboard list.
     * Create a dashboard list
     * @param body Create a dashboard list request body.
     */
    createDashboardList(body: DashboardList, options?: Configuration): Observable<DashboardList>;
    /**
     * Delete a dashboard list.
     * Delete a dashboard list
     * @param listId ID of the dashboard list to delete.
     */
    deleteDashboardList(listId: number, options?: Configuration): Observable<DashboardListDeleteResponse>;
    /**
     * Fetch an existing dashboard list's definition.
     * Get a dashboard list
     * @param listId ID of the dashboard list to fetch.
     */
    getDashboardList(listId: number, options?: Configuration): Observable<DashboardList>;
    /**
     * Fetch all of your existing dashboard list definitions.
     * Get all dashboard lists
     */
    listDashboardLists(options?: Configuration): Observable<DashboardListListResponse>;
    /**
     * Update the name of a dashboard list.
     * Update a dashboard list
     * @param listId ID of the dashboard list to update.
     * @param body Update a dashboard list request body.
     */
    updateDashboardList(listId: number, body: DashboardList, options?: Configuration): Observable<DashboardList>;
}
import { DashboardsApiRequestFactory, DashboardsApiResponseProcessor } from "../apis/DashboardsApi";
export declare class ObservableDashboardsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DashboardsApiRequestFactory, responseProcessor?: DashboardsApiResponseProcessor);
    /**
     * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended. Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
     * Create a new dashboard
     * @param body Create a dashboard request body.
     */
    createDashboard(body: Dashboard, options?: Configuration): Observable<Dashboard>;
    /**
     * Delete a dashboard using the specified ID.
     * Delete a dashboard
     * @param dashboardId The ID of the dashboard.
     */
    deleteDashboard(dashboardId: string, options?: Configuration): Observable<DashboardDeleteResponse>;
    /**
     * Get a dashboard using the specified ID.
     * Get a dashboard
     * @param dashboardId The ID of the dashboard.
     */
    getDashboard(dashboardId: string, options?: Configuration): Observable<Dashboard>;
    /**
     * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
     * Get all dashboards
     * @param filterShared When &#x60;true&#x60;, this query only returns shared custom created or cloned dashboards.
     */
    listDashboards(filterShared?: boolean, options?: Configuration): Observable<DashboardSummary>;
    /**
     * Update a dashboard using the specified ID.
     * Update a dashboard
     * @param dashboardId The ID of the dashboard.
     * @param body Update Dashboard request body.
     */
    updateDashboard(dashboardId: string, body: Dashboard, options?: Configuration): Observable<Dashboard>;
}
import { DowntimesApiRequestFactory, DowntimesApiResponseProcessor } from "../apis/DowntimesApi";
export declare class ObservableDowntimesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: DowntimesApiRequestFactory, responseProcessor?: DowntimesApiResponseProcessor);
    /**
     * Cancel a downtime.
     * Cancel a downtime
     * @param downtimeId ID of the downtime to cancel.
     */
    cancelDowntime(downtimeId: number, options?: Configuration): Observable<void>;
    /**
     * Delete all downtimes that match the scope of `X`.
     * Cancel downtimes by scope
     * @param body Scope to cancel downtimes for.
     */
    cancelDowntimesByScope(body: CancelDowntimesByScopeRequest, options?: Configuration): Observable<CanceledDowntimesIds>;
    /**
     * Schedule a downtime.
     * Schedule a downtime
     * @param body Schedule a downtime request body.
     */
    createDowntime(body: Downtime, options?: Configuration): Observable<Downtime>;
    /**
     * Get downtime detail by `downtime_id`.
     * Get a downtime
     * @param downtimeId ID of the downtime to fetch.
     */
    getDowntime(downtimeId: number, options?: Configuration): Observable<Downtime>;
    /**
     * Get all scheduled downtimes.
     * Get all downtimes
     * @param currentOnly Only return downtimes that are active when the request is made.
     */
    listDowntimes(currentOnly?: boolean, options?: Configuration): Observable<Array<Downtime>>;
    /**
     * Get all downtimes for the specified monitor
     * Get all downtimes for a monitor
     * @param monitorId The id of the monitor
     */
    listMonitorDowntimes(monitorId: number, options?: Configuration): Observable<Array<Downtime>>;
    /**
     * Update a single downtime by `downtime_id`.
     * Update a downtime
     * @param downtimeId ID of the downtime to update.
     * @param body Update a downtime request body.
     */
    updateDowntime(downtimeId: number, body: Downtime, options?: Configuration): Observable<Downtime>;
}
import { EventsApiRequestFactory, EventsApiResponseProcessor } from "../apis/EventsApi";
export declare class ObservableEventsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    /**
     * This endpoint allows you to post events to the stream. Tag them, set priority and event aggregate them with other events.
     * Post an event
     * @param body Event request object
     */
    createEvent(body: EventCreateRequest, options?: Configuration): Observable<EventCreateResponse>;
    /**
     * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
     * Get an event
     * @param eventId The ID of the event.
     */
    getEvent(eventId: number, options?: Configuration): Observable<EventResponse>;
    /**
     * The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
     * Query the event stream
     * @param start POSIX timestamp.
     * @param end POSIX timestamp.
     * @param priority Priority of your events, either &#x60;low&#x60; or &#x60;normal&#x60;.
     * @param sources A comma separated string of sources.
     * @param tags A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope.
     * @param unaggregated Set unaggregated to &#x60;true&#x60; to return all events within the specified [&#x60;start&#x60;,&#x60;end&#x60;] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won&#39;t be available in the output. Aggregated events with &#x60;is_aggregate&#x3D;true&#x60; in the response will still be returned unless exclude_aggregate is set to &#x60;true.&#x60;
     * @param excludeAggregate Set &#x60;exclude_aggregate&#x60; to &#x60;true&#x60; to only return unaggregated events where &#x60;is_aggregate&#x3D;false&#x60; in the response. If the &#x60;exclude_aggregate&#x60; parameter is set to &#x60;true&#x60;, then the unaggregated parameter is ignored and will be &#x60;true&#x60; by default.
     * @param page By default 1000 results are returned per request. Set page to the number of the page to return with &#x60;0&#x60; being the first page. The page parameter can only be used when either unaggregated or exclude_aggregate is set to &#x60;true.&#x60;
     */
    listEvents(start: number, end: number, priority?: EventPriority, sources?: string, tags?: string, unaggregated?: boolean, excludeAggregate?: boolean, page?: number, options?: Configuration): Observable<EventListResponse>;
}
import { GCPIntegrationApiRequestFactory, GCPIntegrationApiResponseProcessor } from "../apis/GCPIntegrationApi";
export declare class ObservableGCPIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: GCPIntegrationApiRequestFactory, responseProcessor?: GCPIntegrationApiResponseProcessor);
    /**
     * Create a Datadog-GCP integration.
     * Create a GCP integration
     * @param body Create a Datadog-GCP integration.
     */
    createGCPIntegration(body: GCPAccount, options?: Configuration): Observable<any>;
    /**
     * Delete a given Datadog-GCP integration.
     * Delete a GCP integration
     * @param body Delete a given Datadog-GCP integration.
     */
    deleteGCPIntegration(body: GCPAccount, options?: Configuration): Observable<any>;
    /**
     * List all Datadog-GCP integrations configured in your Datadog account.
     * List all GCP integrations
     */
    listGCPIntegration(options?: Configuration): Observable<Array<GCPAccount>>;
    /**
     * Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.
     * Update a GCP integration
     * @param body Update a Datadog-GCP integration.
     */
    updateGCPIntegration(body: GCPAccount, options?: Configuration): Observable<any>;
}
import { HostsApiRequestFactory, HostsApiResponseProcessor } from "../apis/HostsApi";
export declare class ObservableHostsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: HostsApiRequestFactory, responseProcessor?: HostsApiResponseProcessor);
    /**
     * This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.
     * Get the total number of active hosts
     * @param from Number of seconds from which you want to get total number of active hosts.
     */
    getHostTotals(from?: number, options?: Configuration): Observable<HostTotals>;
    /**
     * This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.
     * Get all hosts for your organization
     * @param filter String to filter search results.
     * @param sortField Sort hosts by this field.
     * @param sortDir Direction of sort. Options include &#x60;asc&#x60; and &#x60;desc&#x60;.
     * @param start Host result to start search from.
     * @param count Number of hosts to return. Max 1000.
     * @param from Number of seconds since UNIX epoch from which you want to search your hosts.
     * @param includeMutedHostsData Include information on the muted status of hosts and when the mute expires.
     * @param includeHostsMetadata Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).
     */
    listHosts(filter?: string, sortField?: string, sortDir?: string, start?: number, count?: number, from?: number, includeMutedHostsData?: boolean, includeHostsMetadata?: boolean, options?: Configuration): Observable<HostListResponse>;
    /**
     * Mute a host.
     * Mute a host
     * @param hostName Name of the host to mute.
     * @param body Mute a host request body.
     */
    muteHost(hostName: string, body: HostMuteSettings, options?: Configuration): Observable<HostMuteResponse>;
    /**
     * Unmutes a host. This endpoint takes no JSON arguments.
     * Unmute a host
     * @param hostName Name of the host to unmute.
     */
    unmuteHost(hostName: string, options?: Configuration): Observable<HostMuteResponse>;
}
import { IPRangesApiRequestFactory, IPRangesApiResponseProcessor } from "../apis/IPRangesApi";
export declare class ObservableIPRangesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: IPRangesApiRequestFactory, responseProcessor?: IPRangesApiResponseProcessor);
    /**
     * Get information about Datadog IP ranges.
     * List IP Ranges
     */
    getIPRanges(options?: Configuration): Observable<IPRanges>;
}
import { KeyManagementApiRequestFactory, KeyManagementApiResponseProcessor } from "../apis/KeyManagementApi";
export declare class ObservableKeyManagementApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: KeyManagementApiRequestFactory, responseProcessor?: KeyManagementApiResponseProcessor);
    /**
     * Creates an API key with a given name.
     * Create an API key
     * @param body
     */
    createAPIKey(body: ApiKey, options?: Configuration): Observable<ApiKeyResponse>;
    /**
     * Create an application key with a given name.
     * Create an application key
     * @param body
     */
    createApplicationKey(body: ApplicationKey, options?: Configuration): Observable<ApplicationKeyResponse>;
    /**
     * Delete a given API key.
     * Delete an API key
     * @param key The specific API key you are working with.
     */
    deleteAPIKey(key: string, options?: Configuration): Observable<ApiKeyResponse>;
    /**
     * Delete a given application key.
     * Delete an application key
     * @param key The specific APP key you are working with.
     */
    deleteApplicationKey(key: string, options?: Configuration): Observable<ApplicationKeyResponse>;
    /**
     * Get a given API key.
     * Get API key
     * @param key The specific API key you are working with.
     */
    getAPIKey(key: string, options?: Configuration): Observable<ApiKeyResponse>;
    /**
     * Get a given application key.
     * Get an application key
     * @param key The specific APP key you are working with.
     */
    getApplicationKey(key: string, options?: Configuration): Observable<ApplicationKeyResponse>;
    /**
     * Get all API keys available for your account.
     * Get all API keys
     */
    listAPIKeys(options?: Configuration): Observable<ApiKeyListResponse>;
    /**
     * Get all application keys available for your Datadog account.
     * Get all application keys
     */
    listApplicationKeys(options?: Configuration): Observable<ApplicationKeyListResponse>;
    /**
     * Edit an API key name.
     * Edit an API key
     * @param key The specific API key you are working with.
     * @param body
     */
    updateAPIKey(key: string, body: ApiKey, options?: Configuration): Observable<ApiKeyResponse>;
    /**
     * Edit an application key name.
     * Edit an application key
     * @param key The specific APP key you are working with.
     * @param body
     */
    updateApplicationKey(key: string, body: ApplicationKey, options?: Configuration): Observable<ApplicationKeyResponse>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export declare class ObservableLogsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param body Logs filter
     */
    listLogs(body: LogsListRequest, options?: Configuration): Observable<LogsListResponse>;
    /**
     * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 200: OK - 400: Bad request (likely an issue in the payload formatting) - 403: Permission issue (likely using an invalid API Key) - 413: Payload too large (batch is above 5MB uncompressed) - 5xx: Internal error, request should be retried after some time
     * Send logs
     * @param body Log to send (JSON format).
     * @param contentEncoding HTTP header used to compress the media-type.
     * @param ddtags Log tags can be passed as query parameters with &#x60;text/plain&#x60; content type.
     */
    submitLog(body: Array<HTTPLogItem>, contentEncoding?: ContentEncoding, ddtags?: string, options?: Configuration): Observable<any>;
}
import { LogsIndexesApiRequestFactory, LogsIndexesApiResponseProcessor } from "../apis/LogsIndexesApi";
export declare class ObservableLogsIndexesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsIndexesApiRequestFactory, responseProcessor?: LogsIndexesApiResponseProcessor);
    /**
     * Creates a new index. Returns the Index object passed in the request body when the request is successful.
     * Create an index
     * @param body Object containing the new index.
     */
    createLogsIndex(body: LogsIndex, options?: Configuration): Observable<LogsIndex>;
    /**
     * Get one log index from your organization. This endpoint takes no JSON arguments.
     * Get an index
     * @param name Name of the log index.
     */
    getLogsIndex(name: string, options?: Configuration): Observable<LogsIndex>;
    /**
     * Get the current order of your log indexes. This endpoint takes no JSON arguments.
     * Get indexes order
     */
    getLogsIndexOrder(options?: Configuration): Observable<LogsIndexesOrder>;
    /**
     * The Index object describes the configuration of a log index. This endpoint returns an array of the `LogIndex` objects of your organization.
     * Get all indexes
     */
    listLogIndexes(options?: Configuration): Observable<LogsIndexListResponse>;
    /**
     * Update an index as identified by its name. Returns the Index object passed in the request body when the request is successful.  Using the `PUT` method updates your index’s configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an index
     * @param name Name of the log index.
     * @param body Object containing the new &#x60;LogsIndexUpdateRequest&#x60;.
     */
    updateLogsIndex(name: string, body: LogsIndexUpdateRequest, options?: Configuration): Observable<LogsIndex>;
    /**
     * This endpoint updates the index order of your organization. It returns the index order object passed in the request body when the request is successful.
     * Update indexes order
     * @param body Object containing the new ordered list of index names
     */
    updateLogsIndexOrder(body: LogsIndexesOrder, options?: Configuration): Observable<LogsIndexesOrder>;
}
import { LogsPipelinesApiRequestFactory, LogsPipelinesApiResponseProcessor } from "../apis/LogsPipelinesApi";
export declare class ObservableLogsPipelinesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: LogsPipelinesApiRequestFactory, responseProcessor?: LogsPipelinesApiResponseProcessor);
    /**
     * Create a pipeline in your organization.
     * Create a pipeline
     * @param body Definition of the new pipeline.
     */
    createLogsPipeline(body: LogsPipeline, options?: Configuration): Observable<LogsPipeline>;
    /**
     * Delete a given pipeline from your organization. This endpoint takes no JSON arguments.
     * Delete a pipeline
     * @param pipelineId ID of the pipeline to delete.
     */
    deleteLogsPipeline(pipelineId: string, options?: Configuration): Observable<void>;
    /**
     * Get a specific pipeline from your organization. This endpoint takes no JSON arguments.
     * Get a pipeline
     * @param pipelineId ID of the pipeline to get.
     */
    getLogsPipeline(pipelineId: string, options?: Configuration): Observable<LogsPipeline>;
    /**
     * Get the current order of your pipelines. This endpoint takes no JSON arguments.
     * Get pipeline order
     */
    getLogsPipelineOrder(options?: Configuration): Observable<LogsPipelinesOrder>;
    /**
     * Get all pipelines from your organization. This endpoint takes no JSON arguments.
     * Get all pipelines
     */
    listLogsPipelines(options?: Configuration): Observable<Array<LogsPipeline>>;
    /**
     * Update a given pipeline configuration to change it’s processors or their order.  **Note**: Using this method updates your pipeline configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update a pipeline
     * @param pipelineId ID of the pipeline to delete.
     * @param body New definition of the pipeline.
     */
    updateLogsPipeline(pipelineId: string, body: LogsPipeline, options?: Configuration): Observable<LogsPipeline>;
    /**
     * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change the structure and content of the data processed by other pipelines and their processors.  **Note**: Using the `PUT` method updates your pipeline order by replacing your current order with the new one sent to your Datadog organization.
     * Update pipeline order
     * @param body Object containing the new ordered list of pipeline IDs.
     */
    updateLogsPipelineOrder(body: LogsPipelinesOrder, options?: Configuration): Observable<LogsPipelinesOrder>;
}
import { MetricsApiRequestFactory, MetricsApiResponseProcessor } from "../apis/MetricsApi";
export declare class ObservableMetricsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor);
    /**
     * Get metadata about a specific metric.
     * Get metric metadata
     * @param metricName Name of the metric for which to get metadata.
     */
    getMetricMetadata(metricName: string, options?: Configuration): Observable<MetricMetadata>;
    /**
     * Get the list of actively reporting metrics from a given time until now.
     * Get active metrics list
     * @param from Seconds since the Unix epoch.
     * @param host Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag.
     * @param tagFilter Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
     */
    listActiveMetrics(from: number, host?: string, tagFilter?: string, options?: Configuration): Observable<MetricsListResponse>;
    /**
     * Search for metrics from the last 24 hours in Datadog.
     * Search metrics
     * @param q Query string to search metrics upon. Must be prefixed with &#x60;metrics:&#x60;.
     */
    listMetrics(q: string, options?: Configuration): Observable<MetricSearchResponse>;
    /**
     * Query timeseries points.
     * Query timeseries points
     * @param from Start of the queried time period, seconds since the Unix epoch.
     * @param to End of the queried time period, seconds since the Unix epoch.
     * @param query Query string.
     */
    queryMetrics(from: number, to: number, query: string, options?: Configuration): Observable<MetricsQueryResponse>;
    /**
     * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards. The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).  If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:  - 64 bits for the timestamp - 32 bits for the value - 20 bytes for the metric names - 50 bytes for the timeseries - The full payload is approximately 100 bytes. However, with the DogStatsD API, compression is applied, which reduces the payload size.
     * Submit metrics
     * @param body
     */
    submitMetrics(body: MetricsPayload, options?: Configuration): Observable<IntakePayloadAccepted>;
    /**
     * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
     * Edit metric metadata
     * @param metricName Name of the metric for which to edit metadata.
     * @param body New metadata.
     */
    updateMetricMetadata(metricName: string, body: MetricMetadata, options?: Configuration): Observable<MetricMetadata>;
}
import { MonitorsApiRequestFactory, MonitorsApiResponseProcessor } from "../apis/MonitorsApi";
export declare class ObservableMonitorsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: MonitorsApiRequestFactory, responseProcessor?: MonitorsApiResponseProcessor);
    /**
     * Check if the given monitors can be deleted.
     * Check if a monitor can be deleted
     * @param monitorIds The IDs of the monitor to check.
     */
    checkCanDeleteMonitor(monitorIds: Array<number>, options?: Configuration): Observable<CheckCanDeleteMonitorResponse>;
    /**
     * Create a monitor using the specified options.  #### Monitor Types  The type of monitor chosen from:  - anomaly: `query alert` - APM: `query alert` or `trace-analytics alert` - composite: `composite` - custom: `service check` - event: `event alert` - forecast: `query alert` - host: `service check` - integration: `query alert` or `service check` - live process: `process alert` - logs: `log alert` - metric: `metric alert` - network: `service check` - outlier: `query alert` - process: `service check` - rum: `rum alert` - SLO: `slo alert` - watchdog: `event alert` - event-v2: `event-v2 alert`  #### Query Types  **Metric Alert Query**  Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`  - `time_aggr`: avg, sum, max, min, change, or pct_change - `time_window`: `last_#m` (with `#` between 1 and 2880 depending on the monitor type) or `last_#h`(with `#` between 1 and 48 depending on the monitor type), or `last_1d` - `space_aggr`: avg, sum, min, or max - `tags`: one or more tags (comma-separated), or * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert) - `operator`: <, <=, >, >=, ==, or != - `#`: an integer or decimal number used to set the threshold  If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:  - `change_aggr` change, pct_change - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/monitor_types/#define-the-conditions) - `time_window` last\\_#m (between 1 and 2880 depending on the monitor type), last\\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2) - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago  Use this to create an outlier monitor using the following query: `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`  **Service Check Query**  Example: `\"check\".over(tags).last(count).count_by_status()`  - **`check`** name of the check, e.g. `datadog.agent.up` - **`tags`** one or more quoted tags (comma-separated), or \"*\". e.g.: `.over(\"env:prod\", \"role:db\")` - **`count`** must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100. For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be 3.  **Event Alert Query**  Example: `events('sources:nagios status:error,warning priority:normal tags: \"string query\"').rollup(\"count\").last(\"1h\")\"`  - **`event`**, the event query string: - **`string_query`** free text query to match against event title and text. - **`sources`** event sources (comma-separated). - **`status`** event statuses (comma-separated). Valid options: error, warn, and info. - **`priority`** event priorities (comma-separated). Valid options: low, normal, all. - **`host`** event reporting host (comma-separated). - **`tags`** event tags (comma-separated). - **`excluded_tags`** excluded event tags (comma-separated). - **`rollup`** the stats roll-up method. `count` is the only supported method now. - **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.  **NOTE** Only available on US1 and EU.  **Event V2 Alert Query**  Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (5, 10, 15, or 30), #h (1, 2, or 4, 24). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED, US3, and in closed beta on EU and US1.  **Process Alert Query**  Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`  - **`search`** free text search string for querying processes. Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page. - **`tags`** one or more tags (comma-separated) - **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d - **`operator`** <, <=, >, >=, ==, or != - **`#`** an integer or decimal number used to set the threshold  **Logs Alert Query**  Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`index_name`** For multi-index organizations, the log index in which the request is performed. - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48) - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **Composite Query**  Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors  * **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert. * **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor. Email notifications can be sent to specific users by using the same '@username' notation as events. * **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor. When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags. It is only available via the API and isn't visible or editable in the Datadog UI.  **SLO Alert Query**  Example: `error_budget(\"slo_id\").over(\"time_window\") operator #`  - **`slo_id`**: The alphanumeric SLO ID of the SLO you are configuring the alert for. - **`time_window`**: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`. - **`operator`**: `>=` or `>`
     * Create a monitor
     * @param body Create a monitor request body.
     */
    createMonitor(body: Monitor, options?: Configuration): Observable<Monitor>;
    /**
     * Delete the specified monitor
     * Delete a monitor
     * @param monitorId The ID of the monitor.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    deleteMonitor(monitorId: number, force?: string, options?: Configuration): Observable<DeletedMonitor>;
    /**
     * Get details about the specified monitor from your organization.
     * Get a monitor's details
     * @param monitorId The ID of the monitor
     * @param groupStates When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     */
    getMonitor(monitorId: number, groupStates?: string, options?: Configuration): Observable<Monitor>;
    /**
     * Get details about the specified monitor from your organization.
     * Get all monitor details
     * @param groupStates When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     * @param name A string to filter monitors by name.
     * @param tags A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, &#x60;host:host0&#x60;.
     * @param monitorTags A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, &#x60;service:my-app&#x60;.
     * @param withDowntimes If this argument is set to true, then the returned data includes all current downtimes for each monitor.
     * @param idOffset Monitor ID offset.
     * @param page The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.
     * @param pageSize The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a &#x60;page_size&#x60; limit. However, if page is specified and &#x60;page_size&#x60; is not, the argument defaults to 100.
     */
    listMonitors(groupStates?: string, name?: string, tags?: string, monitorTags?: string, withDowntimes?: boolean, idOffset?: number, page?: number, pageSize?: number, options?: Configuration): Observable<Array<Monitor>>;
    /**
     * Edit the specified monitor.
     * Edit a monitor
     * @param monitorId The ID of the monitor.
     * @param body Edit a monitor request body.
     */
    updateMonitor(monitorId: number, body: MonitorUpdateRequest, options?: Configuration): Observable<Monitor>;
    /**
     * Validate the monitor provided in the request.
     * Validate a monitor
     * @param body Monitor request object
     */
    validateMonitor(body: Monitor, options?: Configuration): Observable<any>;
}
import { NotebooksApiRequestFactory, NotebooksApiResponseProcessor } from "../apis/NotebooksApi";
export declare class ObservableNotebooksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: NotebooksApiRequestFactory, responseProcessor?: NotebooksApiResponseProcessor);
    /**
     * Create a notebook using the specified options.
     * Create a notebook
     * @param body The JSON description of the notebook you want to create.
     */
    createNotebook(body: NotebookCreateRequest, options?: Configuration): Observable<NotebookResponse>;
    /**
     * Delete a notebook using the specified ID.
     * Delete a notebook
     * @param notebookId Unique ID, assigned when you create the notebook.
     */
    deleteNotebook(notebookId: number, options?: Configuration): Observable<void>;
    /**
     * Get a notebook using the specified notebook ID.
     * Get a notebook
     * @param notebookId Unique ID, assigned when you create the notebook.
     */
    getNotebook(notebookId: number, options?: Configuration): Observable<NotebookResponse>;
    /**
     * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.
     * Get all notebooks
     * @param authorHandle Return notebooks created by the given &#x60;author_handle&#x60;.
     * @param excludeAuthorHandle Return notebooks not created by the given &#x60;author_handle&#x60;.
     * @param start The index of the first notebook you want returned.
     * @param count The number of notebooks to be returned.
     * @param sortField Sort by field &#x60;modified&#x60; or &#x60;name&#x60;.
     * @param sortDir Sort by direction &#x60;asc&#x60; or &#x60;desc&#x60;.
     * @param query Return only notebooks with &#x60;query&#x60; string in notebook name or author handle.
     * @param includeCells Value of &#x60;false&#x60; excludes the &#x60;cells&#x60; and global &#x60;time&#x60; for each notebook.
     */
    listNotebooks(authorHandle?: string, excludeAuthorHandle?: string, start?: number, count?: number, sortField?: string, sortDir?: string, query?: string, includeCells?: boolean, options?: Configuration): Observable<NotebooksResponse>;
    /**
     * Update a notebook using the specified ID.
     * Update a notebook
     * @param notebookId Unique ID, assigned when you create the notebook.
     * @param body Update notebook request body.
     */
    updateNotebook(notebookId: number, body: NotebookUpdateRequest, options?: Configuration): Observable<NotebookResponse>;
}
import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor } from "../apis/OrganizationsApi";
export declare class ObservableOrganizationsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor);
    /**
     * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `pi_key.key`, and `application_key.hash` provided in the response.
     * Create a child organization
     * @param body Organization object that needs to be created
     */
    createChildOrg(body: OrganizationCreateBody, options?: Configuration): Observable<OrganizationCreateResponse>;
    /**
     * Get organization information.
     * Get organization information
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
     */
    getOrg(publicId: string, options?: Configuration): Observable<OrganizationResponse>;
    /**
     * List your managed organizations.
     * List your managed organizations
     */
    listOrgs(options?: Configuration): Observable<OrganizationListResponse>;
    /**
     * Update your organization.
     * Update your organization
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
     * @param body
     */
    updateOrg(publicId: string, body: Organization, options?: Configuration): Observable<OrganizationResponse>;
    /**
     * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
     * Upload IdP metadata
     * @param publicId The &#x60;public_id&#x60; of the organization you are operating with
     * @param idpFile The path to the XML metadata file you wish to upload.
     */
    uploadIdPForOrg(publicId: string, idpFile: HttpFile, options?: Configuration): Observable<IdpResponse>;
}
import { PagerDutyIntegrationApiRequestFactory, PagerDutyIntegrationApiResponseProcessor } from "../apis/PagerDutyIntegrationApi";
export declare class ObservablePagerDutyIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: PagerDutyIntegrationApiRequestFactory, responseProcessor?: PagerDutyIntegrationApiResponseProcessor);
    /**
     * Create a new service object in the PagerDuty integration.
     * Create a new service object
     * @param body Create a new service object request body.
     */
    createPagerDutyIntegrationService(body: PagerDutyService, options?: Configuration): Observable<PagerDutyServiceName>;
    /**
     * Delete a single service object in the Datadog-PagerDuty integration.
     * Delete a single service object
     * @param serviceName The service name
     */
    deletePagerDutyIntegrationService(serviceName: string, options?: Configuration): Observable<void>;
    /**
     * Get service name in the Datadog-PagerDuty integration.
     * Get a single service object
     * @param serviceName The service name.
     */
    getPagerDutyIntegrationService(serviceName: string, options?: Configuration): Observable<PagerDutyServiceName>;
    /**
     * Update a single service object in the Datadog-PagerDuty integration.
     * Update a single service object
     * @param serviceName The service name
     * @param body Update an existing service object request body.
     */
    updatePagerDutyIntegrationService(serviceName: string, body: PagerDutyServiceKey, options?: Configuration): Observable<void>;
}
import { ServiceChecksApiRequestFactory, ServiceChecksApiResponseProcessor } from "../apis/ServiceChecksApi";
export declare class ObservableServiceChecksApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceChecksApiRequestFactory, responseProcessor?: ServiceChecksApiResponseProcessor);
    /**
     * Submit a list of Service Checks.  **Note**: A valid API key is required.
     * Submit a Service Check
     * @param body Service Check request body.
     */
    submitServiceCheck(body: Array<ServiceCheck>, options?: Configuration): Observable<IntakePayloadAccepted>;
}
import { ServiceLevelObjectiveCorrectionsApiRequestFactory, ServiceLevelObjectiveCorrectionsApiResponseProcessor } from "../apis/ServiceLevelObjectiveCorrectionsApi";
export declare class ObservableServiceLevelObjectiveCorrectionsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceLevelObjectiveCorrectionsApiRequestFactory, responseProcessor?: ServiceLevelObjectiveCorrectionsApiResponseProcessor);
    /**
     * Create an SLO Correction
     * Create an SLO correction
     * @param body Create an SLO Correction
     */
    createSLOCorrection(body: SLOCorrectionCreateRequest, options?: Configuration): Observable<SLOCorrectionResponse>;
    /**
     * Permanently delete the specified SLO correction object
     * Delete an SLO correction
     * @param sloCorrectionId The ID of the SLO correction object
     */
    deleteSLOCorrection(sloCorrectionId: string, options?: Configuration): Observable<void>;
    /**
     * Get an SLO correction
     * Get an SLO correction for an SLO
     * @param sloCorrectionId The ID of the SLO correction object
     */
    getSLOCorrection(sloCorrectionId: string, options?: Configuration): Observable<SLOCorrectionResponse>;
    /**
     * Get all Service Level Objective corrections
     * Get all SLO corrections
     */
    listSLOCorrection(options?: Configuration): Observable<SLOCorrectionListResponse>;
    /**
     * Update the specified SLO correction object object
     * Update an SLO correction
     * @param sloCorrectionId The ID of the SLO correction object
     * @param body The edited SLO correction object.
     */
    updateSLOCorrection(sloCorrectionId: string, body: SLOCorrectionUpdateRequest, options?: Configuration): Observable<SLOCorrectionResponse>;
}
import { ServiceLevelObjectivesApiRequestFactory, ServiceLevelObjectivesApiResponseProcessor } from "../apis/ServiceLevelObjectivesApi";
export declare class ObservableServiceLevelObjectivesApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: ServiceLevelObjectivesApiRequestFactory, responseProcessor?: ServiceLevelObjectivesApiResponseProcessor);
    /**
     * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
     * Check if SLOs can be safely deleted
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     */
    checkCanDeleteSLO(ids: string, options?: Configuration): Observable<CheckCanDeleteSLOResponse>;
    /**
     * Create a service level objective object.
     * Create an SLO object
     * @param body Service level objective request object.
     */
    createSLO(body: ServiceLevelObjectiveRequest, options?: Configuration): Observable<SLOListResponse>;
    /**
     * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
     * Delete an SLO
     * @param sloId The ID of the service level objective.
     * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     */
    deleteSLO(sloId: string, force?: string, options?: Configuration): Observable<SLODeleteResponse>;
    /**
     * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
     * Bulk Delete SLO Timeframes
     * @param body Delete multiple service level objective objects request body.
     */
    deleteSLOTimeframeInBulk(body: {
        [key: string]: Array<SLOTimeframe>;
    }, options?: Configuration): Observable<SLOBulkDeleteResponse>;
    /**
     * Get a service level objective object.
     * Get an SLO's details
     * @param sloId The ID of the service level objective object.
     * @param withConfiguredAlertIds Get the IDs of SLO monitors that reference this SLO.
     */
    getSLO(sloId: string, withConfiguredAlertIds?: boolean, options?: Configuration): Observable<SLOResponse>;
    /**
     * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
     * Get an SLO's history
     * @param sloId The ID of the service level objective object.
     * @param fromTs The &#x60;from&#x60; timestamp for the query window in epoch seconds.
     * @param toTs The &#x60;to&#x60; timestamp for the query window in epoch seconds.
     * @param target The SLO target. If &#x60;target&#x60; is passed in, the response will include the error budget that remains.
     */
    getSLOHistory(sloId: string, fromTs: number, toTs: number, target?: number, options?: Configuration): Observable<SLOHistoryResponse>;
    /**
     * Get a list of service level objective objects for your organization.
     * Get all SLOs
     * @param ids A comma separated list of the IDs of the service level objectives objects.
     * @param query The query string to filter results based on SLO names.
     * @param tagsQuery The query string to filter results based on a single SLO tag.
     * @param metricsQuery The query string to filter results based on SLO numerator and denominator.
     */
    listSLOs(ids?: string, query?: string, tagsQuery?: string, metricsQuery?: string, options?: Configuration): Observable<SLOListResponse>;
    /**
     * Update the specified service level objective object.
     * Update an SLO
     * @param sloId The ID of the service level objective object.
     * @param body The edited service level objective request object.
     */
    updateSLO(sloId: string, body: ServiceLevelObjective, options?: Configuration): Observable<SLOListResponse>;
}
import { SlackIntegrationApiRequestFactory, SlackIntegrationApiResponseProcessor } from "../apis/SlackIntegrationApi";
export declare class ObservableSlackIntegrationApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SlackIntegrationApiRequestFactory, responseProcessor?: SlackIntegrationApiResponseProcessor);
    /**
     * Add a channel to your Datadog-Slack integration.
     * Create a Slack integration channel
     * @param accountName Your Slack account name.
     * @param body Payload describing Slack channel to be created
     */
    createSlackIntegrationChannel(accountName: string, body: SlackIntegrationChannel, options?: Configuration): Observable<SlackIntegrationChannel>;
    /**
     * Get a channel configured for your Datadog-Slack integration.
     * Get a Slack integration channel
     * @param accountName Your Slack account name.
     * @param channelName The name of the Slack channel being operated on.
     */
    getSlackIntegrationChannel(accountName: string, channelName: string, options?: Configuration): Observable<SlackIntegrationChannel>;
    /**
     * Get a list of all channels configured for your Datadog-Slack integration.
     * Get all channels in a Slack integration
     * @param accountName Your Slack account name.
     */
    getSlackIntegrationChannels(accountName: string, options?: Configuration): Observable<Array<SlackIntegrationChannel>>;
    /**
     * Remove a channel from your Datadog-Slack integration.
     * Remove a Slack integration channel
     * @param accountName Your Slack account name.
     * @param channelName The name of the Slack channel being operated on.
     */
    removeSlackIntegrationChannel(accountName: string, channelName: string, options?: Configuration): Observable<void>;
    /**
     * Update a channel used in your Datadog-Slack integration.
     * Update a Slack integration channel
     * @param accountName Your Slack account name.
     * @param channelName The name of the Slack channel being operated on.
     * @param body Payload describing fields and values to be updated.
     */
    updateSlackIntegrationChannel(accountName: string, channelName: string, body: SlackIntegrationChannel, options?: Configuration): Observable<SlackIntegrationChannel>;
}
import { SnapshotsApiRequestFactory, SnapshotsApiResponseProcessor } from "../apis/SnapshotsApi";
export declare class ObservableSnapshotsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SnapshotsApiRequestFactory, responseProcessor?: SnapshotsApiResponseProcessor);
    /**
     * Take graph snapshots. **Note**: When a snapshot is created, there is some delay before it is available.
     * Take graph snapshots
     * @param start The POSIX timestamp of the start of the query.
     * @param end The POSIX timestamp of the end of the query.
     * @param metricQuery The metric query.
     * @param eventQuery A query that adds event bands to the graph.
     * @param graphDef A JSON document defining the graph. &#x60;graph_def&#x60; can be used instead of &#x60;metric_query&#x60;. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded.
     * @param title A title for the graph. If no title is specified, the graph does not have a title.
     */
    getGraphSnapshot(start: number, end: number, metricQuery?: string, eventQuery?: string, graphDef?: string, title?: string, options?: Configuration): Observable<GraphSnapshot>;
}
import { SyntheticsApiRequestFactory, SyntheticsApiResponseProcessor } from "../apis/SyntheticsApi";
export declare class ObservableSyntheticsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: SyntheticsApiRequestFactory, responseProcessor?: SyntheticsApiResponseProcessor);
    /**
     * Create a Synthetics global variable.
     * Create a global variable
     * @param body Details of the global variable to create.
     */
    createGlobalVariable(body: SyntheticsGlobalVariable, options?: Configuration): Observable<SyntheticsGlobalVariable>;
    /**
     * Create a new Synthetics private location.
     * Create a private location
     * @param body Details of the private location to create.
     */
    createPrivateLocation(body: SyntheticsPrivateLocation, options?: Configuration): Observable<SyntheticsPrivateLocationCreationResponse>;
    /**
     * Create a Synthetic API test.
     * Create an API test
     * @param body Details of the test to create.
     */
    createSyntheticsAPITest(body: SyntheticsAPITest, options?: Configuration): Observable<SyntheticsAPITest>;
    /**
     * Create a Synthetic browser test.
     * Create a browser test
     * @param body Details of the test to create.
     */
    createSyntheticsBrowserTest(body: SyntheticsBrowserTest, options?: Configuration): Observable<SyntheticsBrowserTest>;
    /**
     * Delete a Synthetics global variable.
     * Delete a global variable
     * @param variableId The ID of the global variable.
     */
    deleteGlobalVariable(variableId: string, options?: Configuration): Observable<void>;
    /**
     * Delete a Synthetics private location.
     * Delete a private location
     * @param locationId The ID of the private location.
     */
    deletePrivateLocation(locationId: string, options?: Configuration): Observable<void>;
    /**
     * Delete multiple Synthetic tests by ID.
     * Delete tests
     * @param body Public ID list of the Synthetic tests to be deleted.
     */
    deleteTests(body: SyntheticsDeleteTestsPayload, options?: Configuration): Observable<SyntheticsDeleteTestsResponse>;
    /**
     * Edit a Synthetics global variable.
     * Edit a global variable
     * @param variableId The ID of the global variable.
     * @param body Details of the global variable to update.
     */
    editGlobalVariable(variableId: string, body: SyntheticsGlobalVariable, options?: Configuration): Observable<SyntheticsGlobalVariable>;
    /**
     * Get the detailed configuration associated with a Synthetic API test.
     * Get an API test
     * @param publicId The public ID of the test to get details from.
     */
    getAPITest(publicId: string, options?: Configuration): Observable<SyntheticsAPITest>;
    /**
     * Get the last 50 test results summaries for a given Synthetics API test.
     * Get an API test's latest results summaries
     * @param publicId The public ID of the test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    getAPITestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, options?: Configuration): Observable<SyntheticsGetAPITestLatestResultsResponse>;
    /**
     * Get a specific full result from a given (API) Synthetic test.
     * Get an API test result
     * @param publicId The public ID of the API test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    getAPITestResult(publicId: string, resultId: string, options?: Configuration): Observable<SyntheticsAPITestResultFull>;
    /**
     * Get the detailed configuration (including steps) associated with a Synthetic browser test.
     * Get a browser test
     * @param publicId The public ID of the test to get details from.
     */
    getBrowserTest(publicId: string, options?: Configuration): Observable<SyntheticsBrowserTest>;
    /**
     * Get the last 50 test results summaries for a given Synthetics Browser test.
     * Get a browser test's latest results summaries
     * @param publicId The public ID of the browser test for which to search results for.
     * @param fromTs Timestamp from which to start querying results.
     * @param toTs Timestamp up to which to query results.
     * @param probeDc Locations for which to query results.
     */
    getBrowserTestLatestResults(publicId: string, fromTs?: number, toTs?: number, probeDc?: Array<string>, options?: Configuration): Observable<SyntheticsGetBrowserTestLatestResultsResponse>;
    /**
     * Get a specific full result from a given (browser) Synthetic test.
     * Get a browser test result
     * @param publicId The public ID of the browser test to which the target result belongs.
     * @param resultId The ID of the result to get.
     */
    getBrowserTestResult(publicId: string, resultId: string, options?: Configuration): Observable<SyntheticsBrowserTestResultFull>;
    /**
     * Get the detailed configuration of a global variable.
     * Get a global variable
     * @param variableId The ID of the global variable.
     */
    getGlobalVariable(variableId: string, options?: Configuration): Observable<SyntheticsGlobalVariable>;
    /**
     * Get a Synthetics private location.
     * Get a private location
     * @param locationId The ID of the private location.
     */
    getPrivateLocation(locationId: string, options?: Configuration): Observable<SyntheticsPrivateLocation>;
    /**
     * Get the detailed configuration associated with a Synthetics test.
     * Get a test configuration
     * @param publicId The public ID of the test to get details from.
     */
    getTest(publicId: string, options?: Configuration): Observable<SyntheticsTestDetails>;
    /**
     * Get the list of public and private locations available for Synthetic tests. No arguments required.
     * Get all locations (public and private)
     */
    listLocations(options?: Configuration): Observable<SyntheticsLocations>;
    /**
     * Get the list of all Synthetic tests.
     * Get the list of all tests
     */
    listTests(options?: Configuration): Observable<SyntheticsListTestsResponse>;
    /**
     * Trigger a set of Synthetics tests for continuous integration.
     * Trigger tests from CI/CD pipelines
     * @param body Details of the test to trigger.
     */
    triggerCITests(body: SyntheticsCITestBody, options?: Configuration): Observable<SyntheticsTriggerCITestsResponse>;
    /**
     * Edit the configuration of a Synthetic API test.
     * Edit an API test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    updateAPITest(publicId: string, body: SyntheticsAPITest, options?: Configuration): Observable<SyntheticsAPITest>;
    /**
     * Edit the configuration of a Synthetic browser test.
     * Edit a browser test
     * @param publicId The public ID of the test to get details from.
     * @param body New test details to be saved.
     */
    updateBrowserTest(publicId: string, body: SyntheticsBrowserTest, options?: Configuration): Observable<SyntheticsBrowserTest>;
    /**
     * Edit a Synthetics private location.
     * Edit a private location
     * @param locationId The ID of the private location.
     * @param body Details of the private location to be updated.
     */
    updatePrivateLocation(locationId: string, body: SyntheticsPrivateLocation, options?: Configuration): Observable<SyntheticsPrivateLocation>;
    /**
     * Pause or start a Synthetics test by changing the status.
     * Pause or start a test
     * @param publicId The public ID of the Synthetic test to update.
     * @param body Status to set the given Synthetic test to.
     */
    updateTestPauseStatus(publicId: string, body: SyntheticsUpdateTestPauseStatusPayload, options?: Configuration): Observable<boolean>;
}
import { TagsApiRequestFactory, TagsApiResponseProcessor } from "../apis/TagsApi";
export declare class ObservableTagsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor);
    /**
     * This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.
     * Add tags to a host
     * @param hostName This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
     * @param body Update host tags request body.
     * @param source The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     */
    createHostTags(hostName: string, body: HostTags, source?: string, options?: Configuration): Observable<HostTags>;
    /**
     * This endpoint allows you to remove all user-assigned tags for a single host.
     * Remove host tags
     * @param hostName This endpoint allows you to remove all user-assigned tags for a single host.
     * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     */
    deleteHostTags(hostName: string, source?: string, options?: Configuration): Observable<void>;
    /**
     * Return the list of tags that apply to a given host.
     * Get host tags
     * @param hostName When specified, filters list of tags to those tags with the specified source.
     * @param source Source to filter.
     */
    getHostTags(hostName: string, source?: string, options?: Configuration): Observable<HostTags>;
    /**
     * Return a mapping of tags to hosts for your whole infrastructure.
     * Get Tags
     * @param source When specified, filters host list to those tags with the specified source.
     */
    listHostTags(source?: string, options?: Configuration): Observable<TagToHosts>;
    /**
     * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
     * Update host tags
     * @param hostName This endpoint allows you to update/replace all in an integration source with those supplied in the request.
     * @param body Add tags to host
     * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value)
     */
    updateHostTags(hostName: string, body: HostTags, source?: string, options?: Configuration): Observable<HostTags>;
}
import { UsageMeteringApiRequestFactory, UsageMeteringApiResponseProcessor } from "../apis/UsageMeteringApi";
export declare class ObservableUsageMeteringApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsageMeteringApiRequestFactory, responseProcessor?: UsageMeteringApiResponseProcessor);
    /**
     * Get daily custom reports.
     * Get the list of available daily custom reports
     * @param pageSize The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;.
     * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     */
    getDailyCustomReports(pageSize?: number, pageNumber?: number, sortDir?: UsageSortDirection, sort?: UsageSort, options?: Configuration): Observable<UsageCustomReportsResponse>;
    /**
     * Get hourly usage for incident management.
     * Get hourly usage for incident management
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getIncidentManagement(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageIncidentManagementResponse>;
    /**
     * Get hourly usage for ingested spans.
     * Get hourly usage for ingested spans
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getIngestedSpans(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageIngestedSpansResponse>;
    /**
     * Get monthly custom reports.
     * Get the list of available monthly custom reports
     * @param pageSize The number of files to return in the response &#x60;[default&#x3D;60].&#x60;
     * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     */
    getMonthlyCustomReports(pageSize?: number, pageNumber?: number, sortDir?: UsageSortDirection, sort?: UsageSort, options?: Configuration): Observable<UsageCustomReportsResponse>;
    /**
     * Get specified daily custom reports.
     * Get specified daily custom reports
     * @param reportId The specified ID to search results for.
     */
    getSpecifiedDailyCustomReports(reportId: string, options?: Configuration): Observable<UsageSpecifiedCustomReportsResponse>;
    /**
     * Get specified monthly custom reports.
     * Get specified monthly custom reports
     * @param reportId The specified ID to search results for.
     */
    getSpecifiedMonthlyCustomReports(reportId: string, options?: Configuration): Observable<UsageSpecifiedCustomReportsResponse>;
    /**
     * Get hourly usage for tracing without limits.  **Note** This endpoint has been renamed to `/api/v1/usage/ingested-spans`.
     * Get hourly usage for tracing without limits
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getTracingWithoutLimits(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageTracingWithoutLimitsResponse>;
    /**
     * Get hourly usage for analyzed logs (Security Monitoring).
     * Get hourly usage for analyzed logs
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageAnalyzedLogs(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageAnalyzedLogsResponse>;
    /**
     * Get Usage Attribution.
     * Get Usage Attribution
     * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @param fields Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types.
     * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @param sortDirection The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @param sortName The field to sort by.
     */
    getUsageAttribution(startMonth: Date, fields: UsageAttributionSupportedMetrics, endMonth?: Date, sortDirection?: UsageSortDirection, sortName?: UsageAttributionSort, options?: Configuration): Observable<UsageAttributionResponse>;
    /**
     * Get billable usage across your account.
     * Get billable usage across your account
     * @param month Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
     */
    getUsageBillableSummary(month?: Date, options?: Configuration): Observable<UsageBillableSummaryResponse>;
    /**
     * Get hourly usage for Compliance Monitoring.
     * Get hourly usage for Compliance Monitoring
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageComplianceMonitoring(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageComplianceResponse>;
    /**
     * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
     * Get hourly usage for Fargate
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageFargate(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageFargateResponse>;
    /**
     * Get hourly usage for hosts and containers.
     * Get hourly usage for hosts and containers
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageHosts(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageHostsResponse>;
    /**
     * Get hourly usage for indexed spans.
     * Get hourly usage for indexed spans
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageIndexedSpans(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageIndexedSpansResponse>;
    /**
     * Get hourly usage for IoT.
     * Get hourly usage for IoT
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageInternetOfThings(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageIoTResponse>;
    /**
     * Get hourly usage for lambda.
     * Get hourly usage for Lambda
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageLambda(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageLambdaResponse>;
    /**
     * Get hourly usage for logs.
     * Get hourly usage for Logs
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageLogs(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageLogsResponse>;
    /**
     * Get hourly usage for logs by index.
     * Get hourly usage for Logs by Index
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @param indexName Comma-separated list of log index names.
     */
    getUsageLogsByIndex(startHr: Date, endHr?: Date, indexName?: Array<string>, options?: Configuration): Observable<UsageLogsByIndexResponse>;
    /**
     * Get hourly usage for indexed logs by retention period.
     * Get hourly logs usage by retention
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageLogsByRetention(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageLogsByRetentionResponse>;
    /**
     * Get hourly usage for network flows.
     * Get hourly usage for Network Flows
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageNetworkFlows(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageNetworkFlowsResponse>;
    /**
     * Get hourly usage for network hosts.
     * Get hourly usage for Network Hosts
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageNetworkHosts(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageNetworkHostsResponse>;
    /**
     * Get hourly usage for profiled hosts.
     * Get hourly usage for profiled hosts
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageProfiling(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageProfilingResponse>;
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
     * Get hourly usage for RUM Sessions
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @param type RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;.
     */
    getUsageRumSessions(startHr: Date, endHr?: Date, type?: string, options?: Configuration): Observable<UsageRumSessionsResponse>;
    /**
     * Get hourly usage for SNMP devices.
     * Get hourly usage for SNMP devices
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     */
    getUsageSNMP(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageSNMPResponse>;
    /**
     * Get usage across your multi-org account. You must have the multi-org feature enabled.
     * Get usage across your multi-org account
     * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @param includeOrgDetails Include usage summaries for each sub-org.
     */
    getUsageSummary(startMonth: Date, endMonth?: Date, includeOrgDetails?: boolean, options?: Configuration): Observable<UsageSummaryResponse>;
    /**
     * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageSynthetics(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageSyntheticsResponse>;
    /**
     * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics API Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageSyntheticsAPI(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageSyntheticsAPIResponse>;
    /**
     * Get hourly usage for synthetics browser checks.
     * Get hourly usage for Synthetics Browser Checks
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageSyntheticsBrowser(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageSyntheticsBrowserResponse>;
    /**
     * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
     * Get hourly usage for custom metrics
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageTimeseries(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageTimeseriesResponse>;
    /**
     * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
     * Get all custom metrics by hourly average
     * @param month Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @param day Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @param names Comma-separated list of metric names.
     * @param limit Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
     * @param nextRecordId List following results with a next_record_id provided in the previous query.
     */
    getUsageTopAvgMetrics(month?: Date, day?: Date, names?: Array<string>, limit?: number, nextRecordId?: string, options?: Configuration): Observable<UsageTopAvgMetricsResponse>;
    /**
     * Get hourly usage for trace search.  **Note** This endpoint has been renamed to `/api/v1/usage/indexed-spans`.
     * Get hourly usage for Trace Search
     * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     */
    getUsageTrace(startHr: Date, endHr?: Date, options?: Configuration): Observable<UsageTraceResponse>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export declare class ObservableUsersApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    /**
     * Create a user for your organization.  **Note**: Users can only be created with the admin access role if application keys belong to administrators.
     * Create a user
     * @param body User object that needs to be created.
     */
    createUser(body: User, options?: Configuration): Observable<UserResponse>;
    /**
     * Delete a user from an organization.  **Note**: This endpoint can only be used with application keys belonging to administrators.
     * Disable a user
     * @param userHandle The handle of the user.
     */
    disableUser(userHandle: string, options?: Configuration): Observable<UserDisableResponse>;
    /**
     * Get a user's details.
     * Get user details
     * @param userHandle The ID of the user.
     */
    getUser(userHandle: string, options?: Configuration): Observable<UserResponse>;
    /**
     * List all users for your organization.
     * List all users
     */
    listUsers(options?: Configuration): Observable<UserListResponse>;
    /**
     * Update a user information.  **Note**: It can only be used with application keys belonging to administrators.
     * Update a user
     * @param userHandle The ID of the user.
     * @param body Description of the update.
     */
    updateUser(userHandle: string, body: User, options?: Configuration): Observable<UserResponse>;
}
