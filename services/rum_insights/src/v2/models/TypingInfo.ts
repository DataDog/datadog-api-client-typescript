import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AggregatedLongTasksByInvokerType } from "./AggregatedLongTasksByInvokerType";
import { AggregatedLongTasksRequest } from "./AggregatedLongTasksRequest";
import { AggregatedLongTasksRequestAttributes } from "./AggregatedLongTasksRequestAttributes";
import { AggregatedLongTasksRequestData } from "./AggregatedLongTasksRequestData";
import { AggregatedLongTasksResponse } from "./AggregatedLongTasksResponse";
import { AggregatedLongTasksResponseAttributes } from "./AggregatedLongTasksResponseAttributes";
import { AggregatedLongTasksResponseAttributesCriteria } from "./AggregatedLongTasksResponseAttributesCriteria";
import { AggregatedLongTasksResponseData } from "./AggregatedLongTasksResponseData";
import { AggregatedResource } from "./AggregatedResource";
import { AggregatedResourceTimingBreakdown } from "./AggregatedResourceTimingBreakdown";
import { AggregatedWaterfallPerformanceCriteria } from "./AggregatedWaterfallPerformanceCriteria";
import { AggregatedWaterfallRequest } from "./AggregatedWaterfallRequest";
import { AggregatedWaterfallRequestAttributes } from "./AggregatedWaterfallRequestAttributes";
import { AggregatedWaterfallRequestData } from "./AggregatedWaterfallRequestData";
import { AggregatedWaterfallResponse } from "./AggregatedWaterfallResponse";
import { AggregatedWaterfallResponseAttributes } from "./AggregatedWaterfallResponseAttributes";
import { AggregatedWaterfallResponseAttributesCriteria } from "./AggregatedWaterfallResponseAttributesCriteria";
import { AggregatedWaterfallResponseData } from "./AggregatedWaterfallResponseData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LongTaskMetricStats } from "./LongTaskMetricStats";
import { LongTaskStatsPerView } from "./LongTaskStatsPerView";
import { TopLongTaskInvoker } from "./TopLongTaskInvoker";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AggregatedLongTasksRequestType: ["aggregated_long_tasks"],
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
    AggregatedLongTasksByInvokerType: AggregatedLongTasksByInvokerType,
    AggregatedLongTasksRequest: AggregatedLongTasksRequest,
    AggregatedLongTasksRequestAttributes: AggregatedLongTasksRequestAttributes,
    AggregatedLongTasksRequestData: AggregatedLongTasksRequestData,
    AggregatedLongTasksResponse: AggregatedLongTasksResponse,
    AggregatedLongTasksResponseAttributes:
      AggregatedLongTasksResponseAttributes,
    AggregatedLongTasksResponseAttributesCriteria:
      AggregatedLongTasksResponseAttributesCriteria,
    AggregatedLongTasksResponseData: AggregatedLongTasksResponseData,
    AggregatedResource: AggregatedResource,
    AggregatedResourceTimingBreakdown: AggregatedResourceTimingBreakdown,
    AggregatedWaterfallPerformanceCriteria:
      AggregatedWaterfallPerformanceCriteria,
    AggregatedWaterfallRequest: AggregatedWaterfallRequest,
    AggregatedWaterfallRequestAttributes: AggregatedWaterfallRequestAttributes,
    AggregatedWaterfallRequestData: AggregatedWaterfallRequestData,
    AggregatedWaterfallResponse: AggregatedWaterfallResponse,
    AggregatedWaterfallResponseAttributes:
      AggregatedWaterfallResponseAttributes,
    AggregatedWaterfallResponseAttributesCriteria:
      AggregatedWaterfallResponseAttributesCriteria,
    AggregatedWaterfallResponseData: AggregatedWaterfallResponseData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LongTaskMetricStats: LongTaskMetricStats,
    LongTaskStatsPerView: LongTaskStatsPerView,
    TopLongTaskInvoker: TopLongTaskInvoker,
  },
};
