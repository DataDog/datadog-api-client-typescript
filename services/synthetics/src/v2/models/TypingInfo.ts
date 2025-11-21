import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GlobalVariableData } from "./GlobalVariableData";
import { GlobalVariableJsonPatchRequest } from "./GlobalVariableJsonPatchRequest";
import { GlobalVariableJsonPatchRequestData } from "./GlobalVariableJsonPatchRequestData";
import { GlobalVariableJsonPatchRequestDataAttributes } from "./GlobalVariableJsonPatchRequestDataAttributes";
import { GlobalVariableResponse } from "./GlobalVariableResponse";
import { JsonPatchOperation } from "./JsonPatchOperation";
import { OnDemandConcurrencyCap } from "./OnDemandConcurrencyCap";
import { OnDemandConcurrencyCapAttributes } from "./OnDemandConcurrencyCapAttributes";
import { OnDemandConcurrencyCapResponse } from "./OnDemandConcurrencyCapResponse";
import { SyntheticsGlobalVariable } from "./SyntheticsGlobalVariable";
import { SyntheticsGlobalVariableAttributes } from "./SyntheticsGlobalVariableAttributes";
import { SyntheticsGlobalVariableOptions } from "./SyntheticsGlobalVariableOptions";
import { SyntheticsGlobalVariableParseTestOptions } from "./SyntheticsGlobalVariableParseTestOptions";
import { SyntheticsGlobalVariableTOTPParameters } from "./SyntheticsGlobalVariableTOTPParameters";
import { SyntheticsGlobalVariableValue } from "./SyntheticsGlobalVariableValue";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GlobalVariableJsonPatchType: ["global_variables_json_patch"],
    GlobalVariableType: ["global_variables"],
    JsonPatchOperationOp: ["add", "remove", "replace", "move", "copy", "test"],
    OnDemandConcurrencyCapType: ["on_demand_concurrency_cap"],
    SyntheticsGlobalVariableParseTestOptionsType: [
      "http_body",
      "http_header",
      "http_status_code",
      "local_variable",
    ],
    SyntheticsGlobalVariableParserType: ["raw", "json_path", "regex", "x_path"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
    SyntheticsGlobalVariable: SyntheticsGlobalVariable,
    SyntheticsGlobalVariableAttributes: SyntheticsGlobalVariableAttributes,
    SyntheticsGlobalVariableOptions: SyntheticsGlobalVariableOptions,
    SyntheticsGlobalVariableParseTestOptions:
      SyntheticsGlobalVariableParseTestOptions,
    SyntheticsGlobalVariableTOTPParameters:
      SyntheticsGlobalVariableTOTPParameters,
    SyntheticsGlobalVariableValue: SyntheticsGlobalVariableValue,
    SyntheticsVariableParser: SyntheticsVariableParser,
  },
};
