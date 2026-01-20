import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DeletedSuiteResponseData } from "./DeletedSuiteResponseData";
import { DeletedSuiteResponseDataAttributes } from "./DeletedSuiteResponseDataAttributes";
import { DeletedSuitesRequestDelete } from "./DeletedSuitesRequestDelete";
import { DeletedSuitesRequestDeleteAttributes } from "./DeletedSuitesRequestDeleteAttributes";
import { DeletedSuitesRequestDeleteRequest } from "./DeletedSuitesRequestDeleteRequest";
import { DeletedSuitesResponse } from "./DeletedSuitesResponse";
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
import { SyntheticsSuite } from "./SyntheticsSuite";
import { SyntheticsSuiteOptions } from "./SyntheticsSuiteOptions";
import { SyntheticsSuiteResponse } from "./SyntheticsSuiteResponse";
import { SyntheticsSuiteResponseData } from "./SyntheticsSuiteResponseData";
import { SyntheticsSuiteSearchResponse } from "./SyntheticsSuiteSearchResponse";
import { SyntheticsSuiteSearchResponseData } from "./SyntheticsSuiteSearchResponseData";
import { SyntheticsSuiteSearchResponseDataAttributes } from "./SyntheticsSuiteSearchResponseDataAttributes";
import { SyntheticsSuiteTest } from "./SyntheticsSuiteTest";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DeletedSuitesRequestType: ["delete_suites_request"],
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
    SyntheticsSuiteTestAlertingCriticality: ["ignore", "critical"],
    SyntheticsSuiteType: ["suite"],
    SyntheticsSuiteTypes: ["suites"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DeletedSuiteResponseData: DeletedSuiteResponseData,
    DeletedSuiteResponseDataAttributes: DeletedSuiteResponseDataAttributes,
    DeletedSuitesRequestDelete: DeletedSuitesRequestDelete,
    DeletedSuitesRequestDeleteAttributes: DeletedSuitesRequestDeleteAttributes,
    DeletedSuitesRequestDeleteRequest: DeletedSuitesRequestDeleteRequest,
    DeletedSuitesResponse: DeletedSuitesResponse,
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
    SyntheticsSuite: SyntheticsSuite,
    SyntheticsSuiteOptions: SyntheticsSuiteOptions,
    SyntheticsSuiteResponse: SyntheticsSuiteResponse,
    SyntheticsSuiteResponseData: SyntheticsSuiteResponseData,
    SyntheticsSuiteSearchResponse: SyntheticsSuiteSearchResponse,
    SyntheticsSuiteSearchResponseData: SyntheticsSuiteSearchResponseData,
    SyntheticsSuiteSearchResponseDataAttributes:
      SyntheticsSuiteSearchResponseDataAttributes,
    SyntheticsSuiteTest: SyntheticsSuiteTest,
    SyntheticsVariableParser: SyntheticsVariableParser,
  },
};
