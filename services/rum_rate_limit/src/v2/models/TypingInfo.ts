import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RumRateLimitAdaptiveConfig } from "./RumRateLimitAdaptiveConfig";
import { RumRateLimitConfigAttributes } from "./RumRateLimitConfigAttributes";
import { RumRateLimitConfigData } from "./RumRateLimitConfigData";
import { RumRateLimitConfigResponse } from "./RumRateLimitConfigResponse";
import { RumRateLimitConfigUpdateAttributes } from "./RumRateLimitConfigUpdateAttributes";
import { RumRateLimitConfigUpdateData } from "./RumRateLimitConfigUpdateData";
import { RumRateLimitConfigUpdateRequest } from "./RumRateLimitConfigUpdateRequest";
import { RumRateLimitCustomConfig } from "./RumRateLimitCustomConfig";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumRateLimitConfigType: ["rum_rate_limit_config"],
    RumRateLimitMode: ["custom", "adaptive"],
    RumRateLimitQuotaReachedAction: ["stop", "slowdown"],
    RumRateLimitScopeType: ["application"],
    RumRateLimitWindowType: ["daily"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RumRateLimitAdaptiveConfig: RumRateLimitAdaptiveConfig,
    RumRateLimitConfigAttributes: RumRateLimitConfigAttributes,
    RumRateLimitConfigData: RumRateLimitConfigData,
    RumRateLimitConfigResponse: RumRateLimitConfigResponse,
    RumRateLimitConfigUpdateAttributes: RumRateLimitConfigUpdateAttributes,
    RumRateLimitConfigUpdateData: RumRateLimitConfigUpdateData,
    RumRateLimitConfigUpdateRequest: RumRateLimitConfigUpdateRequest,
    RumRateLimitCustomConfig: RumRateLimitCustomConfig,
  },
};
