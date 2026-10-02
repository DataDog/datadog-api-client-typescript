import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { AIImpactUserActivityAttributes } from "./AIImpactUserActivityAttributes";
import { AIImpactUserActivityData } from "./AIImpactUserActivityData";
import { AIImpactUserActivityRequest } from "./AIImpactUserActivityRequest";
import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AIImpactUserActivityType: ["ai_impact_user_activity"],
  },
  oneOfMap: {},
  typeMap: {
    AIImpactUserActivityAttributes: AIImpactUserActivityAttributes,
    AIImpactUserActivityData: AIImpactUserActivityData,
    AIImpactUserActivityRequest: AIImpactUserActivityRequest,
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
