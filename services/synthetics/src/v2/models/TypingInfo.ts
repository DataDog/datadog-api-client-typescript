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
import { JsonPatchOperation } from "./JsonPatchOperation";
import { OnDemandConcurrencyCap } from "./OnDemandConcurrencyCap";
import { OnDemandConcurrencyCapAttributes } from "./OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapResponse } from "./OnDemandConcurrencyCapResponse";
import { SuiteCreateEdit } from "./SuiteCreateEdit";
import { SuiteCreateEditRequest } from "./SuiteCreateEditRequest";
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
import { SyntheticsSuite } from "./SyntheticsSuite";
import { SyntheticsSuiteOptions } from "./SyntheticsSuiteOptions";
import { SyntheticsSuiteResponse } from "./SyntheticsSuiteResponse";
import { SyntheticsSuiteResponseData } from "./SyntheticsSuiteResponseData";
import { SyntheticsSuiteSearchResponse } from "./SyntheticsSuiteSearchResponse";
import { SyntheticsSuiteSearchResponseData } from "./SyntheticsSuiteSearchResponseData";
import { SyntheticsSuiteSearchResponseDataAttributes } from "./SyntheticsSuiteSearchResponseDataAttributes";
import { SyntheticsSuiteTest } from "./SyntheticsSuiteTest";
import { SyntheticsTestOptions } from "./SyntheticsTestOptions";
import { SyntheticsTestOptionsMonitorOptions } from "./SyntheticsTestOptionsMonitorOptions";
import { SyntheticsTestOptionsRetry } from "./SyntheticsTestOptionsRetry";
import { SyntheticsTestOptionsScheduling } from "./SyntheticsTestOptionsScheduling";
import { SyntheticsTestOptionsSchedulingTimeframe } from "./SyntheticsTestOptionsSchedulingTimeframe";
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
    SuiteSearchResponseType: ["suites_search"],
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
    SyntheticsTestOptionsMonitorOptionsNotificationPresetName: [
      "show_all",
      "hide_all",
      "hide_query",
      "hide_handles",
      "hide_query_and_handles",
      "show_only_snapshot",
      "hide_handles_and_footer",
    ],
    SyntheticsTestPauseStatus: ["live", "paused"],
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
    JsonPatchOperation: JsonPatchOperation,
    OnDemandConcurrencyCap: OnDemandConcurrencyCap,
    OnDemandConcurrencyCapAttributes: OnDemandConcurrencyCapAttributes,
    OnDemandConcurrencyCapResponse: OnDemandConcurrencyCapResponse,
    SuiteCreateEdit: SuiteCreateEdit,
    SuiteCreateEditRequest: SuiteCreateEditRequest,
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
    SyntheticsSuite: SyntheticsSuite,
    SyntheticsSuiteOptions: SyntheticsSuiteOptions,
    SyntheticsSuiteResponse: SyntheticsSuiteResponse,
    SyntheticsSuiteResponseData: SyntheticsSuiteResponseData,
    SyntheticsSuiteSearchResponse: SyntheticsSuiteSearchResponse,
    SyntheticsSuiteSearchResponseData: SyntheticsSuiteSearchResponseData,
    SyntheticsSuiteSearchResponseDataAttributes:
      SyntheticsSuiteSearchResponseDataAttributes,
    SyntheticsSuiteTest: SyntheticsSuiteTest,
    SyntheticsTestOptions: SyntheticsTestOptions,
    SyntheticsTestOptionsMonitorOptions: SyntheticsTestOptionsMonitorOptions,
    SyntheticsTestOptionsRetry: SyntheticsTestOptionsRetry,
    SyntheticsTestOptionsScheduling: SyntheticsTestOptionsScheduling,
    SyntheticsTestOptionsSchedulingTimeframe:
      SyntheticsTestOptionsSchedulingTimeframe,
    SyntheticsVariableParser: SyntheticsVariableParser,
  },
};
