import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ProductAnalyticsAnalyticsListQuery } from "./ProductAnalyticsAnalyticsListQuery";
import { ProductAnalyticsAnalyticsListRequest } from "./ProductAnalyticsAnalyticsListRequest";
import { ProductAnalyticsAnalyticsListRequestAttributes } from "./ProductAnalyticsAnalyticsListRequestAttributes";
import { ProductAnalyticsAnalyticsListRequestData } from "./ProductAnalyticsAnalyticsListRequestData";
import { ProductAnalyticsAnalyticsListResponse } from "./ProductAnalyticsAnalyticsListResponse";
import { ProductAnalyticsAnalyticsListResponseAttributes } from "./ProductAnalyticsAnalyticsListResponseAttributes";
import { ProductAnalyticsAnalyticsListResponseData } from "./ProductAnalyticsAnalyticsListResponseData";
import { ProductAnalyticsAnalyticsListSort } from "./ProductAnalyticsAnalyticsListSort";
import { ProductAnalyticsAnalyticsQuery } from "./ProductAnalyticsAnalyticsQuery";
import { ProductAnalyticsAnalyticsRequest } from "./ProductAnalyticsAnalyticsRequest";
import { ProductAnalyticsAnalyticsRequestAttributes } from "./ProductAnalyticsAnalyticsRequestAttributes";
import { ProductAnalyticsAnalyticsRequestData } from "./ProductAnalyticsAnalyticsRequestData";
import { ProductAnalyticsAudienceAccountSubquery } from "./ProductAnalyticsAudienceAccountSubquery";
import { ProductAnalyticsAudienceFilters } from "./ProductAnalyticsAudienceFilters";
import { ProductAnalyticsAudienceSegmentSubquery } from "./ProductAnalyticsAudienceSegmentSubquery";
import { ProductAnalyticsAudienceUserSubquery } from "./ProductAnalyticsAudienceUserSubquery";
import { ProductAnalyticsCalendarInterval } from "./ProductAnalyticsCalendarInterval";
import { ProductAnalyticsCompute } from "./ProductAnalyticsCompute";
import { ProductAnalyticsElapsedTime } from "./ProductAnalyticsElapsedTime";
import { ProductAnalyticsEventQuery } from "./ProductAnalyticsEventQuery";
import { ProductAnalyticsEventSearch } from "./ProductAnalyticsEventSearch";
import { ProductAnalyticsFormulaJourneyQuery } from "./ProductAnalyticsFormulaJourneyQuery";
import { ProductAnalyticsFormulaJourneyRequest } from "./ProductAnalyticsFormulaJourneyRequest";
import { ProductAnalyticsFormulaJourneyRequestAttributes } from "./ProductAnalyticsFormulaJourneyRequestAttributes";
import { ProductAnalyticsFormulaJourneyRequestData } from "./ProductAnalyticsFormulaJourneyRequestData";
import { ProductAnalyticsFormulaRetentionQuery } from "./ProductAnalyticsFormulaRetentionQuery";
import { ProductAnalyticsFormulaRetentionRequest } from "./ProductAnalyticsFormulaRetentionRequest";
import { ProductAnalyticsFormulaRetentionRequestAttributes } from "./ProductAnalyticsFormulaRetentionRequestAttributes";
import { ProductAnalyticsFormulaRetentionRequestData } from "./ProductAnalyticsFormulaRetentionRequestData";
import { ProductAnalyticsGraphQueryCompute } from "./ProductAnalyticsGraphQueryCompute";
import { ProductAnalyticsGraphQueryGroupBy } from "./ProductAnalyticsGraphQueryGroupBy";
import { ProductAnalyticsGroupBy } from "./ProductAnalyticsGroupBy";
import { ProductAnalyticsGroupBySort } from "./ProductAnalyticsGroupBySort";
import { ProductAnalyticsInterval } from "./ProductAnalyticsInterval";
import { ProductAnalyticsJoinKeys } from "./ProductAnalyticsJoinKeys";
import { ProductAnalyticsJourneyAudienceAccountQuery } from "./ProductAnalyticsJourneyAudienceAccountQuery";
import { ProductAnalyticsJourneyAudienceFilters } from "./ProductAnalyticsJourneyAudienceFilters";
import { ProductAnalyticsJourneyAudienceSegmentQuery } from "./ProductAnalyticsJourneyAudienceSegmentQuery";
import { ProductAnalyticsJourneyAudienceUserQuery } from "./ProductAnalyticsJourneyAudienceUserQuery";
import { ProductAnalyticsJourneyComputedColumn } from "./ProductAnalyticsJourneyComputedColumn";
import { ProductAnalyticsJourneyFunnelCompute } from "./ProductAnalyticsJourneyFunnelCompute";
import { ProductAnalyticsJourneyFunnelQuery } from "./ProductAnalyticsJourneyFunnelQuery";
import { ProductAnalyticsJourneyFunnelRequest } from "./ProductAnalyticsJourneyFunnelRequest";
import { ProductAnalyticsJourneyFunnelRequestAttributes } from "./ProductAnalyticsJourneyFunnelRequestAttributes";
import { ProductAnalyticsJourneyFunnelRequestData } from "./ProductAnalyticsJourneyFunnelRequestData";
import { ProductAnalyticsJourneyFunnelResponse } from "./ProductAnalyticsJourneyFunnelResponse";
import { ProductAnalyticsJourneyFunnelResponseAttributes } from "./ProductAnalyticsJourneyFunnelResponseAttributes";
import { ProductAnalyticsJourneyFunnelResponseData } from "./ProductAnalyticsJourneyFunnelResponseData";
import { ProductAnalyticsJourneyFunnelStep } from "./ProductAnalyticsJourneyFunnelStep";
import { ProductAnalyticsJourneyFunnelStepGroup } from "./ProductAnalyticsJourneyFunnelStepGroup";
import { ProductAnalyticsJourneyListQuery } from "./ProductAnalyticsJourneyListQuery";
import { ProductAnalyticsJourneyListRequest } from "./ProductAnalyticsJourneyListRequest";
import { ProductAnalyticsJourneyListRequestAttributes } from "./ProductAnalyticsJourneyListRequestAttributes";
import { ProductAnalyticsJourneyListRequestData } from "./ProductAnalyticsJourneyListRequestData";
import { ProductAnalyticsJourneyListResponse } from "./ProductAnalyticsJourneyListResponse";
import { ProductAnalyticsJourneyListResponseAttributes } from "./ProductAnalyticsJourneyListResponseAttributes";
import { ProductAnalyticsJourneyListResponseData } from "./ProductAnalyticsJourneyListResponseData";
import { ProductAnalyticsJourneyListSort } from "./ProductAnalyticsJourneyListSort";
import { ProductAnalyticsJourneyNodeTarget } from "./ProductAnalyticsJourneyNodeTarget";
import { ProductAnalyticsJourneyPathTarget } from "./ProductAnalyticsJourneyPathTarget";
import { ProductAnalyticsJourneyScalarCompute } from "./ProductAnalyticsJourneyScalarCompute";
import { ProductAnalyticsJourneyScalarQuery } from "./ProductAnalyticsJourneyScalarQuery";
import { ProductAnalyticsJourneyScalarRequest } from "./ProductAnalyticsJourneyScalarRequest";
import { ProductAnalyticsJourneyScalarRequestAttributes } from "./ProductAnalyticsJourneyScalarRequestAttributes";
import { ProductAnalyticsJourneyScalarRequestData } from "./ProductAnalyticsJourneyScalarRequestData";
import { ProductAnalyticsJourneyScalarResponse } from "./ProductAnalyticsJourneyScalarResponse";
import { ProductAnalyticsJourneyScalarResponseData } from "./ProductAnalyticsJourneyScalarResponseData";
import { ProductAnalyticsJourneySearch } from "./ProductAnalyticsJourneySearch";
import { ProductAnalyticsJourneySearchFilters } from "./ProductAnalyticsJourneySearchFilters";
import { ProductAnalyticsJourneySearchGraphFilter } from "./ProductAnalyticsJourneySearchGraphFilter";
import { ProductAnalyticsJourneyTimeseriesResponse } from "./ProductAnalyticsJourneyTimeseriesResponse";
import { ProductAnalyticsJourneyTimeseriesResponseData } from "./ProductAnalyticsJourneyTimeseriesResponseData";
import { ProductAnalyticsOccurrenceFilter } from "./ProductAnalyticsOccurrenceFilter";
import { ProductAnalyticsOccurrenceQuery } from "./ProductAnalyticsOccurrenceQuery";
import { ProductAnalyticsOccurrenceSearch } from "./ProductAnalyticsOccurrenceSearch";
import { ProductAnalyticsResponseMeta } from "./ProductAnalyticsResponseMeta";
import { ProductAnalyticsRetentionAggregationTarget } from "./ProductAnalyticsRetentionAggregationTarget";
import { ProductAnalyticsRetentionCalendarTimeInterval } from "./ProductAnalyticsRetentionCalendarTimeInterval";
import { ProductAnalyticsRetentionCellScope } from "./ProductAnalyticsRetentionCellScope";
import { ProductAnalyticsRetentionCohortCriteria } from "./ProductAnalyticsRetentionCohortCriteria";
import { ProductAnalyticsRetentionCohortScope } from "./ProductAnalyticsRetentionCohortScope";
import { ProductAnalyticsRetentionCompute } from "./ProductAnalyticsRetentionCompute";
import { ProductAnalyticsRetentionFilters } from "./ProductAnalyticsRetentionFilters";
import { ProductAnalyticsRetentionFixedTimeInterval } from "./ProductAnalyticsRetentionFixedTimeInterval";
import { ProductAnalyticsRetentionGridCohort } from "./ProductAnalyticsRetentionGridCohort";
import { ProductAnalyticsRetentionGridCohortCell } from "./ProductAnalyticsRetentionGridCohortCell";
import { ProductAnalyticsRetentionGridQuery } from "./ProductAnalyticsRetentionGridQuery";
import { ProductAnalyticsRetentionGridRequest } from "./ProductAnalyticsRetentionGridRequest";
import { ProductAnalyticsRetentionGridRequestAttributes } from "./ProductAnalyticsRetentionGridRequestAttributes";
import { ProductAnalyticsRetentionGridRequestData } from "./ProductAnalyticsRetentionGridRequestData";
import { ProductAnalyticsRetentionGridResponse } from "./ProductAnalyticsRetentionGridResponse";
import { ProductAnalyticsRetentionGridResponseAttributes } from "./ProductAnalyticsRetentionGridResponseAttributes";
import { ProductAnalyticsRetentionGridResponseData } from "./ProductAnalyticsRetentionGridResponseData";
import { ProductAnalyticsRetentionGroupBy } from "./ProductAnalyticsRetentionGroupBy";
import { ProductAnalyticsRetentionIndexTarget } from "./ProductAnalyticsRetentionIndexTarget";
import { ProductAnalyticsRetentionListColumn } from "./ProductAnalyticsRetentionListColumn";
import { ProductAnalyticsRetentionListColumnField } from "./ProductAnalyticsRetentionListColumnField";
import { ProductAnalyticsRetentionListQuery } from "./ProductAnalyticsRetentionListQuery";
import { ProductAnalyticsRetentionListRequest } from "./ProductAnalyticsRetentionListRequest";
import { ProductAnalyticsRetentionListRequestAttributes } from "./ProductAnalyticsRetentionListRequestAttributes";
import { ProductAnalyticsRetentionListRequestData } from "./ProductAnalyticsRetentionListRequestData";
import { ProductAnalyticsRetentionListResponse } from "./ProductAnalyticsRetentionListResponse";
import { ProductAnalyticsRetentionListResponseAttributes } from "./ProductAnalyticsRetentionListResponseAttributes";
import { ProductAnalyticsRetentionListResponseData } from "./ProductAnalyticsRetentionListResponseData";
import { ProductAnalyticsRetentionPeriod } from "./ProductAnalyticsRetentionPeriod";
import { ProductAnalyticsRetentionReturnCriteria } from "./ProductAnalyticsRetentionReturnCriteria";
import { ProductAnalyticsRetentionReturnPeriodScope } from "./ProductAnalyticsRetentionReturnPeriodScope";
import { ProductAnalyticsRetentionSearch } from "./ProductAnalyticsRetentionSearch";
import { ProductAnalyticsSankeyAggregatedNode } from "./ProductAnalyticsSankeyAggregatedNode";
import { ProductAnalyticsSankeyDefinition } from "./ProductAnalyticsSankeyDefinition";
import { ProductAnalyticsSankeyLink } from "./ProductAnalyticsSankeyLink";
import { ProductAnalyticsSankeyNode } from "./ProductAnalyticsSankeyNode";
import { ProductAnalyticsSankeyRequest } from "./ProductAnalyticsSankeyRequest";
import { ProductAnalyticsSankeyRequestAttributes } from "./ProductAnalyticsSankeyRequestAttributes";
import { ProductAnalyticsSankeyRequestData } from "./ProductAnalyticsSankeyRequestData";
import { ProductAnalyticsSankeyResponse } from "./ProductAnalyticsSankeyResponse";
import { ProductAnalyticsSankeyResponseAttributes } from "./ProductAnalyticsSankeyResponseAttributes";
import { ProductAnalyticsSankeyResponseData } from "./ProductAnalyticsSankeyResponseData";
import { ProductAnalyticsSankeySearch } from "./ProductAnalyticsSankeySearch";
import { ProductAnalyticsSankeyTime } from "./ProductAnalyticsSankeyTime";
import { ProductAnalyticsScalarColumn } from "./ProductAnalyticsScalarColumn";
import { ProductAnalyticsScalarColumnMeta } from "./ProductAnalyticsScalarColumnMeta";
import { ProductAnalyticsScalarResponse } from "./ProductAnalyticsScalarResponse";
import { ProductAnalyticsScalarResponseAttributes } from "./ProductAnalyticsScalarResponseAttributes";
import { ProductAnalyticsScalarResponseData } from "./ProductAnalyticsScalarResponseData";
import { ProductAnalyticsSerie } from "./ProductAnalyticsSerie";
import { ProductAnalyticsServerSideEventError } from "./ProductAnalyticsServerSideEventError";
import { ProductAnalyticsServerSideEventErrors } from "./ProductAnalyticsServerSideEventErrors";
import { ProductAnalyticsServerSideEventItem } from "./ProductAnalyticsServerSideEventItem";
import { ProductAnalyticsServerSideEventItemAccount } from "./ProductAnalyticsServerSideEventItemAccount";
import { ProductAnalyticsServerSideEventItemApplication } from "./ProductAnalyticsServerSideEventItemApplication";
import { ProductAnalyticsServerSideEventItemEvent } from "./ProductAnalyticsServerSideEventItemEvent";
import { ProductAnalyticsServerSideEventItemSession } from "./ProductAnalyticsServerSideEventItemSession";
import { ProductAnalyticsServerSideEventItemUsr } from "./ProductAnalyticsServerSideEventItemUsr";
import { ProductAnalyticsTimeseriesResponse } from "./ProductAnalyticsTimeseriesResponse";
import { ProductAnalyticsTimeseriesResponseAttributes } from "./ProductAnalyticsTimeseriesResponseAttributes";
import { ProductAnalyticsTimeseriesResponseData } from "./ProductAnalyticsTimeseriesResponseData";
import { ProductAnalyticsUnit } from "./ProductAnalyticsUnit";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ProductAnalyticsAnalyticsListRequestType: [
      "formula_analytics_extended_list_request",
    ],
    ProductAnalyticsAnalyticsListResponseType: ["list_response"],
    ProductAnalyticsAnalyticsListSortOrder: ["asc", "desc"],
    ProductAnalyticsAnalyticsRequestType: [
      "formula_analytics_extended_request",
    ],
    ProductAnalyticsCalendarIntervalType: [
      "minute",
      "hour",
      "day",
      "week",
      "month",
      "quarter",
      "year",
    ],
    ProductAnalyticsEventQueryDataSource: ["product_analytics"],
    ProductAnalyticsExecutionType: [
      "simple",
      "background",
      "trino-multistep",
      "materialized-view",
    ],
    ProductAnalyticsFormulaJourneyRequestType: ["formula_journey_request"],
    ProductAnalyticsFormulaRetentionRequestType: ["formula_retention_request"],
    ProductAnalyticsGraphQueryGroupBySource: [
      "product_analytics_audience_filters.users",
      "product_analytics_audience_filters.accounts",
    ],
    ProductAnalyticsJourneyComputedColumnName: ["first_conversion_timestamps"],
    ProductAnalyticsJourneyConversionType: ["conversion", "drop-off"],
    ProductAnalyticsJourneyEntity: ["session", "user", "account"],
    ProductAnalyticsJourneyFunnelResponseType: ["funnel_response"],
    ProductAnalyticsJourneyListRequestType: ["journey_list_request"],
    ProductAnalyticsJourneyListResponseType: ["journey_list_response"],
    ProductAnalyticsJourneyNodeTargetType: ["node"],
    ProductAnalyticsJourneyPathTargetType: ["path"],
    ProductAnalyticsJourneyRequestType: ["journey_request"],
    ProductAnalyticsJourneyScalarResponseType: ["journey_scalar_response"],
    ProductAnalyticsJourneySearchGraphFilterName: [
      "__dd.time_to_convert",
      "__dd.session",
      "__dd.dropoff_rate",
    ],
    ProductAnalyticsJourneySearchGraphFilterOperator: [
      "=",
      "<",
      ">",
      "<=",
      ">=",
    ],
    ProductAnalyticsJourneyTimeseriesResponseType: [
      "journey_timeseries_response",
    ],
    ProductAnalyticsOccurrenceQueryDataSource: ["product_analytics_occurrence"],
    ProductAnalyticsResponseMetaStatus: ["done", "running", "timeout"],
    ProductAnalyticsRetentionAggregationTargetType: ["aggregation"],
    ProductAnalyticsRetentionCalendarTimeIntervalType: ["calendar"],
    ProductAnalyticsRetentionCellScopeType: ["cell"],
    ProductAnalyticsRetentionCohortScopeType: ["cohort"],
    ProductAnalyticsRetentionComputeMetric: [
      "__dd.retention",
      "__dd.retention_rate",
    ],
    ProductAnalyticsRetentionEntity: ["@usr.id", "@account.id"],
    ProductAnalyticsRetentionFixedTimeIntervalType: ["fixed"],
    ProductAnalyticsRetentionFixedTimeIntervalUnit: ["day", "week", "month"],
    ProductAnalyticsRetentionGridCohortType: ["raw", "aggregated"],
    ProductAnalyticsRetentionGridRequestType: ["retention_grid_request"],
    ProductAnalyticsRetentionGridResponseType: ["retention_grid_response"],
    ProductAnalyticsRetentionGroupByTarget: ["cohort", "return_period"],
    ProductAnalyticsRetentionIndexTargetType: ["index"],
    ProductAnalyticsRetentionListRequestType: ["retention_list_request"],
    ProductAnalyticsRetentionListResponseType: ["retention_list_response"],
    ProductAnalyticsRetentionReturnCondition: [
      "conversion_on",
      "conversion_on_or_after",
    ],
    ProductAnalyticsRetentionReturnPeriodScopeType: ["return_period"],
    ProductAnalyticsSankeyAggregatedNodeType: ["aggregated"],
    ProductAnalyticsSankeyNodeType: ["regular", "other", "dropoff"],
    ProductAnalyticsSankeyRequestType: ["sankey_request"],
    ProductAnalyticsSankeyResponseType: ["sankey_response"],
    ProductAnalyticsScalarColumnType: ["number", "group"],
    ProductAnalyticsScalarResponseType: ["scalar_response"],
    ProductAnalyticsServerSideEventItemType: ["server"],
    ProductAnalyticsTimeseriesResponseType: ["timeseries_response"],
    QuerySortOrder: ["asc", "desc"],
  },
  oneOfMap: {
    ProductAnalyticsBaseQuery: [
      "ProductAnalyticsEventQuery",
      "ProductAnalyticsOccurrenceQuery",
    ],
    ProductAnalyticsJourneyTarget: [
      "ProductAnalyticsJourneyNodeTarget",
      "ProductAnalyticsJourneyPathTarget",
    ],
    ProductAnalyticsRetentionCohortTarget: [
      "ProductAnalyticsRetentionIndexTarget",
      "ProductAnalyticsRetentionAggregationTarget",
    ],
    ProductAnalyticsRetentionScope: [
      "ProductAnalyticsRetentionCohortScope",
      "ProductAnalyticsRetentionReturnPeriodScope",
      "ProductAnalyticsRetentionCellScope",
    ],
    ProductAnalyticsRetentionTimeInterval: [
      "ProductAnalyticsRetentionCalendarTimeInterval",
      "ProductAnalyticsRetentionFixedTimeInterval",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ProductAnalyticsAnalyticsListQuery: ProductAnalyticsAnalyticsListQuery,
    ProductAnalyticsAnalyticsListRequest: ProductAnalyticsAnalyticsListRequest,
    ProductAnalyticsAnalyticsListRequestAttributes:
      ProductAnalyticsAnalyticsListRequestAttributes,
    ProductAnalyticsAnalyticsListRequestData:
      ProductAnalyticsAnalyticsListRequestData,
    ProductAnalyticsAnalyticsListResponse:
      ProductAnalyticsAnalyticsListResponse,
    ProductAnalyticsAnalyticsListResponseAttributes:
      ProductAnalyticsAnalyticsListResponseAttributes,
    ProductAnalyticsAnalyticsListResponseData:
      ProductAnalyticsAnalyticsListResponseData,
    ProductAnalyticsAnalyticsListSort: ProductAnalyticsAnalyticsListSort,
    ProductAnalyticsAnalyticsQuery: ProductAnalyticsAnalyticsQuery,
    ProductAnalyticsAnalyticsRequest: ProductAnalyticsAnalyticsRequest,
    ProductAnalyticsAnalyticsRequestAttributes:
      ProductAnalyticsAnalyticsRequestAttributes,
    ProductAnalyticsAnalyticsRequestData: ProductAnalyticsAnalyticsRequestData,
    ProductAnalyticsAudienceAccountSubquery:
      ProductAnalyticsAudienceAccountSubquery,
    ProductAnalyticsAudienceFilters: ProductAnalyticsAudienceFilters,
    ProductAnalyticsAudienceSegmentSubquery:
      ProductAnalyticsAudienceSegmentSubquery,
    ProductAnalyticsAudienceUserSubquery: ProductAnalyticsAudienceUserSubquery,
    ProductAnalyticsCalendarInterval: ProductAnalyticsCalendarInterval,
    ProductAnalyticsCompute: ProductAnalyticsCompute,
    ProductAnalyticsElapsedTime: ProductAnalyticsElapsedTime,
    ProductAnalyticsEventQuery: ProductAnalyticsEventQuery,
    ProductAnalyticsEventSearch: ProductAnalyticsEventSearch,
    ProductAnalyticsFormulaJourneyQuery: ProductAnalyticsFormulaJourneyQuery,
    ProductAnalyticsFormulaJourneyRequest:
      ProductAnalyticsFormulaJourneyRequest,
    ProductAnalyticsFormulaJourneyRequestAttributes:
      ProductAnalyticsFormulaJourneyRequestAttributes,
    ProductAnalyticsFormulaJourneyRequestData:
      ProductAnalyticsFormulaJourneyRequestData,
    ProductAnalyticsFormulaRetentionQuery:
      ProductAnalyticsFormulaRetentionQuery,
    ProductAnalyticsFormulaRetentionRequest:
      ProductAnalyticsFormulaRetentionRequest,
    ProductAnalyticsFormulaRetentionRequestAttributes:
      ProductAnalyticsFormulaRetentionRequestAttributes,
    ProductAnalyticsFormulaRetentionRequestData:
      ProductAnalyticsFormulaRetentionRequestData,
    ProductAnalyticsGraphQueryCompute: ProductAnalyticsGraphQueryCompute,
    ProductAnalyticsGraphQueryGroupBy: ProductAnalyticsGraphQueryGroupBy,
    ProductAnalyticsGroupBy: ProductAnalyticsGroupBy,
    ProductAnalyticsGroupBySort: ProductAnalyticsGroupBySort,
    ProductAnalyticsInterval: ProductAnalyticsInterval,
    ProductAnalyticsJoinKeys: ProductAnalyticsJoinKeys,
    ProductAnalyticsJourneyAudienceAccountQuery:
      ProductAnalyticsJourneyAudienceAccountQuery,
    ProductAnalyticsJourneyAudienceFilters:
      ProductAnalyticsJourneyAudienceFilters,
    ProductAnalyticsJourneyAudienceSegmentQuery:
      ProductAnalyticsJourneyAudienceSegmentQuery,
    ProductAnalyticsJourneyAudienceUserQuery:
      ProductAnalyticsJourneyAudienceUserQuery,
    ProductAnalyticsJourneyComputedColumn:
      ProductAnalyticsJourneyComputedColumn,
    ProductAnalyticsJourneyFunnelCompute: ProductAnalyticsJourneyFunnelCompute,
    ProductAnalyticsJourneyFunnelQuery: ProductAnalyticsJourneyFunnelQuery,
    ProductAnalyticsJourneyFunnelRequest: ProductAnalyticsJourneyFunnelRequest,
    ProductAnalyticsJourneyFunnelRequestAttributes:
      ProductAnalyticsJourneyFunnelRequestAttributes,
    ProductAnalyticsJourneyFunnelRequestData:
      ProductAnalyticsJourneyFunnelRequestData,
    ProductAnalyticsJourneyFunnelResponse:
      ProductAnalyticsJourneyFunnelResponse,
    ProductAnalyticsJourneyFunnelResponseAttributes:
      ProductAnalyticsJourneyFunnelResponseAttributes,
    ProductAnalyticsJourneyFunnelResponseData:
      ProductAnalyticsJourneyFunnelResponseData,
    ProductAnalyticsJourneyFunnelStep: ProductAnalyticsJourneyFunnelStep,
    ProductAnalyticsJourneyFunnelStepGroup:
      ProductAnalyticsJourneyFunnelStepGroup,
    ProductAnalyticsJourneyListQuery: ProductAnalyticsJourneyListQuery,
    ProductAnalyticsJourneyListRequest: ProductAnalyticsJourneyListRequest,
    ProductAnalyticsJourneyListRequestAttributes:
      ProductAnalyticsJourneyListRequestAttributes,
    ProductAnalyticsJourneyListRequestData:
      ProductAnalyticsJourneyListRequestData,
    ProductAnalyticsJourneyListResponse: ProductAnalyticsJourneyListResponse,
    ProductAnalyticsJourneyListResponseAttributes:
      ProductAnalyticsJourneyListResponseAttributes,
    ProductAnalyticsJourneyListResponseData:
      ProductAnalyticsJourneyListResponseData,
    ProductAnalyticsJourneyListSort: ProductAnalyticsJourneyListSort,
    ProductAnalyticsJourneyNodeTarget: ProductAnalyticsJourneyNodeTarget,
    ProductAnalyticsJourneyPathTarget: ProductAnalyticsJourneyPathTarget,
    ProductAnalyticsJourneyScalarCompute: ProductAnalyticsJourneyScalarCompute,
    ProductAnalyticsJourneyScalarQuery: ProductAnalyticsJourneyScalarQuery,
    ProductAnalyticsJourneyScalarRequest: ProductAnalyticsJourneyScalarRequest,
    ProductAnalyticsJourneyScalarRequestAttributes:
      ProductAnalyticsJourneyScalarRequestAttributes,
    ProductAnalyticsJourneyScalarRequestData:
      ProductAnalyticsJourneyScalarRequestData,
    ProductAnalyticsJourneyScalarResponse:
      ProductAnalyticsJourneyScalarResponse,
    ProductAnalyticsJourneyScalarResponseData:
      ProductAnalyticsJourneyScalarResponseData,
    ProductAnalyticsJourneySearch: ProductAnalyticsJourneySearch,
    ProductAnalyticsJourneySearchFilters: ProductAnalyticsJourneySearchFilters,
    ProductAnalyticsJourneySearchGraphFilter:
      ProductAnalyticsJourneySearchGraphFilter,
    ProductAnalyticsJourneyTimeseriesResponse:
      ProductAnalyticsJourneyTimeseriesResponse,
    ProductAnalyticsJourneyTimeseriesResponseData:
      ProductAnalyticsJourneyTimeseriesResponseData,
    ProductAnalyticsOccurrenceFilter: ProductAnalyticsOccurrenceFilter,
    ProductAnalyticsOccurrenceQuery: ProductAnalyticsOccurrenceQuery,
    ProductAnalyticsOccurrenceSearch: ProductAnalyticsOccurrenceSearch,
    ProductAnalyticsResponseMeta: ProductAnalyticsResponseMeta,
    ProductAnalyticsRetentionAggregationTarget:
      ProductAnalyticsRetentionAggregationTarget,
    ProductAnalyticsRetentionCalendarTimeInterval:
      ProductAnalyticsRetentionCalendarTimeInterval,
    ProductAnalyticsRetentionCellScope: ProductAnalyticsRetentionCellScope,
    ProductAnalyticsRetentionCohortCriteria:
      ProductAnalyticsRetentionCohortCriteria,
    ProductAnalyticsRetentionCohortScope: ProductAnalyticsRetentionCohortScope,
    ProductAnalyticsRetentionCompute: ProductAnalyticsRetentionCompute,
    ProductAnalyticsRetentionFilters: ProductAnalyticsRetentionFilters,
    ProductAnalyticsRetentionFixedTimeInterval:
      ProductAnalyticsRetentionFixedTimeInterval,
    ProductAnalyticsRetentionGridCohort: ProductAnalyticsRetentionGridCohort,
    ProductAnalyticsRetentionGridCohortCell:
      ProductAnalyticsRetentionGridCohortCell,
    ProductAnalyticsRetentionGridQuery: ProductAnalyticsRetentionGridQuery,
    ProductAnalyticsRetentionGridRequest: ProductAnalyticsRetentionGridRequest,
    ProductAnalyticsRetentionGridRequestAttributes:
      ProductAnalyticsRetentionGridRequestAttributes,
    ProductAnalyticsRetentionGridRequestData:
      ProductAnalyticsRetentionGridRequestData,
    ProductAnalyticsRetentionGridResponse:
      ProductAnalyticsRetentionGridResponse,
    ProductAnalyticsRetentionGridResponseAttributes:
      ProductAnalyticsRetentionGridResponseAttributes,
    ProductAnalyticsRetentionGridResponseData:
      ProductAnalyticsRetentionGridResponseData,
    ProductAnalyticsRetentionGroupBy: ProductAnalyticsRetentionGroupBy,
    ProductAnalyticsRetentionIndexTarget: ProductAnalyticsRetentionIndexTarget,
    ProductAnalyticsRetentionListColumn: ProductAnalyticsRetentionListColumn,
    ProductAnalyticsRetentionListColumnField:
      ProductAnalyticsRetentionListColumnField,
    ProductAnalyticsRetentionListQuery: ProductAnalyticsRetentionListQuery,
    ProductAnalyticsRetentionListRequest: ProductAnalyticsRetentionListRequest,
    ProductAnalyticsRetentionListRequestAttributes:
      ProductAnalyticsRetentionListRequestAttributes,
    ProductAnalyticsRetentionListRequestData:
      ProductAnalyticsRetentionListRequestData,
    ProductAnalyticsRetentionListResponse:
      ProductAnalyticsRetentionListResponse,
    ProductAnalyticsRetentionListResponseAttributes:
      ProductAnalyticsRetentionListResponseAttributes,
    ProductAnalyticsRetentionListResponseData:
      ProductAnalyticsRetentionListResponseData,
    ProductAnalyticsRetentionPeriod: ProductAnalyticsRetentionPeriod,
    ProductAnalyticsRetentionReturnCriteria:
      ProductAnalyticsRetentionReturnCriteria,
    ProductAnalyticsRetentionReturnPeriodScope:
      ProductAnalyticsRetentionReturnPeriodScope,
    ProductAnalyticsRetentionSearch: ProductAnalyticsRetentionSearch,
    ProductAnalyticsSankeyAggregatedNode: ProductAnalyticsSankeyAggregatedNode,
    ProductAnalyticsSankeyDefinition: ProductAnalyticsSankeyDefinition,
    ProductAnalyticsSankeyLink: ProductAnalyticsSankeyLink,
    ProductAnalyticsSankeyNode: ProductAnalyticsSankeyNode,
    ProductAnalyticsSankeyRequest: ProductAnalyticsSankeyRequest,
    ProductAnalyticsSankeyRequestAttributes:
      ProductAnalyticsSankeyRequestAttributes,
    ProductAnalyticsSankeyRequestData: ProductAnalyticsSankeyRequestData,
    ProductAnalyticsSankeyResponse: ProductAnalyticsSankeyResponse,
    ProductAnalyticsSankeyResponseAttributes:
      ProductAnalyticsSankeyResponseAttributes,
    ProductAnalyticsSankeyResponseData: ProductAnalyticsSankeyResponseData,
    ProductAnalyticsSankeySearch: ProductAnalyticsSankeySearch,
    ProductAnalyticsSankeyTime: ProductAnalyticsSankeyTime,
    ProductAnalyticsScalarColumn: ProductAnalyticsScalarColumn,
    ProductAnalyticsScalarColumnMeta: ProductAnalyticsScalarColumnMeta,
    ProductAnalyticsScalarResponse: ProductAnalyticsScalarResponse,
    ProductAnalyticsScalarResponseAttributes:
      ProductAnalyticsScalarResponseAttributes,
    ProductAnalyticsScalarResponseData: ProductAnalyticsScalarResponseData,
    ProductAnalyticsSerie: ProductAnalyticsSerie,
    ProductAnalyticsServerSideEventError: ProductAnalyticsServerSideEventError,
    ProductAnalyticsServerSideEventErrors:
      ProductAnalyticsServerSideEventErrors,
    ProductAnalyticsServerSideEventItem: ProductAnalyticsServerSideEventItem,
    ProductAnalyticsServerSideEventItemAccount:
      ProductAnalyticsServerSideEventItemAccount,
    ProductAnalyticsServerSideEventItemApplication:
      ProductAnalyticsServerSideEventItemApplication,
    ProductAnalyticsServerSideEventItemEvent:
      ProductAnalyticsServerSideEventItemEvent,
    ProductAnalyticsServerSideEventItemSession:
      ProductAnalyticsServerSideEventItemSession,
    ProductAnalyticsServerSideEventItemUsr:
      ProductAnalyticsServerSideEventItemUsr,
    ProductAnalyticsTimeseriesResponse: ProductAnalyticsTimeseriesResponse,
    ProductAnalyticsTimeseriesResponseAttributes:
      ProductAnalyticsTimeseriesResponseAttributes,
    ProductAnalyticsTimeseriesResponseData:
      ProductAnalyticsTimeseriesResponseData,
    ProductAnalyticsUnit: ProductAnalyticsUnit,
  },
};
