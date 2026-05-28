import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { APMTraceSpan } from "./APMTraceSpan";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { PrunedTraceAttributes } from "./PrunedTraceAttributes";
import { PrunedTraceData } from "./PrunedTraceData";
import { PrunedTraceResponse } from "./PrunedTraceResponse";
import { SummarizedSpan } from "./SummarizedSpan";
import { SummarizedTrace } from "./SummarizedTrace";
import { TraceAttributes } from "./TraceAttributes";
import { TraceData } from "./TraceData";
import { TraceResponse } from "./TraceResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    APMSpanErrorFlag: [0, 1],
    PrunedTraceType: ["pruned_trace"],
    TraceType: ["trace"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    APMTraceSpan: APMTraceSpan,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    PrunedTraceAttributes: PrunedTraceAttributes,
    PrunedTraceData: PrunedTraceData,
    PrunedTraceResponse: PrunedTraceResponse,
    SummarizedSpan: SummarizedSpan,
    SummarizedTrace: SummarizedTrace,
    TraceAttributes: TraceAttributes,
    TraceData: TraceData,
    TraceResponse: TraceResponse,
  },
};
