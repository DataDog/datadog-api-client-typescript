import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { PolicyResultAttributesResponse } from "./PolicyResultAttributesResponse";
import { PolicyResultDataResponse } from "./PolicyResultDataResponse";
import { PolicyResultResponse } from "./PolicyResultResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    PolicyResultType: ["policy_result"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    PolicyResultAttributesResponse: PolicyResultAttributesResponse,
    PolicyResultDataResponse: PolicyResultDataResponse,
    PolicyResultResponse: PolicyResultResponse,
  },
};
