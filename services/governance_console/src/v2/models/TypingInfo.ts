import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ControlNotificationEventSetting } from "./ControlNotificationEventSetting";
import { ControlNotificationSettingsAttributes } from "./ControlNotificationSettingsAttributes";
import { ControlNotificationSettingsData } from "./ControlNotificationSettingsData";
import { ControlNotificationSettingsResponse } from "./ControlNotificationSettingsResponse";
import { ControlNotificationSettingsUpdateAttributes } from "./ControlNotificationSettingsUpdateAttributes";
import { ControlNotificationSettingsUpdateData } from "./ControlNotificationSettingsUpdateData";
import { ControlNotificationSettingsUpdateRequest } from "./ControlNotificationSettingsUpdateRequest";
import { ControlNotificationTarget } from "./ControlNotificationTarget";
import { GovernanceConfigAttributes } from "./GovernanceConfigAttributes";
import { GovernanceConfigData } from "./GovernanceConfigData";
import { GovernanceConfigResponse } from "./GovernanceConfigResponse";
import { GovernanceControlAttributes } from "./GovernanceControlAttributes";
import { GovernanceControlData } from "./GovernanceControlData";
import { GovernanceControlDetectionAttributes } from "./GovernanceControlDetectionAttributes";
import { GovernanceControlDetectionData } from "./GovernanceControlDetectionData";
import { GovernanceControlDetectionResponse } from "./GovernanceControlDetectionResponse";
import { GovernanceControlDetectionUpdateAttributes } from "./GovernanceControlDetectionUpdateAttributes";
import { GovernanceControlDetectionUpdateData } from "./GovernanceControlDetectionUpdateData";
import { GovernanceControlDetectionUpdateRequest } from "./GovernanceControlDetectionUpdateRequest";
import { GovernanceControlDetectionsResponse } from "./GovernanceControlDetectionsResponse";
import { GovernanceControlMitigationDefinition } from "./GovernanceControlMitigationDefinition";
import { GovernanceControlParameterDefinition } from "./GovernanceControlParameterDefinition";
import { GovernanceControlResponse } from "./GovernanceControlResponse";
import { GovernanceControlSupportedValue } from "./GovernanceControlSupportedValue";
import { GovernanceControlUpdateAttributes } from "./GovernanceControlUpdateAttributes";
import { GovernanceControlUpdateData } from "./GovernanceControlUpdateData";
import { GovernanceControlUpdateRequest } from "./GovernanceControlUpdateRequest";
import { GovernanceControlsResponse } from "./GovernanceControlsResponse";
import { GovernanceInsightAttributes } from "./GovernanceInsightAttributes";
import { GovernanceInsightAuditCompute } from "./GovernanceInsightAuditCompute";
import { GovernanceInsightAuditQuery } from "./GovernanceInsightAuditQuery";
import { GovernanceInsightData } from "./GovernanceInsightData";
import { GovernanceInsightEventCompute } from "./GovernanceInsightEventCompute";
import { GovernanceInsightEventQuery } from "./GovernanceInsightEventQuery";
import { GovernanceInsightMetricQuery } from "./GovernanceInsightMetricQuery";
import { GovernanceInsightPercentageQuery } from "./GovernanceInsightPercentageQuery";
import { GovernanceInsightQueryConfig } from "./GovernanceInsightQueryConfig";
import { GovernanceInsightUsageQuery } from "./GovernanceInsightUsageQuery";
import { GovernanceInsightsResponse } from "./GovernanceInsightsResponse";
import { GovernanceMitigationRequest } from "./GovernanceMitigationRequest";
import { GovernanceMitigationRequestAttributes } from "./GovernanceMitigationRequestAttributes";
import { GovernanceMitigationRequestData } from "./GovernanceMitigationRequestData";
import { GovernanceNotificationSettingsAttributes } from "./GovernanceNotificationSettingsAttributes";
import { GovernanceNotificationSettingsData } from "./GovernanceNotificationSettingsData";
import { GovernanceNotificationSettingsResponse } from "./GovernanceNotificationSettingsResponse";
import { GovernanceNotificationSettingsUpdateAttributes } from "./GovernanceNotificationSettingsUpdateAttributes";
import { GovernanceNotificationSettingsUpdateData } from "./GovernanceNotificationSettingsUpdateData";
import { GovernanceNotificationSettingsUpdateRequest } from "./GovernanceNotificationSettingsUpdateRequest";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ControlNotificationSettingsResourceType: ["control_notification_settings"],
    ControlNotificationTargetType: ["email", "slack", "at_mention", "case"],
    GovernanceConsoleConfigResourceType: ["governance_console_config"],
    GovernanceControlDetectionAssignmentSource: [
      "auto_resolved",
      "manual",
      "reassigned",
      "cleared",
    ],
    GovernanceControlDetectionResourceType: ["governance_control_detection"],
    GovernanceControlDetectionState: [
      "active",
      "exception",
      "mitigated",
      "inactive",
      "obsolete",
      "resolved_externally",
      "mitigation_in_progress",
    ],
    GovernanceControlDetectionUpdateState: ["exception", "active"],
    GovernanceControlResourceType: ["governance_control"],
    GovernanceInsightDirectionality: [
      "neutral",
      "increase_better",
      "decrease_better",
    ],
    GovernanceInsightResourceType: ["insight"],
    GovernanceNotificationSettingsResourceType: [
      "governance_notification_settings",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ControlNotificationEventSetting: ControlNotificationEventSetting,
    ControlNotificationSettingsAttributes:
      ControlNotificationSettingsAttributes,
    ControlNotificationSettingsData: ControlNotificationSettingsData,
    ControlNotificationSettingsResponse: ControlNotificationSettingsResponse,
    ControlNotificationSettingsUpdateAttributes:
      ControlNotificationSettingsUpdateAttributes,
    ControlNotificationSettingsUpdateData:
      ControlNotificationSettingsUpdateData,
    ControlNotificationSettingsUpdateRequest:
      ControlNotificationSettingsUpdateRequest,
    ControlNotificationTarget: ControlNotificationTarget,
    GovernanceConfigAttributes: GovernanceConfigAttributes,
    GovernanceConfigData: GovernanceConfigData,
    GovernanceConfigResponse: GovernanceConfigResponse,
    GovernanceControlAttributes: GovernanceControlAttributes,
    GovernanceControlData: GovernanceControlData,
    GovernanceControlDetectionAttributes: GovernanceControlDetectionAttributes,
    GovernanceControlDetectionData: GovernanceControlDetectionData,
    GovernanceControlDetectionResponse: GovernanceControlDetectionResponse,
    GovernanceControlDetectionUpdateAttributes:
      GovernanceControlDetectionUpdateAttributes,
    GovernanceControlDetectionUpdateData: GovernanceControlDetectionUpdateData,
    GovernanceControlDetectionUpdateRequest:
      GovernanceControlDetectionUpdateRequest,
    GovernanceControlDetectionsResponse: GovernanceControlDetectionsResponse,
    GovernanceControlMitigationDefinition:
      GovernanceControlMitigationDefinition,
    GovernanceControlParameterDefinition: GovernanceControlParameterDefinition,
    GovernanceControlResponse: GovernanceControlResponse,
    GovernanceControlSupportedValue: GovernanceControlSupportedValue,
    GovernanceControlUpdateAttributes: GovernanceControlUpdateAttributes,
    GovernanceControlUpdateData: GovernanceControlUpdateData,
    GovernanceControlUpdateRequest: GovernanceControlUpdateRequest,
    GovernanceControlsResponse: GovernanceControlsResponse,
    GovernanceInsightAttributes: GovernanceInsightAttributes,
    GovernanceInsightAuditCompute: GovernanceInsightAuditCompute,
    GovernanceInsightAuditQuery: GovernanceInsightAuditQuery,
    GovernanceInsightData: GovernanceInsightData,
    GovernanceInsightEventCompute: GovernanceInsightEventCompute,
    GovernanceInsightEventQuery: GovernanceInsightEventQuery,
    GovernanceInsightMetricQuery: GovernanceInsightMetricQuery,
    GovernanceInsightPercentageQuery: GovernanceInsightPercentageQuery,
    GovernanceInsightQueryConfig: GovernanceInsightQueryConfig,
    GovernanceInsightUsageQuery: GovernanceInsightUsageQuery,
    GovernanceInsightsResponse: GovernanceInsightsResponse,
    GovernanceMitigationRequest: GovernanceMitigationRequest,
    GovernanceMitigationRequestAttributes:
      GovernanceMitigationRequestAttributes,
    GovernanceMitigationRequestData: GovernanceMitigationRequestData,
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
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
