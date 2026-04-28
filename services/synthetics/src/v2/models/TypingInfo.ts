import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DeletedSuiteResponseData } from "./DeletedSuiteResponseData";
import { DeletedSuiteResponseDataAttributes } from "./DeletedSuiteResponseDataAttributes";
import { DeletedSuitesRequestDelete } from "./DeletedSuitesRequestDelete";
import { DeletedSuitesRequestDeleteAttributes } from "./DeletedSuitesRequestDeleteAttributes";
import { DeletedSuitesRequestDeleteRequest } from "./DeletedSuitesRequestDeleteRequest";
import { DeletedSuitesResponse } from "./DeletedSuitesResponse";
import { DeletedTestResponseData } from "./DeletedTestResponseData";
import { DeletedTestResponseDataAttributes } from "./DeletedTestResponseDataAttributes";
import { DeletedTestsRequestDelete } from "./DeletedTestsRequestDelete";
import { DeletedTestsRequestDeleteAttributes } from "./DeletedTestsRequestDeleteAttributes";
import { DeletedTestsRequestDeleteRequest } from "./DeletedTestsRequestDeleteRequest";
import { DeletedTestsResponse } from "./DeletedTestsResponse";
import { GlobalVariableData } from "./GlobalVariableData";
import { GlobalVariableJsonPatchRequest } from "./GlobalVariableJsonPatchRequest";
import { GlobalVariableJsonPatchRequestData } from "./GlobalVariableJsonPatchRequestData";
import { GlobalVariableJsonPatchRequestDataAttributes } from "./GlobalVariableJsonPatchRequestDataAttributes";
import { GlobalVariableResponse } from "./GlobalVariableResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { JsonPatchOperation } from "./JsonPatchOperation";
import { OnDemandConcurrencyCap } from "./OnDemandConcurrencyCap";
import { OnDemandConcurrencyCapAttributes } from "./OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapResponse } from "./OnDemandConcurrencyCapResponse";
import { SuiteCreateEdit } from "./SuiteCreateEdit";
import { SuiteCreateEditRequest } from "./SuiteCreateEditRequest";
import { SuiteJsonPatchRequest } from "./SuiteJsonPatchRequest";
import { SuiteJsonPatchRequestData } from "./SuiteJsonPatchRequestData";
import { SuiteJsonPatchRequestDataAttributes } from "./SuiteJsonPatchRequestDataAttributes";
import { SyntheticsApiMultistepParentTestAttributes } from "./SyntheticsApiMultistepParentTestAttributes";
import { SyntheticsApiMultistepParentTestData } from "./SyntheticsApiMultistepParentTestData";
import { SyntheticsApiMultistepParentTestsResponse } from "./SyntheticsApiMultistepParentTestsResponse";
import { SyntheticsApiMultistepSubtestAttributes } from "./SyntheticsApiMultistepSubtestAttributes";
import { SyntheticsApiMultistepSubtestData } from "./SyntheticsApiMultistepSubtestData";
import { SyntheticsApiMultistepSubtestsResponse } from "./SyntheticsApiMultistepSubtestsResponse";
import { SyntheticsDowntimeData } from "./SyntheticsDowntimeData";
import { SyntheticsDowntimeDataAttributesRequest } from "./SyntheticsDowntimeDataAttributesRequest";
import { SyntheticsDowntimeDataAttributesResponse } from "./SyntheticsDowntimeDataAttributesResponse";
import { SyntheticsDowntimeDataRequest } from "./SyntheticsDowntimeDataRequest";
import { SyntheticsDowntimeRequest } from "./SyntheticsDowntimeRequest";
import { SyntheticsDowntimeResponse } from "./SyntheticsDowntimeResponse";
import { SyntheticsDowntimeTimeSlotDate } from "./SyntheticsDowntimeTimeSlotDate";
import { SyntheticsDowntimeTimeSlotRecurrenceRequest } from "./SyntheticsDowntimeTimeSlotRecurrenceRequest";
import { SyntheticsDowntimeTimeSlotRecurrenceResponse } from "./SyntheticsDowntimeTimeSlotRecurrenceResponse";
import { SyntheticsDowntimeTimeSlotRequest } from "./SyntheticsDowntimeTimeSlotRequest";
import { SyntheticsDowntimeTimeSlotResponse } from "./SyntheticsDowntimeTimeSlotResponse";
import { SyntheticsDowntimesResponse } from "./SyntheticsDowntimesResponse";
import { SyntheticsFastTestResult } from "./SyntheticsFastTestResult";
import { SyntheticsFastTestResultAttributes } from "./SyntheticsFastTestResultAttributes";
import { SyntheticsFastTestResultData } from "./SyntheticsFastTestResultData";
import { SyntheticsFastTestResultDetail } from "./SyntheticsFastTestResultDetail";
import { SyntheticsGlobalVariable } from "./SyntheticsGlobalVariable";
import { SyntheticsGlobalVariableAttributes } from "./SyntheticsGlobalVariableAttributes";
import { SyntheticsGlobalVariableOptions } from "./SyntheticsGlobalVariableOptions";
import { SyntheticsGlobalVariableParseTestOptions } from "./SyntheticsGlobalVariableParseTestOptions";
import { SyntheticsGlobalVariableTOTPParameters } from "./SyntheticsGlobalVariableTOTPParameters";
import { SyntheticsGlobalVariableValue } from "./SyntheticsGlobalVariableValue";
import { SyntheticsNetworkAssertionJitter } from "./SyntheticsNetworkAssertionJitter";
import { SyntheticsNetworkAssertionLatency } from "./SyntheticsNetworkAssertionLatency";
import { SyntheticsNetworkAssertionMultiNetworkHop } from "./SyntheticsNetworkAssertionMultiNetworkHop";
import { SyntheticsNetworkAssertionPacketLossPercentage } from "./SyntheticsNetworkAssertionPacketLossPercentage";
import { SyntheticsNetworkTest } from "./SyntheticsNetworkTest";
import { SyntheticsNetworkTestConfig } from "./SyntheticsNetworkTestConfig";
import { SyntheticsNetworkTestEdit } from "./SyntheticsNetworkTestEdit";
import { SyntheticsNetworkTestEditRequest } from "./SyntheticsNetworkTestEditRequest";
import { SyntheticsNetworkTestRequest } from "./SyntheticsNetworkTestRequest";
import { SyntheticsNetworkTestResponse } from "./SyntheticsNetworkTestResponse";
import { SyntheticsNetworkTestResponseData } from "./SyntheticsNetworkTestResponseData";
import { SyntheticsPollTestResultsResponse } from "./SyntheticsPollTestResultsResponse";
import { SyntheticsSuite } from "./SyntheticsSuite";
import { SyntheticsSuiteOptions } from "./SyntheticsSuiteOptions";
import { SyntheticsSuiteResponse } from "./SyntheticsSuiteResponse";
import { SyntheticsSuiteResponseData } from "./SyntheticsSuiteResponseData";
import { SyntheticsSuiteSearchResponse } from "./SyntheticsSuiteSearchResponse";
import { SyntheticsSuiteSearchResponseData } from "./SyntheticsSuiteSearchResponseData";
import { SyntheticsSuiteSearchResponseDataAttributes } from "./SyntheticsSuiteSearchResponseDataAttributes";
import { SyntheticsSuiteTest } from "./SyntheticsSuiteTest";
import { SyntheticsTestFileAbortMultipartUploadRequest } from "./SyntheticsTestFileAbortMultipartUploadRequest";
import { SyntheticsTestFileCompleteMultipartUploadPart } from "./SyntheticsTestFileCompleteMultipartUploadPart";
import { SyntheticsTestFileCompleteMultipartUploadRequest } from "./SyntheticsTestFileCompleteMultipartUploadRequest";
import { SyntheticsTestFileDownloadRequest } from "./SyntheticsTestFileDownloadRequest";
import { SyntheticsTestFileDownloadResponse } from "./SyntheticsTestFileDownloadResponse";
import { SyntheticsTestFileMultipartPresignedUrlsParams } from "./SyntheticsTestFileMultipartPresignedUrlsParams";
import { SyntheticsTestFileMultipartPresignedUrlsPart } from "./SyntheticsTestFileMultipartPresignedUrlsPart";
import { SyntheticsTestFileMultipartPresignedUrlsRequest } from "./SyntheticsTestFileMultipartPresignedUrlsRequest";
import { SyntheticsTestFileMultipartPresignedUrlsResponse } from "./SyntheticsTestFileMultipartPresignedUrlsResponse";
import { SyntheticsTestLatestResultsResponse } from "./SyntheticsTestLatestResultsResponse";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestOptionsMonitorOptions } from "./SyntheticsTestOptionsMonitorOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestOptionsScheduling } from "./SyntheticsTestOptionsScheduling";
import { SyntheticsTestOptionsSchedulingTimeframe } from "./SyntheticsTestOptionsSchedulingTimeframe";
import { SyntheticsTestParentSuiteAttributes } from "./SyntheticsTestParentSuiteAttributes";
import { SyntheticsTestParentSuiteData } from "./SyntheticsTestParentSuiteData";
import { SyntheticsTestParentSuitesResponse } from "./SyntheticsTestParentSuitesResponse";
import { SyntheticsTestResultAssertionResult } from "./SyntheticsTestResultAssertionResult";
import { SyntheticsTestResultAttributes } from "./SyntheticsTestResultAttributes";
import { SyntheticsTestResultBatch } from "./SyntheticsTestResultBatch";
import { SyntheticsTestResultBounds } from "./SyntheticsTestResultBounds";
import { SyntheticsTestResultBrowserError } from "./SyntheticsTestResultBrowserError";
import { SyntheticsTestResultBucketKeys } from "./SyntheticsTestResultBucketKeys";
import { SyntheticsTestResultCI } from "./SyntheticsTestResultCI";
import { SyntheticsTestResultCIPipeline } from "./SyntheticsTestResultCIPipeline";
import { SyntheticsTestResultCIProvider } from "./SyntheticsTestResultCIProvider";
import { SyntheticsTestResultCIStage } from "./SyntheticsTestResultCIStage";
import { SyntheticsTestResultCdnCacheStatus } from "./SyntheticsTestResultCdnCacheStatus";
import { SyntheticsTestResultCdnProviderInfo } from "./SyntheticsTestResultCdnProviderInfo";
import { SyntheticsTestResultCdnResource } from "./SyntheticsTestResultCdnResource";
import { SyntheticsTestResultCertificate } from "./SyntheticsTestResultCertificate";
import { SyntheticsTestResultCertificateValidity } from "./SyntheticsTestResultCertificateValidity";
import { SyntheticsTestResultData } from "./SyntheticsTestResultData";
import { SyntheticsTestResultDetail } from "./SyntheticsTestResultDetail";
import { SyntheticsTestResultDevice } from "./SyntheticsTestResultDevice";
import { SyntheticsTestResultDeviceBrowser } from "./SyntheticsTestResultDeviceBrowser";
import { SyntheticsTestResultDevicePlatform } from "./SyntheticsTestResultDevicePlatform";
import { SyntheticsTestResultDeviceResolution } from "./SyntheticsTestResultDeviceResolution";
import { SyntheticsTestResultDnsRecord } from "./SyntheticsTestResultDnsRecord";
import { SyntheticsTestResultDnsResolution } from "./SyntheticsTestResultDnsResolution";
import { SyntheticsTestResultDuration } from "./SyntheticsTestResultDuration";
import { SyntheticsTestResultExecutionInfo } from "./SyntheticsTestResultExecutionInfo";
import { SyntheticsTestResultFailure } from "./SyntheticsTestResultFailure";
import { SyntheticsTestResultFileRef } from "./SyntheticsTestResultFileRef";
import { SyntheticsTestResultGit } from "./SyntheticsTestResultGit";
import { SyntheticsTestResultGitCommit } from "./SyntheticsTestResultGitCommit";
import { SyntheticsTestResultGitUser } from "./SyntheticsTestResultGitUser";
import { SyntheticsTestResultHandshake } from "./SyntheticsTestResultHandshake";
import { SyntheticsTestResultHealthCheck } from "./SyntheticsTestResultHealthCheck";
import { SyntheticsTestResultIncludedItem } from "./SyntheticsTestResultIncludedItem";
import { SyntheticsTestResultLocation } from "./SyntheticsTestResultLocation";
import { SyntheticsTestResultNetpath } from "./SyntheticsTestResultNetpath";
import { SyntheticsTestResultNetpathDestination } from "./SyntheticsTestResultNetpathDestination";
import { SyntheticsTestResultNetpathEndpoint } from "./SyntheticsTestResultNetpathEndpoint";
import { SyntheticsTestResultNetpathHop } from "./SyntheticsTestResultNetpathHop";
import { SyntheticsTestResultNetstats } from "./SyntheticsTestResultNetstats";
import { SyntheticsTestResultNetstatsHops } from "./SyntheticsTestResultNetstatsHops";
import { SyntheticsTestResultNetworkLatency } from "./SyntheticsTestResultNetworkLatency";
import { SyntheticsTestResultOCSPCertificate } from "./SyntheticsTestResultOCSPCertificate";
import { SyntheticsTestResultOCSPResponse } from "./SyntheticsTestResultOCSPResponse";
import { SyntheticsTestResultOCSPUpdates } from "./SyntheticsTestResultOCSPUpdates";
import { SyntheticsTestResultParentStep } from "./SyntheticsTestResultParentStep";
import { SyntheticsTestResultParentTest } from "./SyntheticsTestResultParentTest";
import { SyntheticsTestResultRedirect } from "./SyntheticsTestResultRedirect";
import { SyntheticsTestResultRelationshipTest } from "./SyntheticsTestResultRelationshipTest";
import { SyntheticsTestResultRelationshipTestData } from "./SyntheticsTestResultRelationshipTestData";
import { SyntheticsTestResultRelationships } from "./SyntheticsTestResultRelationships";
import { SyntheticsTestResultRequestInfo } from "./SyntheticsTestResultRequestInfo";
import { SyntheticsTestResultResponse } from "./SyntheticsTestResultResponse";
import { SyntheticsTestResultResponseInfo } from "./SyntheticsTestResultResponseInfo";
import { SyntheticsTestResultRouter } from "./SyntheticsTestResultRouter";
import { SyntheticsTestResultRumContext } from "./SyntheticsTestResultRumContext";
import { SyntheticsTestResultStep } from "./SyntheticsTestResultStep";
import { SyntheticsTestResultStepAssertionResult } from "./SyntheticsTestResultStepAssertionResult";
import { SyntheticsTestResultStepElementUpdates } from "./SyntheticsTestResultStepElementUpdates";
import { SyntheticsTestResultStepsInfo } from "./SyntheticsTestResultStepsInfo";
import { SyntheticsTestResultSubStep } from "./SyntheticsTestResultSubStep";
import { SyntheticsTestResultSubTest } from "./SyntheticsTestResultSubTest";
import { SyntheticsTestResultSummaryAttributes } from "./SyntheticsTestResultSummaryAttributes";
import { SyntheticsTestResultSummaryData } from "./SyntheticsTestResultSummaryData";
import { SyntheticsTestResultTab } from "./SyntheticsTestResultTab";
import { SyntheticsTestResultTrace } from "./SyntheticsTestResultTrace";
import { SyntheticsTestResultTracerouteHop } from "./SyntheticsTestResultTracerouteHop";
import { SyntheticsTestResultTurn } from "./SyntheticsTestResultTurn";
import { SyntheticsTestResultTurnStep } from "./SyntheticsTestResultTurnStep";
import { SyntheticsTestResultVariable } from "./SyntheticsTestResultVariable";
import { SyntheticsTestResultVariables } from "./SyntheticsTestResultVariables";
import { SyntheticsTestResultVitalsMetrics } from "./SyntheticsTestResultVitalsMetrics";
import { SyntheticsTestResultWarning } from "./SyntheticsTestResultWarning";
import { SyntheticsTestResultWebSocketClose } from "./SyntheticsTestResultWebSocketClose";
import { SyntheticsTestVersionActionMetadata } from "./SyntheticsTestVersionActionMetadata";
import { SyntheticsTestVersionAttributes } from "./SyntheticsTestVersionAttributes";
import { SyntheticsTestVersionAuthor } from "./SyntheticsTestVersionAuthor";
import { SyntheticsTestVersionChangeAttributes } from "./SyntheticsTestVersionChangeAttributes";
import { SyntheticsTestVersionChangeData } from "./SyntheticsTestVersionChangeData";
import { SyntheticsTestVersionChangeMetadataItem } from "./SyntheticsTestVersionChangeMetadataItem";
import { SyntheticsTestVersionData } from "./SyntheticsTestVersionData";
import { SyntheticsTestVersionDiffPatchDiff } from "./SyntheticsTestVersionDiffPatchDiff";
import { SyntheticsTestVersionDiffPatches } from "./SyntheticsTestVersionDiffPatches";
import { SyntheticsTestVersionHistoryMeta } from "./SyntheticsTestVersionHistoryMeta";
import { SyntheticsTestVersionHistoryResponse } from "./SyntheticsTestVersionHistoryResponse";
import { SyntheticsTestVersionResponse } from "./SyntheticsTestVersionResponse";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DeletedSuitesRequestType: ["delete_suites_request"],
    DeletedTestsRequestType: ["delete_tests_request"],
    DeletedTestsResponseType: ["delete_tests"],
    GlobalVariableJsonPatchType: ["global_variables_json_patch"],
    GlobalVariableType: ["global_variables"],
    JsonPatchOperationOp: ["add", "remove", "replace", "move", "copy", "test"],
    OnDemandConcurrencyCapType: ["on_demand_concurrency_cap"],
    SuiteJsonPatchType: ["suites_json_patch"],
    SuiteSearchResponseType: ["suites_search"],
    SyntheticsApiMultistepParentTestType: ["parent_test"],
    SyntheticsApiMultistepSubtestType: ["subtest"],
    SyntheticsDowntimeFrequency: ["DAILY", "WEEKLY", "MONTHLY", "YEARLY"],
    SyntheticsDowntimeResourceType: ["downtime"],
    SyntheticsDowntimeWeekday: ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
    SyntheticsFastTestResultType: ["result"],
    SyntheticsFastTestSubType: [
      "dns",
      "grpc",
      "http",
      "icmp",
      "mcp",
      "multi",
      "ssl",
      "tcp",
      "udp",
      "websocket",
    ],
    SyntheticsFastTestType: ["fast-api", "fast-browser"],
    SyntheticsGlobalVariableParseTestOptionsType: [
      "http_body",
      "http_header",
      "http_status_code",
      "local_variable",
    ],
    SyntheticsGlobalVariableParserType: ["raw", "json_path", "regex", "x_path"],
    SyntheticsNetworkAssertionJitterType: ["jitter"],
    SyntheticsNetworkAssertionLatencyType: ["latency"],
    SyntheticsNetworkAssertionMultiNetworkHopType: ["multiNetworkHop"],
    SyntheticsNetworkAssertionOperator: [
      "is",
      "isNot",
      "lessThan",
      "lessThanOrEqual",
      "moreThan",
      "moreThanOrEqual",
    ],
    SyntheticsNetworkAssertionPacketLossPercentageType: [
      "packetLossPercentage",
    ],
    SyntheticsNetworkAssertionProperty: ["avg", "max", "min"],
    SyntheticsNetworkTestRequestTCPMethod: ["prefer_sack", "syn", "sack"],
    SyntheticsNetworkTestResponseType: ["network_test"],
    SyntheticsNetworkTestSubType: ["tcp", "udp", "icmp"],
    SyntheticsNetworkTestType: ["network"],
    SyntheticsSuiteTestAlertingCriticality: ["ignore", "critical"],
    SyntheticsSuiteType: ["suite"],
    SyntheticsSuiteTypes: ["suites"],
    SyntheticsTestFileMultipartPresignedUrlsRequestBucketKeyPrefix: [
      "api-upload-file",
      "browser-upload-file-step",
    ],
    SyntheticsTestOptionsMonitorOptionsNotificationPresetName: [
      "show_all",
      "hide_all",
      "hide_query",
      "hide_handles",
      "hide_query_and_handles",
      "show_only_snapshot",
      "hide_handles_and_footer",
    ],
    SyntheticsTestParentSuiteType: ["parent_suite"],
    SyntheticsTestPauseStatus: ["live", "paused"],
    SyntheticsTestResultRunType: ["scheduled", "fast", "ci", "triggered"],
    SyntheticsTestResultStatus: ["passed", "failed", "no_data"],
    SyntheticsTestResultSummaryType: ["result_summary"],
    SyntheticsTestResultType: ["result"],
    SyntheticsTestSubType: [
      "dns",
      "grpc",
      "http",
      "icmp",
      "mcp",
      "multi",
      "ssl",
      "tcp",
      "udp",
      "websocket",
    ],
    SyntheticsTestType: ["api", "browser", "mobile", "network"],
    SyntheticsTestVersionChangeType: ["version_metadata"],
    SyntheticsTestVersionType: ["version"],
  },
  oneOfMap: {
    SyntheticsNetworkAssertion: [
      "SyntheticsNetworkAssertionLatency",
      "SyntheticsNetworkAssertionMultiNetworkHop",
      "SyntheticsNetworkAssertionPacketLossPercentage",
      "SyntheticsNetworkAssertionJitter",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DeletedSuiteResponseData: DeletedSuiteResponseData,
    DeletedSuiteResponseDataAttributes: DeletedSuiteResponseDataAttributes,
    DeletedSuitesRequestDelete: DeletedSuitesRequestDelete,
    DeletedSuitesRequestDeleteAttributes: DeletedSuitesRequestDeleteAttributes,
    DeletedSuitesRequestDeleteRequest: DeletedSuitesRequestDeleteRequest,
    DeletedSuitesResponse: DeletedSuitesResponse,
    DeletedTestResponseData: DeletedTestResponseData,
    DeletedTestResponseDataAttributes: DeletedTestResponseDataAttributes,
    DeletedTestsRequestDelete: DeletedTestsRequestDelete,
    DeletedTestsRequestDeleteAttributes: DeletedTestsRequestDeleteAttributes,
    DeletedTestsRequestDeleteRequest: DeletedTestsRequestDeleteRequest,
    DeletedTestsResponse: DeletedTestsResponse,
    GlobalVariableData: GlobalVariableData,
    GlobalVariableJsonPatchRequest: GlobalVariableJsonPatchRequest,
    GlobalVariableJsonPatchRequestData: GlobalVariableJsonPatchRequestData,
    GlobalVariableJsonPatchRequestDataAttributes:
      GlobalVariableJsonPatchRequestDataAttributes,
    GlobalVariableResponse: GlobalVariableResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    JsonPatchOperation: JsonPatchOperation,
    OnDemandConcurrencyCap: OnDemandConcurrencyCap,
    OnDemandConcurrencyCapAttributes: OnDemandConcurrencyCapAttributes,
    OnDemandConcurrencyCapResponse: OnDemandConcurrencyCapResponse,
    SuiteCreateEdit: SuiteCreateEdit,
    SuiteCreateEditRequest: SuiteCreateEditRequest,
    SuiteJsonPatchRequest: SuiteJsonPatchRequest,
    SuiteJsonPatchRequestData: SuiteJsonPatchRequestData,
    SuiteJsonPatchRequestDataAttributes: SuiteJsonPatchRequestDataAttributes,
    SyntheticsApiMultistepParentTestAttributes:
      SyntheticsApiMultistepParentTestAttributes,
    SyntheticsApiMultistepParentTestData: SyntheticsApiMultistepParentTestData,
    SyntheticsApiMultistepParentTestsResponse:
      SyntheticsApiMultistepParentTestsResponse,
    SyntheticsApiMultistepSubtestAttributes:
      SyntheticsApiMultistepSubtestAttributes,
    SyntheticsApiMultistepSubtestData: SyntheticsApiMultistepSubtestData,
    SyntheticsApiMultistepSubtestsResponse:
      SyntheticsApiMultistepSubtestsResponse,
    SyntheticsDowntimeData: SyntheticsDowntimeData,
    SyntheticsDowntimeDataAttributesRequest:
      SyntheticsDowntimeDataAttributesRequest,
    SyntheticsDowntimeDataAttributesResponse:
      SyntheticsDowntimeDataAttributesResponse,
    SyntheticsDowntimeDataRequest: SyntheticsDowntimeDataRequest,
    SyntheticsDowntimeRequest: SyntheticsDowntimeRequest,
    SyntheticsDowntimeResponse: SyntheticsDowntimeResponse,
    SyntheticsDowntimeTimeSlotDate: SyntheticsDowntimeTimeSlotDate,
    SyntheticsDowntimeTimeSlotRecurrenceRequest:
      SyntheticsDowntimeTimeSlotRecurrenceRequest,
    SyntheticsDowntimeTimeSlotRecurrenceResponse:
      SyntheticsDowntimeTimeSlotRecurrenceResponse,
    SyntheticsDowntimeTimeSlotRequest: SyntheticsDowntimeTimeSlotRequest,
    SyntheticsDowntimeTimeSlotResponse: SyntheticsDowntimeTimeSlotResponse,
    SyntheticsDowntimesResponse: SyntheticsDowntimesResponse,
    SyntheticsFastTestResult: SyntheticsFastTestResult,
    SyntheticsFastTestResultAttributes: SyntheticsFastTestResultAttributes,
    SyntheticsFastTestResultData: SyntheticsFastTestResultData,
    SyntheticsFastTestResultDetail: SyntheticsFastTestResultDetail,
    SyntheticsGlobalVariable: SyntheticsGlobalVariable,
    SyntheticsGlobalVariableAttributes: SyntheticsGlobalVariableAttributes,
    SyntheticsGlobalVariableOptions: SyntheticsGlobalVariableOptions,
    SyntheticsGlobalVariableParseTestOptions:
      SyntheticsGlobalVariableParseTestOptions,
    SyntheticsGlobalVariableTOTPParameters:
      SyntheticsGlobalVariableTOTPParameters,
    SyntheticsGlobalVariableValue: SyntheticsGlobalVariableValue,
    SyntheticsNetworkAssertionJitter: SyntheticsNetworkAssertionJitter,
    SyntheticsNetworkAssertionLatency: SyntheticsNetworkAssertionLatency,
    SyntheticsNetworkAssertionMultiNetworkHop:
      SyntheticsNetworkAssertionMultiNetworkHop,
    SyntheticsNetworkAssertionPacketLossPercentage:
      SyntheticsNetworkAssertionPacketLossPercentage,
    SyntheticsNetworkTest: SyntheticsNetworkTest,
    SyntheticsNetworkTestConfig: SyntheticsNetworkTestConfig,
    SyntheticsNetworkTestEdit: SyntheticsNetworkTestEdit,
    SyntheticsNetworkTestEditRequest: SyntheticsNetworkTestEditRequest,
    SyntheticsNetworkTestRequest: SyntheticsNetworkTestRequest,
    SyntheticsNetworkTestResponse: SyntheticsNetworkTestResponse,
    SyntheticsNetworkTestResponseData: SyntheticsNetworkTestResponseData,
    SyntheticsPollTestResultsResponse: SyntheticsPollTestResultsResponse,
    SyntheticsSuite: SyntheticsSuite,
    SyntheticsSuiteOptions: SyntheticsSuiteOptions,
    SyntheticsSuiteResponse: SyntheticsSuiteResponse,
    SyntheticsSuiteResponseData: SyntheticsSuiteResponseData,
    SyntheticsSuiteSearchResponse: SyntheticsSuiteSearchResponse,
    SyntheticsSuiteSearchResponseData: SyntheticsSuiteSearchResponseData,
    SyntheticsSuiteSearchResponseDataAttributes:
      SyntheticsSuiteSearchResponseDataAttributes,
    SyntheticsSuiteTest: SyntheticsSuiteTest,
    SyntheticsTestFileAbortMultipartUploadRequest:
      SyntheticsTestFileAbortMultipartUploadRequest,
    SyntheticsTestFileCompleteMultipartUploadPart:
      SyntheticsTestFileCompleteMultipartUploadPart,
    SyntheticsTestFileCompleteMultipartUploadRequest:
      SyntheticsTestFileCompleteMultipartUploadRequest,
    SyntheticsTestFileDownloadRequest: SyntheticsTestFileDownloadRequest,
    SyntheticsTestFileDownloadResponse: SyntheticsTestFileDownloadResponse,
    SyntheticsTestFileMultipartPresignedUrlsParams:
      SyntheticsTestFileMultipartPresignedUrlsParams,
    SyntheticsTestFileMultipartPresignedUrlsPart:
      SyntheticsTestFileMultipartPresignedUrlsPart,
    SyntheticsTestFileMultipartPresignedUrlsRequest:
      SyntheticsTestFileMultipartPresignedUrlsRequest,
    SyntheticsTestFileMultipartPresignedUrlsResponse:
      SyntheticsTestFileMultipartPresignedUrlsResponse,
    SyntheticsTestLatestResultsResponse: SyntheticsTestLatestResultsResponse,
    SyntheticsTestOptions: SyntheticsTestOptions,
    SyntheticsTestOptionsMonitorOptions: SyntheticsTestOptionsMonitorOptions,
    SyntheticsTestOptionsRetry: SyntheticsTestOptionsRetry,
    SyntheticsTestOptionsScheduling: SyntheticsTestOptionsScheduling,
    SyntheticsTestOptionsSchedulingTimeframe:
      SyntheticsTestOptionsSchedulingTimeframe,
    SyntheticsTestParentSuiteAttributes: SyntheticsTestParentSuiteAttributes,
    SyntheticsTestParentSuiteData: SyntheticsTestParentSuiteData,
    SyntheticsTestParentSuitesResponse: SyntheticsTestParentSuitesResponse,
    SyntheticsTestResultAssertionResult: SyntheticsTestResultAssertionResult,
    SyntheticsTestResultAttributes: SyntheticsTestResultAttributes,
    SyntheticsTestResultBatch: SyntheticsTestResultBatch,
    SyntheticsTestResultBounds: SyntheticsTestResultBounds,
    SyntheticsTestResultBrowserError: SyntheticsTestResultBrowserError,
    SyntheticsTestResultBucketKeys: SyntheticsTestResultBucketKeys,
    SyntheticsTestResultCI: SyntheticsTestResultCI,
    SyntheticsTestResultCIPipeline: SyntheticsTestResultCIPipeline,
    SyntheticsTestResultCIProvider: SyntheticsTestResultCIProvider,
    SyntheticsTestResultCIStage: SyntheticsTestResultCIStage,
    SyntheticsTestResultCdnCacheStatus: SyntheticsTestResultCdnCacheStatus,
    SyntheticsTestResultCdnProviderInfo: SyntheticsTestResultCdnProviderInfo,
    SyntheticsTestResultCdnResource: SyntheticsTestResultCdnResource,
    SyntheticsTestResultCertificate: SyntheticsTestResultCertificate,
    SyntheticsTestResultCertificateValidity:
      SyntheticsTestResultCertificateValidity,
    SyntheticsTestResultData: SyntheticsTestResultData,
    SyntheticsTestResultDetail: SyntheticsTestResultDetail,
    SyntheticsTestResultDevice: SyntheticsTestResultDevice,
    SyntheticsTestResultDeviceBrowser: SyntheticsTestResultDeviceBrowser,
    SyntheticsTestResultDevicePlatform: SyntheticsTestResultDevicePlatform,
    SyntheticsTestResultDeviceResolution: SyntheticsTestResultDeviceResolution,
    SyntheticsTestResultDnsRecord: SyntheticsTestResultDnsRecord,
    SyntheticsTestResultDnsResolution: SyntheticsTestResultDnsResolution,
    SyntheticsTestResultDuration: SyntheticsTestResultDuration,
    SyntheticsTestResultExecutionInfo: SyntheticsTestResultExecutionInfo,
    SyntheticsTestResultFailure: SyntheticsTestResultFailure,
    SyntheticsTestResultFileRef: SyntheticsTestResultFileRef,
    SyntheticsTestResultGit: SyntheticsTestResultGit,
    SyntheticsTestResultGitCommit: SyntheticsTestResultGitCommit,
    SyntheticsTestResultGitUser: SyntheticsTestResultGitUser,
    SyntheticsTestResultHandshake: SyntheticsTestResultHandshake,
    SyntheticsTestResultHealthCheck: SyntheticsTestResultHealthCheck,
    SyntheticsTestResultIncludedItem: SyntheticsTestResultIncludedItem,
    SyntheticsTestResultLocation: SyntheticsTestResultLocation,
    SyntheticsTestResultNetpath: SyntheticsTestResultNetpath,
    SyntheticsTestResultNetpathDestination:
      SyntheticsTestResultNetpathDestination,
    SyntheticsTestResultNetpathEndpoint: SyntheticsTestResultNetpathEndpoint,
    SyntheticsTestResultNetpathHop: SyntheticsTestResultNetpathHop,
    SyntheticsTestResultNetstats: SyntheticsTestResultNetstats,
    SyntheticsTestResultNetstatsHops: SyntheticsTestResultNetstatsHops,
    SyntheticsTestResultNetworkLatency: SyntheticsTestResultNetworkLatency,
    SyntheticsTestResultOCSPCertificate: SyntheticsTestResultOCSPCertificate,
    SyntheticsTestResultOCSPResponse: SyntheticsTestResultOCSPResponse,
    SyntheticsTestResultOCSPUpdates: SyntheticsTestResultOCSPUpdates,
    SyntheticsTestResultParentStep: SyntheticsTestResultParentStep,
    SyntheticsTestResultParentTest: SyntheticsTestResultParentTest,
    SyntheticsTestResultRedirect: SyntheticsTestResultRedirect,
    SyntheticsTestResultRelationshipTest: SyntheticsTestResultRelationshipTest,
    SyntheticsTestResultRelationshipTestData:
      SyntheticsTestResultRelationshipTestData,
    SyntheticsTestResultRelationships: SyntheticsTestResultRelationships,
    SyntheticsTestResultRequestInfo: SyntheticsTestResultRequestInfo,
    SyntheticsTestResultResponse: SyntheticsTestResultResponse,
    SyntheticsTestResultResponseInfo: SyntheticsTestResultResponseInfo,
    SyntheticsTestResultRouter: SyntheticsTestResultRouter,
    SyntheticsTestResultRumContext: SyntheticsTestResultRumContext,
    SyntheticsTestResultStep: SyntheticsTestResultStep,
    SyntheticsTestResultStepAssertionResult:
      SyntheticsTestResultStepAssertionResult,
    SyntheticsTestResultStepElementUpdates:
      SyntheticsTestResultStepElementUpdates,
    SyntheticsTestResultStepsInfo: SyntheticsTestResultStepsInfo,
    SyntheticsTestResultSubStep: SyntheticsTestResultSubStep,
    SyntheticsTestResultSubTest: SyntheticsTestResultSubTest,
    SyntheticsTestResultSummaryAttributes:
      SyntheticsTestResultSummaryAttributes,
    SyntheticsTestResultSummaryData: SyntheticsTestResultSummaryData,
    SyntheticsTestResultTab: SyntheticsTestResultTab,
    SyntheticsTestResultTrace: SyntheticsTestResultTrace,
    SyntheticsTestResultTracerouteHop: SyntheticsTestResultTracerouteHop,
    SyntheticsTestResultTurn: SyntheticsTestResultTurn,
    SyntheticsTestResultTurnStep: SyntheticsTestResultTurnStep,
    SyntheticsTestResultVariable: SyntheticsTestResultVariable,
    SyntheticsTestResultVariables: SyntheticsTestResultVariables,
    SyntheticsTestResultVitalsMetrics: SyntheticsTestResultVitalsMetrics,
    SyntheticsTestResultWarning: SyntheticsTestResultWarning,
    SyntheticsTestResultWebSocketClose: SyntheticsTestResultWebSocketClose,
    SyntheticsTestVersionActionMetadata: SyntheticsTestVersionActionMetadata,
    SyntheticsTestVersionAttributes: SyntheticsTestVersionAttributes,
    SyntheticsTestVersionAuthor: SyntheticsTestVersionAuthor,
    SyntheticsTestVersionChangeAttributes:
      SyntheticsTestVersionChangeAttributes,
    SyntheticsTestVersionChangeData: SyntheticsTestVersionChangeData,
    SyntheticsTestVersionChangeMetadataItem:
      SyntheticsTestVersionChangeMetadataItem,
    SyntheticsTestVersionData: SyntheticsTestVersionData,
    SyntheticsTestVersionDiffPatchDiff: SyntheticsTestVersionDiffPatchDiff,
    SyntheticsTestVersionDiffPatches: SyntheticsTestVersionDiffPatches,
    SyntheticsTestVersionHistoryMeta: SyntheticsTestVersionHistoryMeta,
    SyntheticsTestVersionHistoryResponse: SyntheticsTestVersionHistoryResponse,
    SyntheticsTestVersionResponse: SyntheticsTestVersionResponse,
    SyntheticsVariableParser: SyntheticsVariableParser,
  },
};
