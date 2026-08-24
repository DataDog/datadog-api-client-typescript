import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RumRetentionQuotaConfigAttributes } from "./RumRetentionQuotaConfigAttributes";
import { RumRetentionQuotaConfigData } from "./RumRetentionQuotaConfigData";
import { RumRetentionQuotaConfigResponse } from "./RumRetentionQuotaConfigResponse";
import { RumRetentionQuotaConfigUpdateAttributes } from "./RumRetentionQuotaConfigUpdateAttributes";
import { RumRetentionQuotaConfigUpdateData } from "./RumRetentionQuotaConfigUpdateData";
import { RumRetentionQuotaConfigUpdateRequest } from "./RumRetentionQuotaConfigUpdateRequest";
import { RumRetentionQuotaCustomConfig } from "./RumRetentionQuotaCustomConfig";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RumRetentionQuotaConfigType: ["rum_quota_config"],
    RumRetentionQuotaMode: ["custom"],
    RumRetentionQuotaReachedAction: ["stop", "slowdown"],
    RumRetentionQuotaScopeType: ["application"],
    RumRetentionQuotaWindowType: ["daily"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RumRetentionQuotaConfigAttributes: RumRetentionQuotaConfigAttributes,
    RumRetentionQuotaConfigData: RumRetentionQuotaConfigData,
    RumRetentionQuotaConfigResponse: RumRetentionQuotaConfigResponse,
    RumRetentionQuotaConfigUpdateAttributes:
      RumRetentionQuotaConfigUpdateAttributes,
    RumRetentionQuotaConfigUpdateData: RumRetentionQuotaConfigUpdateData,
    RumRetentionQuotaConfigUpdateRequest: RumRetentionQuotaConfigUpdateRequest,
    RumRetentionQuotaCustomConfig: RumRetentionQuotaCustomConfig,
  },
};
