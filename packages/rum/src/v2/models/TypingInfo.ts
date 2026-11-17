import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { AggregatedLongTasksByInvokerType } from "./AggregatedLongTasksByInvokerType";
import { AggregatedLongTasksRequest } from "./AggregatedLongTasksRequest";
import { AggregatedLongTasksRequestAttributes } from "./AggregatedLongTasksRequestAttributes";
import { AggregatedLongTasksRequestData } from "./AggregatedLongTasksRequestData";
import { AggregatedLongTasksResponse } from "./AggregatedLongTasksResponse";
import { AggregatedLongTasksResponseAttributes } from "./AggregatedLongTasksResponseAttributes";
import { AggregatedLongTasksResponseAttributesCriteria } from "./AggregatedLongTasksResponseAttributesCriteria";
import { AggregatedLongTasksResponseData } from "./AggregatedLongTasksResponseData";
import { AggregatedResource } from "./AggregatedResource";
import { AggregatedResourceTimingBreakdown } from "./AggregatedResourceTimingBreakdown";
import { AggregatedWaterfallPerformanceCriteria } from "./AggregatedWaterfallPerformanceCriteria";
import { AggregatedWaterfallRequest } from "./AggregatedWaterfallRequest";
import { AggregatedWaterfallRequestAttributes } from "./AggregatedWaterfallRequestAttributes";
import { AggregatedWaterfallRequestData } from "./AggregatedWaterfallRequestData";
import { AggregatedWaterfallResponse } from "./AggregatedWaterfallResponse";
import { AggregatedWaterfallResponseAttributes } from "./AggregatedWaterfallResponseAttributes";
import { AggregatedWaterfallResponseAttributesCriteria } from "./AggregatedWaterfallResponseAttributesCriteria";
import { AggregatedWaterfallResponseData } from "./AggregatedWaterfallResponseData";
import { ELFSourcemapAttributes } from "./ELFSourcemapAttributes";
import { ELFSourcemapData } from "./ELFSourcemapData";
import { FlutterSourcemapAttributes } from "./FlutterSourcemapAttributes";
import { FlutterSourcemapData } from "./FlutterSourcemapData";
import { IL2CPPSourcemapAttributes } from "./IL2CPPSourcemapAttributes";
import { IL2CPPSourcemapData } from "./IL2CPPSourcemapData";
import { IOSSourcemapAttributes } from "./IOSSourcemapAttributes";
import { IOSSourcemapData } from "./IOSSourcemapData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { JSSourcemapAttributes } from "./JSSourcemapAttributes";
import { JSSourcemapData } from "./JSSourcemapData";
import { JVMSourcemapAttributes } from "./JVMSourcemapAttributes";
import { JVMSourcemapData } from "./JVMSourcemapData";
import { ListSourcemapsResponse } from "./ListSourcemapsResponse";
import { LongTaskMetricStats } from "./LongTaskMetricStats";
import { LongTaskStatsPerView } from "./LongTaskStatsPerView";
import { NDKSourcemapAttributes } from "./NDKSourcemapAttributes";
import { NDKSourcemapData } from "./NDKSourcemapData";
import { PortablePdbSourcemapAttributes } from "./PortablePdbSourcemapAttributes";
import { PortablePdbSourcemapData } from "./PortablePdbSourcemapData";
import { RUMAggregateBucketValueTimeseriesPoint } from "./RUMAggregateBucketValueTimeseriesPoint";
import { RUMAggregateRequest } from "./RUMAggregateRequest";
import { RUMAggregateSort } from "./RUMAggregateSort";
import { RUMAggregationBucketsResponse } from "./RUMAggregationBucketsResponse";
import { RUMAnalyticsAggregateResponse } from "./RUMAnalyticsAggregateResponse";
import { RUMApplication } from "./RUMApplication";
import { RUMApplicationAttributes } from "./RUMApplicationAttributes";
import { RUMApplicationCreate } from "./RUMApplicationCreate";
import { RUMApplicationCreateAttributes } from "./RUMApplicationCreateAttributes";
import { RUMApplicationCreateRequest } from "./RUMApplicationCreateRequest";
import { RUMApplicationList } from "./RUMApplicationList";
import { RUMApplicationListAttributes } from "./RUMApplicationListAttributes";
import { RUMApplicationResponse } from "./RUMApplicationResponse";
import { RUMApplicationUpdate } from "./RUMApplicationUpdate";
import { RUMApplicationUpdateAttributes } from "./RUMApplicationUpdateAttributes";
import { RUMApplicationUpdateRequest } from "./RUMApplicationUpdateRequest";
import { RUMApplicationsResponse } from "./RUMApplicationsResponse";
import { RUMBucketResponse } from "./RUMBucketResponse";
import { RUMCompute } from "./RUMCompute";
import { RUMEvent } from "./RUMEvent";
import { RUMEventAttributes } from "./RUMEventAttributes";
import { RUMEventProcessingScale } from "./RUMEventProcessingScale";
import { RUMEventsResponse } from "./RUMEventsResponse";
import { RUMGroupBy } from "./RUMGroupBy";
import { RUMGroupByHistogram } from "./RUMGroupByHistogram";
import { RUMOperationCreateRequest } from "./RUMOperationCreateRequest";
import { RUMOperationCreateRequestData } from "./RUMOperationCreateRequestData";
import { RUMOperationJourneyCompositeRule } from "./RUMOperationJourneyCompositeRule";
import { RUMOperationJourneyNode } from "./RUMOperationJourneyNode";
import { RUMOperationJourneyPredicate } from "./RUMOperationJourneyPredicate";
import { RUMOperationJourneyRum } from "./RUMOperationJourneyRum";
import { RUMOperationJourneyStep } from "./RUMOperationJourneyStep";
import { RUMOperationRequestAttributes } from "./RUMOperationRequestAttributes";
import { RUMOperationResponse } from "./RUMOperationResponse";
import { RUMOperationResponseAttributes } from "./RUMOperationResponseAttributes";
import { RUMOperationResponseData } from "./RUMOperationResponseData";
import { RUMOperationStrongLinkCreateRequest } from "./RUMOperationStrongLinkCreateRequest";
import { RUMOperationStrongLinkCreateRequestAttributes } from "./RUMOperationStrongLinkCreateRequestAttributes";
import { RUMOperationStrongLinkCreateRequestData } from "./RUMOperationStrongLinkCreateRequestData";
import { RUMOperationStrongLinkResponse } from "./RUMOperationStrongLinkResponse";
import { RUMOperationStrongLinkResponseAttributes } from "./RUMOperationStrongLinkResponseAttributes";
import { RUMOperationStrongLinkResponseData } from "./RUMOperationStrongLinkResponseData";
import { RUMOperationStrongLinkUpdateRequest } from "./RUMOperationStrongLinkUpdateRequest";
import { RUMOperationStrongLinkUpdateRequestAttributes } from "./RUMOperationStrongLinkUpdateRequestAttributes";
import { RUMOperationStrongLinkUpdateRequestData } from "./RUMOperationStrongLinkUpdateRequestData";
import { RUMOperationStrongLinksListResponse } from "./RUMOperationStrongLinksListResponse";
import { RUMOperationStrongLinksListResponseMeta } from "./RUMOperationStrongLinksListResponseMeta";
import { RUMOperationUpdateRequest } from "./RUMOperationUpdateRequest";
import { RUMOperationUpdateRequestData } from "./RUMOperationUpdateRequestData";
import { RUMOperationUser } from "./RUMOperationUser";
import { RUMOperationsListResponse } from "./RUMOperationsListResponse";
import { RUMOperationsListResponseLinks } from "./RUMOperationsListResponseLinks";
import { RUMOperationsListResponseMeta } from "./RUMOperationsListResponseMeta";
import { RUMOperationsListResponseMetaPage } from "./RUMOperationsListResponseMetaPage";
import { RUMProductAnalyticsRetentionScale } from "./RUMProductAnalyticsRetentionScale";
import { RUMProductScales } from "./RUMProductScales";
import { RUMQueryFilter } from "./RUMQueryFilter";
import { RUMQueryOptions } from "./RUMQueryOptions";
import { RUMQueryPageOptions } from "./RUMQueryPageOptions";
import { RUMResponseLinks } from "./RUMResponseLinks";
import { RUMResponseMetadata } from "./RUMResponseMetadata";
import { RUMResponsePage } from "./RUMResponsePage";
import { RUMSearchEventsRequest } from "./RUMSearchEventsRequest";
import { RUMWarning } from "./RUMWarning";
import { ReactNativeSourcemapAttributes } from "./ReactNativeSourcemapAttributes";
import { ReactNativeSourcemapData } from "./ReactNativeSourcemapData";
import { RumArchiveConfig } from "./RumArchiveConfig";
import { RumArchiveConfigAttributes } from "./RumArchiveConfigAttributes";
import { RumArchiveConfigListResponse } from "./RumArchiveConfigListResponse";
import { RumArchiveConfigMeta } from "./RumArchiveConfigMeta";
import { RumArchiveConfigPage } from "./RumArchiveConfigPage";
import { RumArchiveConfigResponse } from "./RumArchiveConfigResponse";
import { RumArchiveConfigUpsertAttributes } from "./RumArchiveConfigUpsertAttributes";
import { RumArchiveConfigUpsertData } from "./RumArchiveConfigUpsertData";
import { RumArchiveConfigUpsertRequest } from "./RumArchiveConfigUpsertRequest";
import { RumArchiveSession } from "./RumArchiveSession";
import { RumArchiveSessionAttributes } from "./RumArchiveSessionAttributes";
import { RumArchiveSessionRecoveryStatus } from "./RumArchiveSessionRecoveryStatus";
import { RumArchiveSessionsMeta } from "./RumArchiveSessionsMeta";
import { RumArchiveSessionsPage } from "./RumArchiveSessionsPage";
import { RumArchiveSessionsResponse } from "./RumArchiveSessionsResponse";
import { RumArchiveSessionsSearchAttributes } from "./RumArchiveSessionsSearchAttributes";
import { RumArchiveSessionsSearchData } from "./RumArchiveSessionsSearchData";
import { RumArchiveSessionsSearchRequest } from "./RumArchiveSessionsSearchRequest";
import { RumConfigAttributes } from "./RumConfigAttributes";
import { RumConfigCreateAttributes } from "./RumConfigCreateAttributes";
import { RumConfigCreateData } from "./RumConfigCreateData";
import { RumConfigCreateRequest } from "./RumConfigCreateRequest";
import { RumConfigData } from "./RumConfigData";
import { RumConfigResponse } from "./RumConfigResponse";
import { RumConfigUpdateAttributes } from "./RumConfigUpdateAttributes";
import { RumConfigUpdateData } from "./RumConfigUpdateData";
import { RumConfigUpdateRequest } from "./RumConfigUpdateRequest";
import { RumCrossProductSampling } from "./RumCrossProductSampling";
import { RumCrossProductSamplingCreate } from "./RumCrossProductSamplingCreate";
import { RumCrossProductSamplingUpdate } from "./RumCrossProductSamplingUpdate";
import { RumExclusionFilterAttributes } from "./RumExclusionFilterAttributes";
import { RumExclusionFilterCreateAttributes } from "./RumExclusionFilterCreateAttributes";
import { RumExclusionFilterCreateData } from "./RumExclusionFilterCreateData";
import { RumExclusionFilterCreateRequest } from "./RumExclusionFilterCreateRequest";
import { RumExclusionFilterData } from "./RumExclusionFilterData";
import { RumExclusionFilterMeta } from "./RumExclusionFilterMeta";
import { RumExclusionFilterResponse } from "./RumExclusionFilterResponse";
import { RumExclusionFilterUpdateAttributes } from "./RumExclusionFilterUpdateAttributes";
import { RumExclusionFilterUpdateData } from "./RumExclusionFilterUpdateData";
import { RumExclusionFilterUpdateRequest } from "./RumExclusionFilterUpdateRequest";
import { RumExclusionFiltersResponse } from "./RumExclusionFiltersResponse";
import { RumManagedArchiveErrorResponse } from "./RumManagedArchiveErrorResponse";
import { RumMetricCompute } from "./RumMetricCompute";
import { RumMetricCreateAttributes } from "./RumMetricCreateAttributes";
import { RumMetricCreateData } from "./RumMetricCreateData";
import { RumMetricCreateRequest } from "./RumMetricCreateRequest";
import { RumMetricFilter } from "./RumMetricFilter";
import { RumMetricGroupBy } from "./RumMetricGroupBy";
import { RumMetricResponse } from "./RumMetricResponse";
import { RumMetricResponseAttributes } from "./RumMetricResponseAttributes";
import { RumMetricResponseCompute } from "./RumMetricResponseCompute";
import { RumMetricResponseData } from "./RumMetricResponseData";
import { RumMetricResponseFilter } from "./RumMetricResponseFilter";
import { RumMetricResponseGroupBy } from "./RumMetricResponseGroupBy";
import { RumMetricResponseUniqueness } from "./RumMetricResponseUniqueness";
import { RumMetricUniqueness } from "./RumMetricUniqueness";
import { RumMetricUpdateAttributes } from "./RumMetricUpdateAttributes";
import { RumMetricUpdateCompute } from "./RumMetricUpdateCompute";
import { RumMetricUpdateData } from "./RumMetricUpdateData";
import { RumMetricUpdateRequest } from "./RumMetricUpdateRequest";
import { RumMetricsResponse } from "./RumMetricsResponse";
import { RumPermanentRetentionFilterAttributes } from "./RumPermanentRetentionFilterAttributes";
import { RumPermanentRetentionFilterData } from "./RumPermanentRetentionFilterData";
import { RumPermanentRetentionFilterEditability } from "./RumPermanentRetentionFilterEditability";
import { RumPermanentRetentionFilterResponse } from "./RumPermanentRetentionFilterResponse";
import { RumPermanentRetentionFilterUpdateAttributes } from "./RumPermanentRetentionFilterUpdateAttributes";
import { RumPermanentRetentionFilterUpdateData } from "./RumPermanentRetentionFilterUpdateData";
import { RumPermanentRetentionFilterUpdateRequest } from "./RumPermanentRetentionFilterUpdateRequest";
import { RumPermanentRetentionFiltersResponse } from "./RumPermanentRetentionFiltersResponse";
import { RumRecoveredSession } from "./RumRecoveredSession";
import { RumRecoveryBatchCreateAttributes } from "./RumRecoveryBatchCreateAttributes";
import { RumRecoveryBatchListAttributes } from "./RumRecoveryBatchListAttributes";
import { RumRecoveryBatchListData } from "./RumRecoveryBatchListData";
import { RumRecoveryBatchListMeta } from "./RumRecoveryBatchListMeta";
import { RumRecoveryBatchListResponse } from "./RumRecoveryBatchListResponse";
import { RumRecoveryCancelAttributes } from "./RumRecoveryCancelAttributes";
import { RumRecoveryCancelData } from "./RumRecoveryCancelData";
import { RumRecoveryCancelRequest } from "./RumRecoveryCancelRequest";
import { RumRecoveryCancelResponse } from "./RumRecoveryCancelResponse";
import { RumRecoveryCancelResponseAttributes } from "./RumRecoveryCancelResponseAttributes";
import { RumRecoveryCancelResponseData } from "./RumRecoveryCancelResponseData";
import { RumRecoveryCountAttributes } from "./RumRecoveryCountAttributes";
import { RumRecoveryCountRequest } from "./RumRecoveryCountRequest";
import { RumRecoveryCountRequestData } from "./RumRecoveryCountRequestData";
import { RumRecoveryCountResponse } from "./RumRecoveryCountResponse";
import { RumRecoveryCountResponseAttributes } from "./RumRecoveryCountResponseAttributes";
import { RumRecoveryCountResponseData } from "./RumRecoveryCountResponseData";
import { RumRecoveryCreateData } from "./RumRecoveryCreateData";
import { RumRecoveryCreateRequest } from "./RumRecoveryCreateRequest";
import { RumRecoveryCreateResponse } from "./RumRecoveryCreateResponse";
import { RumRecoveryCreateResponseAttributes } from "./RumRecoveryCreateResponseAttributes";
import { RumRecoveryCreateResponseData } from "./RumRecoveryCreateResponseData";
import { RumRecoveryRequestAttributes } from "./RumRecoveryRequestAttributes";
import { RumRecoveryRequestData } from "./RumRecoveryRequestData";
import { RumRecoveryRequestResponse } from "./RumRecoveryRequestResponse";
import { RumRecoverySessionInput } from "./RumRecoverySessionInput";
import { RumRecoverySessionsCreateAttributes } from "./RumRecoverySessionsCreateAttributes";
import { RumRetentionFilterAttributes } from "./RumRetentionFilterAttributes";
import { RumRetentionFilterCreateAttributes } from "./RumRetentionFilterCreateAttributes";
import { RumRetentionFilterCreateData } from "./RumRetentionFilterCreateData";
import { RumRetentionFilterCreateRequest } from "./RumRetentionFilterCreateRequest";
import { RumRetentionFilterData } from "./RumRetentionFilterData";
import { RumRetentionFilterResponse } from "./RumRetentionFilterResponse";
import { RumRetentionFilterUpdateAttributes } from "./RumRetentionFilterUpdateAttributes";
import { RumRetentionFilterUpdateData } from "./RumRetentionFilterUpdateData";
import { RumRetentionFilterUpdateRequest } from "./RumRetentionFilterUpdateRequest";
import { RumRetentionFiltersOrderData } from "./RumRetentionFiltersOrderData";
import { RumRetentionFiltersOrderRequest } from "./RumRetentionFiltersOrderRequest";
import { RumRetentionFiltersOrderResponse } from "./RumRetentionFiltersOrderResponse";
import { RumRetentionFiltersResponse } from "./RumRetentionFiltersResponse";
import { RumRetentionQuotaConfigAttributes } from "./RumRetentionQuotaConfigAttributes";
import { RumRetentionQuotaConfigData } from "./RumRetentionQuotaConfigData";
import { RumRetentionQuotaConfigResponse } from "./RumRetentionQuotaConfigResponse";
import { RumRetentionQuotaConfigUpdateAttributes } from "./RumRetentionQuotaConfigUpdateAttributes";
import { RumRetentionQuotaConfigUpdateData } from "./RumRetentionQuotaConfigUpdateData";
import { RumRetentionQuotaConfigUpdateRequest } from "./RumRetentionQuotaConfigUpdateRequest";
import { RumRetentionQuotaCustomConfig } from "./RumRetentionQuotaCustomConfig";
import { RumSdkConfigAttributes } from "./RumSdkConfigAttributes";
import { RumSdkConfigData } from "./RumSdkConfigData";
import { RumSdkConfigDynamicOption } from "./RumSdkConfigDynamicOption";
import { RumSdkConfigDynamicOptionPair } from "./RumSdkConfigDynamicOptionPair";
import { RumSdkConfigMatchOption } from "./RumSdkConfigMatchOption";
import { RumSdkConfigMeta } from "./RumSdkConfigMeta";
import { RumSdkConfigResponse } from "./RumSdkConfigResponse";
import { RumSdkConfigRumAttributes } from "./RumSdkConfigRumAttributes";
import { RumSdkConfigRumUpdateAttributes } from "./RumSdkConfigRumUpdateAttributes";
import { RumSdkConfigSerializedRegex } from "./RumSdkConfigSerializedRegex";
import { RumSdkConfigTracingUrlConfig } from "./RumSdkConfigTracingUrlConfig";
import { RumSdkConfigUpdateAttributes } from "./RumSdkConfigUpdateAttributes";
import { RumSdkConfigUpdateData } from "./RumSdkConfigUpdateData";
import { RumSdkConfigUpdateRequest } from "./RumSdkConfigUpdateRequest";
import { ServiceRepositoryInfoRequest } from "./ServiceRepositoryInfoRequest";
import { ServiceRepositoryInfoRequestAttributes } from "./ServiceRepositoryInfoRequestAttributes";
import { ServiceRepositoryInfoRequestData } from "./ServiceRepositoryInfoRequestData";
import { ServiceRepositoryInfoResponse } from "./ServiceRepositoryInfoResponse";
import { ServiceRepositoryInfoResponseAttributes } from "./ServiceRepositoryInfoResponseAttributes";
import { ServiceRepositoryInfoResponseData } from "./ServiceRepositoryInfoResponseData";
import { SourcemapFileAttributes } from "./SourcemapFileAttributes";
import { SourcemapFileData } from "./SourcemapFileData";
import { SourcemapFileResponse } from "./SourcemapFileResponse";
import { SourcemapsListMeta } from "./SourcemapsListMeta";
import { SourcemapsListMetaPage } from "./SourcemapsListMetaPage";
import { SourcemapsResponse } from "./SourcemapsResponse";
import { TeamsOwnershipMappingBatchError } from "./TeamsOwnershipMappingBatchError";
import { TeamsOwnershipMappingBatchOperation } from "./TeamsOwnershipMappingBatchOperation";
import { TeamsOwnershipMappingBatchOperationData } from "./TeamsOwnershipMappingBatchOperationData";
import { TeamsOwnershipMappingBatchOperationDataAttributes } from "./TeamsOwnershipMappingBatchOperationDataAttributes";
import { TeamsOwnershipMappingBatchOperationRef } from "./TeamsOwnershipMappingBatchOperationRef";
import { TeamsOwnershipMappingBatchRequest } from "./TeamsOwnershipMappingBatchRequest";
import { TeamsOwnershipMappingBatchResponse } from "./TeamsOwnershipMappingBatchResponse";
import { TeamsOwnershipMappingBatchResult } from "./TeamsOwnershipMappingBatchResult";
import { TeamsOwnershipMappingBatchResultData } from "./TeamsOwnershipMappingBatchResultData";
import { TeamsOwnershipMappingBatchResultDataAttributes } from "./TeamsOwnershipMappingBatchResultDataAttributes";
import { TeamsOwnershipMappingCreateData } from "./TeamsOwnershipMappingCreateData";
import { TeamsOwnershipMappingCreateDataAttributes } from "./TeamsOwnershipMappingCreateDataAttributes";
import { TeamsOwnershipMappingCreateRequest } from "./TeamsOwnershipMappingCreateRequest";
import { TeamsOwnershipMappingResponse } from "./TeamsOwnershipMappingResponse";
import { TeamsOwnershipMappingResponseAttributes } from "./TeamsOwnershipMappingResponseAttributes";
import { TeamsOwnershipMappingResponseData } from "./TeamsOwnershipMappingResponseData";
import { TeamsOwnershipMappingsResponse } from "./TeamsOwnershipMappingsResponse";
import { TeamsOwnershipRuleResponseAttributes } from "./TeamsOwnershipRuleResponseAttributes";
import { TeamsOwnershipRuleResponseData } from "./TeamsOwnershipRuleResponseData";
import { TeamsOwnershipRuleTeamMapping } from "./TeamsOwnershipRuleTeamMapping";
import { TeamsOwnershipRulesResponse } from "./TeamsOwnershipRulesResponse";
import { TopLongTaskInvoker } from "./TopLongTaskInvoker";
import { WASMSourcemapAttributes } from "./WASMSourcemapAttributes";
import { WASMSourcemapData } from "./WASMSourcemapData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AggregatedLongTasksRequestType: ["aggregated_long_tasks"],
    AggregatedWaterfallPerformanceCriteriaMetric: [
      "loading_time",
      "largest_contentful_paint",
      "first_contentful_paint",
      "interaction_to_next_paint",
    ],
    AggregatedWaterfallRequestType: ["aggregated_waterfall"],
    ELFSourcemapMapKind: ["elf"],
    FlutterSourcemapMapKind: ["flutter"],
    IL2CPPSourcemapMapKind: ["il2cpp"],
    IOSSourcemapMapKind: ["ios"],
    JSSourcemapMapKind: ["js"],
    JVMSourcemapMapKind: ["jvm"],
    NDKSourcemapMapKind: ["ndk"],
    PortablePdbSourcemapMapKind: ["portable_pdb"],
    RUMAggregateSortType: ["alphabetical", "measure"],
    RUMAggregationFunction: [
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
    RUMApplicationCreateType: ["rum_application_create"],
    RUMApplicationListType: ["rum_application"],
    RUMApplicationType: ["rum_application"],
    RUMApplicationUpdateType: ["rum_application_update"],
    RUMComputeType: ["timeseries", "total"],
    RUMEventProcessingState: ["ALL", "ERROR_FOCUSED_MODE", "NONE"],
    RUMEventType: ["rum"],
    RUMOperationJourneyCompositeRuleKind: ["all_of", "in_order"],
    RUMOperationJourneyStepType: [
      "start",
      "update",
      "stop",
      "error",
      "abandoned",
    ],
    RUMOperationStrongLinkStatus: ["DRAFT", "CONFIRMED", "REJECTED"],
    RUMOperationStrongLinkType: ["strong_links"],
    RUMOperationStrongLinkUpdateStatus: ["CONFIRMED", "REJECTED"],
    RUMOperationType: ["operations"],
    RUMProductAnalyticsRetentionState: ["MAX", "NONE"],
    RUMResponseStatus: ["done", "timeout"],
    RUMSort: ["timestamp", "-timestamp"],
    RUMSortOrder: ["asc", "desc"],
    ReactNativeSourcemapMapKind: ["react"],
    RumArchiveConfigType: ["rum_archive_config"],
    RumArchiveSessionType: ["rum_archive_session"],
    RumConfigType: ["rum_config"],
    RumExclusionFilterEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RumExclusionFilterType: ["exclusion_filters"],
    RumMetricComputeAggregationType: ["count", "distribution"],
    RumMetricEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RumMetricType: ["rum_metrics"],
    RumMetricUniquenessWhen: ["match", "end"],
    RumPermanentRetentionFilterID: [
      "rum_apm_flat_sampling",
      "synthetics_sessions",
      "forced_replay_sessions",
    ],
    RumPermanentRetentionFilterType: ["permanent_retention_filters"],
    RumRecoveryBatchListDataType: ["rum_batch_recovery_request"],
    RumRecoveryBatchRequestType: ["batch"],
    RumRecoveryCancelStatus: ["cancelled"],
    RumRecoveryCountResponseDataType: ["rum_recovery_count"],
    RumRecoveryDiscoveryStatus: [
      "QUEUED",
      "PENDING",
      "SLICING",
      "DISCOVERED",
      "PROCESSING",
      "COMPLETED",
      "FAILED",
      "CANCELLED",
    ],
    RumRecoveryRequestStatus: [
      "PENDING",
      "PROCESSING",
      "COMPLETED",
      "FAILED",
      "CANCELLED",
      "EXPIRED",
    ],
    RumRecoveryRequestType: ["rum_recovery_request"],
    RumRecoverySessionStatus: [
      "AVAILABLE",
      "PENDING",
      "PROCESSING",
      "RECOVERED",
      "FAILED",
      "RETAINED",
      "EXPIRED",
      "CANCELLED",
    ],
    RumRecoverySessionsRequestType: ["sessions"],
    RumRetentionFilterEventType: [
      "session",
      "view",
      "action",
      "error",
      "resource",
      "long_task",
      "vital",
    ],
    RumRetentionFilterType: ["retention_filters"],
    RumRetentionQuotaConfigType: ["rum_quota_config"],
    RumRetentionQuotaMode: ["custom"],
    RumRetentionQuotaReachedAction: ["stop", "slowdown"],
    RumRetentionQuotaScopeType: ["application"],
    RumRetentionQuotaWindowType: ["daily"],
    RumSdkConfigDynamicOptionSerializedType: ["dynamic"],
    RumSdkConfigDynamicOptionStrategy: ["js", "cookie", "dom", "localStorage"],
    RumSdkConfigMatchOptionSerializedType: ["string", "regex"],
    RumSdkConfigSerializedRegexType: ["regex"],
    RumSdkConfigTracingUrlPropagatorType: [
      "datadog",
      "b3",
      "b3multi",
      "tracecontext",
    ],
    RumSdkConfigType: ["rum_sdk_config"],
    ServiceRepositoryInfoDataType: ["service_repository_info"],
    ServiceRepositoryInfoStatus: [
      "success",
      "not_found",
      "no_repository",
      "internal_error",
      "unknown",
    ],
    SourcemapDataType: ["sourcemaps"],
    SourcemapFileDataType: ["sourcemap_files"],
    SourcemapMapKind: [
      "js",
      "jvm",
      "ios",
      "react",
      "flutter",
      "elf",
      "ndk",
      "il2cpp",
      "wasm",
      "portable_pdb",
    ],
    SourcemapSearchBy: ["debug_id"],
    SourcemapSymbolType: ["dwarf", "sourcemap"],
    TeamsOwnershipMappingBatchOperationOp: ["add", "remove"],
    TeamsOwnershipMappingType: ["teams_ownership_mappings"],
    TeamsOwnershipMatchType: ["exact", "prefix"],
    TeamsOwnershipRuleType: ["teams_ownership_grouped_mappings"],
    WASMSourcemapMapKind: ["wasm"],
  },
  oneOfMap: {
    RUMAggregateBucketValue: [
      "string",
      "number",
      "Array<RUMAggregateBucketValueTimeseriesPoint>",
    ],
    RUMBucketGroupByValue: ["string", "number"],
    RUMGroupByMissing: ["string", "number"],
    RUMGroupByTotal: ["boolean", "string", "number"],
    RumRecoveryCreateAttributes: [
      "RumRecoverySessionsCreateAttributes",
      "RumRecoveryBatchCreateAttributes",
    ],
    SourcemapItem: [
      "JSSourcemapData",
      "ReactNativeSourcemapData",
      "IOSSourcemapData",
      "JVMSourcemapData",
      "FlutterSourcemapData",
      "ELFSourcemapData",
      "NDKSourcemapData",
      "IL2CPPSourcemapData",
      "WASMSourcemapData",
      "PortablePdbSourcemapData",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AggregatedLongTasksByInvokerType: AggregatedLongTasksByInvokerType,
    AggregatedLongTasksRequest: AggregatedLongTasksRequest,
    AggregatedLongTasksRequestAttributes: AggregatedLongTasksRequestAttributes,
    AggregatedLongTasksRequestData: AggregatedLongTasksRequestData,
    AggregatedLongTasksResponse: AggregatedLongTasksResponse,
    AggregatedLongTasksResponseAttributes:
      AggregatedLongTasksResponseAttributes,
    AggregatedLongTasksResponseAttributesCriteria:
      AggregatedLongTasksResponseAttributesCriteria,
    AggregatedLongTasksResponseData: AggregatedLongTasksResponseData,
    AggregatedResource: AggregatedResource,
    AggregatedResourceTimingBreakdown: AggregatedResourceTimingBreakdown,
    AggregatedWaterfallPerformanceCriteria:
      AggregatedWaterfallPerformanceCriteria,
    AggregatedWaterfallRequest: AggregatedWaterfallRequest,
    AggregatedWaterfallRequestAttributes: AggregatedWaterfallRequestAttributes,
    AggregatedWaterfallRequestData: AggregatedWaterfallRequestData,
    AggregatedWaterfallResponse: AggregatedWaterfallResponse,
    AggregatedWaterfallResponseAttributes:
      AggregatedWaterfallResponseAttributes,
    AggregatedWaterfallResponseAttributesCriteria:
      AggregatedWaterfallResponseAttributesCriteria,
    AggregatedWaterfallResponseData: AggregatedWaterfallResponseData,
    ELFSourcemapAttributes: ELFSourcemapAttributes,
    ELFSourcemapData: ELFSourcemapData,
    FlutterSourcemapAttributes: FlutterSourcemapAttributes,
    FlutterSourcemapData: FlutterSourcemapData,
    IL2CPPSourcemapAttributes: IL2CPPSourcemapAttributes,
    IL2CPPSourcemapData: IL2CPPSourcemapData,
    IOSSourcemapAttributes: IOSSourcemapAttributes,
    IOSSourcemapData: IOSSourcemapData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    JSSourcemapAttributes: JSSourcemapAttributes,
    JSSourcemapData: JSSourcemapData,
    JVMSourcemapAttributes: JVMSourcemapAttributes,
    JVMSourcemapData: JVMSourcemapData,
    ListSourcemapsResponse: ListSourcemapsResponse,
    LongTaskMetricStats: LongTaskMetricStats,
    LongTaskStatsPerView: LongTaskStatsPerView,
    NDKSourcemapAttributes: NDKSourcemapAttributes,
    NDKSourcemapData: NDKSourcemapData,
    PortablePdbSourcemapAttributes: PortablePdbSourcemapAttributes,
    PortablePdbSourcemapData: PortablePdbSourcemapData,
    RUMAggregateBucketValueTimeseriesPoint:
      RUMAggregateBucketValueTimeseriesPoint,
    RUMAggregateRequest: RUMAggregateRequest,
    RUMAggregateSort: RUMAggregateSort,
    RUMAggregationBucketsResponse: RUMAggregationBucketsResponse,
    RUMAnalyticsAggregateResponse: RUMAnalyticsAggregateResponse,
    RUMApplication: RUMApplication,
    RUMApplicationAttributes: RUMApplicationAttributes,
    RUMApplicationCreate: RUMApplicationCreate,
    RUMApplicationCreateAttributes: RUMApplicationCreateAttributes,
    RUMApplicationCreateRequest: RUMApplicationCreateRequest,
    RUMApplicationList: RUMApplicationList,
    RUMApplicationListAttributes: RUMApplicationListAttributes,
    RUMApplicationResponse: RUMApplicationResponse,
    RUMApplicationUpdate: RUMApplicationUpdate,
    RUMApplicationUpdateAttributes: RUMApplicationUpdateAttributes,
    RUMApplicationUpdateRequest: RUMApplicationUpdateRequest,
    RUMApplicationsResponse: RUMApplicationsResponse,
    RUMBucketResponse: RUMBucketResponse,
    RUMCompute: RUMCompute,
    RUMEvent: RUMEvent,
    RUMEventAttributes: RUMEventAttributes,
    RUMEventProcessingScale: RUMEventProcessingScale,
    RUMEventsResponse: RUMEventsResponse,
    RUMGroupBy: RUMGroupBy,
    RUMGroupByHistogram: RUMGroupByHistogram,
    RUMOperationCreateRequest: RUMOperationCreateRequest,
    RUMOperationCreateRequestData: RUMOperationCreateRequestData,
    RUMOperationJourneyCompositeRule: RUMOperationJourneyCompositeRule,
    RUMOperationJourneyNode: RUMOperationJourneyNode,
    RUMOperationJourneyPredicate: RUMOperationJourneyPredicate,
    RUMOperationJourneyRum: RUMOperationJourneyRum,
    RUMOperationJourneyStep: RUMOperationJourneyStep,
    RUMOperationRequestAttributes: RUMOperationRequestAttributes,
    RUMOperationResponse: RUMOperationResponse,
    RUMOperationResponseAttributes: RUMOperationResponseAttributes,
    RUMOperationResponseData: RUMOperationResponseData,
    RUMOperationStrongLinkCreateRequest: RUMOperationStrongLinkCreateRequest,
    RUMOperationStrongLinkCreateRequestAttributes:
      RUMOperationStrongLinkCreateRequestAttributes,
    RUMOperationStrongLinkCreateRequestData:
      RUMOperationStrongLinkCreateRequestData,
    RUMOperationStrongLinkResponse: RUMOperationStrongLinkResponse,
    RUMOperationStrongLinkResponseAttributes:
      RUMOperationStrongLinkResponseAttributes,
    RUMOperationStrongLinkResponseData: RUMOperationStrongLinkResponseData,
    RUMOperationStrongLinkUpdateRequest: RUMOperationStrongLinkUpdateRequest,
    RUMOperationStrongLinkUpdateRequestAttributes:
      RUMOperationStrongLinkUpdateRequestAttributes,
    RUMOperationStrongLinkUpdateRequestData:
      RUMOperationStrongLinkUpdateRequestData,
    RUMOperationStrongLinksListResponse: RUMOperationStrongLinksListResponse,
    RUMOperationStrongLinksListResponseMeta:
      RUMOperationStrongLinksListResponseMeta,
    RUMOperationUpdateRequest: RUMOperationUpdateRequest,
    RUMOperationUpdateRequestData: RUMOperationUpdateRequestData,
    RUMOperationUser: RUMOperationUser,
    RUMOperationsListResponse: RUMOperationsListResponse,
    RUMOperationsListResponseLinks: RUMOperationsListResponseLinks,
    RUMOperationsListResponseMeta: RUMOperationsListResponseMeta,
    RUMOperationsListResponseMetaPage: RUMOperationsListResponseMetaPage,
    RUMProductAnalyticsRetentionScale: RUMProductAnalyticsRetentionScale,
    RUMProductScales: RUMProductScales,
    RUMQueryFilter: RUMQueryFilter,
    RUMQueryOptions: RUMQueryOptions,
    RUMQueryPageOptions: RUMQueryPageOptions,
    RUMResponseLinks: RUMResponseLinks,
    RUMResponseMetadata: RUMResponseMetadata,
    RUMResponsePage: RUMResponsePage,
    RUMSearchEventsRequest: RUMSearchEventsRequest,
    RUMWarning: RUMWarning,
    ReactNativeSourcemapAttributes: ReactNativeSourcemapAttributes,
    ReactNativeSourcemapData: ReactNativeSourcemapData,
    RumArchiveConfig: RumArchiveConfig,
    RumArchiveConfigAttributes: RumArchiveConfigAttributes,
    RumArchiveConfigListResponse: RumArchiveConfigListResponse,
    RumArchiveConfigMeta: RumArchiveConfigMeta,
    RumArchiveConfigPage: RumArchiveConfigPage,
    RumArchiveConfigResponse: RumArchiveConfigResponse,
    RumArchiveConfigUpsertAttributes: RumArchiveConfigUpsertAttributes,
    RumArchiveConfigUpsertData: RumArchiveConfigUpsertData,
    RumArchiveConfigUpsertRequest: RumArchiveConfigUpsertRequest,
    RumArchiveSession: RumArchiveSession,
    RumArchiveSessionAttributes: RumArchiveSessionAttributes,
    RumArchiveSessionRecoveryStatus: RumArchiveSessionRecoveryStatus,
    RumArchiveSessionsMeta: RumArchiveSessionsMeta,
    RumArchiveSessionsPage: RumArchiveSessionsPage,
    RumArchiveSessionsResponse: RumArchiveSessionsResponse,
    RumArchiveSessionsSearchAttributes: RumArchiveSessionsSearchAttributes,
    RumArchiveSessionsSearchData: RumArchiveSessionsSearchData,
    RumArchiveSessionsSearchRequest: RumArchiveSessionsSearchRequest,
    RumConfigAttributes: RumConfigAttributes,
    RumConfigCreateAttributes: RumConfigCreateAttributes,
    RumConfigCreateData: RumConfigCreateData,
    RumConfigCreateRequest: RumConfigCreateRequest,
    RumConfigData: RumConfigData,
    RumConfigResponse: RumConfigResponse,
    RumConfigUpdateAttributes: RumConfigUpdateAttributes,
    RumConfigUpdateData: RumConfigUpdateData,
    RumConfigUpdateRequest: RumConfigUpdateRequest,
    RumCrossProductSampling: RumCrossProductSampling,
    RumCrossProductSamplingCreate: RumCrossProductSamplingCreate,
    RumCrossProductSamplingUpdate: RumCrossProductSamplingUpdate,
    RumExclusionFilterAttributes: RumExclusionFilterAttributes,
    RumExclusionFilterCreateAttributes: RumExclusionFilterCreateAttributes,
    RumExclusionFilterCreateData: RumExclusionFilterCreateData,
    RumExclusionFilterCreateRequest: RumExclusionFilterCreateRequest,
    RumExclusionFilterData: RumExclusionFilterData,
    RumExclusionFilterMeta: RumExclusionFilterMeta,
    RumExclusionFilterResponse: RumExclusionFilterResponse,
    RumExclusionFilterUpdateAttributes: RumExclusionFilterUpdateAttributes,
    RumExclusionFilterUpdateData: RumExclusionFilterUpdateData,
    RumExclusionFilterUpdateRequest: RumExclusionFilterUpdateRequest,
    RumExclusionFiltersResponse: RumExclusionFiltersResponse,
    RumManagedArchiveErrorResponse: RumManagedArchiveErrorResponse,
    RumMetricCompute: RumMetricCompute,
    RumMetricCreateAttributes: RumMetricCreateAttributes,
    RumMetricCreateData: RumMetricCreateData,
    RumMetricCreateRequest: RumMetricCreateRequest,
    RumMetricFilter: RumMetricFilter,
    RumMetricGroupBy: RumMetricGroupBy,
    RumMetricResponse: RumMetricResponse,
    RumMetricResponseAttributes: RumMetricResponseAttributes,
    RumMetricResponseCompute: RumMetricResponseCompute,
    RumMetricResponseData: RumMetricResponseData,
    RumMetricResponseFilter: RumMetricResponseFilter,
    RumMetricResponseGroupBy: RumMetricResponseGroupBy,
    RumMetricResponseUniqueness: RumMetricResponseUniqueness,
    RumMetricUniqueness: RumMetricUniqueness,
    RumMetricUpdateAttributes: RumMetricUpdateAttributes,
    RumMetricUpdateCompute: RumMetricUpdateCompute,
    RumMetricUpdateData: RumMetricUpdateData,
    RumMetricUpdateRequest: RumMetricUpdateRequest,
    RumMetricsResponse: RumMetricsResponse,
    RumPermanentRetentionFilterAttributes:
      RumPermanentRetentionFilterAttributes,
    RumPermanentRetentionFilterData: RumPermanentRetentionFilterData,
    RumPermanentRetentionFilterEditability:
      RumPermanentRetentionFilterEditability,
    RumPermanentRetentionFilterResponse: RumPermanentRetentionFilterResponse,
    RumPermanentRetentionFilterUpdateAttributes:
      RumPermanentRetentionFilterUpdateAttributes,
    RumPermanentRetentionFilterUpdateData:
      RumPermanentRetentionFilterUpdateData,
    RumPermanentRetentionFilterUpdateRequest:
      RumPermanentRetentionFilterUpdateRequest,
    RumPermanentRetentionFiltersResponse: RumPermanentRetentionFiltersResponse,
    RumRecoveredSession: RumRecoveredSession,
    RumRecoveryBatchCreateAttributes: RumRecoveryBatchCreateAttributes,
    RumRecoveryBatchListAttributes: RumRecoveryBatchListAttributes,
    RumRecoveryBatchListData: RumRecoveryBatchListData,
    RumRecoveryBatchListMeta: RumRecoveryBatchListMeta,
    RumRecoveryBatchListResponse: RumRecoveryBatchListResponse,
    RumRecoveryCancelAttributes: RumRecoveryCancelAttributes,
    RumRecoveryCancelData: RumRecoveryCancelData,
    RumRecoveryCancelRequest: RumRecoveryCancelRequest,
    RumRecoveryCancelResponse: RumRecoveryCancelResponse,
    RumRecoveryCancelResponseAttributes: RumRecoveryCancelResponseAttributes,
    RumRecoveryCancelResponseData: RumRecoveryCancelResponseData,
    RumRecoveryCountAttributes: RumRecoveryCountAttributes,
    RumRecoveryCountRequest: RumRecoveryCountRequest,
    RumRecoveryCountRequestData: RumRecoveryCountRequestData,
    RumRecoveryCountResponse: RumRecoveryCountResponse,
    RumRecoveryCountResponseAttributes: RumRecoveryCountResponseAttributes,
    RumRecoveryCountResponseData: RumRecoveryCountResponseData,
    RumRecoveryCreateData: RumRecoveryCreateData,
    RumRecoveryCreateRequest: RumRecoveryCreateRequest,
    RumRecoveryCreateResponse: RumRecoveryCreateResponse,
    RumRecoveryCreateResponseAttributes: RumRecoveryCreateResponseAttributes,
    RumRecoveryCreateResponseData: RumRecoveryCreateResponseData,
    RumRecoveryRequestAttributes: RumRecoveryRequestAttributes,
    RumRecoveryRequestData: RumRecoveryRequestData,
    RumRecoveryRequestResponse: RumRecoveryRequestResponse,
    RumRecoverySessionInput: RumRecoverySessionInput,
    RumRecoverySessionsCreateAttributes: RumRecoverySessionsCreateAttributes,
    RumRetentionFilterAttributes: RumRetentionFilterAttributes,
    RumRetentionFilterCreateAttributes: RumRetentionFilterCreateAttributes,
    RumRetentionFilterCreateData: RumRetentionFilterCreateData,
    RumRetentionFilterCreateRequest: RumRetentionFilterCreateRequest,
    RumRetentionFilterData: RumRetentionFilterData,
    RumRetentionFilterResponse: RumRetentionFilterResponse,
    RumRetentionFilterUpdateAttributes: RumRetentionFilterUpdateAttributes,
    RumRetentionFilterUpdateData: RumRetentionFilterUpdateData,
    RumRetentionFilterUpdateRequest: RumRetentionFilterUpdateRequest,
    RumRetentionFiltersOrderData: RumRetentionFiltersOrderData,
    RumRetentionFiltersOrderRequest: RumRetentionFiltersOrderRequest,
    RumRetentionFiltersOrderResponse: RumRetentionFiltersOrderResponse,
    RumRetentionFiltersResponse: RumRetentionFiltersResponse,
    RumRetentionQuotaConfigAttributes: RumRetentionQuotaConfigAttributes,
    RumRetentionQuotaConfigData: RumRetentionQuotaConfigData,
    RumRetentionQuotaConfigResponse: RumRetentionQuotaConfigResponse,
    RumRetentionQuotaConfigUpdateAttributes:
      RumRetentionQuotaConfigUpdateAttributes,
    RumRetentionQuotaConfigUpdateData: RumRetentionQuotaConfigUpdateData,
    RumRetentionQuotaConfigUpdateRequest: RumRetentionQuotaConfigUpdateRequest,
    RumRetentionQuotaCustomConfig: RumRetentionQuotaCustomConfig,
    RumSdkConfigAttributes: RumSdkConfigAttributes,
    RumSdkConfigData: RumSdkConfigData,
    RumSdkConfigDynamicOption: RumSdkConfigDynamicOption,
    RumSdkConfigDynamicOptionPair: RumSdkConfigDynamicOptionPair,
    RumSdkConfigMatchOption: RumSdkConfigMatchOption,
    RumSdkConfigMeta: RumSdkConfigMeta,
    RumSdkConfigResponse: RumSdkConfigResponse,
    RumSdkConfigRumAttributes: RumSdkConfigRumAttributes,
    RumSdkConfigRumUpdateAttributes: RumSdkConfigRumUpdateAttributes,
    RumSdkConfigSerializedRegex: RumSdkConfigSerializedRegex,
    RumSdkConfigTracingUrlConfig: RumSdkConfigTracingUrlConfig,
    RumSdkConfigUpdateAttributes: RumSdkConfigUpdateAttributes,
    RumSdkConfigUpdateData: RumSdkConfigUpdateData,
    RumSdkConfigUpdateRequest: RumSdkConfigUpdateRequest,
    ServiceRepositoryInfoRequest: ServiceRepositoryInfoRequest,
    ServiceRepositoryInfoRequestAttributes:
      ServiceRepositoryInfoRequestAttributes,
    ServiceRepositoryInfoRequestData: ServiceRepositoryInfoRequestData,
    ServiceRepositoryInfoResponse: ServiceRepositoryInfoResponse,
    ServiceRepositoryInfoResponseAttributes:
      ServiceRepositoryInfoResponseAttributes,
    ServiceRepositoryInfoResponseData: ServiceRepositoryInfoResponseData,
    SourcemapFileAttributes: SourcemapFileAttributes,
    SourcemapFileData: SourcemapFileData,
    SourcemapFileResponse: SourcemapFileResponse,
    SourcemapsListMeta: SourcemapsListMeta,
    SourcemapsListMetaPage: SourcemapsListMetaPage,
    SourcemapsResponse: SourcemapsResponse,
    TeamsOwnershipMappingBatchError: TeamsOwnershipMappingBatchError,
    TeamsOwnershipMappingBatchOperation: TeamsOwnershipMappingBatchOperation,
    TeamsOwnershipMappingBatchOperationData:
      TeamsOwnershipMappingBatchOperationData,
    TeamsOwnershipMappingBatchOperationDataAttributes:
      TeamsOwnershipMappingBatchOperationDataAttributes,
    TeamsOwnershipMappingBatchOperationRef:
      TeamsOwnershipMappingBatchOperationRef,
    TeamsOwnershipMappingBatchRequest: TeamsOwnershipMappingBatchRequest,
    TeamsOwnershipMappingBatchResponse: TeamsOwnershipMappingBatchResponse,
    TeamsOwnershipMappingBatchResult: TeamsOwnershipMappingBatchResult,
    TeamsOwnershipMappingBatchResultData: TeamsOwnershipMappingBatchResultData,
    TeamsOwnershipMappingBatchResultDataAttributes:
      TeamsOwnershipMappingBatchResultDataAttributes,
    TeamsOwnershipMappingCreateData: TeamsOwnershipMappingCreateData,
    TeamsOwnershipMappingCreateDataAttributes:
      TeamsOwnershipMappingCreateDataAttributes,
    TeamsOwnershipMappingCreateRequest: TeamsOwnershipMappingCreateRequest,
    TeamsOwnershipMappingResponse: TeamsOwnershipMappingResponse,
    TeamsOwnershipMappingResponseAttributes:
      TeamsOwnershipMappingResponseAttributes,
    TeamsOwnershipMappingResponseData: TeamsOwnershipMappingResponseData,
    TeamsOwnershipMappingsResponse: TeamsOwnershipMappingsResponse,
    TeamsOwnershipRuleResponseAttributes: TeamsOwnershipRuleResponseAttributes,
    TeamsOwnershipRuleResponseData: TeamsOwnershipRuleResponseData,
    TeamsOwnershipRuleTeamMapping: TeamsOwnershipRuleTeamMapping,
    TeamsOwnershipRulesResponse: TeamsOwnershipRulesResponse,
    TopLongTaskInvoker: TopLongTaskInvoker,
    WASMSourcemapAttributes: WASMSourcemapAttributes,
    WASMSourcemapData: WASMSourcemapData,
  },
};
