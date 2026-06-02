import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AggregatedHighFrozenFrameRate } from "./AggregatedHighFrozenFrameRate";
import { AggregatedHighScriptEval } from "./AggregatedHighScriptEval";
import { AggregatedLongTasksByInvokerType } from "./AggregatedLongTasksByInvokerType";
import { AggregatedLongTasksRequest } from "./AggregatedLongTasksRequest";
import { AggregatedLongTasksRequestAttributes } from "./AggregatedLongTasksRequestAttributes";
import { AggregatedLongTasksRequestData } from "./AggregatedLongTasksRequestData";
import { AggregatedLongTasksResponse } from "./AggregatedLongTasksResponse";
import { AggregatedLongTasksResponseAttributes } from "./AggregatedLongTasksResponseAttributes";
import { AggregatedLongTasksResponseData } from "./AggregatedLongTasksResponseData";
import { AggregatedLowCacheHitRate } from "./AggregatedLowCacheHitRate";
import { AggregatedMobileScrollFriction } from "./AggregatedMobileScrollFriction";
import { AggregatedResource } from "./AggregatedResource";
import { AggregatedResourceTimingBreakdown } from "./AggregatedResourceTimingBreakdown";
import { AggregatedSignalsProblemsRequest } from "./AggregatedSignalsProblemsRequest";
import { AggregatedSignalsProblemsRequestAttributes } from "./AggregatedSignalsProblemsRequestAttributes";
import { AggregatedSignalsProblemsRequestData } from "./AggregatedSignalsProblemsRequestData";
import { AggregatedSignalsProblemsResponse } from "./AggregatedSignalsProblemsResponse";
import { AggregatedSignalsProblemsResponseAttributes } from "./AggregatedSignalsProblemsResponseAttributes";
import { AggregatedSignalsProblemsResponseData } from "./AggregatedSignalsProblemsResponseData";
import { AggregatedSlowFCPHighBytes } from "./AggregatedSlowFCPHighBytes";
import { AggregatedSlowInteractionLongTask } from "./AggregatedSlowInteractionLongTask";
import { AggregatedUncompressedResource } from "./AggregatedUncompressedResource";
import { AggregatedWaterfallPerformanceCriteria } from "./AggregatedWaterfallPerformanceCriteria";
import { AggregatedWaterfallRequest } from "./AggregatedWaterfallRequest";
import { AggregatedWaterfallRequestAttributes } from "./AggregatedWaterfallRequestAttributes";
import { AggregatedWaterfallRequestData } from "./AggregatedWaterfallRequestData";
import { AggregatedWaterfallResponse } from "./AggregatedWaterfallResponse";
import { AggregatedWaterfallResponseAttributes } from "./AggregatedWaterfallResponseAttributes";
import { AggregatedWaterfallResponseData } from "./AggregatedWaterfallResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LongTaskMetricStats } from "./LongTaskMetricStats";
import { LongTaskStatsPerView } from "./LongTaskStatsPerView";
import { SignalsProblemsDetections } from "./SignalsProblemsDetections";
import { SignalsProblemsSampleMetadata } from "./SignalsProblemsSampleMetadata";
import { TopLongTaskInvoker } from "./TopLongTaskInvoker";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AggregatedLongTasksRequestType: ["aggregated_long_tasks"],
    AggregatedSignalsProblemsRequestType: ["aggregated_signals_problems"],
    AggregatedWaterfallPerformanceCriteriaMetric: [
      "loading_time",
      "largest_contentful_paint",
      "first_contentful_paint",
      "interaction_to_next_paint",
    ],
    AggregatedWaterfallRequestType: ["aggregated_waterfall"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AggregatedHighFrozenFrameRate: AggregatedHighFrozenFrameRate,
    AggregatedHighScriptEval: AggregatedHighScriptEval,
    AggregatedLongTasksByInvokerType: AggregatedLongTasksByInvokerType,
    AggregatedLongTasksRequest: AggregatedLongTasksRequest,
    AggregatedLongTasksRequestAttributes: AggregatedLongTasksRequestAttributes,
    AggregatedLongTasksRequestData: AggregatedLongTasksRequestData,
    AggregatedLongTasksResponse: AggregatedLongTasksResponse,
    AggregatedLongTasksResponseAttributes:
      AggregatedLongTasksResponseAttributes,
    AggregatedLongTasksResponseData: AggregatedLongTasksResponseData,
    AggregatedLowCacheHitRate: AggregatedLowCacheHitRate,
    AggregatedMobileScrollFriction: AggregatedMobileScrollFriction,
    AggregatedResource: AggregatedResource,
    AggregatedResourceTimingBreakdown: AggregatedResourceTimingBreakdown,
    AggregatedSignalsProblemsRequest: AggregatedSignalsProblemsRequest,
    AggregatedSignalsProblemsRequestAttributes:
      AggregatedSignalsProblemsRequestAttributes,
    AggregatedSignalsProblemsRequestData: AggregatedSignalsProblemsRequestData,
    AggregatedSignalsProblemsResponse: AggregatedSignalsProblemsResponse,
    AggregatedSignalsProblemsResponseAttributes:
      AggregatedSignalsProblemsResponseAttributes,
    AggregatedSignalsProblemsResponseData:
      AggregatedSignalsProblemsResponseData,
    AggregatedSlowFCPHighBytes: AggregatedSlowFCPHighBytes,
    AggregatedSlowInteractionLongTask: AggregatedSlowInteractionLongTask,
    AggregatedUncompressedResource: AggregatedUncompressedResource,
    AggregatedWaterfallPerformanceCriteria:
      AggregatedWaterfallPerformanceCriteria,
    AggregatedWaterfallRequest: AggregatedWaterfallRequest,
    AggregatedWaterfallRequestAttributes: AggregatedWaterfallRequestAttributes,
    AggregatedWaterfallRequestData: AggregatedWaterfallRequestData,
    AggregatedWaterfallResponse: AggregatedWaterfallResponse,
    AggregatedWaterfallResponseAttributes:
      AggregatedWaterfallResponseAttributes,
    AggregatedWaterfallResponseData: AggregatedWaterfallResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LongTaskMetricStats: LongTaskMetricStats,
    LongTaskStatsPerView: LongTaskStatsPerView,
    SignalsProblemsDetections: SignalsProblemsDetections,
    SignalsProblemsSampleMetadata: SignalsProblemsSampleMetadata,
    TopLongTaskInvoker: TopLongTaskInvoker,
  },
};
