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
import { HourlyUsageAttributionResponse } from "../models/HourlyUsageAttributionResponse";
import { HourlyUsageAttributionUsageType } from "../models/HourlyUsageAttributionUsageType";
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
import { MonthlyUsageAttributionResponse } from "../models/MonthlyUsageAttributionResponse";
import { MonthlyUsageAttributionSupportedMetrics } from "../models/MonthlyUsageAttributionSupportedMetrics";
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

import {
  AWSIntegrationApiRequestFactory,
  AWSIntegrationApiResponseProcessor,
} from "../apis/AWSIntegrationApi";

export interface AWSIntegrationApiCreateAWSAccountRequest {
  /**
   * AWS Request Object
   * @type AWSAccount
   */
  body: AWSAccount;
}

export interface AWSIntegrationApiCreateAWSTagFilterRequest {
  /**
   * Set an AWS tag filter using an &#x60;aws_account_identifier&#x60;, &#x60;namespace&#x60;, and filtering string. Namespace options are &#x60;application_elb&#x60;, &#x60;elb&#x60;, &#x60;lambda&#x60;, &#x60;network_elb&#x60;, &#x60;rds&#x60;, &#x60;sqs&#x60;, and &#x60;custom&#x60;.
   * @type AWSTagFilterCreateRequest
   */
  body: AWSTagFilterCreateRequest;
}

export interface AWSIntegrationApiCreateNewAWSExternalIDRequest {
  /**
   * Your Datadog role delegation name. For more information about your AWS account Role name, see the [Datadog AWS integration configuration info](https://docs.datadoghq.com/integrations/amazon_web_services/#setup).
   * @type AWSAccount
   */
  body: AWSAccount;
}

export interface AWSIntegrationApiDeleteAWSAccountRequest {
  /**
   * AWS request object
   * @type AWSAccountDeleteRequest
   */
  body: AWSAccountDeleteRequest;
}

export interface AWSIntegrationApiDeleteAWSTagFilterRequest {
  /**
   * Delete a tag filtering entry for a given AWS account and &#x60;dd-aws&#x60; namespace.
   * @type AWSTagFilterDeleteRequest
   */
  body: AWSTagFilterDeleteRequest;
}

export interface AWSIntegrationApiListAWSAccountsRequest {
  /**
   * Only return AWS accounts that matches this &#x60;account_id&#x60;.
   * @type string
   */
  accountId?: string;
  /**
   * Only return AWS accounts that matches this role_name.
   * @type string
   */
  roleName?: string;
  /**
   * Only return AWS accounts that matches this &#x60;access_key_id&#x60;.
   * @type string
   */
  accessKeyId?: string;
}

export interface AWSIntegrationApiListAWSTagFiltersRequest {
  /**
   * Only return AWS filters that matches this &#x60;account_id&#x60;.
   * @type string
   */
  accountId: string;
}

export interface AWSIntegrationApiUpdateAWSAccountRequest {
  /**
   * AWS request object
   * @type AWSAccount
   */
  body: AWSAccount;
  /**
   * Only return AWS accounts that matches this &#x60;account_id&#x60;.
   * @type string
   */
  accountId?: string;
  /**
   * Only return AWS accounts that match this &#x60;role_name&#x60;. Required if &#x60;account_id&#x60; is specified.
   * @type string
   */
  roleName?: string;
  /**
   * Only return AWS accounts that matches this &#x60;access_key_id&#x60;. Required if none of the other two options are specified.
   * @type string
   */
  accessKeyId?: string;
}

export class ObjectAWSIntegrationApi {
  private requestFactory: AWSIntegrationApiRequestFactory;
  private responseProcessor: AWSIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AWSIntegrationApiRequestFactory,
    responseProcessor?: AWSIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AWSIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AWSIntegrationApiResponseProcessor();
  }

  /**
   * Create a Datadog-Amazon Web Services integration. Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization. A unique AWS Account ID for role based authentication.
   * @param param The request object
   */
  public createAWSAccount(
    param: AWSIntegrationApiCreateAWSAccountRequest,
    options?: Configuration
  ): Promise<AWSAccountCreateResponse> {
    const requestContextPromise = this.requestFactory.createAWSAccount(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSAccount(responseContext);
        });
    });
  }

  /**
   * Set an AWS tag filter.
   * @param param The request object
   */
  public createAWSTagFilter(
    param: AWSIntegrationApiCreateAWSTagFilterRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.createAWSTagFilter(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSTagFilter(responseContext);
        });
    });
  }

  /**
   * Generate a new AWS external ID for a given AWS account ID and role name pair.
   * @param param The request object
   */
  public createNewAWSExternalID(
    param: AWSIntegrationApiCreateNewAWSExternalIDRequest,
    options?: Configuration
  ): Promise<AWSAccountCreateResponse> {
    const requestContextPromise = this.requestFactory.createNewAWSExternalID(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createNewAWSExternalID(responseContext);
        });
    });
  }

  /**
   * Delete a Datadog-AWS integration matching the specified `account_id` and `role_name parameters`.
   * @param param The request object
   */
  public deleteAWSAccount(
    param: AWSIntegrationApiDeleteAWSAccountRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteAWSAccount(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSAccount(responseContext);
        });
    });
  }

  /**
   * Delete a tag filtering entry.
   * @param param The request object
   */
  public deleteAWSTagFilter(
    param: AWSIntegrationApiDeleteAWSTagFilterRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteAWSTagFilter(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSTagFilter(responseContext);
        });
    });
  }

  /**
   * List all Datadog-AWS integrations available in your Datadog organization.
   * @param param The request object
   */
  public listAWSAccounts(
    param: AWSIntegrationApiListAWSAccountsRequest = {},
    options?: Configuration
  ): Promise<AWSAccountListResponse> {
    const requestContextPromise = this.requestFactory.listAWSAccounts(
      param.accountId,
      param.roleName,
      param.accessKeyId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSAccounts(responseContext);
        });
    });
  }

  /**
   * Get all AWS tag filters.
   * @param param The request object
   */
  public listAWSTagFilters(
    param: AWSIntegrationApiListAWSTagFiltersRequest,
    options?: Configuration
  ): Promise<AWSTagFilterListResponse> {
    const requestContextPromise = this.requestFactory.listAWSTagFilters(
      param.accountId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSTagFilters(responseContext);
        });
    });
  }

  /**
   * List all namespace rules for a given Datadog-AWS integration. This endpoint takes no arguments.
   * @param param The request object
   */
  public listAvailableAWSNamespaces(
    options?: Configuration
  ): Promise<Array<string>> {
    const requestContextPromise =
      this.requestFactory.listAvailableAWSNamespaces(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAvailableAWSNamespaces(
            responseContext
          );
        });
    });
  }

  /**
   * Update a Datadog-Amazon Web Services integration.
   * @param param The request object
   */
  public updateAWSAccount(
    param: AWSIntegrationApiUpdateAWSAccountRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.updateAWSAccount(
      param.body,
      param.accountId,
      param.roleName,
      param.accessKeyId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAWSAccount(responseContext);
        });
    });
  }
}

import {
  AWSLogsIntegrationApiRequestFactory,
  AWSLogsIntegrationApiResponseProcessor,
} from "../apis/AWSLogsIntegrationApi";

export interface AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest {
  /**
   * Check AWS Log Lambda Async request body.
   * @type AWSAccountAndLambdaRequest
   */
  body: AWSAccountAndLambdaRequest;
}

export interface AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest {
  /**
   * Check AWS Logs Async Services request body.
   * @type AWSLogsServicesRequest
   */
  body: AWSLogsServicesRequest;
}

export interface AWSLogsIntegrationApiCreateAWSLambdaARNRequest {
  /**
   * AWS Log Lambda Async request body.
   * @type AWSAccountAndLambdaRequest
   */
  body: AWSAccountAndLambdaRequest;
}

export interface AWSLogsIntegrationApiDeleteAWSLambdaARNRequest {
  /**
   * Delete AWS Lambda ARN request body.
   * @type AWSAccountAndLambdaRequest
   */
  body: AWSAccountAndLambdaRequest;
}

export interface AWSLogsIntegrationApiEnableAWSLogServicesRequest {
  /**
   * Enable AWS Log Services request body.
   * @type AWSLogsServicesRequest
   */
  body: AWSLogsServicesRequest;
}

export class ObjectAWSLogsIntegrationApi {
  private requestFactory: AWSLogsIntegrationApiRequestFactory;
  private responseProcessor: AWSLogsIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AWSLogsIntegrationApiRequestFactory,
    responseProcessor?: AWSLogsIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AWSLogsIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AWSLogsIntegrationApiResponseProcessor();
  }

  /**
   * Test if permissions are present to add a log-forwarding triggers for the given services and AWS account. The input is the same as for Enable an AWS service log collection. Subsequent requests will always repeat the above, so this endpoint can be polled intermittently instead of blocking.  - Returns a status of 'created' when it's checking if the Lambda exists in the account. - Returns a status of 'waiting' while checking. - Returns a status of 'checked and ok' if the Lambda exists. - Returns a status of 'error' if the Lambda does not exist.
   * @param param The request object
   */
  public checkAWSLogsLambdaAsync(
    param: AWSLogsIntegrationApiCheckAWSLogsLambdaAsyncRequest,
    options?: Configuration
  ): Promise<AWSLogsAsyncResponse> {
    const requestContextPromise = this.requestFactory.checkAWSLogsLambdaAsync(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.checkAWSLogsLambdaAsync(
            responseContext
          );
        });
    });
  }

  /**
   * Test if permissions are present to add log-forwarding triggers for the given services and AWS account. Input is the same as for `EnableAWSLogServices`. Done async, so can be repeatedly polled in a non-blocking fashion until the async request completes.  - Returns a status of `created` when it's checking if the permissions exists   in the AWS account. - Returns a status of `waiting` while checking. - Returns a status of `checked and ok` if the Lambda exists. - Returns a status of `error` if the Lambda does not exist.
   * @param param The request object
   */
  public checkAWSLogsServicesAsync(
    param: AWSLogsIntegrationApiCheckAWSLogsServicesAsyncRequest,
    options?: Configuration
  ): Promise<AWSLogsAsyncResponse> {
    const requestContextPromise = this.requestFactory.checkAWSLogsServicesAsync(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.checkAWSLogsServicesAsync(
            responseContext
          );
        });
    });
  }

  /**
   * Attach the Lambda ARN of the Lambda created for the Datadog-AWS log collection to your AWS account ID to enable log collection.
   * @param param The request object
   */
  public createAWSLambdaARN(
    param: AWSLogsIntegrationApiCreateAWSLambdaARNRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.createAWSLambdaARN(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAWSLambdaARN(responseContext);
        });
    });
  }

  /**
   * Delete a Datadog-AWS logs configuration by removing the specific Lambda ARN associated with a given AWS account.
   * @param param The request object
   */
  public deleteAWSLambdaARN(
    param: AWSLogsIntegrationApiDeleteAWSLambdaARNRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteAWSLambdaARN(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAWSLambdaARN(responseContext);
        });
    });
  }

  /**
   * Enable automatic log collection for a list of services. This should be run after running `CreateAWSLambdaARN` to save the configuration.
   * @param param The request object
   */
  public enableAWSLogServices(
    param: AWSLogsIntegrationApiEnableAWSLogServicesRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.enableAWSLogServices(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.enableAWSLogServices(responseContext);
        });
    });
  }

  /**
   * List all Datadog-AWS Logs integrations configured in your Datadog account.
   * @param param The request object
   */
  public listAWSLogsIntegrations(
    options?: Configuration
  ): Promise<Array<AWSLogsListResponse>> {
    const requestContextPromise =
      this.requestFactory.listAWSLogsIntegrations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSLogsIntegrations(
            responseContext
          );
        });
    });
  }

  /**
   * Get the list of current AWS services that Datadog offers automatic log collection. Use returned service IDs with the services parameter for the Enable an AWS service log collection API endpoint.
   * @param param The request object
   */
  public listAWSLogsServices(
    options?: Configuration
  ): Promise<Array<AWSLogsListServicesResponse>> {
    const requestContextPromise =
      this.requestFactory.listAWSLogsServices(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAWSLogsServices(responseContext);
        });
    });
  }
}

import {
  AuthenticationApiRequestFactory,
  AuthenticationApiResponseProcessor,
} from "../apis/AuthenticationApi";

export class ObjectAuthenticationApi {
  private requestFactory: AuthenticationApiRequestFactory;
  private responseProcessor: AuthenticationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AuthenticationApiRequestFactory,
    responseProcessor?: AuthenticationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AuthenticationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AuthenticationApiResponseProcessor();
  }

  /**
   * Check if the API key (not the APP key) is valid. If invalid, a 403 is returned.
   * @param param The request object
   */
  public validate(
    options?: Configuration
  ): Promise<AuthenticationValidationResponse> {
    const requestContextPromise = this.requestFactory.validate(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validate(responseContext);
        });
    });
  }
}

import {
  AzureIntegrationApiRequestFactory,
  AzureIntegrationApiResponseProcessor,
} from "../apis/AzureIntegrationApi";

export interface AzureIntegrationApiCreateAzureIntegrationRequest {
  /**
   * Create a Datadog-Azure integration for your Datadog account request body.
   * @type AzureAccount
   */
  body: AzureAccount;
}

export interface AzureIntegrationApiDeleteAzureIntegrationRequest {
  /**
   * Delete a given Datadog-Azure integration request body.
   * @type AzureAccount
   */
  body: AzureAccount;
}

export interface AzureIntegrationApiUpdateAzureHostFiltersRequest {
  /**
   * Update a Datadog-Azure integration&#39;s host filters request body.
   * @type AzureAccount
   */
  body: AzureAccount;
}

export interface AzureIntegrationApiUpdateAzureIntegrationRequest {
  /**
   * Update a Datadog-Azure integration request body.
   * @type AzureAccount
   */
  body: AzureAccount;
}

export class ObjectAzureIntegrationApi {
  private requestFactory: AzureIntegrationApiRequestFactory;
  private responseProcessor: AzureIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: AzureIntegrationApiRequestFactory,
    responseProcessor?: AzureIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new AzureIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new AzureIntegrationApiResponseProcessor();
  }

  /**
   * Create a Datadog-Azure integration.  Using the `POST` method updates your integration configuration by adding your new configuration to the existing one in your Datadog organization.  Using the `PUT` method updates your integration configuration by replacing your current configuration with the new one sent to your Datadog organization.
   * @param param The request object
   */
  public createAzureIntegration(
    param: AzureIntegrationApiCreateAzureIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.createAzureIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAzureIntegration(responseContext);
        });
    });
  }

  /**
   * Delete a given Datadog-Azure integration from your Datadog account.
   * @param param The request object
   */
  public deleteAzureIntegration(
    param: AzureIntegrationApiDeleteAzureIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteAzureIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAzureIntegration(responseContext);
        });
    });
  }

  /**
   * List all Datadog-Azure integrations configured in your Datadog account.
   * @param param The request object
   */
  public listAzureIntegration(
    options?: Configuration
  ): Promise<Array<AzureAccount>> {
    const requestContextPromise =
      this.requestFactory.listAzureIntegration(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAzureIntegration(responseContext);
        });
    });
  }

  /**
   * Update the defined list of host filters for a given Datadog-Azure integration.
   * @param param The request object
   */
  public updateAzureHostFilters(
    param: AzureIntegrationApiUpdateAzureHostFiltersRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.updateAzureHostFilters(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAzureHostFilters(responseContext);
        });
    });
  }

  /**
   * Update a Datadog-Azure integration. Requires an existing `tenant_name` and `client_id`. Any other fields supplied will overwrite existing values. To overwrite `tenant_name` or `client_id`, use `new_tenant_name` and `new_client_id`. To leave a field unchanged, do not supply that field in the payload.
   * @param param The request object
   */
  public updateAzureIntegration(
    param: AzureIntegrationApiUpdateAzureIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.updateAzureIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAzureIntegration(responseContext);
        });
    });
  }
}

import {
  DashboardListsApiRequestFactory,
  DashboardListsApiResponseProcessor,
} from "../apis/DashboardListsApi";

export interface DashboardListsApiCreateDashboardListRequest {
  /**
   * Create a dashboard list request body.
   * @type DashboardList
   */
  body: DashboardList;
}

export interface DashboardListsApiDeleteDashboardListRequest {
  /**
   * ID of the dashboard list to delete.
   * @type number
   */
  listId: number;
}

export interface DashboardListsApiGetDashboardListRequest {
  /**
   * ID of the dashboard list to fetch.
   * @type number
   */
  listId: number;
}

export interface DashboardListsApiUpdateDashboardListRequest {
  /**
   * ID of the dashboard list to update.
   * @type number
   */
  listId: number;
  /**
   * Update a dashboard list request body.
   * @type DashboardList
   */
  body: DashboardList;
}

export class ObjectDashboardListsApi {
  private requestFactory: DashboardListsApiRequestFactory;
  private responseProcessor: DashboardListsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DashboardListsApiRequestFactory,
    responseProcessor?: DashboardListsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DashboardListsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DashboardListsApiResponseProcessor();
  }

  /**
   * Create an empty dashboard list.
   * @param param The request object
   */
  public createDashboardList(
    param: DashboardListsApiCreateDashboardListRequest,
    options?: Configuration
  ): Promise<DashboardList> {
    const requestContextPromise = this.requestFactory.createDashboardList(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDashboardList(responseContext);
        });
    });
  }

  /**
   * Delete a dashboard list.
   * @param param The request object
   */
  public deleteDashboardList(
    param: DashboardListsApiDeleteDashboardListRequest,
    options?: Configuration
  ): Promise<DashboardListDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteDashboardList(
      param.listId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDashboardList(responseContext);
        });
    });
  }

  /**
   * Fetch an existing dashboard list's definition.
   * @param param The request object
   */
  public getDashboardList(
    param: DashboardListsApiGetDashboardListRequest,
    options?: Configuration
  ): Promise<DashboardList> {
    const requestContextPromise = this.requestFactory.getDashboardList(
      param.listId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboardList(responseContext);
        });
    });
  }

  /**
   * Fetch all of your existing dashboard list definitions.
   * @param param The request object
   */
  public listDashboardLists(
    options?: Configuration
  ): Promise<DashboardListListResponse> {
    const requestContextPromise =
      this.requestFactory.listDashboardLists(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDashboardLists(responseContext);
        });
    });
  }

  /**
   * Update the name of a dashboard list.
   * @param param The request object
   */
  public updateDashboardList(
    param: DashboardListsApiUpdateDashboardListRequest,
    options?: Configuration
  ): Promise<DashboardList> {
    const requestContextPromise = this.requestFactory.updateDashboardList(
      param.listId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDashboardList(responseContext);
        });
    });
  }
}

import {
  DashboardsApiRequestFactory,
  DashboardsApiResponseProcessor,
} from "../apis/DashboardsApi";

export interface DashboardsApiCreateDashboardRequest {
  /**
   * Create a dashboard request body.
   * @type Dashboard
   */
  body: Dashboard;
}

export interface DashboardsApiDeleteDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
}

export interface DashboardsApiDeleteDashboardsRequest {
  /**
   * Delete dashboards request body.
   * @type DashboardBulkDeleteRequest
   */
  body: DashboardBulkDeleteRequest;
}

export interface DashboardsApiGetDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
}

export interface DashboardsApiListDashboardsRequest {
  /**
   * When &#x60;true&#x60;, this query only returns shared custom created or cloned dashboards.
   * @type boolean
   */
  filterShared?: boolean;
  /**
   * When &#x60;true&#x60;, this query returns only deleted custom-created or cloned dashboards. This parameter is incompatible with &#x60;filter[shared]&#x60;.
   * @type boolean
   */
  filterDeleted?: boolean;
}

export interface DashboardsApiRestoreDashboardsRequest {
  /**
   * Restore dashboards request body.
   * @type DashboardRestoreRequest
   */
  body: DashboardRestoreRequest;
}

export interface DashboardsApiUpdateDashboardRequest {
  /**
   * The ID of the dashboard.
   * @type string
   */
  dashboardId: string;
  /**
   * Update Dashboard request body.
   * @type Dashboard
   */
  body: Dashboard;
}

export class ObjectDashboardsApi {
  private requestFactory: DashboardsApiRequestFactory;
  private responseProcessor: DashboardsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DashboardsApiRequestFactory,
    responseProcessor?: DashboardsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DashboardsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DashboardsApiResponseProcessor();
  }

  /**
   * Create a dashboard using the specified options. When defining queries in your widgets, take note of which queries should have the `as_count()` or `as_rate()` modifiers appended. Refer to the following [documentation](https://docs.datadoghq.com/developers/metrics/type_modifiers/?tab=count#in-application-modifiers) for more information on these modifiers.
   * @param param The request object
   */
  public createDashboard(
    param: DashboardsApiCreateDashboardRequest,
    options?: Configuration
  ): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.createDashboard(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDashboard(responseContext);
        });
    });
  }

  /**
   * Delete a dashboard using the specified ID.
   * @param param The request object
   */
  public deleteDashboard(
    param: DashboardsApiDeleteDashboardRequest,
    options?: Configuration
  ): Promise<DashboardDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteDashboard(
      param.dashboardId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDashboard(responseContext);
        });
    });
  }

  /**
   * Delete dashboards using the specified IDs. If there are any failures, no dashboards will be deleted (partial success is not allowed).
   * @param param The request object
   */
  public deleteDashboards(
    param: DashboardsApiDeleteDashboardsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteDashboards(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteDashboards(responseContext);
        });
    });
  }

  /**
   * Get a dashboard using the specified ID.
   * @param param The request object
   */
  public getDashboard(
    param: DashboardsApiGetDashboardRequest,
    options?: Configuration
  ): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.getDashboard(
      param.dashboardId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDashboard(responseContext);
        });
    });
  }

  /**
   * Get all dashboards.  **Note**: This query will only return custom created or cloned dashboards. This query will not return preset dashboards.
   * @param param The request object
   */
  public listDashboards(
    param: DashboardsApiListDashboardsRequest = {},
    options?: Configuration
  ): Promise<DashboardSummary> {
    const requestContextPromise = this.requestFactory.listDashboards(
      param.filterShared,
      param.filterDeleted,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDashboards(responseContext);
        });
    });
  }

  /**
   * Restore dashboards using the specified IDs. If there are any failures, no dashboards will be restored (partial success is not allowed).
   * @param param The request object
   */
  public restoreDashboards(
    param: DashboardsApiRestoreDashboardsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.restoreDashboards(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.restoreDashboards(responseContext);
        });
    });
  }

  /**
   * Update a dashboard using the specified ID.
   * @param param The request object
   */
  public updateDashboard(
    param: DashboardsApiUpdateDashboardRequest,
    options?: Configuration
  ): Promise<Dashboard> {
    const requestContextPromise = this.requestFactory.updateDashboard(
      param.dashboardId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDashboard(responseContext);
        });
    });
  }
}

import {
  DowntimesApiRequestFactory,
  DowntimesApiResponseProcessor,
} from "../apis/DowntimesApi";

export interface DowntimesApiCancelDowntimeRequest {
  /**
   * ID of the downtime to cancel.
   * @type number
   */
  downtimeId: number;
}

export interface DowntimesApiCancelDowntimesByScopeRequest {
  /**
   * Scope to cancel downtimes for.
   * @type CancelDowntimesByScopeRequest
   */
  body: CancelDowntimesByScopeRequest;
}

export interface DowntimesApiCreateDowntimeRequest {
  /**
   * Schedule a downtime request body.
   * @type Downtime
   */
  body: Downtime;
}

export interface DowntimesApiGetDowntimeRequest {
  /**
   * ID of the downtime to fetch.
   * @type number
   */
  downtimeId: number;
}

export interface DowntimesApiListDowntimesRequest {
  /**
   * Only return downtimes that are active when the request is made.
   * @type boolean
   */
  currentOnly?: boolean;
}

export interface DowntimesApiListMonitorDowntimesRequest {
  /**
   * The id of the monitor
   * @type number
   */
  monitorId: number;
}

export interface DowntimesApiUpdateDowntimeRequest {
  /**
   * ID of the downtime to update.
   * @type number
   */
  downtimeId: number;
  /**
   * Update a downtime request body.
   * @type Downtime
   */
  body: Downtime;
}

export class ObjectDowntimesApi {
  private requestFactory: DowntimesApiRequestFactory;
  private responseProcessor: DowntimesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: DowntimesApiRequestFactory,
    responseProcessor?: DowntimesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new DowntimesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new DowntimesApiResponseProcessor();
  }

  /**
   * Cancel a downtime.
   * @param param The request object
   */
  public cancelDowntime(
    param: DowntimesApiCancelDowntimeRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.cancelDowntime(
      param.downtimeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelDowntime(responseContext);
        });
    });
  }

  /**
   * Delete all downtimes that match the scope of `X`.
   * @param param The request object
   */
  public cancelDowntimesByScope(
    param: DowntimesApiCancelDowntimesByScopeRequest,
    options?: Configuration
  ): Promise<CanceledDowntimesIds> {
    const requestContextPromise = this.requestFactory.cancelDowntimesByScope(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.cancelDowntimesByScope(responseContext);
        });
    });
  }

  /**
   * Schedule a downtime.
   * @param param The request object
   */
  public createDowntime(
    param: DowntimesApiCreateDowntimeRequest,
    options?: Configuration
  ): Promise<Downtime> {
    const requestContextPromise = this.requestFactory.createDowntime(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createDowntime(responseContext);
        });
    });
  }

  /**
   * Get downtime detail by `downtime_id`.
   * @param param The request object
   */
  public getDowntime(
    param: DowntimesApiGetDowntimeRequest,
    options?: Configuration
  ): Promise<Downtime> {
    const requestContextPromise = this.requestFactory.getDowntime(
      param.downtimeId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDowntime(responseContext);
        });
    });
  }

  /**
   * Get all scheduled downtimes.
   * @param param The request object
   */
  public listDowntimes(
    param: DowntimesApiListDowntimesRequest = {},
    options?: Configuration
  ): Promise<Array<Downtime>> {
    const requestContextPromise = this.requestFactory.listDowntimes(
      param.currentOnly,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listDowntimes(responseContext);
        });
    });
  }

  /**
   * Get all active downtimes for the specified monitor.
   * @param param The request object
   */
  public listMonitorDowntimes(
    param: DowntimesApiListMonitorDowntimesRequest,
    options?: Configuration
  ): Promise<Array<Downtime>> {
    const requestContextPromise = this.requestFactory.listMonitorDowntimes(
      param.monitorId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMonitorDowntimes(responseContext);
        });
    });
  }

  /**
   * Update a single downtime by `downtime_id`.
   * @param param The request object
   */
  public updateDowntime(
    param: DowntimesApiUpdateDowntimeRequest,
    options?: Configuration
  ): Promise<Downtime> {
    const requestContextPromise = this.requestFactory.updateDowntime(
      param.downtimeId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateDowntime(responseContext);
        });
    });
  }
}

import {
  EventsApiRequestFactory,
  EventsApiResponseProcessor,
} from "../apis/EventsApi";

export interface EventsApiCreateEventRequest {
  /**
   * Event request object
   * @type EventCreateRequest
   */
  body: EventCreateRequest;
}

export interface EventsApiGetEventRequest {
  /**
   * The ID of the event.
   * @type number
   */
  eventId: number;
}

export interface EventsApiListEventsRequest {
  /**
   * POSIX timestamp.
   * @type number
   */
  start: number;
  /**
   * POSIX timestamp.
   * @type number
   */
  end: number;
  /**
   * Priority of your events, either &#x60;low&#x60; or &#x60;normal&#x60;.
   * @type EventPriority
   */
  priority?: EventPriority;
  /**
   * A comma separated string of sources.
   * @type string
   */
  sources?: string;
  /**
   * A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope.
   * @type string
   */
  tags?: string;
  /**
   * Set unaggregated to &#x60;true&#x60; to return all events within the specified [&#x60;start&#x60;,&#x60;end&#x60;] timeframe. Otherwise if an event is aggregated to a parent event with a timestamp outside of the timeframe, it won&#39;t be available in the output. Aggregated events with &#x60;is_aggregate&#x3D;true&#x60; in the response will still be returned unless exclude_aggregate is set to &#x60;true.&#x60;
   * @type boolean
   */
  unaggregated?: boolean;
  /**
   * Set &#x60;exclude_aggregate&#x60; to &#x60;true&#x60; to only return unaggregated events where &#x60;is_aggregate&#x3D;false&#x60; in the response. If the &#x60;exclude_aggregate&#x60; parameter is set to &#x60;true&#x60;, then the unaggregated parameter is ignored and will be &#x60;true&#x60; by default.
   * @type boolean
   */
  excludeAggregate?: boolean;
  /**
   * By default 1000 results are returned per request. Set page to the number of the page to return with &#x60;0&#x60; being the first page. The page parameter can only be used when either unaggregated or exclude_aggregate is set to &#x60;true.&#x60;
   * @type number
   */
  page?: number;
}

export class ObjectEventsApi {
  private requestFactory: EventsApiRequestFactory;
  private responseProcessor: EventsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: EventsApiRequestFactory,
    responseProcessor?: EventsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new EventsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new EventsApiResponseProcessor();
  }

  /**
   * This endpoint allows you to post events to the stream. Tag them, set priority and event aggregate them with other events.
   * @param param The request object
   */
  public createEvent(
    param: EventsApiCreateEventRequest,
    options?: Configuration
  ): Promise<EventCreateResponse> {
    const requestContextPromise = this.requestFactory.createEvent(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createEvent(responseContext);
        });
    });
  }

  /**
   * This endpoint allows you to query for event details.  **Note**: If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.
   * @param param The request object
   */
  public getEvent(
    param: EventsApiGetEventRequest,
    options?: Configuration
  ): Promise<EventResponse> {
    const requestContextPromise = this.requestFactory.getEvent(
      param.eventId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getEvent(responseContext);
        });
    });
  }

  /**
   * The event stream can be queried and filtered by time, priority, sources and tags.  **Notes**: - If the event you’re querying contains markdown formatting of any kind, you may see characters such as `%`,`\\`,`n` in your output.  - This endpoint returns a maximum of `1000` most recent results. To return additional results, identify the last timestamp of the last result and set that as the `end` query time to paginate the results. You can also use the page parameter to specify which set of `1000` results to return.
   * @param param The request object
   */
  public listEvents(
    param: EventsApiListEventsRequest,
    options?: Configuration
  ): Promise<EventListResponse> {
    const requestContextPromise = this.requestFactory.listEvents(
      param.start,
      param.end,
      param.priority,
      param.sources,
      param.tags,
      param.unaggregated,
      param.excludeAggregate,
      param.page,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listEvents(responseContext);
        });
    });
  }
}

import {
  GCPIntegrationApiRequestFactory,
  GCPIntegrationApiResponseProcessor,
} from "../apis/GCPIntegrationApi";

export interface GCPIntegrationApiCreateGCPIntegrationRequest {
  /**
   * Create a Datadog-GCP integration.
   * @type GCPAccount
   */
  body: GCPAccount;
}

export interface GCPIntegrationApiDeleteGCPIntegrationRequest {
  /**
   * Delete a given Datadog-GCP integration.
   * @type GCPAccount
   */
  body: GCPAccount;
}

export interface GCPIntegrationApiUpdateGCPIntegrationRequest {
  /**
   * Update a Datadog-GCP integration.
   * @type GCPAccount
   */
  body: GCPAccount;
}

export class ObjectGCPIntegrationApi {
  private requestFactory: GCPIntegrationApiRequestFactory;
  private responseProcessor: GCPIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: GCPIntegrationApiRequestFactory,
    responseProcessor?: GCPIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new GCPIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new GCPIntegrationApiResponseProcessor();
  }

  /**
   * Create a Datadog-GCP integration.
   * @param param The request object
   */
  public createGCPIntegration(
    param: GCPIntegrationApiCreateGCPIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.createGCPIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGCPIntegration(responseContext);
        });
    });
  }

  /**
   * Delete a given Datadog-GCP integration.
   * @param param The request object
   */
  public deleteGCPIntegration(
    param: GCPIntegrationApiDeleteGCPIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.deleteGCPIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGCPIntegration(responseContext);
        });
    });
  }

  /**
   * List all Datadog-GCP integrations configured in your Datadog account.
   * @param param The request object
   */
  public listGCPIntegration(
    options?: Configuration
  ): Promise<Array<GCPAccount>> {
    const requestContextPromise =
      this.requestFactory.listGCPIntegration(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGCPIntegration(responseContext);
        });
    });
  }

  /**
   * Update a Datadog-GCP integrations host_filters and/or auto-mute. Requires a `project_id` and `client_email`, however these fields cannot be updated. If you need to update these fields, delete and use the create (`POST`) endpoint. The unspecified fields will keep their original values.
   * @param param The request object
   */
  public updateGCPIntegration(
    param: GCPIntegrationApiUpdateGCPIntegrationRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.updateGCPIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateGCPIntegration(responseContext);
        });
    });
  }
}

import {
  HostsApiRequestFactory,
  HostsApiResponseProcessor,
} from "../apis/HostsApi";

export interface HostsApiGetHostTotalsRequest {
  /**
   * Number of seconds from which you want to get total number of active hosts.
   * @type number
   */
  from?: number;
}

export interface HostsApiListHostsRequest {
  /**
   * String to filter search results.
   * @type string
   */
  filter?: string;
  /**
   * Sort hosts by this field.
   * @type string
   */
  sortField?: string;
  /**
   * Direction of sort. Options include &#x60;asc&#x60; and &#x60;desc&#x60;.
   * @type string
   */
  sortDir?: string;
  /**
   * Host result to start search from.
   * @type number
   */
  start?: number;
  /**
   * Number of hosts to return. Max 1000.
   * @type number
   */
  count?: number;
  /**
   * Number of seconds since UNIX epoch from which you want to search your hosts.
   * @type number
   */
  from?: number;
  /**
   * Include information on the muted status of hosts and when the mute expires.
   * @type boolean
   */
  includeMutedHostsData?: boolean;
  /**
   * Include additional metadata about the hosts (agent_version, machine, platform, processor, etc.).
   * @type boolean
   */
  includeHostsMetadata?: boolean;
}

export interface HostsApiMuteHostRequest {
  /**
   * Name of the host to mute.
   * @type string
   */
  hostName: string;
  /**
   * Mute a host request body.
   * @type HostMuteSettings
   */
  body: HostMuteSettings;
}

export interface HostsApiUnmuteHostRequest {
  /**
   * Name of the host to unmute.
   * @type string
   */
  hostName: string;
}

export class ObjectHostsApi {
  private requestFactory: HostsApiRequestFactory;
  private responseProcessor: HostsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: HostsApiRequestFactory,
    responseProcessor?: HostsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new HostsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new HostsApiResponseProcessor();
  }

  /**
   * This endpoint returns the total number of active and up hosts in your Datadog account. Active means the host has reported in the past hour, and up means it has reported in the past two hours.
   * @param param The request object
   */
  public getHostTotals(
    param: HostsApiGetHostTotalsRequest = {},
    options?: Configuration
  ): Promise<HostTotals> {
    const requestContextPromise = this.requestFactory.getHostTotals(
      param.from,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHostTotals(responseContext);
        });
    });
  }

  /**
   * This endpoint allows searching for hosts by name, alias, or tag. Hosts live within the past 3 hours are included by default. Retention is 7 days. Results are paginated with a max of 1000 results at a time.
   * @param param The request object
   */
  public listHosts(
    param: HostsApiListHostsRequest = {},
    options?: Configuration
  ): Promise<HostListResponse> {
    const requestContextPromise = this.requestFactory.listHosts(
      param.filter,
      param.sortField,
      param.sortDir,
      param.start,
      param.count,
      param.from,
      param.includeMutedHostsData,
      param.includeHostsMetadata,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listHosts(responseContext);
        });
    });
  }

  /**
   * Mute a host.
   * @param param The request object
   */
  public muteHost(
    param: HostsApiMuteHostRequest,
    options?: Configuration
  ): Promise<HostMuteResponse> {
    const requestContextPromise = this.requestFactory.muteHost(
      param.hostName,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.muteHost(responseContext);
        });
    });
  }

  /**
   * Unmutes a host. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public unmuteHost(
    param: HostsApiUnmuteHostRequest,
    options?: Configuration
  ): Promise<HostMuteResponse> {
    const requestContextPromise = this.requestFactory.unmuteHost(
      param.hostName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.unmuteHost(responseContext);
        });
    });
  }
}

import {
  IPRangesApiRequestFactory,
  IPRangesApiResponseProcessor,
} from "../apis/IPRangesApi";

export class ObjectIPRangesApi {
  private requestFactory: IPRangesApiRequestFactory;
  private responseProcessor: IPRangesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: IPRangesApiRequestFactory,
    responseProcessor?: IPRangesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new IPRangesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new IPRangesApiResponseProcessor();
  }

  /**
   * Get information about Datadog IP ranges.
   * @param param The request object
   */
  public getIPRanges(options?: Configuration): Promise<IPRanges> {
    const requestContextPromise = this.requestFactory.getIPRanges(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIPRanges(responseContext);
        });
    });
  }
}

import {
  KeyManagementApiRequestFactory,
  KeyManagementApiResponseProcessor,
} from "../apis/KeyManagementApi";

export interface KeyManagementApiCreateAPIKeyRequest {
  /**
   *
   * @type ApiKey
   */
  body: ApiKey;
}

export interface KeyManagementApiCreateApplicationKeyRequest {
  /**
   *
   * @type ApplicationKey
   */
  body: ApplicationKey;
}

export interface KeyManagementApiDeleteAPIKeyRequest {
  /**
   * The specific API key you are working with.
   * @type string
   */
  key: string;
}

export interface KeyManagementApiDeleteApplicationKeyRequest {
  /**
   * The specific APP key you are working with.
   * @type string
   */
  key: string;
}

export interface KeyManagementApiGetAPIKeyRequest {
  /**
   * The specific API key you are working with.
   * @type string
   */
  key: string;
}

export interface KeyManagementApiGetApplicationKeyRequest {
  /**
   * The specific APP key you are working with.
   * @type string
   */
  key: string;
}

export interface KeyManagementApiUpdateAPIKeyRequest {
  /**
   * The specific API key you are working with.
   * @type string
   */
  key: string;
  /**
   *
   * @type ApiKey
   */
  body: ApiKey;
}

export interface KeyManagementApiUpdateApplicationKeyRequest {
  /**
   * The specific APP key you are working with.
   * @type string
   */
  key: string;
  /**
   *
   * @type ApplicationKey
   */
  body: ApplicationKey;
}

export class ObjectKeyManagementApi {
  private requestFactory: KeyManagementApiRequestFactory;
  private responseProcessor: KeyManagementApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: KeyManagementApiRequestFactory,
    responseProcessor?: KeyManagementApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new KeyManagementApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new KeyManagementApiResponseProcessor();
  }

  /**
   * Creates an API key with a given name.
   * @param param The request object
   */
  public createAPIKey(
    param: KeyManagementApiCreateAPIKeyRequest,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    const requestContextPromise = this.requestFactory.createAPIKey(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createAPIKey(responseContext);
        });
    });
  }

  /**
   * Create an application key with a given name.
   * @param param The request object
   */
  public createApplicationKey(
    param: KeyManagementApiCreateApplicationKeyRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.createApplicationKey(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createApplicationKey(responseContext);
        });
    });
  }

  /**
   * Delete a given API key.
   * @param param The request object
   */
  public deleteAPIKey(
    param: KeyManagementApiDeleteAPIKeyRequest,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    const requestContextPromise = this.requestFactory.deleteAPIKey(
      param.key,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteAPIKey(responseContext);
        });
    });
  }

  /**
   * Delete a given application key.
   * @param param The request object
   */
  public deleteApplicationKey(
    param: KeyManagementApiDeleteApplicationKeyRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.deleteApplicationKey(
      param.key,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteApplicationKey(responseContext);
        });
    });
  }

  /**
   * Get a given API key.
   * @param param The request object
   */
  public getAPIKey(
    param: KeyManagementApiGetAPIKeyRequest,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    const requestContextPromise = this.requestFactory.getAPIKey(
      param.key,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAPIKey(responseContext);
        });
    });
  }

  /**
   * Get a given application key.
   * @param param The request object
   */
  public getApplicationKey(
    param: KeyManagementApiGetApplicationKeyRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.getApplicationKey(
      param.key,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getApplicationKey(responseContext);
        });
    });
  }

  /**
   * Get all API keys available for your account.
   * @param param The request object
   */
  public listAPIKeys(options?: Configuration): Promise<ApiKeyListResponse> {
    const requestContextPromise = this.requestFactory.listAPIKeys(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listAPIKeys(responseContext);
        });
    });
  }

  /**
   * Get all application keys available for your Datadog account.
   * @param param The request object
   */
  public listApplicationKeys(
    options?: Configuration
  ): Promise<ApplicationKeyListResponse> {
    const requestContextPromise =
      this.requestFactory.listApplicationKeys(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listApplicationKeys(responseContext);
        });
    });
  }

  /**
   * Edit an API key name.
   * @param param The request object
   */
  public updateAPIKey(
    param: KeyManagementApiUpdateAPIKeyRequest,
    options?: Configuration
  ): Promise<ApiKeyResponse> {
    const requestContextPromise = this.requestFactory.updateAPIKey(
      param.key,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAPIKey(responseContext);
        });
    });
  }

  /**
   * Edit an application key name.
   * @param param The request object
   */
  public updateApplicationKey(
    param: KeyManagementApiUpdateApplicationKeyRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.updateApplicationKey(
      param.key,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateApplicationKey(responseContext);
        });
    });
  }
}

import {
  LogsApiRequestFactory,
  LogsApiResponseProcessor,
} from "../apis/LogsApi";

export interface LogsApiListLogsRequest {
  /**
   * Logs filter
   * @type LogsListRequest
   */
  body: LogsListRequest;
}

export interface LogsApiSubmitLogRequest {
  /**
   * Log to send (JSON format).
   * @type Array&lt;HTTPLogItem&gt;
   */
  body: Array<HTTPLogItem>;
  /**
   * HTTP header used to compress the media-type.
   * @type ContentEncoding
   */
  contentEncoding?: ContentEncoding;
  /**
   * Log tags can be passed as query parameters with &#x60;text/plain&#x60; content type.
   * @type string
   */
  ddtags?: string;
}

export class ObjectLogsApi {
  private requestFactory: LogsApiRequestFactory;
  private responseProcessor: LogsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsApiRequestFactory,
    responseProcessor?: LogsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsApiResponseProcessor();
  }

  /**
   * List endpoint returns logs that match a log search query. [Results are paginated][1].  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
   * @param param The request object
   */
  public listLogs(
    param: LogsApiListLogsRequest,
    options?: Configuration
  ): Promise<LogsListResponse> {
    const requestContextPromise = this.requestFactory.listLogs(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogs(responseContext);
        });
    });
  }

  /**
   * Send your logs to your Datadog platform over HTTP. Limits per HTTP request are:  - Maximum content size per payload (uncompressed): 5MB - Maximum size for a single log: 1MB - Maximum array size if sending multiple logs in an array: 1000 entries  Any log exceeding 1MB is accepted and truncated by Datadog: - For a single log request, the API truncates the log at 1MB and returns a 2xx. - For a multi-logs request, the API processes all logs, truncates only logs larger than 1MB, and returns a 2xx.  Datadog recommends sending your logs compressed. Add the `Content-Encoding: gzip` header to the request when sending compressed logs.  The status codes answered by the HTTP API are: - 200: OK - 400: Bad request (likely an issue in the payload formatting) - 403: Permission issue (likely using an invalid API Key) - 413: Payload too large (batch is above 5MB uncompressed) - 5xx: Internal error, request should be retried after some time
   * @param param The request object
   */
  public submitLog(
    param: LogsApiSubmitLogRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.submitLog(
      param.body,
      param.contentEncoding,
      param.ddtags,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitLog(responseContext);
        });
    });
  }
}

import {
  LogsIndexesApiRequestFactory,
  LogsIndexesApiResponseProcessor,
} from "../apis/LogsIndexesApi";

export interface LogsIndexesApiCreateLogsIndexRequest {
  /**
   * Object containing the new index.
   * @type LogsIndex
   */
  body: LogsIndex;
}

export interface LogsIndexesApiGetLogsIndexRequest {
  /**
   * Name of the log index.
   * @type string
   */
  name: string;
}

export interface LogsIndexesApiUpdateLogsIndexRequest {
  /**
   * Name of the log index.
   * @type string
   */
  name: string;
  /**
   * Object containing the new &#x60;LogsIndexUpdateRequest&#x60;.
   * @type LogsIndexUpdateRequest
   */
  body: LogsIndexUpdateRequest;
}

export interface LogsIndexesApiUpdateLogsIndexOrderRequest {
  /**
   * Object containing the new ordered list of index names
   * @type LogsIndexesOrder
   */
  body: LogsIndexesOrder;
}

export class ObjectLogsIndexesApi {
  private requestFactory: LogsIndexesApiRequestFactory;
  private responseProcessor: LogsIndexesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsIndexesApiRequestFactory,
    responseProcessor?: LogsIndexesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsIndexesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsIndexesApiResponseProcessor();
  }

  /**
   * Creates a new index. Returns the Index object passed in the request body when the request is successful.
   * @param param The request object
   */
  public createLogsIndex(
    param: LogsIndexesApiCreateLogsIndexRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    const requestContextPromise = this.requestFactory.createLogsIndex(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLogsIndex(responseContext);
        });
    });
  }

  /**
   * Get one log index from your organization. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public getLogsIndex(
    param: LogsIndexesApiGetLogsIndexRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    const requestContextPromise = this.requestFactory.getLogsIndex(
      param.name,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsIndex(responseContext);
        });
    });
  }

  /**
   * Get the current order of your log indexes. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public getLogsIndexOrder(options?: Configuration): Promise<LogsIndexesOrder> {
    const requestContextPromise =
      this.requestFactory.getLogsIndexOrder(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsIndexOrder(responseContext);
        });
    });
  }

  /**
   * The Index object describes the configuration of a log index. This endpoint returns an array of the `LogIndex` objects of your organization.
   * @param param The request object
   */
  public listLogIndexes(
    options?: Configuration
  ): Promise<LogsIndexListResponse> {
    const requestContextPromise = this.requestFactory.listLogIndexes(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogIndexes(responseContext);
        });
    });
  }

  /**
   * Update an index as identified by its name. Returns the Index object passed in the request body when the request is successful.  Using the `PUT` method updates your index’s configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
   * @param param The request object
   */
  public updateLogsIndex(
    param: LogsIndexesApiUpdateLogsIndexRequest,
    options?: Configuration
  ): Promise<LogsIndex> {
    const requestContextPromise = this.requestFactory.updateLogsIndex(
      param.name,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsIndex(responseContext);
        });
    });
  }

  /**
   * This endpoint updates the index order of your organization. It returns the index order object passed in the request body when the request is successful.
   * @param param The request object
   */
  public updateLogsIndexOrder(
    param: LogsIndexesApiUpdateLogsIndexOrderRequest,
    options?: Configuration
  ): Promise<LogsIndexesOrder> {
    const requestContextPromise = this.requestFactory.updateLogsIndexOrder(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsIndexOrder(responseContext);
        });
    });
  }
}

import {
  LogsPipelinesApiRequestFactory,
  LogsPipelinesApiResponseProcessor,
} from "../apis/LogsPipelinesApi";

export interface LogsPipelinesApiCreateLogsPipelineRequest {
  /**
   * Definition of the new pipeline.
   * @type LogsPipeline
   */
  body: LogsPipeline;
}

export interface LogsPipelinesApiDeleteLogsPipelineRequest {
  /**
   * ID of the pipeline to delete.
   * @type string
   */
  pipelineId: string;
}

export interface LogsPipelinesApiGetLogsPipelineRequest {
  /**
   * ID of the pipeline to get.
   * @type string
   */
  pipelineId: string;
}

export interface LogsPipelinesApiUpdateLogsPipelineRequest {
  /**
   * ID of the pipeline to delete.
   * @type string
   */
  pipelineId: string;
  /**
   * New definition of the pipeline.
   * @type LogsPipeline
   */
  body: LogsPipeline;
}

export interface LogsPipelinesApiUpdateLogsPipelineOrderRequest {
  /**
   * Object containing the new ordered list of pipeline IDs.
   * @type LogsPipelinesOrder
   */
  body: LogsPipelinesOrder;
}

export class ObjectLogsPipelinesApi {
  private requestFactory: LogsPipelinesApiRequestFactory;
  private responseProcessor: LogsPipelinesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsPipelinesApiRequestFactory,
    responseProcessor?: LogsPipelinesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsPipelinesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsPipelinesApiResponseProcessor();
  }

  /**
   * Create a pipeline in your organization.
   * @param param The request object
   */
  public createLogsPipeline(
    param: LogsPipelinesApiCreateLogsPipelineRequest,
    options?: Configuration
  ): Promise<LogsPipeline> {
    const requestContextPromise = this.requestFactory.createLogsPipeline(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createLogsPipeline(responseContext);
        });
    });
  }

  /**
   * Delete a given pipeline from your organization. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public deleteLogsPipeline(
    param: LogsPipelinesApiDeleteLogsPipelineRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteLogsPipeline(
      param.pipelineId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteLogsPipeline(responseContext);
        });
    });
  }

  /**
   * Get a specific pipeline from your organization. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public getLogsPipeline(
    param: LogsPipelinesApiGetLogsPipelineRequest,
    options?: Configuration
  ): Promise<LogsPipeline> {
    const requestContextPromise = this.requestFactory.getLogsPipeline(
      param.pipelineId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsPipeline(responseContext);
        });
    });
  }

  /**
   * Get the current order of your pipelines. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public getLogsPipelineOrder(
    options?: Configuration
  ): Promise<LogsPipelinesOrder> {
    const requestContextPromise =
      this.requestFactory.getLogsPipelineOrder(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getLogsPipelineOrder(responseContext);
        });
    });
  }

  /**
   * Get all pipelines from your organization. This endpoint takes no JSON arguments.
   * @param param The request object
   */
  public listLogsPipelines(
    options?: Configuration
  ): Promise<Array<LogsPipeline>> {
    const requestContextPromise =
      this.requestFactory.listLogsPipelines(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLogsPipelines(responseContext);
        });
    });
  }

  /**
   * Update a given pipeline configuration to change it’s processors or their order.  **Note**: Using this method updates your pipeline configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
   * @param param The request object
   */
  public updateLogsPipeline(
    param: LogsPipelinesApiUpdateLogsPipelineRequest,
    options?: Configuration
  ): Promise<LogsPipeline> {
    const requestContextPromise = this.requestFactory.updateLogsPipeline(
      param.pipelineId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsPipeline(responseContext);
        });
    });
  }

  /**
   * Update the order of your pipelines. Since logs are processed sequentially, reordering a pipeline may change the structure and content of the data processed by other pipelines and their processors.  **Note**: Using the `PUT` method updates your pipeline order by replacing your current order with the new one sent to your Datadog organization.
   * @param param The request object
   */
  public updateLogsPipelineOrder(
    param: LogsPipelinesApiUpdateLogsPipelineOrderRequest,
    options?: Configuration
  ): Promise<LogsPipelinesOrder> {
    const requestContextPromise = this.requestFactory.updateLogsPipelineOrder(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateLogsPipelineOrder(
            responseContext
          );
        });
    });
  }
}

import {
  MetricsApiRequestFactory,
  MetricsApiResponseProcessor,
} from "../apis/MetricsApi";

export interface MetricsApiGetMetricMetadataRequest {
  /**
   * Name of the metric for which to get metadata.
   * @type string
   */
  metricName: string;
}

export interface MetricsApiListActiveMetricsRequest {
  /**
   * Seconds since the Unix epoch.
   * @type number
   */
  from: number;
  /**
   * Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag.
   * @type string
   */
  host?: string;
  /**
   * Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
   * @type string
   */
  tagFilter?: string;
}

export interface MetricsApiListMetricsRequest {
  /**
   * Query string to search metrics upon. Must be prefixed with &#x60;metrics:&#x60;.
   * @type string
   */
  q: string;
}

export interface MetricsApiQueryMetricsRequest {
  /**
   * Start of the queried time period, seconds since the Unix epoch.
   * @type number
   */
  from: number;
  /**
   * End of the queried time period, seconds since the Unix epoch.
   * @type number
   */
  to: number;
  /**
   * Query string.
   * @type string
   */
  query: string;
}

export interface MetricsApiSubmitMetricsRequest {
  /**
   *
   * @type MetricsPayload
   */
  body: MetricsPayload;
  /**
   * HTTP header used to compress the media-type.
   * @type MetricContentEncoding
   */
  contentEncoding?: MetricContentEncoding;
}

export interface MetricsApiUpdateMetricMetadataRequest {
  /**
   * Name of the metric for which to edit metadata.
   * @type string
   */
  metricName: string;
  /**
   * New metadata.
   * @type MetricMetadata
   */
  body: MetricMetadata;
}

export class ObjectMetricsApi {
  private requestFactory: MetricsApiRequestFactory;
  private responseProcessor: MetricsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: MetricsApiRequestFactory,
    responseProcessor?: MetricsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new MetricsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new MetricsApiResponseProcessor();
  }

  /**
   * Get metadata about a specific metric.
   * @param param The request object
   */
  public getMetricMetadata(
    param: MetricsApiGetMetricMetadataRequest,
    options?: Configuration
  ): Promise<MetricMetadata> {
    const requestContextPromise = this.requestFactory.getMetricMetadata(
      param.metricName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMetricMetadata(responseContext);
        });
    });
  }

  /**
   * Get the list of actively reporting metrics from a given time until now.
   * @param param The request object
   */
  public listActiveMetrics(
    param: MetricsApiListActiveMetricsRequest,
    options?: Configuration
  ): Promise<MetricsListResponse> {
    const requestContextPromise = this.requestFactory.listActiveMetrics(
      param.from,
      param.host,
      param.tagFilter,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listActiveMetrics(responseContext);
        });
    });
  }

  /**
   * Search for metrics from the last 24 hours in Datadog.
   * @param param The request object
   */
  public listMetrics(
    param: MetricsApiListMetricsRequest,
    options?: Configuration
  ): Promise<MetricSearchResponse> {
    const requestContextPromise = this.requestFactory.listMetrics(
      param.q,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMetrics(responseContext);
        });
    });
  }

  /**
   * Query timeseries points.
   * @param param The request object
   */
  public queryMetrics(
    param: MetricsApiQueryMetricsRequest,
    options?: Configuration
  ): Promise<MetricsQueryResponse> {
    const requestContextPromise = this.requestFactory.queryMetrics(
      param.from,
      param.to,
      param.query,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.queryMetrics(responseContext);
        });
    });
  }

  /**
   * The metrics end-point allows you to post time-series data that can be graphed on Datadog’s dashboards. The maximum payload size is 3.2 megabytes (3200000 bytes). Compressed payloads must have a decompressed size of less than 62 megabytes (62914560 bytes).  If you’re submitting metrics directly to the Datadog API without using DogStatsD, expect:  - 64 bits for the timestamp - 32 bits for the value - 20 bytes for the metric names - 50 bytes for the timeseries - The full payload is approximately 100 bytes. However, with the DogStatsD API, compression is applied, which reduces the payload size.
   * @param param The request object
   */
  public submitMetrics(
    param: MetricsApiSubmitMetricsRequest,
    options?: Configuration
  ): Promise<IntakePayloadAccepted> {
    const requestContextPromise = this.requestFactory.submitMetrics(
      param.body,
      param.contentEncoding,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitMetrics(responseContext);
        });
    });
  }

  /**
   * Edit metadata of a specific metric. Find out more about [supported types](https://docs.datadoghq.com/developers/metrics).
   * @param param The request object
   */
  public updateMetricMetadata(
    param: MetricsApiUpdateMetricMetadataRequest,
    options?: Configuration
  ): Promise<MetricMetadata> {
    const requestContextPromise = this.requestFactory.updateMetricMetadata(
      param.metricName,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMetricMetadata(responseContext);
        });
    });
  }
}

import {
  MonitorsApiRequestFactory,
  MonitorsApiResponseProcessor,
} from "../apis/MonitorsApi";

export interface MonitorsApiCheckCanDeleteMonitorRequest {
  /**
   * The IDs of the monitor to check.
   * @type Array&lt;number&gt;
   */
  monitorIds: Array<number>;
}

export interface MonitorsApiCreateMonitorRequest {
  /**
   * Create a monitor request body.
   * @type Monitor
   */
  body: Monitor;
}

export interface MonitorsApiDeleteMonitorRequest {
  /**
   * The ID of the monitor.
   * @type number
   */
  monitorId: number;
  /**
   * Delete the monitor even if it&#39;s referenced by other resources (for example SLO, composite monitor).
   * @type string
   */
  force?: string;
}

export interface MonitorsApiGetMonitorRequest {
  /**
   * The ID of the monitor
   * @type number
   */
  monitorId: number;
  /**
   * When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
   * @type string
   */
  groupStates?: string;
}

export interface MonitorsApiListMonitorsRequest {
  /**
   * When specified, shows additional information about the group states. Choose one or more from &#x60;all&#x60;, &#x60;alert&#x60;, &#x60;warn&#x60;, and &#x60;no data&#x60;.
   * @type string
   */
  groupStates?: string;
  /**
   * A string to filter monitors by name.
   * @type string
   */
  name?: string;
  /**
   * A comma separated list indicating what tags, if any, should be used to filter the list of monitors by scope. For example, &#x60;host:host0&#x60;.
   * @type string
   */
  tags?: string;
  /**
   * A comma separated list indicating what service and/or custom tags, if any, should be used to filter the list of monitors. Tags created in the Datadog UI automatically have the service key prepended. For example, &#x60;service:my-app&#x60;.
   * @type string
   */
  monitorTags?: string;
  /**
   * If this argument is set to true, then the returned data includes all current active downtimes for each monitor.
   * @type boolean
   */
  withDowntimes?: boolean;
  /**
   * Use this parameter for paginating through large sets of monitors. Start with a value of zero, make a request, set the value to the last ID of result set, and then repeat until the response is empty.
   * @type number
   */
  idOffset?: number;
  /**
   * The page to start paginating from. If this argument is not specified, the request returns all monitors without pagination.
   * @type number
   */
  page?: number;
  /**
   * The number of monitors to return per page. If the page argument is not specified, the default behavior returns all monitors without a &#x60;page_size&#x60; limit. However, if page is specified and &#x60;page_size&#x60; is not, the argument defaults to 100.
   * @type number
   */
  pageSize?: number;
}

export interface MonitorsApiSearchMonitorGroupsRequest {
  /**
   * After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more.  The query can contain any number of space-separated monitor attributes, for instance &#x60;query&#x3D;\&quot;type:metric status:alert\&quot;&#x60;.  [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage/#find-the-monitors
   * @type string
   */
  query?: string;
  /**
   * Page to start paginating from.
   * @type number
   */
  page?: number;
  /**
   * Number of monitors to return per page.
   * @type number
   */
  perPage?: number;
  /**
   * String for sort order, composed of field and sort order separate by a comma, for example &#x60;name,asc&#x60;. Supported sort directions: &#x60;asc&#x60;, &#x60;desc&#x60;. Supported fields:  * &#x60;name&#x60; * &#x60;status&#x60; * &#x60;tags&#x60;
   * @type string
   */
  sort?: string;
}

export interface MonitorsApiSearchMonitorsRequest {
  /**
   * After entering a search query in your [Manage Monitor page][1] use the query parameter value in the URL of the page as value for this parameter. Consult the dedicated [manage monitor documentation][2] page to learn more.  The query can contain any number of space-separated monitor attributes, for instance &#x60;query&#x3D;\&quot;type:metric status:alert\&quot;&#x60;.  [1]: https://app.datadoghq.com/monitors/manage [2]: /monitors/manage/#find-the-monitors
   * @type string
   */
  query?: string;
  /**
   * Page to start paginating from.
   * @type number
   */
  page?: number;
  /**
   * Number of monitors to return per page.
   * @type number
   */
  perPage?: number;
  /**
   * String for sort order, composed of field and sort order separate by a comma, for example &#x60;name,asc&#x60;. Supported sort directions: &#x60;asc&#x60;, &#x60;desc&#x60;. Supported fields:  * &#x60;name&#x60; * &#x60;status&#x60; * &#x60;tags&#x60;
   * @type string
   */
  sort?: string;
}

export interface MonitorsApiUpdateMonitorRequest {
  /**
   * The ID of the monitor.
   * @type number
   */
  monitorId: number;
  /**
   * Edit a monitor request body.
   * @type MonitorUpdateRequest
   */
  body: MonitorUpdateRequest;
}

export interface MonitorsApiValidateMonitorRequest {
  /**
   * Monitor request object
   * @type Monitor
   */
  body: Monitor;
}

export class ObjectMonitorsApi {
  private requestFactory: MonitorsApiRequestFactory;
  private responseProcessor: MonitorsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: MonitorsApiRequestFactory,
    responseProcessor?: MonitorsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new MonitorsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new MonitorsApiResponseProcessor();
  }

  /**
   * Check if the given monitors can be deleted.
   * @param param The request object
   */
  public checkCanDeleteMonitor(
    param: MonitorsApiCheckCanDeleteMonitorRequest,
    options?: Configuration
  ): Promise<CheckCanDeleteMonitorResponse> {
    const requestContextPromise = this.requestFactory.checkCanDeleteMonitor(
      param.monitorIds,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.checkCanDeleteMonitor(responseContext);
        });
    });
  }

  /**
   * Create a monitor using the specified options.  #### Monitor Types  The type of monitor chosen from:  - anomaly: `query alert` - APM: `query alert` or `trace-analytics alert` - composite: `composite` - custom: `service check` - event: `event alert` - forecast: `query alert` - host: `service check` - integration: `query alert` or `service check` - live process: `process alert` - logs: `log alert` - metric: `query alert` - network: `service check` - outlier: `query alert` - process: `service check` - rum: `rum alert` - SLO: `slo alert` - watchdog: `event alert` - event-v2: `event-v2 alert` - audit: `audit alert`  #### Query Types  **Metric Alert Query**  Example: `time_aggr(time_window):space_aggr:metric{tags} [by {key}] operator #`  - `time_aggr`: avg, sum, max, min, change, or pct_change - `time_window`: `last_#m` (with `#` between 1 and 10080 depending on the monitor type) or `last_#h`(with `#` between 1 and 168 depending on the monitor type) or `last_1d`, or `last_1w` - `space_aggr`: avg, sum, min, or max - `tags`: one or more tags (comma-separated), or * - `key`: a 'key' in key:value tag syntax; defines a separate alert for each tag in the group (multi-alert) - `operator`: <, <=, >, >=, ==, or != - `#`: an integer or decimal number used to set the threshold  If you are using the `_change_` or `_pct_change_` time aggregator, instead use `change_aggr(time_aggr(time_window), timeshift):space_aggr:metric{tags} [by {key}] operator #` with:  - `change_aggr` change, pct_change - `time_aggr` avg, sum, max, min [Learn more](https://docs.datadoghq.com/monitors/create/types/#define-the-conditions) - `time_window` last\\_#m (between 1 and 2880 depending on the monitor type), last\\_#h (between 1 and 48 depending on the monitor type), or last_#d (1 or 2) - `timeshift` #m_ago (5, 10, 15, or 30), #h_ago (1, 2, or 4), or 1d_ago  Use this to create an outlier monitor using the following query: `avg(last_30m):outliers(avg:system.cpu.user{role:es-events-data} by {host}, 'dbscan', 7) > 0`  **Service Check Query**  Example: `\"check\".over(tags).last(count).by(group).count_by_status()`  - **`check`** name of the check, for example `datadog.agent.up` - **`tags`** one or more quoted tags (comma-separated), or \"*\". for example: `.over(\"env:prod\", \"role:db\")`; **`over`** cannot be blank. - **`count`** must be at greater than or equal to your max threshold (defined in the `options`). It is limited to 100. For example, if you've specified to notify on 1 critical, 3 ok, and 2 warn statuses, `count` should be at least 3. - **`group`** must be specified for check monitors. Per-check grouping is already explicitly known for some service checks. For example, Postgres integration monitors are tagged by `db`, `host`, and `port`, and Network monitors by `host`, `instance`, and `url`. See [Service Checks](https://docs.datadoghq.com/api/latest/service-checks/) documentation for more information.  **Event Alert Query**  Example: `events('sources:nagios status:error,warning priority:normal tags: \"string query\"').rollup(\"count\").last(\"1h\")\"`  - **`event`**, the event query string: - **`string_query`** free text query to match against event title and text. - **`sources`** event sources (comma-separated). - **`status`** event statuses (comma-separated). Valid options: error, warn, and info. - **`priority`** event priorities (comma-separated). Valid options: low, normal, all. - **`host`** event reporting host (comma-separated). - **`tags`** event tags (comma-separated). - **`excluded_tags`** excluded event tags (comma-separated). - **`rollup`** the stats roll-up method. `count` is the only supported method now. - **`last`** the timeframe to roll up the counts. Examples: 45m, 4h. Supported timeframes: m, h and d. This value should not exceed 48 hours.  **NOTE** Only available on US1 and EU.  **Event V2 Alert Query**  Example: `events(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED, US3, US5 and in closed beta on EU and US1.  **Process Alert Query**  Example: `processes(search).over(tags).rollup('count').last(timeframe) operator #`  - **`search`** free text search string for querying processes. Matching processes match results on the [Live Processes](https://docs.datadoghq.com/infrastructure/process/?tab=linuxwindows) page. - **`tags`** one or more tags (comma-separated) - **`timeframe`** the timeframe to roll up the counts. Examples: 10m, 4h. Supported timeframes: s, m, h and d - **`operator`** <, <=, >, >=, ==, or != - **`#`** an integer or decimal number used to set the threshold  **Logs Alert Query**  Example: `logs(query).index(index_name).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`index_name`** For multi-index organizations, the log index in which the request is performed. - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **Composite Query**  Example: `12345 && 67890`, where `12345` and `67890` are the IDs of non-composite monitors  * **`name`** [*required*, *default* = **dynamic, based on query**]: The name of the alert. * **`message`** [*required*, *default* = **dynamic, based on query**]: A message to include with notifications for this monitor. Email notifications can be sent to specific users by using the same '@username' notation as events. * **`tags`** [*optional*, *default* = **empty list**]: A list of tags to associate with your monitor. When getting all monitor details via the API, use the `monitor_tags` argument to filter results by these tags. It is only available via the API and isn't visible or editable in the Datadog UI.  **SLO Alert Query**  Example: `error_budget(\"slo_id\").over(\"time_window\") operator #`  - **`slo_id`**: The alphanumeric SLO ID of the SLO you are configuring the alert for. - **`time_window`**: The time window of the SLO target you wish to alert on. Valid options: `7d`, `30d`, `90d`. - **`operator`**: `>=` or `>`  **Audit Alert Query**  Example: `audits(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg` and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available on US1-FED and in closed beta on US1, EU, US3, and US5.  **CI Pipelines Alert Query**  Example: `ci-pipelines(query).rollup(rollup_method[, measure]).last(time_window) operator #`  - **`query`** The search query - following the [Log search syntax](https://docs.datadoghq.com/logs/search_syntax/). - **`rollup_method`** The stats roll-up method - supports `count`, `avg`, and `cardinality`. - **`measure`** For `avg` and cardinality `rollup_method` - specify the measure or the facet name you want to use. - **`time_window`** #m (between 1 and 2880), #h (between 1 and 48). - **`operator`** `<`, `<=`, `>`, `>=`, `==`, or `!=`. - **`#`** an integer or decimal number used to set the threshold.  **NOTE** Only available in closed beta on US1, EU, US3 and US5.
   * @param param The request object
   */
  public createMonitor(
    param: MonitorsApiCreateMonitorRequest,
    options?: Configuration
  ): Promise<Monitor> {
    const requestContextPromise = this.requestFactory.createMonitor(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createMonitor(responseContext);
        });
    });
  }

  /**
   * Delete the specified monitor
   * @param param The request object
   */
  public deleteMonitor(
    param: MonitorsApiDeleteMonitorRequest,
    options?: Configuration
  ): Promise<DeletedMonitor> {
    const requestContextPromise = this.requestFactory.deleteMonitor(
      param.monitorId,
      param.force,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteMonitor(responseContext);
        });
    });
  }

  /**
   * Get details about the specified monitor from your organization.
   * @param param The request object
   */
  public getMonitor(
    param: MonitorsApiGetMonitorRequest,
    options?: Configuration
  ): Promise<Monitor> {
    const requestContextPromise = this.requestFactory.getMonitor(
      param.monitorId,
      param.groupStates,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonitor(responseContext);
        });
    });
  }

  /**
   * Get details about the specified monitor from your organization.
   * @param param The request object
   */
  public listMonitors(
    param: MonitorsApiListMonitorsRequest = {},
    options?: Configuration
  ): Promise<Array<Monitor>> {
    const requestContextPromise = this.requestFactory.listMonitors(
      param.groupStates,
      param.name,
      param.tags,
      param.monitorTags,
      param.withDowntimes,
      param.idOffset,
      param.page,
      param.pageSize,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listMonitors(responseContext);
        });
    });
  }

  /**
   * Search and filter your monitor groups details.
   * @param param The request object
   */
  public searchMonitorGroups(
    param: MonitorsApiSearchMonitorGroupsRequest = {},
    options?: Configuration
  ): Promise<MonitorGroupSearchResponse> {
    const requestContextPromise = this.requestFactory.searchMonitorGroups(
      param.query,
      param.page,
      param.perPage,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchMonitorGroups(responseContext);
        });
    });
  }

  /**
   * Search and filter your monitors details.
   * @param param The request object
   */
  public searchMonitors(
    param: MonitorsApiSearchMonitorsRequest = {},
    options?: Configuration
  ): Promise<MonitorSearchResponse> {
    const requestContextPromise = this.requestFactory.searchMonitors(
      param.query,
      param.page,
      param.perPage,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.searchMonitors(responseContext);
        });
    });
  }

  /**
   * Edit the specified monitor.
   * @param param The request object
   */
  public updateMonitor(
    param: MonitorsApiUpdateMonitorRequest,
    options?: Configuration
  ): Promise<Monitor> {
    const requestContextPromise = this.requestFactory.updateMonitor(
      param.monitorId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateMonitor(responseContext);
        });
    });
  }

  /**
   * Validate the monitor provided in the request.
   * @param param The request object
   */
  public validateMonitor(
    param: MonitorsApiValidateMonitorRequest,
    options?: Configuration
  ): Promise<any> {
    const requestContextPromise = this.requestFactory.validateMonitor(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.validateMonitor(responseContext);
        });
    });
  }
}

import {
  NotebooksApiRequestFactory,
  NotebooksApiResponseProcessor,
} from "../apis/NotebooksApi";

export interface NotebooksApiCreateNotebookRequest {
  /**
   * The JSON description of the notebook you want to create.
   * @type NotebookCreateRequest
   */
  body: NotebookCreateRequest;
}

export interface NotebooksApiDeleteNotebookRequest {
  /**
   * Unique ID, assigned when you create the notebook.
   * @type number
   */
  notebookId: number;
}

export interface NotebooksApiGetNotebookRequest {
  /**
   * Unique ID, assigned when you create the notebook.
   * @type number
   */
  notebookId: number;
}

export interface NotebooksApiListNotebooksRequest {
  /**
   * Return notebooks created by the given &#x60;author_handle&#x60;.
   * @type string
   */
  authorHandle?: string;
  /**
   * Return notebooks not created by the given &#x60;author_handle&#x60;.
   * @type string
   */
  excludeAuthorHandle?: string;
  /**
   * The index of the first notebook you want returned.
   * @type number
   */
  start?: number;
  /**
   * The number of notebooks to be returned.
   * @type number
   */
  count?: number;
  /**
   * Sort by field &#x60;modified&#x60;, &#x60;name&#x60;, or &#x60;created&#x60;.
   * @type string
   */
  sortField?: string;
  /**
   * Sort by direction &#x60;asc&#x60; or &#x60;desc&#x60;.
   * @type string
   */
  sortDir?: string;
  /**
   * Return only notebooks with &#x60;query&#x60; string in notebook name or author handle.
   * @type string
   */
  query?: string;
  /**
   * Value of &#x60;false&#x60; excludes the &#x60;cells&#x60; and global &#x60;time&#x60; for each notebook.
   * @type boolean
   */
  includeCells?: boolean;
  /**
   * True value returns only template notebooks. Default is false (returns only non-template notebooks).
   * @type boolean
   */
  isTemplate?: boolean;
  /**
   * If type is provided, returns only notebooks with that metadata type. Default does not have type filtering.
   * @type string
   */
  type?: string;
}

export interface NotebooksApiUpdateNotebookRequest {
  /**
   * Unique ID, assigned when you create the notebook.
   * @type number
   */
  notebookId: number;
  /**
   * Update notebook request body.
   * @type NotebookUpdateRequest
   */
  body: NotebookUpdateRequest;
}

export class ObjectNotebooksApi {
  private requestFactory: NotebooksApiRequestFactory;
  private responseProcessor: NotebooksApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: NotebooksApiRequestFactory,
    responseProcessor?: NotebooksApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new NotebooksApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new NotebooksApiResponseProcessor();
  }

  /**
   * Create a notebook using the specified options.
   * @param param The request object
   */
  public createNotebook(
    param: NotebooksApiCreateNotebookRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    const requestContextPromise = this.requestFactory.createNotebook(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createNotebook(responseContext);
        });
    });
  }

  /**
   * Delete a notebook using the specified ID.
   * @param param The request object
   */
  public deleteNotebook(
    param: NotebooksApiDeleteNotebookRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteNotebook(
      param.notebookId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteNotebook(responseContext);
        });
    });
  }

  /**
   * Get a notebook using the specified notebook ID.
   * @param param The request object
   */
  public getNotebook(
    param: NotebooksApiGetNotebookRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    const requestContextPromise = this.requestFactory.getNotebook(
      param.notebookId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getNotebook(responseContext);
        });
    });
  }

  /**
   * Get all notebooks. This can also be used to search for notebooks with a particular `query` in the notebook `name` or author `handle`.
   * @param param The request object
   */
  public listNotebooks(
    param: NotebooksApiListNotebooksRequest = {},
    options?: Configuration
  ): Promise<NotebooksResponse> {
    const requestContextPromise = this.requestFactory.listNotebooks(
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
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listNotebooks(responseContext);
        });
    });
  }

  /**
   * Update a notebook using the specified ID.
   * @param param The request object
   */
  public updateNotebook(
    param: NotebooksApiUpdateNotebookRequest,
    options?: Configuration
  ): Promise<NotebookResponse> {
    const requestContextPromise = this.requestFactory.updateNotebook(
      param.notebookId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateNotebook(responseContext);
        });
    });
  }
}

import {
  OrganizationsApiRequestFactory,
  OrganizationsApiResponseProcessor,
} from "../apis/OrganizationsApi";

export interface OrganizationsApiCreateChildOrgRequest {
  /**
   * Organization object that needs to be created
   * @type OrganizationCreateBody
   */
  body: OrganizationCreateBody;
}

export interface OrganizationsApiGetOrgRequest {
  /**
   * The &#x60;public_id&#x60; of the organization you are operating within.
   * @type string
   */
  publicId: string;
}

export interface OrganizationsApiUpdateOrgRequest {
  /**
   * The &#x60;public_id&#x60; of the organization you are operating within.
   * @type string
   */
  publicId: string;
  /**
   *
   * @type Organization
   */
  body: Organization;
}

export interface OrganizationsApiUploadIdPForOrgRequest {
  /**
   * The &#x60;public_id&#x60; of the organization you are operating with
   * @type string
   */
  publicId: string;
  /**
   * The path to the XML metadata file you wish to upload.
   * @type HttpFile
   */
  idpFile: HttpFile;
}

export class ObjectOrganizationsApi {
  private requestFactory: OrganizationsApiRequestFactory;
  private responseProcessor: OrganizationsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: OrganizationsApiRequestFactory,
    responseProcessor?: OrganizationsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new OrganizationsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new OrganizationsApiResponseProcessor();
  }

  /**
   * Create a child organization.  This endpoint requires the [multi-organization account](https://docs.datadoghq.com/account_management/multi_organization/) feature and must be enabled by [contacting support](https://docs.datadoghq.com/help/).  Once a new child organization is created, you can interact with it by using the `org.public_id`, `api_key.key`, and `application_key.hash` provided in the response.
   * @param param The request object
   */
  public createChildOrg(
    param: OrganizationsApiCreateChildOrgRequest,
    options?: Configuration
  ): Promise<OrganizationCreateResponse> {
    const requestContextPromise = this.requestFactory.createChildOrg(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createChildOrg(responseContext);
        });
    });
  }

  /**
   * Get organization information.
   * @param param The request object
   */
  public getOrg(
    param: OrganizationsApiGetOrgRequest,
    options?: Configuration
  ): Promise<OrganizationResponse> {
    const requestContextPromise = this.requestFactory.getOrg(
      param.publicId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getOrg(responseContext);
        });
    });
  }

  /**
   * List your managed organizations.
   * @param param The request object
   */
  public listOrgs(options?: Configuration): Promise<OrganizationListResponse> {
    const requestContextPromise = this.requestFactory.listOrgs(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listOrgs(responseContext);
        });
    });
  }

  /**
   * Update your organization.
   * @param param The request object
   */
  public updateOrg(
    param: OrganizationsApiUpdateOrgRequest,
    options?: Configuration
  ): Promise<OrganizationResponse> {
    const requestContextPromise = this.requestFactory.updateOrg(
      param.publicId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateOrg(responseContext);
        });
    });
  }

  /**
   * There are a couple of options for updating the Identity Provider (IdP) metadata from your SAML IdP.  * **Multipart Form-Data**: Post the IdP metadata file using a form post.  * **XML Body:** Post the IdP metadata file as the body of the request.
   * @param param The request object
   */
  public uploadIdPForOrg(
    param: OrganizationsApiUploadIdPForOrgRequest,
    options?: Configuration
  ): Promise<IdpResponse> {
    const requestContextPromise = this.requestFactory.uploadIdPForOrg(
      param.publicId,
      param.idpFile,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.uploadIdPForOrg(responseContext);
        });
    });
  }
}

import {
  PagerDutyIntegrationApiRequestFactory,
  PagerDutyIntegrationApiResponseProcessor,
} from "../apis/PagerDutyIntegrationApi";

export interface PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest {
  /**
   * Create a new service object request body.
   * @type PagerDutyService
   */
  body: PagerDutyService;
}

export interface PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest {
  /**
   * The service name
   * @type string
   */
  serviceName: string;
}

export interface PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest {
  /**
   * The service name.
   * @type string
   */
  serviceName: string;
}

export interface PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest {
  /**
   * The service name
   * @type string
   */
  serviceName: string;
  /**
   * Update an existing service object request body.
   * @type PagerDutyServiceKey
   */
  body: PagerDutyServiceKey;
}

export class ObjectPagerDutyIntegrationApi {
  private requestFactory: PagerDutyIntegrationApiRequestFactory;
  private responseProcessor: PagerDutyIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: PagerDutyIntegrationApiRequestFactory,
    responseProcessor?: PagerDutyIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new PagerDutyIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new PagerDutyIntegrationApiResponseProcessor();
  }

  /**
   * Create a new service object in the PagerDuty integration.
   * @param param The request object
   */
  public createPagerDutyIntegrationService(
    param: PagerDutyIntegrationApiCreatePagerDutyIntegrationServiceRequest,
    options?: Configuration
  ): Promise<PagerDutyServiceName> {
    const requestContextPromise =
      this.requestFactory.createPagerDutyIntegrationService(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPagerDutyIntegrationService(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a single service object in the Datadog-PagerDuty integration.
   * @param param The request object
   */
  public deletePagerDutyIntegrationService(
    param: PagerDutyIntegrationApiDeletePagerDutyIntegrationServiceRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deletePagerDutyIntegrationService(
        param.serviceName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deletePagerDutyIntegrationService(
            responseContext
          );
        });
    });
  }

  /**
   * Get service name in the Datadog-PagerDuty integration.
   * @param param The request object
   */
  public getPagerDutyIntegrationService(
    param: PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest,
    options?: Configuration
  ): Promise<PagerDutyServiceName> {
    const requestContextPromise =
      this.requestFactory.getPagerDutyIntegrationService(
        param.serviceName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPagerDutyIntegrationService(
            responseContext
          );
        });
    });
  }

  /**
   * Update a single service object in the Datadog-PagerDuty integration.
   * @param param The request object
   */
  public updatePagerDutyIntegrationService(
    param: PagerDutyIntegrationApiUpdatePagerDutyIntegrationServiceRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.updatePagerDutyIntegrationService(
        param.serviceName,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePagerDutyIntegrationService(
            responseContext
          );
        });
    });
  }
}

import {
  ServiceChecksApiRequestFactory,
  ServiceChecksApiResponseProcessor,
} from "../apis/ServiceChecksApi";

export interface ServiceChecksApiSubmitServiceCheckRequest {
  /**
   * Service Check request body.
   * @type Array&lt;ServiceCheck&gt;
   */
  body: Array<ServiceCheck>;
}

export class ObjectServiceChecksApi {
  private requestFactory: ServiceChecksApiRequestFactory;
  private responseProcessor: ServiceChecksApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceChecksApiRequestFactory,
    responseProcessor?: ServiceChecksApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ServiceChecksApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ServiceChecksApiResponseProcessor();
  }

  /**
   * Submit a list of Service Checks.  **Notes**: - A valid API key is required. - Service checks can be submitted up to 10 minutes in the past.
   * @param param The request object
   */
  public submitServiceCheck(
    param: ServiceChecksApiSubmitServiceCheckRequest,
    options?: Configuration
  ): Promise<IntakePayloadAccepted> {
    const requestContextPromise = this.requestFactory.submitServiceCheck(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.submitServiceCheck(responseContext);
        });
    });
  }
}

import {
  ServiceLevelObjectiveCorrectionsApiRequestFactory,
  ServiceLevelObjectiveCorrectionsApiResponseProcessor,
} from "../apis/ServiceLevelObjectiveCorrectionsApi";

export interface ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest {
  /**
   * Create an SLO Correction
   * @type SLOCorrectionCreateRequest
   */
  body: SLOCorrectionCreateRequest;
}

export interface ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest {
  /**
   * The ID of the SLO correction object.
   * @type string
   */
  sloCorrectionId: string;
}

export interface ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest {
  /**
   * The ID of the SLO correction object.
   * @type string
   */
  sloCorrectionId: string;
}

export interface ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest {
  /**
   * The ID of the SLO correction object.
   * @type string
   */
  sloCorrectionId: string;
  /**
   * The edited SLO correction object.
   * @type SLOCorrectionUpdateRequest
   */
  body: SLOCorrectionUpdateRequest;
}

export class ObjectServiceLevelObjectiveCorrectionsApi {
  private requestFactory: ServiceLevelObjectiveCorrectionsApiRequestFactory;
  private responseProcessor: ServiceLevelObjectiveCorrectionsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceLevelObjectiveCorrectionsApiRequestFactory,
    responseProcessor?: ServiceLevelObjectiveCorrectionsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new ServiceLevelObjectiveCorrectionsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor ||
      new ServiceLevelObjectiveCorrectionsApiResponseProcessor();
  }

  /**
   * Create an SLO Correction.
   * @param param The request object
   */
  public createSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiCreateSLOCorrectionRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    const requestContextPromise = this.requestFactory.createSLOCorrection(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSLOCorrection(responseContext);
        });
    });
  }

  /**
   * Permanently delete the specified SLO correction object.
   * @param param The request object
   */
  public deleteSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiDeleteSLOCorrectionRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteSLOCorrection(
      param.sloCorrectionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSLOCorrection(responseContext);
        });
    });
  }

  /**
   * Get an SLO correction.
   * @param param The request object
   */
  public getSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiGetSLOCorrectionRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    const requestContextPromise = this.requestFactory.getSLOCorrection(
      param.sloCorrectionId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOCorrection(responseContext);
        });
    });
  }

  /**
   * Get all Service Level Objective corrections.
   * @param param The request object
   */
  public listSLOCorrection(
    options?: Configuration
  ): Promise<SLOCorrectionListResponse> {
    const requestContextPromise =
      this.requestFactory.listSLOCorrection(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSLOCorrection(responseContext);
        });
    });
  }

  /**
   * Update the specified SLO correction object object.
   * @param param The request object
   */
  public updateSLOCorrection(
    param: ServiceLevelObjectiveCorrectionsApiUpdateSLOCorrectionRequest,
    options?: Configuration
  ): Promise<SLOCorrectionResponse> {
    const requestContextPromise = this.requestFactory.updateSLOCorrection(
      param.sloCorrectionId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSLOCorrection(responseContext);
        });
    });
  }
}

import {
  ServiceLevelObjectivesApiRequestFactory,
  ServiceLevelObjectivesApiResponseProcessor,
} from "../apis/ServiceLevelObjectivesApi";

export interface ServiceLevelObjectivesApiCheckCanDeleteSLORequest {
  /**
   * A comma separated list of the IDs of the service level objectives objects.
   * @type string
   */
  ids: string;
}

export interface ServiceLevelObjectivesApiCreateSLORequest {
  /**
   * Service level objective request object.
   * @type ServiceLevelObjectiveRequest
   */
  body: ServiceLevelObjectiveRequest;
}

export interface ServiceLevelObjectivesApiDeleteSLORequest {
  /**
   * The ID of the service level objective.
   * @type string
   */
  sloId: string;
  /**
   * Delete the monitor even if it&#39;s referenced by other resources (for example SLO, composite monitor).
   * @type string
   */
  force?: string;
}

export interface ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest {
  /**
   * Delete multiple service level objective objects request body.
   * @type { [key: string]: Array&lt;SLOTimeframe&gt;; }
   */
  body: { [key: string]: Array<SLOTimeframe> };
}

export interface ServiceLevelObjectivesApiGetSLORequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
  /**
   * Get the IDs of SLO monitors that reference this SLO.
   * @type boolean
   */
  withConfiguredAlertIds?: boolean;
}

export interface ServiceLevelObjectivesApiGetSLOCorrectionsRequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
}

export interface ServiceLevelObjectivesApiGetSLOHistoryRequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
  /**
   * The &#x60;from&#x60; timestamp for the query window in epoch seconds.
   * @type number
   */
  fromTs: number;
  /**
   * The &#x60;to&#x60; timestamp for the query window in epoch seconds.
   * @type number
   */
  toTs: number;
  /**
   * The SLO target. If &#x60;target&#x60; is passed in, the response will include the remaining error budget and a timeframe value of &#x60;custom&#x60;.
   * @type number
   */
  target?: number;
  /**
   * Defaults to &#x60;true&#x60;. If any SLO corrections are applied and this parameter is set to &#x60;false&#x60;, then the corrections will not be applied and the SLI values will not be affected.
   * @type boolean
   */
  applyCorrection?: boolean;
}

export interface ServiceLevelObjectivesApiListSLOsRequest {
  /**
   * A comma separated list of the IDs of the service level objectives objects.
   * @type string
   */
  ids?: string;
  /**
   * The query string to filter results based on SLO names.
   * @type string
   */
  query?: string;
  /**
   * The query string to filter results based on a single SLO tag.
   * @type string
   */
  tagsQuery?: string;
  /**
   * The query string to filter results based on SLO numerator and denominator.
   * @type string
   */
  metricsQuery?: string;
  /**
   * The number of SLOs to return in the response.
   * @type number
   */
  limit?: number;
  /**
   * The specific offset to use as the beginning of the returned response.
   * @type number
   */
  offset?: number;
}

export interface ServiceLevelObjectivesApiUpdateSLORequest {
  /**
   * The ID of the service level objective object.
   * @type string
   */
  sloId: string;
  /**
   * The edited service level objective request object.
   * @type ServiceLevelObjective
   */
  body: ServiceLevelObjective;
}

export class ObjectServiceLevelObjectivesApi {
  private requestFactory: ServiceLevelObjectivesApiRequestFactory;
  private responseProcessor: ServiceLevelObjectivesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceLevelObjectivesApiRequestFactory,
    responseProcessor?: ServiceLevelObjectivesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory ||
      new ServiceLevelObjectivesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ServiceLevelObjectivesApiResponseProcessor();
  }

  /**
   * Check if an SLO can be safely deleted. For example, assure an SLO can be deleted without disrupting a dashboard.
   * @param param The request object
   */
  public checkCanDeleteSLO(
    param: ServiceLevelObjectivesApiCheckCanDeleteSLORequest,
    options?: Configuration
  ): Promise<CheckCanDeleteSLOResponse> {
    const requestContextPromise = this.requestFactory.checkCanDeleteSLO(
      param.ids,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.checkCanDeleteSLO(responseContext);
        });
    });
  }

  /**
   * Create a service level objective object.
   * @param param The request object
   */
  public createSLO(
    param: ServiceLevelObjectivesApiCreateSLORequest,
    options?: Configuration
  ): Promise<SLOListResponse> {
    const requestContextPromise = this.requestFactory.createSLO(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSLO(responseContext);
        });
    });
  }

  /**
   * Permanently delete the specified service level objective object.  If an SLO is used in a dashboard, the `DELETE /v1/slo/` endpoint returns a 409 conflict error because the SLO is referenced in a dashboard.
   * @param param The request object
   */
  public deleteSLO(
    param: ServiceLevelObjectivesApiDeleteSLORequest,
    options?: Configuration
  ): Promise<SLODeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteSLO(
      param.sloId,
      param.force,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSLO(responseContext);
        });
    });
  }

  /**
   * Delete (or partially delete) multiple service level objective objects.  This endpoint facilitates deletion of one or more thresholds for one or more service level objective objects. If all thresholds are deleted, the service level objective object is deleted as well.
   * @param param The request object
   */
  public deleteSLOTimeframeInBulk(
    param: ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest,
    options?: Configuration
  ): Promise<SLOBulkDeleteResponse> {
    const requestContextPromise = this.requestFactory.deleteSLOTimeframeInBulk(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteSLOTimeframeInBulk(
            responseContext
          );
        });
    });
  }

  /**
   * Get a service level objective object.
   * @param param The request object
   */
  public getSLO(
    param: ServiceLevelObjectivesApiGetSLORequest,
    options?: Configuration
  ): Promise<SLOResponse> {
    const requestContextPromise = this.requestFactory.getSLO(
      param.sloId,
      param.withConfiguredAlertIds,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLO(responseContext);
        });
    });
  }

  /**
   * Get corrections applied to an SLO
   * @param param The request object
   */
  public getSLOCorrections(
    param: ServiceLevelObjectivesApiGetSLOCorrectionsRequest,
    options?: Configuration
  ): Promise<SLOCorrectionListResponse> {
    const requestContextPromise = this.requestFactory.getSLOCorrections(
      param.sloId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOCorrections(responseContext);
        });
    });
  }

  /**
   * Get a specific SLO’s history, regardless of its SLO type.  The detailed history data is structured according to the source data type. For example, metric data is included for event SLOs that use the metric source, and monitor SLO types include the monitor transition history.  **Note:** There are different response formats for event based and time based SLOs. Examples of both are shown.
   * @param param The request object
   */
  public getSLOHistory(
    param: ServiceLevelObjectivesApiGetSLOHistoryRequest,
    options?: Configuration
  ): Promise<SLOHistoryResponse> {
    const requestContextPromise = this.requestFactory.getSLOHistory(
      param.sloId,
      param.fromTs,
      param.toTs,
      param.target,
      param.applyCorrection,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSLOHistory(responseContext);
        });
    });
  }

  /**
   * Get a list of service level objective objects for your organization.
   * @param param The request object
   */
  public listSLOs(
    param: ServiceLevelObjectivesApiListSLOsRequest = {},
    options?: Configuration
  ): Promise<SLOListResponse> {
    const requestContextPromise = this.requestFactory.listSLOs(
      param.ids,
      param.query,
      param.tagsQuery,
      param.metricsQuery,
      param.limit,
      param.offset,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listSLOs(responseContext);
        });
    });
  }

  /**
   * Update the specified service level objective object.
   * @param param The request object
   */
  public updateSLO(
    param: ServiceLevelObjectivesApiUpdateSLORequest,
    options?: Configuration
  ): Promise<SLOListResponse> {
    const requestContextPromise = this.requestFactory.updateSLO(
      param.sloId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSLO(responseContext);
        });
    });
  }
}

import {
  SlackIntegrationApiRequestFactory,
  SlackIntegrationApiResponseProcessor,
} from "../apis/SlackIntegrationApi";

export interface SlackIntegrationApiCreateSlackIntegrationChannelRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
  /**
   * Payload describing Slack channel to be created
   * @type SlackIntegrationChannel
   */
  body: SlackIntegrationChannel;
}

export interface SlackIntegrationApiGetSlackIntegrationChannelRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
  /**
   * The name of the Slack channel being operated on.
   * @type string
   */
  channelName: string;
}

export interface SlackIntegrationApiGetSlackIntegrationChannelsRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
}

export interface SlackIntegrationApiRemoveSlackIntegrationChannelRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
  /**
   * The name of the Slack channel being operated on.
   * @type string
   */
  channelName: string;
}

export interface SlackIntegrationApiUpdateSlackIntegrationChannelRequest {
  /**
   * Your Slack account name.
   * @type string
   */
  accountName: string;
  /**
   * The name of the Slack channel being operated on.
   * @type string
   */
  channelName: string;
  /**
   * Payload describing fields and values to be updated.
   * @type SlackIntegrationChannel
   */
  body: SlackIntegrationChannel;
}

export class ObjectSlackIntegrationApi {
  private requestFactory: SlackIntegrationApiRequestFactory;
  private responseProcessor: SlackIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SlackIntegrationApiRequestFactory,
    responseProcessor?: SlackIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SlackIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SlackIntegrationApiResponseProcessor();
  }

  /**
   * Add a channel to your Datadog-Slack integration.
   * @param param The request object
   */
  public createSlackIntegrationChannel(
    param: SlackIntegrationApiCreateSlackIntegrationChannelRequest,
    options?: Configuration
  ): Promise<SlackIntegrationChannel> {
    const requestContextPromise =
      this.requestFactory.createSlackIntegrationChannel(
        param.accountName,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSlackIntegrationChannel(
            responseContext
          );
        });
    });
  }

  /**
   * Get a channel configured for your Datadog-Slack integration.
   * @param param The request object
   */
  public getSlackIntegrationChannel(
    param: SlackIntegrationApiGetSlackIntegrationChannelRequest,
    options?: Configuration
  ): Promise<SlackIntegrationChannel> {
    const requestContextPromise =
      this.requestFactory.getSlackIntegrationChannel(
        param.accountName,
        param.channelName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSlackIntegrationChannel(
            responseContext
          );
        });
    });
  }

  /**
   * Get a list of all channels configured for your Datadog-Slack integration.
   * @param param The request object
   */
  public getSlackIntegrationChannels(
    param: SlackIntegrationApiGetSlackIntegrationChannelsRequest,
    options?: Configuration
  ): Promise<Array<SlackIntegrationChannel>> {
    const requestContextPromise =
      this.requestFactory.getSlackIntegrationChannels(
        param.accountName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSlackIntegrationChannels(
            responseContext
          );
        });
    });
  }

  /**
   * Remove a channel from your Datadog-Slack integration.
   * @param param The request object
   */
  public removeSlackIntegrationChannel(
    param: SlackIntegrationApiRemoveSlackIntegrationChannelRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.removeSlackIntegrationChannel(
        param.accountName,
        param.channelName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.removeSlackIntegrationChannel(
            responseContext
          );
        });
    });
  }

  /**
   * Update a channel used in your Datadog-Slack integration.
   * @param param The request object
   */
  public updateSlackIntegrationChannel(
    param: SlackIntegrationApiUpdateSlackIntegrationChannelRequest,
    options?: Configuration
  ): Promise<SlackIntegrationChannel> {
    const requestContextPromise =
      this.requestFactory.updateSlackIntegrationChannel(
        param.accountName,
        param.channelName,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateSlackIntegrationChannel(
            responseContext
          );
        });
    });
  }
}

import {
  SnapshotsApiRequestFactory,
  SnapshotsApiResponseProcessor,
} from "../apis/SnapshotsApi";

export interface SnapshotsApiGetGraphSnapshotRequest {
  /**
   * The POSIX timestamp of the start of the query.
   * @type number
   */
  start: number;
  /**
   * The POSIX timestamp of the end of the query.
   * @type number
   */
  end: number;
  /**
   * The metric query.
   * @type string
   */
  metricQuery?: string;
  /**
   * A query that adds event bands to the graph.
   * @type string
   */
  eventQuery?: string;
  /**
   * A JSON document defining the graph. &#x60;graph_def&#x60; can be used instead of &#x60;metric_query&#x60;. The JSON document uses the [grammar defined here](https://docs.datadoghq.com/graphing/graphing_json/#grammar) and should be formatted to a single line then URL encoded.
   * @type string
   */
  graphDef?: string;
  /**
   * A title for the graph. If no title is specified, the graph does not have a title.
   * @type string
   */
  title?: string;
}

export class ObjectSnapshotsApi {
  private requestFactory: SnapshotsApiRequestFactory;
  private responseProcessor: SnapshotsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SnapshotsApiRequestFactory,
    responseProcessor?: SnapshotsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SnapshotsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SnapshotsApiResponseProcessor();
  }

  /**
   * Take graph snapshots. **Note**: When a snapshot is created, there is some delay before it is available.
   * @param param The request object
   */
  public getGraphSnapshot(
    param: SnapshotsApiGetGraphSnapshotRequest,
    options?: Configuration
  ): Promise<GraphSnapshot> {
    const requestContextPromise = this.requestFactory.getGraphSnapshot(
      param.start,
      param.end,
      param.metricQuery,
      param.eventQuery,
      param.graphDef,
      param.title,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGraphSnapshot(responseContext);
        });
    });
  }
}

import {
  SyntheticsApiRequestFactory,
  SyntheticsApiResponseProcessor,
} from "../apis/SyntheticsApi";

export interface SyntheticsApiCreateGlobalVariableRequest {
  /**
   * Details of the global variable to create.
   * @type SyntheticsGlobalVariable
   */
  body: SyntheticsGlobalVariable;
}

export interface SyntheticsApiCreatePrivateLocationRequest {
  /**
   * Details of the private location to create.
   * @type SyntheticsPrivateLocation
   */
  body: SyntheticsPrivateLocation;
}

export interface SyntheticsApiCreateSyntheticsAPITestRequest {
  /**
   * Details of the test to create.
   * @type SyntheticsAPITest
   */
  body: SyntheticsAPITest;
}

export interface SyntheticsApiCreateSyntheticsBrowserTestRequest {
  /**
   * Details of the test to create.
   * @type SyntheticsBrowserTest
   */
  body: SyntheticsBrowserTest;
}

export interface SyntheticsApiDeleteGlobalVariableRequest {
  /**
   * The ID of the global variable.
   * @type string
   */
  variableId: string;
}

export interface SyntheticsApiDeletePrivateLocationRequest {
  /**
   * The ID of the private location.
   * @type string
   */
  locationId: string;
}

export interface SyntheticsApiDeleteTestsRequest {
  /**
   * Public ID list of the Synthetic tests to be deleted.
   * @type SyntheticsDeleteTestsPayload
   */
  body: SyntheticsDeleteTestsPayload;
}

export interface SyntheticsApiEditGlobalVariableRequest {
  /**
   * The ID of the global variable.
   * @type string
   */
  variableId: string;
  /**
   * Details of the global variable to update.
   * @type SyntheticsGlobalVariable
   */
  body: SyntheticsGlobalVariable;
}

export interface SyntheticsApiGetAPITestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetAPITestLatestResultsRequest {
  /**
   * The public ID of the test for which to search results for.
   * @type string
   */
  publicId: string;
  /**
   * Timestamp in milliseconds from which to start querying results.
   * @type number
   */
  fromTs?: number;
  /**
   * Timestamp in milliseconds up to which to query results.
   * @type number
   */
  toTs?: number;
  /**
   * Locations for which to query results.
   * @type Array&lt;string&gt;
   */
  probeDc?: Array<string>;
}

export interface SyntheticsApiGetAPITestResultRequest {
  /**
   * The public ID of the API test to which the target result belongs.
   * @type string
   */
  publicId: string;
  /**
   * The ID of the result to get.
   * @type string
   */
  resultId: string;
}

export interface SyntheticsApiGetBrowserTestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiGetBrowserTestLatestResultsRequest {
  /**
   * The public ID of the browser test for which to search results for.
   * @type string
   */
  publicId: string;
  /**
   * Timestamp in milliseconds from which to start querying results.
   * @type number
   */
  fromTs?: number;
  /**
   * Timestamp in milliseconds up to which to query results.
   * @type number
   */
  toTs?: number;
  /**
   * Locations for which to query results.
   * @type Array&lt;string&gt;
   */
  probeDc?: Array<string>;
}

export interface SyntheticsApiGetBrowserTestResultRequest {
  /**
   * The public ID of the browser test to which the target result belongs.
   * @type string
   */
  publicId: string;
  /**
   * The ID of the result to get.
   * @type string
   */
  resultId: string;
}

export interface SyntheticsApiGetGlobalVariableRequest {
  /**
   * The ID of the global variable.
   * @type string
   */
  variableId: string;
}

export interface SyntheticsApiGetPrivateLocationRequest {
  /**
   * The ID of the private location.
   * @type string
   */
  locationId: string;
}

export interface SyntheticsApiGetSyntheticsCIBatchRequest {
  /**
   * The ID of the batch.
   * @type string
   */
  batchId: string;
}

export interface SyntheticsApiGetTestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
}

export interface SyntheticsApiTriggerCITestsRequest {
  /**
   * Details of the test to trigger.
   * @type SyntheticsCITestBody
   */
  body: SyntheticsCITestBody;
}

export interface SyntheticsApiTriggerTestsRequest {
  /**
   * The identifiers of the tests to trigger.
   * @type SyntheticsTriggerBody
   */
  body: SyntheticsTriggerBody;
}

export interface SyntheticsApiUpdateAPITestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
  /**
   * New test details to be saved.
   * @type SyntheticsAPITest
   */
  body: SyntheticsAPITest;
}

export interface SyntheticsApiUpdateBrowserTestRequest {
  /**
   * The public ID of the test to get details from.
   * @type string
   */
  publicId: string;
  /**
   * New test details to be saved.
   * @type SyntheticsBrowserTest
   */
  body: SyntheticsBrowserTest;
}

export interface SyntheticsApiUpdatePrivateLocationRequest {
  /**
   * The ID of the private location.
   * @type string
   */
  locationId: string;
  /**
   * Details of the private location to be updated.
   * @type SyntheticsPrivateLocation
   */
  body: SyntheticsPrivateLocation;
}

export interface SyntheticsApiUpdateTestPauseStatusRequest {
  /**
   * The public ID of the Synthetic test to update.
   * @type string
   */
  publicId: string;
  /**
   * Status to set the given Synthetic test to.
   * @type SyntheticsUpdateTestPauseStatusPayload
   */
  body: SyntheticsUpdateTestPauseStatusPayload;
}

export class ObjectSyntheticsApi {
  private requestFactory: SyntheticsApiRequestFactory;
  private responseProcessor: SyntheticsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SyntheticsApiRequestFactory,
    responseProcessor?: SyntheticsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SyntheticsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SyntheticsApiResponseProcessor();
  }

  /**
   * Create a Synthetics global variable.
   * @param param The request object
   */
  public createGlobalVariable(
    param: SyntheticsApiCreateGlobalVariableRequest,
    options?: Configuration
  ): Promise<SyntheticsGlobalVariable> {
    const requestContextPromise = this.requestFactory.createGlobalVariable(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Create a new Synthetics private location.
   * @param param The request object
   */
  public createPrivateLocation(
    param: SyntheticsApiCreatePrivateLocationRequest,
    options?: Configuration
  ): Promise<SyntheticsPrivateLocationCreationResponse> {
    const requestContextPromise = this.requestFactory.createPrivateLocation(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createPrivateLocation(responseContext);
        });
    });
  }

  /**
   * Create a Synthetic API test.
   * @param param The request object
   */
  public createSyntheticsAPITest(
    param: SyntheticsApiCreateSyntheticsAPITestRequest,
    options?: Configuration
  ): Promise<SyntheticsAPITest> {
    const requestContextPromise = this.requestFactory.createSyntheticsAPITest(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsAPITest(
            responseContext
          );
        });
    });
  }

  /**
   * Create a Synthetic browser test.
   * @param param The request object
   */
  public createSyntheticsBrowserTest(
    param: SyntheticsApiCreateSyntheticsBrowserTestRequest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTest> {
    const requestContextPromise =
      this.requestFactory.createSyntheticsBrowserTest(param.body, options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createSyntheticsBrowserTest(
            responseContext
          );
        });
    });
  }

  /**
   * Delete a Synthetics global variable.
   * @param param The request object
   */
  public deleteGlobalVariable(
    param: SyntheticsApiDeleteGlobalVariableRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteGlobalVariable(
      param.variableId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Delete a Synthetics private location.
   * @param param The request object
   */
  public deletePrivateLocation(
    param: SyntheticsApiDeletePrivateLocationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deletePrivateLocation(
      param.locationId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deletePrivateLocation(responseContext);
        });
    });
  }

  /**
   * Delete multiple Synthetic tests by ID.
   * @param param The request object
   */
  public deleteTests(
    param: SyntheticsApiDeleteTestsRequest,
    options?: Configuration
  ): Promise<SyntheticsDeleteTestsResponse> {
    const requestContextPromise = this.requestFactory.deleteTests(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteTests(responseContext);
        });
    });
  }

  /**
   * Edit a Synthetics global variable.
   * @param param The request object
   */
  public editGlobalVariable(
    param: SyntheticsApiEditGlobalVariableRequest,
    options?: Configuration
  ): Promise<SyntheticsGlobalVariable> {
    const requestContextPromise = this.requestFactory.editGlobalVariable(
      param.variableId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.editGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Get the detailed configuration associated with a Synthetic API test.
   * @param param The request object
   */
  public getAPITest(
    param: SyntheticsApiGetAPITestRequest,
    options?: Configuration
  ): Promise<SyntheticsAPITest> {
    const requestContextPromise = this.requestFactory.getAPITest(
      param.publicId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAPITest(responseContext);
        });
    });
  }

  /**
   * Get the last 50 test results summaries for a given Synthetics API test.
   * @param param The request object
   */
  public getAPITestLatestResults(
    param: SyntheticsApiGetAPITestLatestResultsRequest,
    options?: Configuration
  ): Promise<SyntheticsGetAPITestLatestResultsResponse> {
    const requestContextPromise = this.requestFactory.getAPITestLatestResults(
      param.publicId,
      param.fromTs,
      param.toTs,
      param.probeDc,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAPITestLatestResults(
            responseContext
          );
        });
    });
  }

  /**
   * Get a specific full result from a given (API) Synthetic test.
   * @param param The request object
   */
  public getAPITestResult(
    param: SyntheticsApiGetAPITestResultRequest,
    options?: Configuration
  ): Promise<SyntheticsAPITestResultFull> {
    const requestContextPromise = this.requestFactory.getAPITestResult(
      param.publicId,
      param.resultId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getAPITestResult(responseContext);
        });
    });
  }

  /**
   * Get the detailed configuration (including steps) associated with a Synthetic browser test.
   * @param param The request object
   */
  public getBrowserTest(
    param: SyntheticsApiGetBrowserTestRequest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTest> {
    const requestContextPromise = this.requestFactory.getBrowserTest(
      param.publicId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBrowserTest(responseContext);
        });
    });
  }

  /**
   * Get the last 50 test results summaries for a given Synthetics Browser test.
   * @param param The request object
   */
  public getBrowserTestLatestResults(
    param: SyntheticsApiGetBrowserTestLatestResultsRequest,
    options?: Configuration
  ): Promise<SyntheticsGetBrowserTestLatestResultsResponse> {
    const requestContextPromise =
      this.requestFactory.getBrowserTestLatestResults(
        param.publicId,
        param.fromTs,
        param.toTs,
        param.probeDc,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBrowserTestLatestResults(
            responseContext
          );
        });
    });
  }

  /**
   * Get a specific full result from a given (browser) Synthetic test.
   * @param param The request object
   */
  public getBrowserTestResult(
    param: SyntheticsApiGetBrowserTestResultRequest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTestResultFull> {
    const requestContextPromise = this.requestFactory.getBrowserTestResult(
      param.publicId,
      param.resultId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getBrowserTestResult(responseContext);
        });
    });
  }

  /**
   * Get the detailed configuration of a global variable.
   * @param param The request object
   */
  public getGlobalVariable(
    param: SyntheticsApiGetGlobalVariableRequest,
    options?: Configuration
  ): Promise<SyntheticsGlobalVariable> {
    const requestContextPromise = this.requestFactory.getGlobalVariable(
      param.variableId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getGlobalVariable(responseContext);
        });
    });
  }

  /**
   * Get a Synthetics private location.
   * @param param The request object
   */
  public getPrivateLocation(
    param: SyntheticsApiGetPrivateLocationRequest,
    options?: Configuration
  ): Promise<SyntheticsPrivateLocation> {
    const requestContextPromise = this.requestFactory.getPrivateLocation(
      param.locationId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getPrivateLocation(responseContext);
        });
    });
  }

  /**
   * Get a batch's updated details.
   * @param param The request object
   */
  public getSyntheticsCIBatch(
    param: SyntheticsApiGetSyntheticsCIBatchRequest,
    options?: Configuration
  ): Promise<SyntheticsBatchDetails> {
    const requestContextPromise = this.requestFactory.getSyntheticsCIBatch(
      param.batchId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSyntheticsCIBatch(responseContext);
        });
    });
  }

  /**
   * Get the detailed configuration associated with a Synthetics test.
   * @param param The request object
   */
  public getTest(
    param: SyntheticsApiGetTestRequest,
    options?: Configuration
  ): Promise<SyntheticsTestDetails> {
    const requestContextPromise = this.requestFactory.getTest(
      param.publicId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getTest(responseContext);
        });
    });
  }

  /**
   * Get the list of all Synthetics global variables.
   * @param param The request object
   */
  public listGlobalVariables(
    options?: Configuration
  ): Promise<SyntheticsListGlobalVariablesResponse> {
    const requestContextPromise =
      this.requestFactory.listGlobalVariables(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listGlobalVariables(responseContext);
        });
    });
  }

  /**
   * Get the list of public and private locations available for Synthetic tests. No arguments required.
   * @param param The request object
   */
  public listLocations(options?: Configuration): Promise<SyntheticsLocations> {
    const requestContextPromise = this.requestFactory.listLocations(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listLocations(responseContext);
        });
    });
  }

  /**
   * Get the list of all Synthetic tests.
   * @param param The request object
   */
  public listTests(
    options?: Configuration
  ): Promise<SyntheticsListTestsResponse> {
    const requestContextPromise = this.requestFactory.listTests(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listTests(responseContext);
        });
    });
  }

  /**
   * Trigger a set of Synthetics tests for continuous integration.
   * @param param The request object
   */
  public triggerCITests(
    param: SyntheticsApiTriggerCITestsRequest,
    options?: Configuration
  ): Promise<SyntheticsTriggerCITestsResponse> {
    const requestContextPromise = this.requestFactory.triggerCITests(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.triggerCITests(responseContext);
        });
    });
  }

  /**
   * Trigger a set of Synthetics tests.
   * @param param The request object
   */
  public triggerTests(
    param: SyntheticsApiTriggerTestsRequest,
    options?: Configuration
  ): Promise<SyntheticsTriggerCITestsResponse> {
    const requestContextPromise = this.requestFactory.triggerTests(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.triggerTests(responseContext);
        });
    });
  }

  /**
   * Edit the configuration of a Synthetic API test.
   * @param param The request object
   */
  public updateAPITest(
    param: SyntheticsApiUpdateAPITestRequest,
    options?: Configuration
  ): Promise<SyntheticsAPITest> {
    const requestContextPromise = this.requestFactory.updateAPITest(
      param.publicId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateAPITest(responseContext);
        });
    });
  }

  /**
   * Edit the configuration of a Synthetic browser test.
   * @param param The request object
   */
  public updateBrowserTest(
    param: SyntheticsApiUpdateBrowserTestRequest,
    options?: Configuration
  ): Promise<SyntheticsBrowserTest> {
    const requestContextPromise = this.requestFactory.updateBrowserTest(
      param.publicId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateBrowserTest(responseContext);
        });
    });
  }

  /**
   * Edit a Synthetics private location.
   * @param param The request object
   */
  public updatePrivateLocation(
    param: SyntheticsApiUpdatePrivateLocationRequest,
    options?: Configuration
  ): Promise<SyntheticsPrivateLocation> {
    const requestContextPromise = this.requestFactory.updatePrivateLocation(
      param.locationId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updatePrivateLocation(responseContext);
        });
    });
  }

  /**
   * Pause or start a Synthetics test by changing the status.
   * @param param The request object
   */
  public updateTestPauseStatus(
    param: SyntheticsApiUpdateTestPauseStatusRequest,
    options?: Configuration
  ): Promise<boolean> {
    const requestContextPromise = this.requestFactory.updateTestPauseStatus(
      param.publicId,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateTestPauseStatus(responseContext);
        });
    });
  }
}

import {
  TagsApiRequestFactory,
  TagsApiResponseProcessor,
} from "../apis/TagsApi";

export interface TagsApiCreateHostTagsRequest {
  /**
   * This endpoint allows you to add new tags to a host, optionally specifying where the tags came from.
   * @type string
   */
  hostName: string;
  /**
   * Update host tags request body.
   * @type HostTags
   */
  body: HostTags;
  /**
   * The source of the tags. [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   * @type string
   */
  source?: string;
}

export interface TagsApiDeleteHostTagsRequest {
  /**
   * This endpoint allows you to remove all user-assigned tags for a single host.
   * @type string
   */
  hostName: string;
  /**
   * The source of the tags (for example chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value).
   * @type string
   */
  source?: string;
}

export interface TagsApiGetHostTagsRequest {
  /**
   * When specified, filters list of tags to those tags with the specified source.
   * @type string
   */
  hostName: string;
  /**
   * Source to filter.
   * @type string
   */
  source?: string;
}

export interface TagsApiListHostTagsRequest {
  /**
   * When specified, filters host list to those tags with the specified source.
   * @type string
   */
  source?: string;
}

export interface TagsApiUpdateHostTagsRequest {
  /**
   * This endpoint allows you to update/replace all in an integration source with those supplied in the request.
   * @type string
   */
  hostName: string;
  /**
   * Add tags to host
   * @type HostTags
   */
  body: HostTags;
  /**
   * The source of the tags (for example chef, puppet). [Complete list of source attribute values](https://docs.datadoghq.com/integrations/faq/list-of-api-source-attribute-value)
   * @type string
   */
  source?: string;
}

export class ObjectTagsApi {
  private requestFactory: TagsApiRequestFactory;
  private responseProcessor: TagsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: TagsApiRequestFactory,
    responseProcessor?: TagsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new TagsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new TagsApiResponseProcessor();
  }

  /**
   * This endpoint allows you to add new tags to a host, optionally specifying where these tags come from.
   * @param param The request object
   */
  public createHostTags(
    param: TagsApiCreateHostTagsRequest,
    options?: Configuration
  ): Promise<HostTags> {
    const requestContextPromise = this.requestFactory.createHostTags(
      param.hostName,
      param.body,
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createHostTags(responseContext);
        });
    });
  }

  /**
   * This endpoint allows you to remove all user-assigned tags for a single host.
   * @param param The request object
   */
  public deleteHostTags(
    param: TagsApiDeleteHostTagsRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteHostTags(
      param.hostName,
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteHostTags(responseContext);
        });
    });
  }

  /**
   * Return the list of tags that apply to a given host.
   * @param param The request object
   */
  public getHostTags(
    param: TagsApiGetHostTagsRequest,
    options?: Configuration
  ): Promise<HostTags> {
    const requestContextPromise = this.requestFactory.getHostTags(
      param.hostName,
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHostTags(responseContext);
        });
    });
  }

  /**
   * Return a mapping of tags to hosts for your whole infrastructure.
   * @param param The request object
   */
  public listHostTags(
    param: TagsApiListHostTagsRequest = {},
    options?: Configuration
  ): Promise<TagToHosts> {
    const requestContextPromise = this.requestFactory.listHostTags(
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listHostTags(responseContext);
        });
    });
  }

  /**
   * This endpoint allows you to update/replace all tags in an integration source with those supplied in the request.
   * @param param The request object
   */
  public updateHostTags(
    param: TagsApiUpdateHostTagsRequest,
    options?: Configuration
  ): Promise<HostTags> {
    const requestContextPromise = this.requestFactory.updateHostTags(
      param.hostName,
      param.body,
      param.source,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateHostTags(responseContext);
        });
    });
  }
}

import {
  UsageMeteringApiRequestFactory,
  UsageMeteringApiResponseProcessor,
} from "../apis/UsageMeteringApi";

export interface UsageMeteringApiGetDailyCustomReportsRequest {
  /**
   * The number of files to return in the response. &#x60;[default&#x3D;60]&#x60;.
   * @type number
   */
  pageSize?: number;
  /**
   * The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
   * @type number
   */
  pageNumber?: number;
  /**
   * The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @type UsageSortDirection
   */
  sortDir?: UsageSortDirection;
  /**
   * The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
   * @type UsageSort
   */
  sort?: UsageSort;
}

export interface UsageMeteringApiGetHourlyUsageAttributionRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Usage type to retrieve.
   * @type HourlyUsageAttributionUsageType
   */
  usageType: HourlyUsageAttributionUsageType;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
  /**
   * List following results with a next_record_id provided in the previous query.
   * @type string
   */
  nextRecordId?: string;
  /**
   * Comma separated list of tags used to group usage. If no value is provided the usage will not be broken down by tags.
   * @type string
   */
  tagBreakdownKeys?: string;
}

export interface UsageMeteringApiGetIncidentManagementRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetIngestedSpansRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetMonthlyCustomReportsRequest {
  /**
   * The number of files to return in the response &#x60;[default&#x3D;60].&#x60;
   * @type number
   */
  pageSize?: number;
  /**
   * The identifier of the first page to return. This parameter is used for the pagination feature &#x60;[default&#x3D;0]&#x60;.
   * @type number
   */
  pageNumber?: number;
  /**
   * The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @type UsageSortDirection
   */
  sortDir?: UsageSortDirection;
  /**
   * The field to sort by: &#x60;[computed_on, size, start_date, end_date]&#x60;.
   * @type UsageSort
   */
  sort?: UsageSort;
}

export interface UsageMeteringApiGetMonthlyUsageAttributionRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @type Date
   */
  startMonth: Date;
  /**
   * Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types.
   * @type MonthlyUsageAttributionSupportedMetrics
   */
  fields: MonthlyUsageAttributionSupportedMetrics;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @type UsageSortDirection
   */
  sortDirection?: UsageSortDirection;
  /**
   * The field to sort by.
   * @type MonthlyUsageAttributionSupportedMetrics
   */
  sortName?: MonthlyUsageAttributionSupportedMetrics;
  /**
   * Comma separated list of tags used to group usage. If no value is provided the usage will not be broken down by tags.
   * @type string
   */
  tagBreakdownKeys?: string;
  /**
   * List following results with a next_record_id provided in the previous query.
   * @type string
   */
  nextRecordId?: string;
}

export interface UsageMeteringApiGetSpecifiedDailyCustomReportsRequest {
  /**
   * Date of the report in the format &#x60;YYYY-MM-DD&#x60;.
   * @type string
   */
  reportId: string;
}

export interface UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest {
  /**
   * Date of the report in the format &#x60;YYYY-MM-DD&#x60;.
   * @type string
   */
  reportId: string;
}

export interface UsageMeteringApiGetUsageAnalyzedLogsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageAttributionRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @type Date
   */
  startMonth: Date;
  /**
   * Comma-separated list of usage types to return, or &#x60;*&#x60; for all usage types.
   * @type UsageAttributionSupportedMetrics
   */
  fields: UsageAttributionSupportedMetrics;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * The direction to sort by: &#x60;[desc, asc]&#x60;.
   * @type UsageSortDirection
   */
  sortDirection?: UsageSortDirection;
  /**
   * The field to sort by.
   * @type UsageAttributionSort
   */
  sortName?: UsageAttributionSort;
  /**
   * Include child org usage in the response. Defaults to false.
   * @type boolean
   */
  includeDescendants?: boolean;
  /**
   * Number of records to skip before beginning to return.
   * @type number
   */
  offset?: number;
  /**
   * Maximum number of records to be returned.
   * @type number
   */
  limit?: number;
}

export interface UsageMeteringApiGetUsageAuditLogsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageBillableSummaryRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage starting this month.
   * @type Date
   */
  month?: Date;
}

export interface UsageMeteringApiGetUsageCWSRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageCloudSecurityPostureManagementRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageDBMRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageFargateRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageHostsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageIndexedSpansRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageInternetOfThingsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageLambdaRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageLogsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageLogsByIndexRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
  /**
   * Comma-separated list of log index names.
   * @type Array&lt;string&gt;
   */
  indexName?: Array<string>;
}

export interface UsageMeteringApiGetUsageLogsByRetentionRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageNetworkFlowsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageNetworkHostsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageProfilingRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageRumSessionsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
  /**
   * RUM type: &#x60;[browser, mobile]&#x60;. Defaults to &#x60;browser&#x60;.
   * @type string
   */
  type?: string;
}

export interface UsageMeteringApiGetUsageRumUnitsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSDSRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSNMPRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: &#x60;[YYYY-MM-DDThh]&#x60; for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSummaryRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage beginning in this month. Maximum of 15 months ago.
   * @type Date
   */
  startMonth: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: &#x60;[YYYY-MM]&#x60; for usage ending this month.
   * @type Date
   */
  endMonth?: Date;
  /**
   * Include usage summaries for each sub-org.
   * @type boolean
   */
  includeOrgDetails?: boolean;
}

export interface UsageMeteringApiGetUsageSyntheticsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSyntheticsAPIRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageSyntheticsBrowserRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageTimeseriesRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage beginning at this hour.
   * @type Date
   */
  startHr: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to hour: [YYYY-MM-DDThh] for usage ending **before** this hour.
   * @type Date
   */
  endHr?: Date;
}

export interface UsageMeteringApiGetUsageTopAvgMetricsRequest {
  /**
   * Datetime in ISO-8601 format, UTC, precise to month: [YYYY-MM] for usage beginning at this hour. (Either month or day should be specified, but not both)
   * @type Date
   */
  month?: Date;
  /**
   * Datetime in ISO-8601 format, UTC, precise to day: [YYYY-MM-DD] for usage beginning at this hour. (Either month or day should be specified, but not both)
   * @type Date
   */
  day?: Date;
  /**
   * Comma-separated list of metric names.
   * @type Array&lt;string&gt;
   */
  names?: Array<string>;
  /**
   * Maximum number of results to return (between 1 and 5000) - defaults to 500 results if limit not specified.
   * @type number
   */
  limit?: number;
  /**
   * List following results with a next_record_id provided in the previous query.
   * @type string
   */
  nextRecordId?: string;
}

export class ObjectUsageMeteringApi {
  private requestFactory: UsageMeteringApiRequestFactory;
  private responseProcessor: UsageMeteringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: UsageMeteringApiRequestFactory,
    responseProcessor?: UsageMeteringApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new UsageMeteringApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new UsageMeteringApiResponseProcessor();
  }

  /**
   * Get daily custom reports.
   * @param param The request object
   */
  public getDailyCustomReports(
    param: UsageMeteringApiGetDailyCustomReportsRequest = {},
    options?: Configuration
  ): Promise<UsageCustomReportsResponse> {
    const requestContextPromise = this.requestFactory.getDailyCustomReports(
      param.pageSize,
      param.pageNumber,
      param.sortDir,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getDailyCustomReports(responseContext);
        });
    });
  }

  /**
   * Get Hourly Usage Attribution.
   * @param param The request object
   */
  public getHourlyUsageAttribution(
    param: UsageMeteringApiGetHourlyUsageAttributionRequest,
    options?: Configuration
  ): Promise<HourlyUsageAttributionResponse> {
    const requestContextPromise = this.requestFactory.getHourlyUsageAttribution(
      param.startHr,
      param.usageType,
      param.endHr,
      param.nextRecordId,
      param.tagBreakdownKeys,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getHourlyUsageAttribution(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for incident management.
   * @param param The request object
   */
  public getIncidentManagement(
    param: UsageMeteringApiGetIncidentManagementRequest,
    options?: Configuration
  ): Promise<UsageIncidentManagementResponse> {
    const requestContextPromise = this.requestFactory.getIncidentManagement(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIncidentManagement(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for ingested spans.
   * @param param The request object
   */
  public getIngestedSpans(
    param: UsageMeteringApiGetIngestedSpansRequest,
    options?: Configuration
  ): Promise<UsageIngestedSpansResponse> {
    const requestContextPromise = this.requestFactory.getIngestedSpans(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getIngestedSpans(responseContext);
        });
    });
  }

  /**
   * Get monthly custom reports.
   * @param param The request object
   */
  public getMonthlyCustomReports(
    param: UsageMeteringApiGetMonthlyCustomReportsRequest = {},
    options?: Configuration
  ): Promise<UsageCustomReportsResponse> {
    const requestContextPromise = this.requestFactory.getMonthlyCustomReports(
      param.pageSize,
      param.pageNumber,
      param.sortDir,
      param.sort,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonthlyCustomReports(
            responseContext
          );
        });
    });
  }

  /**
   * Get Monthly Usage Attribution.
   * @param param The request object
   */
  public getMonthlyUsageAttribution(
    param: UsageMeteringApiGetMonthlyUsageAttributionRequest,
    options?: Configuration
  ): Promise<MonthlyUsageAttributionResponse> {
    const requestContextPromise =
      this.requestFactory.getMonthlyUsageAttribution(
        param.startMonth,
        param.fields,
        param.endMonth,
        param.sortDirection,
        param.sortName,
        param.tagBreakdownKeys,
        param.nextRecordId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getMonthlyUsageAttribution(
            responseContext
          );
        });
    });
  }

  /**
   * Get specified daily custom reports.
   * @param param The request object
   */
  public getSpecifiedDailyCustomReports(
    param: UsageMeteringApiGetSpecifiedDailyCustomReportsRequest,
    options?: Configuration
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const requestContextPromise =
      this.requestFactory.getSpecifiedDailyCustomReports(
        param.reportId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSpecifiedDailyCustomReports(
            responseContext
          );
        });
    });
  }

  /**
   * Get specified monthly custom reports.
   * @param param The request object
   */
  public getSpecifiedMonthlyCustomReports(
    param: UsageMeteringApiGetSpecifiedMonthlyCustomReportsRequest,
    options?: Configuration
  ): Promise<UsageSpecifiedCustomReportsResponse> {
    const requestContextPromise =
      this.requestFactory.getSpecifiedMonthlyCustomReports(
        param.reportId,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getSpecifiedMonthlyCustomReports(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for analyzed logs (Security Monitoring).
   * @param param The request object
   */
  public getUsageAnalyzedLogs(
    param: UsageMeteringApiGetUsageAnalyzedLogsRequest,
    options?: Configuration
  ): Promise<UsageAnalyzedLogsResponse> {
    const requestContextPromise = this.requestFactory.getUsageAnalyzedLogs(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageAnalyzedLogs(responseContext);
        });
    });
  }

  /**
   * Get Usage Attribution.
   * @param param The request object
   */
  public getUsageAttribution(
    param: UsageMeteringApiGetUsageAttributionRequest,
    options?: Configuration
  ): Promise<UsageAttributionResponse> {
    const requestContextPromise = this.requestFactory.getUsageAttribution(
      param.startMonth,
      param.fields,
      param.endMonth,
      param.sortDirection,
      param.sortName,
      param.includeDescendants,
      param.offset,
      param.limit,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageAttribution(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for audit logs.
   * @param param The request object
   */
  public getUsageAuditLogs(
    param: UsageMeteringApiGetUsageAuditLogsRequest,
    options?: Configuration
  ): Promise<UsageAuditLogsResponse> {
    const requestContextPromise = this.requestFactory.getUsageAuditLogs(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageAuditLogs(responseContext);
        });
    });
  }

  /**
   * Get billable usage across your account.
   * @param param The request object
   */
  public getUsageBillableSummary(
    param: UsageMeteringApiGetUsageBillableSummaryRequest = {},
    options?: Configuration
  ): Promise<UsageBillableSummaryResponse> {
    const requestContextPromise = this.requestFactory.getUsageBillableSummary(
      param.month,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageBillableSummary(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for Cloud Workload Security.
   * @param param The request object
   */
  public getUsageCWS(
    param: UsageMeteringApiGetUsageCWSRequest,
    options?: Configuration
  ): Promise<UsageCWSResponse> {
    const requestContextPromise = this.requestFactory.getUsageCWS(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageCWS(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for Cloud Security Posture Management (CSPM).
   * @param param The request object
   */
  public getUsageCloudSecurityPostureManagement(
    param: UsageMeteringApiGetUsageCloudSecurityPostureManagementRequest,
    options?: Configuration
  ): Promise<UsageCloudSecurityPostureManagementResponse> {
    const requestContextPromise =
      this.requestFactory.getUsageCloudSecurityPostureManagement(
        param.startHr,
        param.endHr,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageCloudSecurityPostureManagement(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for Database Monitoring
   * @param param The request object
   */
  public getUsageDBM(
    param: UsageMeteringApiGetUsageDBMRequest,
    options?: Configuration
  ): Promise<UsageDBMResponse> {
    const requestContextPromise = this.requestFactory.getUsageDBM(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageDBM(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [Fargate](https://docs.datadoghq.com/integrations/ecs_fargate/).
   * @param param The request object
   */
  public getUsageFargate(
    param: UsageMeteringApiGetUsageFargateRequest,
    options?: Configuration
  ): Promise<UsageFargateResponse> {
    const requestContextPromise = this.requestFactory.getUsageFargate(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageFargate(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for hosts and containers.
   * @param param The request object
   */
  public getUsageHosts(
    param: UsageMeteringApiGetUsageHostsRequest,
    options?: Configuration
  ): Promise<UsageHostsResponse> {
    const requestContextPromise = this.requestFactory.getUsageHosts(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageHosts(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for indexed spans.
   * @param param The request object
   */
  public getUsageIndexedSpans(
    param: UsageMeteringApiGetUsageIndexedSpansRequest,
    options?: Configuration
  ): Promise<UsageIndexedSpansResponse> {
    const requestContextPromise = this.requestFactory.getUsageIndexedSpans(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageIndexedSpans(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for IoT.
   * @param param The request object
   */
  public getUsageInternetOfThings(
    param: UsageMeteringApiGetUsageInternetOfThingsRequest,
    options?: Configuration
  ): Promise<UsageIoTResponse> {
    const requestContextPromise = this.requestFactory.getUsageInternetOfThings(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageInternetOfThings(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for lambda.
   * @param param The request object
   */
  public getUsageLambda(
    param: UsageMeteringApiGetUsageLambdaRequest,
    options?: Configuration
  ): Promise<UsageLambdaResponse> {
    const requestContextPromise = this.requestFactory.getUsageLambda(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLambda(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for logs.
   * @param param The request object
   */
  public getUsageLogs(
    param: UsageMeteringApiGetUsageLogsRequest,
    options?: Configuration
  ): Promise<UsageLogsResponse> {
    const requestContextPromise = this.requestFactory.getUsageLogs(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLogs(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for logs by index.
   * @param param The request object
   */
  public getUsageLogsByIndex(
    param: UsageMeteringApiGetUsageLogsByIndexRequest,
    options?: Configuration
  ): Promise<UsageLogsByIndexResponse> {
    const requestContextPromise = this.requestFactory.getUsageLogsByIndex(
      param.startHr,
      param.endHr,
      param.indexName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLogsByIndex(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for indexed logs by retention period.
   * @param param The request object
   */
  public getUsageLogsByRetention(
    param: UsageMeteringApiGetUsageLogsByRetentionRequest,
    options?: Configuration
  ): Promise<UsageLogsByRetentionResponse> {
    const requestContextPromise = this.requestFactory.getUsageLogsByRetention(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageLogsByRetention(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for network flows.
   * @param param The request object
   */
  public getUsageNetworkFlows(
    param: UsageMeteringApiGetUsageNetworkFlowsRequest,
    options?: Configuration
  ): Promise<UsageNetworkFlowsResponse> {
    const requestContextPromise = this.requestFactory.getUsageNetworkFlows(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageNetworkFlows(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for network hosts.
   * @param param The request object
   */
  public getUsageNetworkHosts(
    param: UsageMeteringApiGetUsageNetworkHostsRequest,
    options?: Configuration
  ): Promise<UsageNetworkHostsResponse> {
    const requestContextPromise = this.requestFactory.getUsageNetworkHosts(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageNetworkHosts(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for profiled hosts.
   * @param param The request object
   */
  public getUsageProfiling(
    param: UsageMeteringApiGetUsageProfilingRequest,
    options?: Configuration
  ): Promise<UsageProfilingResponse> {
    const requestContextPromise = this.requestFactory.getUsageProfiling(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageProfiling(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Sessions.
   * @param param The request object
   */
  public getUsageRumSessions(
    param: UsageMeteringApiGetUsageRumSessionsRequest,
    options?: Configuration
  ): Promise<UsageRumSessionsResponse> {
    const requestContextPromise = this.requestFactory.getUsageRumSessions(
      param.startHr,
      param.endHr,
      param.type,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageRumSessions(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [RUM](https://docs.datadoghq.com/real_user_monitoring/) Units.
   * @param param The request object
   */
  public getUsageRumUnits(
    param: UsageMeteringApiGetUsageRumUnitsRequest,
    options?: Configuration
  ): Promise<UsageRumUnitsResponse> {
    const requestContextPromise = this.requestFactory.getUsageRumUnits(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageRumUnits(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for Sensitive Data Scanner.
   * @param param The request object
   */
  public getUsageSDS(
    param: UsageMeteringApiGetUsageSDSRequest,
    options?: Configuration
  ): Promise<UsageSDSResponse> {
    const requestContextPromise = this.requestFactory.getUsageSDS(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSDS(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for SNMP devices.
   * @param param The request object
   */
  public getUsageSNMP(
    param: UsageMeteringApiGetUsageSNMPRequest,
    options?: Configuration
  ): Promise<UsageSNMPResponse> {
    const requestContextPromise = this.requestFactory.getUsageSNMP(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSNMP(responseContext);
        });
    });
  }

  /**
   * Get usage across your multi-org account. You must have the multi-org feature enabled.
   * @param param The request object
   */
  public getUsageSummary(
    param: UsageMeteringApiGetUsageSummaryRequest,
    options?: Configuration
  ): Promise<UsageSummaryResponse> {
    const requestContextPromise = this.requestFactory.getUsageSummary(
      param.startMonth,
      param.endMonth,
      param.includeOrgDetails,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSummary(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [Synthetics checks](https://docs.datadoghq.com/synthetics/).
   * @param param The request object
   */
  public getUsageSynthetics(
    param: UsageMeteringApiGetUsageSyntheticsRequest,
    options?: Configuration
  ): Promise<UsageSyntheticsResponse> {
    const requestContextPromise = this.requestFactory.getUsageSynthetics(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSynthetics(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for [synthetics API checks](https://docs.datadoghq.com/synthetics/).
   * @param param The request object
   */
  public getUsageSyntheticsAPI(
    param: UsageMeteringApiGetUsageSyntheticsAPIRequest,
    options?: Configuration
  ): Promise<UsageSyntheticsAPIResponse> {
    const requestContextPromise = this.requestFactory.getUsageSyntheticsAPI(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSyntheticsAPI(responseContext);
        });
    });
  }

  /**
   * Get hourly usage for synthetics browser checks.
   * @param param The request object
   */
  public getUsageSyntheticsBrowser(
    param: UsageMeteringApiGetUsageSyntheticsBrowserRequest,
    options?: Configuration
  ): Promise<UsageSyntheticsBrowserResponse> {
    const requestContextPromise = this.requestFactory.getUsageSyntheticsBrowser(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageSyntheticsBrowser(
            responseContext
          );
        });
    });
  }

  /**
   * Get hourly usage for [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/).
   * @param param The request object
   */
  public getUsageTimeseries(
    param: UsageMeteringApiGetUsageTimeseriesRequest,
    options?: Configuration
  ): Promise<UsageTimeseriesResponse> {
    const requestContextPromise = this.requestFactory.getUsageTimeseries(
      param.startHr,
      param.endHr,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageTimeseries(responseContext);
        });
    });
  }

  /**
   * Get all [custom metrics](https://docs.datadoghq.com/developers/metrics/custom_metrics/) by hourly average. Use the month parameter to get a month-to-date data resolution or use the day parameter to get a daily resolution. One of the two is required, and only one of the two is allowed.
   * @param param The request object
   */
  public getUsageTopAvgMetrics(
    param: UsageMeteringApiGetUsageTopAvgMetricsRequest = {},
    options?: Configuration
  ): Promise<UsageTopAvgMetricsResponse> {
    const requestContextPromise = this.requestFactory.getUsageTopAvgMetrics(
      param.month,
      param.day,
      param.names,
      param.limit,
      param.nextRecordId,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUsageTopAvgMetrics(responseContext);
        });
    });
  }
}

import {
  UsersApiRequestFactory,
  UsersApiResponseProcessor,
} from "../apis/UsersApi";

export interface UsersApiCreateUserRequest {
  /**
   * User object that needs to be created.
   * @type User
   */
  body: User;
}

export interface UsersApiDisableUserRequest {
  /**
   * The handle of the user.
   * @type string
   */
  userHandle: string;
}

export interface UsersApiGetUserRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userHandle: string;
}

export interface UsersApiUpdateUserRequest {
  /**
   * The ID of the user.
   * @type string
   */
  userHandle: string;
  /**
   * Description of the update.
   * @type User
   */
  body: User;
}

export class ObjectUsersApi {
  private requestFactory: UsersApiRequestFactory;
  private responseProcessor: UsersApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: UsersApiRequestFactory,
    responseProcessor?: UsersApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new UsersApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new UsersApiResponseProcessor();
  }

  /**
   * Create a user for your organization.  **Note**: Users can only be created with the admin access role if application keys belong to administrators.
   * @param param The request object
   */
  public createUser(
    param: UsersApiCreateUserRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.createUser(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createUser(responseContext);
        });
    });
  }

  /**
   * Delete a user from an organization.  **Note**: This endpoint can only be used with application keys belonging to administrators.
   * @param param The request object
   */
  public disableUser(
    param: UsersApiDisableUserRequest,
    options?: Configuration
  ): Promise<UserDisableResponse> {
    const requestContextPromise = this.requestFactory.disableUser(
      param.userHandle,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.disableUser(responseContext);
        });
    });
  }

  /**
   * Get a user's details.
   * @param param The request object
   */
  public getUser(
    param: UsersApiGetUserRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.getUser(
      param.userHandle,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getUser(responseContext);
        });
    });
  }

  /**
   * List all users for your organization.
   * @param param The request object
   */
  public listUsers(options?: Configuration): Promise<UserListResponse> {
    const requestContextPromise = this.requestFactory.listUsers(options);
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.listUsers(responseContext);
        });
    });
  }

  /**
   * Update a user information.  **Note**: It can only be used with application keys belonging to administrators.
   * @param param The request object
   */
  public updateUser(
    param: UsersApiUpdateUserRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    const requestContextPromise = this.requestFactory.updateUser(
      param.userHandle,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateUser(responseContext);
        });
    });
  }
}

import {
  WebhooksIntegrationApiRequestFactory,
  WebhooksIntegrationApiResponseProcessor,
} from "../apis/WebhooksIntegrationApi";

export interface WebhooksIntegrationApiCreateWebhooksIntegrationRequest {
  /**
   * Create a webhooks integration request body.
   * @type WebhooksIntegration
   */
  body: WebhooksIntegration;
}

export interface WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest {
  /**
   * Define a custom variable request body.
   * @type WebhooksIntegrationCustomVariable
   */
  body: WebhooksIntegrationCustomVariable;
}

export interface WebhooksIntegrationApiDeleteWebhooksIntegrationRequest {
  /**
   * The name of the webhook.
   * @type string
   */
  webhookName: string;
}

export interface WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest {
  /**
   * The name of the custom variable.
   * @type string
   */
  customVariableName: string;
}

export interface WebhooksIntegrationApiGetWebhooksIntegrationRequest {
  /**
   * The name of the webhook.
   * @type string
   */
  webhookName: string;
}

export interface WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest {
  /**
   * The name of the custom variable.
   * @type string
   */
  customVariableName: string;
}

export interface WebhooksIntegrationApiUpdateWebhooksIntegrationRequest {
  /**
   * The name of the webhook.
   * @type string
   */
  webhookName: string;
  /**
   * Update an existing Datadog-Webhooks integration.
   * @type WebhooksIntegrationUpdateRequest
   */
  body: WebhooksIntegrationUpdateRequest;
}

export interface WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest {
  /**
   * The name of the custom variable.
   * @type string
   */
  customVariableName: string;
  /**
   * Update an existing custom variable request body.
   * @type WebhooksIntegrationCustomVariableUpdateRequest
   */
  body: WebhooksIntegrationCustomVariableUpdateRequest;
}

export class ObjectWebhooksIntegrationApi {
  private requestFactory: WebhooksIntegrationApiRequestFactory;
  private responseProcessor: WebhooksIntegrationApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: WebhooksIntegrationApiRequestFactory,
    responseProcessor?: WebhooksIntegrationApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new WebhooksIntegrationApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new WebhooksIntegrationApiResponseProcessor();
  }

  /**
   * Creates an endpoint with the name `<WEBHOOK_NAME>`.
   * @param param The request object
   */
  public createWebhooksIntegration(
    param: WebhooksIntegrationApiCreateWebhooksIntegrationRequest,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    const requestContextPromise = this.requestFactory.createWebhooksIntegration(
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWebhooksIntegration(
            responseContext
          );
        });
    });
  }

  /**
   * Creates an endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * @param param The request object
   */
  public createWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const requestContextPromise =
      this.requestFactory.createWebhooksIntegrationCustomVariable(
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.createWebhooksIntegrationCustomVariable(
            responseContext
          );
        });
    });
  }

  /**
   * Deletes the endpoint with the name `<WEBHOOK NAME>`.
   * @param param The request object
   */
  public deleteWebhooksIntegration(
    param: WebhooksIntegrationApiDeleteWebhooksIntegrationRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise = this.requestFactory.deleteWebhooksIntegration(
      param.webhookName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWebhooksIntegration(
            responseContext
          );
        });
    });
  }

  /**
   * Deletes the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * @param param The request object
   */
  public deleteWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiDeleteWebhooksIntegrationCustomVariableRequest,
    options?: Configuration
  ): Promise<void> {
    const requestContextPromise =
      this.requestFactory.deleteWebhooksIntegrationCustomVariable(
        param.customVariableName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.deleteWebhooksIntegrationCustomVariable(
            responseContext
          );
        });
    });
  }

  /**
   * Gets the content of the webhook with the name `<WEBHOOK_NAME>`.
   * @param param The request object
   */
  public getWebhooksIntegration(
    param: WebhooksIntegrationApiGetWebhooksIntegrationRequest,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    const requestContextPromise = this.requestFactory.getWebhooksIntegration(
      param.webhookName,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWebhooksIntegration(responseContext);
        });
    });
  }

  /**
   * Shows the content of the custom variable with the name `<CUSTOM_VARIABLE_NAME>`.  If the custom variable is secret, the value does not return in the response payload.
   * @param param The request object
   */
  public getWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const requestContextPromise =
      this.requestFactory.getWebhooksIntegrationCustomVariable(
        param.customVariableName,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.getWebhooksIntegrationCustomVariable(
            responseContext
          );
        });
    });
  }

  /**
   * Updates the endpoint with the name `<WEBHOOK_NAME>`.
   * @param param The request object
   */
  public updateWebhooksIntegration(
    param: WebhooksIntegrationApiUpdateWebhooksIntegrationRequest,
    options?: Configuration
  ): Promise<WebhooksIntegration> {
    const requestContextPromise = this.requestFactory.updateWebhooksIntegration(
      param.webhookName,
      param.body,
      options
    );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWebhooksIntegration(
            responseContext
          );
        });
    });
  }

  /**
   * Updates the endpoint with the name `<CUSTOM_VARIABLE_NAME>`.
   * @param param The request object
   */
  public updateWebhooksIntegrationCustomVariable(
    param: WebhooksIntegrationApiUpdateWebhooksIntegrationCustomVariableRequest,
    options?: Configuration
  ): Promise<WebhooksIntegrationCustomVariableResponse> {
    const requestContextPromise =
      this.requestFactory.updateWebhooksIntegrationCustomVariable(
        param.customVariableName,
        param.body,
        options
      );
    return requestContextPromise.then((requestContext) => {
      return this.configuration.httpApi
        .send(requestContext)
        .then((responseContext) => {
          return this.responseProcessor.updateWebhooksIntegrationCustomVariable(
            responseContext
          );
        });
    });
  }
}
