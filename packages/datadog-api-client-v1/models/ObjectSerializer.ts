import { APIErrorResponse } from "./APIErrorResponse";
import { AWSAccount } from "./AWSAccount";
import { AWSAccountAndLambdaRequest } from "./AWSAccountAndLambdaRequest";
import { AWSAccountCreateResponse } from "./AWSAccountCreateResponse";
import { AWSAccountDeleteRequest } from "./AWSAccountDeleteRequest";
import { AWSAccountListResponse } from "./AWSAccountListResponse";
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
import { DashboardList } from "./DashboardList";
import { DashboardListDeleteResponse } from "./DashboardListDeleteResponse";
import { DashboardListListResponse } from "./DashboardListListResponse";
import { DashboardRestoreRequest } from "./DashboardRestoreRequest";
import { DashboardSummary } from "./DashboardSummary";
import { DashboardSummaryDefinition } from "./DashboardSummaryDefinition";
import { DashboardTemplateVariable } from "./DashboardTemplateVariable";
import { DashboardTemplateVariablePreset } from "./DashboardTemplateVariablePreset";
import { DashboardTemplateVariablePresetValue } from "./DashboardTemplateVariablePresetValue";
import { DeletedMonitor } from "./DeletedMonitor";
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
import { FormulaAndFunctionEventQueryDefinition } from "./FormulaAndFunctionEventQueryDefinition";
import { FormulaAndFunctionEventQueryDefinitionCompute } from "./FormulaAndFunctionEventQueryDefinitionCompute";
import { FormulaAndFunctionEventQueryDefinitionSearch } from "./FormulaAndFunctionEventQueryDefinitionSearch";
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventQueryGroupBySort } from "./FormulaAndFunctionEventQueryGroupBySort";
import { FormulaAndFunctionMetricQueryDefinition } from "./FormulaAndFunctionMetricQueryDefinition";
import { FormulaAndFunctionProcessQueryDefinition } from "./FormulaAndFunctionProcessQueryDefinition";
import { FreeTextWidgetDefinition } from "./FreeTextWidgetDefinition";
import { FunnelQuery } from "./FunnelQuery";
import { FunnelWidgetDefinition } from "./FunnelWidgetDefinition";
import { FunnelWidgetRequest } from "./FunnelWidgetRequest";
import { GCPAccount } from "./GCPAccount";
import { GeomapWidgetDefinition } from "./GeomapWidgetDefinition";
import { GeomapWidgetDefinitionStyle } from "./GeomapWidgetDefinitionStyle";
import { GeomapWidgetDefinitionView } from "./GeomapWidgetDefinitionView";
import { GeomapWidgetRequest } from "./GeomapWidgetRequest";
import { GraphSnapshot } from "./GraphSnapshot";
import { GroupWidgetDefinition } from "./GroupWidgetDefinition";
import { HTTPLogError } from "./HTTPLogError";
import { HTTPLogItem } from "./HTTPLogItem";
import { HeatMapWidgetDefinition } from "./HeatMapWidgetDefinition";
import { HeatMapWidgetRequest } from "./HeatMapWidgetRequest";
import { Host } from "./Host";
import { HostListResponse } from "./HostListResponse";
import { HostMapRequest } from "./HostMapRequest";
import { HostMapWidgetDefinition } from "./HostMapWidgetDefinition";
import { HostMapWidgetDefinitionRequests } from "./HostMapWidgetDefinitionRequests";
import { HostMapWidgetDefinitionStyle } from "./HostMapWidgetDefinitionStyle";
import { HostMeta } from "./HostMeta";
import { HostMetrics } from "./HostMetrics";
import { HostMuteResponse } from "./HostMuteResponse";
import { HostMuteSettings } from "./HostMuteSettings";
import { HostTags } from "./HostTags";
import { HostTotals } from "./HostTotals";
import { IFrameWidgetDefinition } from "./IFrameWidgetDefinition";
import { IPPrefixesAPI } from "./IPPrefixesAPI";
import { IPPrefixesAPM } from "./IPPrefixesAPM";
import { IPPrefixesAgents } from "./IPPrefixesAgents";
import { IPPrefixesLogs } from "./IPPrefixesLogs";
import { IPPrefixesProcess } from "./IPPrefixesProcess";
import { IPPrefixesSynthetics } from "./IPPrefixesSynthetics";
import { IPPrefixesWebhooks } from "./IPPrefixesWebhooks";
import { IPRanges } from "./IPRanges";
import { IdpFormData } from "./IdpFormData";
import { IdpResponse } from "./IdpResponse";
import { ImageWidgetDefinition } from "./ImageWidgetDefinition";
import { IntakePayloadAccepted } from "./IntakePayloadAccepted";
import { ListStreamColumn } from "./ListStreamColumn";
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
import { LogsArithmeticProcessor } from "./LogsArithmeticProcessor";
import { LogsAttributeRemapper } from "./LogsAttributeRemapper";
import { LogsByRetention } from "./LogsByRetention";
import { LogsByRetentionMonthlyUsage } from "./LogsByRetentionMonthlyUsage";
import { LogsByRetentionOrgUsage } from "./LogsByRetentionOrgUsage";
import { LogsByRetentionOrgs } from "./LogsByRetentionOrgs";
import { LogsCategoryProcessor } from "./LogsCategoryProcessor";
import { LogsCategoryProcessorCategory } from "./LogsCategoryProcessorCategory";
import { LogsDateRemapper } from "./LogsDateRemapper";
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
import { LogsServiceRemapper } from "./LogsServiceRemapper";
import { LogsStatusRemapper } from "./LogsStatusRemapper";
import { LogsStringBuilderProcessor } from "./LogsStringBuilderProcessor";
import { LogsTraceRemapper } from "./LogsTraceRemapper";
import { LogsURLParser } from "./LogsURLParser";
import { LogsUserAgentParser } from "./LogsUserAgentParser";
import { MetricMetadata } from "./MetricMetadata";
import { MetricSearchResponse } from "./MetricSearchResponse";
import { MetricSearchResponseResults } from "./MetricSearchResponseResults";
import { MetricsListResponse } from "./MetricsListResponse";
import { MetricsPayload } from "./MetricsPayload";
import { MetricsQueryMetadata } from "./MetricsQueryMetadata";
import { MetricsQueryResponse } from "./MetricsQueryResponse";
import { MetricsQueryUnit } from "./MetricsQueryUnit";
import { Monitor } from "./Monitor";
import { MonitorGroupSearchResponse } from "./MonitorGroupSearchResponse";
import { MonitorGroupSearchResponseCounts } from "./MonitorGroupSearchResponseCounts";
import { MonitorGroupSearchResult } from "./MonitorGroupSearchResult";
import { MonitorOptions } from "./MonitorOptions";
import { MonitorOptionsAggregation } from "./MonitorOptionsAggregation";
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
import { ProcessQueryDefinition } from "./ProcessQueryDefinition";
import { QueryValueWidgetDefinition } from "./QueryValueWidgetDefinition";
import { QueryValueWidgetRequest } from "./QueryValueWidgetRequest";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
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
import { SLOCorrectionUpdateData } from "./SLOCorrectionUpdateData";
import { SLOCorrectionUpdateRequest } from "./SLOCorrectionUpdateRequest";
import { SLOCorrectionUpdateRequestAttributes } from "./SLOCorrectionUpdateRequestAttributes";
import { SLODeleteResponse } from "./SLODeleteResponse";
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
import { SLOResponse } from "./SLOResponse";
import { SLOResponseData } from "./SLOResponseData";
import { SLOThreshold } from "./SLOThreshold";
import { SLOWidgetDefinition } from "./SLOWidgetDefinition";
import { ScatterPlotRequest } from "./ScatterPlotRequest";
import { ScatterPlotWidgetDefinition } from "./ScatterPlotWidgetDefinition";
import { ScatterPlotWidgetDefinitionRequests } from "./ScatterPlotWidgetDefinitionRequests";
import { ScatterplotTableRequest } from "./ScatterplotTableRequest";
import { ScatterplotWidgetFormula } from "./ScatterplotWidgetFormula";
import { Series } from "./Series";
import { ServiceCheck } from "./ServiceCheck";
import { ServiceLevelObjective } from "./ServiceLevelObjective";
import { ServiceLevelObjectiveQuery } from "./ServiceLevelObjectiveQuery";
import { ServiceLevelObjectiveRequest } from "./ServiceLevelObjectiveRequest";
import { ServiceMapWidgetDefinition } from "./ServiceMapWidgetDefinition";
import { ServiceSummaryWidgetDefinition } from "./ServiceSummaryWidgetDefinition";
import { SlackIntegrationChannel } from "./SlackIntegrationChannel";
import { SlackIntegrationChannelDisplay } from "./SlackIntegrationChannelDisplay";
import { SyntheticsAPIStep } from "./SyntheticsAPIStep";
import { SyntheticsAPITest } from "./SyntheticsAPITest";
import { SyntheticsAPITestConfig } from "./SyntheticsAPITestConfig";
import { SyntheticsAPITestResultData } from "./SyntheticsAPITestResultData";
import { SyntheticsAPITestResultFull } from "./SyntheticsAPITestResultFull";
import { SyntheticsAPITestResultFullCheck } from "./SyntheticsAPITestResultFullCheck";
import { SyntheticsAPITestResultShort } from "./SyntheticsAPITestResultShort";
import { SyntheticsAPITestResultShortResult } from "./SyntheticsAPITestResultShortResult";
import { SyntheticsAssertionJSONPathTarget } from "./SyntheticsAssertionJSONPathTarget";
import { SyntheticsAssertionJSONPathTargetTarget } from "./SyntheticsAssertionJSONPathTargetTarget";
import { SyntheticsAssertionTarget } from "./SyntheticsAssertionTarget";
import { SyntheticsBasicAuth } from "./SyntheticsBasicAuth";
import { SyntheticsBatchDetails } from "./SyntheticsBatchDetails";
import { SyntheticsBatchDetailsData } from "./SyntheticsBatchDetailsData";
import { SyntheticsBatchResult } from "./SyntheticsBatchResult";
import { SyntheticsBrowserError } from "./SyntheticsBrowserError";
import { SyntheticsBrowserTest } from "./SyntheticsBrowserTest";
import { SyntheticsBrowserTestConfig } from "./SyntheticsBrowserTestConfig";
import { SyntheticsBrowserTestResultData } from "./SyntheticsBrowserTestResultData";
import { SyntheticsBrowserTestResultFull } from "./SyntheticsBrowserTestResultFull";
import { SyntheticsBrowserTestResultFullCheck } from "./SyntheticsBrowserTestResultFullCheck";
import { SyntheticsBrowserTestResultShort } from "./SyntheticsBrowserTestResultShort";
import { SyntheticsBrowserTestResultShortResult } from "./SyntheticsBrowserTestResultShortResult";
import { SyntheticsBrowserVariable } from "./SyntheticsBrowserVariable";
import { SyntheticsCIBatchMetadata } from "./SyntheticsCIBatchMetadata";
import { SyntheticsCIBatchMetadataCI } from "./SyntheticsCIBatchMetadataCI";
import { SyntheticsCIBatchMetadataGit } from "./SyntheticsCIBatchMetadataGit";
import { SyntheticsCITest } from "./SyntheticsCITest";
import { SyntheticsCITestBody } from "./SyntheticsCITestBody";
import { SyntheticsConfigVariable } from "./SyntheticsConfigVariable";
import { SyntheticsCoreWebVitals } from "./SyntheticsCoreWebVitals";
import { SyntheticsDeleteTestsPayload } from "./SyntheticsDeleteTestsPayload";
import { SyntheticsDeleteTestsResponse } from "./SyntheticsDeleteTestsResponse";
import { SyntheticsDeletedTest } from "./SyntheticsDeletedTest";
import { SyntheticsDevice } from "./SyntheticsDevice";
import { SyntheticsGetAPITestLatestResultsResponse } from "./SyntheticsGetAPITestLatestResultsResponse";
import { SyntheticsGetBrowserTestLatestResultsResponse } from "./SyntheticsGetBrowserTestLatestResultsResponse";
import { SyntheticsGlobalVariable } from "./SyntheticsGlobalVariable";
import { SyntheticsGlobalVariableAttributes } from "./SyntheticsGlobalVariableAttributes";
import { SyntheticsGlobalVariableParseTestOptions } from "./SyntheticsGlobalVariableParseTestOptions";
import { SyntheticsGlobalVariableValue } from "./SyntheticsGlobalVariableValue";
import { SyntheticsListGlobalVariablesResponse } from "./SyntheticsListGlobalVariablesResponse";
import { SyntheticsListTestsResponse } from "./SyntheticsListTestsResponse";
import { SyntheticsLocation } from "./SyntheticsLocation";
import { SyntheticsLocations } from "./SyntheticsLocations";
import { SyntheticsParsingOptions } from "./SyntheticsParsingOptions";
import { SyntheticsPrivateLocation } from "./SyntheticsPrivateLocation";
import { SyntheticsPrivateLocationCreationResponse } from "./SyntheticsPrivateLocationCreationResponse";
import { SyntheticsPrivateLocationCreationResponseResultEncryption } from "./SyntheticsPrivateLocationCreationResponseResultEncryption";
import { SyntheticsPrivateLocationSecrets } from "./SyntheticsPrivateLocationSecrets";
import { SyntheticsPrivateLocationSecretsAuthentication } from "./SyntheticsPrivateLocationSecretsAuthentication";
import { SyntheticsPrivateLocationSecretsConfigDecryption } from "./SyntheticsPrivateLocationSecretsConfigDecryption";
import { SyntheticsSSLCertificate } from "./SyntheticsSSLCertificate";
import { SyntheticsSSLCertificateIssuer } from "./SyntheticsSSLCertificateIssuer";
import { SyntheticsSSLCertificateSubject } from "./SyntheticsSSLCertificateSubject";
import { SyntheticsStep } from "./SyntheticsStep";
import { SyntheticsStepDetail } from "./SyntheticsStepDetail";
import { SyntheticsStepDetailWarning } from "./SyntheticsStepDetailWarning";
import { SyntheticsTestConfig } from "./SyntheticsTestConfig";
import { SyntheticsTestDetails } from "./SyntheticsTestDetails";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestOptionsMonitorOptions } from "./SyntheticsTestOptionsMonitorOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestRequest } from "./SyntheticsTestRequest";
import { SyntheticsTestRequestCertificate } from "./SyntheticsTestRequestCertificate";
import { SyntheticsTestRequestCertificateItem } from "./SyntheticsTestRequestCertificateItem";
import { SyntheticsTiming } from "./SyntheticsTiming";
import { SyntheticsTriggerCITestLocation } from "./SyntheticsTriggerCITestLocation";
import { SyntheticsTriggerCITestRunResult } from "./SyntheticsTriggerCITestRunResult";
import { SyntheticsTriggerCITestsResponse } from "./SyntheticsTriggerCITestsResponse";
import { SyntheticsUpdateTestPauseStatusPayload } from "./SyntheticsUpdateTestPauseStatusPayload";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";
import { TableWidgetDefinition } from "./TableWidgetDefinition";
import { TableWidgetRequest } from "./TableWidgetRequest";
import { TagToHosts } from "./TagToHosts";
import { TimeseriesWidgetDefinition } from "./TimeseriesWidgetDefinition";
import { TimeseriesWidgetExpressionAlias } from "./TimeseriesWidgetExpressionAlias";
import { TimeseriesWidgetRequest } from "./TimeseriesWidgetRequest";
import { ToplistWidgetDefinition } from "./ToplistWidgetDefinition";
import { ToplistWidgetRequest } from "./ToplistWidgetRequest";
import { TreeMapWidgetDefinition } from "./TreeMapWidgetDefinition";
import { TreeMapWidgetRequest } from "./TreeMapWidgetRequest";
import { UsageAnalyzedLogsHour } from "./UsageAnalyzedLogsHour";
import { UsageAnalyzedLogsResponse } from "./UsageAnalyzedLogsResponse";
import { UsageAttributionAggregatesBody } from "./UsageAttributionAggregatesBody";
import { UsageAttributionBody } from "./UsageAttributionBody";
import { UsageAttributionMetadata } from "./UsageAttributionMetadata";
import { UsageAttributionPagination } from "./UsageAttributionPagination";
import { UsageAttributionResponse } from "./UsageAttributionResponse";
import { UsageAttributionValues } from "./UsageAttributionValues";
import { UsageAuditLogsHour } from "./UsageAuditLogsHour";
import { UsageAuditLogsResponse } from "./UsageAuditLogsResponse";
import { UsageBillableSummaryBody } from "./UsageBillableSummaryBody";
import { UsageBillableSummaryHour } from "./UsageBillableSummaryHour";
import { UsageBillableSummaryKeys } from "./UsageBillableSummaryKeys";
import { UsageBillableSummaryResponse } from "./UsageBillableSummaryResponse";
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
import { UsageProfilingHour } from "./UsageProfilingHour";
import { UsageProfilingResponse } from "./UsageProfilingResponse";
import { UsageRumSessionsHour } from "./UsageRumSessionsHour";
import { UsageRumSessionsResponse } from "./UsageRumSessionsResponse";
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
import { UsageTopAvgMetricsResponse } from "./UsageTopAvgMetricsResponse";
import { User } from "./User";
import { UserDisableResponse } from "./UserDisableResponse";
import { UserListResponse } from "./UserListResponse";
import { UserResponse } from "./UserResponse";
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
import { WidgetFormulaLimit } from "./WidgetFormulaLimit";
import { WidgetLayout } from "./WidgetLayout";
import { WidgetMarker } from "./WidgetMarker";
import { WidgetRequestStyle } from "./WidgetRequestStyle";
import { WidgetStyle } from "./WidgetStyle";
import { WidgetTime } from "./WidgetTime";

const primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any",
];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "text/json": 100,
  "application/octet-stream": 0,
};

const enumsMap: { [key: string]: any } = {
  AWSNamespace: [
    "elb",
    "application_elb",
    "sqs",
    "rds",
    "custom",
    "network_elb",
    "lambda",
  ],
  AccessRole: ["st", "adm", "ro", "ERROR"],
  AlertGraphWidgetDefinitionType: ["alert_graph"],
  AlertValueWidgetDefinitionType: ["alert_value"],
  ApmStatsQueryRowType: ["service", "resource", "span"],
  ChangeWidgetDefinitionType: ["change"],
  CheckStatusWidgetDefinitionType: ["check_status"],
  ContentEncoding: ["gzip", "deflate"],
  DashboardLayoutType: ["ordered", "free"],
  DashboardReflowType: ["auto", "fixed"],
  DashboardResourceType: ["dashboard"],
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
    "latency_max",
    "latency_p50",
    "latency_p75",
    "latency_p90",
    "latency_p95",
    "latency_p99",
  ],
  FormulaAndFunctionApmResourceStatsDataSource: ["apm_resource_stats"],
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
  FormulaAndFunctionResponseFormat: ["timeseries", "scalar"],
  FreeTextWidgetDefinitionType: ["free_text"],
  FunnelRequestType: ["funnel"],
  FunnelSource: ["rum"],
  FunnelWidgetDefinitionType: ["funnel"],
  GeomapWidgetDefinitionType: ["geomap"],
  GroupWidgetDefinitionType: ["group"],
  HTTPMethod: ["GET", "POST", "PATCH", "PUT", "DELETE", "HEAD", "OPTIONS"],
  HeatMapWidgetDefinitionType: ["heatmap"],
  HostMapWidgetDefinitionType: ["hostmap"],
  IFrameWidgetDefinitionType: ["iframe"],
  ImageWidgetDefinitionType: ["image"],
  ListStreamColumnWidth: ["auto", "compact", "full"],
  ListStreamResponseFormat: ["event_list"],
  ListStreamSource: ["issue_stream", "logs_stream", "audit_stream"],
  ListStreamWidgetDefinitionType: ["list_stream"],
  LogStreamWidgetDefinitionType: ["log_stream"],
  LogsArithmeticProcessorType: ["arithmetic-processor"],
  LogsAttributeRemapperType: ["attribute-remapper"],
  LogsCategoryProcessorType: ["category-processor"],
  LogsDateRemapperType: ["date-remapper"],
  LogsGeoIPParserType: ["geo-ip-parser"],
  LogsGrokParserType: ["grok-parser"],
  LogsLookupProcessorType: ["lookup-processor"],
  LogsMessageRemapperType: ["message-remapper"],
  LogsPipelineProcessorType: ["pipeline"],
  LogsServiceRemapperType: ["service-remapper"],
  LogsSort: ["asc", "desc"],
  LogsStatusRemapperType: ["status-remapper"],
  LogsStringBuilderProcessorType: ["string-builder-processor"],
  LogsTraceRemapperType: ["trace-id-remapper"],
  LogsURLParserType: ["url-parser"],
  LogsUserAgentParserType: ["user-agent-parser"],
  MetricContentEncoding: ["deflate"],
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
  QuerySortOrder: ["asc", "desc"],
  QueryValueWidgetDefinitionType: ["query_value"],
  SLOCorrectionCategory: [
    "Scheduled Maintenance",
    "Outside Business Hours",
    "Deployment",
    "Other",
  ],
  SLOCorrectionType: ["correction"],
  SLOErrorTimeframe: ["7d", "30d", "90d", "all"],
  SLOTimeframe: ["7d", "30d", "90d", "custom"],
  SLOType: ["metric", "monitor"],
  SLOTypeNumeric: [0, 1],
  SLOWidgetDefinitionType: ["slo"],
  ScatterPlotWidgetDefinitionType: ["scatterplot"],
  ScatterplotDimension: ["x", "y", "radius", "color"],
  ScatterplotWidgetAggregator: ["avg", "last", "max", "min", "sum"],
  ServiceCheckStatus: [0, 1, 2, 3],
  ServiceMapWidgetDefinitionType: ["servicemap"],
  ServiceSummaryWidgetDefinitionType: ["trace_service"],
  SyntheticsAPIStepSubtype: ["http"],
  SyntheticsAPITestType: ["api"],
  SyntheticsAssertionJSONPathOperator: ["validatesJSONPath"],
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
  ],
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
  ],
  SyntheticsBrowserErrorType: ["network", "js"],
  SyntheticsBrowserTestType: ["browser"],
  SyntheticsBrowserVariableType: [
    "element",
    "email",
    "global",
    "javascript",
    "text",
  ],
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
  SyntheticsConfigVariableType: ["global", "text"],
  SyntheticsDeviceID: [
    "laptop_large",
    "tablet",
    "mobile_small",
    "chrome.laptop_large",
    "chrome.tablet",
    "chrome.mobile_small",
    "firefox.laptop_large",
    "firefox.tablet",
    "firefox.mobile_small",
    "edge.laptop_large",
    "edge.tablet",
    "edge.mobile_small",
  ],
  SyntheticsErrorCode: [
    "NO_ERROR",
    "UNKNOWN",
    "DNS",
    "SSL",
    "TIMEOUT",
    "DENIED",
    "INCORRECT_ASSERTION",
  ],
  SyntheticsGlobalVariableParseTestOptionsType: ["http_body", "http_header"],
  SyntheticsGlobalVariableParserType: ["raw", "json_path", "regex", "x_path"],
  SyntheticsPlayingTab: [-1, 0, 1, 2, 3],
  SyntheticsStatus: ["passed", "skipped", "failed"],
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
    "click",
    "extractFromJavascript",
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
  SyntheticsTestDetailsSubType: ["http", "ssl", "tcp", "dns", "multi", "icmp"],
  SyntheticsTestDetailsType: ["api", "browser"],
  SyntheticsTestExecutionRule: ["blocking", "non_blocking", "skipped"],
  SyntheticsTestMonitorStatus: [0, 1, 2],
  SyntheticsTestPauseStatus: ["live", "paused"],
  SyntheticsTestProcessStatus: [
    "not_scheduled",
    "scheduled",
    "started",
    "finished",
    "finished_with_error",
  ],
  SyntheticsWarningType: ["user_locator"],
  TableWidgetCellDisplayMode: ["number", "bar"],
  TableWidgetDefinitionType: ["query_table"],
  TableWidgetHasSearchBar: ["always", "never", "auto"],
  TargetFormatType: ["auto", "string", "integer", "double"],
  TimeseriesWidgetDefinitionType: ["timeseries"],
  TimeseriesWidgetLegendColumn: ["value", "avg", "sum", "min", "max"],
  TimeseriesWidgetLegendLayout: ["auto", "horizontal", "vertical"],
  ToplistWidgetDefinitionType: ["toplist"],
  TreeMapColorBy: ["user"],
  TreeMapGroupBy: ["user", "family", "process"],
  TreeMapSizeBy: ["pct_cpu", "pct_mem"],
  TreeMapWidgetDefinitionType: ["treemap"],
  UsageAttributionSort: [
    "api_percentage",
    "snmp_usage",
    "apm_host_usage",
    "api_usage",
    "container_usage",
    "custom_timeseries_percentage",
    "container_percentage",
    "apm_host_percentage",
    "npm_host_percentage",
    "browser_percentage",
    "browser_usage",
    "infra_host_percentage",
    "snmp_percentage",
    "npm_host_usage",
    "infra_host_usage",
    "custom_timeseries_usage",
    "lambda_functions_usage",
    "lambda_functions_percentage",
    "lambda_invocations_usage",
    "lambda_invocations_percentage",
    "lambda_usage",
    "lambda_percentage",
  ],
  UsageAttributionSupportedMetrics: [
    "custom_timeseries_usage",
    "container_usage",
    "snmp_percentage",
    "apm_host_usage",
    "browser_usage",
    "npm_host_percentage",
    "infra_host_usage",
    "custom_timeseries_percentage",
    "container_percentage",
    "lambda_usage",
    "api_usage",
    "apm_host_percentage",
    "infra_host_percentage",
    "snmp_usage",
    "browser_percentage",
    "api_percentage",
    "lambda_percentage",
    "npm_host_usage",
    "lambda_functions_usage",
    "lambda_functions_percentage",
    "lambda_invocations_usage",
    "lambda_invocations_percentage",
    "fargate_usage",
    "fargate_percentage",
    "profiled_host_usage",
    "profiled_host_percentage",
    "profiled_container_usage",
    "profiled_container_percentage",
    "dbm_hosts_usage",
    "dbm_hosts_percentage",
    "dbm_queries_usage",
    "dbm_queries_percentage",
    "*",
  ],
  UsageMetricCategory: ["standard", "custom"],
  UsageReportsType: ["reports"],
  UsageSort: ["computed_on", "size", "start_date", "end_date"],
  UsageSortDirection: ["desc", "asc"],
  WebhooksIntegrationEncoding: ["json", "form"],
  WidgetAggregator: ["avg", "last", "max", "min", "sum", "percentile"],
  WidgetChangeType: ["absolute", "relative"],
  WidgetColorPreference: ["background", "text"],
  WidgetComparator: [">", ">=", "<", "<="],
  WidgetCompareTo: ["hour_before", "day_before", "week_before", "month_before"],
  WidgetDisplayType: ["area", "bars", "line"],
  WidgetEventSize: ["s", "l"],
  WidgetGrouping: ["check", "cluster"],
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
    "1y",
    "alert",
  ],
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
  ],
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
  DashboardList: DashboardList,
  DashboardListDeleteResponse: DashboardListDeleteResponse,
  DashboardListListResponse: DashboardListListResponse,
  DashboardRestoreRequest: DashboardRestoreRequest,
  DashboardSummary: DashboardSummary,
  DashboardSummaryDefinition: DashboardSummaryDefinition,
  DashboardTemplateVariable: DashboardTemplateVariable,
  DashboardTemplateVariablePreset: DashboardTemplateVariablePreset,
  DashboardTemplateVariablePresetValue: DashboardTemplateVariablePresetValue,
  DeletedMonitor: DeletedMonitor,
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
  FreeTextWidgetDefinition: FreeTextWidgetDefinition,
  FunnelQuery: FunnelQuery,
  FunnelWidgetDefinition: FunnelWidgetDefinition,
  FunnelWidgetRequest: FunnelWidgetRequest,
  GCPAccount: GCPAccount,
  GeomapWidgetDefinition: GeomapWidgetDefinition,
  GeomapWidgetDefinitionStyle: GeomapWidgetDefinitionStyle,
  GeomapWidgetDefinitionView: GeomapWidgetDefinitionView,
  GeomapWidgetRequest: GeomapWidgetRequest,
  GraphSnapshot: GraphSnapshot,
  GroupWidgetDefinition: GroupWidgetDefinition,
  HTTPLogError: HTTPLogError,
  HTTPLogItem: HTTPLogItem,
  HeatMapWidgetDefinition: HeatMapWidgetDefinition,
  HeatMapWidgetRequest: HeatMapWidgetRequest,
  Host: Host,
  HostListResponse: HostListResponse,
  HostMapRequest: HostMapRequest,
  HostMapWidgetDefinition: HostMapWidgetDefinition,
  HostMapWidgetDefinitionRequests: HostMapWidgetDefinitionRequests,
  HostMapWidgetDefinitionStyle: HostMapWidgetDefinitionStyle,
  HostMeta: HostMeta,
  HostMetrics: HostMetrics,
  HostMuteResponse: HostMuteResponse,
  HostMuteSettings: HostMuteSettings,
  HostTags: HostTags,
  HostTotals: HostTotals,
  IFrameWidgetDefinition: IFrameWidgetDefinition,
  IPPrefixesAPI: IPPrefixesAPI,
  IPPrefixesAPM: IPPrefixesAPM,
  IPPrefixesAgents: IPPrefixesAgents,
  IPPrefixesLogs: IPPrefixesLogs,
  IPPrefixesProcess: IPPrefixesProcess,
  IPPrefixesSynthetics: IPPrefixesSynthetics,
  IPPrefixesWebhooks: IPPrefixesWebhooks,
  IPRanges: IPRanges,
  IdpFormData: IdpFormData,
  IdpResponse: IdpResponse,
  ImageWidgetDefinition: ImageWidgetDefinition,
  IntakePayloadAccepted: IntakePayloadAccepted,
  ListStreamColumn: ListStreamColumn,
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
  LogsArithmeticProcessor: LogsArithmeticProcessor,
  LogsAttributeRemapper: LogsAttributeRemapper,
  LogsByRetention: LogsByRetention,
  LogsByRetentionMonthlyUsage: LogsByRetentionMonthlyUsage,
  LogsByRetentionOrgUsage: LogsByRetentionOrgUsage,
  LogsByRetentionOrgs: LogsByRetentionOrgs,
  LogsCategoryProcessor: LogsCategoryProcessor,
  LogsCategoryProcessorCategory: LogsCategoryProcessorCategory,
  LogsDateRemapper: LogsDateRemapper,
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
  LogsServiceRemapper: LogsServiceRemapper,
  LogsStatusRemapper: LogsStatusRemapper,
  LogsStringBuilderProcessor: LogsStringBuilderProcessor,
  LogsTraceRemapper: LogsTraceRemapper,
  LogsURLParser: LogsURLParser,
  LogsUserAgentParser: LogsUserAgentParser,
  MetricMetadata: MetricMetadata,
  MetricSearchResponse: MetricSearchResponse,
  MetricSearchResponseResults: MetricSearchResponseResults,
  MetricsListResponse: MetricsListResponse,
  MetricsPayload: MetricsPayload,
  MetricsQueryMetadata: MetricsQueryMetadata,
  MetricsQueryResponse: MetricsQueryResponse,
  MetricsQueryUnit: MetricsQueryUnit,
  Monitor: Monitor,
  MonitorGroupSearchResponse: MonitorGroupSearchResponse,
  MonitorGroupSearchResponseCounts: MonitorGroupSearchResponseCounts,
  MonitorGroupSearchResult: MonitorGroupSearchResult,
  MonitorOptions: MonitorOptions,
  MonitorOptionsAggregation: MonitorOptionsAggregation,
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
  ProcessQueryDefinition: ProcessQueryDefinition,
  QueryValueWidgetDefinition: QueryValueWidgetDefinition,
  QueryValueWidgetRequest: QueryValueWidgetRequest,
  ResponseMetaAttributes: ResponseMetaAttributes,
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
  SLOCorrectionUpdateData: SLOCorrectionUpdateData,
  SLOCorrectionUpdateRequest: SLOCorrectionUpdateRequest,
  SLOCorrectionUpdateRequestAttributes: SLOCorrectionUpdateRequestAttributes,
  SLODeleteResponse: SLODeleteResponse,
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
  SLOResponse: SLOResponse,
  SLOResponseData: SLOResponseData,
  SLOThreshold: SLOThreshold,
  SLOWidgetDefinition: SLOWidgetDefinition,
  ScatterPlotRequest: ScatterPlotRequest,
  ScatterPlotWidgetDefinition: ScatterPlotWidgetDefinition,
  ScatterPlotWidgetDefinitionRequests: ScatterPlotWidgetDefinitionRequests,
  ScatterplotTableRequest: ScatterplotTableRequest,
  ScatterplotWidgetFormula: ScatterplotWidgetFormula,
  Series: Series,
  ServiceCheck: ServiceCheck,
  ServiceLevelObjective: ServiceLevelObjective,
  ServiceLevelObjectiveQuery: ServiceLevelObjectiveQuery,
  ServiceLevelObjectiveRequest: ServiceLevelObjectiveRequest,
  ServiceMapWidgetDefinition: ServiceMapWidgetDefinition,
  ServiceSummaryWidgetDefinition: ServiceSummaryWidgetDefinition,
  SlackIntegrationChannel: SlackIntegrationChannel,
  SlackIntegrationChannelDisplay: SlackIntegrationChannelDisplay,
  SyntheticsAPIStep: SyntheticsAPIStep,
  SyntheticsAPITest: SyntheticsAPITest,
  SyntheticsAPITestConfig: SyntheticsAPITestConfig,
  SyntheticsAPITestResultData: SyntheticsAPITestResultData,
  SyntheticsAPITestResultFull: SyntheticsAPITestResultFull,
  SyntheticsAPITestResultFullCheck: SyntheticsAPITestResultFullCheck,
  SyntheticsAPITestResultShort: SyntheticsAPITestResultShort,
  SyntheticsAPITestResultShortResult: SyntheticsAPITestResultShortResult,
  SyntheticsAssertionJSONPathTarget: SyntheticsAssertionJSONPathTarget,
  SyntheticsAssertionJSONPathTargetTarget:
    SyntheticsAssertionJSONPathTargetTarget,
  SyntheticsAssertionTarget: SyntheticsAssertionTarget,
  SyntheticsBasicAuth: SyntheticsBasicAuth,
  SyntheticsBatchDetails: SyntheticsBatchDetails,
  SyntheticsBatchDetailsData: SyntheticsBatchDetailsData,
  SyntheticsBatchResult: SyntheticsBatchResult,
  SyntheticsBrowserError: SyntheticsBrowserError,
  SyntheticsBrowserTest: SyntheticsBrowserTest,
  SyntheticsBrowserTestConfig: SyntheticsBrowserTestConfig,
  SyntheticsBrowserTestResultData: SyntheticsBrowserTestResultData,
  SyntheticsBrowserTestResultFull: SyntheticsBrowserTestResultFull,
  SyntheticsBrowserTestResultFullCheck: SyntheticsBrowserTestResultFullCheck,
  SyntheticsBrowserTestResultShort: SyntheticsBrowserTestResultShort,
  SyntheticsBrowserTestResultShortResult:
    SyntheticsBrowserTestResultShortResult,
  SyntheticsBrowserVariable: SyntheticsBrowserVariable,
  SyntheticsCIBatchMetadata: SyntheticsCIBatchMetadata,
  SyntheticsCIBatchMetadataCI: SyntheticsCIBatchMetadataCI,
  SyntheticsCIBatchMetadataGit: SyntheticsCIBatchMetadataGit,
  SyntheticsCITest: SyntheticsCITest,
  SyntheticsCITestBody: SyntheticsCITestBody,
  SyntheticsConfigVariable: SyntheticsConfigVariable,
  SyntheticsCoreWebVitals: SyntheticsCoreWebVitals,
  SyntheticsDeleteTestsPayload: SyntheticsDeleteTestsPayload,
  SyntheticsDeleteTestsResponse: SyntheticsDeleteTestsResponse,
  SyntheticsDeletedTest: SyntheticsDeletedTest,
  SyntheticsDevice: SyntheticsDevice,
  SyntheticsGetAPITestLatestResultsResponse:
    SyntheticsGetAPITestLatestResultsResponse,
  SyntheticsGetBrowserTestLatestResultsResponse:
    SyntheticsGetBrowserTestLatestResultsResponse,
  SyntheticsGlobalVariable: SyntheticsGlobalVariable,
  SyntheticsGlobalVariableAttributes: SyntheticsGlobalVariableAttributes,
  SyntheticsGlobalVariableParseTestOptions:
    SyntheticsGlobalVariableParseTestOptions,
  SyntheticsGlobalVariableValue: SyntheticsGlobalVariableValue,
  SyntheticsListGlobalVariablesResponse: SyntheticsListGlobalVariablesResponse,
  SyntheticsListTestsResponse: SyntheticsListTestsResponse,
  SyntheticsLocation: SyntheticsLocation,
  SyntheticsLocations: SyntheticsLocations,
  SyntheticsParsingOptions: SyntheticsParsingOptions,
  SyntheticsPrivateLocation: SyntheticsPrivateLocation,
  SyntheticsPrivateLocationCreationResponse:
    SyntheticsPrivateLocationCreationResponse,
  SyntheticsPrivateLocationCreationResponseResultEncryption:
    SyntheticsPrivateLocationCreationResponseResultEncryption,
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
  SyntheticsTestConfig: SyntheticsTestConfig,
  SyntheticsTestDetails: SyntheticsTestDetails,
  SyntheticsTestOptions: SyntheticsTestOptions,
  SyntheticsTestOptionsMonitorOptions: SyntheticsTestOptionsMonitorOptions,
  SyntheticsTestOptionsRetry: SyntheticsTestOptionsRetry,
  SyntheticsTestRequest: SyntheticsTestRequest,
  SyntheticsTestRequestCertificate: SyntheticsTestRequestCertificate,
  SyntheticsTestRequestCertificateItem: SyntheticsTestRequestCertificateItem,
  SyntheticsTiming: SyntheticsTiming,
  SyntheticsTriggerCITestLocation: SyntheticsTriggerCITestLocation,
  SyntheticsTriggerCITestRunResult: SyntheticsTriggerCITestRunResult,
  SyntheticsTriggerCITestsResponse: SyntheticsTriggerCITestsResponse,
  SyntheticsUpdateTestPauseStatusPayload:
    SyntheticsUpdateTestPauseStatusPayload,
  SyntheticsVariableParser: SyntheticsVariableParser,
  TableWidgetDefinition: TableWidgetDefinition,
  TableWidgetRequest: TableWidgetRequest,
  TagToHosts: TagToHosts,
  TimeseriesWidgetDefinition: TimeseriesWidgetDefinition,
  TimeseriesWidgetExpressionAlias: TimeseriesWidgetExpressionAlias,
  TimeseriesWidgetRequest: TimeseriesWidgetRequest,
  ToplistWidgetDefinition: ToplistWidgetDefinition,
  ToplistWidgetRequest: ToplistWidgetRequest,
  TreeMapWidgetDefinition: TreeMapWidgetDefinition,
  TreeMapWidgetRequest: TreeMapWidgetRequest,
  UsageAnalyzedLogsHour: UsageAnalyzedLogsHour,
  UsageAnalyzedLogsResponse: UsageAnalyzedLogsResponse,
  UsageAttributionAggregatesBody: UsageAttributionAggregatesBody,
  UsageAttributionBody: UsageAttributionBody,
  UsageAttributionMetadata: UsageAttributionMetadata,
  UsageAttributionPagination: UsageAttributionPagination,
  UsageAttributionResponse: UsageAttributionResponse,
  UsageAttributionValues: UsageAttributionValues,
  UsageAuditLogsHour: UsageAuditLogsHour,
  UsageAuditLogsResponse: UsageAuditLogsResponse,
  UsageBillableSummaryBody: UsageBillableSummaryBody,
  UsageBillableSummaryHour: UsageBillableSummaryHour,
  UsageBillableSummaryKeys: UsageBillableSummaryKeys,
  UsageBillableSummaryResponse: UsageBillableSummaryResponse,
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
  UsageProfilingHour: UsageProfilingHour,
  UsageProfilingResponse: UsageProfilingResponse,
  UsageRumSessionsHour: UsageRumSessionsHour,
  UsageRumSessionsResponse: UsageRumSessionsResponse,
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
  UsageTopAvgMetricsResponse: UsageTopAvgMetricsResponse,
  User: User,
  UserDisableResponse: UserDisableResponse,
  UserListResponse: UserListResponse,
  UserResponse: UserResponse,
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
  WidgetFormulaLimit: WidgetFormulaLimit,
  WidgetLayout: WidgetLayout,
  WidgetMarker: WidgetMarker,
  WidgetRequestStyle: WidgetRequestStyle,
  WidgetStyle: WidgetStyle,
  WidgetTime: WidgetTime,
};

const oneOfMap: { [index: string]: string[] } = {
  FormulaAndFunctionQueryDefinition: [
    "FormulaAndFunctionApmDependencyStatsQueryDefinition",
    "FormulaAndFunctionApmResourceStatsQueryDefinition",
    "FormulaAndFunctionEventQueryDefinition",
    "FormulaAndFunctionMetricQueryDefinition",
    "FormulaAndFunctionProcessQueryDefinition",
  ],
  LogsProcessor: [
    "LogsArithmeticProcessor",
    "LogsAttributeRemapper",
    "LogsCategoryProcessor",
    "LogsDateRemapper",
    "LogsGeoIPParser",
    "LogsGrokParser",
    "LogsLookupProcessor",
    "LogsMessageRemapper",
    "LogsPipelineProcessor",
    "LogsServiceRemapper",
    "LogsStatusRemapper",
    "LogsStringBuilderProcessor",
    "LogsTraceRemapper",
    "LogsURLParser",
    "LogsUserAgentParser",
  ],
  NotebookCellCreateRequestAttributes: [
    "NotebookDistributionCellAttributes",
    "NotebookHeatMapCellAttributes",
    "NotebookLogStreamCellAttributes",
    "NotebookMarkdownCellAttributes",
    "NotebookTimeseriesCellAttributes",
    "NotebookToplistCellAttributes",
  ],
  NotebookCellResponseAttributes: [
    "NotebookDistributionCellAttributes",
    "NotebookHeatMapCellAttributes",
    "NotebookLogStreamCellAttributes",
    "NotebookMarkdownCellAttributes",
    "NotebookTimeseriesCellAttributes",
    "NotebookToplistCellAttributes",
  ],
  NotebookCellTime: ["NotebookAbsoluteTime", "NotebookRelativeTime"],
  NotebookCellUpdateRequestAttributes: [
    "NotebookDistributionCellAttributes",
    "NotebookHeatMapCellAttributes",
    "NotebookLogStreamCellAttributes",
    "NotebookMarkdownCellAttributes",
    "NotebookTimeseriesCellAttributes",
    "NotebookToplistCellAttributes",
  ],
  NotebookGlobalTime: ["NotebookAbsoluteTime", "NotebookRelativeTime"],
  NotebookUpdateCell: [
    "NotebookCellCreateRequest",
    "NotebookCellUpdateRequest",
  ],
  SyntheticsAssertion: [
    "SyntheticsAssertionJSONPathTarget",
    "SyntheticsAssertionTarget",
  ],
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
    "QueryValueWidgetDefinition",
    "SLOWidgetDefinition",
    "ScatterPlotWidgetDefinition",
    "ServiceMapWidgetDefinition",
    "ServiceSummaryWidgetDefinition",
    "TableWidgetDefinition",
    "TimeseriesWidgetDefinition",
    "ToplistWidgetDefinition",
    "TreeMapWidgetDefinition",
  ],
};

export class ObjectSerializer {
  public static findCorrectType(data: any, expectedType: string) {
    if (data == undefined) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }

      if (!typeMap[expectedType]) {
        return expectedType; // w/e we don't know the type
      }

      // Check the discriminator
      const discriminatorProperty = typeMap[expectedType].discriminator;
      if (discriminatorProperty == null) {
        return expectedType; // the type does not have a discriminator. use it.
      } else {
        if (data[discriminatorProperty]) {
          const discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType; // use the type given in the discriminator
          } else {
            return expectedType; // discriminator did not map to a type
          }
        } else {
          return expectedType; // discriminator was not present (or an empty string)
        }
      }
    }
  }

  public static serialize(data: any, type: string, format: string) {
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(ObjectSerializer.serialize(date, subType, format));
      }
      return transformedData;
    } else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
      subType = subType.substring(0, subType.length - 3); // Type; } => Type
      const transformedData: { [key: string]: any } = {};
      for (const k in data) {
        const date = data[k];
        transformedData[k] = ObjectSerializer.serialize(date, subType, format);
      }
      return transformedData;
    } else if (type === "Date") {
      if ("string" == typeof data) {
        return data;
      }
      if (format == "date") {
        let month = data.getMonth() + 1;
        month = month < 10 ? "0" + month.toString() : month.toString();
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
        throw new TypeError(`unknown enum value '${data}'`);
      }
      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            const d = ObjectSerializer.serialize(data, oneOf, format);
            if (d?.unparsedObject === undefined) {
              oneOfs.push(d);
            }
          } catch (e) {
            console.debug(`could not serialize ${oneOf} (${e})`);
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
        // in case we dont know the type
        throw new TypeError(`unknown type '${type}'`);
      }

      // Get the actual type of this object
      type = this.findCorrectType(data, type);

      // get the map for the correct type.
      const attributesMap = typeMap[type].getAttributeTypeMap();
      const instance: { [index: string]: any } = {};

      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        instance[attributeObj.baseName] = ObjectSerializer.serialize(
          data[attributeName],
          attributeObj.type,
          attributeObj.format
        );

        // check for required properties
        if (
          attributeObj?.required &&
          instance[attributeObj.baseName] === undefined
        ) {
          throw new Error(
            `missing required property '${attributeObj.baseName}'`
          );
        }

        if (
          enumsMap[attributeObj.type] &&
          !enumsMap[attributeObj.type].includes(instance[attributeObj.baseName])
        ) {
          instance.unparsedObject = instance[attributeObj.baseName];
        }
      }
      return instance;
    }
  }

  public static deserialize(data: any, type: string, format = "") {
    // polymorphism may change the actual type.
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == undefined) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
      subType = subType.substring(0, subType.length - 1); // Type> => Type
      const transformedData: any[] = [];
      for (const index in data) {
        const date = data[index];
        transformedData.push(
          ObjectSerializer.deserialize(date, subType, format)
        );
      }
      return transformedData;
    } else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) {
      // string.startsWith pre es6
      let subType: string = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
      subType = subType.substring(0, subType.length - 3); // Type; } => Type
      const transformedData: { [key: string]: any } = {};
      for (const k in data) {
        const date = data[k];
        transformedData[k] = ObjectSerializer.deserialize(
          date,
          subType,
          format
        );
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        return data;
      }

      if (oneOfMap[type]) {
        const oneOfs: any[] = [];
        for (const oneOf of oneOfMap[type]) {
          try {
            const d = ObjectSerializer.deserialize(data, oneOf, format);
            if (d?.unparsedObject === undefined) {
              oneOfs.push(d);
            }
          } catch (e) {
            console.debug(`could not deserialize ${oneOf} (${e})`);
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

      for (const attributeName in attributesMap) {
        const attributeObj = attributesMap[attributeName];
        instance[attributeName] = ObjectSerializer.deserialize(
          data[attributeObj.baseName],
          attributeObj.type,
          attributeObj.format
        );

        // check for required properties
        if (attributeObj?.required && instance[attributeName] == undefined) {
          throw new Error(`missing required property '${attributeName}'`);
        }

        // check for enum values
        if (
          enumsMap[attributeObj.type] &&
          !enumsMap[attributeObj.type].includes(instance[attributeName])
        ) {
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
      if (supportedMediaTypes[mediaType!] > selectedRank) {
        selectedMediaType = mediaType;
        selectedRank = supportedMediaTypes[mediaType!];
      }
    }

    if (selectedMediaType === undefined) {
      throw new Error(
        "None of the given media types are supported: " + mediaTypes.join(", ")
      );
    }

    return selectedMediaType!;
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
  public static parse(rawData: string, mediaType: string | undefined) {
    if (mediaType === undefined) {
      throw new Error("Cannot parse content. No Content-Type defined.");
    }

    if (mediaType === "application/json" || mediaType === "text/json") {
      return JSON.parse(rawData);
    }

    throw new Error(
      "The mediaType " +
        mediaType +
        " is not supported by ObjectSerializer.parse."
    );
  }
}

export class UnparsedObject {
  unparsedObject: any;
  constructor(data: any) {
    this.unparsedObject = data;
  }
}
