import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GovernanceConfigAttributes } from "./GovernanceConfigAttributes";
import { GovernanceConfigData } from "./GovernanceConfigData";
import { GovernanceConfigResponse } from "./GovernanceConfigResponse";
import { GovernanceLimitAttributes } from "./GovernanceLimitAttributes";
import { GovernanceLimitData } from "./GovernanceLimitData";
import { GovernanceLimitQuery } from "./GovernanceLimitQuery";
import { GovernanceLimitQueryConfig } from "./GovernanceLimitQueryConfig";
import { GovernanceLimitsResponse } from "./GovernanceLimitsResponse";
import { GovernanceNotificationSettingsAttributes } from "./GovernanceNotificationSettingsAttributes";
import { GovernanceNotificationSettingsData } from "./GovernanceNotificationSettingsData";
import { GovernanceNotificationSettingsResponse } from "./GovernanceNotificationSettingsResponse";
import { GovernanceNotificationSettingsUpdateAttributes } from "./GovernanceNotificationSettingsUpdateAttributes";
import { GovernanceNotificationSettingsUpdateData } from "./GovernanceNotificationSettingsUpdateData";
import { GovernanceNotificationSettingsUpdateRequest } from "./GovernanceNotificationSettingsUpdateRequest";
import { GovernanceResourceLimitAttributes } from "./GovernanceResourceLimitAttributes";
import { GovernanceResourceLimitData } from "./GovernanceResourceLimitData";
import { GovernanceResourceLimitsResponse } from "./GovernanceResourceLimitsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GovernanceConsoleConfigResourceType: ["governance_console_config"],
    GovernanceLimitResourceType: ["limit"],
    GovernanceNotificationSettingsResourceType: [
      "governance_notification_settings",
    ],
    GovernanceResourceLimitResourceType: ["resource-limit"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GovernanceConfigAttributes: GovernanceConfigAttributes,
    GovernanceConfigData: GovernanceConfigData,
    GovernanceConfigResponse: GovernanceConfigResponse,
    GovernanceLimitAttributes: GovernanceLimitAttributes,
    GovernanceLimitData: GovernanceLimitData,
    GovernanceLimitQuery: GovernanceLimitQuery,
    GovernanceLimitQueryConfig: GovernanceLimitQueryConfig,
    GovernanceLimitsResponse: GovernanceLimitsResponse,
    GovernanceNotificationSettingsAttributes:
      GovernanceNotificationSettingsAttributes,
    GovernanceNotificationSettingsData: GovernanceNotificationSettingsData,
    GovernanceNotificationSettingsResponse:
      GovernanceNotificationSettingsResponse,
    GovernanceNotificationSettingsUpdateAttributes:
      GovernanceNotificationSettingsUpdateAttributes,
    GovernanceNotificationSettingsUpdateData:
      GovernanceNotificationSettingsUpdateData,
    GovernanceNotificationSettingsUpdateRequest:
      GovernanceNotificationSettingsUpdateRequest,
    GovernanceResourceLimitAttributes: GovernanceResourceLimitAttributes,
    GovernanceResourceLimitData: GovernanceResourceLimitData,
    GovernanceResourceLimitsResponse: GovernanceResourceLimitsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
