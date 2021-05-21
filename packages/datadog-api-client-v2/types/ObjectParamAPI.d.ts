import { Configuration } from '../configuration';
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
export interface DashboardListsApiCreateDashboardListItemsRequest {
    /**
     * ID of the dashboard list to add items to.
     * @type number
     * @memberof DashboardListsApicreateDashboardListItems
     */
    dashboardListId: number;
    /**
     * Dashboards to add to the dashboard list.
     * @type DashboardListAddItemsRequest
     * @memberof DashboardListsApicreateDashboardListItems
     */
    body: DashboardListAddItemsRequest;
}
export interface DashboardListsApiDeleteDashboardListItemsRequest {
    /**
     * ID of the dashboard list to delete items from.
     * @type number
     * @memberof DashboardListsApideleteDashboardListItems
     */
    dashboardListId: number;
    /**
     * Dashboards to delete from the dashboard list.
     * @type DashboardListDeleteItemsRequest
     * @memberof DashboardListsApideleteDashboardListItems
     */
    body: DashboardListDeleteItemsRequest;
}
export interface DashboardListsApiGetDashboardListItemsRequest {
    /**
     * ID of the dashboard list to get items from.
     * @type number
     * @memberof DashboardListsApigetDashboardListItems
     */
    dashboardListId: number;
}
export interface DashboardListsApiUpdateDashboardListItemsRequest {
    /**
     * ID of the dashboard list to update items from.
     * @type number
     * @memberof DashboardListsApiupdateDashboardListItems
     */
    dashboardListId: number;
    /**
     * New dashboards of the dashboard list.
     * @type DashboardListUpdateItemsRequest
     * @memberof DashboardListsApiupdateDashboardListItems
     */
    body: DashboardListUpdateItemsRequest;
}
export declare class ObjectDashboardListsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: DashboardListsApiRequestFactory, responseProcessor?: DashboardListsApiResponseProcessor);
    /**
     * Add dashboards to an existing dashboard list.
     * Add Items to a Dashboard List
     * @param param the request object
     */
    createDashboardListItems(param: DashboardListsApiCreateDashboardListItemsRequest, options?: Configuration): Promise<DashboardListAddItemsResponse>;
    /**
     * Delete dashboards from an existing dashboard list.
     * Delete items from a dashboard list
     * @param param the request object
     */
    deleteDashboardListItems(param: DashboardListsApiDeleteDashboardListItemsRequest, options?: Configuration): Promise<DashboardListDeleteItemsResponse>;
    /**
     * Fetch the dashboard list’s dashboard definitions.
     * Get items of a Dashboard List
     * @param param the request object
     */
    getDashboardListItems(param: DashboardListsApiGetDashboardListItemsRequest, options?: Configuration): Promise<DashboardListItems>;
    /**
     * Update dashboards of an existing dashboard list.
     * Update items of a dashboard list
     * @param param the request object
     */
    updateDashboardListItems(param: DashboardListsApiUpdateDashboardListItemsRequest, options?: Configuration): Promise<DashboardListUpdateItemsResponse>;
}
import { IncidentServicesApiRequestFactory, IncidentServicesApiResponseProcessor } from "../apis/IncidentServicesApi";
export interface IncidentServicesApiCreateIncidentServiceRequest {
    /**
     * Incident Service Payload.
     * @type IncidentServiceCreateRequest
     * @memberof IncidentServicesApicreateIncidentService
     */
    body: IncidentServiceCreateRequest;
}
export interface IncidentServicesApiDeleteIncidentServiceRequest {
    /**
     * The ID of the incident service.
     * @type string
     * @memberof IncidentServicesApideleteIncidentService
     */
    serviceId: string;
}
export interface IncidentServicesApiGetIncidentServiceRequest {
    /**
     * The ID of the incident service.
     * @type string
     * @memberof IncidentServicesApigetIncidentService
     */
    serviceId: string;
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     * @memberof IncidentServicesApigetIncidentService
     */
    include?: IncidentRelatedObject;
}
export interface IncidentServicesApiListIncidentServicesRequest {
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     * @memberof IncidentServicesApilistIncidentServices
     */
    include?: IncidentRelatedObject;
    /**
     * Size for a given page.
     * @type number
     * @memberof IncidentServicesApilistIncidentServices
     */
    pageSize?: number;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     * @memberof IncidentServicesApilistIncidentServices
     */
    pageOffset?: number;
    /**
     * A search query that filters services by name.
     * @type string
     * @memberof IncidentServicesApilistIncidentServices
     */
    filter?: string;
}
export interface IncidentServicesApiUpdateIncidentServiceRequest {
    /**
     * The ID of the incident service.
     * @type string
     * @memberof IncidentServicesApiupdateIncidentService
     */
    serviceId: string;
    /**
     * Incident Service Payload.
     * @type IncidentServiceUpdateRequest
     * @memberof IncidentServicesApiupdateIncidentService
     */
    body: IncidentServiceUpdateRequest;
}
export declare class ObjectIncidentServicesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: IncidentServicesApiRequestFactory, responseProcessor?: IncidentServicesApiResponseProcessor);
    /**
     * Creates a new incident service.
     * Create a new incident service
     * @param param the request object
     */
    createIncidentService(param: IncidentServicesApiCreateIncidentServiceRequest, options?: Configuration): Promise<IncidentServiceResponse>;
    /**
     * Deletes an existing incident service.
     * Delete an existing incident service
     * @param param the request object
     */
    deleteIncidentService(param: IncidentServicesApiDeleteIncidentServiceRequest, options?: Configuration): Promise<void>;
    /**
     * Get details of an incident service. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get details of an incident service
     * @param param the request object
     */
    getIncidentService(param: IncidentServicesApiGetIncidentServiceRequest, options?: Configuration): Promise<IncidentServiceResponse>;
    /**
     * Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get a list of all incident services
     * @param param the request object
     */
    listIncidentServices(param: IncidentServicesApiListIncidentServicesRequest, options?: Configuration): Promise<IncidentServicesResponse>;
    /**
     * Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident service
     * @param param the request object
     */
    updateIncidentService(param: IncidentServicesApiUpdateIncidentServiceRequest, options?: Configuration): Promise<IncidentServiceResponse>;
}
import { IncidentTeamsApiRequestFactory, IncidentTeamsApiResponseProcessor } from "../apis/IncidentTeamsApi";
export interface IncidentTeamsApiCreateIncidentTeamRequest {
    /**
     * Incident Team Payload.
     * @type IncidentTeamCreateRequest
     * @memberof IncidentTeamsApicreateIncidentTeam
     */
    body: IncidentTeamCreateRequest;
}
export interface IncidentTeamsApiDeleteIncidentTeamRequest {
    /**
     * The ID of the incident team.
     * @type string
     * @memberof IncidentTeamsApideleteIncidentTeam
     */
    teamId: string;
}
export interface IncidentTeamsApiGetIncidentTeamRequest {
    /**
     * The ID of the incident team.
     * @type string
     * @memberof IncidentTeamsApigetIncidentTeam
     */
    teamId: string;
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     * @memberof IncidentTeamsApigetIncidentTeam
     */
    include?: IncidentRelatedObject;
}
export interface IncidentTeamsApiListIncidentTeamsRequest {
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     * @memberof IncidentTeamsApilistIncidentTeams
     */
    include?: IncidentRelatedObject;
    /**
     * Size for a given page.
     * @type number
     * @memberof IncidentTeamsApilistIncidentTeams
     */
    pageSize?: number;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     * @memberof IncidentTeamsApilistIncidentTeams
     */
    pageOffset?: number;
    /**
     * A search query that filters teams by name.
     * @type string
     * @memberof IncidentTeamsApilistIncidentTeams
     */
    filter?: string;
}
export interface IncidentTeamsApiUpdateIncidentTeamRequest {
    /**
     * The ID of the incident team.
     * @type string
     * @memberof IncidentTeamsApiupdateIncidentTeam
     */
    teamId: string;
    /**
     * Incident Team Payload.
     * @type IncidentTeamUpdateRequest
     * @memberof IncidentTeamsApiupdateIncidentTeam
     */
    body: IncidentTeamUpdateRequest;
}
export declare class ObjectIncidentTeamsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: IncidentTeamsApiRequestFactory, responseProcessor?: IncidentTeamsApiResponseProcessor);
    /**
     * Creates a new incident team.
     * Create a new incident team
     * @param param the request object
     */
    createIncidentTeam(param: IncidentTeamsApiCreateIncidentTeamRequest, options?: Configuration): Promise<IncidentTeamResponse>;
    /**
     * Deletes an existing incident team.
     * Delete an existing incident team
     * @param param the request object
     */
    deleteIncidentTeam(param: IncidentTeamsApiDeleteIncidentTeamRequest, options?: Configuration): Promise<void>;
    /**
     * Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get details of an incident team
     * @param param the request object
     */
    getIncidentTeam(param: IncidentTeamsApiGetIncidentTeamRequest, options?: Configuration): Promise<IncidentTeamResponse>;
    /**
     * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get a list of all incident teams
     * @param param the request object
     */
    listIncidentTeams(param: IncidentTeamsApiListIncidentTeamsRequest, options?: Configuration): Promise<IncidentTeamsResponse>;
    /**
     * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident team
     * @param param the request object
     */
    updateIncidentTeam(param: IncidentTeamsApiUpdateIncidentTeamRequest, options?: Configuration): Promise<IncidentTeamResponse>;
}
import { IncidentsApiRequestFactory, IncidentsApiResponseProcessor } from "../apis/IncidentsApi";
export interface IncidentsApiCreateIncidentRequest {
    /**
     * Incident payload.
     * @type IncidentCreateRequest
     * @memberof IncidentsApicreateIncident
     */
    body: IncidentCreateRequest;
}
export interface IncidentsApiDeleteIncidentRequest {
    /**
     * The UUID the incident.
     * @type string
     * @memberof IncidentsApideleteIncident
     */
    incidentId: string;
}
export interface IncidentsApiGetIncidentRequest {
    /**
     * The UUID the incident.
     * @type string
     * @memberof IncidentsApigetIncident
     */
    incidentId: string;
    /**
     * Specifies which types of related objects should be included in the response.
     * @type Array&lt;IncidentRelatedObject&gt;
     * @memberof IncidentsApigetIncident
     */
    include?: Array<IncidentRelatedObject>;
}
export interface IncidentsApiListIncidentsRequest {
    /**
     * Specifies which types of related objects should be included in the response.
     * @type Array&lt;IncidentRelatedObject&gt;
     * @memberof IncidentsApilistIncidents
     */
    include?: Array<IncidentRelatedObject>;
    /**
     * Size for a given page.
     * @type number
     * @memberof IncidentsApilistIncidents
     */
    pageSize?: number;
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     * @memberof IncidentsApilistIncidents
     */
    pageOffset?: number;
}
export interface IncidentsApiUpdateIncidentRequest {
    /**
     * The UUID the incident.
     * @type string
     * @memberof IncidentsApiupdateIncident
     */
    incidentId: string;
    /**
     * Incident Payload.
     * @type IncidentUpdateRequest
     * @memberof IncidentsApiupdateIncident
     */
    body: IncidentUpdateRequest;
}
export declare class ObjectIncidentsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: IncidentsApiRequestFactory, responseProcessor?: IncidentsApiResponseProcessor);
    /**
     * Create an incident.
     * Create an incident
     * @param param the request object
     */
    createIncident(param: IncidentsApiCreateIncidentRequest, options?: Configuration): Promise<IncidentResponse>;
    /**
     * Deletes an existing incident from the users organization.
     * Delete an existing incident
     * @param param the request object
     */
    deleteIncident(param: IncidentsApiDeleteIncidentRequest, options?: Configuration): Promise<void>;
    /**
     * Get the details of an incident by `incident_id`.
     * Get the details of an incident
     * @param param the request object
     */
    getIncident(param: IncidentsApiGetIncidentRequest, options?: Configuration): Promise<IncidentResponse>;
    /**
     * Get all incidents for the user's organization.
     * Get a list of incidents
     * @param param the request object
     */
    listIncidents(param: IncidentsApiListIncidentsRequest, options?: Configuration): Promise<IncidentsResponse>;
    /**
     * Updates an incident. Provide only the attributes that should be updated as this request is a partial update.
     * Update an existing incident
     * @param param the request object
     */
    updateIncident(param: IncidentsApiUpdateIncidentRequest, options?: Configuration): Promise<IncidentResponse>;
}
import { KeyManagementApiRequestFactory, KeyManagementApiResponseProcessor } from "../apis/KeyManagementApi";
export interface KeyManagementApiCreateAPIKeyRequest {
    /**
     *
     * @type APIKeyCreateRequest
     * @memberof KeyManagementApicreateAPIKey
     */
    body: APIKeyCreateRequest;
}
export interface KeyManagementApiCreateCurrentUserApplicationKeyRequest {
    /**
     *
     * @type ApplicationKeyCreateRequest
     * @memberof KeyManagementApicreateCurrentUserApplicationKey
     */
    body: ApplicationKeyCreateRequest;
}
export interface KeyManagementApiDeleteAPIKeyRequest {
    /**
     * The ID of the API key.
     * @type string
     * @memberof KeyManagementApideleteAPIKey
     */
    apiKeyId: string;
}
export interface KeyManagementApiDeleteApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApideleteApplicationKey
     */
    appKeyId: string;
}
export interface KeyManagementApiDeleteCurrentUserApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApideleteCurrentUserApplicationKey
     */
    appKeyId: string;
}
export interface KeyManagementApiGetAPIKeyRequest {
    /**
     * The ID of the API key.
     * @type string
     * @memberof KeyManagementApigetAPIKey
     */
    apiKeyId: string;
    /**
     * Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     * @type string
     * @memberof KeyManagementApigetAPIKey
     */
    include?: string;
}
export interface KeyManagementApiGetCurrentUserApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApigetCurrentUserApplicationKey
     */
    appKeyId: string;
}
export interface KeyManagementApiListAPIKeysRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof KeyManagementApilistAPIKeys
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     * @memberof KeyManagementApilistAPIKeys
     */
    pageNumber?: number;
    /**
     * API key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @type APIKeysSort
     * @memberof KeyManagementApilistAPIKeys
     */
    sort?: APIKeysSort;
    /**
     * Filter API keys by the specified string.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filter?: string;
    /**
     * Only include API keys created on or after the specified date.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filterCreatedAtStart?: string;
    /**
     * Only include API keys created on or before the specified date.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filterCreatedAtEnd?: string;
    /**
     * Only include API keys modified on or after the specified date.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filterModifiedAtStart?: string;
    /**
     * Only include API keys modified on or before the specified date.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filterModifiedAtEnd?: string;
    /**
     * Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    include?: string;
}
export interface KeyManagementApiListApplicationKeysRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof KeyManagementApilistApplicationKeys
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     * @memberof KeyManagementApilistApplicationKeys
     */
    pageNumber?: number;
    /**
     * Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @type ApplicationKeysSort
     * @memberof KeyManagementApilistApplicationKeys
     */
    sort?: ApplicationKeysSort;
    /**
     * Filter application keys by the specified string.
     * @type string
     * @memberof KeyManagementApilistApplicationKeys
     */
    filter?: string;
    /**
     * Only include application keys created on or after the specified date.
     * @type string
     * @memberof KeyManagementApilistApplicationKeys
     */
    filterCreatedAtStart?: string;
    /**
     * Only include application keys created on or before the specified date.
     * @type string
     * @memberof KeyManagementApilistApplicationKeys
     */
    filterCreatedAtEnd?: string;
}
export interface KeyManagementApiListCurrentUserApplicationKeysRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    pageNumber?: number;
    /**
     * Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @type ApplicationKeysSort
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    sort?: ApplicationKeysSort;
    /**
     * Filter application keys by the specified string.
     * @type string
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    filter?: string;
    /**
     * Only include application keys created on or after the specified date.
     * @type string
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    filterCreatedAtStart?: string;
    /**
     * Only include application keys created on or before the specified date.
     * @type string
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    filterCreatedAtEnd?: string;
}
export interface KeyManagementApiUpdateAPIKeyRequest {
    /**
     * The ID of the API key.
     * @type string
     * @memberof KeyManagementApiupdateAPIKey
     */
    apiKeyId: string;
    /**
     *
     * @type APIKeyUpdateRequest
     * @memberof KeyManagementApiupdateAPIKey
     */
    body: APIKeyUpdateRequest;
}
export interface KeyManagementApiUpdateApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApiupdateApplicationKey
     */
    appKeyId: string;
    /**
     *
     * @type ApplicationKeyUpdateRequest
     * @memberof KeyManagementApiupdateApplicationKey
     */
    body: ApplicationKeyUpdateRequest;
}
export interface KeyManagementApiUpdateCurrentUserApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApiupdateCurrentUserApplicationKey
     */
    appKeyId: string;
    /**
     *
     * @type ApplicationKeyUpdateRequest
     * @memberof KeyManagementApiupdateCurrentUserApplicationKey
     */
    body: ApplicationKeyUpdateRequest;
}
export declare class ObjectKeyManagementApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: KeyManagementApiRequestFactory, responseProcessor?: KeyManagementApiResponseProcessor);
    /**
     * Create an API key.
     * Create an API key
     * @param param the request object
     */
    createAPIKey(param: KeyManagementApiCreateAPIKeyRequest, options?: Configuration): Promise<APIKeyResponse>;
    /**
     * Create an application key for current user
     * Create an application key for current user
     * @param param the request object
     */
    createCurrentUserApplicationKey(param: KeyManagementApiCreateCurrentUserApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Delete an API key.
     * Delete an API key
     * @param param the request object
     */
    deleteAPIKey(param: KeyManagementApiDeleteAPIKeyRequest, options?: Configuration): Promise<void>;
    /**
     * Delete an application key
     * Delete an application key
     * @param param the request object
     */
    deleteApplicationKey(param: KeyManagementApiDeleteApplicationKeyRequest, options?: Configuration): Promise<void>;
    /**
     * Delete an application key owned by current user
     * Delete an application key owned by current user
     * @param param the request object
     */
    deleteCurrentUserApplicationKey(param: KeyManagementApiDeleteCurrentUserApplicationKeyRequest, options?: Configuration): Promise<void>;
    /**
     * Get an API key.
     * Get API key
     * @param param the request object
     */
    getAPIKey(param: KeyManagementApiGetAPIKeyRequest, options?: Configuration): Promise<APIKeyResponse>;
    /**
     * Get an application key owned by current user
     * Get one application key owned by current user
     * @param param the request object
     */
    getCurrentUserApplicationKey(param: KeyManagementApiGetCurrentUserApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * List all API keys available for your account.
     * Get all API keys
     * @param param the request object
     */
    listAPIKeys(param: KeyManagementApiListAPIKeysRequest, options?: Configuration): Promise<APIKeysResponse>;
    /**
     * List all application keys available for your org
     * Get all application keys
     * @param param the request object
     */
    listApplicationKeys(param: KeyManagementApiListApplicationKeysRequest, options?: Configuration): Promise<ListApplicationKeysResponse>;
    /**
     * List all application keys available for current user
     * Get all application keys owned by current user
     * @param param the request object
     */
    listCurrentUserApplicationKeys(param: KeyManagementApiListCurrentUserApplicationKeysRequest, options?: Configuration): Promise<ListApplicationKeysResponse>;
    /**
     * Update an API key.
     * Edit an API key
     * @param param the request object
     */
    updateAPIKey(param: KeyManagementApiUpdateAPIKeyRequest, options?: Configuration): Promise<APIKeyResponse>;
    /**
     * Edit an application key
     * Edit an application key
     * @param param the request object
     */
    updateApplicationKey(param: KeyManagementApiUpdateApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
    /**
     * Edit an application key owned by current user
     * Edit an application key owned by current user
     * @param param the request object
     */
    updateCurrentUserApplicationKey(param: KeyManagementApiUpdateCurrentUserApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse>;
}
import { LogsApiRequestFactory, LogsApiResponseProcessor } from "../apis/LogsApi";
export interface LogsApiAggregateLogsRequest {
    /**
     *
     * @type LogsAggregateRequest
     * @memberof LogsApiaggregateLogs
     */
    body: LogsAggregateRequest;
}
export interface LogsApiListLogsRequest {
    /**
     *
     * @type LogsListRequest
     * @memberof LogsApilistLogs
     */
    body?: LogsListRequest;
}
export interface LogsApiListLogsGetRequest {
    /**
     * Search query following logs syntax.
     * @type string
     * @memberof LogsApilistLogsGet
     */
    filterQuery?: string;
    /**
     * For customers with multiple indexes, the indexes to search Defaults to &#39;*&#39; which means all indexes
     * @type string
     * @memberof LogsApilistLogsGet
     */
    filterIndex?: string;
    /**
     * Minimum timestamp for requested logs.
     * @type Date
     * @memberof LogsApilistLogsGet
     */
    filterFrom?: Date;
    /**
     * Maximum timestamp for requested logs.
     * @type Date
     * @memberof LogsApilistLogsGet
     */
    filterTo?: Date;
    /**
     * Order of logs in results.
     * @type LogsSort
     * @memberof LogsApilistLogsGet
     */
    sort?: LogsSort;
    /**
     * List following results with a cursor provided in the previous query.
     * @type string
     * @memberof LogsApilistLogsGet
     */
    pageCursor?: string;
    /**
     * Maximum number of logs in the response.
     * @type number
     * @memberof LogsApilistLogsGet
     */
    pageLimit?: number;
}
export declare class ObjectLogsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor);
    /**
     * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
     * Aggregate events
     * @param param the request object
     */
    aggregateLogs(param: LogsApiAggregateLogsRequest, options?: Configuration): Promise<LogsAggregateResponse>;
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to build complex logs filtering and search.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param param the request object
     */
    listLogs(param: LogsApiListLogsRequest, options?: Configuration): Promise<LogsListResponse>;
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to see your latest logs.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Get a list of logs
     * @param param the request object
     */
    listLogsGet(param: LogsApiListLogsGetRequest, options?: Configuration): Promise<LogsListResponse>;
}
import { LogsArchivesApiRequestFactory, LogsArchivesApiResponseProcessor } from "../apis/LogsArchivesApi";
export interface LogsArchivesApiAddReadRoleToArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApiaddReadRoleToArchive
     */
    archiveId: string;
    /**
     *
     * @type RelationshipToRole
     * @memberof LogsArchivesApiaddReadRoleToArchive
     */
    body: RelationshipToRole;
}
export interface LogsArchivesApiCreateLogsArchiveRequest {
    /**
     * The definition of the new archive.
     * @type LogsArchiveCreateRequest
     * @memberof LogsArchivesApicreateLogsArchive
     */
    body: LogsArchiveCreateRequest;
}
export interface LogsArchivesApiDeleteLogsArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApideleteLogsArchive
     */
    archiveId: string;
}
export interface LogsArchivesApiGetLogsArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApigetLogsArchive
     */
    archiveId: string;
}
export interface LogsArchivesApiGetLogsArchiveOrderRequest {
}
export interface LogsArchivesApiListArchiveReadRolesRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApilistArchiveReadRoles
     */
    archiveId: string;
}
export interface LogsArchivesApiListLogsArchivesRequest {
}
export interface LogsArchivesApiRemoveRoleFromArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApiremoveRoleFromArchive
     */
    archiveId: string;
    /**
     *
     * @type RelationshipToRole
     * @memberof LogsArchivesApiremoveRoleFromArchive
     */
    body: RelationshipToRole;
}
export interface LogsArchivesApiUpdateLogsArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApiupdateLogsArchive
     */
    archiveId: string;
    /**
     * New definition of the archive.
     * @type LogsArchiveCreateRequest
     * @memberof LogsArchivesApiupdateLogsArchive
     */
    body: LogsArchiveCreateRequest;
}
export interface LogsArchivesApiUpdateLogsArchiveOrderRequest {
    /**
     * An object containing the new ordered list of archive IDs.
     * @type LogsArchiveOrder
     * @memberof LogsArchivesApiupdateLogsArchiveOrder
     */
    body: LogsArchiveOrder;
}
export declare class ObjectLogsArchivesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsArchivesApiRequestFactory, responseProcessor?: LogsArchivesApiResponseProcessor);
    /**
     * Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Grant role to an archive
     * @param param the request object
     */
    addReadRoleToArchive(param: LogsArchivesApiAddReadRoleToArchiveRequest, options?: Configuration): Promise<void>;
    /**
     * Create an archive in your organization.
     * Create an archive
     * @param param the request object
     */
    createLogsArchive(param: LogsArchivesApiCreateLogsArchiveRequest, options?: Configuration): Promise<LogsArchive>;
    /**
     * Delete a given archive from your organization.
     * Delete an archive
     * @param param the request object
     */
    deleteLogsArchive(param: LogsArchivesApiDeleteLogsArchiveRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific archive from your organization.
     * Get an archive
     * @param param the request object
     */
    getLogsArchive(param: LogsArchivesApiGetLogsArchiveRequest, options?: Configuration): Promise<LogsArchive>;
    /**
     * Get the current order of your archives. This endpoint takes no JSON arguments.
     * Get archive order
     * @param param the request object
     */
    getLogsArchiveOrder(param: LogsArchivesApiGetLogsArchiveOrderRequest, options?: Configuration): Promise<LogsArchiveOrder>;
    /**
     * Returns all read roles a given archive is restricted to.
     * List read roles for an archive
     * @param param the request object
     */
    listArchiveReadRoles(param: LogsArchivesApiListArchiveReadRolesRequest, options?: Configuration): Promise<RolesResponse>;
    /**
     * Get the list of configured logs archives with their definitions.
     * Get all archives
     * @param param the request object
     */
    listLogsArchives(param: LogsArchivesApiListLogsArchivesRequest, options?: Configuration): Promise<LogsArchives>;
    /**
     * Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Revoke role from an archive
     * @param param the request object
     */
    removeRoleFromArchive(param: LogsArchivesApiRemoveRoleFromArchiveRequest, options?: Configuration): Promise<void>;
    /**
     * Update a given archive configuration.  **Note**: Using this method updates your archive configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an archive
     * @param param the request object
     */
    updateLogsArchive(param: LogsArchivesApiUpdateLogsArchiveRequest, options?: Configuration): Promise<LogsArchive>;
    /**
     * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change the structure and content of the data processed by other archives.  **Note**: Using the `PUT` method updates your archive's order by replacing the current order with the new one.
     * Update archive order
     * @param param the request object
     */
    updateLogsArchiveOrder(param: LogsArchivesApiUpdateLogsArchiveOrderRequest, options?: Configuration): Promise<LogsArchiveOrder>;
}
import { LogsMetricsApiRequestFactory, LogsMetricsApiResponseProcessor } from "../apis/LogsMetricsApi";
export interface LogsMetricsApiCreateLogsMetricRequest {
    /**
     * The definition of the new log-based metric.
     * @type LogsMetricCreateRequest
     * @memberof LogsMetricsApicreateLogsMetric
     */
    body: LogsMetricCreateRequest;
}
export interface LogsMetricsApiDeleteLogsMetricRequest {
    /**
     * The name of the log-based metric.
     * @type string
     * @memberof LogsMetricsApideleteLogsMetric
     */
    metricId: string;
}
export interface LogsMetricsApiGetLogsMetricRequest {
    /**
     * The name of the log-based metric.
     * @type string
     * @memberof LogsMetricsApigetLogsMetric
     */
    metricId: string;
}
export interface LogsMetricsApiListLogsMetricsRequest {
}
export interface LogsMetricsApiUpdateLogsMetricRequest {
    /**
     * The name of the log-based metric.
     * @type string
     * @memberof LogsMetricsApiupdateLogsMetric
     */
    metricId: string;
    /**
     * New definition of the log-based metric.
     * @type LogsMetricUpdateRequest
     * @memberof LogsMetricsApiupdateLogsMetric
     */
    body: LogsMetricUpdateRequest;
}
export declare class ObjectLogsMetricsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: LogsMetricsApiRequestFactory, responseProcessor?: LogsMetricsApiResponseProcessor);
    /**
     * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
     * Create a log-based metric
     * @param param the request object
     */
    createLogsMetric(param: LogsMetricsApiCreateLogsMetricRequest, options?: Configuration): Promise<LogsMetricResponse>;
    /**
     * Delete a specific log-based metric from your organization.
     * Delete a log-based metric
     * @param param the request object
     */
    deleteLogsMetric(param: LogsMetricsApiDeleteLogsMetricRequest, options?: Configuration): Promise<void>;
    /**
     * Get a specific log-based metric from your organization.
     * Get a log-based metric
     * @param param the request object
     */
    getLogsMetric(param: LogsMetricsApiGetLogsMetricRequest, options?: Configuration): Promise<LogsMetricResponse>;
    /**
     * Get the list of configured log-based metrics with their definitions.
     * Get all log-based metrics
     * @param param the request object
     */
    listLogsMetrics(param: LogsMetricsApiListLogsMetricsRequest, options?: Configuration): Promise<LogsMetricsResponse>;
    /**
     * Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.
     * Update a log-based metric
     * @param param the request object
     */
    updateLogsMetric(param: LogsMetricsApiUpdateLogsMetricRequest, options?: Configuration): Promise<LogsMetricResponse>;
}
import { MetricsApiRequestFactory, MetricsApiResponseProcessor } from "../apis/MetricsApi";
export interface MetricsApiCreateTagConfigurationRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApicreateTagConfiguration
     */
    metricName: string;
    /**
     *
     * @type MetricTagConfigurationCreateRequest
     * @memberof MetricsApicreateTagConfiguration
     */
    body: MetricTagConfigurationCreateRequest;
}
export interface MetricsApiDeleteTagConfigurationRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApideleteTagConfiguration
     */
    metricName: string;
}
export interface MetricsApiListTagConfigurationByNameRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApilistTagConfigurationByName
     */
    metricName: string;
}
export interface MetricsApiListTagConfigurationsRequest {
    /**
     * Filter metrics that have configured tags.
     * @type boolean
     * @memberof MetricsApilistTagConfigurations
     */
    filterConfigured?: boolean;
    /**
     * Filter tag configurations by configured tags.
     * @type string
     * @memberof MetricsApilistTagConfigurations
     */
    filterTagsConfigured?: string;
    /**
     * Filter tag configurations by metric type.
     * @type MetricTagConfigurationMetricTypes
     * @memberof MetricsApilistTagConfigurations
     */
    filterMetricType?: MetricTagConfigurationMetricTypes;
    /**
     * Filter distributions with additional percentile aggregations enabled or disabled.
     * @type boolean
     * @memberof MetricsApilistTagConfigurations
     */
    filterIncludePercentiles?: boolean;
    /**
     * Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters.
     * @type string
     * @memberof MetricsApilistTagConfigurations
     */
    filterTags?: string;
    /**
     * The number of seconds of look back (from now) to apply to a filter[tag] query. Defaults value is 3600 (1 hour), maximum value is 172,800 (2 days).
     * @type number
     * @memberof MetricsApilistTagConfigurations
     */
    windowSeconds?: number;
}
export interface MetricsApiListTagsByMetricNameRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApilistTagsByMetricName
     */
    metricName: string;
}
export interface MetricsApiListVolumesByMetricNameRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApilistVolumesByMetricName
     */
    metricName: string;
}
export interface MetricsApiUpdateTagConfigurationRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApiupdateTagConfiguration
     */
    metricName: string;
    /**
     *
     * @type MetricTagConfigurationUpdateRequest
     * @memberof MetricsApiupdateTagConfiguration
     */
    body: MetricTagConfigurationUpdateRequest;
}
export declare class ObjectMetricsApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor);
    /**
     * Create and define a list of queryable tag keys for an existing count/gauge/rate/distribution metric. Optionally, include percentile aggregations on any distribution metric. Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
     * Create a tag configuration
     * @param param the request object
     */
    createTagConfiguration(param: MetricsApiCreateTagConfigurationRequest, options?: Configuration): Promise<MetricTagConfigurationResponse>;
    /**
     * Deletes a metric's tag configuration. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Delete a tag configuration
     * @param param the request object
     */
    deleteTagConfiguration(param: MetricsApiDeleteTagConfigurationRequest, options?: Configuration): Promise<void>;
    /**
     * Returns the tag configuration for the given metric name.
     * List tag configuration by name
     * @param param the request object
     */
    listTagConfigurationByName(param: MetricsApiListTagConfigurationByNameRequest, options?: Configuration): Promise<MetricTagConfigurationResponse>;
    /**
     * Returns all configured count/gauge/rate/distribution metric names (with additional filters if specified).
     * List tag configurations
     * @param param the request object
     */
    listTagConfigurations(param: MetricsApiListTagConfigurationsRequest, options?: Configuration): Promise<MetricsAndMetricTagConfigurationsResponse>;
    /**
     * View indexed tag key-value pairs for a given metric name.
     * List tags by metric name
     * @param param the request object
     */
    listTagsByMetricName(param: MetricsApiListTagsByMetricNameRequest, options?: Configuration): Promise<MetricAllTagsResponse>;
    /**
     * View distinct metrics volumes for the given metric name.  Custom distribution metrics will return both ingested and indexed custom metric volumes. For Metrics without Limits&trade; beta customers, all metrics will return both ingested/indexed volumes. Custom metrics generated in-app from other products will return `null` for ingested volumes.
     * List distinct metric volumes by metric name
     * @param param the request object
     */
    listVolumesByMetricName(param: MetricsApiListVolumesByMetricNameRequest, options?: Configuration): Promise<MetricVolumesResponse>;
    /**
     * Update the tag configuration of a metric or percentile aggregations of a distribution metric. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Update a tag configuration
     * @param param the request object
     */
    updateTagConfiguration(param: MetricsApiUpdateTagConfigurationRequest, options?: Configuration): Promise<MetricTagConfigurationResponse>;
}
import { ProcessesApiRequestFactory, ProcessesApiResponseProcessor } from "../apis/ProcessesApi";
export interface ProcessesApiListProcessesRequest {
    /**
     * String to search processes by.
     * @type string
     * @memberof ProcessesApilistProcesses
     */
    search?: string;
    /**
     * Comma-separated list of tags to filter processes by.
     * @type string
     * @memberof ProcessesApilistProcesses
     */
    tags?: string;
    /**
     * Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window will be 15 minutes before the &#x60;to&#x60; timestamp. If neither &#x60;from&#x60; nor &#x60;to&#x60; are provided, the query window will be &#x60;[now - 15m, now]&#x60;.
     * @type number
     * @memberof ProcessesApilistProcesses
     */
    from?: number;
    /**
     * Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window will be 15 minutes after the &#x60;from&#x60; timestamp. If neither &#x60;from&#x60; nor &#x60;to&#x60; are provided, the query window will be &#x60;[now - 15m, now]&#x60;.
     * @type number
     * @memberof ProcessesApilistProcesses
     */
    to?: number;
    /**
     * Maximum number of results returned.
     * @type number
     * @memberof ProcessesApilistProcesses
     */
    pageLimit?: number;
    /**
     * String to query the next page of results. This key is provided with each valid response from the API in &#x60;meta.page.after&#x60;.
     * @type string
     * @memberof ProcessesApilistProcesses
     */
    pageCursor?: string;
}
export declare class ObjectProcessesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: ProcessesApiRequestFactory, responseProcessor?: ProcessesApiResponseProcessor);
    /**
     * Get all processes for your organization.
     * Get all processes
     * @param param the request object
     */
    listProcesses(param: ProcessesApiListProcessesRequest, options?: Configuration): Promise<ProcessSummariesResponse>;
}
import { RolesApiRequestFactory, RolesApiResponseProcessor } from "../apis/RolesApi";
export interface RolesApiAddPermissionToRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiaddPermissionToRole
     */
    roleId: string;
    /**
     *
     * @type RelationshipToPermission
     * @memberof RolesApiaddPermissionToRole
     */
    body: RelationshipToPermission;
}
export interface RolesApiAddUserToRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiaddUserToRole
     */
    roleId: string;
    /**
     *
     * @type RelationshipToUser
     * @memberof RolesApiaddUserToRole
     */
    body: RelationshipToUser;
}
export interface RolesApiCreateRoleRequest {
    /**
     *
     * @type RoleCreateRequest
     * @memberof RolesApicreateRole
     */
    body: RoleCreateRequest;
}
export interface RolesApiDeleteRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApideleteRole
     */
    roleId: string;
}
export interface RolesApiGetRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApigetRole
     */
    roleId: string;
}
export interface RolesApiListPermissionsRequest {
}
export interface RolesApiListRolePermissionsRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApilistRolePermissions
     */
    roleId: string;
}
export interface RolesApiListRoleUsersRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApilistRoleUsers
     */
    roleId: string;
    /**
     * Size for a given page.
     * @type number
     * @memberof RolesApilistRoleUsers
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     * @memberof RolesApilistRoleUsers
     */
    pageNumber?: number;
    /**
     * User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;email&#x60;, &#x60;status&#x60;.
     * @type string
     * @memberof RolesApilistRoleUsers
     */
    sort?: string;
    /**
     * Filter all users by the given string. Defaults to no filtering.
     * @type string
     * @memberof RolesApilistRoleUsers
     */
    filter?: string;
}
export interface RolesApiListRolesRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof RolesApilistRoles
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     * @memberof RolesApilistRoles
     */
    pageNumber?: number;
    /**
     * Sort roles depending on the given field. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example: &#x60;sort&#x3D;-name&#x60;.
     * @type RolesSort
     * @memberof RolesApilistRoles
     */
    sort?: RolesSort;
    /**
     * Filter all roles by the given string.
     * @type string
     * @memberof RolesApilistRoles
     */
    filter?: string;
}
export interface RolesApiRemovePermissionFromRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiremovePermissionFromRole
     */
    roleId: string;
    /**
     *
     * @type RelationshipToPermission
     * @memberof RolesApiremovePermissionFromRole
     */
    body: RelationshipToPermission;
}
export interface RolesApiRemoveUserFromRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiremoveUserFromRole
     */
    roleId: string;
    /**
     *
     * @type RelationshipToUser
     * @memberof RolesApiremoveUserFromRole
     */
    body: RelationshipToUser;
}
export interface RolesApiUpdateRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiupdateRole
     */
    roleId: string;
    /**
     *
     * @type RoleUpdateRequest
     * @memberof RolesApiupdateRole
     */
    body: RoleUpdateRequest;
}
export declare class ObjectRolesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor);
    /**
     * Adds a permission to a role.
     * Grant permission to a role
     * @param param the request object
     */
    addPermissionToRole(param: RolesApiAddPermissionToRoleRequest, options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Adds a user to a role.
     * Add a user to a role
     * @param param the request object
     */
    addUserToRole(param: RolesApiAddUserToRoleRequest, options?: Configuration): Promise<UsersResponse>;
    /**
     * Create a new role for your organization.
     * Create role
     * @param param the request object
     */
    createRole(param: RolesApiCreateRoleRequest, options?: Configuration): Promise<RoleCreateResponse>;
    /**
     * Disables a role.
     * Delete role
     * @param param the request object
     */
    deleteRole(param: RolesApiDeleteRoleRequest, options?: Configuration): Promise<void>;
    /**
     * Get a role in the organization specified by the role’s `role_id`.
     * Get a role
     * @param param the request object
     */
    getRole(param: RolesApiGetRoleRequest, options?: Configuration): Promise<RoleResponse>;
    /**
     * Returns a list of all permissions, including name, description, and ID.
     * List permissions
     * @param param the request object
     */
    listPermissions(param: RolesApiListPermissionsRequest, options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Returns a list of all permissions for a single role.
     * List permissions for a role
     * @param param the request object
     */
    listRolePermissions(param: RolesApiListRolePermissionsRequest, options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Gets all users of a role.
     * Get all users of a role
     * @param param the request object
     */
    listRoleUsers(param: RolesApiListRoleUsersRequest, options?: Configuration): Promise<UsersResponse>;
    /**
     * Returns all roles, including their names and IDs.
     * List roles
     * @param param the request object
     */
    listRoles(param: RolesApiListRolesRequest, options?: Configuration): Promise<RolesResponse>;
    /**
     * Removes a permission from a role.
     * Revoke permission
     * @param param the request object
     */
    removePermissionFromRole(param: RolesApiRemovePermissionFromRoleRequest, options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Removes a user from a role.
     * Remove a user from a role
     * @param param the request object
     */
    removeUserFromRole(param: RolesApiRemoveUserFromRoleRequest, options?: Configuration): Promise<UsersResponse>;
    /**
     * Edit a role. Can only be used with application keys belonging to administrators.
     * Update a role
     * @param param the request object
     */
    updateRole(param: RolesApiUpdateRoleRequest, options?: Configuration): Promise<RoleUpdateResponse>;
}
import { SecurityMonitoringApiRequestFactory, SecurityMonitoringApiResponseProcessor } from "../apis/SecurityMonitoringApi";
export interface SecurityMonitoringApiCreateSecurityFilterRequest {
    /**
     * The definition of the new security filter.
     * @type SecurityFilterCreateRequest
     * @memberof SecurityMonitoringApicreateSecurityFilter
     */
    body: SecurityFilterCreateRequest;
}
export interface SecurityMonitoringApiCreateSecurityMonitoringRuleRequest {
    /**
     *
     * @type SecurityMonitoringRuleCreatePayload
     * @memberof SecurityMonitoringApicreateSecurityMonitoringRule
     */
    body: SecurityMonitoringRuleCreatePayload;
}
export interface SecurityMonitoringApiDeleteSecurityFilterRequest {
    /**
     * The ID of the security filter.
     * @type string
     * @memberof SecurityMonitoringApideleteSecurityFilter
     */
    securityFilterId: string;
}
export interface SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     * @memberof SecurityMonitoringApideleteSecurityMonitoringRule
     */
    ruleId: string;
}
export interface SecurityMonitoringApiGetSecurityFilterRequest {
    /**
     * The ID of the security filter.
     * @type string
     * @memberof SecurityMonitoringApigetSecurityFilter
     */
    securityFilterId: string;
}
export interface SecurityMonitoringApiGetSecurityMonitoringRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     * @memberof SecurityMonitoringApigetSecurityMonitoringRule
     */
    ruleId: string;
}
export interface SecurityMonitoringApiListSecurityFiltersRequest {
}
export interface SecurityMonitoringApiListSecurityMonitoringRulesRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof SecurityMonitoringApilistSecurityMonitoringRules
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     * @memberof SecurityMonitoringApilistSecurityMonitoringRules
     */
    pageNumber?: number;
}
export interface SecurityMonitoringApiListSecurityMonitoringSignalsRequest {
    /**
     * The search query for security signals.
     * @type string
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    filterQuery?: string;
    /**
     * The minimum timestamp for requested security signals.
     * @type Date
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    filterFrom?: Date;
    /**
     * The maximum timestamp for requested security signals.
     * @type Date
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    filterTo?: Date;
    /**
     * The order of the security signals in results.
     * @type SecurityMonitoringSignalsSort
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    sort?: SecurityMonitoringSignalsSort;
    /**
     * A list of results using the cursor provided in the previous query.
     * @type string
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    pageCursor?: string;
    /**
     * The maximum number of security signals in the response.
     * @type number
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    pageLimit?: number;
}
export interface SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest {
    /**
     *
     * @type SecurityMonitoringSignalListRequest
     * @memberof SecurityMonitoringApisearchSecurityMonitoringSignals
     */
    body?: SecurityMonitoringSignalListRequest;
}
export interface SecurityMonitoringApiUpdateSecurityFilterRequest {
    /**
     * The ID of the security filter.
     * @type string
     * @memberof SecurityMonitoringApiupdateSecurityFilter
     */
    securityFilterId: string;
    /**
     * New definition of the security filter.
     * @type SecurityFilterUpdateRequest
     * @memberof SecurityMonitoringApiupdateSecurityFilter
     */
    body: SecurityFilterUpdateRequest;
}
export interface SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     * @memberof SecurityMonitoringApiupdateSecurityMonitoringRule
     */
    ruleId: string;
    /**
     *
     * @type SecurityMonitoringRuleUpdatePayload
     * @memberof SecurityMonitoringApiupdateSecurityMonitoringRule
     */
    body: SecurityMonitoringRuleUpdatePayload;
}
export declare class ObjectSecurityMonitoringApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: SecurityMonitoringApiRequestFactory, responseProcessor?: SecurityMonitoringApiResponseProcessor);
    /**
     * Create a security filter.
     * Create a security filter
     * @param param the request object
     */
    createSecurityFilter(param: SecurityMonitoringApiCreateSecurityFilterRequest, options?: Configuration): Promise<SecurityFilterResponse>;
    /**
     * Create a detection rule.
     * Create a detection rule
     * @param param the request object
     */
    createSecurityMonitoringRule(param: SecurityMonitoringApiCreateSecurityMonitoringRuleRequest, options?: Configuration): Promise<SecurityMonitoringRuleResponse>;
    /**
     * Delete a specific security filter.
     * Delete a security filter
     * @param param the request object
     */
    deleteSecurityFilter(param: SecurityMonitoringApiDeleteSecurityFilterRequest, options?: Configuration): Promise<SecurityFilterDeleteResponse | void>;
    /**
     * Delete an existing rule. Default rules cannot be deleted.
     * Delete an existing rule
     * @param param the request object
     */
    deleteSecurityMonitoringRule(param: SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest, options?: Configuration): Promise<void>;
    /**
     * Get the details of a specific security filter.
     * Get a security filter
     * @param param the request object
     */
    getSecurityFilter(param: SecurityMonitoringApiGetSecurityFilterRequest, options?: Configuration): Promise<SecurityFilterResponse>;
    /**
     * Get a rule's details.
     * Get a rule's details
     * @param param the request object
     */
    getSecurityMonitoringRule(param: SecurityMonitoringApiGetSecurityMonitoringRuleRequest, options?: Configuration): Promise<SecurityMonitoringRuleResponse>;
    /**
     * Get the list of configured security filters with their definitions.
     * Get all security filters
     * @param param the request object
     */
    listSecurityFilters(param: SecurityMonitoringApiListSecurityFiltersRequest, options?: Configuration): Promise<SecurityFiltersResponse>;
    /**
     * List rules.
     * List rules
     * @param param the request object
     */
    listSecurityMonitoringRules(param: SecurityMonitoringApiListSecurityMonitoringRulesRequest, options?: Configuration): Promise<SecurityMonitoringListRulesResponse>;
    /**
     * The list endpoint returns security signals that match a search query. Both this endpoint and the POST endpoint can be used interchangeably when listing security signals.
     * Get a quick list of security signals
     * @param param the request object
     */
    listSecurityMonitoringSignals(param: SecurityMonitoringApiListSecurityMonitoringSignalsRequest, options?: Configuration): Promise<SecurityMonitoringSignalsListResponse>;
    /**
     * Returns security signals that match a search query. Both this endpoint and the GET endpoint can be used interchangeably for listing security signals.
     * Get a list of security signals
     * @param param the request object
     */
    searchSecurityMonitoringSignals(param: SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest, options?: Configuration): Promise<SecurityMonitoringSignalsListResponse>;
    /**
     * Update a specific security filter. Returns the security filter object when the request is successful.
     * Update a security filter
     * @param param the request object
     */
    updateSecurityFilter(param: SecurityMonitoringApiUpdateSecurityFilterRequest, options?: Configuration): Promise<SecurityFilterResponse>;
    /**
     * Update an existing rule. When updating `cases`, `queries` or `options`, the whole field must be included. For example, when modifying a query all queries must be included. Default rules can only be updated to be enabled and to change notifications.
     * Update an existing rule
     * @param param the request object
     */
    updateSecurityMonitoringRule(param: SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest, options?: Configuration): Promise<SecurityMonitoringRuleResponse>;
}
import { UsersApiRequestFactory, UsersApiResponseProcessor } from "../apis/UsersApi";
export interface UsersApiCreateUserRequest {
    /**
     *
     * @type UserCreateRequest
     * @memberof UsersApicreateUser
     */
    body: UserCreateRequest;
}
export interface UsersApiDisableUserRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApidisableUser
     */
    userId: string;
}
export interface UsersApiGetInvitationRequest {
    /**
     * The UUID of the user invitation.
     * @type string
     * @memberof UsersApigetInvitation
     */
    userInvitationUuid: string;
}
export interface UsersApiGetUserRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApigetUser
     */
    userId: string;
}
export interface UsersApiListUserOrganizationsRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApilistUserOrganizations
     */
    userId: string;
}
export interface UsersApiListUserPermissionsRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApilistUserPermissions
     */
    userId: string;
}
export interface UsersApiListUsersRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof UsersApilistUsers
     */
    pageSize?: number;
    /**
     * Specific page number to return.
     * @type number
     * @memberof UsersApilistUsers
     */
    pageNumber?: number;
    /**
     * User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;modified_at&#x60;, &#x60;user_count&#x60;.
     * @type string
     * @memberof UsersApilistUsers
     */
    sort?: string;
    /**
     * Direction of sort. Options: &#x60;asc&#x60;, &#x60;desc&#x60;.
     * @type QuerySortOrder
     * @memberof UsersApilistUsers
     */
    sortDir?: QuerySortOrder;
    /**
     * Filter all users by the given string. Defaults to no filtering.
     * @type string
     * @memberof UsersApilistUsers
     */
    filter?: string;
    /**
     * Filter on status attribute. Comma separated list, with possible values &#x60;Active&#x60;, &#x60;Pending&#x60;, and &#x60;Disabled&#x60;. Defaults to no filtering.
     * @type string
     * @memberof UsersApilistUsers
     */
    filterStatus?: string;
}
export interface UsersApiSendInvitationsRequest {
    /**
     *
     * @type UserInvitationsRequest
     * @memberof UsersApisendInvitations
     */
    body: UserInvitationsRequest;
}
export interface UsersApiUpdateUserRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApiupdateUser
     */
    userId: string;
    /**
     *
     * @type UserUpdateRequest
     * @memberof UsersApiupdateUser
     */
    body: UserUpdateRequest;
}
export declare class ObjectUsersApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor);
    /**
     * Create a user for your organization.
     * Create a user
     * @param param the request object
     */
    createUser(param: UsersApiCreateUserRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * Disable a user. Can only be used with an application key belonging to an administrator user.
     * Disable a user
     * @param param the request object
     */
    disableUser(param: UsersApiDisableUserRequest, options?: Configuration): Promise<void>;
    /**
     * Returns a single user invitation by its UUID.
     * Get a user invitation
     * @param param the request object
     */
    getInvitation(param: UsersApiGetInvitationRequest, options?: Configuration): Promise<UserInvitationResponse>;
    /**
     * Get a user in the organization specified by the user’s `user_id`.
     * Get user details
     * @param param the request object
     */
    getUser(param: UsersApiGetUserRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * Get a user organization. Returns the user information and all organizations joined by this user.
     * Get a user organization
     * @param param the request object
     */
    listUserOrganizations(param: UsersApiListUserOrganizationsRequest, options?: Configuration): Promise<UserResponse>;
    /**
     * Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.
     * Get a user permissions
     * @param param the request object
     */
    listUserPermissions(param: UsersApiListUserPermissionsRequest, options?: Configuration): Promise<PermissionsResponse>;
    /**
     * Get the list of all users in the organization. This list includes all users even if they are deactivated or unverified.
     * List all users
     * @param param the request object
     */
    listUsers(param: UsersApiListUsersRequest, options?: Configuration): Promise<UsersResponse>;
    /**
     * Sends emails to one or more users inviting them to join the organization.
     * Send invitation emails
     * @param param the request object
     */
    sendInvitations(param: UsersApiSendInvitationsRequest, options?: Configuration): Promise<UserInvitationsResponse>;
    /**
     * Edit a user. Can only be used with an application key belonging to an administrator user.
     * Update a user
     * @param param the request object
     */
    updateUser(param: UsersApiUpdateUserRequest, options?: Configuration): Promise<UserResponse>;
}
