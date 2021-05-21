"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
var APIErrorResponse_1 = require("./APIErrorResponse");
var APIKeyCreateAttributes_1 = require("./APIKeyCreateAttributes");
var APIKeyCreateData_1 = require("./APIKeyCreateData");
var APIKeyCreateRequest_1 = require("./APIKeyCreateRequest");
var APIKeyRelationships_1 = require("./APIKeyRelationships");
var APIKeyResponse_1 = require("./APIKeyResponse");
var APIKeyUpdateAttributes_1 = require("./APIKeyUpdateAttributes");
var APIKeyUpdateData_1 = require("./APIKeyUpdateData");
var APIKeyUpdateRequest_1 = require("./APIKeyUpdateRequest");
var APIKeysResponse_1 = require("./APIKeysResponse");
var ApplicationKeyCreateAttributes_1 = require("./ApplicationKeyCreateAttributes");
var ApplicationKeyCreateData_1 = require("./ApplicationKeyCreateData");
var ApplicationKeyCreateRequest_1 = require("./ApplicationKeyCreateRequest");
var ApplicationKeyRelationships_1 = require("./ApplicationKeyRelationships");
var ApplicationKeyResponse_1 = require("./ApplicationKeyResponse");
var ApplicationKeyUpdateAttributes_1 = require("./ApplicationKeyUpdateAttributes");
var ApplicationKeyUpdateData_1 = require("./ApplicationKeyUpdateData");
var ApplicationKeyUpdateRequest_1 = require("./ApplicationKeyUpdateRequest");
var Creator_1 = require("./Creator");
var DashboardListAddItemsRequest_1 = require("./DashboardListAddItemsRequest");
var DashboardListAddItemsResponse_1 = require("./DashboardListAddItemsResponse");
var DashboardListDeleteItemsRequest_1 = require("./DashboardListDeleteItemsRequest");
var DashboardListDeleteItemsResponse_1 = require("./DashboardListDeleteItemsResponse");
var DashboardListItem_1 = require("./DashboardListItem");
var DashboardListItemRequest_1 = require("./DashboardListItemRequest");
var DashboardListItemResponse_1 = require("./DashboardListItemResponse");
var DashboardListItems_1 = require("./DashboardListItems");
var DashboardListUpdateItemsRequest_1 = require("./DashboardListUpdateItemsRequest");
var DashboardListUpdateItemsResponse_1 = require("./DashboardListUpdateItemsResponse");
var FullAPIKey_1 = require("./FullAPIKey");
var FullAPIKeyAttributes_1 = require("./FullAPIKeyAttributes");
var FullApplicationKey_1 = require("./FullApplicationKey");
var FullApplicationKeyAttributes_1 = require("./FullApplicationKeyAttributes");
var IncidentCreateAttributes_1 = require("./IncidentCreateAttributes");
var IncidentCreateData_1 = require("./IncidentCreateData");
var IncidentCreateRelationships_1 = require("./IncidentCreateRelationships");
var IncidentCreateRequest_1 = require("./IncidentCreateRequest");
var IncidentFieldAttributesMultipleValue_1 = require("./IncidentFieldAttributesMultipleValue");
var IncidentFieldAttributesSingleValue_1 = require("./IncidentFieldAttributesSingleValue");
var IncidentResponse_1 = require("./IncidentResponse");
var IncidentResponseAttributes_1 = require("./IncidentResponseAttributes");
var IncidentResponseData_1 = require("./IncidentResponseData");
var IncidentResponseRelationships_1 = require("./IncidentResponseRelationships");
var IncidentServiceCreateAttributes_1 = require("./IncidentServiceCreateAttributes");
var IncidentServiceCreateData_1 = require("./IncidentServiceCreateData");
var IncidentServiceCreateRequest_1 = require("./IncidentServiceCreateRequest");
var IncidentServiceRelationships_1 = require("./IncidentServiceRelationships");
var IncidentServiceResponse_1 = require("./IncidentServiceResponse");
var IncidentServiceResponseAttributes_1 = require("./IncidentServiceResponseAttributes");
var IncidentServiceResponseData_1 = require("./IncidentServiceResponseData");
var IncidentServiceUpdateAttributes_1 = require("./IncidentServiceUpdateAttributes");
var IncidentServiceUpdateData_1 = require("./IncidentServiceUpdateData");
var IncidentServiceUpdateRequest_1 = require("./IncidentServiceUpdateRequest");
var IncidentServicesResponse_1 = require("./IncidentServicesResponse");
var IncidentServicesResponseMeta_1 = require("./IncidentServicesResponseMeta");
var IncidentServicesResponseMetaPagination_1 = require("./IncidentServicesResponseMetaPagination");
var IncidentTeamCreateAttributes_1 = require("./IncidentTeamCreateAttributes");
var IncidentTeamCreateData_1 = require("./IncidentTeamCreateData");
var IncidentTeamCreateRequest_1 = require("./IncidentTeamCreateRequest");
var IncidentTeamRelationships_1 = require("./IncidentTeamRelationships");
var IncidentTeamResponse_1 = require("./IncidentTeamResponse");
var IncidentTeamResponseAttributes_1 = require("./IncidentTeamResponseAttributes");
var IncidentTeamResponseData_1 = require("./IncidentTeamResponseData");
var IncidentTeamUpdateAttributes_1 = require("./IncidentTeamUpdateAttributes");
var IncidentTeamUpdateData_1 = require("./IncidentTeamUpdateData");
var IncidentTeamUpdateRequest_1 = require("./IncidentTeamUpdateRequest");
var IncidentTeamsResponse_1 = require("./IncidentTeamsResponse");
var IncidentTimelineCellMarkdownCreateAttributes_1 = require("./IncidentTimelineCellMarkdownCreateAttributes");
var IncidentTimelineCellMarkdownCreateAttributesContent_1 = require("./IncidentTimelineCellMarkdownCreateAttributesContent");
var IncidentUpdateAttributes_1 = require("./IncidentUpdateAttributes");
var IncidentUpdateData_1 = require("./IncidentUpdateData");
var IncidentUpdateRelationships_1 = require("./IncidentUpdateRelationships");
var IncidentUpdateRequest_1 = require("./IncidentUpdateRequest");
var IncidentsResponse_1 = require("./IncidentsResponse");
var ListApplicationKeysResponse_1 = require("./ListApplicationKeysResponse");
var Log_1 = require("./Log");
var LogAttributes_1 = require("./LogAttributes");
var LogsAggregateBucket_1 = require("./LogsAggregateBucket");
var LogsAggregateBucketValueTimeseriesPoint_1 = require("./LogsAggregateBucketValueTimeseriesPoint");
var LogsAggregateRequest_1 = require("./LogsAggregateRequest");
var LogsAggregateRequestPage_1 = require("./LogsAggregateRequestPage");
var LogsAggregateResponse_1 = require("./LogsAggregateResponse");
var LogsAggregateResponseData_1 = require("./LogsAggregateResponseData");
var LogsAggregateSort_1 = require("./LogsAggregateSort");
var LogsArchive_1 = require("./LogsArchive");
var LogsArchiveAttributes_1 = require("./LogsArchiveAttributes");
var LogsArchiveCreateRequest_1 = require("./LogsArchiveCreateRequest");
var LogsArchiveCreateRequestAttributes_1 = require("./LogsArchiveCreateRequestAttributes");
var LogsArchiveCreateRequestDefinition_1 = require("./LogsArchiveCreateRequestDefinition");
var LogsArchiveDefinition_1 = require("./LogsArchiveDefinition");
var LogsArchiveDestinationAzure_1 = require("./LogsArchiveDestinationAzure");
var LogsArchiveDestinationGCS_1 = require("./LogsArchiveDestinationGCS");
var LogsArchiveDestinationS3_1 = require("./LogsArchiveDestinationS3");
var LogsArchiveIntegrationAzure_1 = require("./LogsArchiveIntegrationAzure");
var LogsArchiveIntegrationGCS_1 = require("./LogsArchiveIntegrationGCS");
var LogsArchiveIntegrationS3_1 = require("./LogsArchiveIntegrationS3");
var LogsArchiveOrder_1 = require("./LogsArchiveOrder");
var LogsArchiveOrderAttributes_1 = require("./LogsArchiveOrderAttributes");
var LogsArchiveOrderDefinition_1 = require("./LogsArchiveOrderDefinition");
var LogsArchives_1 = require("./LogsArchives");
var LogsCompute_1 = require("./LogsCompute");
var LogsGroupBy_1 = require("./LogsGroupBy");
var LogsGroupByHistogram_1 = require("./LogsGroupByHistogram");
var LogsListRequest_1 = require("./LogsListRequest");
var LogsListRequestPage_1 = require("./LogsListRequestPage");
var LogsListResponse_1 = require("./LogsListResponse");
var LogsListResponseLinks_1 = require("./LogsListResponseLinks");
var LogsMetricCompute_1 = require("./LogsMetricCompute");
var LogsMetricCreateAttributes_1 = require("./LogsMetricCreateAttributes");
var LogsMetricCreateData_1 = require("./LogsMetricCreateData");
var LogsMetricCreateRequest_1 = require("./LogsMetricCreateRequest");
var LogsMetricFilter_1 = require("./LogsMetricFilter");
var LogsMetricGroupBy_1 = require("./LogsMetricGroupBy");
var LogsMetricResponse_1 = require("./LogsMetricResponse");
var LogsMetricResponseAttributes_1 = require("./LogsMetricResponseAttributes");
var LogsMetricResponseCompute_1 = require("./LogsMetricResponseCompute");
var LogsMetricResponseData_1 = require("./LogsMetricResponseData");
var LogsMetricResponseFilter_1 = require("./LogsMetricResponseFilter");
var LogsMetricResponseGroupBy_1 = require("./LogsMetricResponseGroupBy");
var LogsMetricUpdateAttributes_1 = require("./LogsMetricUpdateAttributes");
var LogsMetricUpdateData_1 = require("./LogsMetricUpdateData");
var LogsMetricUpdateRequest_1 = require("./LogsMetricUpdateRequest");
var LogsMetricsResponse_1 = require("./LogsMetricsResponse");
var LogsQueryFilter_1 = require("./LogsQueryFilter");
var LogsQueryOptions_1 = require("./LogsQueryOptions");
var LogsResponseMetadata_1 = require("./LogsResponseMetadata");
var LogsResponseMetadataPage_1 = require("./LogsResponseMetadataPage");
var LogsWarning_1 = require("./LogsWarning");
var Metric_1 = require("./Metric");
var MetricAllTags_1 = require("./MetricAllTags");
var MetricAllTagsAttributes_1 = require("./MetricAllTagsAttributes");
var MetricAllTagsResponse_1 = require("./MetricAllTagsResponse");
var MetricDistinctVolume_1 = require("./MetricDistinctVolume");
var MetricDistinctVolumeAttributes_1 = require("./MetricDistinctVolumeAttributes");
var MetricIngestedIndexedVolume_1 = require("./MetricIngestedIndexedVolume");
var MetricIngestedIndexedVolumeAttributes_1 = require("./MetricIngestedIndexedVolumeAttributes");
var MetricTagConfiguration_1 = require("./MetricTagConfiguration");
var MetricTagConfigurationAttributes_1 = require("./MetricTagConfigurationAttributes");
var MetricTagConfigurationCreateAttributes_1 = require("./MetricTagConfigurationCreateAttributes");
var MetricTagConfigurationCreateData_1 = require("./MetricTagConfigurationCreateData");
var MetricTagConfigurationCreateRequest_1 = require("./MetricTagConfigurationCreateRequest");
var MetricTagConfigurationResponse_1 = require("./MetricTagConfigurationResponse");
var MetricTagConfigurationUpdateAttributes_1 = require("./MetricTagConfigurationUpdateAttributes");
var MetricTagConfigurationUpdateData_1 = require("./MetricTagConfigurationUpdateData");
var MetricTagConfigurationUpdateRequest_1 = require("./MetricTagConfigurationUpdateRequest");
var MetricVolumesResponse_1 = require("./MetricVolumesResponse");
var MetricsAndMetricTagConfigurationsResponse_1 = require("./MetricsAndMetricTagConfigurationsResponse");
var Organization_1 = require("./Organization");
var OrganizationAttributes_1 = require("./OrganizationAttributes");
var Pagination_1 = require("./Pagination");
var PartialAPIKey_1 = require("./PartialAPIKey");
var PartialAPIKeyAttributes_1 = require("./PartialAPIKeyAttributes");
var PartialApplicationKey_1 = require("./PartialApplicationKey");
var PartialApplicationKeyAttributes_1 = require("./PartialApplicationKeyAttributes");
var Permission_1 = require("./Permission");
var PermissionAttributes_1 = require("./PermissionAttributes");
var PermissionsResponse_1 = require("./PermissionsResponse");
var ProcessSummariesMeta_1 = require("./ProcessSummariesMeta");
var ProcessSummariesMetaPage_1 = require("./ProcessSummariesMetaPage");
var ProcessSummariesResponse_1 = require("./ProcessSummariesResponse");
var ProcessSummary_1 = require("./ProcessSummary");
var ProcessSummaryAttributes_1 = require("./ProcessSummaryAttributes");
var RelationshipToIncidentIntegrationMetadataData_1 = require("./RelationshipToIncidentIntegrationMetadataData");
var RelationshipToIncidentIntegrationMetadatas_1 = require("./RelationshipToIncidentIntegrationMetadatas");
var RelationshipToIncidentPostmortem_1 = require("./RelationshipToIncidentPostmortem");
var RelationshipToIncidentPostmortemData_1 = require("./RelationshipToIncidentPostmortemData");
var RelationshipToOrganization_1 = require("./RelationshipToOrganization");
var RelationshipToOrganizationData_1 = require("./RelationshipToOrganizationData");
var RelationshipToOrganizations_1 = require("./RelationshipToOrganizations");
var RelationshipToPermission_1 = require("./RelationshipToPermission");
var RelationshipToPermissionData_1 = require("./RelationshipToPermissionData");
var RelationshipToPermissions_1 = require("./RelationshipToPermissions");
var RelationshipToRole_1 = require("./RelationshipToRole");
var RelationshipToRoleData_1 = require("./RelationshipToRoleData");
var RelationshipToRoles_1 = require("./RelationshipToRoles");
var RelationshipToUser_1 = require("./RelationshipToUser");
var RelationshipToUserData_1 = require("./RelationshipToUserData");
var RelationshipToUsers_1 = require("./RelationshipToUsers");
var ResponseMetaAttributes_1 = require("./ResponseMetaAttributes");
var Role_1 = require("./Role");
var RoleAttributes_1 = require("./RoleAttributes");
var RoleCreateAttributes_1 = require("./RoleCreateAttributes");
var RoleCreateData_1 = require("./RoleCreateData");
var RoleCreateRequest_1 = require("./RoleCreateRequest");
var RoleCreateResponse_1 = require("./RoleCreateResponse");
var RoleCreateResponseData_1 = require("./RoleCreateResponseData");
var RoleRelationships_1 = require("./RoleRelationships");
var RoleResponse_1 = require("./RoleResponse");
var RoleResponseRelationships_1 = require("./RoleResponseRelationships");
var RoleUpdateAttributes_1 = require("./RoleUpdateAttributes");
var RoleUpdateData_1 = require("./RoleUpdateData");
var RoleUpdateRequest_1 = require("./RoleUpdateRequest");
var RoleUpdateResponse_1 = require("./RoleUpdateResponse");
var RoleUpdateResponseData_1 = require("./RoleUpdateResponseData");
var RolesResponse_1 = require("./RolesResponse");
var SecurityFilter_1 = require("./SecurityFilter");
var SecurityFilterAttributes_1 = require("./SecurityFilterAttributes");
var SecurityFilterCreateAttributes_1 = require("./SecurityFilterCreateAttributes");
var SecurityFilterCreateData_1 = require("./SecurityFilterCreateData");
var SecurityFilterCreateRequest_1 = require("./SecurityFilterCreateRequest");
var SecurityFilterDeleteResponse_1 = require("./SecurityFilterDeleteResponse");
var SecurityFilterExclusionFilter_1 = require("./SecurityFilterExclusionFilter");
var SecurityFilterExclusionFilterResponse_1 = require("./SecurityFilterExclusionFilterResponse");
var SecurityFilterMeta_1 = require("./SecurityFilterMeta");
var SecurityFilterResponse_1 = require("./SecurityFilterResponse");
var SecurityFilterUpdateAttributes_1 = require("./SecurityFilterUpdateAttributes");
var SecurityFilterUpdateData_1 = require("./SecurityFilterUpdateData");
var SecurityFilterUpdateRequest_1 = require("./SecurityFilterUpdateRequest");
var SecurityFiltersResponse_1 = require("./SecurityFiltersResponse");
var SecurityMonitoringFilter_1 = require("./SecurityMonitoringFilter");
var SecurityMonitoringListRulesResponse_1 = require("./SecurityMonitoringListRulesResponse");
var SecurityMonitoringRuleCase_1 = require("./SecurityMonitoringRuleCase");
var SecurityMonitoringRuleCaseCreate_1 = require("./SecurityMonitoringRuleCaseCreate");
var SecurityMonitoringRuleCreatePayload_1 = require("./SecurityMonitoringRuleCreatePayload");
var SecurityMonitoringRuleNewValueOptions_1 = require("./SecurityMonitoringRuleNewValueOptions");
var SecurityMonitoringRuleOptions_1 = require("./SecurityMonitoringRuleOptions");
var SecurityMonitoringRuleQuery_1 = require("./SecurityMonitoringRuleQuery");
var SecurityMonitoringRuleQueryCreate_1 = require("./SecurityMonitoringRuleQueryCreate");
var SecurityMonitoringRuleResponse_1 = require("./SecurityMonitoringRuleResponse");
var SecurityMonitoringRuleUpdatePayload_1 = require("./SecurityMonitoringRuleUpdatePayload");
var SecurityMonitoringRuntimeAgentRule_1 = require("./SecurityMonitoringRuntimeAgentRule");
var SecurityMonitoringSignal_1 = require("./SecurityMonitoringSignal");
var SecurityMonitoringSignalAttributes_1 = require("./SecurityMonitoringSignalAttributes");
var SecurityMonitoringSignalListRequest_1 = require("./SecurityMonitoringSignalListRequest");
var SecurityMonitoringSignalListRequestFilter_1 = require("./SecurityMonitoringSignalListRequestFilter");
var SecurityMonitoringSignalListRequestPage_1 = require("./SecurityMonitoringSignalListRequestPage");
var SecurityMonitoringSignalsListResponse_1 = require("./SecurityMonitoringSignalsListResponse");
var SecurityMonitoringSignalsListResponseLinks_1 = require("./SecurityMonitoringSignalsListResponseLinks");
var SecurityMonitoringSignalsListResponseMeta_1 = require("./SecurityMonitoringSignalsListResponseMeta");
var SecurityMonitoringSignalsListResponseMetaPage_1 = require("./SecurityMonitoringSignalsListResponseMetaPage");
var User_1 = require("./User");
var UserAttributes_1 = require("./UserAttributes");
var UserCreateAttributes_1 = require("./UserCreateAttributes");
var UserCreateData_1 = require("./UserCreateData");
var UserCreateRequest_1 = require("./UserCreateRequest");
var UserInvitationData_1 = require("./UserInvitationData");
var UserInvitationDataAttributes_1 = require("./UserInvitationDataAttributes");
var UserInvitationRelationships_1 = require("./UserInvitationRelationships");
var UserInvitationResponse_1 = require("./UserInvitationResponse");
var UserInvitationResponseData_1 = require("./UserInvitationResponseData");
var UserInvitationsRequest_1 = require("./UserInvitationsRequest");
var UserInvitationsResponse_1 = require("./UserInvitationsResponse");
var UserRelationships_1 = require("./UserRelationships");
var UserResponse_1 = require("./UserResponse");
var UserResponseRelationships_1 = require("./UserResponseRelationships");
var UserUpdateAttributes_1 = require("./UserUpdateAttributes");
var UserUpdateData_1 = require("./UserUpdateData");
var UserUpdateRequest_1 = require("./UserUpdateRequest");
var UsersResponse_1 = require("./UsersResponse");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0
};
var enumsMap = new Set([
    "APIKeysSort",
    "APIKeysType",
    "ApplicationKeysSort",
    "ApplicationKeysType",
    "DashboardType",
    "IncidentFieldAttributesSingleValueType",
    "IncidentFieldAttributesValueType",
    "IncidentIntegrationMetadataType",
    "IncidentPostmortemType",
    "IncidentRelatedObject",
    "IncidentServiceType",
    "IncidentTeamType",
    "IncidentTimelineCellMarkdownContentType",
    "IncidentType",
    "LogType",
    "LogsAggregateResponseStatus",
    "LogsAggregateSortType",
    "LogsAggregationFunction",
    "LogsArchiveDestinationAzureType",
    "LogsArchiveDestinationGCSType",
    "LogsArchiveDestinationS3Type",
    "LogsArchiveOrderDefinitionType",
    "LogsArchiveState",
    "LogsComputeType",
    "LogsMetricComputeAggregationType",
    "LogsMetricResponseComputeAggregationType",
    "LogsMetricType",
    "LogsSort",
    "LogsSortOrder",
    "MetricDistinctVolumeType",
    "MetricIngestedIndexedVolumeType",
    "MetricTagConfigurationMetricTypes",
    "MetricTagConfigurationType",
    "MetricType",
    "OrganizationsType",
    "PermissionsType",
    "ProcessSummaryType",
    "QuerySortOrder",
    "RolesSort",
    "RolesType",
    "SecurityFilterFilteredDataType",
    "SecurityFilterType",
    "SecurityMonitoringFilterAction",
    "SecurityMonitoringRuleDetectionMethod",
    "SecurityMonitoringRuleEvaluationWindow",
    "SecurityMonitoringRuleKeepAlive",
    "SecurityMonitoringRuleMaxSignalDuration",
    "SecurityMonitoringRuleNewValueOptionsForgetAfter",
    "SecurityMonitoringRuleNewValueOptionsLearningDuration",
    "SecurityMonitoringRuleQueryAggregation",
    "SecurityMonitoringRuleSeverity",
    "SecurityMonitoringSignalType",
    "SecurityMonitoringSignalsSort",
    "UserInvitationsType",
    "UsersType",
]);
var typeMap = {
    "APIErrorResponse": APIErrorResponse_1.APIErrorResponse,
    "APIKeyCreateAttributes": APIKeyCreateAttributes_1.APIKeyCreateAttributes,
    "APIKeyCreateData": APIKeyCreateData_1.APIKeyCreateData,
    "APIKeyCreateRequest": APIKeyCreateRequest_1.APIKeyCreateRequest,
    "APIKeyRelationships": APIKeyRelationships_1.APIKeyRelationships,
    "APIKeyResponse": APIKeyResponse_1.APIKeyResponse,
    "APIKeyUpdateAttributes": APIKeyUpdateAttributes_1.APIKeyUpdateAttributes,
    "APIKeyUpdateData": APIKeyUpdateData_1.APIKeyUpdateData,
    "APIKeyUpdateRequest": APIKeyUpdateRequest_1.APIKeyUpdateRequest,
    "APIKeysResponse": APIKeysResponse_1.APIKeysResponse,
    "ApplicationKeyCreateAttributes": ApplicationKeyCreateAttributes_1.ApplicationKeyCreateAttributes,
    "ApplicationKeyCreateData": ApplicationKeyCreateData_1.ApplicationKeyCreateData,
    "ApplicationKeyCreateRequest": ApplicationKeyCreateRequest_1.ApplicationKeyCreateRequest,
    "ApplicationKeyRelationships": ApplicationKeyRelationships_1.ApplicationKeyRelationships,
    "ApplicationKeyResponse": ApplicationKeyResponse_1.ApplicationKeyResponse,
    "ApplicationKeyUpdateAttributes": ApplicationKeyUpdateAttributes_1.ApplicationKeyUpdateAttributes,
    "ApplicationKeyUpdateData": ApplicationKeyUpdateData_1.ApplicationKeyUpdateData,
    "ApplicationKeyUpdateRequest": ApplicationKeyUpdateRequest_1.ApplicationKeyUpdateRequest,
    "Creator": Creator_1.Creator,
    "DashboardListAddItemsRequest": DashboardListAddItemsRequest_1.DashboardListAddItemsRequest,
    "DashboardListAddItemsResponse": DashboardListAddItemsResponse_1.DashboardListAddItemsResponse,
    "DashboardListDeleteItemsRequest": DashboardListDeleteItemsRequest_1.DashboardListDeleteItemsRequest,
    "DashboardListDeleteItemsResponse": DashboardListDeleteItemsResponse_1.DashboardListDeleteItemsResponse,
    "DashboardListItem": DashboardListItem_1.DashboardListItem,
    "DashboardListItemRequest": DashboardListItemRequest_1.DashboardListItemRequest,
    "DashboardListItemResponse": DashboardListItemResponse_1.DashboardListItemResponse,
    "DashboardListItems": DashboardListItems_1.DashboardListItems,
    "DashboardListUpdateItemsRequest": DashboardListUpdateItemsRequest_1.DashboardListUpdateItemsRequest,
    "DashboardListUpdateItemsResponse": DashboardListUpdateItemsResponse_1.DashboardListUpdateItemsResponse,
    "FullAPIKey": FullAPIKey_1.FullAPIKey,
    "FullAPIKeyAttributes": FullAPIKeyAttributes_1.FullAPIKeyAttributes,
    "FullApplicationKey": FullApplicationKey_1.FullApplicationKey,
    "FullApplicationKeyAttributes": FullApplicationKeyAttributes_1.FullApplicationKeyAttributes,
    "IncidentCreateAttributes": IncidentCreateAttributes_1.IncidentCreateAttributes,
    "IncidentCreateData": IncidentCreateData_1.IncidentCreateData,
    "IncidentCreateRelationships": IncidentCreateRelationships_1.IncidentCreateRelationships,
    "IncidentCreateRequest": IncidentCreateRequest_1.IncidentCreateRequest,
    "IncidentFieldAttributesMultipleValue": IncidentFieldAttributesMultipleValue_1.IncidentFieldAttributesMultipleValue,
    "IncidentFieldAttributesSingleValue": IncidentFieldAttributesSingleValue_1.IncidentFieldAttributesSingleValue,
    "IncidentResponse": IncidentResponse_1.IncidentResponse,
    "IncidentResponseAttributes": IncidentResponseAttributes_1.IncidentResponseAttributes,
    "IncidentResponseData": IncidentResponseData_1.IncidentResponseData,
    "IncidentResponseRelationships": IncidentResponseRelationships_1.IncidentResponseRelationships,
    "IncidentServiceCreateAttributes": IncidentServiceCreateAttributes_1.IncidentServiceCreateAttributes,
    "IncidentServiceCreateData": IncidentServiceCreateData_1.IncidentServiceCreateData,
    "IncidentServiceCreateRequest": IncidentServiceCreateRequest_1.IncidentServiceCreateRequest,
    "IncidentServiceRelationships": IncidentServiceRelationships_1.IncidentServiceRelationships,
    "IncidentServiceResponse": IncidentServiceResponse_1.IncidentServiceResponse,
    "IncidentServiceResponseAttributes": IncidentServiceResponseAttributes_1.IncidentServiceResponseAttributes,
    "IncidentServiceResponseData": IncidentServiceResponseData_1.IncidentServiceResponseData,
    "IncidentServiceUpdateAttributes": IncidentServiceUpdateAttributes_1.IncidentServiceUpdateAttributes,
    "IncidentServiceUpdateData": IncidentServiceUpdateData_1.IncidentServiceUpdateData,
    "IncidentServiceUpdateRequest": IncidentServiceUpdateRequest_1.IncidentServiceUpdateRequest,
    "IncidentServicesResponse": IncidentServicesResponse_1.IncidentServicesResponse,
    "IncidentServicesResponseMeta": IncidentServicesResponseMeta_1.IncidentServicesResponseMeta,
    "IncidentServicesResponseMetaPagination": IncidentServicesResponseMetaPagination_1.IncidentServicesResponseMetaPagination,
    "IncidentTeamCreateAttributes": IncidentTeamCreateAttributes_1.IncidentTeamCreateAttributes,
    "IncidentTeamCreateData": IncidentTeamCreateData_1.IncidentTeamCreateData,
    "IncidentTeamCreateRequest": IncidentTeamCreateRequest_1.IncidentTeamCreateRequest,
    "IncidentTeamRelationships": IncidentTeamRelationships_1.IncidentTeamRelationships,
    "IncidentTeamResponse": IncidentTeamResponse_1.IncidentTeamResponse,
    "IncidentTeamResponseAttributes": IncidentTeamResponseAttributes_1.IncidentTeamResponseAttributes,
    "IncidentTeamResponseData": IncidentTeamResponseData_1.IncidentTeamResponseData,
    "IncidentTeamUpdateAttributes": IncidentTeamUpdateAttributes_1.IncidentTeamUpdateAttributes,
    "IncidentTeamUpdateData": IncidentTeamUpdateData_1.IncidentTeamUpdateData,
    "IncidentTeamUpdateRequest": IncidentTeamUpdateRequest_1.IncidentTeamUpdateRequest,
    "IncidentTeamsResponse": IncidentTeamsResponse_1.IncidentTeamsResponse,
    "IncidentTimelineCellMarkdownCreateAttributes": IncidentTimelineCellMarkdownCreateAttributes_1.IncidentTimelineCellMarkdownCreateAttributes,
    "IncidentTimelineCellMarkdownCreateAttributesContent": IncidentTimelineCellMarkdownCreateAttributesContent_1.IncidentTimelineCellMarkdownCreateAttributesContent,
    "IncidentUpdateAttributes": IncidentUpdateAttributes_1.IncidentUpdateAttributes,
    "IncidentUpdateData": IncidentUpdateData_1.IncidentUpdateData,
    "IncidentUpdateRelationships": IncidentUpdateRelationships_1.IncidentUpdateRelationships,
    "IncidentUpdateRequest": IncidentUpdateRequest_1.IncidentUpdateRequest,
    "IncidentsResponse": IncidentsResponse_1.IncidentsResponse,
    "ListApplicationKeysResponse": ListApplicationKeysResponse_1.ListApplicationKeysResponse,
    "Log": Log_1.Log,
    "LogAttributes": LogAttributes_1.LogAttributes,
    "LogsAggregateBucket": LogsAggregateBucket_1.LogsAggregateBucket,
    "LogsAggregateBucketValueTimeseriesPoint": LogsAggregateBucketValueTimeseriesPoint_1.LogsAggregateBucketValueTimeseriesPoint,
    "LogsAggregateRequest": LogsAggregateRequest_1.LogsAggregateRequest,
    "LogsAggregateRequestPage": LogsAggregateRequestPage_1.LogsAggregateRequestPage,
    "LogsAggregateResponse": LogsAggregateResponse_1.LogsAggregateResponse,
    "LogsAggregateResponseData": LogsAggregateResponseData_1.LogsAggregateResponseData,
    "LogsAggregateSort": LogsAggregateSort_1.LogsAggregateSort,
    "LogsArchive": LogsArchive_1.LogsArchive,
    "LogsArchiveAttributes": LogsArchiveAttributes_1.LogsArchiveAttributes,
    "LogsArchiveCreateRequest": LogsArchiveCreateRequest_1.LogsArchiveCreateRequest,
    "LogsArchiveCreateRequestAttributes": LogsArchiveCreateRequestAttributes_1.LogsArchiveCreateRequestAttributes,
    "LogsArchiveCreateRequestDefinition": LogsArchiveCreateRequestDefinition_1.LogsArchiveCreateRequestDefinition,
    "LogsArchiveDefinition": LogsArchiveDefinition_1.LogsArchiveDefinition,
    "LogsArchiveDestinationAzure": LogsArchiveDestinationAzure_1.LogsArchiveDestinationAzure,
    "LogsArchiveDestinationGCS": LogsArchiveDestinationGCS_1.LogsArchiveDestinationGCS,
    "LogsArchiveDestinationS3": LogsArchiveDestinationS3_1.LogsArchiveDestinationS3,
    "LogsArchiveIntegrationAzure": LogsArchiveIntegrationAzure_1.LogsArchiveIntegrationAzure,
    "LogsArchiveIntegrationGCS": LogsArchiveIntegrationGCS_1.LogsArchiveIntegrationGCS,
    "LogsArchiveIntegrationS3": LogsArchiveIntegrationS3_1.LogsArchiveIntegrationS3,
    "LogsArchiveOrder": LogsArchiveOrder_1.LogsArchiveOrder,
    "LogsArchiveOrderAttributes": LogsArchiveOrderAttributes_1.LogsArchiveOrderAttributes,
    "LogsArchiveOrderDefinition": LogsArchiveOrderDefinition_1.LogsArchiveOrderDefinition,
    "LogsArchives": LogsArchives_1.LogsArchives,
    "LogsCompute": LogsCompute_1.LogsCompute,
    "LogsGroupBy": LogsGroupBy_1.LogsGroupBy,
    "LogsGroupByHistogram": LogsGroupByHistogram_1.LogsGroupByHistogram,
    "LogsListRequest": LogsListRequest_1.LogsListRequest,
    "LogsListRequestPage": LogsListRequestPage_1.LogsListRequestPage,
    "LogsListResponse": LogsListResponse_1.LogsListResponse,
    "LogsListResponseLinks": LogsListResponseLinks_1.LogsListResponseLinks,
    "LogsMetricCompute": LogsMetricCompute_1.LogsMetricCompute,
    "LogsMetricCreateAttributes": LogsMetricCreateAttributes_1.LogsMetricCreateAttributes,
    "LogsMetricCreateData": LogsMetricCreateData_1.LogsMetricCreateData,
    "LogsMetricCreateRequest": LogsMetricCreateRequest_1.LogsMetricCreateRequest,
    "LogsMetricFilter": LogsMetricFilter_1.LogsMetricFilter,
    "LogsMetricGroupBy": LogsMetricGroupBy_1.LogsMetricGroupBy,
    "LogsMetricResponse": LogsMetricResponse_1.LogsMetricResponse,
    "LogsMetricResponseAttributes": LogsMetricResponseAttributes_1.LogsMetricResponseAttributes,
    "LogsMetricResponseCompute": LogsMetricResponseCompute_1.LogsMetricResponseCompute,
    "LogsMetricResponseData": LogsMetricResponseData_1.LogsMetricResponseData,
    "LogsMetricResponseFilter": LogsMetricResponseFilter_1.LogsMetricResponseFilter,
    "LogsMetricResponseGroupBy": LogsMetricResponseGroupBy_1.LogsMetricResponseGroupBy,
    "LogsMetricUpdateAttributes": LogsMetricUpdateAttributes_1.LogsMetricUpdateAttributes,
    "LogsMetricUpdateData": LogsMetricUpdateData_1.LogsMetricUpdateData,
    "LogsMetricUpdateRequest": LogsMetricUpdateRequest_1.LogsMetricUpdateRequest,
    "LogsMetricsResponse": LogsMetricsResponse_1.LogsMetricsResponse,
    "LogsQueryFilter": LogsQueryFilter_1.LogsQueryFilter,
    "LogsQueryOptions": LogsQueryOptions_1.LogsQueryOptions,
    "LogsResponseMetadata": LogsResponseMetadata_1.LogsResponseMetadata,
    "LogsResponseMetadataPage": LogsResponseMetadataPage_1.LogsResponseMetadataPage,
    "LogsWarning": LogsWarning_1.LogsWarning,
    "Metric": Metric_1.Metric,
    "MetricAllTags": MetricAllTags_1.MetricAllTags,
    "MetricAllTagsAttributes": MetricAllTagsAttributes_1.MetricAllTagsAttributes,
    "MetricAllTagsResponse": MetricAllTagsResponse_1.MetricAllTagsResponse,
    "MetricDistinctVolume": MetricDistinctVolume_1.MetricDistinctVolume,
    "MetricDistinctVolumeAttributes": MetricDistinctVolumeAttributes_1.MetricDistinctVolumeAttributes,
    "MetricIngestedIndexedVolume": MetricIngestedIndexedVolume_1.MetricIngestedIndexedVolume,
    "MetricIngestedIndexedVolumeAttributes": MetricIngestedIndexedVolumeAttributes_1.MetricIngestedIndexedVolumeAttributes,
    "MetricTagConfiguration": MetricTagConfiguration_1.MetricTagConfiguration,
    "MetricTagConfigurationAttributes": MetricTagConfigurationAttributes_1.MetricTagConfigurationAttributes,
    "MetricTagConfigurationCreateAttributes": MetricTagConfigurationCreateAttributes_1.MetricTagConfigurationCreateAttributes,
    "MetricTagConfigurationCreateData": MetricTagConfigurationCreateData_1.MetricTagConfigurationCreateData,
    "MetricTagConfigurationCreateRequest": MetricTagConfigurationCreateRequest_1.MetricTagConfigurationCreateRequest,
    "MetricTagConfigurationResponse": MetricTagConfigurationResponse_1.MetricTagConfigurationResponse,
    "MetricTagConfigurationUpdateAttributes": MetricTagConfigurationUpdateAttributes_1.MetricTagConfigurationUpdateAttributes,
    "MetricTagConfigurationUpdateData": MetricTagConfigurationUpdateData_1.MetricTagConfigurationUpdateData,
    "MetricTagConfigurationUpdateRequest": MetricTagConfigurationUpdateRequest_1.MetricTagConfigurationUpdateRequest,
    "MetricVolumesResponse": MetricVolumesResponse_1.MetricVolumesResponse,
    "MetricsAndMetricTagConfigurationsResponse": MetricsAndMetricTagConfigurationsResponse_1.MetricsAndMetricTagConfigurationsResponse,
    "Organization": Organization_1.Organization,
    "OrganizationAttributes": OrganizationAttributes_1.OrganizationAttributes,
    "Pagination": Pagination_1.Pagination,
    "PartialAPIKey": PartialAPIKey_1.PartialAPIKey,
    "PartialAPIKeyAttributes": PartialAPIKeyAttributes_1.PartialAPIKeyAttributes,
    "PartialApplicationKey": PartialApplicationKey_1.PartialApplicationKey,
    "PartialApplicationKeyAttributes": PartialApplicationKeyAttributes_1.PartialApplicationKeyAttributes,
    "Permission": Permission_1.Permission,
    "PermissionAttributes": PermissionAttributes_1.PermissionAttributes,
    "PermissionsResponse": PermissionsResponse_1.PermissionsResponse,
    "ProcessSummariesMeta": ProcessSummariesMeta_1.ProcessSummariesMeta,
    "ProcessSummariesMetaPage": ProcessSummariesMetaPage_1.ProcessSummariesMetaPage,
    "ProcessSummariesResponse": ProcessSummariesResponse_1.ProcessSummariesResponse,
    "ProcessSummary": ProcessSummary_1.ProcessSummary,
    "ProcessSummaryAttributes": ProcessSummaryAttributes_1.ProcessSummaryAttributes,
    "RelationshipToIncidentIntegrationMetadataData": RelationshipToIncidentIntegrationMetadataData_1.RelationshipToIncidentIntegrationMetadataData,
    "RelationshipToIncidentIntegrationMetadatas": RelationshipToIncidentIntegrationMetadatas_1.RelationshipToIncidentIntegrationMetadatas,
    "RelationshipToIncidentPostmortem": RelationshipToIncidentPostmortem_1.RelationshipToIncidentPostmortem,
    "RelationshipToIncidentPostmortemData": RelationshipToIncidentPostmortemData_1.RelationshipToIncidentPostmortemData,
    "RelationshipToOrganization": RelationshipToOrganization_1.RelationshipToOrganization,
    "RelationshipToOrganizationData": RelationshipToOrganizationData_1.RelationshipToOrganizationData,
    "RelationshipToOrganizations": RelationshipToOrganizations_1.RelationshipToOrganizations,
    "RelationshipToPermission": RelationshipToPermission_1.RelationshipToPermission,
    "RelationshipToPermissionData": RelationshipToPermissionData_1.RelationshipToPermissionData,
    "RelationshipToPermissions": RelationshipToPermissions_1.RelationshipToPermissions,
    "RelationshipToRole": RelationshipToRole_1.RelationshipToRole,
    "RelationshipToRoleData": RelationshipToRoleData_1.RelationshipToRoleData,
    "RelationshipToRoles": RelationshipToRoles_1.RelationshipToRoles,
    "RelationshipToUser": RelationshipToUser_1.RelationshipToUser,
    "RelationshipToUserData": RelationshipToUserData_1.RelationshipToUserData,
    "RelationshipToUsers": RelationshipToUsers_1.RelationshipToUsers,
    "ResponseMetaAttributes": ResponseMetaAttributes_1.ResponseMetaAttributes,
    "Role": Role_1.Role,
    "RoleAttributes": RoleAttributes_1.RoleAttributes,
    "RoleCreateAttributes": RoleCreateAttributes_1.RoleCreateAttributes,
    "RoleCreateData": RoleCreateData_1.RoleCreateData,
    "RoleCreateRequest": RoleCreateRequest_1.RoleCreateRequest,
    "RoleCreateResponse": RoleCreateResponse_1.RoleCreateResponse,
    "RoleCreateResponseData": RoleCreateResponseData_1.RoleCreateResponseData,
    "RoleRelationships": RoleRelationships_1.RoleRelationships,
    "RoleResponse": RoleResponse_1.RoleResponse,
    "RoleResponseRelationships": RoleResponseRelationships_1.RoleResponseRelationships,
    "RoleUpdateAttributes": RoleUpdateAttributes_1.RoleUpdateAttributes,
    "RoleUpdateData": RoleUpdateData_1.RoleUpdateData,
    "RoleUpdateRequest": RoleUpdateRequest_1.RoleUpdateRequest,
    "RoleUpdateResponse": RoleUpdateResponse_1.RoleUpdateResponse,
    "RoleUpdateResponseData": RoleUpdateResponseData_1.RoleUpdateResponseData,
    "RolesResponse": RolesResponse_1.RolesResponse,
    "SecurityFilter": SecurityFilter_1.SecurityFilter,
    "SecurityFilterAttributes": SecurityFilterAttributes_1.SecurityFilterAttributes,
    "SecurityFilterCreateAttributes": SecurityFilterCreateAttributes_1.SecurityFilterCreateAttributes,
    "SecurityFilterCreateData": SecurityFilterCreateData_1.SecurityFilterCreateData,
    "SecurityFilterCreateRequest": SecurityFilterCreateRequest_1.SecurityFilterCreateRequest,
    "SecurityFilterDeleteResponse": SecurityFilterDeleteResponse_1.SecurityFilterDeleteResponse,
    "SecurityFilterExclusionFilter": SecurityFilterExclusionFilter_1.SecurityFilterExclusionFilter,
    "SecurityFilterExclusionFilterResponse": SecurityFilterExclusionFilterResponse_1.SecurityFilterExclusionFilterResponse,
    "SecurityFilterMeta": SecurityFilterMeta_1.SecurityFilterMeta,
    "SecurityFilterResponse": SecurityFilterResponse_1.SecurityFilterResponse,
    "SecurityFilterUpdateAttributes": SecurityFilterUpdateAttributes_1.SecurityFilterUpdateAttributes,
    "SecurityFilterUpdateData": SecurityFilterUpdateData_1.SecurityFilterUpdateData,
    "SecurityFilterUpdateRequest": SecurityFilterUpdateRequest_1.SecurityFilterUpdateRequest,
    "SecurityFiltersResponse": SecurityFiltersResponse_1.SecurityFiltersResponse,
    "SecurityMonitoringFilter": SecurityMonitoringFilter_1.SecurityMonitoringFilter,
    "SecurityMonitoringListRulesResponse": SecurityMonitoringListRulesResponse_1.SecurityMonitoringListRulesResponse,
    "SecurityMonitoringRuleCase": SecurityMonitoringRuleCase_1.SecurityMonitoringRuleCase,
    "SecurityMonitoringRuleCaseCreate": SecurityMonitoringRuleCaseCreate_1.SecurityMonitoringRuleCaseCreate,
    "SecurityMonitoringRuleCreatePayload": SecurityMonitoringRuleCreatePayload_1.SecurityMonitoringRuleCreatePayload,
    "SecurityMonitoringRuleNewValueOptions": SecurityMonitoringRuleNewValueOptions_1.SecurityMonitoringRuleNewValueOptions,
    "SecurityMonitoringRuleOptions": SecurityMonitoringRuleOptions_1.SecurityMonitoringRuleOptions,
    "SecurityMonitoringRuleQuery": SecurityMonitoringRuleQuery_1.SecurityMonitoringRuleQuery,
    "SecurityMonitoringRuleQueryCreate": SecurityMonitoringRuleQueryCreate_1.SecurityMonitoringRuleQueryCreate,
    "SecurityMonitoringRuleResponse": SecurityMonitoringRuleResponse_1.SecurityMonitoringRuleResponse,
    "SecurityMonitoringRuleUpdatePayload": SecurityMonitoringRuleUpdatePayload_1.SecurityMonitoringRuleUpdatePayload,
    "SecurityMonitoringRuntimeAgentRule": SecurityMonitoringRuntimeAgentRule_1.SecurityMonitoringRuntimeAgentRule,
    "SecurityMonitoringSignal": SecurityMonitoringSignal_1.SecurityMonitoringSignal,
    "SecurityMonitoringSignalAttributes": SecurityMonitoringSignalAttributes_1.SecurityMonitoringSignalAttributes,
    "SecurityMonitoringSignalListRequest": SecurityMonitoringSignalListRequest_1.SecurityMonitoringSignalListRequest,
    "SecurityMonitoringSignalListRequestFilter": SecurityMonitoringSignalListRequestFilter_1.SecurityMonitoringSignalListRequestFilter,
    "SecurityMonitoringSignalListRequestPage": SecurityMonitoringSignalListRequestPage_1.SecurityMonitoringSignalListRequestPage,
    "SecurityMonitoringSignalsListResponse": SecurityMonitoringSignalsListResponse_1.SecurityMonitoringSignalsListResponse,
    "SecurityMonitoringSignalsListResponseLinks": SecurityMonitoringSignalsListResponseLinks_1.SecurityMonitoringSignalsListResponseLinks,
    "SecurityMonitoringSignalsListResponseMeta": SecurityMonitoringSignalsListResponseMeta_1.SecurityMonitoringSignalsListResponseMeta,
    "SecurityMonitoringSignalsListResponseMetaPage": SecurityMonitoringSignalsListResponseMetaPage_1.SecurityMonitoringSignalsListResponseMetaPage,
    "User": User_1.User,
    "UserAttributes": UserAttributes_1.UserAttributes,
    "UserCreateAttributes": UserCreateAttributes_1.UserCreateAttributes,
    "UserCreateData": UserCreateData_1.UserCreateData,
    "UserCreateRequest": UserCreateRequest_1.UserCreateRequest,
    "UserInvitationData": UserInvitationData_1.UserInvitationData,
    "UserInvitationDataAttributes": UserInvitationDataAttributes_1.UserInvitationDataAttributes,
    "UserInvitationRelationships": UserInvitationRelationships_1.UserInvitationRelationships,
    "UserInvitationResponse": UserInvitationResponse_1.UserInvitationResponse,
    "UserInvitationResponseData": UserInvitationResponseData_1.UserInvitationResponseData,
    "UserInvitationsRequest": UserInvitationsRequest_1.UserInvitationsRequest,
    "UserInvitationsResponse": UserInvitationsResponse_1.UserInvitationsResponse,
    "UserRelationships": UserRelationships_1.UserRelationships,
    "UserResponse": UserResponse_1.UserResponse,
    "UserResponseRelationships": UserResponseRelationships_1.UserResponseRelationships,
    "UserUpdateAttributes": UserUpdateAttributes_1.UserUpdateAttributes,
    "UserUpdateData": UserUpdateData_1.UserUpdateData,
    "UserUpdateRequest": UserUpdateRequest_1.UserUpdateRequest,
    "UsersResponse": UsersResponse_1.UsersResponse,
};
var oneOfMap = {
    "APIKeyResponseIncludedItem": ["User"],
    "ApplicationKeyResponseIncludedItem": ["Role", "User"],
    "IncidentFieldAttributes": ["IncidentFieldAttributesMultipleValue", "IncidentFieldAttributesSingleValue"],
    "IncidentResponseIncludedItem": ["User"],
    "IncidentServiceIncludedItems": ["User"],
    "IncidentTeamIncludedItems": ["User"],
    "IncidentTimelineCellCreateAttributes": ["IncidentTimelineCellMarkdownCreateAttributes"],
    "LogsAggregateBucketValue": ["Array<LogsAggregateBucketValueTimeseriesPoint>", "number", "string"],
    "LogsArchiveCreateRequestDestination": ["LogsArchiveDestinationAzure", "LogsArchiveDestinationGCS", "LogsArchiveDestinationS3"],
    "LogsArchiveDestination": ["LogsArchiveDestinationAzure", "LogsArchiveDestinationGCS", "LogsArchiveDestinationS3"],
    "LogsGroupByMissing": ["number", "string"],
    "LogsGroupByTotal": ["boolean", "number", "string"],
    "MetricVolumes": ["MetricDistinctVolume", "MetricIngestedIndexedVolume"],
    "MetricsAndMetricTagConfigurations": ["Metric", "MetricTagConfiguration"],
    "UserResponseIncludedItem": ["Organization", "Permission", "Role"],
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
            subType = subType.substring(0, subType.length - 3); // Type; } => Type
            var transformedData = {};
            for (var k in data) {
                var date = data[k];
                transformedData[k] = ObjectSerializer.serialize(date, subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            if ("string" == typeof data) {
                return data;
            }
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (oneOfMap[type]) {
                var oneOfs = [];
                for (var _i = 0, _a = oneOfMap[type]; _i < _a.length; _i++) {
                    var oneOf = _a[_i];
                    try {
                        oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
                    }
                    catch (e) {
                        console.debug("could not serialize " + oneOf + " (" + e + ")");
                    }
                }
                if (oneOfs.length > 1) {
                    throw new TypeError(data + " matches multiple types from " + oneOfMap[type] + " " + oneOfs);
                }
                if (oneOfs.length == 0) {
                    throw new TypeError(data + " doesn't match any type from " + oneOfMap[type] + " " + oneOfs);
                }
                return oneOfs[0];
            }
            if (!typeMap[type]) { // dont know the type
                throw new TypeError("unknown type '" + type + "'");
            }
            return typeMap[type].serialize(data);
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
            subType = subType.substring(0, subType.length - 3); // Type; } => Type
            var transformedData = {};
            for (var k in data) {
                var date = data[k];
                transformedData[k] = ObjectSerializer.deserialize(date, subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) { // is Enum
                return data;
            }
            if (oneOfMap[type]) {
                var oneOfs = [];
                for (var _i = 0, _a = oneOfMap[type]; _i < _a.length; _i++) {
                    var oneOf = _a[_i];
                    try {
                        oneOfs.push(ObjectSerializer.deserialize(data, oneOf, format));
                    }
                    catch (e) {
                        console.debug("could not deserialize " + oneOf + " (" + e + ")");
                    }
                }
                if (oneOfs.length > 1) {
                    throw new TypeError(data + " matches multiple types from " + oneOfMap[type] + " " + oneOfs);
                }
                if (oneOfs.length == 0) {
                    throw new TypeError(data + " doesn't match any type from " + oneOfMap[type] + " " + oneOfs);
                }
                return oneOfs[0];
            }
            if (!typeMap[type]) { // dont know the type
                throw new TypeError("unknown type '" + type + "'");
            }
            return typeMap[type].deserialize(data);
        }
    };
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    /**
     * Convert data to a string according the given media type
     */
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    /**
     * Parse data from a string according to the given media type
     */
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json" || mediaType === "text/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map