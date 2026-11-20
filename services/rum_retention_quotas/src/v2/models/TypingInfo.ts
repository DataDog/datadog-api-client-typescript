import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { RUMRetentionQuotaConfigAttributes } from "./RUMRetentionQuotaConfigAttributes";
import { RUMRetentionQuotaConfigData } from "./RUMRetentionQuotaConfigData";
import { RUMRetentionQuotaConfigResponse } from "./RUMRetentionQuotaConfigResponse";
import { RUMRetentionQuotaConfigUpdateAttributes } from "./RUMRetentionQuotaConfigUpdateAttributes";
import { RUMRetentionQuotaConfigUpdateData } from "./RUMRetentionQuotaConfigUpdateData";
import { RUMRetentionQuotaConfigUpdateRequest } from "./RUMRetentionQuotaConfigUpdateRequest";
import { RUMRetentionQuotaCustomConfig } from "./RUMRetentionQuotaCustomConfig";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RUMRetentionQuotaConfigType: ["rum_quota_config"],
    RUMRetentionQuotaMode: ["custom"],
    RUMRetentionQuotaReachedAction: ["stop", "slowdown"],
    RUMRetentionQuotaScopeType: ["application"],
    RUMRetentionQuotaWindowType: ["daily"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    RUMRetentionQuotaConfigAttributes: RUMRetentionQuotaConfigAttributes,
    RUMRetentionQuotaConfigData: RUMRetentionQuotaConfigData,
    RUMRetentionQuotaConfigResponse: RUMRetentionQuotaConfigResponse,
    RUMRetentionQuotaConfigUpdateAttributes:
      RUMRetentionQuotaConfigUpdateAttributes,
    RUMRetentionQuotaConfigUpdateData: RUMRetentionQuotaConfigUpdateData,
    RUMRetentionQuotaConfigUpdateRequest: RUMRetentionQuotaConfigUpdateRequest,
    RUMRetentionQuotaCustomConfig: RUMRetentionQuotaCustomConfig,
  },
};
