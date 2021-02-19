import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from as from_ } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';

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

import { DashboardListsApiRequestFactory, DashboardListsApiResponseProcessor} from "../apis/DashboardListsApi";
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
        this.requestFactory = requestFactory || new DashboardListsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DashboardListsApiResponseProcessor();
    }

    /**
     * Add dashboards to an existing dashboard list.
     * Add Items to a Dashboard List
     * @param dashboardListId ID of the dashboard list to add items to.
     * @param body Dashboards to add to the dashboard list.
     */
    public createDashboardListItems(dashboardListId: number, body: DashboardListAddItemsRequest, options?: Configuration): Observable<DashboardListAddItemsResponse> {
    	const requestContextPromise = this.requestFactory.createDashboardListItems(dashboardListId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDashboardListItems(rsp)));
	    	}));
    }
	
    /**
     * Delete dashboards from an existing dashboard list.
     * Delete items from a dashboard list
     * @param dashboardListId ID of the dashboard list to delete items from.
     * @param body Dashboards to delete from the dashboard list.
     */
    public deleteDashboardListItems(dashboardListId: number, body: DashboardListDeleteItemsRequest, options?: Configuration): Observable<DashboardListDeleteItemsResponse> {
    	const requestContextPromise = this.requestFactory.deleteDashboardListItems(dashboardListId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDashboardListItems(rsp)));
	    	}));
    }
	
    /**
     * Fetch the dashboard list’s dashboard definitions.
     * Get items of a Dashboard List
     * @param dashboardListId ID of the dashboard list to get items from.
     */
    public getDashboardListItems(dashboardListId: number, options?: Configuration): Observable<DashboardListItems> {
    	const requestContextPromise = this.requestFactory.getDashboardListItems(dashboardListId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDashboardListItems(rsp)));
	    	}));
    }
	
    /**
     * Update dashboards of an existing dashboard list.
     * Update items of a dashboard list
     * @param dashboardListId ID of the dashboard list to update items from.
     * @param body New dashboards of the dashboard list.
     */
    public updateDashboardListItems(dashboardListId: number, body: DashboardListUpdateItemsRequest, options?: Configuration): Observable<DashboardListUpdateItemsResponse> {
    	const requestContextPromise = this.requestFactory.updateDashboardListItems(dashboardListId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDashboardListItems(rsp)));
	    	}));
    }
	

}




import { IncidentServicesApiRequestFactory, IncidentServicesApiResponseProcessor} from "../apis/IncidentServicesApi";
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
        this.requestFactory = requestFactory || new IncidentServicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IncidentServicesApiResponseProcessor();
    }

    /**
     * Creates a new incident service.
     * Create a new incident service
     * @param body Incident Service Payload.
     */
    public createIncidentService(body: IncidentServiceCreateRequest, options?: Configuration): Observable<IncidentServiceResponse> {
    	const requestContextPromise = this.requestFactory.createIncidentService(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createIncidentService(rsp)));
	    	}));
    }
	
    /**
     * Deletes an existing incident service.
     * Delete an existing incident service
     * @param serviceId The ID of the incident service.
     */
    public deleteIncidentService(serviceId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteIncidentService(serviceId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteIncidentService(rsp)));
	    	}));
    }
	
    /**
     * Get details of an incident service. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get details of an incident service
     * @param serviceId The ID of the incident service.
     * @param include Specifies which types of related objects should be included in the response.
     */
    public getIncidentService(serviceId: string, include?: IncidentRelatedObject, options?: Configuration): Observable<IncidentServiceResponse> {
    	const requestContextPromise = this.requestFactory.getIncidentService(serviceId, include, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIncidentService(rsp)));
	    	}));
    }
	
    /**
     * Get all incident services uploaded for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident services.
     * Get a list of all incident services
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     * @param filter A search query that filters services by name.
     */
    public listIncidentServices(include?: IncidentRelatedObject, pageSize?: number, pageOffset?: number, filter?: string, options?: Configuration): Observable<IncidentServicesResponse> {
    	const requestContextPromise = this.requestFactory.listIncidentServices(include, pageSize, pageOffset, filter, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listIncidentServices(rsp)));
	    	}));
    }
	
    /**
     * Updates an existing incident service. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident service
     * @param serviceId The ID of the incident service.
     * @param body Incident Service Payload.
     */
    public updateIncidentService(serviceId: string, body: IncidentServiceUpdateRequest, options?: Configuration): Observable<IncidentServiceResponse> {
    	const requestContextPromise = this.requestFactory.updateIncidentService(serviceId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateIncidentService(rsp)));
	    	}));
    }
	

}




import { IncidentTeamsApiRequestFactory, IncidentTeamsApiResponseProcessor} from "../apis/IncidentTeamsApi";
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
        this.requestFactory = requestFactory || new IncidentTeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IncidentTeamsApiResponseProcessor();
    }

    /**
     * Creates a new incident team.
     * Create a new incident team
     * @param body Incident Team Payload.
     */
    public createIncidentTeam(body: IncidentTeamCreateRequest, options?: Configuration): Observable<IncidentTeamResponse> {
    	const requestContextPromise = this.requestFactory.createIncidentTeam(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createIncidentTeam(rsp)));
	    	}));
    }
	
    /**
     * Deletes an existing incident team.
     * Delete an existing incident team
     * @param teamId The ID of the incident team.
     */
    public deleteIncidentTeam(teamId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteIncidentTeam(teamId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteIncidentTeam(rsp)));
	    	}));
    }
	
    /**
     * Get details of an incident team. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get details of an incident team
     * @param teamId The ID of the incident team.
     * @param include Specifies which types of related objects should be included in the response.
     */
    public getIncidentTeam(teamId: string, include?: IncidentRelatedObject, options?: Configuration): Observable<IncidentTeamResponse> {
    	const requestContextPromise = this.requestFactory.getIncidentTeam(teamId, include, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIncidentTeam(rsp)));
	    	}));
    }
	
    /**
     * Get all incident teams for the requesting user's organization. If the `include[users]` query parameter is provided, the included attribute will contain the users related to these incident teams.
     * Get a list of all incident teams
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     * @param filter A search query that filters teams by name.
     */
    public listIncidentTeams(include?: IncidentRelatedObject, pageSize?: number, pageOffset?: number, filter?: string, options?: Configuration): Observable<IncidentTeamsResponse> {
    	const requestContextPromise = this.requestFactory.listIncidentTeams(include, pageSize, pageOffset, filter, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listIncidentTeams(rsp)));
	    	}));
    }
	
    /**
     * Updates an existing incident team. Only provide the attributes which should be updated as this request is a partial update.
     * Update an existing incident team
     * @param teamId The ID of the incident team.
     * @param body Incident Team Payload.
     */
    public updateIncidentTeam(teamId: string, body: IncidentTeamUpdateRequest, options?: Configuration): Observable<IncidentTeamResponse> {
    	const requestContextPromise = this.requestFactory.updateIncidentTeam(teamId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateIncidentTeam(rsp)));
	    	}));
    }
	

}




import { IncidentsApiRequestFactory, IncidentsApiResponseProcessor} from "../apis/IncidentsApi";
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
        this.requestFactory = requestFactory || new IncidentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new IncidentsApiResponseProcessor();
    }

    /**
     * Create an incident.
     * Create an incident
     * @param body Incident payload.
     */
    public createIncident(body: IncidentCreateRequest, options?: Configuration): Observable<IncidentResponse> {
    	const requestContextPromise = this.requestFactory.createIncident(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createIncident(rsp)));
	    	}));
    }
	
    /**
     * Deletes an existing incident from the users organization.
     * Delete an existing incident
     * @param incidentId The UUID the incident.
     */
    public deleteIncident(incidentId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteIncident(incidentId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteIncident(rsp)));
	    	}));
    }
	
    /**
     * Get the details of an incident by `incident_id`.
     * Get the details of an incident
     * @param incidentId The UUID the incident.
     * @param include Specifies which types of related objects should be included in the response.
     */
    public getIncident(incidentId: string, include?: Array<IncidentRelatedObject>, options?: Configuration): Observable<IncidentResponse> {
    	const requestContextPromise = this.requestFactory.getIncident(incidentId, include, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getIncident(rsp)));
	    	}));
    }
	
    /**
     * Get all incidents for the user's organization.
     * Get a list of incidents
     * @param include Specifies which types of related objects should be included in the response.
     * @param pageSize Size for a given page.
     * @param pageOffset Specific offset to use as the beginning of the returned page.
     */
    public listIncidents(include?: Array<IncidentRelatedObject>, pageSize?: number, pageOffset?: number, options?: Configuration): Observable<IncidentsResponse> {
    	const requestContextPromise = this.requestFactory.listIncidents(include, pageSize, pageOffset, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listIncidents(rsp)));
	    	}));
    }
	
    /**
     * Updates an incident. Provide only the attributes that should be updated as this request is a partial update.
     * Update an existing incident
     * @param incidentId The UUID the incident.
     * @param body Incident Payload.
     */
    public updateIncident(incidentId: string, body: IncidentUpdateRequest, options?: Configuration): Observable<IncidentResponse> {
    	const requestContextPromise = this.requestFactory.updateIncident(incidentId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateIncident(rsp)));
	    	}));
    }
	

}




import { KeyManagementApiRequestFactory, KeyManagementApiResponseProcessor} from "../apis/KeyManagementApi";
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
        this.requestFactory = requestFactory || new KeyManagementApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new KeyManagementApiResponseProcessor();
    }

    /**
     * Create an API key.
     * Create an API key
     * @param body 
     */
    public createAPIKey(body: APIKeyCreateRequest, options?: Configuration): Observable<APIKeyResponse> {
    	const requestContextPromise = this.requestFactory.createAPIKey(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAPIKey(rsp)));
	    	}));
    }
	
    /**
     * Create an application key for current user
     * Create an application key for current user
     * @param body 
     */
    public createCurrentUserApplicationKey(body: ApplicationKeyCreateRequest, options?: Configuration): Observable<ApplicationKeyResponse> {
    	const requestContextPromise = this.requestFactory.createCurrentUserApplicationKey(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCurrentUserApplicationKey(rsp)));
	    	}));
    }
	
    /**
     * Delete an API key.
     * Delete an API key
     * @param apiKeyId The ID of the API key.
     */
    public deleteAPIKey(apiKeyId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteAPIKey(apiKeyId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAPIKey(rsp)));
	    	}));
    }
	
    /**
     * Delete an application key
     * Delete an application key
     * @param appKeyId The ID of the application key.
     */
    public deleteApplicationKey(appKeyId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteApplicationKey(appKeyId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteApplicationKey(rsp)));
	    	}));
    }
	
    /**
     * Delete an application key owned by current user
     * Delete an application key owned by current user
     * @param appKeyId The ID of the application key.
     */
    public deleteCurrentUserApplicationKey(appKeyId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteCurrentUserApplicationKey(appKeyId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCurrentUserApplicationKey(rsp)));
	    	}));
    }
	
    /**
     * Get an API key.
     * Get API key
     * @param apiKeyId The ID of the API key.
     * @param include Comma separated list of resource paths for related resources to include in the response. Supported resource paths are &#x60;created_by&#x60; and &#x60;modified_by&#x60;.
     */
    public getAPIKey(apiKeyId: string, include?: string, options?: Configuration): Observable<APIKeyResponse> {
    	const requestContextPromise = this.requestFactory.getAPIKey(apiKeyId, include, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAPIKey(rsp)));
	    	}));
    }
	
    /**
     * Get an application key owned by current user
     * Get one application key owned by current user
     * @param appKeyId The ID of the application key.
     */
    public getCurrentUserApplicationKey(appKeyId: string, options?: Configuration): Observable<ApplicationKeyResponse> {
    	const requestContextPromise = this.requestFactory.getCurrentUserApplicationKey(appKeyId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCurrentUserApplicationKey(rsp)));
	    	}));
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
    public listAPIKeys(pageSize?: number, pageNumber?: number, sort?: APIKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, filterModifiedAtStart?: string, filterModifiedAtEnd?: string, include?: string, options?: Configuration): Observable<APIKeysResponse> {
    	const requestContextPromise = this.requestFactory.listAPIKeys(pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, filterModifiedAtStart, filterModifiedAtEnd, include, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listAPIKeys(rsp)));
	    	}));
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
    public listApplicationKeys(pageSize?: number, pageNumber?: number, sort?: ApplicationKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, options?: Configuration): Observable<ListApplicationKeysResponse> {
    	const requestContextPromise = this.requestFactory.listApplicationKeys(pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApplicationKeys(rsp)));
	    	}));
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
    public listCurrentUserApplicationKeys(pageSize?: number, pageNumber?: number, sort?: ApplicationKeysSort, filter?: string, filterCreatedAtStart?: string, filterCreatedAtEnd?: string, options?: Configuration): Observable<ListApplicationKeysResponse> {
    	const requestContextPromise = this.requestFactory.listCurrentUserApplicationKeys(pageSize, pageNumber, sort, filter, filterCreatedAtStart, filterCreatedAtEnd, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listCurrentUserApplicationKeys(rsp)));
	    	}));
    }
	
    /**
     * Update an API key.
     * Edit an API key
     * @param apiKeyId The ID of the API key.
     * @param body 
     */
    public updateAPIKey(apiKeyId: string, body: APIKeyUpdateRequest, options?: Configuration): Observable<APIKeyResponse> {
    	const requestContextPromise = this.requestFactory.updateAPIKey(apiKeyId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateAPIKey(rsp)));
	    	}));
    }
	
    /**
     * Edit an application key
     * Edit an application key
     * @param appKeyId The ID of the application key.
     * @param body 
     */
    public updateApplicationKey(appKeyId: string, body: ApplicationKeyUpdateRequest, options?: Configuration): Observable<ApplicationKeyResponse> {
    	const requestContextPromise = this.requestFactory.updateApplicationKey(appKeyId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateApplicationKey(rsp)));
	    	}));
    }
	
    /**
     * Edit an application key owned by current user
     * Edit an application key owned by current user
     * @param appKeyId The ID of the application key.
     * @param body 
     */
    public updateCurrentUserApplicationKey(appKeyId: string, body: ApplicationKeyUpdateRequest, options?: Configuration): Observable<ApplicationKeyResponse> {
    	const requestContextPromise = this.requestFactory.updateCurrentUserApplicationKey(appKeyId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCurrentUserApplicationKey(rsp)));
	    	}));
    }
	

}




import { LogsApiRequestFactory, LogsApiResponseProcessor} from "../apis/LogsApi";
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
        this.requestFactory = requestFactory || new LogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsApiResponseProcessor();
    }

    /**
     * The API endpoint to aggregate events into buckets and compute metrics and timeseries.
     * Aggregate events
     * @param body 
     */
    public aggregateLogs(body: LogsAggregateRequest, options?: Configuration): Observable<LogsAggregateResponse> {
    	const requestContextPromise = this.requestFactory.aggregateLogs(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.aggregateLogs(rsp)));
	    	}));
    }
	
    /**
     * List endpoint returns logs that match a log search query. [Results are paginated][1].  Use this endpoint to build complex logs filtering and search.  **If you are considering archiving logs for your organization, consider use of the Datadog archive capabilities instead of the log list API. See [Datadog Logs Archive documentation][2].**  [1]: /logs/guide/collect-multiple-logs-with-pagination [2]: https://docs.datadoghq.com/logs/archives
     * Search logs
     * @param body 
     */
    public listLogs(body?: LogsListRequest, options?: Configuration): Observable<LogsListResponse> {
    	const requestContextPromise = this.requestFactory.listLogs(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLogs(rsp)));
	    	}));
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
    public listLogsGet(filterQuery?: string, filterIndex?: string, filterFrom?: Date, filterTo?: Date, sort?: LogsSort, pageCursor?: string, pageLimit?: number, options?: Configuration): Observable<LogsListResponse> {
    	const requestContextPromise = this.requestFactory.listLogsGet(filterQuery, filterIndex, filterFrom, filterTo, sort, pageCursor, pageLimit, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLogsGet(rsp)));
	    	}));
    }
	

}




import { LogsArchivesApiRequestFactory, LogsArchivesApiResponseProcessor} from "../apis/LogsArchivesApi";
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
        this.requestFactory = requestFactory || new LogsArchivesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsArchivesApiResponseProcessor();
    }

    /**
     * Adds a read role to an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Grant role to an archive
     * @param archiveId The ID of the archive.
     * @param body 
     */
    public addReadRoleToArchive(archiveId: string, body: RelationshipToRole, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.addReadRoleToArchive(archiveId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addReadRoleToArchive(rsp)));
	    	}));
    }
	
    /**
     * Create an archive in your organization.
     * Create an archive
     * @param body The definition of the new archive.
     */
    public createLogsArchive(body: LogsArchiveCreateRequest, options?: Configuration): Observable<LogsArchive> {
    	const requestContextPromise = this.requestFactory.createLogsArchive(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLogsArchive(rsp)));
	    	}));
    }
	
    /**
     * Delete a given archive from your organization.
     * Delete an archive
     * @param archiveId The ID of the archive.
     */
    public deleteLogsArchive(archiveId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteLogsArchive(archiveId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLogsArchive(rsp)));
	    	}));
    }
	
    /**
     * Get a specific archive from your organization.
     * Get an archive
     * @param archiveId The ID of the archive.
     */
    public getLogsArchive(archiveId: string, options?: Configuration): Observable<LogsArchive> {
    	const requestContextPromise = this.requestFactory.getLogsArchive(archiveId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLogsArchive(rsp)));
	    	}));
    }
	
    /**
     * Get the current order of your archives. This endpoint takes no JSON arguments.
     * Get archive order
     */
    public getLogsArchiveOrder(options?: Configuration): Observable<LogsArchiveOrder> {
    	const requestContextPromise = this.requestFactory.getLogsArchiveOrder(options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLogsArchiveOrder(rsp)));
	    	}));
    }
	
    /**
     * Returns all read roles a given archive is restricted to.
     * List read roles for an archive
     * @param archiveId The ID of the archive.
     */
    public listArchiveReadRoles(archiveId: string, options?: Configuration): Observable<RolesResponse> {
    	const requestContextPromise = this.requestFactory.listArchiveReadRoles(archiveId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listArchiveReadRoles(rsp)));
	    	}));
    }
	
    /**
     * Get the list of configured logs archives with their definitions.
     * Get all archives
     */
    public listLogsArchives(options?: Configuration): Observable<LogsArchives> {
    	const requestContextPromise = this.requestFactory.listLogsArchives(options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLogsArchives(rsp)));
	    	}));
    }
	
    /**
     * Removes a role from an archive. ([Roles API](https://docs.datadoghq.com/api/v2/roles/))
     * Revoke role from an archive
     * @param archiveId The ID of the archive.
     * @param body 
     */
    public removeRoleFromArchive(archiveId: string, body: RelationshipToRole, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.removeRoleFromArchive(archiveId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeRoleFromArchive(rsp)));
	    	}));
    }
	
    /**
     * Update a given archive configuration.  **Note**: Using this method updates your archive configuration by **replacing** your current configuration with the new one sent to your Datadog organization.
     * Update an archive
     * @param archiveId The ID of the archive.
     * @param body New definition of the archive.
     */
    public updateLogsArchive(archiveId: string, body: LogsArchiveCreateRequest, options?: Configuration): Observable<LogsArchive> {
    	const requestContextPromise = this.requestFactory.updateLogsArchive(archiveId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLogsArchive(rsp)));
	    	}));
    }
	
    /**
     * Update the order of your archives. Since logs are processed sequentially, reordering an archive may change the structure and content of the data processed by other archives.  **Note**: Using the `PUT` method updates your archive's order by replacing the current order with the new one.
     * Update archive order
     * @param body An object containing the new ordered list of archive IDs.
     */
    public updateLogsArchiveOrder(body: LogsArchiveOrder, options?: Configuration): Observable<LogsArchiveOrder> {
    	const requestContextPromise = this.requestFactory.updateLogsArchiveOrder(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLogsArchiveOrder(rsp)));
	    	}));
    }
	

}




import { LogsMetricsApiRequestFactory, LogsMetricsApiResponseProcessor} from "../apis/LogsMetricsApi";
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
        this.requestFactory = requestFactory || new LogsMetricsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LogsMetricsApiResponseProcessor();
    }

    /**
     * Create a metric based on your ingested logs in your organization. Returns the log-based metric object from the request body when the request is successful.
     * Create a log-based metric
     * @param body The definition of the new log-based metric.
     */
    public createLogsMetric(body: LogsMetricCreateRequest, options?: Configuration): Observable<LogsMetricResponse> {
    	const requestContextPromise = this.requestFactory.createLogsMetric(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLogsMetric(rsp)));
	    	}));
    }
	
    /**
     * Delete a specific log-based metric from your organization.
     * Delete a log-based metric
     * @param metricId The name of the log-based metric.
     */
    public deleteLogsMetric(metricId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteLogsMetric(metricId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteLogsMetric(rsp)));
	    	}));
    }
	
    /**
     * Get a specific log-based metric from your organization.
     * Get a log-based metric
     * @param metricId The name of the log-based metric.
     */
    public getLogsMetric(metricId: string, options?: Configuration): Observable<LogsMetricResponse> {
    	const requestContextPromise = this.requestFactory.getLogsMetric(metricId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getLogsMetric(rsp)));
	    	}));
    }
	
    /**
     * Get the list of configured log-based metrics with their definitions.
     * Get all log-based metrics
     */
    public listLogsMetrics(options?: Configuration): Observable<LogsMetricsResponse> {
    	const requestContextPromise = this.requestFactory.listLogsMetrics(options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listLogsMetrics(rsp)));
	    	}));
    }
	
    /**
     * Update a specific log-based metric from your organization. Returns the log-based metric object from the request body when the request is successful.
     * Update a log-based metric
     * @param metricId The name of the log-based metric.
     * @param body New definition of the log-based metric.
     */
    public updateLogsMetric(metricId: string, body: LogsMetricUpdateRequest, options?: Configuration): Observable<LogsMetricResponse> {
    	const requestContextPromise = this.requestFactory.updateLogsMetric(metricId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLogsMetric(rsp)));
	    	}));
    }
	

}




import { MetricsApiRequestFactory, MetricsApiResponseProcessor} from "../apis/MetricsApi";
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
        this.requestFactory = requestFactory || new MetricsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetricsApiResponseProcessor();
    }

    /**
     * Create and define a list of queryable tag keys for a count/gauge/rate/distribution metric. Optionally, include percentile aggregations on any distribution metric. Can only be used with application keys of users with the `Manage Tags for Metrics` permission.
     * Create a Tag Configuration
     * @param metricName The name of the metric.
     * @param body 
     */
    public createTagConfiguration(metricName: string, body: MetricTagConfigurationCreateRequest, options?: Configuration): Observable<MetricTagConfigurationResponse> {
    	const requestContextPromise = this.requestFactory.createTagConfiguration(metricName, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTagConfiguration(rsp)));
	    	}));
    }
	
    /**
     * Deletes a metric's tag configuration. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Delete a Tag Configuration
     * @param metricName The name of the metric.
     */
    public deleteTagConfiguration(metricName: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteTagConfiguration(metricName, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTagConfiguration(rsp)));
	    	}));
    }
	
    /**
     * Returns the tag configuration for the given metric name.
     * List Tag Configuration by Name
     * @param metricName The name of the metric.
     */
    public listTagConfigurationByName(metricName: string, options?: Configuration): Observable<MetricTagConfigurationResponse> {
    	const requestContextPromise = this.requestFactory.listTagConfigurationByName(metricName, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTagConfigurationByName(rsp)));
	    	}));
    }
	
    /**
     * Returns all configured count/gauge/rate/distribution metric names (with additional filters if specified).
     * List Tag Configurations
     * @param filterConfigured Filter metrics that have configured tags.
     * @param filterTagsConfigured Filter tag configurations by configured tags.
     * @param filterMetricType Filter tag configurations by metric type.
     * @param filterIncludePercentiles Filter distributions with additional percentile aggregations enabled or disabled.
     */
    public listTagConfigurations(filterConfigured?: boolean, filterTagsConfigured?: string, filterMetricType?: MetricTagConfigurationMetricTypes, filterIncludePercentiles?: boolean, options?: Configuration): Observable<MetricsAndMetricTagConfigurationsResponse> {
    	const requestContextPromise = this.requestFactory.listTagConfigurations(filterConfigured, filterTagsConfigured, filterMetricType, filterIncludePercentiles, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTagConfigurations(rsp)));
	    	}));
    }
	
    /**
     * Update the tag configuration of a metric or percentile aggregations of a distribution metric. Can only be used with application keys from users with the `Manage Tags for Metrics` permission.
     * Update a Tag Configuration
     * @param metricName The name of the metric.
     * @param body 
     */
    public updateTagConfiguration(metricName: string, body: MetricTagConfigurationUpdateRequest, options?: Configuration): Observable<MetricTagConfigurationResponse> {
    	const requestContextPromise = this.requestFactory.updateTagConfiguration(metricName, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateTagConfiguration(rsp)));
	    	}));
    }
	

}




import { ProcessesApiRequestFactory, ProcessesApiResponseProcessor} from "../apis/ProcessesApi";
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
        this.requestFactory = requestFactory || new ProcessesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProcessesApiResponseProcessor();
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
    public listProcesses(search?: string, tags?: string, from?: number, to?: number, pageLimit?: number, pageCursor?: string, options?: Configuration): Observable<ProcessSummariesResponse> {
    	const requestContextPromise = this.requestFactory.listProcesses(search, tags, from, to, pageLimit, pageCursor, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listProcesses(rsp)));
	    	}));
    }
	

}




import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";
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
        this.requestFactory = requestFactory || new RolesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RolesApiResponseProcessor();
    }

    /**
     * Adds a permission to a role.
     * Grant permission to a role
     * @param roleId The ID of the role.
     * @param body 
     */
    public addPermissionToRole(roleId: string, body: RelationshipToPermission, options?: Configuration): Observable<PermissionsResponse> {
    	const requestContextPromise = this.requestFactory.addPermissionToRole(roleId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addPermissionToRole(rsp)));
	    	}));
    }
	
    /**
     * Adds a user to a role.
     * Add a user to a role
     * @param roleId The ID of the role.
     * @param body 
     */
    public addUserToRole(roleId: string, body: RelationshipToUser, options?: Configuration): Observable<UsersResponse> {
    	const requestContextPromise = this.requestFactory.addUserToRole(roleId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addUserToRole(rsp)));
	    	}));
    }
	
    /**
     * Create a new role for your organization.
     * Create role
     * @param body 
     */
    public createRole(body: RoleCreateRequest, options?: Configuration): Observable<RoleCreateResponse> {
    	const requestContextPromise = this.requestFactory.createRole(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createRole(rsp)));
	    	}));
    }
	
    /**
     * Disables a role.
     * Delete role
     * @param roleId The ID of the role.
     */
    public deleteRole(roleId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteRole(roleId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteRole(rsp)));
	    	}));
    }
	
    /**
     * Get a role in the organization specified by the role’s `role_id`.
     * Get a role
     * @param roleId The ID of the role.
     */
    public getRole(roleId: string, options?: Configuration): Observable<RoleResponse> {
    	const requestContextPromise = this.requestFactory.getRole(roleId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getRole(rsp)));
	    	}));
    }
	
    /**
     * Returns a list of all permissions, including name, description, and ID.
     * List permissions
     */
    public listPermissions(options?: Configuration): Observable<PermissionsResponse> {
    	const requestContextPromise = this.requestFactory.listPermissions(options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listPermissions(rsp)));
	    	}));
    }
	
    /**
     * Returns a list of all permissions for a single role.
     * List permissions for a role
     * @param roleId The ID of the role.
     */
    public listRolePermissions(roleId: string, options?: Configuration): Observable<PermissionsResponse> {
    	const requestContextPromise = this.requestFactory.listRolePermissions(roleId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRolePermissions(rsp)));
	    	}));
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
    public listRoleUsers(roleId: string, pageSize?: number, pageNumber?: number, sort?: string, filter?: string, options?: Configuration): Observable<UsersResponse> {
    	const requestContextPromise = this.requestFactory.listRoleUsers(roleId, pageSize, pageNumber, sort, filter, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRoleUsers(rsp)));
	    	}));
    }
	
    /**
     * Returns all roles, including their names and IDs.
     * List roles
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     * @param sort Sort roles depending on the given field. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example: &#x60;sort&#x3D;-name&#x60;.
     * @param filter Filter all roles by the given string.
     */
    public listRoles(pageSize?: number, pageNumber?: number, sort?: RolesSort, filter?: string, options?: Configuration): Observable<RolesResponse> {
    	const requestContextPromise = this.requestFactory.listRoles(pageSize, pageNumber, sort, filter, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listRoles(rsp)));
	    	}));
    }
	
    /**
     * Removes a permission from a role.
     * Revoke permission
     * @param roleId The ID of the role.
     * @param body 
     */
    public removePermissionFromRole(roleId: string, body: RelationshipToPermission, options?: Configuration): Observable<PermissionsResponse> {
    	const requestContextPromise = this.requestFactory.removePermissionFromRole(roleId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removePermissionFromRole(rsp)));
	    	}));
    }
	
    /**
     * Removes a user from a role.
     * Remove a user from a role
     * @param roleId The ID of the role.
     * @param body 
     */
    public removeUserFromRole(roleId: string, body: RelationshipToUser, options?: Configuration): Observable<UsersResponse> {
    	const requestContextPromise = this.requestFactory.removeUserFromRole(roleId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeUserFromRole(rsp)));
	    	}));
    }
	
    /**
     * Edit a role. Can only be used with application keys belonging to administrators.
     * Update a role
     * @param roleId The ID of the role.
     * @param body 
     */
    public updateRole(roleId: string, body: RoleUpdateRequest, options?: Configuration): Observable<RoleUpdateResponse> {
    	const requestContextPromise = this.requestFactory.updateRole(roleId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateRole(rsp)));
	    	}));
    }
	

}




import { SecurityMonitoringApiRequestFactory, SecurityMonitoringApiResponseProcessor} from "../apis/SecurityMonitoringApi";
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
        this.requestFactory = requestFactory || new SecurityMonitoringApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SecurityMonitoringApiResponseProcessor();
    }

    /**
     * Create a detection rule.
     * Create a detection rule
     * @param body 
     */
    public createSecurityMonitoringRule(body: SecurityMonitoringRuleCreatePayload, options?: Configuration): Observable<SecurityMonitoringRuleResponse> {
    	const requestContextPromise = this.requestFactory.createSecurityMonitoringRule(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSecurityMonitoringRule(rsp)));
	    	}));
    }
	
    /**
     * Delete an existing rule. Default rules cannot be deleted.
     * Delete an existing rule
     * @param ruleId The ID of the rule.
     */
    public deleteSecurityMonitoringRule(ruleId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.deleteSecurityMonitoringRule(ruleId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSecurityMonitoringRule(rsp)));
	    	}));
    }
	
    /**
     * Get a rule's details.
     * Get a rule's details
     * @param ruleId The ID of the rule.
     */
    public getSecurityMonitoringRule(ruleId: string, options?: Configuration): Observable<SecurityMonitoringRuleResponse> {
    	const requestContextPromise = this.requestFactory.getSecurityMonitoringRule(ruleId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSecurityMonitoringRule(rsp)));
	    	}));
    }
	
    /**
     * List rules.
     * List rules
     * @param pageSize Size for a given page.
     * @param pageNumber Specific page number to return.
     */
    public listSecurityMonitoringRules(pageSize?: number, pageNumber?: number, options?: Configuration): Observable<SecurityMonitoringListRulesResponse> {
    	const requestContextPromise = this.requestFactory.listSecurityMonitoringRules(pageSize, pageNumber, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSecurityMonitoringRules(rsp)));
	    	}));
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
    public listSecurityMonitoringSignals(filterQuery?: string, filterFrom?: Date, filterTo?: Date, sort?: SecurityMonitoringSignalsSort, pageCursor?: string, pageLimit?: number, options?: Configuration): Observable<SecurityMonitoringSignalsListResponse> {
    	const requestContextPromise = this.requestFactory.listSecurityMonitoringSignals(filterQuery, filterFrom, filterTo, sort, pageCursor, pageLimit, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listSecurityMonitoringSignals(rsp)));
	    	}));
    }
	
    /**
     * Returns security signals that match a search query. Both this endpoint and the GET endpoint can be used interchangeably for listing security signals.
     * Get a list of security signals
     * @param body 
     */
    public searchSecurityMonitoringSignals(body?: SecurityMonitoringSignalListRequest, options?: Configuration): Observable<SecurityMonitoringSignalsListResponse> {
    	const requestContextPromise = this.requestFactory.searchSecurityMonitoringSignals(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.searchSecurityMonitoringSignals(rsp)));
	    	}));
    }
	
    /**
     * Update an existing rule. When updating `cases`, `queries` or `options`, the whole field must be included. For example, when modifying a query all queries must be included. Default rules can only be updated to be enabled and to change notifications.
     * Update an existing rule
     * @param ruleId The ID of the rule.
     * @param body 
     */
    public updateSecurityMonitoringRule(ruleId: string, body: SecurityMonitoringRuleUpdatePayload, options?: Configuration): Observable<SecurityMonitoringRuleResponse> {
    	const requestContextPromise = this.requestFactory.updateSecurityMonitoringRule(ruleId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSecurityMonitoringRule(rsp)));
	    	}));
    }
	

}




import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
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
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Create a user for your organization.
     * Create a user
     * @param body 
     */
    public createUser(body: UserCreateRequest, options?: Configuration): Observable<UserResponse> {
    	const requestContextPromise = this.requestFactory.createUser(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createUser(rsp)));
	    	}));
    }
	
    /**
     * Disable a user. Can only be used with an application key belonging to an administrator user.
     * Disable a user
     * @param userId The ID of the user.
     */
    public disableUser(userId: string, options?: Configuration): Observable<void> {
    	const requestContextPromise = this.requestFactory.disableUser(userId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableUser(rsp)));
	    	}));
    }
	
    /**
     * Returns a single user invitation by its UUID.
     * Get a user invitation
     * @param userInvitationUuid The UUID of the user invitation.
     */
    public getInvitation(userInvitationUuid: string, options?: Configuration): Observable<UserInvitationResponse> {
    	const requestContextPromise = this.requestFactory.getInvitation(userInvitationUuid, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvitation(rsp)));
	    	}));
    }
	
    /**
     * Get a user in the organization specified by the user’s `user_id`.
     * Get user details
     * @param userId The ID of the user.
     */
    public getUser(userId: string, options?: Configuration): Observable<UserResponse> {
    	const requestContextPromise = this.requestFactory.getUser(userId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUser(rsp)));
	    	}));
    }
	
    /**
     * Get a user organization. Returns the user information and all organizations joined by this user.
     * Get a user organization
     * @param userId The ID of the user.
     */
    public listUserOrganizations(userId: string, options?: Configuration): Observable<UserResponse> {
    	const requestContextPromise = this.requestFactory.listUserOrganizations(userId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUserOrganizations(rsp)));
	    	}));
    }
	
    /**
     * Get a user permission set. Returns a list of the user’s permissions granted by the associated user's roles.
     * Get a user permissions
     * @param userId The ID of the user.
     */
    public listUserPermissions(userId: string, options?: Configuration): Observable<PermissionsResponse> {
    	const requestContextPromise = this.requestFactory.listUserPermissions(userId, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUserPermissions(rsp)));
	    	}));
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
    public listUsers(pageSize?: number, pageNumber?: number, sort?: string, sortDir?: QuerySortOrder, filter?: string, filterStatus?: string, options?: Configuration): Observable<UsersResponse> {
    	const requestContextPromise = this.requestFactory.listUsers(pageSize, pageNumber, sort, sortDir, filter, filterStatus, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listUsers(rsp)));
	    	}));
    }
	
    /**
     * Sends emails to one or more users inviting them to join the organization.
     * Send invitation emails
     * @param body 
     */
    public sendInvitations(body: UserInvitationsRequest, options?: Configuration): Observable<UserInvitationsResponse> {
    	const requestContextPromise = this.requestFactory.sendInvitations(body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendInvitations(rsp)));
	    	}));
    }
	
    /**
     * Edit a user. Can only be used with an application key belonging to an administrator user.
     * Update a user
     * @param userId The ID of the user.
     * @param body 
     */
    public updateUser(userId: string, body: UserUpdateRequest, options?: Configuration): Observable<UserResponse> {
    	const requestContextPromise = this.requestFactory.updateUser(userId, body, options);

		// build promise chain
    let middlewarePreObservable = from_<RequestContext>(requestContextPromise);
    	for (let middleware of this.configuration.middleware) {
    		middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
    	}

    	return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
	    	pipe(mergeMap((response: ResponseContext) => {
	    		let middlewarePostObservable = of(response);
	    		for (let middleware of this.configuration.middleware) {
	    			middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
	    		}
	    		return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUser(rsp)));
	    	}));
    }
	

}



