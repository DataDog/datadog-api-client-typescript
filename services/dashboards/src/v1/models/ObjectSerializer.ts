import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
  logger,
} from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AlertGraphWidgetDefinition } from "./AlertGraphWidgetDefinition";
import { AlertValueWidgetDefinition } from "./AlertValueWidgetDefinition";
import { ApmStatsQueryColumnType } from "./ApmStatsQueryColumnType";
import { ApmStatsQueryDefinition } from "./ApmStatsQueryDefinition";
import { ChangeWidgetDefinition } from "./ChangeWidgetDefinition";
import { ChangeWidgetRequest } from "./ChangeWidgetRequest";
import { CheckStatusWidgetDefinition } from "./CheckStatusWidgetDefinition";
import { Dashboard } from "./Dashboard";
import { DashboardBulkActionData } from "./DashboardBulkActionData";
import { DashboardBulkDeleteRequest } from "./DashboardBulkDeleteRequest";
import { DashboardDeleteResponse } from "./DashboardDeleteResponse";
import { DashboardGlobalTime } from "./DashboardGlobalTime";
import { DashboardRestoreRequest } from "./DashboardRestoreRequest";
import { DashboardSummary } from "./DashboardSummary";
import { DashboardSummaryDefinition } from "./DashboardSummaryDefinition";
import { DashboardTemplateVariable } from "./DashboardTemplateVariable";
import { DashboardTemplateVariablePreset } from "./DashboardTemplateVariablePreset";
import { DashboardTemplateVariablePresetValue } from "./DashboardTemplateVariablePresetValue";
import { DeleteSharedDashboardResponse } from "./DeleteSharedDashboardResponse";
import { DistributionWidgetDefinition } from "./DistributionWidgetDefinition";
import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "./DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "./DistributionWidgetYAxis";
import { EventQueryDefinition } from "./EventQueryDefinition";
import { EventStreamWidgetDefinition } from "./EventStreamWidgetDefinition";
import { EventTimelineWidgetDefinition } from "./EventTimelineWidgetDefinition";
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
import { FreeTextWidgetDefinition } from "./FreeTextWidgetDefinition";
import { FunnelQuery } from "./FunnelQuery";
import { FunnelStep } from "./FunnelStep";
import { FunnelWidgetDefinition } from "./FunnelWidgetDefinition";
import { FunnelWidgetRequest } from "./FunnelWidgetRequest";
import { GeomapWidgetDefinition } from "./GeomapWidgetDefinition";
import { GeomapWidgetDefinitionStyle } from "./GeomapWidgetDefinitionStyle";
import { GeomapWidgetDefinitionView } from "./GeomapWidgetDefinitionView";
import { GeomapWidgetRequest } from "./GeomapWidgetRequest";
import { GroupWidgetDefinition } from "./GroupWidgetDefinition";
import { HeatMapWidgetDefinition } from "./HeatMapWidgetDefinition";
import { HeatMapWidgetRequest } from "./HeatMapWidgetRequest";
import { HostMapRequest } from "./HostMapRequest";
import { HostMapWidgetDefinition } from "./HostMapWidgetDefinition";
import { HostMapWidgetDefinitionRequests } from "./HostMapWidgetDefinitionRequests";
import { HostMapWidgetDefinitionStyle } from "./HostMapWidgetDefinitionStyle";
import { IFrameWidgetDefinition } from "./IFrameWidgetDefinition";
import { ImageWidgetDefinition } from "./ImageWidgetDefinition";
import { ListStreamColumn } from "./ListStreamColumn";
import { ListStreamComputeItems } from "./ListStreamComputeItems";
import { ListStreamGroupByItems } from "./ListStreamGroupByItems";
import { ListStreamQuery } from "./ListStreamQuery";
import { ListStreamWidgetDefinition } from "./ListStreamWidgetDefinition";
import { ListStreamWidgetRequest } from "./ListStreamWidgetRequest";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { LogQueryDefinitionGroupBy } from "./LogQueryDefinitionGroupBy";
import { LogQueryDefinitionGroupBySort } from "./LogQueryDefinitionGroupBySort";
import { LogQueryDefinitionSearch } from "./LogQueryDefinitionSearch";
import { LogStreamWidgetDefinition } from "./LogStreamWidgetDefinition";
import { LogsQueryCompute } from "./LogsQueryCompute";
import { MonitorSummaryWidgetDefinition } from "./MonitorSummaryWidgetDefinition";
import { NoteWidgetDefinition } from "./NoteWidgetDefinition";
import { NumberFormatUnitCanonical } from "./NumberFormatUnitCanonical";
import { NumberFormatUnitCustom } from "./NumberFormatUnitCustom";
import { NumberFormatUnitScale } from "./NumberFormatUnitScale";
import { PowerpackTemplateVariableContents } from "./PowerpackTemplateVariableContents";
import { PowerpackTemplateVariables } from "./PowerpackTemplateVariables";
import { PowerpackWidgetDefinition } from "./PowerpackWidgetDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { QueryValueWidgetDefinition } from "./QueryValueWidgetDefinition";
import { QueryValueWidgetRequest } from "./QueryValueWidgetRequest";
import { RunWorkflowWidgetDefinition } from "./RunWorkflowWidgetDefinition";
import { RunWorkflowWidgetInput } from "./RunWorkflowWidgetInput";
import { SLOListWidgetDefinition } from "./SLOListWidgetDefinition";
import { SLOListWidgetQuery } from "./SLOListWidgetQuery";
import { SLOListWidgetRequest } from "./SLOListWidgetRequest";
import { SLOWidgetDefinition } from "./SLOWidgetDefinition";
import { ScatterPlotRequest } from "./ScatterPlotRequest";
import { ScatterPlotWidgetDefinition } from "./ScatterPlotWidgetDefinition";
import { ScatterPlotWidgetDefinitionRequests } from "./ScatterPlotWidgetDefinitionRequests";
import { ScatterplotTableRequest } from "./ScatterplotTableRequest";
import { ScatterplotWidgetFormula } from "./ScatterplotWidgetFormula";
import { SelectableTemplateVariableItems } from "./SelectableTemplateVariableItems";
import { ServiceMapWidgetDefinition } from "./ServiceMapWidgetDefinition";
import { ServiceSummaryWidgetDefinition } from "./ServiceSummaryWidgetDefinition";
import { SharedDashboard } from "./SharedDashboard";
import { SharedDashboardAuthor } from "./SharedDashboardAuthor";
import { SharedDashboardInviteesItems } from "./SharedDashboardInviteesItems";
import { SharedDashboardInvites } from "./SharedDashboardInvites";
import { SharedDashboardInvitesDataObject } from "./SharedDashboardInvitesDataObject";
import { SharedDashboardInvitesDataObjectAttributes } from "./SharedDashboardInvitesDataObjectAttributes";
import { SharedDashboardInvitesMeta } from "./SharedDashboardInvitesMeta";
import { SharedDashboardInvitesMetaPage } from "./SharedDashboardInvitesMetaPage";
import { SharedDashboardUpdateRequest } from "./SharedDashboardUpdateRequest";
import { SharedDashboardUpdateRequestGlobalTime } from "./SharedDashboardUpdateRequestGlobalTime";
import { SplitConfig } from "./SplitConfig";
import { SplitConfigSortCompute } from "./SplitConfigSortCompute";
import { SplitDimension } from "./SplitDimension";
import { SplitGraphWidgetDefinition } from "./SplitGraphWidgetDefinition";
import { SplitSort } from "./SplitSort";
import { SplitVectorEntryItem } from "./SplitVectorEntryItem";
import { SunburstWidgetDefinition } from "./SunburstWidgetDefinition";
import { SunburstWidgetLegendInlineAutomatic } from "./SunburstWidgetLegendInlineAutomatic";
import { SunburstWidgetLegendTable } from "./SunburstWidgetLegendTable";
import { SunburstWidgetRequest } from "./SunburstWidgetRequest";
import { TableWidgetDefinition } from "./TableWidgetDefinition";
import { TableWidgetRequest } from "./TableWidgetRequest";
import { TableWidgetTextFormatMatch } from "./TableWidgetTextFormatMatch";
import { TableWidgetTextFormatReplaceAll } from "./TableWidgetTextFormatReplaceAll";
import { TableWidgetTextFormatReplaceSubstring } from "./TableWidgetTextFormatReplaceSubstring";
import { TableWidgetTextFormatRule } from "./TableWidgetTextFormatRule";
import { TimeseriesBackground } from "./TimeseriesBackground";
import { TimeseriesWidgetDefinition } from "./TimeseriesWidgetDefinition";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { TimeseriesWidgetRequest } from "./TimeseriesWidgetRequest";
import { ToplistWidgetDefinition } from "./ToplistWidgetDefinition";
import { ToplistWidgetFlat } from "./ToplistWidgetFlat";
import { ToplistWidgetRequest } from "./ToplistWidgetRequest";
import { ToplistWidgetStacked } from "./ToplistWidgetStacked";
import { ToplistWidgetStyle } from "./ToplistWidgetStyle";
import { TopologyMapWidgetDefinition } from "./TopologyMapWidgetDefinition";
import { TopologyQuery } from "./TopologyQuery";
import { TopologyRequest } from "./TopologyRequest";
import { TreeMapWidgetDefinition } from "./TreeMapWidgetDefinition";
import { TreeMapWidgetRequest } from "./TreeMapWidgetRequest";
import { ViewingPreferences } from "./ViewingPreferences";
import { Widget } from "./Widget";
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
import { WidgetLayout } from "./WidgetLayout";
import { WidgetLegacyLiveSpan } from "./WidgetLegacyLiveSpan";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetNewFixedSpan } from "./WidgetNewFixedSpan";
import { WidgetNewLiveSpan } from "./WidgetNewLiveSpan";
import { WidgetNumberFormat } from "./WidgetNumberFormat";
import { WidgetRequestStyle } from "./WidgetRequestStyle";
import { WidgetSortBy } from "./WidgetSortBy";
import { WidgetStyle } from "./WidgetStyle";

const primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
];

const ARRAY_PREFIX = "Array<";
const MAP_PREFIX = "{ [key: string]: ";
const TUPLE_PREFIX = "[";

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "text/json": 100,
  "application/octet-stream": 0,
};

const enumsMap: { [key: string]: any[] } = {
  AlertGraphWidgetDefinitionType: ["alert_graph"],
  AlertValueWidgetDefinitionType: ["alert_value"],
  ApmStatsQueryRowType: ["service", "resource", "span"],
  ChangeWidgetDefinitionType: ["change"],
  CheckStatusWidgetDefinitionType: ["check_status"],
  DashboardGlobalTimeLiveSpan: ["15m", "1h", "4h", "1d", "2d", "1w", "1mo", "3mo"],
  DashboardInviteType: ["public_dashboard_invitation"],
  DashboardLayoutType: ["ordered", "free"],
  DashboardReflowType: ["auto", "fixed"],
  DashboardResourceType: ["dashboard"],
  DashboardShareType: ["open", "invite", "embed"],
  DashboardType: ["custom_timeboard", "custom_screenboard"],
  DistributionWidgetDefinitionType: ["distribution"],
  DistributionWidgetHistogramRequestType: ["histogram"],
  EventStreamWidgetDefinitionType: ["event_stream"],
  EventTimelineWidgetDefinitionType: ["event_timeline"],
  FormulaAndFunctionApmDependencyStatName: ["avg_duration", "avg_root_duration", "avg_spans_per_trace", "error_rate", "pct_exec_time", "pct_of_traces", "total_traces_count"],
  FormulaAndFunctionApmDependencyStatsDataSource: ["apm_dependency_stats"],
  FormulaAndFunctionApmResourceStatName: ["errors", "error_rate", "hits", "latency_avg", "latency_distribution", "latency_max", "latency_p50", "latency_p75", "latency_p90", "latency_p95", "latency_p99"],
  FormulaAndFunctionApmResourceStatsDataSource: ["apm_resource_stats"],
  FormulaAndFunctionCloudCostDataSource: ["cloud_cost"],
  FormulaAndFunctionEventAggregation: ["count", "cardinality", "median", "pc75", "pc90", "pc95", "pc98", "pc99", "sum", "min", "max", "avg"],
  FormulaAndFunctionEventsDataSource: ["logs", "spans", "network", "rum", "security_signals", "profiles", "audit", "events", "ci_tests", "ci_pipelines", "incident_analytics"],
  FormulaAndFunctionMetricAggregation: ["avg", "min", "max", "sum", "last", "area", "l2norm", "percentile"],
  FormulaAndFunctionMetricDataSource: ["metrics"],
  FormulaAndFunctionProcessQueryDataSource: ["process", "container"],
  FormulaAndFunctionResponseFormat: ["timeseries", "scalar", "event_list"],
  FormulaAndFunctionSLODataSource: ["slo"],
  FormulaAndFunctionSLOGroupMode: ["overall", "components"],
  FormulaAndFunctionSLOMeasure: ["good_events", "bad_events", "good_minutes", "bad_minutes", "slo_status", "error_budget_remaining", "burn_rate", "error_budget_burndown"],
  FormulaAndFunctionSLOQueryType: ["metric", "time_slice"],
  FormulaType: ["formula"],
  FreeTextWidgetDefinitionType: ["free_text"],
  FunnelRequestType: ["funnel"],
  FunnelSource: ["rum"],
  FunnelWidgetDefinitionType: ["funnel"],
  GeomapWidgetDefinitionType: ["geomap"],
  GroupType: ["group"],
  GroupWidgetDefinitionType: ["group"],
  HeatMapWidgetDefinitionType: ["heatmap"],
  HostMapWidgetDefinitionType: ["hostmap"],
  IFrameWidgetDefinitionType: ["iframe"],
  ImageWidgetDefinitionType: ["image"],
  ListStreamColumnWidth: ["auto", "compact", "full"],
  ListStreamComputeAggregation: ["count", "cardinality", "median", "pc75", "pc90", "pc95", "pc98", "pc99", "sum", "min", "max", "avg", "earliest", "latest", "most_frequent"],
  ListStreamResponseFormat: ["event_list"],
  ListStreamSource: ["logs_stream", "audit_stream", "ci_pipeline_stream", "ci_test_stream", "rum_issue_stream", "apm_issue_stream", "trace_stream", "logs_issue_stream", "logs_pattern_stream", "logs_transaction_stream", "event_stream", "rum_stream", "llm_observability_stream"],
  ListStreamWidgetDefinitionType: ["list_stream"],
  LogStreamWidgetDefinitionType: ["log_stream"],
  MonitorSummaryWidgetDefinitionType: ["manage_status"],
  NoteWidgetDefinitionType: ["note"],
  NumberFormatUnitCustomType: ["custom_unit_label"],
  NumberFormatUnitScaleType: ["canonical_unit"],
  PowerpackWidgetDefinitionType: ["powerpack"],
  QuerySortOrder: ["asc", "desc"],
  QueryValueWidgetDefinitionType: ["query_value"],
  RunWorkflowWidgetDefinitionType: ["run_workflow"],
  SLOListWidgetDefinitionType: ["slo_list"],
  SLOListWidgetRequestType: ["slo_list"],
  SLOWidgetDefinitionType: ["slo"],
  ScatterPlotWidgetDefinitionType: ["scatterplot"],
  ScatterplotDimension: ["x", "y", "radius", "color"],
  ScatterplotWidgetAggregator: ["avg", "last", "max", "min", "sum"],
  ServiceMapWidgetDefinitionType: ["servicemap"],
  ServiceSummaryWidgetDefinitionType: ["trace_service"],
  SharedDashboardStatus: ["active", "paused"],
  SplitGraphVizSize: ["xs", "sm", "md", "lg"],
  SplitGraphWidgetDefinitionType: ["split_group"],
  SunburstWidgetDefinitionType: ["sunburst"],
  SunburstWidgetLegendInlineAutomaticType: ["inline", "automatic"],
  SunburstWidgetLegendTableType: ["table", "none"],
  TableWidgetCellDisplayMode: ["number", "bar", "trend"],
  TableWidgetDefinitionType: ["query_table"],
  TableWidgetHasSearchBar: ["always", "never", "auto"],
  TableWidgetTextFormatMatchType: ["is", "is_not", "contains", "does_not_contain", "starts_with", "ends_with"],
  TableWidgetTextFormatPalette: ["white_on_red", "white_on_yellow", "white_on_green", "black_on_light_red", "black_on_light_yellow", "black_on_light_green", "red_on_white", "yellow_on_white", "green_on_white", "custom_bg", "custom_text"],
  TableWidgetTextFormatReplaceAllType: ["all"],
  TableWidgetTextFormatReplaceSubstringType: ["substring"],
  TimeseriesBackgroundType: ["bars", "area"],
  TimeseriesWidgetDefinitionType: ["timeseries"],
  TimeseriesWidgetLegendColumn: ["value", "avg", "sum", "min", "max"],
  TimeseriesWidgetLegendLayout: ["auto", "horizontal", "vertical"],
  ToplistWidgetDefinitionType: ["toplist"],
  ToplistWidgetFlatType: ["flat"],
  ToplistWidgetLegend: ["automatic", "inline", "none"],
  ToplistWidgetScaling: ["absolute", "relative"],
  ToplistWidgetStackedType: ["stacked"],
  TopologyMapWidgetDefinitionType: ["topology_map"],
  TopologyQueryDataSource: ["data_streams", "service_map"],
  TopologyRequestType: ["topology"],
  TreeMapColorBy: ["user"],
  TreeMapGroupBy: ["user", "family", "process"],
  TreeMapSizeBy: ["pct_cpu", "pct_mem"],
  TreeMapWidgetDefinitionType: ["treemap"],
  ViewingPreferencesTheme: ["system", "light", "dark"],
  WidgetAggregator: ["avg", "last", "max", "min", "sum", "percentile"],
  WidgetChangeType: ["absolute", "relative"],
  WidgetColorPreference: ["background", "text"],
  WidgetComparator: ["=", ">", ">=", "<", "<="],
  WidgetCompareTo: ["hour_before", "day_before", "week_before", "month_before"],
  WidgetDisplayType: ["area", "bars", "line", "overlay"],
  WidgetEventSize: ["s", "l"],
  WidgetFormulaCellDisplayModeOptionsTrendType: ["area", "line", "bars"],
  WidgetFormulaCellDisplayModeOptionsYScale: ["shared", "independent"],
  WidgetGrouping: ["check", "cluster"],
  WidgetHorizontalAlign: ["center", "left", "right"],
  WidgetImageSizing: ["fill", "contain", "cover", "none", "scale-down", "zoom", "fit", "center"],
  WidgetLayoutType: ["ordered"],
  WidgetLineType: ["dashed", "dotted", "solid"],
  WidgetLineWidth: ["normal", "thick", "thin"],
  WidgetLiveSpan: ["1m", "5m", "10m", "15m", "30m", "1h", "4h", "1d", "2d", "1w", "1mo", "3mo", "6mo", "week_to_date", "month_to_date", "1y", "alert"],
  WidgetLiveSpanUnit: ["minute", "hour", "day", "week", "month", "year"],
  WidgetMargin: ["sm", "md", "lg", "small", "large"],
  WidgetMessageDisplay: ["inline", "expanded-md", "expanded-lg"],
  WidgetMonitorSummaryDisplayFormat: ["counts", "countsAndList", "list"],
  WidgetMonitorSummarySort: ["name", "group", "status", "tags", "triggered", "group,asc", "group,desc", "name,asc", "name,desc", "status,asc", "status,desc", "tags,asc", "tags,desc", "triggered,asc", "triggered,desc", "priority,asc", "priority,desc"],
  WidgetNewFixedSpanType: ["fixed"],
  WidgetNewLiveSpanType: ["live"],
  WidgetNodeType: ["host", "container"],
  WidgetOrderBy: ["change", "name", "present", "past"],
  WidgetPalette: ["blue", "custom_bg", "custom_image", "custom_text", "gray_on_white", "grey", "green", "orange", "red", "red_on_white", "white_on_gray", "white_on_green", "green_on_white", "white_on_red", "white_on_yellow", "yellow_on_white", "black_on_light_yellow", "black_on_light_green", "black_on_light_red"],
  WidgetServiceSummaryDisplayFormat: ["one_column", "two_column", "three_column"],
  WidgetSizeFormat: ["small", "medium", "large"],
  WidgetSort: ["asc", "desc"],
  WidgetSummaryType: ["monitors", "groups", "combined"],
  WidgetTextAlign: ["center", "left", "right"],
  WidgetTickEdge: ["bottom", "left", "right", "top"],
  WidgetTimeWindows: ["7d", "30d", "90d", "week_to_date", "previous_week", "month_to_date", "previous_month", "global_time"],
  WidgetVerticalAlign: ["center", "top", "bottom"],
  WidgetViewMode: ["overall", "component", "both"],
  WidgetVizType: ["timeseries", "toplist"],
};

const typeMap: { [index: string]: any } = {
  APIErrorResponse: APIErrorResponse,
  AlertGraphWidgetDefinition: AlertGraphWidgetDefinition,
  AlertValueWidgetDefinition: AlertValueWidgetDefinition,
  ApmStatsQueryColumnType: ApmStatsQueryColumnType,
  ApmStatsQueryDefinition: ApmStatsQueryDefinition,
  ChangeWidgetDefinition: ChangeWidgetDefinition,
  ChangeWidgetRequest: ChangeWidgetRequest,
  CheckStatusWidgetDefinition: CheckStatusWidgetDefinition,
  Dashboard: Dashboard,
  DashboardBulkActionData: DashboardBulkActionData,
  DashboardBulkDeleteRequest: DashboardBulkDeleteRequest,
  DashboardDeleteResponse: DashboardDeleteResponse,
  DashboardGlobalTime: DashboardGlobalTime,
  DashboardRestoreRequest: DashboardRestoreRequest,
  DashboardSummary: DashboardSummary,
  DashboardSummaryDefinition: DashboardSummaryDefinition,
  DashboardTemplateVariable: DashboardTemplateVariable,
  DashboardTemplateVariablePreset: DashboardTemplateVariablePreset,
  DashboardTemplateVariablePresetValue: DashboardTemplateVariablePresetValue,
  DeleteSharedDashboardResponse: DeleteSharedDashboardResponse,
  DistributionWidgetDefinition: DistributionWidgetDefinition,
  DistributionWidgetRequest: DistributionWidgetRequest,
  DistributionWidgetXAxis: DistributionWidgetXAxis,
  DistributionWidgetYAxis: DistributionWidgetYAxis,
  EventQueryDefinition: EventQueryDefinition,
  EventStreamWidgetDefinition: EventStreamWidgetDefinition,
  EventTimelineWidgetDefinition: EventTimelineWidgetDefinition,
  FormulaAndFunctionApmDependencyStatsQueryDefinition: FormulaAndFunctionApmDependencyStatsQueryDefinition,
  FormulaAndFunctionApmResourceStatsQueryDefinition: FormulaAndFunctionApmResourceStatsQueryDefinition,
  FormulaAndFunctionCloudCostQueryDefinition: FormulaAndFunctionCloudCostQueryDefinition,
  FormulaAndFunctionEventQueryDefinition: FormulaAndFunctionEventQueryDefinition,
  FormulaAndFunctionEventQueryDefinitionCompute: FormulaAndFunctionEventQueryDefinitionCompute,
  FormulaAndFunctionEventQueryDefinitionSearch: FormulaAndFunctionEventQueryDefinitionSearch,
  FormulaAndFunctionEventQueryGroupBy: FormulaAndFunctionEventQueryGroupBy,
  FormulaAndFunctionEventQueryGroupBySort: FormulaAndFunctionEventQueryGroupBySort,
  FormulaAndFunctionMetricQueryDefinition: FormulaAndFunctionMetricQueryDefinition,
  FormulaAndFunctionProcessQueryDefinition: FormulaAndFunctionProcessQueryDefinition,
  FormulaAndFunctionSLOQueryDefinition: FormulaAndFunctionSLOQueryDefinition,
  FreeTextWidgetDefinition: FreeTextWidgetDefinition,
  FunnelQuery: FunnelQuery,
  FunnelStep: FunnelStep,
  FunnelWidgetDefinition: FunnelWidgetDefinition,
  FunnelWidgetRequest: FunnelWidgetRequest,
  GeomapWidgetDefinition: GeomapWidgetDefinition,
  GeomapWidgetDefinitionStyle: GeomapWidgetDefinitionStyle,
  GeomapWidgetDefinitionView: GeomapWidgetDefinitionView,
  GeomapWidgetRequest: GeomapWidgetRequest,
  GroupWidgetDefinition: GroupWidgetDefinition,
  HeatMapWidgetDefinition: HeatMapWidgetDefinition,
  HeatMapWidgetRequest: HeatMapWidgetRequest,
  HostMapRequest: HostMapRequest,
  HostMapWidgetDefinition: HostMapWidgetDefinition,
  HostMapWidgetDefinitionRequests: HostMapWidgetDefinitionRequests,
  HostMapWidgetDefinitionStyle: HostMapWidgetDefinitionStyle,
  IFrameWidgetDefinition: IFrameWidgetDefinition,
  ImageWidgetDefinition: ImageWidgetDefinition,
  ListStreamColumn: ListStreamColumn,
  ListStreamComputeItems: ListStreamComputeItems,
  ListStreamGroupByItems: ListStreamGroupByItems,
  ListStreamQuery: ListStreamQuery,
  ListStreamWidgetDefinition: ListStreamWidgetDefinition,
  ListStreamWidgetRequest: ListStreamWidgetRequest,
  LogQueryDefinition: LogQueryDefinition,
  LogQueryDefinitionGroupBy: LogQueryDefinitionGroupBy,
  LogQueryDefinitionGroupBySort: LogQueryDefinitionGroupBySort,
  LogQueryDefinitionSearch: LogQueryDefinitionSearch,
  LogStreamWidgetDefinition: LogStreamWidgetDefinition,
  LogsQueryCompute: LogsQueryCompute,
  MonitorSummaryWidgetDefinition: MonitorSummaryWidgetDefinition,
  NoteWidgetDefinition: NoteWidgetDefinition,
  NumberFormatUnitCanonical: NumberFormatUnitCanonical,
  NumberFormatUnitCustom: NumberFormatUnitCustom,
  NumberFormatUnitScale: NumberFormatUnitScale,
  PowerpackTemplateVariableContents: PowerpackTemplateVariableContents,
  PowerpackTemplateVariables: PowerpackTemplateVariables,
  PowerpackWidgetDefinition: PowerpackWidgetDefinition,
  ProcessQueryDefinition: ProcessQueryDefinition,
  QueryValueWidgetDefinition: QueryValueWidgetDefinition,
  QueryValueWidgetRequest: QueryValueWidgetRequest,
  RunWorkflowWidgetDefinition: RunWorkflowWidgetDefinition,
  RunWorkflowWidgetInput: RunWorkflowWidgetInput,
  SLOListWidgetDefinition: SLOListWidgetDefinition,
  SLOListWidgetQuery: SLOListWidgetQuery,
  SLOListWidgetRequest: SLOListWidgetRequest,
  SLOWidgetDefinition: SLOWidgetDefinition,
  ScatterPlotRequest: ScatterPlotRequest,
  ScatterPlotWidgetDefinition: ScatterPlotWidgetDefinition,
  ScatterPlotWidgetDefinitionRequests: ScatterPlotWidgetDefinitionRequests,
  ScatterplotTableRequest: ScatterplotTableRequest,
  ScatterplotWidgetFormula: ScatterplotWidgetFormula,
  SelectableTemplateVariableItems: SelectableTemplateVariableItems,
  ServiceMapWidgetDefinition: ServiceMapWidgetDefinition,
  ServiceSummaryWidgetDefinition: ServiceSummaryWidgetDefinition,
  SharedDashboard: SharedDashboard,
  SharedDashboardAuthor: SharedDashboardAuthor,
  SharedDashboardInviteesItems: SharedDashboardInviteesItems,
  SharedDashboardInvites: SharedDashboardInvites,
  SharedDashboardInvitesDataObject: SharedDashboardInvitesDataObject,
  SharedDashboardInvitesDataObjectAttributes: SharedDashboardInvitesDataObjectAttributes,
  SharedDashboardInvitesMeta: SharedDashboardInvitesMeta,
  SharedDashboardInvitesMetaPage: SharedDashboardInvitesMetaPage,
  SharedDashboardUpdateRequest: SharedDashboardUpdateRequest,
  SharedDashboardUpdateRequestGlobalTime: SharedDashboardUpdateRequestGlobalTime,
  SplitConfig: SplitConfig,
  SplitConfigSortCompute: SplitConfigSortCompute,
  SplitDimension: SplitDimension,
  SplitGraphWidgetDefinition: SplitGraphWidgetDefinition,
  SplitSort: SplitSort,
  SplitVectorEntryItem: SplitVectorEntryItem,
  SunburstWidgetDefinition: SunburstWidgetDefinition,
  SunburstWidgetLegendInlineAutomatic: SunburstWidgetLegendInlineAutomatic,
  SunburstWidgetLegendTable: SunburstWidgetLegendTable,
  SunburstWidgetRequest: SunburstWidgetRequest,
  TableWidgetDefinition: TableWidgetDefinition,
  TableWidgetRequest: TableWidgetRequest,
  TableWidgetTextFormatMatch: TableWidgetTextFormatMatch,
  TableWidgetTextFormatReplaceAll: TableWidgetTextFormatReplaceAll,
  TableWidgetTextFormatReplaceSubstring: TableWidgetTextFormatReplaceSubstring,
  TableWidgetTextFormatRule: TableWidgetTextFormatRule,
  TimeseriesBackground: TimeseriesBackground,
  TimeseriesWidgetDefinition: TimeseriesWidgetDefinition,
  TimeseriesWidgetExpressionAlias: TimeseriesWidgetExpressionAlias,
  TimeseriesWidgetRequest: TimeseriesWidgetRequest,
  ToplistWidgetDefinition: ToplistWidgetDefinition,
  ToplistWidgetFlat: ToplistWidgetFlat,
  ToplistWidgetRequest: ToplistWidgetRequest,
  ToplistWidgetStacked: ToplistWidgetStacked,
  ToplistWidgetStyle: ToplistWidgetStyle,
  TopologyMapWidgetDefinition: TopologyMapWidgetDefinition,
  TopologyQuery: TopologyQuery,
  TopologyRequest: TopologyRequest,
  TreeMapWidgetDefinition: TreeMapWidgetDefinition,
  TreeMapWidgetRequest: TreeMapWidgetRequest,
  ViewingPreferences: ViewingPreferences,
  Widget: Widget,
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
  WidgetLayout: WidgetLayout,
  WidgetLegacyLiveSpan: WidgetLegacyLiveSpan,
  WidgetMarker: WidgetMarker,
  WidgetNewFixedSpan: WidgetNewFixedSpan,
  WidgetNewLiveSpan: WidgetNewLiveSpan,
  WidgetNumberFormat: WidgetNumberFormat,
  WidgetRequestStyle: WidgetRequestStyle,
  WidgetSortBy: WidgetSortBy,
  WidgetStyle: WidgetStyle,
};

const oneOfMap: { [index: string]: string[] } = {
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
  NumberFormatUnit: ["NumberFormatUnitCanonical", "NumberFormatUnitCustom"],
  SharedDashboardInvitesData: [
    "SharedDashboardInvitesDataObject",
    "Array<SharedDashboardInvitesDataObject>",
  ],
  SplitGraphSourceWidgetDefinition: [
    "ChangeWidgetDefinition",
    "GeomapWidgetDefinition",
    "QueryValueWidgetDefinition",
    "ScatterPlotWidgetDefinition",
    "SunburstWidgetDefinition",
    "TableWidgetDefinition",
    "TimeseriesWidgetDefinition",
    "ToplistWidgetDefinition",
    "TreeMapWidgetDefinition",
  ],
  SunburstWidgetLegend: [
    "SunburstWidgetLegendTable",
    "SunburstWidgetLegendInlineAutomatic",
  ],
  TableWidgetTextFormatReplace: [
    "TableWidgetTextFormatReplaceAll",
    "TableWidgetTextFormatReplaceSubstring",
  ],
  ToplistWidgetDisplay: ["ToplistWidgetStacked", "ToplistWidgetFlat"],
  WidgetDefinition: [
    "AlertGraphWidgetDefinition",
    "AlertValueWidgetDefinition",
    "ChangeWidgetDefinition",
    "CheckStatusWidgetDefinition",
    "DistributionWidgetDefinition",
    "EventStreamWidgetDefinition",
    "EventTimelineWidgetDefinition",
    "FreeTextWidgetDefinition",
    "FunnelWidgetDefinition",
    "GeomapWidgetDefinition",
    "GroupWidgetDefinition",
    "HeatMapWidgetDefinition",
    "HostMapWidgetDefinition",
    "IFrameWidgetDefinition",
    "ImageWidgetDefinition",
    "ListStreamWidgetDefinition",
    "LogStreamWidgetDefinition",
    "MonitorSummaryWidgetDefinition",
    "NoteWidgetDefinition",
    "PowerpackWidgetDefinition",
    "QueryValueWidgetDefinition",
    "RunWorkflowWidgetDefinition",
    "SLOListWidgetDefinition",
    "SLOWidgetDefinition",
    "ScatterPlotWidgetDefinition",
    "ServiceMapWidgetDefinition",
    "ServiceSummaryWidgetDefinition",
    "SplitGraphWidgetDefinition",
    "SunburstWidgetDefinition",
    "TableWidgetDefinition",
    "TimeseriesWidgetDefinition",
    "ToplistWidgetDefinition",
    "TopologyMapWidgetDefinition",
    "TreeMapWidgetDefinition",
  ],
  WidgetSortOrderBy: ["WidgetFormulaSort", "WidgetGroupSort"],
  WidgetTime: ["WidgetLegacyLiveSpan", "WidgetNewLiveSpan", "WidgetNewFixedSpan"],
};

export class ObjectSerializer {
  public static serialize(data: any, type: string, format: string): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (data instanceof UnparsedObject) {
      return data._data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // We only support homegeneus tuples
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.serialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      if ("string" == typeof data) {
        return data;
      }
      if (format == "date" || format == "date-time") {
        return dateToRFC3339String(data);
      } else {
        return data.toISOString();
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        throw new TypeError(`unknown enum value '${data}'`);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
          } catch (e) {
            logger.debug(`could not serialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length > 1) {
          throw new TypeError(
            `${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        if (oneOfs.length == 0) {
          throw new TypeError(
            `${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`,
          );
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      // get the map for the correct type.
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};

      for (const attributeName in data) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeName === "_unparsed" ||
          attributeName === "additionalProperties"
        ) {
          continue;
        } else if (
          attributeObj === undefined &&
          !("additionalProperties" in attributesMap)
        ) {
          throw new Error(
            "unexpected attribute " + attributeName + " of type " + type,
          );
        } else if (attributeObj) {
          instance[attributeObj.baseName] = ObjectSerializer.serialize(
            data[attributeName],
            attributeObj.type,
            attributeObj.format,
          );
        }
      }

      if (data.additionalProperties) {
        const additionalPropertiesMap = attributesMap["additionalProperties"];
        if (additionalPropertiesMap) {
          for (const key in data.additionalProperties) {
            instance[key] = ObjectSerializer.serialize(
              data.additionalProperties[key],
              additionalPropertiesMap.type,
              additionalPropertiesMap.format,
            );
          }
        } else {
          throw new Error(`additionalProperties found in ${type}`);
        }
      }

      // check for required properties
      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (
          attributeObj?.required &&
          instance[attributeObj.baseName] === undefined
        ) {
          throw new Error(
            `missing required property '${attributeObj.baseName}'`,
          );
        }
      }

      return instance;
    }
  }

  public static deserialize(data: any, type: string, format: string = ""): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      // Assert the passed data is Array type
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1,
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(TUPLE_PREFIX)) {
      // [Type,...] => Type
      const subType: string = type
        .substring(TUPLE_PREFIX.length, type.length - 1)
        .split(", ")[0];
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format),
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3,
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.deserialize(
          data[key],
          subType,
          format,
        );
      }
      return transformedData;
    } else if (type === "Date") {
      try {
        return dateFromRFC3339String(data);
      } catch {
        return new Date(data);
      }
    } else {
      if (enumsMap[type]) {
        if (enumsMap[type].includes(data)) {
          return data;
        }
        return new UnparsedObject(data);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            const d = ObjectSerializer.deserialize(data, oneOf, format);
            if (!d?._unparsed) {
              oneOfs.push(d);
            }
          } catch (e) {
            logger.debug(`could not deserialize ${oneOf} (${e})`);
          }
        }
        if (oneOfs.length != 1) {
          return new UnparsedObject(data);
        }
        return oneOfs[0];
      }

      if (!typeMap[type]) {
        // dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      const instance = new typeMap[type]();
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const attributesBaseNames = Object.keys(attributesMap).reduce(
        (o, key) => Object.assign(o, { [attributesMap[key].baseName]: "" }),
        {},
      );
      const extraAttributes = Object.keys(data).filter(
        (key) =>
          !Object.prototype.hasOwnProperty.call(attributesBaseNames, key),
      );

      if (extraAttributes.length > 0) {
        if ("additionalProperties" in attributesMap) {
          if (!instance.additionalProperties) {
            instance.additionalProperties = {};
          }

          const attributeObj = attributesMap["additionalProperties"];
          for (const key in extraAttributes) {
            instance.additionalProperties[extraAttributes[key]] =
              ObjectSerializer.deserialize(
                data[extraAttributes[key]],
                attributeObj.type,
                attributeObj.format,
              );
          }
        } else {
          throw new Error(
            `found extra attributes '${extraAttributes}' in ${type}`,
          );
        }
      }

      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        if (attributeName === "additionalProperties") {
          continue;
        }

        instance[attributeName] = ObjectSerializer.deserialize(
          data[attributeObj.baseName],
          attributeObj.type,
          attributeObj.format,
        );

        // check for required properties
        if (attributeObj?.required && instance[attributeName] === undefined) {
          throw new Error(`missing required property '${attributeName}'`);
        }

        if (
          instance[attributeName] instanceof UnparsedObject ||
          instance[attributeName]?._unparsed
        ) {
          instance._unparsed = true;
        }

        if (Array.isArray(instance[attributeName])) {
          for (const d of instance[attributeName]) {
            if (d instanceof UnparsedObject || d?._unparsed) {
              instance._unparsed = true;
              break;
            }
          }
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
  public static normalizeMediaType(
    mediaType: string | undefined,
  ): string | undefined {
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
      const supported = supportedMediaTypes[mediaType];
      if (supported !== undefined && supported > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supported;
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error(
        "None of the given media types are supported: " + mediaTypes.join(", "),
      );
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

    throw new Error(
      "The mediaType " +
        mediaType +
        " is not supported by ObjectSerializer.stringify.",
    );
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
