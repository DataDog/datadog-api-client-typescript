import { HttpFile } from '../http/http';
import { Configuration } from '../configuration';
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
export interface AWSIntegrationApiCreateAWSAccountRequest {
    /**
     * AWS Request Object
     * @type AWSAccount
     * @memberof AWSIntegrationApicreateAWSAccount
     */
    body: AWSAccount;
}
export interface AWSIntegrationApiCreateAWSTagFilterRequest {
    /**
     * Set an AWS tag filter using an &#x60;aws_account_identifier&#x60;, &#x60;namespace&#x60;, and filtering string. Namespace options are &#x60;application_elb&#x60;, &#x60;elb&#x60;, &#x60;lambda&#x60;, &#x60;network_elb&#x60;, &#x60;rds&#x60;, &#x60;sqs&#x60;, and &#x60;custom&#x60;.
     * @type AWSTagFilterCreateRequest
     * @memberof AWSIntegrationApicreateAWSTagFilter
     */
    body: AWSTagFilterCreateRequest;
}
export interface AWSIntegrationApiCreateNewAWSExternalIDRequest {
    /**
     * Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://github.com/DataDog/documentation/blob/master/integrations/amazon_web_services/#installation).
     * @type AWSAccount
     * @memberof AWSIntegrationApicreateNewAWSExternalID
     */
    body: AWSAccount;
}
export interface AWSIntegrationApiDeleteAWSAccountRequest {
    /**
     * AWS request object
     * @type AWSAccount
     * @memberof AWSIntegrationApideleteAWSAccount
     */
    body: AWSAccount;
}
export interface AWSIntegrationApiDeleteAWSTagFilterRequest {
    /**
     * Delete a tag filtering entry for a given AWS account and &#x60;dd-aws&#x60; namespace.
     * @type AWSTagFilterDeleteRequest
     * @memberof AWSIntegrationApideleteAWSTagFilter
     */
    body: AWSTagFilterDeleteRequest;
}
export interface AWSIntegrationApiListAWSAccountsRequest {
    /**
     * Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @type string
     * @memberof AWSIntegrationApilistAWSAccounts
     */
    accountId?: string;
    /**
     * Only return AWS accounts that matches this role_name.
     * @type string
     * @memberof AWSIntegrationApilistAWSAccounts
     */
    roleName?: string;
    /**
     * Only return AWS accounts that matches this &#x60;access_key_id&#x60;.
     * @type string
     * @memberof AWSIntegrationApilistAWSAccounts
     */
    accessKeyId?: string;
}
export interface AWSIntegrationApiListAWSTagFiltersRequest {
    /**
     * Only return AWS filters that matches this &#x60;account_id&#x60;.
     * @type string
     * @memberof AWSIntegrationApilistAWSTagFilters
     */
    accountId: string;
}
export interface AWSIntegrationApiListAvailableAWSNamespacesRequest {
}
export interface AWSIntegrationApiUpdateAWSAccountRequest {
    /**
     * AWS request object
     * @type AWSAccount
     * @memberof AWSIntegrationApiupdateAWSAccount
     */
    body: AWSAccount;
    /**
     * Only return AWS accounts that matches this &#x60;account_id&#x60;.
     * @type string
     * @memberof AWSIntegrationApiupdateAWSAccount
     */
    accountId?: string;
    /**
     * Only return AWS accounts that match this &#x60;role_name&#x60;. Required if &#x60;account_id&#x60; is specified.
     * @type string
     * @memberof AWSIntegrationApiupdateAWSAccount
     */
    roleName?: string;
    /**
     * Only return AWS accounts that matches this &#x60;access_key_id&#x60;. Required if none of the other two options are specified.
     * @type string
     * @memberof AWSIntegrationApiupdateAWSAccount
     */
    accessKeyId?: string;
}
export declare class ObjectAWSIntegrationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AWSIntegrationApiRequestFactory, responseProcessor?: AWSIntegrationApiResponseProcessor);
    /**
     * Create a Datadog-Amazon Web Services integration. Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization. A unique AWS Account ID for role based authentication.
     * Create an AWS integration
     * @param param the request object
     */
    createAWSAccount(param: AWSIntegrationApiCreateAWSAccountRequest, options?: Configuration): Promise<AWSAccountCreateResponse>;
    /**
     * Set an AWS tag filter.
     * Set an AWS tag filter
     * @param param the request object
     */
    createAWSTagFilter(param: AWSIntegrationApiCreateAWSTagFilterRequest, options?: Configuration): Promise<any>;
    /**
     * Generate a new AWS external ID for a given AWS account ID and role name pair.
     * Generate a new external ID
     * @param param the request object
     */
    createNewAWSExternalID(param: AWSIntegrationApiCreateNewAWSExternalIDRequest, options?: Configuration): Promise<AWSAccountCreateResponse>;
    /**
     * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
     * Delete an AWS integration
     * @param param the request object
     */
    deleteAWSAccount(param: AWSIntegrationApiDeleteAWSAccountRequest, options?: Configuration): Promise<any>;
    /**
     * Delete a tag filtering entry.
     * Delete a tag filtering entry
     * @param param the request object
     */
    deleteAWSTagFilter(param: AWSIntegrationApiDeleteAWSTagFilterRequest, options?: Configuration): Promise<any>;
    /**
     * List all Datadog-AWS integrations available in your Datadog organization.
     * List all AWS integrations
     * @param param the request object
     */
    listAWSAccounts(param: AWSIntegrationApiListAWSAccountsRequest, options?: Configuration): Promise<AWSAccountListResponse>;
    /**
     * Get all AWS tag filters.
     * Get all AWS tag filters
     * @param param the request object
     */
    listAWSTagFilters(param: AWSIntegrationApiListAWSTagFiltersRequest, options?: Configuration): Promise<AWSTagFilterListResponse>;
    /**
     * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
     * List namespace rules
     * @param param the request object
     */
    listAvailableAWSNamespaces(param: AWSIntegrationApiListAvailableAWSNamespacesRequest, options?: Configuration): Promise<Array<string>>;
    /**
     * Update a Datadog-Amazon Web Services integration.
     * Update an AWS integration
     * @param param the request object
     */
    updateAWSAccount(param: AWSIntegrationApiUpdateAWSAccountRequest, options?: Configuration): Promise<any>;
}
import { AWSLogsIntegrationApiRequestFactory, AWSLogsIntegrationApiResponseProcessor } from "../apis/AWSLogsIntegrationApi";
export interface AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest {
    /**
     * Check AWS Log Lambda Async request body.
     * @type AWSAccountAndLambdaRequest
     * @memberof AWSLogsIntegrationApicheckAWSLogsLambdaAsync
     */
    body: AWSAccountAndLambdaRequest;
}
export interface AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest {
    /**
     * Check AWS Logs Async Services request body.
     * @type AWSLogsServicesRequest
     * @memberof AWSLogsIntegrationApicheckAWSLogsServicesAsync
     */
    body: AWSLogsServicesRequest;
}
export interface AWSLogsIntegrationApiCreateAWSLambdaARNRequest {
    /**
     * AWS Log Lambda Async request body.
     * @type AWSAccountAndLambdaRequest
     * @memberof AWSLogsIntegrationApicreateAWSLambdaARN
     */
    body: AWSAccountAndLambdaRequest;
}
export interface AWSLogsIntegrationApiDeleteAWSLambdaARNRequest {
    /**
     * Delete AWS Lambda ARN request body.
     * @type AWSAccountAndLambdaRequest
     * @memberof AWSLogsIntegrationApideleteAWSLambdaARN
     */
    body: AWSAccountAndLambdaRequest;
}
export interface AWSLogsIntegrationApiEnableAWSLogServicesRequest {
    /**
     * Enable AWS Log Services request body.
     * @type AWSLogsServicesRequest
     * @memberof AWSLogsIntegrationApienableAWSLogServices
     */
    body: AWSLogsServicesRequest;
}
export interface AWSLogsIntegrationApiListAWSLogsIntegrationsRequest {
}
export interface AWSLogsIntegrationApiListAWSLogsServicesRequest {
}
export declare class ObjectAWSLogsIntegrationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AWSLogsIntegrationApiRequestFactory, responseProcessor?: AWSLogsIntegrationApiResponseProcessor);
    /**
     * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this endpoint can be polled intermittently instead of blocking.  - Returns a status of 'created' when it's checking if the Lambda exists in the account. - Returns a status of 'waiting' while checking. - Returns a status of 'checked and ok' if the Lambda exists. - Returns a status of 'error' if the Lambda does not exist.
     * Check that an AWS Lambda Function exists
     * @param param the request object
     */
    checkAWSLogsLambdaAsync(param: AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest, options?: Configuration): Promise<AWSLogsAsyncResponse>;
    /**
     * Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.
     * Check permissions for log services
     * @param param the request object
     */
    checkAWSLogsServicesAsync(param: AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest, options?: Configuration): Promise<AWSLogsAsyncResponse>;
    /**
     * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
     * Add AWS Log Lambda ARN
     * @param param the request object
     */
    createAWSLambdaARN(param: AWSLogsIntegrationApiCreateAWSLambdaARNRequest, options?: Configuration): Promise<any>;
    /**
     * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
     * Delete an AWS Logs integration
     * @param param the request object
     */
    deleteAWSLambdaARN(param: AWSLogsIntegrationApiDeleteAWSLambdaARNRequest, options?: Configuration): Promise<any>;
    /**
     * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
     * Enable an AWS Logs integration
     * @param param the request object
     */
    enableAWSLogServices(param: AWSLogsIntegrationApiEnableAWSLogServicesRequest, options?: Configuration): Promise<any>;
    /**
     * List all Datadog-AWS Logs integrations configured in your Datadog account.
     * List all AWS Logs integrations
     * @param param the request object
     */
    listAWSLogsIntegrations(param: AWSLogsIntegrationApiListAWSLogsIntegrationsRequest, options?: Configuration): Promise<Array<AWSLogsListResponse>>;
    /**
     * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
     * Get list of AWS log ready services
     * @param param the request object
     */
    listAWSLogsServices(param: AWSLogsIntegrationApiListAWSLogsServicesRequest, options?: Configuration): Promise<Array<AWSLogsListServicesResponse>>;
}
import { AuthenticationApiRequestFactory, AuthenticationApiResponseProcessor } from "../apis/AuthenticationApi";
export interface AuthenticationApiValidateRequest {
}
export declare class ObjectAuthenticationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AuthenticationApiRequestFactory, responseProcessor?: AuthenticationApiResponseProcessor);
    /**
     * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
     * Validate API key
     * @param param the request object
     */
    validate(param: AuthenticationApiValidateRequest, options?: Configuration): Promise<AuthenticationValidationResponse>;
}
import { AzureIntegrationApiRequestFactory, AzureIntegrationApiResponseProcessor } from "../apis/AzureIntegrationApi";
export interface AzureIntegrationApiCreateAzureIntegrationRequest {
    /**
     * Create a Datadog-Azure integration for your Datadog account request body.
     * @type AzureAccount
     * @memberof AzureIntegrationApicreateAzureIntegration
     */
    body: AzureAccount;
}
export interface AzureIntegrationApiDeleteAzureIntegrationRequest {
    /**
     * Delete a given Datadog-Azure integration request body.
     * @type AzureAccount
     * @memberof AzureIntegrationApideleteAzureIntegration
     */
    body: AzureAccount;
}
export interface AzureIntegrationApiListAzureIntegrationRequest {
}
export interface AzureIntegrationApiUpdateAzureHostFiltersRequest {
    /**
     * Update a Datadog-Azure integration&#39;s host filters request body.
     * @type AzureAccount
     * @memberof AzureIntegrationApiupdateAzureHostFilters
     */
    body: AzureAccount;
}
export interface AzureIntegrationApiUpdateAzureIntegrationRequest {
    /**
     * Update a Datadog-Azure integration request body.
     * @type AzureAccount
     * @memberof AzureIntegrationApiupdateAzureIntegration
     */
    body: AzureAccount;
}
export declare class ObjectAzureIntegrationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: AzureIntegrationApiRequestFactory, responseProcessor?: AzureIntegrationApiResponseProcessor);
    /**
     * Create a Datadog-Azure integration.  Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization.  Using the `PUT` method updates your integration configuration by replacing your current configuration with the new one sent to your Datadog organization.
     * Create an Azure integration
     * @param param the request object
     */
    createAzureIntegration(param: AzureIntegrationApiCreateAzureIntegrationRequest, options?: Configuration): Promise<any>;
    /**
     * Delete a given Datadog-Azure integration from your Datadog account.
     * Delete an Azure integration
     * @param param the request object
     */
    deleteAzureIntegration(param: AzureIntegrationApiDeleteAzureIntegrationRequest, options?: Configuration): Promise<any>;
    /**
     * List all Datadog-Azure integrations configured in your Datadog account.
     * List all Azure integrations
     * @param param the request object
     */
    listAzureIntegration(param: AzureIntegrationApiListAzureIntegrationRequest, options?: Configuration): Promise<Array<AzureAccount>>;
    /**
     * Update the defined list of host filters for a given Datadog-Azure integration.
     * Update Azure integration host filters
     * @param param the request object
     */
    updateAzureHostFilters(param: AzureIntegrationApiUpdateAzureHostFiltersRequest, options?: Configuration): Promise<any>;
    /**
     * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`. Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`, use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
     * Update an Azure integration
     * @param param the request object
     */
    updateAzureIntegration(param: AzureIntegrationApiUpdateAzureIntegrationRequest, options?: Configuration): Promise<any>;
}
import { DashboardListsApiRequestFactory, DashboardListsApiResponseProcessor } from "../apis/DashboardListsApi";
export interface DashboardListsApiCreateDashboardListRequest {
    /**
     * Create a dashboard list request body.
     * @type DashboardList
     * @memberof DashboardListsApicreateDashboardList
     */
    body: DashboardList;
}
export interface DashboardListsApiDeleteDashboardListRequest {
    /**
     * ID of the dashboard list to delete.
     * @type number
     * @memberof DashboardListsApideleteDashboardList
     */
    listId: number;
}
export interface DashboardListsApiGetDashboardListRequest {
    /**
     * ID of the dashboard list to fetch.
     * @type number
     * @memberof DashboardListsApigetDashboardList
     */
    listId: number;
}
export interface DashboardListsApiListDashboardListsRequest {
}
export interface DashboardListsApiUpdateDashboardListRequest {
    /**
     * ID of the dashboard list to update.
     * @type number
     * @memberof DashboardListsApiupdateDashboardList
     */
    listId: number;
    /**
     * Update a dashboard list request body.
     * @type DashboardList
     * @memberof DashboardListsApiupdateDashboardList
     */
    body: DashboardList;
}
export declare class ObjectDashboardListsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DashboardListsApiRequestFactory, responseProcessor?: DashboardListsApiResponseProcessor);
    /**
     * Create an empty dashboard list.
     * Create a dashboard list
     * @param param the request object
     */
    createDashboardList(param: DashboardListsApiCreateDashboardListRequest, options?: Configuration): Promise<DashboardList>;
    /**
     * Delete a dashboard list.
     * Delete a dashboard list
     * @param param the request object
     */
    deleteDashboardList(param: DashboardListsApiDeleteDashboardListRequest, options?: Configuration): Promise<DashboardListDeleteResponse>;
    /**
     * Fetch an existing dashboard list's definition.
     * Get a dashboard list
     * @param param the request object
     */
    getDashboardList(param: DashboardListsApiGetDashboardListRequest, options?: Configuration): Promise<DashboardList>;
    /**
     * Fetch all of your existing dashboard list definitions.
     * Get all dashboard lists
     * @param param the request object
     */
    listDashboardLists(param: DashboardListsApiListDashboardListsRequest, options?: Configuration): Promise<DashboardListListResponse>;
    /**
     * Update the name of a dashboard list.
     * Update a dashboard list
     * @param param the request object
     */
    updateDashboardList(param: DashboardListsApiUpdateDashboardListRequest, options?: Configuration): Promise<DashboardList>;
}
import { DashboardsApiRequestFactory, DashboardsApiResponseProcessor } from "../apis/DashboardsApi";
export interface DashboardsApiCreateDashboardRequest {
    /**
     * Create a dashboard request body.
     * @type Dashboard
     * @memberof DashboardsApicreateDashboard
     */
    body: Dashboard;
}
export interface DashboardsApiDeleteDashboardRequest {
    /**
     * The ID of the dashboard.
     * @type string
     * @memberof DashboardsApideleteDashboard
     */
    dashboardId: string;
}
export interface DashboardsApiGetDashboardRequest {
    /**
     * The ID of the dashboard.
     * @type string
     * @memberof DashboardsApigetDashboard
     */
    dashboardId: string;
}
export interface DashboardsApiListDashboardsRequest {
    /**
     * When &#x60;true&#x60;, this query only returns shared custom created or cloned dashboards.
     * @type boolean
     * @memberof DashboardsApilistDashboards
     */
    filterShared?: boolean;
}
export interface DashboardsApiUpdateDashboardRequest {
    /**
     * The ID of the dashboard.
     * @type string
     * @memberof DashboardsApiupdateDashboard
     */
    dashboardId: string;
    /**
     * Update Dashboard request body.
     * @type Dashboard
     * @memberof DashboardsApiupdateDashboard
     */
    body: Dashboard;
}
export declare class ObjectDashboardsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DashboardsApiRequestFactory, responseProcessor?: DashboardsApiResponseProcessor);
    /**
     * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended. Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
     * Create a new dashboard
     * @param param the request object
     */
    createDashboard(param: DashboardsApiCreateDashboardRequest, options?: Configuration): Promise<Dashboard>;
    /**
     * Delete a dashboard using the specified ID.
     * Delete a dashboard
     * @param param the request object
     */
    deleteDashboard(param: DashboardsApiDeleteDashboardRequest, options?: Configuration): Promise<DashboardDeleteResponse>;
    /**
     * Get a dashboard using the specified ID.
     * Get a dashboard
     * @param param the request object
     */
    getDashboard(param: DashboardsApiGetDashboardRequest, options?: Configuration): Promise<Dashboard>;
    /**
     * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
     * Get all dashboards
     * @param param the request object
     */
    listDashboards(param: DashboardsApiListDashboardsRequest, options?: Configuration): Promise<DashboardSummary>;
    /**
     * Update a dashboard using the specified ID.
     * Update a dashboard
     * @param param the request object
     */
    updateDashboard(param: DashboardsApiUpdateDashboardRequest, options?: Configuration): Promise<Dashboard>;
}
import { DowntimesApiRequestFactory, DowntimesApiResponseProcessor } from "../apis/DowntimesApi";
export interface DowntimesApiCancelDowntimeRequest {
    /**
     * ID of the downtime to cancel.
     * @type number
     * @memberof DowntimesApicancelDowntime
     */
    downtimeId: number;
}
export interface DowntimesApiCancelDowntimesByScopeRequest {
    /**
     * Scope to cancel downtimes for.
     * @type CancelDowntimesByScopeRequest
     * @memberof DowntimesApicancelDowntimesByScope
     */
    body: CancelDowntimesByScopeRequest;
}
export interface DowntimesApiCreateDowntimeRequest {
    /**
     * Schedule a downtime request body.
     * @type Downtime
     * @memberof DowntimesApicreateDowntime
     */
    body: Downtime;
}
export interface DowntimesApiGetDowntimeRequest {
    /**
     * ID of the downtime to fetch.
     * @type number
     * @memberof DowntimesApigetDowntime
     */
    downtimeId: number;
}
export interface DowntimesApiListDowntimesRequest {
    /**
     * Only return downtimes that are active when the request is made.
     * @type boolean
     * @memberof DowntimesApilistDowntimes
     */
    currentOnly?: boolean;
}
export interface DowntimesApiListMonitorDowntimesRequest {
    /**
     * The id of the monitor
     * @type number
     * @memberof DowntimesApilistMonitorDowntimes
     */
    monitorId: number;
}
export interface DowntimesApiUpdateDowntimeRequest {
    /**
     * ID of the downtime to update.
     * @type number
     * @memberof DowntimesApiupdateDowntime
     */
    downtimeId: number;
    /**
     * Update a downtime request body.
     * @type Downtime
     * @memberof DowntimesApiupdateDowntime
     */
    body: Downtime;
}
export declare class ObjectDowntimesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DowntimesApiRequestFactory, responseProcessor?: DowntimesApiResponseProcessor);
    /**
     * Cancel a downtime.
     * Cancel a downtime
     * @param param the request object
     */
    cancelDowntime(param: DowntimesApiCancelDowntimeRequest, options?: Configuration): Promise<void>;
    /**
     * Delete all downtimes that match the scope of `X`.
     * Cancel downtimes by scope
     * @param param the request object
     */
    cancelDowntimesByScope(param: DowntimesApiCancelDowntimesByScopeRequest, options?: Configuration): Promise<CanceledDowntimesIds>;
    /**
     * Schedule a downtime.
     * Schedule a downtime
     * @param param the request object
     */
    createDowntime(param: DowntimesApiCreateDowntimeRequest, options?: Configuration): Promise<Downtime>;
    /**
     * Get downtime detail by `downtime_id`.
     * Get a downtime
     * @param param the request object
     */
    getDowntime(param: DowntimesApiGetDowntimeRequest, options?: Configuration): Promise<Downtime>;
    /**
     * Get all scheduled downtimes.
     * Get all downtimes
     * @param param the request object
     */
    listDowntimes(param: DowntimesApiListDowntimesRequest, options?: Configuration): Promise<Array<Downtime>>;
    /**
     * Get all downtimes for the specified monitor
     * Get all downtimes for a monitor
     * @param param the request object
     */
    listMonitorDowntimes(param: DowntimesApiListMonitorDowntimesRequest, options?: Configuration): Promise<Array<Downtime>>;
    /**
     * Update a single downtime by `downtime_id`.
     * Update a downtime
     * @param param the request object
     */
    updateDowntime(param: DowntimesApiUpdateDowntimeRequest, options?: Configuration): Promise<Downtime>;
}
import { EventsApiRequestFactory, EventsApiResponseProcessor } from "../apis/EventsApi";
export interface EventsApiCreateEventRequest {
    /**
     * Event request object
     * @type EventCreateRequest
     * @memberof EventsApicreateEvent
     */
    body: EventCreateRequest;
}
export interface EventsApiGetEventRequest {
    /**
     * The ID of the event.
     * @type number
     * @memberof EventsApigetEvent
     */
    eventId: number;
}
export interface EventsApiListEventsRequest {
    /**
     * POSIX timestamp.
     * @type number
     * @memberof EventsApilistEvents
     */
    start: number;
    /**
     * POSIX timestamp.
     * @type number
     * @memberof EventsApilistEvents
     */
    end: number;
    /**
     * Priority of your events, either &#x60;low&#x60; or &#x60;normal&#x60;.
     * @type EventPriority
     * @memberof EventsApilistEvents
     */
    priority?: EventPriority;
    /**
     * A comma separated string of sources.
     * @type string
     * @memberof EventsApilistEvents
     */
    sources?: string;
    /**
     * A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope.
     * @type string
     * @memberof EventsApilistEvents
     */
    tags?: string;
    /**
     * Set unaggregated to &#x60;true&#x60; to return all events within the specified [&#x60;start&#x60;,&#x60;end&#x60;] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won&#39;t be available in the output. Aggregated events with &#x60;is_aggregate&#x3D;true&#x60; in the response will still be returned unless exclude_aggregate is set to &#x60;true.&#x60;
     * @type boolean
     * @memberof EventsApilistEvents
     */
    unaggregated?: boolean;
    /**
     * Set &#x60;exclude_aggregate&#x60; to &#x60;true&#x60; to only return unaggregated events where &#x60;is_aggregate&#x3D;false&#x60; in the response. If the &#x60;exclude_aggregate&#x60; parameter is set to &#x60;true&#x60;, then the unaggregated parameter is ignored and will be &#x60;true&#x60; by default.
     * @type boolean
     * @memberof EventsApilistEvents
     */
    excludeAggregate?: boolean;
    /**
     * By default 1000 results are returned per request. Set page to the number of the page to return with &#x60;0&#x60; being the first page. The page parameter can only be used when either unaggregated or exclude_aggregate is set to &#x60;true.&#x60;
     * @type number
     * @memberof EventsApilistEvents
     */
    page?: number;
}
export declare class ObjectEventsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor);
    /**
     * This endpoint allows you to post events to the stream. Tag them, set priority and event aggregate them with other events.
     * Post an event
     * @param param the request object
     */
    createEvent(param: EventsApiCreateEventRequest, options?: Configuration): Promise<EventCreateResponse>;
    /**
     * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
     * Get an event
     * @param param the request object
     */
    getEvent(param: EventsApiGetEventRequest, options?: Configuration): Promise<EventResponse>;
    /**
     * The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
     * Query the event stream
     * @param param the request object
     */
    listEvents(param: EventsApiListEventsRequest, options?: Configuration): Promise<EventListResponse>;
}
import { GCPIntegrationApiRequestFactory, GCPIntegrationApiResponseProcessor } from "../apis/GCPIntegrationApi";
export interface GCPIntegrationApiCreateGCPIntegrationRequest {
    /**
     * Create a Datadog-GCP integration.
     * @type GCPAccount
     * @memberof GCPIntegrationApicreateGCPIntegration
     */
    body: GCPAccount;
}
export interface GCPIntegrationApiDeleteGCPIntegrationRequest {
    /**
     * Delete a given Datadog-GCP integration.
     * @type GCPAccount
     * @memberof GCPIntegrationApideleteGCPIntegration
     */
    body: GCPAccount;
}
export interface GCPIntegrationApiListGCPIntegrationRequest {
}
export interface GCPIntegrationApiUpdateGCPIntegrationRequest {
    /**
     * Update a Datadog-GCP integration.
     * @type GCPAccount
     * @memberof GCPIntegrationApiupdateGCPIntegration
     */
    body: GCPAccount;
}
export declare class ObjectGCPIntegrationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: GCPIntegrationApiRequestFactory, responseProcessor?: GCPIntegrationApiResponseProcessor);
    /**
     * Create a Datadog-GCP integration.
     * Create a GCP integration
     * @param param the request object
     */
    createGCPIntegration(param: GCPIntegrationApiCreateGCPIntegrationRequest, options?: Configuration): Promise<any>;
    /**
     * Delete a given Datadog-GCP integration.
     * Delete a GCP integration
     * @param param the request object
     */
    deleteGCPIntegration(param: GCPIntegrationApiDeleteGCPIntegrationRequest, options?: Configuration): Promise<any>;
    /**
     * List all Datadog-GCP integrations configured in your Datadog account.
     * List all GCP integrations
     * @param param the request object
     */
    listGCPIntegration(param: GCPIntegrationApiListGCPIntegrationRequest, options?: Configuration): Promise<Array<GCPAccount>>;
    /**
     * Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.
     * Update a GCP integration
     * @param param the request object
     */
    updateGCPIntegration(param: GCPIntegrationApiUpdateGCPIntegrationRequest, options?: Configuration): Promise<any>;
}
import { HostsApiRequestFactory, HostsApiResponseProcessor } from "../apis/HostsApi";
export interface HostsApiGetHostTotalsRequest {
    /**
     * Number of seconds from which you want to get total number of active hosts.
     * @type number
     * @memberof HostsApigetHostTotals
     */
    from?: number;
}
export interface HostsApiListHostsRequest {
    /**
     * String to filter search results.
     * @type string
     * @memberof HostsApilistHosts
     */
    filter?: string;
    /**
     * Sort hosts by this field.
     * @type string
     * @memberof HostsApilistHosts
     */
    sortField?: string;
    /**
     * Direction of sort. Options include &#x60;asc&#x60; and &#x60;desc&#x60;.
     * @type string
     * @memberof HostsApilistHosts
     */
    sortDir?: string;
    /**
     * Host result to start search from.
     * @type number
     * @memberof HostsApilistHosts
     */
    start?: number;
    /**
     * Number of hosts to return. Max 1000.
     * @type number
     * @memberof HostsApilistHosts
     */
    count?: number;
    /**
     * Number of seconds since UNIX epoch from which you want to search your hosts.
     * @type number
     * @memberof HostsApilistHosts
     */
    from?: number;
    /**
     * Include information on the muted status of hosts and when the mute expires.
     * @type boolean
     * @memberof HostsApilistHosts
     */
    includeMutedHostsData?: boolean;
    /**
     * Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).
     * @type boolean
     * @memberof HostsApilistHosts
     */
    includeHostsMetadata?: boolean;
}
export interface HostsApiMuteHostRequest {
    /**
     * Name of the host to mute.
     * @type string
     * @memberof HostsApimuteHost
     */
    hostName: string;
    /**
     * Mute a host request body.
     * @type HostMuteSettings
     * @memberof HostsApimuteHost
     */
    body: HostMuteSettings;
}
export interface HostsApiUnmuteHostRequest {
    /**
     * Name of the host to unmute.
     * @type string
     * @memberof HostsApiunmuteHost
     */
    hostName: string;
}
export declare class ObjectHostsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: HostsApiRequestFactory, responseProcessor?: HostsApiResponseProcessor);
    /**
     * This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.
     * Get the total number of active hosts
     * @param param the request object
     */
    getHostTotals(param: HostsApiGetHostTotalsRequest, options?: Configuration): Promise<HostTotals>;
    /**
     * This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.
     * Get all hosts for your organization
     * @param param the request object
     */
    listHosts(param: HostsApiListHostsRequest, options?: Configuration): Promise<HostListResponse>;
    /**
     * Mute a host.
     * Mute a host
     * @param param the request object
     */
    muteHost(param: HostsApiMuteHostRequest, options?: Configuration): Promise<HostMuteResponse>;
    /**
     * Unmutes a host. This endpoint takes no JSON arguments.
     * Unmute a host
     * @param param the request object
     */
    unmuteHost(param: HostsApiUnmuteHostRequest, options?: Configuration): Promise<HostMuteResponse>;
}
import { IPRangesApiRequestFactory, IPRangesApiResponseProcessor } from "../apis/IPRangesApi";
export interface IPRangesApiGetIPRangesRequest {
}
export declare class ObjectIPRangesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: IPRangesApiRequestFactory, responseProcessor?: IPRangesApiResponseProcessor);
    /**
     * Get information about Datadog IP ranges.
     * List IP Ranges
     * @param param the request object
     */
    getIPRanges(param: IPRangesApiGetIPRangesRequest, options?: Configuration): Promise<IPRanges>;
}
import { KeyManagementApiRequestFactory, KeyManagementApiResponseProcessor } from "../apis/KeyManagementApi";
export interface KeyManagementApiCreateAPIKeyRequest {
    /**
     *
     * @type ApiKey
     * @memberof KeyManagementApicreateAPIKey
     */
    body: ApiKey;
}
export interface KeyManagementApiCreateApplicationKeyRequest {
    /**
     *
     * @type ApplicationKey
     * @memberof KeyManagementApicreateApplicationKey
     */
    body: ApplicationKey;
}
export interface KeyManagementApiDeleteAPIKeyRequest {
    /**
     * The specific API key you are working with.
     * @type string
     * @memberof KeyManagementApideleteAPIKey
     */
    key: string;
}
export interface KeyManagementApiDeleteApplicationKeyRequest {
    /**
     * The specific APP key you are working with.
     * @type string
     * @memberof KeyManagementApideleteApplicationKey
     */
    key: string;
}
export interface KeyManagementApiGetAPIKeyRequest {
    /**
     * The specific API key you are working with.
     * @type string
     * @memberof KeyManagementApigetAPIKey
     */
    key: string;
}
export interface KeyManagementApiGetApplicationKeyRequest {
    /**
     * The specific APP key you are working with.
     * @type string
     * @memberof KeyManagementApigetApplicationKey
     */
    key: string;
}
export interface KeyManagementApiListAPIKeysRequest {
}
export interface KeyManagementApiListApplicationKeysRequest {
}
export interface KeyManagementApiUpdateAPIKeyRequest {
    /**
     * The specific API key you are working with.
     * @type string
     * @memberof KeyManagementApiupdateAPIKey
     */
    key: string;
    /**
     *
     * @type ApiKey
     * @memberof KeyManagementApiupdateAPIKey
     */
    body: ApiKey;
}
export interface KeyManagementApiUpdateApplicationKeyRequest {
    /**
     * The specific APP key you are working with.
     * @type string
     * @memberof KeyManagementApiupdateApplicationKey
     */
    key: string;
    /**
     *
     * @type ApplicationKey
     * @memberof KeyManagementApiupdateApplicationKey
     */
    body: ApplicationKey;
}
export declare class ObjectKeyManagementApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: KeyManagementApiRequestFactory, responseProcessor?: KeyManagementApiResponseProcessor);
    /**
     * Creates an API key with a given name.
     * Create an API key
     * @param param the request object
     */
    createAPIKey(param: KeyManagementApiCreateAPIKeyRequest, options?: Configuration): Promise<ApiKeyResponse>;
    /**
     * Create an application key with a given name.
     * Create an application key
     * @param param the request object
     */
    createApplicationKey(param: KeyManagementApiCreateApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Delete a given API key.
     * Delete an API key
     * @param param the request object
     */
    deleteAPIKey(param: KeyManagementApiDeleteAPIKeyRequest, options?: Configuration): Promise<ApiKeyResponse>;
    /**
     * Delete a given application key.
     * Delete an application key
     * @param param the request object
     */
    deleteApplicationKey(param: KeyManagementApiDeleteApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Get a given API key.
     * Get API key
     * @param param the request object
     */
    getAPIKey(param: KeyManagementApiGetAPIKeyRequest, options?: Configuration): Promise<ApiKeyResponse>;
    /**
     * Get a given application key.
     * Get an application key
     * @param param the request object
     */
    getApplicationKey(param: KeyManagementApiGetApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Get all API keys available for your account.
     * Get all API keys
     * @param param the request object
     */
    listAPIKeys(param: KeyManagementApiListAPIKeysRequest, options?: Configuration): Promise<ApiKeyListResponse>;
    /**
     * Get all application keys available for your Datadog account.
     * Get all application keys
     * @param param the request object
     */
    listApplicationKeys(param: KeyManagementApiListApplicationKeysRequest, options?: Configuration): Promise<ApplicationKeyListResponse>;
    /**
     * Edit an API key name.
     * Edit an API key
     * @param param the request object
     */
    updateAPIKey(param: KeyManagementApiUpdateAPIKeyRequest, options?: Configuration): Promise<ApiKeyResponse>;
    /**
     * Edit an application key name.
     * Edit an application key
     * @param param the request object
     */
    updateApplicationKey(param: KeyManagementApiUpdateApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export interface LogsApiListLogsRequest {
    /**
     * Logs filter
     * @type LogsListRequest
     * @memberof LogsApilistLogs
     */
    body: LogsListRequest;
}
export interface LogsApiSubmitLogRequest {
    /**
     * Log to send (JSON format).
     * @type Array&lt;HTTPLogItem&gt;
     * @memberof LogsApisubmitLog
     */
    body: Array<HTTPLogItem>;
    /**
     * HTTP header used to compress the media-type.
     * @type ContentEncoding
     * @memberof LogsApisubmitLog
     */
    contentEncoding?: ContentEncoding;
    /**
     * Log tags can be passed as query parameters with &#x60;text/plain&#x60; content type.
     * @type string
     * @memberof LogsApisubmitLog
     */
    ddtags?: string;
}
export declare class ObjectLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param param the request object
     */
    listLogs(param: LogsApiListLogsRequest, options?: Configuration): Promise<LogsListResponse>;
    /**
     * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 200: OK - 400: Bad request (likely an issue in the payload formatting) - 403: Permission issue (likely using an invalid API Key) - 413: Payload too large (batch is above 5MB uncompressed) - 5xx: Internal error, request should be retried after some time
     * Send logs
     * @param param the request object
     */
    submitLog(param: LogsApiSubmitLogRequest, options?: Configuration): Promise<any>;
}
import { LogsIndexesApiRequestFactory, LogsIndexesApiResponseProcessor } from "../apis/LogsIndexesApi";
export interface LogsIndexesApiCreateLogsIndexRequest {
    /**
     * Object containing the new index.
     * @type LogsIndex
     * @memberof LogsIndexesApicreateLogsIndex
     */
    body: LogsIndex;
}
export interface LogsIndexesApiGetLogsIndexRequest {
    /**
     * Name of the log index.
     * @type string
     * @memberof LogsIndexesApigetLogsIndex
     */
    name: string;
}
export interface LogsIndexesApiGetLogsIndexOrderRequest {
}
export interface LogsIndexesApiListLogIndexesRequest {
}
export interface LogsIndexesApiUpdateLogsIndexRequest {
    /**
     * Name of the log index.
     * @type string
     * @memberof LogsIndexesApiupdateLogsIndex
     */
    name: string;
    /**
     * Object containing the new &#x60;LogsIndexUpdateRequest&#x60;.
     * @type LogsIndexUpdateRequest
     * @memberof LogsIndexesApiupdateLogsIndex
     */
    body: LogsIndexUpdateRequest;
}
export interface LogsIndexesApiUpdateLogsIndexOrderRequest {
    /**
     * Object containing the new ordered list of index names
     * @type LogsIndexesOrder
     * @memberof LogsIndexesApiupdateLogsIndexOrder
     */
    body: LogsIndexesOrder;
}
export declare class ObjectLogsIndexesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsIndexesApiRequestFactory, responseProcessor?: LogsIndexesApiResponseProcessor);
    /**
     * Creates a new index. Returns the Index object passed in the request body when the request is successful.
     * Create an index
     * @param param the request object
     */
    createLogsIndex(param: LogsIndexesApiCreateLogsIndexRequest, options?: Configuration): Promise<LogsIndex>;
    /**
     * Get one log index from your organization. This endpoint takes no JSON arguments.
     * Get an index
     * @param param the request object
     */
    getLogsIndex(param: LogsIndexesApiGetLogsIndexRequest, options?: Configuration): Promise<LogsIndex>;
    /**
     * Get the current order of your log indexes. This endpoint takes no JSON arguments.
     * Get indexes order
     * @param param the request object
     */
    getLogsIndexOrder(param: LogsIndexesApiGetLogsIndexOrderRequest, options?: Configuration): Promise<LogsIndexesOrder>;
    /**
     * The Index object describes the configuration of a log index. This endpoint returns an array of the `LogIndex` objects of your organization.
     * Get all indexes
     * @param param the request object
     */
    listLogIndexes(param: LogsIndexesApiListLogIndexesRequest, options?: Configuration): Promise<LogsIndexListResponse>;
    /**
     * Update an index as identified by its name. Returns the Index object passed in the request body when the request is successful.  Using the `PUT` method updates your index’s configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an index
     * @param param the request object
     */
    updateLogsIndex(param: LogsIndexesApiUpdateLogsIndexRequest, options?: Configuration): Promise<LogsIndex>;
    /**
     * This endpoint updates the index order of your organization. It returns the index order object passed in the request body when the request is successful.
     * Update indexes order
     * @param param the request object
     */
    updateLogsIndexOrder(param: LogsIndexesApiUpdateLogsIndexOrderRequest, options?: Configuration): Promise<LogsIndexesOrder>;
}
import { LogsPipelinesApiRequestFactory, LogsPipelinesApiResponseProcessor } from "../apis/LogsPipelinesApi";
export interface LogsPipelinesApiCreateLogsPipelineRequest {
    /**
     * Definition of the new pipeline.
     * @type LogsPipeline
     * @memberof LogsPipelinesApicreateLogsPipeline
     */
    body: LogsPipeline;
}
export interface LogsPipelinesApiDeleteLogsPipelineRequest {
    /**
     * ID of the pipeline to delete.
     * @type string
     * @memberof LogsPipelinesApideleteLogsPipeline
     */
    pipelineId: string;
}
export interface LogsPipelinesApiGetLogsPipelineRequest {
    /**
     * ID of the pipeline to get.
     * @type string
     * @memberof LogsPipelinesApigetLogsPipeline
     */
    pipelineId: string;
}
export interface LogsPipelinesApiGetLogsPipelineOrderRequest {
}
export interface LogsPipelinesApiListLogsPipelinesRequest {
}
export interface LogsPipelinesApiUpdateLogsPipelineRequest {
    /**
     * ID of the pipeline to delete.
     * @type string
     * @memberof LogsPipelinesApiupdateLogsPipeline
     */
    pipelineId: string;
    /**
     * New definition of the pipeline.
     * @type LogsPipeline
     * @memberof LogsPipelinesApiupdateLogsPipeline
     */
    body: LogsPipeline;
}
export interface LogsPipelinesApiUpdateLogsPipelineOrderRequest {
    /**
     * Object containing the new ordered list of pipeline IDs.
     * @type LogsPipelinesOrder
     * @memberof LogsPipelinesApiupdateLogsPipelineOrder
     */
    body: LogsPipelinesOrder;
}
export declare class ObjectLogsPipelinesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsPipelinesApiRequestFactory, responseProcessor?: LogsPipelinesApiResponseProcessor);
    /**
     * Create a pipeline in your organization.
     * Create a pipeline
     * @param param the request object
     */
    createLogsPipeline(param: LogsPipelinesApiCreateLogsPipelineRequest, options?: Configuration): Promise<LogsPipeline>;
    /**
     * Delete a given pipeline from your organization. This endpoint takes no JSON arguments.
     * Delete a pipeline
     * @param param the request object
     */
    deleteLogsPipeline(param: LogsPipelinesApiDeleteLogsPipelineRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific pipeline from your organization. This endpoint takes no JSON arguments.
     * Get a pipeline
     * @param param the request object
     */
    getLogsPipeline(param: LogsPipelinesApiGetLogsPipelineRequest, options?: Configuration): Promise<LogsPipeline>;
    /**
     * Get the current order of your pipelines. This endpoint takes no JSON arguments.
     * Get pipeline order
     * @param param the request object
     */
    getLogsPipelineOrder(param: LogsPipelinesApiGetLogsPipelineOrderRequest, options?: Configuration): Promise<LogsPipelinesOrder>;
    /**
     * Get all pipelines from your organization. This endpoint takes no JSON arguments.
     * Get all pipelines
     * @param param the request object
     */
    listLogsPipelines(param: LogsPipelinesApiListLogsPipelinesRequest, options?: Configuration): Promise<Array<LogsPipeline>>;
    /**
     * Update a given pipeline configuration to change it’s processors or their order.  **Note**: Using this method updates your pipeline configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update a pipeline
     * @param param the request object
     */
    updateLogsPipeline(param: LogsPipelinesApiUpdateLogsPipelineRequest, options?: Configuration): Promise<LogsPipeline>;
    /**
     * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change the structure and content of the data processed by other pipelines and their processors.  **Note**: Using the `PUT` method updates your pipeline order by replacing your current order with the new one sent to your Datadog organization.
     * Update pipeline order
     * @param param the request object
     */
    updateLogsPipelineOrder(param: LogsPipelinesApiUpdateLogsPipelineOrderRequest, options?: Configuration): Promise<LogsPipelinesOrder>;
}
import { MetricsApiRequestFactory, MetricsApiResponseProcessor } from "../apis/MetricsApi";
export interface MetricsApiGetMetricMetadataRequest {
    /**
     * Name of the metric for which to get metadata.
     * @type string
     * @memberof MetricsApigetMetricMetadata
     */
    metricName: string;
}
export interface MetricsApiListActiveMetricsRequest {
    /**
     * Seconds since the Unix epoch.
     * @type number
     * @memberof MetricsApilistActiveMetrics
     */
    from: number;
    /**
     * Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag.
     * @type string
     * @memberof MetricsApilistActiveMetrics
     */
    host?: string;
    /**
     * Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
     * @type string
     * @memberof MetricsApilistActiveMetrics
     */
    tagFilter?: string;
}
export interface MetricsApiListMetricsRequest {
    /**
     * Query string to search metrics upon. Must be prefixed with &#x60;metrics:&#x60;.
     * @type string
     * @memberof MetricsApilistMetrics
     */
    q: string;
}
export interface MetricsApiQueryMetricsRequest {
    /**
     * Start of the queried time period, seconds since the Unix epoch.
     * @type number
     * @memberof MetricsApiqueryMetrics
     */
    from: number;
    /**
     * End of the queried time period, seconds since the Unix epoch.
     * @type number
     * @memberof MetricsApiqueryMetrics
     */
    to: number;
    /**
     * Query string.
     * @type string
     * @memberof MetricsApiqueryMetrics
     */
    query: string;
}
export interface MetricsApiSubmitMetricsRequest {
    /**
     *
     * @type MetricsPayload
     * @memberof MetricsApisubmitMetrics
     */
    body: MetricsPayload;
}
export interface MetricsApiUpdateMetricMetadataRequest {
    /**
     * Name of the metric for which to edit metadata.
     * @type string
     * @memberof MetricsApiupdateMetricMetadata
     */
    metricName: string;
    /**
     * New metadata.
     * @type MetricMetadata
     * @memberof MetricsApiupdateMetricMetadata
     */
    body: MetricMetadata;
}
export declare class ObjectMetricsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor);
    /**
     * Get metadata about a specific metric.
     * Get metric metadata
     * @param param the request object
     */
    getMetricMetadata(param: MetricsApiGetMetricMetadataRequest, options?: Configuration): Promise<MetricMetadata>;
    /**
     * Get the list of actively reporting metrics from a given time until now.
     * Get active metrics list
     * @param param the request object
     */
    listActiveMetrics(param: MetricsApiListActiveMetricsRequest, options?: Configuration): Promise<MetricsListResponse>;
    /**
     * Search for metrics from the last 24 hours in Datadog.
     * Search metrics
     * @param param the request object
     */
    listMetrics(param: MetricsApiListMetricsRequest, options?: Configuration): Promise<MetricSearchResponse>;
    /**
     * Query timeseries points.
     * Query timeseries points
     * @param param the request object
     */
    queryMetrics(param: MetricsApiQueryMetricsRequest, options?: Configuration): Promise<MetricsQueryResponse>;
    /**
     * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards. The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).  If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:  - 64 bits for the timestamp - 32 bits for the value - 20 bytes for the metric names - 50 bytes for the timeseries - The full payload is approximately 100 bytes. However, with the DogStatsD API, compression is applied, which reduces the payload size.
     * Submit metrics
     * @param param the request object
     */
    submitMetrics(param: MetricsApiSubmitMetricsRequest, options?: Configuration): Promise<IntakePayloadAccepted>;
    /**
     * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
     * Edit metric metadata
     * @param param the request object
     */
    updateMetricMetadata(param: MetricsApiUpdateMetricMetadataRequest, options?: Configuration): Promise<MetricMetadata>;
}
import { MonitorsApiRequestFactory, MonitorsApiResponseProcessor } from "../apis/MonitorsApi";
export interface MonitorsApiCheckCanDeleteMonitorRequest {
    /**
     * The IDs of the monitor to check.
     * @type Array&lt;number&gt;
     * @memberof MonitorsApicheckCanDeleteMonitor
     */
    monitorIds: Array<number>;
}
export interface MonitorsApiCreateMonitorRequest {
    /**
     * Create a monitor request body.
     * @type Monitor
     * @memberof MonitorsApicreateMonitor
     */
    body: Monitor;
}
export interface MonitorsApiDeleteMonitorRequest {
    /**
     * The ID of the monitor.
     * @type number
     * @memberof MonitorsApideleteMonitor
     */
    monitorId: number;
    /**
     * Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     * @type string
     * @memberof MonitorsApideleteMonitor
     */
    force?: string;
}
export interface MonitorsApiGetMonitorRequest {
    /**
     * The ID of the monitor
     * @type number
     * @memberof MonitorsApigetMonitor
     */
    monitorId: number;
    /**
     * When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     * @type string
     * @memberof MonitorsApigetMonitor
     */
    groupStates?: string;
}
export interface MonitorsApiListMonitorsRequest {
    /**
     * When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
     * @type string
     * @memberof MonitorsApilistMonitors
     */
    groupStates?: string;
    /**
     * A string to filter monitors by name.
     * @type string
     * @memberof MonitorsApilistMonitors
     */
    name?: string;
    /**
     * A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, &#x60;host:host0&#x60;.
     * @type string
     * @memberof MonitorsApilistMonitors
     */
    tags?: string;
    /**
     * A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, &#x60;service:my-app&#x60;.
     * @type string
     * @memberof MonitorsApilistMonitors
     */
    monitorTags?: string;
    /**
     * If this argument is set to true, then the returned data includes all current downtimes for each monitor.
     * @type boolean
     * @memberof MonitorsApilistMonitors
     */
    withDowntimes?: boolean;
    /**
     * Monitor ID offset.
     * @type number
     * @memberof MonitorsApilistMonitors
     */
    idOffset?: number;
    /**
     * The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.
     * @type number
     * @memberof MonitorsApilistMonitors
     */
    page?: number;
    /**
     * The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a &#x60;page_size&#x60; limit. However, if page is specified and &#x60;page_size&#x60; is not, the argument defaults to 100.
     * @type number
     * @memberof MonitorsApilistMonitors
     */
    pageSize?: number;
}
export interface MonitorsApiUpdateMonitorRequest {
    /**
     * The ID of the monitor.
     * @type number
     * @memberof MonitorsApiupdateMonitor
     */
    monitorId: number;
    /**
     * Edit a monitor request body.
     * @type MonitorUpdateRequest
     * @memberof MonitorsApiupdateMonitor
     */
    body: MonitorUpdateRequest;
}
export interface MonitorsApiValidateMonitorRequest {
    /**
     * Monitor request object
     * @type Monitor
     * @memberof MonitorsApivalidateMonitor
     */
    body: Monitor;
}
export declare class ObjectMonitorsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MonitorsApiRequestFactory, responseProcessor?: MonitorsApiResponseProcessor);
    /**
     * Check if the given monitors can be deleted.
     * Check if a monitor can be deleted
     * @param param the request object
     */
    checkCanDeleteMonitor(param: MonitorsApiCheckCanDeleteMonitorRequest, options?: Configuration): Promise<CheckCanDeleteMonitorResponse>;
    /**
     * Create a monitor using the specified options.  #### Monitor Types  The type of monitor chosen from:  - anomaly: `query alert` - APM: `query alert` or `trace-analytics alert` - composite: `composite` - custom: `service check` - event: `event alert` - forecast: `query alert` - host: `service check` - integration: `query alert` or `service check` - live process: `process alert` - logs: `log alert` - metric: `metric alert` - network: `service check` - outlier: `query alert` - process: `service check` - rum: `rum alert` - SLO: `slo alert` - watchdog: `event alert` - event-v2: `event-v2 alert`  #### Query Types  **Metric Alert Query**  Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`  - `time_aggr`: avg, sum, max, min, change, or pct_change - `time_window`: `last_#m` (with `#` between 1 and 2880 depending on the monitor type) or `last_#h`(with `#` between 1 and 48 depending on the monitor type), or `last_1d` - `space_aggr`: avg, sum, min, or max - `tags`: one or more tags (comma-separated), or * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert) - `operator`: <, <=, >, >=, ==, or != - `#`: an integer or decimal number used to set the threshold  If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:  - `change_aggr` change, pct_change - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/monitor_types/#define-the-conditions) - `time_window` last\\_#m (between 1 and 2880 depending on the monitor type), last\\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2) - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago  Use this to create an outlier monitor using the following query: `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`  **Service Check Query**  Example: `\"check\".over(tags).last(count).count_by_status()`  - **`check`** name of the check, e.g. `datadog.agent.up` - **`tags`** one or more quoted tags (comma-separated), or \"*\". e.g.: `.over(\"env:prod\", \"role:db\")` - **`count`** must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100. For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be 3.  **Event Alert Query**  Example: `events('sources:nagios status:error,warning priority:normal tags: \"string query\"').rollup(\"count\").last(\"1h\")\"`  - **`event`**, the event query string: - **`string_query`** free text query to match against event title and text. - **`sources`** event sources (comma-separated). - **`status`** event statuses (comma-separated). Valid options: error, warn, and info. - **`priority`** event priorities (comma-separated). Valid options: low, normal, all. - **`host`** event reporting host (comma-separated). - **`tags`** event tags (comma-separated). - **`excluded_tags`** excluded event tags (comma-separated). - **`rollup`** the stats roll-up method. `count` is the only supported method now. - **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.  **NOTE** Only available on US1 and EU.  **Event V2 Alert Query**  Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (5, 10, 15, or 30), #h (1, 2, or 4, 24). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED, US3, and in closed beta on EU and US1.  **Process Alert Query**  Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`  - **`search`** free text search string for querying processes. Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page. - **`tags`** one or more tags (comma-separated) - **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d - **`operator`** <, <=, >, >=, ==, or != - **`#`** an integer or decimal number used to set the threshold  **Logs Alert Query**  Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`index_name`** For multi-index organizations, the log index in which the request is performed. - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48) - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **Composite Query**  Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors  * **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert. * **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor. Email notifications can be sent to specific users by using the same '@username' notation as events. * **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor. When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags. It is only available via the API and isn't visible or editable in the Datadog UI.  **SLO Alert Query**  Example: `error_budget(\"slo_id\").over(\"time_window\") operator #`  - **`slo_id`**: The alphanumeric SLO ID of the SLO you are configuring the alert for. - **`time_window`**: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`. - **`operator`**: `>=` or `>`
     * Create a monitor
     * @param param the request object
     */
    createMonitor(param: MonitorsApiCreateMonitorRequest, options?: Configuration): Promise<Monitor>;
    /**
     * Delete the specified monitor
     * Delete a monitor
     * @param param the request object
     */
    deleteMonitor(param: MonitorsApiDeleteMonitorRequest, options?: Configuration): Promise<DeletedMonitor>;
    /**
     * Get details about the specified monitor from your organization.
     * Get a monitor's details
     * @param param the request object
     */
    getMonitor(param: MonitorsApiGetMonitorRequest, options?: Configuration): Promise<Monitor>;
    /**
     * Get details about the specified monitor from your organization.
     * Get all monitor details
     * @param param the request object
     */
    listMonitors(param: MonitorsApiListMonitorsRequest, options?: Configuration): Promise<Array<Monitor>>;
    /**
     * Edit the specified monitor.
     * Edit a monitor
     * @param param the request object
     */
    updateMonitor(param: MonitorsApiUpdateMonitorRequest, options?: Configuration): Promise<Monitor>;
    /**
     * Validate the monitor provided in the request.
     * Validate a monitor
     * @param param the request object
     */
    validateMonitor(param: MonitorsApiValidateMonitorRequest, options?: Configuration): Promise<any>;
}
import { NotebooksApiRequestFactory, NotebooksApiResponseProcessor } from "../apis/NotebooksApi";
export interface NotebooksApiCreateNotebookRequest {
    /**
     * The JSON description of the notebook you want to create.
     * @type NotebookCreateRequest
     * @memberof NotebooksApicreateNotebook
     */
    body: NotebookCreateRequest;
}
export interface NotebooksApiDeleteNotebookRequest {
    /**
     * Unique ID, assigned when you create the notebook.
     * @type number
     * @memberof NotebooksApideleteNotebook
     */
    notebookId: number;
}
export interface NotebooksApiGetNotebookRequest {
    /**
     * Unique ID, assigned when you create the notebook.
     * @type number
     * @memberof NotebooksApigetNotebook
     */
    notebookId: number;
}
export interface NotebooksApiListNotebooksRequest {
    /**
     * Return notebooks created by the given &#x60;author_handle&#x60;.
     * @type string
     * @memberof NotebooksApilistNotebooks
     */
    authorHandle?: string;
    /**
     * Return notebooks not created by the given &#x60;author_handle&#x60;.
     * @type string
     * @memberof NotebooksApilistNotebooks
     */
    excludeAuthorHandle?: string;
    /**
     * The index of the first notebook you want returned.
     * @type number
     * @memberof NotebooksApilistNotebooks
     */
    start?: number;
    /**
     * The number of notebooks to be returned.
     * @type number
     * @memberof NotebooksApilistNotebooks
     */
    count?: number;
    /**
     * Sort by field &#x60;modified&#x60; or &#x60;name&#x60;.
     * @type string
     * @memberof NotebooksApilistNotebooks
     */
    sortField?: string;
    /**
     * Sort by direction &#x60;asc&#x60; or &#x60;desc&#x60;.
     * @type string
     * @memberof NotebooksApilistNotebooks
     */
    sortDir?: string;
    /**
     * Return only notebooks with &#x60;query&#x60; string in notebook name or author handle.
     * @type string
     * @memberof NotebooksApilistNotebooks
     */
    query?: string;
    /**
     * Value of &#x60;false&#x60; excludes the &#x60;cells&#x60; and global &#x60;time&#x60; for each notebook.
     * @type boolean
     * @memberof NotebooksApilistNotebooks
     */
    includeCells?: boolean;
}
export interface NotebooksApiUpdateNotebookRequest {
    /**
     * Unique ID, assigned when you create the notebook.
     * @type number
     * @memberof NotebooksApiupdateNotebook
     */
    notebookId: number;
    /**
     * Update notebook request body.
     * @type NotebookUpdateRequest
     * @memberof NotebooksApiupdateNotebook
     */
    body: NotebookUpdateRequest;
}
export declare class ObjectNotebooksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: NotebooksApiRequestFactory, responseProcessor?: NotebooksApiResponseProcessor);
    /**
     * Create a notebook using the specified options.
     * Create a notebook
     * @param param the request object
     */
    createNotebook(param: NotebooksApiCreateNotebookRequest, options?: Configuration): Promise<NotebookResponse>;
    /**
     * Delete a notebook using the specified ID.
     * Delete a notebook
     * @param param the request object
     */
    deleteNotebook(param: NotebooksApiDeleteNotebookRequest, options?: Configuration): Promise<void>;
    /**
     * Get a notebook using the specified notebook ID.
     * Get a notebook
     * @param param the request object
     */
    getNotebook(param: NotebooksApiGetNotebookRequest, options?: Configuration): Promise<NotebookResponse>;
    /**
     * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.
     * Get all notebooks
     * @param param the request object
     */
    listNotebooks(param: NotebooksApiListNotebooksRequest, options?: Configuration): Promise<NotebooksResponse>;
    /**
     * Update a notebook using the specified ID.
     * Update a notebook
     * @param param the request object
     */
    updateNotebook(param: NotebooksApiUpdateNotebookRequest, options?: Configuration): Promise<NotebookResponse>;
}
import { OrganizationsApiRequestFactory, OrganizationsApiResponseProcessor } from "../apis/OrganizationsApi";
export interface OrganizationsApiCreateChildOrgRequest {
    /**
     * Organization object that needs to be created
     * @type OrganizationCreateBody
     * @memberof OrganizationsApicreateChildOrg
     */
    body: OrganizationCreateBody;
}
export interface OrganizationsApiGetOrgRequest {
    /**
     * The &#x60;public_id&#x60; of the organization you are operating within.
     * @type string
     * @memberof OrganizationsApigetOrg
     */
    publicId: string;
}
export interface OrganizationsApiListOrgsRequest {
}
export interface OrganizationsApiUpdateOrgRequest {
    /**
     * The &#x60;public_id&#x60; of the organization you are operating within.
     * @type string
     * @memberof OrganizationsApiupdateOrg
     */
    publicId: string;
    /**
     *
     * @type Organization
     * @memberof OrganizationsApiupdateOrg
     */
    body: Organization;
}
export interface OrganizationsApiUploadIdPForOrgRequest {
    /**
     * The &#x60;public_id&#x60; of the organization you are operating with
     * @type string
     * @memberof OrganizationsApiuploadIdPForOrg
     */
    publicId: string;
    /**
     * The path to the XML metadata file you wish to upload.
     * @type HttpFile
     * @memberof OrganizationsApiuploadIdPForOrg
     */
    idpFile: HttpFile;
}
export declare class ObjectOrganizationsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: OrganizationsApiRequestFactory, responseProcessor?: OrganizationsApiResponseProcessor);
    /**
     * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `pi_key.key`, and `application_key.hash` provided in the response.
     * Create a child organization
     * @param param the request object
     */
    createChildOrg(param: OrganizationsApiCreateChildOrgRequest, options?: Configuration): Promise<OrganizationCreateResponse>;
    /**
     * Get organization information.
     * Get organization information
     * @param param the request object
     */
    getOrg(param: OrganizationsApiGetOrgRequest, options?: Configuration): Promise<OrganizationResponse>;
    /**
     * List your managed organizations.
     * List your managed organizations
     * @param param the request object
     */
    listOrgs(param: OrganizationsApiListOrgsRequest, options?: Configuration): Promise<OrganizationListResponse>;
    /**
     * Update your organization.
     * Update your organization
     * @param param the request object
     */
    updateOrg(param: OrganizationsApiUpdateOrgRequest, options?: Configuration): Promise<OrganizationResponse>;
    /**
     * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
     * Upload IdP metadata
     * @param param the request object
     */
    uploadIdPForOrg(param: OrganizationsApiUploadIdPForOrgRequest, options?: Configuration): Promise<IdpResponse>;
}
import { PagerDutyIntegrationApiRequestFactory, PagerDutyIntegrationApiResponseProcessor } from "../apis/PagerDutyIntegrationApi";
export interface PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest {
    /**
     * Create a new service object request body.
     * @type PagerDutyService
     * @memberof PagerDutyIntegrationApicreatePagerDutyIntegrationService
     */
    body: PagerDutyService;
}
export interface PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest {
    /**
     * The service name
     * @type string
     * @memberof PagerDutyIntegrationApideletePagerDutyIntegrationService
     */
    serviceName: string;
}
export interface PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest {
    /**
     * The service name.
     * @type string
     * @memberof PagerDutyIntegrationApigetPagerDutyIntegrationService
     */
    serviceName: string;
}
export interface PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest {
    /**
     * The service name
     * @type string
     * @memberof PagerDutyIntegrationApiupdatePagerDutyIntegrationService
     */
    serviceName: string;
    /**
     * Update an existing service object request body.
     * @type PagerDutyServiceKey
     * @memberof PagerDutyIntegrationApiupdatePagerDutyIntegrationService
     */
    body: PagerDutyServiceKey;
}
export declare class ObjectPagerDutyIntegrationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: PagerDutyIntegrationApiRequestFactory, responseProcessor?: PagerDutyIntegrationApiResponseProcessor);
    /**
     * Create a new service object in the PagerDuty integration.
     * Create a new service object
     * @param param the request object
     */
    createPagerDutyIntegrationService(param: PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest, options?: Configuration): Promise<PagerDutyServiceName>;
    /**
     * Delete a single service object in the Datadog-PagerDuty integration.
     * Delete a single service object
     * @param param the request object
     */
    deletePagerDutyIntegrationService(param: PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest, options?: Configuration): Promise<void>;
    /**
     * Get service name in the Datadog-PagerDuty integration.
     * Get a single service object
     * @param param the request object
     */
    getPagerDutyIntegrationService(param: PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest, options?: Configuration): Promise<PagerDutyServiceName>;
    /**
     * Update a single service object in the Datadog-PagerDuty integration.
     * Update a single service object
     * @param param the request object
     */
    updatePagerDutyIntegrationService(param: PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest, options?: Configuration): Promise<void>;
}
import { ServiceChecksApiRequestFactory, ServiceChecksApiResponseProcessor } from "../apis/ServiceChecksApi";
export interface ServiceChecksApiSubmitServiceCheckRequest {
    /**
     * Service Check request body.
     * @type Array&lt;ServiceCheck&gt;
     * @memberof ServiceChecksApisubmitServiceCheck
     */
    body: Array<ServiceCheck>;
}
export declare class ObjectServiceChecksApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ServiceChecksApiRequestFactory, responseProcessor?: ServiceChecksApiResponseProcessor);
    /**
     * Submit a list of Service Checks.  **Note**: A valid API key is required.
     * Submit a Service Check
     * @param param the request object
     */
    submitServiceCheck(param: ServiceChecksApiSubmitServiceCheckRequest, options?: Configuration): Promise<IntakePayloadAccepted>;
}
import { ServiceLevelObjectiveCorrectionsApiRequestFactory, ServiceLevelObjectiveCorrectionsApiResponseProcessor } from "../apis/ServiceLevelObjectiveCorrectionsApi";
export interface ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest {
    /**
     * Create an SLO Correction
     * @type SLOCorrectionCreateRequest
     * @memberof ServiceLevelObjectiveCorrectionsApicreateSLOCorrection
     */
    body: SLOCorrectionCreateRequest;
}
export interface ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest {
    /**
     * The ID of the SLO correction object
     * @type string
     * @memberof ServiceLevelObjectiveCorrectionsApideleteSLOCorrection
     */
    sloCorrectionId: string;
}
export interface ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest {
    /**
     * The ID of the SLO correction object
     * @type string
     * @memberof ServiceLevelObjectiveCorrectionsApigetSLOCorrection
     */
    sloCorrectionId: string;
}
export interface ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest {
}
export interface ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest {
    /**
     * The ID of the SLO correction object
     * @type string
     * @memberof ServiceLevelObjectiveCorrectionsApiupdateSLOCorrection
     */
    sloCorrectionId: string;
    /**
     * The edited SLO correction object.
     * @type SLOCorrectionUpdateRequest
     * @memberof ServiceLevelObjectiveCorrectionsApiupdateSLOCorrection
     */
    body: SLOCorrectionUpdateRequest;
}
export declare class ObjectServiceLevelObjectiveCorrectionsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ServiceLevelObjectiveCorrectionsApiRequestFactory, responseProcessor?: ServiceLevelObjectiveCorrectionsApiResponseProcessor);
    /**
     * Create an SLO Correction
     * Create an SLO correction
     * @param param the request object
     */
    createSLOCorrection(param: ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest, options?: Configuration): Promise<SLOCorrectionResponse>;
    /**
     * Permanently delete the specified SLO correction object
     * Delete an SLO correction
     * @param param the request object
     */
    deleteSLOCorrection(param: ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest, options?: Configuration): Promise<void>;
    /**
     * Get an SLO correction
     * Get an SLO correction for an SLO
     * @param param the request object
     */
    getSLOCorrection(param: ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest, options?: Configuration): Promise<SLOCorrectionResponse>;
    /**
     * Get all Service Level Objective corrections
     * Get all SLO corrections
     * @param param the request object
     */
    listSLOCorrection(param: ServiceLevelObjectiveCorrectionsApiListSLOCorrectionRequest, options?: Configuration): Promise<SLOCorrectionListResponse>;
    /**
     * Update the specified SLO correction object object
     * Update an SLO correction
     * @param param the request object
     */
    updateSLOCorrection(param: ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest, options?: Configuration): Promise<SLOCorrectionResponse>;
}
import { ServiceLevelObjectivesApiRequestFactory, ServiceLevelObjectivesApiResponseProcessor } from "../apis/ServiceLevelObjectivesApi";
export interface ServiceLevelObjectivesApiCheckCanDeleteSLORequest {
    /**
     * A comma separated list of the IDs of the service level objectives objects.
     * @type string
     * @memberof ServiceLevelObjectivesApicheckCanDeleteSLO
     */
    ids: string;
}
export interface ServiceLevelObjectivesApiCreateSLORequest {
    /**
     * Service level objective request object.
     * @type ServiceLevelObjectiveRequest
     * @memberof ServiceLevelObjectivesApicreateSLO
     */
    body: ServiceLevelObjectiveRequest;
}
export interface ServiceLevelObjectivesApiDeleteSLORequest {
    /**
     * The ID of the service level objective.
     * @type string
     * @memberof ServiceLevelObjectivesApideleteSLO
     */
    sloId: string;
    /**
     * Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
     * @type string
     * @memberof ServiceLevelObjectivesApideleteSLO
     */
    force?: string;
}
export interface ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest {
    /**
     * Delete multiple service level objective objects request body.
     * @type { [key: string]: Array&lt;SLOTimeframe&gt;; }
     * @memberof ServiceLevelObjectivesApideleteSLOTimeframeInBulk
     */
    body: {
        [key: string]: Array<SLOTimeframe>;
    };
}
export interface ServiceLevelObjectivesApiGetSLORequest {
    /**
     * The ID of the service level objective object.
     * @type string
     * @memberof ServiceLevelObjectivesApigetSLO
     */
    sloId: string;
    /**
     * Get the IDs of SLO monitors that reference this SLO.
     * @type boolean
     * @memberof ServiceLevelObjectivesApigetSLO
     */
    withConfiguredAlertIds?: boolean;
}
export interface ServiceLevelObjectivesApiGetSLOHistoryRequest {
    /**
     * The ID of the service level objective object.
     * @type string
     * @memberof ServiceLevelObjectivesApigetSLOHistory
     */
    sloId: string;
    /**
     * The &#x60;from&#x60; timestamp for the query window in epoch seconds.
     * @type number
     * @memberof ServiceLevelObjectivesApigetSLOHistory
     */
    fromTs: number;
    /**
     * The &#x60;to&#x60; timestamp for the query window in epoch seconds.
     * @type number
     * @memberof ServiceLevelObjectivesApigetSLOHistory
     */
    toTs: number;
    /**
     * The SLO target. If &#x60;target&#x60; is passed in, the response will include the error budget that remains.
     * @type number
     * @memberof ServiceLevelObjectivesApigetSLOHistory
     */
    target?: number;
}
export interface ServiceLevelObjectivesApiListSLOsRequest {
    /**
     * A comma separated list of the IDs of the service level objectives objects.
     * @type string
     * @memberof ServiceLevelObjectivesApilistSLOs
     */
    ids?: string;
    /**
     * The query string to filter results based on SLO names.
     * @type string
     * @memberof ServiceLevelObjectivesApilistSLOs
     */
    query?: string;
    /**
     * The query string to filter results based on a single SLO tag.
     * @type string
     * @memberof ServiceLevelObjectivesApilistSLOs
     */
    tagsQuery?: string;
    /**
     * The query string to filter results based on SLO numerator and denominator.
     * @type string
     * @memberof ServiceLevelObjectivesApilistSLOs
     */
    metricsQuery?: string;
}
export interface ServiceLevelObjectivesApiUpdateSLORequest {
    /**
     * The ID of the service level objective object.
     * @type string
     * @memberof ServiceLevelObjectivesApiupdateSLO
     */
    sloId: string;
    /**
     * The edited service level objective request object.
     * @type ServiceLevelObjective
     * @memberof ServiceLevelObjectivesApiupdateSLO
     */
    body: ServiceLevelObjective;
}
export declare class ObjectServiceLevelObjectivesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ServiceLevelObjectivesApiRequestFactory, responseProcessor?: ServiceLevelObjectivesApiResponseProcessor);
    /**
     * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
     * Check if SLOs can be safely deleted
     * @param param the request object
     */
    checkCanDeleteSLO(param: ServiceLevelObjectivesApiCheckCanDeleteSLORequest, options?: Configuration): Promise<CheckCanDeleteSLOResponse>;
    /**
     * Create a service level objective object.
     * Create an SLO object
     * @param param the request object
     */
    createSLO(param: ServiceLevelObjectivesApiCreateSLORequest, options?: Configuration): Promise<SLOListResponse>;
    /**
     * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
     * Delete an SLO
     * @param param the request object
     */
    deleteSLO(param: ServiceLevelObjectivesApiDeleteSLORequest, options?: Configuration): Promise<SLODeleteResponse>;
    /**
     * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
     * Bulk Delete SLO Timeframes
     * @param param the request object
     */
    deleteSLOTimeframeInBulk(param: ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest, options?: Configuration): Promise<SLOBulkDeleteResponse>;
    /**
     * Get a service level objective object.
     * Get an SLO's details
     * @param param the request object
     */
    getSLO(param: ServiceLevelObjectivesApiGetSLORequest, options?: Configuration): Promise<SLOResponse>;
    /**
     * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
     * Get an SLO's history
     * @param param the request object
     */
    getSLOHistory(param: ServiceLevelObjectivesApiGetSLOHistoryRequest, options?: Configuration): Promise<SLOHistoryResponse>;
    /**
     * Get a list of service level objective objects for your organization.
     * Get all SLOs
     * @param param the request object
     */
    listSLOs(param: ServiceLevelObjectivesApiListSLOsRequest, options?: Configuration): Promise<SLOListResponse>;
    /**
     * Update the specified service level objective object.
     * Update an SLO
     * @param param the request object
     */
    updateSLO(param: ServiceLevelObjectivesApiUpdateSLORequest, options?: Configuration): Promise<SLOListResponse>;
}
import { SlackIntegrationApiRequestFactory, SlackIntegrationApiResponseProcessor } from "../apis/SlackIntegrationApi";
export interface SlackIntegrationApiCreateSlackIntegrationChannelRequest {
    /**
     * Your Slack account name.
     * @type string
     * @memberof SlackIntegrationApicreateSlackIntegrationChannel
     */
    accountName: string;
    /**
     * Payload describing Slack channel to be created
     * @type SlackIntegrationChannel
     * @memberof SlackIntegrationApicreateSlackIntegrationChannel
     */
    body: SlackIntegrationChannel;
}
export interface SlackIntegrationApiGetSlackIntegrationChannelRequest {
    /**
     * Your Slack account name.
     * @type string
     * @memberof SlackIntegrationApigetSlackIntegrationChannel
     */
    accountName: string;
    /**
     * The name of the Slack channel being operated on.
     * @type string
     * @memberof SlackIntegrationApigetSlackIntegrationChannel
     */
    channelName: string;
}
export interface SlackIntegrationApiGetSlackIntegrationChannelsRequest {
    /**
     * Your Slack account name.
     * @type string
     * @memberof SlackIntegrationApigetSlackIntegrationChannels
     */
    accountName: string;
}
export interface SlackIntegrationApiRemoveSlackIntegrationChannelRequest {
    /**
     * Your Slack account name.
     * @type string
     * @memberof SlackIntegrationApiremoveSlackIntegrationChannel
     */
    accountName: string;
    /**
     * The name of the Slack channel being operated on.
     * @type string
     * @memberof SlackIntegrationApiremoveSlackIntegrationChannel
     */
    channelName: string;
}
export interface SlackIntegrationApiUpdateSlackIntegrationChannelRequest {
    /**
     * Your Slack account name.
     * @type string
     * @memberof SlackIntegrationApiupdateSlackIntegrationChannel
     */
    accountName: string;
    /**
     * The name of the Slack channel being operated on.
     * @type string
     * @memberof SlackIntegrationApiupdateSlackIntegrationChannel
     */
    channelName: string;
    /**
     * Payload describing fields and values to be updated.
     * @type SlackIntegrationChannel
     * @memberof SlackIntegrationApiupdateSlackIntegrationChannel
     */
    body: SlackIntegrationChannel;
}
export declare class ObjectSlackIntegrationApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SlackIntegrationApiRequestFactory, responseProcessor?: SlackIntegrationApiResponseProcessor);
    /**
     * Add a channel to your Datadog-Slack integration.
     * Create a Slack integration channel
     * @param param the request object
     */
    createSlackIntegrationChannel(param: SlackIntegrationApiCreateSlackIntegrationChannelRequest, options?: Configuration): Promise<SlackIntegrationChannel>;
    /**
     * Get a channel configured for your Datadog-Slack integration.
     * Get a Slack integration channel
     * @param param the request object
     */
    getSlackIntegrationChannel(param: SlackIntegrationApiGetSlackIntegrationChannelRequest, options?: Configuration): Promise<SlackIntegrationChannel>;
    /**
     * Get a list of all channels configured for your Datadog-Slack integration.
     * Get all channels in a Slack integration
     * @param param the request object
     */
    getSlackIntegrationChannels(param: SlackIntegrationApiGetSlackIntegrationChannelsRequest, options?: Configuration): Promise<Array<SlackIntegrationChannel>>;
    /**
     * Remove a channel from your Datadog-Slack integration.
     * Remove a Slack integration channel
     * @param param the request object
     */
    removeSlackIntegrationChannel(param: SlackIntegrationApiRemoveSlackIntegrationChannelRequest, options?: Configuration): Promise<void>;
    /**
     * Update a channel used in your Datadog-Slack integration.
     * Update a Slack integration channel
     * @param param the request object
     */
    updateSlackIntegrationChannel(param: SlackIntegrationApiUpdateSlackIntegrationChannelRequest, options?: Configuration): Promise<SlackIntegrationChannel>;
}
import { SnapshotsApiRequestFactory, SnapshotsApiResponseProcessor } from "../apis/SnapshotsApi";
export interface SnapshotsApiGetGraphSnapshotRequest {
    /**
     * The POSIX timestamp of the start of the query.
     * @type number
     * @memberof SnapshotsApigetGraphSnapshot
     */
    start: number;
    /**
     * The POSIX timestamp of the end of the query.
     * @type number
     * @memberof SnapshotsApigetGraphSnapshot
     */
    end: number;
    /**
     * The metric query.
     * @type string
     * @memberof SnapshotsApigetGraphSnapshot
     */
    metricQuery?: string;
    /**
     * A query that adds event bands to the graph.
     * @type string
     * @memberof SnapshotsApigetGraphSnapshot
     */
    eventQuery?: string;
    /**
     * A JSON document defining the graph. &#x60;graph_def&#x60; can be used instead of &#x60;metric_query&#x60;. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded.
     * @type string
     * @memberof SnapshotsApigetGraphSnapshot
     */
    graphDef?: string;
    /**
     * A title for the graph. If no title is specified, the graph does not have a title.
     * @type string
     * @memberof SnapshotsApigetGraphSnapshot
     */
    title?: string;
}
export declare class ObjectSnapshotsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SnapshotsApiRequestFactory, responseProcessor?: SnapshotsApiResponseProcessor);
    /**
     * Take graph snapshots. **Note**: When a snapshot is created, there is some delay before it is available.
     * Take graph snapshots
     * @param param the request object
     */
    getGraphSnapshot(param: SnapshotsApiGetGraphSnapshotRequest, options?: Configuration): Promise<GraphSnapshot>;
}
import { SyntheticsApiRequestFactory, SyntheticsApiResponseProcessor } from "../apis/SyntheticsApi";
export interface SyntheticsApiCreateGlobalVariableRequest {
    /**
     * Details of the global variable to create.
     * @type SyntheticsGlobalVariable
     * @memberof SyntheticsApicreateGlobalVariable
     */
    body: SyntheticsGlobalVariable;
}
export interface SyntheticsApiCreatePrivateLocationRequest {
    /**
     * Details of the private location to create.
     * @type SyntheticsPrivateLocation
     * @memberof SyntheticsApicreatePrivateLocation
     */
    body: SyntheticsPrivateLocation;
}
export interface SyntheticsApiCreateSyntheticsAPITestRequest {
    /**
     * Details of the test to create.
     * @type SyntheticsAPITest
     * @memberof SyntheticsApicreateSyntheticsAPITest
     */
    body: SyntheticsAPITest;
}
export interface SyntheticsApiCreateSyntheticsBrowserTestRequest {
    /**
     * Details of the test to create.
     * @type SyntheticsBrowserTest
     * @memberof SyntheticsApicreateSyntheticsBrowserTest
     */
    body: SyntheticsBrowserTest;
}
export interface SyntheticsApiDeleteGlobalVariableRequest {
    /**
     * The ID of the global variable.
     * @type string
     * @memberof SyntheticsApideleteGlobalVariable
     */
    variableId: string;
}
export interface SyntheticsApiDeletePrivateLocationRequest {
    /**
     * The ID of the private location.
     * @type string
     * @memberof SyntheticsApideletePrivateLocation
     */
    locationId: string;
}
export interface SyntheticsApiDeleteTestsRequest {
    /**
     * Public ID list of the Synthetic tests to be deleted.
     * @type SyntheticsDeleteTestsPayload
     * @memberof SyntheticsApideleteTests
     */
    body: SyntheticsDeleteTestsPayload;
}
export interface SyntheticsApiEditGlobalVariableRequest {
    /**
     * The ID of the global variable.
     * @type string
     * @memberof SyntheticsApieditGlobalVariable
     */
    variableId: string;
    /**
     * Details of the global variable to update.
     * @type SyntheticsGlobalVariable
     * @memberof SyntheticsApieditGlobalVariable
     */
    body: SyntheticsGlobalVariable;
}
export interface SyntheticsApiGetAPITestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     * @memberof SyntheticsApigetAPITest
     */
    publicId: string;
}
export interface SyntheticsApiGetAPITestLatestResultsRequest {
    /**
     * The public ID of the test for which to search results for.
     * @type string
     * @memberof SyntheticsApigetAPITestLatestResults
     */
    publicId: string;
    /**
     * Timestamp from which to start querying results.
     * @type number
     * @memberof SyntheticsApigetAPITestLatestResults
     */
    fromTs?: number;
    /**
     * Timestamp up to which to query results.
     * @type number
     * @memberof SyntheticsApigetAPITestLatestResults
     */
    toTs?: number;
    /**
     * Locations for which to query results.
     * @type Array&lt;string&gt;
     * @memberof SyntheticsApigetAPITestLatestResults
     */
    probeDc?: Array<string>;
}
export interface SyntheticsApiGetAPITestResultRequest {
    /**
     * The public ID of the API test to which the target result belongs.
     * @type string
     * @memberof SyntheticsApigetAPITestResult
     */
    publicId: string;
    /**
     * The ID of the result to get.
     * @type string
     * @memberof SyntheticsApigetAPITestResult
     */
    resultId: string;
}
export interface SyntheticsApiGetBrowserTestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     * @memberof SyntheticsApigetBrowserTest
     */
    publicId: string;
}
export interface SyntheticsApiGetBrowserTestLatestResultsRequest {
    /**
     * The public ID of the browser test for which to search results for.
     * @type string
     * @memberof SyntheticsApigetBrowserTestLatestResults
     */
    publicId: string;
    /**
     * Timestamp from which to start querying results.
     * @type number
     * @memberof SyntheticsApigetBrowserTestLatestResults
     */
    fromTs?: number;
    /**
     * Timestamp up to which to query results.
     * @type number
     * @memberof SyntheticsApigetBrowserTestLatestResults
     */
    toTs?: number;
    /**
     * Locations for which to query results.
     * @type Array&lt;string&gt;
     * @memberof SyntheticsApigetBrowserTestLatestResults
     */
    probeDc?: Array<string>;
}
export interface SyntheticsApiGetBrowserTestResultRequest {
    /**
     * The public ID of the browser test to which the target result belongs.
     * @type string
     * @memberof SyntheticsApigetBrowserTestResult
     */
    publicId: string;
    /**
     * The ID of the result to get.
     * @type string
     * @memberof SyntheticsApigetBrowserTestResult
     */
    resultId: string;
}
export interface SyntheticsApiGetGlobalVariableRequest {
    /**
     * The ID of the global variable.
     * @type string
     * @memberof SyntheticsApigetGlobalVariable
     */
    variableId: string;
}
export interface SyntheticsApiGetPrivateLocationRequest {
    /**
     * The ID of the private location.
     * @type string
     * @memberof SyntheticsApigetPrivateLocation
     */
    locationId: string;
}
export interface SyntheticsApiGetTestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     * @memberof SyntheticsApigetTest
     */
    publicId: string;
}
export interface SyntheticsApiListLocationsRequest {
}
export interface SyntheticsApiListTestsRequest {
}
export interface SyntheticsApiTriggerCITestsRequest {
    /**
     * Details of the test to trigger.
     * @type SyntheticsCITestBody
     * @memberof SyntheticsApitriggerCITests
     */
    body: SyntheticsCITestBody;
}
export interface SyntheticsApiUpdateAPITestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     * @memberof SyntheticsApiupdateAPITest
     */
    publicId: string;
    /**
     * New test details to be saved.
     * @type SyntheticsAPITest
     * @memberof SyntheticsApiupdateAPITest
     */
    body: SyntheticsAPITest;
}
export interface SyntheticsApiUpdateBrowserTestRequest {
    /**
     * The public ID of the test to get details from.
     * @type string
     * @memberof SyntheticsApiupdateBrowserTest
     */
    publicId: string;
    /**
     * New test details to be saved.
     * @type SyntheticsBrowserTest
     * @memberof SyntheticsApiupdateBrowserTest
     */
    body: SyntheticsBrowserTest;
}
export interface SyntheticsApiUpdatePrivateLocationRequest {
    /**
     * The ID of the private location.
     * @type string
     * @memberof SyntheticsApiupdatePrivateLocation
     */
    locationId: string;
    /**
     * Details of the private location to be updated.
     * @type SyntheticsPrivateLocation
     * @memberof SyntheticsApiupdatePrivateLocation
     */
    body: SyntheticsPrivateLocation;
}
export interface SyntheticsApiUpdateTestPauseStatusRequest {
    /**
     * The public ID of the Synthetic test to update.
     * @type string
     * @memberof SyntheticsApiupdateTestPauseStatus
     */
    publicId: string;
    /**
     * Status to set the given Synthetic test to.
     * @type SyntheticsUpdateTestPauseStatusPayload
     * @memberof SyntheticsApiupdateTestPauseStatus
     */
    body: SyntheticsUpdateTestPauseStatusPayload;
}
export declare class ObjectSyntheticsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SyntheticsApiRequestFactory, responseProcessor?: SyntheticsApiResponseProcessor);
    /**
     * Create a Synthetics global variable.
     * Create a global variable
     * @param param the request object
     */
    createGlobalVariable(param: SyntheticsApiCreateGlobalVariableRequest, options?: Configuration): Promise<SyntheticsGlobalVariable>;
    /**
     * Create a new Synthetics private location.
     * Create a private location
     * @param param the request object
     */
    createPrivateLocation(param: SyntheticsApiCreatePrivateLocationRequest, options?: Configuration): Promise<SyntheticsPrivateLocationCreationResponse>;
    /**
     * Create a Synthetic API test.
     * Create an API test
     * @param param the request object
     */
    createSyntheticsAPITest(param: SyntheticsApiCreateSyntheticsAPITestRequest, options?: Configuration): Promise<SyntheticsAPITest>;
    /**
     * Create a Synthetic browser test.
     * Create a browser test
     * @param param the request object
     */
    createSyntheticsBrowserTest(param: SyntheticsApiCreateSyntheticsBrowserTestRequest, options?: Configuration): Promise<SyntheticsBrowserTest>;
    /**
     * Delete a Synthetics global variable.
     * Delete a global variable
     * @param param the request object
     */
    deleteGlobalVariable(param: SyntheticsApiDeleteGlobalVariableRequest, options?: Configuration): Promise<void>;
    /**
     * Delete a Synthetics private location.
     * Delete a private location
     * @param param the request object
     */
    deletePrivateLocation(param: SyntheticsApiDeletePrivateLocationRequest, options?: Configuration): Promise<void>;
    /**
     * Delete multiple Synthetic tests by ID.
     * Delete tests
     * @param param the request object
     */
    deleteTests(param: SyntheticsApiDeleteTestsRequest, options?: Configuration): Promise<SyntheticsDeleteTestsResponse>;
    /**
     * Edit a Synthetics global variable.
     * Edit a global variable
     * @param param the request object
     */
    editGlobalVariable(param: SyntheticsApiEditGlobalVariableRequest, options?: Configuration): Promise<SyntheticsGlobalVariable>;
    /**
     * Get the detailed configuration associated with a Synthetic API test.
     * Get an API test
     * @param param the request object
     */
    getAPITest(param: SyntheticsApiGetAPITestRequest, options?: Configuration): Promise<SyntheticsAPITest>;
    /**
     * Get the last 50 test results summaries for a given Synthetics API test.
     * Get an API test's latest results summaries
     * @param param the request object
     */
    getAPITestLatestResults(param: SyntheticsApiGetAPITestLatestResultsRequest, options?: Configuration): Promise<SyntheticsGetAPITestLatestResultsResponse>;
    /**
     * Get a specific full result from a given (API) Synthetic test.
     * Get an API test result
     * @param param the request object
     */
    getAPITestResult(param: SyntheticsApiGetAPITestResultRequest, options?: Configuration): Promise<SyntheticsAPITestResultFull>;
    /**
     * Get the detailed configuration (including steps) associated with a Synthetic browser test.
     * Get a browser test
     * @param param the request object
     */
    getBrowserTest(param: SyntheticsApiGetBrowserTestRequest, options?: Configuration): Promise<SyntheticsBrowserTest>;
    /**
     * Get the last 50 test results summaries for a given Synthetics Browser test.
     * Get a browser test's latest results summaries
     * @param param the request object
     */
    getBrowserTestLatestResults(param: SyntheticsApiGetBrowserTestLatestResultsRequest, options?: Configuration): Promise<SyntheticsGetBrowserTestLatestResultsResponse>;
    /**
     * Get a specific full result from a given (browser) Synthetic test.
     * Get a browser test result
     * @param param the request object
     */
    getBrowserTestResult(param: SyntheticsApiGetBrowserTestResultRequest, options?: Configuration): Promise<SyntheticsBrowserTestResultFull>;
    /**
     * Get the detailed configuration of a global variable.
     * Get a global variable
     * @param param the request object
     */
    getGlobalVariable(param: SyntheticsApiGetGlobalVariableRequest, options?: Configuration): Promise<SyntheticsGlobalVariable>;
    /**
     * Get a Synthetics private location.
     * Get a private location
     * @param param the request object
     */
    getPrivateLocation(param: SyntheticsApiGetPrivateLocationRequest, options?: Configuration): Promise<SyntheticsPrivateLocation>;
    /**
     * Get the detailed configuration associated with a Synthetics test.
     * Get a test configuration
     * @param param the request object
     */
    getTest(param: SyntheticsApiGetTestRequest, options?: Configuration): Promise<SyntheticsTestDetails>;
    /**
     * Get the list of public and private locations available for Synthetic tests. No arguments required.
     * Get all locations (public and private)
     * @param param the request object
     */
    listLocations(param: SyntheticsApiListLocationsRequest, options?: Configuration): Promise<SyntheticsLocations>;
    /**
     * Get the list of all Synthetic tests.
     * Get the list of all tests
     * @param param the request object
     */
    listTests(param: SyntheticsApiListTestsRequest, options?: Configuration): Promise<SyntheticsListTestsResponse>;
    /**
     * Trigger a set of Synthetics tests for continuous integration.
     * Trigger tests from CI/CD pipelines
     * @param param the request object
     */
    triggerCITests(param: SyntheticsApiTriggerCITestsRequest, options?: Configuration): Promise<SyntheticsTriggerCITestsResponse>;
    /**
     * Edit the configuration of a Synthetic API test.
     * Edit an API test
     * @param param the request object
     */
    updateAPITest(param: SyntheticsApiUpdateAPITestRequest, options?: Configuration): Promise<SyntheticsAPITest>;
    /**
     * Edit the configuration of a Synthetic browser test.
     * Edit a browser test
     * @param param the request object
     */
    updateBrowserTest(param: SyntheticsApiUpdateBrowserTestRequest, options?: Configuration): Promise<SyntheticsBrowserTest>;
    /**
     * Edit a Synthetics private location.
     * Edit a private location
     * @param param the request object
     */
    updatePrivateLocation(param: SyntheticsApiUpdatePrivateLocationRequest, options?: Configuration): Promise<SyntheticsPrivateLocation>;
    /**
     * Pause or start a Synthetics test by changing the status.
     * Pause or start a test
     * @param param the request object
     */
    updateTestPauseStatus(param: SyntheticsApiUpdateTestPauseStatusRequest, options?: Configuration): Promise<boolean>;
}
import { TagsApiRequestFactory, TagsApiResponseProcessor } from "../apis/TagsApi";
export interface TagsApiCreateHostTagsRequest {
    /**
     * This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
     * @type string
     * @memberof TagsApicreateHostTags
     */
    hostName: string;
    /**
     * Update host tags request body.
     * @type HostTags
     * @memberof TagsApicreateHostTags
     */
    body: HostTags;
    /**
     * The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     * @type string
     * @memberof TagsApicreateHostTags
     */
    source?: string;
}
export interface TagsApiDeleteHostTagsRequest {
    /**
     * This endpoint allows you to remove all user-assigned tags for a single host.
     * @type string
     * @memberof TagsApideleteHostTags
     */
    hostName: string;
    /**
     * The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
     * @type string
     * @memberof TagsApideleteHostTags
     */
    source?: string;
}
export interface TagsApiGetHostTagsRequest {
    /**
     * When specified, filters list of tags to those tags with the specified source.
     * @type string
     * @memberof TagsApigetHostTags
     */
    hostName: string;
    /**
     * Source to filter.
     * @type string
     * @memberof TagsApigetHostTags
     */
    source?: string;
}
export interface TagsApiListHostTagsRequest {
    /**
     * When specified, filters host list to those tags with the specified source.
     * @type string
     * @memberof TagsApilistHostTags
     */
    source?: string;
}
export interface TagsApiUpdateHostTagsRequest {
    /**
     * This endpoint allows you to update/replace all in an integration source with those supplied in the request.
     * @type string
     * @memberof TagsApiupdateHostTags
     */
    hostName: string;
    /**
     * Add tags to host
     * @type HostTags
     * @memberof TagsApiupdateHostTags
     */
    body: HostTags;
    /**
     * The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value)
     * @type string
     * @memberof TagsApiupdateHostTags
     */
    source?: string;
}
export declare class ObjectTagsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TagsApiRequestFactory, responseProcessor?: TagsApiResponseProcessor);
    /**
     * This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.
     * Add tags to a host
     * @param param the request object
     */
    createHostTags(param: TagsApiCreateHostTagsRequest, options?: Configuration): Promise<HostTags>;
    /**
     * This endpoint allows you to remove all user-assigned tags for a single host.
     * Remove host tags
     * @param param the request object
     */
    deleteHostTags(param: TagsApiDeleteHostTagsRequest, options?: Configuration): Promise<void>;
    /**
     * Return the list of tags that apply to a given host.
     * Get host tags
     * @param param the request object
     */
    getHostTags(param: TagsApiGetHostTagsRequest, options?: Configuration): Promise<HostTags>;
    /**
     * Return a mapping of tags to hosts for your whole infrastructure.
     * Get Tags
     * @param param the request object
     */
    listHostTags(param: TagsApiListHostTagsRequest, options?: Configuration): Promise<TagToHosts>;
    /**
     * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
     * Update host tags
     * @param param the request object
     */
    updateHostTags(param: TagsApiUpdateHostTagsRequest, options?: Configuration): Promise<HostTags>;
}
import { UsageMeteringApiRequestFactory, UsageMeteringApiResponseProcessor } from "../apis/UsageMeteringApi";
export interface UsageMeteringApiGetDailyCustomReportsRequest {
    /**
     * The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;.
     * @type number
     * @memberof UsageMeteringApigetDailyCustomReports
     */
    pageSize?: number;
    /**
     * The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @type number
     * @memberof UsageMeteringApigetDailyCustomReports
     */
    pageNumber?: number;
    /**
     * The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @type UsageSortDirection
     * @memberof UsageMeteringApigetDailyCustomReports
     */
    sortDir?: UsageSortDirection;
    /**
     * The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     * @type UsageSort
     * @memberof UsageMeteringApigetDailyCustomReports
     */
    sort?: UsageSort;
}
export interface UsageMeteringApiGetIncidentManagementRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetIncidentManagement
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetIncidentManagement
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetIngestedSpansRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetIngestedSpans
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetIngestedSpans
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetMonthlyCustomReportsRequest {
    /**
     * The number of files to return in the response &#x60;[default&#x3D;60].&#x60;
     * @type number
     * @memberof UsageMeteringApigetMonthlyCustomReports
     */
    pageSize?: number;
    /**
     * The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
     * @type number
     * @memberof UsageMeteringApigetMonthlyCustomReports
     */
    pageNumber?: number;
    /**
     * The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @type UsageSortDirection
     * @memberof UsageMeteringApigetMonthlyCustomReports
     */
    sortDir?: UsageSortDirection;
    /**
     * The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
     * @type UsageSort
     * @memberof UsageMeteringApigetMonthlyCustomReports
     */
    sort?: UsageSort;
}
export interface UsageMeteringApiGetSpecifiedDailyCustomReportsRequest {
    /**
     * The specified ID to search results for.
     * @type string
     * @memberof UsageMeteringApigetSpecifiedDailyCustomReports
     */
    reportId: string;
}
export interface UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest {
    /**
     * The specified ID to search results for.
     * @type string
     * @memberof UsageMeteringApigetSpecifiedMonthlyCustomReports
     */
    reportId: string;
}
export interface UsageMeteringApiGetTracingWithoutLimitsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetTracingWithoutLimits
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetTracingWithoutLimits
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageAnalyzedLogsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageAnalyzedLogs
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageAnalyzedLogs
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageAttributionRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @type Date
     * @memberof UsageMeteringApigetUsageAttribution
     */
    startMonth: Date;
    /**
     * Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types.
     * @type UsageAttributionSupportedMetrics
     * @memberof UsageMeteringApigetUsageAttribution
     */
    fields: UsageAttributionSupportedMetrics;
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @type Date
     * @memberof UsageMeteringApigetUsageAttribution
     */
    endMonth?: Date;
    /**
     * The direction to sort by: &#x60;[desc, asc]&#x60;.
     * @type UsageSortDirection
     * @memberof UsageMeteringApigetUsageAttribution
     */
    sortDirection?: UsageSortDirection;
    /**
     * The field to sort by.
     * @type UsageAttributionSort
     * @memberof UsageMeteringApigetUsageAttribution
     */
    sortName?: UsageAttributionSort;
}
export interface UsageMeteringApiGetUsageBillableSummaryRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
     * @type Date
     * @memberof UsageMeteringApigetUsageBillableSummary
     */
    month?: Date;
}
export interface UsageMeteringApiGetUsageComplianceMonitoringRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageComplianceMonitoring
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageComplianceMonitoring
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageFargateRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageFargate
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageFargate
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageHostsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageHosts
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageHosts
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageIndexedSpansRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageIndexedSpans
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageIndexedSpans
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageInternetOfThingsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageInternetOfThings
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageInternetOfThings
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageLambdaRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageLambda
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageLambda
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageLogsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageLogs
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageLogs
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageLogsByIndexRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageLogsByIndex
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageLogsByIndex
     */
    endHr?: Date;
    /**
     * Comma-separated list of log index names.
     * @type Array&lt;string&gt;
     * @memberof UsageMeteringApigetUsageLogsByIndex
     */
    indexName?: Array<string>;
}
export interface UsageMeteringApiGetUsageLogsByRetentionRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageLogsByRetention
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageLogsByRetention
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageNetworkFlowsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageNetworkFlows
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageNetworkFlows
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageNetworkHostsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageNetworkHosts
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageNetworkHosts
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageProfilingRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageProfiling
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageProfiling
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageRumSessionsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageRumSessions
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageRumSessions
     */
    endHr?: Date;
    /**
     * RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;.
     * @type string
     * @memberof UsageMeteringApigetUsageRumSessions
     */
    type?: string;
}
export interface UsageMeteringApiGetUsageSNMPRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageSNMP
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageSNMP
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageSummaryRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
     * @type Date
     * @memberof UsageMeteringApigetUsageSummary
     */
    startMonth: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
     * @type Date
     * @memberof UsageMeteringApigetUsageSummary
     */
    endMonth?: Date;
    /**
     * Include usage summaries for each sub-org.
     * @type boolean
     * @memberof UsageMeteringApigetUsageSummary
     */
    includeOrgDetails?: boolean;
}
export interface UsageMeteringApiGetUsageSyntheticsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageSynthetics
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageSynthetics
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageSyntheticsAPIRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageSyntheticsAPI
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageSyntheticsAPI
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageSyntheticsBrowserRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageSyntheticsBrowser
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageSyntheticsBrowser
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageTimeseriesRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageTimeseries
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageTimeseries
     */
    endHr?: Date;
}
export interface UsageMeteringApiGetUsageTopAvgMetricsRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @type Date
     * @memberof UsageMeteringApigetUsageTopAvgMetrics
     */
    month?: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both)
     * @type Date
     * @memberof UsageMeteringApigetUsageTopAvgMetrics
     */
    day?: Date;
    /**
     * Comma-separated list of metric names.
     * @type Array&lt;string&gt;
     * @memberof UsageMeteringApigetUsageTopAvgMetrics
     */
    names?: Array<string>;
    /**
     * Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
     * @type number
     * @memberof UsageMeteringApigetUsageTopAvgMetrics
     */
    limit?: number;
    /**
     * List following results with a next_record_id provided in the previous query.
     * @type string
     * @memberof UsageMeteringApigetUsageTopAvgMetrics
     */
    nextRecordId?: string;
}
export interface UsageMeteringApiGetUsageTraceRequest {
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageTrace
     */
    startHr: Date;
    /**
     * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
     * @type Date
     * @memberof UsageMeteringApigetUsageTrace
     */
    endHr?: Date;
}
export declare class ObjectUsageMeteringApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsageMeteringApiRequestFactory, responseProcessor?: UsageMeteringApiResponseProcessor);
    /**
     * Get daily custom reports.
     * Get the list of available daily custom reports
     * @param param the request object
     */
    getDailyCustomReports(param: UsageMeteringApiGetDailyCustomReportsRequest, options?: Configuration): Promise<UsageCustomReportsResponse>;
    /**
     * Get hourly usage for incident management.
     * Get hourly usage for incident management
     * @param param the request object
     */
    getIncidentManagement(param: UsageMeteringApiGetIncidentManagementRequest, options?: Configuration): Promise<UsageIncidentManagementResponse>;
    /**
     * Get hourly usage for ingested spans.
     * Get hourly usage for ingested spans
     * @param param the request object
     */
    getIngestedSpans(param: UsageMeteringApiGetIngestedSpansRequest, options?: Configuration): Promise<UsageIngestedSpansResponse>;
    /**
     * Get monthly custom reports.
     * Get the list of available monthly custom reports
     * @param param the request object
     */
    getMonthlyCustomReports(param: UsageMeteringApiGetMonthlyCustomReportsRequest, options?: Configuration): Promise<UsageCustomReportsResponse>;
    /**
     * Get specified daily custom reports.
     * Get specified daily custom reports
     * @param param the request object
     */
    getSpecifiedDailyCustomReports(param: UsageMeteringApiGetSpecifiedDailyCustomReportsRequest, options?: Configuration): Promise<UsageSpecifiedCustomReportsResponse>;
    /**
     * Get specified monthly custom reports.
     * Get specified monthly custom reports
     * @param param the request object
     */
    getSpecifiedMonthlyCustomReports(param: UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest, options?: Configuration): Promise<UsageSpecifiedCustomReportsResponse>;
    /**
     * Get hourly usage for tracing without limits.  **Note** This endpoint has been renamed to `/api/v1/usage/ingested-spans`.
     * Get hourly usage for tracing without limits
     * @param param the request object
     */
    getTracingWithoutLimits(param: UsageMeteringApiGetTracingWithoutLimitsRequest, options?: Configuration): Promise<UsageTracingWithoutLimitsResponse>;
    /**
     * Get hourly usage for analyzed logs (Security Monitoring).
     * Get hourly usage for analyzed logs
     * @param param the request object
     */
    getUsageAnalyzedLogs(param: UsageMeteringApiGetUsageAnalyzedLogsRequest, options?: Configuration): Promise<UsageAnalyzedLogsResponse>;
    /**
     * Get Usage Attribution.
     * Get Usage Attribution
     * @param param the request object
     */
    getUsageAttribution(param: UsageMeteringApiGetUsageAttributionRequest, options?: Configuration): Promise<UsageAttributionResponse>;
    /**
     * Get billable usage across your account.
     * Get billable usage across your account
     * @param param the request object
     */
    getUsageBillableSummary(param: UsageMeteringApiGetUsageBillableSummaryRequest, options?: Configuration): Promise<UsageBillableSummaryResponse>;
    /**
     * Get hourly usage for Compliance Monitoring.
     * Get hourly usage for Compliance Monitoring
     * @param param the request object
     */
    getUsageComplianceMonitoring(param: UsageMeteringApiGetUsageComplianceMonitoringRequest, options?: Configuration): Promise<UsageComplianceResponse>;
    /**
     * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
     * Get hourly usage for Fargate
     * @param param the request object
     */
    getUsageFargate(param: UsageMeteringApiGetUsageFargateRequest, options?: Configuration): Promise<UsageFargateResponse>;
    /**
     * Get hourly usage for hosts and containers.
     * Get hourly usage for hosts and containers
     * @param param the request object
     */
    getUsageHosts(param: UsageMeteringApiGetUsageHostsRequest, options?: Configuration): Promise<UsageHostsResponse>;
    /**
     * Get hourly usage for indexed spans.
     * Get hourly usage for indexed spans
     * @param param the request object
     */
    getUsageIndexedSpans(param: UsageMeteringApiGetUsageIndexedSpansRequest, options?: Configuration): Promise<UsageIndexedSpansResponse>;
    /**
     * Get hourly usage for IoT.
     * Get hourly usage for IoT
     * @param param the request object
     */
    getUsageInternetOfThings(param: UsageMeteringApiGetUsageInternetOfThingsRequest, options?: Configuration): Promise<UsageIoTResponse>;
    /**
     * Get hourly usage for lambda.
     * Get hourly usage for Lambda
     * @param param the request object
     */
    getUsageLambda(param: UsageMeteringApiGetUsageLambdaRequest, options?: Configuration): Promise<UsageLambdaResponse>;
    /**
     * Get hourly usage for logs.
     * Get hourly usage for Logs
     * @param param the request object
     */
    getUsageLogs(param: UsageMeteringApiGetUsageLogsRequest, options?: Configuration): Promise<UsageLogsResponse>;
    /**
     * Get hourly usage for logs by index.
     * Get hourly usage for Logs by Index
     * @param param the request object
     */
    getUsageLogsByIndex(param: UsageMeteringApiGetUsageLogsByIndexRequest, options?: Configuration): Promise<UsageLogsByIndexResponse>;
    /**
     * Get hourly usage for indexed logs by retention period.
     * Get hourly logs usage by retention
     * @param param the request object
     */
    getUsageLogsByRetention(param: UsageMeteringApiGetUsageLogsByRetentionRequest, options?: Configuration): Promise<UsageLogsByRetentionResponse>;
    /**
     * Get hourly usage for network flows.
     * Get hourly usage for Network Flows
     * @param param the request object
     */
    getUsageNetworkFlows(param: UsageMeteringApiGetUsageNetworkFlowsRequest, options?: Configuration): Promise<UsageNetworkFlowsResponse>;
    /**
     * Get hourly usage for network hosts.
     * Get hourly usage for Network Hosts
     * @param param the request object
     */
    getUsageNetworkHosts(param: UsageMeteringApiGetUsageNetworkHostsRequest, options?: Configuration): Promise<UsageNetworkHostsResponse>;
    /**
     * Get hourly usage for profiled hosts.
     * Get hourly usage for profiled hosts
     * @param param the request object
     */
    getUsageProfiling(param: UsageMeteringApiGetUsageProfilingRequest, options?: Configuration): Promise<UsageProfilingResponse>;
    /**
     * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
     * Get hourly usage for RUM Sessions
     * @param param the request object
     */
    getUsageRumSessions(param: UsageMeteringApiGetUsageRumSessionsRequest, options?: Configuration): Promise<UsageRumSessionsResponse>;
    /**
     * Get hourly usage for SNMP devices.
     * Get hourly usage for SNMP devices
     * @param param the request object
     */
    getUsageSNMP(param: UsageMeteringApiGetUsageSNMPRequest, options?: Configuration): Promise<UsageSNMPResponse>;
    /**
     * Get usage across your multi-org account. You must have the multi-org feature enabled.
     * Get usage across your multi-org account
     * @param param the request object
     */
    getUsageSummary(param: UsageMeteringApiGetUsageSummaryRequest, options?: Configuration): Promise<UsageSummaryResponse>;
    /**
     * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics Checks
     * @param param the request object
     */
    getUsageSynthetics(param: UsageMeteringApiGetUsageSyntheticsRequest, options?: Configuration): Promise<UsageSyntheticsResponse>;
    /**
     * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
     * Get hourly usage for Synthetics API Checks
     * @param param the request object
     */
    getUsageSyntheticsAPI(param: UsageMeteringApiGetUsageSyntheticsAPIRequest, options?: Configuration): Promise<UsageSyntheticsAPIResponse>;
    /**
     * Get hourly usage for synthetics browser checks.
     * Get hourly usage for Synthetics Browser Checks
     * @param param the request object
     */
    getUsageSyntheticsBrowser(param: UsageMeteringApiGetUsageSyntheticsBrowserRequest, options?: Configuration): Promise<UsageSyntheticsBrowserResponse>;
    /**
     * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
     * Get hourly usage for custom metrics
     * @param param the request object
     */
    getUsageTimeseries(param: UsageMeteringApiGetUsageTimeseriesRequest, options?: Configuration): Promise<UsageTimeseriesResponse>;
    /**
     * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
     * Get all custom metrics by hourly average
     * @param param the request object
     */
    getUsageTopAvgMetrics(param: UsageMeteringApiGetUsageTopAvgMetricsRequest, options?: Configuration): Promise<UsageTopAvgMetricsResponse>;
    /**
     * Get hourly usage for trace search.  **Note** This endpoint has been renamed to `/api/v1/usage/indexed-spans`.
     * Get hourly usage for Trace Search
     * @param param the request object
     */
    getUsageTrace(param: UsageMeteringApiGetUsageTraceRequest, options?: Configuration): Promise<UsageTraceResponse>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export interface UsersApiCreateUserRequest {
    /**
     * User object that needs to be created.
     * @type User
     * @memberof UsersApicreateUser
     */
    body: User;
}
export interface UsersApiDisableUserRequest {
    /**
     * The handle of the user.
     * @type string
     * @memberof UsersApidisableUser
     */
    userHandle: string;
}
export interface UsersApiGetUserRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApigetUser
     */
    userHandle: string;
}
export interface UsersApiListUsersRequest {
}
export interface UsersApiUpdateUserRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApiupdateUser
     */
    userHandle: string;
    /**
     * Description of the update.
     * @type User
     * @memberof UsersApiupdateUser
     */
    body: User;
}
export declare class ObjectUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    /**
     * Create a user for your organization.  **Note**: Users can only be created with the admin access role if application keys belong to administrators.
     * Create a user
     * @param param the request object
     */
    createUser(param: UsersApiCreateUserRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * Delete a user from an organization.  **Note**: This endpoint can only be used with application keys belonging to administrators.
     * Disable a user
     * @param param the request object
     */
    disableUser(param: UsersApiDisableUserRequest, options?: Configuration): Promise<UserDisableResponse>;
    /**
     * Get a user's details.
     * Get user details
     * @param param the request object
     */
    getUser(param: UsersApiGetUserRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * List all users for your organization.
     * List all users
     * @param param the request object
     */
    listUsers(param: UsersApiListUsersRequest, options?: Configuration): Promise<UserListResponse>;
    /**
     * Update a user information.  **Note**: It can only be used with application keys belonging to administrators.
     * Update a user
     * @param param the request object
     */
    updateUser(param: UsersApiUpdateUserRequest, options?: Configuration): Promise<UserResponse>;
}
