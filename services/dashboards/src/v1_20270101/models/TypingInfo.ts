import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "../../v1/models/APIErrorResponse";
import { AlertGraphWidgetDefinition } from "../../v1/models/AlertGraphWidgetDefinition";
import { AlertValueWidgetDefinition } from "../../v1/models/AlertValueWidgetDefinition";
import { ApmStatsQueryColumnType } from "../../v1/models/ApmStatsQueryColumnType";
import { ApmStatsQueryDefinition } from "../../v1/models/ApmStatsQueryDefinition";
import { BarChartWidgetDefinition } from "../../v1/models/BarChartWidgetDefinition";
import { BarChartWidgetFlat } from "../../v1/models/BarChartWidgetFlat";
import { BarChartWidgetRequest } from "../../v1/models/BarChartWidgetRequest";
import { BarChartWidgetStacked } from "../../v1/models/BarChartWidgetStacked";
import { BarChartWidgetStyle } from "../../v1/models/BarChartWidgetStyle";
import { CalendarInterval } from "../../v1/models/CalendarInterval";
import { ChangeWidgetDefinition } from "../../v1/models/ChangeWidgetDefinition";
import { ChangeWidgetRequest } from "../../v1/models/ChangeWidgetRequest";
import { CheckStatusWidgetDefinition } from "../../v1/models/CheckStatusWidgetDefinition";
import { CohortWidgetDefinition } from "../../v1/models/CohortWidgetDefinition";
import { ComparisonCustomTimeframe } from "../../v1/models/ComparisonCustomTimeframe";
import { ComparisonDuration } from "../../v1/models/ComparisonDuration";
import { Creator } from "../../v1/models/Creator";
import { Dashboard } from "../../v1/models/Dashboard";
import { DashboardBulkActionData } from "../../v1/models/DashboardBulkActionData";
import { DashboardBulkDeleteRequest } from "../../v1/models/DashboardBulkDeleteRequest";
import { DashboardDeleteResponse } from "../../v1/models/DashboardDeleteResponse";
import { DashboardFixedTimeframe } from "../../v1/models/DashboardFixedTimeframe";
import { DashboardGlobalTime } from "../../v1/models/DashboardGlobalTime";
import { DashboardLiveTimeframe } from "../../v1/models/DashboardLiveTimeframe";
import { DashboardRestoreRequest } from "../../v1/models/DashboardRestoreRequest";
import { DashboardSummary } from "./DashboardSummary";
import { DashboardSummaryDefinition } from "./DashboardSummaryDefinition";
import { DashboardTab } from "../../v1/models/DashboardTab";
import { DashboardTemplateVariable } from "../../v1/models/DashboardTemplateVariable";
import { DashboardTemplateVariablePreset } from "../../v1/models/DashboardTemplateVariablePreset";
import { DashboardTemplateVariablePresetValue } from "../../v1/models/DashboardTemplateVariablePresetValue";
import { DataProjectionQuery } from "../../v1/models/DataProjectionQuery";
import { DatasetListQuery } from "../../v1/models/DatasetListQuery";
import { DatasetListQuerySort } from "../../v1/models/DatasetListQuerySort";
import { DatasetListQuerySortField } from "../../v1/models/DatasetListQuerySortField";
import { DeleteSharedDashboardResponse } from "../../v1/models/DeleteSharedDashboardResponse";
import { DistributionWidgetDefinition } from "../../v1/models/DistributionWidgetDefinition";
import { DistributionWidgetRequest } from "../../v1/models/DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "../../v1/models/DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "../../v1/models/DistributionWidgetYAxis";
import { EventQueryDefinition } from "../../v1/models/EventQueryDefinition";
import { EventStreamWidgetDefinition } from "../../v1/models/EventStreamWidgetDefinition";
import { EventTimelineWidgetDefinition } from "../../v1/models/EventTimelineWidgetDefinition";
import { FormulaAndFunctionApmDependencyStatsQueryDefinition } from "../../v1/models/FormulaAndFunctionApmDependencyStatsQueryDefinition";
import { FormulaAndFunctionApmMetricsQueryDefinition } from "../../v1/models/FormulaAndFunctionApmMetricsQueryDefinition";
import { FormulaAndFunctionApmResourceStatsQueryDefinition } from "../../v1/models/FormulaAndFunctionApmResourceStatsQueryDefinition";
import { FormulaAndFunctionCloudCostQueryDefinition } from "../../v1/models/FormulaAndFunctionCloudCostQueryDefinition";
import { FormulaAndFunctionEventQueryDefinition } from "../../v1/models/FormulaAndFunctionEventQueryDefinition";
import { FormulaAndFunctionEventQueryDefinitionCompute } from "../../v1/models/FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryDefinitionSearch } from "../../v1/models/FormulaAndFunctionEventQueryDefinitionSearch";
import { FormulaAndFunctionEventQueryGroupBy } from "../../v1/models/FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventQueryGroupByFields } from "../../v1/models/FormulaAndFunctionEventQueryGroupByFields";
import { FormulaAndFunctionEventQueryGroupBySort } from "../../v1/models/FormulaAndFunctionEventQueryGroupBySort";
import { FormulaAndFunctionMetricQueryDefinition } from "../../v1/models/FormulaAndFunctionMetricQueryDefinition";
import { FormulaAndFunctionProcessQueryDefinition } from "../../v1/models/FormulaAndFunctionProcessQueryDefinition";
import { FormulaAndFunctionProductAnalyticsExtendedQueryDefinition } from "../../v1/models/FormulaAndFunctionProductAnalyticsExtendedQueryDefinition";
import { FormulaAndFunctionRetentionQueryDefinition } from "../../v1/models/FormulaAndFunctionRetentionQueryDefinition";
import { FormulaAndFunctionSLOQueryDefinition } from "../../v1/models/FormulaAndFunctionSLOQueryDefinition";
import { FormulaAndFunctionUserJourneyQueryDefinition } from "../../v1/models/FormulaAndFunctionUserJourneyQueryDefinition";
import { FreeTextWidgetDefinition } from "../../v1/models/FreeTextWidgetDefinition";
import { FunnelComparisonCustomTimeframe } from "../../v1/models/FunnelComparisonCustomTimeframe";
import { FunnelComparisonDuration } from "../../v1/models/FunnelComparisonDuration";
import { FunnelQuery } from "../../v1/models/FunnelQuery";
import { FunnelStep } from "../../v1/models/FunnelStep";
import { FunnelWidgetDefinition } from "../../v1/models/FunnelWidgetDefinition";
import { FunnelWidgetRequest } from "../../v1/models/FunnelWidgetRequest";
import { GeomapWidgetDefinition } from "../../v1/models/GeomapWidgetDefinition";
import { GeomapWidgetDefinitionStyle } from "../../v1/models/GeomapWidgetDefinitionStyle";
import { GeomapWidgetDefinitionView } from "../../v1/models/GeomapWidgetDefinitionView";
import { GeomapWidgetRequest } from "../../v1/models/GeomapWidgetRequest";
import { GeomapWidgetRequestStyle } from "../../v1/models/GeomapWidgetRequestStyle";
import { GroupWidgetDefinition } from "../../v1/models/GroupWidgetDefinition";
import { HeatMapWidgetDefinition } from "../../v1/models/HeatMapWidgetDefinition";
import { HeatMapWidgetRequest } from "../../v1/models/HeatMapWidgetRequest";
import { HeatMapWidgetXAxis } from "../../v1/models/HeatMapWidgetXAxis";
import { HostMapRequest } from "../../v1/models/HostMapRequest";
import { HostMapWidgetDefinition } from "../../v1/models/HostMapWidgetDefinition";
import { HostMapWidgetDefinitionRequests } from "../../v1/models/HostMapWidgetDefinitionRequests";
import { HostMapWidgetDefinitionStyle } from "../../v1/models/HostMapWidgetDefinitionStyle";
import { HostMapWidgetFormula } from "../../v1/models/HostMapWidgetFormula";
import { HostMapWidgetGroupBy } from "../../v1/models/HostMapWidgetGroupBy";
import { HostMapWidgetInfrastructureRequest } from "../../v1/models/HostMapWidgetInfrastructureRequest";
import { HostMapWidgetInfrastructureRequestLeaf } from "../../v1/models/HostMapWidgetInfrastructureRequestLeaf";
import { HostMapWidgetInfrastructureStyle } from "../../v1/models/HostMapWidgetInfrastructureStyle";
import { HostMapWidgetProjection } from "../../v1/models/HostMapWidgetProjection";
import { HostMapWidgetProjectionDimensionMapping } from "../../v1/models/HostMapWidgetProjectionDimensionMapping";
import { HostMapWidgetScalarRequest } from "../../v1/models/HostMapWidgetScalarRequest";
import { IFrameWidgetDefinition } from "../../v1/models/IFrameWidgetDefinition";
import { ImageWidgetDefinition } from "../../v1/models/ImageWidgetDefinition";
import { ListStreamColumn } from "../../v1/models/ListStreamColumn";
import { ListStreamComputeItems } from "../../v1/models/ListStreamComputeItems";
import { ListStreamGroupByItems } from "../../v1/models/ListStreamGroupByItems";
import { ListStreamQuery } from "../../v1/models/ListStreamQuery";
import { ListStreamWidgetDefinition } from "../../v1/models/ListStreamWidgetDefinition";
import { ListStreamWidgetRequest } from "../../v1/models/ListStreamWidgetRequest";
import { LogQueryDefinition } from "../../v1/models/LogQueryDefinition";
import { LogQueryDefinitionGroupBy } from "../../v1/models/LogQueryDefinitionGroupBy";
import { LogQueryDefinitionGroupBySort } from "../../v1/models/LogQueryDefinitionGroupBySort";
import { LogQueryDefinitionSearch } from "../../v1/models/LogQueryDefinitionSearch";
import { LogStreamWidgetDefinition } from "../../v1/models/LogStreamWidgetDefinition";
import { LogsQueryCompute } from "../../v1/models/LogsQueryCompute";
import { MonitorSummaryWidgetDefinition } from "../../v1/models/MonitorSummaryWidgetDefinition";
import { NoteWidgetDefinition } from "../../v1/models/NoteWidgetDefinition";
import { NumberFormatUnitCanonical } from "../../v1/models/NumberFormatUnitCanonical";
import { NumberFormatUnitCustom } from "../../v1/models/NumberFormatUnitCustom";
import { NumberFormatUnitScale } from "../../v1/models/NumberFormatUnitScale";
import { PointPlotProjection } from "../../v1/models/PointPlotProjection";
import { PointPlotProjectionDimension } from "../../v1/models/PointPlotProjectionDimension";
import { PointPlotWidgetDefinition } from "../../v1/models/PointPlotWidgetDefinition";
import { PointPlotWidgetLegend } from "../../v1/models/PointPlotWidgetLegend";
import { PointPlotWidgetRequest } from "../../v1/models/PointPlotWidgetRequest";
import { PowerpackTemplateVariableContents } from "../../v1/models/PowerpackTemplateVariableContents";
import { PowerpackTemplateVariables } from "../../v1/models/PowerpackTemplateVariables";
import { PowerpackWidgetDefinition } from "../../v1/models/PowerpackWidgetDefinition";
import { ProcessQueryDefinition } from "../../v1/models/ProcessQueryDefinition";
import { ProductAnalyticsAudienceAccountSubquery } from "../../v1/models/ProductAnalyticsAudienceAccountSubquery";
import { ProductAnalyticsAudienceFilters } from "../../v1/models/ProductAnalyticsAudienceFilters";
import { ProductAnalyticsAudienceOccurrenceFilter } from "../../v1/models/ProductAnalyticsAudienceOccurrenceFilter";
import { ProductAnalyticsAudienceSegmentSubquery } from "../../v1/models/ProductAnalyticsAudienceSegmentSubquery";
import { ProductAnalyticsAudienceUserSubquery } from "../../v1/models/ProductAnalyticsAudienceUserSubquery";
import { ProductAnalyticsExtendedCompute } from "../../v1/models/ProductAnalyticsExtendedCompute";
import { ProductAnalyticsExtendedGroupBy } from "../../v1/models/ProductAnalyticsExtendedGroupBy";
import { ProductAnalyticsFunnelCompute } from "../../v1/models/ProductAnalyticsFunnelCompute";
import { ProductAnalyticsFunnelGroupBy } from "../../v1/models/ProductAnalyticsFunnelGroupBy";
import { ProductAnalyticsFunnelGroupBySort } from "../../v1/models/ProductAnalyticsFunnelGroupBySort";
import { ProductAnalyticsFunnelQuery } from "../../v1/models/ProductAnalyticsFunnelQuery";
import { ProductAnalyticsFunnelRequest } from "../../v1/models/ProductAnalyticsFunnelRequest";
import { ProductAnalyticsFunnelWidgetDefinition } from "../../v1/models/ProductAnalyticsFunnelWidgetDefinition";
import { QueryValueWidgetComparison } from "../../v1/models/QueryValueWidgetComparison";
import { QueryValueWidgetDefinition } from "../../v1/models/QueryValueWidgetDefinition";
import { QueryValueWidgetRequest } from "../../v1/models/QueryValueWidgetRequest";
import { RetentionCohortCriteria } from "../../v1/models/RetentionCohortCriteria";
import { RetentionCohortCriteriaTimeInterval } from "../../v1/models/RetentionCohortCriteriaTimeInterval";
import { RetentionCompute } from "../../v1/models/RetentionCompute";
import { RetentionCurveStyle } from "../../v1/models/RetentionCurveStyle";
import { RetentionCurveWidgetDefinition } from "../../v1/models/RetentionCurveWidgetDefinition";
import { RetentionCurveWidgetRequest } from "../../v1/models/RetentionCurveWidgetRequest";
import { RetentionFilters } from "../../v1/models/RetentionFilters";
import { RetentionGridRequest } from "../../v1/models/RetentionGridRequest";
import { RetentionGroupBy } from "../../v1/models/RetentionGroupBy";
import { RetentionGroupBySort } from "../../v1/models/RetentionGroupBySort";
import { RetentionQuery } from "../../v1/models/RetentionQuery";
import { RetentionReturnCriteria } from "../../v1/models/RetentionReturnCriteria";
import { RetentionReturnCriteriaTimeInterval } from "../../v1/models/RetentionReturnCriteriaTimeInterval";
import { RetentionSearch } from "../../v1/models/RetentionSearch";
import { RunWorkflowWidgetDefinition } from "../../v1/models/RunWorkflowWidgetDefinition";
import { RunWorkflowWidgetInput } from "../../v1/models/RunWorkflowWidgetInput";
import { SLOListWidgetDefinition } from "../../v1/models/SLOListWidgetDefinition";
import { SLOListWidgetQuery } from "../../v1/models/SLOListWidgetQuery";
import { SLOListWidgetRequest } from "../../v1/models/SLOListWidgetRequest";
import { SLOWidgetDefinition } from "../../v1/models/SLOWidgetDefinition";
import { SankeyJoinKeys } from "../../v1/models/SankeyJoinKeys";
import { SankeyNetworkQuery } from "../../v1/models/SankeyNetworkQuery";
import { SankeyNetworkQueryCompute } from "../../v1/models/SankeyNetworkQueryCompute";
import { SankeyNetworkQuerySort } from "../../v1/models/SankeyNetworkQuerySort";
import { SankeyNetworkRequest } from "../../v1/models/SankeyNetworkRequest";
import { SankeyRumQuery } from "../../v1/models/SankeyRumQuery";
import { SankeyRumRequest } from "../../v1/models/SankeyRumRequest";
import { SankeyWidgetDefinition } from "../../v1/models/SankeyWidgetDefinition";
import { ScatterPlotRequest } from "../../v1/models/ScatterPlotRequest";
import { ScatterPlotWidgetDefinition } from "../../v1/models/ScatterPlotWidgetDefinition";
import { ScatterPlotWidgetDefinitionRequests } from "../../v1/models/ScatterPlotWidgetDefinitionRequests";
import { ScatterplotTableRequest } from "../../v1/models/ScatterplotTableRequest";
import { ScatterplotWidgetFormula } from "../../v1/models/ScatterplotWidgetFormula";
import { SelectableTemplateVariableItems } from "../../v1/models/SelectableTemplateVariableItems";
import { ServiceMapWidgetDefinition } from "../../v1/models/ServiceMapWidgetDefinition";
import { ServiceSummaryWidgetDefinition } from "../../v1/models/ServiceSummaryWidgetDefinition";
import { SharedDashboard } from "../../v1/models/SharedDashboard";
import { SharedDashboardAuthor } from "../../v1/models/SharedDashboardAuthor";
import { SharedDashboardInviteesItems } from "../../v1/models/SharedDashboardInviteesItems";
import { SharedDashboardInvites } from "../../v1/models/SharedDashboardInvites";
import { SharedDashboardInvitesDataObject } from "../../v1/models/SharedDashboardInvitesDataObject";
import { SharedDashboardInvitesDataObjectAttributes } from "../../v1/models/SharedDashboardInvitesDataObjectAttributes";
import { SharedDashboardInvitesMeta } from "../../v1/models/SharedDashboardInvitesMeta";
import { SharedDashboardInvitesMetaPage } from "../../v1/models/SharedDashboardInvitesMetaPage";
import { SharedDashboardUpdateRequest } from "../../v1/models/SharedDashboardUpdateRequest";
import { SharedDashboardUpdateRequestGlobalTime } from "../../v1/models/SharedDashboardUpdateRequestGlobalTime";
import { SplitConfig } from "../../v1/models/SplitConfig";
import { SplitConfigSortCompute } from "../../v1/models/SplitConfigSortCompute";
import { SplitDimension } from "../../v1/models/SplitDimension";
import { SplitGraphWidgetDefinition } from "../../v1/models/SplitGraphWidgetDefinition";
import { SplitSort } from "../../v1/models/SplitSort";
import { SplitVectorEntryItem } from "../../v1/models/SplitVectorEntryItem";
import { SunburstWidgetDefinition } from "../../v1/models/SunburstWidgetDefinition";
import { SunburstWidgetLegendInlineAutomatic } from "../../v1/models/SunburstWidgetLegendInlineAutomatic";
import { SunburstWidgetLegendTable } from "../../v1/models/SunburstWidgetLegendTable";
import { SunburstWidgetRequest } from "../../v1/models/SunburstWidgetRequest";
import { TableWidgetDefinition } from "../../v1/models/TableWidgetDefinition";
import { TableWidgetRequest } from "../../v1/models/TableWidgetRequest";
import { TableWidgetTextFormatMatch } from "../../v1/models/TableWidgetTextFormatMatch";
import { TableWidgetTextFormatReplaceAll } from "../../v1/models/TableWidgetTextFormatReplaceAll";
import { TableWidgetTextFormatReplaceSubstring } from "../../v1/models/TableWidgetTextFormatReplaceSubstring";
import { TableWidgetTextFormatRule } from "../../v1/models/TableWidgetTextFormatRule";
import { TimeseriesBackground } from "../../v1/models/TimeseriesBackground";
import { TimeseriesRequestStyle } from "../../v1/models/TimeseriesRequestStyle";
import { TimeseriesWidgetDefinition } from "../../v1/models/TimeseriesWidgetDefinition";
import { TimeseriesWidgetExpressionAlias } from "../../v1/models/TimeseriesWidgetExpressionAlias";
import { TimeseriesWidgetRequest } from "../../v1/models/TimeseriesWidgetRequest";
import { ToplistWidgetDefinition } from "../../v1/models/ToplistWidgetDefinition";
import { ToplistWidgetFlat } from "../../v1/models/ToplistWidgetFlat";
import { ToplistWidgetRequest } from "../../v1/models/ToplistWidgetRequest";
import { ToplistWidgetStacked } from "../../v1/models/ToplistWidgetStacked";
import { ToplistWidgetStyle } from "../../v1/models/ToplistWidgetStyle";
import { TopologyMapWidgetDefinitionDataStreams } from "../../v1/models/TopologyMapWidgetDefinitionDataStreams";
import { TopologyMapWidgetDefinitionServiceMap } from "../../v1/models/TopologyMapWidgetDefinitionServiceMap";
import { TopologyQueryDataStreams } from "../../v1/models/TopologyQueryDataStreams";
import { TopologyQueryServiceMap } from "../../v1/models/TopologyQueryServiceMap";
import { TopologyRequestDataStreams } from "../../v1/models/TopologyRequestDataStreams";
import { TopologyRequestServiceMap } from "../../v1/models/TopologyRequestServiceMap";
import { TreeMapWidgetDefinition } from "../../v1/models/TreeMapWidgetDefinition";
import { TreeMapWidgetRequest } from "../../v1/models/TreeMapWidgetRequest";
import { UserJourneyFormulaCompute } from "../../v1/models/UserJourneyFormulaCompute";
import { UserJourneyFormulaGroupBy } from "../../v1/models/UserJourneyFormulaGroupBy";
import { UserJourneyJoinKeys } from "../../v1/models/UserJourneyJoinKeys";
import { UserJourneySearch } from "../../v1/models/UserJourneySearch";
import { UserJourneySearchFilters } from "../../v1/models/UserJourneySearchFilters";
import { UserJourneySearchGraphFilter } from "../../v1/models/UserJourneySearchGraphFilter";
import { UserJourneySearchTarget } from "../../v1/models/UserJourneySearchTarget";
import { ViewingPreferences } from "../../v1/models/ViewingPreferences";
import { Widget } from "../../v1/models/Widget";
import { WidgetAxis } from "../../v1/models/WidgetAxis";
import { WidgetConditionalFormat } from "../../v1/models/WidgetConditionalFormat";
import { WidgetCustomLink } from "../../v1/models/WidgetCustomLink";
import { WidgetEvent } from "../../v1/models/WidgetEvent";
import { WidgetFieldSort } from "../../v1/models/WidgetFieldSort";
import { WidgetFormula } from "../../v1/models/WidgetFormula";
import { WidgetFormulaCellDisplayModeOptions } from "../../v1/models/WidgetFormulaCellDisplayModeOptions";
import { WidgetFormulaLimit } from "../../v1/models/WidgetFormulaLimit";
import { WidgetFormulaSort } from "../../v1/models/WidgetFormulaSort";
import { WidgetFormulaStyle } from "../../v1/models/WidgetFormulaStyle";
import { WidgetGroupSort } from "../../v1/models/WidgetGroupSort";
import { WidgetLayout } from "../../v1/models/WidgetLayout";
import { WidgetLegacyLiveSpan } from "../../v1/models/WidgetLegacyLiveSpan";
import { WidgetMarker } from "../../v1/models/WidgetMarker";
import { WidgetNewFixedSpan } from "../../v1/models/WidgetNewFixedSpan";
import { WidgetNewLiveSpan } from "../../v1/models/WidgetNewLiveSpan";
import { WidgetNumberFormat } from "../../v1/models/WidgetNumberFormat";
import { WidgetRequestStyle } from "../../v1/models/WidgetRequestStyle";
import { WidgetSortBy } from "../../v1/models/WidgetSortBy";
import { WidgetStyle } from "../../v1/models/WidgetStyle";
import { WildcardWidgetDefinition } from "../../v1/models/WildcardWidgetDefinition";
import { WildcardWidgetSpecification } from "../../v1/models/WildcardWidgetSpecification";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AlertGraphWidgetDefinitionType: ["alert_graph"],
    AlertValueWidgetDefinitionType: ["alert_value"],
    ApmStatsQueryRowType: ["service", "resource", "span"],
    BarChartWidgetDefinitionType: ["bar_chart"],
    BarChartWidgetFlatType: ["flat"],
    BarChartWidgetLegend: ["automatic", "inline", "none"],
    BarChartWidgetScaling: ["absolute", "relative"],
    BarChartWidgetStackedType: ["stacked"],
    CalendarIntervalType: [
      "day",
      "week",
      "month",
      "year",
      "quarter",
      "minute",
      "hour",
    ],
    ChangeWidgetDefinitionType: ["change"],
    CheckStatusWidgetDefinitionType: ["check_status"],
    CohortWidgetDefinitionType: ["cohort"],
    ComparisonDurationType: [
      "previous_timeframe",
      "custom_timeframe",
      "previous_day",
      "previous_week",
      "previous_month",
    ],
    DashboardFixedTimeframeType: ["fixed"],
    DashboardGlobalTimeLiveSpan: [
      "15m",
      "1h",
      "4h",
      "1d",
      "2d",
      "1w",
      "1mo",
      "3mo",
    ],
    DashboardInviteType: ["public_dashboard_invitation"],
    DashboardLayoutType: ["ordered", "free"],
    DashboardLiveTimeframeType: ["live"],
    DashboardReflowType: ["auto", "fixed"],
    DashboardResourceType: ["dashboard"],
    DashboardShareType: ["open", "invite", "embed"],
    DashboardType: ["custom_timeboard", "custom_screenboard"],
    DataProjectionRequestType: ["data_projection"],
    DatasetListQueryDataSourceType: ["dataset"],
    DistributionWidgetDefinitionType: ["distribution"],
    EventStreamWidgetDefinitionType: ["event_stream"],
    EventTimelineWidgetDefinitionType: ["event_timeline"],
    EventsAggregationValue: [
      "avg",
      "cardinality",
      "count",
      "delta",
      "earliest",
      "latest",
      "max",
      "median",
      "min",
      "most_frequent",
      "sum",
    ],
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
    FormulaAndFunctionApmMetricStatName: [
      "errors",
      "error_rate",
      "errors_per_second",
      "latency_avg",
      "latency_max",
      "latency_p50",
      "latency_p75",
      "latency_p90",
      "latency_p95",
      "latency_p99",
      "latency_p999",
      "latency_distribution",
      "hits",
      "hits_per_second",
      "total_time",
      "apdex",
    ],
    FormulaAndFunctionApmMetricsDataSource: ["apm_metrics"],
    FormulaAndFunctionApmMetricsSpanKind: [
      "consumer",
      "server",
      "client",
      "producer",
      "internal",
    ],
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
      "product_analytics",
      "on_call_events",
      "errors",
      "llm_observability",
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
    FormulaAndFunctionMetricSemanticMode: ["combined", "native"],
    FormulaAndFunctionProcessQueryDataSource: ["process", "container"],
    FormulaAndFunctionProductAnalyticsExtendedDataSource: [
      "product_analytics_extended",
    ],
    FormulaAndFunctionProductAnalyticsExtendedQueryDefinitionIndexesItems: [
      "*",
    ],
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
    FreeTextWidgetDefinitionType: ["free_text"],
    FunnelComparisonDurationType: [
      "previous_timeframe",
      "custom_timeframe",
      "previous_day",
      "previous_week",
      "previous_month",
    ],
    FunnelGroupedDisplay: ["stacked", "side_by_side"],
    FunnelRequestType: ["funnel"],
    FunnelSource: ["rum"],
    FunnelWidgetDefinitionType: ["funnel"],
    GeomapWidgetDefinitionType: ["geomap"],
    GroupType: ["group"],
    GroupWidgetDefinitionType: ["group"],
    HeatMapWidgetDefinitionType: ["heatmap"],
    HostMapWidgetDefinitionRequestType: [
      "infrastructure_hostmap",
      "data_projection",
    ],
    HostMapWidgetDefinitionType: ["hostmap"],
    HostMapWidgetDimension: ["node", "fill", "size", "group"],
    HostMapWidgetInfrastructureRequestRequestType: ["infrastructure_hostmap"],
    HostMapWidgetNodeType: ["host", "container", "pod", "cluster"],
    HostMapWidgetProjectionType: ["hostmap"],
    HostMapWidgetScalarRequestResponseFormat: ["scalar"],
    IFrameWidgetDefinitionType: ["iframe"],
    ImageWidgetDefinitionType: ["image"],
    ListStreamColumnWidth: ["auto", "compact", "full"],
    ListStreamComputeAggregation: [
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
      "earliest",
      "latest",
      "most_frequent",
    ],
    ListStreamIssuePersona: ["all", "browser", "mobile", "backend"],
    ListStreamIssueState: ["OPEN", "IGNORED", "ACKNOWLEDGED", "RESOLVED"],
    ListStreamQueryVersion: ["sequential_query"],
    ListStreamResponseFormat: ["event_list"],
    ListStreamSource: [
      "logs_stream",
      "audit_stream",
      "ci_pipeline_stream",
      "ci_test_stream",
      "rum_issue_stream",
      "apm_issue_stream",
      "trace_stream",
      "logs_issue_stream",
      "logs_pattern_stream",
      "logs_transaction_stream",
      "event_stream",
      "rum_stream",
      "llm_observability_stream",
      "issue_stream",
      "security_runtime_stream",
      "security_signals_stream",
      "incidents_stream",
    ],
    ListStreamWidgetDefinitionType: ["list_stream"],
    LogStreamWidgetDefinitionType: ["log_stream"],
    MonitorSummaryWidgetDefinitionType: ["manage_status"],
    NoteWidgetDefinitionType: ["note"],
    NumberFormatUnitCustomType: ["custom_unit_label"],
    NumberFormatUnitScaleType: ["canonical_unit"],
    PointPlotDimension: ["group", "time", "y", "radius"],
    PointPlotProjectionType: ["point_plot"],
    PointPlotWidgetDefinitionType: ["point_plot"],
    PointPlotWidgetLegendType: ["automatic", "none"],
    PowerpackWidgetDefinitionType: ["powerpack"],
    ProductAnalyticsFunnelComputeAggregation: ["cardinality", "count"],
    ProductAnalyticsFunnelComputeMetric: [
      "__dd.conversion",
      "__dd.conversion_rate",
    ],
    ProductAnalyticsFunnelDataSource: ["product_analytics_journey"],
    ProductAnalyticsFunnelRequestType: ["user_journey_funnel"],
    PublishedDatasetProvider: ["ddsql_query"],
    QuerySortOrder: ["asc", "desc"],
    QueryValueWidgetComparisonDirectionality: [
      "increase_better",
      "decrease_better",
      "neutral",
    ],
    QueryValueWidgetComparisonType: ["absolute", "relative", "both"],
    QueryValueWidgetDefinitionType: ["query_value"],
    RetentionCohortCriteriaTimeIntervalType: ["calendar"],
    RetentionComputeMetric: ["__dd.retention", "__dd.retention_rate"],
    RetentionCurveRequestType: ["retention_curve"],
    RetentionCurveWidgetDefinitionType: ["retention_curve"],
    RetentionDataSource: ["product_analytics_retention"],
    RetentionEntity: ["@usr.id", "@account.id"],
    RetentionGridRequestType: ["retention_grid"],
    RetentionGroupByTarget: ["cohort", "return_period"],
    RetentionReturnCondition: ["conversion_on", "conversion_on_or_after"],
    RetentionReturnCriteriaTimeIntervalType: ["fixed"],
    RetentionReturnCriteriaTimeIntervalUnit: ["day", "week", "month"],
    RunWorkflowWidgetDefinitionType: ["run_workflow"],
    SLOListWidgetDefinitionType: ["slo_list"],
    SLOListWidgetRequestType: ["slo_list"],
    SLOWidgetDefinitionType: ["slo"],
    SankeyNetworkDataSource: ["network_device_flows", "network"],
    SankeyNetworkQueryMode: ["target"],
    SankeyNetworkRequestType: ["netflow_sankey"],
    SankeyRumDataSource: ["rum", "product_analytics"],
    SankeyRumQueryMode: ["source", "target"],
    SankeyWidgetDefinitionType: ["sankey"],
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
    TableWidgetTextFormatMatchType: [
      "is",
      "is_not",
      "contains",
      "does_not_contain",
      "starts_with",
      "ends_with",
    ],
    TableWidgetTextFormatPalette: [
      "white_on_red",
      "white_on_yellow",
      "white_on_green",
      "black_on_light_red",
      "black_on_light_yellow",
      "black_on_light_green",
      "red_on_white",
      "yellow_on_white",
      "green_on_white",
      "custom_bg",
      "custom_text",
    ],
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
    TopologyQueryDataStreamsDataSource: ["data_streams"],
    TopologyQueryServiceMapDataSource: ["service_map"],
    TopologyRequestType: ["topology"],
    TreeMapColorBy: ["user"],
    TreeMapGroupBy: ["user", "family", "process"],
    TreeMapSizeBy: ["pct_cpu", "pct_mem"],
    TreeMapWidgetDefinitionType: ["treemap"],
    UserJourneyFormulaComputeMetric: [
      "__dd.conversion",
      "__dd.conversion_rate",
      "__dd.time_to_convert",
    ],
    ViewingPreferencesTheme: ["system", "light", "dark"],
    WidgetAggregator: ["avg", "last", "max", "min", "sum", "percentile"],
    WidgetChangeType: ["absolute", "relative"],
    WidgetColorPreference: ["background", "text"],
    WidgetComparator: ["=", ">", ">=", "<", "<="],
    WidgetCompareTo: [
      "hour_before",
      "day_before",
      "week_before",
      "month_before",
    ],
    WidgetDisplayType: ["area", "bars", "line", "overlay"],
    WidgetEventSize: ["s", "l"],
    WidgetFormulaCellDisplayModeOptionsTrendType: ["area", "line", "bars"],
    WidgetFormulaCellDisplayModeOptionsYScale: ["shared", "independent"],
    WidgetGrouping: ["check", "cluster"],
    WidgetHistogramRequestType: ["histogram"],
    WidgetHorizontalAlign: ["center", "left", "right"],
    WidgetImageSizing: [
      "fill",
      "contain",
      "cover",
      "none",
      "scale-down",
      "zoom",
      "fit",
      "center",
    ],
    WidgetLayoutType: ["ordered"],
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
    WidgetMargin: ["sm", "md", "lg", "small", "large"],
    WidgetMessageDisplay: ["inline", "expanded-md", "expanded-lg"],
    WidgetMonitorSummaryDisplayFormat: ["counts", "countsAndList", "list"],
    WidgetMonitorSummarySort: [
      "name",
      "group",
      "status",
      "tags",
      "triggered",
      "group,asc",
      "group,desc",
      "name,asc",
      "name,desc",
      "status,asc",
      "status,desc",
      "tags,asc",
      "tags,desc",
      "triggered,asc",
      "triggered,desc",
      "priority,asc",
      "priority,desc",
    ],
    WidgetNewFixedSpanType: ["fixed"],
    WidgetNewLiveSpanType: ["live"],
    WidgetNodeType: ["host", "container"],
    WidgetOrderBy: ["change", "name", "present", "past"],
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
    WidgetServiceSummaryDisplayFormat: [
      "one_column",
      "two_column",
      "three_column",
    ],
    WidgetSizeFormat: ["small", "medium", "large"],
    WidgetSort: ["asc", "desc"],
    WidgetStyleOrderBy: ["tags", "values"],
    WidgetSummaryType: ["monitors", "groups", "combined"],
    WidgetTextAlign: ["center", "left", "right"],
    WidgetTickEdge: ["bottom", "left", "right", "top"],
    WidgetTimeWindows: [
      "7d",
      "30d",
      "90d",
      "week_to_date",
      "previous_week",
      "month_to_date",
      "previous_month",
      "global_time",
    ],
    WidgetVerticalAlign: ["center", "top", "bottom"],
    WidgetViewMode: ["overall", "component", "both"],
    WidgetVizType: ["timeseries", "toplist"],
    WildcardWidgetDefinitionType: ["wildcard"],
    WildcardWidgetSpecificationType: ["vega", "vega-lite"],
  },
  oneOfMap: {
    BarChartWidgetDisplay: ["BarChartWidgetStacked", "BarChartWidgetFlat"],
    DashboardDefaultTimeframeSetting: [
      "DashboardLiveTimeframe",
      "DashboardFixedTimeframe",
    ],
    DashboardSummaryID: ["string", "number"],
    DistributionWidgetHistogramRequestQuery: [
      "FormulaAndFunctionMetricQueryDefinition",
      "FormulaAndFunctionEventQueryDefinition",
      "FormulaAndFunctionApmResourceStatsQueryDefinition",
      "FormulaAndFunctionApmMetricsQueryDefinition",
    ],
    EventsAggregation: ["EventsAggregationValue", "string"],
    FormulaAndFunctionEventQueryGroupByConfig: [
      "Array<FormulaAndFunctionEventQueryGroupBy>",
      "FormulaAndFunctionEventQueryGroupByFields",
    ],
    FormulaAndFunctionQueryDefinition: [
      "FormulaAndFunctionMetricQueryDefinition",
      "FormulaAndFunctionEventQueryDefinition",
      "FormulaAndFunctionProcessQueryDefinition",
      "FormulaAndFunctionApmDependencyStatsQueryDefinition",
      "FormulaAndFunctionApmResourceStatsQueryDefinition",
      "FormulaAndFunctionApmMetricsQueryDefinition",
      "FormulaAndFunctionSLOQueryDefinition",
      "FormulaAndFunctionCloudCostQueryDefinition",
      "FormulaAndFunctionProductAnalyticsExtendedQueryDefinition",
      "FormulaAndFunctionUserJourneyQueryDefinition",
      "FormulaAndFunctionRetentionQueryDefinition",
    ],
    NumberFormatUnit: ["NumberFormatUnitCanonical", "NumberFormatUnitCustom"],
    SankeyWidgetRequest: ["SankeyRumRequest", "SankeyNetworkRequest"],
    SharedDashboardInvitesData: [
      "SharedDashboardInvitesDataObject",
      "Array<SharedDashboardInvitesDataObject>",
    ],
    SplitGraphSourceWidgetDefinition: [
      "BarChartWidgetDefinition",
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
    TopologyMapWidgetDefinition: [
      "TopologyMapWidgetDefinitionDataStreams",
      "TopologyMapWidgetDefinitionServiceMap",
    ],
    WidgetDefinition: [
      "AlertGraphWidgetDefinition",
      "AlertValueWidgetDefinition",
      "BarChartWidgetDefinition",
      "ChangeWidgetDefinition",
      "CheckStatusWidgetDefinition",
      "CohortWidgetDefinition",
      "DistributionWidgetDefinition",
      "EventStreamWidgetDefinition",
      "EventTimelineWidgetDefinition",
      "FreeTextWidgetDefinition",
      "FunnelWidgetDefinition",
      "ProductAnalyticsFunnelWidgetDefinition",
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
      "PointPlotWidgetDefinition",
      "QueryValueWidgetDefinition",
      "RetentionCurveWidgetDefinition",
      "RunWorkflowWidgetDefinition",
      "SLOListWidgetDefinition",
      "SLOWidgetDefinition",
      "ScatterPlotWidgetDefinition",
      "SankeyWidgetDefinition",
      "ServiceMapWidgetDefinition",
      "ServiceSummaryWidgetDefinition",
      "SplitGraphWidgetDefinition",
      "SunburstWidgetDefinition",
      "TableWidgetDefinition",
      "TimeseriesWidgetDefinition",
      "ToplistWidgetDefinition",
      "TopologyMapWidgetDefinition",
      "TreeMapWidgetDefinition",
      "WildcardWidgetDefinition",
    ],
    WidgetSortOrderBy: ["WidgetFormulaSort", "WidgetGroupSort"],
    WidgetTime: [
      "WidgetLegacyLiveSpan",
      "WidgetNewLiveSpan",
      "WidgetNewFixedSpan",
    ],
    WildcardWidgetRequest: [
      "TreeMapWidgetRequest",
      "TimeseriesWidgetRequest",
      "ListStreamWidgetRequest",
      "DistributionWidgetRequest",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AlertGraphWidgetDefinition: AlertGraphWidgetDefinition,
    AlertValueWidgetDefinition: AlertValueWidgetDefinition,
    ApmStatsQueryColumnType: ApmStatsQueryColumnType,
    ApmStatsQueryDefinition: ApmStatsQueryDefinition,
    BarChartWidgetDefinition: BarChartWidgetDefinition,
    BarChartWidgetFlat: BarChartWidgetFlat,
    BarChartWidgetRequest: BarChartWidgetRequest,
    BarChartWidgetStacked: BarChartWidgetStacked,
    BarChartWidgetStyle: BarChartWidgetStyle,
    CalendarInterval: CalendarInterval,
    ChangeWidgetDefinition: ChangeWidgetDefinition,
    ChangeWidgetRequest: ChangeWidgetRequest,
    CheckStatusWidgetDefinition: CheckStatusWidgetDefinition,
    CohortWidgetDefinition: CohortWidgetDefinition,
    ComparisonCustomTimeframe: ComparisonCustomTimeframe,
    ComparisonDuration: ComparisonDuration,
    Creator: Creator,
    Dashboard: Dashboard,
    DashboardBulkActionData: DashboardBulkActionData,
    DashboardBulkDeleteRequest: DashboardBulkDeleteRequest,
    DashboardDeleteResponse: DashboardDeleteResponse,
    DashboardFixedTimeframe: DashboardFixedTimeframe,
    DashboardGlobalTime: DashboardGlobalTime,
    DashboardLiveTimeframe: DashboardLiveTimeframe,
    DashboardRestoreRequest: DashboardRestoreRequest,
    DashboardSummary: DashboardSummary,
    DashboardSummaryDefinition: DashboardSummaryDefinition,
    DashboardTab: DashboardTab,
    DashboardTemplateVariable: DashboardTemplateVariable,
    DashboardTemplateVariablePreset: DashboardTemplateVariablePreset,
    DashboardTemplateVariablePresetValue: DashboardTemplateVariablePresetValue,
    DataProjectionQuery: DataProjectionQuery,
    DatasetListQuery: DatasetListQuery,
    DatasetListQuerySort: DatasetListQuerySort,
    DatasetListQuerySortField: DatasetListQuerySortField,
    DeleteSharedDashboardResponse: DeleteSharedDashboardResponse,
    DistributionWidgetDefinition: DistributionWidgetDefinition,
    DistributionWidgetRequest: DistributionWidgetRequest,
    DistributionWidgetXAxis: DistributionWidgetXAxis,
    DistributionWidgetYAxis: DistributionWidgetYAxis,
    EventQueryDefinition: EventQueryDefinition,
    EventStreamWidgetDefinition: EventStreamWidgetDefinition,
    EventTimelineWidgetDefinition: EventTimelineWidgetDefinition,
    FormulaAndFunctionApmDependencyStatsQueryDefinition:
      FormulaAndFunctionApmDependencyStatsQueryDefinition,
    FormulaAndFunctionApmMetricsQueryDefinition:
      FormulaAndFunctionApmMetricsQueryDefinition,
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
    FormulaAndFunctionEventQueryGroupByFields:
      FormulaAndFunctionEventQueryGroupByFields,
    FormulaAndFunctionEventQueryGroupBySort:
      FormulaAndFunctionEventQueryGroupBySort,
    FormulaAndFunctionMetricQueryDefinition:
      FormulaAndFunctionMetricQueryDefinition,
    FormulaAndFunctionProcessQueryDefinition:
      FormulaAndFunctionProcessQueryDefinition,
    FormulaAndFunctionProductAnalyticsExtendedQueryDefinition:
      FormulaAndFunctionProductAnalyticsExtendedQueryDefinition,
    FormulaAndFunctionRetentionQueryDefinition:
      FormulaAndFunctionRetentionQueryDefinition,
    FormulaAndFunctionSLOQueryDefinition: FormulaAndFunctionSLOQueryDefinition,
    FormulaAndFunctionUserJourneyQueryDefinition:
      FormulaAndFunctionUserJourneyQueryDefinition,
    FreeTextWidgetDefinition: FreeTextWidgetDefinition,
    FunnelComparisonCustomTimeframe: FunnelComparisonCustomTimeframe,
    FunnelComparisonDuration: FunnelComparisonDuration,
    FunnelQuery: FunnelQuery,
    FunnelStep: FunnelStep,
    FunnelWidgetDefinition: FunnelWidgetDefinition,
    FunnelWidgetRequest: FunnelWidgetRequest,
    GeomapWidgetDefinition: GeomapWidgetDefinition,
    GeomapWidgetDefinitionStyle: GeomapWidgetDefinitionStyle,
    GeomapWidgetDefinitionView: GeomapWidgetDefinitionView,
    GeomapWidgetRequest: GeomapWidgetRequest,
    GeomapWidgetRequestStyle: GeomapWidgetRequestStyle,
    GroupWidgetDefinition: GroupWidgetDefinition,
    HeatMapWidgetDefinition: HeatMapWidgetDefinition,
    HeatMapWidgetRequest: HeatMapWidgetRequest,
    HeatMapWidgetXAxis: HeatMapWidgetXAxis,
    HostMapRequest: HostMapRequest,
    HostMapWidgetDefinition: HostMapWidgetDefinition,
    HostMapWidgetDefinitionRequests: HostMapWidgetDefinitionRequests,
    HostMapWidgetDefinitionStyle: HostMapWidgetDefinitionStyle,
    HostMapWidgetFormula: HostMapWidgetFormula,
    HostMapWidgetGroupBy: HostMapWidgetGroupBy,
    HostMapWidgetInfrastructureRequest: HostMapWidgetInfrastructureRequest,
    HostMapWidgetInfrastructureRequestLeaf:
      HostMapWidgetInfrastructureRequestLeaf,
    HostMapWidgetInfrastructureStyle: HostMapWidgetInfrastructureStyle,
    HostMapWidgetProjection: HostMapWidgetProjection,
    HostMapWidgetProjectionDimensionMapping:
      HostMapWidgetProjectionDimensionMapping,
    HostMapWidgetScalarRequest: HostMapWidgetScalarRequest,
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
    PointPlotProjection: PointPlotProjection,
    PointPlotProjectionDimension: PointPlotProjectionDimension,
    PointPlotWidgetDefinition: PointPlotWidgetDefinition,
    PointPlotWidgetLegend: PointPlotWidgetLegend,
    PointPlotWidgetRequest: PointPlotWidgetRequest,
    PowerpackTemplateVariableContents: PowerpackTemplateVariableContents,
    PowerpackTemplateVariables: PowerpackTemplateVariables,
    PowerpackWidgetDefinition: PowerpackWidgetDefinition,
    ProcessQueryDefinition: ProcessQueryDefinition,
    ProductAnalyticsAudienceAccountSubquery:
      ProductAnalyticsAudienceAccountSubquery,
    ProductAnalyticsAudienceFilters: ProductAnalyticsAudienceFilters,
    ProductAnalyticsAudienceOccurrenceFilter:
      ProductAnalyticsAudienceOccurrenceFilter,
    ProductAnalyticsAudienceSegmentSubquery:
      ProductAnalyticsAudienceSegmentSubquery,
    ProductAnalyticsAudienceUserSubquery: ProductAnalyticsAudienceUserSubquery,
    ProductAnalyticsExtendedCompute: ProductAnalyticsExtendedCompute,
    ProductAnalyticsExtendedGroupBy: ProductAnalyticsExtendedGroupBy,
    ProductAnalyticsFunnelCompute: ProductAnalyticsFunnelCompute,
    ProductAnalyticsFunnelGroupBy: ProductAnalyticsFunnelGroupBy,
    ProductAnalyticsFunnelGroupBySort: ProductAnalyticsFunnelGroupBySort,
    ProductAnalyticsFunnelQuery: ProductAnalyticsFunnelQuery,
    ProductAnalyticsFunnelRequest: ProductAnalyticsFunnelRequest,
    ProductAnalyticsFunnelWidgetDefinition:
      ProductAnalyticsFunnelWidgetDefinition,
    QueryValueWidgetComparison: QueryValueWidgetComparison,
    QueryValueWidgetDefinition: QueryValueWidgetDefinition,
    QueryValueWidgetRequest: QueryValueWidgetRequest,
    RetentionCohortCriteria: RetentionCohortCriteria,
    RetentionCohortCriteriaTimeInterval: RetentionCohortCriteriaTimeInterval,
    RetentionCompute: RetentionCompute,
    RetentionCurveStyle: RetentionCurveStyle,
    RetentionCurveWidgetDefinition: RetentionCurveWidgetDefinition,
    RetentionCurveWidgetRequest: RetentionCurveWidgetRequest,
    RetentionFilters: RetentionFilters,
    RetentionGridRequest: RetentionGridRequest,
    RetentionGroupBy: RetentionGroupBy,
    RetentionGroupBySort: RetentionGroupBySort,
    RetentionQuery: RetentionQuery,
    RetentionReturnCriteria: RetentionReturnCriteria,
    RetentionReturnCriteriaTimeInterval: RetentionReturnCriteriaTimeInterval,
    RetentionSearch: RetentionSearch,
    RunWorkflowWidgetDefinition: RunWorkflowWidgetDefinition,
    RunWorkflowWidgetInput: RunWorkflowWidgetInput,
    SLOListWidgetDefinition: SLOListWidgetDefinition,
    SLOListWidgetQuery: SLOListWidgetQuery,
    SLOListWidgetRequest: SLOListWidgetRequest,
    SLOWidgetDefinition: SLOWidgetDefinition,
    SankeyJoinKeys: SankeyJoinKeys,
    SankeyNetworkQuery: SankeyNetworkQuery,
    SankeyNetworkQueryCompute: SankeyNetworkQueryCompute,
    SankeyNetworkQuerySort: SankeyNetworkQuerySort,
    SankeyNetworkRequest: SankeyNetworkRequest,
    SankeyRumQuery: SankeyRumQuery,
    SankeyRumRequest: SankeyRumRequest,
    SankeyWidgetDefinition: SankeyWidgetDefinition,
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
    SharedDashboardInvitesDataObjectAttributes:
      SharedDashboardInvitesDataObjectAttributes,
    SharedDashboardInvitesMeta: SharedDashboardInvitesMeta,
    SharedDashboardInvitesMetaPage: SharedDashboardInvitesMetaPage,
    SharedDashboardUpdateRequest: SharedDashboardUpdateRequest,
    SharedDashboardUpdateRequestGlobalTime:
      SharedDashboardUpdateRequestGlobalTime,
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
    TableWidgetTextFormatReplaceSubstring:
      TableWidgetTextFormatReplaceSubstring,
    TableWidgetTextFormatRule: TableWidgetTextFormatRule,
    TimeseriesBackground: TimeseriesBackground,
    TimeseriesRequestStyle: TimeseriesRequestStyle,
    TimeseriesWidgetDefinition: TimeseriesWidgetDefinition,
    TimeseriesWidgetExpressionAlias: TimeseriesWidgetExpressionAlias,
    TimeseriesWidgetRequest: TimeseriesWidgetRequest,
    ToplistWidgetDefinition: ToplistWidgetDefinition,
    ToplistWidgetFlat: ToplistWidgetFlat,
    ToplistWidgetRequest: ToplistWidgetRequest,
    ToplistWidgetStacked: ToplistWidgetStacked,
    ToplistWidgetStyle: ToplistWidgetStyle,
    TopologyMapWidgetDefinitionDataStreams:
      TopologyMapWidgetDefinitionDataStreams,
    TopologyMapWidgetDefinitionServiceMap:
      TopologyMapWidgetDefinitionServiceMap,
    TopologyQueryDataStreams: TopologyQueryDataStreams,
    TopologyQueryServiceMap: TopologyQueryServiceMap,
    TopologyRequestDataStreams: TopologyRequestDataStreams,
    TopologyRequestServiceMap: TopologyRequestServiceMap,
    TreeMapWidgetDefinition: TreeMapWidgetDefinition,
    TreeMapWidgetRequest: TreeMapWidgetRequest,
    UserJourneyFormulaCompute: UserJourneyFormulaCompute,
    UserJourneyFormulaGroupBy: UserJourneyFormulaGroupBy,
    UserJourneyJoinKeys: UserJourneyJoinKeys,
    UserJourneySearch: UserJourneySearch,
    UserJourneySearchFilters: UserJourneySearchFilters,
    UserJourneySearchGraphFilter: UserJourneySearchGraphFilter,
    UserJourneySearchTarget: UserJourneySearchTarget,
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
    WildcardWidgetDefinition: WildcardWidgetDefinition,
    WildcardWidgetSpecification: WildcardWidgetSpecification,
  },
};
