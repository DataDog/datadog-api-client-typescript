import { Configuration } from "../configuration";

import { APIKeyCreateRequest } from "../models/APIKeyCreateRequest";
import { APIKeyResponse } from "../models/APIKeyResponse";
import { APIKeyUpdateRequest } from "../models/APIKeyUpdateRequest";
import { APIKeysResponse } from "../models/APIKeysResponse";
import { APIKeysSort } from "../models/APIKeysSort";
import { ApplicationKeyCreateRequest } from "../models/ApplicationKeyCreateRequest";
import { ApplicationKeyResponse } from "../models/ApplicationKeyResponse";
import { ApplicationKeyUpdateRequest } from "../models/ApplicationKeyUpdateRequest";
import { ApplicationKeysSort } from "../models/ApplicationKeysSort";
import { DashboardListAddItemsRequest } from "../models/DashboardListAddItemsRequest";
import { DashboardListAddItemsResponse } from "../models/DashboardListAddItemsResponse";
import { DashboardListDeleteItemsRequest } from "../models/DashboardListDeleteItemsRequest";
import { DashboardListDeleteItemsResponse } from "../models/DashboardListDeleteItemsResponse";
import { DashboardListItems } from "../models/DashboardListItems";
import { DashboardListUpdateItemsRequest } from "../models/DashboardListUpdateItemsRequest";
import { DashboardListUpdateItemsResponse } from "../models/DashboardListUpdateItemsResponse";
import { IncidentCreateRequest } from "../models/IncidentCreateRequest";
import { IncidentRelatedObject } from "../models/IncidentRelatedObject";
import { IncidentResponse } from "../models/IncidentResponse";
import { IncidentServiceCreateRequest } from "../models/IncidentServiceCreateRequest";
import { IncidentServiceResponse } from "../models/IncidentServiceResponse";
import { IncidentServiceUpdateRequest } from "../models/IncidentServiceUpdateRequest";
import { IncidentServicesResponse } from "../models/IncidentServicesResponse";
import { IncidentTeamCreateRequest } from "../models/IncidentTeamCreateRequest";
import { IncidentTeamResponse } from "../models/IncidentTeamResponse";
import { IncidentTeamUpdateRequest } from "../models/IncidentTeamUpdateRequest";
import { IncidentTeamsResponse } from "../models/IncidentTeamsResponse";
import { IncidentUpdateRequest } from "../models/IncidentUpdateRequest";
import { IncidentsResponse } from "../models/IncidentsResponse";
import { ListApplicationKeysResponse } from "../models/ListApplicationKeysResponse";
import { LogsAggregateRequest } from "../models/LogsAggregateRequest";
import { LogsAggregateResponse } from "../models/LogsAggregateResponse";
import { LogsArchive } from "../models/LogsArchive";
import { LogsArchiveCreateRequest } from "../models/LogsArchiveCreateRequest";
import { LogsArchiveOrder } from "../models/LogsArchiveOrder";
import { LogsArchives } from "../models/LogsArchives";
import { LogsListRequest } from "../models/LogsListRequest";
import { LogsListResponse } from "../models/LogsListResponse";
import { LogsMetricCreateRequest } from "../models/LogsMetricCreateRequest";
import { LogsMetricResponse } from "../models/LogsMetricResponse";
import { LogsMetricUpdateRequest } from "../models/LogsMetricUpdateRequest";
import { LogsMetricsResponse } from "../models/LogsMetricsResponse";
import { LogsSort } from "../models/LogsSort";
import { MetricAllTagsResponse } from "../models/MetricAllTagsResponse";
import { MetricTagConfigurationCreateRequest } from "../models/MetricTagConfigurationCreateRequest";
import { MetricTagConfigurationMetricTypes } from "../models/MetricTagConfigurationMetricTypes";
import { MetricTagConfigurationResponse } from "../models/MetricTagConfigurationResponse";
import { MetricTagConfigurationUpdateRequest } from "../models/MetricTagConfigurationUpdateRequest";
import { MetricVolumesResponse } from "../models/MetricVolumesResponse";
import { MetricsAndMetricTagConfigurationsResponse } from "../models/MetricsAndMetricTagConfigurationsResponse";
import { OrganizationsResponse } from "../models/OrganizationsResponse";
import { PermissionsResponse } from "../models/PermissionsResponse";
import { ProcessSummariesResponse } from "../models/ProcessSummariesResponse";
import { QuerySortOrder } from "../models/QuerySortOrder";
import { RelationshipToPermission } from "../models/RelationshipToPermission";
import { RelationshipToRole } from "../models/RelationshipToRole";
import { RelationshipToUser } from "../models/RelationshipToUser";
import { RoleCreateRequest } from "../models/RoleCreateRequest";
import { RoleCreateResponse } from "../models/RoleCreateResponse";
import { RoleResponse } from "../models/RoleResponse";
import { RoleUpdateRequest } from "../models/RoleUpdateRequest";
import { RoleUpdateResponse } from "../models/RoleUpdateResponse";
import { RolesResponse } from "../models/RolesResponse";
import { RolesSort } from "../models/RolesSort";
import { SecurityFilterCreateRequest } from "../models/SecurityFilterCreateRequest";
import { SecurityFilterResponse } from "../models/SecurityFilterResponse";
import { SecurityFilterUpdateRequest } from "../models/SecurityFilterUpdateRequest";
import { SecurityFiltersResponse } from "../models/SecurityFiltersResponse";
import { SecurityMonitoringListRulesResponse } from "../models/SecurityMonitoringListRulesResponse";
import { SecurityMonitoringRuleCreatePayload } from "../models/SecurityMonitoringRuleCreatePayload";
import { SecurityMonitoringRuleResponse } from "../models/SecurityMonitoringRuleResponse";
import { SecurityMonitoringRuleUpdatePayload } from "../models/SecurityMonitoringRuleUpdatePayload";
import { SecurityMonitoringSignalListRequest } from "../models/SecurityMonitoringSignalListRequest";
import { SecurityMonitoringSignalsListResponse } from "../models/SecurityMonitoringSignalsListResponse";
import { SecurityMonitoringSignalsSort } from "../models/SecurityMonitoringSignalsSort";
import { UserCreateRequest } from "../models/UserCreateRequest";
import { UserInvitationResponse } from "../models/UserInvitationResponse";
import { UserInvitationsRequest } from "../models/UserInvitationsRequest";
import { UserInvitationsResponse } from "../models/UserInvitationsResponse";
import { UserResponse } from "../models/UserResponse";
import { UserUpdateRequest } from "../models/UserUpdateRequest";
import { UsersResponse } from "../models/UsersResponse";
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
   * Add dashboards to an existing dashboard list.
   * Add Items to a Dashboard List
   * @param dashboardListId ID of the dashboard list to add items to.
   * @param body Dashboards to add to the dashboard list.
   */
  public createDashboardListItems(
    dashboardListId: number,
    body: DashboardListAddItemsRequest,
    options?: Configuration
  ): Promise<DashboardListAddItemsResponse> {
    const result = this.api.createDashboardListItems(
      dashboardListId,
      body,
      options
    );
    return result.toPromise();
  }

  /**
   * Delete dashboards from an existing dashboard list.
   * Delete items from a dashboard list
   * @param dashboardListId ID of the dashboard list to delete items from.
   * @param body Dashboards to delete from the dashboard list.
   */
  public deleteDashboardListItems(
    dashboardListId: number,
    body: DashboardListDeleteItemsRequest,
    options?: Configuration
  ): Promise<DashboardListDeleteItemsResponse> {
    const result = this.api.deleteDashboardListItems(
      dashboardListId,
      body,
      options
    );
    return result.toPromise();
  }

  /**
   * Fetch the dashboard list’s dashboard definitions.
   * Get items of a Dashboard List
   * @param dashboardListId ID of the dashboard list to get items from.
   */
  public getDashboardListItems(
    dashboardListId: number,
    options?: Configuration
  ): Promise<DashboardListItems> {
    const result = this.api.getDashboardListItems(dashboardListId, options);
    return result.toPromise();
  }

  /**
   * Update dashboards of an existing dashboard list.
   * Update items of a dashboard list
   * @param dashboardListId ID of the dashboard list to update items from.
   * @param body New dashboards of the dashboard list.
   */
  public updateDashboardListItems(
    dashboardListId: number,
    body: DashboardListUpdateItemsRequest,
    options?: Configuration
  ): Promise<DashboardListUpdateItemsResponse> {
    const result = this.api.updateDashboardListItems(
      dashboardListId,
      body,
      options
    );
    return result.toPromise();
  }
}

import { ObservableIncidentServicesApi } from "./ObservableAPI";

import {
  IncidentServicesApiRequestFactory,
  IncidentServicesApiResponseProcessor,
} from "../apis/IncidentServicesApi";
export class PromiseIncidentServicesApi {
  private api: ObservableIncidentServicesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: IncidentServicesApiRequestFactory,
    responseProcessor?: IncidentServicesApiResponseProcessor
  ) {
    this.api = new ObservableIncidentServicesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Creates a new incident service.
   * Create a new incident service
   * @param body Incident Service Payload.
   */
  public createIncidentService(
    body: IncidentServiceCreateRequest,
    options?: Configuration
  ): Promise<IncidentServiceResponse> {
    const result = this.api.createIncidentService(body, options);
    return result.toPromise();
  }

  /**
   * Deletes an existing incident service.
   * Delete an existing incident service
   * @param serviceId The ID of the incident service.
   */
  public deleteIncidentService(
    serviceId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteIncidentService(serviceId, options);
    return result.toPromise();
  }

  /**
   * Get details of an incident service. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
   * Get details of an incident service
   * @param serviceId The ID of the incident service.
   * @param include Specifies which types of related objects should be included in the response.
   */
  public getIncidentService(
    serviceId: string,
    include?: IncidentRelatedObject,
    options?: Configuration
  ): Promise<IncidentServiceResponse> {
    const result = this.api.getIncidentService(serviceId, include, options);
    return result.toPromise();
  }

  /**
   * Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
   * Get a list of all incident services
   * @param include Specifies which types of related objects should be included in the response.
   * @param pageSize Size for a given page.
   * @param pageOffset Specific offset to use as the beginning of the returned page.
   * @param filter A search query that filters services by name.
   */
  public listIncidentServices(
    include?: IncidentRelatedObject,
    pageSize?: number,
    pageOffset?: number,
    filter?: string,
    options?: Configuration
  ): Promise<IncidentServicesResponse> {
    const result = this.api.listIncidentServices(
      include,
      pageSize,
      pageOffset,
      filter,
      options
    );
    return result.toPromise();
  }

  /**
   * Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.
   * Update an existing incident service
   * @param serviceId The ID of the incident service.
   * @param body Incident Service Payload.
   */
  public updateIncidentService(
    serviceId: string,
    body: IncidentServiceUpdateRequest,
    options?: Configuration
  ): Promise<IncidentServiceResponse> {
    const result = this.api.updateIncidentService(serviceId, body, options);
    return result.toPromise();
  }
}

import { ObservableIncidentTeamsApi } from "./ObservableAPI";

import {
  IncidentTeamsApiRequestFactory,
  IncidentTeamsApiResponseProcessor,
} from "../apis/IncidentTeamsApi";
export class PromiseIncidentTeamsApi {
  private api: ObservableIncidentTeamsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: IncidentTeamsApiRequestFactory,
    responseProcessor?: IncidentTeamsApiResponseProcessor
  ) {
    this.api = new ObservableIncidentTeamsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Creates a new incident team.
   * Create a new incident team
   * @param body Incident Team Payload.
   */
  public createIncidentTeam(
    body: IncidentTeamCreateRequest,
    options?: Configuration
  ): Promise<IncidentTeamResponse> {
    const result = this.api.createIncidentTeam(body, options);
    return result.toPromise();
  }

  /**
   * Deletes an existing incident team.
   * Delete an existing incident team
   * @param teamId The ID of the incident team.
   */
  public deleteIncidentTeam(
    teamId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteIncidentTeam(teamId, options);
    return result.toPromise();
  }

  /**
   * Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
   * Get details of an incident team
   * @param teamId The ID of the incident team.
   * @param include Specifies which types of related objects should be included in the response.
   */
  public getIncidentTeam(
    teamId: string,
    include?: IncidentRelatedObject,
    options?: Configuration
  ): Promise<IncidentTeamResponse> {
    const result = this.api.getIncidentTeam(teamId, include, options);
    return result.toPromise();
  }

  /**
   * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
   * Get a list of all incident teams
   * @param include Specifies which types of related objects should be included in the response.
   * @param pageSize Size for a given page.
   * @param pageOffset Specific offset to use as the beginning of the returned page.
   * @param filter A search query that filters teams by name.
   */
  public listIncidentTeams(
    include?: IncidentRelatedObject,
    pageSize?: number,
    pageOffset?: number,
    filter?: string,
    options?: Configuration
  ): Promise<IncidentTeamsResponse> {
    const result = this.api.listIncidentTeams(
      include,
      pageSize,
      pageOffset,
      filter,
      options
    );
    return result.toPromise();
  }

  /**
   * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
   * Update an existing incident team
   * @param teamId The ID of the incident team.
   * @param body Incident Team Payload.
   */
  public updateIncidentTeam(
    teamId: string,
    body: IncidentTeamUpdateRequest,
    options?: Configuration
  ): Promise<IncidentTeamResponse> {
    const result = this.api.updateIncidentTeam(teamId, body, options);
    return result.toPromise();
  }
}

import { ObservableIncidentsApi } from "./ObservableAPI";

import {
  IncidentsApiRequestFactory,
  IncidentsApiResponseProcessor,
} from "../apis/IncidentsApi";
export class PromiseIncidentsApi {
  private api: ObservableIncidentsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: IncidentsApiRequestFactory,
    responseProcessor?: IncidentsApiResponseProcessor
  ) {
    this.api = new ObservableIncidentsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create an incident.
   * Create an incident
   * @param body Incident payload.
   */
  public createIncident(
    body: IncidentCreateRequest,
    options?: Configuration
  ): Promise<IncidentResponse> {
    const result = this.api.createIncident(body, options);
    return result.toPromise();
  }

  /**
   * Deletes an existing incident from the users organization.
   * Delete an existing incident
   * @param incidentId The UUID the incident.
   */
  public deleteIncident(
    incidentId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteIncident(incidentId, options);
    return result.toPromise();
  }

  /**
   * Get the details of an incident by `incident_id`.
   * Get the details of an incident
   * @param incidentId The UUID the incident.
   * @param include Specifies which types of related objects should be included in the response.
   */
  public getIncident(
    incidentId: string,
    include?: Array<IncidentRelatedObject>,
    options?: Configuration
  ): Promise<IncidentResponse> {
    const result = this.api.getIncident(incidentId, include, options);
    return result.toPromise();
  }

  /**
   * Get all incidents for the user's organization.
   * Get a list of incidents
   * @param include Specifies which types of related objects should be included in the response.
   * @param pageSize Size for a given page.
   * @param pageOffset Specific offset to use as the beginning of the returned page.
   */
  public listIncidents(
    include?: Array<IncidentRelatedObject>,
    pageSize?: number,
    pageOffset?: number,
    options?: Configuration
  ): Promise<IncidentsResponse> {
    const result = this.api.listIncidents(
      include,
      pageSize,
      pageOffset,
      options
    );
    return result.toPromise();
  }

  /**
   * Updates an incident. Provide only the attributes that should be updated as this request is a partial update.
   * Update an existing incident
   * @param incidentId The UUID the incident.
   * @param body Incident Payload.
   */
  public updateIncident(
    incidentId: string,
    body: IncidentUpdateRequest,
    options?: Configuration
  ): Promise<IncidentResponse> {
    const result = this.api.updateIncident(incidentId, body, options);
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
   * Create an API key.
   * Create an API key
   * @param body
   */
  public createAPIKey(
    body: APIKeyCreateRequest,
    options?: Configuration
  ): Promise<APIKeyResponse> {
    const result = this.api.createAPIKey(body, options);
    return result.toPromise();
  }

  /**
   * Create an application key for current user
   * Create an application key for current user
   * @param body
   */
  public createCurrentUserApplicationKey(
    body: ApplicationKeyCreateRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const result = this.api.createCurrentUserApplicationKey(body, options);
    return result.toPromise();
  }

  /**
   * Delete an API key.
   * Delete an API key
   * @param apiKeyId The ID of the API key.
   */
  public deleteAPIKey(
    apiKeyId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteAPIKey(apiKeyId, options);
    return result.toPromise();
  }

  /**
   * Delete an application key
   * Delete an application key
   * @param appKeyId The ID of the application key.
   */
  public deleteApplicationKey(
    appKeyId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteApplicationKey(appKeyId, options);
    return result.toPromise();
  }

  /**
   * Delete an application key owned by current user
   * Delete an application key owned by current user
   * @param appKeyId The ID of the application key.
   */
  public deleteCurrentUserApplicationKey(
    appKeyId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteCurrentUserApplicationKey(appKeyId, options);
    return result.toPromise();
  }

  /**
   * Get an API key.
   * Get API key
   * @param apiKeyId The ID of the API key.
   * @param include Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
   */
  public getAPIKey(
    apiKeyId: string,
    include?: string,
    options?: Configuration
  ): Promise<APIKeyResponse> {
    const result = this.api.getAPIKey(apiKeyId, include, options);
    return result.toPromise();
  }

  /**
   * Get an application key for your org.
   * Get an application key
   * @param appKeyId The ID of the application key.
   * @param include Resource path for related resources to include in the response. Only &#x60;owned_by&#x60; is supported.
   */
  public getApplicationKey(
    appKeyId: string,
    include?: string,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const result = this.api.getApplicationKey(appKeyId, include, options);
    return result.toPromise();
  }

  /**
   * Get an application key owned by current user
   * Get one application key owned by current user
   * @param appKeyId The ID of the application key.
   */
  public getCurrentUserApplicationKey(
    appKeyId: string,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const result = this.api.getCurrentUserApplicationKey(appKeyId, options);
    return result.toPromise();
  }

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
  public listAPIKeys(
    pageSize?: number,
    pageNumber?: number,
    sort?: APIKeysSort,
    filter?: string,
    filterCreatedAtStart?: string,
    filterCreatedAtEnd?: string,
    filterModifiedAtStart?: string,
    filterModifiedAtEnd?: string,
    include?: string,
    options?: Configuration
  ): Promise<APIKeysResponse> {
    const result = this.api.listAPIKeys(
      pageSize,
      pageNumber,
      sort,
      filter,
      filterCreatedAtStart,
      filterCreatedAtEnd,
      filterModifiedAtStart,
      filterModifiedAtEnd,
      include,
      options
    );
    return result.toPromise();
  }

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
  public listApplicationKeys(
    pageSize?: number,
    pageNumber?: number,
    sort?: ApplicationKeysSort,
    filter?: string,
    filterCreatedAtStart?: string,
    filterCreatedAtEnd?: string,
    options?: Configuration
  ): Promise<ListApplicationKeysResponse> {
    const result = this.api.listApplicationKeys(
      pageSize,
      pageNumber,
      sort,
      filter,
      filterCreatedAtStart,
      filterCreatedAtEnd,
      options
    );
    return result.toPromise();
  }

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
  public listCurrentUserApplicationKeys(
    pageSize?: number,
    pageNumber?: number,
    sort?: ApplicationKeysSort,
    filter?: string,
    filterCreatedAtStart?: string,
    filterCreatedAtEnd?: string,
    options?: Configuration
  ): Promise<ListApplicationKeysResponse> {
    const result = this.api.listCurrentUserApplicationKeys(
      pageSize,
      pageNumber,
      sort,
      filter,
      filterCreatedAtStart,
      filterCreatedAtEnd,
      options
    );
    return result.toPromise();
  }

  /**
   * Update an API key.
   * Edit an API key
   * @param apiKeyId The ID of the API key.
   * @param body
   */
  public updateAPIKey(
    apiKeyId: string,
    body: APIKeyUpdateRequest,
    options?: Configuration
  ): Promise<APIKeyResponse> {
    const result = this.api.updateAPIKey(apiKeyId, body, options);
    return result.toPromise();
  }

  /**
   * Edit an application key
   * Edit an application key
   * @param appKeyId The ID of the application key.
   * @param body
   */
  public updateApplicationKey(
    appKeyId: string,
    body: ApplicationKeyUpdateRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const result = this.api.updateApplicationKey(appKeyId, body, options);
    return result.toPromise();
  }

  /**
   * Edit an application key owned by current user
   * Edit an application key owned by current user
   * @param appKeyId The ID of the application key.
   * @param body
   */
  public updateCurrentUserApplicationKey(
    appKeyId: string,
    body: ApplicationKeyUpdateRequest,
    options?: Configuration
  ): Promise<ApplicationKeyResponse> {
    const result = this.api.updateCurrentUserApplicationKey(
      appKeyId,
      body,
      options
    );
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
   * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
   * Aggregate events
   * @param body
   */
  public aggregateLogs(
    body: LogsAggregateRequest,
    options?: Configuration
  ): Promise<LogsAggregateResponse> {
    const result = this.api.aggregateLogs(body, options);
    return result.toPromise();
  }

  /**
   * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to build complex logs filtering and search.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
   * Search logs
   * @param body
   */
  public listLogs(
    body?: LogsListRequest,
    options?: Configuration
  ): Promise<LogsListResponse> {
    const result = this.api.listLogs(body, options);
    return result.toPromise();
  }

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
  public listLogsGet(
    filterQuery?: string,
    filterIndex?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: LogsSort,
    pageCursor?: string,
    pageLimit?: number,
    options?: Configuration
  ): Promise<LogsListResponse> {
    const result = this.api.listLogsGet(
      filterQuery,
      filterIndex,
      filterFrom,
      filterTo,
      sort,
      pageCursor,
      pageLimit,
      options
    );
    return result.toPromise();
  }
}

import { ObservableLogsArchivesApi } from "./ObservableAPI";

import {
  LogsArchivesApiRequestFactory,
  LogsArchivesApiResponseProcessor,
} from "../apis/LogsArchivesApi";
export class PromiseLogsArchivesApi {
  private api: ObservableLogsArchivesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsArchivesApiRequestFactory,
    responseProcessor?: LogsArchivesApiResponseProcessor
  ) {
    this.api = new ObservableLogsArchivesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
   * Grant role to an archive
   * @param archiveId The ID of the archive.
   * @param body
   */
  public addReadRoleToArchive(
    archiveId: string,
    body: RelationshipToRole,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.addReadRoleToArchive(archiveId, body, options);
    return result.toPromise();
  }

  /**
   * Create an archive in your organization.
   * Create an archive
   * @param body The definition of the new archive.
   */
  public createLogsArchive(
    body: LogsArchiveCreateRequest,
    options?: Configuration
  ): Promise<LogsArchive> {
    const result = this.api.createLogsArchive(body, options);
    return result.toPromise();
  }

  /**
   * Delete a given archive from your organization.
   * Delete an archive
   * @param archiveId The ID of the archive.
   */
  public deleteLogsArchive(
    archiveId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteLogsArchive(archiveId, options);
    return result.toPromise();
  }

  /**
   * Get a specific archive from your organization.
   * Get an archive
   * @param archiveId The ID of the archive.
   */
  public getLogsArchive(
    archiveId: string,
    options?: Configuration
  ): Promise<LogsArchive> {
    const result = this.api.getLogsArchive(archiveId, options);
    return result.toPromise();
  }

  /**
   * Get the current order of your archives. This endpoint takes no JSON arguments.
   * Get archive order
   */
  public getLogsArchiveOrder(
    options?: Configuration
  ): Promise<LogsArchiveOrder> {
    const result = this.api.getLogsArchiveOrder(options);
    return result.toPromise();
  }

  /**
   * Returns all read roles a given archive is restricted to.
   * List read roles for an archive
   * @param archiveId The ID of the archive.
   */
  public listArchiveReadRoles(
    archiveId: string,
    options?: Configuration
  ): Promise<RolesResponse> {
    const result = this.api.listArchiveReadRoles(archiveId, options);
    return result.toPromise();
  }

  /**
   * Get the list of configured logs archives with their definitions.
   * Get all archives
   */
  public listLogsArchives(options?: Configuration): Promise<LogsArchives> {
    const result = this.api.listLogsArchives(options);
    return result.toPromise();
  }

  /**
   * Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
   * Revoke role from an archive
   * @param archiveId The ID of the archive.
   * @param body
   */
  public removeRoleFromArchive(
    archiveId: string,
    body: RelationshipToRole,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.removeRoleFromArchive(archiveId, body, options);
    return result.toPromise();
  }

  /**
   * Update a given archive configuration.  **Note**: Using this method updates your archive configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
   * Update an archive
   * @param archiveId The ID of the archive.
   * @param body New definition of the archive.
   */
  public updateLogsArchive(
    archiveId: string,
    body: LogsArchiveCreateRequest,
    options?: Configuration
  ): Promise<LogsArchive> {
    const result = this.api.updateLogsArchive(archiveId, body, options);
    return result.toPromise();
  }

  /**
   * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change the structure and content of the data processed by other archives.  **Note**: Using the `PUT` method updates your archive's order by replacing the current order with the new one.
   * Update archive order
   * @param body An object containing the new ordered list of archive IDs.
   */
  public updateLogsArchiveOrder(
    body: LogsArchiveOrder,
    options?: Configuration
  ): Promise<LogsArchiveOrder> {
    const result = this.api.updateLogsArchiveOrder(body, options);
    return result.toPromise();
  }
}

import { ObservableLogsMetricsApi } from "./ObservableAPI";

import {
  LogsMetricsApiRequestFactory,
  LogsMetricsApiResponseProcessor,
} from "../apis/LogsMetricsApi";
export class PromiseLogsMetricsApi {
  private api: ObservableLogsMetricsApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsMetricsApiRequestFactory,
    responseProcessor?: LogsMetricsApiResponseProcessor
  ) {
    this.api = new ObservableLogsMetricsApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
   * Create a log-based metric
   * @param body The definition of the new log-based metric.
   */
  public createLogsMetric(
    body: LogsMetricCreateRequest,
    options?: Configuration
  ): Promise<LogsMetricResponse> {
    const result = this.api.createLogsMetric(body, options);
    return result.toPromise();
  }

  /**
   * Delete a specific log-based metric from your organization.
   * Delete a log-based metric
   * @param metricId The name of the log-based metric.
   */
  public deleteLogsMetric(
    metricId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteLogsMetric(metricId, options);
    return result.toPromise();
  }

  /**
   * Get a specific log-based metric from your organization.
   * Get a log-based metric
   * @param metricId The name of the log-based metric.
   */
  public getLogsMetric(
    metricId: string,
    options?: Configuration
  ): Promise<LogsMetricResponse> {
    const result = this.api.getLogsMetric(metricId, options);
    return result.toPromise();
  }

  /**
   * Get the list of configured log-based metrics with their definitions.
   * Get all log-based metrics
   */
  public listLogsMetrics(
    options?: Configuration
  ): Promise<LogsMetricsResponse> {
    const result = this.api.listLogsMetrics(options);
    return result.toPromise();
  }

  /**
   * Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.
   * Update a log-based metric
   * @param metricId The name of the log-based metric.
   * @param body New definition of the log-based metric.
   */
  public updateLogsMetric(
    metricId: string,
    body: LogsMetricUpdateRequest,
    options?: Configuration
  ): Promise<LogsMetricResponse> {
    const result = this.api.updateLogsMetric(metricId, body, options);
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
   * Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric. Optionally, include percentile aggregations on any distribution metric. Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
   * Create a tag configuration
   * @param metricName The name of the metric.
   * @param body
   */
  public createTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationCreateRequest,
    options?: Configuration
  ): Promise<MetricTagConfigurationResponse> {
    const result = this.api.createTagConfiguration(metricName, body, options);
    return result.toPromise();
  }

  /**
   * Deletes a metric's tag configuration. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
   * Delete a tag configuration
   * @param metricName The name of the metric.
   */
  public deleteTagConfiguration(
    metricName: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteTagConfiguration(metricName, options);
    return result.toPromise();
  }

  /**
   * Returns the tag configuration for the given metric name.
   * List tag configuration by name
   * @param metricName The name of the metric.
   */
  public listTagConfigurationByName(
    metricName: string,
    options?: Configuration
  ): Promise<MetricTagConfigurationResponse> {
    const result = this.api.listTagConfigurationByName(metricName, options);
    return result.toPromise();
  }

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
  public listTagConfigurations(
    filterConfigured?: boolean,
    filterTagsConfigured?: string,
    filterMetricType?: MetricTagConfigurationMetricTypes,
    filterIncludePercentiles?: boolean,
    filterTags?: string,
    windowSeconds?: number,
    options?: Configuration
  ): Promise<MetricsAndMetricTagConfigurationsResponse> {
    const result = this.api.listTagConfigurations(
      filterConfigured,
      filterTagsConfigured,
      filterMetricType,
      filterIncludePercentiles,
      filterTags,
      windowSeconds,
      options
    );
    return result.toPromise();
  }

  /**
   * View indexed tag key-value pairs for a given metric name.
   * List tags by metric name
   * @param metricName The name of the metric.
   */
  public listTagsByMetricName(
    metricName: string,
    options?: Configuration
  ): Promise<MetricAllTagsResponse> {
    const result = this.api.listTagsByMetricName(metricName, options);
    return result.toPromise();
  }

  /**
   * View distinct metrics volumes for the given metric name.  Custom distribution metrics will return both ingested and indexed custom metric volumes. For Metrics without Limits&trade; beta customers, all metrics will return both ingested/indexed volumes. Custom metrics generated in-app from other products will return `null` for ingested volumes.
   * List distinct metric volumes by metric name
   * @param metricName The name of the metric.
   */
  public listVolumesByMetricName(
    metricName: string,
    options?: Configuration
  ): Promise<MetricVolumesResponse> {
    const result = this.api.listVolumesByMetricName(metricName, options);
    return result.toPromise();
  }

  /**
   * Update the tag configuration of a metric or percentile aggregations of a distribution metric. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
   * Update a tag configuration
   * @param metricName The name of the metric.
   * @param body
   */
  public updateTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationUpdateRequest,
    options?: Configuration
  ): Promise<MetricTagConfigurationResponse> {
    const result = this.api.updateTagConfiguration(metricName, body, options);
    return result.toPromise();
  }
}

import { ObservableProcessesApi } from "./ObservableAPI";

import {
  ProcessesApiRequestFactory,
  ProcessesApiResponseProcessor,
} from "../apis/ProcessesApi";
export class PromiseProcessesApi {
  private api: ObservableProcessesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: ProcessesApiRequestFactory,
    responseProcessor?: ProcessesApiResponseProcessor
  ) {
    this.api = new ObservableProcessesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

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
  public listProcesses(
    search?: string,
    tags?: string,
    from?: number,
    to?: number,
    pageLimit?: number,
    pageCursor?: string,
    options?: Configuration
  ): Promise<ProcessSummariesResponse> {
    const result = this.api.listProcesses(
      search,
      tags,
      from,
      to,
      pageLimit,
      pageCursor,
      options
    );
    return result.toPromise();
  }
}

import { ObservableRolesApi } from "./ObservableAPI";

import {
  RolesApiRequestFactory,
  RolesApiResponseProcessor,
} from "../apis/RolesApi";
export class PromiseRolesApi {
  private api: ObservableRolesApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: RolesApiRequestFactory,
    responseProcessor?: RolesApiResponseProcessor
  ) {
    this.api = new ObservableRolesApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Adds a permission to a role.
   * Grant permission to a role
   * @param roleId The ID of the role.
   * @param body
   */
  public addPermissionToRole(
    roleId: string,
    body: RelationshipToPermission,
    options?: Configuration
  ): Promise<PermissionsResponse> {
    const result = this.api.addPermissionToRole(roleId, body, options);
    return result.toPromise();
  }

  /**
   * Adds a user to a role.
   * Add a user to a role
   * @param roleId The ID of the role.
   * @param body
   */
  public addUserToRole(
    roleId: string,
    body: RelationshipToUser,
    options?: Configuration
  ): Promise<UsersResponse> {
    const result = this.api.addUserToRole(roleId, body, options);
    return result.toPromise();
  }

  /**
   * Create a new role for your organization.
   * Create role
   * @param body
   */
  public createRole(
    body: RoleCreateRequest,
    options?: Configuration
  ): Promise<RoleCreateResponse> {
    const result = this.api.createRole(body, options);
    return result.toPromise();
  }

  /**
   * Disables a role.
   * Delete role
   * @param roleId The ID of the role.
   */
  public deleteRole(roleId: string, options?: Configuration): Promise<void> {
    const result = this.api.deleteRole(roleId, options);
    return result.toPromise();
  }

  /**
   * Get a role in the organization specified by the role’s `role_id`.
   * Get a role
   * @param roleId The ID of the role.
   */
  public getRole(
    roleId: string,
    options?: Configuration
  ): Promise<RoleResponse> {
    const result = this.api.getRole(roleId, options);
    return result.toPromise();
  }

  /**
   * Returns a list of all permissions, including name, description, and ID.
   * List permissions
   */
  public listPermissions(
    options?: Configuration
  ): Promise<PermissionsResponse> {
    const result = this.api.listPermissions(options);
    return result.toPromise();
  }

  /**
   * Returns a list of all permissions for a single role.
   * List permissions for a role
   * @param roleId The ID of the role.
   */
  public listRolePermissions(
    roleId: string,
    options?: Configuration
  ): Promise<PermissionsResponse> {
    const result = this.api.listRolePermissions(roleId, options);
    return result.toPromise();
  }

  /**
   * Gets all users of a role.
   * Get all users of a role
   * @param roleId The ID of the role.
   * @param pageSize Size for a given page.
   * @param pageNumber Specific page number to return.
   * @param sort User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;email&#x60;, &#x60;status&#x60;.
   * @param filter Filter all users by the given string. Defaults to no filtering.
   */
  public listRoleUsers(
    roleId: string,
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    filter?: string,
    options?: Configuration
  ): Promise<UsersResponse> {
    const result = this.api.listRoleUsers(
      roleId,
      pageSize,
      pageNumber,
      sort,
      filter,
      options
    );
    return result.toPromise();
  }

  /**
   * Returns all roles, including their names and IDs.
   * List roles
   * @param pageSize Size for a given page.
   * @param pageNumber Specific page number to return.
   * @param sort Sort roles depending on the given field. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example: &#x60;sort&#x3D;-name&#x60;.
   * @param filter Filter all roles by the given string.
   */
  public listRoles(
    pageSize?: number,
    pageNumber?: number,
    sort?: RolesSort,
    filter?: string,
    options?: Configuration
  ): Promise<RolesResponse> {
    const result = this.api.listRoles(
      pageSize,
      pageNumber,
      sort,
      filter,
      options
    );
    return result.toPromise();
  }

  /**
   * Removes a permission from a role.
   * Revoke permission
   * @param roleId The ID of the role.
   * @param body
   */
  public removePermissionFromRole(
    roleId: string,
    body: RelationshipToPermission,
    options?: Configuration
  ): Promise<PermissionsResponse> {
    const result = this.api.removePermissionFromRole(roleId, body, options);
    return result.toPromise();
  }

  /**
   * Removes a user from a role.
   * Remove a user from a role
   * @param roleId The ID of the role.
   * @param body
   */
  public removeUserFromRole(
    roleId: string,
    body: RelationshipToUser,
    options?: Configuration
  ): Promise<UsersResponse> {
    const result = this.api.removeUserFromRole(roleId, body, options);
    return result.toPromise();
  }

  /**
   * Edit a role. Can only be used with application keys belonging to administrators.
   * Update a role
   * @param roleId The ID of the role.
   * @param body
   */
  public updateRole(
    roleId: string,
    body: RoleUpdateRequest,
    options?: Configuration
  ): Promise<RoleUpdateResponse> {
    const result = this.api.updateRole(roleId, body, options);
    return result.toPromise();
  }
}

import { ObservableSecurityMonitoringApi } from "./ObservableAPI";

import {
  SecurityMonitoringApiRequestFactory,
  SecurityMonitoringApiResponseProcessor,
} from "../apis/SecurityMonitoringApi";
export class PromiseSecurityMonitoringApi {
  private api: ObservableSecurityMonitoringApi;

  public constructor(
    configuration: Configuration,
    requestFactory?: SecurityMonitoringApiRequestFactory,
    responseProcessor?: SecurityMonitoringApiResponseProcessor
  ) {
    this.api = new ObservableSecurityMonitoringApi(
      configuration,
      requestFactory,
      responseProcessor
    );
  }

  /**
   * Create a security filter.  See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/) for more examples.
   * Create a security filter
   * @param body The definition of the new security filter.
   */
  public createSecurityFilter(
    body: SecurityFilterCreateRequest,
    options?: Configuration
  ): Promise<SecurityFilterResponse> {
    const result = this.api.createSecurityFilter(body, options);
    return result.toPromise();
  }

  /**
   * Create a detection rule.
   * Create a detection rule
   * @param body
   */
  public createSecurityMonitoringRule(
    body: SecurityMonitoringRuleCreatePayload,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleResponse> {
    const result = this.api.createSecurityMonitoringRule(body, options);
    return result.toPromise();
  }

  /**
   * Delete a specific security filter.
   * Delete a security filter
   * @param securityFilterId The ID of the security filter.
   */
  public deleteSecurityFilter(
    securityFilterId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteSecurityFilter(securityFilterId, options);
    return result.toPromise();
  }

  /**
   * Delete an existing rule. Default rules cannot be deleted.
   * Delete an existing rule
   * @param ruleId The ID of the rule.
   */
  public deleteSecurityMonitoringRule(
    ruleId: string,
    options?: Configuration
  ): Promise<void> {
    const result = this.api.deleteSecurityMonitoringRule(ruleId, options);
    return result.toPromise();
  }

  /**
   * Get the details of a specific security filter.  See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/) for more examples.
   * Get a security filter
   * @param securityFilterId The ID of the security filter.
   */
  public getSecurityFilter(
    securityFilterId: string,
    options?: Configuration
  ): Promise<SecurityFilterResponse> {
    const result = this.api.getSecurityFilter(securityFilterId, options);
    return result.toPromise();
  }

  /**
   * Get a rule's details.
   * Get a rule's details
   * @param ruleId The ID of the rule.
   */
  public getSecurityMonitoringRule(
    ruleId: string,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleResponse> {
    const result = this.api.getSecurityMonitoringRule(ruleId, options);
    return result.toPromise();
  }

  /**
   * Get the list of configured security filters with their definitions.
   * Get all security filters
   */
  public listSecurityFilters(
    options?: Configuration
  ): Promise<SecurityFiltersResponse> {
    const result = this.api.listSecurityFilters(options);
    return result.toPromise();
  }

  /**
   * List rules.
   * List rules
   * @param pageSize Size for a given page.
   * @param pageNumber Specific page number to return.
   */
  public listSecurityMonitoringRules(
    pageSize?: number,
    pageNumber?: number,
    options?: Configuration
  ): Promise<SecurityMonitoringListRulesResponse> {
    const result = this.api.listSecurityMonitoringRules(
      pageSize,
      pageNumber,
      options
    );
    return result.toPromise();
  }

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
  public listSecurityMonitoringSignals(
    filterQuery?: string,
    filterFrom?: Date,
    filterTo?: Date,
    sort?: SecurityMonitoringSignalsSort,
    pageCursor?: string,
    pageLimit?: number,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const result = this.api.listSecurityMonitoringSignals(
      filterQuery,
      filterFrom,
      filterTo,
      sort,
      pageCursor,
      pageLimit,
      options
    );
    return result.toPromise();
  }

  /**
   * Returns security signals that match a search query. Both this endpoint and the GET endpoint can be used interchangeably for listing security signals.
   * Get a list of security signals
   * @param body
   */
  public searchSecurityMonitoringSignals(
    body?: SecurityMonitoringSignalListRequest,
    options?: Configuration
  ): Promise<SecurityMonitoringSignalsListResponse> {
    const result = this.api.searchSecurityMonitoringSignals(body, options);
    return result.toPromise();
  }

  /**
   * Update a specific security filter. Returns the security filter object when the request is successful.
   * Update a security filter
   * @param securityFilterId The ID of the security filter.
   * @param body New definition of the security filter.
   */
  public updateSecurityFilter(
    securityFilterId: string,
    body: SecurityFilterUpdateRequest,
    options?: Configuration
  ): Promise<SecurityFilterResponse> {
    const result = this.api.updateSecurityFilter(
      securityFilterId,
      body,
      options
    );
    return result.toPromise();
  }

  /**
   * Update an existing rule. When updating `cases`, `queries` or `options`, the whole field must be included. For example, when modifying a query all queries must be included. Default rules can only be updated to be enabled and to change notifications.
   * Update an existing rule
   * @param ruleId The ID of the rule.
   * @param body
   */
  public updateSecurityMonitoringRule(
    ruleId: string,
    body: SecurityMonitoringRuleUpdatePayload,
    options?: Configuration
  ): Promise<SecurityMonitoringRuleResponse> {
    const result = this.api.updateSecurityMonitoringRule(ruleId, body, options);
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
   * Create a user for your organization.
   * Create a user
   * @param body
   */
  public createUser(
    body: UserCreateRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    const result = this.api.createUser(body, options);
    return result.toPromise();
  }

  /**
   * Disable a user. Can only be used with an application key belonging to an administrator user.
   * Disable a user
   * @param userId The ID of the user.
   */
  public disableUser(userId: string, options?: Configuration): Promise<void> {
    const result = this.api.disableUser(userId, options);
    return result.toPromise();
  }

  /**
   * Returns a single user invitation by its UUID.
   * Get a user invitation
   * @param userInvitationUuid The UUID of the user invitation.
   */
  public getInvitation(
    userInvitationUuid: string,
    options?: Configuration
  ): Promise<UserInvitationResponse> {
    const result = this.api.getInvitation(userInvitationUuid, options);
    return result.toPromise();
  }

  /**
   * Get a user in the organization specified by the user’s `user_id`.
   * Get user details
   * @param userId The ID of the user.
   */
  public getUser(
    userId: string,
    options?: Configuration
  ): Promise<UserResponse> {
    const result = this.api.getUser(userId, options);
    return result.toPromise();
  }

  /**
   * Get a user organization. Returns the user information and all organizations joined by this user.
   * Get a user organization
   * @param userId The ID of the user.
   */
  public listUserOrganizations(
    userId: string,
    options?: Configuration
  ): Promise<OrganizationsResponse> {
    const result = this.api.listUserOrganizations(userId, options);
    return result.toPromise();
  }

  /**
   * Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.
   * Get a user permissions
   * @param userId The ID of the user.
   */
  public listUserPermissions(
    userId: string,
    options?: Configuration
  ): Promise<PermissionsResponse> {
    const result = this.api.listUserPermissions(userId, options);
    return result.toPromise();
  }

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
  public listUsers(
    pageSize?: number,
    pageNumber?: number,
    sort?: string,
    sortDir?: QuerySortOrder,
    filter?: string,
    filterStatus?: string,
    options?: Configuration
  ): Promise<UsersResponse> {
    const result = this.api.listUsers(
      pageSize,
      pageNumber,
      sort,
      sortDir,
      filter,
      filterStatus,
      options
    );
    return result.toPromise();
  }

  /**
   * Sends emails to one or more users inviting them to join the organization.
   * Send invitation emails
   * @param body
   */
  public sendInvitations(
    body: UserInvitationsRequest,
    options?: Configuration
  ): Promise<UserInvitationsResponse> {
    const result = this.api.sendInvitations(body, options);
    return result.toPromise();
  }

  /**
   * Edit a user. Can only be used with an application key belonging to an administrator user.
   * Update a user
   * @param userId The ID of the user.
   * @param body
   */
  public updateUser(
    userId: string,
    body: UserUpdateRequest,
    options?: Configuration
  ): Promise<UserResponse> {
    const result = this.api.updateUser(userId, body, options);
    return result.toPromise();
  }
}
