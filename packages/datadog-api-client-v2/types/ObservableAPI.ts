import { ResponseContext, RequestContext } from "../http/http";
import { Configuration } from "../configuration";
import { Observable, of, from as from_ } from "../rxjsStub";
import { mergeMap, map } from "../rxjsStub";
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
import { PartialApplicationKeyResponse } from "../models/PartialApplicationKeyResponse";
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
import { ServiceAccountCreateRequest } from "../models/ServiceAccountCreateRequest";
import { UserCreateRequest } from "../models/UserCreateRequest";
import { UserInvitationResponse } from "../models/UserInvitationResponse";
import { UserInvitationsRequest } from "../models/UserInvitationsRequest";
import { UserInvitationsResponse } from "../models/UserInvitationsResponse";
import { UserResponse } from "../models/UserResponse";
import { UserUpdateRequest } from "../models/UserUpdateRequest";
import { UsersResponse } from "../models/UsersResponse";

import {
  DashboardListsApiRequestFactory,
  DashboardListsApiResponseProcessor,
} from "../apis/DashboardListsApi";
export class ObservableDashboardListsApi {
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
   * Add dashboards to an existing dashboard list.
   * Add Items to a Dashboard List
   * @param dashboardListId ID of the dashboard list to add items to.
   * @param body Dashboards to add to the dashboard list.
   */
  public createDashboardListItems(
    dashboardListId: number,
    body: DashboardListAddItemsRequest,
    _options?: Configuration
  ): Observable<DashboardListAddItemsResponse> {
    const requestContextPromise = this.requestFactory.createDashboardListItems(
      dashboardListId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createDashboardListItems(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<DashboardListDeleteItemsResponse> {
    const requestContextPromise = this.requestFactory.deleteDashboardListItems(
      dashboardListId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteDashboardListItems(rsp)
            )
          );
        })
      );
  }
  /**
   * Fetch the dashboard list’s dashboard definitions.
   * Get items of a Dashboard List
   * @param dashboardListId ID of the dashboard list to get items from.
   */
  public getDashboardListItems(
    dashboardListId: number,
    _options?: Configuration
  ): Observable<DashboardListItems> {
    const requestContextPromise = this.requestFactory.getDashboardListItems(
      dashboardListId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getDashboardListItems(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<DashboardListUpdateItemsResponse> {
    const requestContextPromise = this.requestFactory.updateDashboardListItems(
      dashboardListId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateDashboardListItems(rsp)
            )
          );
        })
      );
  }
}

import {
  IncidentServicesApiRequestFactory,
  IncidentServicesApiResponseProcessor,
} from "../apis/IncidentServicesApi";
export class ObservableIncidentServicesApi {
  private requestFactory: IncidentServicesApiRequestFactory;
  private responseProcessor: IncidentServicesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: IncidentServicesApiRequestFactory,
    responseProcessor?: IncidentServicesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new IncidentServicesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new IncidentServicesApiResponseProcessor();
  }

  /**
   * Creates a new incident service.
   * Create a new incident service
   * @param body Incident Service Payload.
   */
  public createIncidentService(
    body: IncidentServiceCreateRequest,
    _options?: Configuration
  ): Observable<IncidentServiceResponse> {
    const requestContextPromise = this.requestFactory.createIncidentService(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createIncidentService(rsp)
            )
          );
        })
      );
  }
  /**
   * Deletes an existing incident service.
   * Delete an existing incident service
   * @param serviceId The ID of the incident service.
   */
  public deleteIncidentService(
    serviceId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentService(
      serviceId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteIncidentService(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<IncidentServiceResponse> {
    const requestContextPromise = this.requestFactory.getIncidentService(
      serviceId,
      include,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getIncidentService(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<IncidentServicesResponse> {
    const requestContextPromise = this.requestFactory.listIncidentServices(
      include,
      pageSize,
      pageOffset,
      filter,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listIncidentServices(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<IncidentServiceResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentService(
      serviceId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateIncidentService(rsp)
            )
          );
        })
      );
  }
}

import {
  IncidentTeamsApiRequestFactory,
  IncidentTeamsApiResponseProcessor,
} from "../apis/IncidentTeamsApi";
export class ObservableIncidentTeamsApi {
  private requestFactory: IncidentTeamsApiRequestFactory;
  private responseProcessor: IncidentTeamsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: IncidentTeamsApiRequestFactory,
    responseProcessor?: IncidentTeamsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new IncidentTeamsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new IncidentTeamsApiResponseProcessor();
  }

  /**
   * Creates a new incident team.
   * Create a new incident team
   * @param body Incident Team Payload.
   */
  public createIncidentTeam(
    body: IncidentTeamCreateRequest,
    _options?: Configuration
  ): Observable<IncidentTeamResponse> {
    const requestContextPromise = this.requestFactory.createIncidentTeam(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createIncidentTeam(rsp)
            )
          );
        })
      );
  }
  /**
   * Deletes an existing incident team.
   * Delete an existing incident team
   * @param teamId The ID of the incident team.
   */
  public deleteIncidentTeam(
    teamId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteIncidentTeam(
      teamId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteIncidentTeam(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<IncidentTeamResponse> {
    const requestContextPromise = this.requestFactory.getIncidentTeam(
      teamId,
      include,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getIncidentTeam(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<IncidentTeamsResponse> {
    const requestContextPromise = this.requestFactory.listIncidentTeams(
      include,
      pageSize,
      pageOffset,
      filter,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listIncidentTeams(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<IncidentTeamResponse> {
    const requestContextPromise = this.requestFactory.updateIncidentTeam(
      teamId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateIncidentTeam(rsp)
            )
          );
        })
      );
  }
}

import {
  IncidentsApiRequestFactory,
  IncidentsApiResponseProcessor,
} from "../apis/IncidentsApi";
export class ObservableIncidentsApi {
  private requestFactory: IncidentsApiRequestFactory;
  private responseProcessor: IncidentsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: IncidentsApiRequestFactory,
    responseProcessor?: IncidentsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new IncidentsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new IncidentsApiResponseProcessor();
  }

  /**
   * Create an incident.
   * Create an incident
   * @param body Incident payload.
   */
  public createIncident(
    body: IncidentCreateRequest,
    _options?: Configuration
  ): Observable<IncidentResponse> {
    const requestContextPromise = this.requestFactory.createIncident(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createIncident(rsp)
            )
          );
        })
      );
  }
  /**
   * Deletes an existing incident from the users organization.
   * Delete an existing incident
   * @param incidentId The UUID the incident.
   */
  public deleteIncident(
    incidentId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteIncident(
      incidentId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteIncident(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<IncidentResponse> {
    const requestContextPromise = this.requestFactory.getIncident(
      incidentId,
      include,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getIncident(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<IncidentsResponse> {
    const requestContextPromise = this.requestFactory.listIncidents(
      include,
      pageSize,
      pageOffset,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listIncidents(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<IncidentResponse> {
    const requestContextPromise = this.requestFactory.updateIncident(
      incidentId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateIncident(rsp)
            )
          );
        })
      );
  }
}

import {
  KeyManagementApiRequestFactory,
  KeyManagementApiResponseProcessor,
} from "../apis/KeyManagementApi";
export class ObservableKeyManagementApi {
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
   * Create an API key.
   * Create an API key
   * @param body
   */
  public createAPIKey(
    body: APIKeyCreateRequest,
    _options?: Configuration
  ): Observable<APIKeyResponse> {
    const requestContextPromise = this.requestFactory.createAPIKey(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createAPIKey(rsp)
            )
          );
        })
      );
  }
  /**
   * Create an application key for current user
   * Create an application key for current user
   * @param body
   */
  public createCurrentUserApplicationKey(
    body: ApplicationKeyCreateRequest,
    _options?: Configuration
  ): Observable<ApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.createCurrentUserApplicationKey(body, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createCurrentUserApplicationKey(rsp)
            )
          );
        })
      );
  }
  /**
   * Delete an API key.
   * Delete an API key
   * @param apiKeyId The ID of the API key.
   */
  public deleteAPIKey(
    apiKeyId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteAPIKey(
      apiKeyId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteAPIKey(rsp)
            )
          );
        })
      );
  }
  /**
   * Delete an application key
   * Delete an application key
   * @param appKeyId The ID of the application key.
   */
  public deleteApplicationKey(
    appKeyId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteApplicationKey(
      appKeyId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteApplicationKey(rsp)
            )
          );
        })
      );
  }
  /**
   * Delete an application key owned by current user
   * Delete an application key owned by current user
   * @param appKeyId The ID of the application key.
   */
  public deleteCurrentUserApplicationKey(
    appKeyId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise =
      this.requestFactory.deleteCurrentUserApplicationKey(appKeyId, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteCurrentUserApplicationKey(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<APIKeyResponse> {
    const requestContextPromise = this.requestFactory.getAPIKey(
      apiKeyId,
      include,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.getAPIKey(rsp))
          );
        })
      );
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
    _options?: Configuration
  ): Observable<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.getApplicationKey(
      appKeyId,
      include,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getApplicationKey(rsp)
            )
          );
        })
      );
  }
  /**
   * Get an application key owned by current user
   * Get one application key owned by current user
   * @param appKeyId The ID of the application key.
   */
  public getCurrentUserApplicationKey(
    appKeyId: string,
    _options?: Configuration
  ): Observable<ApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.getCurrentUserApplicationKey(appKeyId, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getCurrentUserApplicationKey(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<APIKeysResponse> {
    const requestContextPromise = this.requestFactory.listAPIKeys(
      pageSize,
      pageNumber,
      sort,
      filter,
      filterCreatedAtStart,
      filterCreatedAtEnd,
      filterModifiedAtStart,
      filterModifiedAtEnd,
      include,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listAPIKeys(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<ListApplicationKeysResponse> {
    const requestContextPromise = this.requestFactory.listApplicationKeys(
      pageSize,
      pageNumber,
      sort,
      filter,
      filterCreatedAtStart,
      filterCreatedAtEnd,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listApplicationKeys(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<ListApplicationKeysResponse> {
    const requestContextPromise =
      this.requestFactory.listCurrentUserApplicationKeys(
        pageSize,
        pageNumber,
        sort,
        filter,
        filterCreatedAtStart,
        filterCreatedAtEnd,
        _options
      );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listCurrentUserApplicationKeys(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<APIKeyResponse> {
    const requestContextPromise = this.requestFactory.updateAPIKey(
      apiKeyId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateAPIKey(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<ApplicationKeyResponse> {
    const requestContextPromise = this.requestFactory.updateApplicationKey(
      appKeyId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateApplicationKey(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<ApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.updateCurrentUserApplicationKey(
        appKeyId,
        body,
        _options
      );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateCurrentUserApplicationKey(rsp)
            )
          );
        })
      );
  }
}

import {
  LogsApiRequestFactory,
  LogsApiResponseProcessor,
} from "../apis/LogsApi";
export class ObservableLogsApi {
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
   * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
   * Aggregate events
   * @param body
   */
  public aggregateLogs(
    body: LogsAggregateRequest,
    _options?: Configuration
  ): Observable<LogsAggregateResponse> {
    const requestContextPromise = this.requestFactory.aggregateLogs(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.aggregateLogs(rsp)
            )
          );
        })
      );
  }
  /**
   * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to build complex logs filtering and search.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
   * Search logs
   * @param body
   */
  public listLogs(
    body?: LogsListRequest,
    _options?: Configuration
  ): Observable<LogsListResponse> {
    const requestContextPromise = this.requestFactory.listLogs(body, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.listLogs(rsp))
          );
        })
      );
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
    _options?: Configuration
  ): Observable<LogsListResponse> {
    const requestContextPromise = this.requestFactory.listLogsGet(
      filterQuery,
      filterIndex,
      filterFrom,
      filterTo,
      sort,
      pageCursor,
      pageLimit,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listLogsGet(rsp)
            )
          );
        })
      );
  }
}

import {
  LogsArchivesApiRequestFactory,
  LogsArchivesApiResponseProcessor,
} from "../apis/LogsArchivesApi";
export class ObservableLogsArchivesApi {
  private requestFactory: LogsArchivesApiRequestFactory;
  private responseProcessor: LogsArchivesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsArchivesApiRequestFactory,
    responseProcessor?: LogsArchivesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsArchivesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsArchivesApiResponseProcessor();
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
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.addReadRoleToArchive(
      archiveId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.addReadRoleToArchive(rsp)
            )
          );
        })
      );
  }
  /**
   * Create an archive in your organization.
   * Create an archive
   * @param body The definition of the new archive.
   */
  public createLogsArchive(
    body: LogsArchiveCreateRequest,
    _options?: Configuration
  ): Observable<LogsArchive> {
    const requestContextPromise = this.requestFactory.createLogsArchive(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createLogsArchive(rsp)
            )
          );
        })
      );
  }
  /**
   * Delete a given archive from your organization.
   * Delete an archive
   * @param archiveId The ID of the archive.
   */
  public deleteLogsArchive(
    archiveId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteLogsArchive(
      archiveId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteLogsArchive(rsp)
            )
          );
        })
      );
  }
  /**
   * Get a specific archive from your organization.
   * Get an archive
   * @param archiveId The ID of the archive.
   */
  public getLogsArchive(
    archiveId: string,
    _options?: Configuration
  ): Observable<LogsArchive> {
    const requestContextPromise = this.requestFactory.getLogsArchive(
      archiveId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getLogsArchive(rsp)
            )
          );
        })
      );
  }
  /**
   * Get the current order of your archives. This endpoint takes no JSON arguments.
   * Get archive order
   */
  public getLogsArchiveOrder(
    _options?: Configuration
  ): Observable<LogsArchiveOrder> {
    const requestContextPromise =
      this.requestFactory.getLogsArchiveOrder(_options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getLogsArchiveOrder(rsp)
            )
          );
        })
      );
  }
  /**
   * Returns all read roles a given archive is restricted to.
   * List read roles for an archive
   * @param archiveId The ID of the archive.
   */
  public listArchiveReadRoles(
    archiveId: string,
    _options?: Configuration
  ): Observable<RolesResponse> {
    const requestContextPromise = this.requestFactory.listArchiveReadRoles(
      archiveId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listArchiveReadRoles(rsp)
            )
          );
        })
      );
  }
  /**
   * Get the list of configured logs archives with their definitions.
   * Get all archives
   */
  public listLogsArchives(_options?: Configuration): Observable<LogsArchives> {
    const requestContextPromise =
      this.requestFactory.listLogsArchives(_options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listLogsArchives(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.removeRoleFromArchive(
      archiveId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.removeRoleFromArchive(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<LogsArchive> {
    const requestContextPromise = this.requestFactory.updateLogsArchive(
      archiveId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateLogsArchive(rsp)
            )
          );
        })
      );
  }
  /**
   * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change the structure and content of the data processed by other archives.  **Note**: Using the `PUT` method updates your archive's order by replacing the current order with the new one.
   * Update archive order
   * @param body An object containing the new ordered list of archive IDs.
   */
  public updateLogsArchiveOrder(
    body: LogsArchiveOrder,
    _options?: Configuration
  ): Observable<LogsArchiveOrder> {
    const requestContextPromise = this.requestFactory.updateLogsArchiveOrder(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateLogsArchiveOrder(rsp)
            )
          );
        })
      );
  }
}

import {
  LogsMetricsApiRequestFactory,
  LogsMetricsApiResponseProcessor,
} from "../apis/LogsMetricsApi";
export class ObservableLogsMetricsApi {
  private requestFactory: LogsMetricsApiRequestFactory;
  private responseProcessor: LogsMetricsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: LogsMetricsApiRequestFactory,
    responseProcessor?: LogsMetricsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new LogsMetricsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new LogsMetricsApiResponseProcessor();
  }

  /**
   * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
   * Create a log-based metric
   * @param body The definition of the new log-based metric.
   */
  public createLogsMetric(
    body: LogsMetricCreateRequest,
    _options?: Configuration
  ): Observable<LogsMetricResponse> {
    const requestContextPromise = this.requestFactory.createLogsMetric(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createLogsMetric(rsp)
            )
          );
        })
      );
  }
  /**
   * Delete a specific log-based metric from your organization.
   * Delete a log-based metric
   * @param metricId The name of the log-based metric.
   */
  public deleteLogsMetric(
    metricId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteLogsMetric(
      metricId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteLogsMetric(rsp)
            )
          );
        })
      );
  }
  /**
   * Get a specific log-based metric from your organization.
   * Get a log-based metric
   * @param metricId The name of the log-based metric.
   */
  public getLogsMetric(
    metricId: string,
    _options?: Configuration
  ): Observable<LogsMetricResponse> {
    const requestContextPromise = this.requestFactory.getLogsMetric(
      metricId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getLogsMetric(rsp)
            )
          );
        })
      );
  }
  /**
   * Get the list of configured log-based metrics with their definitions.
   * Get all log-based metrics
   */
  public listLogsMetrics(
    _options?: Configuration
  ): Observable<LogsMetricsResponse> {
    const requestContextPromise = this.requestFactory.listLogsMetrics(_options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listLogsMetrics(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<LogsMetricResponse> {
    const requestContextPromise = this.requestFactory.updateLogsMetric(
      metricId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateLogsMetric(rsp)
            )
          );
        })
      );
  }
}

import {
  MetricsApiRequestFactory,
  MetricsApiResponseProcessor,
} from "../apis/MetricsApi";
export class ObservableMetricsApi {
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
   * Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric. Optionally, include percentile aggregations on any distribution metric or configure custom aggregations on any count, rate, or gauge metric. Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
   * Create a tag configuration
   * @param metricName The name of the metric.
   * @param body
   */
  public createTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationCreateRequest,
    _options?: Configuration
  ): Observable<MetricTagConfigurationResponse> {
    const requestContextPromise = this.requestFactory.createTagConfiguration(
      metricName,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createTagConfiguration(rsp)
            )
          );
        })
      );
  }
  /**
   * Deletes a metric's tag configuration. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
   * Delete a tag configuration
   * @param metricName The name of the metric.
   */
  public deleteTagConfiguration(
    metricName: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteTagConfiguration(
      metricName,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteTagConfiguration(rsp)
            )
          );
        })
      );
  }
  /**
   * Returns the tag configuration for the given metric name.
   * List tag configuration by name
   * @param metricName The name of the metric.
   */
  public listTagConfigurationByName(
    metricName: string,
    _options?: Configuration
  ): Observable<MetricTagConfigurationResponse> {
    const requestContextPromise =
      this.requestFactory.listTagConfigurationByName(metricName, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listTagConfigurationByName(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<MetricsAndMetricTagConfigurationsResponse> {
    const requestContextPromise = this.requestFactory.listTagConfigurations(
      filterConfigured,
      filterTagsConfigured,
      filterMetricType,
      filterIncludePercentiles,
      filterTags,
      windowSeconds,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listTagConfigurations(rsp)
            )
          );
        })
      );
  }
  /**
   * View indexed tag key-value pairs for a given metric name.
   * List tags by metric name
   * @param metricName The name of the metric.
   */
  public listTagsByMetricName(
    metricName: string,
    _options?: Configuration
  ): Observable<MetricAllTagsResponse> {
    const requestContextPromise = this.requestFactory.listTagsByMetricName(
      metricName,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listTagsByMetricName(rsp)
            )
          );
        })
      );
  }
  /**
   * View distinct metrics volumes for the given metric name.  Custom distribution metrics will return both ingested and indexed custom metric volumes. For Metrics without Limits&trade; beta customers, all metrics will return both ingested/indexed volumes. Custom metrics generated in-app from other products will return `null` for ingested volumes.
   * List distinct metric volumes by metric name
   * @param metricName The name of the metric.
   */
  public listVolumesByMetricName(
    metricName: string,
    _options?: Configuration
  ): Observable<MetricVolumesResponse> {
    const requestContextPromise = this.requestFactory.listVolumesByMetricName(
      metricName,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listVolumesByMetricName(rsp)
            )
          );
        })
      );
  }
  /**
   * Update the tag configuration of a metric or percentile aggregations of a distribution metric or custom aggregations of a count, rate, or gauge metric. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
   * Update a tag configuration
   * @param metricName The name of the metric.
   * @param body
   */
  public updateTagConfiguration(
    metricName: string,
    body: MetricTagConfigurationUpdateRequest,
    _options?: Configuration
  ): Observable<MetricTagConfigurationResponse> {
    const requestContextPromise = this.requestFactory.updateTagConfiguration(
      metricName,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateTagConfiguration(rsp)
            )
          );
        })
      );
  }
}

import {
  ProcessesApiRequestFactory,
  ProcessesApiResponseProcessor,
} from "../apis/ProcessesApi";
export class ObservableProcessesApi {
  private requestFactory: ProcessesApiRequestFactory;
  private responseProcessor: ProcessesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ProcessesApiRequestFactory,
    responseProcessor?: ProcessesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ProcessesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ProcessesApiResponseProcessor();
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
    _options?: Configuration
  ): Observable<ProcessSummariesResponse> {
    const requestContextPromise = this.requestFactory.listProcesses(
      search,
      tags,
      from,
      to,
      pageLimit,
      pageCursor,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listProcesses(rsp)
            )
          );
        })
      );
  }
}

import {
  RolesApiRequestFactory,
  RolesApiResponseProcessor,
} from "../apis/RolesApi";
export class ObservableRolesApi {
  private requestFactory: RolesApiRequestFactory;
  private responseProcessor: RolesApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: RolesApiRequestFactory,
    responseProcessor?: RolesApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new RolesApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new RolesApiResponseProcessor();
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
    _options?: Configuration
  ): Observable<PermissionsResponse> {
    const requestContextPromise = this.requestFactory.addPermissionToRole(
      roleId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.addPermissionToRole(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<UsersResponse> {
    const requestContextPromise = this.requestFactory.addUserToRole(
      roleId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.addUserToRole(rsp)
            )
          );
        })
      );
  }
  /**
   * Create a new role for your organization.
   * Create role
   * @param body
   */
  public createRole(
    body: RoleCreateRequest,
    _options?: Configuration
  ): Observable<RoleCreateResponse> {
    const requestContextPromise = this.requestFactory.createRole(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createRole(rsp)
            )
          );
        })
      );
  }
  /**
   * Disables a role.
   * Delete role
   * @param roleId The ID of the role.
   */
  public deleteRole(
    roleId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteRole(
      roleId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteRole(rsp)
            )
          );
        })
      );
  }
  /**
   * Get a role in the organization specified by the role’s `role_id`.
   * Get a role
   * @param roleId The ID of the role.
   */
  public getRole(
    roleId: string,
    _options?: Configuration
  ): Observable<RoleResponse> {
    const requestContextPromise = this.requestFactory.getRole(roleId, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.getRole(rsp))
          );
        })
      );
  }
  /**
   * Returns a list of all permissions, including name, description, and ID.
   * List permissions
   */
  public listPermissions(
    _options?: Configuration
  ): Observable<PermissionsResponse> {
    const requestContextPromise = this.requestFactory.listPermissions(_options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listPermissions(rsp)
            )
          );
        })
      );
  }
  /**
   * Returns a list of all permissions for a single role.
   * List permissions for a role
   * @param roleId The ID of the role.
   */
  public listRolePermissions(
    roleId: string,
    _options?: Configuration
  ): Observable<PermissionsResponse> {
    const requestContextPromise = this.requestFactory.listRolePermissions(
      roleId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listRolePermissions(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<UsersResponse> {
    const requestContextPromise = this.requestFactory.listRoleUsers(
      roleId,
      pageSize,
      pageNumber,
      sort,
      filter,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listRoleUsers(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<RolesResponse> {
    const requestContextPromise = this.requestFactory.listRoles(
      pageSize,
      pageNumber,
      sort,
      filter,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.listRoles(rsp))
          );
        })
      );
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
    _options?: Configuration
  ): Observable<PermissionsResponse> {
    const requestContextPromise = this.requestFactory.removePermissionFromRole(
      roleId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.removePermissionFromRole(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<UsersResponse> {
    const requestContextPromise = this.requestFactory.removeUserFromRole(
      roleId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.removeUserFromRole(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<RoleUpdateResponse> {
    const requestContextPromise = this.requestFactory.updateRole(
      roleId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateRole(rsp)
            )
          );
        })
      );
  }
}

import {
  SecurityMonitoringApiRequestFactory,
  SecurityMonitoringApiResponseProcessor,
} from "../apis/SecurityMonitoringApi";
export class ObservableSecurityMonitoringApi {
  private requestFactory: SecurityMonitoringApiRequestFactory;
  private responseProcessor: SecurityMonitoringApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: SecurityMonitoringApiRequestFactory,
    responseProcessor?: SecurityMonitoringApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new SecurityMonitoringApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new SecurityMonitoringApiResponseProcessor();
  }

  /**
   * Create a security filter.  See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/) for more examples.
   * Create a security filter
   * @param body The definition of the new security filter.
   */
  public createSecurityFilter(
    body: SecurityFilterCreateRequest,
    _options?: Configuration
  ): Observable<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.createSecurityFilter(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createSecurityFilter(rsp)
            )
          );
        })
      );
  }
  /**
   * Create a detection rule.
   * Create a detection rule
   * @param body
   */
  public createSecurityMonitoringRule(
    body: SecurityMonitoringRuleCreatePayload,
    _options?: Configuration
  ): Observable<SecurityMonitoringRuleResponse> {
    const requestContextPromise =
      this.requestFactory.createSecurityMonitoringRule(body, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createSecurityMonitoringRule(rsp)
            )
          );
        })
      );
  }
  /**
   * Delete a specific security filter.
   * Delete a security filter
   * @param securityFilterId The ID of the security filter.
   */
  public deleteSecurityFilter(
    securityFilterId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.deleteSecurityFilter(
      securityFilterId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteSecurityFilter(rsp)
            )
          );
        })
      );
  }
  /**
   * Delete an existing rule. Default rules cannot be deleted.
   * Delete an existing rule
   * @param ruleId The ID of the rule.
   */
  public deleteSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise =
      this.requestFactory.deleteSecurityMonitoringRule(ruleId, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteSecurityMonitoringRule(rsp)
            )
          );
        })
      );
  }
  /**
   * Get the details of a specific security filter.  See the [security filter guide](https://docs.datadoghq.com/security_platform/guide/how-to-setup-security-filters-using-security-monitoring-api/) for more examples.
   * Get a security filter
   * @param securityFilterId The ID of the security filter.
   */
  public getSecurityFilter(
    securityFilterId: string,
    _options?: Configuration
  ): Observable<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.getSecurityFilter(
      securityFilterId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getSecurityFilter(rsp)
            )
          );
        })
      );
  }
  /**
   * Get a rule's details.
   * Get a rule's details
   * @param ruleId The ID of the rule.
   */
  public getSecurityMonitoringRule(
    ruleId: string,
    _options?: Configuration
  ): Observable<SecurityMonitoringRuleResponse> {
    const requestContextPromise = this.requestFactory.getSecurityMonitoringRule(
      ruleId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getSecurityMonitoringRule(rsp)
            )
          );
        })
      );
  }
  /**
   * Get the list of configured security filters with their definitions.
   * Get all security filters
   */
  public listSecurityFilters(
    _options?: Configuration
  ): Observable<SecurityFiltersResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityFilters(_options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listSecurityFilters(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<SecurityMonitoringListRulesResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringRules(
        pageSize,
        pageNumber,
        _options
      );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listSecurityMonitoringRules(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.listSecurityMonitoringSignals(
        filterQuery,
        filterFrom,
        filterTo,
        sort,
        pageCursor,
        pageLimit,
        _options
      );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listSecurityMonitoringSignals(rsp)
            )
          );
        })
      );
  }
  /**
   * Returns security signals that match a search query. Both this endpoint and the GET endpoint can be used interchangeably for listing security signals.
   * Get a list of security signals
   * @param body
   */
  public searchSecurityMonitoringSignals(
    body?: SecurityMonitoringSignalListRequest,
    _options?: Configuration
  ): Observable<SecurityMonitoringSignalsListResponse> {
    const requestContextPromise =
      this.requestFactory.searchSecurityMonitoringSignals(body, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.searchSecurityMonitoringSignals(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<SecurityFilterResponse> {
    const requestContextPromise = this.requestFactory.updateSecurityFilter(
      securityFilterId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateSecurityFilter(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<SecurityMonitoringRuleResponse> {
    const requestContextPromise =
      this.requestFactory.updateSecurityMonitoringRule(ruleId, body, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateSecurityMonitoringRule(rsp)
            )
          );
        })
      );
  }
}

import {
  ServiceAccountsApiRequestFactory,
  ServiceAccountsApiResponseProcessor,
} from "../apis/ServiceAccountsApi";
export class ObservableServiceAccountsApi {
  private requestFactory: ServiceAccountsApiRequestFactory;
  private responseProcessor: ServiceAccountsApiResponseProcessor;
  private configuration: Configuration;

  public constructor(
    configuration: Configuration,
    requestFactory?: ServiceAccountsApiRequestFactory,
    responseProcessor?: ServiceAccountsApiResponseProcessor
  ) {
    this.configuration = configuration;
    this.requestFactory =
      requestFactory || new ServiceAccountsApiRequestFactory(configuration);
    this.responseProcessor =
      responseProcessor || new ServiceAccountsApiResponseProcessor();
  }

  /**
   * Create an application key for this service account.
   * Create an application key for this service account
   * @param serviceAccountId The ID of the service account.
   * @param body
   */
  public createServiceAccountApplicationKey(
    serviceAccountId: string,
    body: ApplicationKeyCreateRequest,
    _options?: Configuration
  ): Observable<ApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.createServiceAccountApplicationKey(
        serviceAccountId,
        body,
        _options
      );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createServiceAccountApplicationKey(rsp)
            )
          );
        })
      );
  }
  /**
   * Delete an application key owned by this service account.
   * Delete an application key for this service account
   * @param serviceAccountId The ID of the service account.
   * @param appKeyId The ID of the application key.
   */
  public deleteServiceAccountApplicationKey(
    serviceAccountId: string,
    appKeyId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise =
      this.requestFactory.deleteServiceAccountApplicationKey(
        serviceAccountId,
        appKeyId,
        _options
      );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.deleteServiceAccountApplicationKey(rsp)
            )
          );
        })
      );
  }
  /**
   * Get an application key owned by this service account.
   * Get one application key for this service account
   * @param serviceAccountId The ID of the service account.
   * @param appKeyId The ID of the application key.
   */
  public getServiceAccountApplicationKey(
    serviceAccountId: string,
    appKeyId: string,
    _options?: Configuration
  ): Observable<PartialApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.getServiceAccountApplicationKey(
        serviceAccountId,
        appKeyId,
        _options
      );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getServiceAccountApplicationKey(rsp)
            )
          );
        })
      );
  }
  /**
   * List all application keys available for this service account.
   * List application keys for this service account
   * @param serviceAccountId The ID of the service account.
   * @param pageSize Size for a given page.
   * @param pageNumber Specific page number to return.
   * @param sort Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
   * @param filter Filter application keys by the specified string.
   * @param filterCreatedAtStart Only include application keys created on or after the specified date.
   * @param filterCreatedAtEnd Only include application keys created on or before the specified date.
   */
  public listServiceAccountApplicationKeys(
    serviceAccountId: string,
    pageSize?: number,
    pageNumber?: number,
    sort?: ApplicationKeysSort,
    filter?: string,
    filterCreatedAtStart?: string,
    filterCreatedAtEnd?: string,
    _options?: Configuration
  ): Observable<ListApplicationKeysResponse> {
    const requestContextPromise =
      this.requestFactory.listServiceAccountApplicationKeys(
        serviceAccountId,
        pageSize,
        pageNumber,
        sort,
        filter,
        filterCreatedAtStart,
        filterCreatedAtEnd,
        _options
      );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listServiceAccountApplicationKeys(rsp)
            )
          );
        })
      );
  }
  /**
   * Edit an application key owned by this service account.
   * Edit an application key for this service account
   * @param serviceAccountId The ID of the service account.
   * @param appKeyId The ID of the application key.
   * @param body
   */
  public updateServiceAccountApplicationKey(
    serviceAccountId: string,
    appKeyId: string,
    body: ApplicationKeyUpdateRequest,
    _options?: Configuration
  ): Observable<PartialApplicationKeyResponse> {
    const requestContextPromise =
      this.requestFactory.updateServiceAccountApplicationKey(
        serviceAccountId,
        appKeyId,
        body,
        _options
      );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateServiceAccountApplicationKey(rsp)
            )
          );
        })
      );
  }
}

import {
  UsersApiRequestFactory,
  UsersApiResponseProcessor,
} from "../apis/UsersApi";
export class ObservableUsersApi {
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
   * Create a service account for your organization.
   * Create a service account
   * @param body
   */
  public createServiceAccount(
    body: ServiceAccountCreateRequest,
    _options?: Configuration
  ): Observable<UserResponse> {
    const requestContextPromise = this.requestFactory.createServiceAccount(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createServiceAccount(rsp)
            )
          );
        })
      );
  }
  /**
   * Create a user for your organization.
   * Create a user
   * @param body
   */
  public createUser(
    body: UserCreateRequest,
    _options?: Configuration
  ): Observable<UserResponse> {
    const requestContextPromise = this.requestFactory.createUser(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.createUser(rsp)
            )
          );
        })
      );
  }
  /**
   * Disable a user. Can only be used with an application key belonging to an administrator user.
   * Disable a user
   * @param userId The ID of the user.
   */
  public disableUser(
    userId: string,
    _options?: Configuration
  ): Observable<void> {
    const requestContextPromise = this.requestFactory.disableUser(
      userId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.disableUser(rsp)
            )
          );
        })
      );
  }
  /**
   * Returns a single user invitation by its UUID.
   * Get a user invitation
   * @param userInvitationUuid The UUID of the user invitation.
   */
  public getInvitation(
    userInvitationUuid: string,
    _options?: Configuration
  ): Observable<UserInvitationResponse> {
    const requestContextPromise = this.requestFactory.getInvitation(
      userInvitationUuid,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.getInvitation(rsp)
            )
          );
        })
      );
  }
  /**
   * Get a user in the organization specified by the user’s `user_id`.
   * Get user details
   * @param userId The ID of the user.
   */
  public getUser(
    userId: string,
    _options?: Configuration
  ): Observable<UserResponse> {
    const requestContextPromise = this.requestFactory.getUser(userId, _options);

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.getUser(rsp))
          );
        })
      );
  }
  /**
   * Get a user organization. Returns the user information and all organizations joined by this user.
   * Get a user organization
   * @param userId The ID of the user.
   */
  public listUserOrganizations(
    userId: string,
    _options?: Configuration
  ): Observable<UserResponse> {
    const requestContextPromise = this.requestFactory.listUserOrganizations(
      userId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listUserOrganizations(rsp)
            )
          );
        })
      );
  }
  /**
   * Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.
   * Get a user permissions
   * @param userId The ID of the user.
   */
  public listUserPermissions(
    userId: string,
    _options?: Configuration
  ): Observable<PermissionsResponse> {
    const requestContextPromise = this.requestFactory.listUserPermissions(
      userId,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.listUserPermissions(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<UsersResponse> {
    const requestContextPromise = this.requestFactory.listUsers(
      pageSize,
      pageNumber,
      sort,
      sortDir,
      filter,
      filterStatus,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) => this.responseProcessor.listUsers(rsp))
          );
        })
      );
  }
  /**
   * Sends emails to one or more users inviting them to join the organization.
   * Send invitation emails
   * @param body
   */
  public sendInvitations(
    body: UserInvitationsRequest,
    _options?: Configuration
  ): Observable<UserInvitationsResponse> {
    const requestContextPromise = this.requestFactory.sendInvitations(
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.sendInvitations(rsp)
            )
          );
        })
      );
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
    _options?: Configuration
  ): Observable<UserResponse> {
    const requestContextPromise = this.requestFactory.updateUser(
      userId,
      body,
      _options
    );

    // build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    for (const middleware of this.configuration.middleware) {
      middlewarePreObservable = middlewarePreObservable.pipe(
        mergeMap((ctx: RequestContext) => middleware.pre(ctx))
      );
    }

    return middlewarePreObservable
      .pipe(
        mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))
      )
      .pipe(
        mergeMap((response: ResponseContext) => {
          let middlewarePostObservable = of(response);
          for (const middleware of this.configuration.middleware) {
            middlewarePostObservable = middlewarePostObservable.pipe(
              mergeMap((rsp: ResponseContext) => middleware.post(rsp))
            );
          }
          return middlewarePostObservable.pipe(
            map((rsp: ResponseContext) =>
              this.responseProcessor.updateUser(rsp)
            )
          );
        })
      );
  }
}
