import { APIErrorResponse } from './APIErrorResponse';
import { APIKeyCreateAttributes } from './APIKeyCreateAttributes';
import { APIKeyCreateData } from './APIKeyCreateData';
import { APIKeyCreateRequest } from './APIKeyCreateRequest';
import { APIKeyRelationships } from './APIKeyRelationships';
import { APIKeyResponse } from './APIKeyResponse';
import { APIKeyResponseIncludedItem } from './APIKeyResponseIncludedItem';
import { APIKeyUpdateAttributes } from './APIKeyUpdateAttributes';
import { APIKeyUpdateData } from './APIKeyUpdateData';
import { APIKeyUpdateRequest } from './APIKeyUpdateRequest';
import { APIKeysResponse } from './APIKeysResponse';
import { APIKeysSort } from './APIKeysSort';
import { APIKeysType } from './APIKeysType';
import { ApplicationKeyCreateAttributes } from './ApplicationKeyCreateAttributes';
import { ApplicationKeyCreateData } from './ApplicationKeyCreateData';
import { ApplicationKeyCreateRequest } from './ApplicationKeyCreateRequest';
import { ApplicationKeyRelationships } from './ApplicationKeyRelationships';
import { ApplicationKeyResponse } from './ApplicationKeyResponse';
import { ApplicationKeyResponseIncludedItem } from './ApplicationKeyResponseIncludedItem';
import { ApplicationKeyUpdateAttributes } from './ApplicationKeyUpdateAttributes';
import { ApplicationKeyUpdateData } from './ApplicationKeyUpdateData';
import { ApplicationKeyUpdateRequest } from './ApplicationKeyUpdateRequest';
import { ApplicationKeysSort } from './ApplicationKeysSort';
import { ApplicationKeysType } from './ApplicationKeysType';
import { ContentEncoding } from './ContentEncoding';
import { Creator } from './Creator';
import { DashboardListAddItemsRequest } from './DashboardListAddItemsRequest';
import { DashboardListAddItemsResponse } from './DashboardListAddItemsResponse';
import { DashboardListDeleteItemsRequest } from './DashboardListDeleteItemsRequest';
import { DashboardListDeleteItemsResponse } from './DashboardListDeleteItemsResponse';
import { DashboardListItem } from './DashboardListItem';
import { DashboardListItemRequest } from './DashboardListItemRequest';
import { DashboardListItemResponse } from './DashboardListItemResponse';
import { DashboardListItems } from './DashboardListItems';
import { DashboardListUpdateItemsRequest } from './DashboardListUpdateItemsRequest';
import { DashboardListUpdateItemsResponse } from './DashboardListUpdateItemsResponse';
import { DashboardType } from './DashboardType';
import { FullAPIKey } from './FullAPIKey';
import { FullAPIKeyAttributes } from './FullAPIKeyAttributes';
import { FullApplicationKey } from './FullApplicationKey';
import { FullApplicationKeyAttributes } from './FullApplicationKeyAttributes';
import { HTTPLogError } from './HTTPLogError';
import { HTTPLogErrors } from './HTTPLogErrors';
import { HTTPLogItem } from './HTTPLogItem';
import { IncidentCreateAttributes } from './IncidentCreateAttributes';
import { IncidentCreateData } from './IncidentCreateData';
import { IncidentCreateRelationships } from './IncidentCreateRelationships';
import { IncidentCreateRequest } from './IncidentCreateRequest';
import { IncidentFieldAttributes } from './IncidentFieldAttributes';
import { IncidentFieldAttributesMultipleValue } from './IncidentFieldAttributesMultipleValue';
import { IncidentFieldAttributesSingleValue } from './IncidentFieldAttributesSingleValue';
import { IncidentFieldAttributesSingleValueType } from './IncidentFieldAttributesSingleValueType';
import { IncidentFieldAttributesValueType } from './IncidentFieldAttributesValueType';
import { IncidentIntegrationMetadataType } from './IncidentIntegrationMetadataType';
import { IncidentNotificationHandle } from './IncidentNotificationHandle';
import { IncidentPostmortemType } from './IncidentPostmortemType';
import { IncidentRelatedObject } from './IncidentRelatedObject';
import { IncidentResponse } from './IncidentResponse';
import { IncidentResponseAttributes } from './IncidentResponseAttributes';
import { IncidentResponseData } from './IncidentResponseData';
import { IncidentResponseIncludedItem } from './IncidentResponseIncludedItem';
import { IncidentResponseRelationships } from './IncidentResponseRelationships';
import { IncidentServiceCreateAttributes } from './IncidentServiceCreateAttributes';
import { IncidentServiceCreateData } from './IncidentServiceCreateData';
import { IncidentServiceCreateRequest } from './IncidentServiceCreateRequest';
import { IncidentServiceIncludedItems } from './IncidentServiceIncludedItems';
import { IncidentServiceRelationships } from './IncidentServiceRelationships';
import { IncidentServiceResponse } from './IncidentServiceResponse';
import { IncidentServiceResponseAttributes } from './IncidentServiceResponseAttributes';
import { IncidentServiceResponseData } from './IncidentServiceResponseData';
import { IncidentServiceType } from './IncidentServiceType';
import { IncidentServiceUpdateAttributes } from './IncidentServiceUpdateAttributes';
import { IncidentServiceUpdateData } from './IncidentServiceUpdateData';
import { IncidentServiceUpdateRequest } from './IncidentServiceUpdateRequest';
import { IncidentServicesResponse } from './IncidentServicesResponse';
import { IncidentServicesResponseMeta } from './IncidentServicesResponseMeta';
import { IncidentServicesResponseMetaPagination } from './IncidentServicesResponseMetaPagination';
import { IncidentTeamCreateAttributes } from './IncidentTeamCreateAttributes';
import { IncidentTeamCreateData } from './IncidentTeamCreateData';
import { IncidentTeamCreateRequest } from './IncidentTeamCreateRequest';
import { IncidentTeamIncludedItems } from './IncidentTeamIncludedItems';
import { IncidentTeamRelationships } from './IncidentTeamRelationships';
import { IncidentTeamResponse } from './IncidentTeamResponse';
import { IncidentTeamResponseAttributes } from './IncidentTeamResponseAttributes';
import { IncidentTeamResponseData } from './IncidentTeamResponseData';
import { IncidentTeamType } from './IncidentTeamType';
import { IncidentTeamUpdateAttributes } from './IncidentTeamUpdateAttributes';
import { IncidentTeamUpdateData } from './IncidentTeamUpdateData';
import { IncidentTeamUpdateRequest } from './IncidentTeamUpdateRequest';
import { IncidentTeamsResponse } from './IncidentTeamsResponse';
import { IncidentTimelineCellCreateAttributes } from './IncidentTimelineCellCreateAttributes';
import { IncidentTimelineCellMarkdownContentType } from './IncidentTimelineCellMarkdownContentType';
import { IncidentTimelineCellMarkdownCreateAttributes } from './IncidentTimelineCellMarkdownCreateAttributes';
import { IncidentTimelineCellMarkdownCreateAttributesContent } from './IncidentTimelineCellMarkdownCreateAttributesContent';
import { IncidentType } from './IncidentType';
import { IncidentUpdateAttributes } from './IncidentUpdateAttributes';
import { IncidentUpdateData } from './IncidentUpdateData';
import { IncidentUpdateRelationships } from './IncidentUpdateRelationships';
import { IncidentUpdateRequest } from './IncidentUpdateRequest';
import { IncidentsResponse } from './IncidentsResponse';
import { ListApplicationKeysResponse } from './ListApplicationKeysResponse';
import { Log } from './Log';
import { LogAttributes } from './LogAttributes';
import { LogType } from './LogType';
import { LogsAggregateBucket } from './LogsAggregateBucket';
import { LogsAggregateBucketValue } from './LogsAggregateBucketValue';
import { LogsAggregateBucketValueTimeseriesPoint } from './LogsAggregateBucketValueTimeseriesPoint';
import { LogsAggregateRequest } from './LogsAggregateRequest';
import { LogsAggregateRequestPage } from './LogsAggregateRequestPage';
import { LogsAggregateResponse } from './LogsAggregateResponse';
import { LogsAggregateResponseData } from './LogsAggregateResponseData';
import { LogsAggregateResponseStatus } from './LogsAggregateResponseStatus';
import { LogsAggregateSort } from './LogsAggregateSort';
import { LogsAggregateSortType } from './LogsAggregateSortType';
import { LogsAggregationFunction } from './LogsAggregationFunction';
import { LogsArchive } from './LogsArchive';
import { LogsArchiveAttributes } from './LogsArchiveAttributes';
import { LogsArchiveCreateRequest } from './LogsArchiveCreateRequest';
import { LogsArchiveCreateRequestAttributes } from './LogsArchiveCreateRequestAttributes';
import { LogsArchiveCreateRequestDefinition } from './LogsArchiveCreateRequestDefinition';
import { LogsArchiveCreateRequestDestination } from './LogsArchiveCreateRequestDestination';
import { LogsArchiveDefinition } from './LogsArchiveDefinition';
import { LogsArchiveDestination } from './LogsArchiveDestination';
import { LogsArchiveDestinationAzure } from './LogsArchiveDestinationAzure';
import { LogsArchiveDestinationAzureType } from './LogsArchiveDestinationAzureType';
import { LogsArchiveDestinationGCS } from './LogsArchiveDestinationGCS';
import { LogsArchiveDestinationGCSType } from './LogsArchiveDestinationGCSType';
import { LogsArchiveDestinationS3 } from './LogsArchiveDestinationS3';
import { LogsArchiveDestinationS3Type } from './LogsArchiveDestinationS3Type';
import { LogsArchiveIntegrationAzure } from './LogsArchiveIntegrationAzure';
import { LogsArchiveIntegrationGCS } from './LogsArchiveIntegrationGCS';
import { LogsArchiveIntegrationS3 } from './LogsArchiveIntegrationS3';
import { LogsArchiveOrder } from './LogsArchiveOrder';
import { LogsArchiveOrderAttributes } from './LogsArchiveOrderAttributes';
import { LogsArchiveOrderDefinition } from './LogsArchiveOrderDefinition';
import { LogsArchiveOrderDefinitionType } from './LogsArchiveOrderDefinitionType';
import { LogsArchiveState } from './LogsArchiveState';
import { LogsArchives } from './LogsArchives';
import { LogsCompute } from './LogsCompute';
import { LogsComputeType } from './LogsComputeType';
import { LogsGroupBy } from './LogsGroupBy';
import { LogsGroupByHistogram } from './LogsGroupByHistogram';
import { LogsGroupByMissing } from './LogsGroupByMissing';
import { LogsGroupByTotal } from './LogsGroupByTotal';
import { LogsListRequest } from './LogsListRequest';
import { LogsListRequestPage } from './LogsListRequestPage';
import { LogsListResponse } from './LogsListResponse';
import { LogsListResponseLinks } from './LogsListResponseLinks';
import { LogsMetricCompute } from './LogsMetricCompute';
import { LogsMetricComputeAggregationType } from './LogsMetricComputeAggregationType';
import { LogsMetricCreateAttributes } from './LogsMetricCreateAttributes';
import { LogsMetricCreateData } from './LogsMetricCreateData';
import { LogsMetricCreateRequest } from './LogsMetricCreateRequest';
import { LogsMetricFilter } from './LogsMetricFilter';
import { LogsMetricGroupBy } from './LogsMetricGroupBy';
import { LogsMetricResponse } from './LogsMetricResponse';
import { LogsMetricResponseAttributes } from './LogsMetricResponseAttributes';
import { LogsMetricResponseCompute } from './LogsMetricResponseCompute';
import { LogsMetricResponseComputeAggregationType } from './LogsMetricResponseComputeAggregationType';
import { LogsMetricResponseData } from './LogsMetricResponseData';
import { LogsMetricResponseFilter } from './LogsMetricResponseFilter';
import { LogsMetricResponseGroupBy } from './LogsMetricResponseGroupBy';
import { LogsMetricType } from './LogsMetricType';
import { LogsMetricUpdateAttributes } from './LogsMetricUpdateAttributes';
import { LogsMetricUpdateData } from './LogsMetricUpdateData';
import { LogsMetricUpdateRequest } from './LogsMetricUpdateRequest';
import { LogsMetricsResponse } from './LogsMetricsResponse';
import { LogsQueryFilter } from './LogsQueryFilter';
import { LogsQueryOptions } from './LogsQueryOptions';
import { LogsResponseMetadata } from './LogsResponseMetadata';
import { LogsResponseMetadataPage } from './LogsResponseMetadataPage';
import { LogsSort } from './LogsSort';
import { LogsSortOrder } from './LogsSortOrder';
import { LogsWarning } from './LogsWarning';
import { Metric } from './Metric';
import { MetricAllTags } from './MetricAllTags';
import { MetricAllTagsAttributes } from './MetricAllTagsAttributes';
import { MetricAllTagsResponse } from './MetricAllTagsResponse';
import { MetricCustomAggregation } from './MetricCustomAggregation';
import { MetricCustomSpaceAggregation } from './MetricCustomSpaceAggregation';
import { MetricCustomTimeAggregation } from './MetricCustomTimeAggregation';
import { MetricDistinctVolume } from './MetricDistinctVolume';
import { MetricDistinctVolumeAttributes } from './MetricDistinctVolumeAttributes';
import { MetricDistinctVolumeType } from './MetricDistinctVolumeType';
import { MetricIngestedIndexedVolume } from './MetricIngestedIndexedVolume';
import { MetricIngestedIndexedVolumeAttributes } from './MetricIngestedIndexedVolumeAttributes';
import { MetricIngestedIndexedVolumeType } from './MetricIngestedIndexedVolumeType';
import { MetricTagConfiguration } from './MetricTagConfiguration';
import { MetricTagConfigurationAttributes } from './MetricTagConfigurationAttributes';
import { MetricTagConfigurationCreateAttributes } from './MetricTagConfigurationCreateAttributes';
import { MetricTagConfigurationCreateData } from './MetricTagConfigurationCreateData';
import { MetricTagConfigurationCreateRequest } from './MetricTagConfigurationCreateRequest';
import { MetricTagConfigurationMetricTypes } from './MetricTagConfigurationMetricTypes';
import { MetricTagConfigurationResponse } from './MetricTagConfigurationResponse';
import { MetricTagConfigurationType } from './MetricTagConfigurationType';
import { MetricTagConfigurationUpdateAttributes } from './MetricTagConfigurationUpdateAttributes';
import { MetricTagConfigurationUpdateData } from './MetricTagConfigurationUpdateData';
import { MetricTagConfigurationUpdateRequest } from './MetricTagConfigurationUpdateRequest';
import { MetricType } from './MetricType';
import { MetricVolumes } from './MetricVolumes';
import { MetricVolumesResponse } from './MetricVolumesResponse';
import { MetricsAndMetricTagConfigurations } from './MetricsAndMetricTagConfigurations';
import { MetricsAndMetricTagConfigurationsResponse } from './MetricsAndMetricTagConfigurationsResponse';
import { Organization } from './Organization';
import { OrganizationAttributes } from './OrganizationAttributes';
import { OrganizationsType } from './OrganizationsType';
import { Pagination } from './Pagination';
import { PartialAPIKey } from './PartialAPIKey';
import { PartialAPIKeyAttributes } from './PartialAPIKeyAttributes';
import { PartialApplicationKey } from './PartialApplicationKey';
import { PartialApplicationKeyAttributes } from './PartialApplicationKeyAttributes';
import { PartialApplicationKeyResponse } from './PartialApplicationKeyResponse';
import { Permission } from './Permission';
import { PermissionAttributes } from './PermissionAttributes';
import { PermissionsResponse } from './PermissionsResponse';
import { PermissionsType } from './PermissionsType';
import { ProcessSummariesMeta } from './ProcessSummariesMeta';
import { ProcessSummariesMetaPage } from './ProcessSummariesMetaPage';
import { ProcessSummariesResponse } from './ProcessSummariesResponse';
import { ProcessSummary } from './ProcessSummary';
import { ProcessSummaryAttributes } from './ProcessSummaryAttributes';
import { ProcessSummaryType } from './ProcessSummaryType';
import { QuerySortOrder } from './QuerySortOrder';
import { RelationshipToIncidentIntegrationMetadataData } from './RelationshipToIncidentIntegrationMetadataData';
import { RelationshipToIncidentIntegrationMetadatas } from './RelationshipToIncidentIntegrationMetadatas';
import { RelationshipToIncidentPostmortem } from './RelationshipToIncidentPostmortem';
import { RelationshipToIncidentPostmortemData } from './RelationshipToIncidentPostmortemData';
import { RelationshipToOrganization } from './RelationshipToOrganization';
import { RelationshipToOrganizationData } from './RelationshipToOrganizationData';
import { RelationshipToOrganizations } from './RelationshipToOrganizations';
import { RelationshipToPermission } from './RelationshipToPermission';
import { RelationshipToPermissionData } from './RelationshipToPermissionData';
import { RelationshipToPermissions } from './RelationshipToPermissions';
import { RelationshipToRole } from './RelationshipToRole';
import { RelationshipToRoleData } from './RelationshipToRoleData';
import { RelationshipToRoles } from './RelationshipToRoles';
import { RelationshipToUser } from './RelationshipToUser';
import { RelationshipToUserData } from './RelationshipToUserData';
import { RelationshipToUsers } from './RelationshipToUsers';
import { ResponseMetaAttributes } from './ResponseMetaAttributes';
import { Role } from './Role';
import { RoleAttributes } from './RoleAttributes';
import { RoleClone } from './RoleClone';
import { RoleCloneAttributes } from './RoleCloneAttributes';
import { RoleCloneRequest } from './RoleCloneRequest';
import { RoleCreateAttributes } from './RoleCreateAttributes';
import { RoleCreateData } from './RoleCreateData';
import { RoleCreateRequest } from './RoleCreateRequest';
import { RoleCreateResponse } from './RoleCreateResponse';
import { RoleCreateResponseData } from './RoleCreateResponseData';
import { RoleRelationships } from './RoleRelationships';
import { RoleResponse } from './RoleResponse';
import { RoleResponseRelationships } from './RoleResponseRelationships';
import { RoleUpdateAttributes } from './RoleUpdateAttributes';
import { RoleUpdateData } from './RoleUpdateData';
import { RoleUpdateRequest } from './RoleUpdateRequest';
import { RoleUpdateResponse } from './RoleUpdateResponse';
import { RoleUpdateResponseData } from './RoleUpdateResponseData';
import { RolesResponse } from './RolesResponse';
import { RolesSort } from './RolesSort';
import { RolesType } from './RolesType';
import { SecurityFilter } from './SecurityFilter';
import { SecurityFilterAttributes } from './SecurityFilterAttributes';
import { SecurityFilterCreateAttributes } from './SecurityFilterCreateAttributes';
import { SecurityFilterCreateData } from './SecurityFilterCreateData';
import { SecurityFilterCreateRequest } from './SecurityFilterCreateRequest';
import { SecurityFilterExclusionFilter } from './SecurityFilterExclusionFilter';
import { SecurityFilterExclusionFilterResponse } from './SecurityFilterExclusionFilterResponse';
import { SecurityFilterFilteredDataType } from './SecurityFilterFilteredDataType';
import { SecurityFilterMeta } from './SecurityFilterMeta';
import { SecurityFilterResponse } from './SecurityFilterResponse';
import { SecurityFilterType } from './SecurityFilterType';
import { SecurityFilterUpdateAttributes } from './SecurityFilterUpdateAttributes';
import { SecurityFilterUpdateData } from './SecurityFilterUpdateData';
import { SecurityFilterUpdateRequest } from './SecurityFilterUpdateRequest';
import { SecurityFiltersResponse } from './SecurityFiltersResponse';
import { SecurityMonitoringFilter } from './SecurityMonitoringFilter';
import { SecurityMonitoringFilterAction } from './SecurityMonitoringFilterAction';
import { SecurityMonitoringListRulesResponse } from './SecurityMonitoringListRulesResponse';
import { SecurityMonitoringRuleCase } from './SecurityMonitoringRuleCase';
import { SecurityMonitoringRuleCaseCreate } from './SecurityMonitoringRuleCaseCreate';
import { SecurityMonitoringRuleCreatePayload } from './SecurityMonitoringRuleCreatePayload';
import { SecurityMonitoringRuleDetectionMethod } from './SecurityMonitoringRuleDetectionMethod';
import { SecurityMonitoringRuleEvaluationWindow } from './SecurityMonitoringRuleEvaluationWindow';
import { SecurityMonitoringRuleKeepAlive } from './SecurityMonitoringRuleKeepAlive';
import { SecurityMonitoringRuleMaxSignalDuration } from './SecurityMonitoringRuleMaxSignalDuration';
import { SecurityMonitoringRuleNewValueOptions } from './SecurityMonitoringRuleNewValueOptions';
import { SecurityMonitoringRuleNewValueOptionsForgetAfter } from './SecurityMonitoringRuleNewValueOptionsForgetAfter';
import { SecurityMonitoringRuleNewValueOptionsLearningDuration } from './SecurityMonitoringRuleNewValueOptionsLearningDuration';
import { SecurityMonitoringRuleOptions } from './SecurityMonitoringRuleOptions';
import { SecurityMonitoringRuleQuery } from './SecurityMonitoringRuleQuery';
import { SecurityMonitoringRuleQueryAggregation } from './SecurityMonitoringRuleQueryAggregation';
import { SecurityMonitoringRuleQueryCreate } from './SecurityMonitoringRuleQueryCreate';
import { SecurityMonitoringRuleResponse } from './SecurityMonitoringRuleResponse';
import { SecurityMonitoringRuleSeverity } from './SecurityMonitoringRuleSeverity';
import { SecurityMonitoringRuleTypeCreate } from './SecurityMonitoringRuleTypeCreate';
import { SecurityMonitoringRuleTypeRead } from './SecurityMonitoringRuleTypeRead';
import { SecurityMonitoringRuleUpdatePayload } from './SecurityMonitoringRuleUpdatePayload';
import { SecurityMonitoringSignal } from './SecurityMonitoringSignal';
import { SecurityMonitoringSignalAttributes } from './SecurityMonitoringSignalAttributes';
import { SecurityMonitoringSignalListRequest } from './SecurityMonitoringSignalListRequest';
import { SecurityMonitoringSignalListRequestFilter } from './SecurityMonitoringSignalListRequestFilter';
import { SecurityMonitoringSignalListRequestPage } from './SecurityMonitoringSignalListRequestPage';
import { SecurityMonitoringSignalType } from './SecurityMonitoringSignalType';
import { SecurityMonitoringSignalsListResponse } from './SecurityMonitoringSignalsListResponse';
import { SecurityMonitoringSignalsListResponseLinks } from './SecurityMonitoringSignalsListResponseLinks';
import { SecurityMonitoringSignalsListResponseMeta } from './SecurityMonitoringSignalsListResponseMeta';
import { SecurityMonitoringSignalsListResponseMetaPage } from './SecurityMonitoringSignalsListResponseMetaPage';
import { SecurityMonitoringSignalsSort } from './SecurityMonitoringSignalsSort';
import { ServiceAccountCreateAttributes } from './ServiceAccountCreateAttributes';
import { ServiceAccountCreateData } from './ServiceAccountCreateData';
import { ServiceAccountCreateRequest } from './ServiceAccountCreateRequest';
import { User } from './User';
import { UserAttributes } from './UserAttributes';
import { UserCreateAttributes } from './UserCreateAttributes';
import { UserCreateData } from './UserCreateData';
import { UserCreateRequest } from './UserCreateRequest';
import { UserInvitationData } from './UserInvitationData';
import { UserInvitationDataAttributes } from './UserInvitationDataAttributes';
import { UserInvitationRelationships } from './UserInvitationRelationships';
import { UserInvitationResponse } from './UserInvitationResponse';
import { UserInvitationResponseData } from './UserInvitationResponseData';
import { UserInvitationsRequest } from './UserInvitationsRequest';
import { UserInvitationsResponse } from './UserInvitationsResponse';
import { UserInvitationsType } from './UserInvitationsType';
import { UserRelationships } from './UserRelationships';
import { UserResponse } from './UserResponse';
import { UserResponseIncludedItem } from './UserResponseIncludedItem';
import { UserResponseRelationships } from './UserResponseRelationships';
import { UserUpdateAttributes } from './UserUpdateAttributes';
import { UserUpdateData } from './UserUpdateData';
import { UserUpdateRequest } from './UserUpdateRequest';
import { UsersResponse } from './UsersResponse';
import { UsersType } from './UsersType';
import { logger } from "../../../index";

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "text/json": 100,
  "application/octet-stream": 0
}

const enumsMap: {[key: string]: any[]} = {
    "APIKeysSort": ['created_at', '-created_at', 'last4', '-last4', 'modified_at', '-modified_at', 'name', '-name'],
    "APIKeysType": ['api_keys'],
    "ApplicationKeysSort": ['created_at', '-created_at', 'last4', '-last4', 'name', '-name'],
    "ApplicationKeysType": ['application_keys'],
    "ContentEncoding": ['gzip', 'deflate'],
    "DashboardType": ['custom_timeboard', 'custom_screenboard', 'integration_screenboard', 'integration_timeboard', 'host_timeboard'],
    "IncidentFieldAttributesSingleValueType": ['dropdown', 'textbox'],
    "IncidentFieldAttributesValueType": ['multiselect', 'textarray', 'metrictag', 'autocomplete'],
    "IncidentIntegrationMetadataType": ['incident_integrations'],
    "IncidentPostmortemType": ['incident_postmortems'],
    "IncidentRelatedObject": ['users'],
    "IncidentServiceType": ['services'],
    "IncidentTeamType": ['teams'],
    "IncidentTimelineCellMarkdownContentType": ['markdown'],
    "IncidentType": ['incidents'],
    "LogType": ['log'],
    "LogsAggregateResponseStatus": ['done', 'timeout'],
    "LogsAggregateSortType": ['alphabetical', 'measure'],
    "LogsAggregationFunction": ['count', 'cardinality', 'pc75', 'pc90', 'pc95', 'pc98', 'pc99', 'sum', 'min', 'max', 'avg'],
    "LogsArchiveDestinationAzureType": ['azure'],
    "LogsArchiveDestinationGCSType": ['gcs'],
    "LogsArchiveDestinationS3Type": ['s3'],
    "LogsArchiveOrderDefinitionType": ['archive_order'],
    "LogsArchiveState": ['UNKNOWN', 'WORKING', 'FAILING', 'WORKING_AUTH_LEGACY'],
    "LogsComputeType": ['timeseries', 'total'],
    "LogsMetricComputeAggregationType": ['count', 'distribution'],
    "LogsMetricResponseComputeAggregationType": ['count', 'distribution'],
    "LogsMetricType": ['logs_metrics'],
    "LogsSort": ['timestamp', '-timestamp'],
    "LogsSortOrder": ['asc', 'desc'],
    "MetricCustomSpaceAggregation": ['avg', 'max', 'min', 'sum'],
    "MetricCustomTimeAggregation": ['avg', 'count', 'max', 'min', 'sum'],
    "MetricDistinctVolumeType": ['distinct_metric_volumes'],
    "MetricIngestedIndexedVolumeType": ['metric_volumes'],
    "MetricTagConfigurationMetricTypes": ['gauge', 'count', 'rate', 'distribution'],
    "MetricTagConfigurationType": ['manage_tags'],
    "MetricType": ['metrics'],
    "OrganizationsType": ['orgs'],
    "PermissionsType": ['permissions'],
    "ProcessSummaryType": ['process'],
    "QuerySortOrder": ['asc', 'desc'],
    "RolesSort": ['name', '-name', 'modified_at', '-modified_at', 'user_count', '-user_count'],
    "RolesType": ['roles'],
    "SecurityFilterFilteredDataType": ['logs'],
    "SecurityFilterType": ['security_filters'],
    "SecurityMonitoringFilterAction": ['require', 'suppress'],
    "SecurityMonitoringRuleDetectionMethod": ['threshold', 'new_value', 'anomaly_detection'],
    "SecurityMonitoringRuleEvaluationWindow": [0, 60, 300, 600, 900, 1800, 3600, 7200],
    "SecurityMonitoringRuleKeepAlive": [0, 60, 300, 600, 900, 1800, 3600, 7200, 10800, 21600],
    "SecurityMonitoringRuleMaxSignalDuration": [0, 60, 300, 600, 900, 1800, 3600, 7200, 10800, 21600, 43200, 86400],
    "SecurityMonitoringRuleNewValueOptionsForgetAfter": [1, 2, 7, 14, 21, 28],
    "SecurityMonitoringRuleNewValueOptionsLearningDuration": [0, 1, 7],
    "SecurityMonitoringRuleQueryAggregation": ['count', 'cardinality', 'sum', 'max', 'new_value'],
    "SecurityMonitoringRuleSeverity": ['info', 'low', 'medium', 'high', 'critical'],
    "SecurityMonitoringRuleTypeCreate": ['log_detection', 'workload_security'],
    "SecurityMonitoringRuleTypeRead": ['log_detection', 'infrastructure_configuration', 'workload_security', 'cloud_configuration'],
    "SecurityMonitoringSignalType": ['signal'],
    "SecurityMonitoringSignalsSort": ['timestamp', '-timestamp'],
    "UserInvitationsType": ['user_invitations'],
    "UsersType": ['users'],
};

let typeMap: {[index: string]: any} = {
    "APIErrorResponse": APIErrorResponse,
    "APIKeyCreateAttributes": APIKeyCreateAttributes,
    "APIKeyCreateData": APIKeyCreateData,
    "APIKeyCreateRequest": APIKeyCreateRequest,
    "APIKeyRelationships": APIKeyRelationships,
    "APIKeyResponse": APIKeyResponse,
    "APIKeyUpdateAttributes": APIKeyUpdateAttributes,
    "APIKeyUpdateData": APIKeyUpdateData,
    "APIKeyUpdateRequest": APIKeyUpdateRequest,
    "APIKeysResponse": APIKeysResponse,
    "ApplicationKeyCreateAttributes": ApplicationKeyCreateAttributes,
    "ApplicationKeyCreateData": ApplicationKeyCreateData,
    "ApplicationKeyCreateRequest": ApplicationKeyCreateRequest,
    "ApplicationKeyRelationships": ApplicationKeyRelationships,
    "ApplicationKeyResponse": ApplicationKeyResponse,
    "ApplicationKeyUpdateAttributes": ApplicationKeyUpdateAttributes,
    "ApplicationKeyUpdateData": ApplicationKeyUpdateData,
    "ApplicationKeyUpdateRequest": ApplicationKeyUpdateRequest,
    "Creator": Creator,
    "DashboardListAddItemsRequest": DashboardListAddItemsRequest,
    "DashboardListAddItemsResponse": DashboardListAddItemsResponse,
    "DashboardListDeleteItemsRequest": DashboardListDeleteItemsRequest,
    "DashboardListDeleteItemsResponse": DashboardListDeleteItemsResponse,
    "DashboardListItem": DashboardListItem,
    "DashboardListItemRequest": DashboardListItemRequest,
    "DashboardListItemResponse": DashboardListItemResponse,
    "DashboardListItems": DashboardListItems,
    "DashboardListUpdateItemsRequest": DashboardListUpdateItemsRequest,
    "DashboardListUpdateItemsResponse": DashboardListUpdateItemsResponse,
    "FullAPIKey": FullAPIKey,
    "FullAPIKeyAttributes": FullAPIKeyAttributes,
    "FullApplicationKey": FullApplicationKey,
    "FullApplicationKeyAttributes": FullApplicationKeyAttributes,
    "HTTPLogError": HTTPLogError,
    "HTTPLogErrors": HTTPLogErrors,
    "HTTPLogItem": HTTPLogItem,
    "IncidentCreateAttributes": IncidentCreateAttributes,
    "IncidentCreateData": IncidentCreateData,
    "IncidentCreateRelationships": IncidentCreateRelationships,
    "IncidentCreateRequest": IncidentCreateRequest,
    "IncidentFieldAttributesMultipleValue": IncidentFieldAttributesMultipleValue,
    "IncidentFieldAttributesSingleValue": IncidentFieldAttributesSingleValue,
    "IncidentNotificationHandle": IncidentNotificationHandle,
    "IncidentResponse": IncidentResponse,
    "IncidentResponseAttributes": IncidentResponseAttributes,
    "IncidentResponseData": IncidentResponseData,
    "IncidentResponseRelationships": IncidentResponseRelationships,
    "IncidentServiceCreateAttributes": IncidentServiceCreateAttributes,
    "IncidentServiceCreateData": IncidentServiceCreateData,
    "IncidentServiceCreateRequest": IncidentServiceCreateRequest,
    "IncidentServiceRelationships": IncidentServiceRelationships,
    "IncidentServiceResponse": IncidentServiceResponse,
    "IncidentServiceResponseAttributes": IncidentServiceResponseAttributes,
    "IncidentServiceResponseData": IncidentServiceResponseData,
    "IncidentServiceUpdateAttributes": IncidentServiceUpdateAttributes,
    "IncidentServiceUpdateData": IncidentServiceUpdateData,
    "IncidentServiceUpdateRequest": IncidentServiceUpdateRequest,
    "IncidentServicesResponse": IncidentServicesResponse,
    "IncidentServicesResponseMeta": IncidentServicesResponseMeta,
    "IncidentServicesResponseMetaPagination": IncidentServicesResponseMetaPagination,
    "IncidentTeamCreateAttributes": IncidentTeamCreateAttributes,
    "IncidentTeamCreateData": IncidentTeamCreateData,
    "IncidentTeamCreateRequest": IncidentTeamCreateRequest,
    "IncidentTeamRelationships": IncidentTeamRelationships,
    "IncidentTeamResponse": IncidentTeamResponse,
    "IncidentTeamResponseAttributes": IncidentTeamResponseAttributes,
    "IncidentTeamResponseData": IncidentTeamResponseData,
    "IncidentTeamUpdateAttributes": IncidentTeamUpdateAttributes,
    "IncidentTeamUpdateData": IncidentTeamUpdateData,
    "IncidentTeamUpdateRequest": IncidentTeamUpdateRequest,
    "IncidentTeamsResponse": IncidentTeamsResponse,
    "IncidentTimelineCellMarkdownCreateAttributes": IncidentTimelineCellMarkdownCreateAttributes,
    "IncidentTimelineCellMarkdownCreateAttributesContent": IncidentTimelineCellMarkdownCreateAttributesContent,
    "IncidentUpdateAttributes": IncidentUpdateAttributes,
    "IncidentUpdateData": IncidentUpdateData,
    "IncidentUpdateRelationships": IncidentUpdateRelationships,
    "IncidentUpdateRequest": IncidentUpdateRequest,
    "IncidentsResponse": IncidentsResponse,
    "ListApplicationKeysResponse": ListApplicationKeysResponse,
    "Log": Log,
    "LogAttributes": LogAttributes,
    "LogsAggregateBucket": LogsAggregateBucket,
    "LogsAggregateBucketValueTimeseriesPoint": LogsAggregateBucketValueTimeseriesPoint,
    "LogsAggregateRequest": LogsAggregateRequest,
    "LogsAggregateRequestPage": LogsAggregateRequestPage,
    "LogsAggregateResponse": LogsAggregateResponse,
    "LogsAggregateResponseData": LogsAggregateResponseData,
    "LogsAggregateSort": LogsAggregateSort,
    "LogsArchive": LogsArchive,
    "LogsArchiveAttributes": LogsArchiveAttributes,
    "LogsArchiveCreateRequest": LogsArchiveCreateRequest,
    "LogsArchiveCreateRequestAttributes": LogsArchiveCreateRequestAttributes,
    "LogsArchiveCreateRequestDefinition": LogsArchiveCreateRequestDefinition,
    "LogsArchiveDefinition": LogsArchiveDefinition,
    "LogsArchiveDestinationAzure": LogsArchiveDestinationAzure,
    "LogsArchiveDestinationGCS": LogsArchiveDestinationGCS,
    "LogsArchiveDestinationS3": LogsArchiveDestinationS3,
    "LogsArchiveIntegrationAzure": LogsArchiveIntegrationAzure,
    "LogsArchiveIntegrationGCS": LogsArchiveIntegrationGCS,
    "LogsArchiveIntegrationS3": LogsArchiveIntegrationS3,
    "LogsArchiveOrder": LogsArchiveOrder,
    "LogsArchiveOrderAttributes": LogsArchiveOrderAttributes,
    "LogsArchiveOrderDefinition": LogsArchiveOrderDefinition,
    "LogsArchives": LogsArchives,
    "LogsCompute": LogsCompute,
    "LogsGroupBy": LogsGroupBy,
    "LogsGroupByHistogram": LogsGroupByHistogram,
    "LogsListRequest": LogsListRequest,
    "LogsListRequestPage": LogsListRequestPage,
    "LogsListResponse": LogsListResponse,
    "LogsListResponseLinks": LogsListResponseLinks,
    "LogsMetricCompute": LogsMetricCompute,
    "LogsMetricCreateAttributes": LogsMetricCreateAttributes,
    "LogsMetricCreateData": LogsMetricCreateData,
    "LogsMetricCreateRequest": LogsMetricCreateRequest,
    "LogsMetricFilter": LogsMetricFilter,
    "LogsMetricGroupBy": LogsMetricGroupBy,
    "LogsMetricResponse": LogsMetricResponse,
    "LogsMetricResponseAttributes": LogsMetricResponseAttributes,
    "LogsMetricResponseCompute": LogsMetricResponseCompute,
    "LogsMetricResponseData": LogsMetricResponseData,
    "LogsMetricResponseFilter": LogsMetricResponseFilter,
    "LogsMetricResponseGroupBy": LogsMetricResponseGroupBy,
    "LogsMetricUpdateAttributes": LogsMetricUpdateAttributes,
    "LogsMetricUpdateData": LogsMetricUpdateData,
    "LogsMetricUpdateRequest": LogsMetricUpdateRequest,
    "LogsMetricsResponse": LogsMetricsResponse,
    "LogsQueryFilter": LogsQueryFilter,
    "LogsQueryOptions": LogsQueryOptions,
    "LogsResponseMetadata": LogsResponseMetadata,
    "LogsResponseMetadataPage": LogsResponseMetadataPage,
    "LogsWarning": LogsWarning,
    "Metric": Metric,
    "MetricAllTags": MetricAllTags,
    "MetricAllTagsAttributes": MetricAllTagsAttributes,
    "MetricAllTagsResponse": MetricAllTagsResponse,
    "MetricCustomAggregation": MetricCustomAggregation,
    "MetricDistinctVolume": MetricDistinctVolume,
    "MetricDistinctVolumeAttributes": MetricDistinctVolumeAttributes,
    "MetricIngestedIndexedVolume": MetricIngestedIndexedVolume,
    "MetricIngestedIndexedVolumeAttributes": MetricIngestedIndexedVolumeAttributes,
    "MetricTagConfiguration": MetricTagConfiguration,
    "MetricTagConfigurationAttributes": MetricTagConfigurationAttributes,
    "MetricTagConfigurationCreateAttributes": MetricTagConfigurationCreateAttributes,
    "MetricTagConfigurationCreateData": MetricTagConfigurationCreateData,
    "MetricTagConfigurationCreateRequest": MetricTagConfigurationCreateRequest,
    "MetricTagConfigurationResponse": MetricTagConfigurationResponse,
    "MetricTagConfigurationUpdateAttributes": MetricTagConfigurationUpdateAttributes,
    "MetricTagConfigurationUpdateData": MetricTagConfigurationUpdateData,
    "MetricTagConfigurationUpdateRequest": MetricTagConfigurationUpdateRequest,
    "MetricVolumesResponse": MetricVolumesResponse,
    "MetricsAndMetricTagConfigurationsResponse": MetricsAndMetricTagConfigurationsResponse,
    "Organization": Organization,
    "OrganizationAttributes": OrganizationAttributes,
    "Pagination": Pagination,
    "PartialAPIKey": PartialAPIKey,
    "PartialAPIKeyAttributes": PartialAPIKeyAttributes,
    "PartialApplicationKey": PartialApplicationKey,
    "PartialApplicationKeyAttributes": PartialApplicationKeyAttributes,
    "PartialApplicationKeyResponse": PartialApplicationKeyResponse,
    "Permission": Permission,
    "PermissionAttributes": PermissionAttributes,
    "PermissionsResponse": PermissionsResponse,
    "ProcessSummariesMeta": ProcessSummariesMeta,
    "ProcessSummariesMetaPage": ProcessSummariesMetaPage,
    "ProcessSummariesResponse": ProcessSummariesResponse,
    "ProcessSummary": ProcessSummary,
    "ProcessSummaryAttributes": ProcessSummaryAttributes,
    "RelationshipToIncidentIntegrationMetadataData": RelationshipToIncidentIntegrationMetadataData,
    "RelationshipToIncidentIntegrationMetadatas": RelationshipToIncidentIntegrationMetadatas,
    "RelationshipToIncidentPostmortem": RelationshipToIncidentPostmortem,
    "RelationshipToIncidentPostmortemData": RelationshipToIncidentPostmortemData,
    "RelationshipToOrganization": RelationshipToOrganization,
    "RelationshipToOrganizationData": RelationshipToOrganizationData,
    "RelationshipToOrganizations": RelationshipToOrganizations,
    "RelationshipToPermission": RelationshipToPermission,
    "RelationshipToPermissionData": RelationshipToPermissionData,
    "RelationshipToPermissions": RelationshipToPermissions,
    "RelationshipToRole": RelationshipToRole,
    "RelationshipToRoleData": RelationshipToRoleData,
    "RelationshipToRoles": RelationshipToRoles,
    "RelationshipToUser": RelationshipToUser,
    "RelationshipToUserData": RelationshipToUserData,
    "RelationshipToUsers": RelationshipToUsers,
    "ResponseMetaAttributes": ResponseMetaAttributes,
    "Role": Role,
    "RoleAttributes": RoleAttributes,
    "RoleClone": RoleClone,
    "RoleCloneAttributes": RoleCloneAttributes,
    "RoleCloneRequest": RoleCloneRequest,
    "RoleCreateAttributes": RoleCreateAttributes,
    "RoleCreateData": RoleCreateData,
    "RoleCreateRequest": RoleCreateRequest,
    "RoleCreateResponse": RoleCreateResponse,
    "RoleCreateResponseData": RoleCreateResponseData,
    "RoleRelationships": RoleRelationships,
    "RoleResponse": RoleResponse,
    "RoleResponseRelationships": RoleResponseRelationships,
    "RoleUpdateAttributes": RoleUpdateAttributes,
    "RoleUpdateData": RoleUpdateData,
    "RoleUpdateRequest": RoleUpdateRequest,
    "RoleUpdateResponse": RoleUpdateResponse,
    "RoleUpdateResponseData": RoleUpdateResponseData,
    "RolesResponse": RolesResponse,
    "SecurityFilter": SecurityFilter,
    "SecurityFilterAttributes": SecurityFilterAttributes,
    "SecurityFilterCreateAttributes": SecurityFilterCreateAttributes,
    "SecurityFilterCreateData": SecurityFilterCreateData,
    "SecurityFilterCreateRequest": SecurityFilterCreateRequest,
    "SecurityFilterExclusionFilter": SecurityFilterExclusionFilter,
    "SecurityFilterExclusionFilterResponse": SecurityFilterExclusionFilterResponse,
    "SecurityFilterMeta": SecurityFilterMeta,
    "SecurityFilterResponse": SecurityFilterResponse,
    "SecurityFilterUpdateAttributes": SecurityFilterUpdateAttributes,
    "SecurityFilterUpdateData": SecurityFilterUpdateData,
    "SecurityFilterUpdateRequest": SecurityFilterUpdateRequest,
    "SecurityFiltersResponse": SecurityFiltersResponse,
    "SecurityMonitoringFilter": SecurityMonitoringFilter,
    "SecurityMonitoringListRulesResponse": SecurityMonitoringListRulesResponse,
    "SecurityMonitoringRuleCase": SecurityMonitoringRuleCase,
    "SecurityMonitoringRuleCaseCreate": SecurityMonitoringRuleCaseCreate,
    "SecurityMonitoringRuleCreatePayload": SecurityMonitoringRuleCreatePayload,
    "SecurityMonitoringRuleNewValueOptions": SecurityMonitoringRuleNewValueOptions,
    "SecurityMonitoringRuleOptions": SecurityMonitoringRuleOptions,
    "SecurityMonitoringRuleQuery": SecurityMonitoringRuleQuery,
    "SecurityMonitoringRuleQueryCreate": SecurityMonitoringRuleQueryCreate,
    "SecurityMonitoringRuleResponse": SecurityMonitoringRuleResponse,
    "SecurityMonitoringRuleUpdatePayload": SecurityMonitoringRuleUpdatePayload,
    "SecurityMonitoringSignal": SecurityMonitoringSignal,
    "SecurityMonitoringSignalAttributes": SecurityMonitoringSignalAttributes,
    "SecurityMonitoringSignalListRequest": SecurityMonitoringSignalListRequest,
    "SecurityMonitoringSignalListRequestFilter": SecurityMonitoringSignalListRequestFilter,
    "SecurityMonitoringSignalListRequestPage": SecurityMonitoringSignalListRequestPage,
    "SecurityMonitoringSignalsListResponse": SecurityMonitoringSignalsListResponse,
    "SecurityMonitoringSignalsListResponseLinks": SecurityMonitoringSignalsListResponseLinks,
    "SecurityMonitoringSignalsListResponseMeta": SecurityMonitoringSignalsListResponseMeta,
    "SecurityMonitoringSignalsListResponseMetaPage": SecurityMonitoringSignalsListResponseMetaPage,
    "ServiceAccountCreateAttributes": ServiceAccountCreateAttributes,
    "ServiceAccountCreateData": ServiceAccountCreateData,
    "ServiceAccountCreateRequest": ServiceAccountCreateRequest,
    "User": User,
    "UserAttributes": UserAttributes,
    "UserCreateAttributes": UserCreateAttributes,
    "UserCreateData": UserCreateData,
    "UserCreateRequest": UserCreateRequest,
    "UserInvitationData": UserInvitationData,
    "UserInvitationDataAttributes": UserInvitationDataAttributes,
    "UserInvitationRelationships": UserInvitationRelationships,
    "UserInvitationResponse": UserInvitationResponse,
    "UserInvitationResponseData": UserInvitationResponseData,
    "UserInvitationsRequest": UserInvitationsRequest,
    "UserInvitationsResponse": UserInvitationsResponse,
    "UserRelationships": UserRelationships,
    "UserResponse": UserResponse,
    "UserResponseRelationships": UserResponseRelationships,
    "UserUpdateAttributes": UserUpdateAttributes,
    "UserUpdateData": UserUpdateData,
    "UserUpdateRequest": UserUpdateRequest,
    "UsersResponse": UsersResponse,
}

let oneOfMap: {[index: string]: string[]} = {
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

export class ObjectSerializer {
    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
            subType = subType.substring(0, subType.length - 3); // Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let k in data) {
                let date = data[k]
                transformedData[k] = ObjectSerializer.serialize(date, subType, format);
            }
            return transformedData;
        } else if (type === "Date") {
            if ("string" == typeof data) {
                return data;
            }
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap[type]) {
                if (enumsMap[type].includes(data)) {
                  return data;
                }
                throw new TypeError(`unknown enum value '${data}'`)
            }
            if (oneOfMap[type]) {
                let oneOfs: any[] = [];
                for(let oneOf of oneOfMap[type]) {
                    try {
                        oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
                    } catch (e) {
                        logger.debug(`could not serialize ${oneOf} (${e})`)
                    }
                }
                if (oneOfs.length > 1) {
                    throw new TypeError(`${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`);
                }
                if (oneOfs.length == 0) {
                    throw new TypeError(`${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`);
                }
                return oneOfs[0];
            }

            // get the map for the correct type.
            let attributesMap = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};

            for (let attributeName in attributesMap) {
                let attributeObj = attributesMap[attributeName];
                instance[attributeObj.baseName] = ObjectSerializer.serialize(data[attributeName], attributeObj.type, attributeObj.format);

                // check for required properties
                if (attributeObj?.required && instance[attributeObj.baseName] === undefined) {
                    throw new Error(`missing required property '${attributeObj.baseName}'`);
                }

                if (enumsMap[attributeObj.type] && !enumsMap[attributeObj.type].includes(instance[attributeObj.baseName])) {
                    instance.unparsedObject = instance[attributeObj.baseName];
                }
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string = ""): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
            subType = subType.substring(0, subType.length - 3); // Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let k in data) {
                let date = data[k]
                transformedData[k] = ObjectSerializer.deserialize(date, subType, format);
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {
               return data;
            }

            if (oneOfMap[type]) {
                let oneOfs: any[] = [];
                for(let oneOf of oneOfMap[type]) {
                    try {
                        let d = ObjectSerializer.deserialize(data, oneOf, format);
                        if (d?.unparsedObject === undefined) {
                            oneOfs.push(d);
                        }
                    } catch (e) {
                        logger.debug(`could not deserialize ${oneOf} (${e})`)
                    }

                }
                if (oneOfs.length != 1) {
                    return new UnparsedObject(data);
                }
                return oneOfs[0];
            }

            if (!typeMap[type]) { // dont know the type
                throw new TypeError(`unknown type '${type}'`);
            }

            let instance = new typeMap[type]();
            let attributesMap = typeMap[type].getAttributeTypeMap();

            for (let attributeName in attributesMap) {
                let attributeObj = attributesMap[attributeName];
                instance[attributeName] = ObjectSerializer.deserialize(data[attributeObj.baseName], attributeObj.type, attributeObj.format);

                // check for required properties
                if (attributeObj?.required && instance[attributeName] === undefined) {
                    throw new Error(`missing required property '${attributeName}'`);
                }

                // check for enum values
                if (enumsMap[attributeObj.type] && !enumsMap[attributeObj.type].includes(instance[attributeName])) {
                    instance.unparsedObject = instance[attributeName];
                }
            }

            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (mediaType === undefined) {
                continue;
            }
            let supported = supportedMediaTypes[mediaType];
            if (supported !== undefined && supported > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supported;
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json" || mediaType === "text/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined): any {
        try {
            return JSON.parse(rawData);
        } catch (error) {
            logger.debug(`could not parse ${mediaType}: ${error}`);
            return rawData;
        }
    }
}

export class UnparsedObject {
    unparsedObject:any;
    constructor(data:any) {
        this.unparsedObject = data;
    }
}

export type AttributeTypeMap = {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
}
