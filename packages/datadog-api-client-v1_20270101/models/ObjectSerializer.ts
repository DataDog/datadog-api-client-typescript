import { APIErrorResponse } from "../../datadog-api-client-v1/models/APIErrorResponse";
import { APMIssueStreamQuery } from "./APMIssueStreamQuery";
import { APMIssueStreamQueryInvestigation } from "./APMIssueStreamQueryInvestigation";
import { ActionsDatastoreDataset } from "./ActionsDatastoreDataset";
import { AggregateAugmentedQuery } from "./AggregateAugmentedQuery";
import { AggregateAugmentedQueryJoinCondition } from "./AggregateAugmentedQueryJoinCondition";
import { AggregateCompute } from "./AggregateCompute";
import { AggregateFilteredQuery } from "./AggregateFilteredQuery";
import { AggregateFilteredQueryFiltersItems } from "./AggregateFilteredQueryFiltersItems";
import { AggregateSegmentQuery } from "./AggregateSegmentQuery";
import { AggregateSegmentQuerySegmentQuery } from "./AggregateSegmentQuerySegmentQuery";
import { AlertGraphBackendDefinition } from "./AlertGraphBackendDefinition";
import { AlertGraphBackendWidget } from "./AlertGraphBackendWidget";
import { AlertGraphWidgetDefinition } from "../../datadog-api-client-v1/models/AlertGraphWidgetDefinition";
import { AlertValueBackendWidget } from "./AlertValueBackendWidget";
import { AlertValueDefinition } from "./AlertValueDefinition";
import { AlertValueWidgetDefinition } from "../../datadog-api-client-v1/models/AlertValueWidgetDefinition";
import { AnalysisAggregationSort } from "./AnalysisAggregationSort";
import { AnalysisDataset } from "./AnalysisDataset";
import { AnomalyDetectionConfig } from "./AnomalyDetectionConfig";
import { ApmMetricsHistogramRequest } from "./ApmMetricsHistogramRequest";
import { ApmMetricsQueryFragment } from "./ApmMetricsQueryFragment";
import { ApmRecommendationsStreamQuery } from "./ApmRecommendationsStreamQuery";
import { ApmRecommendationsStreamRequest } from "./ApmRecommendationsStreamRequest";
import { ApmRecommendationsStreamRequestColumnsItems } from "./ApmRecommendationsStreamRequestColumnsItems";
import { ApmStatsHistogramRequest } from "./ApmStatsHistogramRequest";
import { ApmStatsQuery } from "./ApmStatsQuery";
import { ApmStatsQueryColumnType } from "../../datadog-api-client-v1/models/ApmStatsQueryColumnType";
import { ApmStatsQueryDefinition } from "../../datadog-api-client-v1/models/ApmStatsQueryDefinition";
import { AppBuilderInputValue } from "./AppBuilderInputValue";
import { AudienceFilters } from "./AudienceFilters";
import { AudienceFiltersAccountsItems } from "./AudienceFiltersAccountsItems";
import { AudienceFiltersSegmentsItems } from "./AudienceFiltersSegmentsItems";
import { AudienceFiltersUsersItems } from "./AudienceFiltersUsersItems";
import { AuditStreamQuery } from "./AuditStreamQuery";
import { AuditStreamRequest } from "./AuditStreamRequest";
import { AuditStreamRequestColumnsItems } from "./AuditStreamRequestColumnsItems";
import { Axis } from "./Axis";
import { BackendDistributionYAxis } from "./BackendDistributionYAxis";
import { BackendTimeseriesAxisDefinition } from "./BackendTimeseriesAxisDefinition";
import { BarChartBackendDefinition } from "./BarChartBackendDefinition";
import { BarChartBackendDefinitionStyle } from "./BarChartBackendDefinitionStyle";
import { BarChartBackendDefinitionStyle20270101DisplayOneOf } from "./BarChartBackendDefinitionStyle20270101DisplayOneOf";
import { BarChartBackendDefinitionStyle20270101DisplayOneOf4453561856 } from "./BarChartBackendDefinitionStyle20270101DisplayOneOf4453561856";
import { BarChartBackendRequest20270101OneOf } from "./BarChartBackendRequest20270101OneOf";
import { BarChartBackendRequest20270101OneOf4454434112 } from "./BarChartBackendRequest20270101OneOf4454434112";
import { BarChartBackendRequest20270101OneOf4454435552 } from "./BarChartBackendRequest20270101OneOf4454435552";
import { BarChartBackendRequest20270101OneOf4454436672 } from "./BarChartBackendRequest20270101OneOf4454436672";
import { BarChartBackendRequest20270101OneOf4454438272 } from "./BarChartBackendRequest20270101OneOf4454438272";
import { BarChartBackendWidget } from "./BarChartBackendWidget";
import { BarChartWidgetDefinition } from "../../datadog-api-client-v1/models/BarChartWidgetDefinition";
import { BarChartWidgetFlat } from "../../datadog-api-client-v1/models/BarChartWidgetFlat";
import { BarChartWidgetRequest } from "../../datadog-api-client-v1/models/BarChartWidgetRequest";
import { BarChartWidgetStacked } from "../../datadog-api-client-v1/models/BarChartWidgetStacked";
import { BarChartWidgetStyle } from "../../datadog-api-client-v1/models/BarChartWidgetStyle";
import { BigQueryDataset } from "./BigQueryDataset";
import { CalendarIntervalDay } from "./CalendarIntervalDay";
import { CalendarIntervalMonth } from "./CalendarIntervalMonth";
import { CalendarIntervalWeek } from "./CalendarIntervalWeek";
import { CalendarIntervalYear } from "./CalendarIntervalYear";
import { CalendarShift } from "./CalendarShift";
import { CalendarShiftSplitConfig } from "./CalendarShiftSplitConfig";
import { CaseCompute } from "./CaseCompute";
import { CaseGroupBy } from "./CaseGroupBy";
import { CaseStreamQuery } from "./CaseStreamQuery";
import { CaseStreamRequest } from "./CaseStreamRequest";
import { CaseStreamRequestColumnsItems } from "./CaseStreamRequestColumnsItems";
import { CellScope } from "./CellScope";
import { CellScope20270101CohortTargetOneOf } from "./CellScope20270101CohortTargetOneOf";
import { CellScope20270101CohortTargetOneOf4454617856 } from "./CellScope20270101CohortTargetOneOf4454617856";
import { CellScopeReturnPeriodTarget } from "./CellScopeReturnPeriodTarget";
import { ChangeBackendDefinition } from "./ChangeBackendDefinition";
import { ChangeBackendRequest20270101OneOf } from "./ChangeBackendRequest20270101OneOf";
import { ChangeBackendRequest20270101OneOf4454622976 } from "./ChangeBackendRequest20270101OneOf4454622976";
import { ChangeBackendWidget } from "./ChangeBackendWidget";
import { ChangeDuration20270101OneOf } from "./ChangeDuration20270101OneOf";
import { ChangeDuration20270101OneOf4454627136 } from "./ChangeDuration20270101OneOf4454627136";
import { ChangeWidgetDefinition } from "../../datadog-api-client-v1/models/ChangeWidgetDefinition";
import { ChangeWidgetRequest } from "../../datadog-api-client-v1/models/ChangeWidgetRequest";
import { CheckStatusBackendDefinition } from "./CheckStatusBackendDefinition";
import { CheckStatusBackendWidget } from "./CheckStatusBackendWidget";
import { CheckStatusWidgetDefinition } from "../../datadog-api-client-v1/models/CheckStatusWidgetDefinition";
import { CohortBackendWidget } from "./CohortBackendWidget";
import { CohortDefinition } from "./CohortDefinition";
import { CohortScope } from "./CohortScope";
import { CohortScope20270101TargetOneOf } from "./CohortScope20270101TargetOneOf";
import { CohortScope20270101TargetOneOf4454865216 } from "./CohortScope20270101TargetOneOf4454865216";
import { CohortWidgetDefinition } from "../../datadog-api-client-v1/models/CohortWidgetDefinition";
import { ComparisonCustomTimeframe } from "../../datadog-api-client-v1/models/ComparisonCustomTimeframe";
import { ComparisonDuration } from "../../datadog-api-client-v1/models/ComparisonDuration";
import { ComparisonRequest } from "./ComparisonRequest";
import { CompositeAudienceFiltersQuery } from "./CompositeAudienceFiltersQuery";
import { CompositeAudienceFiltersQueryAccountsItems } from "./CompositeAudienceFiltersQueryAccountsItems";
import { CompositeAudienceFiltersQuerySegmentsItems } from "./CompositeAudienceFiltersQuerySegmentsItems";
import { CompositeAudienceFiltersQueryUsersItems } from "./CompositeAudienceFiltersQueryUsersItems";
import { CompositeCompute } from "./CompositeCompute";
import { CompositeEventsPlatformQuery } from "./CompositeEventsPlatformQuery";
import { CompositeEventsPlatformQueryDefinition } from "./CompositeEventsPlatformQueryDefinition";
import { CompositeEventsPlatformQueryDefinitionSearch } from "./CompositeEventsPlatformQueryDefinitionSearch";
import { CompositeEventsPlatformQuerySearch } from "./CompositeEventsPlatformQuerySearch";
import { CompositeEventsPlatformSubQueryDefinition } from "./CompositeEventsPlatformSubQueryDefinition";
import { CompositeEventsPlatformSubQueryDefinitionSearch } from "./CompositeEventsPlatformSubQueryDefinitionSearch";
import { CompositeGroupBy } from "./CompositeGroupBy";
import { CompositeQuerySorting } from "./CompositeQuerySorting";
import { CompositeReferentialDataQuery } from "./CompositeReferentialDataQuery";
import { CompositeReferentialDataQueryComputeItems } from "./CompositeReferentialDataQueryComputeItems";
import { CompositeStreamRequest } from "./CompositeStreamRequest";
import { CompositeStreamRequestColumn } from "./CompositeStreamRequestColumn";
import { ComputeTableColumn } from "./ComputeTableColumn";
import { ComputeTableColumnCompute } from "./ComputeTableColumnCompute";
import { ContextMenuLink } from "./ContextMenuLink";
import { CustomTopologyMapInlineData } from "./CustomTopologyMapInlineData";
import { CustomTopologyMapInlineEdgeColumn } from "./CustomTopologyMapInlineEdgeColumn";
import { CustomTopologyMapInlineEdgesData } from "./CustomTopologyMapInlineEdgesData";
import { CustomTopologyMapInlineNodeIdColumn } from "./CustomTopologyMapInlineNodeIdColumn";
import { CustomTopologyMapInlineNodeStringColumn } from "./CustomTopologyMapInlineNodeStringColumn";
import { CustomTopologyMapInlineNodeValueColumn } from "./CustomTopologyMapInlineNodeValueColumn";
import { CustomTopologyMapInlineNodeValueColumnMeta } from "./CustomTopologyMapInlineNodeValueColumnMeta";
import { CustomTopologyMapInlineNodesData } from "./CustomTopologyMapInlineNodesData";
import { CustomTopologyMapLayout } from "./CustomTopologyMapLayout";
import { CustomTopologyMapProjection } from "./CustomTopologyMapProjection";
import { CustomTopologyMapProjectionDimensionsItems } from "./CustomTopologyMapProjectionDimensionsItems";
import { CustomTopologyMapTileDefRequest } from "./CustomTopologyMapTileDefRequest";
import { DDSQLTableRequest } from "./DDSQLTableRequest";
import { DDSQLTimeseriesRequest } from "./DDSQLTimeseriesRequest";
import { Dashboard } from "./Dashboard";
import { DashboardFixedTimeframe } from "../../datadog-api-client-v1/models/DashboardFixedTimeframe";
import { DashboardLiveTimeframe } from "../../datadog-api-client-v1/models/DashboardLiveTimeframe";
import { DashboardTab } from "../../datadog-api-client-v1/models/DashboardTab";
import { DashboardTemplateVariable } from "../../datadog-api-client-v1/models/DashboardTemplateVariable";
import { DashboardTemplateVariablePreset } from "../../datadog-api-client-v1/models/DashboardTemplateVariablePreset";
import { DashboardTemplateVariablePresetValue } from "../../datadog-api-client-v1/models/DashboardTemplateVariablePresetValue";
import { DataObservabilityAssetsQuery } from "./DataObservabilityAssetsQuery";
import { DataObservabilityAssetsRequest } from "./DataObservabilityAssetsRequest";
import { DataObservabilityAssetsRequestColumnsItems } from "./DataObservabilityAssetsRequestColumnsItems";
import { DatabaseRecommendationsStreamQuery } from "./DatabaseRecommendationsStreamQuery";
import { DatabaseRecommendationsStreamRequest } from "./DatabaseRecommendationsStreamRequest";
import { DatabaseRecommendationsStreamRequestColumnsItems } from "./DatabaseRecommendationsStreamRequestColumnsItems";
import { DatasetColumn } from "./DatasetColumn";
import { DatasetCompute } from "./DatasetCompute";
import { DatasetGroupBy } from "./DatasetGroupBy";
import { DatasetListQuery } from "./DatasetListQuery";
import { DatasetListQuerySort } from "./DatasetListQuerySort";
import { DatasetListQuerySortField } from "../../datadog-api-client-v1/models/DatasetListQuerySortField";
import { DatasetListRequest } from "./DatasetListRequest";
import { DatasetListRequestColumnsItems } from "./DatasetListRequestColumnsItems";
import { DatasetSort } from "./DatasetSort";
import { DatasetSortField } from "./DatasetSortField";
import { DetectionRuleStreamQuery } from "./DetectionRuleStreamQuery";
import { DetectionRuleStreamRequest } from "./DetectionRuleStreamRequest";
import { DetectionRuleStreamRequestColumnsItems } from "./DetectionRuleStreamRequestColumnsItems";
import { DistributionBackendDefinition } from "./DistributionBackendDefinition";
import { DistributionBackendRequest20270101OneOf } from "./DistributionBackendRequest20270101OneOf";
import { DistributionBackendRequest20270101OneOf4455761856 } from "./DistributionBackendRequest20270101OneOf4455761856";
import { DistributionBackendRequest20270101OneOf4455763296 } from "./DistributionBackendRequest20270101OneOf4455763296";
import { DistributionBackendRequest20270101OneOf4455763936 } from "./DistributionBackendRequest20270101OneOf4455763936";
import { DistributionBackendRequest20270101OneOf4455764576 } from "./DistributionBackendRequest20270101OneOf4455764576";
import { DistributionBackendRequest20270101OneOf4455765216 } from "./DistributionBackendRequest20270101OneOf4455765216";
import { DistributionBackendRequest20270101OneOf4455765856 } from "./DistributionBackendRequest20270101OneOf4455765856";
import { DistributionBackendRequest20270101OneOf4455766496 } from "./DistributionBackendRequest20270101OneOf4455766496";
import { DistributionBackendRequest20270101OneOf4455767136 } from "./DistributionBackendRequest20270101OneOf4455767136";
import { DistributionBackendRequest20270101OneOf4455767776 } from "./DistributionBackendRequest20270101OneOf4455767776";
import { DistributionBackendRequest20270101OneOf4455768416 } from "./DistributionBackendRequest20270101OneOf4455768416";
import { DistributionBackendRequest20270101OneOf4455769056 } from "./DistributionBackendRequest20270101OneOf4455769056";
import { DistributionBackendRequest20270101OneOf4455769696 } from "./DistributionBackendRequest20270101OneOf4455769696";
import { DistributionBackendRequest20270101OneOf4455770336 } from "./DistributionBackendRequest20270101OneOf4455770336";
import { DistributionBackendRequest20270101OneOf4455770976 } from "./DistributionBackendRequest20270101OneOf4455770976";
import { DistributionBackendRequest20270101OneOf4455771616 } from "./DistributionBackendRequest20270101OneOf4455771616";
import { DistributionBackendRequest20270101OneOf4455772256 } from "./DistributionBackendRequest20270101OneOf4455772256";
import { DistributionBackendRequest20270101OneOf4455772896 } from "./DistributionBackendRequest20270101OneOf4455772896";
import { DistributionBackendRequest20270101OneOf4455773536 } from "./DistributionBackendRequest20270101OneOf4455773536";
import { DistributionBackendRequest20270101OneOf4455774496 } from "./DistributionBackendRequest20270101OneOf4455774496";
import { DistributionBackendRequest20270101OneOf4455775456 } from "./DistributionBackendRequest20270101OneOf4455775456";
import { DistributionBackendRequest20270101OneOf4455989472 } from "./DistributionBackendRequest20270101OneOf4455989472";
import { DistributionBackendRequest20270101OneOf4455990432 } from "./DistributionBackendRequest20270101OneOf4455990432";
import { DistributionBackendRequestAnyOfAnyOfItemQuery } from "./DistributionBackendRequestAnyOfAnyOfItemQuery";
import { DistributionBackendWidget } from "./DistributionBackendWidget";
import { DistributionWidgetDefinition } from "../../datadog-api-client-v1/models/DistributionWidgetDefinition";
import { DistributionWidgetRequest } from "../../datadog-api-client-v1/models/DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "../../datadog-api-client-v1/models/DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "../../datadog-api-client-v1/models/DistributionWidgetYAxis";
import { DistributionXAxis } from "./DistributionXAxis";
import { DoraListStreamQuery } from "./DoraListStreamQuery";
import { DoraListStreamRequest } from "./DoraListStreamRequest";
import { DoraListStreamRequestColumnsItems } from "./DoraListStreamRequestColumnsItems";
import { EmbeddedAppBackendDefinition } from "./EmbeddedAppBackendDefinition";
import { EmbeddedAppBackendWidget } from "./EmbeddedAppBackendWidget";
import { EmbeddedAppWidgetDefinition } from "../../datadog-api-client-v1/models/EmbeddedAppWidgetDefinition";
import { EmbeddedAppWidgetInput } from "../../datadog-api-client-v1/models/EmbeddedAppWidgetInput";
import { ErrorsStreamQuery } from "./ErrorsStreamQuery";
import { ErrorsStreamRequest } from "./ErrorsStreamRequest";
import { ErrorsStreamRequestColumnsItems } from "./ErrorsStreamRequestColumnsItems";
import { EventPatternGroupBy } from "./EventPatternGroupBy";
import { EventPatternStreamQuery } from "./EventPatternStreamQuery";
import { EventPatternStreamRequest } from "./EventPatternStreamRequest";
import { EventPatternStreamRequestColumnsItems } from "./EventPatternStreamRequestColumnsItems";
import { EventPlatformDatasetDefinition } from "./EventPlatformDatasetDefinition";
import { EventPlatformDatasetDefinitionSearch } from "./EventPlatformDatasetDefinitionSearch";
import { EventPlatformStreamRequest } from "./EventPlatformStreamRequest";
import { EventPlatformStreamRequestColumnsItems } from "./EventPlatformStreamRequestColumnsItems";
import { EventQueryDefinition } from "../../datadog-api-client-v1/models/EventQueryDefinition";
import { EventStream } from "./EventStream";
import { EventStreamDefinition } from "./EventStreamDefinition";
import { EventStreamQuery } from "./EventStreamQuery";
import { EventStreamRequest } from "./EventStreamRequest";
import { EventStreamRequestColumnsItems } from "./EventStreamRequestColumnsItems";
import { EventStreamWidgetDefinition } from "../../datadog-api-client-v1/models/EventStreamWidgetDefinition";
import { EventTimelineBackendDefinition } from "./EventTimelineBackendDefinition";
import { EventTimelineBackendWidget } from "./EventTimelineBackendWidget";
import { EventTimelineWidgetDefinition } from "../../datadog-api-client-v1/models/EventTimelineWidgetDefinition";
import { EventsCalculatedField } from "./EventsCalculatedField";
import { EventsContext } from "./EventsContext";
import { EventsDataExtraction } from "./EventsDataExtraction";
import { EventsDataExtractionExtraction } from "./EventsDataExtractionExtraction";
import { EventsHistogramRequest } from "./EventsHistogramRequest";
import { EventsPlatformDataProjectionQuery } from "./EventsPlatformDataProjectionQuery";
import { EventsPlatformDataProjectionQueryDefinition } from "./EventsPlatformDataProjectionQueryDefinition";
import { EventsPlatformListStreamQuery } from "./EventsPlatformListStreamQuery";
import { EventsQueryFragmentDefinition } from "./EventsQueryFragmentDefinition";
import { EventsQueryFragmentDefinitionSearch } from "./EventsQueryFragmentDefinitionSearch";
import { ExcludeNullTableColumnFunction } from "./ExcludeNullTableColumnFunction";
import { FixedSpan2 } from "./FixedSpan2";
import { FlatSortBy20270101OneOf } from "./FlatSortBy20270101OneOf";
import { FlatSortBy20270101OneOf4456386848 } from "./FlatSortBy20270101OneOf4456386848";
import { FormulaAndFunctionApmDependencyStatsQueryDefinition } from "../../datadog-api-client-v1/models/FormulaAndFunctionApmDependencyStatsQueryDefinition";
import { FormulaAndFunctionApmMetricsQueryDefinition } from "../../datadog-api-client-v1/models/FormulaAndFunctionApmMetricsQueryDefinition";
import { FormulaAndFunctionApmResourceStatsQueryDefinition } from "../../datadog-api-client-v1/models/FormulaAndFunctionApmResourceStatsQueryDefinition";
import { FormulaAndFunctionCloudCostQueryDefinition } from "../../datadog-api-client-v1/models/FormulaAndFunctionCloudCostQueryDefinition";
import { FormulaAndFunctionEventQueryDefinition } from "./FormulaAndFunctionEventQueryDefinition";
import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryDefinitionSearch } from "./FormulaAndFunctionEventQueryDefinitionSearch";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventQueryGroupByFields } from "./FormulaAndFunctionEventQueryGroupByFields";
import { FormulaAndFunctionEventQueryGroupBySort } from "./FormulaAndFunctionEventQueryGroupBySort";
import { FormulaAndFunctionMetricQueryDefinition } from "../../datadog-api-client-v1/models/FormulaAndFunctionMetricQueryDefinition";
import { FormulaAndFunctionProcessQueryDefinition } from "./FormulaAndFunctionProcessQueryDefinition";
import { FormulaAndFunctionProductAnalyticsExtendedQueryDefinition } from "../../datadog-api-client-v1/models/FormulaAndFunctionProductAnalyticsExtendedQueryDefinition";
import { FormulaAndFunctionRetentionQueryDefinition } from "../../datadog-api-client-v1/models/FormulaAndFunctionRetentionQueryDefinition";
import { FormulaAndFunctionSLOQueryDefinition } from "../../datadog-api-client-v1/models/FormulaAndFunctionSLOQueryDefinition";
import { FormulaAndFunctionUserJourneyQueryDefinition } from "../../datadog-api-client-v1/models/FormulaAndFunctionUserJourneyQueryDefinition";
import { FormulaApmDependencyStatsQuery } from "./FormulaApmDependencyStatsQuery";
import { FormulaApmMetricsQuery } from "./FormulaApmMetricsQuery";
import { FormulaApmResourceStatsQuery } from "./FormulaApmResourceStatsQuery";
import { FormulaCaseQuery } from "./FormulaCaseQuery";
import { FormulaChangeTrackingQuery } from "./FormulaChangeTrackingQuery";
import { FormulaChangeTrackingQuerySearch } from "./FormulaChangeTrackingQuerySearch";
import { FormulaDataQualityMetricsQuery } from "./FormulaDataQualityMetricsQuery";
import { FormulaDataQualityMetricsQueryAnomalyOptions } from "./FormulaDataQualityMetricsQueryAnomalyOptions";
import { FormulaDataset } from "./FormulaDataset";
import { FormulaDatasetApmMetricsQuery } from "./FormulaDatasetApmMetricsQuery";
import { FormulaDatasetFormulasItems } from "./FormulaDatasetFormulasItems";
import { FormulaDatasetMetricQuery } from "./FormulaDatasetMetricQuery";
import { FormulaDatasetQuery } from "./FormulaDatasetQuery";
import { FormulaDetectionRulesQuery } from "./FormulaDetectionRulesQuery";
import { FormulaDetectionRulesQuerySearch } from "./FormulaDetectionRulesQuerySearch";
import { FormulaDoraQuery } from "./FormulaDoraQuery";
import { FormulaDoraQuerySearch } from "./FormulaDoraQuerySearch";
import { FormulaEventsQuery } from "./FormulaEventsQuery";
import { FormulaEventsQuerySearch } from "./FormulaEventsQuerySearch";
import { FormulaGraphQuery } from "./FormulaGraphQuery";
import { FormulaGraphQueryCompute } from "./FormulaGraphQueryCompute";
import { FormulaGraphQueryGroupByItems } from "./FormulaGraphQueryGroupByItems";
import { FormulaIncidentsQuery } from "./FormulaIncidentsQuery";
import { FormulaIncidentsQuerySearch } from "./FormulaIncidentsQuerySearch";
import { FormulaManagedResourceQuery } from "./FormulaManagedResourceQuery";
import { FormulaMetricsQueryCloudCost } from "./FormulaMetricsQueryCloudCost";
import { FormulaMetricsQueryDatadogUsage } from "./FormulaMetricsQueryDatadogUsage";
import { FormulaMetricsQueryMetrics } from "./FormulaMetricsQueryMetrics";
import { FormulaOrderByFormulaIndex } from "./FormulaOrderByFormulaIndex";
import { FormulaOrderByGroup } from "./FormulaOrderByGroup";
import { FormulaProductAnalyticsExtendedQuery } from "./FormulaProductAnalyticsExtendedQuery";
import { FormulaReferenceTableQuery } from "./FormulaReferenceTableQuery";
import { FormulaRetentionQuery } from "./FormulaRetentionQuery";
import { FormulaRetentionQuerySampling } from "./FormulaRetentionQuerySampling";
import { FormulaSloQuery } from "./FormulaSloQuery";
import { FormulaTableColumn } from "./FormulaTableColumn";
import { FormulaUserJourneyQuery } from "./FormulaUserJourneyQuery";
import { FormulaUserJourneyQueryCompute } from "./FormulaUserJourneyQueryCompute";
import { FreeLayout } from "./FreeLayout";
import { FreeTextBackendDefinition } from "./FreeTextBackendDefinition";
import { FreeTextBackendWidget } from "./FreeTextBackendWidget";
import { FreeTextWidgetDefinition } from "../../datadog-api-client-v1/models/FreeTextWidgetDefinition";
import { FunnelBackendDefinition } from "./FunnelBackendDefinition";
import { FunnelBackendWidget } from "./FunnelBackendWidget";
import { FunnelComparisonCustomTimeframe } from "../../datadog-api-client-v1/models/FunnelComparisonCustomTimeframe";
import { FunnelComparisonDuration } from "../../datadog-api-client-v1/models/FunnelComparisonDuration";
import { FunnelQuery } from "../../datadog-api-client-v1/models/FunnelQuery";
import { FunnelStep } from "../../datadog-api-client-v1/models/FunnelStep";
import { FunnelWidgetDefinition } from "../../datadog-api-client-v1/models/FunnelWidgetDefinition";
import { FunnelWidgetRequest } from "../../datadog-api-client-v1/models/FunnelWidgetRequest";
import { GeomapBackendDefinition } from "./GeomapBackendDefinition";
import { GeomapBackendPointsRequest20270101OneOf } from "./GeomapBackendPointsRequest20270101OneOf";
import { GeomapBackendPointsRequest20270101OneOf4457225472 } from "./GeomapBackendPointsRequest20270101OneOf4457225472";
import { GeomapBackendPointsRequest20270101OneOf4457227232 } from "./GeomapBackendPointsRequest20270101OneOf4457227232";
import { GeomapBackendPointsRequest20270101OneOf4457228992 } from "./GeomapBackendPointsRequest20270101OneOf4457228992";
import { GeomapBackendPointsRequest20270101OneOf4457230272 } from "./GeomapBackendPointsRequest20270101OneOf4457230272";
import { GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems } from "./GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems";
import { GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200 } from "./GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200";
import { GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856 } from "./GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856";
import { GeomapBackendPointsRequestAnyOfAnyOfItemQuery } from "./GeomapBackendPointsRequestAnyOfAnyOfItemQuery";
import { GeomapBackendPointsRequestAnyOfAnyOfItemStyle } from "./GeomapBackendPointsRequestAnyOfAnyOfItemStyle";
import { GeomapBackendRegionsRequest20270101OneOf } from "./GeomapBackendRegionsRequest20270101OneOf";
import { GeomapBackendRegionsRequest20270101OneOf4457233792 } from "./GeomapBackendRegionsRequest20270101OneOf4457233792";
import { GeomapBackendRegionsRequest20270101OneOf4457448128 } from "./GeomapBackendRegionsRequest20270101OneOf4457448128";
import { GeomapBackendRegionsRequest20270101OneOf4457449888 } from "./GeomapBackendRegionsRequest20270101OneOf4457449888";
import { GeomapBackendRegionsRequest20270101OneOf4457450848 } from "./GeomapBackendRegionsRequest20270101OneOf4457450848";
import { GeomapBackendRegionsRequest20270101OneOf4457451808 } from "./GeomapBackendRegionsRequest20270101OneOf4457451808";
import { GeomapBackendRegionsRequest20270101OneOf4457452768 } from "./GeomapBackendRegionsRequest20270101OneOf4457452768";
import { GeomapBackendRegionsRequest20270101OneOf4457453728 } from "./GeomapBackendRegionsRequest20270101OneOf4457453728";
import { GeomapBackendRegionsRequest20270101OneOf4457454688 } from "./GeomapBackendRegionsRequest20270101OneOf4457454688";
import { GeomapBackendRegionsRequest20270101OneOf4457455648 } from "./GeomapBackendRegionsRequest20270101OneOf4457455648";
import { GeomapBackendRegionsRequest20270101OneOf4457456608 } from "./GeomapBackendRegionsRequest20270101OneOf4457456608";
import { GeomapBackendRegionsRequest20270101OneOf4457457568 } from "./GeomapBackendRegionsRequest20270101OneOf4457457568";
import { GeomapBackendRegionsRequest20270101OneOf4457458528 } from "./GeomapBackendRegionsRequest20270101OneOf4457458528";
import { GeomapBackendRegionsRequest20270101OneOf4457459488 } from "./GeomapBackendRegionsRequest20270101OneOf4457459488";
import { GeomapBackendRegionsRequest20270101OneOf4457460448 } from "./GeomapBackendRegionsRequest20270101OneOf4457460448";
import { GeomapBackendRegionsRequest20270101OneOf4457461408 } from "./GeomapBackendRegionsRequest20270101OneOf4457461408";
import { GeomapBackendRegionsRequest20270101OneOf4457462368 } from "./GeomapBackendRegionsRequest20270101OneOf4457462368";
import { GeomapBackendRegionsRequest20270101OneOf4457463328 } from "./GeomapBackendRegionsRequest20270101OneOf4457463328";
import { GeomapBackendRegionsRequest20270101OneOf4457645216 } from "./GeomapBackendRegionsRequest20270101OneOf4457645216";
import { GeomapBackendWidget } from "./GeomapBackendWidget";
import { GeomapPointsProjection } from "./GeomapPointsProjection";
import { GeomapPointsProjectionDimensionsItems } from "./GeomapPointsProjectionDimensionsItems";
import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { GeomapStyle } from "./GeomapStyle";
import { GeomapView20270101OneOf } from "../../datadog-api-client-v1/models/GeomapView20270101OneOf";
import { GeomapView20270101OneOf4457650336 } from "../../datadog-api-client-v1/models/GeomapView20270101OneOf4457650336";
import { GeomapWidgetDefinition } from "../../datadog-api-client-v1/models/GeomapWidgetDefinition";
import { GeomapWidgetDefinitionStyle } from "../../datadog-api-client-v1/models/GeomapWidgetDefinitionStyle";
import { GeomapWidgetDefinitionView } from "../../datadog-api-client-v1/models/GeomapWidgetDefinitionView";
import { GeomapWidgetRequest } from "../../datadog-api-client-v1/models/GeomapWidgetRequest";
import { GeomapWidgetRequestStyle } from "../../datadog-api-client-v1/models/GeomapWidgetRequestStyle";
import { GraphQuerySearch } from "./GraphQuerySearch";
import { GraphQuerySearchFilter } from "./GraphQuerySearchFilter";
import { GraphQuerySearchFilters } from "./GraphQuerySearchFilters";
import { GraphQuerySearchJoinKeys } from "./GraphQuerySearchJoinKeys";
import { GraphTargetNode } from "./GraphTargetNode";
import { GraphTargetPath } from "./GraphTargetPath";
import { GroupBackendDefinition } from "./GroupBackendDefinition";
import { GroupBackendWidget } from "./GroupBackendWidget";
import { GroupBySort } from "./GroupBySort";
import { GroupStyleRule } from "./GroupStyleRule";
import { GroupStyleRuleMatch } from "./GroupStyleRuleMatch";
import { GroupWidgetDefinition } from "../../datadog-api-client-v1/models/GroupWidgetDefinition";
import { HeatMapWidgetDefinition } from "../../datadog-api-client-v1/models/HeatMapWidgetDefinition";
import { HeatMapWidgetRequest } from "../../datadog-api-client-v1/models/HeatMapWidgetRequest";
import { HeatMapWidgetXAxis } from "../../datadog-api-client-v1/models/HeatMapWidgetXAxis";
import { HeatgridBackendWidget } from "./HeatgridBackendWidget";
import { HeatgridBin } from "./HeatgridBin";
import { HeatgridColorBin } from "../../datadog-api-client-v1/models/HeatgridColorBin";
import { HeatgridColorStop } from "../../datadog-api-client-v1/models/HeatgridColorStop";
import { HeatgridDefinition } from "./HeatgridDefinition";
import { HeatgridDiscreteConfig20270101OneOf } from "./HeatgridDiscreteConfig20270101OneOf";
import { HeatgridDiscreteConfig20270101OneOf4457881312 } from "./HeatgridDiscreteConfig20270101OneOf4457881312";
import { HeatgridDiscreteCustomColor } from "../../datadog-api-client-v1/models/HeatgridDiscreteCustomColor";
import { HeatgridDiscretePresetColor } from "../../datadog-api-client-v1/models/HeatgridDiscretePresetColor";
import { HeatgridGradientConfig20270101OneOf } from "./HeatgridGradientConfig20270101OneOf";
import { HeatgridGradientConfig20270101OneOf4457883232 } from "./HeatgridGradientConfig20270101OneOf4457883232";
import { HeatgridGradientCustomColor } from "../../datadog-api-client-v1/models/HeatgridGradientCustomColor";
import { HeatgridGradientPresetColor } from "../../datadog-api-client-v1/models/HeatgridGradientPresetColor";
import { HeatgridLabelColumn } from "../../datadog-api-client-v1/models/HeatgridLabelColumn";
import { HeatgridLabelColumnConfig } from "./HeatgridLabelColumnConfig";
import { HeatgridLegend } from "../../datadog-api-client-v1/models/HeatgridLegend";
import { HeatgridLegendConfig } from "./HeatgridLegendConfig";
import { HeatgridSort } from "../../datadog-api-client-v1/models/HeatgridSort";
import { HeatgridSortAndOrderBy } from "./HeatgridSortAndOrderBy";
import { HeatgridSortByLabel } from "../../datadog-api-client-v1/models/HeatgridSortByLabel";
import { HeatgridSortByValue } from "../../datadog-api-client-v1/models/HeatgridSortByValue";
import { HeatgridStop } from "./HeatgridStop";
import { HeatgridTextFormatMatch } from "../../datadog-api-client-v1/models/HeatgridTextFormatMatch";
import { HeatgridTextFormatReplaceAll } from "../../datadog-api-client-v1/models/HeatgridTextFormatReplaceAll";
import { HeatgridTextFormatReplaceSubstring } from "../../datadog-api-client-v1/models/HeatgridTextFormatReplaceSubstring";
import { HeatgridTextFormatRule } from "../../datadog-api-client-v1/models/HeatgridTextFormatRule";
import { HeatgridTileDefRequest } from "./HeatgridTileDefRequest";
import { HeatgridWidgetDefinition } from "../../datadog-api-client-v1/models/HeatgridWidgetDefinition";
import { HeatgridWidgetFormula } from "../../datadog-api-client-v1/models/HeatgridWidgetFormula";
import { HeatgridWidgetRequest } from "../../datadog-api-client-v1/models/HeatgridWidgetRequest";
import { HeatmapBackendDefinition } from "./HeatmapBackendDefinition";
import { HeatmapBackendDefinitionYaxis } from "./HeatmapBackendDefinitionYaxis";
import { HeatmapBackendRequest20270101OneOf } from "./HeatmapBackendRequest20270101OneOf";
import { HeatmapBackendRequest20270101OneOf4458138496 } from "./HeatmapBackendRequest20270101OneOf4458138496";
import { HeatmapBackendRequest20270101OneOf4458139936 } from "./HeatmapBackendRequest20270101OneOf4458139936";
import { HeatmapBackendRequest20270101OneOf4458140576 } from "./HeatmapBackendRequest20270101OneOf4458140576";
import { HeatmapBackendRequestAnyOfAnyOfItemQuery } from "./HeatmapBackendRequestAnyOfAnyOfItemQuery";
import { HeatmapBackendWidget } from "./HeatmapBackendWidget";
import { HeatmapXAxis } from "./HeatmapXAxis";
import { HistoricalDiscoveredProcessesDataset } from "./HistoricalDiscoveredProcessesDataset";
import { HostMapRequest } from "../../datadog-api-client-v1/models/HostMapRequest";
import { HostMapWidgetDefinition } from "../../datadog-api-client-v1/models/HostMapWidgetDefinition";
import { HostMapWidgetDefinitionRequests } from "../../datadog-api-client-v1/models/HostMapWidgetDefinitionRequests";
import { HostMapWidgetDefinitionStyle } from "../../datadog-api-client-v1/models/HostMapWidgetDefinitionStyle";
import { HostMapWidgetFormula } from "../../datadog-api-client-v1/models/HostMapWidgetFormula";
import { HostMapWidgetGroupBy } from "../../datadog-api-client-v1/models/HostMapWidgetGroupBy";
import { HostMapWidgetInfrastructureRequest } from "../../datadog-api-client-v1/models/HostMapWidgetInfrastructureRequest";
import { HostMapWidgetInfrastructureRequestLeaf } from "../../datadog-api-client-v1/models/HostMapWidgetInfrastructureRequestLeaf";
import { HostMapWidgetInfrastructureStyle } from "../../datadog-api-client-v1/models/HostMapWidgetInfrastructureStyle";
import { HostMapWidgetProjection } from "../../datadog-api-client-v1/models/HostMapWidgetProjection";
import { HostMapWidgetProjectionDimensionMapping } from "../../datadog-api-client-v1/models/HostMapWidgetProjectionDimensionMapping";
import { HostMapWidgetScalarRequest } from "../../datadog-api-client-v1/models/HostMapWidgetScalarRequest";
import { HostmapBackendDefinition } from "./HostmapBackendDefinition";
import { HostmapBackendDefinitionStyle } from "./HostmapBackendDefinitionStyle";
import { HostmapBackendWidget } from "./HostmapBackendWidget";
import { HostmapDataProjectionRequest } from "./HostmapDataProjectionRequest";
import { HostmapFormula } from "./HostmapFormula";
import { HostmapFormulaLimit } from "./HostmapFormulaLimit";
import { HostmapGroupBy } from "./HostmapGroupBy";
import { HostmapInfrastructureRequest } from "./HostmapInfrastructureRequest";
import { HostmapProjection } from "./HostmapProjection";
import { HostmapProjectionDimensionsItems } from "./HostmapProjectionDimensionsItems";
import { HostmapScalarFormulaRequest } from "./HostmapScalarFormulaRequest";
import { HostmapStyle } from "./HostmapStyle";
import { HostmapTileDefFillRequest } from "./HostmapTileDefFillRequest";
import { HostmapTileDefSizeRequest } from "./HostmapTileDefSizeRequest";
import { IFrameWidgetDefinition } from "../../datadog-api-client-v1/models/IFrameWidgetDefinition";
import { IframeBackendDefinition } from "./IframeBackendDefinition";
import { IframeBackendWidget } from "./IframeBackendWidget";
import { ImageBackendDefinition } from "./ImageBackendDefinition";
import { ImageBackendWidget } from "./ImageBackendWidget";
import { ImageWidgetDefinition } from "../../datadog-api-client-v1/models/ImageWidgetDefinition";
import { IncidentsStreamQuery } from "./IncidentsStreamQuery";
import { IncidentsStreamRequest } from "./IncidentsStreamRequest";
import { IncidentsStreamRequestColumnsItems } from "./IncidentsStreamRequestColumnsItems";
import { InfrastructureListQuery } from "./InfrastructureListQuery";
import { InfrastructureListRequest } from "./InfrastructureListRequest";
import { InfrastructureListRequestColumnsItems } from "./InfrastructureListRequestColumnsItems";
import { IssueStreamColumn } from "./IssueStreamColumn";
import { IssueStreamSort } from "./IssueStreamSort";
import { JourneyMapBackendWidget } from "./JourneyMapBackendWidget";
import { JourneyMapDefinition } from "./JourneyMapDefinition";
import { JourneyMapExpandedPrefix } from "../../datadog-api-client-v1/models/JourneyMapExpandedPrefix";
import { JourneyMapGroupBy } from "../../datadog-api-client-v1/models/JourneyMapGroupBy";
import { JourneyMapQuery } from "../../datadog-api-client-v1/models/JourneyMapQuery";
import { JourneyMapTarget } from "../../datadog-api-client-v1/models/JourneyMapTarget";
import { JourneyMapWidgetDefinition } from "../../datadog-api-client-v1/models/JourneyMapWidgetDefinition";
import { JourneyMapWidgetRequest } from "../../datadog-api-client-v1/models/JourneyMapWidgetRequest";
import { LegacyEventManagementQuery } from "./LegacyEventManagementQuery";
import { LegacyEventOverlayQuery } from "./LegacyEventOverlayQuery";
import { LegacyIssueStreamRequest } from "./LegacyIssueStreamRequest";
import { LegacyUserJourneySearch } from "./LegacyUserJourneySearch";
import { LegacyUserJourneySearchFilters } from "./LegacyUserJourneySearchFilters";
import { LegacyUserJourneySearchJoinKeys } from "./LegacyUserJourneySearchJoinKeys";
import { ListAugmentedQuery } from "./ListAugmentedQuery";
import { ListAugmentedQueryJoinCondition } from "./ListAugmentedQueryJoinCondition";
import { ListColumn } from "./ListColumn";
import { ListFilteredQuery } from "./ListFilteredQuery";
import { ListFilteredQueryFiltersItems } from "./ListFilteredQueryFiltersItems";
import { ListSegmentQuery } from "./ListSegmentQuery";
import { ListSegmentQuerySegmentQuery } from "./ListSegmentQuerySegmentQuery";
import { ListStreamBackendDefinition } from "./ListStreamBackendDefinition";
import { ListStreamBackendWidget } from "./ListStreamBackendWidget";
import { ListStreamColumn } from "../../datadog-api-client-v1/models/ListStreamColumn";
import { ListStreamComputeItems } from "../../datadog-api-client-v1/models/ListStreamComputeItems";
import { ListStreamGroupByItems } from "../../datadog-api-client-v1/models/ListStreamGroupByItems";
import { ListStreamQuery } from "../../datadog-api-client-v1/models/ListStreamQuery";
import { ListStreamSort } from "./ListStreamSort";
import { ListStreamWidgetDefinition } from "../../datadog-api-client-v1/models/ListStreamWidgetDefinition";
import { ListStreamWidgetRequest } from "../../datadog-api-client-v1/models/ListStreamWidgetRequest";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { LogQueryDefinitionGroupBy } from "./LogQueryDefinitionGroupBy";
import { LogQueryDefinitionGroupBySort } from "./LogQueryDefinitionGroupBySort";
import { LogQueryDefinitionSearch } from "./LogQueryDefinitionSearch";
import { LogStream } from "./LogStream";
import { LogStreamDefinition } from "./LogStreamDefinition";
import { LogStreamWidgetDefinition } from "../../datadog-api-client-v1/models/LogStreamWidgetDefinition";
import { LogsIssueStreamQuery } from "./LogsIssueStreamQuery";
import { LogsIssueStreamQueryInvestigation } from "./LogsIssueStreamQueryInvestigation";
import { LogsPatternGroupBy } from "./LogsPatternGroupBy";
import { LogsPatternStreamQuery } from "./LogsPatternStreamQuery";
import { LogsPatternStreamRequest } from "./LogsPatternStreamRequest";
import { LogsPatternStreamRequestColumnsItems } from "./LogsPatternStreamRequestColumnsItems";
import { LogsQueryCompute } from "./LogsQueryCompute";
import { LogsStreamQuery } from "./LogsStreamQuery";
import { LogsStreamRequest } from "./LogsStreamRequest";
import { LogsStreamRequestColumnsItems } from "./LogsStreamRequestColumnsItems";
import { LogsTransactionCompute } from "./LogsTransactionCompute";
import { LogsTransactionStreamQuery } from "./LogsTransactionStreamQuery";
import { LogsTransactionStreamRequest } from "./LogsTransactionStreamRequest";
import { LogsTransactionStreamRequestColumnsItems } from "./LogsTransactionStreamRequestColumnsItems";
import { MSLBackendWidgetLayout } from "./MSLBackendWidgetLayout";
import { MSLWidgetLayout } from "./MSLWidgetLayout";
import { ManageStatusBackendDefinition } from "./ManageStatusBackendDefinition";
import { ManageStatusBackendWidget } from "./ManageStatusBackendWidget";
import { Marker } from "./Marker";
import { MetricDatasetCloudCostScalar } from "./MetricDatasetCloudCostScalar";
import { MetricDatasetMetricScalar } from "./MetricDatasetMetricScalar";
import { MetricHostmapRequests } from "./MetricHostmapRequests";
import { MetricsHistogramRequest } from "./MetricsHistogramRequest";
import { MetricsHistogramRequestQuery } from "./MetricsHistogramRequestQuery";
import { MetricsLikeQueryFragmentCloudCost } from "./MetricsLikeQueryFragmentCloudCost";
import { MetricsLikeQueryFragmentMetrics } from "./MetricsLikeQueryFragmentMetrics";
import { MonitorSummaryWidgetDefinition } from "../../datadog-api-client-v1/models/MonitorSummaryWidgetDefinition";
import { NoteBackendDefinition } from "./NoteBackendDefinition";
import { NoteBackendWidget } from "./NoteBackendWidget";
import { NoteWidgetDefinition } from "../../datadog-api-client-v1/models/NoteWidgetDefinition";
import { NumberBarTableColumnFormat } from "./NumberBarTableColumnFormat";
import { NumberBarTableColumnFormatBar } from "./NumberBarTableColumnFormatBar";
import { NumberBarTableColumnFormatNumber } from "./NumberBarTableColumnFormatNumber";
import { NumberFormatUnitCanonical } from "./NumberFormatUnitCanonical";
import { NumberFormatUnitCustom } from "./NumberFormatUnitCustom";
import { NumberFormatUnitScale } from "./NumberFormatUnitScale";
import { NumberReferenceTableColumn } from "./NumberReferenceTableColumn";
import { NumberReferenceTableColumnReference } from "./NumberReferenceTableColumnReference";
import { OccurrenceFilter } from "./OccurrenceFilter";
import { PointPlotBackendDefinition } from "./PointPlotBackendDefinition";
import { PointPlotBackendWidget } from "./PointPlotBackendWidget";
import { PointPlotDataProjectionRequest } from "./PointPlotDataProjectionRequest";
import { PointPlotProjection } from "./PointPlotProjection";
import { PointPlotProjectionDimension } from "../../datadog-api-client-v1/models/PointPlotProjectionDimension";
import { PointPlotProjectionDimensionsItems } from "./PointPlotProjectionDimensionsItems";
import { PointPlotWidgetDefinition } from "../../datadog-api-client-v1/models/PointPlotWidgetDefinition";
import { PointPlotWidgetLegend } from "../../datadog-api-client-v1/models/PointPlotWidgetLegend";
import { PointPlotWidgetRequest } from "../../datadog-api-client-v1/models/PointPlotWidgetRequest";
import { PowerpackBackendDefinition } from "./PowerpackBackendDefinition";
import { PowerpackBackendTemplateVariable } from "./PowerpackBackendTemplateVariable";
import { PowerpackBackendTemplateVariables } from "./PowerpackBackendTemplateVariables";
import { PowerpackBackendWidget } from "./PowerpackBackendWidget";
import { PowerpackTemplateVariableContents } from "../../datadog-api-client-v1/models/PowerpackTemplateVariableContents";
import { PowerpackTemplateVariables } from "../../datadog-api-client-v1/models/PowerpackTemplateVariables";
import { PowerpackWidgetDefinition } from "../../datadog-api-client-v1/models/PowerpackWidgetDefinition";
import { PresetPeriodTableColumn } from "./PresetPeriodTableColumn";
import { PresetPeriodTableColumnPreset } from "./PresetPeriodTableColumnPreset";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { ProductAnalyticsAudienceAccountSubquery } from "../../datadog-api-client-v1/models/ProductAnalyticsAudienceAccountSubquery";
import { ProductAnalyticsAudienceFilters } from "../../datadog-api-client-v1/models/ProductAnalyticsAudienceFilters";
import { ProductAnalyticsAudienceOccurrenceFilter } from "../../datadog-api-client-v1/models/ProductAnalyticsAudienceOccurrenceFilter";
import { ProductAnalyticsAudienceSegmentSubquery } from "../../datadog-api-client-v1/models/ProductAnalyticsAudienceSegmentSubquery";
import { ProductAnalyticsAudienceUserSubquery } from "../../datadog-api-client-v1/models/ProductAnalyticsAudienceUserSubquery";
import { ProductAnalyticsCompute } from "./ProductAnalyticsCompute";
import { ProductAnalyticsEventOccurrenceQuery } from "./ProductAnalyticsEventOccurrenceQuery";
import { ProductAnalyticsEventOccurrenceQuerySearch } from "./ProductAnalyticsEventOccurrenceQuerySearch";
import { ProductAnalyticsExtendedCompute } from "../../datadog-api-client-v1/models/ProductAnalyticsExtendedCompute";
import { ProductAnalyticsExtendedGroupBy } from "../../datadog-api-client-v1/models/ProductAnalyticsExtendedGroupBy";
import { ProductAnalyticsFunnelCompute } from "../../datadog-api-client-v1/models/ProductAnalyticsFunnelCompute";
import { ProductAnalyticsFunnelGroupBy } from "../../datadog-api-client-v1/models/ProductAnalyticsFunnelGroupBy";
import { ProductAnalyticsFunnelGroupBySort } from "../../datadog-api-client-v1/models/ProductAnalyticsFunnelGroupBySort";
import { ProductAnalyticsFunnelQuery } from "../../datadog-api-client-v1/models/ProductAnalyticsFunnelQuery";
import { ProductAnalyticsFunnelRequest } from "../../datadog-api-client-v1/models/ProductAnalyticsFunnelRequest";
import { ProductAnalyticsFunnelWidgetDefinition } from "../../datadog-api-client-v1/models/ProductAnalyticsFunnelWidgetDefinition";
import { ProductAnalyticsGroupBy } from "./ProductAnalyticsGroupBy";
import { ProductAnalyticsJourneyDataset } from "./ProductAnalyticsJourneyDataset";
import { ProductAnalyticsJourneyDatasetSearch } from "./ProductAnalyticsJourneyDatasetSearch";
import { ProductAnalyticsStreamQuery } from "./ProductAnalyticsStreamQuery";
import { PublishedAnalysis } from "./PublishedAnalysis";
import { PublishedAnalysisQueryFragment } from "./PublishedAnalysisQueryFragment";
import { QueryTableBackendDefinition } from "./QueryTableBackendDefinition";
import { QueryTableBackendRequest20270101OneOf } from "./QueryTableBackendRequest20270101OneOf";
import { QueryTableBackendRequest20270101OneOf4459913248 } from "./QueryTableBackendRequest20270101OneOf4459913248";
import { QueryTableBackendRequest20270101OneOf4459916288 } from "./QueryTableBackendRequest20270101OneOf4459916288";
import { QueryTableBackendRequest20270101OneOf4459919328 } from "./QueryTableBackendRequest20270101OneOf4459919328";
import { QueryTableBackendRequest20270101OneOf4460101856 } from "./QueryTableBackendRequest20270101OneOf4460101856";
import { QueryTableBackendRequest20270101OneOf4460104096 } from "./QueryTableBackendRequest20270101OneOf4460104096";
import { QueryTableBackendRequest20270101OneOf4460106336 } from "./QueryTableBackendRequest20270101OneOf4460106336";
import { QueryTableBackendRequest20270101OneOf4460108576 } from "./QueryTableBackendRequest20270101OneOf4460108576";
import { QueryTableBackendRequest20270101OneOf4460110816 } from "./QueryTableBackendRequest20270101OneOf4460110816";
import { QueryTableBackendRequest20270101OneOf4460113056 } from "./QueryTableBackendRequest20270101OneOf4460113056";
import { QueryTableBackendRequest20270101OneOf4460115296 } from "./QueryTableBackendRequest20270101OneOf4460115296";
import { QueryTableBackendRequest20270101OneOf4460117536 } from "./QueryTableBackendRequest20270101OneOf4460117536";
import { QueryTableBackendRequest20270101OneOf4460300064 } from "./QueryTableBackendRequest20270101OneOf4460300064";
import { QueryTableBackendRequest20270101OneOf4460302304 } from "./QueryTableBackendRequest20270101OneOf4460302304";
import { QueryTableBackendRequest20270101OneOf4460304544 } from "./QueryTableBackendRequest20270101OneOf4460304544";
import { QueryTableBackendRequest20270101OneOf4460306784 } from "./QueryTableBackendRequest20270101OneOf4460306784";
import { QueryTableBackendRequest20270101OneOf4460309024 } from "./QueryTableBackendRequest20270101OneOf4460309024";
import { QueryTableBackendRequest20270101OneOf4460311264 } from "./QueryTableBackendRequest20270101OneOf4460311264";
import { QueryTableBackendRequest20270101OneOf4460313504 } from "./QueryTableBackendRequest20270101OneOf4460313504";
import { QueryTableBackendRequest20270101OneOf4460513216 } from "./QueryTableBackendRequest20270101OneOf4460513216";
import { QueryTableBackendRequest20270101OneOf4460516096 } from "./QueryTableBackendRequest20270101OneOf4460516096";
import { QueryTableBackendRequest20270101OneOf4460519136 } from "./QueryTableBackendRequest20270101OneOf4460519136";
import { QueryTableBackendRequest20270101OneOf4460522016 } from "./QueryTableBackendRequest20270101OneOf4460522016";
import { QueryTableBackendWidget } from "./QueryTableBackendWidget";
import { QueryTableColumnLink } from "./QueryTableColumnLink";
import { QueryTableColumnRequest } from "./QueryTableColumnRequest";
import { QueryTableProjection } from "./QueryTableProjection";
import { QueryTableProjectionDimension } from "./QueryTableProjectionDimension";
import { QueryValueBackendDefinition } from "./QueryValueBackendDefinition";
import { QueryValueBackendRequest20270101OneOf } from "./QueryValueBackendRequest20270101OneOf";
import { QueryValueBackendRequest20270101OneOf4460683296 } from "./QueryValueBackendRequest20270101OneOf4460683296";
import { QueryValueBackendRequest20270101OneOf4460685056 } from "./QueryValueBackendRequest20270101OneOf4460685056";
import { QueryValueBackendRequest20270101OneOf4460686496 } from "./QueryValueBackendRequest20270101OneOf4460686496";
import { QueryValueBackendRequest20270101OneOf4460688416 } from "./QueryValueBackendRequest20270101OneOf4460688416";
import { QueryValueBackendRequest20270101OneOf4460689536 } from "./QueryValueBackendRequest20270101OneOf4460689536";
import { QueryValueBackendRequest20270101OneOf4460690656 } from "./QueryValueBackendRequest20270101OneOf4460690656";
import { QueryValueBackendRequest20270101OneOf4460904832 } from "./QueryValueBackendRequest20270101OneOf4460904832";
import { QueryValueBackendRequest20270101OneOf4460905952 } from "./QueryValueBackendRequest20270101OneOf4460905952";
import { QueryValueBackendRequest20270101OneOf4460907072 } from "./QueryValueBackendRequest20270101OneOf4460907072";
import { QueryValueBackendRequest20270101OneOf4460908192 } from "./QueryValueBackendRequest20270101OneOf4460908192";
import { QueryValueBackendRequest20270101OneOf4460909312 } from "./QueryValueBackendRequest20270101OneOf4460909312";
import { QueryValueBackendRequest20270101OneOf4460910432 } from "./QueryValueBackendRequest20270101OneOf4460910432";
import { QueryValueBackendRequest20270101OneOf4460911552 } from "./QueryValueBackendRequest20270101OneOf4460911552";
import { QueryValueBackendRequest20270101OneOf4460912672 } from "./QueryValueBackendRequest20270101OneOf4460912672";
import { QueryValueBackendRequest20270101OneOf4460913792 } from "./QueryValueBackendRequest20270101OneOf4460913792";
import { QueryValueBackendRequest20270101OneOf4460914912 } from "./QueryValueBackendRequest20270101OneOf4460914912";
import { QueryValueBackendRequest20270101OneOf4460916032 } from "./QueryValueBackendRequest20270101OneOf4460916032";
import { QueryValueBackendRequest20270101OneOf4460917152 } from "./QueryValueBackendRequest20270101OneOf4460917152";
import { QueryValueBackendRequest20270101OneOf4460918912 } from "./QueryValueBackendRequest20270101OneOf4460918912";
import { QueryValueBackendWidget } from "./QueryValueBackendWidget";
import { QueryValueProjection } from "./QueryValueProjection";
import { QueryValueWidgetComparison } from "../../datadog-api-client-v1/models/QueryValueWidgetComparison";
import { QueryValueWidgetDefinition } from "../../datadog-api-client-v1/models/QueryValueWidgetDefinition";
import { QueryValueWidgetRequest } from "../../datadog-api-client-v1/models/QueryValueWidgetRequest";
import { RUMIssueStreamQuery } from "./RUMIssueStreamQuery";
import { RUMIssueStreamQueryInvestigation } from "./RUMIssueStreamQueryInvestigation";
import { RecommendationsStreamQuery } from "./RecommendationsStreamQuery";
import { RecommendationsStreamRequest } from "./RecommendationsStreamRequest";
import { RecommendationsStreamRequestColumnsItems } from "./RecommendationsStreamRequestColumnsItems";
import { ReferentialDatasetManagedResource } from "./ReferentialDatasetManagedResource";
import { ReferentialDatasetReferenceTable } from "./ReferentialDatasetReferenceTable";
import { ReferentialQueryFragmentManagedResource } from "./ReferentialQueryFragmentManagedResource";
import { ReferentialQueryFragmentReferenceTable } from "./ReferentialQueryFragmentReferenceTable";
import { RelationalDataQuery } from "./RelationalDataQuery";
import { RelationalDataQuerySort } from "./RelationalDataQuerySort";
import { RequestStyle } from "./RequestStyle";
import { RetentionCohortCriteria } from "../../datadog-api-client-v1/models/RetentionCohortCriteria";
import { RetentionCohortCriteriaTimeInterval } from "../../datadog-api-client-v1/models/RetentionCohortCriteriaTimeInterval";
import { RetentionCompute } from "./RetentionCompute";
import { RetentionCurveBackendWidget } from "./RetentionCurveBackendWidget";
import { RetentionCurveDefinition } from "./RetentionCurveDefinition";
import { RetentionCurveStyle } from "../../datadog-api-client-v1/models/RetentionCurveStyle";
import { RetentionCurveWidgetDefinition } from "../../datadog-api-client-v1/models/RetentionCurveWidgetDefinition";
import { RetentionCurveWidgetRequest } from "../../datadog-api-client-v1/models/RetentionCurveWidgetRequest";
import { RetentionFilters } from "../../datadog-api-client-v1/models/RetentionFilters";
import { RetentionGridRequest } from "../../datadog-api-client-v1/models/RetentionGridRequest";
import { RetentionGroupBy } from "../../datadog-api-client-v1/models/RetentionGroupBy";
import { RetentionGroupByItems } from "./RetentionGroupByItems";
import { RetentionGroupByItemsSort } from "./RetentionGroupByItemsSort";
import { RetentionGroupBySort } from "../../datadog-api-client-v1/models/RetentionGroupBySort";
import { RetentionQuery } from "../../datadog-api-client-v1/models/RetentionQuery";
import { RetentionReturnCriteria } from "../../datadog-api-client-v1/models/RetentionReturnCriteria";
import { RetentionReturnCriteriaTimeInterval } from "../../datadog-api-client-v1/models/RetentionReturnCriteriaTimeInterval";
import { RetentionSearch } from "./RetentionSearch";
import { RetentionSearchCohortCriteria } from "./RetentionSearchCohortCriteria";
import { RetentionSearchCohortCriteriaTimeInterval } from "./RetentionSearchCohortCriteriaTimeInterval";
import { RetentionSearchFilters } from "./RetentionSearchFilters";
import { RetentionSearchReturnCriteria } from "./RetentionSearchReturnCriteria";
import { RetentionSearchReturnCriteriaTimeInterval } from "./RetentionSearchReturnCriteriaTimeInterval";
import { ReturnPeriodScope } from "./ReturnPeriodScope";
import { ReturnPeriodScopeTarget } from "./ReturnPeriodScopeTarget";
import { RumStreamQuery } from "./RumStreamQuery";
import { RumStreamRequest } from "./RumStreamRequest";
import { RumStreamRequestColumnsItems } from "./RumStreamRequestColumnsItems";
import { RunChartGroupDimension } from "./RunChartGroupDimension";
import { RunChartLineStyle } from "./RunChartLineStyle";
import { RunChartProjection } from "./RunChartProjection";
import { RunChartValueDimension } from "./RunChartValueDimension";
import { RunChartXDimension } from "./RunChartXDimension";
import { RunWorkflowBackendDefinition } from "./RunWorkflowBackendDefinition";
import { RunWorkflowBackendWidget } from "./RunWorkflowBackendWidget";
import { RunWorkflowExecutionInput } from "./RunWorkflowExecutionInput";
import { RunWorkflowWidgetDefinition } from "../../datadog-api-client-v1/models/RunWorkflowWidgetDefinition";
import { RunWorkflowWidgetInput } from "../../datadog-api-client-v1/models/RunWorkflowWidgetInput";
import { SLOListWidgetDefinition } from "../../datadog-api-client-v1/models/SLOListWidgetDefinition";
import { SLOListWidgetQuery } from "../../datadog-api-client-v1/models/SLOListWidgetQuery";
import { SLOListWidgetRequest } from "../../datadog-api-client-v1/models/SLOListWidgetRequest";
import { SLOWidgetDefinition } from "../../datadog-api-client-v1/models/SLOWidgetDefinition";
import { SampledAnalysisQuery } from "./SampledAnalysisQuery";
import { SampledAnalysisQuerySample } from "./SampledAnalysisQuerySample";
import { SankeyBackendWidget } from "./SankeyBackendWidget";
import { SankeyDefinition } from "./SankeyDefinition";
import { SankeyJoinKeys } from "../../datadog-api-client-v1/models/SankeyJoinKeys";
import { SankeyNetworkQuery } from "../../datadog-api-client-v1/models/SankeyNetworkQuery";
import { SankeyNetworkQueryCompute } from "../../datadog-api-client-v1/models/SankeyNetworkQueryCompute";
import { SankeyNetworkQuerySort } from "../../datadog-api-client-v1/models/SankeyNetworkQuerySort";
import { SankeyNetworkRequest } from "../../datadog-api-client-v1/models/SankeyNetworkRequest";
import { SankeyRumQuery } from "../../datadog-api-client-v1/models/SankeyRumQuery";
import { SankeyRumRequest } from "../../datadog-api-client-v1/models/SankeyRumRequest";
import { SankeyWidgetDefinition } from "../../datadog-api-client-v1/models/SankeyWidgetDefinition";
import { ScalarFormulaRequest } from "./ScalarFormulaRequest";
import { ScalarFormulaSort } from "./ScalarFormulaSort";
import { ScatterPlotLegendType20270101OneOf } from "./ScatterPlotLegendType20270101OneOf";
import { ScatterPlotLegendType20270101OneOf4461516160 } from "./ScatterPlotLegendType20270101OneOf4461516160";
import { ScatterPlotRequest } from "../../datadog-api-client-v1/models/ScatterPlotRequest";
import { ScatterPlotWidgetDefinition } from "../../datadog-api-client-v1/models/ScatterPlotWidgetDefinition";
import { ScatterPlotWidgetDefinitionRequests } from "../../datadog-api-client-v1/models/ScatterPlotWidgetDefinitionRequests";
import { ScatterplotBackendAxisRequest } from "./ScatterplotBackendAxisRequest";
import { ScatterplotBackendDefinition } from "./ScatterplotBackendDefinition";
import { ScatterplotBackendTableRequest20270101OneOf } from "./ScatterplotBackendTableRequest20270101OneOf";
import { ScatterplotBackendTableRequest20270101OneOf4461521920 } from "./ScatterplotBackendTableRequest20270101OneOf4461521920";
import { ScatterplotBackendTableRequest20270101OneOf4461523200 } from "./ScatterplotBackendTableRequest20270101OneOf4461523200";
import { ScatterplotBackendTableRequest20270101OneOf4461524480 } from "./ScatterplotBackendTableRequest20270101OneOf4461524480";
import { ScatterplotBackendTableRequest20270101OneOf4461525600 } from "./ScatterplotBackendTableRequest20270101OneOf4461525600";
import { ScatterplotBackendTableRequest20270101OneOf4461756480 } from "./ScatterplotBackendTableRequest20270101OneOf4461756480";
import { ScatterplotBackendWidget } from "./ScatterplotBackendWidget";
import { ScatterplotFormula } from "./ScatterplotFormula";
import { ScatterplotFormulaLimit } from "./ScatterplotFormulaLimit";
import { ScatterplotProjection } from "./ScatterplotProjection";
import { ScatterplotProjectionDimensionsItems } from "./ScatterplotProjectionDimensionsItems";
import { ScatterplotRequests20270101OneOf } from "./ScatterplotRequests20270101OneOf";
import { ScatterplotRequests20270101OneOf4461761120 } from "./ScatterplotRequests20270101OneOf4461761120";
import { ScatterplotTableRequest } from "../../datadog-api-client-v1/models/ScatterplotTableRequest";
import { ScatterplotWidgetFormula } from "../../datadog-api-client-v1/models/ScatterplotWidgetFormula";
import { SecurityRuntimePatternStreamQuery } from "./SecurityRuntimePatternStreamQuery";
import { SecurityRuntimePatternStreamRequest } from "./SecurityRuntimePatternStreamRequest";
import { SecurityRuntimePatternStreamRequestColumnsItems } from "./SecurityRuntimePatternStreamRequestColumnsItems";
import { SecurityRuntimeStreamQuery } from "./SecurityRuntimeStreamQuery";
import { SecurityRuntimeStreamRequest } from "./SecurityRuntimeStreamRequest";
import { SecurityRuntimeStreamRequestColumnsItems } from "./SecurityRuntimeStreamRequestColumnsItems";
import { ServiceMapBackendWidget } from "./ServiceMapBackendWidget";
import { ServiceMapDefinition } from "./ServiceMapDefinition";
import { ServiceMapWidgetDefinition } from "../../datadog-api-client-v1/models/ServiceMapWidgetDefinition";
import { ServiceSummaryBackendDefinition } from "./ServiceSummaryBackendDefinition";
import { ServiceSummaryBackendWidget } from "./ServiceSummaryBackendWidget";
import { ServiceSummaryWidgetDefinition } from "../../datadog-api-client-v1/models/ServiceSummaryWidgetDefinition";
import { SloBackendDefinition } from "./SloBackendDefinition";
import { SloBackendWidget } from "./SloBackendWidget";
import { SloListBackendDefinition } from "./SloListBackendDefinition";
import { SloListBackendWidget } from "./SloListBackendWidget";
import { SnowflakeQueryDataset } from "./SnowflakeQueryDataset";
import { SortPair } from "./SortPair";
import { SplitConfig } from "./SplitConfig";
import { SplitConfigSort } from "./SplitConfigSort";
import { SplitConfigSortCompute } from "../../datadog-api-client-v1/models/SplitConfigSortCompute";
import { SplitDimension } from "./SplitDimension";
import { SplitGraphWidgetDefinition } from "../../datadog-api-client-v1/models/SplitGraphWidgetDefinition";
import { SplitGroupBackendDefinition } from "./SplitGroupBackendDefinition";
import { SplitGroupBackendWidget } from "./SplitGroupBackendWidget";
import { SplitSort } from "../../datadog-api-client-v1/models/SplitSort";
import { SplitSortCompute } from "./SplitSortCompute";
import { SplitVectorEntryItem } from "../../datadog-api-client-v1/models/SplitVectorEntryItem";
import { SplitVectorTagFilter } from "./SplitVectorTagFilter";
import { SqlAnalysisQuery } from "./SqlAnalysisQuery";
import { StringReferenceTableColumn } from "./StringReferenceTableColumn";
import { StringReferenceTableColumnReference } from "./StringReferenceTableColumnReference";
import { StringTableColumnFormat } from "./StringTableColumnFormat";
import { StructuredAnalysisAggregation } from "./StructuredAnalysisAggregation";
import { StructuredAnalysisCalculatedField } from "./StructuredAnalysisCalculatedField";
import { StructuredAnalysisCast } from "./StructuredAnalysisCast";
import { StructuredAnalysisColumnExtraction } from "./StructuredAnalysisColumnExtraction";
import { StructuredAnalysisCompute } from "./StructuredAnalysisCompute";
import { StructuredAnalysisDestructure } from "./StructuredAnalysisDestructure";
import { StructuredAnalysisDestructureColumnsItems } from "./StructuredAnalysisDestructureColumnsItems";
import { StructuredAnalysisFilter } from "./StructuredAnalysisFilter";
import { StructuredAnalysisGroupBy } from "./StructuredAnalysisGroupBy";
import { StructuredAnalysisJoin } from "./StructuredAnalysisJoin";
import { StructuredAnalysisJoinCondition } from "./StructuredAnalysisJoinCondition";
import { StructuredAnalysisLimit } from "./StructuredAnalysisLimit";
import { StructuredAnalysisProjection } from "./StructuredAnalysisProjection";
import { StructuredAnalysisProjectionColumnsItems } from "./StructuredAnalysisProjectionColumnsItems";
import { StructuredAnalysisQuery } from "./StructuredAnalysisQuery";
import { StructuredAnalysisSort } from "./StructuredAnalysisSort";
import { StructuredAnalysisTimeAggregation } from "./StructuredAnalysisTimeAggregation";
import { SunburstBackendDefinition } from "./SunburstBackendDefinition";
import { SunburstBackendRequest20270101OneOf } from "./SunburstBackendRequest20270101OneOf";
import { SunburstBackendRequest20270101OneOf4462422560 } from "./SunburstBackendRequest20270101OneOf4462422560";
import { SunburstBackendRequest20270101OneOf4462423840 } from "./SunburstBackendRequest20270101OneOf4462423840";
import { SunburstBackendRequest20270101OneOf4462424800 } from "./SunburstBackendRequest20270101OneOf4462424800";
import { SunburstBackendWidget } from "./SunburstBackendWidget";
import { SunburstKnownLegend20270101OneOf } from "./SunburstKnownLegend20270101OneOf";
import { SunburstKnownLegend20270101OneOf4462427680 } from "./SunburstKnownLegend20270101OneOf4462427680";
import { SunburstKnownLegend20270101OneOf4462657920 } from "./SunburstKnownLegend20270101OneOf4462657920";
import { SunburstLegend20270101OneOf } from "./SunburstLegend20270101OneOf";
import { SunburstRequestStyle } from "./SunburstRequestStyle";
import { SunburstWidgetDefinition } from "../../datadog-api-client-v1/models/SunburstWidgetDefinition";
import { SunburstWidgetLegendInlineAutomatic } from "../../datadog-api-client-v1/models/SunburstWidgetLegendInlineAutomatic";
import { SunburstWidgetLegendTable } from "../../datadog-api-client-v1/models/SunburstWidgetLegendTable";
import { SunburstWidgetRequest } from "../../datadog-api-client-v1/models/SunburstWidgetRequest";
import { TableColumnComparisonWithOtherColumnDiffFrom } from "./TableColumnComparisonWithOtherColumnDiffFrom";
import { TableColumnComparisonWithOtherColumnPercentDiffFrom } from "./TableColumnComparisonWithOtherColumnPercentDiffFrom";
import { TableColumnComparisonWithOtherColumnPercentOf } from "./TableColumnComparisonWithOtherColumnPercentOf";
import { TableColumnComparisonWithSelf } from "./TableColumnComparisonWithSelf";
import { TableColumnFunction } from "./TableColumnFunction";
import { TableColumnModifier } from "./TableColumnModifier";
import { TableFormula20270101OneOf } from "./TableFormula20270101OneOf";
import { TableFormula20270101OneOf4462669760 } from "./TableFormula20270101OneOf4462669760";
import { TableFormulaAnyOfAnyOfItemLimit } from "./TableFormulaAnyOfAnyOfItemLimit";
import { TableFormulaAnyOfAnyOfItemLimit4452334816 } from "./TableFormulaAnyOfAnyOfItemLimit4452334816";
import { TableGroupKey } from "./TableGroupKey";
import { TableRowGroupBy } from "./TableRowGroupBy";
import { TableRowGroupByFormat } from "./TableRowGroupByFormat";
import { TableRows } from "./TableRows";
import { TableSort } from "./TableSort";
import { TableSortColumnsItems } from "./TableSortColumnsItems";
import { TableTrendCellDisplayModeOptions } from "./TableTrendCellDisplayModeOptions";
import { TableWidgetDefinition } from "../../datadog-api-client-v1/models/TableWidgetDefinition";
import { TableWidgetRequest } from "../../datadog-api-client-v1/models/TableWidgetRequest";
import { TableWidgetTextFormatMatch } from "../../datadog-api-client-v1/models/TableWidgetTextFormatMatch";
import { TableWidgetTextFormatReplaceAll } from "../../datadog-api-client-v1/models/TableWidgetTextFormatReplaceAll";
import { TableWidgetTextFormatReplaceSubstring } from "../../datadog-api-client-v1/models/TableWidgetTextFormatReplaceSubstring";
import { TableWidgetTextFormatRule } from "../../datadog-api-client-v1/models/TableWidgetTextFormatRule";
import { TabularAdvancedQueryRequest } from "./TabularAdvancedQueryRequest";
import { TabularLocalDatasetRequest } from "./TabularLocalDatasetRequest";
import { TextFormattingRule } from "./TextFormattingRule";
import { TextFormattingRule20270101ReplaceOneOf } from "./TextFormattingRule20270101ReplaceOneOf";
import { TextFormattingRule20270101ReplaceOneOf4462863328 } from "./TextFormattingRule20270101ReplaceOneOf4462863328";
import { TextMatch20270101OneOf } from "./TextMatch20270101OneOf";
import { TextMatch20270101OneOf4462865408 } from "./TextMatch20270101OneOf4462865408";
import { TextMatch20270101OneOf4462866048 } from "./TextMatch20270101OneOf4462866048";
import { TextMatch20270101OneOf4462866688 } from "./TextMatch20270101OneOf4462866688";
import { TextMatch20270101OneOf4462867328 } from "./TextMatch20270101OneOf4462867328";
import { TextMatch20270101OneOf4462867968 } from "./TextMatch20270101OneOf4462867968";
import { TextReplacementRule } from "./TextReplacementRule";
import { TextReplacementRule20270101ReplaceOneOf } from "./TextReplacementRule20270101ReplaceOneOf";
import { TextReplacementRule20270101ReplaceOneOf4462870048 } from "./TextReplacementRule20270101ReplaceOneOf4462870048";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";
import { TimeWindow } from "./TimeWindow";
import { TimeseriesBackendWidget } from "./TimeseriesBackendWidget";
import { TimeseriesBackground } from "./TimeseriesBackground";
import { TimeseriesFormulaRequest } from "./TimeseriesFormulaRequest";
import { TimeseriesProjection } from "./TimeseriesProjection";
import { TimeseriesProjectionDimensionsItems } from "./TimeseriesProjectionDimensionsItems";
import { TimeseriesRequestStyle } from "./TimeseriesRequestStyle";
import { TimeseriesWidgetAdvancedQueryRequest } from "./TimeseriesWidgetAdvancedQueryRequest";
import { TimeseriesWidgetApmRequest } from "./TimeseriesWidgetApmRequest";
import { TimeseriesWidgetAppsecSpanRequest } from "./TimeseriesWidgetAppsecSpanRequest";
import { TimeseriesWidgetAuditRequest } from "./TimeseriesWidgetAuditRequest";
import { TimeseriesWidgetCiPipelineRequest } from "./TimeseriesWidgetCiPipelineRequest";
import { TimeseriesWidgetCiTestRequest } from "./TimeseriesWidgetCiTestRequest";
import { TimeseriesWidgetComplianceFindingsRequest } from "./TimeseriesWidgetComplianceFindingsRequest";
import { TimeseriesWidgetDdsqlRequest } from "./TimeseriesWidgetDdsqlRequest";
import { TimeseriesWidgetDefinition } from "./TimeseriesWidgetDefinition";
import { TimeseriesWidgetEventRequest } from "./TimeseriesWidgetEventRequest";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { TimeseriesWidgetFormulaRequest } from "./TimeseriesWidgetFormulaRequest";
import { TimeseriesWidgetLegacyEventRequest } from "./TimeseriesWidgetLegacyEventRequest";
import { TimeseriesWidgetLegacyProfileMetricsRequest } from "./TimeseriesWidgetLegacyProfileMetricsRequest";
import { TimeseriesWidgetLocalDatasetRequest } from "./TimeseriesWidgetLocalDatasetRequest";
import { TimeseriesWidgetLogRequest } from "./TimeseriesWidgetLogRequest";
import { TimeseriesWidgetMetricRequest } from "./TimeseriesWidgetMetricRequest";
import { TimeseriesWidgetNetworkRequest } from "./TimeseriesWidgetNetworkRequest";
import { TimeseriesWidgetProcessRequest } from "./TimeseriesWidgetProcessRequest";
import { TimeseriesWidgetProfilingMetricsRequest } from "./TimeseriesWidgetProfilingMetricsRequest";
import { TimeseriesWidgetRumRequest } from "./TimeseriesWidgetRumRequest";
import { TimeseriesWidgetSecurityRequest } from "./TimeseriesWidgetSecurityRequest";
import { TimeseriesWidgetSyntheticsBatchesRequest } from "./TimeseriesWidgetSyntheticsBatchesRequest";
import { TimeseriesWidgetSyntheticsTestRunsRequest } from "./TimeseriesWidgetSyntheticsTestRunsRequest";
import { TimeseriesXAxis } from "./TimeseriesXAxis";
import { TimeseriesXAxisDateFormat } from "./TimeseriesXAxisDateFormat";
import { ToplistBackendDefinition } from "./ToplistBackendDefinition";
import { ToplistBackendDefinitionStyle } from "./ToplistBackendDefinitionStyle";
import { ToplistBackendDefinitionStyle20270101DisplayOneOf } from "./ToplistBackendDefinitionStyle20270101DisplayOneOf";
import { ToplistBackendDefinitionStyle20270101DisplayOneOf4453175744 } from "./ToplistBackendDefinitionStyle20270101DisplayOneOf4453175744";
import { ToplistBackendRequest20270101OneOf } from "./ToplistBackendRequest20270101OneOf";
import { ToplistBackendRequest20270101OneOf4463319360 } from "./ToplistBackendRequest20270101OneOf4463319360";
import { ToplistBackendRequest20270101OneOf4463320800 } from "./ToplistBackendRequest20270101OneOf4463320800";
import { ToplistBackendRequest20270101OneOf4463321920 } from "./ToplistBackendRequest20270101OneOf4463321920";
import { ToplistBackendRequest20270101OneOf4463323520 } from "./ToplistBackendRequest20270101OneOf4463323520";
import { ToplistBackendRequest20270101OneOf4463325120 } from "./ToplistBackendRequest20270101OneOf4463325120";
import { ToplistBackendRequest20270101OneOf4463325920 } from "./ToplistBackendRequest20270101OneOf4463325920";
import { ToplistBackendRequest20270101OneOf4463326720 } from "./ToplistBackendRequest20270101OneOf4463326720";
import { ToplistBackendRequest20270101OneOf4463327520 } from "./ToplistBackendRequest20270101OneOf4463327520";
import { ToplistBackendRequest20270101OneOf4463328320 } from "./ToplistBackendRequest20270101OneOf4463328320";
import { ToplistBackendRequest20270101OneOf4463329120 } from "./ToplistBackendRequest20270101OneOf4463329120";
import { ToplistBackendRequest20270101OneOf4463526592 } from "./ToplistBackendRequest20270101OneOf4463526592";
import { ToplistBackendRequest20270101OneOf4463527392 } from "./ToplistBackendRequest20270101OneOf4463527392";
import { ToplistBackendRequest20270101OneOf4463528192 } from "./ToplistBackendRequest20270101OneOf4463528192";
import { ToplistBackendRequest20270101OneOf4463528992 } from "./ToplistBackendRequest20270101OneOf4463528992";
import { ToplistBackendRequest20270101OneOf4463529792 } from "./ToplistBackendRequest20270101OneOf4463529792";
import { ToplistBackendRequest20270101OneOf4463530592 } from "./ToplistBackendRequest20270101OneOf4463530592";
import { ToplistBackendRequest20270101OneOf4463531392 } from "./ToplistBackendRequest20270101OneOf4463531392";
import { ToplistBackendRequest20270101OneOf4463532192 } from "./ToplistBackendRequest20270101OneOf4463532192";
import { ToplistBackendRequest20270101OneOf4463532992 } from "./ToplistBackendRequest20270101OneOf4463532992";
import { ToplistBackendRequest20270101OneOf4463533792 } from "./ToplistBackendRequest20270101OneOf4463533792";
import { ToplistBackendRequest20270101OneOf4463535232 } from "./ToplistBackendRequest20270101OneOf4463535232";
import { ToplistBackendWidget } from "./ToplistBackendWidget";
import { ToplistWidgetDefinition } from "../../datadog-api-client-v1/models/ToplistWidgetDefinition";
import { ToplistWidgetFlat } from "../../datadog-api-client-v1/models/ToplistWidgetFlat";
import { ToplistWidgetRequest } from "../../datadog-api-client-v1/models/ToplistWidgetRequest";
import { ToplistWidgetStacked } from "../../datadog-api-client-v1/models/ToplistWidgetStacked";
import { ToplistWidgetStyle } from "../../datadog-api-client-v1/models/ToplistWidgetStyle";
import { TopologyMapBackendDefinition } from "./TopologyMapBackendDefinition";
import { TopologyMapBackendWidget } from "./TopologyMapBackendWidget";
import { TopologyMapInlineData } from "../../datadog-api-client-v1/models/TopologyMapInlineData";
import { TopologyMapInlineEdgeColumn } from "../../datadog-api-client-v1/models/TopologyMapInlineEdgeColumn";
import { TopologyMapInlineEdgesData } from "../../datadog-api-client-v1/models/TopologyMapInlineEdgesData";
import { TopologyMapInlineNodeIdColumn } from "../../datadog-api-client-v1/models/TopologyMapInlineNodeIdColumn";
import { TopologyMapInlineNodeStringColumn } from "../../datadog-api-client-v1/models/TopologyMapInlineNodeStringColumn";
import { TopologyMapInlineNodeValueColumn } from "../../datadog-api-client-v1/models/TopologyMapInlineNodeValueColumn";
import { TopologyMapInlineNodeValueColumnMeta } from "../../datadog-api-client-v1/models/TopologyMapInlineNodeValueColumnMeta";
import { TopologyMapInlineNodesData } from "../../datadog-api-client-v1/models/TopologyMapInlineNodesData";
import { TopologyMapLayout } from "../../datadog-api-client-v1/models/TopologyMapLayout";
import { TopologyMapWidgetDefinitionCustom } from "../../datadog-api-client-v1/models/TopologyMapWidgetDefinitionCustom";
import { TopologyMapWidgetDefinitionDataStreams } from "../../datadog-api-client-v1/models/TopologyMapWidgetDefinitionDataStreams";
import { TopologyMapWidgetDefinitionServiceMap } from "../../datadog-api-client-v1/models/TopologyMapWidgetDefinitionServiceMap";
import { TopologyQueryDataStreams } from "../../datadog-api-client-v1/models/TopologyQueryDataStreams";
import { TopologyQueryServiceMap } from "../../datadog-api-client-v1/models/TopologyQueryServiceMap";
import { TopologyRequestCustom } from "../../datadog-api-client-v1/models/TopologyRequestCustom";
import { TopologyRequestCustomProjection } from "../../datadog-api-client-v1/models/TopologyRequestCustomProjection";
import { TopologyRequestCustomProjectionDimension } from "../../datadog-api-client-v1/models/TopologyRequestCustomProjectionDimension";
import { TopologyRequestDataStreams } from "../../datadog-api-client-v1/models/TopologyRequestDataStreams";
import { TopologyRequestServiceMap } from "../../datadog-api-client-v1/models/TopologyRequestServiceMap";
import { TraceStreamQuery } from "./TraceStreamQuery";
import { TraceStreamRequest } from "./TraceStreamRequest";
import { TraceStreamRequestColumnsItems } from "./TraceStreamRequestColumnsItems";
import { TreeDataProjectionBarChart } from "./TreeDataProjectionBarChart";
import { TreeDataProjectionBarChartDimensionsItems } from "./TreeDataProjectionBarChartDimensionsItems";
import { TreeDataProjectionSunburst } from "./TreeDataProjectionSunburst";
import { TreeDataProjectionSunburstDimensionsItems } from "./TreeDataProjectionSunburstDimensionsItems";
import { TreeDataProjectionToplist } from "./TreeDataProjectionToplist";
import { TreeDataProjectionToplistDimensionsItems } from "./TreeDataProjectionToplistDimensionsItems";
import { TreeDataProjectionTreemap } from "./TreeDataProjectionTreemap";
import { TreeDataProjectionTreemapDimensionsItems } from "./TreeDataProjectionTreemapDimensionsItems";
import { TreeMapWidgetDefinition } from "../../datadog-api-client-v1/models/TreeMapWidgetDefinition";
import { TreeMapWidgetRequest } from "../../datadog-api-client-v1/models/TreeMapWidgetRequest";
import { TreemapBackendDefinition } from "./TreemapBackendDefinition";
import { TreemapBackendRequest20270101OneOf } from "./TreemapBackendRequest20270101OneOf";
import { TreemapBackendRequest20270101OneOf4463750144 } from "./TreemapBackendRequest20270101OneOf4463750144";
import { TreemapBackendRequest20270101OneOf4463751424 } from "./TreemapBackendRequest20270101OneOf4463751424";
import { TreemapBackendRequest20270101OneOf4463752384 } from "./TreemapBackendRequest20270101OneOf4463752384";
import { TreemapBackendRequest20270101OneOf4463753824 } from "./TreemapBackendRequest20270101OneOf4463753824";
import { TreemapBackendWidget } from "./TreemapBackendWidget";
import { TreemapRequestStyle } from "./TreemapRequestStyle";
import { TrendTableColumnFormat } from "./TrendTableColumnFormat";
import { UnifiedIssueStreamQuery } from "./UnifiedIssueStreamQuery";
import { UnifiedIssueStreamQueryInvestigation } from "./UnifiedIssueStreamQueryInvestigation";
import { UnifiedIssueStreamRequest } from "./UnifiedIssueStreamRequest";
import { UserDefinedLink } from "./UserDefinedLink";
import { UserJourneyFormulaCompute } from "../../datadog-api-client-v1/models/UserJourneyFormulaCompute";
import { UserJourneyFormulaGroupBy } from "../../datadog-api-client-v1/models/UserJourneyFormulaGroupBy";
import { UserJourneyGroupBy } from "./UserJourneyGroupBy";
import { UserJourneyJoinKeys } from "../../datadog-api-client-v1/models/UserJourneyJoinKeys";
import { UserJourneySearch } from "./UserJourneySearch";
import { UserJourneySearchFilters } from "./UserJourneySearchFilters";
import { UserJourneySearchGraphFilter } from "../../datadog-api-client-v1/models/UserJourneySearchGraphFilter";
import { UserJourneySearchJoinKeys } from "./UserJourneySearchJoinKeys";
import { UserJourneySearchTarget } from "../../datadog-api-client-v1/models/UserJourneySearchTarget";
import { WatchdogAlertsQuery } from "./WatchdogAlertsQuery";
import { WatchdogAlertsRequest } from "./WatchdogAlertsRequest";
import { WatchdogAlertsRequestColumnsItems } from "./WatchdogAlertsRequestColumnsItems";
import { Widget } from "../../datadog-api-client-v1/models/Widget";
import { WidgetAxis } from "./WidgetAxis";
import { WidgetConditionalFormat } from "../../datadog-api-client-v1/models/WidgetConditionalFormat";
import { WidgetEvent } from "../../datadog-api-client-v1/models/WidgetEvent";
import { WidgetFieldSort } from "../../datadog-api-client-v1/models/WidgetFieldSort";
import { WidgetFormula } from "./WidgetFormula";
import { WidgetFormulaCellDisplayModeOptions } from "../../datadog-api-client-v1/models/WidgetFormulaCellDisplayModeOptions";
import { WidgetFormulaLimit } from "./WidgetFormulaLimit";
import { WidgetFormulaSort } from "../../datadog-api-client-v1/models/WidgetFormulaSort";
import { WidgetFormulaStyle } from "./WidgetFormulaStyle";
import { WidgetGroupSort } from "../../datadog-api-client-v1/models/WidgetGroupSort";
import { WidgetLegacyLiveSpan } from "../../datadog-api-client-v1/models/WidgetLegacyLiveSpan";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetNewFixedSpan } from "../../datadog-api-client-v1/models/WidgetNewFixedSpan";
import { WidgetNewLiveSpan } from "../../datadog-api-client-v1/models/WidgetNewLiveSpan";
import { WidgetNumberFormat } from "./WidgetNumberFormat";
import { WidgetRequestStyle } from "../../datadog-api-client-v1/models/WidgetRequestStyle";
import { WidgetSortBy } from "../../datadog-api-client-v1/models/WidgetSortBy";
import { WidgetStyle } from "../../datadog-api-client-v1/models/WidgetStyle";
import { WidgetTime20270101OneOf } from "./WidgetTime20270101OneOf";
import { WidgetTime20270101OneOf4464103552 } from "./WidgetTime20270101OneOf4464103552";
import { WidgetTime20270101OneOf4464104512 } from "./WidgetTime20270101OneOf4464104512";
import { WidgetTime20270101OneOf4464105312 } from "./WidgetTime20270101OneOf4464105312";
import { WidgetTime20270101OneOf4464105952 } from "../../datadog-api-client-v1/models/WidgetTime20270101OneOf4464105952";
import { WildcardBackendDefinition } from "./WildcardBackendDefinition";
import { WildcardBackendDefinitionSpecification } from "./WildcardBackendDefinitionSpecification";
import { WildcardBackendWidget } from "./WildcardBackendWidget";
import { WildcardWidgetDefinition } from "../../datadog-api-client-v1/models/WildcardWidgetDefinition";
import { WildcardWidgetSpecification } from "../../datadog-api-client-v1/models/WildcardWidgetSpecification";
import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
} from "../../datadog-api-client-common/util";
import { logger } from "../../../logger";
import type * as LosslessJson from "lossless-json";

let losslessJson: typeof LosslessJson | undefined;

// Loaded only when preserveLargeIntegers is enabled: lossless-json needs Node.js 14 or later.
function loadLosslessJson(): typeof LosslessJson {
  if (losslessJson === undefined) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      losslessJson = require("lossless-json") as typeof LosslessJson;
    } catch (error) {
      throw new Error(
        `preserveLargeIntegers requires Node.js 14 or later: ${error}`
      );
    }
  }
  return losslessJson;
}

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
  APMIssueStreamQueryDataSource: ["apm_issue_stream"],
  ActionsDatastoreDatasetDataSource: ["actions_datastore"],
  AdvancedEventPlatformSource: [
    "events",
    "logs",
    "rum",
    "synthetics_test_runs",
    "product_analytics",
    "network",
    "network_device_flows",
    "security_findings",
    "security_signals",
    "ci_pipelines",
    "database_queries",
    "llm_observability",
    "ai_usage",
    "audit",
    "ci_tests",
    "errors",
    "monitors",
    "monitor_groups",
    "spans",
    "security_runtime",
    "synthetics_matches",
  ],
  AdvancedQueryDataType: [
    "string",
    "group",
    "inet",
    "int64",
    "float64",
    "timestamp",
    "date",
    "interval",
    "bool",
    "json",
    "hstore",
    "array<string>",
    "array<int64>",
    "array<float64>",
    "array<timestamp>",
    "array<interval>",
    "array<bool>",
    "array<json>",
  ],
  AdvancedQueryTableCellDisplayMode: ["number", "text", "bar"],
  AggregateAugmentedQueryDataSource: ["aggregate_augmented_query"],
  AggregateAugmentedQueryJoinConditionAugmentAttributeNormalization: [
    "metric_tag",
  ],
  AggregateFilteredQueryDataSource: ["aggregate_filtered_query"],
  AggregateSegmentQueryDataSource: ["aggregate_segment_query"],
  AlertGraphBackendDefinitionType: ["alert_graph"],
  AlertGraphVizType: ["timeseries", "toplist"],
  AlertGraphWidgetDefinitionType: ["alert_graph"],
  AlertValueDefinitionType: ["alert_value"],
  AlertValueWidgetDefinitionType: ["alert_value"],
  AnalysisDatasetDataSource: ["analysis_dataset"],
  AnomalyDetectionConfigDetectionSensitivity: ["never_detect"],
  ApmDependencyStat: [
    "error_rate",
    "avg_duration",
    "avg_root_duration",
    "avg_spans_per_trace",
    "pct_exec_time",
    "pct_of_traces",
    "total_traces_count",
  ],
  ApmMetricStat: [
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
  ApmMetricsHistogramRequestRequestType: ["histogram"],
  ApmMetricsQueryFragmentDataSource: ["apm_metrics"],
  ApmRecommendationsStreamQueryDataSource: ["apm_recommendations_stream"],
  ApmRecommendationsStreamRequestResponseFormat: ["event_list"],
  ApmResourceStat: [
    "errors",
    "error_rate",
    "latency_avg",
    "latency_max",
    "latency_p50",
    "latency_p75",
    "latency_p90",
    "latency_p95",
    "latency_p99",
    "latency_distribution",
    "hits",
    "total_time",
  ],
  ApmStatsHistogramRequestRequestType: ["histogram"],
  ApmStatsQueryRowType: ["service", "span", "resource"],
  AuditStreamQueryDataSource: ["audit_stream"],
  AuditStreamRequestResponseFormat: ["event_list"],
  BackendDistributionYAxisScale: ["linear", "log"],
  BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend: [
    "none",
    "inline",
    "automatic",
  ],
  BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemType: ["stacked"],
  BarChartBackendDefinitionStyleDisplayAnyOfAnyOfItemType4443916544: ["flat"],
  BarChartBackendDefinitionStyleScaling: ["relative", "absolute"],
  BarChartBackendDefinitionType: ["bar_chart"],
  BarChartBackendRequestAnyOfAnyOfItemRequestType: ["advanced_query"],
  BarChartBackendRequestAnyOfAnyOfItemRequestType4443922944: ["ddsql"],
  BarChartBackendRequestAnyOfAnyOfItemRequestType4443924544: ["local_dataset"],
  BarChartBackendRequestAnyOfAnyOfItemResponseFormat: ["tabular"],
  BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443921184: ["scalar"],
  BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443923264: ["scalar"],
  BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443924864: ["tabular"],
  BarChartBackendRequestAnyOfAnyOfItemResponseFormat4443927104: ["scalar"],
  BarChartWidgetDefinitionType: ["bar_chart"],
  BarChartWidgetFlatType: ["flat"],
  BarChartWidgetLegend: ["automatic", "inline", "none"],
  BarChartWidgetScaling: ["absolute", "relative"],
  BarChartWidgetStackedType: ["stacked"],
  BigQueryDatasetDataSource: ["bigquery"],
  CalendarIntervalDayType: ["day"],
  CalendarIntervalMonthType: ["month"],
  CalendarIntervalType: [
    "day",
    "week",
    "month",
    "year",
    "quarter",
    "minute",
    "hour",
  ],
  CalendarIntervalWeekType: ["week"],
  CalendarIntervalYearType: ["year"],
  CalendarShiftUnit: ["d", "w", "mo"],
  CaseMetric: ["time_to_close", "time_to_assign", "event_count"],
  CaseStreamQueryDataSource: ["case_stream"],
  CaseStreamRequestResponseFormat: ["event_list"],
  CellDisplayModeOption: ["number", "bar", "trend"],
  CellScopeCohortTargetAggregationType: ["aggregation"],
  CellScopeCohortTargetAnyOfAnyOfItemValue: ["weighted_avg"],
  CellScopeCohortTargetIndexType: ["index"],
  CellScopeReturnPeriodTargetType: ["index"],
  CellScopeType: ["cell"],
  ChangeBackendDefinitionType: ["change"],
  ChangeBackendRequestAnyOfAnyOfItemResponseFormat: ["scalar"],
  ChangeDirectionality: ["increase_better", "decrease_better", "neutral"],
  ChangeDurationAnyOfAnyOfItemType: ["custom_timeframe"],
  ChangeDurationAnyOfAnyOfItemType4444207072: [
    "previous_timeframe",
    "previous_day",
    "previous_week",
    "previous_month",
  ],
  ChangeLayout: ["one_col", "two_col"],
  ChangeType: ["both", "relative", "absolute"],
  ChangeTypeOptions: ["relative", "absolute"],
  ChangeWidgetDefinitionType: ["change"],
  CheckStatusBackendDefinitionGrouping: ["check", "cluster"],
  CheckStatusBackendDefinitionType: ["check_status"],
  CheckStatusWidgetDefinitionType: ["check_status"],
  CohortDefinitionType: ["cohort"],
  CohortScopeTargetAggregationType: ["aggregation"],
  CohortScopeTargetAnyOfAnyOfItemValue: ["weighted_avg"],
  CohortScopeTargetIndexType: ["index"],
  CohortScopeType: ["cohort"],
  CohortWidgetDefinitionType: ["cohort"],
  Comparator: ["=", ">", ">=", "<", "<="],
  CompareToOptions: [
    "hour_before",
    "day_before",
    "week_before",
    "month_before",
  ],
  ComparisonDurationType: [
    "previous_timeframe",
    "custom_timeframe",
    "previous_day",
    "previous_week",
    "previous_month",
  ],
  CompositeAudienceFiltersQueryDataSource: [
    "product_analytics_audience_filters",
  ],
  CompositeReferentialDataQueryComputeItemsAggregation: [
    "sum",
    "min",
    "max",
    "avg",
    "count",
  ],
  CompositeReferentialDataQueryDataSource: ["reference_table"],
  CompositeStreamRequestRequestType: ["composite_stream"],
  ComputeTableColumnType: ["compute"],
  ContextMenuLinkLabel: [
    "events",
    "logs",
    "rum",
    "product_analytics",
    "network",
    "cloud_cost",
    "functions",
    "hosts",
    "traces",
    "profiles",
    "processes",
    "containers",
    "change_tracking",
    "audit_trail",
    "network_device_flows",
    "devices",
    "recommendations",
    "security_findings",
    "security_signals",
    "security_traces",
    "incidents",
    "cases",
    "metrics_summary",
    "pods",
    "ci_pipelines",
    "database_queries",
    "watch_sessions",
    "gpu_monitoring",
    "llm_observability",
  ],
  CustomTopologyMapInlineEdgeColumnId: ["target", "source"],
  CustomTopologyMapInlineEdgeColumnKind: ["string"],
  CustomTopologyMapInlineNodeIdColumnId: ["id"],
  CustomTopologyMapInlineNodeIdColumnKind: ["string"],
  CustomTopologyMapInlineNodeStringColumnId: ["title", "subtitle"],
  CustomTopologyMapInlineNodeStringColumnKind: ["string"],
  CustomTopologyMapInlineNodeValueColumnKind: ["scalar"],
  CustomTopologyMapLayoutDirection: [
    "top-to-bottom",
    "bottom-to-top",
    "left-to-right",
    "right-to-left",
  ],
  CustomTopologyMapLayoutType: ["hierarchical"],
  CustomTopologyMapProjectionType: ["custom_topology_map_node"],
  CustomTopologyMapTileDefRequestResponseFormat: ["scalar"],
  DDSQLTableRequestRequestType: ["ddsql"],
  DDSQLTableRequestResponseFormat: ["scalar"],
  DDSQLTimeseriesRequestRequestType: ["ddsql"],
  DDSQLTimeseriesRequestResponseFormat: ["timeseries"],
  Dashboard20270101SchemaVersion: ["2027-01-01"],
  DashboardExperienceType: ["default", "product_analytics"],
  DashboardFixedTimeframeType: ["fixed"],
  DashboardInlineSchema10: ["group", "none"],
  DashboardInlineSchema11: ["none"],
  DashboardInlineSchema12: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema13: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema14: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema15: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema16: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema17: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema18: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema19: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema20: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema21: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema22: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema23: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema24: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema25: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema26: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema27: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema28: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema29: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema30: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema31: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema32: ["group"],
  DashboardInlineSchema33: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema34: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema35: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema36: ["auto", "compact", "full", "fit-content"],
  DashboardInlineSchema37: ["process", "container"],
  DashboardInlineSchema38: ["id", "title", "subtitle"],
  DashboardInlineSchema39: [
    "sum",
    "min",
    "max",
    "avg",
    "count",
    "cardinality",
    "median",
    "delta",
    "latest",
    "earliest",
    "most_frequent",
    "any",
  ],
  DashboardInlineSchema43: [
    "global",
    "alert",
    "full_week",
    "full_month",
    "week_to_date",
    "month_to_date",
    "year_to_date",
  ],
  DashboardInlineSchema44: ["*", "integer"],
  DashboardInlineSchema46: [
    "burn_rate",
    "error_budget_burndown",
    "error_budget_remaining",
    "slo_status",
  ],
  DashboardInlineSchema49: ["custom_bg", "custom_text", "custom_image"],
  DashboardInlineSchema9: ["auto", "compact", "full", "fit-content"],
  DashboardLayoutType: ["ordered", "free"],
  DashboardLiveTimeframeType: ["live"],
  DashboardReflowType: ["auto", "fixed"],
  DataObservabilityAssetsQueryDataSource: ["data_observability_assets"],
  DataObservabilityAssetsRequestResponseFormat: ["event_list"],
  DataProjectionRequestType: ["data_projection"],
  DatabaseRecommendationsStreamQueryDataSource: [
    "database_recommendations_stream",
  ],
  DatabaseRecommendationsStreamRequestResponseFormat: ["event_list"],
  DatasetListQueryDataSource: ["dataset"],
  DatasetListQueryDataSourceType: ["dataset"],
  DatasetListRequestRequestType: ["dataset_list_rows"],
  Day: [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ],
  DayOfTheMonth: [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
    "11th",
    "12th",
    "13th",
    "14th",
    "15th",
    "16th",
    "17th",
    "18th",
    "19th",
    "20th",
    "21st",
    "22nd",
    "23rd",
    "24th",
    "25th",
    "26th",
    "27th",
    "28th",
    "29th",
    "30th",
    "31st",
  ],
  DetectionRuleStreamQueryDataSource: ["detection_rules"],
  DetectionRuleStreamRequestResponseFormat: ["event_list"],
  DistributionBackendDefinitionLegendLayout: ["vertical", "horizontal", "auto"],
  DistributionBackendDefinitionType: ["distribution"],
  DistributionBackendRequestAnyOfAnyOfItemRequestType: ["histogram"],
  DistributionBackendRequestAnyOfAnyOfItemRequestType4445470944: ["histogram"],
  DistributionBackendRequestAnyOfAnyOfItemRequestType4445472224: ["histogram"],
  DistributionBackendRequestAnyOfAnyOfItemRequestType4445473504: ["histogram"],
  DistributionBackendRequestAnyOfAnyOfItemResponseFormat: ["scalar"],
  DistributionScaleType: ["linear", "log"],
  DistributionWidgetDefinitionType: ["distribution"],
  DoraIndexes: ["commit", "failure", "deployment", "pull_request"],
  DoraListStreamQueryDataSource: ["dora_list_stream"],
  DoraListStreamRequestResponseFormat: ["event_list"],
  EmbeddedAppBackendDefinitionType: ["embedded_app"],
  EmbeddedAppWidgetDefinitionType: ["embedded_app"],
  ErrorsStreamQueryDataSource: ["errors_stream"],
  ErrorsStreamRequestResponseFormat: ["event_list"],
  EventPatternStreamQueryDataSource: ["event_pattern_stream"],
  EventPatternStreamRequestResponseFormat: ["event_list"],
  EventPlatformStreamDataSource: [
    "logs_stream",
    "audit_stream",
    "trace_stream",
    "errors_stream",
    "event_stream",
    "rum_stream",
    "ci_pipeline_stream",
    "ci_test_stream",
    "ci_gate_stream",
    "ci_code_scan_stream",
    "ci_dependency_stream",
    "deployment_stream",
    "recommendations_stream",
    "synthetics_batch_stream",
    "synthetics_test_runs_stream",
    "observability_pipelines_stream",
    "security_runtime_stream",
    "security_signals_stream",
    "product_analytics_stream",
    "app_sec_span_stream",
    "app_sec_entities_stream",
    "compliance_event_stream",
    "compliance_findings_stream",
    "security_findings_stream",
    "supply_chain_firewall_report_stream",
    "data_observability_stream",
    "database_query_stream",
    "database_raw_query_stream",
    "deployment_gates_stream",
    "llm_observability_stream",
    "network_device_flow_stream",
    "network_flow_stream",
    "network_path_stream",
    "on_call_events_stream",
    "profile_stream",
    "security_dump_stream",
    "security_historical_results_stream",
    "session_replay_stream",
    "software_inventory_stream",
    "critical_asset_stream",
  ],
  EventPlatformStreamRequestResponseFormat: ["event_list"],
  EventStreamDefinitionEventSize: ["s", "l"],
  EventStreamDefinitionType: ["event_stream"],
  EventStreamQueryDataSource: ["event_stream"],
  EventStreamQueryEventSize: ["s", "l"],
  EventStreamRequestResponseFormat: ["event_list"],
  EventStreamWidgetDefinitionType: ["event_stream"],
  EventTimelineBackendDefinitionTagsExecution: ["and", "or"],
  EventTimelineBackendDefinitionType: ["event_timeline"],
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
  EventsDataExtractionExtractionType: ["grokExtraction", "regexExtraction"],
  EventsHistogramRequestRequestType: ["histogram"],
  EventsQueryFragmentDefinitionDataSource: [
    "events",
    "logs",
    "rum",
    "synthetics_test_runs",
    "product_analytics",
    "network_device_flows",
    "ci_pipelines",
    "database_queries",
    "llm_observability",
    "audit",
    "ci_tests",
    "spans",
  ],
  ExcludeNullTableColumnFunctionName: ["exclude_null"],
  FORMSIZES: ["xs", "sm", "md", "lg"],
  FlatSortByAnyOfAnyOfItemProperty: ["value"],
  FlatSortByAnyOfAnyOfItemProperty4446002432: ["label"],
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
    "events",
    "logs",
    "rum",
    "synthetics_test_runs",
    "product_analytics",
    "network",
    "profiles",
    "network_device_flows",
    "recommendations",
    "security_findings",
    "security_signals",
    "ci_pipelines",
    "database_queries",
    "llm_observability",
    "ai_usage",
    "audit",
    "ci_tests",
    "errors",
    "spans",
    "security_runtime",
    "app_sec_spans",
    "app_sec_entities",
    "bits_ai_investigations",
    "ci_code_scan",
    "ci_dependencies",
    "ci_gates",
    "ci_coverage_reports",
    "data_observability_events",
    "dora_metrics",
    "compliance_findings",
    "deployments",
    "deployment_gates",
    "exposures",
    "flag_evaluations",
    "network_path",
    "observability_pipelines",
    "on_call_events",
    "orchestration_troubleshooting",
    "security_historical_results",
    "security_info",
    "software_inventory",
    "synthetics_batches",
    "synthetics_map",
    "replay",
    "behavior",
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
  FormulaAndFunctionProductAnalyticsExtendedQueryDefinitionIndexesItems: ["*"],
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
  FormulaApmDependencyStatsQueryDataSource: ["apm_dependency_stats"],
  FormulaApmMetricsQueryDataSource: ["apm_metrics"],
  FormulaApmResourceStatsQueryDataSource: ["apm_resource_stats"],
  FormulaCaseQueryDataSource: ["cases"],
  FormulaChangeTrackingQueryDataSource: ["change_tracking"],
  FormulaDataQualityMetricsQueryAnomalyOptionsDirection: [
    "above",
    "below",
    "both",
  ],
  FormulaDataQualityMetricsQueryDataSource: ["data_quality_metrics"],
  FormulaDatasetApmMetricsQueryDataSource: ["apm_metrics"],
  FormulaDatasetDataSource: ["formula"],
  FormulaDatasetMetricQueryDataSource: ["metrics", "cloud_cost"],
  FormulaDatasetQueryDataSource: ["dataset"],
  FormulaDatasetResponseFormat: ["timeseries", "scalar"],
  FormulaDetectionRulesQueryDataSource: ["detection_rules"],
  FormulaDoraQueryDataSource: ["dora"],
  FormulaGraphQueryDataSource: ["traces"],
  FormulaIncidentsQueryDataSource: ["incident_analytics"],
  FormulaManagedResourceQueryDataSource: ["managed_resource"],
  FormulaMetricsDataSource: ["metrics", "cloud_cost", "datadog_usage"],
  FormulaMetricsQueryCloudCostDataSource: ["cloud_cost"],
  FormulaMetricsQueryDatadogUsageDataSource: ["datadog_usage"],
  FormulaMetricsQueryMetricsDataSource: ["metrics"],
  FormulaOrderByFormulaIndexType: ["formula"],
  FormulaOrderByGroupType: ["group"],
  FormulaProductAnalyticsExtendedQueryDataSource: [
    "product_analytics_extended",
  ],
  FormulaReferenceTableQueryDataSource: ["reference_table"],
  FormulaRetentionQueryDataSource: ["product_analytics_retention"],
  FormulaSemanticMode: ["native", "combined"],
  FormulaSloQueryDataSource: ["slo"],
  FormulaTableColumnType: ["formula"],
  FormulaType: ["formula"],
  FormulaUserJourneyQueryDataSource: ["product_analytics_journey"],
  FreeTextBackendDefinitionTextAlign: ["left", "center", "right"],
  FreeTextBackendDefinitionType: ["free_text"],
  FreeTextWidgetDefinitionType: ["free_text"],
  FunnelBackendDefinitionType: ["funnel"],
  FunnelComparisonDurationType: [
    "previous_timeframe",
    "custom_timeframe",
    "previous_day",
    "previous_week",
    "previous_month",
  ],
  FunnelGroupByDisplay: ["stacked", "side_by_side"],
  FunnelGroupedDisplay: ["stacked", "side_by_side"],
  FunnelRequestType: ["funnel"],
  FunnelSource: ["rum"],
  FunnelWidgetDefinitionType: ["funnel"],
  GeomapBackendDefinitionType: ["geomap"],
  GeomapBackendPointsRequestAnyOfAnyOfItemRequestType: [
    "network_devices_geomap",
  ],
  GeomapBackendPointsRequestAnyOfAnyOfItemRequestType4447003616: [
    "data_projection",
  ],
  GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat: ["event_list"],
  GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446995936: [
    "event_list",
  ],
  GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4446999456: [
    "event_list",
  ],
  GeomapBackendPointsRequestAnyOfAnyOfItemResponseFormat4447001376: ["tabular"],
  GeomapBackendRegionsRequestAnyOfAnyOfItemRequestType: ["ddsql"],
  GeomapBackendRegionsRequestAnyOfAnyOfItemResponseFormat: ["scalar"],
  GeomapBackendRegionsRequestAnyOfAnyOfItemResponseFormat4447008416: ["scalar"],
  GeomapBackendRegionsRequestAnyOfAnyOfItemResponseFormat4447322496: ["scalar"],
  GeomapPointsProjectionDimensionsItemsDimension: [
    "color",
    "latitude",
    "longitude",
  ],
  GeomapPointsProjectionType: ["geomap_points"],
  GeomapStylePalette: [
    "dog_classic",
    "dog_classic_area",
    "dog_classic_line",
    "dog_classic_bars",
    "dog_highlight",
    "monitor_state",
    "yellow_to_green",
    "green_to_orange",
    "hostmap_blues",
    "hostmap_green_red",
    "hostmap_green_orange_red",
    "hostmap_blue_red",
    "dark_grey",
    "pride",
    "GnBu",
    "YlOrRd",
    "Purples",
    "Blues",
    "Oranges",
    "Reds",
    "Greens",
    "Greys",
    "status_errors",
    "status_warnings",
    "status_successes",
    "Plasma",
    "Viridis",
    "dogcat",
    "datadog16",
    "pa_classic_line",
    "pa_classic_area",
    "pa_classic_bars",
    "pa_datadog16",
  ],
  GeomapWidgetDefinitionType: ["geomap"],
  GraphQuerySearchFilterOperator: ["=", ">", ">=", "<", "<="],
  GraphTargetNodeType: ["node"],
  GraphTargetPathType: ["path"],
  GroupBackendDefinitionDefaultState: ["open", "closed"],
  GroupBackendDefinitionType: ["group"],
  GroupBySortOrder: ["desc", "asc"],
  GroupType: ["group"],
  GroupWidgetDefinitionType: ["group"],
  HasSearchBar: ["auto", "always", "never"],
  HeatGridSortAggregation: ["sum", "min", "max", "avg"],
  HeatMapWidgetDefinitionType: ["heatmap"],
  HeatgridCustomColorSource: ["custom"],
  HeatgridDefinitionType: ["heatgrid"],
  HeatgridDiscreteConfigAnyOfAnyOfItemMode: ["discrete"],
  HeatgridDiscreteConfigAnyOfAnyOfItemMode4447618848: ["discrete"],
  HeatgridDiscreteConfigAnyOfAnyOfItemSource: ["custom"],
  HeatgridDiscreteConfigAnyOfAnyOfItemSource4447619168: ["preset"],
  HeatgridDiscreteMode: ["discrete"],
  HeatgridGradientConfigAnyOfAnyOfItemMode: ["gradient"],
  HeatgridGradientConfigAnyOfAnyOfItemMode4447621888: ["gradient"],
  HeatgridGradientConfigAnyOfAnyOfItemSource: ["custom"],
  HeatgridGradientConfigAnyOfAnyOfItemSource4447622208: ["preset"],
  HeatgridGradientMode: ["gradient"],
  HeatgridLabelColumnWidth: ["s", "l", "xs", "m", "xl"],
  HeatgridNestingDisplay: ["flat"],
  HeatgridPresetColorSource: ["preset"],
  HeatgridPresetName: [
    "dog_classic",
    "dog_classic_area",
    "dog_classic_line",
    "dog_classic_bars",
    "dog_highlight",
    "monitor_state",
    "yellow_to_green",
    "green_to_orange",
    "hostmap_blues",
    "hostmap_green_red",
    "hostmap_green_orange_red",
    "hostmap_blue_red",
    "dark_grey",
    "pride",
    "GnBu",
    "YlOrRd",
    "Purples",
    "Blues",
    "Oranges",
    "Reds",
    "Greens",
    "Greys",
    "status_errors",
    "status_warnings",
    "status_successes",
    "Plasma",
    "Viridis",
    "dogcat",
    "datadog16",
    "pa_classic_line",
    "pa_classic_area",
    "pa_classic_bars",
    "pa_datadog16",
    "classic",
  ],
  HeatgridSortAggregation: ["avg", "min", "max", "sum"],
  HeatgridSortAndOrderByNestingDisplay: ["flat"],
  HeatgridSortByLabelProperty: ["label"],
  HeatgridSortByValueProperty: ["value"],
  HeatgridSortOrder: ["asc", "desc"],
  HeatgridTextFormatMatchType: [
    "is",
    "is_not",
    "contains",
    "does_not_contain",
    "starts_with",
    "ends_with",
  ],
  HeatgridTextFormatReplaceAllType: ["all"],
  HeatgridTextFormatReplaceSubstringType: ["substring"],
  HeatgridTileDefRequestResponseFormat: ["timeseries"],
  HeatgridWidgetDefinitionType: ["heatgrid"],
  HeatgridWidgetResponseFormat: ["timeseries"],
  HeatmapBackendDefinitionLegendLayout: ["vertical", "horizontal", "auto"],
  HeatmapBackendDefinitionType: ["heatmap"],
  HeatmapBackendRequestAnyOfAnyOfItemRequestType: ["histogram"],
  HeatmapBackendRequestAnyOfAnyOfItemResponseFormat: ["timeseries"],
  HistogramMode: ["distribution_metric", "pre_binned_metric"],
  HistoricalDiscoveredProcessesDatasetDataSource: [
    "historical_discovered_processes",
  ],
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
  HostmapBackendDefinitionNodeType: ["container", "host"],
  HostmapBackendDefinitionType: ["hostmap"],
  HostmapDataProjectionRequestRequestType: ["data_projection"],
  HostmapDimension: ["group", "node", "fill", "size"],
  HostmapInfrastructureRequestRequestType: ["infrastructure_hostmap"],
  HostmapNodeType: ["cluster", "container", "host", "pod"],
  HostmapProjectionType: ["hostmap"],
  HostmapScalarFormulaRequestResponseFormat: ["scalar"],
  HostmapStylePalette: [
    "success",
    "red",
    "green",
    "orange",
    "gray",
    "dog_classic",
    "dog_classic_area",
    "dog_classic_line",
    "dog_classic_bars",
    "dog_highlight",
    "monitor_state",
    "yellow_to_green",
    "green_to_orange",
    "hostmap_blues",
    "hostmap_green_red",
    "hostmap_green_orange_red",
    "hostmap_blue_red",
    "dark_grey",
    "pride",
    "GnBu",
    "YlOrRd",
    "Purples",
    "Blues",
    "Oranges",
    "Reds",
    "Greens",
    "Greys",
    "status_errors",
    "status_warnings",
    "status_successes",
    "Plasma",
    "Viridis",
    "dogcat",
    "datadog16",
    "pa_classic_line",
    "pa_classic_area",
    "pa_classic_bars",
    "pa_datadog16",
    "classic",
    "Cool_hm",
    "Warm_hm",
    "Yellow / Green",
    "Green / Orange",
    "Green / Red",
    "Green / Orange / Red",
    "Blue / Red",
    "Good - bad",
    "cool",
    "ocean",
    "warm",
    "fire",
    "warn",
    "purple",
    "grey",
    "blue",
    "dd20",
  ],
  Hour12Format: [
    "12am",
    "1am",
    "2am",
    "3am",
    "4am",
    "5am",
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm",
    "10pm",
    "11pm",
  ],
  Hour24Format: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ],
  IFrameWidgetDefinitionType: ["iframe"],
  IframeBackendDefinitionType: ["iframe"],
  ImageBackendDefinitionHorizontalAlign: ["left", "center", "right"],
  ImageBackendDefinitionType: ["image"],
  ImageBackendDefinitionVerticalAlign: ["center", "top", "bottom"],
  ImageMargin: ["", "sm", "md", "lg", "small", "large"],
  ImageSizing: [
    "none",
    "center",
    "fill",
    "contain",
    "cover",
    "scale-down",
    "zoom",
    "fit",
  ],
  ImageWidgetDefinitionType: ["image"],
  IncidentsStreamQueryDataSource: ["incidents_stream"],
  IncidentsStreamRequestResponseFormat: ["event_list"],
  InfrastructureListQueryDataSource: ["infrastructure"],
  InfrastructureListRequestRequestType: ["infrastructure_list"],
  IssueStreamColumnName: [
    "service",
    "count",
    "volume",
    "resources",
    "error_type",
    "error_message",
    "file_path",
    "last_seen",
    "first_seen",
    "language",
    "platform",
    "details",
    "impacted_sessions",
    "impacted_users",
  ],
  IssueStreamOrderingKey: [
    "TOTAL_COUNT",
    "FIRST_SEEN",
    "IMPACTED_SESSIONS",
    "IMPACTED_ACCOUNTS",
    "PRIORITY",
  ],
  IssueStreamPersona: ["all", "browser", "mobile", "backend", "agent"],
  IssueStreamSortOrder: ["desc"],
  IssueStreamState: [
    "OPEN",
    "RESOLVED",
    "IGNORED",
    "EXCLUDED",
    "IN_PROGRESS",
    "ACKNOWLEDGED",
  ],
  JoinType: ["left", "inner"],
  JourneyMapConversionType: ["conversion", "drop-off"],
  JourneyMapCountingMethod: ["uniques", "totals"],
  JourneyMapDefinitionType: ["journey_map"],
  JourneyMapGroupByAudience: [
    "product_analytics_audience_filters.users",
    "product_analytics_audience_filters.accounts",
  ],
  JourneyMapRequestType: ["journey_map"],
  JourneyMapWidgetDefinitionType: ["journey_map"],
  LayoutType: ["ordered", "free"],
  LegacyFormulaBackedDataProjectionSource: [
    "events",
    "logs",
    "rum",
    "synthetics_test_runs",
    "product_analytics",
    "network",
    "network_device_flows",
    "security_findings",
    "security_signals",
    "ci_pipelines",
    "database_queries",
    "llm_observability",
    "ai_usage",
    "ci_tests",
    "errors",
    "spans",
    "security_runtime",
  ],
  LegacyIssueStreamRequestResponseFormat: ["event_list"],
  ListAugmentedQueryDataSource: ["list_augmented_query"],
  ListAugmentedQueryJoinConditionAugmentAttributeNormalization: ["metric_tag"],
  ListFilteredQueryDataSource: ["list_filtered_query"],
  ListSegmentQueryDataSource: ["list_segment_query"],
  ListStreamBackendDefinitionType: ["list_stream"],
  ListStreamColumnDefaultWidthLiteral: [
    "auto",
    "compact",
    "full",
    "fit-content",
  ],
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
    "case_stream",
  ],
  ListStreamWidgetDefinitionType: ["list_stream"],
  LogStreamDefinitionType: ["log_stream"],
  LogStreamWidgetDefinitionType: ["log_stream"],
  LogsIssueStreamQueryDataSource: ["logs_issue_stream"],
  LogsPatternStreamQueryDataSource: ["logs_pattern_stream"],
  LogsPatternStreamRequestResponseFormat: ["event_list"],
  LogsStreamQueryDataSource: ["logs_stream"],
  LogsStreamRequestResponseFormat: ["event_list"],
  LogsTransactionStreamQueryDataSource: ["logs_transaction_stream"],
  LogsTransactionStreamQueryVersion: ["sequential_query"],
  LogsTransactionStreamRequestResponseFormat: ["event_list"],
  ManageStatusBackendDefinitionColorPreference: ["text", "background"],
  ManageStatusBackendDefinitionDisplayFormat: [
    "counts",
    "countsAndList",
    "list",
  ],
  ManageStatusBackendDefinitionLastTriggeredFormat: [
    "both",
    "relative",
    "absolute",
  ],
  ManageStatusBackendDefinitionSummaryType: ["groups", "monitors", "combined"],
  ManageStatusBackendDefinitionType: ["manage_status"],
  MessageDisplay: ["inline", "expanded-md", "expanded-lg"],
  MetricDatasetCloudCostScalarAggregation: ["sum", "min", "max", "avg"],
  MetricDatasetCloudCostScalarDataSource: ["cloud_cost_scalar"],
  MetricDatasetMetricScalarAggregation: ["sum", "min", "max", "avg"],
  MetricDatasetMetricScalarDataSource: ["metric_scalar"],
  MetricsHistogramRequestRequestType: ["histogram"],
  MetricsLikeQueryFragmentCloudCostDataSource: ["cloud_cost"],
  MetricsLikeQueryFragmentMetricsDataSource: ["metrics"],
  MonitorSummaryWidgetDefinitionType: ["manage_status"],
  Month: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ],
  NetworkDevicesDataSourceName: ["network_devices"],
  NoteBackendDefinitionTextAlign: ["left", "center", "right"],
  NoteBackendDefinitionTickEdge: ["left", "right", "top", "bottom"],
  NoteBackendDefinitionType: ["note"],
  NoteBackendDefinitionVerticalAlign: ["center", "top", "bottom"],
  NoteWidgetDefinitionType: ["note"],
  NumberBarTableColumnFormatBarMode: ["bar"],
  NumberBarTableColumnFormatMode: ["number", "bar"],
  NumberBarTableColumnFormatNumberMode: ["number"],
  NumberFormatUnitCanonicalType: ["canonical_unit"],
  NumberFormatUnitCustomType: ["custom_unit_label"],
  NumberFormatUnitScaleType: ["canonical_unit"],
  NumberReferenceTableColumnType: ["reference"],
  OccurrenceFilterOperator: ["="],
  OccurrenceFilterValue: ["1", "2", "3", "4", "5"],
  OrchestrationView: [
    "service",
    "cluster",
    "job",
    "node",
    "deployment",
    "namespace",
    "pod",
    "genericWorkload",
    "inferenceWorkload",
    "replicaSet",
    "cronJob",
    "daemonSet",
    "statefulSet",
    "persistentVolume",
    "persistentVolumeClaim",
    "role",
    "roleBinding",
    "clusterRole",
    "clusterRoleBinding",
    "serviceAccount",
    "ingress",
    "configMap",
    "verticalPodAutoscaler",
    "horizontalPodAutoscaler",
    "crd",
    "cr",
    "networkPolicy",
    "podDisruptionBudget",
    "ecsTask",
    "ecsTaskDefinition",
    "ecsDaemonTaskDefinition",
    "ecsService",
    "ecsDaemon",
    "ecsCluster",
    "ecsContainerInstance",
  ],
  OrderByOptions: ["change", "name", "present", "past"],
  PointPlotBackendDefinitionType: ["point_plot"],
  PointPlotDataProjectionRequestRequestType: ["data_projection"],
  PointPlotDimension: ["group", "time", "y", "radius"],
  PointPlotProjectionDimensionsItemsDimension: ["group", "y", "radius", "time"],
  PointPlotProjectionType: ["point_plot"],
  PointPlotWidgetDefinitionType: ["point_plot"],
  PointPlotWidgetLegendType: ["automatic", "none"],
  PowerpackBackendDefinitionType: ["powerpack"],
  PowerpackState: ["active", "archived"],
  PowerpackWidgetDefinitionType: ["powerpack"],
  PresetPeriodTableColumnPresetType: ["previous_period"],
  PresetPeriodTableColumnType: ["preset"],
  ProductAnalyticsEventOccurrenceQueryDataSource: [
    "product_analytics_occurrence",
  ],
  ProductAnalyticsFunnelComputeAggregation: ["cardinality", "count"],
  ProductAnalyticsFunnelComputeMetric: [
    "__dd.conversion",
    "__dd.conversion_rate",
  ],
  ProductAnalyticsFunnelDataSource: ["product_analytics_journey"],
  ProductAnalyticsFunnelRequestType: ["user_journey_funnel"],
  ProductAnalyticsJourneyDatasetDataSource: ["product_analytics_journey"],
  ProductAnalyticsJourneyDatasetEntity: ["session", "user", "account"],
  ProductAnalyticsStreamQueryDataSource: ["product_analytics_stream"],
  PublishedAnalysisDataSource: ["published_analysis"],
  PublishedAnalysisQueryFragmentDataSource: ["published_analysis"],
  PublishedDatasetProvider: ["ddsql_query", "notebook_cell"],
  QuerySortOrder: ["desc", "asc"],
  QueryTableBackendDefinitionType: ["query_table"],
  QueryTableBackendRequestAnyOfAnyOfItemRequestType: ["ddsql"],
  QueryTableBackendRequestAnyOfAnyOfItemRequestType4449627456: [
    "local_dataset",
  ],
  QueryTableBackendRequestAnyOfAnyOfItemRequestType4450129280: ["table"],
  QueryTableBackendRequestAnyOfAnyOfItemRequestType4450135840: [
    "advanced_query",
  ],
  QueryTableBackendRequestAnyOfAnyOfItemResponseFormat: ["scalar"],
  QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4449627776: ["tabular"],
  QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450132960: ["scalar"],
  QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450136640: ["tabular"],
  QueryTableBackendRequestAnyOfAnyOfItemResponseFormat4450272256: ["scalar"],
  QueryTableDatePattern: [
    "MMM dd yyyy",
    "MMM d",
    "MMM d, yyyy",
    "MM/dd/yyyy",
    "dd/MM/yyyy",
    "MMMM d, yyyy",
  ],
  QueryTableProjectionColumnOrder: ["query", "dimensions"],
  QueryTableProjectionDimensionDimension: ["column"],
  QueryTableProjectionType: ["query_table"],
  QueryTableProjectionUnlistedColumns: ["show", "hide"],
  QueryTableTimestampFormat: [
    "MMM dd yyyy HH:mm",
    "MMM dd yyyy HH:mm:ss",
    "MMM dd yyyy h:mm a",
    "MMM dd yyyy h:mm:ss a",
    "MMM d HH:mm",
    "MMM d HH:mm:ss",
    "MMM d h:mm a",
    "MMM d h:mm:ss a",
    "MMM d, yyyy HH:mm",
    "MMM d, yyyy HH:mm:ss",
    "MMM d, yyyy h:mm a",
    "MMM d, yyyy h:mm:ss a",
    "MM/dd/yyyy HH:mm",
    "MM/dd/yyyy HH:mm:ss",
    "MM/dd/yyyy h:mm a",
    "MM/dd/yyyy h:mm:ss a",
    "dd/MM/yyyy HH:mm",
    "dd/MM/yyyy HH:mm:ss",
    "dd/MM/yyyy h:mm a",
    "dd/MM/yyyy h:mm:ss a",
    "MMMM d, yyyy HH:mm",
    "MMMM d, yyyy HH:mm:ss",
    "MMMM d, yyyy h:mm a",
    "MMMM d, yyyy h:mm:ss a",
  ],
  QueryValueBackendDefinitionType: ["query_value"],
  QueryValueBackendRequestAnyOfAnyOfItemRequestType: ["advanced_query"],
  QueryValueBackendRequestAnyOfAnyOfItemRequestType4450439776: ["ddsql"],
  QueryValueBackendRequestAnyOfAnyOfItemResponseFormat: ["tabular"],
  QueryValueBackendRequestAnyOfAnyOfItemResponseFormat4450437696: ["scalar"],
  QueryValueBackendRequestAnyOfAnyOfItemResponseFormat4450440096: ["scalar"],
  QueryValueBackendRequestAnyOfAnyOfItemResponseFormat4450609856: ["scalar"],
  QueryValueProjectionType: ["query_value"],
  QueryValueWidgetComparisonDirectionality: [
    "increase_better",
    "decrease_better",
    "neutral",
  ],
  QueryValueWidgetComparisonType: ["absolute", "relative", "both"],
  QueryValueWidgetDefinitionType: ["query_value"],
  RUMIssueStreamQueryDataSource: ["rum_issue_stream"],
  RecommendationsStreamQueryDataSource: ["recommendations_stream"],
  RecommendationsStreamRequestResponseFormat: ["event_list"],
  ReferentialDatasetManagedResourceDataSource: ["managed_resource"],
  ReferentialDatasetReferenceTableDataSource: ["reference_table"],
  ReferentialQueryFragmentManagedResourceDataSource: ["managed_resource"],
  ReferentialQueryFragmentReferenceTableDataSource: ["reference_table"],
  RelationalDataQueryDataSource: ["reference_table", "managed_resource"],
  RetentionCohortCriteriaTimeIntervalType: ["calendar"],
  RetentionComputeMetric: ["__dd.retention", "__dd.retention_rate"],
  RetentionCurveDefinitionType: ["retention_curve"],
  RetentionCurveRequestType: ["retention_curve"],
  RetentionCurveWidgetDefinitionType: ["retention_curve"],
  RetentionDataSource: ["product_analytics_retention"],
  RetentionEntity: ["@usr.id", "@account.id"],
  RetentionGridRequestType: ["retention_grid"],
  RetentionGroupByItemsTarget: ["cohort", "return_period"],
  RetentionGroupByTarget: ["cohort", "return_period"],
  RetentionReturnCondition: ["conversion_on", "conversion_on_or_after"],
  RetentionReturnCriteriaTimeIntervalType: ["fixed"],
  RetentionReturnCriteriaTimeIntervalUnit: ["day", "week", "month"],
  RetentionSearchCohortCriteriaTimeIntervalType: ["calendar"],
  RetentionSearchRetentionEntity: ["@usr.id", "@account.id"],
  RetentionSearchReturnCondition: ["conversion_on", "conversion_on_or_after"],
  RetentionSearchReturnCriteriaTimeIntervalType: ["fixed"],
  RetentionSearchReturnCriteriaTimeIntervalUnit: ["day", "week", "month"],
  ReturnPeriodScopeTargetType: ["index"],
  ReturnPeriodScopeType: ["return_period"],
  RumStreamQueryDataSource: ["rum_stream"],
  RumStreamRequestResponseFormat: ["event_list"],
  RunChartGroupDimensionDimension: ["group"],
  RunChartProjectionType: ["run_chart"],
  RunChartValueDimensionDimension: ["value"],
  RunChartXDimensionDimension: ["x"],
  RunWorkflowBackendDefinitionType: ["run_workflow"],
  RunWorkflowWidgetDefinitionType: ["run_workflow"],
  SLOListWidgetDefinitionType: ["slo_list"],
  SLOListWidgetRequestType: ["slo_list"],
  SLOWidgetDefinitionType: ["slo"],
  SampledAnalysisQueryType: ["sampled_analysis"],
  SankeyDefinitionType: ["sankey"],
  SankeyNetworkDataSource: ["network_device_flows", "network"],
  SankeyNetworkQueryMode: ["target"],
  SankeyNetworkRequestType: ["netflow_sankey"],
  SankeyRumDataSource: ["rum", "product_analytics"],
  SankeyRumQueryMode: ["source", "target"],
  SankeyWidgetDefinitionType: ["sankey"],
  ScalarAggregator: [
    "sum",
    "min",
    "max",
    "avg",
    "last",
    "area",
    "l2norm",
    "percentile",
    "stddev",
    "count_unique",
  ],
  ScalarFormulaRequestResponseFormat: ["scalar"],
  ScaleType: ["linear", "log", "pow", "sqrt"],
  ScatterPlotDimension: ["color", "x", "y", "radius"],
  ScatterPlotLegendTypeAnyOfAnyOfItemType: ["automatic"],
  ScatterPlotLegendTypeAnyOfAnyOfItemType4451196800: ["none"],
  ScatterPlotWidgetDefinitionType: ["scatterplot"],
  ScatterplotBackendDefinitionType: ["scatterplot"],
  ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType: ["ddsql"],
  ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451204320: [
    "local_dataset",
  ],
  ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451373184: [
    "advanced_query",
  ],
  ScatterplotBackendTableRequestAnyOfAnyOfItemRequestType4451375104: [
    "data_projection",
  ],
  ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat: ["scalar"],
  ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451204640: [
    "tabular",
  ],
  ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451371744: [
    "scalar",
  ],
  ScatterplotBackendTableRequestAnyOfAnyOfItemResponseFormat4451373984: [
    "tabular",
  ],
  ScatterplotDimension: ["x", "y", "radius", "color"],
  ScatterplotProjectionType: ["scatterplot"],
  ScatterplotWidgetAggregator: ["avg", "last", "max", "min", "sum"],
  SecurityRuntimePatternStreamQueryDataSource: [
    "security_runtime_pattern_stream",
  ],
  SecurityRuntimePatternStreamRequestResponseFormat: ["event_list"],
  SecurityRuntimeStreamQueryDataSource: ["security_runtime_stream"],
  SecurityRuntimeStreamRequestResponseFormat: ["event_list"],
  ServiceMapDefinitionType: ["servicemap"],
  ServiceMapWidgetDefinitionType: ["servicemap"],
  ServiceSummaryBackendDefinitionType: ["trace_service"],
  ServiceSummaryLayout: ["one_column", "two_column", "three_column"],
  ServiceSummarySize: ["small", "large", "medium"],
  ServiceSummaryWidgetDefinitionType: ["trace_service"],
  SloBackendDefinitionType: ["slo"],
  SloBackendDefinitionViewType: ["detail"],
  SloGroupMode: ["overall", "components"],
  SloListBackendDefinitionType: ["slo_list"],
  SloMeasureEvents: ["good_events", "bad_events"],
  SloMeasureMinutes: ["good_minutes", "bad_minutes"],
  SloQueryType: ["monitor", "metric", "time_slice"],
  SloTimeWindow: ["7d", "30d", "90d"],
  SloWidgetTimeWindow: [
    "week_to_date",
    "month_to_date",
    "7d",
    "30d",
    "90d",
    "previous_week",
    "previous_month",
    "global_time",
  ],
  SloWidgetViewMode: ["overall", "both", "component"],
  SnowflakeQueryDatasetDataSource: ["snowflake_query"],
  SortOrder: ["desc", "asc"],
  SortOrder2: ["desc", "asc"],
  SpanKind: ["consumer", "server", "client", "producer", "internal"],
  SplitConfigSortOrder: ["desc", "asc"],
  SplitGraphVizSize: ["xs", "sm", "md", "lg"],
  SplitGraphWidgetDefinitionType: ["split_group"],
  SplitGroupBackendDefinitionType: ["split_group"],
  SqlAnalysisQueryType: ["sql_analysis"],
  StorageType: [
    "live",
    "hot",
    "online_archives",
    "driveline",
    "flex_tier",
    "case_insensitive",
    "cloud_prem",
  ],
  StringReferenceTableColumnType: ["reference"],
  StringTableColumnFormatMode: ["string"],
  StructuredAnalysisAggregationType: ["aggregation"],
  StructuredAnalysisCalculatedFieldType: ["calculated_field"],
  StructuredAnalysisCastTargetType: ["string", "int64", "float64", "timestamp"],
  StructuredAnalysisCastType: ["cast_column_type"],
  StructuredAnalysisColumnExtractionType: ["grok"],
  StructuredAnalysisDestructureType: ["destructure"],
  StructuredAnalysisFilterType: ["filter"],
  StructuredAnalysisJoinJoinType: ["left", "inner", "anti"],
  StructuredAnalysisJoinType: ["join"],
  StructuredAnalysisLimitType: ["limit"],
  StructuredAnalysisProjectionType: ["projection"],
  StructuredAnalysisQueryType: ["structured_analysis"],
  StructuredAnalysisSortType: ["sort"],
  SunburstBackendDefinitionType: ["sunburst"],
  SunburstBackendRequestAnyOfAnyOfItemRequestType: ["advanced_query"],
  SunburstBackendRequestAnyOfAnyOfItemRequestType4452229632: ["ddsql"],
  SunburstBackendRequestAnyOfAnyOfItemRequestType4452231072: ["local_dataset"],
  SunburstBackendRequestAnyOfAnyOfItemResponseFormat: ["tabular"],
  SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452228032: ["scalar"],
  SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452229952: ["scalar"],
  SunburstBackendRequestAnyOfAnyOfItemResponseFormat4452231392: ["tabular"],
  SunburstKnownLegendAnyOfAnyOfItemType: ["table"],
  SunburstKnownLegendAnyOfAnyOfItemType4452235232: ["inline"],
  SunburstKnownLegendAnyOfAnyOfItemType4452236352: ["none"],
  SunburstLegendAnyOfAnyOfItemType: ["automatic"],
  SunburstRequestStylePalette: [
    "success",
    "red",
    "green",
    "orange",
    "gray",
    "dog_classic",
    "dog_classic_area",
    "dog_classic_line",
    "dog_classic_bars",
    "dog_highlight",
    "monitor_state",
    "yellow_to_green",
    "green_to_orange",
    "hostmap_blues",
    "hostmap_green_red",
    "hostmap_green_orange_red",
    "hostmap_blue_red",
    "dark_grey",
    "pride",
    "GnBu",
    "YlOrRd",
    "Purples",
    "Blues",
    "Oranges",
    "Reds",
    "Greens",
    "Greys",
    "status_errors",
    "status_warnings",
    "status_successes",
    "Plasma",
    "Viridis",
    "dogcat",
    "datadog16",
    "pa_classic_line",
    "pa_classic_area",
    "pa_classic_bars",
    "pa_datadog16",
    "classic",
    "Cool_hm",
    "Warm_hm",
    "Yellow / Green",
    "Green / Orange",
    "Green / Red",
    "Green / Orange / Red",
    "Blue / Red",
    "Good - bad",
    "cool",
    "ocean",
    "warm",
    "fire",
    "warn",
    "purple",
    "grey",
    "blue",
    "dd20",
    "semantic",
  ],
  SunburstWidgetDefinitionType: ["sunburst"],
  SunburstWidgetLegendInlineAutomaticType: ["inline", "automatic"],
  SunburstWidgetLegendTableType: ["table", "none"],
  TableColumnComparisonWithOtherColumnDiffFromType: ["diff_from"],
  TableColumnComparisonWithOtherColumnPercentDiffFromType: [
    "percent_diff_from",
  ],
  TableColumnComparisonWithOtherColumnPercentOfType: ["percent_of"],
  TableColumnComparisonWithSelfType: ["percent_column_total"],
  TableColumnModifierName: [
    "fill",
    "as_count",
    "as_rate",
    "weighted",
    "rollup",
  ],
  TableFormulaAnyOfAnyOfItemCellDisplayMode: ["number", "bar"],
  TableFormulaAnyOfAnyOfItemCellDisplayMode4452532448: ["trend"],
  TableRowsJoinType: ["left", "inner"],
  TableTrendCellDisplayModeOptionsYScale: ["shared", "independent"],
  TableTrendType: ["area", "line", "bars", "adjacent_bars"],
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
  TabularAdvancedQueryRequestRequestType: ["advanced_query"],
  TabularAdvancedQueryRequestResponseFormat: ["tabular"],
  TabularLocalDatasetRequestRequestType: ["local_dataset"],
  TabularLocalDatasetRequestResponseFormat: ["tabular"],
  TagsExecution: ["and", "or"],
  TextFormattingRuleReplaceAnyOfAnyOfItemType: ["substring"],
  TextFormattingRuleReplaceAnyOfAnyOfItemType4452730016: ["all"],
  TextMatchAnyOfAnyOfItemType: ["is"],
  TextMatchAnyOfAnyOfItemType4452732896: ["is_not"],
  TextMatchAnyOfAnyOfItemType4452733856: ["contains"],
  TextMatchAnyOfAnyOfItemType4452734816: ["does_not_contain"],
  TextMatchAnyOfAnyOfItemType4452735776: ["starts_with"],
  TextMatchAnyOfAnyOfItemType4452736736: ["ends_with"],
  TextReplacementRuleReplaceAnyOfAnyOfItemType: ["substring"],
  TextReplacementRuleReplaceAnyOfAnyOfItemType4452739616: ["all"],
  ThresholdPalette: [
    "white_on_red",
    "black_on_light_red",
    "white_on_green",
    "black_on_light_green",
    "white_on_yellow",
    "black_on_light_yellow",
    "white_on_gray",
    "green_on_white",
    "yellow_on_white",
    "red_on_white",
    "gray_on_white",
    "red",
    "green",
    "orange",
    "gray",
  ],
  TimeSpan: [
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
    "1y",
  ],
  TimeseriesBackgroundType: ["area", "bars"],
  TimeseriesColorOrder: ["monotonic", "shuffled"],
  TimeseriesFormulaRequestResponseFormat: ["timeseries"],
  TimeseriesProjectionDimensionsItemsDimension: ["group", "time", "value"],
  TimeseriesProjectionType: ["timeseries"],
  TimeseriesStackMode: ["auto", "normalize"],
  TimeseriesWidgetAdvancedQueryRequestRequestType: ["advanced_query"],
  TimeseriesWidgetAdvancedQueryRequestResponseFormat: ["timeseries"],
  TimeseriesWidgetDdsqlRequestRequestType: ["ddsql"],
  TimeseriesWidgetDdsqlRequestResponseFormat: ["timeseries"],
  TimeseriesWidgetDefinitionType: ["timeseries"],
  TimeseriesWidgetFormulaRequestResponseFormat: ["timeseries"],
  TimeseriesWidgetLegendColumn: ["sum", "min", "max", "avg", "value"],
  TimeseriesWidgetLegendLayout: ["vertical", "horizontal", "auto"],
  TimeseriesWidgetLocalDatasetRequestRequestType: ["local_dataset"],
  TimeseriesWidgetLocalDatasetRequestResponseFormat: ["timeseries"],
  TimeseriesXAxisDayDateFormat: [
    "MMM d",
    "MMM d, yyyy",
    "MM/dd/yyyy",
    "dd/MM/yyyy",
    "MMMM d, yyyy",
    "auto",
  ],
  TimeseriesXAxisMonthDateFormat: [
    "auto",
    "MMM",
    "MMM yyyy",
    "MM/yyyy",
    "MMMM yyyy",
  ],
  ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemLegend: [
    "none",
    "inline",
    "automatic",
  ],
  ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemType: ["stacked"],
  ToplistBackendDefinitionStyleDisplayAnyOfAnyOfItemType4453028448: ["flat"],
  ToplistBackendDefinitionStyleScaling: ["relative", "absolute"],
  ToplistBackendDefinitionType: ["toplist"],
  ToplistBackendRequestAnyOfAnyOfItemRequestType: ["advanced_query"],
  ToplistBackendRequestAnyOfAnyOfItemRequestType4453034848: ["ddsql"],
  ToplistBackendRequestAnyOfAnyOfItemRequestType4453036448: ["local_dataset"],
  ToplistBackendRequestAnyOfAnyOfItemResponseFormat: ["tabular"],
  ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453033088: ["scalar"],
  ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453035168: ["scalar"],
  ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453036768: ["tabular"],
  ToplistBackendRequestAnyOfAnyOfItemResponseFormat4453202688: ["scalar"],
  ToplistWidgetDefinitionType: ["toplist"],
  ToplistWidgetFlatType: ["flat"],
  ToplistWidgetLegend: ["automatic", "inline", "none"],
  ToplistWidgetScaling: ["absolute", "relative"],
  ToplistWidgetStackedType: ["stacked"],
  TopologyMapBackendDefinitionType: ["topology_map"],
  TopologyMapInlineColumnKindScalar: ["scalar"],
  TopologyMapInlineColumnKindString: ["string"],
  TopologyMapInlineEdgeColumnId: ["source", "target"],
  TopologyMapInlineNodeIdColumnId: ["id"],
  TopologyMapInlineNodeStringColumnId: ["title", "subtitle"],
  TopologyMapLayoutDirection: [
    "top-to-bottom",
    "bottom-to-top",
    "left-to-right",
    "right-to-left",
  ],
  TopologyMapLayoutType: ["hierarchical"],
  TopologyMapWidgetDefinitionType: ["topology_map"],
  TopologyQueryDataStreamsDataSource: ["data_streams"],
  TopologyQueryServiceMapDataSource: ["service_map"],
  TopologyRequestCustomProjectionType: ["custom_topology_map_node"],
  TopologyRequestCustomResponseFormat: ["scalar"],
  TopologyRequestType: ["topology"],
  TraceStreamQueryDataSource: ["trace_stream"],
  TraceStreamRequestResponseFormat: ["event_list"],
  TreeDataProjectionBarChartDimensionsItemsDimension: ["group", "value"],
  TreeDataProjectionBarChartType: ["bar_chart"],
  TreeDataProjectionSunburstDimensionsItemsDimension: ["group", "value"],
  TreeDataProjectionSunburstType: ["sunburst"],
  TreeDataProjectionToplistDimensionsItemsDimension: ["group", "value"],
  TreeDataProjectionToplistType: ["toplist"],
  TreeDataProjectionTreemapDimensionsItemsDimension: ["group", "value"],
  TreeDataProjectionTreemapType: ["treemap"],
  TreeMapColorBy: ["user"],
  TreeMapGroupBy: ["user", "family", "process"],
  TreeMapSizeBy: ["pct_cpu", "pct_mem"],
  TreeMapWidgetDefinitionType: ["treemap"],
  TreemapBackendDefinitionColorBy: ["user"],
  TreemapBackendDefinitionGroupBy: ["process", "user", "family"],
  TreemapBackendDefinitionSizeBy: ["pct_cpu", "pct_mem"],
  TreemapBackendDefinitionType: ["treemap"],
  TreemapBackendRequestAnyOfAnyOfItemRequestType: ["advanced_query"],
  TreemapBackendRequestAnyOfAnyOfItemRequestType4453528768: ["ddsql"],
  TreemapBackendRequestAnyOfAnyOfItemRequestType4453530208: ["local_dataset"],
  TreemapBackendRequestAnyOfAnyOfItemResponseFormat: ["tabular"],
  TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453527168: ["scalar"],
  TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453529088: ["scalar"],
  TreemapBackendRequestAnyOfAnyOfItemResponseFormat4453530528: ["tabular"],
  TreemapRequestStylePalette: [
    "success",
    "red",
    "green",
    "orange",
    "gray",
    "dog_classic",
    "dog_classic_area",
    "dog_classic_line",
    "dog_classic_bars",
    "dog_highlight",
    "monitor_state",
    "yellow_to_green",
    "green_to_orange",
    "hostmap_blues",
    "hostmap_green_red",
    "hostmap_green_orange_red",
    "hostmap_blue_red",
    "dark_grey",
    "pride",
    "GnBu",
    "YlOrRd",
    "Purples",
    "Blues",
    "Oranges",
    "Reds",
    "Greens",
    "Greys",
    "status_errors",
    "status_warnings",
    "status_successes",
    "Plasma",
    "Viridis",
    "dogcat",
    "datadog16",
    "pa_classic_line",
    "pa_classic_area",
    "pa_classic_bars",
    "pa_datadog16",
    "classic",
    "Cool_hm",
    "Warm_hm",
    "Yellow / Green",
    "Green / Orange",
    "Green / Red",
    "Green / Orange / Red",
    "Blue / Red",
    "Good - bad",
    "cool",
    "ocean",
    "warm",
    "fire",
    "warn",
    "purple",
    "grey",
    "blue",
    "dd20",
    "semantic",
  ],
  TrendTableColumnFormatMode: ["trend"],
  UnifiedIssueStreamQueryDataSource: ["issue_stream"],
  UnifiedIssueStreamRequestResponseFormat: ["event_list"],
  UserJourneyFormulaComputeMetric: [
    "__dd.conversion",
    "__dd.conversion_rate",
    "__dd.time_to_convert",
  ],
  ValueLabelsDensity: ["maximize"],
  WatchdogAlertsQueryDataSource: ["watchdog_alerts"],
  WatchdogAlertsRequestResponseFormat: ["event_list"],
  WidgetAggregator: ["avg", "last", "max", "min", "sum", "percentile"],
  WidgetCalendarAlignedSpanType: ["daily", "weekly", "monthly", "yearly"],
  WidgetChangeType: ["absolute", "relative"],
  WidgetColorPreference: ["background", "text"],
  WidgetComparator: ["=", ">", ">=", "<", "<="],
  WidgetCompareTo: ["hour_before", "day_before", "week_before", "month_before"],
  WidgetDisplayType: ["overlay", "area", "line", "bars", "adjacent_bars"],
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
  WidgetTextAlign: ["left", "center", "right"],
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
  WildcardBackendDefinitionType: ["wildcard"],
  WildcardSpecificationType: ["vega", "vega-lite"],
  WildcardWidgetDefinitionType: ["wildcard"],
  WildcardWidgetSpecificationType: ["vega", "vega-lite"],
};

const typeMap: { [index: string]: any } = {
  APIErrorResponse: APIErrorResponse,
  APMIssueStreamQuery: APMIssueStreamQuery,
  APMIssueStreamQueryInvestigation: APMIssueStreamQueryInvestigation,
  ActionsDatastoreDataset: ActionsDatastoreDataset,
  AggregateAugmentedQuery: AggregateAugmentedQuery,
  AggregateAugmentedQueryJoinCondition: AggregateAugmentedQueryJoinCondition,
  AggregateCompute: AggregateCompute,
  AggregateFilteredQuery: AggregateFilteredQuery,
  AggregateFilteredQueryFiltersItems: AggregateFilteredQueryFiltersItems,
  AggregateSegmentQuery: AggregateSegmentQuery,
  AggregateSegmentQuerySegmentQuery: AggregateSegmentQuerySegmentQuery,
  AlertGraphBackendDefinition: AlertGraphBackendDefinition,
  AlertGraphBackendWidget: AlertGraphBackendWidget,
  AlertGraphWidgetDefinition: AlertGraphWidgetDefinition,
  AlertValueBackendWidget: AlertValueBackendWidget,
  AlertValueDefinition: AlertValueDefinition,
  AlertValueWidgetDefinition: AlertValueWidgetDefinition,
  AnalysisAggregationSort: AnalysisAggregationSort,
  AnalysisDataset: AnalysisDataset,
  AnomalyDetectionConfig: AnomalyDetectionConfig,
  ApmMetricsHistogramRequest: ApmMetricsHistogramRequest,
  ApmMetricsQueryFragment: ApmMetricsQueryFragment,
  ApmRecommendationsStreamQuery: ApmRecommendationsStreamQuery,
  ApmRecommendationsStreamRequest: ApmRecommendationsStreamRequest,
  ApmRecommendationsStreamRequestColumnsItems:
    ApmRecommendationsStreamRequestColumnsItems,
  ApmStatsHistogramRequest: ApmStatsHistogramRequest,
  ApmStatsQuery: ApmStatsQuery,
  ApmStatsQueryColumnType: ApmStatsQueryColumnType,
  ApmStatsQueryDefinition: ApmStatsQueryDefinition,
  AppBuilderInputValue: AppBuilderInputValue,
  AudienceFilters: AudienceFilters,
  AudienceFiltersAccountsItems: AudienceFiltersAccountsItems,
  AudienceFiltersSegmentsItems: AudienceFiltersSegmentsItems,
  AudienceFiltersUsersItems: AudienceFiltersUsersItems,
  AuditStreamQuery: AuditStreamQuery,
  AuditStreamRequest: AuditStreamRequest,
  AuditStreamRequestColumnsItems: AuditStreamRequestColumnsItems,
  Axis: Axis,
  BackendDistributionYAxis: BackendDistributionYAxis,
  BackendTimeseriesAxisDefinition: BackendTimeseriesAxisDefinition,
  BarChartBackendDefinition: BarChartBackendDefinition,
  BarChartBackendDefinitionStyle: BarChartBackendDefinitionStyle,
  BarChartBackendDefinitionStyle20270101DisplayOneOf:
    BarChartBackendDefinitionStyle20270101DisplayOneOf,
  BarChartBackendDefinitionStyle20270101DisplayOneOf4453561856:
    BarChartBackendDefinitionStyle20270101DisplayOneOf4453561856,
  BarChartBackendRequest20270101OneOf: BarChartBackendRequest20270101OneOf,
  BarChartBackendRequest20270101OneOf4454434112:
    BarChartBackendRequest20270101OneOf4454434112,
  BarChartBackendRequest20270101OneOf4454435552:
    BarChartBackendRequest20270101OneOf4454435552,
  BarChartBackendRequest20270101OneOf4454436672:
    BarChartBackendRequest20270101OneOf4454436672,
  BarChartBackendRequest20270101OneOf4454438272:
    BarChartBackendRequest20270101OneOf4454438272,
  BarChartBackendWidget: BarChartBackendWidget,
  BarChartWidgetDefinition: BarChartWidgetDefinition,
  BarChartWidgetFlat: BarChartWidgetFlat,
  BarChartWidgetRequest: BarChartWidgetRequest,
  BarChartWidgetStacked: BarChartWidgetStacked,
  BarChartWidgetStyle: BarChartWidgetStyle,
  BigQueryDataset: BigQueryDataset,
  CalendarIntervalDay: CalendarIntervalDay,
  CalendarIntervalMonth: CalendarIntervalMonth,
  CalendarIntervalWeek: CalendarIntervalWeek,
  CalendarIntervalYear: CalendarIntervalYear,
  CalendarShift: CalendarShift,
  CalendarShiftSplitConfig: CalendarShiftSplitConfig,
  CaseCompute: CaseCompute,
  CaseGroupBy: CaseGroupBy,
  CaseStreamQuery: CaseStreamQuery,
  CaseStreamRequest: CaseStreamRequest,
  CaseStreamRequestColumnsItems: CaseStreamRequestColumnsItems,
  CellScope: CellScope,
  CellScope20270101CohortTargetOneOf: CellScope20270101CohortTargetOneOf,
  CellScope20270101CohortTargetOneOf4454617856:
    CellScope20270101CohortTargetOneOf4454617856,
  CellScopeReturnPeriodTarget: CellScopeReturnPeriodTarget,
  ChangeBackendDefinition: ChangeBackendDefinition,
  ChangeBackendRequest20270101OneOf: ChangeBackendRequest20270101OneOf,
  ChangeBackendRequest20270101OneOf4454622976:
    ChangeBackendRequest20270101OneOf4454622976,
  ChangeBackendWidget: ChangeBackendWidget,
  ChangeDuration20270101OneOf: ChangeDuration20270101OneOf,
  ChangeDuration20270101OneOf4454627136: ChangeDuration20270101OneOf4454627136,
  ChangeWidgetDefinition: ChangeWidgetDefinition,
  ChangeWidgetRequest: ChangeWidgetRequest,
  CheckStatusBackendDefinition: CheckStatusBackendDefinition,
  CheckStatusBackendWidget: CheckStatusBackendWidget,
  CheckStatusWidgetDefinition: CheckStatusWidgetDefinition,
  CohortBackendWidget: CohortBackendWidget,
  CohortDefinition: CohortDefinition,
  CohortScope: CohortScope,
  CohortScope20270101TargetOneOf: CohortScope20270101TargetOneOf,
  CohortScope20270101TargetOneOf4454865216:
    CohortScope20270101TargetOneOf4454865216,
  CohortWidgetDefinition: CohortWidgetDefinition,
  ComparisonCustomTimeframe: ComparisonCustomTimeframe,
  ComparisonDuration: ComparisonDuration,
  ComparisonRequest: ComparisonRequest,
  CompositeAudienceFiltersQuery: CompositeAudienceFiltersQuery,
  CompositeAudienceFiltersQueryAccountsItems:
    CompositeAudienceFiltersQueryAccountsItems,
  CompositeAudienceFiltersQuerySegmentsItems:
    CompositeAudienceFiltersQuerySegmentsItems,
  CompositeAudienceFiltersQueryUsersItems:
    CompositeAudienceFiltersQueryUsersItems,
  CompositeCompute: CompositeCompute,
  CompositeEventsPlatformQuery: CompositeEventsPlatformQuery,
  CompositeEventsPlatformQueryDefinition:
    CompositeEventsPlatformQueryDefinition,
  CompositeEventsPlatformQueryDefinitionSearch:
    CompositeEventsPlatformQueryDefinitionSearch,
  CompositeEventsPlatformQuerySearch: CompositeEventsPlatformQuerySearch,
  CompositeEventsPlatformSubQueryDefinition:
    CompositeEventsPlatformSubQueryDefinition,
  CompositeEventsPlatformSubQueryDefinitionSearch:
    CompositeEventsPlatformSubQueryDefinitionSearch,
  CompositeGroupBy: CompositeGroupBy,
  CompositeQuerySorting: CompositeQuerySorting,
  CompositeReferentialDataQuery: CompositeReferentialDataQuery,
  CompositeReferentialDataQueryComputeItems:
    CompositeReferentialDataQueryComputeItems,
  CompositeStreamRequest: CompositeStreamRequest,
  CompositeStreamRequestColumn: CompositeStreamRequestColumn,
  ComputeTableColumn: ComputeTableColumn,
  ComputeTableColumnCompute: ComputeTableColumnCompute,
  ContextMenuLink: ContextMenuLink,
  CustomTopologyMapInlineData: CustomTopologyMapInlineData,
  CustomTopologyMapInlineEdgeColumn: CustomTopologyMapInlineEdgeColumn,
  CustomTopologyMapInlineEdgesData: CustomTopologyMapInlineEdgesData,
  CustomTopologyMapInlineNodeIdColumn: CustomTopologyMapInlineNodeIdColumn,
  CustomTopologyMapInlineNodeStringColumn:
    CustomTopologyMapInlineNodeStringColumn,
  CustomTopologyMapInlineNodeValueColumn:
    CustomTopologyMapInlineNodeValueColumn,
  CustomTopologyMapInlineNodeValueColumnMeta:
    CustomTopologyMapInlineNodeValueColumnMeta,
  CustomTopologyMapInlineNodesData: CustomTopologyMapInlineNodesData,
  CustomTopologyMapLayout: CustomTopologyMapLayout,
  CustomTopologyMapProjection: CustomTopologyMapProjection,
  CustomTopologyMapProjectionDimensionsItems:
    CustomTopologyMapProjectionDimensionsItems,
  CustomTopologyMapTileDefRequest: CustomTopologyMapTileDefRequest,
  DDSQLTableRequest: DDSQLTableRequest,
  DDSQLTimeseriesRequest: DDSQLTimeseriesRequest,
  Dashboard: Dashboard,
  DashboardFixedTimeframe: DashboardFixedTimeframe,
  DashboardLiveTimeframe: DashboardLiveTimeframe,
  DashboardTab: DashboardTab,
  DashboardTemplateVariable: DashboardTemplateVariable,
  DashboardTemplateVariablePreset: DashboardTemplateVariablePreset,
  DashboardTemplateVariablePresetValue: DashboardTemplateVariablePresetValue,
  DataObservabilityAssetsQuery: DataObservabilityAssetsQuery,
  DataObservabilityAssetsRequest: DataObservabilityAssetsRequest,
  DataObservabilityAssetsRequestColumnsItems:
    DataObservabilityAssetsRequestColumnsItems,
  DatabaseRecommendationsStreamQuery: DatabaseRecommendationsStreamQuery,
  DatabaseRecommendationsStreamRequest: DatabaseRecommendationsStreamRequest,
  DatabaseRecommendationsStreamRequestColumnsItems:
    DatabaseRecommendationsStreamRequestColumnsItems,
  DatasetColumn: DatasetColumn,
  DatasetCompute: DatasetCompute,
  DatasetGroupBy: DatasetGroupBy,
  DatasetListQuery: DatasetListQuery,
  DatasetListQuerySort: DatasetListQuerySort,
  DatasetListQuerySortField: DatasetListQuerySortField,
  DatasetListRequest: DatasetListRequest,
  DatasetListRequestColumnsItems: DatasetListRequestColumnsItems,
  DatasetSort: DatasetSort,
  DatasetSortField: DatasetSortField,
  DetectionRuleStreamQuery: DetectionRuleStreamQuery,
  DetectionRuleStreamRequest: DetectionRuleStreamRequest,
  DetectionRuleStreamRequestColumnsItems:
    DetectionRuleStreamRequestColumnsItems,
  DistributionBackendDefinition: DistributionBackendDefinition,
  DistributionBackendRequest20270101OneOf:
    DistributionBackendRequest20270101OneOf,
  DistributionBackendRequest20270101OneOf4455761856:
    DistributionBackendRequest20270101OneOf4455761856,
  DistributionBackendRequest20270101OneOf4455763296:
    DistributionBackendRequest20270101OneOf4455763296,
  DistributionBackendRequest20270101OneOf4455763936:
    DistributionBackendRequest20270101OneOf4455763936,
  DistributionBackendRequest20270101OneOf4455764576:
    DistributionBackendRequest20270101OneOf4455764576,
  DistributionBackendRequest20270101OneOf4455765216:
    DistributionBackendRequest20270101OneOf4455765216,
  DistributionBackendRequest20270101OneOf4455765856:
    DistributionBackendRequest20270101OneOf4455765856,
  DistributionBackendRequest20270101OneOf4455766496:
    DistributionBackendRequest20270101OneOf4455766496,
  DistributionBackendRequest20270101OneOf4455767136:
    DistributionBackendRequest20270101OneOf4455767136,
  DistributionBackendRequest20270101OneOf4455767776:
    DistributionBackendRequest20270101OneOf4455767776,
  DistributionBackendRequest20270101OneOf4455768416:
    DistributionBackendRequest20270101OneOf4455768416,
  DistributionBackendRequest20270101OneOf4455769056:
    DistributionBackendRequest20270101OneOf4455769056,
  DistributionBackendRequest20270101OneOf4455769696:
    DistributionBackendRequest20270101OneOf4455769696,
  DistributionBackendRequest20270101OneOf4455770336:
    DistributionBackendRequest20270101OneOf4455770336,
  DistributionBackendRequest20270101OneOf4455770976:
    DistributionBackendRequest20270101OneOf4455770976,
  DistributionBackendRequest20270101OneOf4455771616:
    DistributionBackendRequest20270101OneOf4455771616,
  DistributionBackendRequest20270101OneOf4455772256:
    DistributionBackendRequest20270101OneOf4455772256,
  DistributionBackendRequest20270101OneOf4455772896:
    DistributionBackendRequest20270101OneOf4455772896,
  DistributionBackendRequest20270101OneOf4455773536:
    DistributionBackendRequest20270101OneOf4455773536,
  DistributionBackendRequest20270101OneOf4455774496:
    DistributionBackendRequest20270101OneOf4455774496,
  DistributionBackendRequest20270101OneOf4455775456:
    DistributionBackendRequest20270101OneOf4455775456,
  DistributionBackendRequest20270101OneOf4455989472:
    DistributionBackendRequest20270101OneOf4455989472,
  DistributionBackendRequest20270101OneOf4455990432:
    DistributionBackendRequest20270101OneOf4455990432,
  DistributionBackendRequestAnyOfAnyOfItemQuery:
    DistributionBackendRequestAnyOfAnyOfItemQuery,
  DistributionBackendWidget: DistributionBackendWidget,
  DistributionWidgetDefinition: DistributionWidgetDefinition,
  DistributionWidgetRequest: DistributionWidgetRequest,
  DistributionWidgetXAxis: DistributionWidgetXAxis,
  DistributionWidgetYAxis: DistributionWidgetYAxis,
  DistributionXAxis: DistributionXAxis,
  DoraListStreamQuery: DoraListStreamQuery,
  DoraListStreamRequest: DoraListStreamRequest,
  DoraListStreamRequestColumnsItems: DoraListStreamRequestColumnsItems,
  EmbeddedAppBackendDefinition: EmbeddedAppBackendDefinition,
  EmbeddedAppBackendWidget: EmbeddedAppBackendWidget,
  EmbeddedAppWidgetDefinition: EmbeddedAppWidgetDefinition,
  EmbeddedAppWidgetInput: EmbeddedAppWidgetInput,
  ErrorsStreamQuery: ErrorsStreamQuery,
  ErrorsStreamRequest: ErrorsStreamRequest,
  ErrorsStreamRequestColumnsItems: ErrorsStreamRequestColumnsItems,
  EventPatternGroupBy: EventPatternGroupBy,
  EventPatternStreamQuery: EventPatternStreamQuery,
  EventPatternStreamRequest: EventPatternStreamRequest,
  EventPatternStreamRequestColumnsItems: EventPatternStreamRequestColumnsItems,
  EventPlatformDatasetDefinition: EventPlatformDatasetDefinition,
  EventPlatformDatasetDefinitionSearch: EventPlatformDatasetDefinitionSearch,
  EventPlatformStreamRequest: EventPlatformStreamRequest,
  EventPlatformStreamRequestColumnsItems:
    EventPlatformStreamRequestColumnsItems,
  EventQueryDefinition: EventQueryDefinition,
  EventStream: EventStream,
  EventStreamDefinition: EventStreamDefinition,
  EventStreamQuery: EventStreamQuery,
  EventStreamRequest: EventStreamRequest,
  EventStreamRequestColumnsItems: EventStreamRequestColumnsItems,
  EventStreamWidgetDefinition: EventStreamWidgetDefinition,
  EventTimelineBackendDefinition: EventTimelineBackendDefinition,
  EventTimelineBackendWidget: EventTimelineBackendWidget,
  EventTimelineWidgetDefinition: EventTimelineWidgetDefinition,
  EventsCalculatedField: EventsCalculatedField,
  EventsContext: EventsContext,
  EventsDataExtraction: EventsDataExtraction,
  EventsDataExtractionExtraction: EventsDataExtractionExtraction,
  EventsHistogramRequest: EventsHistogramRequest,
  EventsPlatformDataProjectionQuery: EventsPlatformDataProjectionQuery,
  EventsPlatformDataProjectionQueryDefinition:
    EventsPlatformDataProjectionQueryDefinition,
  EventsPlatformListStreamQuery: EventsPlatformListStreamQuery,
  EventsQueryFragmentDefinition: EventsQueryFragmentDefinition,
  EventsQueryFragmentDefinitionSearch: EventsQueryFragmentDefinitionSearch,
  ExcludeNullTableColumnFunction: ExcludeNullTableColumnFunction,
  FixedSpan2: FixedSpan2,
  FlatSortBy20270101OneOf: FlatSortBy20270101OneOf,
  FlatSortBy20270101OneOf4456386848: FlatSortBy20270101OneOf4456386848,
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
  FormulaApmDependencyStatsQuery: FormulaApmDependencyStatsQuery,
  FormulaApmMetricsQuery: FormulaApmMetricsQuery,
  FormulaApmResourceStatsQuery: FormulaApmResourceStatsQuery,
  FormulaCaseQuery: FormulaCaseQuery,
  FormulaChangeTrackingQuery: FormulaChangeTrackingQuery,
  FormulaChangeTrackingQuerySearch: FormulaChangeTrackingQuerySearch,
  FormulaDataQualityMetricsQuery: FormulaDataQualityMetricsQuery,
  FormulaDataQualityMetricsQueryAnomalyOptions:
    FormulaDataQualityMetricsQueryAnomalyOptions,
  FormulaDataset: FormulaDataset,
  FormulaDatasetApmMetricsQuery: FormulaDatasetApmMetricsQuery,
  FormulaDatasetFormulasItems: FormulaDatasetFormulasItems,
  FormulaDatasetMetricQuery: FormulaDatasetMetricQuery,
  FormulaDatasetQuery: FormulaDatasetQuery,
  FormulaDetectionRulesQuery: FormulaDetectionRulesQuery,
  FormulaDetectionRulesQuerySearch: FormulaDetectionRulesQuerySearch,
  FormulaDoraQuery: FormulaDoraQuery,
  FormulaDoraQuerySearch: FormulaDoraQuerySearch,
  FormulaEventsQuery: FormulaEventsQuery,
  FormulaEventsQuerySearch: FormulaEventsQuerySearch,
  FormulaGraphQuery: FormulaGraphQuery,
  FormulaGraphQueryCompute: FormulaGraphQueryCompute,
  FormulaGraphQueryGroupByItems: FormulaGraphQueryGroupByItems,
  FormulaIncidentsQuery: FormulaIncidentsQuery,
  FormulaIncidentsQuerySearch: FormulaIncidentsQuerySearch,
  FormulaManagedResourceQuery: FormulaManagedResourceQuery,
  FormulaMetricsQueryCloudCost: FormulaMetricsQueryCloudCost,
  FormulaMetricsQueryDatadogUsage: FormulaMetricsQueryDatadogUsage,
  FormulaMetricsQueryMetrics: FormulaMetricsQueryMetrics,
  FormulaOrderByFormulaIndex: FormulaOrderByFormulaIndex,
  FormulaOrderByGroup: FormulaOrderByGroup,
  FormulaProductAnalyticsExtendedQuery: FormulaProductAnalyticsExtendedQuery,
  FormulaReferenceTableQuery: FormulaReferenceTableQuery,
  FormulaRetentionQuery: FormulaRetentionQuery,
  FormulaRetentionQuerySampling: FormulaRetentionQuerySampling,
  FormulaSloQuery: FormulaSloQuery,
  FormulaTableColumn: FormulaTableColumn,
  FormulaUserJourneyQuery: FormulaUserJourneyQuery,
  FormulaUserJourneyQueryCompute: FormulaUserJourneyQueryCompute,
  FreeLayout: FreeLayout,
  FreeTextBackendDefinition: FreeTextBackendDefinition,
  FreeTextBackendWidget: FreeTextBackendWidget,
  FreeTextWidgetDefinition: FreeTextWidgetDefinition,
  FunnelBackendDefinition: FunnelBackendDefinition,
  FunnelBackendWidget: FunnelBackendWidget,
  FunnelComparisonCustomTimeframe: FunnelComparisonCustomTimeframe,
  FunnelComparisonDuration: FunnelComparisonDuration,
  FunnelQuery: FunnelQuery,
  FunnelStep: FunnelStep,
  FunnelWidgetDefinition: FunnelWidgetDefinition,
  FunnelWidgetRequest: FunnelWidgetRequest,
  GeomapBackendDefinition: GeomapBackendDefinition,
  GeomapBackendPointsRequest20270101OneOf:
    GeomapBackendPointsRequest20270101OneOf,
  GeomapBackendPointsRequest20270101OneOf4457225472:
    GeomapBackendPointsRequest20270101OneOf4457225472,
  GeomapBackendPointsRequest20270101OneOf4457227232:
    GeomapBackendPointsRequest20270101OneOf4457227232,
  GeomapBackendPointsRequest20270101OneOf4457228992:
    GeomapBackendPointsRequest20270101OneOf4457228992,
  GeomapBackendPointsRequest20270101OneOf4457230272:
    GeomapBackendPointsRequest20270101OneOf4457230272,
  GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems:
    GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems,
  GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200:
    GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446863200,
  GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856:
    GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems4446997856,
  GeomapBackendPointsRequestAnyOfAnyOfItemQuery:
    GeomapBackendPointsRequestAnyOfAnyOfItemQuery,
  GeomapBackendPointsRequestAnyOfAnyOfItemStyle:
    GeomapBackendPointsRequestAnyOfAnyOfItemStyle,
  GeomapBackendRegionsRequest20270101OneOf:
    GeomapBackendRegionsRequest20270101OneOf,
  GeomapBackendRegionsRequest20270101OneOf4457233792:
    GeomapBackendRegionsRequest20270101OneOf4457233792,
  GeomapBackendRegionsRequest20270101OneOf4457448128:
    GeomapBackendRegionsRequest20270101OneOf4457448128,
  GeomapBackendRegionsRequest20270101OneOf4457449888:
    GeomapBackendRegionsRequest20270101OneOf4457449888,
  GeomapBackendRegionsRequest20270101OneOf4457450848:
    GeomapBackendRegionsRequest20270101OneOf4457450848,
  GeomapBackendRegionsRequest20270101OneOf4457451808:
    GeomapBackendRegionsRequest20270101OneOf4457451808,
  GeomapBackendRegionsRequest20270101OneOf4457452768:
    GeomapBackendRegionsRequest20270101OneOf4457452768,
  GeomapBackendRegionsRequest20270101OneOf4457453728:
    GeomapBackendRegionsRequest20270101OneOf4457453728,
  GeomapBackendRegionsRequest20270101OneOf4457454688:
    GeomapBackendRegionsRequest20270101OneOf4457454688,
  GeomapBackendRegionsRequest20270101OneOf4457455648:
    GeomapBackendRegionsRequest20270101OneOf4457455648,
  GeomapBackendRegionsRequest20270101OneOf4457456608:
    GeomapBackendRegionsRequest20270101OneOf4457456608,
  GeomapBackendRegionsRequest20270101OneOf4457457568:
    GeomapBackendRegionsRequest20270101OneOf4457457568,
  GeomapBackendRegionsRequest20270101OneOf4457458528:
    GeomapBackendRegionsRequest20270101OneOf4457458528,
  GeomapBackendRegionsRequest20270101OneOf4457459488:
    GeomapBackendRegionsRequest20270101OneOf4457459488,
  GeomapBackendRegionsRequest20270101OneOf4457460448:
    GeomapBackendRegionsRequest20270101OneOf4457460448,
  GeomapBackendRegionsRequest20270101OneOf4457461408:
    GeomapBackendRegionsRequest20270101OneOf4457461408,
  GeomapBackendRegionsRequest20270101OneOf4457462368:
    GeomapBackendRegionsRequest20270101OneOf4457462368,
  GeomapBackendRegionsRequest20270101OneOf4457463328:
    GeomapBackendRegionsRequest20270101OneOf4457463328,
  GeomapBackendRegionsRequest20270101OneOf4457645216:
    GeomapBackendRegionsRequest20270101OneOf4457645216,
  GeomapBackendWidget: GeomapBackendWidget,
  GeomapPointsProjection: GeomapPointsProjection,
  GeomapPointsProjectionDimensionsItems: GeomapPointsProjectionDimensionsItems,
  GeomapRequestStyle: GeomapRequestStyle,
  GeomapStyle: GeomapStyle,
  GeomapView20270101OneOf: GeomapView20270101OneOf,
  GeomapView20270101OneOf4457650336: GeomapView20270101OneOf4457650336,
  GeomapWidgetDefinition: GeomapWidgetDefinition,
  GeomapWidgetDefinitionStyle: GeomapWidgetDefinitionStyle,
  GeomapWidgetDefinitionView: GeomapWidgetDefinitionView,
  GeomapWidgetRequest: GeomapWidgetRequest,
  GeomapWidgetRequestStyle: GeomapWidgetRequestStyle,
  GraphQuerySearch: GraphQuerySearch,
  GraphQuerySearchFilter: GraphQuerySearchFilter,
  GraphQuerySearchFilters: GraphQuerySearchFilters,
  GraphQuerySearchJoinKeys: GraphQuerySearchJoinKeys,
  GraphTargetNode: GraphTargetNode,
  GraphTargetPath: GraphTargetPath,
  GroupBackendDefinition: GroupBackendDefinition,
  GroupBackendWidget: GroupBackendWidget,
  GroupBySort: GroupBySort,
  GroupStyleRule: GroupStyleRule,
  GroupStyleRuleMatch: GroupStyleRuleMatch,
  GroupWidgetDefinition: GroupWidgetDefinition,
  HeatMapWidgetDefinition: HeatMapWidgetDefinition,
  HeatMapWidgetRequest: HeatMapWidgetRequest,
  HeatMapWidgetXAxis: HeatMapWidgetXAxis,
  HeatgridBackendWidget: HeatgridBackendWidget,
  HeatgridBin: HeatgridBin,
  HeatgridColorBin: HeatgridColorBin,
  HeatgridColorStop: HeatgridColorStop,
  HeatgridDefinition: HeatgridDefinition,
  HeatgridDiscreteConfig20270101OneOf: HeatgridDiscreteConfig20270101OneOf,
  HeatgridDiscreteConfig20270101OneOf4457881312:
    HeatgridDiscreteConfig20270101OneOf4457881312,
  HeatgridDiscreteCustomColor: HeatgridDiscreteCustomColor,
  HeatgridDiscretePresetColor: HeatgridDiscretePresetColor,
  HeatgridGradientConfig20270101OneOf: HeatgridGradientConfig20270101OneOf,
  HeatgridGradientConfig20270101OneOf4457883232:
    HeatgridGradientConfig20270101OneOf4457883232,
  HeatgridGradientCustomColor: HeatgridGradientCustomColor,
  HeatgridGradientPresetColor: HeatgridGradientPresetColor,
  HeatgridLabelColumn: HeatgridLabelColumn,
  HeatgridLabelColumnConfig: HeatgridLabelColumnConfig,
  HeatgridLegend: HeatgridLegend,
  HeatgridLegendConfig: HeatgridLegendConfig,
  HeatgridSort: HeatgridSort,
  HeatgridSortAndOrderBy: HeatgridSortAndOrderBy,
  HeatgridSortByLabel: HeatgridSortByLabel,
  HeatgridSortByValue: HeatgridSortByValue,
  HeatgridStop: HeatgridStop,
  HeatgridTextFormatMatch: HeatgridTextFormatMatch,
  HeatgridTextFormatReplaceAll: HeatgridTextFormatReplaceAll,
  HeatgridTextFormatReplaceSubstring: HeatgridTextFormatReplaceSubstring,
  HeatgridTextFormatRule: HeatgridTextFormatRule,
  HeatgridTileDefRequest: HeatgridTileDefRequest,
  HeatgridWidgetDefinition: HeatgridWidgetDefinition,
  HeatgridWidgetFormula: HeatgridWidgetFormula,
  HeatgridWidgetRequest: HeatgridWidgetRequest,
  HeatmapBackendDefinition: HeatmapBackendDefinition,
  HeatmapBackendDefinitionYaxis: HeatmapBackendDefinitionYaxis,
  HeatmapBackendRequest20270101OneOf: HeatmapBackendRequest20270101OneOf,
  HeatmapBackendRequest20270101OneOf4458138496:
    HeatmapBackendRequest20270101OneOf4458138496,
  HeatmapBackendRequest20270101OneOf4458139936:
    HeatmapBackendRequest20270101OneOf4458139936,
  HeatmapBackendRequest20270101OneOf4458140576:
    HeatmapBackendRequest20270101OneOf4458140576,
  HeatmapBackendRequestAnyOfAnyOfItemQuery:
    HeatmapBackendRequestAnyOfAnyOfItemQuery,
  HeatmapBackendWidget: HeatmapBackendWidget,
  HeatmapXAxis: HeatmapXAxis,
  HistoricalDiscoveredProcessesDataset: HistoricalDiscoveredProcessesDataset,
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
  HostmapBackendDefinition: HostmapBackendDefinition,
  HostmapBackendDefinitionStyle: HostmapBackendDefinitionStyle,
  HostmapBackendWidget: HostmapBackendWidget,
  HostmapDataProjectionRequest: HostmapDataProjectionRequest,
  HostmapFormula: HostmapFormula,
  HostmapFormulaLimit: HostmapFormulaLimit,
  HostmapGroupBy: HostmapGroupBy,
  HostmapInfrastructureRequest: HostmapInfrastructureRequest,
  HostmapProjection: HostmapProjection,
  HostmapProjectionDimensionsItems: HostmapProjectionDimensionsItems,
  HostmapScalarFormulaRequest: HostmapScalarFormulaRequest,
  HostmapStyle: HostmapStyle,
  HostmapTileDefFillRequest: HostmapTileDefFillRequest,
  HostmapTileDefSizeRequest: HostmapTileDefSizeRequest,
  IFrameWidgetDefinition: IFrameWidgetDefinition,
  IframeBackendDefinition: IframeBackendDefinition,
  IframeBackendWidget: IframeBackendWidget,
  ImageBackendDefinition: ImageBackendDefinition,
  ImageBackendWidget: ImageBackendWidget,
  ImageWidgetDefinition: ImageWidgetDefinition,
  IncidentsStreamQuery: IncidentsStreamQuery,
  IncidentsStreamRequest: IncidentsStreamRequest,
  IncidentsStreamRequestColumnsItems: IncidentsStreamRequestColumnsItems,
  InfrastructureListQuery: InfrastructureListQuery,
  InfrastructureListRequest: InfrastructureListRequest,
  InfrastructureListRequestColumnsItems: InfrastructureListRequestColumnsItems,
  IssueStreamColumn: IssueStreamColumn,
  IssueStreamSort: IssueStreamSort,
  JourneyMapBackendWidget: JourneyMapBackendWidget,
  JourneyMapDefinition: JourneyMapDefinition,
  JourneyMapExpandedPrefix: JourneyMapExpandedPrefix,
  JourneyMapGroupBy: JourneyMapGroupBy,
  JourneyMapQuery: JourneyMapQuery,
  JourneyMapTarget: JourneyMapTarget,
  JourneyMapWidgetDefinition: JourneyMapWidgetDefinition,
  JourneyMapWidgetRequest: JourneyMapWidgetRequest,
  LegacyEventManagementQuery: LegacyEventManagementQuery,
  LegacyEventOverlayQuery: LegacyEventOverlayQuery,
  LegacyIssueStreamRequest: LegacyIssueStreamRequest,
  LegacyUserJourneySearch: LegacyUserJourneySearch,
  LegacyUserJourneySearchFilters: LegacyUserJourneySearchFilters,
  LegacyUserJourneySearchJoinKeys: LegacyUserJourneySearchJoinKeys,
  ListAugmentedQuery: ListAugmentedQuery,
  ListAugmentedQueryJoinCondition: ListAugmentedQueryJoinCondition,
  ListColumn: ListColumn,
  ListFilteredQuery: ListFilteredQuery,
  ListFilteredQueryFiltersItems: ListFilteredQueryFiltersItems,
  ListSegmentQuery: ListSegmentQuery,
  ListSegmentQuerySegmentQuery: ListSegmentQuerySegmentQuery,
  ListStreamBackendDefinition: ListStreamBackendDefinition,
  ListStreamBackendWidget: ListStreamBackendWidget,
  ListStreamColumn: ListStreamColumn,
  ListStreamComputeItems: ListStreamComputeItems,
  ListStreamGroupByItems: ListStreamGroupByItems,
  ListStreamQuery: ListStreamQuery,
  ListStreamSort: ListStreamSort,
  ListStreamWidgetDefinition: ListStreamWidgetDefinition,
  ListStreamWidgetRequest: ListStreamWidgetRequest,
  LogQueryDefinition: LogQueryDefinition,
  LogQueryDefinitionGroupBy: LogQueryDefinitionGroupBy,
  LogQueryDefinitionGroupBySort: LogQueryDefinitionGroupBySort,
  LogQueryDefinitionSearch: LogQueryDefinitionSearch,
  LogStream: LogStream,
  LogStreamDefinition: LogStreamDefinition,
  LogStreamWidgetDefinition: LogStreamWidgetDefinition,
  LogsIssueStreamQuery: LogsIssueStreamQuery,
  LogsIssueStreamQueryInvestigation: LogsIssueStreamQueryInvestigation,
  LogsPatternGroupBy: LogsPatternGroupBy,
  LogsPatternStreamQuery: LogsPatternStreamQuery,
  LogsPatternStreamRequest: LogsPatternStreamRequest,
  LogsPatternStreamRequestColumnsItems: LogsPatternStreamRequestColumnsItems,
  LogsQueryCompute: LogsQueryCompute,
  LogsStreamQuery: LogsStreamQuery,
  LogsStreamRequest: LogsStreamRequest,
  LogsStreamRequestColumnsItems: LogsStreamRequestColumnsItems,
  LogsTransactionCompute: LogsTransactionCompute,
  LogsTransactionStreamQuery: LogsTransactionStreamQuery,
  LogsTransactionStreamRequest: LogsTransactionStreamRequest,
  LogsTransactionStreamRequestColumnsItems:
    LogsTransactionStreamRequestColumnsItems,
  MSLBackendWidgetLayout: MSLBackendWidgetLayout,
  MSLWidgetLayout: MSLWidgetLayout,
  ManageStatusBackendDefinition: ManageStatusBackendDefinition,
  ManageStatusBackendWidget: ManageStatusBackendWidget,
  Marker: Marker,
  MetricDatasetCloudCostScalar: MetricDatasetCloudCostScalar,
  MetricDatasetMetricScalar: MetricDatasetMetricScalar,
  MetricHostmapRequests: MetricHostmapRequests,
  MetricsHistogramRequest: MetricsHistogramRequest,
  MetricsHistogramRequestQuery: MetricsHistogramRequestQuery,
  MetricsLikeQueryFragmentCloudCost: MetricsLikeQueryFragmentCloudCost,
  MetricsLikeQueryFragmentMetrics: MetricsLikeQueryFragmentMetrics,
  MonitorSummaryWidgetDefinition: MonitorSummaryWidgetDefinition,
  NoteBackendDefinition: NoteBackendDefinition,
  NoteBackendWidget: NoteBackendWidget,
  NoteWidgetDefinition: NoteWidgetDefinition,
  NumberBarTableColumnFormat: NumberBarTableColumnFormat,
  NumberBarTableColumnFormatBar: NumberBarTableColumnFormatBar,
  NumberBarTableColumnFormatNumber: NumberBarTableColumnFormatNumber,
  NumberFormatUnitCanonical: NumberFormatUnitCanonical,
  NumberFormatUnitCustom: NumberFormatUnitCustom,
  NumberFormatUnitScale: NumberFormatUnitScale,
  NumberReferenceTableColumn: NumberReferenceTableColumn,
  NumberReferenceTableColumnReference: NumberReferenceTableColumnReference,
  OccurrenceFilter: OccurrenceFilter,
  PointPlotBackendDefinition: PointPlotBackendDefinition,
  PointPlotBackendWidget: PointPlotBackendWidget,
  PointPlotDataProjectionRequest: PointPlotDataProjectionRequest,
  PointPlotProjection: PointPlotProjection,
  PointPlotProjectionDimension: PointPlotProjectionDimension,
  PointPlotProjectionDimensionsItems: PointPlotProjectionDimensionsItems,
  PointPlotWidgetDefinition: PointPlotWidgetDefinition,
  PointPlotWidgetLegend: PointPlotWidgetLegend,
  PointPlotWidgetRequest: PointPlotWidgetRequest,
  PowerpackBackendDefinition: PowerpackBackendDefinition,
  PowerpackBackendTemplateVariable: PowerpackBackendTemplateVariable,
  PowerpackBackendTemplateVariables: PowerpackBackendTemplateVariables,
  PowerpackBackendWidget: PowerpackBackendWidget,
  PowerpackTemplateVariableContents: PowerpackTemplateVariableContents,
  PowerpackTemplateVariables: PowerpackTemplateVariables,
  PowerpackWidgetDefinition: PowerpackWidgetDefinition,
  PresetPeriodTableColumn: PresetPeriodTableColumn,
  PresetPeriodTableColumnPreset: PresetPeriodTableColumnPreset,
  ProcessQueryDefinition: ProcessQueryDefinition,
  ProductAnalyticsAudienceAccountSubquery:
    ProductAnalyticsAudienceAccountSubquery,
  ProductAnalyticsAudienceFilters: ProductAnalyticsAudienceFilters,
  ProductAnalyticsAudienceOccurrenceFilter:
    ProductAnalyticsAudienceOccurrenceFilter,
  ProductAnalyticsAudienceSegmentSubquery:
    ProductAnalyticsAudienceSegmentSubquery,
  ProductAnalyticsAudienceUserSubquery: ProductAnalyticsAudienceUserSubquery,
  ProductAnalyticsCompute: ProductAnalyticsCompute,
  ProductAnalyticsEventOccurrenceQuery: ProductAnalyticsEventOccurrenceQuery,
  ProductAnalyticsEventOccurrenceQuerySearch:
    ProductAnalyticsEventOccurrenceQuerySearch,
  ProductAnalyticsExtendedCompute: ProductAnalyticsExtendedCompute,
  ProductAnalyticsExtendedGroupBy: ProductAnalyticsExtendedGroupBy,
  ProductAnalyticsFunnelCompute: ProductAnalyticsFunnelCompute,
  ProductAnalyticsFunnelGroupBy: ProductAnalyticsFunnelGroupBy,
  ProductAnalyticsFunnelGroupBySort: ProductAnalyticsFunnelGroupBySort,
  ProductAnalyticsFunnelQuery: ProductAnalyticsFunnelQuery,
  ProductAnalyticsFunnelRequest: ProductAnalyticsFunnelRequest,
  ProductAnalyticsFunnelWidgetDefinition:
    ProductAnalyticsFunnelWidgetDefinition,
  ProductAnalyticsGroupBy: ProductAnalyticsGroupBy,
  ProductAnalyticsJourneyDataset: ProductAnalyticsJourneyDataset,
  ProductAnalyticsJourneyDatasetSearch: ProductAnalyticsJourneyDatasetSearch,
  ProductAnalyticsStreamQuery: ProductAnalyticsStreamQuery,
  PublishedAnalysis: PublishedAnalysis,
  PublishedAnalysisQueryFragment: PublishedAnalysisQueryFragment,
  QueryTableBackendDefinition: QueryTableBackendDefinition,
  QueryTableBackendRequest20270101OneOf: QueryTableBackendRequest20270101OneOf,
  QueryTableBackendRequest20270101OneOf4459913248:
    QueryTableBackendRequest20270101OneOf4459913248,
  QueryTableBackendRequest20270101OneOf4459916288:
    QueryTableBackendRequest20270101OneOf4459916288,
  QueryTableBackendRequest20270101OneOf4459919328:
    QueryTableBackendRequest20270101OneOf4459919328,
  QueryTableBackendRequest20270101OneOf4460101856:
    QueryTableBackendRequest20270101OneOf4460101856,
  QueryTableBackendRequest20270101OneOf4460104096:
    QueryTableBackendRequest20270101OneOf4460104096,
  QueryTableBackendRequest20270101OneOf4460106336:
    QueryTableBackendRequest20270101OneOf4460106336,
  QueryTableBackendRequest20270101OneOf4460108576:
    QueryTableBackendRequest20270101OneOf4460108576,
  QueryTableBackendRequest20270101OneOf4460110816:
    QueryTableBackendRequest20270101OneOf4460110816,
  QueryTableBackendRequest20270101OneOf4460113056:
    QueryTableBackendRequest20270101OneOf4460113056,
  QueryTableBackendRequest20270101OneOf4460115296:
    QueryTableBackendRequest20270101OneOf4460115296,
  QueryTableBackendRequest20270101OneOf4460117536:
    QueryTableBackendRequest20270101OneOf4460117536,
  QueryTableBackendRequest20270101OneOf4460300064:
    QueryTableBackendRequest20270101OneOf4460300064,
  QueryTableBackendRequest20270101OneOf4460302304:
    QueryTableBackendRequest20270101OneOf4460302304,
  QueryTableBackendRequest20270101OneOf4460304544:
    QueryTableBackendRequest20270101OneOf4460304544,
  QueryTableBackendRequest20270101OneOf4460306784:
    QueryTableBackendRequest20270101OneOf4460306784,
  QueryTableBackendRequest20270101OneOf4460309024:
    QueryTableBackendRequest20270101OneOf4460309024,
  QueryTableBackendRequest20270101OneOf4460311264:
    QueryTableBackendRequest20270101OneOf4460311264,
  QueryTableBackendRequest20270101OneOf4460313504:
    QueryTableBackendRequest20270101OneOf4460313504,
  QueryTableBackendRequest20270101OneOf4460513216:
    QueryTableBackendRequest20270101OneOf4460513216,
  QueryTableBackendRequest20270101OneOf4460516096:
    QueryTableBackendRequest20270101OneOf4460516096,
  QueryTableBackendRequest20270101OneOf4460519136:
    QueryTableBackendRequest20270101OneOf4460519136,
  QueryTableBackendRequest20270101OneOf4460522016:
    QueryTableBackendRequest20270101OneOf4460522016,
  QueryTableBackendWidget: QueryTableBackendWidget,
  QueryTableColumnLink: QueryTableColumnLink,
  QueryTableColumnRequest: QueryTableColumnRequest,
  QueryTableProjection: QueryTableProjection,
  QueryTableProjectionDimension: QueryTableProjectionDimension,
  QueryValueBackendDefinition: QueryValueBackendDefinition,
  QueryValueBackendRequest20270101OneOf: QueryValueBackendRequest20270101OneOf,
  QueryValueBackendRequest20270101OneOf4460683296:
    QueryValueBackendRequest20270101OneOf4460683296,
  QueryValueBackendRequest20270101OneOf4460685056:
    QueryValueBackendRequest20270101OneOf4460685056,
  QueryValueBackendRequest20270101OneOf4460686496:
    QueryValueBackendRequest20270101OneOf4460686496,
  QueryValueBackendRequest20270101OneOf4460688416:
    QueryValueBackendRequest20270101OneOf4460688416,
  QueryValueBackendRequest20270101OneOf4460689536:
    QueryValueBackendRequest20270101OneOf4460689536,
  QueryValueBackendRequest20270101OneOf4460690656:
    QueryValueBackendRequest20270101OneOf4460690656,
  QueryValueBackendRequest20270101OneOf4460904832:
    QueryValueBackendRequest20270101OneOf4460904832,
  QueryValueBackendRequest20270101OneOf4460905952:
    QueryValueBackendRequest20270101OneOf4460905952,
  QueryValueBackendRequest20270101OneOf4460907072:
    QueryValueBackendRequest20270101OneOf4460907072,
  QueryValueBackendRequest20270101OneOf4460908192:
    QueryValueBackendRequest20270101OneOf4460908192,
  QueryValueBackendRequest20270101OneOf4460909312:
    QueryValueBackendRequest20270101OneOf4460909312,
  QueryValueBackendRequest20270101OneOf4460910432:
    QueryValueBackendRequest20270101OneOf4460910432,
  QueryValueBackendRequest20270101OneOf4460911552:
    QueryValueBackendRequest20270101OneOf4460911552,
  QueryValueBackendRequest20270101OneOf4460912672:
    QueryValueBackendRequest20270101OneOf4460912672,
  QueryValueBackendRequest20270101OneOf4460913792:
    QueryValueBackendRequest20270101OneOf4460913792,
  QueryValueBackendRequest20270101OneOf4460914912:
    QueryValueBackendRequest20270101OneOf4460914912,
  QueryValueBackendRequest20270101OneOf4460916032:
    QueryValueBackendRequest20270101OneOf4460916032,
  QueryValueBackendRequest20270101OneOf4460917152:
    QueryValueBackendRequest20270101OneOf4460917152,
  QueryValueBackendRequest20270101OneOf4460918912:
    QueryValueBackendRequest20270101OneOf4460918912,
  QueryValueBackendWidget: QueryValueBackendWidget,
  QueryValueProjection: QueryValueProjection,
  QueryValueWidgetComparison: QueryValueWidgetComparison,
  QueryValueWidgetDefinition: QueryValueWidgetDefinition,
  QueryValueWidgetRequest: QueryValueWidgetRequest,
  RUMIssueStreamQuery: RUMIssueStreamQuery,
  RUMIssueStreamQueryInvestigation: RUMIssueStreamQueryInvestigation,
  RecommendationsStreamQuery: RecommendationsStreamQuery,
  RecommendationsStreamRequest: RecommendationsStreamRequest,
  RecommendationsStreamRequestColumnsItems:
    RecommendationsStreamRequestColumnsItems,
  ReferentialDatasetManagedResource: ReferentialDatasetManagedResource,
  ReferentialDatasetReferenceTable: ReferentialDatasetReferenceTable,
  ReferentialQueryFragmentManagedResource:
    ReferentialQueryFragmentManagedResource,
  ReferentialQueryFragmentReferenceTable:
    ReferentialQueryFragmentReferenceTable,
  RelationalDataQuery: RelationalDataQuery,
  RelationalDataQuerySort: RelationalDataQuerySort,
  RequestStyle: RequestStyle,
  RetentionCohortCriteria: RetentionCohortCriteria,
  RetentionCohortCriteriaTimeInterval: RetentionCohortCriteriaTimeInterval,
  RetentionCompute: RetentionCompute,
  RetentionCurveBackendWidget: RetentionCurveBackendWidget,
  RetentionCurveDefinition: RetentionCurveDefinition,
  RetentionCurveStyle: RetentionCurveStyle,
  RetentionCurveWidgetDefinition: RetentionCurveWidgetDefinition,
  RetentionCurveWidgetRequest: RetentionCurveWidgetRequest,
  RetentionFilters: RetentionFilters,
  RetentionGridRequest: RetentionGridRequest,
  RetentionGroupBy: RetentionGroupBy,
  RetentionGroupByItems: RetentionGroupByItems,
  RetentionGroupByItemsSort: RetentionGroupByItemsSort,
  RetentionGroupBySort: RetentionGroupBySort,
  RetentionQuery: RetentionQuery,
  RetentionReturnCriteria: RetentionReturnCriteria,
  RetentionReturnCriteriaTimeInterval: RetentionReturnCriteriaTimeInterval,
  RetentionSearch: RetentionSearch,
  RetentionSearchCohortCriteria: RetentionSearchCohortCriteria,
  RetentionSearchCohortCriteriaTimeInterval:
    RetentionSearchCohortCriteriaTimeInterval,
  RetentionSearchFilters: RetentionSearchFilters,
  RetentionSearchReturnCriteria: RetentionSearchReturnCriteria,
  RetentionSearchReturnCriteriaTimeInterval:
    RetentionSearchReturnCriteriaTimeInterval,
  ReturnPeriodScope: ReturnPeriodScope,
  ReturnPeriodScopeTarget: ReturnPeriodScopeTarget,
  RumStreamQuery: RumStreamQuery,
  RumStreamRequest: RumStreamRequest,
  RumStreamRequestColumnsItems: RumStreamRequestColumnsItems,
  RunChartGroupDimension: RunChartGroupDimension,
  RunChartLineStyle: RunChartLineStyle,
  RunChartProjection: RunChartProjection,
  RunChartValueDimension: RunChartValueDimension,
  RunChartXDimension: RunChartXDimension,
  RunWorkflowBackendDefinition: RunWorkflowBackendDefinition,
  RunWorkflowBackendWidget: RunWorkflowBackendWidget,
  RunWorkflowExecutionInput: RunWorkflowExecutionInput,
  RunWorkflowWidgetDefinition: RunWorkflowWidgetDefinition,
  RunWorkflowWidgetInput: RunWorkflowWidgetInput,
  SLOListWidgetDefinition: SLOListWidgetDefinition,
  SLOListWidgetQuery: SLOListWidgetQuery,
  SLOListWidgetRequest: SLOListWidgetRequest,
  SLOWidgetDefinition: SLOWidgetDefinition,
  SampledAnalysisQuery: SampledAnalysisQuery,
  SampledAnalysisQuerySample: SampledAnalysisQuerySample,
  SankeyBackendWidget: SankeyBackendWidget,
  SankeyDefinition: SankeyDefinition,
  SankeyJoinKeys: SankeyJoinKeys,
  SankeyNetworkQuery: SankeyNetworkQuery,
  SankeyNetworkQueryCompute: SankeyNetworkQueryCompute,
  SankeyNetworkQuerySort: SankeyNetworkQuerySort,
  SankeyNetworkRequest: SankeyNetworkRequest,
  SankeyRumQuery: SankeyRumQuery,
  SankeyRumRequest: SankeyRumRequest,
  SankeyWidgetDefinition: SankeyWidgetDefinition,
  ScalarFormulaRequest: ScalarFormulaRequest,
  ScalarFormulaSort: ScalarFormulaSort,
  ScatterPlotLegendType20270101OneOf: ScatterPlotLegendType20270101OneOf,
  ScatterPlotLegendType20270101OneOf4461516160:
    ScatterPlotLegendType20270101OneOf4461516160,
  ScatterPlotRequest: ScatterPlotRequest,
  ScatterPlotWidgetDefinition: ScatterPlotWidgetDefinition,
  ScatterPlotWidgetDefinitionRequests: ScatterPlotWidgetDefinitionRequests,
  ScatterplotBackendAxisRequest: ScatterplotBackendAxisRequest,
  ScatterplotBackendDefinition: ScatterplotBackendDefinition,
  ScatterplotBackendTableRequest20270101OneOf:
    ScatterplotBackendTableRequest20270101OneOf,
  ScatterplotBackendTableRequest20270101OneOf4461521920:
    ScatterplotBackendTableRequest20270101OneOf4461521920,
  ScatterplotBackendTableRequest20270101OneOf4461523200:
    ScatterplotBackendTableRequest20270101OneOf4461523200,
  ScatterplotBackendTableRequest20270101OneOf4461524480:
    ScatterplotBackendTableRequest20270101OneOf4461524480,
  ScatterplotBackendTableRequest20270101OneOf4461525600:
    ScatterplotBackendTableRequest20270101OneOf4461525600,
  ScatterplotBackendTableRequest20270101OneOf4461756480:
    ScatterplotBackendTableRequest20270101OneOf4461756480,
  ScatterplotBackendWidget: ScatterplotBackendWidget,
  ScatterplotFormula: ScatterplotFormula,
  ScatterplotFormulaLimit: ScatterplotFormulaLimit,
  ScatterplotProjection: ScatterplotProjection,
  ScatterplotProjectionDimensionsItems: ScatterplotProjectionDimensionsItems,
  ScatterplotRequests20270101OneOf: ScatterplotRequests20270101OneOf,
  ScatterplotRequests20270101OneOf4461761120:
    ScatterplotRequests20270101OneOf4461761120,
  ScatterplotTableRequest: ScatterplotTableRequest,
  ScatterplotWidgetFormula: ScatterplotWidgetFormula,
  SecurityRuntimePatternStreamQuery: SecurityRuntimePatternStreamQuery,
  SecurityRuntimePatternStreamRequest: SecurityRuntimePatternStreamRequest,
  SecurityRuntimePatternStreamRequestColumnsItems:
    SecurityRuntimePatternStreamRequestColumnsItems,
  SecurityRuntimeStreamQuery: SecurityRuntimeStreamQuery,
  SecurityRuntimeStreamRequest: SecurityRuntimeStreamRequest,
  SecurityRuntimeStreamRequestColumnsItems:
    SecurityRuntimeStreamRequestColumnsItems,
  ServiceMapBackendWidget: ServiceMapBackendWidget,
  ServiceMapDefinition: ServiceMapDefinition,
  ServiceMapWidgetDefinition: ServiceMapWidgetDefinition,
  ServiceSummaryBackendDefinition: ServiceSummaryBackendDefinition,
  ServiceSummaryBackendWidget: ServiceSummaryBackendWidget,
  ServiceSummaryWidgetDefinition: ServiceSummaryWidgetDefinition,
  SloBackendDefinition: SloBackendDefinition,
  SloBackendWidget: SloBackendWidget,
  SloListBackendDefinition: SloListBackendDefinition,
  SloListBackendWidget: SloListBackendWidget,
  SnowflakeQueryDataset: SnowflakeQueryDataset,
  SortPair: SortPair,
  SplitConfig: SplitConfig,
  SplitConfigSort: SplitConfigSort,
  SplitConfigSortCompute: SplitConfigSortCompute,
  SplitDimension: SplitDimension,
  SplitGraphWidgetDefinition: SplitGraphWidgetDefinition,
  SplitGroupBackendDefinition: SplitGroupBackendDefinition,
  SplitGroupBackendWidget: SplitGroupBackendWidget,
  SplitSort: SplitSort,
  SplitSortCompute: SplitSortCompute,
  SplitVectorEntryItem: SplitVectorEntryItem,
  SplitVectorTagFilter: SplitVectorTagFilter,
  SqlAnalysisQuery: SqlAnalysisQuery,
  StringReferenceTableColumn: StringReferenceTableColumn,
  StringReferenceTableColumnReference: StringReferenceTableColumnReference,
  StringTableColumnFormat: StringTableColumnFormat,
  StructuredAnalysisAggregation: StructuredAnalysisAggregation,
  StructuredAnalysisCalculatedField: StructuredAnalysisCalculatedField,
  StructuredAnalysisCast: StructuredAnalysisCast,
  StructuredAnalysisColumnExtraction: StructuredAnalysisColumnExtraction,
  StructuredAnalysisCompute: StructuredAnalysisCompute,
  StructuredAnalysisDestructure: StructuredAnalysisDestructure,
  StructuredAnalysisDestructureColumnsItems:
    StructuredAnalysisDestructureColumnsItems,
  StructuredAnalysisFilter: StructuredAnalysisFilter,
  StructuredAnalysisGroupBy: StructuredAnalysisGroupBy,
  StructuredAnalysisJoin: StructuredAnalysisJoin,
  StructuredAnalysisJoinCondition: StructuredAnalysisJoinCondition,
  StructuredAnalysisLimit: StructuredAnalysisLimit,
  StructuredAnalysisProjection: StructuredAnalysisProjection,
  StructuredAnalysisProjectionColumnsItems:
    StructuredAnalysisProjectionColumnsItems,
  StructuredAnalysisQuery: StructuredAnalysisQuery,
  StructuredAnalysisSort: StructuredAnalysisSort,
  StructuredAnalysisTimeAggregation: StructuredAnalysisTimeAggregation,
  SunburstBackendDefinition: SunburstBackendDefinition,
  SunburstBackendRequest20270101OneOf: SunburstBackendRequest20270101OneOf,
  SunburstBackendRequest20270101OneOf4462422560:
    SunburstBackendRequest20270101OneOf4462422560,
  SunburstBackendRequest20270101OneOf4462423840:
    SunburstBackendRequest20270101OneOf4462423840,
  SunburstBackendRequest20270101OneOf4462424800:
    SunburstBackendRequest20270101OneOf4462424800,
  SunburstBackendWidget: SunburstBackendWidget,
  SunburstKnownLegend20270101OneOf: SunburstKnownLegend20270101OneOf,
  SunburstKnownLegend20270101OneOf4462427680:
    SunburstKnownLegend20270101OneOf4462427680,
  SunburstKnownLegend20270101OneOf4462657920:
    SunburstKnownLegend20270101OneOf4462657920,
  SunburstLegend20270101OneOf: SunburstLegend20270101OneOf,
  SunburstRequestStyle: SunburstRequestStyle,
  SunburstWidgetDefinition: SunburstWidgetDefinition,
  SunburstWidgetLegendInlineAutomatic: SunburstWidgetLegendInlineAutomatic,
  SunburstWidgetLegendTable: SunburstWidgetLegendTable,
  SunburstWidgetRequest: SunburstWidgetRequest,
  TableColumnComparisonWithOtherColumnDiffFrom:
    TableColumnComparisonWithOtherColumnDiffFrom,
  TableColumnComparisonWithOtherColumnPercentDiffFrom:
    TableColumnComparisonWithOtherColumnPercentDiffFrom,
  TableColumnComparisonWithOtherColumnPercentOf:
    TableColumnComparisonWithOtherColumnPercentOf,
  TableColumnComparisonWithSelf: TableColumnComparisonWithSelf,
  TableColumnFunction: TableColumnFunction,
  TableColumnModifier: TableColumnModifier,
  TableFormula20270101OneOf: TableFormula20270101OneOf,
  TableFormula20270101OneOf4462669760: TableFormula20270101OneOf4462669760,
  TableFormulaAnyOfAnyOfItemLimit: TableFormulaAnyOfAnyOfItemLimit,
  TableFormulaAnyOfAnyOfItemLimit4452334816:
    TableFormulaAnyOfAnyOfItemLimit4452334816,
  TableGroupKey: TableGroupKey,
  TableRowGroupBy: TableRowGroupBy,
  TableRowGroupByFormat: TableRowGroupByFormat,
  TableRows: TableRows,
  TableSort: TableSort,
  TableSortColumnsItems: TableSortColumnsItems,
  TableTrendCellDisplayModeOptions: TableTrendCellDisplayModeOptions,
  TableWidgetDefinition: TableWidgetDefinition,
  TableWidgetRequest: TableWidgetRequest,
  TableWidgetTextFormatMatch: TableWidgetTextFormatMatch,
  TableWidgetTextFormatReplaceAll: TableWidgetTextFormatReplaceAll,
  TableWidgetTextFormatReplaceSubstring: TableWidgetTextFormatReplaceSubstring,
  TableWidgetTextFormatRule: TableWidgetTextFormatRule,
  TabularAdvancedQueryRequest: TabularAdvancedQueryRequest,
  TabularLocalDatasetRequest: TabularLocalDatasetRequest,
  TextFormattingRule: TextFormattingRule,
  TextFormattingRule20270101ReplaceOneOf:
    TextFormattingRule20270101ReplaceOneOf,
  TextFormattingRule20270101ReplaceOneOf4462863328:
    TextFormattingRule20270101ReplaceOneOf4462863328,
  TextMatch20270101OneOf: TextMatch20270101OneOf,
  TextMatch20270101OneOf4462865408: TextMatch20270101OneOf4462865408,
  TextMatch20270101OneOf4462866048: TextMatch20270101OneOf4462866048,
  TextMatch20270101OneOf4462866688: TextMatch20270101OneOf4462866688,
  TextMatch20270101OneOf4462867328: TextMatch20270101OneOf4462867328,
  TextMatch20270101OneOf4462867968: TextMatch20270101OneOf4462867968,
  TextReplacementRule: TextReplacementRule,
  TextReplacementRule20270101ReplaceOneOf:
    TextReplacementRule20270101ReplaceOneOf,
  TextReplacementRule20270101ReplaceOneOf4462870048:
    TextReplacementRule20270101ReplaceOneOf4462870048,
  ThresholdFormattingRule: ThresholdFormattingRule,
  TimeWindow: TimeWindow,
  TimeseriesBackendWidget: TimeseriesBackendWidget,
  TimeseriesBackground: TimeseriesBackground,
  TimeseriesFormulaRequest: TimeseriesFormulaRequest,
  TimeseriesProjection: TimeseriesProjection,
  TimeseriesProjectionDimensionsItems: TimeseriesProjectionDimensionsItems,
  TimeseriesRequestStyle: TimeseriesRequestStyle,
  TimeseriesWidgetAdvancedQueryRequest: TimeseriesWidgetAdvancedQueryRequest,
  TimeseriesWidgetApmRequest: TimeseriesWidgetApmRequest,
  TimeseriesWidgetAppsecSpanRequest: TimeseriesWidgetAppsecSpanRequest,
  TimeseriesWidgetAuditRequest: TimeseriesWidgetAuditRequest,
  TimeseriesWidgetCiPipelineRequest: TimeseriesWidgetCiPipelineRequest,
  TimeseriesWidgetCiTestRequest: TimeseriesWidgetCiTestRequest,
  TimeseriesWidgetComplianceFindingsRequest:
    TimeseriesWidgetComplianceFindingsRequest,
  TimeseriesWidgetDdsqlRequest: TimeseriesWidgetDdsqlRequest,
  TimeseriesWidgetDefinition: TimeseriesWidgetDefinition,
  TimeseriesWidgetEventRequest: TimeseriesWidgetEventRequest,
  TimeseriesWidgetExpressionAlias: TimeseriesWidgetExpressionAlias,
  TimeseriesWidgetFormulaRequest: TimeseriesWidgetFormulaRequest,
  TimeseriesWidgetLegacyEventRequest: TimeseriesWidgetLegacyEventRequest,
  TimeseriesWidgetLegacyProfileMetricsRequest:
    TimeseriesWidgetLegacyProfileMetricsRequest,
  TimeseriesWidgetLocalDatasetRequest: TimeseriesWidgetLocalDatasetRequest,
  TimeseriesWidgetLogRequest: TimeseriesWidgetLogRequest,
  TimeseriesWidgetMetricRequest: TimeseriesWidgetMetricRequest,
  TimeseriesWidgetNetworkRequest: TimeseriesWidgetNetworkRequest,
  TimeseriesWidgetProcessRequest: TimeseriesWidgetProcessRequest,
  TimeseriesWidgetProfilingMetricsRequest:
    TimeseriesWidgetProfilingMetricsRequest,
  TimeseriesWidgetRumRequest: TimeseriesWidgetRumRequest,
  TimeseriesWidgetSecurityRequest: TimeseriesWidgetSecurityRequest,
  TimeseriesWidgetSyntheticsBatchesRequest:
    TimeseriesWidgetSyntheticsBatchesRequest,
  TimeseriesWidgetSyntheticsTestRunsRequest:
    TimeseriesWidgetSyntheticsTestRunsRequest,
  TimeseriesXAxis: TimeseriesXAxis,
  TimeseriesXAxisDateFormat: TimeseriesXAxisDateFormat,
  ToplistBackendDefinition: ToplistBackendDefinition,
  ToplistBackendDefinitionStyle: ToplistBackendDefinitionStyle,
  ToplistBackendDefinitionStyle20270101DisplayOneOf:
    ToplistBackendDefinitionStyle20270101DisplayOneOf,
  ToplistBackendDefinitionStyle20270101DisplayOneOf4453175744:
    ToplistBackendDefinitionStyle20270101DisplayOneOf4453175744,
  ToplistBackendRequest20270101OneOf: ToplistBackendRequest20270101OneOf,
  ToplistBackendRequest20270101OneOf4463319360:
    ToplistBackendRequest20270101OneOf4463319360,
  ToplistBackendRequest20270101OneOf4463320800:
    ToplistBackendRequest20270101OneOf4463320800,
  ToplistBackendRequest20270101OneOf4463321920:
    ToplistBackendRequest20270101OneOf4463321920,
  ToplistBackendRequest20270101OneOf4463323520:
    ToplistBackendRequest20270101OneOf4463323520,
  ToplistBackendRequest20270101OneOf4463325120:
    ToplistBackendRequest20270101OneOf4463325120,
  ToplistBackendRequest20270101OneOf4463325920:
    ToplistBackendRequest20270101OneOf4463325920,
  ToplistBackendRequest20270101OneOf4463326720:
    ToplistBackendRequest20270101OneOf4463326720,
  ToplistBackendRequest20270101OneOf4463327520:
    ToplistBackendRequest20270101OneOf4463327520,
  ToplistBackendRequest20270101OneOf4463328320:
    ToplistBackendRequest20270101OneOf4463328320,
  ToplistBackendRequest20270101OneOf4463329120:
    ToplistBackendRequest20270101OneOf4463329120,
  ToplistBackendRequest20270101OneOf4463526592:
    ToplistBackendRequest20270101OneOf4463526592,
  ToplistBackendRequest20270101OneOf4463527392:
    ToplistBackendRequest20270101OneOf4463527392,
  ToplistBackendRequest20270101OneOf4463528192:
    ToplistBackendRequest20270101OneOf4463528192,
  ToplistBackendRequest20270101OneOf4463528992:
    ToplistBackendRequest20270101OneOf4463528992,
  ToplistBackendRequest20270101OneOf4463529792:
    ToplistBackendRequest20270101OneOf4463529792,
  ToplistBackendRequest20270101OneOf4463530592:
    ToplistBackendRequest20270101OneOf4463530592,
  ToplistBackendRequest20270101OneOf4463531392:
    ToplistBackendRequest20270101OneOf4463531392,
  ToplistBackendRequest20270101OneOf4463532192:
    ToplistBackendRequest20270101OneOf4463532192,
  ToplistBackendRequest20270101OneOf4463532992:
    ToplistBackendRequest20270101OneOf4463532992,
  ToplistBackendRequest20270101OneOf4463533792:
    ToplistBackendRequest20270101OneOf4463533792,
  ToplistBackendRequest20270101OneOf4463535232:
    ToplistBackendRequest20270101OneOf4463535232,
  ToplistBackendWidget: ToplistBackendWidget,
  ToplistWidgetDefinition: ToplistWidgetDefinition,
  ToplistWidgetFlat: ToplistWidgetFlat,
  ToplistWidgetRequest: ToplistWidgetRequest,
  ToplistWidgetStacked: ToplistWidgetStacked,
  ToplistWidgetStyle: ToplistWidgetStyle,
  TopologyMapBackendDefinition: TopologyMapBackendDefinition,
  TopologyMapBackendWidget: TopologyMapBackendWidget,
  TopologyMapInlineData: TopologyMapInlineData,
  TopologyMapInlineEdgeColumn: TopologyMapInlineEdgeColumn,
  TopologyMapInlineEdgesData: TopologyMapInlineEdgesData,
  TopologyMapInlineNodeIdColumn: TopologyMapInlineNodeIdColumn,
  TopologyMapInlineNodeStringColumn: TopologyMapInlineNodeStringColumn,
  TopologyMapInlineNodeValueColumn: TopologyMapInlineNodeValueColumn,
  TopologyMapInlineNodeValueColumnMeta: TopologyMapInlineNodeValueColumnMeta,
  TopologyMapInlineNodesData: TopologyMapInlineNodesData,
  TopologyMapLayout: TopologyMapLayout,
  TopologyMapWidgetDefinitionCustom: TopologyMapWidgetDefinitionCustom,
  TopologyMapWidgetDefinitionDataStreams:
    TopologyMapWidgetDefinitionDataStreams,
  TopologyMapWidgetDefinitionServiceMap: TopologyMapWidgetDefinitionServiceMap,
  TopologyQueryDataStreams: TopologyQueryDataStreams,
  TopologyQueryServiceMap: TopologyQueryServiceMap,
  TopologyRequestCustom: TopologyRequestCustom,
  TopologyRequestCustomProjection: TopologyRequestCustomProjection,
  TopologyRequestCustomProjectionDimension:
    TopologyRequestCustomProjectionDimension,
  TopologyRequestDataStreams: TopologyRequestDataStreams,
  TopologyRequestServiceMap: TopologyRequestServiceMap,
  TraceStreamQuery: TraceStreamQuery,
  TraceStreamRequest: TraceStreamRequest,
  TraceStreamRequestColumnsItems: TraceStreamRequestColumnsItems,
  TreeDataProjectionBarChart: TreeDataProjectionBarChart,
  TreeDataProjectionBarChartDimensionsItems:
    TreeDataProjectionBarChartDimensionsItems,
  TreeDataProjectionSunburst: TreeDataProjectionSunburst,
  TreeDataProjectionSunburstDimensionsItems:
    TreeDataProjectionSunburstDimensionsItems,
  TreeDataProjectionToplist: TreeDataProjectionToplist,
  TreeDataProjectionToplistDimensionsItems:
    TreeDataProjectionToplistDimensionsItems,
  TreeDataProjectionTreemap: TreeDataProjectionTreemap,
  TreeDataProjectionTreemapDimensionsItems:
    TreeDataProjectionTreemapDimensionsItems,
  TreeMapWidgetDefinition: TreeMapWidgetDefinition,
  TreeMapWidgetRequest: TreeMapWidgetRequest,
  TreemapBackendDefinition: TreemapBackendDefinition,
  TreemapBackendRequest20270101OneOf: TreemapBackendRequest20270101OneOf,
  TreemapBackendRequest20270101OneOf4463750144:
    TreemapBackendRequest20270101OneOf4463750144,
  TreemapBackendRequest20270101OneOf4463751424:
    TreemapBackendRequest20270101OneOf4463751424,
  TreemapBackendRequest20270101OneOf4463752384:
    TreemapBackendRequest20270101OneOf4463752384,
  TreemapBackendRequest20270101OneOf4463753824:
    TreemapBackendRequest20270101OneOf4463753824,
  TreemapBackendWidget: TreemapBackendWidget,
  TreemapRequestStyle: TreemapRequestStyle,
  TrendTableColumnFormat: TrendTableColumnFormat,
  UnifiedIssueStreamQuery: UnifiedIssueStreamQuery,
  UnifiedIssueStreamQueryInvestigation: UnifiedIssueStreamQueryInvestigation,
  UnifiedIssueStreamRequest: UnifiedIssueStreamRequest,
  UserDefinedLink: UserDefinedLink,
  UserJourneyFormulaCompute: UserJourneyFormulaCompute,
  UserJourneyFormulaGroupBy: UserJourneyFormulaGroupBy,
  UserJourneyGroupBy: UserJourneyGroupBy,
  UserJourneyJoinKeys: UserJourneyJoinKeys,
  UserJourneySearch: UserJourneySearch,
  UserJourneySearchFilters: UserJourneySearchFilters,
  UserJourneySearchGraphFilter: UserJourneySearchGraphFilter,
  UserJourneySearchJoinKeys: UserJourneySearchJoinKeys,
  UserJourneySearchTarget: UserJourneySearchTarget,
  WatchdogAlertsQuery: WatchdogAlertsQuery,
  WatchdogAlertsRequest: WatchdogAlertsRequest,
  WatchdogAlertsRequestColumnsItems: WatchdogAlertsRequestColumnsItems,
  Widget: Widget,
  WidgetAxis: WidgetAxis,
  WidgetConditionalFormat: WidgetConditionalFormat,
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
  WidgetTime20270101OneOf: WidgetTime20270101OneOf,
  WidgetTime20270101OneOf4464103552: WidgetTime20270101OneOf4464103552,
  WidgetTime20270101OneOf4464104512: WidgetTime20270101OneOf4464104512,
  WidgetTime20270101OneOf4464105312: WidgetTime20270101OneOf4464105312,
  WidgetTime20270101OneOf4464105952: WidgetTime20270101OneOf4464105952,
  WildcardBackendDefinition: WildcardBackendDefinition,
  WildcardBackendDefinitionSpecification:
    WildcardBackendDefinitionSpecification,
  WildcardBackendWidget: WildcardBackendWidget,
  WildcardWidgetDefinition: WildcardWidgetDefinition,
  WildcardWidgetSpecification: WildcardWidgetSpecification,
};

const oneOfMap: { [index: string]: string[] } = {
  AdvancedQueryDataset: [
    "EventPlatformDatasetDefinition",
    "ReferentialDatasetReferenceTable",
    "ReferentialDatasetManagedResource",
    "ActionsDatastoreDataset",
    "MetricDatasetCloudCostScalar",
    "MetricDatasetMetricScalar",
    "FormulaDataset",
    "AnalysisDataset",
    "PublishedAnalysis",
    "SnowflakeQueryDataset",
    "BigQueryDataset",
    "ProductAnalyticsJourneyDataset",
    "HistoricalDiscoveredProcessesDataset",
  ],
  AllListRequestVariants: [
    "ListStreamRequest",
    "CompositeStreamRequest",
    "DatasetListRequest",
    "InfrastructureListRequest",
  ],
  AnalysisDataset20270101Query: [
    "SqlAnalysisQuery",
    "StructuredAnalysisQuery",
    "SampledAnalysisQuery",
  ],
  ApmRecommendationsStreamQuery20270101GroupBy: ["Array<any>", "Array<any>"],
  ApmRecommendationsStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  ApmRecommendationsStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema12",
  ],
  AppBuilderInputValue20270101Value: ["string", "number", "boolean"],
  AuditStreamQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  AuditStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema13",
  ],
  AxisBound: ["string", "number"],
  BackendDistributionYAxis20270101Max: ["string", "number"],
  BackendDistributionYAxis20270101Min: ["string", "number"],
  BarChartBackendDefinitionStyle20270101Display: [
    "BarChartBackendDefinitionStyle20270101DisplayOneOf",
    "BarChartBackendDefinitionStyle20270101DisplayOneOf4453561856",
  ],
  BarChartBackendRequest: [
    "BarChartBackendRequest20270101OneOf",
    "BarChartBackendRequest20270101OneOf4454434112",
    "BarChartBackendRequest20270101OneOf4454435552",
    "BarChartBackendRequest20270101OneOf4454436672",
    "BarChartBackendRequest20270101OneOf4454438272",
  ],
  BarChartBackendRequest20270101OneOfQuery: [
    "StructuredAnalysisQuery",
    "SampledAnalysisQuery",
  ],
  BarChartWidgetDisplay: ["BarChartWidgetStacked", "BarChartWidgetFlat"],
  BaseProductAnalyticsQuery: [
    "ProductAnalyticsEventQuery",
    "ProductAnalyticsEventOccurrenceQuery",
  ],
  CalendarInterval: [
    "CalendarIntervalDay",
    "CalendarIntervalWeek",
    "CalendarIntervalMonth",
    "CalendarIntervalYear",
  ],
  CaseStreamQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  CaseStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema14",
  ],
  CellScope20270101CohortTarget: [
    "CellScope20270101CohortTargetOneOf",
    "CellScope20270101CohortTargetOneOf4454617856",
  ],
  ChangeBackendRequest: [
    "ChangeBackendRequest20270101OneOf",
    "ChangeBackendRequest20270101OneOf4454622976",
  ],
  ChangeDuration: [
    "ChangeDuration20270101OneOf",
    "ChangeDuration20270101OneOf4454627136",
  ],
  CohortDefinition20270101Requests: ["Array<any>", "Array<any>"],
  CohortScope20270101Target: [
    "CohortScope20270101TargetOneOf",
    "CohortScope20270101TargetOneOf4454865216",
  ],
  CompositeSourceBaseQuery: [
    "FormulaMetricsQueryMetrics",
    "FormulaMetricsQueryCloudCost",
    "FormulaMetricsQueryDatadogUsage",
    "CompositeEventsPlatformQueryDefinition",
  ],
  CompositeSourceSubQuery: [
    "CompositeEventsPlatformSubQueryDefinition",
    "CompositeReferentialDataQuery",
    "CompositeAudienceFiltersQuery",
  ],
  CompositeStreamRequestColumn20270101Width: [
    "number",
    "ListStreamColumnDefaultWidthLiteral",
  ],
  ComputationScope: ["CohortScope", "ReturnPeriodScope", "CellScope"],
  ConditionalFormats: ["Array<ThresholdFormattingRule>", "Array<any>"],
  ContainerView: ["OrchestrationView", "DashboardInlineSchema37"],
  CustomTopologyMapInlineNodeColumn: [
    "CustomTopologyMapInlineNodeIdColumn",
    "CustomTopologyMapInlineNodeStringColumn",
    "CustomTopologyMapInlineNodeValueColumn",
  ],
  CustomTopologyMapNodeDimension: ["DashboardInlineSchema38", "string"],
  DashboardBackendWidget: [
    "AlertGraphBackendWidget",
    "AlertValueBackendWidget",
    "BarChartBackendWidget",
    "ChangeBackendWidget",
    "CheckStatusBackendWidget",
    "CohortBackendWidget",
    "DistributionBackendWidget",
    "EmbeddedAppBackendWidget",
    "EventStream",
    "EventTimelineBackendWidget",
    "FreeTextBackendWidget",
    "FunnelBackendWidget",
    "GeomapBackendWidget",
    "GroupBackendWidget",
    "HeatgridBackendWidget",
    "HeatmapBackendWidget",
    "HostmapBackendWidget",
    "IframeBackendWidget",
    "ImageBackendWidget",
    "JourneyMapBackendWidget",
    "ListStreamBackendWidget",
    "LogStream",
    "ManageStatusBackendWidget",
    "NoteBackendWidget",
    "PointPlotBackendWidget",
    "PowerpackBackendWidget",
    "QueryTableBackendWidget",
    "QueryValueBackendWidget",
    "RetentionCurveBackendWidget",
    "RunWorkflowBackendWidget",
    "SankeyBackendWidget",
    "ScatterplotBackendWidget",
    "ServiceMapBackendWidget",
    "SloBackendWidget",
    "SloListBackendWidget",
    "SplitGroupBackendWidget",
    "SunburstBackendWidget",
    "TimeseriesBackendWidget",
    "ToplistBackendWidget",
    "TopologyMapBackendWidget",
    "ServiceSummaryBackendWidget",
    "TreemapBackendWidget",
    "WildcardBackendWidget",
  ],
  DashboardDefaultTimeframeSetting: [
    "DashboardLiveTimeframe",
    "DashboardFixedTimeframe",
  ],
  DashboardInlineSchema1: ["string", "number", "boolean"],
  DashboardInlineSchema2: ["string", "number", "boolean"],
  DashboardInlineSchema3: ["string", "number", "boolean"],
  DashboardInlineSchema4: ["string", "number", "boolean"],
  DashboardInlineSchema40: [
    "FormulaDatasetMetricQuery",
    "FormulaDatasetApmMetricsQuery",
  ],
  DashboardInlineSchema41: ["string", "number", "boolean"],
  DashboardInlineSchema42: ["string", "number", "boolean"],
  DashboardInlineSchema45: ["string", "number", "boolean"],
  DashboardInlineSchema47: ["string", "number", "boolean"],
  DashboardInlineSchema48: ["string", "number"],
  DashboardInlineSchema5: ["string", "number", "boolean"],
  DashboardInlineSchema50: ["string", "number", "boolean"],
  DashboardInlineSchema6: ["string", "number", "boolean"],
  DashboardInlineSchema7: ["string", "number", "boolean"],
  DashboardInlineSchema8: ["string", "number", "boolean"],
  DataObservabilityAssetsQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  DataObservabilityAssetsRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema15",
  ],
  DataProjectionQuery: [
    "AggregateAugmentedQuery",
    "EventsPlatformDataProjectionQueryDefinition",
    "DatasetListQuery",
  ],
  DatabaseRecommendationsStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  DatabaseRecommendationsStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema16",
  ],
  DatasetCompute20270101Aggregation: [
    "DashboardInlineSchema11",
    "EventsAggregator",
  ],
  DatasetListRequest20270101Query: ["DatasetListQuery", "RelationalDataQuery"],
  DatasetListRequestColumnsItems20270101Width: [
    "number",
    "ListStreamColumnDefaultWidthLiteral",
  ],
  DatasetSort20270101Aggregation: [
    "DashboardInlineSchema10",
    "EventsAggregator",
  ],
  DeprecatedWildcardTileDefRequests: [
    "DDSQLTableRequest",
    "DDSQLTimeseriesRequest",
  ],
  DetectionRuleStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  DetectionRuleStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema17",
  ],
  DistributionBackendRequest: [
    "DistributionBackendRequest20270101OneOf",
    "DistributionBackendRequest20270101OneOf4455761856",
    "DistributionBackendRequest20270101OneOf4455763296",
    "DistributionBackendRequest20270101OneOf4455763936",
    "DistributionBackendRequest20270101OneOf4455764576",
    "DistributionBackendRequest20270101OneOf4455765216",
    "DistributionBackendRequest20270101OneOf4455765856",
    "DistributionBackendRequest20270101OneOf4455766496",
    "DistributionBackendRequest20270101OneOf4455767136",
    "DistributionBackendRequest20270101OneOf4455767776",
    "DistributionBackendRequest20270101OneOf4455768416",
    "DistributionBackendRequest20270101OneOf4455769056",
    "DistributionBackendRequest20270101OneOf4455769696",
    "DistributionBackendRequest20270101OneOf4455770336",
    "DistributionBackendRequest20270101OneOf4455770976",
    "DistributionBackendRequest20270101OneOf4455771616",
    "DistributionBackendRequest20270101OneOf4455772256",
    "DistributionBackendRequest20270101OneOf4455772896",
    "DistributionBackendRequest20270101OneOf4455773536",
    "DistributionBackendRequest20270101OneOf4455774496",
    "DistributionBackendRequest20270101OneOf4455775456",
    "DistributionBackendRequest20270101OneOf4455989472",
    "DistributionBackendRequest20270101OneOf4455990432",
  ],
  DistributionWidgetHistogramRequestQuery: [
    "FormulaAndFunctionMetricQueryDefinition",
    "FormulaAndFunctionEventQueryDefinition",
    "FormulaAndFunctionApmResourceStatsQueryDefinition",
    "FormulaAndFunctionApmMetricsQueryDefinition",
  ],
  DoraListStreamQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  DoraListStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema18",
  ],
  ErrorsStreamQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  ErrorsStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema19",
  ],
  EventPatternStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  EventPatternStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema20",
  ],
  EventPlatformStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema21",
  ],
  EventStreamQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  EventStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema22",
  ],
  EventsAggregation: ["EventsAggregationValue", "string"],
  EventsAggregator: ["DashboardInlineSchema39", "string"],
  EventsListStreamRequest: [
    "EventPlatformStreamRequest",
    "LogsStreamRequest",
    "LogsPatternStreamRequest",
    "LogsTransactionStreamRequest",
    "AuditStreamRequest",
    "TraceStreamRequest",
    "ErrorsStreamRequest",
    "EventStreamRequest",
    "EventPatternStreamRequest",
    "SecurityRuntimePatternStreamRequest",
    "RumStreamRequest",
    "RecommendationsStreamRequest",
    "SecurityRuntimeStreamRequest",
  ],
  EventsPlatformListStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  FlatSortBy: ["FlatSortBy20270101OneOf", "FlatSortBy20270101OneOf4456386848"],
  FormulaAndFunctionEventQueryGroupByConfig: [
    "Array<FormulaAndFunctionEventQueryGroupBy>",
    "FormulaAndFunctionEventQueryGroupByFields",
  ],
  FormulaAndFunctionQueryDefinition: [
    "FormulaMetricsQueryMetrics",
    "FormulaMetricsQueryCloudCost",
    "FormulaMetricsQueryDatadogUsage",
    "FormulaAndFunctionEventQueryDefinition",
    "FormulaAndFunctionProcessQueryDefinition",
    "FormulaApmDependencyStatsQuery",
    "FormulaApmResourceStatsQuery",
    "FormulaApmMetricsQuery",
    "FormulaIncidentsQuery",
    "FormulaSloQuery",
    "FormulaCaseQuery",
    "FormulaGraphQuery",
    "FormulaUserJourneyQuery",
    "FormulaDoraQuery",
    "FormulaChangeTrackingQuery",
    "FormulaDetectionRulesQuery",
    "AggregateFilteredQuery",
    "AggregateAugmentedQuery",
    "AggregateSegmentQuery",
    "FormulaDatasetQuery",
    "FormulaManagedResourceQuery",
    "FormulaReferenceTableQuery",
    "FormulaRetentionQuery",
    "FormulaDataQualityMetricsQuery",
    "FormulaProductAnalyticsExtendedQuery",
  ],
  FormulaApmStatsQuery: [
    "FormulaApmDependencyStatsQuery",
    "FormulaApmResourceStatsQuery",
  ],
  FormulaDetectionRulesQuery20270101GroupBy: [
    "Array<FormulaAndFunctionEventQueryGroupBy>",
    "FormulaAndFunctionEventQueryGroupByFields",
  ],
  FormulaProductAnalyticsExtendedQuery20270101Indexes: [
    "Array<any>",
    "Array<any>",
  ],
  FormulaUserJourneyQuery20270101Search: [
    "LegacyUserJourneySearch",
    "UserJourneySearch",
  ],
  GeomapBackendPointsRequest: [
    "GeomapBackendPointsRequest20270101OneOf",
    "GeomapBackendPointsRequest20270101OneOf4457225472",
    "GeomapBackendPointsRequest20270101OneOf4457227232",
    "GeomapBackendPointsRequest20270101OneOf4457228992",
    "GeomapBackendPointsRequest20270101OneOf4457230272",
  ],
  GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema23",
  ],
  GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444686320020270101Width: [
    "number",
    "DashboardInlineSchema24",
  ],
  GeomapBackendPointsRequestAnyOfAnyOfItemColumnsItems444699785620270101Width: [
    "number",
    "DashboardInlineSchema25",
  ],
  GeomapBackendRegionsRequest: [
    "GeomapBackendRegionsRequest20270101OneOf",
    "GeomapBackendRegionsRequest20270101OneOf4457233792",
    "GeomapBackendRegionsRequest20270101OneOf4457448128",
    "GeomapBackendRegionsRequest20270101OneOf4457449888",
    "GeomapBackendRegionsRequest20270101OneOf4457450848",
    "GeomapBackendRegionsRequest20270101OneOf4457451808",
    "GeomapBackendRegionsRequest20270101OneOf4457452768",
    "GeomapBackendRegionsRequest20270101OneOf4457453728",
    "GeomapBackendRegionsRequest20270101OneOf4457454688",
    "GeomapBackendRegionsRequest20270101OneOf4457455648",
    "GeomapBackendRegionsRequest20270101OneOf4457456608",
    "GeomapBackendRegionsRequest20270101OneOf4457457568",
    "GeomapBackendRegionsRequest20270101OneOf4457458528",
    "GeomapBackendRegionsRequest20270101OneOf4457459488",
    "GeomapBackendRegionsRequest20270101OneOf4457460448",
    "GeomapBackendRegionsRequest20270101OneOf4457461408",
    "GeomapBackendRegionsRequest20270101OneOf4457462368",
    "GeomapBackendRegionsRequest20270101OneOf4457463328",
    "GeomapBackendRegionsRequest20270101OneOf4457645216",
  ],
  GeomapBackendRequest: [
    "GeomapBackendRegionsRequest",
    "GeomapBackendPointsRequest",
  ],
  GeomapView: ["GeomapView20270101OneOf", "GeomapView20270101OneOf4457650336"],
  GraphTarget: ["GraphTargetNode", "GraphTargetPath"],
  GuidedTableQuery: [
    "MetricsLikeQueryFragmentMetrics",
    "MetricsLikeQueryFragmentCloudCost",
    "EventsQueryFragmentDefinition",
    "ReferentialQueryFragmentReferenceTable",
    "ReferentialQueryFragmentManagedResource",
    "PublishedAnalysisQueryFragment",
    "ApmMetricsQueryFragment",
  ],
  HeatgridColor: ["string", "Array<any>"],
  HeatgridColorConfig: ["HeatgridGradientConfig", "HeatgridDiscreteConfig"],
  HeatgridDiscreteConfig: [
    "HeatgridDiscreteConfig20270101OneOf",
    "HeatgridDiscreteConfig20270101OneOf4457881312",
  ],
  HeatgridGradientConfig: [
    "HeatgridGradientConfig20270101OneOf",
    "HeatgridGradientConfig20270101OneOf4457883232",
  ],
  HeatgridSortBy: ["HeatgridSortByValue", "HeatgridSortByLabel"],
  HeatgridTextFormatReplace: [
    "HeatgridTextFormatReplaceAll",
    "HeatgridTextFormatReplaceSubstring",
  ],
  HeatmapBackendRequest: [
    "HeatmapBackendRequest20270101OneOf",
    "HeatmapBackendRequest20270101OneOf4458138496",
    "HeatmapBackendRequest20270101OneOf4458139936",
    "HeatmapBackendRequest20270101OneOf4458140576",
  ],
  HistogramRequest: [
    "MetricsHistogramRequest",
    "ApmStatsHistogramRequest",
    "ApmMetricsHistogramRequest",
    "EventsHistogramRequest",
  ],
  HostmapBackendDefinition20270101Requests: [
    "MetricHostmapRequests",
    "HostmapInfrastructureRequest",
    "HostmapDataProjectionRequest",
  ],
  Hour: ["Hour12Format", "Hour24Format"],
  ImageBackendDefinition20270101Sizing: ["number", "ImageSizing"],
  IncidentsStreamQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  IncidentsStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema26",
  ],
  InfrastructureListRequestColumnsItems20270101Width: [
    "number",
    "ListStreamColumnDefaultWidthLiteral",
  ],
  IssueStreamColumn20270101Width: ["number", "DashboardInlineSchema9"],
  IssueStreamRequest: ["LegacyIssueStreamRequest", "UnifiedIssueStreamRequest"],
  LegacyIssueStreamRequest20270101Query: [
    "APMIssueStreamQuery",
    "RUMIssueStreamQuery",
    "LogsIssueStreamQuery",
  ],
  LegacyLiveSpan: ["TimeSpan", "DashboardInlineSchema43"],
  ListCompositeQuery: [
    "ListFilteredQuery",
    "ListAugmentedQuery",
    "ListSegmentQuery",
  ],
  ListStreamRequest: [
    "EventsListStreamRequest",
    "IssueStreamRequest",
    "CaseStreamRequest",
    "WatchdogAlertsRequest",
    "IncidentsStreamRequest",
    "DatabaseRecommendationsStreamRequest",
    "ApmRecommendationsStreamRequest",
    "DetectionRuleStreamRequest",
    "DataObservabilityAssetsRequest",
    "DoraListStreamRequest",
  ],
  LogsPatternStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  LogsPatternStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema27",
  ],
  LogsStreamQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  LogsStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema28",
  ],
  LogsTransactionStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  LogsTransactionStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema29",
  ],
  NumberFormatUnit: ["NumberFormatUnitCanonical", "NumberFormatUnitCustom"],
  Precision: ["number", "DashboardInlineSchema44"],
  ProductAnalyticsStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  QueryTableBackendRequest: [
    "QueryTableBackendRequest20270101OneOf",
    "QueryTableBackendRequest20270101OneOf4459913248",
    "QueryTableBackendRequest20270101OneOf4459916288",
    "QueryTableBackendRequest20270101OneOf4459919328",
    "QueryTableBackendRequest20270101OneOf4460101856",
    "QueryTableBackendRequest20270101OneOf4460104096",
    "QueryTableBackendRequest20270101OneOf4460106336",
    "QueryTableBackendRequest20270101OneOf4460108576",
    "QueryTableBackendRequest20270101OneOf4460110816",
    "QueryTableBackendRequest20270101OneOf4460113056",
    "QueryTableBackendRequest20270101OneOf4460115296",
    "QueryTableBackendRequest20270101OneOf4460117536",
    "QueryTableBackendRequest20270101OneOf4460300064",
    "QueryTableBackendRequest20270101OneOf4460302304",
    "QueryTableBackendRequest20270101OneOf4460304544",
    "QueryTableBackendRequest20270101OneOf4460306784",
    "QueryTableBackendRequest20270101OneOf4460309024",
    "QueryTableBackendRequest20270101OneOf4460311264",
    "QueryTableBackendRequest20270101OneOf4460313504",
    "QueryTableBackendRequest20270101OneOf4460513216",
    "QueryTableBackendRequest20270101OneOf4460516096",
    "QueryTableBackendRequest20270101OneOf4460519136",
    "QueryTableBackendRequest20270101OneOf4460522016",
  ],
  QueryTableBackendRequest20270101OneOfQuery: [
    "StructuredAnalysisQuery",
    "SampledAnalysisQuery",
  ],
  QueryTableDateFormat: ["QueryTableDatePattern", "QueryTableTimestampFormat"],
  QueryValueBackendRequest: [
    "QueryValueBackendRequest20270101OneOf",
    "QueryValueBackendRequest20270101OneOf4460683296",
    "QueryValueBackendRequest20270101OneOf4460685056",
    "QueryValueBackendRequest20270101OneOf4460686496",
    "QueryValueBackendRequest20270101OneOf4460688416",
    "QueryValueBackendRequest20270101OneOf4460689536",
    "QueryValueBackendRequest20270101OneOf4460690656",
    "QueryValueBackendRequest20270101OneOf4460904832",
    "QueryValueBackendRequest20270101OneOf4460905952",
    "QueryValueBackendRequest20270101OneOf4460907072",
    "QueryValueBackendRequest20270101OneOf4460908192",
    "QueryValueBackendRequest20270101OneOf4460909312",
    "QueryValueBackendRequest20270101OneOf4460910432",
    "QueryValueBackendRequest20270101OneOf4460911552",
    "QueryValueBackendRequest20270101OneOf4460912672",
    "QueryValueBackendRequest20270101OneOf4460913792",
    "QueryValueBackendRequest20270101OneOf4460914912",
    "QueryValueBackendRequest20270101OneOf4460916032",
    "QueryValueBackendRequest20270101OneOf4460917152",
    "QueryValueBackendRequest20270101OneOf4460918912",
  ],
  RecommendationsStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  RecommendationsStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema30",
  ],
  ReferenceTableColumn: [
    "StringReferenceTableColumn",
    "NumberReferenceTableColumn",
  ],
  RetentionSearchCohortCriteriaTimeInterval20270101Value: [
    "CalendarIntervalDay",
    "CalendarIntervalWeek",
    "CalendarIntervalMonth",
  ],
  RumStreamQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  RumStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema31",
  ],
  RunChartProjectionDimension: [
    "RunChartXDimension",
    "RunChartValueDimension",
    "RunChartGroupDimension",
  ],
  SankeyWidgetRequest: ["SankeyRumRequest", "SankeyNetworkRequest"],
  ScalarFormulaOrderBy: ["FormulaOrderByGroup", "FormulaOrderByFormulaIndex"],
  ScatterPlotLegendType: [
    "ScatterPlotLegendType20270101OneOf",
    "ScatterPlotLegendType20270101OneOf4461516160",
  ],
  ScatterplotBackendTableRequest: [
    "ScatterplotBackendTableRequest20270101OneOf",
    "ScatterplotBackendTableRequest20270101OneOf4461521920",
    "ScatterplotBackendTableRequest20270101OneOf4461523200",
    "ScatterplotBackendTableRequest20270101OneOf4461524480",
    "ScatterplotBackendTableRequest20270101OneOf4461525600",
    "ScatterplotBackendTableRequest20270101OneOf4461756480",
  ],
  ScatterplotBackendTableRequest20270101OneOfQuery: [
    "StructuredAnalysisQuery",
    "SampledAnalysisQuery",
  ],
  ScatterplotProjectionDimensionsItems20270101Dimension: [
    "DashboardInlineSchema32",
    "ScatterPlotDimension",
  ],
  ScatterplotRequests: [
    "ScatterplotRequests20270101OneOf",
    "ScatterplotRequests20270101OneOf4461761120",
  ],
  SecurityRuntimePatternStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  SecurityRuntimePatternStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema33",
  ],
  SecurityRuntimeStreamQuery20270101Sort: [
    "ListStreamSort",
    "Array<ListStreamSort>",
  ],
  SecurityRuntimeStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema34",
  ],
  SloMeasure: [
    "DashboardInlineSchema46",
    "SloMeasureEvents",
    "SloMeasureMinutes",
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
  SplitGroupBackendDefinition20270101SourceWidgetDefinition: [
    "BarChartBackendDefinition",
    "ChangeBackendDefinition",
    "DistributionBackendDefinition",
    "GeomapBackendDefinition",
    "HeatgridDefinition",
    "QueryTableBackendDefinition",
    "QueryValueBackendDefinition",
    "ScatterplotBackendDefinition",
    "SunburstBackendDefinition",
    "TimeseriesWidgetDefinition",
    "ToplistBackendDefinition",
    "TreemapBackendDefinition",
    "WildcardBackendDefinition",
  ],
  StructuredAnalysisTransformation: [
    "StructuredAnalysisFilter",
    "StructuredAnalysisColumnExtraction",
    "StructuredAnalysisAggregation",
    "StructuredAnalysisSort",
    "StructuredAnalysisLimit",
    "StructuredAnalysisCalculatedField",
    "StructuredAnalysisCast",
    "StructuredAnalysisJoin",
    "StructuredAnalysisProjection",
    "StructuredAnalysisDestructure",
  ],
  SunburstBackendRequest: [
    "SunburstBackendRequest20270101OneOf",
    "SunburstBackendRequest20270101OneOf4462422560",
    "SunburstBackendRequest20270101OneOf4462423840",
    "SunburstBackendRequest20270101OneOf4462424800",
  ],
  SunburstBackendRequest20270101OneOfQuery: [
    "StructuredAnalysisQuery",
    "SampledAnalysisQuery",
  ],
  SunburstKnownLegend: [
    "SunburstKnownLegend20270101OneOf",
    "SunburstKnownLegend20270101OneOf4462427680",
    "SunburstKnownLegend20270101OneOf4462657920",
  ],
  SunburstLegend: ["SunburstLegend20270101OneOf", "SunburstKnownLegend"],
  SunburstWidgetLegend: [
    "SunburstWidgetLegendTable",
    "SunburstWidgetLegendInlineAutomatic",
  ],
  TableColumn: [
    "ComputeTableColumn",
    "PresetPeriodTableColumn",
    "FormulaTableColumn",
    "ReferenceTableColumn",
  ],
  TableColumnComparison: [
    "TableColumnComparisonWithSelf",
    "TableColumnComparisonWithOtherColumnDiffFrom",
    "TableColumnComparisonWithOtherColumnPercentOf",
    "TableColumnComparisonWithOtherColumnPercentDiffFrom",
  ],
  TableColumnFormat: [
    "NumberBarTableColumnFormatNumber",
    "NumberBarTableColumnFormatBar",
    "TrendTableColumnFormat",
    "StringTableColumnFormat",
  ],
  TableFormula: [
    "TableFormula20270101OneOf",
    "TableFormula20270101OneOf4462669760",
  ],
  TableWidgetTextFormatReplace: [
    "TableWidgetTextFormatReplaceAll",
    "TableWidgetTextFormatReplaceSubstring",
  ],
  TabularDataRequest: [
    "AllListRequestVariants",
    "TabularAdvancedQueryRequest",
    "TimeseriesFormulaRequest",
    "ScalarFormulaRequest",
    "TabularLocalDatasetRequest",
    "HistogramRequest",
  ],
  TabularLocalDatasetRequest20270101Query: [
    "StructuredAnalysisQuery",
    "SampledAnalysisQuery",
  ],
  TabularProjection: [
    "ScatterplotProjection",
    "TreeDataProjectionBarChart",
    "TreeDataProjectionSunburst",
    "TreeDataProjectionToplist",
    "TreeDataProjectionTreemap",
    "QueryValueProjection",
    "QueryTableProjection",
    "RunChartProjection",
  ],
  TextFormattingRule20270101Replace: [
    "TextFormattingRule20270101ReplaceOneOf",
    "TextFormattingRule20270101ReplaceOneOf4462863328",
  ],
  TextMatch: [
    "TextMatch20270101OneOf",
    "TextMatch20270101OneOf4462865408",
    "TextMatch20270101OneOf4462866048",
    "TextMatch20270101OneOf4462866688",
    "TextMatch20270101OneOf4462867328",
    "TextMatch20270101OneOf4462867968",
  ],
  TextReplacementRule20270101Replace: [
    "TextReplacementRule20270101ReplaceOneOf",
    "TextReplacementRule20270101ReplaceOneOf4462870048",
  ],
  ThresholdPaletteWithCustom: ["ThresholdPalette", "DashboardInlineSchema49"],
  TimeseriesWidgetRequest: [
    "TimeseriesWidgetFormulaRequest",
    "TimeseriesWidgetMetricRequest",
    "TimeseriesWidgetLogRequest",
    "TimeseriesWidgetApmRequest",
    "TimeseriesWidgetNetworkRequest",
    "TimeseriesWidgetRumRequest",
    "TimeseriesWidgetSecurityRequest",
    "TimeseriesWidgetComplianceFindingsRequest",
    "TimeseriesWidgetEventRequest",
    "TimeseriesWidgetProfilingMetricsRequest",
    "TimeseriesWidgetCiPipelineRequest",
    "TimeseriesWidgetCiTestRequest",
    "TimeseriesWidgetAuditRequest",
    "TimeseriesWidgetAppsecSpanRequest",
    "TimeseriesWidgetSyntheticsBatchesRequest",
    "TimeseriesWidgetSyntheticsTestRunsRequest",
    "TimeseriesWidgetProcessRequest",
    "TimeseriesWidgetLegacyProfileMetricsRequest",
    "TimeseriesWidgetLegacyEventRequest",
    "TimeseriesWidgetDdsqlRequest",
    "TimeseriesWidgetAdvancedQueryRequest",
    "TimeseriesWidgetLocalDatasetRequest",
  ],
  ToplistBackendDefinitionStyle20270101Display: [
    "ToplistBackendDefinitionStyle20270101DisplayOneOf",
    "ToplistBackendDefinitionStyle20270101DisplayOneOf4453175744",
  ],
  ToplistBackendRequest: [
    "ToplistBackendRequest20270101OneOf",
    "ToplistBackendRequest20270101OneOf4463319360",
    "ToplistBackendRequest20270101OneOf4463320800",
    "ToplistBackendRequest20270101OneOf4463321920",
    "ToplistBackendRequest20270101OneOf4463323520",
    "ToplistBackendRequest20270101OneOf4463325120",
    "ToplistBackendRequest20270101OneOf4463325920",
    "ToplistBackendRequest20270101OneOf4463326720",
    "ToplistBackendRequest20270101OneOf4463327520",
    "ToplistBackendRequest20270101OneOf4463328320",
    "ToplistBackendRequest20270101OneOf4463329120",
    "ToplistBackendRequest20270101OneOf4463526592",
    "ToplistBackendRequest20270101OneOf4463527392",
    "ToplistBackendRequest20270101OneOf4463528192",
    "ToplistBackendRequest20270101OneOf4463528992",
    "ToplistBackendRequest20270101OneOf4463529792",
    "ToplistBackendRequest20270101OneOf4463530592",
    "ToplistBackendRequest20270101OneOf4463531392",
    "ToplistBackendRequest20270101OneOf4463532192",
    "ToplistBackendRequest20270101OneOf4463532992",
    "ToplistBackendRequest20270101OneOf4463533792",
    "ToplistBackendRequest20270101OneOf4463535232",
  ],
  ToplistBackendRequest20270101OneOfQuery: [
    "StructuredAnalysisQuery",
    "SampledAnalysisQuery",
  ],
  ToplistWidgetDisplay: ["ToplistWidgetStacked", "ToplistWidgetFlat"],
  TopologyMapBackendDefinition20270101Requests: [
    "Array<any>",
    "Array<any>",
    "Array<any>",
    "Array<any>",
    "Array<CustomTopologyMapTileDefRequest>",
  ],
  TopologyMapInlineNodeColumn: [
    "TopologyMapInlineNodeIdColumn",
    "TopologyMapInlineNodeStringColumn",
    "TopologyMapInlineNodeValueColumn",
  ],
  TopologyMapWidgetDefinition: [
    "TopologyMapWidgetDefinitionDataStreams",
    "TopologyMapWidgetDefinitionServiceMap",
    "TopologyMapWidgetDefinitionCustom",
  ],
  TraceStreamQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  TraceStreamRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema35",
  ],
  TreemapBackendRequest: [
    "TreemapBackendRequest20270101OneOf",
    "TreemapBackendRequest20270101OneOf4463750144",
    "TreemapBackendRequest20270101OneOf4463751424",
    "TreemapBackendRequest20270101OneOf4463752384",
    "TreemapBackendRequest20270101OneOf4463753824",
  ],
  TreemapBackendRequest20270101OneOfQuery: [
    "StructuredAnalysisQuery",
    "SampledAnalysisQuery",
  ],
  WatchdogAlertsQuery20270101Sort: ["ListStreamSort", "Array<ListStreamSort>"],
  WatchdogAlertsRequestColumnsItems20270101Width: [
    "number",
    "DashboardInlineSchema36",
  ],
  WidgetCustomLink: ["ContextMenuLink", "UserDefinedLink"],
  WidgetDefinition: [
    "AlertGraphWidgetDefinition",
    "AlertValueWidgetDefinition",
    "BarChartWidgetDefinition",
    "ChangeWidgetDefinition",
    "CheckStatusWidgetDefinition",
    "CohortWidgetDefinition",
    "DistributionWidgetDefinition",
    "EmbeddedAppWidgetDefinition",
    "EventStreamWidgetDefinition",
    "EventTimelineWidgetDefinition",
    "FreeTextWidgetDefinition",
    "FunnelWidgetDefinition",
    "ProductAnalyticsFunnelWidgetDefinition",
    "GeomapWidgetDefinition",
    "GroupWidgetDefinition",
    "HeatgridWidgetDefinition",
    "HeatMapWidgetDefinition",
    "HostMapWidgetDefinition",
    "IFrameWidgetDefinition",
    "ImageWidgetDefinition",
    "JourneyMapWidgetDefinition",
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
  WidgetLayout: ["FreeLayout", "MSLWidgetLayout", "MSLBackendWidgetLayout"],
  WidgetSortOrderBy: ["WidgetFormulaSort", "WidgetGroupSort"],
  WidgetTime: [
    "WidgetTime20270101OneOf",
    "WidgetTime20270101OneOf4464103552",
    "WidgetTime20270101OneOf4464104512",
    "WidgetTime20270101OneOf4464105312",
    "WidgetTime20270101OneOf4464105952",
    "any",
  ],
  WildcardTileDefRequest: [
    "TabularDataRequest",
    "DeprecatedWildcardTileDefRequests",
  ],
  WildcardWidgetRequest: [
    "TreeMapWidgetRequest",
    "TimeseriesWidgetRequest",
    "ListStreamWidgetRequest",
    "DistributionWidgetRequest",
  ],
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
    } else if (type == "number" && typeof data == "bigint") {
      return data;
    } else if (type.startsWith(ARRAY_PREFIX)) {
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.serialize(element, subType, format)
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
          ObjectSerializer.serialize(element, subType, format)
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.serialize(
          data[key],
          subType,
          format
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
            `${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`
          );
        }
        if (oneOfs.length == 0) {
          throw new TypeError(
            `${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`
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

      for (const k of Object.keys(data)) {
        if (k === "_unparsed" || k === "additionalProperties") continue;
        if (
          !(k in attributesMap) &&
          !("additionalProperties" in attributesMap)
        ) {
          throw new Error("unexpected attribute " + k + " of type " + type);
        }
      }

      for (const attributeName of Object.keys(attributesMap)) {
        if (attributeName === "additionalProperties") continue;
        if (!(attributeName in data)) continue;
        if (data[attributeName] === undefined) continue;
        const attributeObj = attributesMap[attributeName];
        instance[attributeObj.baseName] = ObjectSerializer.serialize(
          data[attributeName],
          attributeObj.type,
          attributeObj.format
        );
      }

      if (data.additionalProperties) {
        const additionalPropertiesMap = attributesMap["additionalProperties"];
        if (additionalPropertiesMap) {
          const additionalProperties = ObjectSerializer.serialize(
            data.additionalProperties,
            additionalPropertiesMap.type,
            additionalPropertiesMap.format
          );
          for (const key in additionalProperties) {
            instance[key] = additionalProperties[key];
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
            `missing required property '${attributeObj.baseName}'`
          );
        }
      }

      return instance;
    }
  }

  public static deserialize(
    data: any,
    type: string,
    format = "",
    preserveLargeIntegers = false
  ): any {
    if (data == undefined || type == "any") {
      return data;
    } else if (
      preserveLargeIntegers &&
      type == "number" &&
      format == "int64" &&
      Number.isInteger(data)
    ) {
      return BigInt(data);
    } else if (
      primitives.includes(type.toLowerCase()) &&
      typeof data == type.toLowerCase()
    ) {
      return data;
    } else if (type == "number" && typeof data == "bigint") {
      return format == "int64" ? data : Number(data);
    } else if (type.startsWith(ARRAY_PREFIX)) {
      // Assert the passed data is Array type
      if (!Array.isArray(data)) {
        throw new TypeError(`mismatch types '${data}' and '${type}'`);
      }
      // Array<Type> => Type
      const subType: string = type.substring(
        ARRAY_PREFIX.length,
        type.length - 1
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(
            element,
            subType,
            format,
            preserveLargeIntegers
          )
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
          ObjectSerializer.deserialize(
            element,
            subType,
            format,
            preserveLargeIntegers
          )
        );
      }
      return transformedData;
    } else if (type.startsWith(MAP_PREFIX)) {
      // { [key: string]: Type; } => Type
      const subType: string = type.substring(
        MAP_PREFIX.length,
        type.length - 3
      );
      const transformedData: { [key: string]: any } = {};
      for (const key in data) {
        transformedData[key] = ObjectSerializer.deserialize(
          data[key],
          subType,
          format,
          preserveLargeIntegers
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
            const d = ObjectSerializer.deserialize(
              data,
              oneOf,
              format,
              preserveLargeIntegers
            );
            if (!(d instanceof UnparsedObject) && !d?._unparsed) {
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
      const keepAllInAdditional =
        (typeMap[type] as any)._keepTypedInAdditionalProperties === true;
      // Single pass: build attributesBaseNames (for extra-key detection) and, when needed,
      // baseNameToAttr (for per-field typed deserialization preserving int64 precision).
      const attributesBaseNames: { [key: string]: string } = {};
      const baseNameToAttr: { [key: string]: any } = {};
      for (const attrName in attributesMap) {
        const baseName = attributesMap[attrName].baseName;
        attributesBaseNames[baseName] = "";
        if (keepAllInAdditional && attrName !== "additionalProperties") {
          baseNameToAttr[baseName] = attributesMap[attrName];
        }
      }
      const extraAttributes = Object.keys(data).filter(
        (key) =>
          keepAllInAdditional ||
          !Object.prototype.hasOwnProperty.call(attributesBaseNames, key)
      );

      if (extraAttributes.length > 0) {
        if ("additionalProperties" in attributesMap) {
          const additionalProperties: { [key: string]: any } = {};
          if (keepAllInAdditional) {
            for (const key of extraAttributes) {
              const attrInfo = baseNameToAttr[key];
              // Use per-field type/format for typed attrs to preserve int64 precision.
              additionalProperties[key] = attrInfo
                ? ObjectSerializer.deserialize(
                    data[key],
                    attrInfo.type,
                    attrInfo.format,
                    preserveLargeIntegers
                  )
                : data[key];
            }
            instance.additionalProperties = additionalProperties;
          } else {
            for (const key of extraAttributes) {
              additionalProperties[key] = data[key];
            }
            const attributeObj = attributesMap["additionalProperties"];
            instance.additionalProperties = ObjectSerializer.deserialize(
              additionalProperties,
              attributeObj.type,
              attributeObj.format,
              preserveLargeIntegers
            );
          }
        } else {
          throw new Error(
            `found extra attributes '${extraAttributes}' in ${type}`
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
          preserveLargeIntegers
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
    mediaType: string | undefined
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
    let selectedRank = -Infinity;
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
        "None of the given media types are supported: " + mediaTypes.join(", ")
      );
    }

    return selectedMediaType;
  }

  /**
   * Convert data to a string according the given media type
   */
  public static stringify(
    data: any,
    mediaType: string,
    preserveLargeIntegers?: boolean
  ): string {
    if (mediaType === "application/json" || mediaType === "text/json") {
      if (preserveLargeIntegers) {
        return loadLosslessJson().stringify(data) as string;
      }
      return JSON.stringify(data);
    }

    throw new Error(
      "The mediaType " +
        mediaType +
        " is not supported by ObjectSerializer.stringify."
    );
  }

  /**
   * Parse data from a string according to the given media type
   */
  public static parse(
    rawData: string,
    mediaType: string | undefined,
    preserveLargeIntegers?: boolean
  ): any {
    const lossless = preserveLargeIntegers ? loadLosslessJson() : undefined;
    try {
      if (lossless) {
        try {
          return lossless.parse(rawData, null, (value: string) =>
            lossless.isInteger(value) && !Number.isSafeInteger(Number(value))
              ? BigInt(value)
              : Number(value)
          );
        } catch (error) {
          // lossless-json rejects some valid JSON (e.g. duplicate keys) that JSON.parse accepts
          logger.debug(
            `could not parse ${mediaType} without losing precision: ${error}`
          );
        }
      }
      return JSON.parse(rawData);
    } catch (error) {
      logger.debug(`could not parse ${mediaType}: ${error}`);
      return rawData;
    }
  }
}
