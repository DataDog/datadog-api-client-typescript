import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { APIErrorResponse } from '../models/APIErrorResponse';
import { APIKeyCreateAttributes } from '../models/APIKeyCreateAttributes';
import { APIKeyCreateData } from '../models/APIKeyCreateData';
import { APIKeyCreateRequest } from '../models/APIKeyCreateRequest';
import { APIKeyRelationships } from '../models/APIKeyRelationships';
import { APIKeyResponse } from '../models/APIKeyResponse';
import { APIKeyResponseIncludedItem } from '../models/APIKeyResponseIncludedItem';
import { APIKeyUpdateAttributes } from '../models/APIKeyUpdateAttributes';
import { APIKeyUpdateData } from '../models/APIKeyUpdateData';
import { APIKeyUpdateRequest } from '../models/APIKeyUpdateRequest';
import { APIKeysResponse } from '../models/APIKeysResponse';
import { APIKeysSort } from '../models/APIKeysSort';
import { APIKeysType } from '../models/APIKeysType';
import { ApplicationKeyCreateAttributes } from '../models/ApplicationKeyCreateAttributes';
import { ApplicationKeyCreateData } from '../models/ApplicationKeyCreateData';
import { ApplicationKeyCreateRequest } from '../models/ApplicationKeyCreateRequest';
import { ApplicationKeyRelationships } from '../models/ApplicationKeyRelationships';
import { ApplicationKeyResponse } from '../models/ApplicationKeyResponse';
import { ApplicationKeyResponseIncludedItem } from '../models/ApplicationKeyResponseIncludedItem';
import { ApplicationKeyUpdateAttributes } from '../models/ApplicationKeyUpdateAttributes';
import { ApplicationKeyUpdateData } from '../models/ApplicationKeyUpdateData';
import { ApplicationKeyUpdateRequest } from '../models/ApplicationKeyUpdateRequest';
import { ApplicationKeysSort } from '../models/ApplicationKeysSort';
import { ApplicationKeysType } from '../models/ApplicationKeysType';
import { Creator } from '../models/Creator';
import { DashboardListAddItemsRequest } from '../models/DashboardListAddItemsRequest';
import { DashboardListAddItemsResponse } from '../models/DashboardListAddItemsResponse';
import { DashboardListDeleteItemsRequest } from '../models/DashboardListDeleteItemsRequest';
import { DashboardListDeleteItemsResponse } from '../models/DashboardListDeleteItemsResponse';
import { DashboardListItem } from '../models/DashboardListItem';
import { DashboardListItemRequest } from '../models/DashboardListItemRequest';
import { DashboardListItemResponse } from '../models/DashboardListItemResponse';
import { DashboardListItems } from '../models/DashboardListItems';
import { DashboardListUpdateItemsRequest } from '../models/DashboardListUpdateItemsRequest';
import { DashboardListUpdateItemsResponse } from '../models/DashboardListUpdateItemsResponse';
import { DashboardType } from '../models/DashboardType';
import { FullAPIKey } from '../models/FullAPIKey';
import { FullAPIKeyAttributes } from '../models/FullAPIKeyAttributes';
import { FullApplicationKey } from '../models/FullApplicationKey';
import { FullApplicationKeyAttributes } from '../models/FullApplicationKeyAttributes';
import { IncidentCreateAttributes } from '../models/IncidentCreateAttributes';
import { IncidentCreateData } from '../models/IncidentCreateData';
import { IncidentCreateRelationships } from '../models/IncidentCreateRelationships';
import { IncidentCreateRequest } from '../models/IncidentCreateRequest';
import { IncidentFieldAttributes } from '../models/IncidentFieldAttributes';
import { IncidentFieldAttributesMultipleValue } from '../models/IncidentFieldAttributesMultipleValue';
import { IncidentFieldAttributesSingleValue } from '../models/IncidentFieldAttributesSingleValue';
import { IncidentFieldAttributesSingleValueType } from '../models/IncidentFieldAttributesSingleValueType';
import { IncidentFieldAttributesValueType } from '../models/IncidentFieldAttributesValueType';
import { IncidentIntegrationMetadataType } from '../models/IncidentIntegrationMetadataType';
import { IncidentPostmortemType } from '../models/IncidentPostmortemType';
import { IncidentRelatedObject } from '../models/IncidentRelatedObject';
import { IncidentResponse } from '../models/IncidentResponse';
import { IncidentResponseAttributes } from '../models/IncidentResponseAttributes';
import { IncidentResponseData } from '../models/IncidentResponseData';
import { IncidentResponseIncludedItem } from '../models/IncidentResponseIncludedItem';
import { IncidentResponseRelationships } from '../models/IncidentResponseRelationships';
import { IncidentServiceCreateAttributes } from '../models/IncidentServiceCreateAttributes';
import { IncidentServiceCreateData } from '../models/IncidentServiceCreateData';
import { IncidentServiceCreateRequest } from '../models/IncidentServiceCreateRequest';
import { IncidentServiceIncludedItems } from '../models/IncidentServiceIncludedItems';
import { IncidentServiceRelationships } from '../models/IncidentServiceRelationships';
import { IncidentServiceResponse } from '../models/IncidentServiceResponse';
import { IncidentServiceResponseAttributes } from '../models/IncidentServiceResponseAttributes';
import { IncidentServiceResponseData } from '../models/IncidentServiceResponseData';
import { IncidentServiceType } from '../models/IncidentServiceType';
import { IncidentServiceUpdateAttributes } from '../models/IncidentServiceUpdateAttributes';
import { IncidentServiceUpdateData } from '../models/IncidentServiceUpdateData';
import { IncidentServiceUpdateRequest } from '../models/IncidentServiceUpdateRequest';
import { IncidentServicesResponse } from '../models/IncidentServicesResponse';
import { IncidentServicesResponseMeta } from '../models/IncidentServicesResponseMeta';
import { IncidentServicesResponseMetaPagination } from '../models/IncidentServicesResponseMetaPagination';
import { IncidentTeamCreateAttributes } from '../models/IncidentTeamCreateAttributes';
import { IncidentTeamCreateData } from '../models/IncidentTeamCreateData';
import { IncidentTeamCreateRequest } from '../models/IncidentTeamCreateRequest';
import { IncidentTeamIncludedItems } from '../models/IncidentTeamIncludedItems';
import { IncidentTeamRelationships } from '../models/IncidentTeamRelationships';
import { IncidentTeamResponse } from '../models/IncidentTeamResponse';
import { IncidentTeamResponseAttributes } from '../models/IncidentTeamResponseAttributes';
import { IncidentTeamResponseData } from '../models/IncidentTeamResponseData';
import { IncidentTeamType } from '../models/IncidentTeamType';
import { IncidentTeamUpdateAttributes } from '../models/IncidentTeamUpdateAttributes';
import { IncidentTeamUpdateData } from '../models/IncidentTeamUpdateData';
import { IncidentTeamUpdateRequest } from '../models/IncidentTeamUpdateRequest';
import { IncidentTeamsResponse } from '../models/IncidentTeamsResponse';
import { IncidentTimelineCellCreateAttributes } from '../models/IncidentTimelineCellCreateAttributes';
import { IncidentTimelineCellMarkdownContentType } from '../models/IncidentTimelineCellMarkdownContentType';
import { IncidentTimelineCellMarkdownCreateAttributes } from '../models/IncidentTimelineCellMarkdownCreateAttributes';
import { IncidentTimelineCellMarkdownCreateAttributesContent } from '../models/IncidentTimelineCellMarkdownCreateAttributesContent';
import { IncidentType } from '../models/IncidentType';
import { IncidentUpdateAttributes } from '../models/IncidentUpdateAttributes';
import { IncidentUpdateData } from '../models/IncidentUpdateData';
import { IncidentUpdateRelationships } from '../models/IncidentUpdateRelationships';
import { IncidentUpdateRequest } from '../models/IncidentUpdateRequest';
import { IncidentsResponse } from '../models/IncidentsResponse';
import { ListApplicationKeysResponse } from '../models/ListApplicationKeysResponse';
import { Log } from '../models/Log';
import { LogAttributes } from '../models/LogAttributes';
import { LogType } from '../models/LogType';
import { LogsAggregateBucket } from '../models/LogsAggregateBucket';
import { LogsAggregateBucketValue } from '../models/LogsAggregateBucketValue';
import { LogsAggregateBucketValueTimeseries } from '../models/LogsAggregateBucketValueTimeseries';
import { LogsAggregateBucketValueTimeseriesPoint } from '../models/LogsAggregateBucketValueTimeseriesPoint';
import { LogsAggregateRequest } from '../models/LogsAggregateRequest';
import { LogsAggregateRequestPage } from '../models/LogsAggregateRequestPage';
import { LogsAggregateResponse } from '../models/LogsAggregateResponse';
import { LogsAggregateResponseData } from '../models/LogsAggregateResponseData';
import { LogsAggregateResponseStatus } from '../models/LogsAggregateResponseStatus';
import { LogsAggregateSort } from '../models/LogsAggregateSort';
import { LogsAggregateSortType } from '../models/LogsAggregateSortType';
import { LogsAggregationFunction } from '../models/LogsAggregationFunction';
import { LogsArchive } from '../models/LogsArchive';
import { LogsArchiveAttributes } from '../models/LogsArchiveAttributes';
import { LogsArchiveCreateRequest } from '../models/LogsArchiveCreateRequest';
import { LogsArchiveCreateRequestAttributes } from '../models/LogsArchiveCreateRequestAttributes';
import { LogsArchiveCreateRequestDefinition } from '../models/LogsArchiveCreateRequestDefinition';
import { LogsArchiveCreateRequestDestination } from '../models/LogsArchiveCreateRequestDestination';
import { LogsArchiveDefinition } from '../models/LogsArchiveDefinition';
import { LogsArchiveDestination } from '../models/LogsArchiveDestination';
import { LogsArchiveDestinationAzure } from '../models/LogsArchiveDestinationAzure';
import { LogsArchiveDestinationAzureType } from '../models/LogsArchiveDestinationAzureType';
import { LogsArchiveDestinationGCS } from '../models/LogsArchiveDestinationGCS';
import { LogsArchiveDestinationGCSType } from '../models/LogsArchiveDestinationGCSType';
import { LogsArchiveDestinationS3 } from '../models/LogsArchiveDestinationS3';
import { LogsArchiveDestinationS3Type } from '../models/LogsArchiveDestinationS3Type';
import { LogsArchiveIntegrationAzure } from '../models/LogsArchiveIntegrationAzure';
import { LogsArchiveIntegrationGCS } from '../models/LogsArchiveIntegrationGCS';
import { LogsArchiveIntegrationS3 } from '../models/LogsArchiveIntegrationS3';
import { LogsArchiveOrder } from '../models/LogsArchiveOrder';
import { LogsArchiveOrderAttributes } from '../models/LogsArchiveOrderAttributes';
import { LogsArchiveOrderDefinition } from '../models/LogsArchiveOrderDefinition';
import { LogsArchiveOrderDefinitionType } from '../models/LogsArchiveOrderDefinitionType';
import { LogsArchiveState } from '../models/LogsArchiveState';
import { LogsArchives } from '../models/LogsArchives';
import { LogsCompute } from '../models/LogsCompute';
import { LogsComputeType } from '../models/LogsComputeType';
import { LogsGroupBy } from '../models/LogsGroupBy';
import { LogsGroupByHistogram } from '../models/LogsGroupByHistogram';
import { LogsGroupByMissing } from '../models/LogsGroupByMissing';
import { LogsGroupByTotal } from '../models/LogsGroupByTotal';
import { LogsListRequest } from '../models/LogsListRequest';
import { LogsListRequestPage } from '../models/LogsListRequestPage';
import { LogsListResponse } from '../models/LogsListResponse';
import { LogsListResponseLinks } from '../models/LogsListResponseLinks';
import { LogsMetricCompute } from '../models/LogsMetricCompute';
import { LogsMetricComputeAggregationType } from '../models/LogsMetricComputeAggregationType';
import { LogsMetricCreateAttributes } from '../models/LogsMetricCreateAttributes';
import { LogsMetricCreateData } from '../models/LogsMetricCreateData';
import { LogsMetricCreateRequest } from '../models/LogsMetricCreateRequest';
import { LogsMetricFilter } from '../models/LogsMetricFilter';
import { LogsMetricGroupBy } from '../models/LogsMetricGroupBy';
import { LogsMetricResponse } from '../models/LogsMetricResponse';
import { LogsMetricResponseAttributes } from '../models/LogsMetricResponseAttributes';
import { LogsMetricResponseCompute } from '../models/LogsMetricResponseCompute';
import { LogsMetricResponseComputeAggregationType } from '../models/LogsMetricResponseComputeAggregationType';
import { LogsMetricResponseData } from '../models/LogsMetricResponseData';
import { LogsMetricResponseFilter } from '../models/LogsMetricResponseFilter';
import { LogsMetricResponseGroupBy } from '../models/LogsMetricResponseGroupBy';
import { LogsMetricType } from '../models/LogsMetricType';
import { LogsMetricUpdateAttributes } from '../models/LogsMetricUpdateAttributes';
import { LogsMetricUpdateData } from '../models/LogsMetricUpdateData';
import { LogsMetricUpdateRequest } from '../models/LogsMetricUpdateRequest';
import { LogsMetricsResponse } from '../models/LogsMetricsResponse';
import { LogsQueryFilter } from '../models/LogsQueryFilter';
import { LogsQueryOptions } from '../models/LogsQueryOptions';
import { LogsResponseMetadata } from '../models/LogsResponseMetadata';
import { LogsResponseMetadataPage } from '../models/LogsResponseMetadataPage';
import { LogsSort } from '../models/LogsSort';
import { LogsSortOrder } from '../models/LogsSortOrder';
import { LogsWarning } from '../models/LogsWarning';
import { Metric } from '../models/Metric';
import { MetricTagConfiguration } from '../models/MetricTagConfiguration';
import { MetricTagConfigurationAttributes } from '../models/MetricTagConfigurationAttributes';
import { MetricTagConfigurationCreateAttributes } from '../models/MetricTagConfigurationCreateAttributes';
import { MetricTagConfigurationCreateData } from '../models/MetricTagConfigurationCreateData';
import { MetricTagConfigurationCreateRequest } from '../models/MetricTagConfigurationCreateRequest';
import { MetricTagConfigurationMetricTypes } from '../models/MetricTagConfigurationMetricTypes';
import { MetricTagConfigurationResponse } from '../models/MetricTagConfigurationResponse';
import { MetricTagConfigurationType } from '../models/MetricTagConfigurationType';
import { MetricTagConfigurationUpdateAttributes } from '../models/MetricTagConfigurationUpdateAttributes';
import { MetricTagConfigurationUpdateData } from '../models/MetricTagConfigurationUpdateData';
import { MetricTagConfigurationUpdateRequest } from '../models/MetricTagConfigurationUpdateRequest';
import { MetricType } from '../models/MetricType';
import { MetricsAndMetricTagConfigurations } from '../models/MetricsAndMetricTagConfigurations';
import { MetricsAndMetricTagConfigurationsResponse } from '../models/MetricsAndMetricTagConfigurationsResponse';
import { Organization } from '../models/Organization';
import { OrganizationAttributes } from '../models/OrganizationAttributes';
import { OrganizationsType } from '../models/OrganizationsType';
import { Pagination } from '../models/Pagination';
import { PartialAPIKey } from '../models/PartialAPIKey';
import { PartialAPIKeyAttributes } from '../models/PartialAPIKeyAttributes';
import { PartialApplicationKey } from '../models/PartialApplicationKey';
import { PartialApplicationKeyAttributes } from '../models/PartialApplicationKeyAttributes';
import { Permission } from '../models/Permission';
import { PermissionAttributes } from '../models/PermissionAttributes';
import { PermissionsResponse } from '../models/PermissionsResponse';
import { PermissionsType } from '../models/PermissionsType';
import { ProcessSummariesMeta } from '../models/ProcessSummariesMeta';
import { ProcessSummariesMetaPage } from '../models/ProcessSummariesMetaPage';
import { ProcessSummariesResponse } from '../models/ProcessSummariesResponse';
import { ProcessSummary } from '../models/ProcessSummary';
import { ProcessSummaryAttributes } from '../models/ProcessSummaryAttributes';
import { ProcessSummaryType } from '../models/ProcessSummaryType';
import { QuerySortOrder } from '../models/QuerySortOrder';
import { RelationshipToIncidentIntegrationMetadataData } from '../models/RelationshipToIncidentIntegrationMetadataData';
import { RelationshipToIncidentIntegrationMetadatas } from '../models/RelationshipToIncidentIntegrationMetadatas';
import { RelationshipToIncidentPostmortem } from '../models/RelationshipToIncidentPostmortem';
import { RelationshipToIncidentPostmortemData } from '../models/RelationshipToIncidentPostmortemData';
import { RelationshipToOrganization } from '../models/RelationshipToOrganization';
import { RelationshipToOrganizationData } from '../models/RelationshipToOrganizationData';
import { RelationshipToOrganizations } from '../models/RelationshipToOrganizations';
import { RelationshipToPermission } from '../models/RelationshipToPermission';
import { RelationshipToPermissionData } from '../models/RelationshipToPermissionData';
import { RelationshipToPermissions } from '../models/RelationshipToPermissions';
import { RelationshipToRole } from '../models/RelationshipToRole';
import { RelationshipToRoleData } from '../models/RelationshipToRoleData';
import { RelationshipToRoles } from '../models/RelationshipToRoles';
import { RelationshipToUser } from '../models/RelationshipToUser';
import { RelationshipToUserData } from '../models/RelationshipToUserData';
import { RelationshipToUsers } from '../models/RelationshipToUsers';
import { ResponseMetaAttributes } from '../models/ResponseMetaAttributes';
import { Role } from '../models/Role';
import { RoleAttributes } from '../models/RoleAttributes';
import { RoleCreateAttributes } from '../models/RoleCreateAttributes';
import { RoleCreateData } from '../models/RoleCreateData';
import { RoleCreateRequest } from '../models/RoleCreateRequest';
import { RoleCreateResponse } from '../models/RoleCreateResponse';
import { RoleCreateResponseData } from '../models/RoleCreateResponseData';
import { RoleRelationships } from '../models/RoleRelationships';
import { RoleResponse } from '../models/RoleResponse';
import { RoleResponseRelationships } from '../models/RoleResponseRelationships';
import { RoleUpdateAttributes } from '../models/RoleUpdateAttributes';
import { RoleUpdateData } from '../models/RoleUpdateData';
import { RoleUpdateRequest } from '../models/RoleUpdateRequest';
import { RoleUpdateResponse } from '../models/RoleUpdateResponse';
import { RoleUpdateResponseData } from '../models/RoleUpdateResponseData';
import { RolesResponse } from '../models/RolesResponse';
import { RolesSort } from '../models/RolesSort';
import { RolesType } from '../models/RolesType';
import { SecurityMonitoringFilter } from '../models/SecurityMonitoringFilter';
import { SecurityMonitoringFilterAction } from '../models/SecurityMonitoringFilterAction';
import { SecurityMonitoringListRulesResponse } from '../models/SecurityMonitoringListRulesResponse';
import { SecurityMonitoringRuleCase } from '../models/SecurityMonitoringRuleCase';
import { SecurityMonitoringRuleCaseCreate } from '../models/SecurityMonitoringRuleCaseCreate';
import { SecurityMonitoringRuleCreatePayload } from '../models/SecurityMonitoringRuleCreatePayload';
import { SecurityMonitoringRuleEvaluationWindow } from '../models/SecurityMonitoringRuleEvaluationWindow';
import { SecurityMonitoringRuleKeepAlive } from '../models/SecurityMonitoringRuleKeepAlive';
import { SecurityMonitoringRuleMaxSignalDuration } from '../models/SecurityMonitoringRuleMaxSignalDuration';
import { SecurityMonitoringRuleOptions } from '../models/SecurityMonitoringRuleOptions';
import { SecurityMonitoringRuleQuery } from '../models/SecurityMonitoringRuleQuery';
import { SecurityMonitoringRuleQueryAggregation } from '../models/SecurityMonitoringRuleQueryAggregation';
import { SecurityMonitoringRuleQueryCreate } from '../models/SecurityMonitoringRuleQueryCreate';
import { SecurityMonitoringRuleResponse } from '../models/SecurityMonitoringRuleResponse';
import { SecurityMonitoringRuleSeverity } from '../models/SecurityMonitoringRuleSeverity';
import { SecurityMonitoringRuleUpdatePayload } from '../models/SecurityMonitoringRuleUpdatePayload';
import { SecurityMonitoringSignal } from '../models/SecurityMonitoringSignal';
import { SecurityMonitoringSignalAttributes } from '../models/SecurityMonitoringSignalAttributes';
import { SecurityMonitoringSignalListRequest } from '../models/SecurityMonitoringSignalListRequest';
import { SecurityMonitoringSignalListRequestFilter } from '../models/SecurityMonitoringSignalListRequestFilter';
import { SecurityMonitoringSignalListRequestPage } from '../models/SecurityMonitoringSignalListRequestPage';
import { SecurityMonitoringSignalType } from '../models/SecurityMonitoringSignalType';
import { SecurityMonitoringSignalsListResponse } from '../models/SecurityMonitoringSignalsListResponse';
import { SecurityMonitoringSignalsListResponseLinks } from '../models/SecurityMonitoringSignalsListResponseLinks';
import { SecurityMonitoringSignalsListResponseMeta } from '../models/SecurityMonitoringSignalsListResponseMeta';
import { SecurityMonitoringSignalsListResponseMetaPage } from '../models/SecurityMonitoringSignalsListResponseMetaPage';
import { SecurityMonitoringSignalsSort } from '../models/SecurityMonitoringSignalsSort';
import { User } from '../models/User';
import { UserAttributes } from '../models/UserAttributes';
import { UserCreateAttributes } from '../models/UserCreateAttributes';
import { UserCreateData } from '../models/UserCreateData';
import { UserCreateRequest } from '../models/UserCreateRequest';
import { UserInvitationData } from '../models/UserInvitationData';
import { UserInvitationDataAttributes } from '../models/UserInvitationDataAttributes';
import { UserInvitationRelationships } from '../models/UserInvitationRelationships';
import { UserInvitationResponse } from '../models/UserInvitationResponse';
import { UserInvitationResponseData } from '../models/UserInvitationResponseData';
import { UserInvitationsRequest } from '../models/UserInvitationsRequest';
import { UserInvitationsResponse } from '../models/UserInvitationsResponse';
import { UserInvitationsType } from '../models/UserInvitationsType';
import { UserRelationships } from '../models/UserRelationships';
import { UserResponse } from '../models/UserResponse';
import { UserResponseIncludedItem } from '../models/UserResponseIncludedItem';
import { UserResponseRelationships } from '../models/UserResponseRelationships';
import { UserUpdateAttributes } from '../models/UserUpdateAttributes';
import { UserUpdateData } from '../models/UserUpdateData';
import { UserUpdateRequest } from '../models/UserUpdateRequest';
import { UsersResponse } from '../models/UsersResponse';
import { UsersType } from '../models/UsersType';

import { ObservableDashboardListsApi } from "./ObservableAPI";
import { DashboardListsApiRequestFactory, DashboardListsApiResponseProcessor} from "../apis/DashboardListsApi";

export interface DashboardListsApiCreateDashboardListItemsRequest {
    /**
     * ID of the dashboard list to add items to.
     * @type number
     * @memberof DashboardListsApicreateDashboardListItems
     */
    dashboardListId: number
    /**
     * Dashboards to add to the dashboard list.
     * @type DashboardListAddItemsRequest
     * @memberof DashboardListsApicreateDashboardListItems
     */
    body: DashboardListAddItemsRequest
}

export interface DashboardListsApiDeleteDashboardListItemsRequest {
    /**
     * ID of the dashboard list to delete items from.
     * @type number
     * @memberof DashboardListsApideleteDashboardListItems
     */
    dashboardListId: number
    /**
     * Dashboards to delete from the dashboard list.
     * @type DashboardListDeleteItemsRequest
     * @memberof DashboardListsApideleteDashboardListItems
     */
    body: DashboardListDeleteItemsRequest
}

export interface DashboardListsApiGetDashboardListItemsRequest {
    /**
     * ID of the dashboard list to get items from.
     * @type number
     * @memberof DashboardListsApigetDashboardListItems
     */
    dashboardListId: number
}

export interface DashboardListsApiUpdateDashboardListItemsRequest {
    /**
     * ID of the dashboard list to update items from.
     * @type number
     * @memberof DashboardListsApiupdateDashboardListItems
     */
    dashboardListId: number
    /**
     * New dashboards of the dashboard list.
     * @type DashboardListUpdateItemsRequest
     * @memberof DashboardListsApiupdateDashboardListItems
     */
    body: DashboardListUpdateItemsRequest
}


export class ObjectDashboardListsApi {
    private api: ObservableDashboardListsApi

    public constructor(configuration: Configuration, requestFactory?: DashboardListsApiRequestFactory, responseProcessor?: DashboardListsApiResponseProcessor) {
        this.api = new ObservableDashboardListsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Add dashboards to an existing dashboard list.
     * Add Items to a Dashboard List
     * @param param the request object
     */
    public createDashboardListItems(param: DashboardListsApiCreateDashboardListItemsRequest, options?: Configuration): Promise<DashboardListAddItemsResponse> {
        return this.api.createDashboardListItems(param.dashboardListId, param.body,  options).toPromise();
    }
	
    /**
     * Delete dashboards from an existing dashboard list.
     * Delete items from a dashboard list
     * @param param the request object
     */
    public deleteDashboardListItems(param: DashboardListsApiDeleteDashboardListItemsRequest, options?: Configuration): Promise<DashboardListDeleteItemsResponse> {
        return this.api.deleteDashboardListItems(param.dashboardListId, param.body,  options).toPromise();
    }
	
    /**
     * Fetch the dashboard list’s dashboard definitions.
     * Get items of a Dashboard List
     * @param param the request object
     */
    public getDashboardListItems(param: DashboardListsApiGetDashboardListItemsRequest, options?: Configuration): Promise<DashboardListItems> {
        return this.api.getDashboardListItems(param.dashboardListId,  options).toPromise();
    }
	
    /**
     * Update dashboards of an existing dashboard list.
     * Update items of a dashboard list
     * @param param the request object
     */
    public updateDashboardListItems(param: DashboardListsApiUpdateDashboardListItemsRequest, options?: Configuration): Promise<DashboardListUpdateItemsResponse> {
        return this.api.updateDashboardListItems(param.dashboardListId, param.body,  options).toPromise();
    }
	

}




import { ObservableIncidentServicesApi } from "./ObservableAPI";
import { IncidentServicesApiRequestFactory, IncidentServicesApiResponseProcessor} from "../apis/IncidentServicesApi";

export interface IncidentServicesApiCreateIncidentServiceRequest {
    /**
     * Incident Service Payload.
     * @type IncidentServiceCreateRequest
     * @memberof IncidentServicesApicreateIncidentService
     */
    body: IncidentServiceCreateRequest
}

export interface IncidentServicesApiDeleteIncidentServiceRequest {
    /**
     * The ID of the incident service.
     * @type string
     * @memberof IncidentServicesApideleteIncidentService
     */
    serviceId: string
}

export interface IncidentServicesApiGetIncidentServiceRequest {
    /**
     * The ID of the incident service.
     * @type string
     * @memberof IncidentServicesApigetIncidentService
     */
    serviceId: string
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     * @memberof IncidentServicesApigetIncidentService
     */
    include?: IncidentRelatedObject
}

export interface IncidentServicesApiListIncidentServicesRequest {
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     * @memberof IncidentServicesApilistIncidentServices
     */
    include?: IncidentRelatedObject
    /**
     * Size for a given page.
     * @type number
     * @memberof IncidentServicesApilistIncidentServices
     */
    pageSize?: number
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     * @memberof IncidentServicesApilistIncidentServices
     */
    pageOffset?: number
    /**
     * A search query that filters services by name.
     * @type string
     * @memberof IncidentServicesApilistIncidentServices
     */
    filter?: string
}

export interface IncidentServicesApiUpdateIncidentServiceRequest {
    /**
     * The ID of the incident service.
     * @type string
     * @memberof IncidentServicesApiupdateIncidentService
     */
    serviceId: string
    /**
     * Incident Service Payload.
     * @type IncidentServiceUpdateRequest
     * @memberof IncidentServicesApiupdateIncidentService
     */
    body: IncidentServiceUpdateRequest
}


export class ObjectIncidentServicesApi {
    private api: ObservableIncidentServicesApi

    public constructor(configuration: Configuration, requestFactory?: IncidentServicesApiRequestFactory, responseProcessor?: IncidentServicesApiResponseProcessor) {
        this.api = new ObservableIncidentServicesApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Creates a new incident service.
     * Create a new incident service
     * @param param the request object
     */
    public createIncidentService(param: IncidentServicesApiCreateIncidentServiceRequest, options?: Configuration): Promise<IncidentServiceResponse> {
        return this.api.createIncidentService(param.body,  options).toPromise();
    }
	
    /**
     * Deletes an existing incident service.
     * Delete an existing incident service
     * @param param the request object
     */
    public deleteIncidentService(param: IncidentServicesApiDeleteIncidentServiceRequest, options?: Configuration): Promise<void> {
        return this.api.deleteIncidentService(param.serviceId,  options).toPromise();
    }
	
    /**
     * Get details of an incident service. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get details of an incident service
     * @param param the request object
     */
    public getIncidentService(param: IncidentServicesApiGetIncidentServiceRequest, options?: Configuration): Promise<IncidentServiceResponse> {
        return this.api.getIncidentService(param.serviceId, param.include,  options).toPromise();
    }
	
    /**
     * Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get a list of all incident services
     * @param param the request object
     */
    public listIncidentServices(param: IncidentServicesApiListIncidentServicesRequest, options?: Configuration): Promise<IncidentServicesResponse> {
        return this.api.listIncidentServices(param.include, param.pageSize, param.pageOffset, param.filter,  options).toPromise();
    }
	
    /**
     * Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident service
     * @param param the request object
     */
    public updateIncidentService(param: IncidentServicesApiUpdateIncidentServiceRequest, options?: Configuration): Promise<IncidentServiceResponse> {
        return this.api.updateIncidentService(param.serviceId, param.body,  options).toPromise();
    }
	

}




import { ObservableIncidentTeamsApi } from "./ObservableAPI";
import { IncidentTeamsApiRequestFactory, IncidentTeamsApiResponseProcessor} from "../apis/IncidentTeamsApi";

export interface IncidentTeamsApiCreateIncidentTeamRequest {
    /**
     * Incident Team Payload.
     * @type IncidentTeamCreateRequest
     * @memberof IncidentTeamsApicreateIncidentTeam
     */
    body: IncidentTeamCreateRequest
}

export interface IncidentTeamsApiDeleteIncidentTeamRequest {
    /**
     * The ID of the incident team.
     * @type string
     * @memberof IncidentTeamsApideleteIncidentTeam
     */
    teamId: string
}

export interface IncidentTeamsApiGetIncidentTeamRequest {
    /**
     * The ID of the incident team.
     * @type string
     * @memberof IncidentTeamsApigetIncidentTeam
     */
    teamId: string
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     * @memberof IncidentTeamsApigetIncidentTeam
     */
    include?: IncidentRelatedObject
}

export interface IncidentTeamsApiListIncidentTeamsRequest {
    /**
     * Specifies which types of related objects should be included in the response.
     * @type IncidentRelatedObject
     * @memberof IncidentTeamsApilistIncidentTeams
     */
    include?: IncidentRelatedObject
    /**
     * Size for a given page.
     * @type number
     * @memberof IncidentTeamsApilistIncidentTeams
     */
    pageSize?: number
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     * @memberof IncidentTeamsApilistIncidentTeams
     */
    pageOffset?: number
    /**
     * A search query that filters teams by name.
     * @type string
     * @memberof IncidentTeamsApilistIncidentTeams
     */
    filter?: string
}

export interface IncidentTeamsApiUpdateIncidentTeamRequest {
    /**
     * The ID of the incident team.
     * @type string
     * @memberof IncidentTeamsApiupdateIncidentTeam
     */
    teamId: string
    /**
     * Incident Team Payload.
     * @type IncidentTeamUpdateRequest
     * @memberof IncidentTeamsApiupdateIncidentTeam
     */
    body: IncidentTeamUpdateRequest
}


export class ObjectIncidentTeamsApi {
    private api: ObservableIncidentTeamsApi

    public constructor(configuration: Configuration, requestFactory?: IncidentTeamsApiRequestFactory, responseProcessor?: IncidentTeamsApiResponseProcessor) {
        this.api = new ObservableIncidentTeamsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Creates a new incident team.
     * Create a new incident team
     * @param param the request object
     */
    public createIncidentTeam(param: IncidentTeamsApiCreateIncidentTeamRequest, options?: Configuration): Promise<IncidentTeamResponse> {
        return this.api.createIncidentTeam(param.body,  options).toPromise();
    }
	
    /**
     * Deletes an existing incident team.
     * Delete an existing incident team
     * @param param the request object
     */
    public deleteIncidentTeam(param: IncidentTeamsApiDeleteIncidentTeamRequest, options?: Configuration): Promise<void> {
        return this.api.deleteIncidentTeam(param.teamId,  options).toPromise();
    }
	
    /**
     * Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get details of an incident team
     * @param param the request object
     */
    public getIncidentTeam(param: IncidentTeamsApiGetIncidentTeamRequest, options?: Configuration): Promise<IncidentTeamResponse> {
        return this.api.getIncidentTeam(param.teamId, param.include,  options).toPromise();
    }
	
    /**
     * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get a list of all incident teams
     * @param param the request object
     */
    public listIncidentTeams(param: IncidentTeamsApiListIncidentTeamsRequest, options?: Configuration): Promise<IncidentTeamsResponse> {
        return this.api.listIncidentTeams(param.include, param.pageSize, param.pageOffset, param.filter,  options).toPromise();
    }
	
    /**
     * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident team
     * @param param the request object
     */
    public updateIncidentTeam(param: IncidentTeamsApiUpdateIncidentTeamRequest, options?: Configuration): Promise<IncidentTeamResponse> {
        return this.api.updateIncidentTeam(param.teamId, param.body,  options).toPromise();
    }
	

}




import { ObservableIncidentsApi } from "./ObservableAPI";
import { IncidentsApiRequestFactory, IncidentsApiResponseProcessor} from "../apis/IncidentsApi";

export interface IncidentsApiCreateIncidentRequest {
    /**
     * Incident payload.
     * @type IncidentCreateRequest
     * @memberof IncidentsApicreateIncident
     */
    body: IncidentCreateRequest
}

export interface IncidentsApiDeleteIncidentRequest {
    /**
     * The UUID the incident.
     * @type string
     * @memberof IncidentsApideleteIncident
     */
    incidentId: string
}

export interface IncidentsApiGetIncidentRequest {
    /**
     * The UUID the incident.
     * @type string
     * @memberof IncidentsApigetIncident
     */
    incidentId: string
    /**
     * Specifies which types of related objects should be included in the response.
     * @type Array&lt;IncidentRelatedObject&gt;
     * @memberof IncidentsApigetIncident
     */
    include?: Array<IncidentRelatedObject>
}

export interface IncidentsApiListIncidentsRequest {
    /**
     * Specifies which types of related objects should be included in the response.
     * @type Array&lt;IncidentRelatedObject&gt;
     * @memberof IncidentsApilistIncidents
     */
    include?: Array<IncidentRelatedObject>
    /**
     * Size for a given page.
     * @type number
     * @memberof IncidentsApilistIncidents
     */
    pageSize?: number
    /**
     * Specific offset to use as the beginning of the returned page.
     * @type number
     * @memberof IncidentsApilistIncidents
     */
    pageOffset?: number
}

export interface IncidentsApiUpdateIncidentRequest {
    /**
     * The UUID the incident.
     * @type string
     * @memberof IncidentsApiupdateIncident
     */
    incidentId: string
    /**
     * Incident Payload.
     * @type IncidentUpdateRequest
     * @memberof IncidentsApiupdateIncident
     */
    body: IncidentUpdateRequest
}


export class ObjectIncidentsApi {
    private api: ObservableIncidentsApi

    public constructor(configuration: Configuration, requestFactory?: IncidentsApiRequestFactory, responseProcessor?: IncidentsApiResponseProcessor) {
        this.api = new ObservableIncidentsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Create an incident.
     * Create an incident
     * @param param the request object
     */
    public createIncident(param: IncidentsApiCreateIncidentRequest, options?: Configuration): Promise<IncidentResponse> {
        return this.api.createIncident(param.body,  options).toPromise();
    }
	
    /**
     * Deletes an existing incident from the users organization.
     * Delete an existing incident
     * @param param the request object
     */
    public deleteIncident(param: IncidentsApiDeleteIncidentRequest, options?: Configuration): Promise<void> {
        return this.api.deleteIncident(param.incidentId,  options).toPromise();
    }
	
    /**
     * Get the details of an incident by `incident_id`.
     * Get the details of an incident
     * @param param the request object
     */
    public getIncident(param: IncidentsApiGetIncidentRequest, options?: Configuration): Promise<IncidentResponse> {
        return this.api.getIncident(param.incidentId, param.include,  options).toPromise();
    }
	
    /**
     * Get all incidents for the user's organization.
     * Get a list of incidents
     * @param param the request object
     */
    public listIncidents(param: IncidentsApiListIncidentsRequest, options?: Configuration): Promise<IncidentsResponse> {
        return this.api.listIncidents(param.include, param.pageSize, param.pageOffset,  options).toPromise();
    }
	
    /**
     * Updates an incident. Provide only the attributes that should be updated as this request is a partial update.
     * Update an existing incident
     * @param param the request object
     */
    public updateIncident(param: IncidentsApiUpdateIncidentRequest, options?: Configuration): Promise<IncidentResponse> {
        return this.api.updateIncident(param.incidentId, param.body,  options).toPromise();
    }
	

}




import { ObservableKeyManagementApi } from "./ObservableAPI";
import { KeyManagementApiRequestFactory, KeyManagementApiResponseProcessor} from "../apis/KeyManagementApi";

export interface KeyManagementApiCreateAPIKeyRequest {
    /**
     * 
     * @type APIKeyCreateRequest
     * @memberof KeyManagementApicreateAPIKey
     */
    body: APIKeyCreateRequest
}

export interface KeyManagementApiCreateCurrentUserApplicationKeyRequest {
    /**
     * 
     * @type ApplicationKeyCreateRequest
     * @memberof KeyManagementApicreateCurrentUserApplicationKey
     */
    body: ApplicationKeyCreateRequest
}

export interface KeyManagementApiDeleteAPIKeyRequest {
    /**
     * The ID of the API key.
     * @type string
     * @memberof KeyManagementApideleteAPIKey
     */
    apiKeyId: string
}

export interface KeyManagementApiDeleteApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApideleteApplicationKey
     */
    appKeyId: string
}

export interface KeyManagementApiDeleteCurrentUserApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApideleteCurrentUserApplicationKey
     */
    appKeyId: string
}

export interface KeyManagementApiGetAPIKeyRequest {
    /**
     * The ID of the API key.
     * @type string
     * @memberof KeyManagementApigetAPIKey
     */
    apiKeyId: string
    /**
     * Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     * @type string
     * @memberof KeyManagementApigetAPIKey
     */
    include?: string
}

export interface KeyManagementApiGetCurrentUserApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApigetCurrentUserApplicationKey
     */
    appKeyId: string
}

export interface KeyManagementApiListAPIKeysRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof KeyManagementApilistAPIKeys
     */
    pageSize?: number
    /**
     * Specific page number to return.
     * @type number
     * @memberof KeyManagementApilistAPIKeys
     */
    pageNumber?: number
    /**
     * API key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @type APIKeysSort
     * @memberof KeyManagementApilistAPIKeys
     */
    sort?: APIKeysSort
    /**
     * Filter API keys by the specified string.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filter?: string
    /**
     * Only include API keys created on or after the specified date.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filterCreatedAtStart?: string
    /**
     * Only include API keys created on or before the specified date.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filterCreatedAtEnd?: string
    /**
     * Only include API keys modified on or after the specified date.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filterModifiedAtStart?: string
    /**
     * Only include API keys modified on or before the specified date.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    filterModifiedAtEnd?: string
    /**
     * Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     * @type string
     * @memberof KeyManagementApilistAPIKeys
     */
    include?: string
}

export interface KeyManagementApiListApplicationKeysRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof KeyManagementApilistApplicationKeys
     */
    pageSize?: number
    /**
     * Specific page number to return.
     * @type number
     * @memberof KeyManagementApilistApplicationKeys
     */
    pageNumber?: number
    /**
     * Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @type ApplicationKeysSort
     * @memberof KeyManagementApilistApplicationKeys
     */
    sort?: ApplicationKeysSort
    /**
     * Filter application keys by the specified string.
     * @type string
     * @memberof KeyManagementApilistApplicationKeys
     */
    filter?: string
    /**
     * Only include application keys created on or after the specified date.
     * @type string
     * @memberof KeyManagementApilistApplicationKeys
     */
    filterCreatedAtStart?: string
    /**
     * Only include application keys created on or before the specified date.
     * @type string
     * @memberof KeyManagementApilistApplicationKeys
     */
    filterCreatedAtEnd?: string
}

export interface KeyManagementApiListCurrentUserApplicationKeysRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    pageSize?: number
    /**
     * Specific page number to return.
     * @type number
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    pageNumber?: number
    /**
     * Application key attribute used to sort results. Sort order is ascending by default. In order to specify a descending sort, prefix the attribute with a minus sign.
     * @type ApplicationKeysSort
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    sort?: ApplicationKeysSort
    /**
     * Filter application keys by the specified string.
     * @type string
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    filter?: string
    /**
     * Only include application keys created on or after the specified date.
     * @type string
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    filterCreatedAtStart?: string
    /**
     * Only include application keys created on or before the specified date.
     * @type string
     * @memberof KeyManagementApilistCurrentUserApplicationKeys
     */
    filterCreatedAtEnd?: string
}

export interface KeyManagementApiUpdateAPIKeyRequest {
    /**
     * The ID of the API key.
     * @type string
     * @memberof KeyManagementApiupdateAPIKey
     */
    apiKeyId: string
    /**
     * 
     * @type APIKeyUpdateRequest
     * @memberof KeyManagementApiupdateAPIKey
     */
    body: APIKeyUpdateRequest
}

export interface KeyManagementApiUpdateApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApiupdateApplicationKey
     */
    appKeyId: string
    /**
     * 
     * @type ApplicationKeyUpdateRequest
     * @memberof KeyManagementApiupdateApplicationKey
     */
    body: ApplicationKeyUpdateRequest
}

export interface KeyManagementApiUpdateCurrentUserApplicationKeyRequest {
    /**
     * The ID of the application key.
     * @type string
     * @memberof KeyManagementApiupdateCurrentUserApplicationKey
     */
    appKeyId: string
    /**
     * 
     * @type ApplicationKeyUpdateRequest
     * @memberof KeyManagementApiupdateCurrentUserApplicationKey
     */
    body: ApplicationKeyUpdateRequest
}


export class ObjectKeyManagementApi {
    private api: ObservableKeyManagementApi

    public constructor(configuration: Configuration, requestFactory?: KeyManagementApiRequestFactory, responseProcessor?: KeyManagementApiResponseProcessor) {
        this.api = new ObservableKeyManagementApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Create an API key.
     * Create an API key
     * @param param the request object
     */
    public createAPIKey(param: KeyManagementApiCreateAPIKeyRequest, options?: Configuration): Promise<APIKeyResponse> {
        return this.api.createAPIKey(param.body,  options).toPromise();
    }
	
    /**
     * Create an application key for current user
     * Create an application key for current user
     * @param param the request object
     */
    public createCurrentUserApplicationKey(param: KeyManagementApiCreateCurrentUserApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse> {
        return this.api.createCurrentUserApplicationKey(param.body,  options).toPromise();
    }
	
    /**
     * Delete an API key.
     * Delete an API key
     * @param param the request object
     */
    public deleteAPIKey(param: KeyManagementApiDeleteAPIKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAPIKey(param.apiKeyId,  options).toPromise();
    }
	
    /**
     * Delete an application key
     * Delete an application key
     * @param param the request object
     */
    public deleteApplicationKey(param: KeyManagementApiDeleteApplicationKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteApplicationKey(param.appKeyId,  options).toPromise();
    }
	
    /**
     * Delete an application key owned by current user
     * Delete an application key owned by current user
     * @param param the request object
     */
    public deleteCurrentUserApplicationKey(param: KeyManagementApiDeleteCurrentUserApplicationKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCurrentUserApplicationKey(param.appKeyId,  options).toPromise();
    }
	
    /**
     * Get an API key.
     * Get API key
     * @param param the request object
     */
    public getAPIKey(param: KeyManagementApiGetAPIKeyRequest, options?: Configuration): Promise<APIKeyResponse> {
        return this.api.getAPIKey(param.apiKeyId, param.include,  options).toPromise();
    }
	
    /**
     * Get an application key owned by current user
     * Get one application key owned by current user
     * @param param the request object
     */
    public getCurrentUserApplicationKey(param: KeyManagementApiGetCurrentUserApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse> {
        return this.api.getCurrentUserApplicationKey(param.appKeyId,  options).toPromise();
    }
	
    /**
     * List all API keys available for your account.
     * Get all API keys
     * @param param the request object
     */
    public listAPIKeys(param: KeyManagementApiListAPIKeysRequest, options?: Configuration): Promise<APIKeysResponse> {
        return this.api.listAPIKeys(param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd, param.filterModifiedAtStart, param.filterModifiedAtEnd, param.include,  options).toPromise();
    }
	
    /**
     * List all application keys available for your org
     * Get all application keys
     * @param param the request object
     */
    public listApplicationKeys(param: KeyManagementApiListApplicationKeysRequest, options?: Configuration): Promise<ListApplicationKeysResponse> {
        return this.api.listApplicationKeys(param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd,  options).toPromise();
    }
	
    /**
     * List all application keys available for current user
     * Get all application keys owned by current user
     * @param param the request object
     */
    public listCurrentUserApplicationKeys(param: KeyManagementApiListCurrentUserApplicationKeysRequest, options?: Configuration): Promise<ListApplicationKeysResponse> {
        return this.api.listCurrentUserApplicationKeys(param.pageSize, param.pageNumber, param.sort, param.filter, param.filterCreatedAtStart, param.filterCreatedAtEnd,  options).toPromise();
    }
	
    /**
     * Update an API key.
     * Edit an API key
     * @param param the request object
     */
    public updateAPIKey(param: KeyManagementApiUpdateAPIKeyRequest, options?: Configuration): Promise<APIKeyResponse> {
        return this.api.updateAPIKey(param.apiKeyId, param.body,  options).toPromise();
    }
	
    /**
     * Edit an application key
     * Edit an application key
     * @param param the request object
     */
    public updateApplicationKey(param: KeyManagementApiUpdateApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse> {
        return this.api.updateApplicationKey(param.appKeyId, param.body,  options).toPromise();
    }
	
    /**
     * Edit an application key owned by current user
     * Edit an application key owned by current user
     * @param param the request object
     */
    public updateCurrentUserApplicationKey(param: KeyManagementApiUpdateCurrentUserApplicationKeyRequest, options?: Configuration): Promise<ApplicationKeyResponse> {
        return this.api.updateCurrentUserApplicationKey(param.appKeyId, param.body,  options).toPromise();
    }
	

}




import { ObservableLogsApi } from "./ObservableAPI";
import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";

export interface LogsApiAggregateLogsRequest {
    /**
     * 
     * @type LogsAggregateRequest
     * @memberof LogsApiaggregateLogs
     */
    body: LogsAggregateRequest
}

export interface LogsApiListLogsRequest {
    /**
     * 
     * @type LogsListRequest
     * @memberof LogsApilistLogs
     */
    body?: LogsListRequest
}

export interface LogsApiListLogsGetRequest {
    /**
     * Search query following logs syntax.
     * @type string
     * @memberof LogsApilistLogsGet
     */
    filterQuery?: string
    /**
     * For customers with multiple indexes, the indexes to search Defaults to &#39;*&#39; which means all indexes
     * @type string
     * @memberof LogsApilistLogsGet
     */
    filterIndex?: string
    /**
     * Minimum timestamp for requested logs.
     * @type Date
     * @memberof LogsApilistLogsGet
     */
    filterFrom?: Date
    /**
     * Maximum timestamp for requested logs.
     * @type Date
     * @memberof LogsApilistLogsGet
     */
    filterTo?: Date
    /**
     * Order of logs in results.
     * @type LogsSort
     * @memberof LogsApilistLogsGet
     */
    sort?: LogsSort
    /**
     * List following results with a cursor provided in the previous query.
     * @type string
     * @memberof LogsApilistLogsGet
     */
    pageCursor?: string
    /**
     * Maximum number of logs in the response.
     * @type number
     * @memberof LogsApilistLogsGet
     */
    pageLimit?: number
}


export class ObjectLogsApi {
    private api: ObservableLogsApi

    public constructor(configuration: Configuration, requestFactory?: LogsApiRequestFactory, responseProcessor?: LogsApiResponseProcessor) {
        this.api = new ObservableLogsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
     * Aggregate events
     * @param param the request object
     */
    public aggregateLogs(param: LogsApiAggregateLogsRequest, options?: Configuration): Promise<LogsAggregateResponse> {
        return this.api.aggregateLogs(param.body,  options).toPromise();
    }
	
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to build complex logs filtering and search.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param param the request object
     */
    public listLogs(param: LogsApiListLogsRequest, options?: Configuration): Promise<LogsListResponse> {
        return this.api.listLogs(param.body,  options).toPromise();
    }
	
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to see your latest logs.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Get a list of logs
     * @param param the request object
     */
    public listLogsGet(param: LogsApiListLogsGetRequest, options?: Configuration): Promise<LogsListResponse> {
        return this.api.listLogsGet(param.filterQuery, param.filterIndex, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit,  options).toPromise();
    }
	

}




import { ObservableLogsArchivesApi } from "./ObservableAPI";
import { LogsArchivesApiRequestFactory, LogsArchivesApiResponseProcessor} from "../apis/LogsArchivesApi";

export interface LogsArchivesApiAddReadRoleToArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApiaddReadRoleToArchive
     */
    archiveId: string
    /**
     * 
     * @type RelationshipToRole
     * @memberof LogsArchivesApiaddReadRoleToArchive
     */
    body: RelationshipToRole
}

export interface LogsArchivesApiCreateLogsArchiveRequest {
    /**
     * The definition of the new archive.
     * @type LogsArchiveCreateRequest
     * @memberof LogsArchivesApicreateLogsArchive
     */
    body: LogsArchiveCreateRequest
}

export interface LogsArchivesApiDeleteLogsArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApideleteLogsArchive
     */
    archiveId: string
}

export interface LogsArchivesApiGetLogsArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApigetLogsArchive
     */
    archiveId: string
}

export interface LogsArchivesApiGetLogsArchiveOrderRequest {
}

export interface LogsArchivesApiListArchiveReadRolesRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApilistArchiveReadRoles
     */
    archiveId: string
}

export interface LogsArchivesApiListLogsArchivesRequest {
}

export interface LogsArchivesApiRemoveRoleFromArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApiremoveRoleFromArchive
     */
    archiveId: string
    /**
     * 
     * @type RelationshipToRole
     * @memberof LogsArchivesApiremoveRoleFromArchive
     */
    body: RelationshipToRole
}

export interface LogsArchivesApiUpdateLogsArchiveRequest {
    /**
     * The ID of the archive.
     * @type string
     * @memberof LogsArchivesApiupdateLogsArchive
     */
    archiveId: string
    /**
     * New definition of the archive.
     * @type LogsArchiveCreateRequest
     * @memberof LogsArchivesApiupdateLogsArchive
     */
    body: LogsArchiveCreateRequest
}

export interface LogsArchivesApiUpdateLogsArchiveOrderRequest {
    /**
     * An object containing the new ordered list of archive IDs.
     * @type LogsArchiveOrder
     * @memberof LogsArchivesApiupdateLogsArchiveOrder
     */
    body: LogsArchiveOrder
}


export class ObjectLogsArchivesApi {
    private api: ObservableLogsArchivesApi

    public constructor(configuration: Configuration, requestFactory?: LogsArchivesApiRequestFactory, responseProcessor?: LogsArchivesApiResponseProcessor) {
        this.api = new ObservableLogsArchivesApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Grant role to an archive
     * @param param the request object
     */
    public addReadRoleToArchive(param: LogsArchivesApiAddReadRoleToArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.addReadRoleToArchive(param.archiveId, param.body,  options).toPromise();
    }
	
    /**
     * Create an archive in your organization.
     * Create an archive
     * @param param the request object
     */
    public createLogsArchive(param: LogsArchivesApiCreateLogsArchiveRequest, options?: Configuration): Promise<LogsArchive> {
        return this.api.createLogsArchive(param.body,  options).toPromise();
    }
	
    /**
     * Delete a given archive from your organization.
     * Delete an archive
     * @param param the request object
     */
    public deleteLogsArchive(param: LogsArchivesApiDeleteLogsArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.deleteLogsArchive(param.archiveId,  options).toPromise();
    }
	
    /**
     * Get a specific archive from your organization.
     * Get an archive
     * @param param the request object
     */
    public getLogsArchive(param: LogsArchivesApiGetLogsArchiveRequest, options?: Configuration): Promise<LogsArchive> {
        return this.api.getLogsArchive(param.archiveId,  options).toPromise();
    }
	
    /**
     * Get the current order of your archives. This endpoint takes no JSON arguments.
     * Get archive order
     * @param param the request object
     */
    public getLogsArchiveOrder(param: LogsArchivesApiGetLogsArchiveOrderRequest, options?: Configuration): Promise<LogsArchiveOrder> {
        return this.api.getLogsArchiveOrder( options).toPromise();
    }
	
    /**
     * Returns all read roles a given archive is restricted to.
     * List read roles for an archive
     * @param param the request object
     */
    public listArchiveReadRoles(param: LogsArchivesApiListArchiveReadRolesRequest, options?: Configuration): Promise<RolesResponse> {
        return this.api.listArchiveReadRoles(param.archiveId,  options).toPromise();
    }
	
    /**
     * Get the list of configured logs archives with their definitions.
     * Get all archives
     * @param param the request object
     */
    public listLogsArchives(param: LogsArchivesApiListLogsArchivesRequest, options?: Configuration): Promise<LogsArchives> {
        return this.api.listLogsArchives( options).toPromise();
    }
	
    /**
     * Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Revoke role from an archive
     * @param param the request object
     */
    public removeRoleFromArchive(param: LogsArchivesApiRemoveRoleFromArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.removeRoleFromArchive(param.archiveId, param.body,  options).toPromise();
    }
	
    /**
     * Update a given archive configuration.  **Note**: Using this method updates your archive configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an archive
     * @param param the request object
     */
    public updateLogsArchive(param: LogsArchivesApiUpdateLogsArchiveRequest, options?: Configuration): Promise<LogsArchive> {
        return this.api.updateLogsArchive(param.archiveId, param.body,  options).toPromise();
    }
	
    /**
     * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change the structure and content of the data processed by other archives.  **Note**: Using the `PUT` method updates your archive's order by replacing the current order with the new one.
     * Update archive order
     * @param param the request object
     */
    public updateLogsArchiveOrder(param: LogsArchivesApiUpdateLogsArchiveOrderRequest, options?: Configuration): Promise<LogsArchiveOrder> {
        return this.api.updateLogsArchiveOrder(param.body,  options).toPromise();
    }
	

}




import { ObservableLogsMetricsApi } from "./ObservableAPI";
import { LogsMetricsApiRequestFactory, LogsMetricsApiResponseProcessor} from "../apis/LogsMetricsApi";

export interface LogsMetricsApiCreateLogsMetricRequest {
    /**
     * The definition of the new log-based metric.
     * @type LogsMetricCreateRequest
     * @memberof LogsMetricsApicreateLogsMetric
     */
    body: LogsMetricCreateRequest
}

export interface LogsMetricsApiDeleteLogsMetricRequest {
    /**
     * The name of the log-based metric.
     * @type string
     * @memberof LogsMetricsApideleteLogsMetric
     */
    metricId: string
}

export interface LogsMetricsApiGetLogsMetricRequest {
    /**
     * The name of the log-based metric.
     * @type string
     * @memberof LogsMetricsApigetLogsMetric
     */
    metricId: string
}

export interface LogsMetricsApiListLogsMetricsRequest {
}

export interface LogsMetricsApiUpdateLogsMetricRequest {
    /**
     * The name of the log-based metric.
     * @type string
     * @memberof LogsMetricsApiupdateLogsMetric
     */
    metricId: string
    /**
     * New definition of the log-based metric.
     * @type LogsMetricUpdateRequest
     * @memberof LogsMetricsApiupdateLogsMetric
     */
    body: LogsMetricUpdateRequest
}


export class ObjectLogsMetricsApi {
    private api: ObservableLogsMetricsApi

    public constructor(configuration: Configuration, requestFactory?: LogsMetricsApiRequestFactory, responseProcessor?: LogsMetricsApiResponseProcessor) {
        this.api = new ObservableLogsMetricsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
     * Create a log-based metric
     * @param param the request object
     */
    public createLogsMetric(param: LogsMetricsApiCreateLogsMetricRequest, options?: Configuration): Promise<LogsMetricResponse> {
        return this.api.createLogsMetric(param.body,  options).toPromise();
    }
	
    /**
     * Delete a specific log-based metric from your organization.
     * Delete a log-based metric
     * @param param the request object
     */
    public deleteLogsMetric(param: LogsMetricsApiDeleteLogsMetricRequest, options?: Configuration): Promise<void> {
        return this.api.deleteLogsMetric(param.metricId,  options).toPromise();
    }
	
    /**
     * Get a specific log-based metric from your organization.
     * Get a log-based metric
     * @param param the request object
     */
    public getLogsMetric(param: LogsMetricsApiGetLogsMetricRequest, options?: Configuration): Promise<LogsMetricResponse> {
        return this.api.getLogsMetric(param.metricId,  options).toPromise();
    }
	
    /**
     * Get the list of configured log-based metrics with their definitions.
     * Get all log-based metrics
     * @param param the request object
     */
    public listLogsMetrics(param: LogsMetricsApiListLogsMetricsRequest, options?: Configuration): Promise<LogsMetricsResponse> {
        return this.api.listLogsMetrics( options).toPromise();
    }
	
    /**
     * Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.
     * Update a log-based metric
     * @param param the request object
     */
    public updateLogsMetric(param: LogsMetricsApiUpdateLogsMetricRequest, options?: Configuration): Promise<LogsMetricResponse> {
        return this.api.updateLogsMetric(param.metricId, param.body,  options).toPromise();
    }
	

}




import { ObservableMetricsApi } from "./ObservableAPI";
import { MetricsApiRequestFactory, MetricsApiResponseProcessor} from "../apis/MetricsApi";

export interface MetricsApiCreateTagConfigurationRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApicreateTagConfiguration
     */
    metricName: string
    /**
     * 
     * @type MetricTagConfigurationCreateRequest
     * @memberof MetricsApicreateTagConfiguration
     */
    body: MetricTagConfigurationCreateRequest
}

export interface MetricsApiDeleteTagConfigurationRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApideleteTagConfiguration
     */
    metricName: string
}

export interface MetricsApiListTagConfigurationByNameRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApilistTagConfigurationByName
     */
    metricName: string
}

export interface MetricsApiListTagConfigurationsRequest {
    /**
     * Filter metrics that have configured tags.
     * @type boolean
     * @memberof MetricsApilistTagConfigurations
     */
    filterConfigured?: boolean
    /**
     * Filter tag configurations by configured tags.
     * @type string
     * @memberof MetricsApilistTagConfigurations
     */
    filterTagsConfigured?: string
    /**
     * Filter tag configurations by metric type.
     * @type MetricTagConfigurationMetricTypes
     * @memberof MetricsApilistTagConfigurations
     */
    filterMetricType?: MetricTagConfigurationMetricTypes
    /**
     * Filter distributions with additional percentile aggregations enabled or disabled.
     * @type boolean
     * @memberof MetricsApilistTagConfigurations
     */
    filterIncludePercentiles?: boolean
}

export interface MetricsApiUpdateTagConfigurationRequest {
    /**
     * The name of the metric.
     * @type string
     * @memberof MetricsApiupdateTagConfiguration
     */
    metricName: string
    /**
     * 
     * @type MetricTagConfigurationUpdateRequest
     * @memberof MetricsApiupdateTagConfiguration
     */
    body: MetricTagConfigurationUpdateRequest
}


export class ObjectMetricsApi {
    private api: ObservableMetricsApi

    public constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor) {
        this.api = new ObservableMetricsApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Create and define a list of queryable tag keys for a count/gauge/rate/distribution metric. Optionally, include percentile aggregations on any distribution metric. Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
     * Create a Tag Configuration
     * @param param the request object
     */
    public createTagConfiguration(param: MetricsApiCreateTagConfigurationRequest, options?: Configuration): Promise<MetricTagConfigurationResponse> {
        return this.api.createTagConfiguration(param.metricName, param.body,  options).toPromise();
    }
	
    /**
     * Deletes a metric's tag configuration. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Delete a Tag Configuration
     * @param param the request object
     */
    public deleteTagConfiguration(param: MetricsApiDeleteTagConfigurationRequest, options?: Configuration): Promise<void> {
        return this.api.deleteTagConfiguration(param.metricName,  options).toPromise();
    }
	
    /**
     * Returns the tag configuration for the given metric name.
     * List Tag Configuration by Name
     * @param param the request object
     */
    public listTagConfigurationByName(param: MetricsApiListTagConfigurationByNameRequest, options?: Configuration): Promise<MetricTagConfigurationResponse> {
        return this.api.listTagConfigurationByName(param.metricName,  options).toPromise();
    }
	
    /**
     * Returns all configured count/gauge/rate/distribution metric names (with additional filters if specified).
     * List Tag Configurations
     * @param param the request object
     */
    public listTagConfigurations(param: MetricsApiListTagConfigurationsRequest, options?: Configuration): Promise<MetricsAndMetricTagConfigurationsResponse> {
        return this.api.listTagConfigurations(param.filterConfigured, param.filterTagsConfigured, param.filterMetricType, param.filterIncludePercentiles,  options).toPromise();
    }
	
    /**
     * Update the tag configuration of a metric or percentile aggregations of a distribution metric. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Update a Tag Configuration
     * @param param the request object
     */
    public updateTagConfiguration(param: MetricsApiUpdateTagConfigurationRequest, options?: Configuration): Promise<MetricTagConfigurationResponse> {
        return this.api.updateTagConfiguration(param.metricName, param.body,  options).toPromise();
    }
	

}




import { ObservableProcessesApi } from "./ObservableAPI";
import { ProcessesApiRequestFactory, ProcessesApiResponseProcessor} from "../apis/ProcessesApi";

export interface ProcessesApiListProcessesRequest {
    /**
     * String to search processes by.
     * @type string
     * @memberof ProcessesApilistProcesses
     */
    search?: string
    /**
     * Comma-separated list of tags to filter processes by.
     * @type string
     * @memberof ProcessesApilistProcesses
     */
    tags?: string
    /**
     * Unix timestamp (number of seconds since epoch) of the start of the query window. If not provided, the start of the query window will be 15 minutes before the &#x60;to&#x60; timestamp. If neither &#x60;from&#x60; nor &#x60;to&#x60; are provided, the query window will be &#x60;[now - 15m, now]&#x60;.
     * @type number
     * @memberof ProcessesApilistProcesses
     */
    from?: number
    /**
     * Unix timestamp (number of seconds since epoch) of the end of the query window. If not provided, the end of the query window will be 15 minutes after the &#x60;from&#x60; timestamp. If neither &#x60;from&#x60; nor &#x60;to&#x60; are provided, the query window will be &#x60;[now - 15m, now]&#x60;.
     * @type number
     * @memberof ProcessesApilistProcesses
     */
    to?: number
    /**
     * Maximum number of results returned.
     * @type number
     * @memberof ProcessesApilistProcesses
     */
    pageLimit?: number
    /**
     * String to query the next page of results. This key is provided with each valid response from the API in &#x60;meta.page.after&#x60;.
     * @type string
     * @memberof ProcessesApilistProcesses
     */
    pageCursor?: string
}


export class ObjectProcessesApi {
    private api: ObservableProcessesApi

    public constructor(configuration: Configuration, requestFactory?: ProcessesApiRequestFactory, responseProcessor?: ProcessesApiResponseProcessor) {
        this.api = new ObservableProcessesApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Get all processes for your organization.
     * Get all processes
     * @param param the request object
     */
    public listProcesses(param: ProcessesApiListProcessesRequest, options?: Configuration): Promise<ProcessSummariesResponse> {
        return this.api.listProcesses(param.search, param.tags, param.from, param.to, param.pageLimit, param.pageCursor,  options).toPromise();
    }
	

}




import { ObservableRolesApi } from "./ObservableAPI";
import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";

export interface RolesApiAddPermissionToRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiaddPermissionToRole
     */
    roleId: string
    /**
     * 
     * @type RelationshipToPermission
     * @memberof RolesApiaddPermissionToRole
     */
    body: RelationshipToPermission
}

export interface RolesApiAddUserToRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiaddUserToRole
     */
    roleId: string
    /**
     * 
     * @type RelationshipToUser
     * @memberof RolesApiaddUserToRole
     */
    body: RelationshipToUser
}

export interface RolesApiCreateRoleRequest {
    /**
     * 
     * @type RoleCreateRequest
     * @memberof RolesApicreateRole
     */
    body: RoleCreateRequest
}

export interface RolesApiDeleteRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApideleteRole
     */
    roleId: string
}

export interface RolesApiGetRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApigetRole
     */
    roleId: string
}

export interface RolesApiListPermissionsRequest {
}

export interface RolesApiListRolePermissionsRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApilistRolePermissions
     */
    roleId: string
}

export interface RolesApiListRoleUsersRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApilistRoleUsers
     */
    roleId: string
    /**
     * Size for a given page.
     * @type number
     * @memberof RolesApilistRoleUsers
     */
    pageSize?: number
    /**
     * Specific page number to return.
     * @type number
     * @memberof RolesApilistRoleUsers
     */
    pageNumber?: number
    /**
     * User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;email&#x60;, &#x60;status&#x60;.
     * @type string
     * @memberof RolesApilistRoleUsers
     */
    sort?: string
    /**
     * Filter all users by the given string. Defaults to no filtering.
     * @type string
     * @memberof RolesApilistRoleUsers
     */
    filter?: string
}

export interface RolesApiListRolesRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof RolesApilistRoles
     */
    pageSize?: number
    /**
     * Specific page number to return.
     * @type number
     * @memberof RolesApilistRoles
     */
    pageNumber?: number
    /**
     * Sort roles depending on the given field. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example: &#x60;sort&#x3D;-name&#x60;.
     * @type RolesSort
     * @memberof RolesApilistRoles
     */
    sort?: RolesSort
    /**
     * Filter all roles by the given string.
     * @type string
     * @memberof RolesApilistRoles
     */
    filter?: string
}

export interface RolesApiRemovePermissionFromRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiremovePermissionFromRole
     */
    roleId: string
    /**
     * 
     * @type RelationshipToPermission
     * @memberof RolesApiremovePermissionFromRole
     */
    body: RelationshipToPermission
}

export interface RolesApiRemoveUserFromRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiremoveUserFromRole
     */
    roleId: string
    /**
     * 
     * @type RelationshipToUser
     * @memberof RolesApiremoveUserFromRole
     */
    body: RelationshipToUser
}

export interface RolesApiUpdateRoleRequest {
    /**
     * The ID of the role.
     * @type string
     * @memberof RolesApiupdateRole
     */
    roleId: string
    /**
     * 
     * @type RoleUpdateRequest
     * @memberof RolesApiupdateRole
     */
    body: RoleUpdateRequest
}


export class ObjectRolesApi {
    private api: ObservableRolesApi

    public constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Adds a permission to a role.
     * Grant permission to a role
     * @param param the request object
     */
    public addPermissionToRole(param: RolesApiAddPermissionToRoleRequest, options?: Configuration): Promise<PermissionsResponse> {
        return this.api.addPermissionToRole(param.roleId, param.body,  options).toPromise();
    }
	
    /**
     * Adds a user to a role.
     * Add a user to a role
     * @param param the request object
     */
    public addUserToRole(param: RolesApiAddUserToRoleRequest, options?: Configuration): Promise<UsersResponse> {
        return this.api.addUserToRole(param.roleId, param.body,  options).toPromise();
    }
	
    /**
     * Create a new role for your organization.
     * Create role
     * @param param the request object
     */
    public createRole(param: RolesApiCreateRoleRequest, options?: Configuration): Promise<RoleCreateResponse> {
        return this.api.createRole(param.body,  options).toPromise();
    }
	
    /**
     * Disables a role.
     * Delete role
     * @param param the request object
     */
    public deleteRole(param: RolesApiDeleteRoleRequest, options?: Configuration): Promise<void> {
        return this.api.deleteRole(param.roleId,  options).toPromise();
    }
	
    /**
     * Get a role in the organization specified by the role’s `role_id`.
     * Get a role
     * @param param the request object
     */
    public getRole(param: RolesApiGetRoleRequest, options?: Configuration): Promise<RoleResponse> {
        return this.api.getRole(param.roleId,  options).toPromise();
    }
	
    /**
     * Returns a list of all permissions, including name, description, and ID.
     * List permissions
     * @param param the request object
     */
    public listPermissions(param: RolesApiListPermissionsRequest, options?: Configuration): Promise<PermissionsResponse> {
        return this.api.listPermissions( options).toPromise();
    }
	
    /**
     * Returns a list of all permissions for a single role.
     * List permissions for a role
     * @param param the request object
     */
    public listRolePermissions(param: RolesApiListRolePermissionsRequest, options?: Configuration): Promise<PermissionsResponse> {
        return this.api.listRolePermissions(param.roleId,  options).toPromise();
    }
	
    /**
     * Gets all users of a role.
     * Get all users of a role
     * @param param the request object
     */
    public listRoleUsers(param: RolesApiListRoleUsersRequest, options?: Configuration): Promise<UsersResponse> {
        return this.api.listRoleUsers(param.roleId, param.pageSize, param.pageNumber, param.sort, param.filter,  options).toPromise();
    }
	
    /**
     * Returns all roles, including their names and IDs.
     * List roles
     * @param param the request object
     */
    public listRoles(param: RolesApiListRolesRequest, options?: Configuration): Promise<RolesResponse> {
        return this.api.listRoles(param.pageSize, param.pageNumber, param.sort, param.filter,  options).toPromise();
    }
	
    /**
     * Removes a permission from a role.
     * Revoke permission
     * @param param the request object
     */
    public removePermissionFromRole(param: RolesApiRemovePermissionFromRoleRequest, options?: Configuration): Promise<PermissionsResponse> {
        return this.api.removePermissionFromRole(param.roleId, param.body,  options).toPromise();
    }
	
    /**
     * Removes a user from a role.
     * Remove a user from a role
     * @param param the request object
     */
    public removeUserFromRole(param: RolesApiRemoveUserFromRoleRequest, options?: Configuration): Promise<UsersResponse> {
        return this.api.removeUserFromRole(param.roleId, param.body,  options).toPromise();
    }
	
    /**
     * Edit a role. Can only be used with application keys belonging to administrators.
     * Update a role
     * @param param the request object
     */
    public updateRole(param: RolesApiUpdateRoleRequest, options?: Configuration): Promise<RoleUpdateResponse> {
        return this.api.updateRole(param.roleId, param.body,  options).toPromise();
    }
	

}




import { ObservableSecurityMonitoringApi } from "./ObservableAPI";
import { SecurityMonitoringApiRequestFactory, SecurityMonitoringApiResponseProcessor} from "../apis/SecurityMonitoringApi";

export interface SecurityMonitoringApiCreateSecurityMonitoringRuleRequest {
    /**
     * 
     * @type SecurityMonitoringRuleCreatePayload
     * @memberof SecurityMonitoringApicreateSecurityMonitoringRule
     */
    body: SecurityMonitoringRuleCreatePayload
}

export interface SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     * @memberof SecurityMonitoringApideleteSecurityMonitoringRule
     */
    ruleId: string
}

export interface SecurityMonitoringApiGetSecurityMonitoringRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     * @memberof SecurityMonitoringApigetSecurityMonitoringRule
     */
    ruleId: string
}

export interface SecurityMonitoringApiListSecurityMonitoringRulesRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof SecurityMonitoringApilistSecurityMonitoringRules
     */
    pageSize?: number
    /**
     * Specific page number to return.
     * @type number
     * @memberof SecurityMonitoringApilistSecurityMonitoringRules
     */
    pageNumber?: number
}

export interface SecurityMonitoringApiListSecurityMonitoringSignalsRequest {
    /**
     * The search query for security signals.
     * @type string
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    filterQuery?: string
    /**
     * The minimum timestamp for requested security signals.
     * @type Date
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    filterFrom?: Date
    /**
     * The maximum timestamp for requested security signals.
     * @type Date
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    filterTo?: Date
    /**
     * The order of the security signals in results.
     * @type SecurityMonitoringSignalsSort
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    sort?: SecurityMonitoringSignalsSort
    /**
     * A list of results using the cursor provided in the previous query.
     * @type string
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    pageCursor?: string
    /**
     * The maximum number of security signals in the response.
     * @type number
     * @memberof SecurityMonitoringApilistSecurityMonitoringSignals
     */
    pageLimit?: number
}

export interface SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest {
    /**
     * 
     * @type SecurityMonitoringSignalListRequest
     * @memberof SecurityMonitoringApisearchSecurityMonitoringSignals
     */
    body?: SecurityMonitoringSignalListRequest
}

export interface SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest {
    /**
     * The ID of the rule.
     * @type string
     * @memberof SecurityMonitoringApiupdateSecurityMonitoringRule
     */
    ruleId: string
    /**
     * 
     * @type SecurityMonitoringRuleUpdatePayload
     * @memberof SecurityMonitoringApiupdateSecurityMonitoringRule
     */
    body: SecurityMonitoringRuleUpdatePayload
}


export class ObjectSecurityMonitoringApi {
    private api: ObservableSecurityMonitoringApi

    public constructor(configuration: Configuration, requestFactory?: SecurityMonitoringApiRequestFactory, responseProcessor?: SecurityMonitoringApiResponseProcessor) {
        this.api = new ObservableSecurityMonitoringApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Create a detection rule.
     * Create a detection rule
     * @param param the request object
     */
    public createSecurityMonitoringRule(param: SecurityMonitoringApiCreateSecurityMonitoringRuleRequest, options?: Configuration): Promise<SecurityMonitoringRuleResponse> {
        return this.api.createSecurityMonitoringRule(param.body,  options).toPromise();
    }
	
    /**
     * Delete an existing rule. Default rules cannot be deleted.
     * Delete an existing rule
     * @param param the request object
     */
    public deleteSecurityMonitoringRule(param: SecurityMonitoringApiDeleteSecurityMonitoringRuleRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSecurityMonitoringRule(param.ruleId,  options).toPromise();
    }
	
    /**
     * Get a rule's details.
     * Get a rule's details
     * @param param the request object
     */
    public getSecurityMonitoringRule(param: SecurityMonitoringApiGetSecurityMonitoringRuleRequest, options?: Configuration): Promise<SecurityMonitoringRuleResponse> {
        return this.api.getSecurityMonitoringRule(param.ruleId,  options).toPromise();
    }
	
    /**
     * List rules.
     * List rules
     * @param param the request object
     */
    public listSecurityMonitoringRules(param: SecurityMonitoringApiListSecurityMonitoringRulesRequest, options?: Configuration): Promise<SecurityMonitoringListRulesResponse> {
        return this.api.listSecurityMonitoringRules(param.pageSize, param.pageNumber,  options).toPromise();
    }
	
    /**
     * The list endpoint returns security signals that match a search query. Both this endpoint and the POST endpoint can be used interchangeably when listing security signals.
     * Get a quick list of security signals
     * @param param the request object
     */
    public listSecurityMonitoringSignals(param: SecurityMonitoringApiListSecurityMonitoringSignalsRequest, options?: Configuration): Promise<SecurityMonitoringSignalsListResponse> {
        return this.api.listSecurityMonitoringSignals(param.filterQuery, param.filterFrom, param.filterTo, param.sort, param.pageCursor, param.pageLimit,  options).toPromise();
    }
	
    /**
     * Returns security signals that match a search query. Both this endpoint and the GET endpoint can be used interchangeably for listing security signals.
     * Get a list of security signals
     * @param param the request object
     */
    public searchSecurityMonitoringSignals(param: SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest, options?: Configuration): Promise<SecurityMonitoringSignalsListResponse> {
        return this.api.searchSecurityMonitoringSignals(param.body,  options).toPromise();
    }
	
    /**
     * Update an existing rule. When updating `cases`, `queries` or `options`, the whole field must be included. For example, when modifying a query all queries must be included. Default rules can only be updated to be enabled and to change notifications.
     * Update an existing rule
     * @param param the request object
     */
    public updateSecurityMonitoringRule(param: SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest, options?: Configuration): Promise<SecurityMonitoringRuleResponse> {
        return this.api.updateSecurityMonitoringRule(param.ruleId, param.body,  options).toPromise();
    }
	

}




import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiCreateUserRequest {
    /**
     * 
     * @type UserCreateRequest
     * @memberof UsersApicreateUser
     */
    body: UserCreateRequest
}

export interface UsersApiDisableUserRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApidisableUser
     */
    userId: string
}

export interface UsersApiGetInvitationRequest {
    /**
     * The UUID of the user invitation.
     * @type string
     * @memberof UsersApigetInvitation
     */
    userInvitationUuid: string
}

export interface UsersApiGetUserRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApigetUser
     */
    userId: string
}

export interface UsersApiListUserOrganizationsRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApilistUserOrganizations
     */
    userId: string
}

export interface UsersApiListUserPermissionsRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApilistUserPermissions
     */
    userId: string
}

export interface UsersApiListUsersRequest {
    /**
     * Size for a given page.
     * @type number
     * @memberof UsersApilistUsers
     */
    pageSize?: number
    /**
     * Specific page number to return.
     * @type number
     * @memberof UsersApilistUsers
     */
    pageNumber?: number
    /**
     * User attribute to order results by. Sort order is ascending by default. Sort order is descending if the field is prefixed by a negative sign, for example &#x60;sort&#x3D;-name&#x60;. Options: &#x60;name&#x60;, &#x60;modified_at&#x60;, &#x60;user_count&#x60;.
     * @type string
     * @memberof UsersApilistUsers
     */
    sort?: string
    /**
     * Direction of sort. Options: &#x60;asc&#x60;, &#x60;desc&#x60;.
     * @type QuerySortOrder
     * @memberof UsersApilistUsers
     */
    sortDir?: QuerySortOrder
    /**
     * Filter all users by the given string. Defaults to no filtering.
     * @type string
     * @memberof UsersApilistUsers
     */
    filter?: string
    /**
     * Filter on status attribute. Comma separated list, with possible values &#x60;Active&#x60;, &#x60;Pending&#x60;, and &#x60;Disabled&#x60;. Defaults to no filtering.
     * @type string
     * @memberof UsersApilistUsers
     */
    filterStatus?: string
}

export interface UsersApiSendInvitationsRequest {
    /**
     * 
     * @type UserInvitationsRequest
     * @memberof UsersApisendInvitations
     */
    body: UserInvitationsRequest
}

export interface UsersApiUpdateUserRequest {
    /**
     * The ID of the user.
     * @type string
     * @memberof UsersApiupdateUser
     */
    userId: string
    /**
     * 
     * @type UserUpdateRequest
     * @memberof UsersApiupdateUser
     */
    body: UserUpdateRequest
}


export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
	}

    /**
     * Create a user for your organization.
     * Create a user
     * @param param the request object
     */
    public createUser(param: UsersApiCreateUserRequest, options?: Configuration): Promise<UserResponse> {
        return this.api.createUser(param.body,  options).toPromise();
    }
	
    /**
     * Disable a user. Can only be used with an application key belonging to an administrator user.
     * Disable a user
     * @param param the request object
     */
    public disableUser(param: UsersApiDisableUserRequest, options?: Configuration): Promise<void> {
        return this.api.disableUser(param.userId,  options).toPromise();
    }
	
    /**
     * Returns a single user invitation by its UUID.
     * Get a user invitation
     * @param param the request object
     */
    public getInvitation(param: UsersApiGetInvitationRequest, options?: Configuration): Promise<UserInvitationResponse> {
        return this.api.getInvitation(param.userInvitationUuid,  options).toPromise();
    }
	
    /**
     * Get a user in the organization specified by the user’s `user_id`.
     * Get user details
     * @param param the request object
     */
    public getUser(param: UsersApiGetUserRequest, options?: Configuration): Promise<UserResponse> {
        return this.api.getUser(param.userId,  options).toPromise();
    }
	
    /**
     * Get a user organization. Returns the user information and all organizations joined by this user.
     * Get a user organization
     * @param param the request object
     */
    public listUserOrganizations(param: UsersApiListUserOrganizationsRequest, options?: Configuration): Promise<UserResponse> {
        return this.api.listUserOrganizations(param.userId,  options).toPromise();
    }
	
    /**
     * Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.
     * Get a user permissions
     * @param param the request object
     */
    public listUserPermissions(param: UsersApiListUserPermissionsRequest, options?: Configuration): Promise<PermissionsResponse> {
        return this.api.listUserPermissions(param.userId,  options).toPromise();
    }
	
    /**
     * Get the list of all users in the organization. This list includes all users even if they are deactivated or unverified.
     * List all users
     * @param param the request object
     */
    public listUsers(param: UsersApiListUsersRequest, options?: Configuration): Promise<UsersResponse> {
        return this.api.listUsers(param.pageSize, param.pageNumber, param.sort, param.sortDir, param.filter, param.filterStatus,  options).toPromise();
    }
	
    /**
     * Sends emails to one or more users inviting them to join the organization.
     * Send invitation emails
     * @param param the request object
     */
    public sendInvitations(param: UsersApiSendInvitationsRequest, options?: Configuration): Promise<UserInvitationsResponse> {
        return this.api.sendInvitations(param.body,  options).toPromise();
    }
	
    /**
     * Edit a user. Can only be used with an application key belonging to an administrator user.
     * Update a user
     * @param param the request object
     */
    public updateUser(param: UsersApiUpdateUserRequest, options?: Configuration): Promise<UserResponse> {
        return this.api.updateUser(param.userId, param.body,  options).toPromise();
    }
	

}



