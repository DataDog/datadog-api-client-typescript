import { HttpFile } from "../http/http";
import { Configuration } from "../configuration";

import { AWSAccount } from "../models/AWSAccount";
import { AWSAccountAndLambdaRequest } from "../models/AWSAccountAndLambdaRequest";
import { AWSAccountCreateResponse } from "../models/AWSAccountCreateResponse";
import { AWSAccountDeleteRequest } from "../models/AWSAccountDeleteRequest";
import { AWSAccountListResponse } from "../models/AWSAccountListResponse";
import { AWSLogsAsyncResponse } from "../models/AWSLogsAsyncResponse";
import { AWSLogsListResponse } from "../models/AWSLogsListResponse";
import { AWSLogsListServicesResponse } from "../models/AWSLogsListServicesResponse";
import { AWSLogsServicesRequest } from "../models/AWSLogsServicesRequest";
import { AWSTagFilterCreateRequest } from "../models/AWSTagFilterCreateRequest";
import { AWSTagFilterDeleteRequest } from "../models/AWSTagFilterDeleteRequest";
import { AWSTagFilterListResponse } from "../models/AWSTagFilterListResponse";
import { ApiKey } from "../models/ApiKey";
import { ApiKeyListResponse } from "../models/ApiKeyListResponse";
import { ApiKeyResponse } from "../models/ApiKeyResponse";
import { ApplicationKey } from "../models/ApplicationKey";
import { ApplicationKeyListResponse } from "../models/ApplicationKeyListResponse";
import { ApplicationKeyResponse } from "../models/ApplicationKeyResponse";
import { AuthenticationValidationResponse } from "../models/AuthenticationValidationResponse";
import { AzureAccount } from "../models/AzureAccount";
import { CancelDowntimesByScopeRequest } from "../models/CancelDowntimesByScopeRequest";
import { CanceledDowntimesIds } from "../models/CanceledDowntimesIds";
import { CheckCanDeleteMonitorResponse } from "../models/CheckCanDeleteMonitorResponse";
import { CheckCanDeleteSLOResponse } from "../models/CheckCanDeleteSLOResponse";
import { ContentEncoding } from "../models/ContentEncoding";
import { Dashboard } from "../models/Dashboard";
import { DashboardBulkDeleteRequest } from "../models/DashboardBulkDeleteRequest";
import { DashboardDeleteResponse } from "../models/DashboardDeleteResponse";
import { DashboardList } from "../models/DashboardList";
import { DashboardListDeleteResponse } from "../models/DashboardListDeleteResponse";
import { DashboardListListResponse } from "../models/DashboardListListResponse";
import { DashboardRestoreRequest } from "../models/DashboardRestoreRequest";
import { DashboardSummary } from "../models/DashboardSummary";
import { DeletedMonitor } from "../models/DeletedMonitor";
import { Downtime } from "../models/Downtime";
import { EventCreateRequest } from "../models/EventCreateRequest";
import { EventCreateResponse } from "../models/EventCreateResponse";
import { EventListResponse } from "../models/EventListResponse";
import { EventPriority } from "../models/EventPriority";
import { EventResponse } from "../models/EventResponse";
import { GCPAccount } from "../models/GCPAccount";
import { GraphSnapshot } from "../models/GraphSnapshot";
import { HTTPLogItem } from "../models/HTTPLogItem";
import { HostListResponse } from "../models/HostListResponse";
import { HostMuteResponse } from "../models/HostMuteResponse";
import { HostMuteSettings } from "../models/HostMuteSettings";
import { HostTags } from "../models/HostTags";
import { HostTotals } from "../models/HostTotals";
import { IPRanges } from "../models/IPRanges";
import { IdpResponse } from "../models/IdpResponse";
import { IntakePayloadAccepted } from "../models/IntakePayloadAccepted";
import { LogsIndex } from "../models/LogsIndex";
import { LogsIndexListResponse } from "../models/LogsIndexListResponse";
import { LogsIndexUpdateRequest } from "../models/LogsIndexUpdateRequest";
import { LogsIndexesOrder } from "../models/LogsIndexesOrder";
import { LogsListRequest } from "../models/LogsListRequest";
import { LogsListResponse } from "../models/LogsListResponse";
import { LogsPipeline } from "../models/LogsPipeline";
import { LogsPipelinesOrder } from "../models/LogsPipelinesOrder";
import { MetricMetadata } from "../models/MetricMetadata";
import { MetricSearchResponse } from "../models/MetricSearchResponse";
import { MetricsListResponse } from "../models/MetricsListResponse";
import { MetricsPayload } from "../models/MetricsPayload";
import { MetricsQueryResponse } from "../models/MetricsQueryResponse";
import { Monitor } from "../models/Monitor";
import { MonitorGroupSearchResponse } from "../models/MonitorGroupSearchResponse";
import { MonitorSearchResponse } from "../models/MonitorSearchResponse";
import { MonitorUpdateRequest } from "../models/MonitorUpdateRequest";
import { NotebookCreateRequest } from "../models/NotebookCreateRequest";
import { NotebookResponse } from "../models/NotebookResponse";
import { NotebookUpdateRequest } from "../models/NotebookUpdateRequest";
import { NotebooksResponse } from "../models/NotebooksResponse";
import { Organization } from "../models/Organization";
import { OrganizationCreateBody } from "../models/OrganizationCreateBody";
import { OrganizationCreateResponse } from "../models/OrganizationCreateResponse";
import { OrganizationListResponse } from "../models/OrganizationListResponse";
import { OrganizationResponse } from "../models/OrganizationResponse";
import { PagerDutyService } from "../models/PagerDutyService";
import { PagerDutyServiceKey } from "../models/PagerDutyServiceKey";
import { PagerDutyServiceName } from "../models/PagerDutyServiceName";
import { SLOBulkDeleteResponse } from "../models/SLOBulkDeleteResponse";
import { SLOCorrectionCreateRequest } from "../models/SLOCorrectionCreateRequest";
import { SLOCorrectionListResponse } from "../models/SLOCorrectionListResponse";
import { SLOCorrectionResponse } from "../models/SLOCorrectionResponse";
import { SLOCorrectionUpdateRequest } from "../models/SLOCorrectionUpdateRequest";
import { SLODeleteResponse } from "../models/SLODeleteResponse";
import { SLOHistoryResponse } from "../models/SLOHistoryResponse";
import { SLOListResponse } from "../models/SLOListResponse";
import { SLOResponse } from "../models/SLOResponse";
import { SLOTimeframe } from "../models/SLOTimeframe";
import { ServiceCheck } from "../models/ServiceCheck";
import { ServiceLevelObjective } from "../models/ServiceLevelObjective";
import { ServiceLevelObjectiveRequest } from "../models/ServiceLevelObjectiveRequest";
import { SlackIntegrationChannel } from "../models/SlackIntegrationChannel";
import { SyntheticsAPITest } from "../models/SyntheticsAPITest";
import { SyntheticsAPITestResultFull } from "../models/SyntheticsAPITestResultFull";
import { SyntheticsBrowserTest } from "../models/SyntheticsBrowserTest";
import { SyntheticsBrowserTestResultFull } from "../models/SyntheticsBrowserTestResultFull";
import { SyntheticsCITestBody } from "../models/SyntheticsCITestBody";
import { SyntheticsDeleteTestsPayload } from "../models/SyntheticsDeleteTestsPayload";
import { SyntheticsDeleteTestsResponse } from "../models/SyntheticsDeleteTestsResponse";
import { SyntheticsGetAPITestLatestResultsResponse } from "../models/SyntheticsGetAPITestLatestResultsResponse";
import { SyntheticsGetBrowserTestLatestResultsResponse } from "../models/SyntheticsGetBrowserTestLatestResultsResponse";
import { SyntheticsGlobalVariable } from "../models/SyntheticsGlobalVariable";
import { SyntheticsListGlobalVariablesResponse } from "../models/SyntheticsListGlobalVariablesResponse";
import { SyntheticsListTestsResponse } from "../models/SyntheticsListTestsResponse";
import { SyntheticsLocations } from "../models/SyntheticsLocations";
import { SyntheticsPrivateLocation } from "../models/SyntheticsPrivateLocation";
import { SyntheticsPrivateLocationCreationResponse } from "../models/SyntheticsPrivateLocationCreationResponse";
import { SyntheticsTestDetails } from "../models/SyntheticsTestDetails";
import { SyntheticsTriggerCITestsResponse } from "../models/SyntheticsTriggerCITestsResponse";
import { SyntheticsUpdateTestPauseStatusPayload } from "../models/SyntheticsUpdateTestPauseStatusPayload";
import { TagToHosts } from "../models/TagToHosts";
import { UsageAnalyzedLogsResponse } from "../models/UsageAnalyzedLogsResponse";
import { UsageAttributionResponse } from "../models/UsageAttributionResponse";
import { UsageAttributionSort } from "../models/UsageAttributionSort";
import { UsageAttributionSupportedMetrics } from "../models/UsageAttributionSupportedMetrics";
import { UsageAuditLogsResponse } from "../models/UsageAuditLogsResponse";
import { UsageBillableSummaryResponse } from "../models/UsageBillableSummaryResponse";
import { UsageCWSResponse } from "../models/UsageCWSResponse";
import { UsageCloudSecurityPostureManagementResponse } from "../models/UsageCloudSecurityPostureManagementResponse";
import { UsageCustomReportsResponse } from "../models/UsageCustomReportsResponse";
import { UsageFargateResponse } from "../models/UsageFargateResponse";
import { UsageHostsResponse } from "../models/UsageHostsResponse";
import { UsageIncidentManagementResponse } from "../models/UsageIncidentManagementResponse";
import { UsageIndexedSpansResponse } from "../models/UsageIndexedSpansResponse";
import { UsageIngestedSpansResponse } from "../models/UsageIngestedSpansResponse";
import { UsageIoTResponse } from "../models/UsageIoTResponse";
import { UsageLambdaResponse } from "../models/UsageLambdaResponse";
import { UsageLogsByIndexResponse } from "../models/UsageLogsByIndexResponse";
import { UsageLogsByRetentionResponse } from "../models/UsageLogsByRetentionResponse";
import { UsageLogsResponse } from "../models/UsageLogsResponse";
import { UsageNetworkFlowsResponse } from "../models/UsageNetworkFlowsResponse";
import { UsageNetworkHostsResponse } from "../models/UsageNetworkHostsResponse";
import { UsageProfilingResponse } from "../models/UsageProfilingResponse";
import { UsageRumSessionsResponse } from "../models/UsageRumSessionsResponse";
import { UsageSNMPResponse } from "../models/UsageSNMPResponse";
import { UsageSort } from "../models/UsageSort";
import { UsageSortDirection } from "../models/UsageSortDirection";
import { UsageSpecifiedCustomReportsResponse } from "../models/UsageSpecifiedCustomReportsResponse";
import { UsageSummaryResponse } from "../models/UsageSummaryResponse";
import { UsageSyntheticsAPIResponse } from "../models/UsageSyntheticsAPIResponse";
import { UsageSyntheticsBrowserResponse } from "../models/UsageSyntheticsBrowserResponse";
import { UsageSyntheticsResponse } from "../models/UsageSyntheticsResponse";
import { UsageTimeseriesResponse } from "../models/UsageTimeseriesResponse";
import { UsageTopAvgMetricsResponse } from "../models/UsageTopAvgMetricsResponse";
import { User } from "../models/User";
import { UserDisableResponse } from "../models/UserDisableResponse";
import { UserListResponse } from "../models/UserListResponse";
import { UserResponse } from "../models/UserResponse";
import { WebhooksIntegration } from "../models/WebhooksIntegration";
import { WebhooksIntegrationCustomVariable } from "../models/WebhooksIntegrationCustomVariable";
import { WebhooksIntegrationCustomVariableResponse } from "../models/WebhooksIntegrationCustomVariableResponse";
import { WebhooksIntegrationCustomVariableUpdateRequest } from "../models/WebhooksIntegrationCustomVariableUpdateRequest";
import { WebhooksIntegrationUpdateRequest } from "../models/WebhooksIntegrationUpdateRequest";
import { ObservableAWSIntegrationApi } from "./ObservableAPI";

import {
  AWSIntegrationApiRequestFactory,
  AWSIntegrationApiResponseProcessor,
} from "../apis/AWSIntegrationApi";
export class PromiseAWSIntegrationApi {
  private api: ObservableAWSIntegrationApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: AWSIntegrationApiRequestFactory,
    responseProcessor?: AWSIntegrationApiResponseProcessor
  ) {
    this.api = new ObservableAWSIntegrationApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a Datadog-Amazon Web Services integration. Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization. A unique AWS Account ID for role based authentication.
   * Create an AWS integration
   * @param body AWS Request Object
   */
  public createAWSAccount(
    body: AWSAccount,
    options?: Configuration
  ): Promise<AWSAccountCreateResponse> {
    const result = this.api.createAWSAccount(body, options);
    return result.toPromise();
  }

  /**
   * Set an AWS tag filter.
   * Set an AWS tag filter
   * @param body Set an AWS tag filter using an &#x60;aws_account_identifier&#x60;, &#x60;namespace&#x60;, and filtering string. Namespace options are &#x60;application_elb&#x60;, &#x60;elb&#x60;, &#x60;lambda&#x60;, &#x60;network_elb&#x60;, &#x60;rds&#x60;, &#x60;sqs&#x60;, and &#x60;custom&#x60;.
   */
  public createAWSTagFilter(
    body: AWSTagFilterCreateRequest,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.createAWSTagFilter(body, options);
    return result.toPromise();
  }

  /**
   * Generate a new AWS external ID for a given AWS account ID and role name pair.
   * Generate a new external ID
   * @param body Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://docs.datadoghq.com/integrations/amazon_web_services/#setup).
   */
  public createNewAWSExternalID(
    body: AWSAccount,
    options?: Configuration
  ): Promise<AWSAccountCreateResponse> {
    const result = this.api.createNewAWSExternalID(body, options);
    return result.toPromise();
  }

  /**
   * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
   * Delete an AWS integration
   * @param body AWS request object
   */
  public deleteAWSAccount(
    body: AWSAccountDeleteRequest,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.deleteAWSAccount(body, options);
    return result.toPromise();
  }

  /**
   * Delete a tag filtering entry.
   * Delete a tag filtering entry
   * @param body Delete a tag filtering entry for a given AWS account and &#x60;dd-aws&#x60; namespace.
   */
  public deleteAWSTagFilter(
    body: AWSTagFilterDeleteRequest,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.deleteAWSTagFilter(body, options);
    return result.toPromise();
  }

  /**
   * List all Datadog-AWS integrations available in your Datadog organization.
   * List all AWS integrations
   * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
   * @param roleName Only return AWS accounts that matches this role_name.
   * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;.
   */
  public listAWSAccounts(
    accountId?: string,
    roleName?: string,
    accessKeyId?: string,
    options?: Configuration
  ): Promise<AWSAccountListResponse> {
    const result = this.api.listAWSAccounts(
      accountId,
      roleName,
      accessKeyId,
      options
    );
    return result.toPromise();
  }

  /**
   * Get all AWS tag filters.
   * Get all AWS tag filters
   * @param accountId Only return AWS filters that matches this &#x60;account_id&#x60;.
   */
  public listAWSTagFilters(
    accountId: string,
    options?: Configuration
  ): Promise<AWSTagFilterListResponse> {
    const result = this.api.listAWSTagFilters(accountId, options);
    return result.toPromise();
  }

  /**
   * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
   * List namespace rules
   */
  public listAvailableAWSNamespaces(
    options?: Configuration
  ): Promise<Array<string>> {
    const result = this.api.listAvailableAWSNamespaces(options);
    return result.toPromise();
  }

  /**
   * Update a Datadog-Amazon Web Services integration.
   * Update an AWS integration
   * @param body AWS request object
   * @param accountId Only return AWS accounts that matches this &#x60;account_id&#x60;.
   * @param roleName Only return AWS accounts that match this &#x60;role_name&#x60;. Required if &#x60;account_id&#x60; is specified.
   * @param accessKeyId Only return AWS accounts that matches this &#x60;access_key_id&#x60;. Required if none of the other two options are specified.
   */
  public updateAWSAccount(
    body: AWSAccount,
    accountId?: string,
    roleName?: string,
    accessKeyId?: string,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.updateAWSAccount(
      body,
      accountId,
      roleName,
      accessKeyId,
      options
    );
    return result.toPromise();
  }
}

import { ObservableAWSLogsIntegrationApi } from "./ObservableAPI";

import {
  AWSLogsIntegrationApiRequestFactory,
  AWSLogsIntegrationApiResponseProcessor,
} from "../apis/AWSLogsIntegrationApi";
export class PromiseAWSLogsIntegrationApi {
  private api: ObservableAWSLogsIntegrationApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: AWSLogsIntegrationApiRequestFactory,
    responseProcessor?: AWSLogsIntegrationApiResponseProcessor
  ) {
    this.api = new ObservableAWSLogsIntegrationApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this endpoint can be polled intermittently instead of blocking.  - Returns a status of 'created' when it's checking if the Lambda exists in the account. - Returns a status of 'waiting' while checking. - Returns a status of 'checked and ok' if the Lambda exists. - Returns a status of 'error' if the Lambda does not exist.
   * Check that an AWS Lambda Function exists
   * @param body Check AWS Log Lambda Async request body.
   */
  public checkAWSLogsLambdaAsync(
    body: AWSAccountAndLambdaRequest,
    options?: Configuration
  ): Promise<AWSLogsAsyncResponse> {
    const result = this.api.checkAWSLogsLambdaAsync(body, options);
    return result.toPromise();
  }

  /**
   * Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.
   * Check permissions for log services
   * @param body Check AWS Logs Async Services request body.
   */
  public checkAWSLogsServicesAsync(
    body: AWSLogsServicesRequest,
    options?: Configuration
  ): Promise<AWSLogsAsyncResponse> {
    const result = this.api.checkAWSLogsServicesAsync(body, options);
    return result.toPromise();
  }

  /**
   * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
   * Add AWS Log Lambda ARN
   * @param body AWS Log Lambda Async request body.
   */
  public createAWSLambdaARN(
    body: AWSAccountAndLambdaRequest,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.createAWSLambdaARN(body, options);
    return result.toPromise();
  }

  /**
   * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
   * Delete an AWS Logs integration
   * @param body Delete AWS Lambda ARN request body.
   */
  public deleteAWSLambdaARN(
    body: AWSAccountAndLambdaRequest,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.deleteAWSLambdaARN(body, options);
    return result.toPromise();
  }

  /**
   * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
   * Enable an AWS Logs integration
   * @param body Enable AWS Log Services request body.
   */
  public enableAWSLogServices(
    body: AWSLogsServicesRequest,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.enableAWSLogServices(body, options);
    return result.toPromise();
  }

  /**
   * List all Datadog-AWS Logs integrations configured in your Datadog account.
   * List all AWS Logs integrations
   */
  public listAWSLogsIntegrations(
    options?: Configuration
  ): Promise<Array<AWSLogsListResponse>> {
    const result = this.api.listAWSLogsIntegrations(options);
    return result.toPromise();
  }

  /**
   * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
   * Get list of AWS log ready services
   */
  public listAWSLogsServices(
    options?: Configuration
  ): Promise<Array<AWSLogsListServicesResponse>> {
    const result = this.api.listAWSLogsServices(options);
    return result.toPromise();
  }
}

import { ObservableAuthenticationApi } from "./ObservableAPI";

import {
  AuthenticationApiRequestFactory,
  AuthenticationApiResponseProcessor,
} from "../apis/AuthenticationApi";
export class PromiseAuthenticationApi {
  private api: ObservableAuthenticationApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: AuthenticationApiRequestFactory,
    responseProcessor?: AuthenticationApiResponseProcessor
  ) {
    this.api = new ObservableAuthenticationApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
   * Validate API key
   */
  public validate(
    options?: Configuration
  ): Promise<AuthenticationValidationResponse> {
    const result = this.api.validate(options);
    return result.toPromise();
  }
}

import { ObservableAzureIntegrationApi } from "./ObservableAPI";

import {
  AzureIntegrationApiRequestFactory,
  AzureIntegrationApiResponseProcessor,
} from "../apis/AzureIntegrationApi";
export class PromiseAzureIntegrationApi {
  private api: ObservableAzureIntegrationApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: AzureIntegrationApiRequestFactory,
    responseProcessor?: AzureIntegrationApiResponseProcessor
  ) {
    this.api = new ObservableAzureIntegrationApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a Datadog-Azure integration.  Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization.  Using the `PUT` method updates your integration configuration by replacing your current configuration with the new one sent to your Datadog organization.
   * Create an Azure integration
   * @param body Create a Datadog-Azure integration for your Datadog account request body.
   */
  public createAzureIntegration(
    body: AzureAccount,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.createAzureIntegration(body, options);
    return result.toPromise();
  }

  /**
   * Delete a given Datadog-Azure integration from your Datadog account.
   * Delete an Azure integration
   * @param body Delete a given Datadog-Azure integration request body.
   */
  public deleteAzureIntegration(
    body: AzureAccount,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.deleteAzureIntegration(body, options);
    return result.toPromise();
  }

  /**
   * List all Datadog-Azure integrations configured in your Datadog account.
   * List all Azure integrations
   */
  public listAzureIntegration(
    options?: Configuration
  ): Promise<Array<AzureAccount>> {
    const result = this.api.listAzureIntegration(options);
    return result.toPromise();
  }

  /**
   * Update the defined list of host filters for a given Datadog-Azure integration.
   * Update Azure integration host filters
   * @param body Update a Datadog-Azure integration&#39;s host filters request body.
   */
  public updateAzureHostFilters(
    body: AzureAccount,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.updateAzureHostFilters(body, options);
    return result.toPromise();
  }

  /**
   * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`. Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`, use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
   * Update an Azure integration
   * @param body Update a Datadog-Azure integration request body.
   */
  public updateAzureIntegration(
    body: AzureAccount,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.updateAzureIntegration(body, options);
    return result.toPromise();
  }
}

import { ObservableDashboardListsApi } from "./ObservableAPI";

import {
  DashboardListsApiRequestFactory,
  DashboardListsApiResponseProcessor,
} from "../apis/DashboardListsApi";
export class PromiseDashboardListsApi {
  private api: ObservableDashboardListsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DashboardListsApiRequestFactory,
    responseProcessor?: DashboardListsApiResponseProcessor
  ) {
    this.api = new ObservableDashboardListsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create an empty dashboard list.
   * Create a dashboard list
   * @param body Create a dashboard list request body.
   */
  public createDashboardList(
    body: DashboardList,
    options?: Configuration
  ): Promise<DashboardList> {
    const result = this.api.createDashboardList(body, options);
    return result.toPromise();
  }

  /**
   * Delete a dashboard list.
   * Delete a dashboard list
   * @param listId ID of the dashboard list to delete.
   */
  public deleteDashboardList(
    listId: number,
    options?: Configuration
  ): Promise<DashboardListDeleteResponse> {
    const result = this.api.deleteDashboardList(listId, options);
    return result.toPromise();
  }

  /**
   * Fetch an existing dashboard list's definition.
   * Get a dashboard list
   * @param listId ID of the dashboard list to fetch.
   */
  public getDashboardList(
    listId: number,
    options?: Configuration
  ): Promise<DashboardList> {
    const result = this.api.getDashboardList(listId, options);
    return result.toPromise();
  }

  /**
   * Fetch all of your existing dashboard list definitions.
   * Get all dashboard lists
   */
  public listDashboardLists(
    options?: Configuration
  ): Promise<DashboardListListResponse> {
    const result = this.api.listDashboardLists(options);
    return result.toPromise();
  }

  /**
   * Update the name of a dashboard list.
   * Update a dashboard list
   * @param listId ID of the dashboard list to update.
   * @param body Update a dashboard list request body.
   */
  public updateDashboardList(
    listId: number,
    body: DashboardList,
    options?: Configuration
  ): Promise<DashboardList> {
    const result = this.api.updateDashboardList(listId, body, options);
    return result.toPromise();
  }
}

import { ObservableDashboardsApi } from "./ObservableAPI";

import {
  DashboardsApiRequestFactory,
  DashboardsApiResponseProcessor,
} from "../apis/DashboardsApi";
export class PromiseDashboardsApi {
  private api: ObservableDashboardsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DashboardsApiRequestFactory,
    responseProcessor?: DashboardsApiResponseProcessor
  ) {
    this.api = new ObservableDashboardsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended. Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
   * Create a new dashboard
   * @param body Create a dashboard request body.
   */
  public createDashboard(
    body: Dashboard,
    options?: Configuration
  ): Promise<Dashboard> {
    const result = this.api.createDashboard(body, options);
    return result.toPromise();
  }

  /**
   * Delete a dashboard using the specified ID.
   * Delete a dashboard
   * @param dashboardId The ID of the dashboard.
   */
  public deleteDashboard(
    dashboardId: string,
    options?: Configuration
  ): Promise<DashboardDeleteResponse> {
    const result = this.api.deleteDashboard(dashboardId, options);
    return result.toPromise();
  }

  /**
   * Delete dashboards using the specified IDs. If there are any failures, no dashboards will be deleted (partial success is not allowed).
   * Delete dashboards
   * @param body Delete dashboards request body.
   */
  public deleteDashboards(
    body: DashboardBulkDeleteRequest,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteDashboards(body, options);
    return result.toPromise();
  }

  /**
   * Get a dashboard using the specified ID.
   * Get a dashboard
   * @param dashboardId The ID of the dashboard.
   */
  public getDashboard(
    dashboardId: string,
    options?: Configuration
  ): Promise<Dashboard> {
    const result = this.api.getDashboard(dashboardId, options);
    return result.toPromise();
  }

  /**
   * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
   * Get all dashboards
   * @param filterShared When &#x60;true&#x60;, this query only returns shared custom created or cloned dashboards.
   */
  public listDashboards(
    filterShared?: boolean,
    options?: Configuration
  ): Promise<DashboardSummary> {
    const result = this.api.listDashboards(filterShared, options);
    return result.toPromise();
  }

  /**
   * Restore dashboards using the specified IDs. If there are any failures, no dashboards will be restored (partial success is not allowed).
   * Restore deleted dashboards
   * @param body Restore dashboards request body.
   */
  public restoreDashboards(
    body: DashboardRestoreRequest,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.restoreDashboards(body, options);
    return result.toPromise();
  }

  /**
   * Update a dashboard using the specified ID.
   * Update a dashboard
   * @param dashboardId The ID of the dashboard.
   * @param body Update Dashboard request body.
   */
  public updateDashboard(
    dashboardId: string,
    body: Dashboard,
    options?: Configuration
  ): Promise<Dashboard> {
    const result = this.api.updateDashboard(dashboardId, body, options);
    return result.toPromise();
  }
}

import { ObservableDowntimesApi } from "./ObservableAPI";

import {
  DowntimesApiRequestFactory,
  DowntimesApiResponseProcessor,
} from "../apis/DowntimesApi";
export class PromiseDowntimesApi {
  private api: ObservableDowntimesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: DowntimesApiRequestFactory,
    responseProcessor?: DowntimesApiResponseProcessor
  ) {
    this.api = new ObservableDowntimesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Cancel a downtime.
   * Cancel a downtime
   * @param downtimeId ID of the downtime to cancel.
   */
  public cancelDowntime(
    downtimeId: number,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.cancelDowntime(downtimeId, options);
    return result.toPromise();
  }

  /**
   * Delete all downtimes that match the scope of `X`.
   * Cancel downtimes by scope
   * @param body Scope to cancel downtimes for.
   */
  public cancelDowntimesByScope(
    body: CancelDowntimesByScopeRequest,
    options?: Configuration
  ): Promise<CanceledDowntimesIds> {
    const result = this.api.cancelDowntimesByScope(body, options);
    return result.toPromise();
  }

  /**
   * Schedule a downtime.
   * Schedule a downtime
   * @param body Schedule a downtime request body.
   */
  public createDowntime(
    body: Downtime,
    options?: Configuration
  ): Promise<Downtime> {
    const result = this.api.createDowntime(body, options);
    return result.toPromise();
  }

  /**
   * Get downtime detail by `downtime_id`.
   * Get a downtime
   * @param downtimeId ID of the downtime to fetch.
   */
  public getDowntime(
    downtimeId: number,
    options?: Configuration
  ): Promise<Downtime> {
    const result = this.api.getDowntime(downtimeId, options);
    return result.toPromise();
  }

  /**
   * Get all scheduled downtimes.
   * Get all downtimes
   * @param currentOnly Only return downtimes that are active when the request is made.
   */
  public listDowntimes(
    currentOnly?: boolean,
    options?: Configuration
  ): Promise<Array<Downtime>> {
    const result = this.api.listDowntimes(currentOnly, options);
    return result.toPromise();
  }

  /**
   * Get all downtimes for the specified monitor
   * Get all downtimes for a monitor
   * @param monitorId The id of the monitor
   */
  public listMonitorDowntimes(
    monitorId: number,
    options?: Configuration
  ): Promise<Array<Downtime>> {
    const result = this.api.listMonitorDowntimes(monitorId, options);
    return result.toPromise();
  }

  /**
   * Update a single downtime by `downtime_id`.
   * Update a downtime
   * @param downtimeId ID of the downtime to update.
   * @param body Update a downtime request body.
   */
  public updateDowntime(
    downtimeId: number,
    body: Downtime,
    options?: Configuration
  ): Promise<Downtime> {
    const result = this.api.updateDowntime(downtimeId, body, options);
    return result.toPromise();
  }
}

import { ObservableEventsApi } from "./ObservableAPI";

import {
  EventsApiRequestFactory,
  EventsApiResponseProcessor,
} from "../apis/EventsApi";
export class PromiseEventsApi {
  private api: ObservableEventsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: EventsApiRequestFactory,
    responseProcessor?: EventsApiResponseProcessor
  ) {
    this.api = new ObservableEventsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * This endpoint allows you to post events to the stream. Tag them, set priority and event aggregate them with other events.
   * Post an event
   * @param body Event request object
   */
  public createEvent(
    body: EventCreateRequest,
    options?: Configuration
  ): Promise<EventCreateResponse> {
    const result = this.api.createEvent(body, options);
    return result.toPromise();
  }

  /**
   * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
   * Get an event
   * @param eventId The ID of the event.
   */
  public getEvent(
    eventId: number,
    options?: Configuration
  ): Promise<EventResponse> {
    const result = this.api.getEvent(eventId, options);
    return result.toPromise();
  }

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
  public listEvents(
    start: number,
    end: number,
    priority?: EventPriority,
    sources?: string,
    tags?: string,
    unaggregated?: boolean,
    excludeAggregate?: boolean,
    page?: number,
    options?: Configuration
  ): Promise<EventListResponse> {
    const result = this.api.listEvents(
      start,
      end,
      priority,
      sources,
      tags,
      unaggregated,
      excludeAggregate,
      page,
      options
    );
    return result.toPromise();
  }
}

import { ObservableGCPIntegrationApi } from "./ObservableAPI";

import {
  GCPIntegrationApiRequestFactory,
  GCPIntegrationApiResponseProcessor,
} from "../apis/GCPIntegrationApi";
export class PromiseGCPIntegrationApi {
  private api: ObservableGCPIntegrationApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: GCPIntegrationApiRequestFactory,
    responseProcessor?: GCPIntegrationApiResponseProcessor
  ) {
    this.api = new ObservableGCPIntegrationApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a Datadog-GCP integration.
   * Create a GCP integration
   * @param body Create a Datadog-GCP integration.
   */
  public createGCPIntegration(
    body: GCPAccount,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.createGCPIntegration(body, options);
    return result.toPromise();
  }

  /**
   * Delete a given Datadog-GCP integration.
   * Delete a GCP integration
   * @param body Delete a given Datadog-GCP integration.
   */
  public deleteGCPIntegration(
    body: GCPAccount,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.deleteGCPIntegration(body, options);
    return result.toPromise();
  }

  /**
   * List all Datadog-GCP integrations configured in your Datadog account.
   * List all GCP integrations
   */
  public listGCPIntegration(
    options?: Configuration
  ): Promise<Array<GCPAccount>> {
    const result = this.api.listGCPIntegration(options);
    return result.toPromise();
  }

  /**
   * Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.
   * Update a GCP integration
   * @param body Update a Datadog-GCP integration.
   */
  public updateGCPIntegration(
    body: GCPAccount,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.updateGCPIntegration(body, options);
    return result.toPromise();
  }
}

import { ObservableHostsApi } from "./ObservableAPI";

import {
  HostsApiRequestFactory,
  HostsApiResponseProcessor,
} from "../apis/HostsApi";
export class PromiseHostsApi {
  private api: ObservableHostsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: HostsApiRequestFactory,
    responseProcessor?: HostsApiResponseProcessor
  ) {
    this.api = new ObservableHostsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.
   * Get the total number of active hosts
   * @param from Number of seconds from which you want to get total number of active hosts.
   */
  public getHostTotals(
    from?: number,
    options?: Configuration
  ): Promise<HostTotals> {
    const result = this.api.getHostTotals(from, options);
    return result.toPromise();
  }

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
  public listHosts(
    filter?: string,
    sortField?: string,
    sortDir?: string,
    start?: number,
    count?: number,
    from?: number,
    includeMutedHostsData?: boolean,
    includeHostsMetadata?: boolean,
    options?: Configuration
  ): Promise<HostListResponse> {
    const result = this.api.listHosts(
      filter,
      sortField,
      sortDir,
      start,
      count,
      from,
      includeMutedHostsData,
      includeHostsMetadata,
      options
    );
    return result.toPromise();
  }

  /**
   * Mute a host.
   * Mute a host
   * @param hostName Name of the host to mute.
   * @param body Mute a host request body.
   */
  public muteHost(
    hostName: string,
    body: HostMuteSettings,
    options?: Configuration
  ): Promise<HostMuteResponse> {
    const result = this.api.muteHost(hostName, body, options);
    return result.toPromise();
  }

  /**
   * Unmutes a host. This endpoint takes no JSON arguments.
   * Unmute a host
   * @param hostName Name of the host to unmute.
   */
  public unmuteHost(
    hostName: string,
    options?: Configuration
  ): Promise<HostMuteResponse> {
    const result = this.api.unmuteHost(hostName, options);
    return result.toPromise();
  }
}

import { ObservableIPRangesApi } from "./ObservableAPI";

import {
  IPRangesApiRequestFactory,
  IPRangesApiResponseProcessor,
} from "../apis/IPRangesApi";
export class PromiseIPRangesApi {
  private api: ObservableIPRangesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: IPRangesApiRequestFactory,
    responseProcessor?: IPRangesApiResponseProcessor
  ) {
    this.api = new ObservableIPRangesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Get information about Datadog IP ranges.
   * List IP Ranges
   */
  public getIPRanges(options?: Configuration): Promise<IPRanges> {
    const result = this.api.getIPRanges(options);
    return result.toPromise();
  }
}

import { ObservableKeyManagementApi } from "./ObservableAPI";

import {
  KeyManagementApiRequestFactory,
  KeyManagementApiResponseProcessor,
} from "../apis/KeyManagementApi";
export class PromiseKeyManagementApi {
  private api: ObservableKeyManagementApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: KeyManagementApiRequestFactory,
    responseProcessor?: KeyManagementApiResponseProcessor
  ) {
    this.api = new ObservableKeyManagementApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Creates an API key with a given name.
   * Create an API key
   * @param body
   */
  public createAPIKey(
    body: ApiKey,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    const result = this.api.createAPIKey(body, options);
    return result.toPromise();
  }

  /**
   * Create an application key with a given name.
   * Create an application key
   * @param body
   */
  public createApplicationKey(
    body: ApplicationKey,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const result = this.api.createApplicationKey(body, options);
    return result.toPromise();
  }

  /**
   * Delete a given API key.
   * Delete an API key
   * @param key The specific API key you are working with.
   */
  public deleteAPIKey(
    key: string,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    const result = this.api.deleteAPIKey(key, options);
    return result.toPromise();
  }

  /**
   * Delete a given application key.
   * Delete an application key
   * @param key The specific APP key you are working with.
   */
  public deleteApplicationKey(
    key: string,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const result = this.api.deleteApplicationKey(key, options);
    return result.toPromise();
  }

  /**
   * Get a given API key.
   * Get API key
   * @param key The specific API key you are working with.
   */
  public getAPIKey(
    key: string,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    const result = this.api.getAPIKey(key, options);
    return result.toPromise();
  }

  /**
   * Get a given application key.
   * Get an application key
   * @param key The specific APP key you are working with.
   */
  public getApplicationKey(
    key: string,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const result = this.api.getApplicationKey(key, options);
    return result.toPromise();
  }

  /**
   * Get all API keys available for your account.
   * Get all API keys
   */
  public listAPIKeys(options?: Configuration): Promise<ApiKeyListResponse> {
    const result = this.api.listAPIKeys(options);
    return result.toPromise();
  }

  /**
   * Get all application keys available for your Datadog account.
   * Get all application keys
   */
  public listApplicationKeys(
    options?: Configuration
  ): Promise<ApplicationKeyListResponse> {
    const result = this.api.listApplicationKeys(options);
    return result.toPromise();
  }

  /**
   * Edit an API key name.
   * Edit an API key
   * @param key The specific API key you are working with.
   * @param body
   */
  public updateAPIKey(
    key: string,
    body: ApiKey,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    const result = this.api.updateAPIKey(key, body, options);
    return result.toPromise();
  }

  /**
   * Edit an application key name.
   * Edit an application key
   * @param key The specific APP key you are working with.
   * @param body
   */
  public updateApplicationKey(
    key: string,
    body: ApplicationKey,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const result = this.api.updateApplicationKey(key, body, options);
    return result.toPromise();
  }
}

import { ObservableLogsApi } from "./ObservableAPI";

import {
  LogsApiRequestFactory,
  LogsApiResponseProcessor,
} from "../apis/LogsApi";
export class PromiseLogsApi {
  private api: ObservableLogsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsApiRequestFactory,
    responseProcessor?: LogsApiResponseProcessor
  ) {
    this.api = new ObservableLogsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
   * Search logs
   * @param body Logs filter
   */
  public listLogs(
    body: LogsListRequest,
    options?: Configuration
  ): Promise<LogsListResponse> {
    const result = this.api.listLogs(body, options);
    return result.toPromise();
  }

  /**
   * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 200: OK - 400: Bad request (likely an issue in the payload formatting) - 403: Permission issue (likely using an invalid API Key) - 413: Payload too large (batch is above 5MB uncompressed) - 5xx: Internal error, request should be retried after some time
   * Send logs
   * @param body Log to send (JSON format).
   * @param contentEncoding HTTP header used to compress the media-type.
   * @param ddtags Log tags can be passed as query parameters with &#x60;text/plain&#x60; content type.
   */
  public submitLog(
    body: Array<HTTPLogItem>,
    contentEncoding?: ContentEncoding,
    ddtags?: string,
    options?: Configuration
  ): Promise<any> {
    const result = this.api.submitLog(body, contentEncoding, ddtags, options);
    return result.toPromise();
  }
}

import { ObservableLogsIndexesApi } from "./ObservableAPI";

import {
  LogsIndexesApiRequestFactory,
  LogsIndexesApiResponseProcessor,
} from "../apis/LogsIndexesApi";
export class PromiseLogsIndexesApi {
  private api: ObservableLogsIndexesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsIndexesApiRequestFactory,
    responseProcessor?: LogsIndexesApiResponseProcessor
  ) {
    this.api = new ObservableLogsIndexesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Creates a new index. Returns the Index object passed in the request body when the request is successful.
   * Create an index
   * @param body Object containing the new index.
   */
  public createLogsIndex(
    body: LogsIndex,
    options?: Configuration
  ): Promise<LogsIndex> {
    const result = this.api.createLogsIndex(body, options);
    return result.toPromise();
  }

  /**
   * Get one log index from your organization. This endpoint takes no JSON arguments.
   * Get an index
   * @param name Name of the log index.
   */
  public getLogsIndex(
    name: string,
    options?: Configuration
  ): Promise<LogsIndex> {
    const result = this.api.getLogsIndex(name, options);
    return result.toPromise();
  }

  /**
   * Get the current order of your log indexes. This endpoint takes no JSON arguments.
   * Get indexes order
   */
  public getLogsIndexOrder(options?: Configuration): Promise<LogsIndexesOrder> {
    const result = this.api.getLogsIndexOrder(options);
    return result.toPromise();
  }

  /**
   * The Index object describes the configuration of a log index. This endpoint returns an array of the `LogIndex` objects of your organization.
   * Get all indexes
   */
  public listLogIndexes(
    options?: Configuration
  ): Promise<LogsIndexListResponse> {
    const result = this.api.listLogIndexes(options);
    return result.toPromise();
  }

  /**
   * Update an index as identified by its name. Returns the Index object passed in the request body when the request is successful.  Using the `PUT` method updates your index’s configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
   * Update an index
   * @param name Name of the log index.
   * @param body Object containing the new &#x60;LogsIndexUpdateRequest&#x60;.
   */
  public updateLogsIndex(
    name: string,
    body: LogsIndexUpdateRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    const result = this.api.updateLogsIndex(name, body, options);
    return result.toPromise();
  }

  /**
   * This endpoint updates the index order of your organization. It returns the index order object passed in the request body when the request is successful.
   * Update indexes order
   * @param body Object containing the new ordered list of index names
   */
  public updateLogsIndexOrder(
    body: LogsIndexesOrder,
    options?: Configuration
  ): Promise<LogsIndexesOrder> {
    const result = this.api.updateLogsIndexOrder(body, options);
    return result.toPromise();
  }
}

import { ObservableLogsPipelinesApi } from "./ObservableAPI";

import {
  LogsPipelinesApiRequestFactory,
  LogsPipelinesApiResponseProcessor,
} from "../apis/LogsPipelinesApi";
export class PromiseLogsPipelinesApi {
  private api: ObservableLogsPipelinesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsPipelinesApiRequestFactory,
    responseProcessor?: LogsPipelinesApiResponseProcessor
  ) {
    this.api = new ObservableLogsPipelinesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a pipeline in your organization.
   * Create a pipeline
   * @param body Definition of the new pipeline.
   */
  public createLogsPipeline(
    body: LogsPipeline,
    options?: Configuration
  ): Promise<LogsPipeline> {
    const result = this.api.createLogsPipeline(body, options);
    return result.toPromise();
  }

  /**
   * Delete a given pipeline from your organization. This endpoint takes no JSON arguments.
   * Delete a pipeline
   * @param pipelineId ID of the pipeline to delete.
   */
  public deleteLogsPipeline(
    pipelineId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteLogsPipeline(pipelineId, options);
    return result.toPromise();
  }

  /**
   * Get a specific pipeline from your organization. This endpoint takes no JSON arguments.
   * Get a pipeline
   * @param pipelineId ID of the pipeline to get.
   */
  public getLogsPipeline(
    pipelineId: string,
    options?: Configuration
  ): Promise<LogsPipeline> {
    const result = this.api.getLogsPipeline(pipelineId, options);
    return result.toPromise();
  }

  /**
   * Get the current order of your pipelines. This endpoint takes no JSON arguments.
   * Get pipeline order
   */
  public getLogsPipelineOrder(
    options?: Configuration
  ): Promise<LogsPipelinesOrder> {
    const result = this.api.getLogsPipelineOrder(options);
    return result.toPromise();
  }

  /**
   * Get all pipelines from your organization. This endpoint takes no JSON arguments.
   * Get all pipelines
   */
  public listLogsPipelines(
    options?: Configuration
  ): Promise<Array<LogsPipeline>> {
    const result = this.api.listLogsPipelines(options);
    return result.toPromise();
  }

  /**
   * Update a given pipeline configuration to change it’s processors or their order.  **Note**: Using this method updates your pipeline configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
   * Update a pipeline
   * @param pipelineId ID of the pipeline to delete.
   * @param body New definition of the pipeline.
   */
  public updateLogsPipeline(
    pipelineId: string,
    body: LogsPipeline,
    options?: Configuration
  ): Promise<LogsPipeline> {
    const result = this.api.updateLogsPipeline(pipelineId, body, options);
    return result.toPromise();
  }

  /**
   * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change the structure and content of the data processed by other pipelines and their processors.  **Note**: Using the `PUT` method updates your pipeline order by replacing your current order with the new one sent to your Datadog organization.
   * Update pipeline order
   * @param body Object containing the new ordered list of pipeline IDs.
   */
  public updateLogsPipelineOrder(
    body: LogsPipelinesOrder,
    options?: Configuration
  ): Promise<LogsPipelinesOrder> {
    const result = this.api.updateLogsPipelineOrder(body, options);
    return result.toPromise();
  }
}

import { ObservableMetricsApi } from "./ObservableAPI";

import {
  MetricsApiRequestFactory,
  MetricsApiResponseProcessor,
} from "../apis/MetricsApi";
export class PromiseMetricsApi {
  private api: ObservableMetricsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: MetricsApiRequestFactory,
    responseProcessor?: MetricsApiResponseProcessor
  ) {
    this.api = new ObservableMetricsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Get metadata about a specific metric.
   * Get metric metadata
   * @param metricName Name of the metric for which to get metadata.
   */
  public getMetricMetadata(
    metricName: string,
    options?: Configuration
  ): Promise<MetricMetadata> {
    const result = this.api.getMetricMetadata(metricName, options);
    return result.toPromise();
  }

  /**
   * Get the list of actively reporting metrics from a given time until now.
   * Get active metrics list
   * @param from Seconds since the Unix epoch.
   * @param host Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag.
   * @param tagFilter Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
   */
  public listActiveMetrics(
    from: number,
    host?: string,
    tagFilter?: string,
    options?: Configuration
  ): Promise<MetricsListResponse> {
    const result = this.api.listActiveMetrics(from, host, tagFilter, options);
    return result.toPromise();
  }

  /**
   * Search for metrics from the last 24 hours in Datadog.
   * Search metrics
   * @param q Query string to search metrics upon. Must be prefixed with &#x60;metrics:&#x60;.
   */
  public listMetrics(
    q: string,
    options?: Configuration
  ): Promise<MetricSearchResponse> {
    const result = this.api.listMetrics(q, options);
    return result.toPromise();
  }

  /**
   * Query timeseries points.
   * Query timeseries points
   * @param from Start of the queried time period, seconds since the Unix epoch.
   * @param to End of the queried time period, seconds since the Unix epoch.
   * @param query Query string.
   */
  public queryMetrics(
    from: number,
    to: number,
    query: string,
    options?: Configuration
  ): Promise<MetricsQueryResponse> {
    const result = this.api.queryMetrics(from, to, query, options);
    return result.toPromise();
  }

  /**
   * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards. The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).  If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:  - 64 bits for the timestamp - 32 bits for the value - 20 bytes for the metric names - 50 bytes for the timeseries - The full payload is approximately 100 bytes. However, with the DogStatsD API, compression is applied, which reduces the payload size.
   * Submit metrics
   * @param body
   */
  public submitMetrics(
    body: MetricsPayload,
    options?: Configuration
  ): Promise<IntakePayloadAccepted> {
    const result = this.api.submitMetrics(body, options);
    return result.toPromise();
  }

  /**
   * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
   * Edit metric metadata
   * @param metricName Name of the metric for which to edit metadata.
   * @param body New metadata.
   */
  public updateMetricMetadata(
    metricName: string,
    body: MetricMetadata,
    options?: Configuration
  ): Promise<MetricMetadata> {
    const result = this.api.updateMetricMetadata(metricName, body, options);
    return result.toPromise();
  }
}

import { ObservableMonitorsApi } from "./ObservableAPI";

import {
  MonitorsApiRequestFactory,
  MonitorsApiResponseProcessor,
} from "../apis/MonitorsApi";
export class PromiseMonitorsApi {
  private api: ObservableMonitorsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: MonitorsApiRequestFactory,
    responseProcessor?: MonitorsApiResponseProcessor
  ) {
    this.api = new ObservableMonitorsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Check if the given monitors can be deleted.
   * Check if a monitor can be deleted
   * @param monitorIds The IDs of the monitor to check.
   */
  public checkCanDeleteMonitor(
    monitorIds: Array<number>,
    options?: Configuration
  ): Promise<CheckCanDeleteMonitorResponse> {
    const result = this.api.checkCanDeleteMonitor(monitorIds, options);
    return result.toPromise();
  }

  /**
   * Create a monitor using the specified options.  #### Monitor Types  The type of monitor chosen from:  - anomaly: `query alert` - APM: `query alert` or `trace-analytics alert` - composite: `composite` - custom: `service check` - event: `event alert` - forecast: `query alert` - host: `service check` - integration: `query alert` or `service check` - live process: `process alert` - logs: `log alert` - metric: `metric alert` - network: `service check` - outlier: `query alert` - process: `service check` - rum: `rum alert` - SLO: `slo alert` - watchdog: `event alert` - event-v2: `event-v2 alert` - audit: `audit alert`  #### Query Types  **Metric Alert Query**  Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`  - `time_aggr`: avg, sum, max, min, change, or pct_change - `time_window`: `last_#m` (with `#` between 1 and 10080 depending on the monitor type) or `last_#h`(with `#` between 1 and 168 depending on the monitor type) or `last_1d`, or `last_1w` - `space_aggr`: avg, sum, min, or max - `tags`: one or more tags (comma-separated), or * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert) - `operator`: <, <=, >, >=, ==, or != - `#`: an integer or decimal number used to set the threshold  If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:  - `change_aggr` change, pct_change - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/monitor_types/#define-the-conditions) - `time_window` last\\_#m (between 1 and 2880 depending on the monitor type), last\\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2) - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago  Use this to create an outlier monitor using the following query: `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`  **Service Check Query**  Example: `\"check\".over(tags).last(count).by(group).count_by_status()`  - **`check`** name of the check, e.g. `datadog.agent.up` - **`tags`** one or more quoted tags (comma-separated), or \"*\". e.g.: `.over(\"env:prod\", \"role:db\")`; **`over`** cannot be blank. - **`count`** must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100. For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be at least 3. - **`group`** must be specified for check monitors. Per-check grouping is already explicitly known for some service checks. For example, Postgres integration monitors are tagged by `db`, `host`, and `port`, and Network monitors by `host`, `instance`, and `url`. See [Service Checks](https://docs.datadoghq.com/api/latest/service-checks/) documentation for more information.  **Event Alert Query**  Example: `events('sources:nagios status:error,warning priority:normal tags: \"string query\"').rollup(\"count\").last(\"1h\")\"`  - **`event`**, the event query string: - **`string_query`** free text query to match against event title and text. - **`sources`** event sources (comma-separated). - **`status`** event statuses (comma-separated). Valid options: error, warn, and info. - **`priority`** event priorities (comma-separated). Valid options: low, normal, all. - **`host`** event reporting host (comma-separated). - **`tags`** event tags (comma-separated). - **`excluded_tags`** excluded event tags (comma-separated). - **`rollup`** the stats roll-up method. `count` is the only supported method now. - **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.  **NOTE** Only available on US1 and EU.  **Event V2 Alert Query**  Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED, US3, and in closed beta on EU and US1.  **Process Alert Query**  Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`  - **`search`** free text search string for querying processes. Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page. - **`tags`** one or more tags (comma-separated) - **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d - **`operator`** <, <=, >, >=, ==, or != - **`#`** an integer or decimal number used to set the threshold  **Logs Alert Query**  Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`index_name`** For multi-index organizations, the log index in which the request is performed. - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **Composite Query**  Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors  * **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert. * **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor. Email notifications can be sent to specific users by using the same '@username' notation as events. * **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor. When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags. It is only available via the API and isn't visible or editable in the Datadog UI.  **SLO Alert Query**  Example: `error_budget(\"slo_id\").over(\"time_window\") operator #`  - **`slo_id`**: The alphanumeric SLO ID of the SLO you are configuring the alert for. - **`time_window`**: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`. - **`operator`**: `>=` or `>`  **Audit Alert Query**  Example: `audits(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED and in closed beta on EU, US3, and US1.
   * Create a monitor
   * @param body Create a monitor request body.
   */
  public createMonitor(
    body: Monitor,
    options?: Configuration
  ): Promise<Monitor> {
    const result = this.api.createMonitor(body, options);
    return result.toPromise();
  }

  /**
   * Delete the specified monitor
   * Delete a monitor
   * @param monitorId The ID of the monitor.
   * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
   */
  public deleteMonitor(
    monitorId: number,
    force?: string,
    options?: Configuration
  ): Promise<DeletedMonitor> {
    const result = this.api.deleteMonitor(monitorId, force, options);
    return result.toPromise();
  }

  /**
   * Get details about the specified monitor from your organization.
   * Get a monitor's details
   * @param monitorId The ID of the monitor
   * @param groupStates When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
   */
  public getMonitor(
    monitorId: number,
    groupStates?: string,
    options?: Configuration
  ): Promise<Monitor> {
    const result = this.api.getMonitor(monitorId, groupStates, options);
    return result.toPromise();
  }

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
  public listMonitors(
    groupStates?: string,
    name?: string,
    tags?: string,
    monitorTags?: string,
    withDowntimes?: boolean,
    idOffset?: number,
    page?: number,
    pageSize?: number,
    options?: Configuration
  ): Promise<Array<Monitor>> {
    const result = this.api.listMonitors(
      groupStates,
      name,
      tags,
      monitorTags,
      withDowntimes,
      idOffset,
      page,
      pageSize,
      options
    );
    return result.toPromise();
  }

  /**
   * Search and filter your monitor groups details.
   * Monitors group search
   * @param query After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more.  The query can contain any number of space-separated monitor attributes, for instance &#x60;query&#x3D;\&quot;type:metric status:alert\&quot;&#x60;.  [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage_monitor/#find-the-monitors
   * @param page Page to start paginating from.
   * @param perPage Number of monitors to return per page.
   * @param sort String for sort order, composed of field and sort order separate by a comma, e.g. &#x60;name,asc&#x60;. Supported sort directions: &#x60;asc&#x60;, &#x60;desc&#x60;. Supported fields:  * &#x60;name&#x60; * &#x60;status&#x60; * &#x60;tags&#x60;
   */
  public searchMonitorGroups(
    query?: string,
    page?: number,
    perPage?: number,
    sort?: string,
    options?: Configuration
  ): Promise<MonitorGroupSearchResponse> {
    const result = this.api.searchMonitorGroups(
      query,
      page,
      perPage,
      sort,
      options
    );
    return result.toPromise();
  }

  /**
   * Search and filter your monitors details.
   * Monitors search
   * @param query After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more.  The query can contain any number of space-separated monitor attributes, for instance &#x60;query&#x3D;\&quot;type:metric status:alert\&quot;&#x60;.  [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage_monitor/#find-the-monitors
   * @param page Page to start paginating from.
   * @param perPage Number of monitors to return per page.
   * @param sort String for sort order, composed of field and sort order separate by a comma, e.g. &#x60;name,asc&#x60;. Supported sort directions: &#x60;asc&#x60;, &#x60;desc&#x60;. Supported fields:  * &#x60;name&#x60; * &#x60;status&#x60; * &#x60;tags&#x60;
   */
  public searchMonitors(
    query?: string,
    page?: number,
    perPage?: number,
    sort?: string,
    options?: Configuration
  ): Promise<MonitorSearchResponse> {
    const result = this.api.searchMonitors(query, page, perPage, sort, options);
    return result.toPromise();
  }

  /**
   * Edit the specified monitor.
   * Edit a monitor
   * @param monitorId The ID of the monitor.
   * @param body Edit a monitor request body.
   */
  public updateMonitor(
    monitorId: number,
    body: MonitorUpdateRequest,
    options?: Configuration
  ): Promise<Monitor> {
    const result = this.api.updateMonitor(monitorId, body, options);
    return result.toPromise();
  }

  /**
   * Validate the monitor provided in the request.
   * Validate a monitor
   * @param body Monitor request object
   */
  public validateMonitor(body: Monitor, options?: Configuration): Promise<any> {
    const result = this.api.validateMonitor(body, options);
    return result.toPromise();
  }
}

import { ObservableNotebooksApi } from "./ObservableAPI";

import {
  NotebooksApiRequestFactory,
  NotebooksApiResponseProcessor,
} from "../apis/NotebooksApi";
export class PromiseNotebooksApi {
  private api: ObservableNotebooksApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: NotebooksApiRequestFactory,
    responseProcessor?: NotebooksApiResponseProcessor
  ) {
    this.api = new ObservableNotebooksApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a notebook using the specified options.
   * Create a notebook
   * @param body The JSON description of the notebook you want to create.
   */
  public createNotebook(
    body: NotebookCreateRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    const result = this.api.createNotebook(body, options);
    return result.toPromise();
  }

  /**
   * Delete a notebook using the specified ID.
   * Delete a notebook
   * @param notebookId Unique ID, assigned when you create the notebook.
   */
  public deleteNotebook(
    notebookId: number,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteNotebook(notebookId, options);
    return result.toPromise();
  }

  /**
   * Get a notebook using the specified notebook ID.
   * Get a notebook
   * @param notebookId Unique ID, assigned when you create the notebook.
   */
  public getNotebook(
    notebookId: number,
    options?: Configuration
  ): Promise<NotebookResponse> {
    const result = this.api.getNotebook(notebookId, options);
    return result.toPromise();
  }

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
  public listNotebooks(
    authorHandle?: string,
    excludeAuthorHandle?: string,
    start?: number,
    count?: number,
    sortField?: string,
    sortDir?: string,
    query?: string,
    includeCells?: boolean,
    options?: Configuration
  ): Promise<NotebooksResponse> {
    const result = this.api.listNotebooks(
      authorHandle,
      excludeAuthorHandle,
      start,
      count,
      sortField,
      sortDir,
      query,
      includeCells,
      options
    );
    return result.toPromise();
  }

  /**
   * Update a notebook using the specified ID.
   * Update a notebook
   * @param notebookId Unique ID, assigned when you create the notebook.
   * @param body Update notebook request body.
   */
  public updateNotebook(
    notebookId: number,
    body: NotebookUpdateRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    const result = this.api.updateNotebook(notebookId, body, options);
    return result.toPromise();
  }
}

import { ObservableOrganizationsApi } from "./ObservableAPI";

import {
  OrganizationsApiRequestFactory,
  OrganizationsApiResponseProcessor,
} from "../apis/OrganizationsApi";
export class PromiseOrganizationsApi {
  private api: ObservableOrganizationsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: OrganizationsApiRequestFactory,
    responseProcessor?: OrganizationsApiResponseProcessor
  ) {
    this.api = new ObservableOrganizationsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `pi_key.key`, and `application_key.hash` provided in the response.
   * Create a child organization
   * @param body Organization object that needs to be created
   */
  public createChildOrg(
    body: OrganizationCreateBody,
    options?: Configuration
  ): Promise<OrganizationCreateResponse> {
    const result = this.api.createChildOrg(body, options);
    return result.toPromise();
  }

  /**
   * Get organization information.
   * Get organization information
   * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
   */
  public getOrg(
    publicId: string,
    options?: Configuration
  ): Promise<OrganizationResponse> {
    const result = this.api.getOrg(publicId, options);
    return result.toPromise();
  }

  /**
   * List your managed organizations.
   * List your managed organizations
   */
  public listOrgs(options?: Configuration): Promise<OrganizationListResponse> {
    const result = this.api.listOrgs(options);
    return result.toPromise();
  }

  /**
   * Update your organization.
   * Update your organization
   * @param publicId The &#x60;public_id&#x60; of the organization you are operating within.
   * @param body
   */
  public updateOrg(
    publicId: string,
    body: Organization,
    options?: Configuration
  ): Promise<OrganizationResponse> {
    const result = this.api.updateOrg(publicId, body, options);
    return result.toPromise();
  }

  /**
   * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
   * Upload IdP metadata
   * @param publicId The &#x60;public_id&#x60; of the organization you are operating with
   * @param idpFile The path to the XML metadata file you wish to upload.
   */
  public uploadIdPForOrg(
    publicId: string,
    idpFile: HttpFile,
    options?: Configuration
  ): Promise<IdpResponse> {
    const result = this.api.uploadIdPForOrg(publicId, idpFile, options);
    return result.toPromise();
  }
}

import { ObservablePagerDutyIntegrationApi } from "./ObservableAPI";

import {
  PagerDutyIntegrationApiRequestFactory,
  PagerDutyIntegrationApiResponseProcessor,
} from "../apis/PagerDutyIntegrationApi";
export class PromisePagerDutyIntegrationApi {
  private api: ObservablePagerDutyIntegrationApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: PagerDutyIntegrationApiRequestFactory,
    responseProcessor?: PagerDutyIntegrationApiResponseProcessor
  ) {
    this.api = new ObservablePagerDutyIntegrationApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a new service object in the PagerDuty integration.
   * Create a new service object
   * @param body Create a new service object request body.
   */
  public createPagerDutyIntegrationService(
    body: PagerDutyService,
    options?: Configuration
  ): Promise<PagerDutyServiceName> {
    const result = this.api.createPagerDutyIntegrationService(body, options);
    return result.toPromise();
  }

  /**
   * Delete a single service object in the Datadog-PagerDuty integration.
   * Delete a single service object
   * @param serviceName The service name
   */
  public deletePagerDutyIntegrationService(
    serviceName: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deletePagerDutyIntegrationService(
      serviceName,
      options
    );
    return result.toPromise();
  }

  /**
   * Get service name in the Datadog-PagerDuty integration.
   * Get a single service object
   * @param serviceName The service name.
   */
  public getPagerDutyIntegrationService(
    serviceName: string,
    options?: Configuration
  ): Promise<PagerDutyServiceName> {
    const result = this.api.getPagerDutyIntegrationService(
      serviceName,
      options
    );
    return result.toPromise();
  }

  /**
   * Update a single service object in the Datadog-PagerDuty integration.
   * Update a single service object
   * @param serviceName The service name
   * @param body Update an existing service object request body.
   */
  public updatePagerDutyIntegrationService(
    serviceName: string,
    body: PagerDutyServiceKey,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.updatePagerDutyIntegrationService(
      serviceName,
      body,
      options
    );
    return result.toPromise();
  }
}

import { ObservableServiceChecksApi } from "./ObservableAPI";

import {
  ServiceChecksApiRequestFactory,
  ServiceChecksApiResponseProcessor,
} from "../apis/ServiceChecksApi";
export class PromiseServiceChecksApi {
  private api: ObservableServiceChecksApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceChecksApiRequestFactory,
    responseProcessor?: ServiceChecksApiResponseProcessor
  ) {
    this.api = new ObservableServiceChecksApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Submit a list of Service Checks.  **Note**: A valid API key is required.
   * Submit a Service Check
   * @param body Service Check request body.
   */
  public submitServiceCheck(
    body: Array<ServiceCheck>,
    options?: Configuration
  ): Promise<IntakePayloadAccepted> {
    const result = this.api.submitServiceCheck(body, options);
    return result.toPromise();
  }
}

import { ObservableServiceLevelObjectiveCorrectionsApi } from "./ObservableAPI";

import {
  ServiceLevelObjectiveCorrectionsApiRequestFactory,
  ServiceLevelObjectiveCorrectionsApiResponseProcessor,
} from "../apis/ServiceLevelObjectiveCorrectionsApi";
export class PromiseServiceLevelObjectiveCorrectionsApi {
  private api: ObservableServiceLevelObjectiveCorrectionsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceLevelObjectiveCorrectionsApiRequestFactory,
    responseProcessor?: ServiceLevelObjectiveCorrectionsApiResponseProcessor
  ) {
    this.api = new ObservableServiceLevelObjectiveCorrectionsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create an SLO Correction
   * Create an SLO correction
   * @param body Create an SLO Correction
   */
  public createSLOCorrection(
    body: SLOCorrectionCreateRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    const result = this.api.createSLOCorrection(body, options);
    return result.toPromise();
  }

  /**
   * Permanently delete the specified SLO correction object
   * Delete an SLO correction
   * @param sloCorrectionId The ID of the SLO correction object
   */
  public deleteSLOCorrection(
    sloCorrectionId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteSLOCorrection(sloCorrectionId, options);
    return result.toPromise();
  }

  /**
   * Get an SLO correction
   * Get an SLO correction for an SLO
   * @param sloCorrectionId The ID of the SLO correction object
   */
  public getSLOCorrection(
    sloCorrectionId: string,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    const result = this.api.getSLOCorrection(sloCorrectionId, options);
    return result.toPromise();
  }

  /**
   * Get all Service Level Objective corrections
   * Get all SLO corrections
   */
  public listSLOCorrection(
    options?: Configuration
  ): Promise<SLOCorrectionListResponse> {
    const result = this.api.listSLOCorrection(options);
    return result.toPromise();
  }

  /**
   * Update the specified SLO correction object object
   * Update an SLO correction
   * @param sloCorrectionId The ID of the SLO correction object
   * @param body The edited SLO correction object.
   */
  public updateSLOCorrection(
    sloCorrectionId: string,
    body: SLOCorrectionUpdateRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    const result = this.api.updateSLOCorrection(sloCorrectionId, body, options);
    return result.toPromise();
  }
}

import { ObservableServiceLevelObjectivesApi } from "./ObservableAPI";

import {
  ServiceLevelObjectivesApiRequestFactory,
  ServiceLevelObjectivesApiResponseProcessor,
} from "../apis/ServiceLevelObjectivesApi";
export class PromiseServiceLevelObjectivesApi {
  private api: ObservableServiceLevelObjectivesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceLevelObjectivesApiRequestFactory,
    responseProcessor?: ServiceLevelObjectivesApiResponseProcessor
  ) {
    this.api = new ObservableServiceLevelObjectivesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
   * Check if SLOs can be safely deleted
   * @param ids A comma separated list of the IDs of the service level objectives objects.
   */
  public checkCanDeleteSLO(
    ids: string,
    options?: Configuration
  ): Promise<CheckCanDeleteSLOResponse> {
    const result = this.api.checkCanDeleteSLO(ids, options);
    return result.toPromise();
  }

  /**
   * Create a service level objective object.
   * Create an SLO object
   * @param body Service level objective request object.
   */
  public createSLO(
    body: ServiceLevelObjectiveRequest,
    options?: Configuration
  ): Promise<SLOListResponse> {
    const result = this.api.createSLO(body, options);
    return result.toPromise();
  }

  /**
   * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
   * Delete an SLO
   * @param sloId The ID of the service level objective.
   * @param force Delete the monitor even if it&#39;s referenced by other resources (e.g. SLO, composite monitor).
   */
  public deleteSLO(
    sloId: string,
    force?: string,
    options?: Configuration
  ): Promise<SLODeleteResponse> {
    const result = this.api.deleteSLO(sloId, force, options);
    return result.toPromise();
  }

  /**
   * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
   * Bulk Delete SLO Timeframes
   * @param body Delete multiple service level objective objects request body.
   */
  public deleteSLOTimeframeInBulk(
    body: { [key: string]: Array<SLOTimeframe> },
    options?: Configuration
  ): Promise<SLOBulkDeleteResponse> {
    const result = this.api.deleteSLOTimeframeInBulk(body, options);
    return result.toPromise();
  }

  /**
   * Get a service level objective object.
   * Get an SLO's details
   * @param sloId The ID of the service level objective object.
   * @param withConfiguredAlertIds Get the IDs of SLO monitors that reference this SLO.
   */
  public getSLO(
    sloId: string,
    withConfiguredAlertIds?: boolean,
    options?: Configuration
  ): Promise<SLOResponse> {
    const result = this.api.getSLO(sloId, withConfiguredAlertIds, options);
    return result.toPromise();
  }

  /**
   * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
   * Get an SLO's history
   * @param sloId The ID of the service level objective object.
   * @param fromTs The &#x60;from&#x60; timestamp for the query window in epoch seconds.
   * @param toTs The &#x60;to&#x60; timestamp for the query window in epoch seconds.
   * @param target The SLO target. If &#x60;target&#x60; is passed in, the response will include the remaining error budget and a timeframe value of &#x60;custom&#x60;.
   */
  public getSLOHistory(
    sloId: string,
    fromTs: number,
    toTs: number,
    target?: number,
    options?: Configuration
  ): Promise<SLOHistoryResponse> {
    const result = this.api.getSLOHistory(sloId, fromTs, toTs, target, options);
    return result.toPromise();
  }

  /**
   * Get a list of service level objective objects for your organization.
   * Get all SLOs
   * @param ids A comma separated list of the IDs of the service level objectives objects.
   * @param query The query string to filter results based on SLO names.
   * @param tagsQuery The query string to filter results based on a single SLO tag.
   * @param metricsQuery The query string to filter results based on SLO numerator and denominator.
   * @param limit The number of SLOs to return in the response.
   * @param offset The specific offset to use as the beginning of the returned response.
   */
  public listSLOs(
    ids?: string,
    query?: string,
    tagsQuery?: string,
    metricsQuery?: string,
    limit?: number,
    offset?: number,
    options?: Configuration
  ): Promise<SLOListResponse> {
    const result = this.api.listSLOs(
      ids,
      query,
      tagsQuery,
      metricsQuery,
      limit,
      offset,
      options
    );
    return result.toPromise();
  }

  /**
   * Update the specified service level objective object.
   * Update an SLO
   * @param sloId The ID of the service level objective object.
   * @param body The edited service level objective request object.
   */
  public updateSLO(
    sloId: string,
    body: ServiceLevelObjective,
    options?: Configuration
  ): Promise<SLOListResponse> {
    const result = this.api.updateSLO(sloId, body, options);
    return result.toPromise();
  }
}

import { ObservableSlackIntegrationApi } from "./ObservableAPI";

import {
  SlackIntegrationApiRequestFactory,
  SlackIntegrationApiResponseProcessor,
} from "../apis/SlackIntegrationApi";
export class PromiseSlackIntegrationApi {
  private api: ObservableSlackIntegrationApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: SlackIntegrationApiRequestFactory,
    responseProcessor?: SlackIntegrationApiResponseProcessor
  ) {
    this.api = new ObservableSlackIntegrationApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Add a channel to your Datadog-Slack integration.
   * Create a Slack integration channel
   * @param accountName Your Slack account name.
   * @param body Payload describing Slack channel to be created
   */
  public createSlackIntegrationChannel(
    accountName: string,
    body: SlackIntegrationChannel,
    options?: Configuration
  ): Promise<SlackIntegrationChannel> {
    const result = this.api.createSlackIntegrationChannel(
      accountName,
      body,
      options
    );
    return result.toPromise();
  }

  /**
   * Get a channel configured for your Datadog-Slack integration.
   * Get a Slack integration channel
   * @param accountName Your Slack account name.
   * @param channelName The name of the Slack channel being operated on.
   */
  public getSlackIntegrationChannel(
    accountName: string,
    channelName: string,
    options?: Configuration
  ): Promise<SlackIntegrationChannel> {
    const result = this.api.getSlackIntegrationChannel(
      accountName,
      channelName,
      options
    );
    return result.toPromise();
  }

  /**
   * Get a list of all channels configured for your Datadog-Slack integration.
   * Get all channels in a Slack integration
   * @param accountName Your Slack account name.
   */
  public getSlackIntegrationChannels(
    accountName: string,
    options?: Configuration
  ): Promise<Array<SlackIntegrationChannel>> {
    const result = this.api.getSlackIntegrationChannels(accountName, options);
    return result.toPromise();
  }

  /**
   * Remove a channel from your Datadog-Slack integration.
   * Remove a Slack integration channel
   * @param accountName Your Slack account name.
   * @param channelName The name of the Slack channel being operated on.
   */
  public removeSlackIntegrationChannel(
    accountName: string,
    channelName: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.removeSlackIntegrationChannel(
      accountName,
      channelName,
      options
    );
    return result.toPromise();
  }

  /**
   * Update a channel used in your Datadog-Slack integration.
   * Update a Slack integration channel
   * @param accountName Your Slack account name.
   * @param channelName The name of the Slack channel being operated on.
   * @param body Payload describing fields and values to be updated.
   */
  public updateSlackIntegrationChannel(
    accountName: string,
    channelName: string,
    body: SlackIntegrationChannel,
    options?: Configuration
  ): Promise<SlackIntegrationChannel> {
    const result = this.api.updateSlackIntegrationChannel(
      accountName,
      channelName,
      body,
      options
    );
    return result.toPromise();
  }
}

import { ObservableSnapshotsApi } from "./ObservableAPI";

import {
  SnapshotsApiRequestFactory,
  SnapshotsApiResponseProcessor,
} from "../apis/SnapshotsApi";
export class PromiseSnapshotsApi {
  private api: ObservableSnapshotsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: SnapshotsApiRequestFactory,
    responseProcessor?: SnapshotsApiResponseProcessor
  ) {
    this.api = new ObservableSnapshotsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

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
  public getGraphSnapshot(
    start: number,
    end: number,
    metricQuery?: string,
    eventQuery?: string,
    graphDef?: string,
    title?: string,
    options?: Configuration
  ): Promise<GraphSnapshot> {
    const result = this.api.getGraphSnapshot(
      start,
      end,
      metricQuery,
      eventQuery,
      graphDef,
      title,
      options
    );
    return result.toPromise();
  }
}

import { ObservableSyntheticsApi } from "./ObservableAPI";

import {
  SyntheticsApiRequestFactory,
  SyntheticsApiResponseProcessor,
} from "../apis/SyntheticsApi";
export class PromiseSyntheticsApi {
  private api: ObservableSyntheticsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: SyntheticsApiRequestFactory,
    responseProcessor?: SyntheticsApiResponseProcessor
  ) {
    this.api = new ObservableSyntheticsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a Synthetics global variable.
   * Create a global variable
   * @param body Details of the global variable to create.
   */
  public createGlobalVariable(
    body: SyntheticsGlobalVariable,
    options?: Configuration
  ): Promise<SyntheticsGlobalVariable> {
    const result = this.api.createGlobalVariable(body, options);
    return result.toPromise();
  }

  /**
   * Create a new Synthetics private location.
   * Create a private location
   * @param body Details of the private location to create.
   */
  public createPrivateLocation(
    body: SyntheticsPrivateLocation,
    options?: Configuration
  ): Promise<SyntheticsPrivateLocationCreationResponse> {
    const result = this.api.createPrivateLocation(body, options);
    return result.toPromise();
  }

  /**
   * Create a Synthetic API test.
   * Create an API test
   * @param body Details of the test to create.
   */
  public createSyntheticsAPITest(
    body: SyntheticsAPITest,
    options?: Configuration
  ): Promise<SyntheticsAPITest> {
    const result = this.api.createSyntheticsAPITest(body, options);
    return result.toPromise();
  }

  /**
   * Create a Synthetic browser test.
   * Create a browser test
   * @param body Details of the test to create.
   */
  public createSyntheticsBrowserTest(
    body: SyntheticsBrowserTest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTest> {
    const result = this.api.createSyntheticsBrowserTest(body, options);
    return result.toPromise();
  }

  /**
   * Delete a Synthetics global variable.
   * Delete a global variable
   * @param variableId The ID of the global variable.
   */
  public deleteGlobalVariable(
    variableId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteGlobalVariable(variableId, options);
    return result.toPromise();
  }

  /**
   * Delete a Synthetics private location.
   * Delete a private location
   * @param locationId The ID of the private location.
   */
  public deletePrivateLocation(
    locationId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deletePrivateLocation(locationId, options);
    return result.toPromise();
  }

  /**
   * Delete multiple Synthetic tests by ID.
   * Delete tests
   * @param body Public ID list of the Synthetic tests to be deleted.
   */
  public deleteTests(
    body: SyntheticsDeleteTestsPayload,
    options?: Configuration
  ): Promise<SyntheticsDeleteTestsResponse> {
    const result = this.api.deleteTests(body, options);
    return result.toPromise();
  }

  /**
   * Edit a Synthetics global variable.
   * Edit a global variable
   * @param variableId The ID of the global variable.
   * @param body Details of the global variable to update.
   */
  public editGlobalVariable(
    variableId: string,
    body: SyntheticsGlobalVariable,
    options?: Configuration
  ): Promise<SyntheticsGlobalVariable> {
    const result = this.api.editGlobalVariable(variableId, body, options);
    return result.toPromise();
  }

  /**
   * Get the detailed configuration associated with a Synthetic API test.
   * Get an API test
   * @param publicId The public ID of the test to get details from.
   */
  public getAPITest(
    publicId: string,
    options?: Configuration
  ): Promise<SyntheticsAPITest> {
    const result = this.api.getAPITest(publicId, options);
    return result.toPromise();
  }

  /**
   * Get the last 50 test results summaries for a given Synthetics API test.
   * Get an API test's latest results summaries
   * @param publicId The public ID of the test for which to search results for.
   * @param fromTs Timestamp from which to start querying results.
   * @param toTs Timestamp up to which to query results.
   * @param probeDc Locations for which to query results.
   */
  public getAPITestLatestResults(
    publicId: string,
    fromTs?: number,
    toTs?: number,
    probeDc?: Array<string>,
    options?: Configuration
  ): Promise<SyntheticsGetAPITestLatestResultsResponse> {
    const result = this.api.getAPITestLatestResults(
      publicId,
      fromTs,
      toTs,
      probeDc,
      options
    );
    return result.toPromise();
  }

  /**
   * Get a specific full result from a given (API) Synthetic test.
   * Get an API test result
   * @param publicId The public ID of the API test to which the target result belongs.
   * @param resultId The ID of the result to get.
   */
  public getAPITestResult(
    publicId: string,
    resultId: string,
    options?: Configuration
  ): Promise<SyntheticsAPITestResultFull> {
    const result = this.api.getAPITestResult(publicId, resultId, options);
    return result.toPromise();
  }

  /**
   * Get the detailed configuration (including steps) associated with a Synthetic browser test.
   * Get a browser test
   * @param publicId The public ID of the test to get details from.
   */
  public getBrowserTest(
    publicId: string,
    options?: Configuration
  ): Promise<SyntheticsBrowserTest> {
    const result = this.api.getBrowserTest(publicId, options);
    return result.toPromise();
  }

  /**
   * Get the last 50 test results summaries for a given Synthetics Browser test.
   * Get a browser test's latest results summaries
   * @param publicId The public ID of the browser test for which to search results for.
   * @param fromTs Timestamp from which to start querying results.
   * @param toTs Timestamp up to which to query results.
   * @param probeDc Locations for which to query results.
   */
  public getBrowserTestLatestResults(
    publicId: string,
    fromTs?: number,
    toTs?: number,
    probeDc?: Array<string>,
    options?: Configuration
  ): Promise<SyntheticsGetBrowserTestLatestResultsResponse> {
    const result = this.api.getBrowserTestLatestResults(
      publicId,
      fromTs,
      toTs,
      probeDc,
      options
    );
    return result.toPromise();
  }

  /**
   * Get a specific full result from a given (browser) Synthetic test.
   * Get a browser test result
   * @param publicId The public ID of the browser test to which the target result belongs.
   * @param resultId The ID of the result to get.
   */
  public getBrowserTestResult(
    publicId: string,
    resultId: string,
    options?: Configuration
  ): Promise<SyntheticsBrowserTestResultFull> {
    const result = this.api.getBrowserTestResult(publicId, resultId, options);
    return result.toPromise();
  }

  /**
   * Get the detailed configuration of a global variable.
   * Get a global variable
   * @param variableId The ID of the global variable.
   */
  public getGlobalVariable(
    variableId: string,
    options?: Configuration
  ): Promise<SyntheticsGlobalVariable> {
    const result = this.api.getGlobalVariable(variableId, options);
    return result.toPromise();
  }

  /**
   * Get a Synthetics private location.
   * Get a private location
   * @param locationId The ID of the private location.
   */
  public getPrivateLocation(
    locationId: string,
    options?: Configuration
  ): Promise<SyntheticsPrivateLocation> {
    const result = this.api.getPrivateLocation(locationId, options);
    return result.toPromise();
  }

  /**
   * Get the detailed configuration associated with a Synthetics test.
   * Get a test configuration
   * @param publicId The public ID of the test to get details from.
   */
  public getTest(
    publicId: string,
    options?: Configuration
  ): Promise<SyntheticsTestDetails> {
    const result = this.api.getTest(publicId, options);
    return result.toPromise();
  }

  /**
   * Get the list of all Synthetics global variables.
   * Get all global variables
   */
  public listGlobalVariables(
    options?: Configuration
  ): Promise<SyntheticsListGlobalVariablesResponse> {
    const result = this.api.listGlobalVariables(options);
    return result.toPromise();
  }

  /**
   * Get the list of public and private locations available for Synthetic tests. No arguments required.
   * Get all locations (public and private)
   */
  public listLocations(options?: Configuration): Promise<SyntheticsLocations> {
    const result = this.api.listLocations(options);
    return result.toPromise();
  }

  /**
   * Get the list of all Synthetic tests.
   * Get the list of all tests
   */
  public listTests(
    options?: Configuration
  ): Promise<SyntheticsListTestsResponse> {
    const result = this.api.listTests(options);
    return result.toPromise();
  }

  /**
   * Trigger a set of Synthetics tests for continuous integration.
   * Trigger tests from CI/CD pipelines
   * @param body Details of the test to trigger.
   */
  public triggerCITests(
    body: SyntheticsCITestBody,
    options?: Configuration
  ): Promise<SyntheticsTriggerCITestsResponse> {
    const result = this.api.triggerCITests(body, options);
    return result.toPromise();
  }

  /**
   * Edit the configuration of a Synthetic API test.
   * Edit an API test
   * @param publicId The public ID of the test to get details from.
   * @param body New test details to be saved.
   */
  public updateAPITest(
    publicId: string,
    body: SyntheticsAPITest,
    options?: Configuration
  ): Promise<SyntheticsAPITest> {
    const result = this.api.updateAPITest(publicId, body, options);
    return result.toPromise();
  }

  /**
   * Edit the configuration of a Synthetic browser test.
   * Edit a browser test
   * @param publicId The public ID of the test to get details from.
   * @param body New test details to be saved.
   */
  public updateBrowserTest(
    publicId: string,
    body: SyntheticsBrowserTest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTest> {
    const result = this.api.updateBrowserTest(publicId, body, options);
    return result.toPromise();
  }

  /**
   * Edit a Synthetics private location.
   * Edit a private location
   * @param locationId The ID of the private location.
   * @param body Details of the private location to be updated.
   */
  public updatePrivateLocation(
    locationId: string,
    body: SyntheticsPrivateLocation,
    options?: Configuration
  ): Promise<SyntheticsPrivateLocation> {
    const result = this.api.updatePrivateLocation(locationId, body, options);
    return result.toPromise();
  }

  /**
   * Pause or start a Synthetics test by changing the status.
   * Pause or start a test
   * @param publicId The public ID of the Synthetic test to update.
   * @param body Status to set the given Synthetic test to.
   */
  public updateTestPauseStatus(
    publicId: string,
    body: SyntheticsUpdateTestPauseStatusPayload,
    options?: Configuration
  ): Promise<boolean> {
    const result = this.api.updateTestPauseStatus(publicId, body, options);
    return result.toPromise();
  }
}

import { ObservableTagsApi } from "./ObservableAPI";

import {
  TagsApiRequestFactory,
  TagsApiResponseProcessor,
} from "../apis/TagsApi";
export class PromiseTagsApi {
  private api: ObservableTagsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: TagsApiRequestFactory,
    responseProcessor?: TagsApiResponseProcessor
  ) {
    this.api = new ObservableTagsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.
   * Add tags to a host
   * @param hostName This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
   * @param body Update host tags request body.
   * @param source The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   */
  public createHostTags(
    hostName: string,
    body: HostTags,
    source?: string,
    options?: Configuration
  ): Promise<HostTags> {
    const result = this.api.createHostTags(hostName, body, source, options);
    return result.toPromise();
  }

  /**
   * This endpoint allows you to remove all user-assigned tags for a single host.
   * Remove host tags
   * @param hostName This endpoint allows you to remove all user-assigned tags for a single host.
   * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   */
  public deleteHostTags(
    hostName: string,
    source?: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteHostTags(hostName, source, options);
    return result.toPromise();
  }

  /**
   * Return the list of tags that apply to a given host.
   * Get host tags
   * @param hostName When specified, filters list of tags to those tags with the specified source.
   * @param source Source to filter.
   */
  public getHostTags(
    hostName: string,
    source?: string,
    options?: Configuration
  ): Promise<HostTags> {
    const result = this.api.getHostTags(hostName, source, options);
    return result.toPromise();
  }

  /**
   * Return a mapping of tags to hosts for your whole infrastructure.
   * Get Tags
   * @param source When specified, filters host list to those tags with the specified source.
   */
  public listHostTags(
    source?: string,
    options?: Configuration
  ): Promise<TagToHosts> {
    const result = this.api.listHostTags(source, options);
    return result.toPromise();
  }

  /**
   * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
   * Update host tags
   * @param hostName This endpoint allows you to update/replace all in an integration source with those supplied in the request.
   * @param body Add tags to host
   * @param source The source of the tags (e.g. chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value)
   */
  public updateHostTags(
    hostName: string,
    body: HostTags,
    source?: string,
    options?: Configuration
  ): Promise<HostTags> {
    const result = this.api.updateHostTags(hostName, body, source, options);
    return result.toPromise();
  }
}

import { ObservableUsageMeteringApi } from "./ObservableAPI";

import {
  UsageMeteringApiRequestFactory,
  UsageMeteringApiResponseProcessor,
} from "../apis/UsageMeteringApi";
export class PromiseUsageMeteringApi {
  private api: ObservableUsageMeteringApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: UsageMeteringApiRequestFactory,
    responseProcessor?: UsageMeteringApiResponseProcessor
  ) {
    this.api = new ObservableUsageMeteringApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Get daily custom reports.
   * Get the list of available daily custom reports
   * @param pageSize The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;.
   * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
   * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
   */
  public getDailyCustomReports(
    pageSize?: number,
    pageNumber?: number,
    sortDir?: UsageSortDirection,
    sort?: UsageSort,
    options?: Configuration
  ): Promise<UsageCustomReportsResponse> {
    const result = this.api.getDailyCustomReports(
      pageSize,
      pageNumber,
      sortDir,
      sort,
      options
    );
    return result.toPromise();
  }

  /**
   * Get hourly usage for incident management.
   * Get hourly usage for incident management
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getIncidentManagement(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageIncidentManagementResponse> {
    const result = this.api.getIncidentManagement(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for ingested spans.
   * Get hourly usage for ingested spans
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getIngestedSpans(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageIngestedSpansResponse> {
    const result = this.api.getIngestedSpans(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get monthly custom reports.
   * Get the list of available monthly custom reports
   * @param pageSize The number of files to return in the response &#x60;[default&#x3D;60].&#x60;
   * @param pageNumber The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
   * @param sortDir The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @param sort The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
   */
  public getMonthlyCustomReports(
    pageSize?: number,
    pageNumber?: number,
    sortDir?: UsageSortDirection,
    sort?: UsageSort,
    options?: Configuration
  ): Promise<UsageCustomReportsResponse> {
    const result = this.api.getMonthlyCustomReports(
      pageSize,
      pageNumber,
      sortDir,
      sort,
      options
    );
    return result.toPromise();
  }

  /**
   * Get specified daily custom reports.
   * Get specified daily custom reports
   * @param reportId Date of the report in the format &#x60;YYYY-MM-DD&#x60;.
   */
  public getSpecifiedDailyCustomReports(
    reportId: string,
    options?: Configuration
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const result = this.api.getSpecifiedDailyCustomReports(reportId, options);
    return result.toPromise();
  }

  /**
   * Get specified monthly custom reports.
   * Get specified monthly custom reports
   * @param reportId Date of the report in the format &#x60;YYYY-MM-DD&#x60;.
   */
  public getSpecifiedMonthlyCustomReports(
    reportId: string,
    options?: Configuration
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const result = this.api.getSpecifiedMonthlyCustomReports(reportId, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for analyzed logs (Security Monitoring).
   * Get hourly usage for analyzed logs
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageAnalyzedLogs(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageAnalyzedLogsResponse> {
    const result = this.api.getUsageAnalyzedLogs(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get Usage Attribution.
   * Get Usage Attribution
   * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @param fields Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types.
   * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @param sortDirection The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @param sortName The field to sort by.
   * @param includeDescendants Include child org usage in the response. Defaults to false.
   */
  public getUsageAttribution(
    startMonth: Date,
    fields: UsageAttributionSupportedMetrics,
    endMonth?: Date,
    sortDirection?: UsageSortDirection,
    sortName?: UsageAttributionSort,
    includeDescendants?: boolean,
    options?: Configuration
  ): Promise<UsageAttributionResponse> {
    const result = this.api.getUsageAttribution(
      startMonth,
      fields,
      endMonth,
      sortDirection,
      sortName,
      includeDescendants,
      options
    );
    return result.toPromise();
  }

  /**
   * Get hourly usage for audit logs.
   * Get hourly usage for audit logs
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageAuditLogs(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageAuditLogsResponse> {
    const result = this.api.getUsageAuditLogs(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get billable usage across your account.
   * Get billable usage across your account
   * @param month Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
   */
  public getUsageBillableSummary(
    month?: Date,
    options?: Configuration
  ): Promise<UsageBillableSummaryResponse> {
    const result = this.api.getUsageBillableSummary(month, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for Cloud Workload Security.
   * Get hourly usage for Cloud Workload Security
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageCWS(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageCWSResponse> {
    const result = this.api.getUsageCWS(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for Cloud Security Posture Management (CSPM).
   * Get hourly usage for CSPM
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageCloudSecurityPostureManagement(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageCloudSecurityPostureManagementResponse> {
    const result = this.api.getUsageCloudSecurityPostureManagement(
      startHr,
      endHr,
      options
    );
    return result.toPromise();
  }

  /**
   * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
   * Get hourly usage for Fargate
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public getUsageFargate(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageFargateResponse> {
    const result = this.api.getUsageFargate(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for hosts and containers.
   * Get hourly usage for hosts and containers
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public getUsageHosts(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageHostsResponse> {
    const result = this.api.getUsageHosts(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for indexed spans.
   * Get hourly usage for indexed spans
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageIndexedSpans(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageIndexedSpansResponse> {
    const result = this.api.getUsageIndexedSpans(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for IoT.
   * Get hourly usage for IoT
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageInternetOfThings(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageIoTResponse> {
    const result = this.api.getUsageInternetOfThings(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for lambda.
   * Get hourly usage for Lambda
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public getUsageLambda(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageLambdaResponse> {
    const result = this.api.getUsageLambda(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for logs.
   * Get hourly usage for Logs
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public getUsageLogs(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageLogsResponse> {
    const result = this.api.getUsageLogs(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for logs by index.
   * Get hourly usage for Logs by Index
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @param indexName Comma-separated list of log index names.
   */
  public getUsageLogsByIndex(
    startHr: Date,
    endHr?: Date,
    indexName?: Array<string>,
    options?: Configuration
  ): Promise<UsageLogsByIndexResponse> {
    const result = this.api.getUsageLogsByIndex(
      startHr,
      endHr,
      indexName,
      options
    );
    return result.toPromise();
  }

  /**
   * Get hourly usage for indexed logs by retention period.
   * Get hourly logs usage by retention
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageLogsByRetention(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageLogsByRetentionResponse> {
    const result = this.api.getUsageLogsByRetention(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for network flows.
   * Get hourly usage for Network Flows
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageNetworkFlows(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageNetworkFlowsResponse> {
    const result = this.api.getUsageNetworkFlows(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for network hosts.
   * Get hourly usage for Network Hosts
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public getUsageNetworkHosts(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageNetworkHostsResponse> {
    const result = this.api.getUsageNetworkHosts(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for profiled hosts.
   * Get hourly usage for profiled hosts
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageProfiling(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageProfilingResponse> {
    const result = this.api.getUsageProfiling(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
   * Get hourly usage for RUM Sessions
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @param type RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;.
   */
  public getUsageRumSessions(
    startHr: Date,
    endHr?: Date,
    type?: string,
    options?: Configuration
  ): Promise<UsageRumSessionsResponse> {
    const result = this.api.getUsageRumSessions(startHr, endHr, type, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for SNMP devices.
   * Get hourly usage for SNMP devices
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   */
  public getUsageSNMP(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageSNMPResponse> {
    const result = this.api.getUsageSNMP(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get usage across your multi-org account. You must have the multi-org feature enabled.
   * Get usage across your multi-org account
   * @param startMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @param endMonth Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @param includeOrgDetails Include usage summaries for each sub-org.
   */
  public getUsageSummary(
    startMonth: Date,
    endMonth?: Date,
    includeOrgDetails?: boolean,
    options?: Configuration
  ): Promise<UsageSummaryResponse> {
    const result = this.api.getUsageSummary(
      startMonth,
      endMonth,
      includeOrgDetails,
      options
    );
    return result.toPromise();
  }

  /**
   * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
   * Get hourly usage for Synthetics Checks
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public getUsageSynthetics(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageSyntheticsResponse> {
    const result = this.api.getUsageSynthetics(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
   * Get hourly usage for Synthetics API Checks
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public getUsageSyntheticsAPI(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageSyntheticsAPIResponse> {
    const result = this.api.getUsageSyntheticsAPI(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for synthetics browser checks.
   * Get hourly usage for Synthetics Browser Checks
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public getUsageSyntheticsBrowser(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageSyntheticsBrowserResponse> {
    const result = this.api.getUsageSyntheticsBrowser(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
   * Get hourly usage for custom metrics
   * @param startHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @param endHr Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   */
  public getUsageTimeseries(
    startHr: Date,
    endHr?: Date,
    options?: Configuration
  ): Promise<UsageTimeseriesResponse> {
    const result = this.api.getUsageTimeseries(startHr, endHr, options);
    return result.toPromise();
  }

  /**
   * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
   * Get all custom metrics by hourly average
   * @param month Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both)
   * @param day Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both)
   * @param names Comma-separated list of metric names.
   * @param limit Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
   * @param nextRecordId List following results with a next_record_id provided in the previous query.
   */
  public getUsageTopAvgMetrics(
    month?: Date,
    day?: Date,
    names?: Array<string>,
    limit?: number,
    nextRecordId?: string,
    options?: Configuration
  ): Promise<UsageTopAvgMetricsResponse> {
    const result = this.api.getUsageTopAvgMetrics(
      month,
      day,
      names,
      limit,
      nextRecordId,
      options
    );
    return result.toPromise();
  }
}

import { ObservableUsersApi } from "./ObservableAPI";

import {
  UsersApiRequestFactory,
  UsersApiResponseProcessor,
} from "../apis/UsersApi";
export class PromiseUsersApi {
  private api: ObservableUsersApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: UsersApiRequestFactory,
    responseProcessor?: UsersApiResponseProcessor
  ) {
    this.api = new ObservableUsersApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a user for your organization.  **Note**: Users can only be created with the admin access role if application keys belong to administrators.
   * Create a user
   * @param body User object that needs to be created.
   */
  public createUser(
    body: User,
    options?: Configuration
  ): Promise<UserResponse> {
    const result = this.api.createUser(body, options);
    return result.toPromise();
  }

  /**
   * Delete a user from an organization.  **Note**: This endpoint can only be used with application keys belonging to administrators.
   * Disable a user
   * @param userHandle The handle of the user.
   */
  public disableUser(
    userHandle: string,
    options?: Configuration
  ): Promise<UserDisableResponse> {
    const result = this.api.disableUser(userHandle, options);
    return result.toPromise();
  }

  /**
   * Get a user's details.
   * Get user details
   * @param userHandle The ID of the user.
   */
  public getUser(
    userHandle: string,
    options?: Configuration
  ): Promise<UserResponse> {
    const result = this.api.getUser(userHandle, options);
    return result.toPromise();
  }

  /**
   * List all users for your organization.
   * List all users
   */
  public listUsers(options?: Configuration): Promise<UserListResponse> {
    const result = this.api.listUsers(options);
    return result.toPromise();
  }

  /**
   * Update a user information.  **Note**: It can only be used with application keys belonging to administrators.
   * Update a user
   * @param userHandle The ID of the user.
   * @param body Description of the update.
   */
  public updateUser(
    userHandle: string,
    body: User,
    options?: Configuration
  ): Promise<UserResponse> {
    const result = this.api.updateUser(userHandle, body, options);
    return result.toPromise();
  }
}

import { ObservableWebhooksIntegrationApi } from "./ObservableAPI";

import {
  WebhooksIntegrationApiRequestFactory,
  WebhooksIntegrationApiResponseProcessor,
} from "../apis/WebhooksIntegrationApi";
export class PromiseWebhooksIntegrationApi {
  private api: ObservableWebhooksIntegrationApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: WebhooksIntegrationApiRequestFactory,
    responseProcessor?: WebhooksIntegrationApiResponseProcessor
  ) {
    this.api = new ObservableWebhooksIntegrationApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Creates an endpoint with the name `<WEBHOOK_NAME>`.
   * Create a webhooks integration
   * @param body Create a webhooks integration request body.
   */
  public createWebhooksIntegration(
    body: WebhooksIntegration,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    const result = this.api.createWebhooksIntegration(body, options);
    return result.toPromise();
  }

  /**
   * Creates an endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * Create a custom variable
   * @param body Define a custom variable request body.
   */
  public createWebhooksIntegrationCustomVariable(
    body: WebhooksIntegrationCustomVariable,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const result = this.api.createWebhooksIntegrationCustomVariable(
      body,
      options
    );
    return result.toPromise();
  }

  /**
   * Deletes the endpoint with the name `<WEBHOOK NAME>`.
   * Delete a webhook
   * @param webhookName The name of the webhook.
   */
  public deleteWebhooksIntegration(
    webhookName: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteWebhooksIntegration(webhookName, options);
    return result.toPromise();
  }

  /**
   * Deletes the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * Delete a custom variable
   * @param customVariableName The name of the custom variable.
   */
  public deleteWebhooksIntegrationCustomVariable(
    customVariableName: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteWebhooksIntegrationCustomVariable(
      customVariableName,
      options
    );
    return result.toPromise();
  }

  /**
   * Gets the content of the webhook with the name `<WEBHOOK_NAME>`.
   * Get a webhook integration
   * @param webhookName The name of the webhook.
   */
  public getWebhooksIntegration(
    webhookName: string,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    const result = this.api.getWebhooksIntegration(webhookName, options);
    return result.toPromise();
  }

  /**
   * Shows the content of the custom variable with the name `<CUSTOM_VARIABLE_NAME>`.  If the custom variable is secret, the value does not return in the response payload.
   * Get a custom variable
   * @param customVariableName The name of the custom variable.
   */
  public getWebhooksIntegrationCustomVariable(
    customVariableName: string,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const result = this.api.getWebhooksIntegrationCustomVariable(
      customVariableName,
      options
    );
    return result.toPromise();
  }

  /**
   * Updates the endpoint with the name `<WEBHOOK_NAME>`.
   * Update a webhook
   * @param webhookName The name of the webhook.
   * @param body Update an existing Datadog-Webhooks integration.
   */
  public updateWebhooksIntegration(
    webhookName: string,
    body: WebhooksIntegrationUpdateRequest,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    const result = this.api.updateWebhooksIntegration(
      webhookName,
      body,
      options
    );
    return result.toPromise();
  }

  /**
   * Updates the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * Update a custom variable
   * @param customVariableName The name of the custom variable.
   * @param body Update an existing custom variable request body.
   */
  public updateWebhooksIntegrationCustomVariable(
    customVariableName: string,
    body: WebhooksIntegrationCustomVariableUpdateRequest,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const result = this.api.updateWebhooksIntegrationCustomVariable(
      customVariableName,
      body,
      options
    );
    return result.toPromise();
  }
}
