import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { DelegatedTokenAttributes } from "./DelegatedTokenAttributes";
import { DelegatedTokenData } from "./DelegatedTokenData";
import { DelegatedTokenResponse } from "./DelegatedTokenResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    DelegatedTokenType: ["token"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    DelegatedTokenAttributes: DelegatedTokenAttributes,
    DelegatedTokenData: DelegatedTokenData,
    DelegatedTokenResponse: DelegatedTokenResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
