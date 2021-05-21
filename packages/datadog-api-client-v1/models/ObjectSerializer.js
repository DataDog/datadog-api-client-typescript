"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
var APIErrorResponse_1 = require("./APIErrorResponse");
var AWSAccount_1 = require("./AWSAccount");
var AWSAccountAndLambdaRequest_1 = require("./AWSAccountAndLambdaRequest");
var AWSAccountCreateResponse_1 = require("./AWSAccountCreateResponse");
var AWSAccountListResponse_1 = require("./AWSAccountListResponse");
var AWSLogsAsyncError_1 = require("./AWSLogsAsyncError");
var AWSLogsAsyncResponse_1 = require("./AWSLogsAsyncResponse");
var AWSLogsLambda_1 = require("./AWSLogsLambda");
var AWSLogsListResponse_1 = require("./AWSLogsListResponse");
var AWSLogsListServicesResponse_1 = require("./AWSLogsListServicesResponse");
var AWSLogsServicesRequest_1 = require("./AWSLogsServicesRequest");
var AWSTagFilter_1 = require("./AWSTagFilter");
var AWSTagFilterCreateRequest_1 = require("./AWSTagFilterCreateRequest");
var AWSTagFilterDeleteRequest_1 = require("./AWSTagFilterDeleteRequest");
var AWSTagFilterListResponse_1 = require("./AWSTagFilterListResponse");
var AlertGraphWidgetDefinition_1 = require("./AlertGraphWidgetDefinition");
var AlertValueWidgetDefinition_1 = require("./AlertValueWidgetDefinition");
var ApiKey_1 = require("./ApiKey");
var ApiKeyListResponse_1 = require("./ApiKeyListResponse");
var ApiKeyResponse_1 = require("./ApiKeyResponse");
var ApmStatsQueryColumnType_1 = require("./ApmStatsQueryColumnType");
var ApmStatsQueryDefinition_1 = require("./ApmStatsQueryDefinition");
var ApplicationKey_1 = require("./ApplicationKey");
var ApplicationKeyListResponse_1 = require("./ApplicationKeyListResponse");
var ApplicationKeyResponse_1 = require("./ApplicationKeyResponse");
var AuthenticationValidationResponse_1 = require("./AuthenticationValidationResponse");
var AzureAccount_1 = require("./AzureAccount");
var CancelDowntimesByScopeRequest_1 = require("./CancelDowntimesByScopeRequest");
var CanceledDowntimesIds_1 = require("./CanceledDowntimesIds");
var ChangeWidgetDefinition_1 = require("./ChangeWidgetDefinition");
var ChangeWidgetRequest_1 = require("./ChangeWidgetRequest");
var CheckCanDeleteMonitorResponse_1 = require("./CheckCanDeleteMonitorResponse");
var CheckCanDeleteMonitorResponseData_1 = require("./CheckCanDeleteMonitorResponseData");
var CheckCanDeleteSLOResponse_1 = require("./CheckCanDeleteSLOResponse");
var CheckCanDeleteSLOResponseData_1 = require("./CheckCanDeleteSLOResponseData");
var CheckStatusWidgetDefinition_1 = require("./CheckStatusWidgetDefinition");
var Creator_1 = require("./Creator");
var Dashboard_1 = require("./Dashboard");
var DashboardDeleteResponse_1 = require("./DashboardDeleteResponse");
var DashboardList_1 = require("./DashboardList");
var DashboardListDeleteResponse_1 = require("./DashboardListDeleteResponse");
var DashboardListListResponse_1 = require("./DashboardListListResponse");
var DashboardSummary_1 = require("./DashboardSummary");
var DashboardSummaryDefinition_1 = require("./DashboardSummaryDefinition");
var DashboardTemplateVariable_1 = require("./DashboardTemplateVariable");
var DashboardTemplateVariablePreset_1 = require("./DashboardTemplateVariablePreset");
var DashboardTemplateVariablePresetValue_1 = require("./DashboardTemplateVariablePresetValue");
var DeletedMonitor_1 = require("./DeletedMonitor");
var DistributionWidgetDefinition_1 = require("./DistributionWidgetDefinition");
var DistributionWidgetRequest_1 = require("./DistributionWidgetRequest");
var DistributionWidgetXAxis_1 = require("./DistributionWidgetXAxis");
var DistributionWidgetYAxis_1 = require("./DistributionWidgetYAxis");
var Downtime_1 = require("./Downtime");
var DowntimeChild_1 = require("./DowntimeChild");
var DowntimeRecurrence_1 = require("./DowntimeRecurrence");
var Event_1 = require("./Event");
var EventCreateRequest_1 = require("./EventCreateRequest");
var EventCreateResponse_1 = require("./EventCreateResponse");
var EventListResponse_1 = require("./EventListResponse");
var EventQueryDefinition_1 = require("./EventQueryDefinition");
var EventResponse_1 = require("./EventResponse");
var EventStreamWidgetDefinition_1 = require("./EventStreamWidgetDefinition");
var EventTimelineWidgetDefinition_1 = require("./EventTimelineWidgetDefinition");
var FormulaAndFunctionEventQueryDefinition_1 = require("./FormulaAndFunctionEventQueryDefinition");
var FormulaAndFunctionEventQueryDefinitionCompute_1 = require("./FormulaAndFunctionEventQueryDefinitionCompute");
var FormulaAndFunctionEventQueryDefinitionSearch_1 = require("./FormulaAndFunctionEventQueryDefinitionSearch");
var FormulaAndFunctionEventQueryGroupBy_1 = require("./FormulaAndFunctionEventQueryGroupBy");
var FormulaAndFunctionEventQueryGroupBySort_1 = require("./FormulaAndFunctionEventQueryGroupBySort");
var FormulaAndFunctionMetricQueryDefinition_1 = require("./FormulaAndFunctionMetricQueryDefinition");
var FormulaAndFunctionProcessQueryDefinition_1 = require("./FormulaAndFunctionProcessQueryDefinition");
var FreeTextWidgetDefinition_1 = require("./FreeTextWidgetDefinition");
var GCPAccount_1 = require("./GCPAccount");
var GeomapWidgetDefinition_1 = require("./GeomapWidgetDefinition");
var GeomapWidgetDefinitionStyle_1 = require("./GeomapWidgetDefinitionStyle");
var GeomapWidgetDefinitionView_1 = require("./GeomapWidgetDefinitionView");
var GeomapWidgetRequest_1 = require("./GeomapWidgetRequest");
var GraphSnapshot_1 = require("./GraphSnapshot");
var GroupWidgetDefinition_1 = require("./GroupWidgetDefinition");
var HTTPLogError_1 = require("./HTTPLogError");
var HTTPLogItem_1 = require("./HTTPLogItem");
var HeatMapWidgetDefinition_1 = require("./HeatMapWidgetDefinition");
var HeatMapWidgetRequest_1 = require("./HeatMapWidgetRequest");
var Host_1 = require("./Host");
var HostListResponse_1 = require("./HostListResponse");
var HostMapRequest_1 = require("./HostMapRequest");
var HostMapWidgetDefinition_1 = require("./HostMapWidgetDefinition");
var HostMapWidgetDefinitionRequests_1 = require("./HostMapWidgetDefinitionRequests");
var HostMapWidgetDefinitionStyle_1 = require("./HostMapWidgetDefinitionStyle");
var HostMeta_1 = require("./HostMeta");
var HostMetrics_1 = require("./HostMetrics");
var HostMuteResponse_1 = require("./HostMuteResponse");
var HostMuteSettings_1 = require("./HostMuteSettings");
var HostTags_1 = require("./HostTags");
var HostTotals_1 = require("./HostTotals");
var IFrameWidgetDefinition_1 = require("./IFrameWidgetDefinition");
var IPPrefixesAPI_1 = require("./IPPrefixesAPI");
var IPPrefixesAPM_1 = require("./IPPrefixesAPM");
var IPPrefixesAgents_1 = require("./IPPrefixesAgents");
var IPPrefixesLogs_1 = require("./IPPrefixesLogs");
var IPPrefixesProcess_1 = require("./IPPrefixesProcess");
var IPPrefixesSynthetics_1 = require("./IPPrefixesSynthetics");
var IPPrefixesWebhooks_1 = require("./IPPrefixesWebhooks");
var IPRanges_1 = require("./IPRanges");
var IdpFormData_1 = require("./IdpFormData");
var IdpResponse_1 = require("./IdpResponse");
var ImageWidgetDefinition_1 = require("./ImageWidgetDefinition");
var IntakePayloadAccepted_1 = require("./IntakePayloadAccepted");
var Log_1 = require("./Log");
var LogContent_1 = require("./LogContent");
var LogQueryDefinition_1 = require("./LogQueryDefinition");
var LogQueryDefinitionGroupBy_1 = require("./LogQueryDefinitionGroupBy");
var LogQueryDefinitionGroupBySort_1 = require("./LogQueryDefinitionGroupBySort");
var LogQueryDefinitionSearch_1 = require("./LogQueryDefinitionSearch");
var LogStreamWidgetDefinition_1 = require("./LogStreamWidgetDefinition");
var LogsAPIError_1 = require("./LogsAPIError");
var LogsAPIErrorResponse_1 = require("./LogsAPIErrorResponse");
var LogsArithmeticProcessor_1 = require("./LogsArithmeticProcessor");
var LogsAttributeRemapper_1 = require("./LogsAttributeRemapper");
var LogsByRetention_1 = require("./LogsByRetention");
var LogsByRetentionMonthlyUsage_1 = require("./LogsByRetentionMonthlyUsage");
var LogsByRetentionOrgUsage_1 = require("./LogsByRetentionOrgUsage");
var LogsByRetentionOrgs_1 = require("./LogsByRetentionOrgs");
var LogsCategoryProcessor_1 = require("./LogsCategoryProcessor");
var LogsCategoryProcessorCategory_1 = require("./LogsCategoryProcessorCategory");
var LogsDateRemapper_1 = require("./LogsDateRemapper");
var LogsExclusion_1 = require("./LogsExclusion");
var LogsExclusionFilter_1 = require("./LogsExclusionFilter");
var LogsFilter_1 = require("./LogsFilter");
var LogsGeoIPParser_1 = require("./LogsGeoIPParser");
var LogsGrokParser_1 = require("./LogsGrokParser");
var LogsGrokParserRules_1 = require("./LogsGrokParserRules");
var LogsIndex_1 = require("./LogsIndex");
var LogsIndexListResponse_1 = require("./LogsIndexListResponse");
var LogsIndexUpdateRequest_1 = require("./LogsIndexUpdateRequest");
var LogsIndexesOrder_1 = require("./LogsIndexesOrder");
var LogsListRequest_1 = require("./LogsListRequest");
var LogsListRequestTime_1 = require("./LogsListRequestTime");
var LogsListResponse_1 = require("./LogsListResponse");
var LogsLookupProcessor_1 = require("./LogsLookupProcessor");
var LogsMessageRemapper_1 = require("./LogsMessageRemapper");
var LogsPipeline_1 = require("./LogsPipeline");
var LogsPipelineProcessor_1 = require("./LogsPipelineProcessor");
var LogsPipelinesOrder_1 = require("./LogsPipelinesOrder");
var LogsQueryCompute_1 = require("./LogsQueryCompute");
var LogsRetentionAggSumUsage_1 = require("./LogsRetentionAggSumUsage");
var LogsRetentionSumUsage_1 = require("./LogsRetentionSumUsage");
var LogsServiceRemapper_1 = require("./LogsServiceRemapper");
var LogsStatusRemapper_1 = require("./LogsStatusRemapper");
var LogsStringBuilderProcessor_1 = require("./LogsStringBuilderProcessor");
var LogsTraceRemapper_1 = require("./LogsTraceRemapper");
var LogsURLParser_1 = require("./LogsURLParser");
var LogsUserAgentParser_1 = require("./LogsUserAgentParser");
var MetricMetadata_1 = require("./MetricMetadata");
var MetricSearchResponse_1 = require("./MetricSearchResponse");
var MetricSearchResponseResults_1 = require("./MetricSearchResponseResults");
var MetricsListResponse_1 = require("./MetricsListResponse");
var MetricsPayload_1 = require("./MetricsPayload");
var MetricsQueryMetadata_1 = require("./MetricsQueryMetadata");
var MetricsQueryResponse_1 = require("./MetricsQueryResponse");
var MetricsQueryUnit_1 = require("./MetricsQueryUnit");
var Monitor_1 = require("./Monitor");
var MonitorOptions_1 = require("./MonitorOptions");
var MonitorOptionsAggregation_1 = require("./MonitorOptionsAggregation");
var MonitorState_1 = require("./MonitorState");
var MonitorStateGroup_1 = require("./MonitorStateGroup");
var MonitorSummaryWidgetDefinition_1 = require("./MonitorSummaryWidgetDefinition");
var MonitorThresholdWindowOptions_1 = require("./MonitorThresholdWindowOptions");
var MonitorThresholds_1 = require("./MonitorThresholds");
var MonitorUpdateRequest_1 = require("./MonitorUpdateRequest");
var NoteWidgetDefinition_1 = require("./NoteWidgetDefinition");
var NotebookAbsoluteTime_1 = require("./NotebookAbsoluteTime");
var NotebookAuthor_1 = require("./NotebookAuthor");
var NotebookCellCreateRequest_1 = require("./NotebookCellCreateRequest");
var NotebookCellResponse_1 = require("./NotebookCellResponse");
var NotebookCellUpdateRequest_1 = require("./NotebookCellUpdateRequest");
var NotebookCreateData_1 = require("./NotebookCreateData");
var NotebookCreateDataAttributes_1 = require("./NotebookCreateDataAttributes");
var NotebookCreateRequest_1 = require("./NotebookCreateRequest");
var NotebookDistributionCellAttributes_1 = require("./NotebookDistributionCellAttributes");
var NotebookHeatMapCellAttributes_1 = require("./NotebookHeatMapCellAttributes");
var NotebookLogStreamCellAttributes_1 = require("./NotebookLogStreamCellAttributes");
var NotebookMarkdownCellAttributes_1 = require("./NotebookMarkdownCellAttributes");
var NotebookMarkdownCellDefinition_1 = require("./NotebookMarkdownCellDefinition");
var NotebookRelativeTime_1 = require("./NotebookRelativeTime");
var NotebookResponse_1 = require("./NotebookResponse");
var NotebookResponseData_1 = require("./NotebookResponseData");
var NotebookResponseDataAttributes_1 = require("./NotebookResponseDataAttributes");
var NotebookSplitBy_1 = require("./NotebookSplitBy");
var NotebookTimeseriesCellAttributes_1 = require("./NotebookTimeseriesCellAttributes");
var NotebookToplistCellAttributes_1 = require("./NotebookToplistCellAttributes");
var NotebookUpdateData_1 = require("./NotebookUpdateData");
var NotebookUpdateDataAttributes_1 = require("./NotebookUpdateDataAttributes");
var NotebookUpdateRequest_1 = require("./NotebookUpdateRequest");
var NotebooksResponse_1 = require("./NotebooksResponse");
var NotebooksResponseData_1 = require("./NotebooksResponseData");
var NotebooksResponseDataAttributes_1 = require("./NotebooksResponseDataAttributes");
var NotebooksResponseMeta_1 = require("./NotebooksResponseMeta");
var NotebooksResponsePage_1 = require("./NotebooksResponsePage");
var Organization_1 = require("./Organization");
var OrganizationBilling_1 = require("./OrganizationBilling");
var OrganizationCreateBody_1 = require("./OrganizationCreateBody");
var OrganizationCreateResponse_1 = require("./OrganizationCreateResponse");
var OrganizationListResponse_1 = require("./OrganizationListResponse");
var OrganizationResponse_1 = require("./OrganizationResponse");
var OrganizationSettings_1 = require("./OrganizationSettings");
var OrganizationSettingsSaml_1 = require("./OrganizationSettingsSaml");
var OrganizationSettingsSamlAutocreateUsersDomains_1 = require("./OrganizationSettingsSamlAutocreateUsersDomains");
var OrganizationSettingsSamlIdpInitiatedLogin_1 = require("./OrganizationSettingsSamlIdpInitiatedLogin");
var OrganizationSettingsSamlStrictMode_1 = require("./OrganizationSettingsSamlStrictMode");
var OrganizationSubscription_1 = require("./OrganizationSubscription");
var PagerDutyService_1 = require("./PagerDutyService");
var PagerDutyServiceKey_1 = require("./PagerDutyServiceKey");
var PagerDutyServiceName_1 = require("./PagerDutyServiceName");
var ProcessQueryDefinition_1 = require("./ProcessQueryDefinition");
var QueryValueWidgetDefinition_1 = require("./QueryValueWidgetDefinition");
var QueryValueWidgetRequest_1 = require("./QueryValueWidgetRequest");
var SLOBulkDeleteError_1 = require("./SLOBulkDeleteError");
var SLOBulkDeleteResponse_1 = require("./SLOBulkDeleteResponse");
var SLOBulkDeleteResponseData_1 = require("./SLOBulkDeleteResponseData");
var SLOCorrection_1 = require("./SLOCorrection");
var SLOCorrectionCreateData_1 = require("./SLOCorrectionCreateData");
var SLOCorrectionCreateRequest_1 = require("./SLOCorrectionCreateRequest");
var SLOCorrectionCreateRequestAttributes_1 = require("./SLOCorrectionCreateRequestAttributes");
var SLOCorrectionListResponse_1 = require("./SLOCorrectionListResponse");
var SLOCorrectionResponse_1 = require("./SLOCorrectionResponse");
var SLOCorrectionResponseAttributes_1 = require("./SLOCorrectionResponseAttributes");
var SLOCorrectionUpdateData_1 = require("./SLOCorrectionUpdateData");
var SLOCorrectionUpdateRequest_1 = require("./SLOCorrectionUpdateRequest");
var SLOCorrectionUpdateRequestAttributes_1 = require("./SLOCorrectionUpdateRequestAttributes");
var SLODeleteResponse_1 = require("./SLODeleteResponse");
var SLOHistoryMetrics_1 = require("./SLOHistoryMetrics");
var SLOHistoryMetricsSeries_1 = require("./SLOHistoryMetricsSeries");
var SLOHistoryMetricsSeriesMetadata_1 = require("./SLOHistoryMetricsSeriesMetadata");
var SLOHistoryMetricsSeriesMetadataUnit_1 = require("./SLOHistoryMetricsSeriesMetadataUnit");
var SLOHistoryResponse_1 = require("./SLOHistoryResponse");
var SLOHistoryResponseData_1 = require("./SLOHistoryResponseData");
var SLOHistoryResponseError_1 = require("./SLOHistoryResponseError");
var SLOHistorySLIData_1 = require("./SLOHistorySLIData");
var SLOListResponse_1 = require("./SLOListResponse");
var SLOListResponseMetadata_1 = require("./SLOListResponseMetadata");
var SLOListResponseMetadataPage_1 = require("./SLOListResponseMetadataPage");
var SLOResponse_1 = require("./SLOResponse");
var SLOResponseData_1 = require("./SLOResponseData");
var SLOThreshold_1 = require("./SLOThreshold");
var SLOWidgetDefinition_1 = require("./SLOWidgetDefinition");
var ScatterPlotRequest_1 = require("./ScatterPlotRequest");
var ScatterPlotWidgetDefinition_1 = require("./ScatterPlotWidgetDefinition");
var ScatterPlotWidgetDefinitionRequests_1 = require("./ScatterPlotWidgetDefinitionRequests");
var Series_1 = require("./Series");
var ServiceCheck_1 = require("./ServiceCheck");
var ServiceLevelObjective_1 = require("./ServiceLevelObjective");
var ServiceLevelObjectiveQuery_1 = require("./ServiceLevelObjectiveQuery");
var ServiceLevelObjectiveRequest_1 = require("./ServiceLevelObjectiveRequest");
var ServiceMapWidgetDefinition_1 = require("./ServiceMapWidgetDefinition");
var ServiceSummaryWidgetDefinition_1 = require("./ServiceSummaryWidgetDefinition");
var SlackIntegrationChannel_1 = require("./SlackIntegrationChannel");
var SlackIntegrationChannelDisplay_1 = require("./SlackIntegrationChannelDisplay");
var SyntheticsAPIStep_1 = require("./SyntheticsAPIStep");
var SyntheticsAPITest_1 = require("./SyntheticsAPITest");
var SyntheticsAPITestConfig_1 = require("./SyntheticsAPITestConfig");
var SyntheticsAPITestResultData_1 = require("./SyntheticsAPITestResultData");
var SyntheticsAPITestResultFull_1 = require("./SyntheticsAPITestResultFull");
var SyntheticsAPITestResultFullCheck_1 = require("./SyntheticsAPITestResultFullCheck");
var SyntheticsAPITestResultShort_1 = require("./SyntheticsAPITestResultShort");
var SyntheticsAPITestResultShortResult_1 = require("./SyntheticsAPITestResultShortResult");
var SyntheticsAssertionJSONPathTarget_1 = require("./SyntheticsAssertionJSONPathTarget");
var SyntheticsAssertionJSONPathTargetTarget_1 = require("./SyntheticsAssertionJSONPathTargetTarget");
var SyntheticsAssertionTarget_1 = require("./SyntheticsAssertionTarget");
var SyntheticsBasicAuth_1 = require("./SyntheticsBasicAuth");
var SyntheticsBrowserError_1 = require("./SyntheticsBrowserError");
var SyntheticsBrowserTest_1 = require("./SyntheticsBrowserTest");
var SyntheticsBrowserTestConfig_1 = require("./SyntheticsBrowserTestConfig");
var SyntheticsBrowserTestResultData_1 = require("./SyntheticsBrowserTestResultData");
var SyntheticsBrowserTestResultFull_1 = require("./SyntheticsBrowserTestResultFull");
var SyntheticsBrowserTestResultFullCheck_1 = require("./SyntheticsBrowserTestResultFullCheck");
var SyntheticsBrowserTestResultShort_1 = require("./SyntheticsBrowserTestResultShort");
var SyntheticsBrowserTestResultShortResult_1 = require("./SyntheticsBrowserTestResultShortResult");
var SyntheticsBrowserVariable_1 = require("./SyntheticsBrowserVariable");
var SyntheticsCITest_1 = require("./SyntheticsCITest");
var SyntheticsCITestBody_1 = require("./SyntheticsCITestBody");
var SyntheticsCITestMetadata_1 = require("./SyntheticsCITestMetadata");
var SyntheticsCITestMetadataCi_1 = require("./SyntheticsCITestMetadataCi");
var SyntheticsCITestMetadataGit_1 = require("./SyntheticsCITestMetadataGit");
var SyntheticsConfigVariable_1 = require("./SyntheticsConfigVariable");
var SyntheticsCoreWebVitals_1 = require("./SyntheticsCoreWebVitals");
var SyntheticsDeleteTestsPayload_1 = require("./SyntheticsDeleteTestsPayload");
var SyntheticsDeleteTestsResponse_1 = require("./SyntheticsDeleteTestsResponse");
var SyntheticsDeletedTest_1 = require("./SyntheticsDeletedTest");
var SyntheticsDevice_1 = require("./SyntheticsDevice");
var SyntheticsGetAPITestLatestResultsResponse_1 = require("./SyntheticsGetAPITestLatestResultsResponse");
var SyntheticsGetBrowserTestLatestResultsResponse_1 = require("./SyntheticsGetBrowserTestLatestResultsResponse");
var SyntheticsGlobalVariable_1 = require("./SyntheticsGlobalVariable");
var SyntheticsGlobalVariableParseTestOptions_1 = require("./SyntheticsGlobalVariableParseTestOptions");
var SyntheticsGlobalVariableValue_1 = require("./SyntheticsGlobalVariableValue");
var SyntheticsListTestsResponse_1 = require("./SyntheticsListTestsResponse");
var SyntheticsLocation_1 = require("./SyntheticsLocation");
var SyntheticsLocations_1 = require("./SyntheticsLocations");
var SyntheticsParsingOptions_1 = require("./SyntheticsParsingOptions");
var SyntheticsPrivateLocation_1 = require("./SyntheticsPrivateLocation");
var SyntheticsPrivateLocationCreationResponse_1 = require("./SyntheticsPrivateLocationCreationResponse");
var SyntheticsPrivateLocationCreationResponseResultEncryption_1 = require("./SyntheticsPrivateLocationCreationResponseResultEncryption");
var SyntheticsPrivateLocationSecrets_1 = require("./SyntheticsPrivateLocationSecrets");
var SyntheticsPrivateLocationSecretsAuthentication_1 = require("./SyntheticsPrivateLocationSecretsAuthentication");
var SyntheticsPrivateLocationSecretsConfigDecryption_1 = require("./SyntheticsPrivateLocationSecretsConfigDecryption");
var SyntheticsSSLCertificate_1 = require("./SyntheticsSSLCertificate");
var SyntheticsSSLCertificateIssuer_1 = require("./SyntheticsSSLCertificateIssuer");
var SyntheticsSSLCertificateSubject_1 = require("./SyntheticsSSLCertificateSubject");
var SyntheticsStep_1 = require("./SyntheticsStep");
var SyntheticsStepDetail_1 = require("./SyntheticsStepDetail");
var SyntheticsStepDetailWarning_1 = require("./SyntheticsStepDetailWarning");
var SyntheticsTestConfig_1 = require("./SyntheticsTestConfig");
var SyntheticsTestDetails_1 = require("./SyntheticsTestDetails");
var SyntheticsTestOptions_1 = require("./SyntheticsTestOptions");
var SyntheticsTestOptionsMonitorOptions_1 = require("./SyntheticsTestOptionsMonitorOptions");
var SyntheticsTestOptionsRetry_1 = require("./SyntheticsTestOptionsRetry");
var SyntheticsTestRequest_1 = require("./SyntheticsTestRequest");
var SyntheticsTestRequestCertificate_1 = require("./SyntheticsTestRequestCertificate");
var SyntheticsTestRequestCertificateItem_1 = require("./SyntheticsTestRequestCertificateItem");
var SyntheticsTiming_1 = require("./SyntheticsTiming");
var SyntheticsTriggerCITestLocation_1 = require("./SyntheticsTriggerCITestLocation");
var SyntheticsTriggerCITestRunResult_1 = require("./SyntheticsTriggerCITestRunResult");
var SyntheticsTriggerCITestsResponse_1 = require("./SyntheticsTriggerCITestsResponse");
var SyntheticsUpdateTestPauseStatusPayload_1 = require("./SyntheticsUpdateTestPauseStatusPayload");
var SyntheticsVariableParser_1 = require("./SyntheticsVariableParser");
var TableWidgetDefinition_1 = require("./TableWidgetDefinition");
var TableWidgetRequest_1 = require("./TableWidgetRequest");
var TagToHosts_1 = require("./TagToHosts");
var TimeseriesWidgetDefinition_1 = require("./TimeseriesWidgetDefinition");
var TimeseriesWidgetExpressionAlias_1 = require("./TimeseriesWidgetExpressionAlias");
var TimeseriesWidgetRequest_1 = require("./TimeseriesWidgetRequest");
var ToplistWidgetDefinition_1 = require("./ToplistWidgetDefinition");
var ToplistWidgetRequest_1 = require("./ToplistWidgetRequest");
var UsageAnalyzedLogsHour_1 = require("./UsageAnalyzedLogsHour");
var UsageAnalyzedLogsResponse_1 = require("./UsageAnalyzedLogsResponse");
var UsageAttributionAggregatesBody_1 = require("./UsageAttributionAggregatesBody");
var UsageAttributionBody_1 = require("./UsageAttributionBody");
var UsageAttributionMetadata_1 = require("./UsageAttributionMetadata");
var UsageAttributionPagination_1 = require("./UsageAttributionPagination");
var UsageAttributionResponse_1 = require("./UsageAttributionResponse");
var UsageAttributionValues_1 = require("./UsageAttributionValues");
var UsageBillableSummaryBody_1 = require("./UsageBillableSummaryBody");
var UsageBillableSummaryHour_1 = require("./UsageBillableSummaryHour");
var UsageBillableSummaryKeys_1 = require("./UsageBillableSummaryKeys");
var UsageBillableSummaryResponse_1 = require("./UsageBillableSummaryResponse");
var UsageComplianceHour_1 = require("./UsageComplianceHour");
var UsageComplianceResponse_1 = require("./UsageComplianceResponse");
var UsageCustomReportsAttributes_1 = require("./UsageCustomReportsAttributes");
var UsageCustomReportsData_1 = require("./UsageCustomReportsData");
var UsageCustomReportsMeta_1 = require("./UsageCustomReportsMeta");
var UsageCustomReportsPage_1 = require("./UsageCustomReportsPage");
var UsageCustomReportsResponse_1 = require("./UsageCustomReportsResponse");
var UsageFargateHour_1 = require("./UsageFargateHour");
var UsageFargateResponse_1 = require("./UsageFargateResponse");
var UsageHostHour_1 = require("./UsageHostHour");
var UsageHostsResponse_1 = require("./UsageHostsResponse");
var UsageIncidentManagementHour_1 = require("./UsageIncidentManagementHour");
var UsageIncidentManagementResponse_1 = require("./UsageIncidentManagementResponse");
var UsageIndexedSpansHour_1 = require("./UsageIndexedSpansHour");
var UsageIndexedSpansResponse_1 = require("./UsageIndexedSpansResponse");
var UsageIngestedSpansHour_1 = require("./UsageIngestedSpansHour");
var UsageIngestedSpansResponse_1 = require("./UsageIngestedSpansResponse");
var UsageIoTHour_1 = require("./UsageIoTHour");
var UsageIoTResponse_1 = require("./UsageIoTResponse");
var UsageLambdaHour_1 = require("./UsageLambdaHour");
var UsageLambdaResponse_1 = require("./UsageLambdaResponse");
var UsageLogsByIndexHour_1 = require("./UsageLogsByIndexHour");
var UsageLogsByIndexResponse_1 = require("./UsageLogsByIndexResponse");
var UsageLogsByRetentionHour_1 = require("./UsageLogsByRetentionHour");
var UsageLogsByRetentionResponse_1 = require("./UsageLogsByRetentionResponse");
var UsageLogsHour_1 = require("./UsageLogsHour");
var UsageLogsResponse_1 = require("./UsageLogsResponse");
var UsageNetworkFlowsHour_1 = require("./UsageNetworkFlowsHour");
var UsageNetworkFlowsResponse_1 = require("./UsageNetworkFlowsResponse");
var UsageNetworkHostsHour_1 = require("./UsageNetworkHostsHour");
var UsageNetworkHostsResponse_1 = require("./UsageNetworkHostsResponse");
var UsageProfilingHour_1 = require("./UsageProfilingHour");
var UsageProfilingResponse_1 = require("./UsageProfilingResponse");
var UsageRumSessionsHour_1 = require("./UsageRumSessionsHour");
var UsageRumSessionsResponse_1 = require("./UsageRumSessionsResponse");
var UsageSNMPHour_1 = require("./UsageSNMPHour");
var UsageSNMPResponse_1 = require("./UsageSNMPResponse");
var UsageSpecifiedCustomReportsAttributes_1 = require("./UsageSpecifiedCustomReportsAttributes");
var UsageSpecifiedCustomReportsData_1 = require("./UsageSpecifiedCustomReportsData");
var UsageSpecifiedCustomReportsMeta_1 = require("./UsageSpecifiedCustomReportsMeta");
var UsageSpecifiedCustomReportsPage_1 = require("./UsageSpecifiedCustomReportsPage");
var UsageSpecifiedCustomReportsResponse_1 = require("./UsageSpecifiedCustomReportsResponse");
var UsageSummaryDate_1 = require("./UsageSummaryDate");
var UsageSummaryDateOrg_1 = require("./UsageSummaryDateOrg");
var UsageSummaryResponse_1 = require("./UsageSummaryResponse");
var UsageSyntheticsAPIHour_1 = require("./UsageSyntheticsAPIHour");
var UsageSyntheticsAPIResponse_1 = require("./UsageSyntheticsAPIResponse");
var UsageSyntheticsBrowserHour_1 = require("./UsageSyntheticsBrowserHour");
var UsageSyntheticsBrowserResponse_1 = require("./UsageSyntheticsBrowserResponse");
var UsageSyntheticsHour_1 = require("./UsageSyntheticsHour");
var UsageSyntheticsResponse_1 = require("./UsageSyntheticsResponse");
var UsageTimeseriesHour_1 = require("./UsageTimeseriesHour");
var UsageTimeseriesResponse_1 = require("./UsageTimeseriesResponse");
var UsageTopAvgMetricsHour_1 = require("./UsageTopAvgMetricsHour");
var UsageTopAvgMetricsMetadata_1 = require("./UsageTopAvgMetricsMetadata");
var UsageTopAvgMetricsResponse_1 = require("./UsageTopAvgMetricsResponse");
var UsageTraceHour_1 = require("./UsageTraceHour");
var UsageTraceResponse_1 = require("./UsageTraceResponse");
var UsageTracingWithoutLimitsHour_1 = require("./UsageTracingWithoutLimitsHour");
var UsageTracingWithoutLimitsResponse_1 = require("./UsageTracingWithoutLimitsResponse");
var User_1 = require("./User");
var UserDisableResponse_1 = require("./UserDisableResponse");
var UserListResponse_1 = require("./UserListResponse");
var UserResponse_1 = require("./UserResponse");
var Widget_1 = require("./Widget");
var WidgetAxis_1 = require("./WidgetAxis");
var WidgetConditionalFormat_1 = require("./WidgetConditionalFormat");
var WidgetCustomLink_1 = require("./WidgetCustomLink");
var WidgetEvent_1 = require("./WidgetEvent");
var WidgetFieldSort_1 = require("./WidgetFieldSort");
var WidgetFormula_1 = require("./WidgetFormula");
var WidgetFormulaLimit_1 = require("./WidgetFormulaLimit");
var WidgetLayout_1 = require("./WidgetLayout");
var WidgetMarker_1 = require("./WidgetMarker");
var WidgetRequestStyle_1 = require("./WidgetRequestStyle");
var WidgetStyle_1 = require("./WidgetStyle");
var WidgetTime_1 = require("./WidgetTime");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0
};
var enumsMap = new Set([
    "AWSNamespace",
    "AccessRole",
    "AlertGraphWidgetDefinitionType",
    "AlertValueWidgetDefinitionType",
    "ApmStatsQueryRowType",
    "ChangeWidgetDefinitionType",
    "CheckStatusWidgetDefinitionType",
    "ContentEncoding",
    "DashboardLayoutType",
    "DashboardReflowType",
    "DistributionWidgetDefinitionType",
    "EventAlertType",
    "EventPriority",
    "EventStreamWidgetDefinitionType",
    "EventTimelineWidgetDefinitionType",
    "FormulaAndFunctionEventAggregation",
    "FormulaAndFunctionEventsDataSource",
    "FormulaAndFunctionMetricAggregation",
    "FormulaAndFunctionMetricDataSource",
    "FormulaAndFunctionProcessQueryDataSource",
    "FormulaAndFunctionResponseFormat",
    "FreeTextWidgetDefinitionType",
    "GeomapWidgetDefinitionType",
    "GroupWidgetDefinitionType",
    "HTTPMethod",
    "HeatMapWidgetDefinitionType",
    "HostMapWidgetDefinitionType",
    "IFrameWidgetDefinitionType",
    "ImageWidgetDefinitionType",
    "LogStreamWidgetDefinitionType",
    "LogsArithmeticProcessorType",
    "LogsAttributeRemapperType",
    "LogsCategoryProcessorType",
    "LogsDateRemapperType",
    "LogsGeoIPParserType",
    "LogsGrokParserType",
    "LogsLookupProcessorType",
    "LogsMessageRemapperType",
    "LogsPipelineProcessorType",
    "LogsServiceRemapperType",
    "LogsSort",
    "LogsStatusRemapperType",
    "LogsStringBuilderProcessorType",
    "LogsTraceRemapperType",
    "LogsURLParserType",
    "LogsUserAgentParserType",
    "MonitorDeviceID",
    "MonitorOverallStates",
    "MonitorSummaryWidgetDefinitionType",
    "MonitorType",
    "NoteWidgetDefinitionType",
    "NotebookCellResourceType",
    "NotebookGraphSize",
    "NotebookMarkdownCellDefinitionType",
    "NotebookResourceType",
    "NotebookStatus",
    "QuerySortOrder",
    "QueryValueWidgetDefinitionType",
    "SLOCorrectionCategory",
    "SLOCorrectionType",
    "SLOErrorTimeframe",
    "SLOTimeframe",
    "SLOType",
    "SLOTypeNumeric",
    "SLOWidgetDefinitionType",
    "ScatterPlotWidgetDefinitionType",
    "ServiceCheckStatus",
    "ServiceMapWidgetDefinitionType",
    "ServiceSummaryWidgetDefinitionType",
    "SyntheticsAPIStepSubtype",
    "SyntheticsAPITestType",
    "SyntheticsAssertionJSONPathOperator",
    "SyntheticsAssertionOperator",
    "SyntheticsAssertionType",
    "SyntheticsBrowserErrorType",
    "SyntheticsBrowserTestType",
    "SyntheticsBrowserVariableType",
    "SyntheticsCheckType",
    "SyntheticsConfigVariableType",
    "SyntheticsDeviceID",
    "SyntheticsErrorCode",
    "SyntheticsGlobalVariableParseTestOptionsType",
    "SyntheticsGlobalVariableParserType",
    "SyntheticsPlayingTab",
    "SyntheticsStepType",
    "SyntheticsTestDetailsSubType",
    "SyntheticsTestDetailsType",
    "SyntheticsTestMonitorStatus",
    "SyntheticsTestPauseStatus",
    "SyntheticsTestProcessStatus",
    "SyntheticsTickInterval",
    "SyntheticsWarningType",
    "TableWidgetCellDisplayMode",
    "TableWidgetDefinitionType",
    "TableWidgetHasSearchBar",
    "TargetFormatType",
    "TimeseriesWidgetDefinitionType",
    "TimeseriesWidgetLegendColumn",
    "TimeseriesWidgetLegendLayout",
    "ToplistWidgetDefinitionType",
    "UsageAttributionSort",
    "UsageAttributionSupportedMetrics",
    "UsageMetricCategory",
    "UsageReportsType",
    "UsageSort",
    "UsageSortDirection",
    "WidgetAggregator",
    "WidgetChangeType",
    "WidgetColorPreference",
    "WidgetComparator",
    "WidgetCompareTo",
    "WidgetDisplayType",
    "WidgetEventSize",
    "WidgetGrouping",
    "WidgetHorizontalAlign",
    "WidgetImageSizing",
    "WidgetLayoutType",
    "WidgetLineType",
    "WidgetLineWidth",
    "WidgetLiveSpan",
    "WidgetMargin",
    "WidgetMessageDisplay",
    "WidgetMonitorSummaryDisplayFormat",
    "WidgetMonitorSummarySort",
    "WidgetNodeType",
    "WidgetOrderBy",
    "WidgetPalette",
    "WidgetServiceSummaryDisplayFormat",
    "WidgetSizeFormat",
    "WidgetSort",
    "WidgetSummaryType",
    "WidgetTextAlign",
    "WidgetTickEdge",
    "WidgetTimeWindows",
    "WidgetVerticalAlign",
    "WidgetViewMode",
    "WidgetVizType",
]);
var typeMap = {
    "APIErrorResponse": APIErrorResponse_1.APIErrorResponse,
    "AWSAccount": AWSAccount_1.AWSAccount,
    "AWSAccountAndLambdaRequest": AWSAccountAndLambdaRequest_1.AWSAccountAndLambdaRequest,
    "AWSAccountCreateResponse": AWSAccountCreateResponse_1.AWSAccountCreateResponse,
    "AWSAccountListResponse": AWSAccountListResponse_1.AWSAccountListResponse,
    "AWSLogsAsyncError": AWSLogsAsyncError_1.AWSLogsAsyncError,
    "AWSLogsAsyncResponse": AWSLogsAsyncResponse_1.AWSLogsAsyncResponse,
    "AWSLogsLambda": AWSLogsLambda_1.AWSLogsLambda,
    "AWSLogsListResponse": AWSLogsListResponse_1.AWSLogsListResponse,
    "AWSLogsListServicesResponse": AWSLogsListServicesResponse_1.AWSLogsListServicesResponse,
    "AWSLogsServicesRequest": AWSLogsServicesRequest_1.AWSLogsServicesRequest,
    "AWSTagFilter": AWSTagFilter_1.AWSTagFilter,
    "AWSTagFilterCreateRequest": AWSTagFilterCreateRequest_1.AWSTagFilterCreateRequest,
    "AWSTagFilterDeleteRequest": AWSTagFilterDeleteRequest_1.AWSTagFilterDeleteRequest,
    "AWSTagFilterListResponse": AWSTagFilterListResponse_1.AWSTagFilterListResponse,
    "AlertGraphWidgetDefinition": AlertGraphWidgetDefinition_1.AlertGraphWidgetDefinition,
    "AlertValueWidgetDefinition": AlertValueWidgetDefinition_1.AlertValueWidgetDefinition,
    "ApiKey": ApiKey_1.ApiKey,
    "ApiKeyListResponse": ApiKeyListResponse_1.ApiKeyListResponse,
    "ApiKeyResponse": ApiKeyResponse_1.ApiKeyResponse,
    "ApmStatsQueryColumnType": ApmStatsQueryColumnType_1.ApmStatsQueryColumnType,
    "ApmStatsQueryDefinition": ApmStatsQueryDefinition_1.ApmStatsQueryDefinition,
    "ApplicationKey": ApplicationKey_1.ApplicationKey,
    "ApplicationKeyListResponse": ApplicationKeyListResponse_1.ApplicationKeyListResponse,
    "ApplicationKeyResponse": ApplicationKeyResponse_1.ApplicationKeyResponse,
    "AuthenticationValidationResponse": AuthenticationValidationResponse_1.AuthenticationValidationResponse,
    "AzureAccount": AzureAccount_1.AzureAccount,
    "CancelDowntimesByScopeRequest": CancelDowntimesByScopeRequest_1.CancelDowntimesByScopeRequest,
    "CanceledDowntimesIds": CanceledDowntimesIds_1.CanceledDowntimesIds,
    "ChangeWidgetDefinition": ChangeWidgetDefinition_1.ChangeWidgetDefinition,
    "ChangeWidgetRequest": ChangeWidgetRequest_1.ChangeWidgetRequest,
    "CheckCanDeleteMonitorResponse": CheckCanDeleteMonitorResponse_1.CheckCanDeleteMonitorResponse,
    "CheckCanDeleteMonitorResponseData": CheckCanDeleteMonitorResponseData_1.CheckCanDeleteMonitorResponseData,
    "CheckCanDeleteSLOResponse": CheckCanDeleteSLOResponse_1.CheckCanDeleteSLOResponse,
    "CheckCanDeleteSLOResponseData": CheckCanDeleteSLOResponseData_1.CheckCanDeleteSLOResponseData,
    "CheckStatusWidgetDefinition": CheckStatusWidgetDefinition_1.CheckStatusWidgetDefinition,
    "Creator": Creator_1.Creator,
    "Dashboard": Dashboard_1.Dashboard,
    "DashboardDeleteResponse": DashboardDeleteResponse_1.DashboardDeleteResponse,
    "DashboardList": DashboardList_1.DashboardList,
    "DashboardListDeleteResponse": DashboardListDeleteResponse_1.DashboardListDeleteResponse,
    "DashboardListListResponse": DashboardListListResponse_1.DashboardListListResponse,
    "DashboardSummary": DashboardSummary_1.DashboardSummary,
    "DashboardSummaryDefinition": DashboardSummaryDefinition_1.DashboardSummaryDefinition,
    "DashboardTemplateVariable": DashboardTemplateVariable_1.DashboardTemplateVariable,
    "DashboardTemplateVariablePreset": DashboardTemplateVariablePreset_1.DashboardTemplateVariablePreset,
    "DashboardTemplateVariablePresetValue": DashboardTemplateVariablePresetValue_1.DashboardTemplateVariablePresetValue,
    "DeletedMonitor": DeletedMonitor_1.DeletedMonitor,
    "DistributionWidgetDefinition": DistributionWidgetDefinition_1.DistributionWidgetDefinition,
    "DistributionWidgetRequest": DistributionWidgetRequest_1.DistributionWidgetRequest,
    "DistributionWidgetXAxis": DistributionWidgetXAxis_1.DistributionWidgetXAxis,
    "DistributionWidgetYAxis": DistributionWidgetYAxis_1.DistributionWidgetYAxis,
    "Downtime": Downtime_1.Downtime,
    "DowntimeChild": DowntimeChild_1.DowntimeChild,
    "DowntimeRecurrence": DowntimeRecurrence_1.DowntimeRecurrence,
    "Event": Event_1.Event,
    "EventCreateRequest": EventCreateRequest_1.EventCreateRequest,
    "EventCreateResponse": EventCreateResponse_1.EventCreateResponse,
    "EventListResponse": EventListResponse_1.EventListResponse,
    "EventQueryDefinition": EventQueryDefinition_1.EventQueryDefinition,
    "EventResponse": EventResponse_1.EventResponse,
    "EventStreamWidgetDefinition": EventStreamWidgetDefinition_1.EventStreamWidgetDefinition,
    "EventTimelineWidgetDefinition": EventTimelineWidgetDefinition_1.EventTimelineWidgetDefinition,
    "FormulaAndFunctionEventQueryDefinition": FormulaAndFunctionEventQueryDefinition_1.FormulaAndFunctionEventQueryDefinition,
    "FormulaAndFunctionEventQueryDefinitionCompute": FormulaAndFunctionEventQueryDefinitionCompute_1.FormulaAndFunctionEventQueryDefinitionCompute,
    "FormulaAndFunctionEventQueryDefinitionSearch": FormulaAndFunctionEventQueryDefinitionSearch_1.FormulaAndFunctionEventQueryDefinitionSearch,
    "FormulaAndFunctionEventQueryGroupBy": FormulaAndFunctionEventQueryGroupBy_1.FormulaAndFunctionEventQueryGroupBy,
    "FormulaAndFunctionEventQueryGroupBySort": FormulaAndFunctionEventQueryGroupBySort_1.FormulaAndFunctionEventQueryGroupBySort,
    "FormulaAndFunctionMetricQueryDefinition": FormulaAndFunctionMetricQueryDefinition_1.FormulaAndFunctionMetricQueryDefinition,
    "FormulaAndFunctionProcessQueryDefinition": FormulaAndFunctionProcessQueryDefinition_1.FormulaAndFunctionProcessQueryDefinition,
    "FreeTextWidgetDefinition": FreeTextWidgetDefinition_1.FreeTextWidgetDefinition,
    "GCPAccount": GCPAccount_1.GCPAccount,
    "GeomapWidgetDefinition": GeomapWidgetDefinition_1.GeomapWidgetDefinition,
    "GeomapWidgetDefinitionStyle": GeomapWidgetDefinitionStyle_1.GeomapWidgetDefinitionStyle,
    "GeomapWidgetDefinitionView": GeomapWidgetDefinitionView_1.GeomapWidgetDefinitionView,
    "GeomapWidgetRequest": GeomapWidgetRequest_1.GeomapWidgetRequest,
    "GraphSnapshot": GraphSnapshot_1.GraphSnapshot,
    "GroupWidgetDefinition": GroupWidgetDefinition_1.GroupWidgetDefinition,
    "HTTPLogError": HTTPLogError_1.HTTPLogError,
    "HTTPLogItem": HTTPLogItem_1.HTTPLogItem,
    "HeatMapWidgetDefinition": HeatMapWidgetDefinition_1.HeatMapWidgetDefinition,
    "HeatMapWidgetRequest": HeatMapWidgetRequest_1.HeatMapWidgetRequest,
    "Host": Host_1.Host,
    "HostListResponse": HostListResponse_1.HostListResponse,
    "HostMapRequest": HostMapRequest_1.HostMapRequest,
    "HostMapWidgetDefinition": HostMapWidgetDefinition_1.HostMapWidgetDefinition,
    "HostMapWidgetDefinitionRequests": HostMapWidgetDefinitionRequests_1.HostMapWidgetDefinitionRequests,
    "HostMapWidgetDefinitionStyle": HostMapWidgetDefinitionStyle_1.HostMapWidgetDefinitionStyle,
    "HostMeta": HostMeta_1.HostMeta,
    "HostMetrics": HostMetrics_1.HostMetrics,
    "HostMuteResponse": HostMuteResponse_1.HostMuteResponse,
    "HostMuteSettings": HostMuteSettings_1.HostMuteSettings,
    "HostTags": HostTags_1.HostTags,
    "HostTotals": HostTotals_1.HostTotals,
    "IFrameWidgetDefinition": IFrameWidgetDefinition_1.IFrameWidgetDefinition,
    "IPPrefixesAPI": IPPrefixesAPI_1.IPPrefixesAPI,
    "IPPrefixesAPM": IPPrefixesAPM_1.IPPrefixesAPM,
    "IPPrefixesAgents": IPPrefixesAgents_1.IPPrefixesAgents,
    "IPPrefixesLogs": IPPrefixesLogs_1.IPPrefixesLogs,
    "IPPrefixesProcess": IPPrefixesProcess_1.IPPrefixesProcess,
    "IPPrefixesSynthetics": IPPrefixesSynthetics_1.IPPrefixesSynthetics,
    "IPPrefixesWebhooks": IPPrefixesWebhooks_1.IPPrefixesWebhooks,
    "IPRanges": IPRanges_1.IPRanges,
    "IdpFormData": IdpFormData_1.IdpFormData,
    "IdpResponse": IdpResponse_1.IdpResponse,
    "ImageWidgetDefinition": ImageWidgetDefinition_1.ImageWidgetDefinition,
    "IntakePayloadAccepted": IntakePayloadAccepted_1.IntakePayloadAccepted,
    "Log": Log_1.Log,
    "LogContent": LogContent_1.LogContent,
    "LogQueryDefinition": LogQueryDefinition_1.LogQueryDefinition,
    "LogQueryDefinitionGroupBy": LogQueryDefinitionGroupBy_1.LogQueryDefinitionGroupBy,
    "LogQueryDefinitionGroupBySort": LogQueryDefinitionGroupBySort_1.LogQueryDefinitionGroupBySort,
    "LogQueryDefinitionSearch": LogQueryDefinitionSearch_1.LogQueryDefinitionSearch,
    "LogStreamWidgetDefinition": LogStreamWidgetDefinition_1.LogStreamWidgetDefinition,
    "LogsAPIError": LogsAPIError_1.LogsAPIError,
    "LogsAPIErrorResponse": LogsAPIErrorResponse_1.LogsAPIErrorResponse,
    "LogsArithmeticProcessor": LogsArithmeticProcessor_1.LogsArithmeticProcessor,
    "LogsAttributeRemapper": LogsAttributeRemapper_1.LogsAttributeRemapper,
    "LogsByRetention": LogsByRetention_1.LogsByRetention,
    "LogsByRetentionMonthlyUsage": LogsByRetentionMonthlyUsage_1.LogsByRetentionMonthlyUsage,
    "LogsByRetentionOrgUsage": LogsByRetentionOrgUsage_1.LogsByRetentionOrgUsage,
    "LogsByRetentionOrgs": LogsByRetentionOrgs_1.LogsByRetentionOrgs,
    "LogsCategoryProcessor": LogsCategoryProcessor_1.LogsCategoryProcessor,
    "LogsCategoryProcessorCategory": LogsCategoryProcessorCategory_1.LogsCategoryProcessorCategory,
    "LogsDateRemapper": LogsDateRemapper_1.LogsDateRemapper,
    "LogsExclusion": LogsExclusion_1.LogsExclusion,
    "LogsExclusionFilter": LogsExclusionFilter_1.LogsExclusionFilter,
    "LogsFilter": LogsFilter_1.LogsFilter,
    "LogsGeoIPParser": LogsGeoIPParser_1.LogsGeoIPParser,
    "LogsGrokParser": LogsGrokParser_1.LogsGrokParser,
    "LogsGrokParserRules": LogsGrokParserRules_1.LogsGrokParserRules,
    "LogsIndex": LogsIndex_1.LogsIndex,
    "LogsIndexListResponse": LogsIndexListResponse_1.LogsIndexListResponse,
    "LogsIndexUpdateRequest": LogsIndexUpdateRequest_1.LogsIndexUpdateRequest,
    "LogsIndexesOrder": LogsIndexesOrder_1.LogsIndexesOrder,
    "LogsListRequest": LogsListRequest_1.LogsListRequest,
    "LogsListRequestTime": LogsListRequestTime_1.LogsListRequestTime,
    "LogsListResponse": LogsListResponse_1.LogsListResponse,
    "LogsLookupProcessor": LogsLookupProcessor_1.LogsLookupProcessor,
    "LogsMessageRemapper": LogsMessageRemapper_1.LogsMessageRemapper,
    "LogsPipeline": LogsPipeline_1.LogsPipeline,
    "LogsPipelineProcessor": LogsPipelineProcessor_1.LogsPipelineProcessor,
    "LogsPipelinesOrder": LogsPipelinesOrder_1.LogsPipelinesOrder,
    "LogsQueryCompute": LogsQueryCompute_1.LogsQueryCompute,
    "LogsRetentionAggSumUsage": LogsRetentionAggSumUsage_1.LogsRetentionAggSumUsage,
    "LogsRetentionSumUsage": LogsRetentionSumUsage_1.LogsRetentionSumUsage,
    "LogsServiceRemapper": LogsServiceRemapper_1.LogsServiceRemapper,
    "LogsStatusRemapper": LogsStatusRemapper_1.LogsStatusRemapper,
    "LogsStringBuilderProcessor": LogsStringBuilderProcessor_1.LogsStringBuilderProcessor,
    "LogsTraceRemapper": LogsTraceRemapper_1.LogsTraceRemapper,
    "LogsURLParser": LogsURLParser_1.LogsURLParser,
    "LogsUserAgentParser": LogsUserAgentParser_1.LogsUserAgentParser,
    "MetricMetadata": MetricMetadata_1.MetricMetadata,
    "MetricSearchResponse": MetricSearchResponse_1.MetricSearchResponse,
    "MetricSearchResponseResults": MetricSearchResponseResults_1.MetricSearchResponseResults,
    "MetricsListResponse": MetricsListResponse_1.MetricsListResponse,
    "MetricsPayload": MetricsPayload_1.MetricsPayload,
    "MetricsQueryMetadata": MetricsQueryMetadata_1.MetricsQueryMetadata,
    "MetricsQueryResponse": MetricsQueryResponse_1.MetricsQueryResponse,
    "MetricsQueryUnit": MetricsQueryUnit_1.MetricsQueryUnit,
    "Monitor": Monitor_1.Monitor,
    "MonitorOptions": MonitorOptions_1.MonitorOptions,
    "MonitorOptionsAggregation": MonitorOptionsAggregation_1.MonitorOptionsAggregation,
    "MonitorState": MonitorState_1.MonitorState,
    "MonitorStateGroup": MonitorStateGroup_1.MonitorStateGroup,
    "MonitorSummaryWidgetDefinition": MonitorSummaryWidgetDefinition_1.MonitorSummaryWidgetDefinition,
    "MonitorThresholdWindowOptions": MonitorThresholdWindowOptions_1.MonitorThresholdWindowOptions,
    "MonitorThresholds": MonitorThresholds_1.MonitorThresholds,
    "MonitorUpdateRequest": MonitorUpdateRequest_1.MonitorUpdateRequest,
    "NoteWidgetDefinition": NoteWidgetDefinition_1.NoteWidgetDefinition,
    "NotebookAbsoluteTime": NotebookAbsoluteTime_1.NotebookAbsoluteTime,
    "NotebookAuthor": NotebookAuthor_1.NotebookAuthor,
    "NotebookCellCreateRequest": NotebookCellCreateRequest_1.NotebookCellCreateRequest,
    "NotebookCellResponse": NotebookCellResponse_1.NotebookCellResponse,
    "NotebookCellUpdateRequest": NotebookCellUpdateRequest_1.NotebookCellUpdateRequest,
    "NotebookCreateData": NotebookCreateData_1.NotebookCreateData,
    "NotebookCreateDataAttributes": NotebookCreateDataAttributes_1.NotebookCreateDataAttributes,
    "NotebookCreateRequest": NotebookCreateRequest_1.NotebookCreateRequest,
    "NotebookDistributionCellAttributes": NotebookDistributionCellAttributes_1.NotebookDistributionCellAttributes,
    "NotebookHeatMapCellAttributes": NotebookHeatMapCellAttributes_1.NotebookHeatMapCellAttributes,
    "NotebookLogStreamCellAttributes": NotebookLogStreamCellAttributes_1.NotebookLogStreamCellAttributes,
    "NotebookMarkdownCellAttributes": NotebookMarkdownCellAttributes_1.NotebookMarkdownCellAttributes,
    "NotebookMarkdownCellDefinition": NotebookMarkdownCellDefinition_1.NotebookMarkdownCellDefinition,
    "NotebookRelativeTime": NotebookRelativeTime_1.NotebookRelativeTime,
    "NotebookResponse": NotebookResponse_1.NotebookResponse,
    "NotebookResponseData": NotebookResponseData_1.NotebookResponseData,
    "NotebookResponseDataAttributes": NotebookResponseDataAttributes_1.NotebookResponseDataAttributes,
    "NotebookSplitBy": NotebookSplitBy_1.NotebookSplitBy,
    "NotebookTimeseriesCellAttributes": NotebookTimeseriesCellAttributes_1.NotebookTimeseriesCellAttributes,
    "NotebookToplistCellAttributes": NotebookToplistCellAttributes_1.NotebookToplistCellAttributes,
    "NotebookUpdateData": NotebookUpdateData_1.NotebookUpdateData,
    "NotebookUpdateDataAttributes": NotebookUpdateDataAttributes_1.NotebookUpdateDataAttributes,
    "NotebookUpdateRequest": NotebookUpdateRequest_1.NotebookUpdateRequest,
    "NotebooksResponse": NotebooksResponse_1.NotebooksResponse,
    "NotebooksResponseData": NotebooksResponseData_1.NotebooksResponseData,
    "NotebooksResponseDataAttributes": NotebooksResponseDataAttributes_1.NotebooksResponseDataAttributes,
    "NotebooksResponseMeta": NotebooksResponseMeta_1.NotebooksResponseMeta,
    "NotebooksResponsePage": NotebooksResponsePage_1.NotebooksResponsePage,
    "Organization": Organization_1.Organization,
    "OrganizationBilling": OrganizationBilling_1.OrganizationBilling,
    "OrganizationCreateBody": OrganizationCreateBody_1.OrganizationCreateBody,
    "OrganizationCreateResponse": OrganizationCreateResponse_1.OrganizationCreateResponse,
    "OrganizationListResponse": OrganizationListResponse_1.OrganizationListResponse,
    "OrganizationResponse": OrganizationResponse_1.OrganizationResponse,
    "OrganizationSettings": OrganizationSettings_1.OrganizationSettings,
    "OrganizationSettingsSaml": OrganizationSettingsSaml_1.OrganizationSettingsSaml,
    "OrganizationSettingsSamlAutocreateUsersDomains": OrganizationSettingsSamlAutocreateUsersDomains_1.OrganizationSettingsSamlAutocreateUsersDomains,
    "OrganizationSettingsSamlIdpInitiatedLogin": OrganizationSettingsSamlIdpInitiatedLogin_1.OrganizationSettingsSamlIdpInitiatedLogin,
    "OrganizationSettingsSamlStrictMode": OrganizationSettingsSamlStrictMode_1.OrganizationSettingsSamlStrictMode,
    "OrganizationSubscription": OrganizationSubscription_1.OrganizationSubscription,
    "PagerDutyService": PagerDutyService_1.PagerDutyService,
    "PagerDutyServiceKey": PagerDutyServiceKey_1.PagerDutyServiceKey,
    "PagerDutyServiceName": PagerDutyServiceName_1.PagerDutyServiceName,
    "ProcessQueryDefinition": ProcessQueryDefinition_1.ProcessQueryDefinition,
    "QueryValueWidgetDefinition": QueryValueWidgetDefinition_1.QueryValueWidgetDefinition,
    "QueryValueWidgetRequest": QueryValueWidgetRequest_1.QueryValueWidgetRequest,
    "SLOBulkDeleteError": SLOBulkDeleteError_1.SLOBulkDeleteError,
    "SLOBulkDeleteResponse": SLOBulkDeleteResponse_1.SLOBulkDeleteResponse,
    "SLOBulkDeleteResponseData": SLOBulkDeleteResponseData_1.SLOBulkDeleteResponseData,
    "SLOCorrection": SLOCorrection_1.SLOCorrection,
    "SLOCorrectionCreateData": SLOCorrectionCreateData_1.SLOCorrectionCreateData,
    "SLOCorrectionCreateRequest": SLOCorrectionCreateRequest_1.SLOCorrectionCreateRequest,
    "SLOCorrectionCreateRequestAttributes": SLOCorrectionCreateRequestAttributes_1.SLOCorrectionCreateRequestAttributes,
    "SLOCorrectionListResponse": SLOCorrectionListResponse_1.SLOCorrectionListResponse,
    "SLOCorrectionResponse": SLOCorrectionResponse_1.SLOCorrectionResponse,
    "SLOCorrectionResponseAttributes": SLOCorrectionResponseAttributes_1.SLOCorrectionResponseAttributes,
    "SLOCorrectionUpdateData": SLOCorrectionUpdateData_1.SLOCorrectionUpdateData,
    "SLOCorrectionUpdateRequest": SLOCorrectionUpdateRequest_1.SLOCorrectionUpdateRequest,
    "SLOCorrectionUpdateRequestAttributes": SLOCorrectionUpdateRequestAttributes_1.SLOCorrectionUpdateRequestAttributes,
    "SLODeleteResponse": SLODeleteResponse_1.SLODeleteResponse,
    "SLOHistoryMetrics": SLOHistoryMetrics_1.SLOHistoryMetrics,
    "SLOHistoryMetricsSeries": SLOHistoryMetricsSeries_1.SLOHistoryMetricsSeries,
    "SLOHistoryMetricsSeriesMetadata": SLOHistoryMetricsSeriesMetadata_1.SLOHistoryMetricsSeriesMetadata,
    "SLOHistoryMetricsSeriesMetadataUnit": SLOHistoryMetricsSeriesMetadataUnit_1.SLOHistoryMetricsSeriesMetadataUnit,
    "SLOHistoryResponse": SLOHistoryResponse_1.SLOHistoryResponse,
    "SLOHistoryResponseData": SLOHistoryResponseData_1.SLOHistoryResponseData,
    "SLOHistoryResponseError": SLOHistoryResponseError_1.SLOHistoryResponseError,
    "SLOHistorySLIData": SLOHistorySLIData_1.SLOHistorySLIData,
    "SLOListResponse": SLOListResponse_1.SLOListResponse,
    "SLOListResponseMetadata": SLOListResponseMetadata_1.SLOListResponseMetadata,
    "SLOListResponseMetadataPage": SLOListResponseMetadataPage_1.SLOListResponseMetadataPage,
    "SLOResponse": SLOResponse_1.SLOResponse,
    "SLOResponseData": SLOResponseData_1.SLOResponseData,
    "SLOThreshold": SLOThreshold_1.SLOThreshold,
    "SLOWidgetDefinition": SLOWidgetDefinition_1.SLOWidgetDefinition,
    "ScatterPlotRequest": ScatterPlotRequest_1.ScatterPlotRequest,
    "ScatterPlotWidgetDefinition": ScatterPlotWidgetDefinition_1.ScatterPlotWidgetDefinition,
    "ScatterPlotWidgetDefinitionRequests": ScatterPlotWidgetDefinitionRequests_1.ScatterPlotWidgetDefinitionRequests,
    "Series": Series_1.Series,
    "ServiceCheck": ServiceCheck_1.ServiceCheck,
    "ServiceLevelObjective": ServiceLevelObjective_1.ServiceLevelObjective,
    "ServiceLevelObjectiveQuery": ServiceLevelObjectiveQuery_1.ServiceLevelObjectiveQuery,
    "ServiceLevelObjectiveRequest": ServiceLevelObjectiveRequest_1.ServiceLevelObjectiveRequest,
    "ServiceMapWidgetDefinition": ServiceMapWidgetDefinition_1.ServiceMapWidgetDefinition,
    "ServiceSummaryWidgetDefinition": ServiceSummaryWidgetDefinition_1.ServiceSummaryWidgetDefinition,
    "SlackIntegrationChannel": SlackIntegrationChannel_1.SlackIntegrationChannel,
    "SlackIntegrationChannelDisplay": SlackIntegrationChannelDisplay_1.SlackIntegrationChannelDisplay,
    "SyntheticsAPIStep": SyntheticsAPIStep_1.SyntheticsAPIStep,
    "SyntheticsAPITest": SyntheticsAPITest_1.SyntheticsAPITest,
    "SyntheticsAPITestConfig": SyntheticsAPITestConfig_1.SyntheticsAPITestConfig,
    "SyntheticsAPITestResultData": SyntheticsAPITestResultData_1.SyntheticsAPITestResultData,
    "SyntheticsAPITestResultFull": SyntheticsAPITestResultFull_1.SyntheticsAPITestResultFull,
    "SyntheticsAPITestResultFullCheck": SyntheticsAPITestResultFullCheck_1.SyntheticsAPITestResultFullCheck,
    "SyntheticsAPITestResultShort": SyntheticsAPITestResultShort_1.SyntheticsAPITestResultShort,
    "SyntheticsAPITestResultShortResult": SyntheticsAPITestResultShortResult_1.SyntheticsAPITestResultShortResult,
    "SyntheticsAssertionJSONPathTarget": SyntheticsAssertionJSONPathTarget_1.SyntheticsAssertionJSONPathTarget,
    "SyntheticsAssertionJSONPathTargetTarget": SyntheticsAssertionJSONPathTargetTarget_1.SyntheticsAssertionJSONPathTargetTarget,
    "SyntheticsAssertionTarget": SyntheticsAssertionTarget_1.SyntheticsAssertionTarget,
    "SyntheticsBasicAuth": SyntheticsBasicAuth_1.SyntheticsBasicAuth,
    "SyntheticsBrowserError": SyntheticsBrowserError_1.SyntheticsBrowserError,
    "SyntheticsBrowserTest": SyntheticsBrowserTest_1.SyntheticsBrowserTest,
    "SyntheticsBrowserTestConfig": SyntheticsBrowserTestConfig_1.SyntheticsBrowserTestConfig,
    "SyntheticsBrowserTestResultData": SyntheticsBrowserTestResultData_1.SyntheticsBrowserTestResultData,
    "SyntheticsBrowserTestResultFull": SyntheticsBrowserTestResultFull_1.SyntheticsBrowserTestResultFull,
    "SyntheticsBrowserTestResultFullCheck": SyntheticsBrowserTestResultFullCheck_1.SyntheticsBrowserTestResultFullCheck,
    "SyntheticsBrowserTestResultShort": SyntheticsBrowserTestResultShort_1.SyntheticsBrowserTestResultShort,
    "SyntheticsBrowserTestResultShortResult": SyntheticsBrowserTestResultShortResult_1.SyntheticsBrowserTestResultShortResult,
    "SyntheticsBrowserVariable": SyntheticsBrowserVariable_1.SyntheticsBrowserVariable,
    "SyntheticsCITest": SyntheticsCITest_1.SyntheticsCITest,
    "SyntheticsCITestBody": SyntheticsCITestBody_1.SyntheticsCITestBody,
    "SyntheticsCITestMetadata": SyntheticsCITestMetadata_1.SyntheticsCITestMetadata,
    "SyntheticsCITestMetadataCi": SyntheticsCITestMetadataCi_1.SyntheticsCITestMetadataCi,
    "SyntheticsCITestMetadataGit": SyntheticsCITestMetadataGit_1.SyntheticsCITestMetadataGit,
    "SyntheticsConfigVariable": SyntheticsConfigVariable_1.SyntheticsConfigVariable,
    "SyntheticsCoreWebVitals": SyntheticsCoreWebVitals_1.SyntheticsCoreWebVitals,
    "SyntheticsDeleteTestsPayload": SyntheticsDeleteTestsPayload_1.SyntheticsDeleteTestsPayload,
    "SyntheticsDeleteTestsResponse": SyntheticsDeleteTestsResponse_1.SyntheticsDeleteTestsResponse,
    "SyntheticsDeletedTest": SyntheticsDeletedTest_1.SyntheticsDeletedTest,
    "SyntheticsDevice": SyntheticsDevice_1.SyntheticsDevice,
    "SyntheticsGetAPITestLatestResultsResponse": SyntheticsGetAPITestLatestResultsResponse_1.SyntheticsGetAPITestLatestResultsResponse,
    "SyntheticsGetBrowserTestLatestResultsResponse": SyntheticsGetBrowserTestLatestResultsResponse_1.SyntheticsGetBrowserTestLatestResultsResponse,
    "SyntheticsGlobalVariable": SyntheticsGlobalVariable_1.SyntheticsGlobalVariable,
    "SyntheticsGlobalVariableParseTestOptions": SyntheticsGlobalVariableParseTestOptions_1.SyntheticsGlobalVariableParseTestOptions,
    "SyntheticsGlobalVariableValue": SyntheticsGlobalVariableValue_1.SyntheticsGlobalVariableValue,
    "SyntheticsListTestsResponse": SyntheticsListTestsResponse_1.SyntheticsListTestsResponse,
    "SyntheticsLocation": SyntheticsLocation_1.SyntheticsLocation,
    "SyntheticsLocations": SyntheticsLocations_1.SyntheticsLocations,
    "SyntheticsParsingOptions": SyntheticsParsingOptions_1.SyntheticsParsingOptions,
    "SyntheticsPrivateLocation": SyntheticsPrivateLocation_1.SyntheticsPrivateLocation,
    "SyntheticsPrivateLocationCreationResponse": SyntheticsPrivateLocationCreationResponse_1.SyntheticsPrivateLocationCreationResponse,
    "SyntheticsPrivateLocationCreationResponseResultEncryption": SyntheticsPrivateLocationCreationResponseResultEncryption_1.SyntheticsPrivateLocationCreationResponseResultEncryption,
    "SyntheticsPrivateLocationSecrets": SyntheticsPrivateLocationSecrets_1.SyntheticsPrivateLocationSecrets,
    "SyntheticsPrivateLocationSecretsAuthentication": SyntheticsPrivateLocationSecretsAuthentication_1.SyntheticsPrivateLocationSecretsAuthentication,
    "SyntheticsPrivateLocationSecretsConfigDecryption": SyntheticsPrivateLocationSecretsConfigDecryption_1.SyntheticsPrivateLocationSecretsConfigDecryption,
    "SyntheticsSSLCertificate": SyntheticsSSLCertificate_1.SyntheticsSSLCertificate,
    "SyntheticsSSLCertificateIssuer": SyntheticsSSLCertificateIssuer_1.SyntheticsSSLCertificateIssuer,
    "SyntheticsSSLCertificateSubject": SyntheticsSSLCertificateSubject_1.SyntheticsSSLCertificateSubject,
    "SyntheticsStep": SyntheticsStep_1.SyntheticsStep,
    "SyntheticsStepDetail": SyntheticsStepDetail_1.SyntheticsStepDetail,
    "SyntheticsStepDetailWarning": SyntheticsStepDetailWarning_1.SyntheticsStepDetailWarning,
    "SyntheticsTestConfig": SyntheticsTestConfig_1.SyntheticsTestConfig,
    "SyntheticsTestDetails": SyntheticsTestDetails_1.SyntheticsTestDetails,
    "SyntheticsTestOptions": SyntheticsTestOptions_1.SyntheticsTestOptions,
    "SyntheticsTestOptionsMonitorOptions": SyntheticsTestOptionsMonitorOptions_1.SyntheticsTestOptionsMonitorOptions,
    "SyntheticsTestOptionsRetry": SyntheticsTestOptionsRetry_1.SyntheticsTestOptionsRetry,
    "SyntheticsTestRequest": SyntheticsTestRequest_1.SyntheticsTestRequest,
    "SyntheticsTestRequestCertificate": SyntheticsTestRequestCertificate_1.SyntheticsTestRequestCertificate,
    "SyntheticsTestRequestCertificateItem": SyntheticsTestRequestCertificateItem_1.SyntheticsTestRequestCertificateItem,
    "SyntheticsTiming": SyntheticsTiming_1.SyntheticsTiming,
    "SyntheticsTriggerCITestLocation": SyntheticsTriggerCITestLocation_1.SyntheticsTriggerCITestLocation,
    "SyntheticsTriggerCITestRunResult": SyntheticsTriggerCITestRunResult_1.SyntheticsTriggerCITestRunResult,
    "SyntheticsTriggerCITestsResponse": SyntheticsTriggerCITestsResponse_1.SyntheticsTriggerCITestsResponse,
    "SyntheticsUpdateTestPauseStatusPayload": SyntheticsUpdateTestPauseStatusPayload_1.SyntheticsUpdateTestPauseStatusPayload,
    "SyntheticsVariableParser": SyntheticsVariableParser_1.SyntheticsVariableParser,
    "TableWidgetDefinition": TableWidgetDefinition_1.TableWidgetDefinition,
    "TableWidgetRequest": TableWidgetRequest_1.TableWidgetRequest,
    "TagToHosts": TagToHosts_1.TagToHosts,
    "TimeseriesWidgetDefinition": TimeseriesWidgetDefinition_1.TimeseriesWidgetDefinition,
    "TimeseriesWidgetExpressionAlias": TimeseriesWidgetExpressionAlias_1.TimeseriesWidgetExpressionAlias,
    "TimeseriesWidgetRequest": TimeseriesWidgetRequest_1.TimeseriesWidgetRequest,
    "ToplistWidgetDefinition": ToplistWidgetDefinition_1.ToplistWidgetDefinition,
    "ToplistWidgetRequest": ToplistWidgetRequest_1.ToplistWidgetRequest,
    "UsageAnalyzedLogsHour": UsageAnalyzedLogsHour_1.UsageAnalyzedLogsHour,
    "UsageAnalyzedLogsResponse": UsageAnalyzedLogsResponse_1.UsageAnalyzedLogsResponse,
    "UsageAttributionAggregatesBody": UsageAttributionAggregatesBody_1.UsageAttributionAggregatesBody,
    "UsageAttributionBody": UsageAttributionBody_1.UsageAttributionBody,
    "UsageAttributionMetadata": UsageAttributionMetadata_1.UsageAttributionMetadata,
    "UsageAttributionPagination": UsageAttributionPagination_1.UsageAttributionPagination,
    "UsageAttributionResponse": UsageAttributionResponse_1.UsageAttributionResponse,
    "UsageAttributionValues": UsageAttributionValues_1.UsageAttributionValues,
    "UsageBillableSummaryBody": UsageBillableSummaryBody_1.UsageBillableSummaryBody,
    "UsageBillableSummaryHour": UsageBillableSummaryHour_1.UsageBillableSummaryHour,
    "UsageBillableSummaryKeys": UsageBillableSummaryKeys_1.UsageBillableSummaryKeys,
    "UsageBillableSummaryResponse": UsageBillableSummaryResponse_1.UsageBillableSummaryResponse,
    "UsageComplianceHour": UsageComplianceHour_1.UsageComplianceHour,
    "UsageComplianceResponse": UsageComplianceResponse_1.UsageComplianceResponse,
    "UsageCustomReportsAttributes": UsageCustomReportsAttributes_1.UsageCustomReportsAttributes,
    "UsageCustomReportsData": UsageCustomReportsData_1.UsageCustomReportsData,
    "UsageCustomReportsMeta": UsageCustomReportsMeta_1.UsageCustomReportsMeta,
    "UsageCustomReportsPage": UsageCustomReportsPage_1.UsageCustomReportsPage,
    "UsageCustomReportsResponse": UsageCustomReportsResponse_1.UsageCustomReportsResponse,
    "UsageFargateHour": UsageFargateHour_1.UsageFargateHour,
    "UsageFargateResponse": UsageFargateResponse_1.UsageFargateResponse,
    "UsageHostHour": UsageHostHour_1.UsageHostHour,
    "UsageHostsResponse": UsageHostsResponse_1.UsageHostsResponse,
    "UsageIncidentManagementHour": UsageIncidentManagementHour_1.UsageIncidentManagementHour,
    "UsageIncidentManagementResponse": UsageIncidentManagementResponse_1.UsageIncidentManagementResponse,
    "UsageIndexedSpansHour": UsageIndexedSpansHour_1.UsageIndexedSpansHour,
    "UsageIndexedSpansResponse": UsageIndexedSpansResponse_1.UsageIndexedSpansResponse,
    "UsageIngestedSpansHour": UsageIngestedSpansHour_1.UsageIngestedSpansHour,
    "UsageIngestedSpansResponse": UsageIngestedSpansResponse_1.UsageIngestedSpansResponse,
    "UsageIoTHour": UsageIoTHour_1.UsageIoTHour,
    "UsageIoTResponse": UsageIoTResponse_1.UsageIoTResponse,
    "UsageLambdaHour": UsageLambdaHour_1.UsageLambdaHour,
    "UsageLambdaResponse": UsageLambdaResponse_1.UsageLambdaResponse,
    "UsageLogsByIndexHour": UsageLogsByIndexHour_1.UsageLogsByIndexHour,
    "UsageLogsByIndexResponse": UsageLogsByIndexResponse_1.UsageLogsByIndexResponse,
    "UsageLogsByRetentionHour": UsageLogsByRetentionHour_1.UsageLogsByRetentionHour,
    "UsageLogsByRetentionResponse": UsageLogsByRetentionResponse_1.UsageLogsByRetentionResponse,
    "UsageLogsHour": UsageLogsHour_1.UsageLogsHour,
    "UsageLogsResponse": UsageLogsResponse_1.UsageLogsResponse,
    "UsageNetworkFlowsHour": UsageNetworkFlowsHour_1.UsageNetworkFlowsHour,
    "UsageNetworkFlowsResponse": UsageNetworkFlowsResponse_1.UsageNetworkFlowsResponse,
    "UsageNetworkHostsHour": UsageNetworkHostsHour_1.UsageNetworkHostsHour,
    "UsageNetworkHostsResponse": UsageNetworkHostsResponse_1.UsageNetworkHostsResponse,
    "UsageProfilingHour": UsageProfilingHour_1.UsageProfilingHour,
    "UsageProfilingResponse": UsageProfilingResponse_1.UsageProfilingResponse,
    "UsageRumSessionsHour": UsageRumSessionsHour_1.UsageRumSessionsHour,
    "UsageRumSessionsResponse": UsageRumSessionsResponse_1.UsageRumSessionsResponse,
    "UsageSNMPHour": UsageSNMPHour_1.UsageSNMPHour,
    "UsageSNMPResponse": UsageSNMPResponse_1.UsageSNMPResponse,
    "UsageSpecifiedCustomReportsAttributes": UsageSpecifiedCustomReportsAttributes_1.UsageSpecifiedCustomReportsAttributes,
    "UsageSpecifiedCustomReportsData": UsageSpecifiedCustomReportsData_1.UsageSpecifiedCustomReportsData,
    "UsageSpecifiedCustomReportsMeta": UsageSpecifiedCustomReportsMeta_1.UsageSpecifiedCustomReportsMeta,
    "UsageSpecifiedCustomReportsPage": UsageSpecifiedCustomReportsPage_1.UsageSpecifiedCustomReportsPage,
    "UsageSpecifiedCustomReportsResponse": UsageSpecifiedCustomReportsResponse_1.UsageSpecifiedCustomReportsResponse,
    "UsageSummaryDate": UsageSummaryDate_1.UsageSummaryDate,
    "UsageSummaryDateOrg": UsageSummaryDateOrg_1.UsageSummaryDateOrg,
    "UsageSummaryResponse": UsageSummaryResponse_1.UsageSummaryResponse,
    "UsageSyntheticsAPIHour": UsageSyntheticsAPIHour_1.UsageSyntheticsAPIHour,
    "UsageSyntheticsAPIResponse": UsageSyntheticsAPIResponse_1.UsageSyntheticsAPIResponse,
    "UsageSyntheticsBrowserHour": UsageSyntheticsBrowserHour_1.UsageSyntheticsBrowserHour,
    "UsageSyntheticsBrowserResponse": UsageSyntheticsBrowserResponse_1.UsageSyntheticsBrowserResponse,
    "UsageSyntheticsHour": UsageSyntheticsHour_1.UsageSyntheticsHour,
    "UsageSyntheticsResponse": UsageSyntheticsResponse_1.UsageSyntheticsResponse,
    "UsageTimeseriesHour": UsageTimeseriesHour_1.UsageTimeseriesHour,
    "UsageTimeseriesResponse": UsageTimeseriesResponse_1.UsageTimeseriesResponse,
    "UsageTopAvgMetricsHour": UsageTopAvgMetricsHour_1.UsageTopAvgMetricsHour,
    "UsageTopAvgMetricsMetadata": UsageTopAvgMetricsMetadata_1.UsageTopAvgMetricsMetadata,
    "UsageTopAvgMetricsResponse": UsageTopAvgMetricsResponse_1.UsageTopAvgMetricsResponse,
    "UsageTraceHour": UsageTraceHour_1.UsageTraceHour,
    "UsageTraceResponse": UsageTraceResponse_1.UsageTraceResponse,
    "UsageTracingWithoutLimitsHour": UsageTracingWithoutLimitsHour_1.UsageTracingWithoutLimitsHour,
    "UsageTracingWithoutLimitsResponse": UsageTracingWithoutLimitsResponse_1.UsageTracingWithoutLimitsResponse,
    "User": User_1.User,
    "UserDisableResponse": UserDisableResponse_1.UserDisableResponse,
    "UserListResponse": UserListResponse_1.UserListResponse,
    "UserResponse": UserResponse_1.UserResponse,
    "Widget": Widget_1.Widget,
    "WidgetAxis": WidgetAxis_1.WidgetAxis,
    "WidgetConditionalFormat": WidgetConditionalFormat_1.WidgetConditionalFormat,
    "WidgetCustomLink": WidgetCustomLink_1.WidgetCustomLink,
    "WidgetEvent": WidgetEvent_1.WidgetEvent,
    "WidgetFieldSort": WidgetFieldSort_1.WidgetFieldSort,
    "WidgetFormula": WidgetFormula_1.WidgetFormula,
    "WidgetFormulaLimit": WidgetFormulaLimit_1.WidgetFormulaLimit,
    "WidgetLayout": WidgetLayout_1.WidgetLayout,
    "WidgetMarker": WidgetMarker_1.WidgetMarker,
    "WidgetRequestStyle": WidgetRequestStyle_1.WidgetRequestStyle,
    "WidgetStyle": WidgetStyle_1.WidgetStyle,
    "WidgetTime": WidgetTime_1.WidgetTime,
};
var oneOfMap = {
    "FormulaAndFunctionQueryDefinition": ["FormulaAndFunctionEventQueryDefinition", "FormulaAndFunctionMetricQueryDefinition", "FormulaAndFunctionProcessQueryDefinition"],
    "LogsProcessor": ["LogsArithmeticProcessor", "LogsAttributeRemapper", "LogsCategoryProcessor", "LogsDateRemapper", "LogsGeoIPParser", "LogsGrokParser", "LogsLookupProcessor", "LogsMessageRemapper", "LogsPipelineProcessor", "LogsServiceRemapper", "LogsStatusRemapper", "LogsStringBuilderProcessor", "LogsTraceRemapper", "LogsURLParser", "LogsUserAgentParser"],
    "NotebookCellCreateRequestAttributes": ["NotebookDistributionCellAttributes", "NotebookHeatMapCellAttributes", "NotebookLogStreamCellAttributes", "NotebookMarkdownCellAttributes", "NotebookTimeseriesCellAttributes", "NotebookToplistCellAttributes"],
    "NotebookCellResponseAttributes": ["NotebookDistributionCellAttributes", "NotebookHeatMapCellAttributes", "NotebookLogStreamCellAttributes", "NotebookMarkdownCellAttributes", "NotebookTimeseriesCellAttributes", "NotebookToplistCellAttributes"],
    "NotebookCellTime": ["NotebookAbsoluteTime", "NotebookRelativeTime"],
    "NotebookCellUpdateRequestAttributes": ["NotebookDistributionCellAttributes", "NotebookHeatMapCellAttributes", "NotebookLogStreamCellAttributes", "NotebookMarkdownCellAttributes", "NotebookTimeseriesCellAttributes", "NotebookToplistCellAttributes"],
    "NotebookGlobalTime": ["NotebookAbsoluteTime", "NotebookRelativeTime"],
    "NotebookUpdateCell": ["NotebookCellCreateRequest", "NotebookCellUpdateRequest"],
    "SyntheticsAssertion": ["SyntheticsAssertionJSONPathTarget", "SyntheticsAssertionTarget"],
    "WidgetDefinition": ["AlertGraphWidgetDefinition", "AlertValueWidgetDefinition", "ChangeWidgetDefinition", "CheckStatusWidgetDefinition", "DistributionWidgetDefinition", "EventStreamWidgetDefinition", "EventTimelineWidgetDefinition", "FreeTextWidgetDefinition", "GeomapWidgetDefinition", "GroupWidgetDefinition", "HeatMapWidgetDefinition", "HostMapWidgetDefinition", "IFrameWidgetDefinition", "ImageWidgetDefinition", "LogStreamWidgetDefinition", "MonitorSummaryWidgetDefinition", "NoteWidgetDefinition", "QueryValueWidgetDefinition", "SLOWidgetDefinition", "ScatterPlotWidgetDefinition", "ServiceMapWidgetDefinition", "ServiceSummaryWidgetDefinition", "TableWidgetDefinition", "TimeseriesWidgetDefinition", "ToplistWidgetDefinition"],
};
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
            subType = subType.substring(0, subType.length - 3); // Type; } => Type
            var transformedData = {};
            for (var k in data) {
                var date = data[k];
                transformedData[k] = ObjectSerializer.serialize(date, subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            if ("string" == typeof data) {
                return data;
            }
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (oneOfMap[type]) {
                var oneOfs = [];
                for (var _i = 0, _a = oneOfMap[type]; _i < _a.length; _i++) {
                    var oneOf = _a[_i];
                    try {
                        oneOfs.push(ObjectSerializer.serialize(data, oneOf, format));
                    }
                    catch (e) {
                        console.debug("could not serialize " + oneOf + " (" + e + ")");
                    }
                }
                if (oneOfs.length > 1) {
                    throw new TypeError(data + " matches multiple types from " + oneOfMap[type] + " " + oneOfs);
                }
                if (oneOfs.length == 0) {
                    throw new TypeError(data + " doesn't match any type from " + oneOfMap[type] + " " + oneOfs);
                }
                return oneOfs[0];
            }
            if (!typeMap[type]) { // dont know the type
                throw new TypeError("unknown type '" + type + "'");
            }
            return typeMap[type].serialize(data);
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type.lastIndexOf("{ [key: string]: ", 0) === 0) { // string.startsWith pre es6
            var subType = type.replace("{ [key: string]: ", ""); // { [key: string]: Type; } => Type; }
            subType = subType.substring(0, subType.length - 3); // Type; } => Type
            var transformedData = {};
            for (var k in data) {
                var date = data[k];
                transformedData[k] = ObjectSerializer.deserialize(date, subType, format);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) { // is Enum
                return data;
            }
            if (oneOfMap[type]) {
                var oneOfs = [];
                for (var _i = 0, _a = oneOfMap[type]; _i < _a.length; _i++) {
                    var oneOf = _a[_i];
                    try {
                        oneOfs.push(ObjectSerializer.deserialize(data, oneOf, format));
                    }
                    catch (e) {
                        console.debug("could not deserialize " + oneOf + " (" + e + ")");
                    }
                }
                if (oneOfs.length > 1) {
                    throw new TypeError(data + " matches multiple types from " + oneOfMap[type] + " " + oneOfs);
                }
                if (oneOfs.length == 0) {
                    throw new TypeError(data + " doesn't match any type from " + oneOfMap[type] + " " + oneOfs);
                }
                return oneOfs[0];
            }
            if (!typeMap[type]) { // dont know the type
                throw new TypeError("unknown type '" + type + "'");
            }
            return typeMap[type].deserialize(data);
        }
    };
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0, normalMediaTypes_1 = normalMediaTypes; _i < normalMediaTypes_1.length; _i++) {
            var mediaType = normalMediaTypes_1[_i];
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    };
    /**
     * Convert data to a string according the given media type
     */
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    /**
     * Parse data from a string according to the given media type
     */
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json" || mediaType === "text/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map