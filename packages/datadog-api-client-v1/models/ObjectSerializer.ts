import { APIErrorResponse } from './APIErrorResponse';
import { AWSAccount } from './AWSAccount';
import { AWSAccountAndLambdaRequest } from './AWSAccountAndLambdaRequest';
import { AWSAccountCreateResponse } from './AWSAccountCreateResponse';
import { AWSAccountDeleteRequest } from './AWSAccountDeleteRequest';
import { AWSAccountListResponse } from './AWSAccountListResponse';
import { AWSLogsAsyncError } from './AWSLogsAsyncError';
import { AWSLogsAsyncResponse } from './AWSLogsAsyncResponse';
import { AWSLogsLambda } from './AWSLogsLambda';
import { AWSLogsListResponse } from './AWSLogsListResponse';
import { AWSLogsListServicesResponse } from './AWSLogsListServicesResponse';
import { AWSLogsServicesRequest } from './AWSLogsServicesRequest';
import { AWSNamespace } from './AWSNamespace';
import { AWSTagFilter } from './AWSTagFilter';
import { AWSTagFilterCreateRequest } from './AWSTagFilterCreateRequest';
import { AWSTagFilterDeleteRequest } from './AWSTagFilterDeleteRequest';
import { AWSTagFilterListResponse } from './AWSTagFilterListResponse';
import { AccessRole } from './AccessRole';
import { AlertGraphWidgetDefinition } from './AlertGraphWidgetDefinition';
import { AlertGraphWidgetDefinitionType } from './AlertGraphWidgetDefinitionType';
import { AlertValueWidgetDefinition } from './AlertValueWidgetDefinition';
import { AlertValueWidgetDefinitionType } from './AlertValueWidgetDefinitionType';
import { ApiKey } from './ApiKey';
import { ApiKeyListResponse } from './ApiKeyListResponse';
import { ApiKeyResponse } from './ApiKeyResponse';
import { ApmStatsQueryColumnType } from './ApmStatsQueryColumnType';
import { ApmStatsQueryDefinition } from './ApmStatsQueryDefinition';
import { ApmStatsQueryRowType } from './ApmStatsQueryRowType';
import { ApplicationKey } from './ApplicationKey';
import { ApplicationKeyListResponse } from './ApplicationKeyListResponse';
import { ApplicationKeyResponse } from './ApplicationKeyResponse';
import { AuthenticationValidationResponse } from './AuthenticationValidationResponse';
import { AzureAccount } from './AzureAccount';
import { CancelDowntimesByScopeRequest } from './CancelDowntimesByScopeRequest';
import { CanceledDowntimesIds } from './CanceledDowntimesIds';
import { ChangeWidgetDefinition } from './ChangeWidgetDefinition';
import { ChangeWidgetDefinitionType } from './ChangeWidgetDefinitionType';
import { ChangeWidgetRequest } from './ChangeWidgetRequest';
import { CheckCanDeleteMonitorResponse } from './CheckCanDeleteMonitorResponse';
import { CheckCanDeleteMonitorResponseData } from './CheckCanDeleteMonitorResponseData';
import { CheckCanDeleteSLOResponse } from './CheckCanDeleteSLOResponse';
import { CheckCanDeleteSLOResponseData } from './CheckCanDeleteSLOResponseData';
import { CheckStatusWidgetDefinition } from './CheckStatusWidgetDefinition';
import { CheckStatusWidgetDefinitionType } from './CheckStatusWidgetDefinitionType';
import { ContentEncoding } from './ContentEncoding';
import { Creator } from './Creator';
import { Dashboard } from './Dashboard';
import { DashboardBulkActionData } from './DashboardBulkActionData';
import { DashboardBulkDeleteRequest } from './DashboardBulkDeleteRequest';
import { DashboardDeleteResponse } from './DashboardDeleteResponse';
import { DashboardLayoutType } from './DashboardLayoutType';
import { DashboardList } from './DashboardList';
import { DashboardListDeleteResponse } from './DashboardListDeleteResponse';
import { DashboardListListResponse } from './DashboardListListResponse';
import { DashboardReflowType } from './DashboardReflowType';
import { DashboardResourceType } from './DashboardResourceType';
import { DashboardRestoreRequest } from './DashboardRestoreRequest';
import { DashboardSummary } from './DashboardSummary';
import { DashboardSummaryDefinition } from './DashboardSummaryDefinition';
import { DashboardTemplateVariable } from './DashboardTemplateVariable';
import { DashboardTemplateVariablePreset } from './DashboardTemplateVariablePreset';
import { DashboardTemplateVariablePresetValue } from './DashboardTemplateVariablePresetValue';
import { DeletedMonitor } from './DeletedMonitor';
import { DistributionWidgetDefinition } from './DistributionWidgetDefinition';
import { DistributionWidgetDefinitionType } from './DistributionWidgetDefinitionType';
import { DistributionWidgetRequest } from './DistributionWidgetRequest';
import { DistributionWidgetXAxis } from './DistributionWidgetXAxis';
import { DistributionWidgetYAxis } from './DistributionWidgetYAxis';
import { Downtime } from './Downtime';
import { DowntimeChild } from './DowntimeChild';
import { DowntimeRecurrence } from './DowntimeRecurrence';
import { Event } from './Event';
import { EventAlertType } from './EventAlertType';
import { EventCreateRequest } from './EventCreateRequest';
import { EventCreateResponse } from './EventCreateResponse';
import { EventListResponse } from './EventListResponse';
import { EventPriority } from './EventPriority';
import { EventQueryDefinition } from './EventQueryDefinition';
import { EventResponse } from './EventResponse';
import { EventStreamWidgetDefinition } from './EventStreamWidgetDefinition';
import { EventStreamWidgetDefinitionType } from './EventStreamWidgetDefinitionType';
import { EventTimelineWidgetDefinition } from './EventTimelineWidgetDefinition';
import { EventTimelineWidgetDefinitionType } from './EventTimelineWidgetDefinitionType';
import { FormulaAndFunctionApmDependencyStatName } from './FormulaAndFunctionApmDependencyStatName';
import { FormulaAndFunctionApmDependencyStatsDataSource } from './FormulaAndFunctionApmDependencyStatsDataSource';
import { FormulaAndFunctionApmDependencyStatsQueryDefinition } from './FormulaAndFunctionApmDependencyStatsQueryDefinition';
import { FormulaAndFunctionApmResourceStatName } from './FormulaAndFunctionApmResourceStatName';
import { FormulaAndFunctionApmResourceStatsDataSource } from './FormulaAndFunctionApmResourceStatsDataSource';
import { FormulaAndFunctionApmResourceStatsQueryDefinition } from './FormulaAndFunctionApmResourceStatsQueryDefinition';
import { FormulaAndFunctionEventAggregation } from './FormulaAndFunctionEventAggregation';
import { FormulaAndFunctionEventQueryDefinition } from './FormulaAndFunctionEventQueryDefinition';
import { FormulaAndFunctionEventQueryDefinitionCompute } from './FormulaAndFunctionEventQueryDefinitionCompute';
import { FormulaAndFunctionEventQueryDefinitionSearch } from './FormulaAndFunctionEventQueryDefinitionSearch';
import { FormulaAndFunctionEventQueryGroupBy } from './FormulaAndFunctionEventQueryGroupBy';
import { FormulaAndFunctionEventQueryGroupBySort } from './FormulaAndFunctionEventQueryGroupBySort';
import { FormulaAndFunctionEventsDataSource } from './FormulaAndFunctionEventsDataSource';
import { FormulaAndFunctionMetricAggregation } from './FormulaAndFunctionMetricAggregation';
import { FormulaAndFunctionMetricDataSource } from './FormulaAndFunctionMetricDataSource';
import { FormulaAndFunctionMetricQueryDefinition } from './FormulaAndFunctionMetricQueryDefinition';
import { FormulaAndFunctionProcessQueryDataSource } from './FormulaAndFunctionProcessQueryDataSource';
import { FormulaAndFunctionProcessQueryDefinition } from './FormulaAndFunctionProcessQueryDefinition';
import { FormulaAndFunctionQueryDefinition } from './FormulaAndFunctionQueryDefinition';
import { FormulaAndFunctionResponseFormat } from './FormulaAndFunctionResponseFormat';
import { FreeTextWidgetDefinition } from './FreeTextWidgetDefinition';
import { FreeTextWidgetDefinitionType } from './FreeTextWidgetDefinitionType';
import { FunnelQuery } from './FunnelQuery';
import { FunnelRequestType } from './FunnelRequestType';
import { FunnelSource } from './FunnelSource';
import { FunnelWidgetDefinition } from './FunnelWidgetDefinition';
import { FunnelWidgetDefinitionType } from './FunnelWidgetDefinitionType';
import { FunnelWidgetRequest } from './FunnelWidgetRequest';
import { GCPAccount } from './GCPAccount';
import { GeomapWidgetDefinition } from './GeomapWidgetDefinition';
import { GeomapWidgetDefinitionStyle } from './GeomapWidgetDefinitionStyle';
import { GeomapWidgetDefinitionType } from './GeomapWidgetDefinitionType';
import { GeomapWidgetDefinitionView } from './GeomapWidgetDefinitionView';
import { GeomapWidgetRequest } from './GeomapWidgetRequest';
import { GraphSnapshot } from './GraphSnapshot';
import { GroupWidgetDefinition } from './GroupWidgetDefinition';
import { GroupWidgetDefinitionType } from './GroupWidgetDefinitionType';
import { HTTPLogError } from './HTTPLogError';
import { HTTPLogItem } from './HTTPLogItem';
import { HTTPMethod } from './HTTPMethod';
import { HeatMapWidgetDefinition } from './HeatMapWidgetDefinition';
import { HeatMapWidgetDefinitionType } from './HeatMapWidgetDefinitionType';
import { HeatMapWidgetRequest } from './HeatMapWidgetRequest';
import { Host } from './Host';
import { HostListResponse } from './HostListResponse';
import { HostMapRequest } from './HostMapRequest';
import { HostMapWidgetDefinition } from './HostMapWidgetDefinition';
import { HostMapWidgetDefinitionRequests } from './HostMapWidgetDefinitionRequests';
import { HostMapWidgetDefinitionStyle } from './HostMapWidgetDefinitionStyle';
import { HostMapWidgetDefinitionType } from './HostMapWidgetDefinitionType';
import { HostMeta } from './HostMeta';
import { HostMetrics } from './HostMetrics';
import { HostMuteResponse } from './HostMuteResponse';
import { HostMuteSettings } from './HostMuteSettings';
import { HostTags } from './HostTags';
import { HostTotals } from './HostTotals';
import { HourlyUsageAttributionBody } from './HourlyUsageAttributionBody';
import { HourlyUsageAttributionMetadata } from './HourlyUsageAttributionMetadata';
import { HourlyUsageAttributionPagination } from './HourlyUsageAttributionPagination';
import { HourlyUsageAttributionResponse } from './HourlyUsageAttributionResponse';
import { HourlyUsageAttributionUsageType } from './HourlyUsageAttributionUsageType';
import { IFrameWidgetDefinition } from './IFrameWidgetDefinition';
import { IFrameWidgetDefinitionType } from './IFrameWidgetDefinitionType';
import { IPPrefixesAPI } from './IPPrefixesAPI';
import { IPPrefixesAPM } from './IPPrefixesAPM';
import { IPPrefixesAgents } from './IPPrefixesAgents';
import { IPPrefixesLogs } from './IPPrefixesLogs';
import { IPPrefixesProcess } from './IPPrefixesProcess';
import { IPPrefixesSynthetics } from './IPPrefixesSynthetics';
import { IPPrefixesWebhooks } from './IPPrefixesWebhooks';
import { IPRanges } from './IPRanges';
import { IdpFormData } from './IdpFormData';
import { IdpResponse } from './IdpResponse';
import { ImageWidgetDefinition } from './ImageWidgetDefinition';
import { ImageWidgetDefinitionType } from './ImageWidgetDefinitionType';
import { IntakePayloadAccepted } from './IntakePayloadAccepted';
import { ListStreamColumn } from './ListStreamColumn';
import { ListStreamColumnWidth } from './ListStreamColumnWidth';
import { ListStreamQuery } from './ListStreamQuery';
import { ListStreamResponseFormat } from './ListStreamResponseFormat';
import { ListStreamSource } from './ListStreamSource';
import { ListStreamWidgetDefinition } from './ListStreamWidgetDefinition';
import { ListStreamWidgetDefinitionType } from './ListStreamWidgetDefinitionType';
import { ListStreamWidgetRequest } from './ListStreamWidgetRequest';
import { Log } from './Log';
import { LogContent } from './LogContent';
import { LogQueryDefinition } from './LogQueryDefinition';
import { LogQueryDefinitionGroupBy } from './LogQueryDefinitionGroupBy';
import { LogQueryDefinitionGroupBySort } from './LogQueryDefinitionGroupBySort';
import { LogQueryDefinitionSearch } from './LogQueryDefinitionSearch';
import { LogStreamWidgetDefinition } from './LogStreamWidgetDefinition';
import { LogStreamWidgetDefinitionType } from './LogStreamWidgetDefinitionType';
import { LogsAPIError } from './LogsAPIError';
import { LogsAPIErrorResponse } from './LogsAPIErrorResponse';
import { LogsArithmeticProcessor } from './LogsArithmeticProcessor';
import { LogsArithmeticProcessorType } from './LogsArithmeticProcessorType';
import { LogsAttributeRemapper } from './LogsAttributeRemapper';
import { LogsAttributeRemapperType } from './LogsAttributeRemapperType';
import { LogsByRetention } from './LogsByRetention';
import { LogsByRetentionMonthlyUsage } from './LogsByRetentionMonthlyUsage';
import { LogsByRetentionOrgUsage } from './LogsByRetentionOrgUsage';
import { LogsByRetentionOrgs } from './LogsByRetentionOrgs';
import { LogsCategoryProcessor } from './LogsCategoryProcessor';
import { LogsCategoryProcessorCategory } from './LogsCategoryProcessorCategory';
import { LogsCategoryProcessorType } from './LogsCategoryProcessorType';
import { LogsDateRemapper } from './LogsDateRemapper';
import { LogsDateRemapperType } from './LogsDateRemapperType';
import { LogsExclusion } from './LogsExclusion';
import { LogsExclusionFilter } from './LogsExclusionFilter';
import { LogsFilter } from './LogsFilter';
import { LogsGeoIPParser } from './LogsGeoIPParser';
import { LogsGeoIPParserType } from './LogsGeoIPParserType';
import { LogsGrokParser } from './LogsGrokParser';
import { LogsGrokParserRules } from './LogsGrokParserRules';
import { LogsGrokParserType } from './LogsGrokParserType';
import { LogsIndex } from './LogsIndex';
import { LogsIndexListResponse } from './LogsIndexListResponse';
import { LogsIndexUpdateRequest } from './LogsIndexUpdateRequest';
import { LogsIndexesOrder } from './LogsIndexesOrder';
import { LogsListRequest } from './LogsListRequest';
import { LogsListRequestTime } from './LogsListRequestTime';
import { LogsListResponse } from './LogsListResponse';
import { LogsLookupProcessor } from './LogsLookupProcessor';
import { LogsLookupProcessorType } from './LogsLookupProcessorType';
import { LogsMessageRemapper } from './LogsMessageRemapper';
import { LogsMessageRemapperType } from './LogsMessageRemapperType';
import { LogsPipeline } from './LogsPipeline';
import { LogsPipelineProcessor } from './LogsPipelineProcessor';
import { LogsPipelineProcessorType } from './LogsPipelineProcessorType';
import { LogsPipelinesOrder } from './LogsPipelinesOrder';
import { LogsProcessor } from './LogsProcessor';
import { LogsQueryCompute } from './LogsQueryCompute';
import { LogsRetentionAggSumUsage } from './LogsRetentionAggSumUsage';
import { LogsRetentionSumUsage } from './LogsRetentionSumUsage';
import { LogsServiceRemapper } from './LogsServiceRemapper';
import { LogsServiceRemapperType } from './LogsServiceRemapperType';
import { LogsSort } from './LogsSort';
import { LogsStatusRemapper } from './LogsStatusRemapper';
import { LogsStatusRemapperType } from './LogsStatusRemapperType';
import { LogsStringBuilderProcessor } from './LogsStringBuilderProcessor';
import { LogsStringBuilderProcessorType } from './LogsStringBuilderProcessorType';
import { LogsTraceRemapper } from './LogsTraceRemapper';
import { LogsTraceRemapperType } from './LogsTraceRemapperType';
import { LogsURLParser } from './LogsURLParser';
import { LogsURLParserType } from './LogsURLParserType';
import { LogsUserAgentParser } from './LogsUserAgentParser';
import { LogsUserAgentParserType } from './LogsUserAgentParserType';
import { MetricContentEncoding } from './MetricContentEncoding';
import { MetricMetadata } from './MetricMetadata';
import { MetricSearchResponse } from './MetricSearchResponse';
import { MetricSearchResponseResults } from './MetricSearchResponseResults';
import { MetricsListResponse } from './MetricsListResponse';
import { MetricsPayload } from './MetricsPayload';
import { MetricsQueryMetadata } from './MetricsQueryMetadata';
import { MetricsQueryResponse } from './MetricsQueryResponse';
import { MetricsQueryUnit } from './MetricsQueryUnit';
import { Monitor } from './Monitor';
import { MonitorDeviceID } from './MonitorDeviceID';
import { MonitorGroupSearchResponse } from './MonitorGroupSearchResponse';
import { MonitorGroupSearchResponseCounts } from './MonitorGroupSearchResponseCounts';
import { MonitorGroupSearchResult } from './MonitorGroupSearchResult';
import { MonitorOptions } from './MonitorOptions';
import { MonitorOptionsAggregation } from './MonitorOptionsAggregation';
import { MonitorOverallStates } from './MonitorOverallStates';
import { MonitorRenotifyStatusType } from './MonitorRenotifyStatusType';
import { MonitorSearchResponse } from './MonitorSearchResponse';
import { MonitorSearchResponseCounts } from './MonitorSearchResponseCounts';
import { MonitorSearchResponseMetadata } from './MonitorSearchResponseMetadata';
import { MonitorSearchResult } from './MonitorSearchResult';
import { MonitorSearchResultNotification } from './MonitorSearchResultNotification';
import { MonitorState } from './MonitorState';
import { MonitorStateGroup } from './MonitorStateGroup';
import { MonitorSummaryWidgetDefinition } from './MonitorSummaryWidgetDefinition';
import { MonitorSummaryWidgetDefinitionType } from './MonitorSummaryWidgetDefinitionType';
import { MonitorThresholdWindowOptions } from './MonitorThresholdWindowOptions';
import { MonitorThresholds } from './MonitorThresholds';
import { MonitorType } from './MonitorType';
import { MonitorUpdateRequest } from './MonitorUpdateRequest';
import { NoteWidgetDefinition } from './NoteWidgetDefinition';
import { NoteWidgetDefinitionType } from './NoteWidgetDefinitionType';
import { NotebookAbsoluteTime } from './NotebookAbsoluteTime';
import { NotebookAuthor } from './NotebookAuthor';
import { NotebookCellCreateRequest } from './NotebookCellCreateRequest';
import { NotebookCellCreateRequestAttributes } from './NotebookCellCreateRequestAttributes';
import { NotebookCellResourceType } from './NotebookCellResourceType';
import { NotebookCellResponse } from './NotebookCellResponse';
import { NotebookCellResponseAttributes } from './NotebookCellResponseAttributes';
import { NotebookCellTime } from './NotebookCellTime';
import { NotebookCellUpdateRequest } from './NotebookCellUpdateRequest';
import { NotebookCellUpdateRequestAttributes } from './NotebookCellUpdateRequestAttributes';
import { NotebookCreateData } from './NotebookCreateData';
import { NotebookCreateDataAttributes } from './NotebookCreateDataAttributes';
import { NotebookCreateRequest } from './NotebookCreateRequest';
import { NotebookDistributionCellAttributes } from './NotebookDistributionCellAttributes';
import { NotebookGlobalTime } from './NotebookGlobalTime';
import { NotebookGraphSize } from './NotebookGraphSize';
import { NotebookHeatMapCellAttributes } from './NotebookHeatMapCellAttributes';
import { NotebookLogStreamCellAttributes } from './NotebookLogStreamCellAttributes';
import { NotebookMarkdownCellAttributes } from './NotebookMarkdownCellAttributes';
import { NotebookMarkdownCellDefinition } from './NotebookMarkdownCellDefinition';
import { NotebookMarkdownCellDefinitionType } from './NotebookMarkdownCellDefinitionType';
import { NotebookMetadata } from './NotebookMetadata';
import { NotebookMetadataType } from './NotebookMetadataType';
import { NotebookRelativeTime } from './NotebookRelativeTime';
import { NotebookResourceType } from './NotebookResourceType';
import { NotebookResponse } from './NotebookResponse';
import { NotebookResponseData } from './NotebookResponseData';
import { NotebookResponseDataAttributes } from './NotebookResponseDataAttributes';
import { NotebookSplitBy } from './NotebookSplitBy';
import { NotebookStatus } from './NotebookStatus';
import { NotebookTimeseriesCellAttributes } from './NotebookTimeseriesCellAttributes';
import { NotebookToplistCellAttributes } from './NotebookToplistCellAttributes';
import { NotebookUpdateCell } from './NotebookUpdateCell';
import { NotebookUpdateData } from './NotebookUpdateData';
import { NotebookUpdateDataAttributes } from './NotebookUpdateDataAttributes';
import { NotebookUpdateRequest } from './NotebookUpdateRequest';
import { NotebooksResponse } from './NotebooksResponse';
import { NotebooksResponseData } from './NotebooksResponseData';
import { NotebooksResponseDataAttributes } from './NotebooksResponseDataAttributes';
import { NotebooksResponseMeta } from './NotebooksResponseMeta';
import { NotebooksResponsePage } from './NotebooksResponsePage';
import { Organization } from './Organization';
import { OrganizationBilling } from './OrganizationBilling';
import { OrganizationCreateBody } from './OrganizationCreateBody';
import { OrganizationCreateResponse } from './OrganizationCreateResponse';
import { OrganizationListResponse } from './OrganizationListResponse';
import { OrganizationResponse } from './OrganizationResponse';
import { OrganizationSettings } from './OrganizationSettings';
import { OrganizationSettingsSaml } from './OrganizationSettingsSaml';
import { OrganizationSettingsSamlAutocreateUsersDomains } from './OrganizationSettingsSamlAutocreateUsersDomains';
import { OrganizationSettingsSamlIdpInitiatedLogin } from './OrganizationSettingsSamlIdpInitiatedLogin';
import { OrganizationSettingsSamlStrictMode } from './OrganizationSettingsSamlStrictMode';
import { OrganizationSubscription } from './OrganizationSubscription';
import { PagerDutyService } from './PagerDutyService';
import { PagerDutyServiceKey } from './PagerDutyServiceKey';
import { PagerDutyServiceName } from './PagerDutyServiceName';
import { Pagination } from './Pagination';
import { ProcessQueryDefinition } from './ProcessQueryDefinition';
import { QuerySortOrder } from './QuerySortOrder';
import { QueryValueWidgetDefinition } from './QueryValueWidgetDefinition';
import { QueryValueWidgetDefinitionType } from './QueryValueWidgetDefinitionType';
import { QueryValueWidgetRequest } from './QueryValueWidgetRequest';
import { ResponseMetaAttributes } from './ResponseMetaAttributes';
import { SLOBulkDeleteError } from './SLOBulkDeleteError';
import { SLOBulkDeleteResponse } from './SLOBulkDeleteResponse';
import { SLOBulkDeleteResponseData } from './SLOBulkDeleteResponseData';
import { SLOCorrection } from './SLOCorrection';
import { SLOCorrectionCategory } from './SLOCorrectionCategory';
import { SLOCorrectionCreateData } from './SLOCorrectionCreateData';
import { SLOCorrectionCreateRequest } from './SLOCorrectionCreateRequest';
import { SLOCorrectionCreateRequestAttributes } from './SLOCorrectionCreateRequestAttributes';
import { SLOCorrectionListResponse } from './SLOCorrectionListResponse';
import { SLOCorrectionResponse } from './SLOCorrectionResponse';
import { SLOCorrectionResponseAttributes } from './SLOCorrectionResponseAttributes';
import { SLOCorrectionResponseAttributesModifier } from './SLOCorrectionResponseAttributesModifier';
import { SLOCorrectionType } from './SLOCorrectionType';
import { SLOCorrectionUpdateData } from './SLOCorrectionUpdateData';
import { SLOCorrectionUpdateRequest } from './SLOCorrectionUpdateRequest';
import { SLOCorrectionUpdateRequestAttributes } from './SLOCorrectionUpdateRequestAttributes';
import { SLODeleteResponse } from './SLODeleteResponse';
import { SLOErrorTimeframe } from './SLOErrorTimeframe';
import { SLOHistoryMetrics } from './SLOHistoryMetrics';
import { SLOHistoryMetricsSeries } from './SLOHistoryMetricsSeries';
import { SLOHistoryMetricsSeriesMetadata } from './SLOHistoryMetricsSeriesMetadata';
import { SLOHistoryMetricsSeriesMetadataUnit } from './SLOHistoryMetricsSeriesMetadataUnit';
import { SLOHistoryMonitor } from './SLOHistoryMonitor';
import { SLOHistoryResponse } from './SLOHistoryResponse';
import { SLOHistoryResponseData } from './SLOHistoryResponseData';
import { SLOHistoryResponseError } from './SLOHistoryResponseError';
import { SLOHistoryResponseErrorWithType } from './SLOHistoryResponseErrorWithType';
import { SLOHistorySLIData } from './SLOHistorySLIData';
import { SLOListResponse } from './SLOListResponse';
import { SLOListResponseMetadata } from './SLOListResponseMetadata';
import { SLOListResponseMetadataPage } from './SLOListResponseMetadataPage';
import { SLOResponse } from './SLOResponse';
import { SLOResponseData } from './SLOResponseData';
import { SLOThreshold } from './SLOThreshold';
import { SLOTimeframe } from './SLOTimeframe';
import { SLOType } from './SLOType';
import { SLOTypeNumeric } from './SLOTypeNumeric';
import { SLOWidgetDefinition } from './SLOWidgetDefinition';
import { SLOWidgetDefinitionType } from './SLOWidgetDefinitionType';
import { ScatterPlotRequest } from './ScatterPlotRequest';
import { ScatterPlotWidgetDefinition } from './ScatterPlotWidgetDefinition';
import { ScatterPlotWidgetDefinitionRequests } from './ScatterPlotWidgetDefinitionRequests';
import { ScatterPlotWidgetDefinitionType } from './ScatterPlotWidgetDefinitionType';
import { ScatterplotDimension } from './ScatterplotDimension';
import { ScatterplotTableRequest } from './ScatterplotTableRequest';
import { ScatterplotWidgetAggregator } from './ScatterplotWidgetAggregator';
import { ScatterplotWidgetFormula } from './ScatterplotWidgetFormula';
import { Series } from './Series';
import { ServiceCheck } from './ServiceCheck';
import { ServiceCheckStatus } from './ServiceCheckStatus';
import { ServiceLevelObjective } from './ServiceLevelObjective';
import { ServiceLevelObjectiveQuery } from './ServiceLevelObjectiveQuery';
import { ServiceLevelObjectiveRequest } from './ServiceLevelObjectiveRequest';
import { ServiceMapWidgetDefinition } from './ServiceMapWidgetDefinition';
import { ServiceMapWidgetDefinitionType } from './ServiceMapWidgetDefinitionType';
import { ServiceSummaryWidgetDefinition } from './ServiceSummaryWidgetDefinition';
import { ServiceSummaryWidgetDefinitionType } from './ServiceSummaryWidgetDefinitionType';
import { SlackIntegrationChannel } from './SlackIntegrationChannel';
import { SlackIntegrationChannelDisplay } from './SlackIntegrationChannelDisplay';
import { SunburstWidgetDefinition } from './SunburstWidgetDefinition';
import { SunburstWidgetDefinitionType } from './SunburstWidgetDefinitionType';
import { SunburstWidgetLegend } from './SunburstWidgetLegend';
import { SunburstWidgetLegendInlineAutomatic } from './SunburstWidgetLegendInlineAutomatic';
import { SunburstWidgetLegendInlineAutomaticType } from './SunburstWidgetLegendInlineAutomaticType';
import { SunburstWidgetLegendTable } from './SunburstWidgetLegendTable';
import { SunburstWidgetLegendTableType } from './SunburstWidgetLegendTableType';
import { SunburstWidgetRequest } from './SunburstWidgetRequest';
import { SyntheticsAPIStep } from './SyntheticsAPIStep';
import { SyntheticsAPIStepSubtype } from './SyntheticsAPIStepSubtype';
import { SyntheticsAPITest } from './SyntheticsAPITest';
import { SyntheticsAPITestConfig } from './SyntheticsAPITestConfig';
import { SyntheticsAPITestResultData } from './SyntheticsAPITestResultData';
import { SyntheticsAPITestResultFull } from './SyntheticsAPITestResultFull';
import { SyntheticsAPITestResultFullCheck } from './SyntheticsAPITestResultFullCheck';
import { SyntheticsAPITestResultShort } from './SyntheticsAPITestResultShort';
import { SyntheticsAPITestResultShortResult } from './SyntheticsAPITestResultShortResult';
import { SyntheticsAPITestType } from './SyntheticsAPITestType';
import { SyntheticsAssertion } from './SyntheticsAssertion';
import { SyntheticsAssertionJSONPathOperator } from './SyntheticsAssertionJSONPathOperator';
import { SyntheticsAssertionJSONPathTarget } from './SyntheticsAssertionJSONPathTarget';
import { SyntheticsAssertionJSONPathTargetTarget } from './SyntheticsAssertionJSONPathTargetTarget';
import { SyntheticsAssertionOperator } from './SyntheticsAssertionOperator';
import { SyntheticsAssertionTarget } from './SyntheticsAssertionTarget';
import { SyntheticsAssertionType } from './SyntheticsAssertionType';
import { SyntheticsBasicAuth } from './SyntheticsBasicAuth';
import { SyntheticsBatchDetails } from './SyntheticsBatchDetails';
import { SyntheticsBatchDetailsData } from './SyntheticsBatchDetailsData';
import { SyntheticsBatchResult } from './SyntheticsBatchResult';
import { SyntheticsBrowserError } from './SyntheticsBrowserError';
import { SyntheticsBrowserErrorType } from './SyntheticsBrowserErrorType';
import { SyntheticsBrowserTest } from './SyntheticsBrowserTest';
import { SyntheticsBrowserTestConfig } from './SyntheticsBrowserTestConfig';
import { SyntheticsBrowserTestResultData } from './SyntheticsBrowserTestResultData';
import { SyntheticsBrowserTestResultFull } from './SyntheticsBrowserTestResultFull';
import { SyntheticsBrowserTestResultFullCheck } from './SyntheticsBrowserTestResultFullCheck';
import { SyntheticsBrowserTestResultShort } from './SyntheticsBrowserTestResultShort';
import { SyntheticsBrowserTestResultShortResult } from './SyntheticsBrowserTestResultShortResult';
import { SyntheticsBrowserTestType } from './SyntheticsBrowserTestType';
import { SyntheticsBrowserVariable } from './SyntheticsBrowserVariable';
import { SyntheticsBrowserVariableType } from './SyntheticsBrowserVariableType';
import { SyntheticsCIBatchMetadata } from './SyntheticsCIBatchMetadata';
import { SyntheticsCIBatchMetadataCI } from './SyntheticsCIBatchMetadataCI';
import { SyntheticsCIBatchMetadataGit } from './SyntheticsCIBatchMetadataGit';
import { SyntheticsCIBatchMetadataPipeline } from './SyntheticsCIBatchMetadataPipeline';
import { SyntheticsCIBatchMetadataProvider } from './SyntheticsCIBatchMetadataProvider';
import { SyntheticsCITest } from './SyntheticsCITest';
import { SyntheticsCITestBody } from './SyntheticsCITestBody';
import { SyntheticsCheckType } from './SyntheticsCheckType';
import { SyntheticsConfigVariable } from './SyntheticsConfigVariable';
import { SyntheticsConfigVariableType } from './SyntheticsConfigVariableType';
import { SyntheticsCoreWebVitals } from './SyntheticsCoreWebVitals';
import { SyntheticsDeleteTestsPayload } from './SyntheticsDeleteTestsPayload';
import { SyntheticsDeleteTestsResponse } from './SyntheticsDeleteTestsResponse';
import { SyntheticsDeletedTest } from './SyntheticsDeletedTest';
import { SyntheticsDevice } from './SyntheticsDevice';
import { SyntheticsDeviceID } from './SyntheticsDeviceID';
import { SyntheticsErrorCode } from './SyntheticsErrorCode';
import { SyntheticsGetAPITestLatestResultsResponse } from './SyntheticsGetAPITestLatestResultsResponse';
import { SyntheticsGetBrowserTestLatestResultsResponse } from './SyntheticsGetBrowserTestLatestResultsResponse';
import { SyntheticsGlobalVariable } from './SyntheticsGlobalVariable';
import { SyntheticsGlobalVariableAttributes } from './SyntheticsGlobalVariableAttributes';
import { SyntheticsGlobalVariableParseTestOptions } from './SyntheticsGlobalVariableParseTestOptions';
import { SyntheticsGlobalVariableParseTestOptionsType } from './SyntheticsGlobalVariableParseTestOptionsType';
import { SyntheticsGlobalVariableParserType } from './SyntheticsGlobalVariableParserType';
import { SyntheticsGlobalVariableValue } from './SyntheticsGlobalVariableValue';
import { SyntheticsListGlobalVariablesResponse } from './SyntheticsListGlobalVariablesResponse';
import { SyntheticsListTestsResponse } from './SyntheticsListTestsResponse';
import { SyntheticsLocation } from './SyntheticsLocation';
import { SyntheticsLocations } from './SyntheticsLocations';
import { SyntheticsParsingOptions } from './SyntheticsParsingOptions';
import { SyntheticsPlayingTab } from './SyntheticsPlayingTab';
import { SyntheticsPrivateLocation } from './SyntheticsPrivateLocation';
import { SyntheticsPrivateLocationCreationResponse } from './SyntheticsPrivateLocationCreationResponse';
import { SyntheticsPrivateLocationCreationResponseResultEncryption } from './SyntheticsPrivateLocationCreationResponseResultEncryption';
import { SyntheticsPrivateLocationSecrets } from './SyntheticsPrivateLocationSecrets';
import { SyntheticsPrivateLocationSecretsAuthentication } from './SyntheticsPrivateLocationSecretsAuthentication';
import { SyntheticsPrivateLocationSecretsConfigDecryption } from './SyntheticsPrivateLocationSecretsConfigDecryption';
import { SyntheticsSSLCertificate } from './SyntheticsSSLCertificate';
import { SyntheticsSSLCertificateIssuer } from './SyntheticsSSLCertificateIssuer';
import { SyntheticsSSLCertificateSubject } from './SyntheticsSSLCertificateSubject';
import { SyntheticsStatus } from './SyntheticsStatus';
import { SyntheticsStep } from './SyntheticsStep';
import { SyntheticsStepDetail } from './SyntheticsStepDetail';
import { SyntheticsStepDetailWarning } from './SyntheticsStepDetailWarning';
import { SyntheticsStepType } from './SyntheticsStepType';
import { SyntheticsTestConfig } from './SyntheticsTestConfig';
import { SyntheticsTestDetails } from './SyntheticsTestDetails';
import { SyntheticsTestDetailsSubType } from './SyntheticsTestDetailsSubType';
import { SyntheticsTestDetailsType } from './SyntheticsTestDetailsType';
import { SyntheticsTestExecutionRule } from './SyntheticsTestExecutionRule';
import { SyntheticsTestMonitorStatus } from './SyntheticsTestMonitorStatus';
import { SyntheticsTestOptions } from './SyntheticsTestOptions';
import { SyntheticsTestOptionsMonitorOptions } from './SyntheticsTestOptionsMonitorOptions';
import { SyntheticsTestOptionsRetry } from './SyntheticsTestOptionsRetry';
import { SyntheticsTestPauseStatus } from './SyntheticsTestPauseStatus';
import { SyntheticsTestProcessStatus } from './SyntheticsTestProcessStatus';
import { SyntheticsTestRequest } from './SyntheticsTestRequest';
import { SyntheticsTestRequestCertificate } from './SyntheticsTestRequestCertificate';
import { SyntheticsTestRequestCertificateItem } from './SyntheticsTestRequestCertificateItem';
import { SyntheticsTiming } from './SyntheticsTiming';
import { SyntheticsTriggerBody } from './SyntheticsTriggerBody';
import { SyntheticsTriggerCITestLocation } from './SyntheticsTriggerCITestLocation';
import { SyntheticsTriggerCITestRunResult } from './SyntheticsTriggerCITestRunResult';
import { SyntheticsTriggerCITestsResponse } from './SyntheticsTriggerCITestsResponse';
import { SyntheticsTriggerTest } from './SyntheticsTriggerTest';
import { SyntheticsUpdateTestPauseStatusPayload } from './SyntheticsUpdateTestPauseStatusPayload';
import { SyntheticsVariableParser } from './SyntheticsVariableParser';
import { SyntheticsWarningType } from './SyntheticsWarningType';
import { TableWidgetCellDisplayMode } from './TableWidgetCellDisplayMode';
import { TableWidgetDefinition } from './TableWidgetDefinition';
import { TableWidgetDefinitionType } from './TableWidgetDefinitionType';
import { TableWidgetHasSearchBar } from './TableWidgetHasSearchBar';
import { TableWidgetRequest } from './TableWidgetRequest';
import { TagToHosts } from './TagToHosts';
import { TargetFormatType } from './TargetFormatType';
import { TimeseriesWidgetDefinition } from './TimeseriesWidgetDefinition';
import { TimeseriesWidgetDefinitionType } from './TimeseriesWidgetDefinitionType';
import { TimeseriesWidgetExpressionAlias } from './TimeseriesWidgetExpressionAlias';
import { TimeseriesWidgetLegendColumn } from './TimeseriesWidgetLegendColumn';
import { TimeseriesWidgetLegendLayout } from './TimeseriesWidgetLegendLayout';
import { TimeseriesWidgetRequest } from './TimeseriesWidgetRequest';
import { ToplistWidgetDefinition } from './ToplistWidgetDefinition';
import { ToplistWidgetDefinitionType } from './ToplistWidgetDefinitionType';
import { ToplistWidgetRequest } from './ToplistWidgetRequest';
import { TreeMapColorBy } from './TreeMapColorBy';
import { TreeMapGroupBy } from './TreeMapGroupBy';
import { TreeMapSizeBy } from './TreeMapSizeBy';
import { TreeMapWidgetDefinition } from './TreeMapWidgetDefinition';
import { TreeMapWidgetDefinitionType } from './TreeMapWidgetDefinitionType';
import { TreeMapWidgetRequest } from './TreeMapWidgetRequest';
import { UsageAnalyzedLogsHour } from './UsageAnalyzedLogsHour';
import { UsageAnalyzedLogsResponse } from './UsageAnalyzedLogsResponse';
import { UsageAttributionAggregatesBody } from './UsageAttributionAggregatesBody';
import { UsageAttributionBody } from './UsageAttributionBody';
import { UsageAttributionMetadata } from './UsageAttributionMetadata';
import { UsageAttributionPagination } from './UsageAttributionPagination';
import { UsageAttributionResponse } from './UsageAttributionResponse';
import { UsageAttributionSort } from './UsageAttributionSort';
import { UsageAttributionSupportedMetrics } from './UsageAttributionSupportedMetrics';
import { UsageAttributionValues } from './UsageAttributionValues';
import { UsageAuditLogsHour } from './UsageAuditLogsHour';
import { UsageAuditLogsResponse } from './UsageAuditLogsResponse';
import { UsageBillableSummaryBody } from './UsageBillableSummaryBody';
import { UsageBillableSummaryHour } from './UsageBillableSummaryHour';
import { UsageBillableSummaryKeys } from './UsageBillableSummaryKeys';
import { UsageBillableSummaryResponse } from './UsageBillableSummaryResponse';
import { UsageCWSHour } from './UsageCWSHour';
import { UsageCWSResponse } from './UsageCWSResponse';
import { UsageCloudSecurityPostureManagementHour } from './UsageCloudSecurityPostureManagementHour';
import { UsageCloudSecurityPostureManagementResponse } from './UsageCloudSecurityPostureManagementResponse';
import { UsageCustomReportsAttributes } from './UsageCustomReportsAttributes';
import { UsageCustomReportsData } from './UsageCustomReportsData';
import { UsageCustomReportsMeta } from './UsageCustomReportsMeta';
import { UsageCustomReportsPage } from './UsageCustomReportsPage';
import { UsageCustomReportsResponse } from './UsageCustomReportsResponse';
import { UsageDBMHour } from './UsageDBMHour';
import { UsageDBMResponse } from './UsageDBMResponse';
import { UsageFargateHour } from './UsageFargateHour';
import { UsageFargateResponse } from './UsageFargateResponse';
import { UsageHostHour } from './UsageHostHour';
import { UsageHostsResponse } from './UsageHostsResponse';
import { UsageIncidentManagementHour } from './UsageIncidentManagementHour';
import { UsageIncidentManagementResponse } from './UsageIncidentManagementResponse';
import { UsageIndexedSpansHour } from './UsageIndexedSpansHour';
import { UsageIndexedSpansResponse } from './UsageIndexedSpansResponse';
import { UsageIngestedSpansHour } from './UsageIngestedSpansHour';
import { UsageIngestedSpansResponse } from './UsageIngestedSpansResponse';
import { UsageIoTHour } from './UsageIoTHour';
import { UsageIoTResponse } from './UsageIoTResponse';
import { UsageLambdaHour } from './UsageLambdaHour';
import { UsageLambdaResponse } from './UsageLambdaResponse';
import { UsageLogsByIndexHour } from './UsageLogsByIndexHour';
import { UsageLogsByIndexResponse } from './UsageLogsByIndexResponse';
import { UsageLogsByRetentionHour } from './UsageLogsByRetentionHour';
import { UsageLogsByRetentionResponse } from './UsageLogsByRetentionResponse';
import { UsageLogsHour } from './UsageLogsHour';
import { UsageLogsResponse } from './UsageLogsResponse';
import { UsageMetricCategory } from './UsageMetricCategory';
import { UsageNetworkFlowsHour } from './UsageNetworkFlowsHour';
import { UsageNetworkFlowsResponse } from './UsageNetworkFlowsResponse';
import { UsageNetworkHostsHour } from './UsageNetworkHostsHour';
import { UsageNetworkHostsResponse } from './UsageNetworkHostsResponse';
import { UsageProfilingHour } from './UsageProfilingHour';
import { UsageProfilingResponse } from './UsageProfilingResponse';
import { UsageReportsType } from './UsageReportsType';
import { UsageRumSessionsHour } from './UsageRumSessionsHour';
import { UsageRumSessionsResponse } from './UsageRumSessionsResponse';
import { UsageRumUnitsHour } from './UsageRumUnitsHour';
import { UsageRumUnitsResponse } from './UsageRumUnitsResponse';
import { UsageSDSHour } from './UsageSDSHour';
import { UsageSDSResponse } from './UsageSDSResponse';
import { UsageSNMPHour } from './UsageSNMPHour';
import { UsageSNMPResponse } from './UsageSNMPResponse';
import { UsageSort } from './UsageSort';
import { UsageSortDirection } from './UsageSortDirection';
import { UsageSpecifiedCustomReportsAttributes } from './UsageSpecifiedCustomReportsAttributes';
import { UsageSpecifiedCustomReportsData } from './UsageSpecifiedCustomReportsData';
import { UsageSpecifiedCustomReportsMeta } from './UsageSpecifiedCustomReportsMeta';
import { UsageSpecifiedCustomReportsPage } from './UsageSpecifiedCustomReportsPage';
import { UsageSpecifiedCustomReportsResponse } from './UsageSpecifiedCustomReportsResponse';
import { UsageSummaryDate } from './UsageSummaryDate';
import { UsageSummaryDateOrg } from './UsageSummaryDateOrg';
import { UsageSummaryResponse } from './UsageSummaryResponse';
import { UsageSyntheticsAPIHour } from './UsageSyntheticsAPIHour';
import { UsageSyntheticsAPIResponse } from './UsageSyntheticsAPIResponse';
import { UsageSyntheticsBrowserHour } from './UsageSyntheticsBrowserHour';
import { UsageSyntheticsBrowserResponse } from './UsageSyntheticsBrowserResponse';
import { UsageSyntheticsHour } from './UsageSyntheticsHour';
import { UsageSyntheticsResponse } from './UsageSyntheticsResponse';
import { UsageTimeseriesHour } from './UsageTimeseriesHour';
import { UsageTimeseriesResponse } from './UsageTimeseriesResponse';
import { UsageTopAvgMetricsHour } from './UsageTopAvgMetricsHour';
import { UsageTopAvgMetricsMetadata } from './UsageTopAvgMetricsMetadata';
import { UsageTopAvgMetricsResponse } from './UsageTopAvgMetricsResponse';
import { User } from './User';
import { UserDisableResponse } from './UserDisableResponse';
import { UserListResponse } from './UserListResponse';
import { UserResponse } from './UserResponse';
import { WebhooksIntegration } from './WebhooksIntegration';
import { WebhooksIntegrationCustomVariable } from './WebhooksIntegrationCustomVariable';
import { WebhooksIntegrationCustomVariableResponse } from './WebhooksIntegrationCustomVariableResponse';
import { WebhooksIntegrationCustomVariableUpdateRequest } from './WebhooksIntegrationCustomVariableUpdateRequest';
import { WebhooksIntegrationEncoding } from './WebhooksIntegrationEncoding';
import { WebhooksIntegrationUpdateRequest } from './WebhooksIntegrationUpdateRequest';
import { Widget } from './Widget';
import { WidgetAggregator } from './WidgetAggregator';
import { WidgetAxis } from './WidgetAxis';
import { WidgetChangeType } from './WidgetChangeType';
import { WidgetColorPreference } from './WidgetColorPreference';
import { WidgetComparator } from './WidgetComparator';
import { WidgetCompareTo } from './WidgetCompareTo';
import { WidgetConditionalFormat } from './WidgetConditionalFormat';
import { WidgetCustomLink } from './WidgetCustomLink';
import { WidgetDefinition } from './WidgetDefinition';
import { WidgetDisplayType } from './WidgetDisplayType';
import { WidgetEvent } from './WidgetEvent';
import { WidgetEventSize } from './WidgetEventSize';
import { WidgetFieldSort } from './WidgetFieldSort';
import { WidgetFormula } from './WidgetFormula';
import { WidgetFormulaLimit } from './WidgetFormulaLimit';
import { WidgetGrouping } from './WidgetGrouping';
import { WidgetHorizontalAlign } from './WidgetHorizontalAlign';
import { WidgetImageSizing } from './WidgetImageSizing';
import { WidgetLayout } from './WidgetLayout';
import { WidgetLayoutType } from './WidgetLayoutType';
import { WidgetLineType } from './WidgetLineType';
import { WidgetLineWidth } from './WidgetLineWidth';
import { WidgetLiveSpan } from './WidgetLiveSpan';
import { WidgetMargin } from './WidgetMargin';
import { WidgetMarker } from './WidgetMarker';
import { WidgetMessageDisplay } from './WidgetMessageDisplay';
import { WidgetMonitorSummaryDisplayFormat } from './WidgetMonitorSummaryDisplayFormat';
import { WidgetMonitorSummarySort } from './WidgetMonitorSummarySort';
import { WidgetNodeType } from './WidgetNodeType';
import { WidgetOrderBy } from './WidgetOrderBy';
import { WidgetPalette } from './WidgetPalette';
import { WidgetRequestStyle } from './WidgetRequestStyle';
import { WidgetServiceSummaryDisplayFormat } from './WidgetServiceSummaryDisplayFormat';
import { WidgetSizeFormat } from './WidgetSizeFormat';
import { WidgetSort } from './WidgetSort';
import { WidgetStyle } from './WidgetStyle';
import { WidgetSummaryType } from './WidgetSummaryType';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTickEdge } from './WidgetTickEdge';
import { WidgetTime } from './WidgetTime';
import { WidgetTimeWindows } from './WidgetTimeWindows';
import { WidgetVerticalAlign } from './WidgetVerticalAlign';
import { WidgetViewMode } from './WidgetViewMode';
import { WidgetVizType } from './WidgetVizType';
import { logger } from "../../../index";

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "text/json": 100,
  "application/octet-stream": 0
}

const enumsMap: {[key: string]: any[]} = {
    "AWSNamespace": ['elb', 'application_elb', 'sqs', 'rds', 'custom', 'network_elb', 'lambda'],
    "AccessRole": ['st', 'adm', 'ro', 'ERROR'],
    "AlertGraphWidgetDefinitionType": ['alert_graph'],
    "AlertValueWidgetDefinitionType": ['alert_value'],
    "ApmStatsQueryRowType": ['service', 'resource', 'span'],
    "ChangeWidgetDefinitionType": ['change'],
    "CheckStatusWidgetDefinitionType": ['check_status'],
    "ContentEncoding": ['gzip', 'deflate'],
    "DashboardLayoutType": ['ordered', 'free'],
    "DashboardReflowType": ['auto', 'fixed'],
    "DashboardResourceType": ['dashboard'],
    "DistributionWidgetDefinitionType": ['distribution'],
    "EventAlertType": ['error', 'warning', 'info', 'success', 'user_update', 'recommendation', 'snapshot'],
    "EventPriority": ['normal', 'low'],
    "EventStreamWidgetDefinitionType": ['event_stream'],
    "EventTimelineWidgetDefinitionType": ['event_timeline'],
    "FormulaAndFunctionApmDependencyStatName": ['avg_duration', 'avg_root_duration', 'avg_spans_per_trace', 'error_rate', 'pct_exec_time', 'pct_of_traces', 'total_traces_count'],
    "FormulaAndFunctionApmDependencyStatsDataSource": ['apm_dependency_stats'],
    "FormulaAndFunctionApmResourceStatName": ['errors', 'error_rate', 'hits', 'latency_avg', 'latency_max', 'latency_p50', 'latency_p75', 'latency_p90', 'latency_p95', 'latency_p99'],
    "FormulaAndFunctionApmResourceStatsDataSource": ['apm_resource_stats'],
    "FormulaAndFunctionEventAggregation": ['count', 'cardinality', 'median', 'pc75', 'pc90', 'pc95', 'pc98', 'pc99', 'sum', 'min', 'max', 'avg'],
    "FormulaAndFunctionEventsDataSource": ['logs', 'spans', 'network', 'rum', 'security_signals', 'profiles', 'audit', 'events'],
    "FormulaAndFunctionMetricAggregation": ['avg', 'min', 'max', 'sum', 'last', 'area', 'l2norm', 'percentile'],
    "FormulaAndFunctionMetricDataSource": ['metrics'],
    "FormulaAndFunctionProcessQueryDataSource": ['process', 'container'],
    "FormulaAndFunctionResponseFormat": ['timeseries', 'scalar'],
    "FreeTextWidgetDefinitionType": ['free_text'],
    "FunnelRequestType": ['funnel'],
    "FunnelSource": ['rum'],
    "FunnelWidgetDefinitionType": ['funnel'],
    "GeomapWidgetDefinitionType": ['geomap'],
    "GroupWidgetDefinitionType": ['group'],
    "HTTPMethod": ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'],
    "HeatMapWidgetDefinitionType": ['heatmap'],
    "HostMapWidgetDefinitionType": ['hostmap'],
    "HourlyUsageAttributionUsageType": ['api_usage', 'apm_host_usage', 'browser_usage', 'container_usage', 'custom_timeseries_usage', 'fargate_usage', 'functions_usage', 'indexed_logs_usage', 'infra_host_usage', 'invocations_usage', 'npm_host_usage', 'profiled_container_usage', 'profiled_host_usage', 'snmp_usage'],
    "IFrameWidgetDefinitionType": ['iframe'],
    "ImageWidgetDefinitionType": ['image'],
    "ListStreamColumnWidth": ['auto', 'compact', 'full'],
    "ListStreamResponseFormat": ['event_list'],
    "ListStreamSource": ['issue_stream', 'logs_stream', 'audit_stream'],
    "ListStreamWidgetDefinitionType": ['list_stream'],
    "LogStreamWidgetDefinitionType": ['log_stream'],
    "LogsArithmeticProcessorType": ['arithmetic-processor'],
    "LogsAttributeRemapperType": ['attribute-remapper'],
    "LogsCategoryProcessorType": ['category-processor'],
    "LogsDateRemapperType": ['date-remapper'],
    "LogsGeoIPParserType": ['geo-ip-parser'],
    "LogsGrokParserType": ['grok-parser'],
    "LogsLookupProcessorType": ['lookup-processor'],
    "LogsMessageRemapperType": ['message-remapper'],
    "LogsPipelineProcessorType": ['pipeline'],
    "LogsServiceRemapperType": ['service-remapper'],
    "LogsSort": ['asc', 'desc'],
    "LogsStatusRemapperType": ['status-remapper'],
    "LogsStringBuilderProcessorType": ['string-builder-processor'],
    "LogsTraceRemapperType": ['trace-id-remapper'],
    "LogsURLParserType": ['url-parser'],
    "LogsUserAgentParserType": ['user-agent-parser'],
    "MetricContentEncoding": ['deflate'],
    "MonitorDeviceID": ['laptop_large', 'tablet', 'mobile_small', 'chrome.laptop_large', 'chrome.tablet', 'chrome.mobile_small', 'firefox.laptop_large', 'firefox.tablet', 'firefox.mobile_small'],
    "MonitorOverallStates": ['Alert', 'Ignored', 'No Data', 'OK', 'Skipped', 'Unknown', 'Warn'],
    "MonitorRenotifyStatusType": ['alert', 'warn', 'no data'],
    "MonitorSummaryWidgetDefinitionType": ['manage_status'],
    "MonitorType": ['composite', 'event alert', 'log alert', 'metric alert', 'process alert', 'query alert', 'rum alert', 'service check', 'synthetics alert', 'trace-analytics alert', 'slo alert', 'event-v2 alert', 'audit alert', 'ci-pipelines alert'],
    "NoteWidgetDefinitionType": ['note'],
    "NotebookCellResourceType": ['notebook_cells'],
    "NotebookGraphSize": ['xs', 's', 'm', 'l', 'xl'],
    "NotebookMarkdownCellDefinitionType": ['markdown'],
    "NotebookMetadataType": ['postmortem', 'runbook', 'investigation', 'documentation', 'report'],
    "NotebookResourceType": ['notebooks'],
    "NotebookStatus": ['published'],
    "QuerySortOrder": ['asc', 'desc'],
    "QueryValueWidgetDefinitionType": ['query_value'],
    "SLOCorrectionCategory": ['Scheduled Maintenance', 'Outside Business Hours', 'Deployment', 'Other'],
    "SLOCorrectionType": ['correction'],
    "SLOErrorTimeframe": ['7d', '30d', '90d', 'all'],
    "SLOTimeframe": ['7d', '30d', '90d', 'custom'],
    "SLOType": ['metric', 'monitor'],
    "SLOTypeNumeric": [0, 1],
    "SLOWidgetDefinitionType": ['slo'],
    "ScatterPlotWidgetDefinitionType": ['scatterplot'],
    "ScatterplotDimension": ['x', 'y', 'radius', 'color'],
    "ScatterplotWidgetAggregator": ['avg', 'last', 'max', 'min', 'sum'],
    "ServiceCheckStatus": [0, 1, 2, 3],
    "ServiceMapWidgetDefinitionType": ['servicemap'],
    "ServiceSummaryWidgetDefinitionType": ['trace_service'],
    "SunburstWidgetDefinitionType": ['sunburst'],
    "SunburstWidgetLegendInlineAutomaticType": ['inline', 'automatic'],
    "SunburstWidgetLegendTableType": ['table', 'none'],
    "SyntheticsAPIStepSubtype": ['http'],
    "SyntheticsAPITestType": ['api'],
    "SyntheticsAssertionJSONPathOperator": ['validatesJSONPath'],
    "SyntheticsAssertionOperator": ['contains', 'doesNotContain', 'is', 'isNot', 'lessThan', 'lessThanOrEqual', 'moreThan', 'moreThanOrEqual', 'matches', 'doesNotMatch', 'validates', 'isInMoreThan', 'isInLessThan'],
    "SyntheticsAssertionType": ['body', 'header', 'statusCode', 'certificate', 'responseTime', 'property', 'recordEvery', 'recordSome', 'tlsVersion', 'minTlsVersion', 'latency', 'packetLossPercentage', 'packetsReceived', 'networkHop', 'receivedMessage'],
    "SyntheticsBrowserErrorType": ['network', 'js'],
    "SyntheticsBrowserTestType": ['browser'],
    "SyntheticsBrowserVariableType": ['element', 'email', 'global', 'javascript', 'text'],
    "SyntheticsCheckType": ['equals', 'notEquals', 'contains', 'notContains', 'startsWith', 'notStartsWith', 'greater', 'lower', 'greaterEquals', 'lowerEquals', 'matchRegex', 'between', 'isEmpty', 'notIsEmpty'],
    "SyntheticsConfigVariableType": ['global', 'text'],
    "SyntheticsDeviceID": ['laptop_large', 'tablet', 'mobile_small', 'chrome.laptop_large', 'chrome.tablet', 'chrome.mobile_small', 'firefox.laptop_large', 'firefox.tablet', 'firefox.mobile_small', 'edge.laptop_large', 'edge.tablet', 'edge.mobile_small'],
    "SyntheticsErrorCode": ['NO_ERROR', 'UNKNOWN', 'DNS', 'SSL', 'TIMEOUT', 'DENIED', 'INCORRECT_ASSERTION'],
    "SyntheticsGlobalVariableParseTestOptionsType": ['http_body', 'http_header'],
    "SyntheticsGlobalVariableParserType": ['raw', 'json_path', 'regex', 'x_path'],
    "SyntheticsPlayingTab": [-1, 0, 1, 2, 3],
    "SyntheticsStatus": ['passed', 'skipped', 'failed'],
    "SyntheticsStepType": ['assertCurrentUrl', 'assertElementAttribute', 'assertElementContent', 'assertElementPresent', 'assertEmail', 'assertFileDownload', 'assertFromJavascript', 'assertPageContains', 'assertPageLacks', 'click', 'extractFromJavascript', 'extractVariable', 'goToEmailLink', 'goToUrl', 'goToUrlAndMeasureTti', 'hover', 'playSubTest', 'pressKey', 'refresh', 'runApiTest', 'scroll', 'selectOption', 'typeText', 'uploadFiles', 'wait'],
    "SyntheticsTestDetailsSubType": ['http', 'ssl', 'tcp', 'dns', 'multi', 'icmp', 'udp', 'websocket'],
    "SyntheticsTestDetailsType": ['api', 'browser'],
    "SyntheticsTestExecutionRule": ['blocking', 'non_blocking', 'skipped'],
    "SyntheticsTestMonitorStatus": [0, 1, 2],
    "SyntheticsTestPauseStatus": ['live', 'paused'],
    "SyntheticsTestProcessStatus": ['not_scheduled', 'scheduled', 'started', 'finished', 'finished_with_error'],
    "SyntheticsWarningType": ['user_locator'],
    "TableWidgetCellDisplayMode": ['number', 'bar'],
    "TableWidgetDefinitionType": ['query_table'],
    "TableWidgetHasSearchBar": ['always', 'never', 'auto'],
    "TargetFormatType": ['auto', 'string', 'integer', 'double'],
    "TimeseriesWidgetDefinitionType": ['timeseries'],
    "TimeseriesWidgetLegendColumn": ['value', 'avg', 'sum', 'min', 'max'],
    "TimeseriesWidgetLegendLayout": ['auto', 'horizontal', 'vertical'],
    "ToplistWidgetDefinitionType": ['toplist'],
    "TreeMapColorBy": ['user'],
    "TreeMapGroupBy": ['user', 'family', 'process'],
    "TreeMapSizeBy": ['pct_cpu', 'pct_mem'],
    "TreeMapWidgetDefinitionType": ['treemap'],
    "UsageAttributionSort": ['api_percentage', 'snmp_usage', 'apm_host_usage', 'api_usage', 'container_usage', 'custom_timeseries_percentage', 'container_percentage', 'apm_host_percentage', 'npm_host_percentage', 'browser_percentage', 'browser_usage', 'infra_host_percentage', 'snmp_percentage', 'npm_host_usage', 'infra_host_usage', 'custom_timeseries_usage', 'lambda_functions_usage', 'lambda_functions_percentage', 'lambda_invocations_usage', 'lambda_invocations_percentage', 'lambda_usage', 'lambda_percentage'],
    "UsageAttributionSupportedMetrics": ['custom_timeseries_usage', 'container_usage', 'snmp_percentage', 'apm_host_usage', 'browser_usage', 'npm_host_percentage', 'infra_host_usage', 'custom_timeseries_percentage', 'container_percentage', 'lambda_usage', 'api_usage', 'apm_host_percentage', 'infra_host_percentage', 'snmp_usage', 'browser_percentage', 'api_percentage', 'lambda_percentage', 'npm_host_usage', 'lambda_functions_usage', 'lambda_functions_percentage', 'lambda_invocations_usage', 'lambda_invocations_percentage', 'fargate_usage', 'fargate_percentage', 'profiled_host_usage', 'profiled_host_percentage', 'profiled_container_usage', 'profiled_container_percentage', 'dbm_hosts_usage', 'dbm_hosts_percentage', 'dbm_queries_usage', 'dbm_queries_percentage', 'estimated_indexed_logs_usage', 'estimated_indexed_logs_percentage', '*'],
    "UsageMetricCategory": ['standard', 'custom'],
    "UsageReportsType": ['reports'],
    "UsageSort": ['computed_on', 'size', 'start_date', 'end_date'],
    "UsageSortDirection": ['desc', 'asc'],
    "WebhooksIntegrationEncoding": ['json', 'form'],
    "WidgetAggregator": ['avg', 'last', 'max', 'min', 'sum', 'percentile'],
    "WidgetChangeType": ['absolute', 'relative'],
    "WidgetColorPreference": ['background', 'text'],
    "WidgetComparator": ['>', '>=', '<', '<='],
    "WidgetCompareTo": ['hour_before', 'day_before', 'week_before', 'month_before'],
    "WidgetDisplayType": ['area', 'bars', 'line'],
    "WidgetEventSize": ['s', 'l'],
    "WidgetGrouping": ['check', 'cluster'],
    "WidgetHorizontalAlign": ['center', 'left', 'right'],
    "WidgetImageSizing": ['fill', 'contain', 'cover', 'none', 'scale-down', 'zoom', 'fit', 'center'],
    "WidgetLayoutType": ['ordered'],
    "WidgetLineType": ['dashed', 'dotted', 'solid'],
    "WidgetLineWidth": ['normal', 'thick', 'thin'],
    "WidgetLiveSpan": ['1m', '5m', '10m', '15m', '30m', '1h', '4h', '1d', '2d', '1w', '1mo', '3mo', '6mo', '1y', 'alert'],
    "WidgetMargin": ['sm', 'md', 'lg', 'small', 'large'],
    "WidgetMessageDisplay": ['inline', 'expanded-md', 'expanded-lg'],
    "WidgetMonitorSummaryDisplayFormat": ['counts', 'countsAndList', 'list'],
    "WidgetMonitorSummarySort": ['name', 'group', 'status', 'tags', 'triggered', 'group,asc', 'group,desc', 'name,asc', 'name,desc', 'status,asc', 'status,desc', 'tags,asc', 'tags,desc', 'triggered,asc', 'triggered,desc'],
    "WidgetNodeType": ['host', 'container'],
    "WidgetOrderBy": ['change', 'name', 'present', 'past'],
    "WidgetPalette": ['blue', 'custom_bg', 'custom_image', 'custom_text', 'gray_on_white', 'grey', 'green', 'orange', 'red', 'red_on_white', 'white_on_gray', 'white_on_green', 'green_on_white', 'white_on_red', 'white_on_yellow', 'yellow_on_white', 'black_on_light_yellow', 'black_on_light_green', 'black_on_light_red'],
    "WidgetServiceSummaryDisplayFormat": ['one_column', 'two_column', 'three_column'],
    "WidgetSizeFormat": ['small', 'medium', 'large'],
    "WidgetSort": ['asc', 'desc'],
    "WidgetSummaryType": ['monitors', 'groups', 'combined'],
    "WidgetTextAlign": ['center', 'left', 'right'],
    "WidgetTickEdge": ['bottom', 'left', 'right', 'top'],
    "WidgetTimeWindows": ['7d', '30d', '90d', 'week_to_date', 'previous_week', 'month_to_date', 'previous_month', 'global_time'],
    "WidgetVerticalAlign": ['center', 'top', 'bottom'],
    "WidgetViewMode": ['overall', 'component', 'both'],
    "WidgetVizType": ['timeseries', 'toplist'],
};

let typeMap: {[index: string]: any} = {
    "APIErrorResponse": APIErrorResponse,
    "AWSAccount": AWSAccount,
    "AWSAccountAndLambdaRequest": AWSAccountAndLambdaRequest,
    "AWSAccountCreateResponse": AWSAccountCreateResponse,
    "AWSAccountDeleteRequest": AWSAccountDeleteRequest,
    "AWSAccountListResponse": AWSAccountListResponse,
    "AWSLogsAsyncError": AWSLogsAsyncError,
    "AWSLogsAsyncResponse": AWSLogsAsyncResponse,
    "AWSLogsLambda": AWSLogsLambda,
    "AWSLogsListResponse": AWSLogsListResponse,
    "AWSLogsListServicesResponse": AWSLogsListServicesResponse,
    "AWSLogsServicesRequest": AWSLogsServicesRequest,
    "AWSTagFilter": AWSTagFilter,
    "AWSTagFilterCreateRequest": AWSTagFilterCreateRequest,
    "AWSTagFilterDeleteRequest": AWSTagFilterDeleteRequest,
    "AWSTagFilterListResponse": AWSTagFilterListResponse,
    "AlertGraphWidgetDefinition": AlertGraphWidgetDefinition,
    "AlertValueWidgetDefinition": AlertValueWidgetDefinition,
    "ApiKey": ApiKey,
    "ApiKeyListResponse": ApiKeyListResponse,
    "ApiKeyResponse": ApiKeyResponse,
    "ApmStatsQueryColumnType": ApmStatsQueryColumnType,
    "ApmStatsQueryDefinition": ApmStatsQueryDefinition,
    "ApplicationKey": ApplicationKey,
    "ApplicationKeyListResponse": ApplicationKeyListResponse,
    "ApplicationKeyResponse": ApplicationKeyResponse,
    "AuthenticationValidationResponse": AuthenticationValidationResponse,
    "AzureAccount": AzureAccount,
    "CancelDowntimesByScopeRequest": CancelDowntimesByScopeRequest,
    "CanceledDowntimesIds": CanceledDowntimesIds,
    "ChangeWidgetDefinition": ChangeWidgetDefinition,
    "ChangeWidgetRequest": ChangeWidgetRequest,
    "CheckCanDeleteMonitorResponse": CheckCanDeleteMonitorResponse,
    "CheckCanDeleteMonitorResponseData": CheckCanDeleteMonitorResponseData,
    "CheckCanDeleteSLOResponse": CheckCanDeleteSLOResponse,
    "CheckCanDeleteSLOResponseData": CheckCanDeleteSLOResponseData,
    "CheckStatusWidgetDefinition": CheckStatusWidgetDefinition,
    "Creator": Creator,
    "Dashboard": Dashboard,
    "DashboardBulkActionData": DashboardBulkActionData,
    "DashboardBulkDeleteRequest": DashboardBulkDeleteRequest,
    "DashboardDeleteResponse": DashboardDeleteResponse,
    "DashboardList": DashboardList,
    "DashboardListDeleteResponse": DashboardListDeleteResponse,
    "DashboardListListResponse": DashboardListListResponse,
    "DashboardRestoreRequest": DashboardRestoreRequest,
    "DashboardSummary": DashboardSummary,
    "DashboardSummaryDefinition": DashboardSummaryDefinition,
    "DashboardTemplateVariable": DashboardTemplateVariable,
    "DashboardTemplateVariablePreset": DashboardTemplateVariablePreset,
    "DashboardTemplateVariablePresetValue": DashboardTemplateVariablePresetValue,
    "DeletedMonitor": DeletedMonitor,
    "DistributionWidgetDefinition": DistributionWidgetDefinition,
    "DistributionWidgetRequest": DistributionWidgetRequest,
    "DistributionWidgetXAxis": DistributionWidgetXAxis,
    "DistributionWidgetYAxis": DistributionWidgetYAxis,
    "Downtime": Downtime,
    "DowntimeChild": DowntimeChild,
    "DowntimeRecurrence": DowntimeRecurrence,
    "Event": Event,
    "EventCreateRequest": EventCreateRequest,
    "EventCreateResponse": EventCreateResponse,
    "EventListResponse": EventListResponse,
    "EventQueryDefinition": EventQueryDefinition,
    "EventResponse": EventResponse,
    "EventStreamWidgetDefinition": EventStreamWidgetDefinition,
    "EventTimelineWidgetDefinition": EventTimelineWidgetDefinition,
    "FormulaAndFunctionApmDependencyStatsQueryDefinition": FormulaAndFunctionApmDependencyStatsQueryDefinition,
    "FormulaAndFunctionApmResourceStatsQueryDefinition": FormulaAndFunctionApmResourceStatsQueryDefinition,
    "FormulaAndFunctionEventQueryDefinition": FormulaAndFunctionEventQueryDefinition,
    "FormulaAndFunctionEventQueryDefinitionCompute": FormulaAndFunctionEventQueryDefinitionCompute,
    "FormulaAndFunctionEventQueryDefinitionSearch": FormulaAndFunctionEventQueryDefinitionSearch,
    "FormulaAndFunctionEventQueryGroupBy": FormulaAndFunctionEventQueryGroupBy,
    "FormulaAndFunctionEventQueryGroupBySort": FormulaAndFunctionEventQueryGroupBySort,
    "FormulaAndFunctionMetricQueryDefinition": FormulaAndFunctionMetricQueryDefinition,
    "FormulaAndFunctionProcessQueryDefinition": FormulaAndFunctionProcessQueryDefinition,
    "FreeTextWidgetDefinition": FreeTextWidgetDefinition,
    "FunnelQuery": FunnelQuery,
    "FunnelWidgetDefinition": FunnelWidgetDefinition,
    "FunnelWidgetRequest": FunnelWidgetRequest,
    "GCPAccount": GCPAccount,
    "GeomapWidgetDefinition": GeomapWidgetDefinition,
    "GeomapWidgetDefinitionStyle": GeomapWidgetDefinitionStyle,
    "GeomapWidgetDefinitionView": GeomapWidgetDefinitionView,
    "GeomapWidgetRequest": GeomapWidgetRequest,
    "GraphSnapshot": GraphSnapshot,
    "GroupWidgetDefinition": GroupWidgetDefinition,
    "HTTPLogError": HTTPLogError,
    "HTTPLogItem": HTTPLogItem,
    "HeatMapWidgetDefinition": HeatMapWidgetDefinition,
    "HeatMapWidgetRequest": HeatMapWidgetRequest,
    "Host": Host,
    "HostListResponse": HostListResponse,
    "HostMapRequest": HostMapRequest,
    "HostMapWidgetDefinition": HostMapWidgetDefinition,
    "HostMapWidgetDefinitionRequests": HostMapWidgetDefinitionRequests,
    "HostMapWidgetDefinitionStyle": HostMapWidgetDefinitionStyle,
    "HostMeta": HostMeta,
    "HostMetrics": HostMetrics,
    "HostMuteResponse": HostMuteResponse,
    "HostMuteSettings": HostMuteSettings,
    "HostTags": HostTags,
    "HostTotals": HostTotals,
    "HourlyUsageAttributionBody": HourlyUsageAttributionBody,
    "HourlyUsageAttributionMetadata": HourlyUsageAttributionMetadata,
    "HourlyUsageAttributionPagination": HourlyUsageAttributionPagination,
    "HourlyUsageAttributionResponse": HourlyUsageAttributionResponse,
    "IFrameWidgetDefinition": IFrameWidgetDefinition,
    "IPPrefixesAPI": IPPrefixesAPI,
    "IPPrefixesAPM": IPPrefixesAPM,
    "IPPrefixesAgents": IPPrefixesAgents,
    "IPPrefixesLogs": IPPrefixesLogs,
    "IPPrefixesProcess": IPPrefixesProcess,
    "IPPrefixesSynthetics": IPPrefixesSynthetics,
    "IPPrefixesWebhooks": IPPrefixesWebhooks,
    "IPRanges": IPRanges,
    "IdpFormData": IdpFormData,
    "IdpResponse": IdpResponse,
    "ImageWidgetDefinition": ImageWidgetDefinition,
    "IntakePayloadAccepted": IntakePayloadAccepted,
    "ListStreamColumn": ListStreamColumn,
    "ListStreamQuery": ListStreamQuery,
    "ListStreamWidgetDefinition": ListStreamWidgetDefinition,
    "ListStreamWidgetRequest": ListStreamWidgetRequest,
    "Log": Log,
    "LogContent": LogContent,
    "LogQueryDefinition": LogQueryDefinition,
    "LogQueryDefinitionGroupBy": LogQueryDefinitionGroupBy,
    "LogQueryDefinitionGroupBySort": LogQueryDefinitionGroupBySort,
    "LogQueryDefinitionSearch": LogQueryDefinitionSearch,
    "LogStreamWidgetDefinition": LogStreamWidgetDefinition,
    "LogsAPIError": LogsAPIError,
    "LogsAPIErrorResponse": LogsAPIErrorResponse,
    "LogsArithmeticProcessor": LogsArithmeticProcessor,
    "LogsAttributeRemapper": LogsAttributeRemapper,
    "LogsByRetention": LogsByRetention,
    "LogsByRetentionMonthlyUsage": LogsByRetentionMonthlyUsage,
    "LogsByRetentionOrgUsage": LogsByRetentionOrgUsage,
    "LogsByRetentionOrgs": LogsByRetentionOrgs,
    "LogsCategoryProcessor": LogsCategoryProcessor,
    "LogsCategoryProcessorCategory": LogsCategoryProcessorCategory,
    "LogsDateRemapper": LogsDateRemapper,
    "LogsExclusion": LogsExclusion,
    "LogsExclusionFilter": LogsExclusionFilter,
    "LogsFilter": LogsFilter,
    "LogsGeoIPParser": LogsGeoIPParser,
    "LogsGrokParser": LogsGrokParser,
    "LogsGrokParserRules": LogsGrokParserRules,
    "LogsIndex": LogsIndex,
    "LogsIndexListResponse": LogsIndexListResponse,
    "LogsIndexUpdateRequest": LogsIndexUpdateRequest,
    "LogsIndexesOrder": LogsIndexesOrder,
    "LogsListRequest": LogsListRequest,
    "LogsListRequestTime": LogsListRequestTime,
    "LogsListResponse": LogsListResponse,
    "LogsLookupProcessor": LogsLookupProcessor,
    "LogsMessageRemapper": LogsMessageRemapper,
    "LogsPipeline": LogsPipeline,
    "LogsPipelineProcessor": LogsPipelineProcessor,
    "LogsPipelinesOrder": LogsPipelinesOrder,
    "LogsQueryCompute": LogsQueryCompute,
    "LogsRetentionAggSumUsage": LogsRetentionAggSumUsage,
    "LogsRetentionSumUsage": LogsRetentionSumUsage,
    "LogsServiceRemapper": LogsServiceRemapper,
    "LogsStatusRemapper": LogsStatusRemapper,
    "LogsStringBuilderProcessor": LogsStringBuilderProcessor,
    "LogsTraceRemapper": LogsTraceRemapper,
    "LogsURLParser": LogsURLParser,
    "LogsUserAgentParser": LogsUserAgentParser,
    "MetricMetadata": MetricMetadata,
    "MetricSearchResponse": MetricSearchResponse,
    "MetricSearchResponseResults": MetricSearchResponseResults,
    "MetricsListResponse": MetricsListResponse,
    "MetricsPayload": MetricsPayload,
    "MetricsQueryMetadata": MetricsQueryMetadata,
    "MetricsQueryResponse": MetricsQueryResponse,
    "MetricsQueryUnit": MetricsQueryUnit,
    "Monitor": Monitor,
    "MonitorGroupSearchResponse": MonitorGroupSearchResponse,
    "MonitorGroupSearchResponseCounts": MonitorGroupSearchResponseCounts,
    "MonitorGroupSearchResult": MonitorGroupSearchResult,
    "MonitorOptions": MonitorOptions,
    "MonitorOptionsAggregation": MonitorOptionsAggregation,
    "MonitorSearchResponse": MonitorSearchResponse,
    "MonitorSearchResponseCounts": MonitorSearchResponseCounts,
    "MonitorSearchResponseMetadata": MonitorSearchResponseMetadata,
    "MonitorSearchResult": MonitorSearchResult,
    "MonitorSearchResultNotification": MonitorSearchResultNotification,
    "MonitorState": MonitorState,
    "MonitorStateGroup": MonitorStateGroup,
    "MonitorSummaryWidgetDefinition": MonitorSummaryWidgetDefinition,
    "MonitorThresholdWindowOptions": MonitorThresholdWindowOptions,
    "MonitorThresholds": MonitorThresholds,
    "MonitorUpdateRequest": MonitorUpdateRequest,
    "NoteWidgetDefinition": NoteWidgetDefinition,
    "NotebookAbsoluteTime": NotebookAbsoluteTime,
    "NotebookAuthor": NotebookAuthor,
    "NotebookCellCreateRequest": NotebookCellCreateRequest,
    "NotebookCellResponse": NotebookCellResponse,
    "NotebookCellUpdateRequest": NotebookCellUpdateRequest,
    "NotebookCreateData": NotebookCreateData,
    "NotebookCreateDataAttributes": NotebookCreateDataAttributes,
    "NotebookCreateRequest": NotebookCreateRequest,
    "NotebookDistributionCellAttributes": NotebookDistributionCellAttributes,
    "NotebookHeatMapCellAttributes": NotebookHeatMapCellAttributes,
    "NotebookLogStreamCellAttributes": NotebookLogStreamCellAttributes,
    "NotebookMarkdownCellAttributes": NotebookMarkdownCellAttributes,
    "NotebookMarkdownCellDefinition": NotebookMarkdownCellDefinition,
    "NotebookMetadata": NotebookMetadata,
    "NotebookRelativeTime": NotebookRelativeTime,
    "NotebookResponse": NotebookResponse,
    "NotebookResponseData": NotebookResponseData,
    "NotebookResponseDataAttributes": NotebookResponseDataAttributes,
    "NotebookSplitBy": NotebookSplitBy,
    "NotebookTimeseriesCellAttributes": NotebookTimeseriesCellAttributes,
    "NotebookToplistCellAttributes": NotebookToplistCellAttributes,
    "NotebookUpdateData": NotebookUpdateData,
    "NotebookUpdateDataAttributes": NotebookUpdateDataAttributes,
    "NotebookUpdateRequest": NotebookUpdateRequest,
    "NotebooksResponse": NotebooksResponse,
    "NotebooksResponseData": NotebooksResponseData,
    "NotebooksResponseDataAttributes": NotebooksResponseDataAttributes,
    "NotebooksResponseMeta": NotebooksResponseMeta,
    "NotebooksResponsePage": NotebooksResponsePage,
    "Organization": Organization,
    "OrganizationBilling": OrganizationBilling,
    "OrganizationCreateBody": OrganizationCreateBody,
    "OrganizationCreateResponse": OrganizationCreateResponse,
    "OrganizationListResponse": OrganizationListResponse,
    "OrganizationResponse": OrganizationResponse,
    "OrganizationSettings": OrganizationSettings,
    "OrganizationSettingsSaml": OrganizationSettingsSaml,
    "OrganizationSettingsSamlAutocreateUsersDomains": OrganizationSettingsSamlAutocreateUsersDomains,
    "OrganizationSettingsSamlIdpInitiatedLogin": OrganizationSettingsSamlIdpInitiatedLogin,
    "OrganizationSettingsSamlStrictMode": OrganizationSettingsSamlStrictMode,
    "OrganizationSubscription": OrganizationSubscription,
    "PagerDutyService": PagerDutyService,
    "PagerDutyServiceKey": PagerDutyServiceKey,
    "PagerDutyServiceName": PagerDutyServiceName,
    "Pagination": Pagination,
    "ProcessQueryDefinition": ProcessQueryDefinition,
    "QueryValueWidgetDefinition": QueryValueWidgetDefinition,
    "QueryValueWidgetRequest": QueryValueWidgetRequest,
    "ResponseMetaAttributes": ResponseMetaAttributes,
    "SLOBulkDeleteError": SLOBulkDeleteError,
    "SLOBulkDeleteResponse": SLOBulkDeleteResponse,
    "SLOBulkDeleteResponseData": SLOBulkDeleteResponseData,
    "SLOCorrection": SLOCorrection,
    "SLOCorrectionCreateData": SLOCorrectionCreateData,
    "SLOCorrectionCreateRequest": SLOCorrectionCreateRequest,
    "SLOCorrectionCreateRequestAttributes": SLOCorrectionCreateRequestAttributes,
    "SLOCorrectionListResponse": SLOCorrectionListResponse,
    "SLOCorrectionResponse": SLOCorrectionResponse,
    "SLOCorrectionResponseAttributes": SLOCorrectionResponseAttributes,
    "SLOCorrectionResponseAttributesModifier": SLOCorrectionResponseAttributesModifier,
    "SLOCorrectionUpdateData": SLOCorrectionUpdateData,
    "SLOCorrectionUpdateRequest": SLOCorrectionUpdateRequest,
    "SLOCorrectionUpdateRequestAttributes": SLOCorrectionUpdateRequestAttributes,
    "SLODeleteResponse": SLODeleteResponse,
    "SLOHistoryMetrics": SLOHistoryMetrics,
    "SLOHistoryMetricsSeries": SLOHistoryMetricsSeries,
    "SLOHistoryMetricsSeriesMetadata": SLOHistoryMetricsSeriesMetadata,
    "SLOHistoryMetricsSeriesMetadataUnit": SLOHistoryMetricsSeriesMetadataUnit,
    "SLOHistoryMonitor": SLOHistoryMonitor,
    "SLOHistoryResponse": SLOHistoryResponse,
    "SLOHistoryResponseData": SLOHistoryResponseData,
    "SLOHistoryResponseError": SLOHistoryResponseError,
    "SLOHistoryResponseErrorWithType": SLOHistoryResponseErrorWithType,
    "SLOHistorySLIData": SLOHistorySLIData,
    "SLOListResponse": SLOListResponse,
    "SLOListResponseMetadata": SLOListResponseMetadata,
    "SLOListResponseMetadataPage": SLOListResponseMetadataPage,
    "SLOResponse": SLOResponse,
    "SLOResponseData": SLOResponseData,
    "SLOThreshold": SLOThreshold,
    "SLOWidgetDefinition": SLOWidgetDefinition,
    "ScatterPlotRequest": ScatterPlotRequest,
    "ScatterPlotWidgetDefinition": ScatterPlotWidgetDefinition,
    "ScatterPlotWidgetDefinitionRequests": ScatterPlotWidgetDefinitionRequests,
    "ScatterplotTableRequest": ScatterplotTableRequest,
    "ScatterplotWidgetFormula": ScatterplotWidgetFormula,
    "Series": Series,
    "ServiceCheck": ServiceCheck,
    "ServiceLevelObjective": ServiceLevelObjective,
    "ServiceLevelObjectiveQuery": ServiceLevelObjectiveQuery,
    "ServiceLevelObjectiveRequest": ServiceLevelObjectiveRequest,
    "ServiceMapWidgetDefinition": ServiceMapWidgetDefinition,
    "ServiceSummaryWidgetDefinition": ServiceSummaryWidgetDefinition,
    "SlackIntegrationChannel": SlackIntegrationChannel,
    "SlackIntegrationChannelDisplay": SlackIntegrationChannelDisplay,
    "SunburstWidgetDefinition": SunburstWidgetDefinition,
    "SunburstWidgetLegendInlineAutomatic": SunburstWidgetLegendInlineAutomatic,
    "SunburstWidgetLegendTable": SunburstWidgetLegendTable,
    "SunburstWidgetRequest": SunburstWidgetRequest,
    "SyntheticsAPIStep": SyntheticsAPIStep,
    "SyntheticsAPITest": SyntheticsAPITest,
    "SyntheticsAPITestConfig": SyntheticsAPITestConfig,
    "SyntheticsAPITestResultData": SyntheticsAPITestResultData,
    "SyntheticsAPITestResultFull": SyntheticsAPITestResultFull,
    "SyntheticsAPITestResultFullCheck": SyntheticsAPITestResultFullCheck,
    "SyntheticsAPITestResultShort": SyntheticsAPITestResultShort,
    "SyntheticsAPITestResultShortResult": SyntheticsAPITestResultShortResult,
    "SyntheticsAssertionJSONPathTarget": SyntheticsAssertionJSONPathTarget,
    "SyntheticsAssertionJSONPathTargetTarget": SyntheticsAssertionJSONPathTargetTarget,
    "SyntheticsAssertionTarget": SyntheticsAssertionTarget,
    "SyntheticsBasicAuth": SyntheticsBasicAuth,
    "SyntheticsBatchDetails": SyntheticsBatchDetails,
    "SyntheticsBatchDetailsData": SyntheticsBatchDetailsData,
    "SyntheticsBatchResult": SyntheticsBatchResult,
    "SyntheticsBrowserError": SyntheticsBrowserError,
    "SyntheticsBrowserTest": SyntheticsBrowserTest,
    "SyntheticsBrowserTestConfig": SyntheticsBrowserTestConfig,
    "SyntheticsBrowserTestResultData": SyntheticsBrowserTestResultData,
    "SyntheticsBrowserTestResultFull": SyntheticsBrowserTestResultFull,
    "SyntheticsBrowserTestResultFullCheck": SyntheticsBrowserTestResultFullCheck,
    "SyntheticsBrowserTestResultShort": SyntheticsBrowserTestResultShort,
    "SyntheticsBrowserTestResultShortResult": SyntheticsBrowserTestResultShortResult,
    "SyntheticsBrowserVariable": SyntheticsBrowserVariable,
    "SyntheticsCIBatchMetadata": SyntheticsCIBatchMetadata,
    "SyntheticsCIBatchMetadataCI": SyntheticsCIBatchMetadataCI,
    "SyntheticsCIBatchMetadataGit": SyntheticsCIBatchMetadataGit,
    "SyntheticsCIBatchMetadataPipeline": SyntheticsCIBatchMetadataPipeline,
    "SyntheticsCIBatchMetadataProvider": SyntheticsCIBatchMetadataProvider,
    "SyntheticsCITest": SyntheticsCITest,
    "SyntheticsCITestBody": SyntheticsCITestBody,
    "SyntheticsConfigVariable": SyntheticsConfigVariable,
    "SyntheticsCoreWebVitals": SyntheticsCoreWebVitals,
    "SyntheticsDeleteTestsPayload": SyntheticsDeleteTestsPayload,
    "SyntheticsDeleteTestsResponse": SyntheticsDeleteTestsResponse,
    "SyntheticsDeletedTest": SyntheticsDeletedTest,
    "SyntheticsDevice": SyntheticsDevice,
    "SyntheticsGetAPITestLatestResultsResponse": SyntheticsGetAPITestLatestResultsResponse,
    "SyntheticsGetBrowserTestLatestResultsResponse": SyntheticsGetBrowserTestLatestResultsResponse,
    "SyntheticsGlobalVariable": SyntheticsGlobalVariable,
    "SyntheticsGlobalVariableAttributes": SyntheticsGlobalVariableAttributes,
    "SyntheticsGlobalVariableParseTestOptions": SyntheticsGlobalVariableParseTestOptions,
    "SyntheticsGlobalVariableValue": SyntheticsGlobalVariableValue,
    "SyntheticsListGlobalVariablesResponse": SyntheticsListGlobalVariablesResponse,
    "SyntheticsListTestsResponse": SyntheticsListTestsResponse,
    "SyntheticsLocation": SyntheticsLocation,
    "SyntheticsLocations": SyntheticsLocations,
    "SyntheticsParsingOptions": SyntheticsParsingOptions,
    "SyntheticsPrivateLocation": SyntheticsPrivateLocation,
    "SyntheticsPrivateLocationCreationResponse": SyntheticsPrivateLocationCreationResponse,
    "SyntheticsPrivateLocationCreationResponseResultEncryption": SyntheticsPrivateLocationCreationResponseResultEncryption,
    "SyntheticsPrivateLocationSecrets": SyntheticsPrivateLocationSecrets,
    "SyntheticsPrivateLocationSecretsAuthentication": SyntheticsPrivateLocationSecretsAuthentication,
    "SyntheticsPrivateLocationSecretsConfigDecryption": SyntheticsPrivateLocationSecretsConfigDecryption,
    "SyntheticsSSLCertificate": SyntheticsSSLCertificate,
    "SyntheticsSSLCertificateIssuer": SyntheticsSSLCertificateIssuer,
    "SyntheticsSSLCertificateSubject": SyntheticsSSLCertificateSubject,
    "SyntheticsStep": SyntheticsStep,
    "SyntheticsStepDetail": SyntheticsStepDetail,
    "SyntheticsStepDetailWarning": SyntheticsStepDetailWarning,
    "SyntheticsTestConfig": SyntheticsTestConfig,
    "SyntheticsTestDetails": SyntheticsTestDetails,
    "SyntheticsTestOptions": SyntheticsTestOptions,
    "SyntheticsTestOptionsMonitorOptions": SyntheticsTestOptionsMonitorOptions,
    "SyntheticsTestOptionsRetry": SyntheticsTestOptionsRetry,
    "SyntheticsTestRequest": SyntheticsTestRequest,
    "SyntheticsTestRequestCertificate": SyntheticsTestRequestCertificate,
    "SyntheticsTestRequestCertificateItem": SyntheticsTestRequestCertificateItem,
    "SyntheticsTiming": SyntheticsTiming,
    "SyntheticsTriggerBody": SyntheticsTriggerBody,
    "SyntheticsTriggerCITestLocation": SyntheticsTriggerCITestLocation,
    "SyntheticsTriggerCITestRunResult": SyntheticsTriggerCITestRunResult,
    "SyntheticsTriggerCITestsResponse": SyntheticsTriggerCITestsResponse,
    "SyntheticsTriggerTest": SyntheticsTriggerTest,
    "SyntheticsUpdateTestPauseStatusPayload": SyntheticsUpdateTestPauseStatusPayload,
    "SyntheticsVariableParser": SyntheticsVariableParser,
    "TableWidgetDefinition": TableWidgetDefinition,
    "TableWidgetRequest": TableWidgetRequest,
    "TagToHosts": TagToHosts,
    "TimeseriesWidgetDefinition": TimeseriesWidgetDefinition,
    "TimeseriesWidgetExpressionAlias": TimeseriesWidgetExpressionAlias,
    "TimeseriesWidgetRequest": TimeseriesWidgetRequest,
    "ToplistWidgetDefinition": ToplistWidgetDefinition,
    "ToplistWidgetRequest": ToplistWidgetRequest,
    "TreeMapWidgetDefinition": TreeMapWidgetDefinition,
    "TreeMapWidgetRequest": TreeMapWidgetRequest,
    "UsageAnalyzedLogsHour": UsageAnalyzedLogsHour,
    "UsageAnalyzedLogsResponse": UsageAnalyzedLogsResponse,
    "UsageAttributionAggregatesBody": UsageAttributionAggregatesBody,
    "UsageAttributionBody": UsageAttributionBody,
    "UsageAttributionMetadata": UsageAttributionMetadata,
    "UsageAttributionPagination": UsageAttributionPagination,
    "UsageAttributionResponse": UsageAttributionResponse,
    "UsageAttributionValues": UsageAttributionValues,
    "UsageAuditLogsHour": UsageAuditLogsHour,
    "UsageAuditLogsResponse": UsageAuditLogsResponse,
    "UsageBillableSummaryBody": UsageBillableSummaryBody,
    "UsageBillableSummaryHour": UsageBillableSummaryHour,
    "UsageBillableSummaryKeys": UsageBillableSummaryKeys,
    "UsageBillableSummaryResponse": UsageBillableSummaryResponse,
    "UsageCWSHour": UsageCWSHour,
    "UsageCWSResponse": UsageCWSResponse,
    "UsageCloudSecurityPostureManagementHour": UsageCloudSecurityPostureManagementHour,
    "UsageCloudSecurityPostureManagementResponse": UsageCloudSecurityPostureManagementResponse,
    "UsageCustomReportsAttributes": UsageCustomReportsAttributes,
    "UsageCustomReportsData": UsageCustomReportsData,
    "UsageCustomReportsMeta": UsageCustomReportsMeta,
    "UsageCustomReportsPage": UsageCustomReportsPage,
    "UsageCustomReportsResponse": UsageCustomReportsResponse,
    "UsageDBMHour": UsageDBMHour,
    "UsageDBMResponse": UsageDBMResponse,
    "UsageFargateHour": UsageFargateHour,
    "UsageFargateResponse": UsageFargateResponse,
    "UsageHostHour": UsageHostHour,
    "UsageHostsResponse": UsageHostsResponse,
    "UsageIncidentManagementHour": UsageIncidentManagementHour,
    "UsageIncidentManagementResponse": UsageIncidentManagementResponse,
    "UsageIndexedSpansHour": UsageIndexedSpansHour,
    "UsageIndexedSpansResponse": UsageIndexedSpansResponse,
    "UsageIngestedSpansHour": UsageIngestedSpansHour,
    "UsageIngestedSpansResponse": UsageIngestedSpansResponse,
    "UsageIoTHour": UsageIoTHour,
    "UsageIoTResponse": UsageIoTResponse,
    "UsageLambdaHour": UsageLambdaHour,
    "UsageLambdaResponse": UsageLambdaResponse,
    "UsageLogsByIndexHour": UsageLogsByIndexHour,
    "UsageLogsByIndexResponse": UsageLogsByIndexResponse,
    "UsageLogsByRetentionHour": UsageLogsByRetentionHour,
    "UsageLogsByRetentionResponse": UsageLogsByRetentionResponse,
    "UsageLogsHour": UsageLogsHour,
    "UsageLogsResponse": UsageLogsResponse,
    "UsageNetworkFlowsHour": UsageNetworkFlowsHour,
    "UsageNetworkFlowsResponse": UsageNetworkFlowsResponse,
    "UsageNetworkHostsHour": UsageNetworkHostsHour,
    "UsageNetworkHostsResponse": UsageNetworkHostsResponse,
    "UsageProfilingHour": UsageProfilingHour,
    "UsageProfilingResponse": UsageProfilingResponse,
    "UsageRumSessionsHour": UsageRumSessionsHour,
    "UsageRumSessionsResponse": UsageRumSessionsResponse,
    "UsageRumUnitsHour": UsageRumUnitsHour,
    "UsageRumUnitsResponse": UsageRumUnitsResponse,
    "UsageSDSHour": UsageSDSHour,
    "UsageSDSResponse": UsageSDSResponse,
    "UsageSNMPHour": UsageSNMPHour,
    "UsageSNMPResponse": UsageSNMPResponse,
    "UsageSpecifiedCustomReportsAttributes": UsageSpecifiedCustomReportsAttributes,
    "UsageSpecifiedCustomReportsData": UsageSpecifiedCustomReportsData,
    "UsageSpecifiedCustomReportsMeta": UsageSpecifiedCustomReportsMeta,
    "UsageSpecifiedCustomReportsPage": UsageSpecifiedCustomReportsPage,
    "UsageSpecifiedCustomReportsResponse": UsageSpecifiedCustomReportsResponse,
    "UsageSummaryDate": UsageSummaryDate,
    "UsageSummaryDateOrg": UsageSummaryDateOrg,
    "UsageSummaryResponse": UsageSummaryResponse,
    "UsageSyntheticsAPIHour": UsageSyntheticsAPIHour,
    "UsageSyntheticsAPIResponse": UsageSyntheticsAPIResponse,
    "UsageSyntheticsBrowserHour": UsageSyntheticsBrowserHour,
    "UsageSyntheticsBrowserResponse": UsageSyntheticsBrowserResponse,
    "UsageSyntheticsHour": UsageSyntheticsHour,
    "UsageSyntheticsResponse": UsageSyntheticsResponse,
    "UsageTimeseriesHour": UsageTimeseriesHour,
    "UsageTimeseriesResponse": UsageTimeseriesResponse,
    "UsageTopAvgMetricsHour": UsageTopAvgMetricsHour,
    "UsageTopAvgMetricsMetadata": UsageTopAvgMetricsMetadata,
    "UsageTopAvgMetricsResponse": UsageTopAvgMetricsResponse,
    "User": User,
    "UserDisableResponse": UserDisableResponse,
    "UserListResponse": UserListResponse,
    "UserResponse": UserResponse,
    "WebhooksIntegration": WebhooksIntegration,
    "WebhooksIntegrationCustomVariable": WebhooksIntegrationCustomVariable,
    "WebhooksIntegrationCustomVariableResponse": WebhooksIntegrationCustomVariableResponse,
    "WebhooksIntegrationCustomVariableUpdateRequest": WebhooksIntegrationCustomVariableUpdateRequest,
    "WebhooksIntegrationUpdateRequest": WebhooksIntegrationUpdateRequest,
    "Widget": Widget,
    "WidgetAxis": WidgetAxis,
    "WidgetConditionalFormat": WidgetConditionalFormat,
    "WidgetCustomLink": WidgetCustomLink,
    "WidgetEvent": WidgetEvent,
    "WidgetFieldSort": WidgetFieldSort,
    "WidgetFormula": WidgetFormula,
    "WidgetFormulaLimit": WidgetFormulaLimit,
    "WidgetLayout": WidgetLayout,
    "WidgetMarker": WidgetMarker,
    "WidgetRequestStyle": WidgetRequestStyle,
    "WidgetStyle": WidgetStyle,
    "WidgetTime": WidgetTime,
}

let oneOfMap: {[index: string]: string[]} = {
  "FormulaAndFunctionQueryDefinition": ["FormulaAndFunctionApmDependencyStatsQueryDefinition", "FormulaAndFunctionApmResourceStatsQueryDefinition", "FormulaAndFunctionEventQueryDefinition", "FormulaAndFunctionMetricQueryDefinition", "FormulaAndFunctionProcessQueryDefinition"],
  "LogsProcessor": ["LogsArithmeticProcessor", "LogsAttributeRemapper", "LogsCategoryProcessor", "LogsDateRemapper", "LogsGeoIPParser", "LogsGrokParser", "LogsLookupProcessor", "LogsMessageRemapper", "LogsPipelineProcessor", "LogsServiceRemapper", "LogsStatusRemapper", "LogsStringBuilderProcessor", "LogsTraceRemapper", "LogsURLParser", "LogsUserAgentParser"],
  "NotebookCellCreateRequestAttributes": ["NotebookDistributionCellAttributes", "NotebookHeatMapCellAttributes", "NotebookLogStreamCellAttributes", "NotebookMarkdownCellAttributes", "NotebookTimeseriesCellAttributes", "NotebookToplistCellAttributes"],
  "NotebookCellResponseAttributes": ["NotebookDistributionCellAttributes", "NotebookHeatMapCellAttributes", "NotebookLogStreamCellAttributes", "NotebookMarkdownCellAttributes", "NotebookTimeseriesCellAttributes", "NotebookToplistCellAttributes"],
  "NotebookCellTime": ["NotebookAbsoluteTime", "NotebookRelativeTime"],
  "NotebookCellUpdateRequestAttributes": ["NotebookDistributionCellAttributes", "NotebookHeatMapCellAttributes", "NotebookLogStreamCellAttributes", "NotebookMarkdownCellAttributes", "NotebookTimeseriesCellAttributes", "NotebookToplistCellAttributes"],
  "NotebookGlobalTime": ["NotebookAbsoluteTime", "NotebookRelativeTime"],
  "NotebookUpdateCell": ["NotebookCellCreateRequest", "NotebookCellUpdateRequest"],
  "SunburstWidgetLegend": ["SunburstWidgetLegendInlineAutomatic", "SunburstWidgetLegendTable"],
  "SyntheticsAssertion": ["SyntheticsAssertionJSONPathTarget", "SyntheticsAssertionTarget"],
  "WidgetDefinition": ["AlertGraphWidgetDefinition", "AlertValueWidgetDefinition", "ChangeWidgetDefinition", "CheckStatusWidgetDefinition", "DistributionWidgetDefinition", "EventStreamWidgetDefinition", "EventTimelineWidgetDefinition", "FreeTextWidgetDefinition", "FunnelWidgetDefinition", "GeomapWidgetDefinition", "GroupWidgetDefinition", "HeatMapWidgetDefinition", "HostMapWidgetDefinition", "IFrameWidgetDefinition", "ImageWidgetDefinition", "ListStreamWidgetDefinition", "LogStreamWidgetDefinition", "MonitorSummaryWidgetDefinition", "NoteWidgetDefinition", "QueryValueWidgetDefinition", "SLOWidgetDefinition", "ScatterPlotWidgetDefinition", "ServiceMapWidgetDefinition", "ServiceSummaryWidgetDefinition", "SunburstWidgetDefinition", "TableWidgetDefinition", "TimeseriesWidgetDefinition", "ToplistWidgetDefinition", "TreeMapWidgetDefinition"],
  
};

export class ObjectSerializer {
    public static serialize(data: any, type: string, format: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
            subType = subType.substring(0, subType.length - 3); // Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let k in data) {
                let date = data[k]
                transformedData[k] = ObjectSerializer.serialize(date, subType, format);
            }
            return transformedData;
        } else if (type === "Date") {
            if ("string" == typeof data) {
                return data;
            }
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap[type]) {
                if (enumsMap[type].includes(data)) {
                  return data;
                }
                throw new TypeError(`unknown enum value '${data}'`)
            }
            if (oneOfMap[type]) {
                let oneOfs: any[] = [];
                for(let oneOf of oneOfMap[type]) {
                    try {
                        oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
                    } catch (e) {
                        logger.debug(`could not serialize ${oneOf} (${e})`)
                    }
                }
                if (oneOfs.length > 1) {
                    throw new TypeError(`${data} matches multiple types from ${oneOfMap[type]} ${oneOfs}`);
                }
                if (oneOfs.length == 0) {
                    throw new TypeError(`${data} doesn't match any type from ${oneOfMap[type]} ${oneOfs}`);
                }
                return oneOfs[0];
            }

            // get the map for the correct type.
            let attributesMap = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};

            for (let attributeName in attributesMap) {
                let attributeObj = attributesMap[attributeName];
                instance[attributeObj.baseName] = ObjectSerializer.serialize(data[attributeName], attributeObj.type, attributeObj.format);

                // check for required properties
                if (attributeObj?.required && instance[attributeObj.baseName] === undefined) {
                    throw new Error(`missing required property '${attributeObj.baseName}'`);
                }

                if (enumsMap[attributeObj.type] && !enumsMap[attributeObj.type].includes(instance[attributeObj.baseName])) {
                    instance.unparsedObject = instance[attributeObj.baseName];
                }
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string = ""): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
            subType = subType.substring(0, subType.length - 3); // Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let k in data) {
                let date = data[k]
                transformedData[k] = ObjectSerializer.deserialize(date, subType, format);
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {
               return data;
            }

            if (oneOfMap[type]) {
                let oneOfs: any[] = [];
                for(let oneOf of oneOfMap[type]) {
                    try {
                        let d = ObjectSerializer.deserialize(data, oneOf, format);
                        if (d?.unparsedObject === undefined) {
                            oneOfs.push(d);
                        }
                    } catch (e) {
                        logger.debug(`could not deserialize ${oneOf} (${e})`)
                    }

                }
                if (oneOfs.length != 1) {
                    return new UnparsedObject(data);
                }
                return oneOfs[0];
            }

            if (!typeMap[type]) { // dont know the type
                throw new TypeError(`unknown type '${type}'`);
            }

            let instance = new typeMap[type]();
            let attributesMap = typeMap[type].getAttributeTypeMap();

            for (let attributeName in attributesMap) {
                let attributeObj = attributesMap[attributeName];
                instance[attributeName] = ObjectSerializer.deserialize(data[attributeObj.baseName], attributeObj.type, attributeObj.format);

                // check for required properties
                if (attributeObj?.required && instance[attributeName] === undefined) {
                    throw new Error(`missing required property '${attributeName}'`);
                }

                // check for enum values
                if (enumsMap[attributeObj.type] && !enumsMap[attributeObj.type].includes(instance[attributeName])) {
                    instance.unparsedObject = instance[attributeName];
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
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
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
            let supported = supportedMediaTypes[mediaType];
            if (supported !== undefined && supported > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supported;
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
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

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
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

export class UnparsedObject {
    unparsedObject:any;
    constructor(data:any) {
        this.unparsedObject = data;
    }
}

export type AttributeTypeMap = {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
}
