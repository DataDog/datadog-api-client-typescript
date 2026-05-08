import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ReplaySummaryChapter } from "./ReplaySummaryChapter";
import { ReplaySummaryDataAttributesResponse } from "./ReplaySummaryDataAttributesResponse";
import { ReplaySummaryDataRequest } from "./ReplaySummaryDataRequest";
import { ReplaySummaryDataResponse } from "./ReplaySummaryDataResponse";
import { ReplaySummaryRequest } from "./ReplaySummaryRequest";
import { ReplaySummaryResponse } from "./ReplaySummaryResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ReplaySummaryRequestType: ["replay_summary_request"],
    ReplaySummaryResponseType: ["summary_response"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ReplaySummaryChapter: ReplaySummaryChapter,
    ReplaySummaryDataAttributesResponse: ReplaySummaryDataAttributesResponse,
    ReplaySummaryDataRequest: ReplaySummaryDataRequest,
    ReplaySummaryDataResponse: ReplaySummaryDataResponse,
    ReplaySummaryRequest: ReplaySummaryRequest,
    ReplaySummaryResponse: ReplaySummaryResponse,
  },
};
