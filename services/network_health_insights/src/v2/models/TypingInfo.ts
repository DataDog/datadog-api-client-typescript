import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { NetworkHealthInsight } from "./NetworkHealthInsight";
import { NetworkHealthInsightAttributes } from "./NetworkHealthInsightAttributes";
import { NetworkHealthInsightTrafficVolume } from "./NetworkHealthInsightTrafficVolume";
import { NetworkHealthInsightsResponse } from "./NetworkHealthInsightsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    NetworkHealthInsightCategory: ["dns", "tcp", "tls-cert", "security-group"],
    NetworkHealthInsightFailureType: [
      "timeout",
      "nxdomain",
      "servfail",
      "general_failure",
      "expired",
      "expiring_soon",
      "denied",
    ],
    NetworkHealthInsightsType: ["network-health-insights"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    NetworkHealthInsight: NetworkHealthInsight,
    NetworkHealthInsightAttributes: NetworkHealthInsightAttributes,
    NetworkHealthInsightTrafficVolume: NetworkHealthInsightTrafficVolume,
    NetworkHealthInsightsResponse: NetworkHealthInsightsResponse,
  },
};
