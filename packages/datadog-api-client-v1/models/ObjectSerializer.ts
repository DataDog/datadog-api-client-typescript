import { APIErrorResponse } from './APIErrorResponse';
import { AWSAccount } from './AWSAccount';
import { AWSAccountAndLambdaRequest } from './AWSAccountAndLambdaRequest';
import { AWSAccountCreateResponse } from './AWSAccountCreateResponse';
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
import { DashboardDeleteResponse } from './DashboardDeleteResponse';
import { DashboardLayoutType } from './DashboardLayoutType';
import { DashboardList } from './DashboardList';
import { DashboardListDeleteResponse } from './DashboardListDeleteResponse';
import { DashboardListListResponse } from './DashboardListListResponse';
import { DashboardReflowType } from './DashboardReflowType';
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
import { MonitorOptions } from './MonitorOptions';
import { MonitorOptionsAggregation } from './MonitorOptionsAggregation';
import { MonitorOverallStates } from './MonitorOverallStates';
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
import { ProcessQueryDefinition } from './ProcessQueryDefinition';
import { QuerySortOrder } from './QuerySortOrder';
import { QueryValueWidgetDefinition } from './QueryValueWidgetDefinition';
import { QueryValueWidgetDefinitionType } from './QueryValueWidgetDefinitionType';
import { QueryValueWidgetRequest } from './QueryValueWidgetRequest';
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
import { SLOHistoryResponse } from './SLOHistoryResponse';
import { SLOHistoryResponseData } from './SLOHistoryResponseData';
import { SLOHistoryResponseError } from './SLOHistoryResponseError';
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
import { SyntheticsCITest } from './SyntheticsCITest';
import { SyntheticsCITestBody } from './SyntheticsCITestBody';
import { SyntheticsCITestMetadata } from './SyntheticsCITestMetadata';
import { SyntheticsCITestMetadataCi } from './SyntheticsCITestMetadataCi';
import { SyntheticsCITestMetadataGit } from './SyntheticsCITestMetadataGit';
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
import { SyntheticsGlobalVariableParseTestOptions } from './SyntheticsGlobalVariableParseTestOptions';
import { SyntheticsGlobalVariableParseTestOptionsType } from './SyntheticsGlobalVariableParseTestOptionsType';
import { SyntheticsGlobalVariableParserType } from './SyntheticsGlobalVariableParserType';
import { SyntheticsGlobalVariableValue } from './SyntheticsGlobalVariableValue';
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
import { SyntheticsStep } from './SyntheticsStep';
import { SyntheticsStepDetail } from './SyntheticsStepDetail';
import { SyntheticsStepDetailWarning } from './SyntheticsStepDetailWarning';
import { SyntheticsStepType } from './SyntheticsStepType';
import { SyntheticsTestConfig } from './SyntheticsTestConfig';
import { SyntheticsTestDetails } from './SyntheticsTestDetails';
import { SyntheticsTestDetailsSubType } from './SyntheticsTestDetailsSubType';
import { SyntheticsTestDetailsType } from './SyntheticsTestDetailsType';
import { SyntheticsTestMonitorStatus } from './SyntheticsTestMonitorStatus';
import { SyntheticsTestOptions } from './SyntheticsTestOptions';
import { SyntheticsTestOptionsMonitorOptions } from './SyntheticsTestOptionsMonitorOptions';
import { SyntheticsTestOptionsRetry } from './SyntheticsTestOptionsRetry';
import { SyntheticsTestPauseStatus } from './SyntheticsTestPauseStatus';
import { SyntheticsTestProcessStatus } from './SyntheticsTestProcessStatus';
import { SyntheticsTestRequest } from './SyntheticsTestRequest';
import { SyntheticsTestRequestCertificate } from './SyntheticsTestRequestCertificate';
import { SyntheticsTestRequestCertificateItem } from './SyntheticsTestRequestCertificateItem';
import { SyntheticsTickInterval } from './SyntheticsTickInterval';
import { SyntheticsTiming } from './SyntheticsTiming';
import { SyntheticsTriggerCITestLocation } from './SyntheticsTriggerCITestLocation';
import { SyntheticsTriggerCITestRunResult } from './SyntheticsTriggerCITestRunResult';
import { SyntheticsTriggerCITestsResponse } from './SyntheticsTriggerCITestsResponse';
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
import { UsageBillableSummaryBody } from './UsageBillableSummaryBody';
import { UsageBillableSummaryHour } from './UsageBillableSummaryHour';
import { UsageBillableSummaryKeys } from './UsageBillableSummaryKeys';
import { UsageBillableSummaryResponse } from './UsageBillableSummaryResponse';
import { UsageComplianceHour } from './UsageComplianceHour';
import { UsageComplianceResponse } from './UsageComplianceResponse';
import { UsageCustomReportsAttributes } from './UsageCustomReportsAttributes';
import { UsageCustomReportsData } from './UsageCustomReportsData';
import { UsageCustomReportsMeta } from './UsageCustomReportsMeta';
import { UsageCustomReportsPage } from './UsageCustomReportsPage';
import { UsageCustomReportsResponse } from './UsageCustomReportsResponse';
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
import { UsageTraceHour } from './UsageTraceHour';
import { UsageTraceResponse } from './UsageTraceResponse';
import { UsageTracingWithoutLimitsHour } from './UsageTracingWithoutLimitsHour';
import { UsageTracingWithoutLimitsResponse } from './UsageTracingWithoutLimitsResponse';
import { User } from './User';
import { UserDisableResponse } from './UserDisableResponse';
import { UserListResponse } from './UserListResponse';
import { UserResponse } from './UserResponse';
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
  "application/octet-stream": 0
}

                 
let enumsMap: Set<string> = new Set<string>([
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

let typeMap: {[index: string]: any} = {
    "APIErrorResponse": APIErrorResponse,
    "AWSAccount": AWSAccount,
    "AWSAccountAndLambdaRequest": AWSAccountAndLambdaRequest,
    "AWSAccountCreateResponse": AWSAccountCreateResponse,
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
    "DashboardDeleteResponse": DashboardDeleteResponse,
    "DashboardList": DashboardList,
    "DashboardListDeleteResponse": DashboardListDeleteResponse,
    "DashboardListListResponse": DashboardListListResponse,
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
    "FormulaAndFunctionEventQueryDefinition": FormulaAndFunctionEventQueryDefinition,
    "FormulaAndFunctionEventQueryDefinitionCompute": FormulaAndFunctionEventQueryDefinitionCompute,
    "FormulaAndFunctionEventQueryDefinitionSearch": FormulaAndFunctionEventQueryDefinitionSearch,
    "FormulaAndFunctionEventQueryGroupBy": FormulaAndFunctionEventQueryGroupBy,
    "FormulaAndFunctionEventQueryGroupBySort": FormulaAndFunctionEventQueryGroupBySort,
    "FormulaAndFunctionMetricQueryDefinition": FormulaAndFunctionMetricQueryDefinition,
    "FormulaAndFunctionProcessQueryDefinition": FormulaAndFunctionProcessQueryDefinition,
    "FreeTextWidgetDefinition": FreeTextWidgetDefinition,
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
    "MonitorOptions": MonitorOptions,
    "MonitorOptionsAggregation": MonitorOptionsAggregation,
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
    "ProcessQueryDefinition": ProcessQueryDefinition,
    "QueryValueWidgetDefinition": QueryValueWidgetDefinition,
    "QueryValueWidgetRequest": QueryValueWidgetRequest,
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
    "SLOCorrectionUpdateData": SLOCorrectionUpdateData,
    "SLOCorrectionUpdateRequest": SLOCorrectionUpdateRequest,
    "SLOCorrectionUpdateRequestAttributes": SLOCorrectionUpdateRequestAttributes,
    "SLODeleteResponse": SLODeleteResponse,
    "SLOHistoryMetrics": SLOHistoryMetrics,
    "SLOHistoryMetricsSeries": SLOHistoryMetricsSeries,
    "SLOHistoryMetricsSeriesMetadata": SLOHistoryMetricsSeriesMetadata,
    "SLOHistoryMetricsSeriesMetadataUnit": SLOHistoryMetricsSeriesMetadataUnit,
    "SLOHistoryResponse": SLOHistoryResponse,
    "SLOHistoryResponseData": SLOHistoryResponseData,
    "SLOHistoryResponseError": SLOHistoryResponseError,
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
    "Series": Series,
    "ServiceCheck": ServiceCheck,
    "ServiceLevelObjective": ServiceLevelObjective,
    "ServiceLevelObjectiveQuery": ServiceLevelObjectiveQuery,
    "ServiceLevelObjectiveRequest": ServiceLevelObjectiveRequest,
    "ServiceMapWidgetDefinition": ServiceMapWidgetDefinition,
    "ServiceSummaryWidgetDefinition": ServiceSummaryWidgetDefinition,
    "SlackIntegrationChannel": SlackIntegrationChannel,
    "SlackIntegrationChannelDisplay": SlackIntegrationChannelDisplay,
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
    "SyntheticsBrowserError": SyntheticsBrowserError,
    "SyntheticsBrowserTest": SyntheticsBrowserTest,
    "SyntheticsBrowserTestConfig": SyntheticsBrowserTestConfig,
    "SyntheticsBrowserTestResultData": SyntheticsBrowserTestResultData,
    "SyntheticsBrowserTestResultFull": SyntheticsBrowserTestResultFull,
    "SyntheticsBrowserTestResultFullCheck": SyntheticsBrowserTestResultFullCheck,
    "SyntheticsBrowserTestResultShort": SyntheticsBrowserTestResultShort,
    "SyntheticsBrowserTestResultShortResult": SyntheticsBrowserTestResultShortResult,
    "SyntheticsBrowserVariable": SyntheticsBrowserVariable,
    "SyntheticsCITest": SyntheticsCITest,
    "SyntheticsCITestBody": SyntheticsCITestBody,
    "SyntheticsCITestMetadata": SyntheticsCITestMetadata,
    "SyntheticsCITestMetadataCi": SyntheticsCITestMetadataCi,
    "SyntheticsCITestMetadataGit": SyntheticsCITestMetadataGit,
    "SyntheticsConfigVariable": SyntheticsConfigVariable,
    "SyntheticsCoreWebVitals": SyntheticsCoreWebVitals,
    "SyntheticsDeleteTestsPayload": SyntheticsDeleteTestsPayload,
    "SyntheticsDeleteTestsResponse": SyntheticsDeleteTestsResponse,
    "SyntheticsDeletedTest": SyntheticsDeletedTest,
    "SyntheticsDevice": SyntheticsDevice,
    "SyntheticsGetAPITestLatestResultsResponse": SyntheticsGetAPITestLatestResultsResponse,
    "SyntheticsGetBrowserTestLatestResultsResponse": SyntheticsGetBrowserTestLatestResultsResponse,
    "SyntheticsGlobalVariable": SyntheticsGlobalVariable,
    "SyntheticsGlobalVariableParseTestOptions": SyntheticsGlobalVariableParseTestOptions,
    "SyntheticsGlobalVariableValue": SyntheticsGlobalVariableValue,
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
    "SyntheticsTriggerCITestLocation": SyntheticsTriggerCITestLocation,
    "SyntheticsTriggerCITestRunResult": SyntheticsTriggerCITestRunResult,
    "SyntheticsTriggerCITestsResponse": SyntheticsTriggerCITestsResponse,
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
    "UsageAnalyzedLogsHour": UsageAnalyzedLogsHour,
    "UsageAnalyzedLogsResponse": UsageAnalyzedLogsResponse,
    "UsageAttributionAggregatesBody": UsageAttributionAggregatesBody,
    "UsageAttributionBody": UsageAttributionBody,
    "UsageAttributionMetadata": UsageAttributionMetadata,
    "UsageAttributionPagination": UsageAttributionPagination,
    "UsageAttributionResponse": UsageAttributionResponse,
    "UsageAttributionValues": UsageAttributionValues,
    "UsageBillableSummaryBody": UsageBillableSummaryBody,
    "UsageBillableSummaryHour": UsageBillableSummaryHour,
    "UsageBillableSummaryKeys": UsageBillableSummaryKeys,
    "UsageBillableSummaryResponse": UsageBillableSummaryResponse,
    "UsageComplianceHour": UsageComplianceHour,
    "UsageComplianceResponse": UsageComplianceResponse,
    "UsageCustomReportsAttributes": UsageCustomReportsAttributes,
    "UsageCustomReportsData": UsageCustomReportsData,
    "UsageCustomReportsMeta": UsageCustomReportsMeta,
    "UsageCustomReportsPage": UsageCustomReportsPage,
    "UsageCustomReportsResponse": UsageCustomReportsResponse,
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
    "UsageTraceHour": UsageTraceHour,
    "UsageTraceResponse": UsageTraceResponse,
    "UsageTracingWithoutLimitsHour": UsageTracingWithoutLimitsHour,
    "UsageTracingWithoutLimitsResponse": UsageTracingWithoutLimitsResponse,
    "User": User,
    "UserDisableResponse": UserDisableResponse,
    "UserListResponse": UserListResponse,
    "UserResponse": UserResponse,
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

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
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
            if (enumsMap.has(type)) {
                return data;
            }
            if (oneOfMap[type]) {
                let oneOfs: any[] = [];
                for(let oneOf of oneOfMap[type]) {
                    try {
                        oneOfs.push(ObjectSerializer.serialize(data, oneOf, format))
                    } catch (e) {
                        console.debug(`could not serialize ${oneOf} (${e})`)
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

            if (!typeMap[type]) { // dont know the type
                throw new TypeError(`unknown type '${type}'`);
            }

            return typeMap[type].serialize(data);
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
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
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (oneOfMap[type]) {
                let oneOfs: any[] = [];
                for(let oneOf of oneOfMap[type]) {
                    try {
                        oneOfs.push(ObjectSerializer.deserialize(data, oneOf, format))
                    } catch (e) {
                        console.debug(`could not deserialize ${oneOf} (${e})`)
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

            if (!typeMap[type]) { // dont know the type
                throw new TypeError(`unknown type '${type}'`);
            }
            return typeMap[type].deserialize(data);
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
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
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

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
