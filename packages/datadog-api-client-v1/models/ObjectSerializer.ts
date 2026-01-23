import { APIErrorResponse } from "./APIErrorResponse";
import { AWSAccount } from "./AWSAccount";
import { AWSAccountAndLambdaRequest } from "./AWSAccountAndLambdaRequest";
import { AWSAccountCreateResponse } from "./AWSAccountCreateResponse";
import { AWSAccountDeleteRequest } from "./AWSAccountDeleteRequest";
import { AWSAccountListResponse } from "./AWSAccountListResponse";
import { AWSEventBridgeAccountConfiguration } from "./AWSEventBridgeAccountConfiguration";
import { AWSEventBridgeCreateRequest } from "./AWSEventBridgeCreateRequest";
import { AWSEventBridgeCreateResponse } from "./AWSEventBridgeCreateResponse";
import { AWSEventBridgeDeleteRequest } from "./AWSEventBridgeDeleteRequest";
import { AWSEventBridgeDeleteResponse } from "./AWSEventBridgeDeleteResponse";
import { AWSEventBridgeListResponse } from "./AWSEventBridgeListResponse";
import { AWSEventBridgeSource } from "./AWSEventBridgeSource";
import { AWSLogsAsyncError } from "./AWSLogsAsyncError";
import { AWSLogsAsyncResponse } from "./AWSLogsAsyncResponse";
import { AWSLogsLambda } from "./AWSLogsLambda";
import { AWSLogsListResponse } from "./AWSLogsListResponse";
import { AWSLogsListServicesResponse } from "./AWSLogsListServicesResponse";
import { AWSLogsServicesRequest } from "./AWSLogsServicesRequest";
import { AWSTagFilter } from "./AWSTagFilter";
import { AWSTagFilterCreateRequest } from "./AWSTagFilterCreateRequest";
import { AWSTagFilterDeleteRequest } from "./AWSTagFilterDeleteRequest";
import { AWSTagFilterListResponse } from "./AWSTagFilterListResponse";
import { AddSignalToIncidentRequest } from "./AddSignalToIncidentRequest";
import { AlertGraphWidgetDefinition } from "./AlertGraphWidgetDefinition";
import { AlertValueWidgetDefinition } from "./AlertValueWidgetDefinition";
import { ApiKey } from "./ApiKey";
import { ApiKeyListResponse } from "./ApiKeyListResponse";
import { ApiKeyResponse } from "./ApiKeyResponse";
import { ApmStatsQueryColumnType } from "./ApmStatsQueryColumnType";
import { ApmStatsQueryDefinition } from "./ApmStatsQueryDefinition";
import { ApplicationKey } from "./ApplicationKey";
import { ApplicationKeyListResponse } from "./ApplicationKeyListResponse";
import { ApplicationKeyResponse } from "./ApplicationKeyResponse";
import { AuthenticationValidationResponse } from "./AuthenticationValidationResponse";
import { AzureAccount } from "./AzureAccount";
import { BarChartWidgetDefinition } from "./BarChartWidgetDefinition";
import { BarChartWidgetFlat } from "./BarChartWidgetFlat";
import { BarChartWidgetRequest } from "./BarChartWidgetRequest";
import { BarChartWidgetStacked } from "./BarChartWidgetStacked";
import { BarChartWidgetStyle } from "./BarChartWidgetStyle";
import { CancelDowntimesByScopeRequest } from "./CancelDowntimesByScopeRequest";
import { CanceledDowntimesIds } from "./CanceledDowntimesIds";
import { ChangeWidgetDefinition } from "./ChangeWidgetDefinition";
import { ChangeWidgetRequest } from "./ChangeWidgetRequest";
import { CheckCanDeleteMonitorResponse } from "./CheckCanDeleteMonitorResponse";
import { CheckCanDeleteMonitorResponseData } from "./CheckCanDeleteMonitorResponseData";
import { CheckCanDeleteSLOResponse } from "./CheckCanDeleteSLOResponse";
import { CheckCanDeleteSLOResponseData } from "./CheckCanDeleteSLOResponseData";
import { CheckStatusWidgetDefinition } from "./CheckStatusWidgetDefinition";
import { Creator } from "./Creator";
import { Dashboard } from "./Dashboard";
import { DashboardBulkActionData } from "./DashboardBulkActionData";
import { DashboardBulkDeleteRequest } from "./DashboardBulkDeleteRequest";
import { DashboardDeleteResponse } from "./DashboardDeleteResponse";
import { DashboardGlobalTime } from "./DashboardGlobalTime";
import { DashboardList } from "./DashboardList";
import { DashboardListDeleteResponse } from "./DashboardListDeleteResponse";
import { DashboardListListResponse } from "./DashboardListListResponse";
import { DashboardRestoreRequest } from "./DashboardRestoreRequest";
import { DashboardSummary } from "./DashboardSummary";
import { DashboardSummaryDefinition } from "./DashboardSummaryDefinition";
import { DashboardTemplateVariable } from "./DashboardTemplateVariable";
import { DashboardTemplateVariablePreset } from "./DashboardTemplateVariablePreset";
import { DashboardTemplateVariablePresetValue } from "./DashboardTemplateVariablePresetValue";
import { DeleteSharedDashboardResponse } from "./DeleteSharedDashboardResponse";
import { DeletedMonitor } from "./DeletedMonitor";
import { DistributionPointsPayload } from "./DistributionPointsPayload";
import { DistributionPointsSeries } from "./DistributionPointsSeries";
import { DistributionWidgetDefinition } from "./DistributionWidgetDefinition";
import { DistributionWidgetRequest } from "./DistributionWidgetRequest";
import { DistributionWidgetXAxis } from "./DistributionWidgetXAxis";
import { DistributionWidgetYAxis } from "./DistributionWidgetYAxis";
import { Downtime } from "./Downtime";
import { DowntimeChild } from "./DowntimeChild";
import { DowntimeRecurrence } from "./DowntimeRecurrence";
import { Event } from "./Event";
import { EventCreateRequest } from "./EventCreateRequest";
import { EventCreateResponse } from "./EventCreateResponse";
import { EventListResponse } from "./EventListResponse";
import { EventQueryDefinition } from "./EventQueryDefinition";
import { EventResponse } from "./EventResponse";
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
import { GCPAccount } from "./GCPAccount";
import { GCPMonitoredResourceConfig } from "./GCPMonitoredResourceConfig";
import { GeomapWidgetDefinition } from "./GeomapWidgetDefinition";
import { GeomapWidgetDefinitionStyle } from "./GeomapWidgetDefinitionStyle";
import { GeomapWidgetDefinitionView } from "./GeomapWidgetDefinitionView";
import { GeomapWidgetRequest } from "./GeomapWidgetRequest";
import { GeomapWidgetRequestStyle } from "./GeomapWidgetRequestStyle";
import { GraphSnapshot } from "./GraphSnapshot";
import { GroupWidgetDefinition } from "./GroupWidgetDefinition";
import { HTTPLogError } from "./HTTPLogError";
import { HTTPLogItem } from "./HTTPLogItem";
import { HeatMapWidgetDefinition } from "./HeatMapWidgetDefinition";
import { HeatMapWidgetRequest } from "./HeatMapWidgetRequest";
import { HeatMapWidgetXAxis } from "./HeatMapWidgetXAxis";
import { Host } from "./Host";
import { HostListResponse } from "./HostListResponse";
import { HostMapRequest } from "./HostMapRequest";
import { HostMapWidgetDefinition } from "./HostMapWidgetDefinition";
import { HostMapWidgetDefinitionRequests } from "./HostMapWidgetDefinitionRequests";
import { HostMapWidgetDefinitionStyle } from "./HostMapWidgetDefinitionStyle";
import { HostMeta } from "./HostMeta";
import { HostMetaInstallMethod } from "./HostMetaInstallMethod";
import { HostMetrics } from "./HostMetrics";
import { HostMuteResponse } from "./HostMuteResponse";
import { HostMuteSettings } from "./HostMuteSettings";
import { HostTags } from "./HostTags";
import { HostTotals } from "./HostTotals";
import { HourlyUsageAttributionBody } from "./HourlyUsageAttributionBody";
import { HourlyUsageAttributionMetadata } from "./HourlyUsageAttributionMetadata";
import { HourlyUsageAttributionPagination } from "./HourlyUsageAttributionPagination";
import { HourlyUsageAttributionResponse } from "./HourlyUsageAttributionResponse";
import { IFrameWidgetDefinition } from "./IFrameWidgetDefinition";
import { IPPrefixesAPI } from "./IPPrefixesAPI";
import { IPPrefixesAPM } from "./IPPrefixesAPM";
import { IPPrefixesAgents } from "./IPPrefixesAgents";
import { IPPrefixesGlobal } from "./IPPrefixesGlobal";
import { IPPrefixesLogs } from "./IPPrefixesLogs";
import { IPPrefixesOrchestrator } from "./IPPrefixesOrchestrator";
import { IPPrefixesProcess } from "./IPPrefixesProcess";
import { IPPrefixesRemoteConfiguration } from "./IPPrefixesRemoteConfiguration";
import { IPPrefixesSynthetics } from "./IPPrefixesSynthetics";
import { IPPrefixesSyntheticsPrivateLocations } from "./IPPrefixesSyntheticsPrivateLocations";
import { IPPrefixesWebhooks } from "./IPPrefixesWebhooks";
import { IPRanges } from "./IPRanges";
import { IdpResponse } from "./IdpResponse";
import { ImageWidgetDefinition } from "./ImageWidgetDefinition";
import { IntakePayloadAccepted } from "./IntakePayloadAccepted";
import { ListStreamColumn } from "./ListStreamColumn";
import { ListStreamComputeItems } from "./ListStreamComputeItems";
import { ListStreamGroupByItems } from "./ListStreamGroupByItems";
import { ListStreamQuery } from "./ListStreamQuery";
import { ListStreamWidgetDefinition } from "./ListStreamWidgetDefinition";
import { ListStreamWidgetRequest } from "./ListStreamWidgetRequest";
import { Log } from "./Log";
import { LogContent } from "./LogContent";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { LogQueryDefinitionGroupBy } from "./LogQueryDefinitionGroupBy";
import { LogQueryDefinitionGroupBySort } from "./LogQueryDefinitionGroupBySort";
import { LogQueryDefinitionSearch } from "./LogQueryDefinitionSearch";
import { LogStreamWidgetDefinition } from "./LogStreamWidgetDefinition";
import { LogsAPIError } from "./LogsAPIError";
import { LogsAPIErrorResponse } from "./LogsAPIErrorResponse";
import { LogsAPILimitReachedResponse } from "./LogsAPILimitReachedResponse";
import { LogsArithmeticProcessor } from "./LogsArithmeticProcessor";
import { LogsArrayProcessor } from "./LogsArrayProcessor";
import { LogsArrayProcessorOperationAppend } from "./LogsArrayProcessorOperationAppend";
import { LogsArrayProcessorOperationLength } from "./LogsArrayProcessorOperationLength";
import { LogsArrayProcessorOperationSelect } from "./LogsArrayProcessorOperationSelect";
import { LogsAttributeRemapper } from "./LogsAttributeRemapper";
import { LogsByRetention } from "./LogsByRetention";
import { LogsByRetentionMonthlyUsage } from "./LogsByRetentionMonthlyUsage";
import { LogsByRetentionOrgUsage } from "./LogsByRetentionOrgUsage";
import { LogsByRetentionOrgs } from "./LogsByRetentionOrgs";
import { LogsCategoryProcessor } from "./LogsCategoryProcessor";
import { LogsCategoryProcessorCategory } from "./LogsCategoryProcessorCategory";
import { LogsDailyLimitReset } from "./LogsDailyLimitReset";
import { LogsDateRemapper } from "./LogsDateRemapper";
import { LogsDecoderProcessor } from "./LogsDecoderProcessor";
import { LogsExclusion } from "./LogsExclusion";
import { LogsExclusionFilter } from "./LogsExclusionFilter";
import { LogsFilter } from "./LogsFilter";
import { LogsGeoIPParser } from "./LogsGeoIPParser";
import { LogsGrokParser } from "./LogsGrokParser";
import { LogsGrokParserRules } from "./LogsGrokParserRules";
import { LogsIndex } from "./LogsIndex";
import { LogsIndexListResponse } from "./LogsIndexListResponse";
import { LogsIndexUpdateRequest } from "./LogsIndexUpdateRequest";
import { LogsIndexesOrder } from "./LogsIndexesOrder";
import { LogsListRequest } from "./LogsListRequest";
import { LogsListRequestTime } from "./LogsListRequestTime";
import { LogsListResponse } from "./LogsListResponse";
import { LogsLookupProcessor } from "./LogsLookupProcessor";
import { LogsMessageRemapper } from "./LogsMessageRemapper";
import { LogsPipeline } from "./LogsPipeline";
import { LogsPipelineProcessor } from "./LogsPipelineProcessor";
import { LogsPipelinesOrder } from "./LogsPipelinesOrder";
import { LogsQueryCompute } from "./LogsQueryCompute";
import { LogsRetentionAggSumUsage } from "./LogsRetentionAggSumUsage";
import { LogsRetentionSumUsage } from "./LogsRetentionSumUsage";
import { LogsSchemaCategoryMapper } from "./LogsSchemaCategoryMapper";
import { LogsSchemaCategoryMapperCategory } from "./LogsSchemaCategoryMapperCategory";
import { LogsSchemaCategoryMapperFallback } from "./LogsSchemaCategoryMapperFallback";
import { LogsSchemaCategoryMapperTargets } from "./LogsSchemaCategoryMapperTargets";
import { LogsSchemaData } from "./LogsSchemaData";
import { LogsSchemaProcessor } from "./LogsSchemaProcessor";
import { LogsSchemaRemapper } from "./LogsSchemaRemapper";
import { LogsServiceRemapper } from "./LogsServiceRemapper";
import { LogsSpanRemapper } from "./LogsSpanRemapper";
import { LogsStatusRemapper } from "./LogsStatusRemapper";
import { LogsStringBuilderProcessor } from "./LogsStringBuilderProcessor";
import { LogsTraceRemapper } from "./LogsTraceRemapper";
import { LogsURLParser } from "./LogsURLParser";
import { LogsUserAgentParser } from "./LogsUserAgentParser";
import { MatchingDowntime } from "./MatchingDowntime";
import { MetricMetadata } from "./MetricMetadata";
import { MetricSearchResponse } from "./MetricSearchResponse";
import { MetricSearchResponseResults } from "./MetricSearchResponseResults";
import { MetricsListResponse } from "./MetricsListResponse";
import { MetricsPayload } from "./MetricsPayload";
import { MetricsQueryMetadata } from "./MetricsQueryMetadata";
import { MetricsQueryResponse } from "./MetricsQueryResponse";
import { MetricsQueryUnit } from "./MetricsQueryUnit";
import { Monitor } from "./Monitor";
import { MonitorAsset } from "./MonitorAsset";
import { MonitorFormulaAndFunctionCostQueryDefinition } from "./MonitorFormulaAndFunctionCostQueryDefinition";
import { MonitorFormulaAndFunctionDataQualityMonitorOptions } from "./MonitorFormulaAndFunctionDataQualityMonitorOptions";
import { MonitorFormulaAndFunctionDataQualityQueryDefinition } from "./MonitorFormulaAndFunctionDataQualityQueryDefinition";
import { MonitorFormulaAndFunctionEventQueryDefinition } from "./MonitorFormulaAndFunctionEventQueryDefinition";
import { MonitorFormulaAndFunctionEventQueryDefinitionCompute } from "./MonitorFormulaAndFunctionEventQueryDefinitionCompute";
import { MonitorFormulaAndFunctionEventQueryDefinitionSearch } from "./MonitorFormulaAndFunctionEventQueryDefinitionSearch";
import { MonitorFormulaAndFunctionEventQueryGroupBy } from "./MonitorFormulaAndFunctionEventQueryGroupBy";
import { MonitorFormulaAndFunctionEventQueryGroupBySort } from "./MonitorFormulaAndFunctionEventQueryGroupBySort";
import { MonitorGroupSearchResponse } from "./MonitorGroupSearchResponse";
import { MonitorGroupSearchResponseCounts } from "./MonitorGroupSearchResponseCounts";
import { MonitorGroupSearchResult } from "./MonitorGroupSearchResult";
import { MonitorOptions } from "./MonitorOptions";
import { MonitorOptionsAggregation } from "./MonitorOptionsAggregation";
import { MonitorOptionsCustomSchedule } from "./MonitorOptionsCustomSchedule";
import { MonitorOptionsCustomScheduleRecurrence } from "./MonitorOptionsCustomScheduleRecurrence";
import { MonitorOptionsSchedulingOptions } from "./MonitorOptionsSchedulingOptions";
import { MonitorOptionsSchedulingOptionsEvaluationWindow } from "./MonitorOptionsSchedulingOptionsEvaluationWindow";
import { MonitorSearchCountItem } from "./MonitorSearchCountItem";
import { MonitorSearchResponse } from "./MonitorSearchResponse";
import { MonitorSearchResponseCounts } from "./MonitorSearchResponseCounts";
import { MonitorSearchResponseMetadata } from "./MonitorSearchResponseMetadata";
import { MonitorSearchResult } from "./MonitorSearchResult";
import { MonitorSearchResultNotification } from "./MonitorSearchResultNotification";
import { MonitorState } from "./MonitorState";
import { MonitorStateGroup } from "./MonitorStateGroup";
import { MonitorSummaryWidgetDefinition } from "./MonitorSummaryWidgetDefinition";
import { MonitorThresholdWindowOptions } from "./MonitorThresholdWindowOptions";
import { MonitorThresholds } from "./MonitorThresholds";
import { MonitorUpdateRequest } from "./MonitorUpdateRequest";
import { MonthlyUsageAttributionBody } from "./MonthlyUsageAttributionBody";
import { MonthlyUsageAttributionMetadata } from "./MonthlyUsageAttributionMetadata";
import { MonthlyUsageAttributionPagination } from "./MonthlyUsageAttributionPagination";
import { MonthlyUsageAttributionResponse } from "./MonthlyUsageAttributionResponse";
import { MonthlyUsageAttributionValues } from "./MonthlyUsageAttributionValues";
import { NoteWidgetDefinition } from "./NoteWidgetDefinition";
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
import { OrgDowngradedResponse } from "./OrgDowngradedResponse";
import { Organization } from "./Organization";
import { OrganizationBilling } from "./OrganizationBilling";
import { OrganizationCreateBody } from "./OrganizationCreateBody";
import { OrganizationCreateResponse } from "./OrganizationCreateResponse";
import { OrganizationListResponse } from "./OrganizationListResponse";
import { OrganizationResponse } from "./OrganizationResponse";
import { OrganizationSettings } from "./OrganizationSettings";
import { OrganizationSettingsSaml } from "./OrganizationSettingsSaml";
import { OrganizationSettingsSamlAutocreateUsersDomains } from "./OrganizationSettingsSamlAutocreateUsersDomains";
import { OrganizationSettingsSamlIdpInitiatedLogin } from "./OrganizationSettingsSamlIdpInitiatedLogin";
import { OrganizationSettingsSamlStrictMode } from "./OrganizationSettingsSamlStrictMode";
import { OrganizationSubscription } from "./OrganizationSubscription";
import { PagerDutyService } from "./PagerDutyService";
import { PagerDutyServiceKey } from "./PagerDutyServiceKey";
import { PagerDutyServiceName } from "./PagerDutyServiceName";
import { Pagination } from "./Pagination";
import { PowerpackTemplateVariableContents } from "./PowerpackTemplateVariableContents";
import { PowerpackTemplateVariables } from "./PowerpackTemplateVariables";
import { PowerpackWidgetDefinition } from "./PowerpackWidgetDefinition";
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { QueryValueWidgetDefinition } from "./QueryValueWidgetDefinition";
import { QueryValueWidgetRequest } from "./QueryValueWidgetRequest";
import { ReferenceTableLogsLookupProcessor } from "./ReferenceTableLogsLookupProcessor";
import { ResourceProviderConfig } from "./ResourceProviderConfig";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { RunWorkflowWidgetDefinition } from "./RunWorkflowWidgetDefinition";
import { RunWorkflowWidgetInput } from "./RunWorkflowWidgetInput";
import { SLOBulkDeleteError } from "./SLOBulkDeleteError";
import { SLOBulkDeleteResponse } from "./SLOBulkDeleteResponse";
import { SLOBulkDeleteResponseData } from "./SLOBulkDeleteResponseData";
import { SLOCorrection } from "./SLOCorrection";
import { SLOCorrectionCreateData } from "./SLOCorrectionCreateData";
import { SLOCorrectionCreateRequest } from "./SLOCorrectionCreateRequest";
import { SLOCorrectionCreateRequestAttributes } from "./SLOCorrectionCreateRequestAttributes";
import { SLOCorrectionListResponse } from "./SLOCorrectionListResponse";
import { SLOCorrectionResponse } from "./SLOCorrectionResponse";
import { SLOCorrectionResponseAttributes } from "./SLOCorrectionResponseAttributes";
import { SLOCorrectionResponseAttributesModifier } from "./SLOCorrectionResponseAttributesModifier";
import { SLOCorrectionUpdateData } from "./SLOCorrectionUpdateData";
import { SLOCorrectionUpdateRequest } from "./SLOCorrectionUpdateRequest";
import { SLOCorrectionUpdateRequestAttributes } from "./SLOCorrectionUpdateRequestAttributes";
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
import { SLOListWidgetDefinition } from "./SLOListWidgetDefinition";
import { SLOListWidgetQuery } from "./SLOListWidgetQuery";
import { SLOListWidgetRequest } from "./SLOListWidgetRequest";
import { SLOOverallStatuses } from "./SLOOverallStatuses";
import { SLORawErrorBudgetRemaining } from "./SLORawErrorBudgetRemaining";
import { SLOResponse } from "./SLOResponse";
import { SLOResponseData } from "./SLOResponseData";
import { SLOStatus } from "./SLOStatus";
import { SLOThreshold } from "./SLOThreshold";
import { SLOTimeSliceCondition } from "./SLOTimeSliceCondition";
import { SLOTimeSliceQuery } from "./SLOTimeSliceQuery";
import { SLOTimeSliceSpec } from "./SLOTimeSliceSpec";
import { SLOWidgetDefinition } from "./SLOWidgetDefinition";
import { ScatterPlotRequest } from "./ScatterPlotRequest";
import { ScatterPlotWidgetDefinition } from "./ScatterPlotWidgetDefinition";
import { ScatterPlotWidgetDefinitionRequests } from "./ScatterPlotWidgetDefinitionRequests";
import { ScatterplotTableRequest } from "./ScatterplotTableRequest";
import { ScatterplotWidgetFormula } from "./ScatterplotWidgetFormula";
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
import { SelectableTemplateVariableItems } from "./SelectableTemplateVariableItems";
import { Series } from "./Series";
import { ServiceCheck } from "./ServiceCheck";
import { ServiceLevelObjective } from "./ServiceLevelObjective";
import { ServiceLevelObjectiveQuery } from "./ServiceLevelObjectiveQuery";
import { ServiceLevelObjectiveRequest } from "./ServiceLevelObjectiveRequest";
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
import { SignalAssigneeUpdateRequest } from "./SignalAssigneeUpdateRequest";
import { SignalStateUpdateRequest } from "./SignalStateUpdateRequest";
import { SlackIntegrationChannel } from "./SlackIntegrationChannel";
import { SlackIntegrationChannelDisplay } from "./SlackIntegrationChannelDisplay";
import { SplitConfig } from "./SplitConfig";
import { SplitConfigSortCompute } from "./SplitConfigSortCompute";
import { SplitDimension } from "./SplitDimension";
import { SplitGraphWidgetDefinition } from "./SplitGraphWidgetDefinition";
import { SplitSort } from "./SplitSort";
import { SplitVectorEntryItem } from "./SplitVectorEntryItem";
import { SuccessfulSignalUpdateResponse } from "./SuccessfulSignalUpdateResponse";
import { SunburstWidgetDefinition } from "./SunburstWidgetDefinition";
import { SunburstWidgetLegendInlineAutomatic } from "./SunburstWidgetLegendInlineAutomatic";
import { SunburstWidgetLegendTable } from "./SunburstWidgetLegendTable";
import { SunburstWidgetRequest } from "./SunburstWidgetRequest";
import { SyntheticsAPISubtestStep } from "./SyntheticsAPISubtestStep";
import { SyntheticsAPITest } from "./SyntheticsAPITest";
import { SyntheticsAPITestConfig } from "./SyntheticsAPITestConfig";
import { SyntheticsAPITestResultData } from "./SyntheticsAPITestResultData";
import { SyntheticsAPITestResultFull } from "./SyntheticsAPITestResultFull";
import { SyntheticsAPITestResultFullCheck } from "./SyntheticsAPITestResultFullCheck";
import { SyntheticsAPITestResultShort } from "./SyntheticsAPITestResultShort";
import { SyntheticsAPITestResultShortResult } from "./SyntheticsAPITestResultShortResult";
import { SyntheticsAPITestStep } from "./SyntheticsAPITestStep";
import { SyntheticsAPIWaitStep } from "./SyntheticsAPIWaitStep";
import { SyntheticsApiTestResultFailure } from "./SyntheticsApiTestResultFailure";
import { SyntheticsAssertionBodyHashTarget } from "./SyntheticsAssertionBodyHashTarget";
import { SyntheticsAssertionJSONPathTarget } from "./SyntheticsAssertionJSONPathTarget";
import { SyntheticsAssertionJSONPathTargetTarget } from "./SyntheticsAssertionJSONPathTargetTarget";
import { SyntheticsAssertionJSONSchemaTarget } from "./SyntheticsAssertionJSONSchemaTarget";
import { SyntheticsAssertionJSONSchemaTargetTarget } from "./SyntheticsAssertionJSONSchemaTargetTarget";
import { SyntheticsAssertionJavascript } from "./SyntheticsAssertionJavascript";
import { SyntheticsAssertionTarget } from "./SyntheticsAssertionTarget";
import { SyntheticsAssertionXPathTarget } from "./SyntheticsAssertionXPathTarget";
import { SyntheticsAssertionXPathTargetTarget } from "./SyntheticsAssertionXPathTargetTarget";
import { SyntheticsBasicAuthDigest } from "./SyntheticsBasicAuthDigest";
import { SyntheticsBasicAuthNTLM } from "./SyntheticsBasicAuthNTLM";
import { SyntheticsBasicAuthOauthClient } from "./SyntheticsBasicAuthOauthClient";
import { SyntheticsBasicAuthOauthROP } from "./SyntheticsBasicAuthOauthROP";
import { SyntheticsBasicAuthSigv4 } from "./SyntheticsBasicAuthSigv4";
import { SyntheticsBasicAuthWeb } from "./SyntheticsBasicAuthWeb";
import { SyntheticsBatchDetails } from "./SyntheticsBatchDetails";
import { SyntheticsBatchDetailsData } from "./SyntheticsBatchDetailsData";
import { SyntheticsBatchResult } from "./SyntheticsBatchResult";
import { SyntheticsBrowserError } from "./SyntheticsBrowserError";
import { SyntheticsBrowserTest } from "./SyntheticsBrowserTest";
import { SyntheticsBrowserTestConfig } from "./SyntheticsBrowserTestConfig";
import { SyntheticsBrowserTestResultData } from "./SyntheticsBrowserTestResultData";
import { SyntheticsBrowserTestResultFailure } from "./SyntheticsBrowserTestResultFailure";
import { SyntheticsBrowserTestResultFull } from "./SyntheticsBrowserTestResultFull";
import { SyntheticsBrowserTestResultFullCheck } from "./SyntheticsBrowserTestResultFullCheck";
import { SyntheticsBrowserTestResultShort } from "./SyntheticsBrowserTestResultShort";
import { SyntheticsBrowserTestResultShortResult } from "./SyntheticsBrowserTestResultShortResult";
import { SyntheticsBrowserTestRumSettings } from "./SyntheticsBrowserTestRumSettings";
import { SyntheticsBrowserVariable } from "./SyntheticsBrowserVariable";
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";
import { SyntheticsCIBatchMetadataCI } from "./SyntheticsCIBatchMetadataCI";
import { SyntheticsCIBatchMetadataGit } from "./SyntheticsCIBatchMetadataGit";
import { SyntheticsCIBatchMetadataPipeline } from "./SyntheticsCIBatchMetadataPipeline";
import { SyntheticsCIBatchMetadataProvider } from "./SyntheticsCIBatchMetadataProvider";
import { SyntheticsCITest } from "./SyntheticsCITest";
import { SyntheticsCITestBody } from "./SyntheticsCITestBody";
import { SyntheticsConfigVariable } from "./SyntheticsConfigVariable";
import { SyntheticsCoreWebVitals } from "./SyntheticsCoreWebVitals";
import { SyntheticsDeleteTestsPayload } from "./SyntheticsDeleteTestsPayload";
import { SyntheticsDeleteTestsResponse } from "./SyntheticsDeleteTestsResponse";
import { SyntheticsDeletedTest } from "./SyntheticsDeletedTest";
import { SyntheticsDevice } from "./SyntheticsDevice";
import { SyntheticsFetchUptimesPayload } from "./SyntheticsFetchUptimesPayload";
import { SyntheticsGetAPITestLatestResultsResponse } from "./SyntheticsGetAPITestLatestResultsResponse";
import { SyntheticsGetBrowserTestLatestResultsResponse } from "./SyntheticsGetBrowserTestLatestResultsResponse";
import { SyntheticsGlobalVariable } from "./SyntheticsGlobalVariable";
import { SyntheticsGlobalVariableAttributes } from "./SyntheticsGlobalVariableAttributes";
import { SyntheticsGlobalVariableOptions } from "./SyntheticsGlobalVariableOptions";
import { SyntheticsGlobalVariableParseTestOptions } from "./SyntheticsGlobalVariableParseTestOptions";
import { SyntheticsGlobalVariableRequest } from "./SyntheticsGlobalVariableRequest";
import { SyntheticsGlobalVariableTOTPParameters } from "./SyntheticsGlobalVariableTOTPParameters";
import { SyntheticsGlobalVariableValue } from "./SyntheticsGlobalVariableValue";
import { SyntheticsListGlobalVariablesResponse } from "./SyntheticsListGlobalVariablesResponse";
import { SyntheticsListTestsResponse } from "./SyntheticsListTestsResponse";
import { SyntheticsLocation } from "./SyntheticsLocation";
import { SyntheticsLocations } from "./SyntheticsLocations";
import { SyntheticsMobileStep } from "./SyntheticsMobileStep";
import { SyntheticsMobileStepParams } from "./SyntheticsMobileStepParams";
import { SyntheticsMobileStepParamsElement } from "./SyntheticsMobileStepParamsElement";
import { SyntheticsMobileStepParamsElementRelativePosition } from "./SyntheticsMobileStepParamsElementRelativePosition";
import { SyntheticsMobileStepParamsElementUserLocator } from "./SyntheticsMobileStepParamsElementUserLocator";
import { SyntheticsMobileStepParamsElementUserLocatorValuesItems } from "./SyntheticsMobileStepParamsElementUserLocatorValuesItems";
import { SyntheticsMobileStepParamsPositionsItems } from "./SyntheticsMobileStepParamsPositionsItems";
import { SyntheticsMobileStepParamsVariable } from "./SyntheticsMobileStepParamsVariable";
import { SyntheticsMobileTest } from "./SyntheticsMobileTest";
import { SyntheticsMobileTestConfig } from "./SyntheticsMobileTestConfig";
import { SyntheticsMobileTestOptions } from "./SyntheticsMobileTestOptions";
import { SyntheticsMobileTestsMobileApplication } from "./SyntheticsMobileTestsMobileApplication";
import { SyntheticsParsingOptions } from "./SyntheticsParsingOptions";
import { SyntheticsPatchTestBody } from "./SyntheticsPatchTestBody";
import { SyntheticsPatchTestOperation } from "./SyntheticsPatchTestOperation";
import { SyntheticsPrivateLocation } from "./SyntheticsPrivateLocation";
import { SyntheticsPrivateLocationCreationResponse } from "./SyntheticsPrivateLocationCreationResponse";
import { SyntheticsPrivateLocationCreationResponseResultEncryption } from "./SyntheticsPrivateLocationCreationResponseResultEncryption";
import { SyntheticsPrivateLocationMetadata } from "./SyntheticsPrivateLocationMetadata";
import { SyntheticsPrivateLocationSecrets } from "./SyntheticsPrivateLocationSecrets";
import { SyntheticsPrivateLocationSecretsAuthentication } from "./SyntheticsPrivateLocationSecretsAuthentication";
import { SyntheticsPrivateLocationSecretsConfigDecryption } from "./SyntheticsPrivateLocationSecretsConfigDecryption";
import { SyntheticsSSLCertificate } from "./SyntheticsSSLCertificate";
import { SyntheticsSSLCertificateIssuer } from "./SyntheticsSSLCertificateIssuer";
import { SyntheticsSSLCertificateSubject } from "./SyntheticsSSLCertificateSubject";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsStepDetail } from "./SyntheticsStepDetail";
import { SyntheticsStepDetailWarning } from "./SyntheticsStepDetailWarning";
import { SyntheticsTestCiOptions } from "./SyntheticsTestCiOptions";
import { SyntheticsTestConfig } from "./SyntheticsTestConfig";
import { SyntheticsTestDetails } from "./SyntheticsTestDetails";
import { SyntheticsTestDetailsWithoutSteps } from "./SyntheticsTestDetailsWithoutSteps";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestOptionsMonitorOptions } from "./SyntheticsTestOptionsMonitorOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestOptionsScheduling } from "./SyntheticsTestOptionsScheduling";
import { SyntheticsTestOptionsSchedulingTimeframe } from "./SyntheticsTestOptionsSchedulingTimeframe";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";
import { SyntheticsTestRequestBodyFile } from "./SyntheticsTestRequestBodyFile";
import { SyntheticsTestRequestCertificate } from "./SyntheticsTestRequestCertificate";
import { SyntheticsTestRequestCertificateItem } from "./SyntheticsTestRequestCertificateItem";
import { SyntheticsTestRequestProxy } from "./SyntheticsTestRequestProxy";
import { SyntheticsTestRestrictionPolicyBinding } from "./SyntheticsTestRestrictionPolicyBinding";
import { SyntheticsTestUptime } from "./SyntheticsTestUptime";
import { SyntheticsTiming } from "./SyntheticsTiming";
import { SyntheticsTriggerBody } from "./SyntheticsTriggerBody";
import { SyntheticsTriggerCITestLocation } from "./SyntheticsTriggerCITestLocation";
import { SyntheticsTriggerCITestRunResult } from "./SyntheticsTriggerCITestRunResult";
import { SyntheticsTriggerCITestsResponse } from "./SyntheticsTriggerCITestsResponse";
import { SyntheticsTriggerTest } from "./SyntheticsTriggerTest";
import { SyntheticsUpdateTestPauseStatusPayload } from "./SyntheticsUpdateTestPauseStatusPayload";
import { SyntheticsUptime } from "./SyntheticsUptime";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";
import { TableWidgetDefinition } from "./TableWidgetDefinition";
import { TableWidgetRequest } from "./TableWidgetRequest";
import { TableWidgetTextFormatMatch } from "./TableWidgetTextFormatMatch";
import { TableWidgetTextFormatReplaceAll } from "./TableWidgetTextFormatReplaceAll";
import { TableWidgetTextFormatReplaceSubstring } from "./TableWidgetTextFormatReplaceSubstring";
import { TableWidgetTextFormatRule } from "./TableWidgetTextFormatRule";
import { TagToHosts } from "./TagToHosts";
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
import { UsageAnalyzedLogsHour } from "./UsageAnalyzedLogsHour";
import { UsageAnalyzedLogsResponse } from "./UsageAnalyzedLogsResponse";
import { UsageAttributionAggregatesBody } from "./UsageAttributionAggregatesBody";
import { UsageAuditLogsHour } from "./UsageAuditLogsHour";
import { UsageAuditLogsResponse } from "./UsageAuditLogsResponse";
import { UsageBillableSummaryBody } from "./UsageBillableSummaryBody";
import { UsageBillableSummaryHour } from "./UsageBillableSummaryHour";
import { UsageBillableSummaryKeys } from "./UsageBillableSummaryKeys";
import { UsageBillableSummaryResponse } from "./UsageBillableSummaryResponse";
import { UsageCIVisibilityHour } from "./UsageCIVisibilityHour";
import { UsageCIVisibilityResponse } from "./UsageCIVisibilityResponse";
import { UsageCWSHour } from "./UsageCWSHour";
import { UsageCWSResponse } from "./UsageCWSResponse";
import { UsageCloudSecurityPostureManagementHour } from "./UsageCloudSecurityPostureManagementHour";
import { UsageCloudSecurityPostureManagementResponse } from "./UsageCloudSecurityPostureManagementResponse";
import { UsageCustomReportsAttributes } from "./UsageCustomReportsAttributes";
import { UsageCustomReportsData } from "./UsageCustomReportsData";
import { UsageCustomReportsMeta } from "./UsageCustomReportsMeta";
import { UsageCustomReportsPage } from "./UsageCustomReportsPage";
import { UsageCustomReportsResponse } from "./UsageCustomReportsResponse";
import { UsageDBMHour } from "./UsageDBMHour";
import { UsageDBMResponse } from "./UsageDBMResponse";
import { UsageFargateHour } from "./UsageFargateHour";
import { UsageFargateResponse } from "./UsageFargateResponse";
import { UsageHostHour } from "./UsageHostHour";
import { UsageHostsResponse } from "./UsageHostsResponse";
import { UsageIncidentManagementHour } from "./UsageIncidentManagementHour";
import { UsageIncidentManagementResponse } from "./UsageIncidentManagementResponse";
import { UsageIndexedSpansHour } from "./UsageIndexedSpansHour";
import { UsageIndexedSpansResponse } from "./UsageIndexedSpansResponse";
import { UsageIngestedSpansHour } from "./UsageIngestedSpansHour";
import { UsageIngestedSpansResponse } from "./UsageIngestedSpansResponse";
import { UsageIoTHour } from "./UsageIoTHour";
import { UsageIoTResponse } from "./UsageIoTResponse";
import { UsageLambdaHour } from "./UsageLambdaHour";
import { UsageLambdaResponse } from "./UsageLambdaResponse";
import { UsageLogsByIndexHour } from "./UsageLogsByIndexHour";
import { UsageLogsByIndexResponse } from "./UsageLogsByIndexResponse";
import { UsageLogsByRetentionHour } from "./UsageLogsByRetentionHour";
import { UsageLogsByRetentionResponse } from "./UsageLogsByRetentionResponse";
import { UsageLogsHour } from "./UsageLogsHour";
import { UsageLogsResponse } from "./UsageLogsResponse";
import { UsageNetworkFlowsHour } from "./UsageNetworkFlowsHour";
import { UsageNetworkFlowsResponse } from "./UsageNetworkFlowsResponse";
import { UsageNetworkHostsHour } from "./UsageNetworkHostsHour";
import { UsageNetworkHostsResponse } from "./UsageNetworkHostsResponse";
import { UsageOnlineArchiveHour } from "./UsageOnlineArchiveHour";
import { UsageOnlineArchiveResponse } from "./UsageOnlineArchiveResponse";
import { UsageProfilingHour } from "./UsageProfilingHour";
import { UsageProfilingResponse } from "./UsageProfilingResponse";
import { UsageRumSessionsHour } from "./UsageRumSessionsHour";
import { UsageRumSessionsResponse } from "./UsageRumSessionsResponse";
import { UsageRumUnitsHour } from "./UsageRumUnitsHour";
import { UsageRumUnitsResponse } from "./UsageRumUnitsResponse";
import { UsageSDSHour } from "./UsageSDSHour";
import { UsageSDSResponse } from "./UsageSDSResponse";
import { UsageSNMPHour } from "./UsageSNMPHour";
import { UsageSNMPResponse } from "./UsageSNMPResponse";
import { UsageSpecifiedCustomReportsAttributes } from "./UsageSpecifiedCustomReportsAttributes";
import { UsageSpecifiedCustomReportsData } from "./UsageSpecifiedCustomReportsData";
import { UsageSpecifiedCustomReportsMeta } from "./UsageSpecifiedCustomReportsMeta";
import { UsageSpecifiedCustomReportsPage } from "./UsageSpecifiedCustomReportsPage";
import { UsageSpecifiedCustomReportsResponse } from "./UsageSpecifiedCustomReportsResponse";
import { UsageSummaryDate } from "./UsageSummaryDate";
import { UsageSummaryDateOrg } from "./UsageSummaryDateOrg";
import { UsageSummaryResponse } from "./UsageSummaryResponse";
import { UsageSyntheticsAPIHour } from "./UsageSyntheticsAPIHour";
import { UsageSyntheticsAPIResponse } from "./UsageSyntheticsAPIResponse";
import { UsageSyntheticsBrowserHour } from "./UsageSyntheticsBrowserHour";
import { UsageSyntheticsBrowserResponse } from "./UsageSyntheticsBrowserResponse";
import { UsageSyntheticsHour } from "./UsageSyntheticsHour";
import { UsageSyntheticsResponse } from "./UsageSyntheticsResponse";
import { UsageTimeseriesHour } from "./UsageTimeseriesHour";
import { UsageTimeseriesResponse } from "./UsageTimeseriesResponse";
import { UsageTopAvgMetricsHour } from "./UsageTopAvgMetricsHour";
import { UsageTopAvgMetricsMetadata } from "./UsageTopAvgMetricsMetadata";
import { UsageTopAvgMetricsPagination } from "./UsageTopAvgMetricsPagination";
import { UsageTopAvgMetricsResponse } from "./UsageTopAvgMetricsResponse";
import { User } from "./User";
import { UserDisableResponse } from "./UserDisableResponse";
import { UserListResponse } from "./UserListResponse";
import { UserResponse } from "./UserResponse";
import { ViewingPreferences } from "./ViewingPreferences";
import { WebhooksIntegration } from "./WebhooksIntegration";
import { WebhooksIntegrationCustomVariable } from "./WebhooksIntegrationCustomVariable";
import { WebhooksIntegrationCustomVariableResponse } from "./WebhooksIntegrationCustomVariableResponse";
import { WebhooksIntegrationCustomVariableUpdateRequest } from "./WebhooksIntegrationCustomVariableUpdateRequest";
import { WebhooksIntegrationUpdateRequest } from "./WebhooksIntegrationUpdateRequest";
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
import {
  dateFromRFC3339String,
  dateToRFC3339String,
  UnparsedObject,
} from "../../datadog-api-client-common/util";
import { logger } from "../../../logger";

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
  AWSEventBridgeCreateStatus: ["created"],
  AWSEventBridgeDeleteStatus: ["empty"],
  AWSNamespace: [
    "elb",
    "application_elb",
    "sqs",
    "rds",
    "custom",
    "network_elb",
    "lambda",
    "step_functions",
  ],
  AccessRole: ["st", "adm", "ro", "ERROR"],
  AlertGraphWidgetDefinitionType: ["alert_graph"],
  AlertValueWidgetDefinitionType: ["alert_value"],
  ApmStatsQueryRowType: ["service", "resource", "span"],
  BarChartWidgetDefinitionType: ["bar_chart"],
  BarChartWidgetFlatType: ["flat"],
  BarChartWidgetLegend: ["automatic", "inline", "none"],
  BarChartWidgetScaling: ["absolute", "relative"],
  BarChartWidgetStackedType: ["stacked"],
  ChangeWidgetDefinitionType: ["change"],
  CheckStatusWidgetDefinitionType: ["check_status"],
  ContentEncoding: ["gzip", "deflate"],
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
  DashboardReflowType: ["auto", "fixed"],
  DashboardResourceType: ["dashboard"],
  DashboardShareType: ["open", "invite", "embed"],
  DashboardType: ["custom_timeboard", "custom_screenboard"],
  DistributionPointsContentEncoding: ["deflate"],
  DistributionPointsType: ["distribution"],
  DistributionWidgetDefinitionType: ["distribution"],
  EventAlertType: [
    "error",
    "warning",
    "info",
    "success",
    "user_update",
    "recommendation",
    "snapshot",
  ],
  EventPriority: ["normal", "low"],
  EventStreamWidgetDefinitionType: ["event_stream"],
  EventTimelineWidgetDefinitionType: ["event_timeline"],
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
    "product_analytics",
    "on_call_events",
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
  FunnelRequestType: ["funnel"],
  FunnelSource: ["rum"],
  FunnelWidgetDefinitionType: ["funnel"],
  GCPMonitoredResourceConfigType: [
    "cloud_function",
    "cloud_run_revision",
    "gce_instance",
  ],
  GeomapWidgetDefinitionType: ["geomap"],
  GroupType: ["group"],
  GroupWidgetDefinitionType: ["group"],
  HeatMapWidgetDefinitionType: ["heatmap"],
  HostMapWidgetDefinitionType: ["hostmap"],
  HourlyUsageAttributionUsageType: [
    "api_usage",
    "apm_fargate_usage",
    "apm_host_usage",
    "apm_usm_usage",
    "appsec_fargate_usage",
    "appsec_usage",
    "asm_serverless_traced_invocations_usage",
    "asm_serverless_traced_invocations_percentage",
    "bits_ai_investigations_usage",
    "browser_usage",
    "ci_pipeline_indexed_spans_usage",
    "ci_test_indexed_spans_usage",
    "ci_visibility_itr_usage",
    "cloud_siem_usage",
    "code_security_host_usage",
    "container_excl_agent_usage",
    "container_usage",
    "cspm_containers_usage",
    "cspm_hosts_usage",
    "custom_event_usage",
    "custom_ingested_timeseries_usage",
    "custom_timeseries_usage",
    "cws_containers_usage",
    "cws_fargate_task_usage",
    "cws_hosts_usage",
    "data_jobs_monitoring_usage",
    "data_stream_monitoring_usage",
    "dbm_hosts_usage",
    "dbm_queries_usage",
    "error_tracking_usage",
    "error_tracking_percentage",
    "estimated_indexed_spans_usage",
    "estimated_ingested_spans_usage",
    "fargate_usage",
    "flex_stored_logs",
    "functions_usage",
    "incident_management_monthly_active_users_usage",
    "indexed_spans_usage",
    "infra_host_usage",
    "ingested_logs_bytes_usage",
    "ingested_spans_bytes_usage",
    "invocations_usage",
    "lambda_traced_invocations_usage",
    "llm_observability_usage",
    "llm_spans_usage",
    "logs_indexed_15day_usage",
    "logs_indexed_180day_usage",
    "logs_indexed_1day_usage",
    "logs_indexed_30day_usage",
    "logs_indexed_360day_usage",
    "logs_indexed_3day_usage",
    "logs_indexed_45day_usage",
    "logs_indexed_60day_usage",
    "logs_indexed_7day_usage",
    "logs_indexed_90day_usage",
    "logs_indexed_custom_retention_usage",
    "mobile_app_testing_usage",
    "ndm_netflow_usage",
    "npm_host_usage",
    "network_device_wireless_usage",
    "obs_pipeline_bytes_usage",
    "obs_pipelines_vcpu_usage",
    "online_archive_usage",
    "product_analytics_session_usage",
    "profiled_container_usage",
    "profiled_fargate_usage",
    "profiled_host_usage",
    "published_app",
    "rum_browser_mobile_sessions_usage",
    "rum_ingested_usage",
    "rum_investigate_usage",
    "rum_replay_sessions_usage",
    "rum_session_replay_add_on_usage",
    "sca_fargate_usage",
    "sds_scanned_bytes_usage",
    "serverless_apps_usage",
    "siem_analyzed_logs_add_on_usage",
    "siem_ingested_bytes_usage",
    "snmp_usage",
    "universal_service_monitoring_usage",
    "vuln_management_hosts_usage",
    "workflow_executions_usage",
  ],
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
  ],
  ListStreamWidgetDefinitionType: ["list_stream"],
  LogStreamWidgetDefinitionType: ["log_stream"],
  LogsArithmeticProcessorType: ["arithmetic-processor"],
  LogsArrayProcessorOperationAppendType: ["append"],
  LogsArrayProcessorOperationLengthType: ["length"],
  LogsArrayProcessorOperationSelectType: ["select"],
  LogsArrayProcessorType: ["array-processor"],
  LogsAttributeRemapperType: ["attribute-remapper"],
  LogsCategoryProcessorType: ["category-processor"],
  LogsDateRemapperType: ["date-remapper"],
  LogsDecoderProcessorBinaryToTextEncoding: ["base64", "base16"],
  LogsDecoderProcessorInputRepresentation: ["utf_8", "integer"],
  LogsDecoderProcessorType: ["decoder-processor"],
  LogsGeoIPParserType: ["geo-ip-parser"],
  LogsGrokParserType: ["grok-parser"],
  LogsLookupProcessorType: ["lookup-processor"],
  LogsMessageRemapperType: ["message-remapper"],
  LogsPipelineProcessorType: ["pipeline"],
  LogsSchemaCategoryMapperType: ["schema-category-mapper"],
  LogsSchemaProcessorType: ["schema-processor"],
  LogsSchemaRemapperType: ["schema-remapper"],
  LogsServiceRemapperType: ["service-remapper"],
  LogsSort: ["asc", "desc"],
  LogsSpanRemapperType: ["span-id-remapper"],
  LogsStatusRemapperType: ["status-remapper"],
  LogsStringBuilderProcessorType: ["string-builder-processor"],
  LogsTraceRemapperType: ["trace-id-remapper"],
  LogsURLParserType: ["url-parser"],
  LogsUserAgentParserType: ["user-agent-parser"],
  MetricContentEncoding: ["deflate", "gzip"],
  MonitorAssetCategory: ["runbook"],
  MonitorAssetResourceType: ["notebook"],
  MonitorDeviceID: [
    "laptop_large",
    "tablet",
    "mobile_small",
    "chrome.laptop_large",
    "chrome.tablet",
    "chrome.mobile_small",
    "firefox.laptop_large",
    "firefox.tablet",
    "firefox.mobile_small",
  ],
  MonitorDraftStatus: ["draft", "published"],
  MonitorFormulaAndFunctionCostAggregator: [
    "avg",
    "sum",
    "max",
    "min",
    "last",
    "area",
    "l2norm",
    "percentile",
    "stddev",
  ],
  MonitorFormulaAndFunctionCostDataSource: [
    "metrics",
    "cloud_cost",
    "datadog_usage",
  ],
  MonitorFormulaAndFunctionDataQualityDataSource: ["data_quality_metrics"],
  MonitorFormulaAndFunctionDataQualityModelTypeOverride: [
    "freshness",
    "percentage",
    "any",
  ],
  MonitorFormulaAndFunctionEventAggregation: [
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
  MonitorFormulaAndFunctionEventsDataSource: [
    "rum",
    "ci_pipelines",
    "ci_tests",
    "audit",
    "events",
    "logs",
    "spans",
    "database_queries",
    "network",
  ],
  MonitorOptionsNotificationPresets: [
    "show_all",
    "hide_query",
    "hide_handles",
    "hide_all",
  ],
  MonitorOverallStates: [
    "Alert",
    "Ignored",
    "No Data",
    "OK",
    "Skipped",
    "Unknown",
    "Warn",
  ],
  MonitorRenotifyStatusType: ["alert", "warn", "no data"],
  MonitorSummaryWidgetDefinitionType: ["manage_status"],
  MonitorType: [
    "composite",
    "event alert",
    "log alert",
    "metric alert",
    "process alert",
    "query alert",
    "rum alert",
    "service check",
    "synthetics alert",
    "trace-analytics alert",
    "slo alert",
    "event-v2 alert",
    "audit alert",
    "ci-pipelines alert",
    "ci-tests alert",
    "error-tracking alert",
    "database-monitoring alert",
    "network-performance alert",
    "cost alert",
    "data-quality alert",
  ],
  MonthlyUsageAttributionSupportedMetrics: [
    "api_usage",
    "api_percentage",
    "apm_fargate_usage",
    "apm_fargate_percentage",
    "appsec_fargate_usage",
    "appsec_fargate_percentage",
    "apm_host_usage",
    "apm_host_percentage",
    "apm_usm_usage",
    "apm_usm_percentage",
    "appsec_usage",
    "appsec_percentage",
    "asm_serverless_traced_invocations_usage",
    "asm_serverless_traced_invocations_percentage",
    "bits_ai_investigations_usage",
    "bits_ai_investigations_percentage",
    "browser_usage",
    "browser_percentage",
    "ci_visibility_itr_usage",
    "ci_visibility_itr_percentage",
    "cloud_siem_usage",
    "cloud_siem_percentage",
    "code_security_host_usage",
    "code_security_host_percentage",
    "container_excl_agent_usage",
    "container_excl_agent_percentage",
    "container_usage",
    "container_percentage",
    "cspm_containers_percentage",
    "cspm_containers_usage",
    "cspm_hosts_percentage",
    "cspm_hosts_usage",
    "custom_timeseries_usage",
    "custom_timeseries_percentage",
    "custom_ingested_timeseries_usage",
    "custom_ingested_timeseries_percentage",
    "cws_containers_percentage",
    "cws_containers_usage",
    "cws_fargate_task_percentage",
    "cws_fargate_task_usage",
    "cws_hosts_percentage",
    "cws_hosts_usage",
    "data_jobs_monitoring_usage",
    "data_jobs_monitoring_percentage",
    "data_stream_monitoring_usage",
    "data_stream_monitoring_percentage",
    "dbm_hosts_percentage",
    "dbm_hosts_usage",
    "dbm_queries_percentage",
    "dbm_queries_usage",
    "error_tracking_usage",
    "error_tracking_percentage",
    "estimated_indexed_spans_usage",
    "estimated_indexed_spans_percentage",
    "estimated_ingested_spans_usage",
    "estimated_ingested_spans_percentage",
    "fargate_usage",
    "fargate_percentage",
    "flex_stored_logs_usage",
    "flex_stored_logs_percentage",
    "functions_usage",
    "functions_percentage",
    "incident_management_monthly_active_users_usage",
    "incident_management_monthly_active_users_percentage",
    "infra_host_usage",
    "infra_host_percentage",
    "invocations_usage",
    "invocations_percentage",
    "lambda_traced_invocations_usage",
    "lambda_traced_invocations_percentage",
    "llm_observability_usage",
    "llm_observability_percentage",
    "llm_spans_usage",
    "llm_spans_percentage",
    "mobile_app_testing_percentage",
    "mobile_app_testing_usage",
    "ndm_netflow_usage",
    "ndm_netflow_percentage",
    "network_device_wireless_usage",
    "network_device_wireless_percentage",
    "npm_host_usage",
    "npm_host_percentage",
    "obs_pipeline_bytes_usage",
    "obs_pipeline_bytes_percentage",
    "obs_pipelines_vcpu_usage",
    "obs_pipelines_vcpu_percentage",
    "online_archive_usage",
    "online_archive_percentage",
    "product_analytics_session_usage",
    "product_analytics_session_percentage",
    "profiled_container_usage",
    "profiled_container_percentage",
    "profiled_fargate_usage",
    "profiled_fargate_percentage",
    "profiled_host_usage",
    "profiled_host_percentage",
    "published_app_usage",
    "published_app_percentage",
    "serverless_apps_usage",
    "serverless_apps_percentage",
    "snmp_usage",
    "snmp_percentage",
    "universal_service_monitoring_usage",
    "universal_service_monitoring_percentage",
    "vuln_management_hosts_usage",
    "vuln_management_hosts_percentage",
    "sds_scanned_bytes_usage",
    "sds_scanned_bytes_percentage",
    "ci_test_indexed_spans_usage",
    "ci_test_indexed_spans_percentage",
    "ingested_logs_bytes_usage",
    "ingested_logs_bytes_percentage",
    "ci_pipeline_indexed_spans_usage",
    "ci_pipeline_indexed_spans_percentage",
    "indexed_spans_usage",
    "indexed_spans_percentage",
    "custom_event_usage",
    "custom_event_percentage",
    "logs_indexed_custom_retention_usage",
    "logs_indexed_custom_retention_percentage",
    "logs_indexed_360day_usage",
    "logs_indexed_360day_percentage",
    "logs_indexed_180day_usage",
    "logs_indexed_180day_percentage",
    "logs_indexed_90day_usage",
    "logs_indexed_90day_percentage",
    "logs_indexed_60day_usage",
    "logs_indexed_60day_percentage",
    "logs_indexed_45day_usage",
    "logs_indexed_45day_percentage",
    "logs_indexed_30day_usage",
    "logs_indexed_30day_percentage",
    "logs_indexed_15day_usage",
    "logs_indexed_15day_percentage",
    "logs_indexed_7day_usage",
    "logs_indexed_7day_percentage",
    "logs_indexed_3day_usage",
    "logs_indexed_3day_percentage",
    "logs_indexed_1day_usage",
    "logs_indexed_1day_percentage",
    "rum_ingested_usage",
    "rum_ingested_percentage",
    "rum_investigate_usage",
    "rum_investigate_percentage",
    "rum_replay_sessions_usage",
    "rum_replay_sessions_percentage",
    "rum_session_replay_add_on_usage",
    "rum_session_replay_add_on_percentage",
    "rum_browser_mobile_sessions_usage",
    "rum_browser_mobile_sessions_percentage",
    "ingested_spans_bytes_usage",
    "ingested_spans_bytes_percentage",
    "siem_analyzed_logs_add_on_usage",
    "siem_analyzed_logs_add_on_percentage",
    "siem_ingested_bytes_usage",
    "siem_ingested_bytes_percentage",
    "workflow_executions_usage",
    "workflow_executions_percentage",
    "sca_fargate_usage",
    "sca_fargate_percentage",
    "*",
  ],
  NoteWidgetDefinitionType: ["note"],
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
  NotifyEndState: ["alert", "no data", "warn"],
  NotifyEndType: ["canceled", "expired"],
  NumberFormatUnitCustomType: ["custom_unit_label"],
  NumberFormatUnitScaleType: ["canonical_unit"],
  OnMissingDataOption: [
    "default",
    "show_no_data",
    "show_and_notify_no_data",
    "resolve",
  ],
  PowerpackWidgetDefinitionType: ["powerpack"],
  QuerySortOrder: ["asc", "desc"],
  QueryValueWidgetDefinitionType: ["query_value"],
  RunWorkflowWidgetDefinitionType: ["run_workflow"],
  SLOCorrectionCategory: [
    "Scheduled Maintenance",
    "Outside Business Hours",
    "Deployment",
    "Other",
  ],
  SLOCorrectionType: ["correction"],
  SLOErrorTimeframe: ["7d", "30d", "90d", "all"],
  SLOListWidgetDefinitionType: ["slo_list"],
  SLOListWidgetRequestType: ["slo_list"],
  SLOState: ["breached", "warning", "ok", "no_data"],
  SLOTimeSliceComparator: [">", ">=", "<", "<="],
  SLOTimeSliceInterval: [60, 300],
  SLOTimeframe: ["7d", "30d", "90d", "custom"],
  SLOType: ["metric", "monitor", "time_slice"],
  SLOTypeNumeric: [0, 1, 2],
  SLOWidgetDefinitionType: ["slo"],
  ScatterPlotWidgetDefinitionType: ["scatterplot"],
  ScatterplotDimension: ["x", "y", "radius", "color"],
  ScatterplotWidgetAggregator: ["avg", "last", "max", "min", "sum"],
  SearchSLOTimeframe: ["7d", "30d", "90d"],
  ServiceCheckStatus: [0, 1, 2, 3],
  ServiceMapWidgetDefinitionType: ["servicemap"],
  ServiceSummaryWidgetDefinitionType: ["trace_service"],
  SharedDashboardStatus: ["active", "paused"],
  SignalArchiveReason: [
    "none",
    "false_positive",
    "testing_or_maintenance",
    "investigated_case_opened",
    "true_positive_benign",
    "true_positive_malicious",
    "other",
  ],
  SignalTriageState: ["open", "archived", "under_review"],
  SplitGraphVizSize: ["xs", "sm", "md", "lg"],
  SplitGraphWidgetDefinitionType: ["split_group"],
  SunburstWidgetDefinitionType: ["sunburst"],
  SunburstWidgetLegendInlineAutomaticType: ["inline", "automatic"],
  SunburstWidgetLegendTableType: ["table", "none"],
  SyntheticsAPISubtestStepSubtype: ["playSubTest"],
  SyntheticsAPITestStepSubtype: [
    "http",
    "grpc",
    "ssl",
    "dns",
    "tcp",
    "udp",
    "icmp",
    "websocket",
  ],
  SyntheticsAPITestType: ["api"],
  SyntheticsAPIWaitStepSubtype: ["wait"],
  SyntheticsApiTestFailureCode: [
    "BODY_TOO_LARGE",
    "DENIED",
    "TOO_MANY_REDIRECTS",
    "AUTHENTICATION_ERROR",
    "DECRYPTION",
    "INVALID_CHAR_IN_HEADER",
    "HEADER_TOO_LARGE",
    "HEADERS_INCOMPATIBLE_CONTENT_LENGTH",
    "INVALID_REQUEST",
    "REQUIRES_UPDATE",
    "UNESCAPED_CHARACTERS_IN_REQUEST_PATH",
    "MALFORMED_RESPONSE",
    "INCORRECT_ASSERTION",
    "CONNREFUSED",
    "CONNRESET",
    "DNS",
    "HOSTUNREACH",
    "NETUNREACH",
    "TIMEOUT",
    "SSL",
    "OCSP",
    "INVALID_TEST",
    "TUNNEL",
    "WEBSOCKET",
    "UNKNOWN",
    "INTERNAL_ERROR",
  ],
  SyntheticsAssertionBodyHashOperator: ["md5", "sha1", "sha256"],
  SyntheticsAssertionBodyHashType: ["bodyHash"],
  SyntheticsAssertionJSONPathOperator: ["validatesJSONPath"],
  SyntheticsAssertionJSONSchemaMetaSchema: ["draft-07", "draft-06"],
  SyntheticsAssertionJSONSchemaOperator: ["validatesJSONSchema"],
  SyntheticsAssertionJavascriptType: ["javascript"],
  SyntheticsAssertionOperator: [
    "contains",
    "doesNotContain",
    "is",
    "isNot",
    "lessThan",
    "lessThanOrEqual",
    "moreThan",
    "moreThanOrEqual",
    "matches",
    "doesNotMatch",
    "validates",
    "isInMoreThan",
    "isInLessThan",
    "doesNotExist",
    "isUndefined",
  ],
  SyntheticsAssertionTimingsScope: ["all", "withoutDNS"],
  SyntheticsAssertionType: [
    "body",
    "header",
    "statusCode",
    "certificate",
    "responseTime",
    "property",
    "recordEvery",
    "recordSome",
    "tlsVersion",
    "minTlsVersion",
    "latency",
    "packetLossPercentage",
    "packetsReceived",
    "networkHop",
    "receivedMessage",
    "grpcHealthcheckStatus",
    "grpcMetadata",
    "grpcProto",
    "connection",
  ],
  SyntheticsAssertionXPathOperator: ["validatesXPath"],
  SyntheticsBasicAuthDigestType: ["digest"],
  SyntheticsBasicAuthNTLMType: ["ntlm"],
  SyntheticsBasicAuthOauthClientType: ["oauth-client"],
  SyntheticsBasicAuthOauthROPType: ["oauth-rop"],
  SyntheticsBasicAuthOauthTokenApiAuthentication: ["header", "body"],
  SyntheticsBasicAuthSigv4Type: ["sigv4"],
  SyntheticsBasicAuthWebType: ["web"],
  SyntheticsBatchStatus: ["passed", "skipped", "failed"],
  SyntheticsBrowserErrorType: ["network", "js"],
  SyntheticsBrowserTestFailureCode: [
    "API_REQUEST_FAILURE",
    "ASSERTION_FAILURE",
    "DOWNLOAD_FILE_TOO_LARGE",
    "ELEMENT_NOT_INTERACTABLE",
    "EMAIL_VARIABLE_NOT_DEFINED",
    "EVALUATE_JAVASCRIPT",
    "EVALUATE_JAVASCRIPT_CONTEXT",
    "EXTRACT_VARIABLE",
    "FORBIDDEN_URL",
    "FRAME_DETACHED",
    "INCONSISTENCIES",
    "INTERNAL_ERROR",
    "INVALID_TYPE_TEXT_DELAY",
    "INVALID_URL",
    "INVALID_VARIABLE_PATTERN",
    "INVISIBLE_ELEMENT",
    "LOCATE_ELEMENT",
    "NAVIGATE_TO_LINK",
    "OPEN_URL",
    "PRESS_KEY",
    "SERVER_CERTIFICATE",
    "SELECT_OPTION",
    "STEP_TIMEOUT",
    "SUB_TEST_NOT_PASSED",
    "TEST_TIMEOUT",
    "TOO_MANY_HTTP_REQUESTS",
    "UNAVAILABLE_BROWSER",
    "UNKNOWN",
    "UNSUPPORTED_AUTH_SCHEMA",
    "UPLOAD_FILES_ELEMENT_TYPE",
    "UPLOAD_FILES_DIALOG",
    "UPLOAD_FILES_DYNAMIC_ELEMENT",
    "UPLOAD_FILES_NAME",
  ],
  SyntheticsBrowserTestType: ["browser"],
  SyntheticsBrowserVariableType: ["element", "email", "global", "text"],
  SyntheticsCheckType: [
    "equals",
    "notEquals",
    "contains",
    "notContains",
    "startsWith",
    "notStartsWith",
    "greater",
    "lower",
    "greaterEquals",
    "lowerEquals",
    "matchRegex",
    "between",
    "isEmpty",
    "notIsEmpty",
  ],
  SyntheticsConfigVariableType: ["global", "text", "email"],
  SyntheticsGlobalVariableParseTestOptionsType: [
    "http_body",
    "http_header",
    "http_status_code",
    "local_variable",
  ],
  SyntheticsGlobalVariableParserType: ["raw", "json_path", "regex", "x_path"],
  SyntheticsLocalVariableParsingOptionsType: [
    "grpc_message",
    "grpc_metadata",
    "http_body",
    "http_header",
    "http_status_code",
  ],
  SyntheticsMobileStepParamsDirection: ["up", "down", "left", "right"],
  SyntheticsMobileStepParamsElementContextType: ["native", "web"],
  SyntheticsMobileStepParamsElementUserLocatorValuesItemsType: [
    "accessibility-id",
    "id",
    "ios-predicate-string",
    "ios-class-chain",
    "xpath",
  ],
  SyntheticsMobileStepType: [
    "assertElementContent",
    "assertScreenContains",
    "assertScreenLacks",
    "doubleTap",
    "extractVariable",
    "flick",
    "openDeeplink",
    "playSubTest",
    "pressBack",
    "restartApplication",
    "rotate",
    "scroll",
    "scrollToElement",
    "tap",
    "toggleWiFi",
    "typeText",
    "wait",
  ],
  SyntheticsMobileTestType: ["mobile"],
  SyntheticsMobileTestsMobileApplicationReferenceType: ["latest", "version"],
  SyntheticsPatchTestOperationName: [
    "add",
    "remove",
    "replace",
    "move",
    "copy",
    "test",
  ],
  SyntheticsPlayingTab: [-1, 0, 1, 2, 3],
  SyntheticsStepType: [
    "assertCurrentUrl",
    "assertElementAttribute",
    "assertElementContent",
    "assertElementPresent",
    "assertEmail",
    "assertFileDownload",
    "assertFromJavascript",
    "assertPageContains",
    "assertPageLacks",
    "assertRequests",
    "click",
    "extractFromJavascript",
    "extractFromEmailBody",
    "extractVariable",
    "goToEmailLink",
    "goToUrl",
    "goToUrlAndMeasureTti",
    "hover",
    "playSubTest",
    "pressKey",
    "refresh",
    "runApiTest",
    "scroll",
    "selectOption",
    "typeText",
    "uploadFiles",
    "wait",
  ],
  SyntheticsTestCallType: ["healthcheck", "unary"],
  SyntheticsTestDetailsSubType: [
    "http",
    "ssl",
    "tcp",
    "dns",
    "multi",
    "icmp",
    "udp",
    "websocket",
    "grpc",
  ],
  SyntheticsTestDetailsType: ["api", "browser", "mobile"],
  SyntheticsTestExecutionRule: ["blocking", "non_blocking", "skipped"],
  SyntheticsTestMonitorStatus: [0, 1, 2],
  SyntheticsTestOptionsHTTPVersion: ["http1", "http2", "any"],
  SyntheticsTestOptionsMonitorOptionsNotificationPresetName: [
    "show_all",
    "hide_all",
    "hide_query",
    "hide_handles",
  ],
  SyntheticsTestPauseStatus: ["live", "paused"],
  SyntheticsTestProcessStatus: [
    "not_scheduled",
    "scheduled",
    "finished",
    "finished_with_error",
  ],
  SyntheticsTestRequestBodyType: [
    "text/plain",
    "application/json",
    "text/xml",
    "text/html",
    "application/x-www-form-urlencoded",
    "graphql",
    "application/octet-stream",
    "multipart/form-data",
  ],
  SyntheticsTestRestrictionPolicyBindingRelation: ["editor", "viewer"],
  SyntheticsWarningType: ["user_locator"],
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
  TargetFormatType: ["auto", "string", "integer", "double"],
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
  UsageMetricCategory: ["standard", "custom"],
  UsageReportsType: ["reports"],
  UsageSort: ["computed_on", "size", "start_date", "end_date"],
  UsageSortDirection: ["desc", "asc"],
  ViewingPreferencesTheme: ["system", "light", "dark"],
  WebhooksIntegrationEncoding: ["json", "form"],
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
};

const typeMap: { [index: string]: any } = {
  APIErrorResponse: APIErrorResponse,
  AWSAccount: AWSAccount,
  AWSAccountAndLambdaRequest: AWSAccountAndLambdaRequest,
  AWSAccountCreateResponse: AWSAccountCreateResponse,
  AWSAccountDeleteRequest: AWSAccountDeleteRequest,
  AWSAccountListResponse: AWSAccountListResponse,
  AWSEventBridgeAccountConfiguration: AWSEventBridgeAccountConfiguration,
  AWSEventBridgeCreateRequest: AWSEventBridgeCreateRequest,
  AWSEventBridgeCreateResponse: AWSEventBridgeCreateResponse,
  AWSEventBridgeDeleteRequest: AWSEventBridgeDeleteRequest,
  AWSEventBridgeDeleteResponse: AWSEventBridgeDeleteResponse,
  AWSEventBridgeListResponse: AWSEventBridgeListResponse,
  AWSEventBridgeSource: AWSEventBridgeSource,
  AWSLogsAsyncError: AWSLogsAsyncError,
  AWSLogsAsyncResponse: AWSLogsAsyncResponse,
  AWSLogsLambda: AWSLogsLambda,
  AWSLogsListResponse: AWSLogsListResponse,
  AWSLogsListServicesResponse: AWSLogsListServicesResponse,
  AWSLogsServicesRequest: AWSLogsServicesRequest,
  AWSTagFilter: AWSTagFilter,
  AWSTagFilterCreateRequest: AWSTagFilterCreateRequest,
  AWSTagFilterDeleteRequest: AWSTagFilterDeleteRequest,
  AWSTagFilterListResponse: AWSTagFilterListResponse,
  AddSignalToIncidentRequest: AddSignalToIncidentRequest,
  AlertGraphWidgetDefinition: AlertGraphWidgetDefinition,
  AlertValueWidgetDefinition: AlertValueWidgetDefinition,
  ApiKey: ApiKey,
  ApiKeyListResponse: ApiKeyListResponse,
  ApiKeyResponse: ApiKeyResponse,
  ApmStatsQueryColumnType: ApmStatsQueryColumnType,
  ApmStatsQueryDefinition: ApmStatsQueryDefinition,
  ApplicationKey: ApplicationKey,
  ApplicationKeyListResponse: ApplicationKeyListResponse,
  ApplicationKeyResponse: ApplicationKeyResponse,
  AuthenticationValidationResponse: AuthenticationValidationResponse,
  AzureAccount: AzureAccount,
  BarChartWidgetDefinition: BarChartWidgetDefinition,
  BarChartWidgetFlat: BarChartWidgetFlat,
  BarChartWidgetRequest: BarChartWidgetRequest,
  BarChartWidgetStacked: BarChartWidgetStacked,
  BarChartWidgetStyle: BarChartWidgetStyle,
  CancelDowntimesByScopeRequest: CancelDowntimesByScopeRequest,
  CanceledDowntimesIds: CanceledDowntimesIds,
  ChangeWidgetDefinition: ChangeWidgetDefinition,
  ChangeWidgetRequest: ChangeWidgetRequest,
  CheckCanDeleteMonitorResponse: CheckCanDeleteMonitorResponse,
  CheckCanDeleteMonitorResponseData: CheckCanDeleteMonitorResponseData,
  CheckCanDeleteSLOResponse: CheckCanDeleteSLOResponse,
  CheckCanDeleteSLOResponseData: CheckCanDeleteSLOResponseData,
  CheckStatusWidgetDefinition: CheckStatusWidgetDefinition,
  Creator: Creator,
  Dashboard: Dashboard,
  DashboardBulkActionData: DashboardBulkActionData,
  DashboardBulkDeleteRequest: DashboardBulkDeleteRequest,
  DashboardDeleteResponse: DashboardDeleteResponse,
  DashboardGlobalTime: DashboardGlobalTime,
  DashboardList: DashboardList,
  DashboardListDeleteResponse: DashboardListDeleteResponse,
  DashboardListListResponse: DashboardListListResponse,
  DashboardRestoreRequest: DashboardRestoreRequest,
  DashboardSummary: DashboardSummary,
  DashboardSummaryDefinition: DashboardSummaryDefinition,
  DashboardTemplateVariable: DashboardTemplateVariable,
  DashboardTemplateVariablePreset: DashboardTemplateVariablePreset,
  DashboardTemplateVariablePresetValue: DashboardTemplateVariablePresetValue,
  DeleteSharedDashboardResponse: DeleteSharedDashboardResponse,
  DeletedMonitor: DeletedMonitor,
  DistributionPointsPayload: DistributionPointsPayload,
  DistributionPointsSeries: DistributionPointsSeries,
  DistributionWidgetDefinition: DistributionWidgetDefinition,
  DistributionWidgetRequest: DistributionWidgetRequest,
  DistributionWidgetXAxis: DistributionWidgetXAxis,
  DistributionWidgetYAxis: DistributionWidgetYAxis,
  Downtime: Downtime,
  DowntimeChild: DowntimeChild,
  DowntimeRecurrence: DowntimeRecurrence,
  Event: Event,
  EventCreateRequest: EventCreateRequest,
  EventCreateResponse: EventCreateResponse,
  EventListResponse: EventListResponse,
  EventQueryDefinition: EventQueryDefinition,
  EventResponse: EventResponse,
  EventStreamWidgetDefinition: EventStreamWidgetDefinition,
  EventTimelineWidgetDefinition: EventTimelineWidgetDefinition,
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
  FreeTextWidgetDefinition: FreeTextWidgetDefinition,
  FunnelQuery: FunnelQuery,
  FunnelStep: FunnelStep,
  FunnelWidgetDefinition: FunnelWidgetDefinition,
  FunnelWidgetRequest: FunnelWidgetRequest,
  GCPAccount: GCPAccount,
  GCPMonitoredResourceConfig: GCPMonitoredResourceConfig,
  GeomapWidgetDefinition: GeomapWidgetDefinition,
  GeomapWidgetDefinitionStyle: GeomapWidgetDefinitionStyle,
  GeomapWidgetDefinitionView: GeomapWidgetDefinitionView,
  GeomapWidgetRequest: GeomapWidgetRequest,
  GeomapWidgetRequestStyle: GeomapWidgetRequestStyle,
  GraphSnapshot: GraphSnapshot,
  GroupWidgetDefinition: GroupWidgetDefinition,
  HTTPLogError: HTTPLogError,
  HTTPLogItem: HTTPLogItem,
  HeatMapWidgetDefinition: HeatMapWidgetDefinition,
  HeatMapWidgetRequest: HeatMapWidgetRequest,
  HeatMapWidgetXAxis: HeatMapWidgetXAxis,
  Host: Host,
  HostListResponse: HostListResponse,
  HostMapRequest: HostMapRequest,
  HostMapWidgetDefinition: HostMapWidgetDefinition,
  HostMapWidgetDefinitionRequests: HostMapWidgetDefinitionRequests,
  HostMapWidgetDefinitionStyle: HostMapWidgetDefinitionStyle,
  HostMeta: HostMeta,
  HostMetaInstallMethod: HostMetaInstallMethod,
  HostMetrics: HostMetrics,
  HostMuteResponse: HostMuteResponse,
  HostMuteSettings: HostMuteSettings,
  HostTags: HostTags,
  HostTotals: HostTotals,
  HourlyUsageAttributionBody: HourlyUsageAttributionBody,
  HourlyUsageAttributionMetadata: HourlyUsageAttributionMetadata,
  HourlyUsageAttributionPagination: HourlyUsageAttributionPagination,
  HourlyUsageAttributionResponse: HourlyUsageAttributionResponse,
  IFrameWidgetDefinition: IFrameWidgetDefinition,
  IPPrefixesAPI: IPPrefixesAPI,
  IPPrefixesAPM: IPPrefixesAPM,
  IPPrefixesAgents: IPPrefixesAgents,
  IPPrefixesGlobal: IPPrefixesGlobal,
  IPPrefixesLogs: IPPrefixesLogs,
  IPPrefixesOrchestrator: IPPrefixesOrchestrator,
  IPPrefixesProcess: IPPrefixesProcess,
  IPPrefixesRemoteConfiguration: IPPrefixesRemoteConfiguration,
  IPPrefixesSynthetics: IPPrefixesSynthetics,
  IPPrefixesSyntheticsPrivateLocations: IPPrefixesSyntheticsPrivateLocations,
  IPPrefixesWebhooks: IPPrefixesWebhooks,
  IPRanges: IPRanges,
  IdpResponse: IdpResponse,
  ImageWidgetDefinition: ImageWidgetDefinition,
  IntakePayloadAccepted: IntakePayloadAccepted,
  ListStreamColumn: ListStreamColumn,
  ListStreamComputeItems: ListStreamComputeItems,
  ListStreamGroupByItems: ListStreamGroupByItems,
  ListStreamQuery: ListStreamQuery,
  ListStreamWidgetDefinition: ListStreamWidgetDefinition,
  ListStreamWidgetRequest: ListStreamWidgetRequest,
  Log: Log,
  LogContent: LogContent,
  LogQueryDefinition: LogQueryDefinition,
  LogQueryDefinitionGroupBy: LogQueryDefinitionGroupBy,
  LogQueryDefinitionGroupBySort: LogQueryDefinitionGroupBySort,
  LogQueryDefinitionSearch: LogQueryDefinitionSearch,
  LogStreamWidgetDefinition: LogStreamWidgetDefinition,
  LogsAPIError: LogsAPIError,
  LogsAPIErrorResponse: LogsAPIErrorResponse,
  LogsAPILimitReachedResponse: LogsAPILimitReachedResponse,
  LogsArithmeticProcessor: LogsArithmeticProcessor,
  LogsArrayProcessor: LogsArrayProcessor,
  LogsArrayProcessorOperationAppend: LogsArrayProcessorOperationAppend,
  LogsArrayProcessorOperationLength: LogsArrayProcessorOperationLength,
  LogsArrayProcessorOperationSelect: LogsArrayProcessorOperationSelect,
  LogsAttributeRemapper: LogsAttributeRemapper,
  LogsByRetention: LogsByRetention,
  LogsByRetentionMonthlyUsage: LogsByRetentionMonthlyUsage,
  LogsByRetentionOrgUsage: LogsByRetentionOrgUsage,
  LogsByRetentionOrgs: LogsByRetentionOrgs,
  LogsCategoryProcessor: LogsCategoryProcessor,
  LogsCategoryProcessorCategory: LogsCategoryProcessorCategory,
  LogsDailyLimitReset: LogsDailyLimitReset,
  LogsDateRemapper: LogsDateRemapper,
  LogsDecoderProcessor: LogsDecoderProcessor,
  LogsExclusion: LogsExclusion,
  LogsExclusionFilter: LogsExclusionFilter,
  LogsFilter: LogsFilter,
  LogsGeoIPParser: LogsGeoIPParser,
  LogsGrokParser: LogsGrokParser,
  LogsGrokParserRules: LogsGrokParserRules,
  LogsIndex: LogsIndex,
  LogsIndexListResponse: LogsIndexListResponse,
  LogsIndexUpdateRequest: LogsIndexUpdateRequest,
  LogsIndexesOrder: LogsIndexesOrder,
  LogsListRequest: LogsListRequest,
  LogsListRequestTime: LogsListRequestTime,
  LogsListResponse: LogsListResponse,
  LogsLookupProcessor: LogsLookupProcessor,
  LogsMessageRemapper: LogsMessageRemapper,
  LogsPipeline: LogsPipeline,
  LogsPipelineProcessor: LogsPipelineProcessor,
  LogsPipelinesOrder: LogsPipelinesOrder,
  LogsQueryCompute: LogsQueryCompute,
  LogsRetentionAggSumUsage: LogsRetentionAggSumUsage,
  LogsRetentionSumUsage: LogsRetentionSumUsage,
  LogsSchemaCategoryMapper: LogsSchemaCategoryMapper,
  LogsSchemaCategoryMapperCategory: LogsSchemaCategoryMapperCategory,
  LogsSchemaCategoryMapperFallback: LogsSchemaCategoryMapperFallback,
  LogsSchemaCategoryMapperTargets: LogsSchemaCategoryMapperTargets,
  LogsSchemaData: LogsSchemaData,
  LogsSchemaProcessor: LogsSchemaProcessor,
  LogsSchemaRemapper: LogsSchemaRemapper,
  LogsServiceRemapper: LogsServiceRemapper,
  LogsSpanRemapper: LogsSpanRemapper,
  LogsStatusRemapper: LogsStatusRemapper,
  LogsStringBuilderProcessor: LogsStringBuilderProcessor,
  LogsTraceRemapper: LogsTraceRemapper,
  LogsURLParser: LogsURLParser,
  LogsUserAgentParser: LogsUserAgentParser,
  MatchingDowntime: MatchingDowntime,
  MetricMetadata: MetricMetadata,
  MetricSearchResponse: MetricSearchResponse,
  MetricSearchResponseResults: MetricSearchResponseResults,
  MetricsListResponse: MetricsListResponse,
  MetricsPayload: MetricsPayload,
  MetricsQueryMetadata: MetricsQueryMetadata,
  MetricsQueryResponse: MetricsQueryResponse,
  MetricsQueryUnit: MetricsQueryUnit,
  Monitor: Monitor,
  MonitorAsset: MonitorAsset,
  MonitorFormulaAndFunctionCostQueryDefinition:
    MonitorFormulaAndFunctionCostQueryDefinition,
  MonitorFormulaAndFunctionDataQualityMonitorOptions:
    MonitorFormulaAndFunctionDataQualityMonitorOptions,
  MonitorFormulaAndFunctionDataQualityQueryDefinition:
    MonitorFormulaAndFunctionDataQualityQueryDefinition,
  MonitorFormulaAndFunctionEventQueryDefinition:
    MonitorFormulaAndFunctionEventQueryDefinition,
  MonitorFormulaAndFunctionEventQueryDefinitionCompute:
    MonitorFormulaAndFunctionEventQueryDefinitionCompute,
  MonitorFormulaAndFunctionEventQueryDefinitionSearch:
    MonitorFormulaAndFunctionEventQueryDefinitionSearch,
  MonitorFormulaAndFunctionEventQueryGroupBy:
    MonitorFormulaAndFunctionEventQueryGroupBy,
  MonitorFormulaAndFunctionEventQueryGroupBySort:
    MonitorFormulaAndFunctionEventQueryGroupBySort,
  MonitorGroupSearchResponse: MonitorGroupSearchResponse,
  MonitorGroupSearchResponseCounts: MonitorGroupSearchResponseCounts,
  MonitorGroupSearchResult: MonitorGroupSearchResult,
  MonitorOptions: MonitorOptions,
  MonitorOptionsAggregation: MonitorOptionsAggregation,
  MonitorOptionsCustomSchedule: MonitorOptionsCustomSchedule,
  MonitorOptionsCustomScheduleRecurrence:
    MonitorOptionsCustomScheduleRecurrence,
  MonitorOptionsSchedulingOptions: MonitorOptionsSchedulingOptions,
  MonitorOptionsSchedulingOptionsEvaluationWindow:
    MonitorOptionsSchedulingOptionsEvaluationWindow,
  MonitorSearchCountItem: MonitorSearchCountItem,
  MonitorSearchResponse: MonitorSearchResponse,
  MonitorSearchResponseCounts: MonitorSearchResponseCounts,
  MonitorSearchResponseMetadata: MonitorSearchResponseMetadata,
  MonitorSearchResult: MonitorSearchResult,
  MonitorSearchResultNotification: MonitorSearchResultNotification,
  MonitorState: MonitorState,
  MonitorStateGroup: MonitorStateGroup,
  MonitorSummaryWidgetDefinition: MonitorSummaryWidgetDefinition,
  MonitorThresholdWindowOptions: MonitorThresholdWindowOptions,
  MonitorThresholds: MonitorThresholds,
  MonitorUpdateRequest: MonitorUpdateRequest,
  MonthlyUsageAttributionBody: MonthlyUsageAttributionBody,
  MonthlyUsageAttributionMetadata: MonthlyUsageAttributionMetadata,
  MonthlyUsageAttributionPagination: MonthlyUsageAttributionPagination,
  MonthlyUsageAttributionResponse: MonthlyUsageAttributionResponse,
  MonthlyUsageAttributionValues: MonthlyUsageAttributionValues,
  NoteWidgetDefinition: NoteWidgetDefinition,
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
  OrgDowngradedResponse: OrgDowngradedResponse,
  Organization: Organization,
  OrganizationBilling: OrganizationBilling,
  OrganizationCreateBody: OrganizationCreateBody,
  OrganizationCreateResponse: OrganizationCreateResponse,
  OrganizationListResponse: OrganizationListResponse,
  OrganizationResponse: OrganizationResponse,
  OrganizationSettings: OrganizationSettings,
  OrganizationSettingsSaml: OrganizationSettingsSaml,
  OrganizationSettingsSamlAutocreateUsersDomains:
    OrganizationSettingsSamlAutocreateUsersDomains,
  OrganizationSettingsSamlIdpInitiatedLogin:
    OrganizationSettingsSamlIdpInitiatedLogin,
  OrganizationSettingsSamlStrictMode: OrganizationSettingsSamlStrictMode,
  OrganizationSubscription: OrganizationSubscription,
  PagerDutyService: PagerDutyService,
  PagerDutyServiceKey: PagerDutyServiceKey,
  PagerDutyServiceName: PagerDutyServiceName,
  Pagination: Pagination,
  PowerpackTemplateVariableContents: PowerpackTemplateVariableContents,
  PowerpackTemplateVariables: PowerpackTemplateVariables,
  PowerpackWidgetDefinition: PowerpackWidgetDefinition,
  ProcessQueryDefinition: ProcessQueryDefinition,
  QueryValueWidgetDefinition: QueryValueWidgetDefinition,
  QueryValueWidgetRequest: QueryValueWidgetRequest,
  ReferenceTableLogsLookupProcessor: ReferenceTableLogsLookupProcessor,
  ResourceProviderConfig: ResourceProviderConfig,
  ResponseMetaAttributes: ResponseMetaAttributes,
  RunWorkflowWidgetDefinition: RunWorkflowWidgetDefinition,
  RunWorkflowWidgetInput: RunWorkflowWidgetInput,
  SLOBulkDeleteError: SLOBulkDeleteError,
  SLOBulkDeleteResponse: SLOBulkDeleteResponse,
  SLOBulkDeleteResponseData: SLOBulkDeleteResponseData,
  SLOCorrection: SLOCorrection,
  SLOCorrectionCreateData: SLOCorrectionCreateData,
  SLOCorrectionCreateRequest: SLOCorrectionCreateRequest,
  SLOCorrectionCreateRequestAttributes: SLOCorrectionCreateRequestAttributes,
  SLOCorrectionListResponse: SLOCorrectionListResponse,
  SLOCorrectionResponse: SLOCorrectionResponse,
  SLOCorrectionResponseAttributes: SLOCorrectionResponseAttributes,
  SLOCorrectionResponseAttributesModifier:
    SLOCorrectionResponseAttributesModifier,
  SLOCorrectionUpdateData: SLOCorrectionUpdateData,
  SLOCorrectionUpdateRequest: SLOCorrectionUpdateRequest,
  SLOCorrectionUpdateRequestAttributes: SLOCorrectionUpdateRequestAttributes,
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
  SLOListWidgetDefinition: SLOListWidgetDefinition,
  SLOListWidgetQuery: SLOListWidgetQuery,
  SLOListWidgetRequest: SLOListWidgetRequest,
  SLOOverallStatuses: SLOOverallStatuses,
  SLORawErrorBudgetRemaining: SLORawErrorBudgetRemaining,
  SLOResponse: SLOResponse,
  SLOResponseData: SLOResponseData,
  SLOStatus: SLOStatus,
  SLOThreshold: SLOThreshold,
  SLOTimeSliceCondition: SLOTimeSliceCondition,
  SLOTimeSliceQuery: SLOTimeSliceQuery,
  SLOTimeSliceSpec: SLOTimeSliceSpec,
  SLOWidgetDefinition: SLOWidgetDefinition,
  ScatterPlotRequest: ScatterPlotRequest,
  ScatterPlotWidgetDefinition: ScatterPlotWidgetDefinition,
  ScatterPlotWidgetDefinitionRequests: ScatterPlotWidgetDefinitionRequests,
  ScatterplotTableRequest: ScatterplotTableRequest,
  ScatterplotWidgetFormula: ScatterplotWidgetFormula,
  SearchSLOQuery: SearchSLOQuery,
  SearchSLOResponse: SearchSLOResponse,
  SearchSLOResponseData: SearchSLOResponseData,
  SearchSLOResponseDataAttributes: SearchSLOResponseDataAttributes,
  SearchSLOResponseDataAttributesFacets: SearchSLOResponseDataAttributesFacets,
  SearchSLOResponseDataAttributesFacetsObjectInt:
    SearchSLOResponseDataAttributesFacetsObjectInt,
  SearchSLOResponseDataAttributesFacetsObjectString:
    SearchSLOResponseDataAttributesFacetsObjectString,
  SearchSLOResponseLinks: SearchSLOResponseLinks,
  SearchSLOResponseMeta: SearchSLOResponseMeta,
  SearchSLOResponseMetaPage: SearchSLOResponseMetaPage,
  SearchSLOThreshold: SearchSLOThreshold,
  SearchServiceLevelObjective: SearchServiceLevelObjective,
  SearchServiceLevelObjectiveAttributes: SearchServiceLevelObjectiveAttributes,
  SearchServiceLevelObjectiveData: SearchServiceLevelObjectiveData,
  SelectableTemplateVariableItems: SelectableTemplateVariableItems,
  Series: Series,
  ServiceCheck: ServiceCheck,
  ServiceLevelObjective: ServiceLevelObjective,
  ServiceLevelObjectiveQuery: ServiceLevelObjectiveQuery,
  ServiceLevelObjectiveRequest: ServiceLevelObjectiveRequest,
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
  SignalAssigneeUpdateRequest: SignalAssigneeUpdateRequest,
  SignalStateUpdateRequest: SignalStateUpdateRequest,
  SlackIntegrationChannel: SlackIntegrationChannel,
  SlackIntegrationChannelDisplay: SlackIntegrationChannelDisplay,
  SplitConfig: SplitConfig,
  SplitConfigSortCompute: SplitConfigSortCompute,
  SplitDimension: SplitDimension,
  SplitGraphWidgetDefinition: SplitGraphWidgetDefinition,
  SplitSort: SplitSort,
  SplitVectorEntryItem: SplitVectorEntryItem,
  SuccessfulSignalUpdateResponse: SuccessfulSignalUpdateResponse,
  SunburstWidgetDefinition: SunburstWidgetDefinition,
  SunburstWidgetLegendInlineAutomatic: SunburstWidgetLegendInlineAutomatic,
  SunburstWidgetLegendTable: SunburstWidgetLegendTable,
  SunburstWidgetRequest: SunburstWidgetRequest,
  SyntheticsAPISubtestStep: SyntheticsAPISubtestStep,
  SyntheticsAPITest: SyntheticsAPITest,
  SyntheticsAPITestConfig: SyntheticsAPITestConfig,
  SyntheticsAPITestResultData: SyntheticsAPITestResultData,
  SyntheticsAPITestResultFull: SyntheticsAPITestResultFull,
  SyntheticsAPITestResultFullCheck: SyntheticsAPITestResultFullCheck,
  SyntheticsAPITestResultShort: SyntheticsAPITestResultShort,
  SyntheticsAPITestResultShortResult: SyntheticsAPITestResultShortResult,
  SyntheticsAPITestStep: SyntheticsAPITestStep,
  SyntheticsAPIWaitStep: SyntheticsAPIWaitStep,
  SyntheticsApiTestResultFailure: SyntheticsApiTestResultFailure,
  SyntheticsAssertionBodyHashTarget: SyntheticsAssertionBodyHashTarget,
  SyntheticsAssertionJSONPathTarget: SyntheticsAssertionJSONPathTarget,
  SyntheticsAssertionJSONPathTargetTarget:
    SyntheticsAssertionJSONPathTargetTarget,
  SyntheticsAssertionJSONSchemaTarget: SyntheticsAssertionJSONSchemaTarget,
  SyntheticsAssertionJSONSchemaTargetTarget:
    SyntheticsAssertionJSONSchemaTargetTarget,
  SyntheticsAssertionJavascript: SyntheticsAssertionJavascript,
  SyntheticsAssertionTarget: SyntheticsAssertionTarget,
  SyntheticsAssertionXPathTarget: SyntheticsAssertionXPathTarget,
  SyntheticsAssertionXPathTargetTarget: SyntheticsAssertionXPathTargetTarget,
  SyntheticsBasicAuthDigest: SyntheticsBasicAuthDigest,
  SyntheticsBasicAuthNTLM: SyntheticsBasicAuthNTLM,
  SyntheticsBasicAuthOauthClient: SyntheticsBasicAuthOauthClient,
  SyntheticsBasicAuthOauthROP: SyntheticsBasicAuthOauthROP,
  SyntheticsBasicAuthSigv4: SyntheticsBasicAuthSigv4,
  SyntheticsBasicAuthWeb: SyntheticsBasicAuthWeb,
  SyntheticsBatchDetails: SyntheticsBatchDetails,
  SyntheticsBatchDetailsData: SyntheticsBatchDetailsData,
  SyntheticsBatchResult: SyntheticsBatchResult,
  SyntheticsBrowserError: SyntheticsBrowserError,
  SyntheticsBrowserTest: SyntheticsBrowserTest,
  SyntheticsBrowserTestConfig: SyntheticsBrowserTestConfig,
  SyntheticsBrowserTestResultData: SyntheticsBrowserTestResultData,
  SyntheticsBrowserTestResultFailure: SyntheticsBrowserTestResultFailure,
  SyntheticsBrowserTestResultFull: SyntheticsBrowserTestResultFull,
  SyntheticsBrowserTestResultFullCheck: SyntheticsBrowserTestResultFullCheck,
  SyntheticsBrowserTestResultShort: SyntheticsBrowserTestResultShort,
  SyntheticsBrowserTestResultShortResult:
    SyntheticsBrowserTestResultShortResult,
  SyntheticsBrowserTestRumSettings: SyntheticsBrowserTestRumSettings,
  SyntheticsBrowserVariable: SyntheticsBrowserVariable,
  SyntheticsCIBatchMetadata: SyntheticsCIBatchMetadata,
  SyntheticsCIBatchMetadataCI: SyntheticsCIBatchMetadataCI,
  SyntheticsCIBatchMetadataGit: SyntheticsCIBatchMetadataGit,
  SyntheticsCIBatchMetadataPipeline: SyntheticsCIBatchMetadataPipeline,
  SyntheticsCIBatchMetadataProvider: SyntheticsCIBatchMetadataProvider,
  SyntheticsCITest: SyntheticsCITest,
  SyntheticsCITestBody: SyntheticsCITestBody,
  SyntheticsConfigVariable: SyntheticsConfigVariable,
  SyntheticsCoreWebVitals: SyntheticsCoreWebVitals,
  SyntheticsDeleteTestsPayload: SyntheticsDeleteTestsPayload,
  SyntheticsDeleteTestsResponse: SyntheticsDeleteTestsResponse,
  SyntheticsDeletedTest: SyntheticsDeletedTest,
  SyntheticsDevice: SyntheticsDevice,
  SyntheticsFetchUptimesPayload: SyntheticsFetchUptimesPayload,
  SyntheticsGetAPITestLatestResultsResponse:
    SyntheticsGetAPITestLatestResultsResponse,
  SyntheticsGetBrowserTestLatestResultsResponse:
    SyntheticsGetBrowserTestLatestResultsResponse,
  SyntheticsGlobalVariable: SyntheticsGlobalVariable,
  SyntheticsGlobalVariableAttributes: SyntheticsGlobalVariableAttributes,
  SyntheticsGlobalVariableOptions: SyntheticsGlobalVariableOptions,
  SyntheticsGlobalVariableParseTestOptions:
    SyntheticsGlobalVariableParseTestOptions,
  SyntheticsGlobalVariableRequest: SyntheticsGlobalVariableRequest,
  SyntheticsGlobalVariableTOTPParameters:
    SyntheticsGlobalVariableTOTPParameters,
  SyntheticsGlobalVariableValue: SyntheticsGlobalVariableValue,
  SyntheticsListGlobalVariablesResponse: SyntheticsListGlobalVariablesResponse,
  SyntheticsListTestsResponse: SyntheticsListTestsResponse,
  SyntheticsLocation: SyntheticsLocation,
  SyntheticsLocations: SyntheticsLocations,
  SyntheticsMobileStep: SyntheticsMobileStep,
  SyntheticsMobileStepParams: SyntheticsMobileStepParams,
  SyntheticsMobileStepParamsElement: SyntheticsMobileStepParamsElement,
  SyntheticsMobileStepParamsElementRelativePosition:
    SyntheticsMobileStepParamsElementRelativePosition,
  SyntheticsMobileStepParamsElementUserLocator:
    SyntheticsMobileStepParamsElementUserLocator,
  SyntheticsMobileStepParamsElementUserLocatorValuesItems:
    SyntheticsMobileStepParamsElementUserLocatorValuesItems,
  SyntheticsMobileStepParamsPositionsItems:
    SyntheticsMobileStepParamsPositionsItems,
  SyntheticsMobileStepParamsVariable: SyntheticsMobileStepParamsVariable,
  SyntheticsMobileTest: SyntheticsMobileTest,
  SyntheticsMobileTestConfig: SyntheticsMobileTestConfig,
  SyntheticsMobileTestOptions: SyntheticsMobileTestOptions,
  SyntheticsMobileTestsMobileApplication:
    SyntheticsMobileTestsMobileApplication,
  SyntheticsParsingOptions: SyntheticsParsingOptions,
  SyntheticsPatchTestBody: SyntheticsPatchTestBody,
  SyntheticsPatchTestOperation: SyntheticsPatchTestOperation,
  SyntheticsPrivateLocation: SyntheticsPrivateLocation,
  SyntheticsPrivateLocationCreationResponse:
    SyntheticsPrivateLocationCreationResponse,
  SyntheticsPrivateLocationCreationResponseResultEncryption:
    SyntheticsPrivateLocationCreationResponseResultEncryption,
  SyntheticsPrivateLocationMetadata: SyntheticsPrivateLocationMetadata,
  SyntheticsPrivateLocationSecrets: SyntheticsPrivateLocationSecrets,
  SyntheticsPrivateLocationSecretsAuthentication:
    SyntheticsPrivateLocationSecretsAuthentication,
  SyntheticsPrivateLocationSecretsConfigDecryption:
    SyntheticsPrivateLocationSecretsConfigDecryption,
  SyntheticsSSLCertificate: SyntheticsSSLCertificate,
  SyntheticsSSLCertificateIssuer: SyntheticsSSLCertificateIssuer,
  SyntheticsSSLCertificateSubject: SyntheticsSSLCertificateSubject,
  SyntheticsStep: SyntheticsStep,
  SyntheticsStepDetail: SyntheticsStepDetail,
  SyntheticsStepDetailWarning: SyntheticsStepDetailWarning,
  SyntheticsTestCiOptions: SyntheticsTestCiOptions,
  SyntheticsTestConfig: SyntheticsTestConfig,
  SyntheticsTestDetails: SyntheticsTestDetails,
  SyntheticsTestDetailsWithoutSteps: SyntheticsTestDetailsWithoutSteps,
  SyntheticsTestOptions: SyntheticsTestOptions,
  SyntheticsTestOptionsMonitorOptions: SyntheticsTestOptionsMonitorOptions,
  SyntheticsTestOptionsRetry: SyntheticsTestOptionsRetry,
  SyntheticsTestOptionsScheduling: SyntheticsTestOptionsScheduling,
  SyntheticsTestOptionsSchedulingTimeframe:
    SyntheticsTestOptionsSchedulingTimeframe,
  SyntheticsTestRequest: SyntheticsTestRequest,
  SyntheticsTestRequestBodyFile: SyntheticsTestRequestBodyFile,
  SyntheticsTestRequestCertificate: SyntheticsTestRequestCertificate,
  SyntheticsTestRequestCertificateItem: SyntheticsTestRequestCertificateItem,
  SyntheticsTestRequestProxy: SyntheticsTestRequestProxy,
  SyntheticsTestRestrictionPolicyBinding:
    SyntheticsTestRestrictionPolicyBinding,
  SyntheticsTestUptime: SyntheticsTestUptime,
  SyntheticsTiming: SyntheticsTiming,
  SyntheticsTriggerBody: SyntheticsTriggerBody,
  SyntheticsTriggerCITestLocation: SyntheticsTriggerCITestLocation,
  SyntheticsTriggerCITestRunResult: SyntheticsTriggerCITestRunResult,
  SyntheticsTriggerCITestsResponse: SyntheticsTriggerCITestsResponse,
  SyntheticsTriggerTest: SyntheticsTriggerTest,
  SyntheticsUpdateTestPauseStatusPayload:
    SyntheticsUpdateTestPauseStatusPayload,
  SyntheticsUptime: SyntheticsUptime,
  SyntheticsVariableParser: SyntheticsVariableParser,
  TableWidgetDefinition: TableWidgetDefinition,
  TableWidgetRequest: TableWidgetRequest,
  TableWidgetTextFormatMatch: TableWidgetTextFormatMatch,
  TableWidgetTextFormatReplaceAll: TableWidgetTextFormatReplaceAll,
  TableWidgetTextFormatReplaceSubstring: TableWidgetTextFormatReplaceSubstring,
  TableWidgetTextFormatRule: TableWidgetTextFormatRule,
  TagToHosts: TagToHosts,
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
  UsageAnalyzedLogsHour: UsageAnalyzedLogsHour,
  UsageAnalyzedLogsResponse: UsageAnalyzedLogsResponse,
  UsageAttributionAggregatesBody: UsageAttributionAggregatesBody,
  UsageAuditLogsHour: UsageAuditLogsHour,
  UsageAuditLogsResponse: UsageAuditLogsResponse,
  UsageBillableSummaryBody: UsageBillableSummaryBody,
  UsageBillableSummaryHour: UsageBillableSummaryHour,
  UsageBillableSummaryKeys: UsageBillableSummaryKeys,
  UsageBillableSummaryResponse: UsageBillableSummaryResponse,
  UsageCIVisibilityHour: UsageCIVisibilityHour,
  UsageCIVisibilityResponse: UsageCIVisibilityResponse,
  UsageCWSHour: UsageCWSHour,
  UsageCWSResponse: UsageCWSResponse,
  UsageCloudSecurityPostureManagementHour:
    UsageCloudSecurityPostureManagementHour,
  UsageCloudSecurityPostureManagementResponse:
    UsageCloudSecurityPostureManagementResponse,
  UsageCustomReportsAttributes: UsageCustomReportsAttributes,
  UsageCustomReportsData: UsageCustomReportsData,
  UsageCustomReportsMeta: UsageCustomReportsMeta,
  UsageCustomReportsPage: UsageCustomReportsPage,
  UsageCustomReportsResponse: UsageCustomReportsResponse,
  UsageDBMHour: UsageDBMHour,
  UsageDBMResponse: UsageDBMResponse,
  UsageFargateHour: UsageFargateHour,
  UsageFargateResponse: UsageFargateResponse,
  UsageHostHour: UsageHostHour,
  UsageHostsResponse: UsageHostsResponse,
  UsageIncidentManagementHour: UsageIncidentManagementHour,
  UsageIncidentManagementResponse: UsageIncidentManagementResponse,
  UsageIndexedSpansHour: UsageIndexedSpansHour,
  UsageIndexedSpansResponse: UsageIndexedSpansResponse,
  UsageIngestedSpansHour: UsageIngestedSpansHour,
  UsageIngestedSpansResponse: UsageIngestedSpansResponse,
  UsageIoTHour: UsageIoTHour,
  UsageIoTResponse: UsageIoTResponse,
  UsageLambdaHour: UsageLambdaHour,
  UsageLambdaResponse: UsageLambdaResponse,
  UsageLogsByIndexHour: UsageLogsByIndexHour,
  UsageLogsByIndexResponse: UsageLogsByIndexResponse,
  UsageLogsByRetentionHour: UsageLogsByRetentionHour,
  UsageLogsByRetentionResponse: UsageLogsByRetentionResponse,
  UsageLogsHour: UsageLogsHour,
  UsageLogsResponse: UsageLogsResponse,
  UsageNetworkFlowsHour: UsageNetworkFlowsHour,
  UsageNetworkFlowsResponse: UsageNetworkFlowsResponse,
  UsageNetworkHostsHour: UsageNetworkHostsHour,
  UsageNetworkHostsResponse: UsageNetworkHostsResponse,
  UsageOnlineArchiveHour: UsageOnlineArchiveHour,
  UsageOnlineArchiveResponse: UsageOnlineArchiveResponse,
  UsageProfilingHour: UsageProfilingHour,
  UsageProfilingResponse: UsageProfilingResponse,
  UsageRumSessionsHour: UsageRumSessionsHour,
  UsageRumSessionsResponse: UsageRumSessionsResponse,
  UsageRumUnitsHour: UsageRumUnitsHour,
  UsageRumUnitsResponse: UsageRumUnitsResponse,
  UsageSDSHour: UsageSDSHour,
  UsageSDSResponse: UsageSDSResponse,
  UsageSNMPHour: UsageSNMPHour,
  UsageSNMPResponse: UsageSNMPResponse,
  UsageSpecifiedCustomReportsAttributes: UsageSpecifiedCustomReportsAttributes,
  UsageSpecifiedCustomReportsData: UsageSpecifiedCustomReportsData,
  UsageSpecifiedCustomReportsMeta: UsageSpecifiedCustomReportsMeta,
  UsageSpecifiedCustomReportsPage: UsageSpecifiedCustomReportsPage,
  UsageSpecifiedCustomReportsResponse: UsageSpecifiedCustomReportsResponse,
  UsageSummaryDate: UsageSummaryDate,
  UsageSummaryDateOrg: UsageSummaryDateOrg,
  UsageSummaryResponse: UsageSummaryResponse,
  UsageSyntheticsAPIHour: UsageSyntheticsAPIHour,
  UsageSyntheticsAPIResponse: UsageSyntheticsAPIResponse,
  UsageSyntheticsBrowserHour: UsageSyntheticsBrowserHour,
  UsageSyntheticsBrowserResponse: UsageSyntheticsBrowserResponse,
  UsageSyntheticsHour: UsageSyntheticsHour,
  UsageSyntheticsResponse: UsageSyntheticsResponse,
  UsageTimeseriesHour: UsageTimeseriesHour,
  UsageTimeseriesResponse: UsageTimeseriesResponse,
  UsageTopAvgMetricsHour: UsageTopAvgMetricsHour,
  UsageTopAvgMetricsMetadata: UsageTopAvgMetricsMetadata,
  UsageTopAvgMetricsPagination: UsageTopAvgMetricsPagination,
  UsageTopAvgMetricsResponse: UsageTopAvgMetricsResponse,
  User: User,
  UserDisableResponse: UserDisableResponse,
  UserListResponse: UserListResponse,
  UserResponse: UserResponse,
  ViewingPreferences: ViewingPreferences,
  WebhooksIntegration: WebhooksIntegration,
  WebhooksIntegrationCustomVariable: WebhooksIntegrationCustomVariable,
  WebhooksIntegrationCustomVariableResponse:
    WebhooksIntegrationCustomVariableResponse,
  WebhooksIntegrationCustomVariableUpdateRequest:
    WebhooksIntegrationCustomVariableUpdateRequest,
  WebhooksIntegrationUpdateRequest: WebhooksIntegrationUpdateRequest,
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
  BarChartWidgetDisplay: ["BarChartWidgetStacked", "BarChartWidgetFlat"],
  DistributionPointItem: ["number", "Array<number>"],
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
  LogsArrayProcessorOperation: [
    "LogsArrayProcessorOperationAppend",
    "LogsArrayProcessorOperationLength",
    "LogsArrayProcessorOperationSelect",
  ],
  LogsProcessor: [
    "LogsGrokParser",
    "LogsDateRemapper",
    "LogsStatusRemapper",
    "LogsServiceRemapper",
    "LogsMessageRemapper",
    "LogsAttributeRemapper",
    "LogsURLParser",
    "LogsUserAgentParser",
    "LogsCategoryProcessor",
    "LogsArithmeticProcessor",
    "LogsStringBuilderProcessor",
    "LogsPipelineProcessor",
    "LogsGeoIPParser",
    "LogsLookupProcessor",
    "ReferenceTableLogsLookupProcessor",
    "LogsTraceRemapper",
    "LogsSpanRemapper",
    "LogsArrayProcessor",
    "LogsDecoderProcessor",
    "LogsSchemaProcessor",
  ],
  LogsSchemaMapper: ["LogsSchemaRemapper", "LogsSchemaCategoryMapper"],
  MonitorFormulaAndFunctionQueryDefinition: [
    "MonitorFormulaAndFunctionEventQueryDefinition",
    "MonitorFormulaAndFunctionCostQueryDefinition",
    "MonitorFormulaAndFunctionDataQualityQueryDefinition",
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
  SLODataSourceQueryDefinition: ["FormulaAndFunctionMetricQueryDefinition"],
  SLOSliSpec: ["SLOTimeSliceSpec"],
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
  SyntheticsAPIStep: [
    "SyntheticsAPITestStep",
    "SyntheticsAPIWaitStep",
    "SyntheticsAPISubtestStep",
  ],
  SyntheticsAssertion: [
    "SyntheticsAssertionTarget",
    "SyntheticsAssertionBodyHashTarget",
    "SyntheticsAssertionJSONPathTarget",
    "SyntheticsAssertionJSONSchemaTarget",
    "SyntheticsAssertionXPathTarget",
    "SyntheticsAssertionJavascript",
  ],
  SyntheticsAssertionTargetValue: ["number", "string"],
  SyntheticsBasicAuth: [
    "SyntheticsBasicAuthWeb",
    "SyntheticsBasicAuthSigv4",
    "SyntheticsBasicAuthNTLM",
    "SyntheticsBasicAuthDigest",
    "SyntheticsBasicAuthOauthClient",
    "SyntheticsBasicAuthOauthROP",
  ],
  SyntheticsMobileStepParamsValue: ["string", "number"],
  SyntheticsTestRequestDNSServerPort: ["number", "string"],
  SyntheticsTestRequestPort: ["number", "string"],
  TableWidgetTextFormatReplace: [
    "TableWidgetTextFormatReplaceAll",
    "TableWidgetTextFormatReplaceSubstring",
  ],
  ToplistWidgetDisplay: ["ToplistWidgetStacked", "ToplistWidgetFlat"],
  WidgetDefinition: [
    "AlertGraphWidgetDefinition",
    "AlertValueWidgetDefinition",
    "BarChartWidgetDefinition",
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
  WidgetTime: [
    "WidgetLegacyLiveSpan",
    "WidgetNewLiveSpan",
    "WidgetNewFixedSpan",
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
            "unexpected attribute " + attributeName + " of type " + type
          );
        } else if (attributeObj) {
          instance[attributeObj.baseName] = ObjectSerializer.serialize(
            data[attributeName],
            attributeObj.type,
            attributeObj.format
          );
        }
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

  public static deserialize(data: any, type: string, format = ""): any {
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
        type.length - 1
      );
      const transformedData: any[] = [];
      for (const element of data) {
        transformedData.push(
          ObjectSerializer.deserialize(element, subType, format)
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
          ObjectSerializer.deserialize(element, subType, format)
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
          format
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
        {}
      );
      const extraAttributes = Object.keys(data).filter(
        (key) => !Object.prototype.hasOwnProperty.call(attributesBaseNames, key)
      );

      if (extraAttributes.length > 0) {
        if ("additionalProperties" in attributesMap) {
          if (!instance.additionalProperties) {
            instance.additionalProperties = {};
          }

          const additionalProperties: { [key: string]: any } = {};
          for (const key of extraAttributes) {
            additionalProperties[key] = data[key];
          }

          const attributeObj = attributesMap["additionalProperties"];
          instance.additionalProperties = ObjectSerializer.deserialize(
            additionalProperties,
            attributeObj.type,
            attributeObj.format
          );
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
          attributeObj.format
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
  public static stringify(data: any, mediaType: string): string {
    if (mediaType === "application/json" || mediaType === "text/json") {
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
  public static parse(rawData: string, mediaType: string | undefined): any {
    try {
      return JSON.parse(rawData);
    } catch (error) {
      logger.debug(`could not parse ${mediaType}: ${error}`);
      return rawData;
    }
  }
}
