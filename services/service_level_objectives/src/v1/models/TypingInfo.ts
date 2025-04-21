import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CheckCanDeleteSLOResponse } from "./CheckCanDeleteSLOResponse";
import { CheckCanDeleteSLOResponseData } from "./CheckCanDeleteSLOResponseData";
import { Creator } from "./Creator";
import { FormulaAndFunctionMetricQueryDefinition } from "./FormulaAndFunctionMetricQueryDefinition";
import { Pagination } from "./Pagination";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { SLOBulkDeleteError } from "./SLOBulkDeleteError";
import { SLOBulkDeleteResponse } from "./SLOBulkDeleteResponse";
import { SLOBulkDeleteResponseData } from "./SLOBulkDeleteResponseData";
import { SLOCorrection } from "./SLOCorrection";
import { SLOCorrectionListResponse } from "./SLOCorrectionListResponse";
import { SLOCorrectionResponseAttributes } from "./SLOCorrectionResponseAttributes";
import { SLOCorrectionResponseAttributesModifier } from "./SLOCorrectionResponseAttributesModifier";
import { SLOCreator } from "./SLOCreator";
import { SLODeleteResponse } from "./SLODeleteResponse";
import { SLOFormula } from "./SLOFormula";
import { SLOHistoryMetrics } from "./SLOHistoryMetrics";
import { SLOHistoryMetricsSeries } from "./SLOHistoryMetricsSeries";
import { SLOHistoryMetricsSeriesMetadata } from "./SLOHistoryMetricsSeriesMetadata";
import { SLOHistoryMetricsSeriesMetadataUnit } from "./SLOHistoryMetricsSeriesMetadataUnit";
import { SLOHistoryMonitor } from "./SLOHistoryMonitor";
import { SLOHistoryResponse } from "./SLOHistoryResponse";
import { SLOHistoryResponseData } from "./SLOHistoryResponseData";
import { SLOHistoryResponseError } from "./SLOHistoryResponseError";
import { SLOHistoryResponseErrorWithType } from "./SLOHistoryResponseErrorWithType";
import { SLOHistorySLIData } from "./SLOHistorySLIData";
import { SLOListResponse } from "./SLOListResponse";
import { SLOListResponseMetadata } from "./SLOListResponseMetadata";
import { SLOListResponseMetadataPage } from "./SLOListResponseMetadataPage";
import { SLOOverallStatuses } from "./SLOOverallStatuses";
import { SLORawErrorBudgetRemaining } from "./SLORawErrorBudgetRemaining";
import { SLOResponse } from "./SLOResponse";
import { SLOResponseData } from "./SLOResponseData";
import { SLOStatus } from "./SLOStatus";
import { SLOThreshold } from "./SLOThreshold";
import { SLOTimeSliceCondition } from "./SLOTimeSliceCondition";
import { SLOTimeSliceQuery } from "./SLOTimeSliceQuery";
import { SLOTimeSliceSpec } from "./SLOTimeSliceSpec";
import { SearchSLOQuery } from "./SearchSLOQuery";
import { SearchSLOResponse } from "./SearchSLOResponse";
import { SearchSLOResponseData } from "./SearchSLOResponseData";
import { SearchSLOResponseDataAttributes } from "./SearchSLOResponseDataAttributes";
import { SearchSLOResponseDataAttributesFacets } from "./SearchSLOResponseDataAttributesFacets";
import { SearchSLOResponseDataAttributesFacetsObjectInt } from "./SearchSLOResponseDataAttributesFacetsObjectInt";
import { SearchSLOResponseDataAttributesFacetsObjectString } from "./SearchSLOResponseDataAttributesFacetsObjectString";
import { SearchSLOResponseLinks } from "./SearchSLOResponseLinks";
import { SearchSLOResponseMeta } from "./SearchSLOResponseMeta";
import { SearchSLOResponseMetaPage } from "./SearchSLOResponseMetaPage";
import { SearchSLOThreshold } from "./SearchSLOThreshold";
import { SearchServiceLevelObjective } from "./SearchServiceLevelObjective";
import { SearchServiceLevelObjectiveAttributes } from "./SearchServiceLevelObjectiveAttributes";
import { SearchServiceLevelObjectiveData } from "./SearchServiceLevelObjectiveData";
import { ServiceLevelObjective } from "./ServiceLevelObjective";
import { ServiceLevelObjectiveQuery } from "./ServiceLevelObjectiveQuery";
import { ServiceLevelObjectiveRequest } from "./ServiceLevelObjectiveRequest";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    FormulaAndFunctionMetricAggregation: [
      "avg",
      "min",
      "max",
      "sum",
      "last",
      "area",
      "l2norm",
      "percentile",
    ],
    FormulaAndFunctionMetricDataSource: ["metrics"],
    SLOCorrectionCategory: [
      "Scheduled Maintenance",
      "Outside Business Hours",
      "Deployment",
      "Other",
    ],
    SLOCorrectionType: ["correction"],
    SLOErrorTimeframe: ["7d", "30d", "90d", "all"],
    SLOState: ["breached", "warning", "ok", "no_data"],
    SLOTimeSliceComparator: [">", ">=", "<", "<="],
    SLOTimeSliceInterval: [60, 300],
    SLOTimeframe: ["7d", "30d", "90d", "custom"],
    SLOType: ["metric", "monitor", "time_slice"],
    SLOTypeNumeric: [0, 1, 2],
    SearchSLOTimeframe: ["7d", "30d", "90d"],
  },
  oneOfMap: {
    SLODataSourceQueryDefinition: ["FormulaAndFunctionMetricQueryDefinition"],
    SLOSliSpec: ["SLOTimeSliceSpec"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CheckCanDeleteSLOResponse: CheckCanDeleteSLOResponse,
    CheckCanDeleteSLOResponseData: CheckCanDeleteSLOResponseData,
    Creator: Creator,
    FormulaAndFunctionMetricQueryDefinition:
      FormulaAndFunctionMetricQueryDefinition,
    Pagination: Pagination,
    ResponseMetaAttributes: ResponseMetaAttributes,
    SLOBulkDeleteError: SLOBulkDeleteError,
    SLOBulkDeleteResponse: SLOBulkDeleteResponse,
    SLOBulkDeleteResponseData: SLOBulkDeleteResponseData,
    SLOCorrection: SLOCorrection,
    SLOCorrectionListResponse: SLOCorrectionListResponse,
    SLOCorrectionResponseAttributes: SLOCorrectionResponseAttributes,
    SLOCorrectionResponseAttributesModifier:
      SLOCorrectionResponseAttributesModifier,
    SLOCreator: SLOCreator,
    SLODeleteResponse: SLODeleteResponse,
    SLOFormula: SLOFormula,
    SLOHistoryMetrics: SLOHistoryMetrics,
    SLOHistoryMetricsSeries: SLOHistoryMetricsSeries,
    SLOHistoryMetricsSeriesMetadata: SLOHistoryMetricsSeriesMetadata,
    SLOHistoryMetricsSeriesMetadataUnit: SLOHistoryMetricsSeriesMetadataUnit,
    SLOHistoryMonitor: SLOHistoryMonitor,
    SLOHistoryResponse: SLOHistoryResponse,
    SLOHistoryResponseData: SLOHistoryResponseData,
    SLOHistoryResponseError: SLOHistoryResponseError,
    SLOHistoryResponseErrorWithType: SLOHistoryResponseErrorWithType,
    SLOHistorySLIData: SLOHistorySLIData,
    SLOListResponse: SLOListResponse,
    SLOListResponseMetadata: SLOListResponseMetadata,
    SLOListResponseMetadataPage: SLOListResponseMetadataPage,
    SLOOverallStatuses: SLOOverallStatuses,
    SLORawErrorBudgetRemaining: SLORawErrorBudgetRemaining,
    SLOResponse: SLOResponse,
    SLOResponseData: SLOResponseData,
    SLOStatus: SLOStatus,
    SLOThreshold: SLOThreshold,
    SLOTimeSliceCondition: SLOTimeSliceCondition,
    SLOTimeSliceQuery: SLOTimeSliceQuery,
    SLOTimeSliceSpec: SLOTimeSliceSpec,
    SearchSLOQuery: SearchSLOQuery,
    SearchSLOResponse: SearchSLOResponse,
    SearchSLOResponseData: SearchSLOResponseData,
    SearchSLOResponseDataAttributes: SearchSLOResponseDataAttributes,
    SearchSLOResponseDataAttributesFacets:
      SearchSLOResponseDataAttributesFacets,
    SearchSLOResponseDataAttributesFacetsObjectInt:
      SearchSLOResponseDataAttributesFacetsObjectInt,
    SearchSLOResponseDataAttributesFacetsObjectString:
      SearchSLOResponseDataAttributesFacetsObjectString,
    SearchSLOResponseLinks: SearchSLOResponseLinks,
    SearchSLOResponseMeta: SearchSLOResponseMeta,
    SearchSLOResponseMetaPage: SearchSLOResponseMetaPage,
    SearchSLOThreshold: SearchSLOThreshold,
    SearchServiceLevelObjective: SearchServiceLevelObjective,
    SearchServiceLevelObjectiveAttributes:
      SearchServiceLevelObjectiveAttributes,
    SearchServiceLevelObjectiveData: SearchServiceLevelObjectiveData,
    ServiceLevelObjective: ServiceLevelObjective,
    ServiceLevelObjectiveQuery: ServiceLevelObjectiveQuery,
    ServiceLevelObjectiveRequest: ServiceLevelObjectiveRequest,
  },
};
