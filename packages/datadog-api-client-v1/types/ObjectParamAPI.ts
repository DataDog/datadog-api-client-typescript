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
import { MetricContentEncoding } from "../models/MetricContentEncoding";
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
import { SyntheticsBatchDetails } from "../models/SyntheticsBatchDetails";
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
import { SyntheticsTriggerBody } from "../models/SyntheticsTriggerBody";
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
import { UsageDBMResponse } from "../models/UsageDBMResponse";
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
import { UsageRumUnitsResponse } from "../models/UsageRumUnitsResponse";
import { UsageSDSResponse } from "../models/UsageSDSResponse";
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
   * Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://docs.datadoghq.com/integrations/amazon_web_services/#setup).
   * @type AWSAccount
   * @memberof AWSIntegrationApicreateNewAWSExternalID
   */
  body: AWSAccount;
}

export interface AWSIntegrationApiDeleteAWSAccountRequest {
  /**
   * AWS request object
   * @type AWSAccountDeleteRequest
   * @memberof AWSIntegrationApideleteAWSAccount
   */
  body: AWSAccountDeleteRequest;
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

export class ObjectAWSIntegrationApi {
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
   * @param param the request object
   */
  public createAWSAccount(
    param: AWSIntegrationApiCreateAWSAccountRequest,
    options?: Configuration
  ): Promise<AWSAccountCreateResponse> {
    return this.api.createAWSAccount(param.body, options).toPromise();
  }

  /**
   * Set an AWS tag filter.
   * Set an AWS tag filter
   * @param param the request object
   */
  public createAWSTagFilter(
    param: AWSIntegrationApiCreateAWSTagFilterRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.createAWSTagFilter(param.body, options).toPromise();
  }

  /**
   * Generate a new AWS external ID for a given AWS account ID and role name pair.
   * Generate a new external ID
   * @param param the request object
   */
  public createNewAWSExternalID(
    param: AWSIntegrationApiCreateNewAWSExternalIDRequest,
    options?: Configuration
  ): Promise<AWSAccountCreateResponse> {
    return this.api.createNewAWSExternalID(param.body, options).toPromise();
  }

  /**
   * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
   * Delete an AWS integration
   * @param param the request object
   */
  public deleteAWSAccount(
    param: AWSIntegrationApiDeleteAWSAccountRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.deleteAWSAccount(param.body, options).toPromise();
  }

  /**
   * Delete a tag filtering entry.
   * Delete a tag filtering entry
   * @param param the request object
   */
  public deleteAWSTagFilter(
    param: AWSIntegrationApiDeleteAWSTagFilterRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.deleteAWSTagFilter(param.body, options).toPromise();
  }

  /**
   * List all Datadog-AWS integrations available in your Datadog organization.
   * List all AWS integrations
   * @param param the request object
   */
  public listAWSAccounts(
    param: AWSIntegrationApiListAWSAccountsRequest = {},
    options?: Configuration
  ): Promise<AWSAccountListResponse> {
    return this.api
      .listAWSAccounts(
        param.accountId,
        param.roleName,
        param.accessKeyId,
        options
      )
      .toPromise();
  }

  /**
   * Get all AWS tag filters.
   * Get all AWS tag filters
   * @param param the request object
   */
  public listAWSTagFilters(
    param: AWSIntegrationApiListAWSTagFiltersRequest,
    options?: Configuration
  ): Promise<AWSTagFilterListResponse> {
    return this.api.listAWSTagFilters(param.accountId, options).toPromise();
  }

  /**
   * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
   * List namespace rules
   * @param param the request object
   */
  public listAvailableAWSNamespaces(
    options?: Configuration
  ): Promise<Array<string>> {
    return this.api.listAvailableAWSNamespaces(options).toPromise();
  }

  /**
   * Update a Datadog-Amazon Web Services integration.
   * Update an AWS integration
   * @param param the request object
   */
  public updateAWSAccount(
    param: AWSIntegrationApiUpdateAWSAccountRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api
      .updateAWSAccount(
        param.body,
        param.accountId,
        param.roleName,
        param.accessKeyId,
        options
      )
      .toPromise();
  }
}

import { ObservableAWSLogsIntegrationApi } from "./ObservableAPI";
import {
  AWSLogsIntegrationApiRequestFactory,
  AWSLogsIntegrationApiResponseProcessor,
} from "../apis/AWSLogsIntegrationApi";

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

export class ObjectAWSLogsIntegrationApi {
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
   * @param param the request object
   */
  public checkAWSLogsLambdaAsync(
    param: AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest,
    options?: Configuration
  ): Promise<AWSLogsAsyncResponse> {
    return this.api.checkAWSLogsLambdaAsync(param.body, options).toPromise();
  }

  /**
   * Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.
   * Check permissions for log services
   * @param param the request object
   */
  public checkAWSLogsServicesAsync(
    param: AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest,
    options?: Configuration
  ): Promise<AWSLogsAsyncResponse> {
    return this.api.checkAWSLogsServicesAsync(param.body, options).toPromise();
  }

  /**
   * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
   * Add AWS Log Lambda ARN
   * @param param the request object
   */
  public createAWSLambdaARN(
    param: AWSLogsIntegrationApiCreateAWSLambdaARNRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.createAWSLambdaARN(param.body, options).toPromise();
  }

  /**
   * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
   * Delete an AWS Logs integration
   * @param param the request object
   */
  public deleteAWSLambdaARN(
    param: AWSLogsIntegrationApiDeleteAWSLambdaARNRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.deleteAWSLambdaARN(param.body, options).toPromise();
  }

  /**
   * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
   * Enable an AWS Logs integration
   * @param param the request object
   */
  public enableAWSLogServices(
    param: AWSLogsIntegrationApiEnableAWSLogServicesRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.enableAWSLogServices(param.body, options).toPromise();
  }

  /**
   * List all Datadog-AWS Logs integrations configured in your Datadog account.
   * List all AWS Logs integrations
   * @param param the request object
   */
  public listAWSLogsIntegrations(
    options?: Configuration
  ): Promise<Array<AWSLogsListResponse>> {
    return this.api.listAWSLogsIntegrations(options).toPromise();
  }

  /**
   * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
   * Get list of AWS log ready services
   * @param param the request object
   */
  public listAWSLogsServices(
    options?: Configuration
  ): Promise<Array<AWSLogsListServicesResponse>> {
    return this.api.listAWSLogsServices(options).toPromise();
  }
}

import { ObservableAuthenticationApi } from "./ObservableAPI";
import {
  AuthenticationApiRequestFactory,
  AuthenticationApiResponseProcessor,
} from "../apis/AuthenticationApi";

export class ObjectAuthenticationApi {
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
   * @param param the request object
   */
  public validate(
    options?: Configuration
  ): Promise<AuthenticationValidationResponse> {
    return this.api.validate(options).toPromise();
  }
}

import { ObservableAzureIntegrationApi } from "./ObservableAPI";
import {
  AzureIntegrationApiRequestFactory,
  AzureIntegrationApiResponseProcessor,
} from "../apis/AzureIntegrationApi";

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

export class ObjectAzureIntegrationApi {
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
   * @param param the request object
   */
  public createAzureIntegration(
    param: AzureIntegrationApiCreateAzureIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.createAzureIntegration(param.body, options).toPromise();
  }

  /**
   * Delete a given Datadog-Azure integration from your Datadog account.
   * Delete an Azure integration
   * @param param the request object
   */
  public deleteAzureIntegration(
    param: AzureIntegrationApiDeleteAzureIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.deleteAzureIntegration(param.body, options).toPromise();
  }

  /**
   * List all Datadog-Azure integrations configured in your Datadog account.
   * List all Azure integrations
   * @param param the request object
   */
  public listAzureIntegration(
    options?: Configuration
  ): Promise<Array<AzureAccount>> {
    return this.api.listAzureIntegration(options).toPromise();
  }

  /**
   * Update the defined list of host filters for a given Datadog-Azure integration.
   * Update Azure integration host filters
   * @param param the request object
   */
  public updateAzureHostFilters(
    param: AzureIntegrationApiUpdateAzureHostFiltersRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.updateAzureHostFilters(param.body, options).toPromise();
  }

  /**
   * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`. Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`, use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
   * Update an Azure integration
   * @param param the request object
   */
  public updateAzureIntegration(
    param: AzureIntegrationApiUpdateAzureIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.updateAzureIntegration(param.body, options).toPromise();
  }
}

import { ObservableDashboardListsApi } from "./ObservableAPI";
import {
  DashboardListsApiRequestFactory,
  DashboardListsApiResponseProcessor,
} from "../apis/DashboardListsApi";

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

export class ObjectDashboardListsApi {
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
   * @param param the request object
   */
  public createDashboardList(
    param: DashboardListsApiCreateDashboardListRequest,
    options?: Configuration
  ): Promise<DashboardList> {
    return this.api.createDashboardList(param.body, options).toPromise();
  }

  /**
   * Delete a dashboard list.
   * Delete a dashboard list
   * @param param the request object
   */
  public deleteDashboardList(
    param: DashboardListsApiDeleteDashboardListRequest,
    options?: Configuration
  ): Promise<DashboardListDeleteResponse> {
    return this.api.deleteDashboardList(param.listId, options).toPromise();
  }

  /**
   * Fetch an existing dashboard list's definition.
   * Get a dashboard list
   * @param param the request object
   */
  public getDashboardList(
    param: DashboardListsApiGetDashboardListRequest,
    options?: Configuration
  ): Promise<DashboardList> {
    return this.api.getDashboardList(param.listId, options).toPromise();
  }

  /**
   * Fetch all of your existing dashboard list definitions.
   * Get all dashboard lists
   * @param param the request object
   */
  public listDashboardLists(
    options?: Configuration
  ): Promise<DashboardListListResponse> {
    return this.api.listDashboardLists(options).toPromise();
  }

  /**
   * Update the name of a dashboard list.
   * Update a dashboard list
   * @param param the request object
   */
  public updateDashboardList(
    param: DashboardListsApiUpdateDashboardListRequest,
    options?: Configuration
  ): Promise<DashboardList> {
    return this.api
      .updateDashboardList(param.listId, param.body, options)
      .toPromise();
  }
}

import { ObservableDashboardsApi } from "./ObservableAPI";
import {
  DashboardsApiRequestFactory,
  DashboardsApiResponseProcessor,
} from "../apis/DashboardsApi";

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

export interface DashboardsApiDeleteDashboardsRequest {
  /**
   * Delete dashboards request body.
   * @type DashboardBulkDeleteRequest
   * @memberof DashboardsApideleteDashboards
   */
  body: DashboardBulkDeleteRequest;
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

export interface DashboardsApiRestoreDashboardsRequest {
  /**
   * Restore dashboards request body.
   * @type DashboardRestoreRequest
   * @memberof DashboardsApirestoreDashboards
   */
  body: DashboardRestoreRequest;
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

export class ObjectDashboardsApi {
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
   * @param param the request object
   */
  public createDashboard(
    param: DashboardsApiCreateDashboardRequest,
    options?: Configuration
  ): Promise<Dashboard> {
    return this.api.createDashboard(param.body, options).toPromise();
  }

  /**
   * Delete a dashboard using the specified ID.
   * Delete a dashboard
   * @param param the request object
   */
  public deleteDashboard(
    param: DashboardsApiDeleteDashboardRequest,
    options?: Configuration
  ): Promise<DashboardDeleteResponse> {
    return this.api.deleteDashboard(param.dashboardId, options).toPromise();
  }

  /**
   * Delete dashboards using the specified IDs. If there are any failures, no dashboards will be deleted (partial success is not allowed).
   * Delete dashboards
   * @param param the request object
   */
  public deleteDashboards(
    param: DashboardsApiDeleteDashboardsRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.deleteDashboards(param.body, options).toPromise();
  }

  /**
   * Get a dashboard using the specified ID.
   * Get a dashboard
   * @param param the request object
   */
  public getDashboard(
    param: DashboardsApiGetDashboardRequest,
    options?: Configuration
  ): Promise<Dashboard> {
    return this.api.getDashboard(param.dashboardId, options).toPromise();
  }

  /**
   * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
   * Get all dashboards
   * @param param the request object
   */
  public listDashboards(
    param: DashboardsApiListDashboardsRequest = {},
    options?: Configuration
  ): Promise<DashboardSummary> {
    return this.api.listDashboards(param.filterShared, options).toPromise();
  }

  /**
   * Restore dashboards using the specified IDs. If there are any failures, no dashboards will be restored (partial success is not allowed).
   * Restore deleted dashboards
   * @param param the request object
   */
  public restoreDashboards(
    param: DashboardsApiRestoreDashboardsRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.restoreDashboards(param.body, options).toPromise();
  }

  /**
   * Update a dashboard using the specified ID.
   * Update a dashboard
   * @param param the request object
   */
  public updateDashboard(
    param: DashboardsApiUpdateDashboardRequest,
    options?: Configuration
  ): Promise<Dashboard> {
    return this.api
      .updateDashboard(param.dashboardId, param.body, options)
      .toPromise();
  }
}

import { ObservableDowntimesApi } from "./ObservableAPI";
import {
  DowntimesApiRequestFactory,
  DowntimesApiResponseProcessor,
} from "../apis/DowntimesApi";

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

export class ObjectDowntimesApi {
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
   * @param param the request object
   */
  public cancelDowntime(
    param: DowntimesApiCancelDowntimeRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.cancelDowntime(param.downtimeId, options).toPromise();
  }

  /**
   * Delete all downtimes that match the scope of `X`.
   * Cancel downtimes by scope
   * @param param the request object
   */
  public cancelDowntimesByScope(
    param: DowntimesApiCancelDowntimesByScopeRequest,
    options?: Configuration
  ): Promise<CanceledDowntimesIds> {
    return this.api.cancelDowntimesByScope(param.body, options).toPromise();
  }

  /**
   * Schedule a downtime.
   * Schedule a downtime
   * @param param the request object
   */
  public createDowntime(
    param: DowntimesApiCreateDowntimeRequest,
    options?: Configuration
  ): Promise<Downtime> {
    return this.api.createDowntime(param.body, options).toPromise();
  }

  /**
   * Get downtime detail by `downtime_id`.
   * Get a downtime
   * @param param the request object
   */
  public getDowntime(
    param: DowntimesApiGetDowntimeRequest,
    options?: Configuration
  ): Promise<Downtime> {
    return this.api.getDowntime(param.downtimeId, options).toPromise();
  }

  /**
   * Get all scheduled downtimes.
   * Get all downtimes
   * @param param the request object
   */
  public listDowntimes(
    param: DowntimesApiListDowntimesRequest = {},
    options?: Configuration
  ): Promise<Array<Downtime>> {
    return this.api.listDowntimes(param.currentOnly, options).toPromise();
  }

  /**
   * Get all active downtimes for the specified monitor.
   * Get all downtimes for a monitor
   * @param param the request object
   */
  public listMonitorDowntimes(
    param: DowntimesApiListMonitorDowntimesRequest,
    options?: Configuration
  ): Promise<Array<Downtime>> {
    return this.api.listMonitorDowntimes(param.monitorId, options).toPromise();
  }

  /**
   * Update a single downtime by `downtime_id`.
   * Update a downtime
   * @param param the request object
   */
  public updateDowntime(
    param: DowntimesApiUpdateDowntimeRequest,
    options?: Configuration
  ): Promise<Downtime> {
    return this.api
      .updateDowntime(param.downtimeId, param.body, options)
      .toPromise();
  }
}

import { ObservableEventsApi } from "./ObservableAPI";
import {
  EventsApiRequestFactory,
  EventsApiResponseProcessor,
} from "../apis/EventsApi";

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

export class ObjectEventsApi {
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
   * @param param the request object
   */
  public createEvent(
    param: EventsApiCreateEventRequest,
    options?: Configuration
  ): Promise<EventCreateResponse> {
    return this.api.createEvent(param.body, options).toPromise();
  }

  /**
   * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
   * Get an event
   * @param param the request object
   */
  public getEvent(
    param: EventsApiGetEventRequest,
    options?: Configuration
  ): Promise<EventResponse> {
    return this.api.getEvent(param.eventId, options).toPromise();
  }

  /**
   * The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
   * Query the event stream
   * @param param the request object
   */
  public listEvents(
    param: EventsApiListEventsRequest,
    options?: Configuration
  ): Promise<EventListResponse> {
    return this.api
      .listEvents(
        param.start,
        param.end,
        param.priority,
        param.sources,
        param.tags,
        param.unaggregated,
        param.excludeAggregate,
        param.page,
        options
      )
      .toPromise();
  }
}

import { ObservableGCPIntegrationApi } from "./ObservableAPI";
import {
  GCPIntegrationApiRequestFactory,
  GCPIntegrationApiResponseProcessor,
} from "../apis/GCPIntegrationApi";

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

export interface GCPIntegrationApiUpdateGCPIntegrationRequest {
  /**
   * Update a Datadog-GCP integration.
   * @type GCPAccount
   * @memberof GCPIntegrationApiupdateGCPIntegration
   */
  body: GCPAccount;
}

export class ObjectGCPIntegrationApi {
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
   * @param param the request object
   */
  public createGCPIntegration(
    param: GCPIntegrationApiCreateGCPIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.createGCPIntegration(param.body, options).toPromise();
  }

  /**
   * Delete a given Datadog-GCP integration.
   * Delete a GCP integration
   * @param param the request object
   */
  public deleteGCPIntegration(
    param: GCPIntegrationApiDeleteGCPIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.deleteGCPIntegration(param.body, options).toPromise();
  }

  /**
   * List all Datadog-GCP integrations configured in your Datadog account.
   * List all GCP integrations
   * @param param the request object
   */
  public listGCPIntegration(
    options?: Configuration
  ): Promise<Array<GCPAccount>> {
    return this.api.listGCPIntegration(options).toPromise();
  }

  /**
   * Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.
   * Update a GCP integration
   * @param param the request object
   */
  public updateGCPIntegration(
    param: GCPIntegrationApiUpdateGCPIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.updateGCPIntegration(param.body, options).toPromise();
  }
}

import { ObservableHostsApi } from "./ObservableAPI";
import {
  HostsApiRequestFactory,
  HostsApiResponseProcessor,
} from "../apis/HostsApi";

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

export class ObjectHostsApi {
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
   * @param param the request object
   */
  public getHostTotals(
    param: HostsApiGetHostTotalsRequest = {},
    options?: Configuration
  ): Promise<HostTotals> {
    return this.api.getHostTotals(param.from, options).toPromise();
  }

  /**
   * This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.
   * Get all hosts for your organization
   * @param param the request object
   */
  public listHosts(
    param: HostsApiListHostsRequest = {},
    options?: Configuration
  ): Promise<HostListResponse> {
    return this.api
      .listHosts(
        param.filter,
        param.sortField,
        param.sortDir,
        param.start,
        param.count,
        param.from,
        param.includeMutedHostsData,
        param.includeHostsMetadata,
        options
      )
      .toPromise();
  }

  /**
   * Mute a host.
   * Mute a host
   * @param param the request object
   */
  public muteHost(
    param: HostsApiMuteHostRequest,
    options?: Configuration
  ): Promise<HostMuteResponse> {
    return this.api.muteHost(param.hostName, param.body, options).toPromise();
  }

  /**
   * Unmutes a host. This endpoint takes no JSON arguments.
   * Unmute a host
   * @param param the request object
   */
  public unmuteHost(
    param: HostsApiUnmuteHostRequest,
    options?: Configuration
  ): Promise<HostMuteResponse> {
    return this.api.unmuteHost(param.hostName, options).toPromise();
  }
}

import { ObservableIPRangesApi } from "./ObservableAPI";
import {
  IPRangesApiRequestFactory,
  IPRangesApiResponseProcessor,
} from "../apis/IPRangesApi";

export class ObjectIPRangesApi {
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
   * @param param the request object
   */
  public getIPRanges(options?: Configuration): Promise<IPRanges> {
    return this.api.getIPRanges(options).toPromise();
  }
}

import { ObservableKeyManagementApi } from "./ObservableAPI";
import {
  KeyManagementApiRequestFactory,
  KeyManagementApiResponseProcessor,
} from "../apis/KeyManagementApi";

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

export class ObjectKeyManagementApi {
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
   * @param param the request object
   */
  public createAPIKey(
    param: KeyManagementApiCreateAPIKeyRequest,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    return this.api.createAPIKey(param.body, options).toPromise();
  }

  /**
   * Create an application key with a given name.
   * Create an application key
   * @param param the request object
   */
  public createApplicationKey(
    param: KeyManagementApiCreateApplicationKeyRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    return this.api.createApplicationKey(param.body, options).toPromise();
  }

  /**
   * Delete a given API key.
   * Delete an API key
   * @param param the request object
   */
  public deleteAPIKey(
    param: KeyManagementApiDeleteAPIKeyRequest,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    return this.api.deleteAPIKey(param.key, options).toPromise();
  }

  /**
   * Delete a given application key.
   * Delete an application key
   * @param param the request object
   */
  public deleteApplicationKey(
    param: KeyManagementApiDeleteApplicationKeyRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    return this.api.deleteApplicationKey(param.key, options).toPromise();
  }

  /**
   * Get a given API key.
   * Get API key
   * @param param the request object
   */
  public getAPIKey(
    param: KeyManagementApiGetAPIKeyRequest,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    return this.api.getAPIKey(param.key, options).toPromise();
  }

  /**
   * Get a given application key.
   * Get an application key
   * @param param the request object
   */
  public getApplicationKey(
    param: KeyManagementApiGetApplicationKeyRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    return this.api.getApplicationKey(param.key, options).toPromise();
  }

  /**
   * Get all API keys available for your account.
   * Get all API keys
   * @param param the request object
   */
  public listAPIKeys(options?: Configuration): Promise<ApiKeyListResponse> {
    return this.api.listAPIKeys(options).toPromise();
  }

  /**
   * Get all application keys available for your Datadog account.
   * Get all application keys
   * @param param the request object
   */
  public listApplicationKeys(
    options?: Configuration
  ): Promise<ApplicationKeyListResponse> {
    return this.api.listApplicationKeys(options).toPromise();
  }

  /**
   * Edit an API key name.
   * Edit an API key
   * @param param the request object
   */
  public updateAPIKey(
    param: KeyManagementApiUpdateAPIKeyRequest,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    return this.api.updateAPIKey(param.key, param.body, options).toPromise();
  }

  /**
   * Edit an application key name.
   * Edit an application key
   * @param param the request object
   */
  public updateApplicationKey(
    param: KeyManagementApiUpdateApplicationKeyRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    return this.api
      .updateApplicationKey(param.key, param.body, options)
      .toPromise();
  }
}

import { ObservableLogsApi } from "./ObservableAPI";
import {
  LogsApiRequestFactory,
  LogsApiResponseProcessor,
} from "../apis/LogsApi";

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

export class ObjectLogsApi {
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
   * @param param the request object
   */
  public listLogs(
    param: LogsApiListLogsRequest,
    options?: Configuration
  ): Promise<LogsListResponse> {
    return this.api.listLogs(param.body, options).toPromise();
  }

  /**
   * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 200: OK - 400: Bad request (likely an issue in the payload formatting) - 403: Permission issue (likely using an invalid API Key) - 413: Payload too large (batch is above 5MB uncompressed) - 5xx: Internal error, request should be retried after some time
   * Send logs
   * @param param the request object
   */
  public submitLog(
    param: LogsApiSubmitLogRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api
      .submitLog(param.body, param.contentEncoding, param.ddtags, options)
      .toPromise();
  }
}

import { ObservableLogsIndexesApi } from "./ObservableAPI";
import {
  LogsIndexesApiRequestFactory,
  LogsIndexesApiResponseProcessor,
} from "../apis/LogsIndexesApi";

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

export class ObjectLogsIndexesApi {
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
   * @param param the request object
   */
  public createLogsIndex(
    param: LogsIndexesApiCreateLogsIndexRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    return this.api.createLogsIndex(param.body, options).toPromise();
  }

  /**
   * Get one log index from your organization. This endpoint takes no JSON arguments.
   * Get an index
   * @param param the request object
   */
  public getLogsIndex(
    param: LogsIndexesApiGetLogsIndexRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    return this.api.getLogsIndex(param.name, options).toPromise();
  }

  /**
   * Get the current order of your log indexes. This endpoint takes no JSON arguments.
   * Get indexes order
   * @param param the request object
   */
  public getLogsIndexOrder(options?: Configuration): Promise<LogsIndexesOrder> {
    return this.api.getLogsIndexOrder(options).toPromise();
  }

  /**
   * The Index object describes the configuration of a log index. This endpoint returns an array of the `LogIndex` objects of your organization.
   * Get all indexes
   * @param param the request object
   */
  public listLogIndexes(
    options?: Configuration
  ): Promise<LogsIndexListResponse> {
    return this.api.listLogIndexes(options).toPromise();
  }

  /**
   * Update an index as identified by its name. Returns the Index object passed in the request body when the request is successful.  Using the `PUT` method updates your index’s configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
   * Update an index
   * @param param the request object
   */
  public updateLogsIndex(
    param: LogsIndexesApiUpdateLogsIndexRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    return this.api
      .updateLogsIndex(param.name, param.body, options)
      .toPromise();
  }

  /**
   * This endpoint updates the index order of your organization. It returns the index order object passed in the request body when the request is successful.
   * Update indexes order
   * @param param the request object
   */
  public updateLogsIndexOrder(
    param: LogsIndexesApiUpdateLogsIndexOrderRequest,
    options?: Configuration
  ): Promise<LogsIndexesOrder> {
    return this.api.updateLogsIndexOrder(param.body, options).toPromise();
  }
}

import { ObservableLogsPipelinesApi } from "./ObservableAPI";
import {
  LogsPipelinesApiRequestFactory,
  LogsPipelinesApiResponseProcessor,
} from "../apis/LogsPipelinesApi";

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

export class ObjectLogsPipelinesApi {
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
   * @param param the request object
   */
  public createLogsPipeline(
    param: LogsPipelinesApiCreateLogsPipelineRequest,
    options?: Configuration
  ): Promise<LogsPipeline> {
    return this.api.createLogsPipeline(param.body, options).toPromise();
  }

  /**
   * Delete a given pipeline from your organization. This endpoint takes no JSON arguments.
   * Delete a pipeline
   * @param param the request object
   */
  public deleteLogsPipeline(
    param: LogsPipelinesApiDeleteLogsPipelineRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.deleteLogsPipeline(param.pipelineId, options).toPromise();
  }

  /**
   * Get a specific pipeline from your organization. This endpoint takes no JSON arguments.
   * Get a pipeline
   * @param param the request object
   */
  public getLogsPipeline(
    param: LogsPipelinesApiGetLogsPipelineRequest,
    options?: Configuration
  ): Promise<LogsPipeline> {
    return this.api.getLogsPipeline(param.pipelineId, options).toPromise();
  }

  /**
   * Get the current order of your pipelines. This endpoint takes no JSON arguments.
   * Get pipeline order
   * @param param the request object
   */
  public getLogsPipelineOrder(
    options?: Configuration
  ): Promise<LogsPipelinesOrder> {
    return this.api.getLogsPipelineOrder(options).toPromise();
  }

  /**
   * Get all pipelines from your organization. This endpoint takes no JSON arguments.
   * Get all pipelines
   * @param param the request object
   */
  public listLogsPipelines(
    options?: Configuration
  ): Promise<Array<LogsPipeline>> {
    return this.api.listLogsPipelines(options).toPromise();
  }

  /**
   * Update a given pipeline configuration to change it’s processors or their order.  **Note**: Using this method updates your pipeline configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
   * Update a pipeline
   * @param param the request object
   */
  public updateLogsPipeline(
    param: LogsPipelinesApiUpdateLogsPipelineRequest,
    options?: Configuration
  ): Promise<LogsPipeline> {
    return this.api
      .updateLogsPipeline(param.pipelineId, param.body, options)
      .toPromise();
  }

  /**
   * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change the structure and content of the data processed by other pipelines and their processors.  **Note**: Using the `PUT` method updates your pipeline order by replacing your current order with the new one sent to your Datadog organization.
   * Update pipeline order
   * @param param the request object
   */
  public updateLogsPipelineOrder(
    param: LogsPipelinesApiUpdateLogsPipelineOrderRequest,
    options?: Configuration
  ): Promise<LogsPipelinesOrder> {
    return this.api.updateLogsPipelineOrder(param.body, options).toPromise();
  }
}

import { ObservableMetricsApi } from "./ObservableAPI";
import {
  MetricsApiRequestFactory,
  MetricsApiResponseProcessor,
} from "../apis/MetricsApi";

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
  /**
   * HTTP header used to compress the media-type.
   * @type MetricContentEncoding
   * @memberof MetricsApisubmitMetrics
   */
  contentEncoding?: MetricContentEncoding;
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

export class ObjectMetricsApi {
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
   * @param param the request object
   */
  public getMetricMetadata(
    param: MetricsApiGetMetricMetadataRequest,
    options?: Configuration
  ): Promise<MetricMetadata> {
    return this.api.getMetricMetadata(param.metricName, options).toPromise();
  }

  /**
   * Get the list of actively reporting metrics from a given time until now.
   * Get active metrics list
   * @param param the request object
   */
  public listActiveMetrics(
    param: MetricsApiListActiveMetricsRequest,
    options?: Configuration
  ): Promise<MetricsListResponse> {
    return this.api
      .listActiveMetrics(param.from, param.host, param.tagFilter, options)
      .toPromise();
  }

  /**
   * Search for metrics from the last 24 hours in Datadog.
   * Search metrics
   * @param param the request object
   */
  public listMetrics(
    param: MetricsApiListMetricsRequest,
    options?: Configuration
  ): Promise<MetricSearchResponse> {
    return this.api.listMetrics(param.q, options).toPromise();
  }

  /**
   * Query timeseries points.
   * Query timeseries points
   * @param param the request object
   */
  public queryMetrics(
    param: MetricsApiQueryMetricsRequest,
    options?: Configuration
  ): Promise<MetricsQueryResponse> {
    return this.api
      .queryMetrics(param.from, param.to, param.query, options)
      .toPromise();
  }

  /**
   * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards. The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).  If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:  - 64 bits for the timestamp - 32 bits for the value - 20 bytes for the metric names - 50 bytes for the timeseries - The full payload is approximately 100 bytes. However, with the DogStatsD API, compression is applied, which reduces the payload size.
   * Submit metrics
   * @param param the request object
   */
  public submitMetrics(
    param: MetricsApiSubmitMetricsRequest,
    options?: Configuration
  ): Promise<IntakePayloadAccepted> {
    return this.api
      .submitMetrics(param.body, param.contentEncoding, options)
      .toPromise();
  }

  /**
   * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
   * Edit metric metadata
   * @param param the request object
   */
  public updateMetricMetadata(
    param: MetricsApiUpdateMetricMetadataRequest,
    options?: Configuration
  ): Promise<MetricMetadata> {
    return this.api
      .updateMetricMetadata(param.metricName, param.body, options)
      .toPromise();
  }
}

import { ObservableMonitorsApi } from "./ObservableAPI";
import {
  MonitorsApiRequestFactory,
  MonitorsApiResponseProcessor,
} from "../apis/MonitorsApi";

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
   * If this argument is set to true, then the returned data includes all current active downtimes for each monitor.
   * @type boolean
   * @memberof MonitorsApilistMonitors
   */
  withDowntimes?: boolean;
  /**
   * Use this parameter for paginating through large sets of monitors. Start with a value of zero, make a request, set the value to the last ID of result set, and then repeat until the response is empty.
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

export interface MonitorsApiSearchMonitorGroupsRequest {
  /**
   * After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more.  The query can contain any number of space-separated monitor attributes, for instance &#x60;query&#x3D;\&quot;type:metric status:alert\&quot;&#x60;.  [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage/#find-the-monitors
   * @type string
   * @memberof MonitorsApisearchMonitorGroups
   */
  query?: string;
  /**
   * Page to start paginating from.
   * @type number
   * @memberof MonitorsApisearchMonitorGroups
   */
  page?: number;
  /**
   * Number of monitors to return per page.
   * @type number
   * @memberof MonitorsApisearchMonitorGroups
   */
  perPage?: number;
  /**
   * String for sort order, composed of field and sort order separate by a comma, e.g. &#x60;name,asc&#x60;. Supported sort directions: &#x60;asc&#x60;, &#x60;desc&#x60;. Supported fields:  * &#x60;name&#x60; * &#x60;status&#x60; * &#x60;tags&#x60;
   * @type string
   * @memberof MonitorsApisearchMonitorGroups
   */
  sort?: string;
}

export interface MonitorsApiSearchMonitorsRequest {
  /**
   * After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more.  The query can contain any number of space-separated monitor attributes, for instance &#x60;query&#x3D;\&quot;type:metric status:alert\&quot;&#x60;.  [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage/#find-the-monitors
   * @type string
   * @memberof MonitorsApisearchMonitors
   */
  query?: string;
  /**
   * Page to start paginating from.
   * @type number
   * @memberof MonitorsApisearchMonitors
   */
  page?: number;
  /**
   * Number of monitors to return per page.
   * @type number
   * @memberof MonitorsApisearchMonitors
   */
  perPage?: number;
  /**
   * String for sort order, composed of field and sort order separate by a comma, e.g. &#x60;name,asc&#x60;. Supported sort directions: &#x60;asc&#x60;, &#x60;desc&#x60;. Supported fields:  * &#x60;name&#x60; * &#x60;status&#x60; * &#x60;tags&#x60;
   * @type string
   * @memberof MonitorsApisearchMonitors
   */
  sort?: string;
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

export class ObjectMonitorsApi {
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
   * @param param the request object
   */
  public checkCanDeleteMonitor(
    param: MonitorsApiCheckCanDeleteMonitorRequest,
    options?: Configuration
  ): Promise<CheckCanDeleteMonitorResponse> {
    return this.api
      .checkCanDeleteMonitor(param.monitorIds, options)
      .toPromise();
  }

  /**
   * Create a monitor using the specified options.  #### Monitor Types  The type of monitor chosen from:  - anomaly: `query alert` - APM: `query alert` or `trace-analytics alert` - composite: `composite` - custom: `service check` - event: `event alert` - forecast: `query alert` - host: `service check` - integration: `query alert` or `service check` - live process: `process alert` - logs: `log alert` - metric: `query alert` - network: `service check` - outlier: `query alert` - process: `service check` - rum: `rum alert` - SLO: `slo alert` - watchdog: `event alert` - event-v2: `event-v2 alert` - audit: `audit alert`  #### Query Types  **Metric Alert Query**  Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`  - `time_aggr`: avg, sum, max, min, change, or pct_change - `time_window`: `last_#m` (with `#` between 1 and 10080 depending on the monitor type) or `last_#h`(with `#` between 1 and 168 depending on the monitor type) or `last_1d`, or `last_1w` - `space_aggr`: avg, sum, min, or max - `tags`: one or more tags (comma-separated), or * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert) - `operator`: <, <=, >, >=, ==, or != - `#`: an integer or decimal number used to set the threshold  If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:  - `change_aggr` change, pct_change - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/create/types/#define-the-conditions) - `time_window` last\\_#m (between 1 and 2880 depending on the monitor type), last\\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2) - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago  Use this to create an outlier monitor using the following query: `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`  **Service Check Query**  Example: `\"check\".over(tags).last(count).by(group).count_by_status()`  - **`check`** name of the check, e.g. `datadog.agent.up` - **`tags`** one or more quoted tags (comma-separated), or \"*\". e.g.: `.over(\"env:prod\", \"role:db\")`; **`over`** cannot be blank. - **`count`** must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100. For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be at least 3. - **`group`** must be specified for check monitors. Per-check grouping is already explicitly known for some service checks. For example, Postgres integration monitors are tagged by `db`, `host`, and `port`, and Network monitors by `host`, `instance`, and `url`. See [Service Checks](https://docs.datadoghq.com/api/latest/service-checks/) documentation for more information.  **Event Alert Query**  Example: `events('sources:nagios status:error,warning priority:normal tags: \"string query\"').rollup(\"count\").last(\"1h\")\"`  - **`event`**, the event query string: - **`string_query`** free text query to match against event title and text. - **`sources`** event sources (comma-separated). - **`status`** event statuses (comma-separated). Valid options: error, warn, and info. - **`priority`** event priorities (comma-separated). Valid options: low, normal, all. - **`host`** event reporting host (comma-separated). - **`tags`** event tags (comma-separated). - **`excluded_tags`** excluded event tags (comma-separated). - **`rollup`** the stats roll-up method. `count` is the only supported method now. - **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.  **NOTE** Only available on US1 and EU.  **Event V2 Alert Query**  Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED, US3, US5 and in closed beta on EU and US1.  **Process Alert Query**  Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`  - **`search`** free text search string for querying processes. Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page. - **`tags`** one or more tags (comma-separated) - **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d - **`operator`** <, <=, >, >=, ==, or != - **`#`** an integer or decimal number used to set the threshold  **Logs Alert Query**  Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`index_name`** For multi-index organizations, the log index in which the request is performed. - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **Composite Query**  Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors  * **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert. * **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor. Email notifications can be sent to specific users by using the same '@username' notation as events. * **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor. When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags. It is only available via the API and isn't visible or editable in the Datadog UI.  **SLO Alert Query**  Example: `error_budget(\"slo_id\").over(\"time_window\") operator #`  - **`slo_id`**: The alphanumeric SLO ID of the SLO you are configuring the alert for. - **`time_window`**: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`. - **`operator`**: `>=` or `>`  **Audit Alert Query**  Example: `audits(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED and in closed beta on US1, EU, US3, and US5.
   * Create a monitor
   * @param param the request object
   */
  public createMonitor(
    param: MonitorsApiCreateMonitorRequest,
    options?: Configuration
  ): Promise<Monitor> {
    return this.api.createMonitor(param.body, options).toPromise();
  }

  /**
   * Delete the specified monitor
   * Delete a monitor
   * @param param the request object
   */
  public deleteMonitor(
    param: MonitorsApiDeleteMonitorRequest,
    options?: Configuration
  ): Promise<DeletedMonitor> {
    return this.api
      .deleteMonitor(param.monitorId, param.force, options)
      .toPromise();
  }

  /**
   * Get details about the specified monitor from your organization.
   * Get a monitor's details
   * @param param the request object
   */
  public getMonitor(
    param: MonitorsApiGetMonitorRequest,
    options?: Configuration
  ): Promise<Monitor> {
    return this.api
      .getMonitor(param.monitorId, param.groupStates, options)
      .toPromise();
  }

  /**
   * Get details about the specified monitor from your organization.
   * Get all monitor details
   * @param param the request object
   */
  public listMonitors(
    param: MonitorsApiListMonitorsRequest = {},
    options?: Configuration
  ): Promise<Array<Monitor>> {
    return this.api
      .listMonitors(
        param.groupStates,
        param.name,
        param.tags,
        param.monitorTags,
        param.withDowntimes,
        param.idOffset,
        param.page,
        param.pageSize,
        options
      )
      .toPromise();
  }

  /**
   * Search and filter your monitor groups details.
   * Monitors group search
   * @param param the request object
   */
  public searchMonitorGroups(
    param: MonitorsApiSearchMonitorGroupsRequest = {},
    options?: Configuration
  ): Promise<MonitorGroupSearchResponse> {
    return this.api
      .searchMonitorGroups(
        param.query,
        param.page,
        param.perPage,
        param.sort,
        options
      )
      .toPromise();
  }

  /**
   * Search and filter your monitors details.
   * Monitors search
   * @param param the request object
   */
  public searchMonitors(
    param: MonitorsApiSearchMonitorsRequest = {},
    options?: Configuration
  ): Promise<MonitorSearchResponse> {
    return this.api
      .searchMonitors(
        param.query,
        param.page,
        param.perPage,
        param.sort,
        options
      )
      .toPromise();
  }

  /**
   * Edit the specified monitor.
   * Edit a monitor
   * @param param the request object
   */
  public updateMonitor(
    param: MonitorsApiUpdateMonitorRequest,
    options?: Configuration
  ): Promise<Monitor> {
    return this.api
      .updateMonitor(param.monitorId, param.body, options)
      .toPromise();
  }

  /**
   * Validate the monitor provided in the request.
   * Validate a monitor
   * @param param the request object
   */
  public validateMonitor(
    param: MonitorsApiValidateMonitorRequest,
    options?: Configuration
  ): Promise<any> {
    return this.api.validateMonitor(param.body, options).toPromise();
  }
}

import { ObservableNotebooksApi } from "./ObservableAPI";
import {
  NotebooksApiRequestFactory,
  NotebooksApiResponseProcessor,
} from "../apis/NotebooksApi";

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
   * Sort by field &#x60;modified&#x60;, &#x60;name&#x60;, or &#x60;created&#x60;.
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
  /**
   * True value returns only template notebooks. Default is false (returns only non-template notebooks).
   * @type boolean
   * @memberof NotebooksApilistNotebooks
   */
  isTemplate?: boolean;
  /**
   * If type is provided, returns only notebooks with that metadata type. Default does not have type filtering.
   * @type string
   * @memberof NotebooksApilistNotebooks
   */
  type?: string;
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

export class ObjectNotebooksApi {
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
   * @param param the request object
   */
  public createNotebook(
    param: NotebooksApiCreateNotebookRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    return this.api.createNotebook(param.body, options).toPromise();
  }

  /**
   * Delete a notebook using the specified ID.
   * Delete a notebook
   * @param param the request object
   */
  public deleteNotebook(
    param: NotebooksApiDeleteNotebookRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.deleteNotebook(param.notebookId, options).toPromise();
  }

  /**
   * Get a notebook using the specified notebook ID.
   * Get a notebook
   * @param param the request object
   */
  public getNotebook(
    param: NotebooksApiGetNotebookRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    return this.api.getNotebook(param.notebookId, options).toPromise();
  }

  /**
   * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.
   * Get all notebooks
   * @param param the request object
   */
  public listNotebooks(
    param: NotebooksApiListNotebooksRequest = {},
    options?: Configuration
  ): Promise<NotebooksResponse> {
    return this.api
      .listNotebooks(
        param.authorHandle,
        param.excludeAuthorHandle,
        param.start,
        param.count,
        param.sortField,
        param.sortDir,
        param.query,
        param.includeCells,
        param.isTemplate,
        param.type,
        options
      )
      .toPromise();
  }

  /**
   * Update a notebook using the specified ID.
   * Update a notebook
   * @param param the request object
   */
  public updateNotebook(
    param: NotebooksApiUpdateNotebookRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    return this.api
      .updateNotebook(param.notebookId, param.body, options)
      .toPromise();
  }
}

import { ObservableOrganizationsApi } from "./ObservableAPI";
import {
  OrganizationsApiRequestFactory,
  OrganizationsApiResponseProcessor,
} from "../apis/OrganizationsApi";

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

export class ObjectOrganizationsApi {
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
   * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `api_key.key`, and `application_key.hash` provided in the response.
   * Create a child organization
   * @param param the request object
   */
  public createChildOrg(
    param: OrganizationsApiCreateChildOrgRequest,
    options?: Configuration
  ): Promise<OrganizationCreateResponse> {
    return this.api.createChildOrg(param.body, options).toPromise();
  }

  /**
   * Get organization information.
   * Get organization information
   * @param param the request object
   */
  public getOrg(
    param: OrganizationsApiGetOrgRequest,
    options?: Configuration
  ): Promise<OrganizationResponse> {
    return this.api.getOrg(param.publicId, options).toPromise();
  }

  /**
   * List your managed organizations.
   * List your managed organizations
   * @param param the request object
   */
  public listOrgs(options?: Configuration): Promise<OrganizationListResponse> {
    return this.api.listOrgs(options).toPromise();
  }

  /**
   * Update your organization.
   * Update your organization
   * @param param the request object
   */
  public updateOrg(
    param: OrganizationsApiUpdateOrgRequest,
    options?: Configuration
  ): Promise<OrganizationResponse> {
    return this.api.updateOrg(param.publicId, param.body, options).toPromise();
  }

  /**
   * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
   * Upload IdP metadata
   * @param param the request object
   */
  public uploadIdPForOrg(
    param: OrganizationsApiUploadIdPForOrgRequest,
    options?: Configuration
  ): Promise<IdpResponse> {
    return this.api
      .uploadIdPForOrg(param.publicId, param.idpFile, options)
      .toPromise();
  }
}

import { ObservablePagerDutyIntegrationApi } from "./ObservableAPI";
import {
  PagerDutyIntegrationApiRequestFactory,
  PagerDutyIntegrationApiResponseProcessor,
} from "../apis/PagerDutyIntegrationApi";

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

export class ObjectPagerDutyIntegrationApi {
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
   * @param param the request object
   */
  public createPagerDutyIntegrationService(
    param: PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest,
    options?: Configuration
  ): Promise<PagerDutyServiceName> {
    return this.api
      .createPagerDutyIntegrationService(param.body, options)
      .toPromise();
  }

  /**
   * Delete a single service object in the Datadog-PagerDuty integration.
   * Delete a single service object
   * @param param the request object
   */
  public deletePagerDutyIntegrationService(
    param: PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .deletePagerDutyIntegrationService(param.serviceName, options)
      .toPromise();
  }

  /**
   * Get service name in the Datadog-PagerDuty integration.
   * Get a single service object
   * @param param the request object
   */
  public getPagerDutyIntegrationService(
    param: PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest,
    options?: Configuration
  ): Promise<PagerDutyServiceName> {
    return this.api
      .getPagerDutyIntegrationService(param.serviceName, options)
      .toPromise();
  }

  /**
   * Update a single service object in the Datadog-PagerDuty integration.
   * Update a single service object
   * @param param the request object
   */
  public updatePagerDutyIntegrationService(
    param: PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .updatePagerDutyIntegrationService(param.serviceName, param.body, options)
      .toPromise();
  }
}

import { ObservableServiceChecksApi } from "./ObservableAPI";
import {
  ServiceChecksApiRequestFactory,
  ServiceChecksApiResponseProcessor,
} from "../apis/ServiceChecksApi";

export interface ServiceChecksApiSubmitServiceCheckRequest {
  /**
   * Service Check request body.
   * @type Array&lt;ServiceCheck&gt;
   * @memberof ServiceChecksApisubmitServiceCheck
   */
  body: Array<ServiceCheck>;
}

export class ObjectServiceChecksApi {
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
   * Submit a list of Service Checks.  **Notes**: - A valid API key is required. - Service checks can be submitted up to 10 minutes in the past.
   * Submit a Service Check
   * @param param the request object
   */
  public submitServiceCheck(
    param: ServiceChecksApiSubmitServiceCheckRequest,
    options?: Configuration
  ): Promise<IntakePayloadAccepted> {
    return this.api.submitServiceCheck(param.body, options).toPromise();
  }
}

import { ObservableServiceLevelObjectiveCorrectionsApi } from "./ObservableAPI";
import {
  ServiceLevelObjectiveCorrectionsApiRequestFactory,
  ServiceLevelObjectiveCorrectionsApiResponseProcessor,
} from "../apis/ServiceLevelObjectiveCorrectionsApi";

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
   * The ID of the SLO correction object.
   * @type string
   * @memberof ServiceLevelObjectiveCorrectionsApideleteSLOCorrection
   */
  sloCorrectionId: string;
}

export interface ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest {
  /**
   * The ID of the SLO correction object.
   * @type string
   * @memberof ServiceLevelObjectiveCorrectionsApigetSLOCorrection
   */
  sloCorrectionId: string;
}

export interface ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest {
  /**
   * The ID of the SLO correction object.
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

export class ObjectServiceLevelObjectiveCorrectionsApi {
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
   * Create an SLO Correction.
   * Create an SLO correction
   * @param param the request object
   */
  public createSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    return this.api.createSLOCorrection(param.body, options).toPromise();
  }

  /**
   * Permanently delete the specified SLO correction object.
   * Delete an SLO correction
   * @param param the request object
   */
  public deleteSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .deleteSLOCorrection(param.sloCorrectionId, options)
      .toPromise();
  }

  /**
   * Get an SLO correction.
   * Get an SLO correction for an SLO
   * @param param the request object
   */
  public getSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    return this.api
      .getSLOCorrection(param.sloCorrectionId, options)
      .toPromise();
  }

  /**
   * Get all Service Level Objective corrections.
   * Get all SLO corrections
   * @param param the request object
   */
  public listSLOCorrection(
    options?: Configuration
  ): Promise<SLOCorrectionListResponse> {
    return this.api.listSLOCorrection(options).toPromise();
  }

  /**
   * Update the specified SLO correction object object.
   * Update an SLO correction
   * @param param the request object
   */
  public updateSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    return this.api
      .updateSLOCorrection(param.sloCorrectionId, param.body, options)
      .toPromise();
  }
}

import { ObservableServiceLevelObjectivesApi } from "./ObservableAPI";
import {
  ServiceLevelObjectivesApiRequestFactory,
  ServiceLevelObjectivesApiResponseProcessor,
} from "../apis/ServiceLevelObjectivesApi";

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
  body: { [key: string]: Array<SLOTimeframe> };
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

export interface ServiceLevelObjectivesApiGetSLOCorrectionsRequest {
  /**
   * The ID of the service level objective object.
   * @type string
   * @memberof ServiceLevelObjectivesApigetSLOCorrections
   */
  sloId: string;
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
   * The SLO target. If &#x60;target&#x60; is passed in, the response will include the remaining error budget and a timeframe value of &#x60;custom&#x60;.
   * @type number
   * @memberof ServiceLevelObjectivesApigetSLOHistory
   */
  target?: number;
  /**
   * Defaults to &#x60;true&#x60;. If any SLO corrections are applied and this parameter is set to &#x60;false&#x60;, then the corrections will not be applied and the SLI values will not be affected.
   * @type boolean
   * @memberof ServiceLevelObjectivesApigetSLOHistory
   */
  applyCorrection?: boolean;
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
  /**
   * The number of SLOs to return in the response.
   * @type number
   * @memberof ServiceLevelObjectivesApilistSLOs
   */
  limit?: number;
  /**
   * The specific offset to use as the beginning of the returned response.
   * @type number
   * @memberof ServiceLevelObjectivesApilistSLOs
   */
  offset?: number;
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

export class ObjectServiceLevelObjectivesApi {
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
   * @param param the request object
   */
  public checkCanDeleteSLO(
    param: ServiceLevelObjectivesApiCheckCanDeleteSLORequest,
    options?: Configuration
  ): Promise<CheckCanDeleteSLOResponse> {
    return this.api.checkCanDeleteSLO(param.ids, options).toPromise();
  }

  /**
   * Create a service level objective object.
   * Create an SLO object
   * @param param the request object
   */
  public createSLO(
    param: ServiceLevelObjectivesApiCreateSLORequest,
    options?: Configuration
  ): Promise<SLOListResponse> {
    return this.api.createSLO(param.body, options).toPromise();
  }

  /**
   * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
   * Delete an SLO
   * @param param the request object
   */
  public deleteSLO(
    param: ServiceLevelObjectivesApiDeleteSLORequest,
    options?: Configuration
  ): Promise<SLODeleteResponse> {
    return this.api.deleteSLO(param.sloId, param.force, options).toPromise();
  }

  /**
   * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
   * Bulk Delete SLO Timeframes
   * @param param the request object
   */
  public deleteSLOTimeframeInBulk(
    param: ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest,
    options?: Configuration
  ): Promise<SLOBulkDeleteResponse> {
    return this.api.deleteSLOTimeframeInBulk(param.body, options).toPromise();
  }

  /**
   * Get a service level objective object.
   * Get an SLO's details
   * @param param the request object
   */
  public getSLO(
    param: ServiceLevelObjectivesApiGetSLORequest,
    options?: Configuration
  ): Promise<SLOResponse> {
    return this.api
      .getSLO(param.sloId, param.withConfiguredAlertIds, options)
      .toPromise();
  }

  /**
   * Get corrections applied to an SLO
   * Get Corrections For an SLO
   * @param param the request object
   */
  public getSLOCorrections(
    param: ServiceLevelObjectivesApiGetSLOCorrectionsRequest,
    options?: Configuration
  ): Promise<SLOCorrectionListResponse> {
    return this.api.getSLOCorrections(param.sloId, options).toPromise();
  }

  /**
   * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
   * Get an SLO's history
   * @param param the request object
   */
  public getSLOHistory(
    param: ServiceLevelObjectivesApiGetSLOHistoryRequest,
    options?: Configuration
  ): Promise<SLOHistoryResponse> {
    return this.api
      .getSLOHistory(
        param.sloId,
        param.fromTs,
        param.toTs,
        param.target,
        param.applyCorrection,
        options
      )
      .toPromise();
  }

  /**
   * Get a list of service level objective objects for your organization.
   * Get all SLOs
   * @param param the request object
   */
  public listSLOs(
    param: ServiceLevelObjectivesApiListSLOsRequest = {},
    options?: Configuration
  ): Promise<SLOListResponse> {
    return this.api
      .listSLOs(
        param.ids,
        param.query,
        param.tagsQuery,
        param.metricsQuery,
        param.limit,
        param.offset,
        options
      )
      .toPromise();
  }

  /**
   * Update the specified service level objective object.
   * Update an SLO
   * @param param the request object
   */
  public updateSLO(
    param: ServiceLevelObjectivesApiUpdateSLORequest,
    options?: Configuration
  ): Promise<SLOListResponse> {
    return this.api.updateSLO(param.sloId, param.body, options).toPromise();
  }
}

import { ObservableSlackIntegrationApi } from "./ObservableAPI";
import {
  SlackIntegrationApiRequestFactory,
  SlackIntegrationApiResponseProcessor,
} from "../apis/SlackIntegrationApi";

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

export class ObjectSlackIntegrationApi {
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
   * @param param the request object
   */
  public createSlackIntegrationChannel(
    param: SlackIntegrationApiCreateSlackIntegrationChannelRequest,
    options?: Configuration
  ): Promise<SlackIntegrationChannel> {
    return this.api
      .createSlackIntegrationChannel(param.accountName, param.body, options)
      .toPromise();
  }

  /**
   * Get a channel configured for your Datadog-Slack integration.
   * Get a Slack integration channel
   * @param param the request object
   */
  public getSlackIntegrationChannel(
    param: SlackIntegrationApiGetSlackIntegrationChannelRequest,
    options?: Configuration
  ): Promise<SlackIntegrationChannel> {
    return this.api
      .getSlackIntegrationChannel(param.accountName, param.channelName, options)
      .toPromise();
  }

  /**
   * Get a list of all channels configured for your Datadog-Slack integration.
   * Get all channels in a Slack integration
   * @param param the request object
   */
  public getSlackIntegrationChannels(
    param: SlackIntegrationApiGetSlackIntegrationChannelsRequest,
    options?: Configuration
  ): Promise<Array<SlackIntegrationChannel>> {
    return this.api
      .getSlackIntegrationChannels(param.accountName, options)
      .toPromise();
  }

  /**
   * Remove a channel from your Datadog-Slack integration.
   * Remove a Slack integration channel
   * @param param the request object
   */
  public removeSlackIntegrationChannel(
    param: SlackIntegrationApiRemoveSlackIntegrationChannelRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .removeSlackIntegrationChannel(
        param.accountName,
        param.channelName,
        options
      )
      .toPromise();
  }

  /**
   * Update a channel used in your Datadog-Slack integration.
   * Update a Slack integration channel
   * @param param the request object
   */
  public updateSlackIntegrationChannel(
    param: SlackIntegrationApiUpdateSlackIntegrationChannelRequest,
    options?: Configuration
  ): Promise<SlackIntegrationChannel> {
    return this.api
      .updateSlackIntegrationChannel(
        param.accountName,
        param.channelName,
        param.body,
        options
      )
      .toPromise();
  }
}

import { ObservableSnapshotsApi } from "./ObservableAPI";
import {
  SnapshotsApiRequestFactory,
  SnapshotsApiResponseProcessor,
} from "../apis/SnapshotsApi";

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

export class ObjectSnapshotsApi {
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
   * @param param the request object
   */
  public getGraphSnapshot(
    param: SnapshotsApiGetGraphSnapshotRequest,
    options?: Configuration
  ): Promise<GraphSnapshot> {
    return this.api
      .getGraphSnapshot(
        param.start,
        param.end,
        param.metricQuery,
        param.eventQuery,
        param.graphDef,
        param.title,
        options
      )
      .toPromise();
  }
}

import { ObservableSyntheticsApi } from "./ObservableAPI";
import {
  SyntheticsApiRequestFactory,
  SyntheticsApiResponseProcessor,
} from "../apis/SyntheticsApi";

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
   * Timestamp in milliseconds from which to start querying results.
   * @type number
   * @memberof SyntheticsApigetAPITestLatestResults
   */
  fromTs?: number;
  /**
   * Timestamp in milliseconds up to which to query results.
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
   * Timestamp in milliseconds from which to start querying results.
   * @type number
   * @memberof SyntheticsApigetBrowserTestLatestResults
   */
  fromTs?: number;
  /**
   * Timestamp in milliseconds up to which to query results.
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

export interface SyntheticsApiGetSyntheticsCIBatchRequest {
  /**
   * The ID of the batch.
   * @type string
   * @memberof SyntheticsApigetSyntheticsCIBatch
   */
  batchId: string;
}

export interface SyntheticsApiGetTestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   * @memberof SyntheticsApigetTest
   */
  publicId: string;
}

export interface SyntheticsApiTriggerCITestsRequest {
  /**
   * Details of the test to trigger.
   * @type SyntheticsCITestBody
   * @memberof SyntheticsApitriggerCITests
   */
  body: SyntheticsCITestBody;
}

export interface SyntheticsApiTriggerTestsRequest {
  /**
   * The identifiers of the tests to trigger.
   * @type SyntheticsTriggerBody
   * @memberof SyntheticsApitriggerTests
   */
  body: SyntheticsTriggerBody;
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

export class ObjectSyntheticsApi {
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
   * @param param the request object
   */
  public createGlobalVariable(
    param: SyntheticsApiCreateGlobalVariableRequest,
    options?: Configuration
  ): Promise<SyntheticsGlobalVariable> {
    return this.api.createGlobalVariable(param.body, options).toPromise();
  }

  /**
   * Create a new Synthetics private location.
   * Create a private location
   * @param param the request object
   */
  public createPrivateLocation(
    param: SyntheticsApiCreatePrivateLocationRequest,
    options?: Configuration
  ): Promise<SyntheticsPrivateLocationCreationResponse> {
    return this.api.createPrivateLocation(param.body, options).toPromise();
  }

  /**
   * Create a Synthetic API test.
   * Create an API test
   * @param param the request object
   */
  public createSyntheticsAPITest(
    param: SyntheticsApiCreateSyntheticsAPITestRequest,
    options?: Configuration
  ): Promise<SyntheticsAPITest> {
    return this.api.createSyntheticsAPITest(param.body, options).toPromise();
  }

  /**
   * Create a Synthetic browser test.
   * Create a browser test
   * @param param the request object
   */
  public createSyntheticsBrowserTest(
    param: SyntheticsApiCreateSyntheticsBrowserTestRequest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTest> {
    return this.api
      .createSyntheticsBrowserTest(param.body, options)
      .toPromise();
  }

  /**
   * Delete a Synthetics global variable.
   * Delete a global variable
   * @param param the request object
   */
  public deleteGlobalVariable(
    param: SyntheticsApiDeleteGlobalVariableRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api.deleteGlobalVariable(param.variableId, options).toPromise();
  }

  /**
   * Delete a Synthetics private location.
   * Delete a private location
   * @param param the request object
   */
  public deletePrivateLocation(
    param: SyntheticsApiDeletePrivateLocationRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .deletePrivateLocation(param.locationId, options)
      .toPromise();
  }

  /**
   * Delete multiple Synthetic tests by ID.
   * Delete tests
   * @param param the request object
   */
  public deleteTests(
    param: SyntheticsApiDeleteTestsRequest,
    options?: Configuration
  ): Promise<SyntheticsDeleteTestsResponse> {
    return this.api.deleteTests(param.body, options).toPromise();
  }

  /**
   * Edit a Synthetics global variable.
   * Edit a global variable
   * @param param the request object
   */
  public editGlobalVariable(
    param: SyntheticsApiEditGlobalVariableRequest,
    options?: Configuration
  ): Promise<SyntheticsGlobalVariable> {
    return this.api
      .editGlobalVariable(param.variableId, param.body, options)
      .toPromise();
  }

  /**
   * Get the detailed configuration associated with a Synthetic API test.
   * Get an API test
   * @param param the request object
   */
  public getAPITest(
    param: SyntheticsApiGetAPITestRequest,
    options?: Configuration
  ): Promise<SyntheticsAPITest> {
    return this.api.getAPITest(param.publicId, options).toPromise();
  }

  /**
   * Get the last 50 test results summaries for a given Synthetics API test.
   * Get an API test's latest results summaries
   * @param param the request object
   */
  public getAPITestLatestResults(
    param: SyntheticsApiGetAPITestLatestResultsRequest,
    options?: Configuration
  ): Promise<SyntheticsGetAPITestLatestResultsResponse> {
    return this.api
      .getAPITestLatestResults(
        param.publicId,
        param.fromTs,
        param.toTs,
        param.probeDc,
        options
      )
      .toPromise();
  }

  /**
   * Get a specific full result from a given (API) Synthetic test.
   * Get an API test result
   * @param param the request object
   */
  public getAPITestResult(
    param: SyntheticsApiGetAPITestResultRequest,
    options?: Configuration
  ): Promise<SyntheticsAPITestResultFull> {
    return this.api
      .getAPITestResult(param.publicId, param.resultId, options)
      .toPromise();
  }

  /**
   * Get the detailed configuration (including steps) associated with a Synthetic browser test.
   * Get a browser test
   * @param param the request object
   */
  public getBrowserTest(
    param: SyntheticsApiGetBrowserTestRequest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTest> {
    return this.api.getBrowserTest(param.publicId, options).toPromise();
  }

  /**
   * Get the last 50 test results summaries for a given Synthetics Browser test.
   * Get a browser test's latest results summaries
   * @param param the request object
   */
  public getBrowserTestLatestResults(
    param: SyntheticsApiGetBrowserTestLatestResultsRequest,
    options?: Configuration
  ): Promise<SyntheticsGetBrowserTestLatestResultsResponse> {
    return this.api
      .getBrowserTestLatestResults(
        param.publicId,
        param.fromTs,
        param.toTs,
        param.probeDc,
        options
      )
      .toPromise();
  }

  /**
   * Get a specific full result from a given (browser) Synthetic test.
   * Get a browser test result
   * @param param the request object
   */
  public getBrowserTestResult(
    param: SyntheticsApiGetBrowserTestResultRequest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTestResultFull> {
    return this.api
      .getBrowserTestResult(param.publicId, param.resultId, options)
      .toPromise();
  }

  /**
   * Get the detailed configuration of a global variable.
   * Get a global variable
   * @param param the request object
   */
  public getGlobalVariable(
    param: SyntheticsApiGetGlobalVariableRequest,
    options?: Configuration
  ): Promise<SyntheticsGlobalVariable> {
    return this.api.getGlobalVariable(param.variableId, options).toPromise();
  }

  /**
   * Get a Synthetics private location.
   * Get a private location
   * @param param the request object
   */
  public getPrivateLocation(
    param: SyntheticsApiGetPrivateLocationRequest,
    options?: Configuration
  ): Promise<SyntheticsPrivateLocation> {
    return this.api.getPrivateLocation(param.locationId, options).toPromise();
  }

  /**
   * Get a batch's updated details.
   * Get details of batch
   * @param param the request object
   */
  public getSyntheticsCIBatch(
    param: SyntheticsApiGetSyntheticsCIBatchRequest,
    options?: Configuration
  ): Promise<SyntheticsBatchDetails> {
    return this.api.getSyntheticsCIBatch(param.batchId, options).toPromise();
  }

  /**
   * Get the detailed configuration associated with a Synthetics test.
   * Get a test configuration
   * @param param the request object
   */
  public getTest(
    param: SyntheticsApiGetTestRequest,
    options?: Configuration
  ): Promise<SyntheticsTestDetails> {
    return this.api.getTest(param.publicId, options).toPromise();
  }

  /**
   * Get the list of all Synthetics global variables.
   * Get all global variables
   * @param param the request object
   */
  public listGlobalVariables(
    options?: Configuration
  ): Promise<SyntheticsListGlobalVariablesResponse> {
    return this.api.listGlobalVariables(options).toPromise();
  }

  /**
   * Get the list of public and private locations available for Synthetic tests. No arguments required.
   * Get all locations (public and private)
   * @param param the request object
   */
  public listLocations(options?: Configuration): Promise<SyntheticsLocations> {
    return this.api.listLocations(options).toPromise();
  }

  /**
   * Get the list of all Synthetic tests.
   * Get the list of all tests
   * @param param the request object
   */
  public listTests(
    options?: Configuration
  ): Promise<SyntheticsListTestsResponse> {
    return this.api.listTests(options).toPromise();
  }

  /**
   * Trigger a set of Synthetics tests for continuous integration.
   * Trigger tests from CI/CD pipelines
   * @param param the request object
   */
  public triggerCITests(
    param: SyntheticsApiTriggerCITestsRequest,
    options?: Configuration
  ): Promise<SyntheticsTriggerCITestsResponse> {
    return this.api.triggerCITests(param.body, options).toPromise();
  }

  /**
   * Trigger a set of Synthetics tests.
   * Trigger Synthetics tests
   * @param param the request object
   */
  public triggerTests(
    param: SyntheticsApiTriggerTestsRequest,
    options?: Configuration
  ): Promise<SyntheticsTriggerCITestsResponse> {
    return this.api.triggerTests(param.body, options).toPromise();
  }

  /**
   * Edit the configuration of a Synthetic API test.
   * Edit an API test
   * @param param the request object
   */
  public updateAPITest(
    param: SyntheticsApiUpdateAPITestRequest,
    options?: Configuration
  ): Promise<SyntheticsAPITest> {
    return this.api
      .updateAPITest(param.publicId, param.body, options)
      .toPromise();
  }

  /**
   * Edit the configuration of a Synthetic browser test.
   * Edit a browser test
   * @param param the request object
   */
  public updateBrowserTest(
    param: SyntheticsApiUpdateBrowserTestRequest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTest> {
    return this.api
      .updateBrowserTest(param.publicId, param.body, options)
      .toPromise();
  }

  /**
   * Edit a Synthetics private location.
   * Edit a private location
   * @param param the request object
   */
  public updatePrivateLocation(
    param: SyntheticsApiUpdatePrivateLocationRequest,
    options?: Configuration
  ): Promise<SyntheticsPrivateLocation> {
    return this.api
      .updatePrivateLocation(param.locationId, param.body, options)
      .toPromise();
  }

  /**
   * Pause or start a Synthetics test by changing the status.
   * Pause or start a test
   * @param param the request object
   */
  public updateTestPauseStatus(
    param: SyntheticsApiUpdateTestPauseStatusRequest,
    options?: Configuration
  ): Promise<boolean> {
    return this.api
      .updateTestPauseStatus(param.publicId, param.body, options)
      .toPromise();
  }
}

import { ObservableTagsApi } from "./ObservableAPI";
import {
  TagsApiRequestFactory,
  TagsApiResponseProcessor,
} from "../apis/TagsApi";

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

export class ObjectTagsApi {
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
   * @param param the request object
   */
  public createHostTags(
    param: TagsApiCreateHostTagsRequest,
    options?: Configuration
  ): Promise<HostTags> {
    return this.api
      .createHostTags(param.hostName, param.body, param.source, options)
      .toPromise();
  }

  /**
   * This endpoint allows you to remove all user-assigned tags for a single host.
   * Remove host tags
   * @param param the request object
   */
  public deleteHostTags(
    param: TagsApiDeleteHostTagsRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .deleteHostTags(param.hostName, param.source, options)
      .toPromise();
  }

  /**
   * Return the list of tags that apply to a given host.
   * Get host tags
   * @param param the request object
   */
  public getHostTags(
    param: TagsApiGetHostTagsRequest,
    options?: Configuration
  ): Promise<HostTags> {
    return this.api
      .getHostTags(param.hostName, param.source, options)
      .toPromise();
  }

  /**
   * Return a mapping of tags to hosts for your whole infrastructure.
   * Get Tags
   * @param param the request object
   */
  public listHostTags(
    param: TagsApiListHostTagsRequest = {},
    options?: Configuration
  ): Promise<TagToHosts> {
    return this.api.listHostTags(param.source, options).toPromise();
  }

  /**
   * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
   * Update host tags
   * @param param the request object
   */
  public updateHostTags(
    param: TagsApiUpdateHostTagsRequest,
    options?: Configuration
  ): Promise<HostTags> {
    return this.api
      .updateHostTags(param.hostName, param.body, param.source, options)
      .toPromise();
  }
}

import { ObservableUsageMeteringApi } from "./ObservableAPI";
import {
  UsageMeteringApiRequestFactory,
  UsageMeteringApiResponseProcessor,
} from "../apis/UsageMeteringApi";

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
   * Date of the report in the format &#x60;YYYY-MM-DD&#x60;.
   * @type string
   * @memberof UsageMeteringApigetSpecifiedDailyCustomReports
   */
  reportId: string;
}

export interface UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest {
  /**
   * Date of the report in the format &#x60;YYYY-MM-DD&#x60;.
   * @type string
   * @memberof UsageMeteringApigetSpecifiedMonthlyCustomReports
   */
  reportId: string;
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
  /**
   * Include child org usage in the response. Defaults to false.
   * @type boolean
   * @memberof UsageMeteringApigetUsageAttribution
   */
  includeDescendants?: boolean;
}

export interface UsageMeteringApiGetUsageAuditLogsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageAuditLogs
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageAuditLogs
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageBillableSummaryRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
   * @type Date
   * @memberof UsageMeteringApigetUsageBillableSummary
   */
  month?: Date;
}

export interface UsageMeteringApiGetUsageCWSRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageCWS
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageCWS
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageCloudSecurityPostureManagementRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageCloudSecurityPostureManagement
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageCloudSecurityPostureManagement
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageDBMRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageDBM
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageDBM
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

export interface UsageMeteringApiGetUsageRumUnitsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageRumUnits
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageRumUnits
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSDSRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageSDS
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   * @memberof UsageMeteringApigetUsageSDS
   */
  endHr?: Date;
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

export class ObjectUsageMeteringApi {
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
   * @param param the request object
   */
  public getDailyCustomReports(
    param: UsageMeteringApiGetDailyCustomReportsRequest = {},
    options?: Configuration
  ): Promise<UsageCustomReportsResponse> {
    return this.api
      .getDailyCustomReports(
        param.pageSize,
        param.pageNumber,
        param.sortDir,
        param.sort,
        options
      )
      .toPromise();
  }

  /**
   * Get hourly usage for incident management.
   * Get hourly usage for incident management
   * @param param the request object
   */
  public getIncidentManagement(
    param: UsageMeteringApiGetIncidentManagementRequest,
    options?: Configuration
  ): Promise<UsageIncidentManagementResponse> {
    return this.api
      .getIncidentManagement(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for ingested spans.
   * Get hourly usage for ingested spans
   * @param param the request object
   */
  public getIngestedSpans(
    param: UsageMeteringApiGetIngestedSpansRequest,
    options?: Configuration
  ): Promise<UsageIngestedSpansResponse> {
    return this.api
      .getIngestedSpans(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get monthly custom reports.
   * Get the list of available monthly custom reports
   * @param param the request object
   */
  public getMonthlyCustomReports(
    param: UsageMeteringApiGetMonthlyCustomReportsRequest = {},
    options?: Configuration
  ): Promise<UsageCustomReportsResponse> {
    return this.api
      .getMonthlyCustomReports(
        param.pageSize,
        param.pageNumber,
        param.sortDir,
        param.sort,
        options
      )
      .toPromise();
  }

  /**
   * Get specified daily custom reports.
   * Get specified daily custom reports
   * @param param the request object
   */
  public getSpecifiedDailyCustomReports(
    param: UsageMeteringApiGetSpecifiedDailyCustomReportsRequest,
    options?: Configuration
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    return this.api
      .getSpecifiedDailyCustomReports(param.reportId, options)
      .toPromise();
  }

  /**
   * Get specified monthly custom reports.
   * Get specified monthly custom reports
   * @param param the request object
   */
  public getSpecifiedMonthlyCustomReports(
    param: UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest,
    options?: Configuration
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    return this.api
      .getSpecifiedMonthlyCustomReports(param.reportId, options)
      .toPromise();
  }

  /**
   * Get hourly usage for analyzed logs (Security Monitoring).
   * Get hourly usage for analyzed logs
   * @param param the request object
   */
  public getUsageAnalyzedLogs(
    param: UsageMeteringApiGetUsageAnalyzedLogsRequest,
    options?: Configuration
  ): Promise<UsageAnalyzedLogsResponse> {
    return this.api
      .getUsageAnalyzedLogs(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get Usage Attribution.
   * Get Usage Attribution
   * @param param the request object
   */
  public getUsageAttribution(
    param: UsageMeteringApiGetUsageAttributionRequest,
    options?: Configuration
  ): Promise<UsageAttributionResponse> {
    return this.api
      .getUsageAttribution(
        param.startMonth,
        param.fields,
        param.endMonth,
        param.sortDirection,
        param.sortName,
        param.includeDescendants,
        options
      )
      .toPromise();
  }

  /**
   * Get hourly usage for audit logs.
   * Get hourly usage for audit logs
   * @param param the request object
   */
  public getUsageAuditLogs(
    param: UsageMeteringApiGetUsageAuditLogsRequest,
    options?: Configuration
  ): Promise<UsageAuditLogsResponse> {
    return this.api
      .getUsageAuditLogs(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get billable usage across your account.
   * Get billable usage across your account
   * @param param the request object
   */
  public getUsageBillableSummary(
    param: UsageMeteringApiGetUsageBillableSummaryRequest = {},
    options?: Configuration
  ): Promise<UsageBillableSummaryResponse> {
    return this.api.getUsageBillableSummary(param.month, options).toPromise();
  }

  /**
   * Get hourly usage for Cloud Workload Security.
   * Get hourly usage for Cloud Workload Security
   * @param param the request object
   */
  public getUsageCWS(
    param: UsageMeteringApiGetUsageCWSRequest,
    options?: Configuration
  ): Promise<UsageCWSResponse> {
    return this.api
      .getUsageCWS(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for Cloud Security Posture Management (CSPM).
   * Get hourly usage for CSPM
   * @param param the request object
   */
  public getUsageCloudSecurityPostureManagement(
    param: UsageMeteringApiGetUsageCloudSecurityPostureManagementRequest,
    options?: Configuration
  ): Promise<UsageCloudSecurityPostureManagementResponse> {
    return this.api
      .getUsageCloudSecurityPostureManagement(
        param.startHr,
        param.endHr,
        options
      )
      .toPromise();
  }

  /**
   * Get hourly usage for Database Monitoring
   * Get hourly usage for Database Monitoring
   * @param param the request object
   */
  public getUsageDBM(
    param: UsageMeteringApiGetUsageDBMRequest,
    options?: Configuration
  ): Promise<UsageDBMResponse> {
    return this.api
      .getUsageDBM(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
   * Get hourly usage for Fargate
   * @param param the request object
   */
  public getUsageFargate(
    param: UsageMeteringApiGetUsageFargateRequest,
    options?: Configuration
  ): Promise<UsageFargateResponse> {
    return this.api
      .getUsageFargate(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for hosts and containers.
   * Get hourly usage for hosts and containers
   * @param param the request object
   */
  public getUsageHosts(
    param: UsageMeteringApiGetUsageHostsRequest,
    options?: Configuration
  ): Promise<UsageHostsResponse> {
    return this.api
      .getUsageHosts(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for indexed spans.
   * Get hourly usage for indexed spans
   * @param param the request object
   */
  public getUsageIndexedSpans(
    param: UsageMeteringApiGetUsageIndexedSpansRequest,
    options?: Configuration
  ): Promise<UsageIndexedSpansResponse> {
    return this.api
      .getUsageIndexedSpans(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for IoT.
   * Get hourly usage for IoT
   * @param param the request object
   */
  public getUsageInternetOfThings(
    param: UsageMeteringApiGetUsageInternetOfThingsRequest,
    options?: Configuration
  ): Promise<UsageIoTResponse> {
    return this.api
      .getUsageInternetOfThings(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for lambda.
   * Get hourly usage for Lambda
   * @param param the request object
   */
  public getUsageLambda(
    param: UsageMeteringApiGetUsageLambdaRequest,
    options?: Configuration
  ): Promise<UsageLambdaResponse> {
    return this.api
      .getUsageLambda(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for logs.
   * Get hourly usage for Logs
   * @param param the request object
   */
  public getUsageLogs(
    param: UsageMeteringApiGetUsageLogsRequest,
    options?: Configuration
  ): Promise<UsageLogsResponse> {
    return this.api
      .getUsageLogs(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for logs by index.
   * Get hourly usage for Logs by Index
   * @param param the request object
   */
  public getUsageLogsByIndex(
    param: UsageMeteringApiGetUsageLogsByIndexRequest,
    options?: Configuration
  ): Promise<UsageLogsByIndexResponse> {
    return this.api
      .getUsageLogsByIndex(param.startHr, param.endHr, param.indexName, options)
      .toPromise();
  }

  /**
   * Get hourly usage for indexed logs by retention period.
   * Get hourly logs usage by retention
   * @param param the request object
   */
  public getUsageLogsByRetention(
    param: UsageMeteringApiGetUsageLogsByRetentionRequest,
    options?: Configuration
  ): Promise<UsageLogsByRetentionResponse> {
    return this.api
      .getUsageLogsByRetention(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for network flows.
   * Get hourly usage for Network Flows
   * @param param the request object
   */
  public getUsageNetworkFlows(
    param: UsageMeteringApiGetUsageNetworkFlowsRequest,
    options?: Configuration
  ): Promise<UsageNetworkFlowsResponse> {
    return this.api
      .getUsageNetworkFlows(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for network hosts.
   * Get hourly usage for Network Hosts
   * @param param the request object
   */
  public getUsageNetworkHosts(
    param: UsageMeteringApiGetUsageNetworkHostsRequest,
    options?: Configuration
  ): Promise<UsageNetworkHostsResponse> {
    return this.api
      .getUsageNetworkHosts(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for profiled hosts.
   * Get hourly usage for profiled hosts
   * @param param the request object
   */
  public getUsageProfiling(
    param: UsageMeteringApiGetUsageProfilingRequest,
    options?: Configuration
  ): Promise<UsageProfilingResponse> {
    return this.api
      .getUsageProfiling(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
   * Get hourly usage for RUM Sessions
   * @param param the request object
   */
  public getUsageRumSessions(
    param: UsageMeteringApiGetUsageRumSessionsRequest,
    options?: Configuration
  ): Promise<UsageRumSessionsResponse> {
    return this.api
      .getUsageRumSessions(param.startHr, param.endHr, param.type, options)
      .toPromise();
  }

  /**
   * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Units.
   * Get hourly usage for RUM Units
   * @param param the request object
   */
  public getUsageRumUnits(
    param: UsageMeteringApiGetUsageRumUnitsRequest,
    options?: Configuration
  ): Promise<UsageRumUnitsResponse> {
    return this.api
      .getUsageRumUnits(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for Sensitive Data Scanner.
   * Get hourly usage for Sensitive Data Scanner
   * @param param the request object
   */
  public getUsageSDS(
    param: UsageMeteringApiGetUsageSDSRequest,
    options?: Configuration
  ): Promise<UsageSDSResponse> {
    return this.api
      .getUsageSDS(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for SNMP devices.
   * Get hourly usage for SNMP devices
   * @param param the request object
   */
  public getUsageSNMP(
    param: UsageMeteringApiGetUsageSNMPRequest,
    options?: Configuration
  ): Promise<UsageSNMPResponse> {
    return this.api
      .getUsageSNMP(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get usage across your multi-org account. You must have the multi-org feature enabled.
   * Get usage across your multi-org account
   * @param param the request object
   */
  public getUsageSummary(
    param: UsageMeteringApiGetUsageSummaryRequest,
    options?: Configuration
  ): Promise<UsageSummaryResponse> {
    return this.api
      .getUsageSummary(
        param.startMonth,
        param.endMonth,
        param.includeOrgDetails,
        options
      )
      .toPromise();
  }

  /**
   * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
   * Get hourly usage for Synthetics Checks
   * @param param the request object
   */
  public getUsageSynthetics(
    param: UsageMeteringApiGetUsageSyntheticsRequest,
    options?: Configuration
  ): Promise<UsageSyntheticsResponse> {
    return this.api
      .getUsageSynthetics(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
   * Get hourly usage for Synthetics API Checks
   * @param param the request object
   */
  public getUsageSyntheticsAPI(
    param: UsageMeteringApiGetUsageSyntheticsAPIRequest,
    options?: Configuration
  ): Promise<UsageSyntheticsAPIResponse> {
    return this.api
      .getUsageSyntheticsAPI(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for synthetics browser checks.
   * Get hourly usage for Synthetics Browser Checks
   * @param param the request object
   */
  public getUsageSyntheticsBrowser(
    param: UsageMeteringApiGetUsageSyntheticsBrowserRequest,
    options?: Configuration
  ): Promise<UsageSyntheticsBrowserResponse> {
    return this.api
      .getUsageSyntheticsBrowser(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
   * Get hourly usage for custom metrics
   * @param param the request object
   */
  public getUsageTimeseries(
    param: UsageMeteringApiGetUsageTimeseriesRequest,
    options?: Configuration
  ): Promise<UsageTimeseriesResponse> {
    return this.api
      .getUsageTimeseries(param.startHr, param.endHr, options)
      .toPromise();
  }

  /**
   * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
   * Get all custom metrics by hourly average
   * @param param the request object
   */
  public getUsageTopAvgMetrics(
    param: UsageMeteringApiGetUsageTopAvgMetricsRequest = {},
    options?: Configuration
  ): Promise<UsageTopAvgMetricsResponse> {
    return this.api
      .getUsageTopAvgMetrics(
        param.month,
        param.day,
        param.names,
        param.limit,
        param.nextRecordId,
        options
      )
      .toPromise();
  }
}

import { ObservableUsersApi } from "./ObservableAPI";
import {
  UsersApiRequestFactory,
  UsersApiResponseProcessor,
} from "../apis/UsersApi";

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

export class ObjectUsersApi {
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
   * @param param the request object
   */
  public createUser(
    param: UsersApiCreateUserRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    return this.api.createUser(param.body, options).toPromise();
  }

  /**
   * Delete a user from an organization.  **Note**: This endpoint can only be used with application keys belonging to administrators.
   * Disable a user
   * @param param the request object
   */
  public disableUser(
    param: UsersApiDisableUserRequest,
    options?: Configuration
  ): Promise<UserDisableResponse> {
    return this.api.disableUser(param.userHandle, options).toPromise();
  }

  /**
   * Get a user's details.
   * Get user details
   * @param param the request object
   */
  public getUser(
    param: UsersApiGetUserRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    return this.api.getUser(param.userHandle, options).toPromise();
  }

  /**
   * List all users for your organization.
   * List all users
   * @param param the request object
   */
  public listUsers(options?: Configuration): Promise<UserListResponse> {
    return this.api.listUsers(options).toPromise();
  }

  /**
   * Update a user information.  **Note**: It can only be used with application keys belonging to administrators.
   * Update a user
   * @param param the request object
   */
  public updateUser(
    param: UsersApiUpdateUserRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    return this.api
      .updateUser(param.userHandle, param.body, options)
      .toPromise();
  }
}

import { ObservableWebhooksIntegrationApi } from "./ObservableAPI";
import {
  WebhooksIntegrationApiRequestFactory,
  WebhooksIntegrationApiResponseProcessor,
} from "../apis/WebhooksIntegrationApi";

export interface WebhooksIntegrationApiCreateWebhooksIntegrationRequest {
  /**
   * Create a webhooks integration request body.
   * @type WebhooksIntegration
   * @memberof WebhooksIntegrationApicreateWebhooksIntegration
   */
  body: WebhooksIntegration;
}

export interface WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest {
  /**
   * Define a custom variable request body.
   * @type WebhooksIntegrationCustomVariable
   * @memberof WebhooksIntegrationApicreateWebhooksIntegrationCustomVariable
   */
  body: WebhooksIntegrationCustomVariable;
}

export interface WebhooksIntegrationApiDeleteWebhooksIntegrationRequest {
  /**
   * The name of the webhook.
   * @type string
   * @memberof WebhooksIntegrationApideleteWebhooksIntegration
   */
  webhookName: string;
}

export interface WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest {
  /**
   * The name of the custom variable.
   * @type string
   * @memberof WebhooksIntegrationApideleteWebhooksIntegrationCustomVariable
   */
  customVariableName: string;
}

export interface WebhooksIntegrationApiGetWebhooksIntegrationRequest {
  /**
   * The name of the webhook.
   * @type string
   * @memberof WebhooksIntegrationApigetWebhooksIntegration
   */
  webhookName: string;
}

export interface WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest {
  /**
   * The name of the custom variable.
   * @type string
   * @memberof WebhooksIntegrationApigetWebhooksIntegrationCustomVariable
   */
  customVariableName: string;
}

export interface WebhooksIntegrationApiUpdateWebhooksIntegrationRequest {
  /**
   * The name of the webhook.
   * @type string
   * @memberof WebhooksIntegrationApiupdateWebhooksIntegration
   */
  webhookName: string;
  /**
   * Update an existing Datadog-Webhooks integration.
   * @type WebhooksIntegrationUpdateRequest
   * @memberof WebhooksIntegrationApiupdateWebhooksIntegration
   */
  body: WebhooksIntegrationUpdateRequest;
}

export interface WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest {
  /**
   * The name of the custom variable.
   * @type string
   * @memberof WebhooksIntegrationApiupdateWebhooksIntegrationCustomVariable
   */
  customVariableName: string;
  /**
   * Update an existing custom variable request body.
   * @type WebhooksIntegrationCustomVariableUpdateRequest
   * @memberof WebhooksIntegrationApiupdateWebhooksIntegrationCustomVariable
   */
  body: WebhooksIntegrationCustomVariableUpdateRequest;
}

export class ObjectWebhooksIntegrationApi {
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
   * @param param the request object
   */
  public createWebhooksIntegration(
    param: WebhooksIntegrationApiCreateWebhooksIntegrationRequest,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    return this.api.createWebhooksIntegration(param.body, options).toPromise();
  }

  /**
   * Creates an endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * Create a custom variable
   * @param param the request object
   */
  public createWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    return this.api
      .createWebhooksIntegrationCustomVariable(param.body, options)
      .toPromise();
  }

  /**
   * Deletes the endpoint with the name `<WEBHOOK NAME>`.
   * Delete a webhook
   * @param param the request object
   */
  public deleteWebhooksIntegration(
    param: WebhooksIntegrationApiDeleteWebhooksIntegrationRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .deleteWebhooksIntegration(param.webhookName, options)
      .toPromise();
  }

  /**
   * Deletes the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * Delete a custom variable
   * @param param the request object
   */
  public deleteWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest,
    options?: Configuration
  ): Promise<void> {
    return this.api
      .deleteWebhooksIntegrationCustomVariable(
        param.customVariableName,
        options
      )
      .toPromise();
  }

  /**
   * Gets the content of the webhook with the name `<WEBHOOK_NAME>`.
   * Get a webhook integration
   * @param param the request object
   */
  public getWebhooksIntegration(
    param: WebhooksIntegrationApiGetWebhooksIntegrationRequest,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    return this.api
      .getWebhooksIntegration(param.webhookName, options)
      .toPromise();
  }

  /**
   * Shows the content of the custom variable with the name `<CUSTOM_VARIABLE_NAME>`.  If the custom variable is secret, the value does not return in the response payload.
   * Get a custom variable
   * @param param the request object
   */
  public getWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    return this.api
      .getWebhooksIntegrationCustomVariable(param.customVariableName, options)
      .toPromise();
  }

  /**
   * Updates the endpoint with the name `<WEBHOOK_NAME>`.
   * Update a webhook
   * @param param the request object
   */
  public updateWebhooksIntegration(
    param: WebhooksIntegrationApiUpdateWebhooksIntegrationRequest,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    return this.api
      .updateWebhooksIntegration(param.webhookName, param.body, options)
      .toPromise();
  }

  /**
   * Updates the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * Update a custom variable
   * @param param the request object
   */
  public updateWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    return this.api
      .updateWebhooksIntegrationCustomVariable(
        param.customVariableName,
        param.body,
        options
      )
      .toPromise();
  }
}
