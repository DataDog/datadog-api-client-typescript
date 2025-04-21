import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ProcessSummariesMeta } from "./ProcessSummariesMeta";
import { ProcessSummariesMetaPage } from "./ProcessSummariesMetaPage";
import { ProcessSummariesResponse } from "./ProcessSummariesResponse";
import { ProcessSummary } from "./ProcessSummary";
import { ProcessSummaryAttributes } from "./ProcessSummaryAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ProcessSummaryType: ["process"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ProcessSummariesMeta: ProcessSummariesMeta,
    ProcessSummariesMetaPage: ProcessSummariesMetaPage,
    ProcessSummariesResponse: ProcessSummariesResponse,
    ProcessSummary: ProcessSummary,
    ProcessSummaryAttributes: ProcessSummaryAttributes,
  },
};
