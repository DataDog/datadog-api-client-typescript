import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ExperimentsAnalysisPlanV2DTO } from "./ExperimentsAnalysisPlanV2DTO";
import { ExperimentsAnalysisPlanV2DTOData } from "./ExperimentsAnalysisPlanV2DTOData";
import { ExperimentsAnalysisPlanV2MutationResponse } from "./ExperimentsAnalysisPlanV2MutationResponse";
import { ExperimentsAnalysisPlanV2MutationResponseDataAttributes } from "./ExperimentsAnalysisPlanV2MutationResponseDataAttributes";
import { ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior } from "./ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior";
import { ExperimentsAnalysisPlanWriteV2Request } from "./ExperimentsAnalysisPlanWriteV2Request";
import { ExperimentsAnalysisPlanWriteV2RequestData } from "./ExperimentsAnalysisPlanWriteV2RequestData";
import { ExperimentsAnalysisPlanWriteV2RequestDataAttributes } from "./ExperimentsAnalysisPlanWriteV2RequestDataAttributes";
import { ExperimentsAnalysisPlanWriteV2RequestDataAttributesBayesianPrior } from "./ExperimentsAnalysisPlanWriteV2RequestDataAttributesBayesianPrior";
import { ExperimentsCancelExperimentV2Request } from "./ExperimentsCancelExperimentV2Request";
import { ExperimentsCancelExperimentV2RequestData } from "./ExperimentsCancelExperimentV2RequestData";
import { ExperimentsCancelExperimentV2RequestDataAttributes } from "./ExperimentsCancelExperimentV2RequestDataAttributes";
import { ExperimentsConcludeExperimentV2Request } from "./ExperimentsConcludeExperimentV2Request";
import { ExperimentsConcludeExperimentV2RequestData } from "./ExperimentsConcludeExperimentV2RequestData";
import { ExperimentsConcludeExperimentV2RequestDataAttributes } from "./ExperimentsConcludeExperimentV2RequestDataAttributes";
import { ExperimentsCreateExperimentMetricGroupV2Request } from "./ExperimentsCreateExperimentMetricGroupV2Request";
import { ExperimentsCreateExperimentMetricGroupV2RequestData } from "./ExperimentsCreateExperimentMetricGroupV2RequestData";
import { ExperimentsCreateExperimentMetricGroupV2RequestDataAttributes } from "./ExperimentsCreateExperimentMetricGroupV2RequestDataAttributes";
import { ExperimentsCreateExperimentMetricGroupV2RequestDataAttributesMetricsItems } from "./ExperimentsCreateExperimentMetricGroupV2RequestDataAttributesMetricsItems";
import { ExperimentsCreateExperimentV2Request } from "./ExperimentsCreateExperimentV2Request";
import { ExperimentsCreateExperimentV2RequestData } from "./ExperimentsCreateExperimentV2RequestData";
import { ExperimentsCreateExperimentV2RequestDataAttributes } from "./ExperimentsCreateExperimentV2RequestDataAttributes";
import { ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration } from "./ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration";
import { ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems } from "./ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems";
import { ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration } from "./ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration";
import { ExperimentsCreateExposureSQLModelV2Request } from "./ExperimentsCreateExposureSQLModelV2Request";
import { ExperimentsCreateExposureSQLModelV2RequestData } from "./ExperimentsCreateExposureSQLModelV2RequestData";
import { ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems } from "./ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems";
import { ExperimentsCreateMetricCollectionV2Request } from "./ExperimentsCreateMetricCollectionV2Request";
import { ExperimentsCreateMetricCollectionV2RequestData } from "./ExperimentsCreateMetricCollectionV2RequestData";
import { ExperimentsCreateMetricCollectionV2RequestDataAttributes } from "./ExperimentsCreateMetricCollectionV2RequestDataAttributes";
import { ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems } from "./ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems";
import { ExperimentsCreateMetricNumeratorAttributes } from "./ExperimentsCreateMetricNumeratorAttributes";
import { ExperimentsCreateMetricPercentileAttributes } from "./ExperimentsCreateMetricPercentileAttributes";
import { ExperimentsCreateMetricSQLModelV2Request } from "./ExperimentsCreateMetricSQLModelV2Request";
import { ExperimentsCreateMetricSQLModelV2RequestData } from "./ExperimentsCreateMetricSQLModelV2RequestData";
import { ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems } from "./ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems";
import { ExperimentsCreateMetricV2Request } from "./ExperimentsCreateMetricV2Request";
import { ExperimentsCreateMetricV2RequestData } from "./ExperimentsCreateMetricV2RequestData";
import { ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure } from "./ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure";
import { ExperimentsCreateSubjectTypeV2Request } from "./ExperimentsCreateSubjectTypeV2Request";
import { ExperimentsCreateSubjectTypeV2RequestData } from "./ExperimentsCreateSubjectTypeV2RequestData";
import { ExperimentsCreateSubjectTypeV2RequestDataAttributes } from "./ExperimentsCreateSubjectTypeV2RequestDataAttributes";
import { ExperimentsDatadogEntryPointFilter } from "./ExperimentsDatadogEntryPointFilter";
import { ExperimentsDatadogMetricAggregationInput } from "./ExperimentsDatadogMetricAggregationInput";
import { ExperimentsDatadogMetricMeasureInput } from "./ExperimentsDatadogMetricMeasureInput";
import { ExperimentsDatadogPercentileAggregationInput } from "./ExperimentsDatadogPercentileAggregationInput";
import { ExperimentsDatadogPercentileMeasureInput } from "./ExperimentsDatadogPercentileMeasureInput";
import { ExperimentsExperimentDiagnosticsV2DTO } from "./ExperimentsExperimentDiagnosticsV2DTO";
import { ExperimentsExperimentDiagnosticsV2DTOData } from "./ExperimentsExperimentDiagnosticsV2DTOData";
import { ExperimentsExperimentDiagnosticsV2DTODataAttributes } from "./ExperimentsExperimentDiagnosticsV2DTODataAttributes";
import { ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems } from "./ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems";
import { ExperimentsExperimentMetricGroupMutationV2 } from "./ExperimentsExperimentMetricGroupMutationV2";
import { ExperimentsExperimentMetricGroupMutationV2Data } from "./ExperimentsExperimentMetricGroupMutationV2Data";
import { ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems } from "./ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems";
import { ExperimentsExperimentMetricGroupV2DTOArray } from "./ExperimentsExperimentMetricGroupV2DTOArray";
import { ExperimentsExperimentMetricGroupV2DTODataAttributes } from "./ExperimentsExperimentMetricGroupV2DTODataAttributes";
import { ExperimentsExperimentResultsV2MetaDTO } from "./ExperimentsExperimentResultsV2MetaDTO";
import { ExperimentsExperimentV2DTO } from "./ExperimentsExperimentV2DTO";
import { ExperimentsExperimentV2DTOData } from "./ExperimentsExperimentV2DTOData";
import { ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems } from "./ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems";
import { ExperimentsExperimentV2DTODataAttributesVariantsItems } from "./ExperimentsExperimentV2DTODataAttributesVariantsItems";
import { ExperimentsExperimentV2ListDTOArray } from "./ExperimentsExperimentV2ListDTOArray";
import { ExperimentsExperimentV2ListDTOData } from "./ExperimentsExperimentV2ListDTOData";
import { ExperimentsExperimentV2ListDTODataAttributes } from "./ExperimentsExperimentV2ListDTODataAttributes";
import { ExperimentsExposureSQLModelV2DTO } from "./ExperimentsExposureSQLModelV2DTO";
import { ExperimentsExposureSQLModelV2DTOArray } from "./ExperimentsExposureSQLModelV2DTOArray";
import { ExperimentsExposureSQLModelV2DTOData } from "./ExperimentsExposureSQLModelV2DTOData";
import { ExperimentsExposureSQLModelV2DTODataAttributes } from "./ExperimentsExposureSQLModelV2DTODataAttributes";
import { ExperimentsExposureSQLModelV2DTODataAttributesItems } from "./ExperimentsExposureSQLModelV2DTODataAttributesItems";
import { ExperimentsInlineCondition } from "./ExperimentsInlineCondition";
import { ExperimentsMeasureComparisonFilterInput } from "./ExperimentsMeasureComparisonFilterInput";
import { ExperimentsMeasureNullFilterInput } from "./ExperimentsMeasureNullFilterInput";
import { ExperimentsMeasureRangeFilterInput } from "./ExperimentsMeasureRangeFilterInput";
import { ExperimentsMetricCollectionV2DTO } from "./ExperimentsMetricCollectionV2DTO";
import { ExperimentsMetricCollectionV2DTOArray } from "./ExperimentsMetricCollectionV2DTOArray";
import { ExperimentsMetricCollectionV2DTOData } from "./ExperimentsMetricCollectionV2DTOData";
import { ExperimentsMetricCollectionV2DTODataAttributes } from "./ExperimentsMetricCollectionV2DTODataAttributes";
import { ExperimentsMetricCollectionV2DTODataAttributesMetricsItems } from "./ExperimentsMetricCollectionV2DTODataAttributesMetricsItems";
import { ExperimentsMetricPropertyFilter } from "./ExperimentsMetricPropertyFilter";
import { ExperimentsMetricSQLModelPropertyInput } from "./ExperimentsMetricSQLModelPropertyInput";
import { ExperimentsMetricSQLModelV2DTO } from "./ExperimentsMetricSQLModelV2DTO";
import { ExperimentsMetricSQLModelV2DTOArray } from "./ExperimentsMetricSQLModelV2DTOArray";
import { ExperimentsMetricSQLModelV2DTOData } from "./ExperimentsMetricSQLModelV2DTOData";
import { ExperimentsMetricSQLModelV2DTODataAttributes } from "./ExperimentsMetricSQLModelV2DTODataAttributes";
import { ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems } from "./ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems";
import { ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems } from "./ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems";
import { ExperimentsMetricV2DTO } from "./ExperimentsMetricV2DTO";
import { ExperimentsMetricV2DTOArray } from "./ExperimentsMetricV2DTOArray";
import { ExperimentsMetricV2DTOData } from "./ExperimentsMetricV2DTOData";
import { ExperimentsMetricV2DTODataAttributes } from "./ExperimentsMetricV2DTODataAttributes";
import { ExperimentsMetricV2DTODataAttributesNumeratorAggregation } from "./ExperimentsMetricV2DTODataAttributesNumeratorAggregation";
import { ExperimentsMetricV2DTODataAttributesPercentileAggregation } from "./ExperimentsMetricV2DTODataAttributesPercentileAggregation";
import { ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure } from "./ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure";
import { ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure } from "./ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure";
import { ExperimentsNullableDatadogMetricMeasureInput } from "./ExperimentsNullableDatadogMetricMeasureInput";
import { ExperimentsNullableDatadogPercentileMeasureInput } from "./ExperimentsNullableDatadogPercentileMeasureInput";
import { ExperimentsNullableWarehouseMetricMeasureInput } from "./ExperimentsNullableWarehouseMetricMeasureInput";
import { ExperimentsOffsetLinks } from "./ExperimentsOffsetLinks";
import { ExperimentsOffsetMeta } from "./ExperimentsOffsetMeta";
import { ExperimentsOffsetMetaPage } from "./ExperimentsOffsetMetaPage";
import { ExperimentsPatchExperimentMetricGroupV2Request } from "./ExperimentsPatchExperimentMetricGroupV2Request";
import { ExperimentsPatchExperimentMetricGroupV2RequestData } from "./ExperimentsPatchExperimentMetricGroupV2RequestData";
import { ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes } from "./ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes";
import { ExperimentsPatchExperimentV2MetaDTO } from "./ExperimentsPatchExperimentV2MetaDTO";
import { ExperimentsPatchExperimentV2MetaDTOWarningsItems } from "./ExperimentsPatchExperimentV2MetaDTOWarningsItems";
import { ExperimentsPatchExperimentV2Request } from "./ExperimentsPatchExperimentV2Request";
import { ExperimentsPatchExperimentV2RequestData } from "./ExperimentsPatchExperimentV2RequestData";
import { ExperimentsPatchExperimentV2RequestDataAttributes } from "./ExperimentsPatchExperimentV2RequestDataAttributes";
import { ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration } from "./ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration";
import { ExperimentsPatchExperimentV2Response } from "./ExperimentsPatchExperimentV2Response";
import { ExperimentsPatchExperimentV2ResponseDataAttributes } from "./ExperimentsPatchExperimentV2ResponseDataAttributes";
import { ExperimentsPatchExperimentV2ResponseDataAttributesConclusion } from "./ExperimentsPatchExperimentV2ResponseDataAttributesConclusion";
import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration";
import { ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint } from "./ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint";
import { ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure } from "./ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure";
import { ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration } from "./ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration";
import { ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint } from "./ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint";
import { ExperimentsPatchMetricCollectionV2Request } from "./ExperimentsPatchMetricCollectionV2Request";
import { ExperimentsPatchMetricCollectionV2RequestData } from "./ExperimentsPatchMetricCollectionV2RequestData";
import { ExperimentsPatchMetricCollectionV2RequestDataAttributes } from "./ExperimentsPatchMetricCollectionV2RequestDataAttributes";
import { ExperimentsPatchSubjectTypeV2Request } from "./ExperimentsPatchSubjectTypeV2Request";
import { ExperimentsPatchSubjectTypeV2RequestData } from "./ExperimentsPatchSubjectTypeV2RequestData";
import { ExperimentsPatchSubjectTypeV2RequestDataAttributes } from "./ExperimentsPatchSubjectTypeV2RequestDataAttributes";
import { ExperimentsPropertyFilterInput } from "./ExperimentsPropertyFilterInput";
import { ExperimentsPropertyNullFilterInput } from "./ExperimentsPropertyNullFilterInput";
import { ExperimentsPublicProtocolListResponseArray } from "./ExperimentsPublicProtocolListResponseArray";
import { ExperimentsPublicProtocolListResponseData } from "./ExperimentsPublicProtocolListResponseData";
import { ExperimentsPublicProtocolListResponseDataAttributes } from "./ExperimentsPublicProtocolListResponseDataAttributes";
import { ExperimentsPublicProtocolResponse } from "./ExperimentsPublicProtocolResponse";
import { ExperimentsPublicProtocolResponseData } from "./ExperimentsPublicProtocolResponseData";
import { ExperimentsPublicProtocolResponseDataAttributes } from "./ExperimentsPublicProtocolResponseDataAttributes";
import { ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan } from "./ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan";
import { ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems } from "./ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems";
import { ExperimentsPublicProtocolResponseDataAttributesEnforcement } from "./ExperimentsPublicProtocolResponseDataAttributesEnforcement";
import { ExperimentsPublicProtocolResponseDataAttributesExposureSchedule } from "./ExperimentsPublicProtocolResponseDataAttributesExposureSchedule";
import { ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems } from "./ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems";
import { ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems } from "./ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems";
import { ExperimentsPublicProtocolResponseDataAttributesSubjectType } from "./ExperimentsPublicProtocolResponseDataAttributesSubjectType";
import { ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems } from "./ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems";
import { ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems } from "./ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems";
import { ExperimentsRefreshExperimentResultsBatchMetaV2DTO } from "./ExperimentsRefreshExperimentResultsBatchMetaV2DTO";
import { ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems } from "./ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems";
import { ExperimentsRefreshExperimentResultsV2DTO } from "./ExperimentsRefreshExperimentResultsV2DTO";
import { ExperimentsRefreshExperimentResultsV2DTOArray } from "./ExperimentsRefreshExperimentResultsV2DTOArray";
import { ExperimentsRefreshExperimentResultsV2DTOData } from "./ExperimentsRefreshExperimentResultsV2DTOData";
import { ExperimentsRefreshExperimentResultsV2DTODataAttributes } from "./ExperimentsRefreshExperimentResultsV2DTODataAttributes";
import { ExperimentsSQLModelPropertyInput } from "./ExperimentsSQLModelPropertyInput";
import { ExperimentsSavedFilterCondition } from "./ExperimentsSavedFilterCondition";
import { ExperimentsStartExperimentV2Request } from "./ExperimentsStartExperimentV2Request";
import { ExperimentsStartExperimentV2RequestData } from "./ExperimentsStartExperimentV2RequestData";
import { ExperimentsStructuredMetadataResponse } from "./ExperimentsStructuredMetadataResponse";
import { ExperimentsSubjectTypeV2DTO } from "./ExperimentsSubjectTypeV2DTO";
import { ExperimentsSubjectTypeV2DTOArray } from "./ExperimentsSubjectTypeV2DTOArray";
import { ExperimentsSubjectTypeV2DTOData } from "./ExperimentsSubjectTypeV2DTOData";
import { ExperimentsSubjectTypeV2DTODataAttributes } from "./ExperimentsSubjectTypeV2DTODataAttributes";
import { ExperimentsTrafficSummaryV2DTO } from "./ExperimentsTrafficSummaryV2DTO";
import { ExperimentsTrafficSummaryV2DTOData } from "./ExperimentsTrafficSummaryV2DTOData";
import { ExperimentsTrafficSummaryV2DTODataAttributes } from "./ExperimentsTrafficSummaryV2DTODataAttributes";
import { ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems } from "./ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems";
import { ExperimentsUpdateExposureSQLModelV2RequestDataAttributes } from "./ExperimentsUpdateExposureSQLModelV2RequestDataAttributes";
import { ExperimentsUpdateExposureSQLModelV2Response } from "./ExperimentsUpdateExposureSQLModelV2Response";
import { ExperimentsUpdateExposureSQLModelV2ResponseMeta } from "./ExperimentsUpdateExposureSQLModelV2ResponseMeta";
import { ExperimentsUpdateMetricSQLModelV2RequestDataAttributes } from "./ExperimentsUpdateMetricSQLModelV2RequestDataAttributes";
import { ExperimentsUpdateMetricSQLModelV2Response } from "./ExperimentsUpdateMetricSQLModelV2Response";
import { ExperimentsUpdateMetricSQLModelV2ResponseMeta } from "./ExperimentsUpdateMetricSQLModelV2ResponseMeta";
import { ExperimentsUpdateMetricV2Request } from "./ExperimentsUpdateMetricV2Request";
import { ExperimentsUpdateMetricV2RequestData } from "./ExperimentsUpdateMetricV2RequestData";
import { ExperimentsUpdateMetricV2RequestDataAttributes } from "./ExperimentsUpdateMetricV2RequestDataAttributes";
import { ExperimentsVariantResultsV2DTOArray } from "./ExperimentsVariantResultsV2DTOArray";
import { ExperimentsVariantResultsV2DTOData } from "./ExperimentsVariantResultsV2DTOData";
import { ExperimentsVariantResultsV2DTODataAttributes } from "./ExperimentsVariantResultsV2DTODataAttributes";
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItems } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItems";
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems";
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval";
import { ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary } from "./ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary";
import { ExperimentsWarehouseExposureFilter } from "./ExperimentsWarehouseExposureFilter";
import { ExperimentsWarehouseMetricAggregationInput } from "./ExperimentsWarehouseMetricAggregationInput";
import { ExperimentsWarehousePercentileAggregationInput } from "./ExperimentsWarehousePercentileAggregationInput";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ExperimentsAnalysisPlanV2DTODataAttributesConfidenceIntervalMethod: [
      "Sequential",
      "FixedSample",
      "Bayesian",
      "SequentialFixedHybrid",
    ],
    ExperimentsAnalysisPlanWriteV2RequestDataType: ["analysis-plans"],
    ExperimentsCancelExperimentV2RequestDataType: ["cancel-experiment-request"],
    ExperimentsConcludeExperimentV2RequestDataType: [
      "conclude-experiment-request",
    ],
    ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureMode: [
      "STATIC",
      "STEPS",
    ],
    ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType: [
      "STRING",
      "INTEGER",
      "FLOAT",
      "BOOLEAN",
      "DATE",
      "TIMESTAMP",
    ],
    ExperimentsCreateMetricV2RequestDataAttributesDataSourceType: [
      "DATADOG",
      "DATADOG_REFERENCE_TABLE",
      "CUSTOMER_WAREHOUSE",
    ],
    ExperimentsCreateMetricV2RequestDataAttributesDesiredChange: [
      "METRIC_INCREASES",
      "METRIC_DECREASES",
    ],
    ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsSkippedReason:
      [
        "NO_ASSIGNMENTS",
        "NO_DIMENSIONAL_DATA",
        "NO_METRIC_DATA",
        "ZERO_VARIANCE",
      ],
    ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsStatus: [
      "PASS",
      "FAIL",
      "WARN",
      "ERROR",
      "SKIPPED",
    ],
    ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsType: [
      "EXPERIMENT_HAS_ASSIGNMENTS",
      "METRIC_HAS_DATA",
      "ASSIGNMENT_IMBALANCE",
      "METRIC_WINSORIZE_ZERO",
      "PRE_EXPERIMENT_IMBALANCE",
      "MIXED_ASSIGNMENTS",
      "DIMENSIONAL_ASSIGNMENT_IMBALANCE",
      "FLAG_HAS_EVALUATIONS",
      "IMPLAUSIBLE_PRIOR",
      "DIMENSIONAL_DEGRADATION",
      "PIPELINE_STATUS",
      "MAPPED_ANALYSIS_CONFIGURATION",
      "MAPPED_ANALYSIS_COVERAGE",
      "MAPPED_ANALYSIS_COLLISIONS",
      "MAPPED_ANALYSIS_FANOUT",
      "MAPPED_ANALYSIS_CHANGE",
    ],
    ExperimentsExperimentDiagnosticsV2DTODataAttributesResult: [
      "PASS",
      "FAIL",
      "WARN",
      "NO_DATA",
    ],
    ExperimentsExperimentDiagnosticsV2DTODataAttributesState: [
      "NOT_STARTED",
      "RUNNING",
      "COMPLETED",
      "FAILED",
    ],
    ExperimentsExperimentDiagnosticsV2DTODataType: ["experiment-diagnostics"],
    ExperimentsExperimentV2DTODataAttributesConclusionOutcome: [
      "POSITIVE",
      "NEGATIVE",
      "NEUTRAL",
      "INCONCLUSIVE",
      "MISCONFIGURED",
      "UNKNOWN",
    ],
    ExperimentsExperimentV2DTODataAttributesStatus: [
      "DRAFT",
      "SCHEDULED",
      "IN_PROGRESS",
      "READY_FOR_DECISION",
      "DECISION_MADE",
      "CANCELLED",
      "UNKNOWN",
    ],
    ExperimentsMeasureComparisonFilterInputOperation: [
      "=",
      "!=",
      ">",
      ">=",
      "<",
      "<=",
    ],
    ExperimentsMeasureRangeFilterInputOperation: ["BETWEEN"],
    ExperimentsMetricV2DTODataAttributesDataSourceType: [
      "DATADOG",
      "DATADOG_REFERENCE_TABLE",
      "CUSTOMER_WAREHOUSE",
      "IMPORTED",
      "UNKNOWN",
    ],
    ExperimentsMetricV2DTODataAttributesDesiredChange: [
      "METRIC_INCREASES",
      "METRIC_DECREASES",
      "UNKNOWN",
    ],
    ExperimentsMetricV2DTODataAttributesMetricType: [
      "SIMPLE",
      "RATIO",
      "PERCENTILE",
      "UNKNOWN",
    ],
    ExperimentsPatchExperimentMetricGroupV2RequestDataType: [
      "experiment-metric-groups",
    ],
    ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType:
      [
        "varchar",
        "int",
        "double",
        "boolean",
        "varchar_array",
        "int_array",
        "double_array",
        "raw",
      ],
    ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsOperation:
      ["eq", "in", "neq", "not_in", "gte", "lte", "gt", "lt"],
    ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationTargetingRulesItemsConditionsItemsOperator:
      [
        "LT",
        "LTE",
        "GT",
        "GTE",
        "MATCHES",
        "NOT_MATCHES",
        "ONE_OF",
        "NOT_ONE_OF",
        "IS_NULL",
        "EQUALS",
        "SEMVER_EQ",
        "SEMVER_NEQ",
        "SEMVER_LT",
        "SEMVER_LTE",
        "SEMVER_GT",
        "SEMVER_GTE",
      ],
    ExperimentsPatchExperimentV2ResponseDataAttributesSplitByPropertiesItemsColumnType:
      [
        "varchar",
        "int",
        "double",
        "boolean",
        "varchar_array",
        "int_array",
        "double_array",
        "raw",
        "STRING",
        "INTEGER",
        "FLOAT",
        "BOOLEAN",
        "DATE",
        "TIMESTAMP",
      ],
    ExperimentsPatchExperimentV2ResponseDataAttributesStructuredMetadataItemsFieldType:
      ["FREETEXT", "ENUM"],
    ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPointFiltersItemsOperation:
      ["IS", "IS_NOT"],
    ExperimentsPatchExperimentV2ResponseDataType: ["experiments"],
    ExperimentsPatchMetricCollectionV2RequestDataType: ["metric-collections"],
    ExperimentsPropertyNullFilterInputOperation: ["IS_NULL", "IS_NOT_NULL"],
    ExperimentsPublicProtocolResponseDataAttributesStatus: [
      "DRAFT",
      "PUBLISHED",
      "ARCHIVED",
    ],
    ExperimentsPublicProtocolResponseDataType: ["protocols"],
    ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItemsOutcome: [
      "TRIGGERED",
      "SKIPPED_ALREADY_RUNNING",
      "SKIPPED_NOT_EDITABLE",
      "SKIPPED_ORG_AT_CAPACITY",
      "FAILED",
    ],
    ExperimentsRefreshExperimentResultsV2DTODataType: [
      "experiment-results-refresh",
    ],
    ExperimentsStartExperimentV2RequestDataType: ["start-experiment-request"],
    ExperimentsSubjectTypeV2DTODataType: ["subject-types"],
    ExperimentsTrafficSummaryV2DTODataType: ["traffic-summary"],
    ExperimentsUpdateExposureSQLModelV2RequestDataType: ["exposure-sql-models"],
    ExperimentsUpdateMetricSQLModelV2RequestDataType: ["metric-sql-models"],
    ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsLiftType:
      ["RELATIVE", "ABSOLUTE", "UNKNOWN"],
    ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsMethod:
      [
        "FIXED_SAMPLE",
        "BAYESIAN",
        "SEQUENTIAL",
        "SEQUENTIAL_FIXED_HYBRID",
        "UNKNOWN",
      ],
    ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsUnreliableReason:
      [
        "CONTROL_DENOMINATOR_NEAR_ZERO",
        "TREATMENT_DENOMINATOR_NEAR_ZERO",
        "CONTROL_AND_TREATMENT_DENOMINATORS_NEAR_ZERO",
        "CONTROL_MEAN_NEAR_ZERO",
        "ZERO_VARIANCE",
        "UNKNOWN",
      ],
    ExperimentsVariantResultsV2DTODataType: ["experiment-variant-results"],
    MetricType: ["metrics"],
  },
  oneOfMap: {
    ExperimentsCreateMetricV2RequestDataAttributes: [
      "ExperimentsCreateMetricNumeratorAttributes",
      "ExperimentsCreateMetricPercentileAttributes",
    ],
    ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation: [
      "ExperimentsWarehouseMetricAggregationInput",
      "ExperimentsDatadogMetricAggregationInput",
    ],
    ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregation: [
      "ExperimentsWarehousePercentileAggregationInput",
      "ExperimentsDatadogPercentileAggregationInput",
    ],
    ExperimentsTargetingRuleCondition: [
      "ExperimentsSavedFilterCondition",
      "ExperimentsInlineCondition",
    ],
    ExperimentsWarehouseFilterInput: [
      "ExperimentsPropertyFilterInput",
      "ExperimentsPropertyNullFilterInput",
      "ExperimentsMeasureComparisonFilterInput",
      "ExperimentsMeasureRangeFilterInput",
      "ExperimentsMeasureNullFilterInput",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ExperimentsAnalysisPlanV2DTO: ExperimentsAnalysisPlanV2DTO,
    ExperimentsAnalysisPlanV2DTOData: ExperimentsAnalysisPlanV2DTOData,
    ExperimentsAnalysisPlanV2MutationResponse:
      ExperimentsAnalysisPlanV2MutationResponse,
    ExperimentsAnalysisPlanV2MutationResponseDataAttributes:
      ExperimentsAnalysisPlanV2MutationResponseDataAttributes,
    ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior:
      ExperimentsAnalysisPlanV2MutationResponseDataAttributesBayesianPrior,
    ExperimentsAnalysisPlanWriteV2Request:
      ExperimentsAnalysisPlanWriteV2Request,
    ExperimentsAnalysisPlanWriteV2RequestData:
      ExperimentsAnalysisPlanWriteV2RequestData,
    ExperimentsAnalysisPlanWriteV2RequestDataAttributes:
      ExperimentsAnalysisPlanWriteV2RequestDataAttributes,
    ExperimentsAnalysisPlanWriteV2RequestDataAttributesBayesianPrior:
      ExperimentsAnalysisPlanWriteV2RequestDataAttributesBayesianPrior,
    ExperimentsCancelExperimentV2Request: ExperimentsCancelExperimentV2Request,
    ExperimentsCancelExperimentV2RequestData:
      ExperimentsCancelExperimentV2RequestData,
    ExperimentsCancelExperimentV2RequestDataAttributes:
      ExperimentsCancelExperimentV2RequestDataAttributes,
    ExperimentsConcludeExperimentV2Request:
      ExperimentsConcludeExperimentV2Request,
    ExperimentsConcludeExperimentV2RequestData:
      ExperimentsConcludeExperimentV2RequestData,
    ExperimentsConcludeExperimentV2RequestDataAttributes:
      ExperimentsConcludeExperimentV2RequestDataAttributes,
    ExperimentsCreateExperimentMetricGroupV2Request:
      ExperimentsCreateExperimentMetricGroupV2Request,
    ExperimentsCreateExperimentMetricGroupV2RequestData:
      ExperimentsCreateExperimentMetricGroupV2RequestData,
    ExperimentsCreateExperimentMetricGroupV2RequestDataAttributes:
      ExperimentsCreateExperimentMetricGroupV2RequestDataAttributes,
    ExperimentsCreateExperimentMetricGroupV2RequestDataAttributesMetricsItems:
      ExperimentsCreateExperimentMetricGroupV2RequestDataAttributesMetricsItems,
    ExperimentsCreateExperimentV2Request: ExperimentsCreateExperimentV2Request,
    ExperimentsCreateExperimentV2RequestData:
      ExperimentsCreateExperimentV2RequestData,
    ExperimentsCreateExperimentV2RequestDataAttributes:
      ExperimentsCreateExperimentV2RequestDataAttributes,
    ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration:
      ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfiguration,
    ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems:
      ExperimentsCreateExperimentV2RequestDataAttributesDatadogFlagConfigurationTargetingRulesItems,
    ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems:
      ExperimentsCreateExperimentV2RequestDataAttributesDecisionMetricsItems,
    ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems:
      ExperimentsCreateExperimentV2RequestDataAttributesRelatedLinksItems,
    ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems:
      ExperimentsCreateExperimentV2RequestDataAttributesSplitByPropertiesItems,
    ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems:
      ExperimentsCreateExperimentV2RequestDataAttributesStructuredMetadataItems,
    ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems:
      ExperimentsCreateExperimentV2RequestDataAttributesTrafficExposureStepsItems,
    ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems:
      ExperimentsCreateExperimentV2RequestDataAttributesVariantsItems,
    ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration:
      ExperimentsCreateExperimentV2RequestDataAttributesWarehouseExposureConfiguration,
    ExperimentsCreateExposureSQLModelV2Request:
      ExperimentsCreateExposureSQLModelV2Request,
    ExperimentsCreateExposureSQLModelV2RequestData:
      ExperimentsCreateExposureSQLModelV2RequestData,
    ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems:
      ExperimentsCreateExposureSQLModelV2RequestDataAttributesSubjectTypesItems,
    ExperimentsCreateMetricCollectionV2Request:
      ExperimentsCreateMetricCollectionV2Request,
    ExperimentsCreateMetricCollectionV2RequestData:
      ExperimentsCreateMetricCollectionV2RequestData,
    ExperimentsCreateMetricCollectionV2RequestDataAttributes:
      ExperimentsCreateMetricCollectionV2RequestDataAttributes,
    ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems:
      ExperimentsCreateMetricCollectionV2RequestDataAttributesMetricsItems,
    ExperimentsCreateMetricNumeratorAttributes:
      ExperimentsCreateMetricNumeratorAttributes,
    ExperimentsCreateMetricPercentileAttributes:
      ExperimentsCreateMetricPercentileAttributes,
    ExperimentsCreateMetricSQLModelV2Request:
      ExperimentsCreateMetricSQLModelV2Request,
    ExperimentsCreateMetricSQLModelV2RequestData:
      ExperimentsCreateMetricSQLModelV2RequestData,
    ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems:
      ExperimentsCreateMetricSQLModelV2RequestDataAttributesMeasuresItems,
    ExperimentsCreateMetricV2Request: ExperimentsCreateMetricV2Request,
    ExperimentsCreateMetricV2RequestData: ExperimentsCreateMetricV2RequestData,
    ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure:
      ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregationWarehouseMetricMeasure,
    ExperimentsCreateSubjectTypeV2Request:
      ExperimentsCreateSubjectTypeV2Request,
    ExperimentsCreateSubjectTypeV2RequestData:
      ExperimentsCreateSubjectTypeV2RequestData,
    ExperimentsCreateSubjectTypeV2RequestDataAttributes:
      ExperimentsCreateSubjectTypeV2RequestDataAttributes,
    ExperimentsDatadogEntryPointFilter: ExperimentsDatadogEntryPointFilter,
    ExperimentsDatadogMetricAggregationInput:
      ExperimentsDatadogMetricAggregationInput,
    ExperimentsDatadogMetricMeasureInput: ExperimentsDatadogMetricMeasureInput,
    ExperimentsDatadogPercentileAggregationInput:
      ExperimentsDatadogPercentileAggregationInput,
    ExperimentsDatadogPercentileMeasureInput:
      ExperimentsDatadogPercentileMeasureInput,
    ExperimentsExperimentDiagnosticsV2DTO:
      ExperimentsExperimentDiagnosticsV2DTO,
    ExperimentsExperimentDiagnosticsV2DTOData:
      ExperimentsExperimentDiagnosticsV2DTOData,
    ExperimentsExperimentDiagnosticsV2DTODataAttributes:
      ExperimentsExperimentDiagnosticsV2DTODataAttributes,
    ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems:
      ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItems,
    ExperimentsExperimentMetricGroupMutationV2:
      ExperimentsExperimentMetricGroupMutationV2,
    ExperimentsExperimentMetricGroupMutationV2Data:
      ExperimentsExperimentMetricGroupMutationV2Data,
    ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems:
      ExperimentsExperimentMetricGroupMutationV2DataAttributesMetricsItems,
    ExperimentsExperimentMetricGroupV2DTOArray:
      ExperimentsExperimentMetricGroupV2DTOArray,
    ExperimentsExperimentMetricGroupV2DTODataAttributes:
      ExperimentsExperimentMetricGroupV2DTODataAttributes,
    ExperimentsExperimentResultsV2MetaDTO:
      ExperimentsExperimentResultsV2MetaDTO,
    ExperimentsExperimentV2DTO: ExperimentsExperimentV2DTO,
    ExperimentsExperimentV2DTOData: ExperimentsExperimentV2DTOData,
    ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems:
      ExperimentsExperimentV2DTODataAttributesSplitByPropertiesItems,
    ExperimentsExperimentV2DTODataAttributesVariantsItems:
      ExperimentsExperimentV2DTODataAttributesVariantsItems,
    ExperimentsExperimentV2ListDTOArray: ExperimentsExperimentV2ListDTOArray,
    ExperimentsExperimentV2ListDTOData: ExperimentsExperimentV2ListDTOData,
    ExperimentsExperimentV2ListDTODataAttributes:
      ExperimentsExperimentV2ListDTODataAttributes,
    ExperimentsExposureSQLModelV2DTO: ExperimentsExposureSQLModelV2DTO,
    ExperimentsExposureSQLModelV2DTOArray:
      ExperimentsExposureSQLModelV2DTOArray,
    ExperimentsExposureSQLModelV2DTOData: ExperimentsExposureSQLModelV2DTOData,
    ExperimentsExposureSQLModelV2DTODataAttributes:
      ExperimentsExposureSQLModelV2DTODataAttributes,
    ExperimentsExposureSQLModelV2DTODataAttributesItems:
      ExperimentsExposureSQLModelV2DTODataAttributesItems,
    ExperimentsInlineCondition: ExperimentsInlineCondition,
    ExperimentsMeasureComparisonFilterInput:
      ExperimentsMeasureComparisonFilterInput,
    ExperimentsMeasureNullFilterInput: ExperimentsMeasureNullFilterInput,
    ExperimentsMeasureRangeFilterInput: ExperimentsMeasureRangeFilterInput,
    ExperimentsMetricCollectionV2DTO: ExperimentsMetricCollectionV2DTO,
    ExperimentsMetricCollectionV2DTOArray:
      ExperimentsMetricCollectionV2DTOArray,
    ExperimentsMetricCollectionV2DTOData: ExperimentsMetricCollectionV2DTOData,
    ExperimentsMetricCollectionV2DTODataAttributes:
      ExperimentsMetricCollectionV2DTODataAttributes,
    ExperimentsMetricCollectionV2DTODataAttributesMetricsItems:
      ExperimentsMetricCollectionV2DTODataAttributesMetricsItems,
    ExperimentsMetricPropertyFilter: ExperimentsMetricPropertyFilter,
    ExperimentsMetricSQLModelPropertyInput:
      ExperimentsMetricSQLModelPropertyInput,
    ExperimentsMetricSQLModelV2DTO: ExperimentsMetricSQLModelV2DTO,
    ExperimentsMetricSQLModelV2DTOArray: ExperimentsMetricSQLModelV2DTOArray,
    ExperimentsMetricSQLModelV2DTOData: ExperimentsMetricSQLModelV2DTOData,
    ExperimentsMetricSQLModelV2DTODataAttributes:
      ExperimentsMetricSQLModelV2DTODataAttributes,
    ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems:
      ExperimentsMetricSQLModelV2DTODataAttributesMeasuresItems,
    ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems:
      ExperimentsMetricSQLModelV2DTODataAttributesSubjectTypesItems,
    ExperimentsMetricV2DTO: ExperimentsMetricV2DTO,
    ExperimentsMetricV2DTOArray: ExperimentsMetricV2DTOArray,
    ExperimentsMetricV2DTOData: ExperimentsMetricV2DTOData,
    ExperimentsMetricV2DTODataAttributes: ExperimentsMetricV2DTODataAttributes,
    ExperimentsMetricV2DTODataAttributesNumeratorAggregation:
      ExperimentsMetricV2DTODataAttributesNumeratorAggregation,
    ExperimentsMetricV2DTODataAttributesPercentileAggregation:
      ExperimentsMetricV2DTODataAttributesPercentileAggregation,
    ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure:
      ExperimentsMetricV2DTODataAttributesPercentileAggregationDatadogMetricMeasure,
    ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure:
      ExperimentsMetricV2DTODataAttributesPercentileAggregationWarehouseMetricMeasure,
    ExperimentsNullableDatadogMetricMeasureInput:
      ExperimentsNullableDatadogMetricMeasureInput,
    ExperimentsNullableDatadogPercentileMeasureInput:
      ExperimentsNullableDatadogPercentileMeasureInput,
    ExperimentsNullableWarehouseMetricMeasureInput:
      ExperimentsNullableWarehouseMetricMeasureInput,
    ExperimentsOffsetLinks: ExperimentsOffsetLinks,
    ExperimentsOffsetMeta: ExperimentsOffsetMeta,
    ExperimentsOffsetMetaPage: ExperimentsOffsetMetaPage,
    ExperimentsPatchExperimentMetricGroupV2Request:
      ExperimentsPatchExperimentMetricGroupV2Request,
    ExperimentsPatchExperimentMetricGroupV2RequestData:
      ExperimentsPatchExperimentMetricGroupV2RequestData,
    ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes:
      ExperimentsPatchExperimentMetricGroupV2RequestDataAttributes,
    ExperimentsPatchExperimentV2MetaDTO: ExperimentsPatchExperimentV2MetaDTO,
    ExperimentsPatchExperimentV2MetaDTOWarningsItems:
      ExperimentsPatchExperimentV2MetaDTOWarningsItems,
    ExperimentsPatchExperimentV2Request: ExperimentsPatchExperimentV2Request,
    ExperimentsPatchExperimentV2RequestData:
      ExperimentsPatchExperimentV2RequestData,
    ExperimentsPatchExperimentV2RequestDataAttributes:
      ExperimentsPatchExperimentV2RequestDataAttributes,
    ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration:
      ExperimentsPatchExperimentV2RequestDataAttributesDatadogFlagConfiguration,
    ExperimentsPatchExperimentV2Response: ExperimentsPatchExperimentV2Response,
    ExperimentsPatchExperimentV2ResponseDataAttributes:
      ExperimentsPatchExperimentV2ResponseDataAttributes,
    ExperimentsPatchExperimentV2ResponseDataAttributesConclusion:
      ExperimentsPatchExperimentV2ResponseDataAttributesConclusion,
    ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration:
      ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfiguration,
    ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint:
      ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPoint,
    ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure:
      ExperimentsPatchExperimentV2ResponseDataAttributesTrafficExposure,
    ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration:
      ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfiguration,
    ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint:
      ExperimentsPatchExperimentV2ResponseDataAttributesWarehouseExposureConfigurationEntryPoint,
    ExperimentsPatchMetricCollectionV2Request:
      ExperimentsPatchMetricCollectionV2Request,
    ExperimentsPatchMetricCollectionV2RequestData:
      ExperimentsPatchMetricCollectionV2RequestData,
    ExperimentsPatchMetricCollectionV2RequestDataAttributes:
      ExperimentsPatchMetricCollectionV2RequestDataAttributes,
    ExperimentsPatchSubjectTypeV2Request: ExperimentsPatchSubjectTypeV2Request,
    ExperimentsPatchSubjectTypeV2RequestData:
      ExperimentsPatchSubjectTypeV2RequestData,
    ExperimentsPatchSubjectTypeV2RequestDataAttributes:
      ExperimentsPatchSubjectTypeV2RequestDataAttributes,
    ExperimentsPropertyFilterInput: ExperimentsPropertyFilterInput,
    ExperimentsPropertyNullFilterInput: ExperimentsPropertyNullFilterInput,
    ExperimentsPublicProtocolListResponseArray:
      ExperimentsPublicProtocolListResponseArray,
    ExperimentsPublicProtocolListResponseData:
      ExperimentsPublicProtocolListResponseData,
    ExperimentsPublicProtocolListResponseDataAttributes:
      ExperimentsPublicProtocolListResponseDataAttributes,
    ExperimentsPublicProtocolResponse: ExperimentsPublicProtocolResponse,
    ExperimentsPublicProtocolResponseData:
      ExperimentsPublicProtocolResponseData,
    ExperimentsPublicProtocolResponseDataAttributes:
      ExperimentsPublicProtocolResponseDataAttributes,
    ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan:
      ExperimentsPublicProtocolResponseDataAttributesAnalysisPlan,
    ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems:
      ExperimentsPublicProtocolResponseDataAttributesAssignmentSourceDefaultPropertiesItems,
    ExperimentsPublicProtocolResponseDataAttributesEnforcement:
      ExperimentsPublicProtocolResponseDataAttributesEnforcement,
    ExperimentsPublicProtocolResponseDataAttributesExposureSchedule:
      ExperimentsPublicProtocolResponseDataAttributesExposureSchedule,
    ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems:
      ExperimentsPublicProtocolResponseDataAttributesExposureScheduleRolloutStepsItems,
    ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems:
      ExperimentsPublicProtocolResponseDataAttributesMetricGroupsItems,
    ExperimentsPublicProtocolResponseDataAttributesSubjectType:
      ExperimentsPublicProtocolResponseDataAttributesSubjectType,
    ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems:
      ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItems,
    ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems:
      ExperimentsPublicProtocolResponseDataAttributesTargetingRulesItemsConditionsItems,
    ExperimentsRefreshExperimentResultsBatchMetaV2DTO:
      ExperimentsRefreshExperimentResultsBatchMetaV2DTO,
    ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems:
      ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItems,
    ExperimentsRefreshExperimentResultsV2DTO:
      ExperimentsRefreshExperimentResultsV2DTO,
    ExperimentsRefreshExperimentResultsV2DTOArray:
      ExperimentsRefreshExperimentResultsV2DTOArray,
    ExperimentsRefreshExperimentResultsV2DTOData:
      ExperimentsRefreshExperimentResultsV2DTOData,
    ExperimentsRefreshExperimentResultsV2DTODataAttributes:
      ExperimentsRefreshExperimentResultsV2DTODataAttributes,
    ExperimentsSQLModelPropertyInput: ExperimentsSQLModelPropertyInput,
    ExperimentsSavedFilterCondition: ExperimentsSavedFilterCondition,
    ExperimentsStartExperimentV2Request: ExperimentsStartExperimentV2Request,
    ExperimentsStartExperimentV2RequestData:
      ExperimentsStartExperimentV2RequestData,
    ExperimentsStructuredMetadataResponse:
      ExperimentsStructuredMetadataResponse,
    ExperimentsSubjectTypeV2DTO: ExperimentsSubjectTypeV2DTO,
    ExperimentsSubjectTypeV2DTOArray: ExperimentsSubjectTypeV2DTOArray,
    ExperimentsSubjectTypeV2DTOData: ExperimentsSubjectTypeV2DTOData,
    ExperimentsSubjectTypeV2DTODataAttributes:
      ExperimentsSubjectTypeV2DTODataAttributes,
    ExperimentsTrafficSummaryV2DTO: ExperimentsTrafficSummaryV2DTO,
    ExperimentsTrafficSummaryV2DTOData: ExperimentsTrafficSummaryV2DTOData,
    ExperimentsTrafficSummaryV2DTODataAttributes:
      ExperimentsTrafficSummaryV2DTODataAttributes,
    ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems:
      ExperimentsTrafficSummaryV2DTODataAttributesVariantsItems,
    ExperimentsUpdateExposureSQLModelV2RequestDataAttributes:
      ExperimentsUpdateExposureSQLModelV2RequestDataAttributes,
    ExperimentsUpdateExposureSQLModelV2Response:
      ExperimentsUpdateExposureSQLModelV2Response,
    ExperimentsUpdateExposureSQLModelV2ResponseMeta:
      ExperimentsUpdateExposureSQLModelV2ResponseMeta,
    ExperimentsUpdateMetricSQLModelV2RequestDataAttributes:
      ExperimentsUpdateMetricSQLModelV2RequestDataAttributes,
    ExperimentsUpdateMetricSQLModelV2Response:
      ExperimentsUpdateMetricSQLModelV2Response,
    ExperimentsUpdateMetricSQLModelV2ResponseMeta:
      ExperimentsUpdateMetricSQLModelV2ResponseMeta,
    ExperimentsUpdateMetricV2Request: ExperimentsUpdateMetricV2Request,
    ExperimentsUpdateMetricV2RequestData: ExperimentsUpdateMetricV2RequestData,
    ExperimentsUpdateMetricV2RequestDataAttributes:
      ExperimentsUpdateMetricV2RequestDataAttributes,
    ExperimentsVariantResultsV2DTOArray: ExperimentsVariantResultsV2DTOArray,
    ExperimentsVariantResultsV2DTOData: ExperimentsVariantResultsV2DTOData,
    ExperimentsVariantResultsV2DTODataAttributes:
      ExperimentsVariantResultsV2DTODataAttributes,
    ExperimentsVariantResultsV2DTODataAttributesMetricsItems:
      ExperimentsVariantResultsV2DTODataAttributesMetricsItems,
    ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems:
      ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItems,
    ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval:
      ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsConfidenceInterval,
    ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary:
      ExperimentsVariantResultsV2DTODataAttributesMetricsItemsCoverageSummary,
    ExperimentsWarehouseExposureFilter: ExperimentsWarehouseExposureFilter,
    ExperimentsWarehouseMetricAggregationInput:
      ExperimentsWarehouseMetricAggregationInput,
    ExperimentsWarehousePercentileAggregationInput:
      ExperimentsWarehousePercentileAggregationInput,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
