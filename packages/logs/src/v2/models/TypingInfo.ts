import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { ArchiveSearchCreateRehydration } from "./ArchiveSearchCreateRehydration";
import { ArchiveSearchCreateRequest } from "./ArchiveSearchCreateRequest";
import { ArchiveSearchCreateRequestAttributes } from "./ArchiveSearchCreateRequestAttributes";
import { ArchiveSearchCreateRequestData } from "./ArchiveSearchCreateRequestData";
import { ArchiveSearchListResponse } from "./ArchiveSearchListResponse";
import { ArchiveSearchListResponseMeta } from "./ArchiveSearchListResponseMeta";
import { ArchiveSearchRehydrateRequest } from "./ArchiveSearchRehydrateRequest";
import { ArchiveSearchRehydrateRequestAttributes } from "./ArchiveSearchRehydrateRequestAttributes";
import { ArchiveSearchRehydrateRequestData } from "./ArchiveSearchRehydrateRequestData";
import { ArchiveSearchRehydrateRequestRehydration } from "./ArchiveSearchRehydrateRequestRehydration";
import { ArchiveSearchRehydration } from "./ArchiveSearchRehydration";
import { ArchiveSearchResponse } from "./ArchiveSearchResponse";
import { ArchiveSearchResponseAttributes } from "./ArchiveSearchResponseAttributes";
import { ArchiveSearchResponseData } from "./ArchiveSearchResponseData";
import { CustomDestinationCreateRequest } from "./CustomDestinationCreateRequest";
import { CustomDestinationCreateRequestAttributes } from "./CustomDestinationCreateRequestAttributes";
import { CustomDestinationCreateRequestDefinition } from "./CustomDestinationCreateRequestDefinition";
import { CustomDestinationElasticsearchDestinationAuth } from "./CustomDestinationElasticsearchDestinationAuth";
import { CustomDestinationForwardDestinationElasticsearch } from "./CustomDestinationForwardDestinationElasticsearch";
import { CustomDestinationForwardDestinationHttp } from "./CustomDestinationForwardDestinationHttp";
import { CustomDestinationForwardDestinationMicrosoftSentinel } from "./CustomDestinationForwardDestinationMicrosoftSentinel";
import { CustomDestinationForwardDestinationSplunk } from "./CustomDestinationForwardDestinationSplunk";
import { CustomDestinationHttpDestinationAuthBasic } from "./CustomDestinationHttpDestinationAuthBasic";
import { CustomDestinationHttpDestinationAuthCustomHeader } from "./CustomDestinationHttpDestinationAuthCustomHeader";
import { CustomDestinationResponse } from "./CustomDestinationResponse";
import { CustomDestinationResponseAttributes } from "./CustomDestinationResponseAttributes";
import { CustomDestinationResponseDefinition } from "./CustomDestinationResponseDefinition";
import { CustomDestinationResponseForwardDestinationElasticsearch } from "./CustomDestinationResponseForwardDestinationElasticsearch";
import { CustomDestinationResponseForwardDestinationHttp } from "./CustomDestinationResponseForwardDestinationHttp";
import { CustomDestinationResponseForwardDestinationMicrosoftSentinel } from "./CustomDestinationResponseForwardDestinationMicrosoftSentinel";
import { CustomDestinationResponseForwardDestinationSplunk } from "./CustomDestinationResponseForwardDestinationSplunk";
import { CustomDestinationResponseHttpDestinationAuthBasic } from "./CustomDestinationResponseHttpDestinationAuthBasic";
import { CustomDestinationResponseHttpDestinationAuthCustomHeader } from "./CustomDestinationResponseHttpDestinationAuthCustomHeader";
import { CustomDestinationUpdateRequest } from "./CustomDestinationUpdateRequest";
import { CustomDestinationUpdateRequestAttributes } from "./CustomDestinationUpdateRequestAttributes";
import { CustomDestinationUpdateRequestDefinition } from "./CustomDestinationUpdateRequestDefinition";
import { CustomDestinationsResponse } from "./CustomDestinationsResponse";
import { HTTPLogError } from "./HTTPLogError";
import { HTTPLogErrors } from "./HTTPLogErrors";
import { HTTPLogItem } from "./HTTPLogItem";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { Log } from "./Log";
import { LogAttributes } from "./LogAttributes";
import { LogsAggregateBucket } from "./LogsAggregateBucket";
import { LogsAggregateBucketValueTimeseriesPoint } from "./LogsAggregateBucketValueTimeseriesPoint";
import { LogsAggregateRequest } from "./LogsAggregateRequest";
import { LogsAggregateRequestPage } from "./LogsAggregateRequestPage";
import { LogsAggregateResponse } from "./LogsAggregateResponse";
import { LogsAggregateResponseData } from "./LogsAggregateResponseData";
import { LogsAggregateSort } from "./LogsAggregateSort";
import { LogsArchive } from "./LogsArchive";
import { LogsArchiveAttributes } from "./LogsArchiveAttributes";
import { LogsArchiveCreateRequest } from "./LogsArchiveCreateRequest";
import { LogsArchiveCreateRequestAttributes } from "./LogsArchiveCreateRequestAttributes";
import { LogsArchiveCreateRequestDefinition } from "./LogsArchiveCreateRequestDefinition";
import { LogsArchiveDefinition } from "./LogsArchiveDefinition";
import { LogsArchiveDestinationAzure } from "./LogsArchiveDestinationAzure";
import { LogsArchiveDestinationGCS } from "./LogsArchiveDestinationGCS";
import { LogsArchiveDestinationS3 } from "./LogsArchiveDestinationS3";
import { LogsArchiveEncryptionS3 } from "./LogsArchiveEncryptionS3";
import { LogsArchiveIntegrationAzure } from "./LogsArchiveIntegrationAzure";
import { LogsArchiveIntegrationGCS } from "./LogsArchiveIntegrationGCS";
import { LogsArchiveIntegrationS3AccessKey } from "./LogsArchiveIntegrationS3AccessKey";
import { LogsArchiveIntegrationS3Role } from "./LogsArchiveIntegrationS3Role";
import { LogsArchiveOrder } from "./LogsArchiveOrder";
import { LogsArchiveOrderAttributes } from "./LogsArchiveOrderAttributes";
import { LogsArchiveOrderDefinition } from "./LogsArchiveOrderDefinition";
import { LogsArchives } from "./LogsArchives";
import { LogsCompute } from "./LogsCompute";
import { LogsGroupBy } from "./LogsGroupBy";
import { LogsGroupByHistogram } from "./LogsGroupByHistogram";
import { LogsListRequest } from "./LogsListRequest";
import { LogsListRequestPage } from "./LogsListRequestPage";
import { LogsListResponse } from "./LogsListResponse";
import { LogsListResponseLinks } from "./LogsListResponseLinks";
import { LogsMetricCompute } from "./LogsMetricCompute";
import { LogsMetricCreateAttributes } from "./LogsMetricCreateAttributes";
import { LogsMetricCreateData } from "./LogsMetricCreateData";
import { LogsMetricCreateRequest } from "./LogsMetricCreateRequest";
import { LogsMetricFilter } from "./LogsMetricFilter";
import { LogsMetricGroupBy } from "./LogsMetricGroupBy";
import { LogsMetricResponse } from "./LogsMetricResponse";
import { LogsMetricResponseAttributes } from "./LogsMetricResponseAttributes";
import { LogsMetricResponseCompute } from "./LogsMetricResponseCompute";
import { LogsMetricResponseData } from "./LogsMetricResponseData";
import { LogsMetricResponseFilter } from "./LogsMetricResponseFilter";
import { LogsMetricResponseGroupBy } from "./LogsMetricResponseGroupBy";
import { LogsMetricUpdateAttributes } from "./LogsMetricUpdateAttributes";
import { LogsMetricUpdateCompute } from "./LogsMetricUpdateCompute";
import { LogsMetricUpdateData } from "./LogsMetricUpdateData";
import { LogsMetricUpdateRequest } from "./LogsMetricUpdateRequest";
import { LogsMetricsResponse } from "./LogsMetricsResponse";
import { LogsQueryFilter } from "./LogsQueryFilter";
import { LogsQueryOptions } from "./LogsQueryOptions";
import { LogsResponseMetadata } from "./LogsResponseMetadata";
import { LogsResponseMetadataPage } from "./LogsResponseMetadataPage";
import { LogsWarning } from "./LogsWarning";
import { Pagination } from "./Pagination";
import { RelationshipToPermissionData } from "./RelationshipToPermissionData";
import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToRole } from "./RelationshipToRole";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { RestrictionQueryAttributes } from "./RestrictionQueryAttributes";
import { RestrictionQueryCreateAttributes } from "./RestrictionQueryCreateAttributes";
import { RestrictionQueryCreateData } from "./RestrictionQueryCreateData";
import { RestrictionQueryCreatePayload } from "./RestrictionQueryCreatePayload";
import { RestrictionQueryListResponse } from "./RestrictionQueryListResponse";
import { RestrictionQueryRole } from "./RestrictionQueryRole";
import { RestrictionQueryRoleAttribute } from "./RestrictionQueryRoleAttribute";
import { RestrictionQueryRolesResponse } from "./RestrictionQueryRolesResponse";
import { RestrictionQueryUpdateAttributes } from "./RestrictionQueryUpdateAttributes";
import { RestrictionQueryUpdateData } from "./RestrictionQueryUpdateData";
import { RestrictionQueryUpdatePayload } from "./RestrictionQueryUpdatePayload";
import { RestrictionQueryWithRelationships } from "./RestrictionQueryWithRelationships";
import { RestrictionQueryWithRelationshipsResponse } from "./RestrictionQueryWithRelationshipsResponse";
import { RestrictionQueryWithoutRelationships } from "./RestrictionQueryWithoutRelationships";
import { RestrictionQueryWithoutRelationshipsResponse } from "./RestrictionQueryWithoutRelationshipsResponse";
import { Role } from "./Role";
import { RoleAttributes } from "./RoleAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { RolesResponse } from "./RolesResponse";
import { UserRelationships } from "./UserRelationships";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ArchiveSearchRehydrationTier: ["standard", "flex"],
    ArchiveSearchStatus: [
      "RUNNING",
      "COMPLETED",
      "FAILED",
      "CANCELLED",
      "QUOTA_REACHED",
      "EXPIRED",
    ],
    ArchiveSearchType: ["archive_search"],
    ContentEncoding: ["identity", "gzip", "deflate"],
    CustomDestinationAttributeTagsRestrictionListType: [
      "ALLOW_LIST",
      "BLOCK_LIST",
    ],
    CustomDestinationForwardDestinationElasticsearchType: ["elasticsearch"],
    CustomDestinationForwardDestinationHttpType: ["http"],
    CustomDestinationForwardDestinationMicrosoftSentinelType: [
      "microsoft_sentinel",
    ],
    CustomDestinationForwardDestinationSplunkType: ["splunk_hec"],
    CustomDestinationHttpDestinationAuthBasicType: ["basic"],
    CustomDestinationHttpDestinationAuthCustomHeaderType: ["custom_header"],
    CustomDestinationResponseForwardDestinationElasticsearchType: [
      "elasticsearch",
    ],
    CustomDestinationResponseForwardDestinationHttpType: ["http"],
    CustomDestinationResponseForwardDestinationMicrosoftSentinelType: [
      "microsoft_sentinel",
    ],
    CustomDestinationResponseForwardDestinationSplunkType: ["splunk_hec"],
    CustomDestinationResponseHttpDestinationAuthBasicType: ["basic"],
    CustomDestinationResponseHttpDestinationAuthCustomHeaderType: [
      "custom_header",
    ],
    CustomDestinationType: ["custom_destination"],
    LogType: ["log"],
    LogsAggregateResponseStatus: ["done", "timeout"],
    LogsAggregateSortType: ["alphabetical", "measure"],
    LogsAggregationFunction: [
      "count",
      "cardinality",
      "pc75",
      "pc90",
      "pc95",
      "pc98",
      "pc99",
      "sum",
      "min",
      "max",
      "avg",
      "median",
    ],
    LogsArchiveAttributesCompressionMethod: ["GZIP", "ZSTD"],
    LogsArchiveDestinationAzureType: ["azure"],
    LogsArchiveDestinationGCSType: ["gcs"],
    LogsArchiveDestinationS3Type: ["s3"],
    LogsArchiveEncryptionS3Type: ["NO_OVERRIDE", "SSE_S3", "SSE_KMS"],
    LogsArchiveOrderDefinitionType: ["archive_order"],
    LogsArchiveState: ["UNKNOWN", "WORKING", "FAILING", "WORKING_AUTH_LEGACY"],
    LogsArchiveStorageClassS3Type: [
      "STANDARD",
      "STANDARD_IA",
      "ONEZONE_IA",
      "INTELLIGENT_TIERING",
      "GLACIER_IR",
    ],
    LogsComputeType: ["timeseries", "total"],
    LogsMetricComputeAggregationType: ["count", "distribution"],
    LogsMetricResponseComputeAggregationType: ["count", "distribution"],
    LogsMetricType: ["logs_metrics"],
    LogsRestrictionQueriesType: ["logs_restriction_queries"],
    LogsSort: ["timestamp", "-timestamp"],
    LogsSortOrder: ["asc", "desc"],
    LogsStorageTier: ["indexes", "online-archives", "flex"],
    PermissionsType: ["permissions"],
    RolesType: ["roles"],
  },
  oneOfMap: {
    CustomDestinationForwardDestination: [
      "CustomDestinationForwardDestinationHttp",
      "CustomDestinationForwardDestinationSplunk",
      "CustomDestinationForwardDestinationElasticsearch",
      "CustomDestinationForwardDestinationMicrosoftSentinel",
    ],
    CustomDestinationHttpDestinationAuth: [
      "CustomDestinationHttpDestinationAuthBasic",
      "CustomDestinationHttpDestinationAuthCustomHeader",
    ],
    CustomDestinationResponseForwardDestination: [
      "CustomDestinationResponseForwardDestinationHttp",
      "CustomDestinationResponseForwardDestinationSplunk",
      "CustomDestinationResponseForwardDestinationElasticsearch",
      "CustomDestinationResponseForwardDestinationMicrosoftSentinel",
    ],
    CustomDestinationResponseHttpDestinationAuth: [
      "CustomDestinationResponseHttpDestinationAuthBasic",
      "CustomDestinationResponseHttpDestinationAuthCustomHeader",
    ],
    LogsAggregateBucketValue: [
      "string",
      "number",
      "Array<LogsAggregateBucketValueTimeseriesPoint>",
    ],
    LogsArchiveCreateRequestDestination: [
      "LogsArchiveDestinationAzure",
      "LogsArchiveDestinationGCS",
      "LogsArchiveDestinationS3",
    ],
    LogsArchiveDestination: [
      "LogsArchiveDestinationAzure",
      "LogsArchiveDestinationGCS",
      "LogsArchiveDestinationS3",
    ],
    LogsArchiveIntegrationS3: [
      "LogsArchiveIntegrationS3AccessKey",
      "LogsArchiveIntegrationS3Role",
    ],
    LogsGroupByMissing: ["string", "number"],
    LogsGroupByTotal: ["boolean", "string", "number"],
    RestrictionQueryResponseIncludedItem: ["RestrictionQueryRole"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ArchiveSearchCreateRehydration: ArchiveSearchCreateRehydration,
    ArchiveSearchCreateRequest: ArchiveSearchCreateRequest,
    ArchiveSearchCreateRequestAttributes: ArchiveSearchCreateRequestAttributes,
    ArchiveSearchCreateRequestData: ArchiveSearchCreateRequestData,
    ArchiveSearchListResponse: ArchiveSearchListResponse,
    ArchiveSearchListResponseMeta: ArchiveSearchListResponseMeta,
    ArchiveSearchRehydrateRequest: ArchiveSearchRehydrateRequest,
    ArchiveSearchRehydrateRequestAttributes:
      ArchiveSearchRehydrateRequestAttributes,
    ArchiveSearchRehydrateRequestData: ArchiveSearchRehydrateRequestData,
    ArchiveSearchRehydrateRequestRehydration:
      ArchiveSearchRehydrateRequestRehydration,
    ArchiveSearchRehydration: ArchiveSearchRehydration,
    ArchiveSearchResponse: ArchiveSearchResponse,
    ArchiveSearchResponseAttributes: ArchiveSearchResponseAttributes,
    ArchiveSearchResponseData: ArchiveSearchResponseData,
    CustomDestinationCreateRequest: CustomDestinationCreateRequest,
    CustomDestinationCreateRequestAttributes:
      CustomDestinationCreateRequestAttributes,
    CustomDestinationCreateRequestDefinition:
      CustomDestinationCreateRequestDefinition,
    CustomDestinationElasticsearchDestinationAuth:
      CustomDestinationElasticsearchDestinationAuth,
    CustomDestinationForwardDestinationElasticsearch:
      CustomDestinationForwardDestinationElasticsearch,
    CustomDestinationForwardDestinationHttp:
      CustomDestinationForwardDestinationHttp,
    CustomDestinationForwardDestinationMicrosoftSentinel:
      CustomDestinationForwardDestinationMicrosoftSentinel,
    CustomDestinationForwardDestinationSplunk:
      CustomDestinationForwardDestinationSplunk,
    CustomDestinationHttpDestinationAuthBasic:
      CustomDestinationHttpDestinationAuthBasic,
    CustomDestinationHttpDestinationAuthCustomHeader:
      CustomDestinationHttpDestinationAuthCustomHeader,
    CustomDestinationResponse: CustomDestinationResponse,
    CustomDestinationResponseAttributes: CustomDestinationResponseAttributes,
    CustomDestinationResponseDefinition: CustomDestinationResponseDefinition,
    CustomDestinationResponseForwardDestinationElasticsearch:
      CustomDestinationResponseForwardDestinationElasticsearch,
    CustomDestinationResponseForwardDestinationHttp:
      CustomDestinationResponseForwardDestinationHttp,
    CustomDestinationResponseForwardDestinationMicrosoftSentinel:
      CustomDestinationResponseForwardDestinationMicrosoftSentinel,
    CustomDestinationResponseForwardDestinationSplunk:
      CustomDestinationResponseForwardDestinationSplunk,
    CustomDestinationResponseHttpDestinationAuthBasic:
      CustomDestinationResponseHttpDestinationAuthBasic,
    CustomDestinationResponseHttpDestinationAuthCustomHeader:
      CustomDestinationResponseHttpDestinationAuthCustomHeader,
    CustomDestinationUpdateRequest: CustomDestinationUpdateRequest,
    CustomDestinationUpdateRequestAttributes:
      CustomDestinationUpdateRequestAttributes,
    CustomDestinationUpdateRequestDefinition:
      CustomDestinationUpdateRequestDefinition,
    CustomDestinationsResponse: CustomDestinationsResponse,
    HTTPLogError: HTTPLogError,
    HTTPLogErrors: HTTPLogErrors,
    HTTPLogItem: HTTPLogItem,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    Log: Log,
    LogAttributes: LogAttributes,
    LogsAggregateBucket: LogsAggregateBucket,
    LogsAggregateBucketValueTimeseriesPoint:
      LogsAggregateBucketValueTimeseriesPoint,
    LogsAggregateRequest: LogsAggregateRequest,
    LogsAggregateRequestPage: LogsAggregateRequestPage,
    LogsAggregateResponse: LogsAggregateResponse,
    LogsAggregateResponseData: LogsAggregateResponseData,
    LogsAggregateSort: LogsAggregateSort,
    LogsArchive: LogsArchive,
    LogsArchiveAttributes: LogsArchiveAttributes,
    LogsArchiveCreateRequest: LogsArchiveCreateRequest,
    LogsArchiveCreateRequestAttributes: LogsArchiveCreateRequestAttributes,
    LogsArchiveCreateRequestDefinition: LogsArchiveCreateRequestDefinition,
    LogsArchiveDefinition: LogsArchiveDefinition,
    LogsArchiveDestinationAzure: LogsArchiveDestinationAzure,
    LogsArchiveDestinationGCS: LogsArchiveDestinationGCS,
    LogsArchiveDestinationS3: LogsArchiveDestinationS3,
    LogsArchiveEncryptionS3: LogsArchiveEncryptionS3,
    LogsArchiveIntegrationAzure: LogsArchiveIntegrationAzure,
    LogsArchiveIntegrationGCS: LogsArchiveIntegrationGCS,
    LogsArchiveIntegrationS3AccessKey: LogsArchiveIntegrationS3AccessKey,
    LogsArchiveIntegrationS3Role: LogsArchiveIntegrationS3Role,
    LogsArchiveOrder: LogsArchiveOrder,
    LogsArchiveOrderAttributes: LogsArchiveOrderAttributes,
    LogsArchiveOrderDefinition: LogsArchiveOrderDefinition,
    LogsArchives: LogsArchives,
    LogsCompute: LogsCompute,
    LogsGroupBy: LogsGroupBy,
    LogsGroupByHistogram: LogsGroupByHistogram,
    LogsListRequest: LogsListRequest,
    LogsListRequestPage: LogsListRequestPage,
    LogsListResponse: LogsListResponse,
    LogsListResponseLinks: LogsListResponseLinks,
    LogsMetricCompute: LogsMetricCompute,
    LogsMetricCreateAttributes: LogsMetricCreateAttributes,
    LogsMetricCreateData: LogsMetricCreateData,
    LogsMetricCreateRequest: LogsMetricCreateRequest,
    LogsMetricFilter: LogsMetricFilter,
    LogsMetricGroupBy: LogsMetricGroupBy,
    LogsMetricResponse: LogsMetricResponse,
    LogsMetricResponseAttributes: LogsMetricResponseAttributes,
    LogsMetricResponseCompute: LogsMetricResponseCompute,
    LogsMetricResponseData: LogsMetricResponseData,
    LogsMetricResponseFilter: LogsMetricResponseFilter,
    LogsMetricResponseGroupBy: LogsMetricResponseGroupBy,
    LogsMetricUpdateAttributes: LogsMetricUpdateAttributes,
    LogsMetricUpdateCompute: LogsMetricUpdateCompute,
    LogsMetricUpdateData: LogsMetricUpdateData,
    LogsMetricUpdateRequest: LogsMetricUpdateRequest,
    LogsMetricsResponse: LogsMetricsResponse,
    LogsQueryFilter: LogsQueryFilter,
    LogsQueryOptions: LogsQueryOptions,
    LogsResponseMetadata: LogsResponseMetadata,
    LogsResponseMetadataPage: LogsResponseMetadataPage,
    LogsWarning: LogsWarning,
    Pagination: Pagination,
    RelationshipToPermissionData: RelationshipToPermissionData,
    RelationshipToPermissions: RelationshipToPermissions,
    RelationshipToRole: RelationshipToRole,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    ResponseMetaAttributes: ResponseMetaAttributes,
    RestrictionQueryAttributes: RestrictionQueryAttributes,
    RestrictionQueryCreateAttributes: RestrictionQueryCreateAttributes,
    RestrictionQueryCreateData: RestrictionQueryCreateData,
    RestrictionQueryCreatePayload: RestrictionQueryCreatePayload,
    RestrictionQueryListResponse: RestrictionQueryListResponse,
    RestrictionQueryRole: RestrictionQueryRole,
    RestrictionQueryRoleAttribute: RestrictionQueryRoleAttribute,
    RestrictionQueryRolesResponse: RestrictionQueryRolesResponse,
    RestrictionQueryUpdateAttributes: RestrictionQueryUpdateAttributes,
    RestrictionQueryUpdateData: RestrictionQueryUpdateData,
    RestrictionQueryUpdatePayload: RestrictionQueryUpdatePayload,
    RestrictionQueryWithRelationships: RestrictionQueryWithRelationships,
    RestrictionQueryWithRelationshipsResponse:
      RestrictionQueryWithRelationshipsResponse,
    RestrictionQueryWithoutRelationships: RestrictionQueryWithoutRelationships,
    RestrictionQueryWithoutRelationshipsResponse:
      RestrictionQueryWithoutRelationshipsResponse,
    Role: Role,
    RoleAttributes: RoleAttributes,
    RoleResponseRelationships: RoleResponseRelationships,
    RolesResponse: RolesResponse,
    UserRelationships: UserRelationships,
  },
};
