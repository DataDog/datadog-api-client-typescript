import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ApmStatsQueryColumnType } from "./ApmStatsQueryColumnType";
import { ApmStatsQueryDefinition } from "./ApmStatsQueryDefinition";
import { DistributionWidgetDefinition } from "./DistributionWidgetDefinition";
import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "./DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "./DistributionWidgetYAxis";
import { EventQueryDefinition } from "./EventQueryDefinition";
import { FormulaAndFunctionApmDependencyStatsQueryDefinition } from "./FormulaAndFunctionApmDependencyStatsQueryDefinition";
import { FormulaAndFunctionApmResourceStatsQueryDefinition } from "./FormulaAndFunctionApmResourceStatsQueryDefinition";
import { FormulaAndFunctionCloudCostQueryDefinition } from "./FormulaAndFunctionCloudCostQueryDefinition";
import { FormulaAndFunctionEventQueryDefinition } from "./FormulaAndFunctionEventQueryDefinition";
import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryDefinitionSearch } from "./FormulaAndFunctionEventQueryDefinitionSearch";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventQueryGroupBySort } from "./FormulaAndFunctionEventQueryGroupBySort";
import { FormulaAndFunctionMetricQueryDefinition } from "./FormulaAndFunctionMetricQueryDefinition";
import { FormulaAndFunctionProcessQueryDefinition } from "./FormulaAndFunctionProcessQueryDefinition";
import { FormulaAndFunctionSLOQueryDefinition } from "./FormulaAndFunctionSLOQueryDefinition";
import { HeatMapWidgetDefinition } from "./HeatMapWidgetDefinition";
import { HeatMapWidgetRequest } from "./HeatMapWidgetRequest";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { LogQueryDefinitionGroupBy } from "./LogQueryDefinitionGroupBy";
import { LogQueryDefinitionGroupBySort } from "./LogQueryDefinitionGroupBySort";
import { LogQueryDefinitionSearch } from "./LogQueryDefinitionSearch";
import { LogStreamWidgetDefinition } from "./LogStreamWidgetDefinition";
import { LogsQueryCompute } from "./LogsQueryCompute";
import { NotebookAbsoluteTime } from "./NotebookAbsoluteTime";
import { NotebookAuthor } from "./NotebookAuthor";
import { NotebookCellCreateRequest } from "./NotebookCellCreateRequest";
import { NotebookCellResponse } from "./NotebookCellResponse";
import { NotebookCellUpdateRequest } from "./NotebookCellUpdateRequest";
import { NotebookCreateData } from "./NotebookCreateData";
import { NotebookCreateDataAttributes } from "./NotebookCreateDataAttributes";
import { NotebookCreateRequest } from "./NotebookCreateRequest";
import { NotebookDistributionCellAttributes } from "./NotebookDistributionCellAttributes";
import { NotebookHeatMapCellAttributes } from "./NotebookHeatMapCellAttributes";
import { NotebookLogStreamCellAttributes } from "./NotebookLogStreamCellAttributes";
import { NotebookMarkdownCellAttributes } from "./NotebookMarkdownCellAttributes";
import { NotebookMarkdownCellDefinition } from "./NotebookMarkdownCellDefinition";
import { NotebookMetadata } from "./NotebookMetadata";
import { NotebookRelativeTime } from "./NotebookRelativeTime";
import { NotebookResponse } from "./NotebookResponse";
import { NotebookResponseData } from "./NotebookResponseData";
import { NotebookResponseDataAttributes } from "./NotebookResponseDataAttributes";
import { NotebookSplitBy } from "./NotebookSplitBy";
import { NotebookTimeseriesCellAttributes } from "./NotebookTimeseriesCellAttributes";
import { NotebookToplistCellAttributes } from "./NotebookToplistCellAttributes";
import { NotebookUpdateData } from "./NotebookUpdateData";
import { NotebookUpdateDataAttributes } from "./NotebookUpdateDataAttributes";
import { NotebookUpdateRequest } from "./NotebookUpdateRequest";
import { NotebooksResponse } from "./NotebooksResponse";
import { NotebooksResponseData } from "./NotebooksResponseData";
import { NotebooksResponseDataAttributes } from "./NotebooksResponseDataAttributes";
import { NotebooksResponseMeta } from "./NotebooksResponseMeta";
import { NotebooksResponsePage } from "./NotebooksResponsePage";
import { NumberFormatUnitCanonical } from "./NumberFormatUnitCanonical";
import { NumberFormatUnitCustom } from "./NumberFormatUnitCustom";
import { NumberFormatUnitScale } from "./NumberFormatUnitScale";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { TimeseriesWidgetDefinition } from "./TimeseriesWidgetDefinition";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { TimeseriesWidgetRequest } from "./TimeseriesWidgetRequest";
import { ToplistWidgetDefinition } from "./ToplistWidgetDefinition";
import { ToplistWidgetFlat } from "./ToplistWidgetFlat";
import { ToplistWidgetRequest } from "./ToplistWidgetRequest";
import { ToplistWidgetStacked } from "./ToplistWidgetStacked";
import { ToplistWidgetStyle } from "./ToplistWidgetStyle";
import { WidgetAxis } from "./WidgetAxis";
import { WidgetConditionalFormat } from "./WidgetConditionalFormat";
import { WidgetCustomLink } from "./WidgetCustomLink";
import { WidgetEvent } from "./WidgetEvent";
import { WidgetFieldSort } from "./WidgetFieldSort";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetFormulaCellDisplayModeOptions } from "./WidgetFormulaCellDisplayModeOptions";
import { WidgetFormulaLimit } from "./WidgetFormulaLimit";
import { WidgetFormulaSort } from "./WidgetFormulaSort";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetGroupSort } from "./WidgetGroupSort";
import { WidgetLegacyLiveSpan } from "./WidgetLegacyLiveSpan";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetNewFixedSpan } from "./WidgetNewFixedSpan";
import { WidgetNewLiveSpan } from "./WidgetNewLiveSpan";
import { WidgetNumberFormat } from "./WidgetNumberFormat";
import { WidgetRequestStyle } from "./WidgetRequestStyle";
import { WidgetSortBy } from "./WidgetSortBy";
import { WidgetStyle } from "./WidgetStyle";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ApmStatsQueryRowType: ["service", "resource", "span"],
    DistributionWidgetDefinitionType: ["distribution"],
    DistributionWidgetHistogramRequestType: ["histogram"],
    FormulaAndFunctionApmDependencyStatName: [
      "avg_duration",
      "avg_root_duration",
      "avg_spans_per_trace",
      "error_rate",
      "pct_exec_time",
      "pct_of_traces",
      "total_traces_count",
    ],
    FormulaAndFunctionApmDependencyStatsDataSource: ["apm_dependency_stats"],
    FormulaAndFunctionApmResourceStatName: [
      "errors",
      "error_rate",
      "hits",
      "latency_avg",
      "latency_distribution",
      "latency_max",
      "latency_p50",
      "latency_p75",
      "latency_p90",
      "latency_p95",
      "latency_p99",
    ],
    FormulaAndFunctionApmResourceStatsDataSource: ["apm_resource_stats"],
    FormulaAndFunctionCloudCostDataSource: ["cloud_cost"],
    FormulaAndFunctionEventAggregation: [
      "count",
      "cardinality",
      "median",
      "pc75",
      "pc90",
      "pc95",
      "pc98",
      "pc99",
      "sum",
      "min",
      "max",
      "avg",
    ],
    FormulaAndFunctionEventsDataSource: [
      "logs",
      "spans",
      "network",
      "rum",
      "security_signals",
      "profiles",
      "audit",
      "events",
      "ci_tests",
      "ci_pipelines",
      "incident_analytics",
    ],
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
    FormulaAndFunctionProcessQueryDataSource: ["process", "container"],
    FormulaAndFunctionResponseFormat: ["timeseries", "scalar", "event_list"],
    FormulaAndFunctionSLODataSource: ["slo"],
    FormulaAndFunctionSLOGroupMode: ["overall", "components"],
    FormulaAndFunctionSLOMeasure: [
      "good_events",
      "bad_events",
      "good_minutes",
      "bad_minutes",
      "slo_status",
      "error_budget_remaining",
      "burn_rate",
      "error_budget_burndown",
    ],
    FormulaAndFunctionSLOQueryType: ["metric", "monitor", "time_slice"],
    FormulaType: ["formula"],
    GroupType: ["group"],
    HeatMapWidgetDefinitionType: ["heatmap"],
    LogStreamWidgetDefinitionType: ["log_stream"],
    NotebookCellResourceType: ["notebook_cells"],
    NotebookGraphSize: ["xs", "s", "m", "l", "xl"],
    NotebookMarkdownCellDefinitionType: ["markdown"],
    NotebookMetadataType: [
      "postmortem",
      "runbook",
      "investigation",
      "documentation",
      "report",
    ],
    NotebookResourceType: ["notebooks"],
    NotebookStatus: ["published"],
    NumberFormatUnitCustomType: ["custom_unit_label"],
    NumberFormatUnitScaleType: ["canonical_unit"],
    QuerySortOrder: ["asc", "desc"],
    TableWidgetCellDisplayMode: ["number", "bar", "trend"],
    TimeseriesWidgetDefinitionType: ["timeseries"],
    TimeseriesWidgetLegendColumn: ["value", "avg", "sum", "min", "max"],
    TimeseriesWidgetLegendLayout: ["auto", "horizontal", "vertical"],
    ToplistWidgetDefinitionType: ["toplist"],
    ToplistWidgetFlatType: ["flat"],
    ToplistWidgetLegend: ["automatic", "inline", "none"],
    ToplistWidgetScaling: ["absolute", "relative"],
    ToplistWidgetStackedType: ["stacked"],
    WidgetAggregator: ["avg", "last", "max", "min", "sum", "percentile"],
    WidgetComparator: ["=", ">", ">=", "<", "<="],
    WidgetDisplayType: ["area", "bars", "line", "overlay"],
    WidgetFormulaCellDisplayModeOptionsTrendType: ["area", "line", "bars"],
    WidgetFormulaCellDisplayModeOptionsYScale: ["shared", "independent"],
    WidgetLineType: ["dashed", "dotted", "solid"],
    WidgetLineWidth: ["normal", "thick", "thin"],
    WidgetLiveSpan: [
      "1m",
      "5m",
      "10m",
      "15m",
      "30m",
      "1h",
      "4h",
      "1d",
      "2d",
      "1w",
      "1mo",
      "3mo",
      "6mo",
      "week_to_date",
      "month_to_date",
      "1y",
      "alert",
    ],
    WidgetLiveSpanUnit: ["minute", "hour", "day", "week", "month", "year"],
    WidgetMessageDisplay: ["inline", "expanded-md", "expanded-lg"],
    WidgetNewFixedSpanType: ["fixed"],
    WidgetNewLiveSpanType: ["live"],
    WidgetPalette: [
      "blue",
      "custom_bg",
      "custom_image",
      "custom_text",
      "gray_on_white",
      "grey",
      "green",
      "orange",
      "red",
      "red_on_white",
      "white_on_gray",
      "white_on_green",
      "green_on_white",
      "white_on_red",
      "white_on_yellow",
      "yellow_on_white",
      "black_on_light_yellow",
      "black_on_light_green",
      "black_on_light_red",
    ],
    WidgetSort: ["asc", "desc"],
    WidgetTextAlign: ["center", "left", "right"],
  },
  oneOfMap: {
    DistributionWidgetHistogramRequestQuery: [
      "FormulaAndFunctionMetricQueryDefinition",
      "FormulaAndFunctionEventQueryDefinition",
      "FormulaAndFunctionApmResourceStatsQueryDefinition",
    ],
    FormulaAndFunctionQueryDefinition: [
      "FormulaAndFunctionMetricQueryDefinition",
      "FormulaAndFunctionEventQueryDefinition",
      "FormulaAndFunctionProcessQueryDefinition",
      "FormulaAndFunctionApmDependencyStatsQueryDefinition",
      "FormulaAndFunctionApmResourceStatsQueryDefinition",
      "FormulaAndFunctionSLOQueryDefinition",
      "FormulaAndFunctionCloudCostQueryDefinition",
    ],
    NotebookCellCreateRequestAttributes: [
      "NotebookMarkdownCellAttributes",
      "NotebookTimeseriesCellAttributes",
      "NotebookToplistCellAttributes",
      "NotebookHeatMapCellAttributes",
      "NotebookDistributionCellAttributes",
      "NotebookLogStreamCellAttributes",
    ],
    NotebookCellResponseAttributes: [
      "NotebookMarkdownCellAttributes",
      "NotebookTimeseriesCellAttributes",
      "NotebookToplistCellAttributes",
      "NotebookHeatMapCellAttributes",
      "NotebookDistributionCellAttributes",
      "NotebookLogStreamCellAttributes",
    ],
    NotebookCellTime: ["NotebookRelativeTime", "NotebookAbsoluteTime"],
    NotebookCellUpdateRequestAttributes: [
      "NotebookMarkdownCellAttributes",
      "NotebookTimeseriesCellAttributes",
      "NotebookToplistCellAttributes",
      "NotebookHeatMapCellAttributes",
      "NotebookDistributionCellAttributes",
      "NotebookLogStreamCellAttributes",
    ],
    NotebookGlobalTime: ["NotebookRelativeTime", "NotebookAbsoluteTime"],
    NotebookUpdateCell: [
      "NotebookCellCreateRequest",
      "NotebookCellUpdateRequest",
    ],
    NumberFormatUnit: ["NumberFormatUnitCanonical", "NumberFormatUnitCustom"],
    ToplistWidgetDisplay: ["ToplistWidgetStacked", "ToplistWidgetFlat"],
    WidgetSortOrderBy: ["WidgetFormulaSort", "WidgetGroupSort"],
    WidgetTime: [
      "WidgetLegacyLiveSpan",
      "WidgetNewLiveSpan",
      "WidgetNewFixedSpan",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ApmStatsQueryColumnType: ApmStatsQueryColumnType,
    ApmStatsQueryDefinition: ApmStatsQueryDefinition,
    DistributionWidgetDefinition: DistributionWidgetDefinition,
    DistributionWidgetRequest: DistributionWidgetRequest,
    DistributionWidgetXAxis: DistributionWidgetXAxis,
    DistributionWidgetYAxis: DistributionWidgetYAxis,
    EventQueryDefinition: EventQueryDefinition,
    FormulaAndFunctionApmDependencyStatsQueryDefinition:
      FormulaAndFunctionApmDependencyStatsQueryDefinition,
    FormulaAndFunctionApmResourceStatsQueryDefinition:
      FormulaAndFunctionApmResourceStatsQueryDefinition,
    FormulaAndFunctionCloudCostQueryDefinition:
      FormulaAndFunctionCloudCostQueryDefinition,
    FormulaAndFunctionEventQueryDefinition:
      FormulaAndFunctionEventQueryDefinition,
    FormulaAndFunctionEventQueryDefinitionCompute:
      FormulaAndFunctionEventQueryDefinitionCompute,
    FormulaAndFunctionEventQueryDefinitionSearch:
      FormulaAndFunctionEventQueryDefinitionSearch,
    FormulaAndFunctionEventQueryGroupBy: FormulaAndFunctionEventQueryGroupBy,
    FormulaAndFunctionEventQueryGroupBySort:
      FormulaAndFunctionEventQueryGroupBySort,
    FormulaAndFunctionMetricQueryDefinition:
      FormulaAndFunctionMetricQueryDefinition,
    FormulaAndFunctionProcessQueryDefinition:
      FormulaAndFunctionProcessQueryDefinition,
    FormulaAndFunctionSLOQueryDefinition: FormulaAndFunctionSLOQueryDefinition,
    HeatMapWidgetDefinition: HeatMapWidgetDefinition,
    HeatMapWidgetRequest: HeatMapWidgetRequest,
    LogQueryDefinition: LogQueryDefinition,
    LogQueryDefinitionGroupBy: LogQueryDefinitionGroupBy,
    LogQueryDefinitionGroupBySort: LogQueryDefinitionGroupBySort,
    LogQueryDefinitionSearch: LogQueryDefinitionSearch,
    LogStreamWidgetDefinition: LogStreamWidgetDefinition,
    LogsQueryCompute: LogsQueryCompute,
    NotebookAbsoluteTime: NotebookAbsoluteTime,
    NotebookAuthor: NotebookAuthor,
    NotebookCellCreateRequest: NotebookCellCreateRequest,
    NotebookCellResponse: NotebookCellResponse,
    NotebookCellUpdateRequest: NotebookCellUpdateRequest,
    NotebookCreateData: NotebookCreateData,
    NotebookCreateDataAttributes: NotebookCreateDataAttributes,
    NotebookCreateRequest: NotebookCreateRequest,
    NotebookDistributionCellAttributes: NotebookDistributionCellAttributes,
    NotebookHeatMapCellAttributes: NotebookHeatMapCellAttributes,
    NotebookLogStreamCellAttributes: NotebookLogStreamCellAttributes,
    NotebookMarkdownCellAttributes: NotebookMarkdownCellAttributes,
    NotebookMarkdownCellDefinition: NotebookMarkdownCellDefinition,
    NotebookMetadata: NotebookMetadata,
    NotebookRelativeTime: NotebookRelativeTime,
    NotebookResponse: NotebookResponse,
    NotebookResponseData: NotebookResponseData,
    NotebookResponseDataAttributes: NotebookResponseDataAttributes,
    NotebookSplitBy: NotebookSplitBy,
    NotebookTimeseriesCellAttributes: NotebookTimeseriesCellAttributes,
    NotebookToplistCellAttributes: NotebookToplistCellAttributes,
    NotebookUpdateData: NotebookUpdateData,
    NotebookUpdateDataAttributes: NotebookUpdateDataAttributes,
    NotebookUpdateRequest: NotebookUpdateRequest,
    NotebooksResponse: NotebooksResponse,
    NotebooksResponseData: NotebooksResponseData,
    NotebooksResponseDataAttributes: NotebooksResponseDataAttributes,
    NotebooksResponseMeta: NotebooksResponseMeta,
    NotebooksResponsePage: NotebooksResponsePage,
    NumberFormatUnitCanonical: NumberFormatUnitCanonical,
    NumberFormatUnitCustom: NumberFormatUnitCustom,
    NumberFormatUnitScale: NumberFormatUnitScale,
    ProcessQueryDefinition: ProcessQueryDefinition,
    TimeseriesWidgetDefinition: TimeseriesWidgetDefinition,
    TimeseriesWidgetExpressionAlias: TimeseriesWidgetExpressionAlias,
    TimeseriesWidgetRequest: TimeseriesWidgetRequest,
    ToplistWidgetDefinition: ToplistWidgetDefinition,
    ToplistWidgetFlat: ToplistWidgetFlat,
    ToplistWidgetRequest: ToplistWidgetRequest,
    ToplistWidgetStacked: ToplistWidgetStacked,
    ToplistWidgetStyle: ToplistWidgetStyle,
    WidgetAxis: WidgetAxis,
    WidgetConditionalFormat: WidgetConditionalFormat,
    WidgetCustomLink: WidgetCustomLink,
    WidgetEvent: WidgetEvent,
    WidgetFieldSort: WidgetFieldSort,
    WidgetFormula: WidgetFormula,
    WidgetFormulaCellDisplayModeOptions: WidgetFormulaCellDisplayModeOptions,
    WidgetFormulaLimit: WidgetFormulaLimit,
    WidgetFormulaSort: WidgetFormulaSort,
    WidgetFormulaStyle: WidgetFormulaStyle,
    WidgetGroupSort: WidgetGroupSort,
    WidgetLegacyLiveSpan: WidgetLegacyLiveSpan,
    WidgetMarker: WidgetMarker,
    WidgetNewFixedSpan: WidgetNewFixedSpan,
    WidgetNewLiveSpan: WidgetNewLiveSpan,
    WidgetNumberFormat: WidgetNumberFormat,
    WidgetRequestStyle: WidgetRequestStyle,
    WidgetSortBy: WidgetSortBy,
    WidgetStyle: WidgetStyle,
  },
};
