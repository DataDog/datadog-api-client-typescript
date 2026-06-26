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
import { GovernanceMitigationRequest } from "./GovernanceMitigationRequest";
import { GovernanceMitigationRequestAttributes } from "./GovernanceMitigationRequestAttributes";
import { GovernanceMitigationRequestData } from "./GovernanceMitigationRequestData";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ControlNotificationSettingsResourceType: ["control_notification_settings"],
    ControlNotificationTargetType: ["email", "slack", "at_mention", "case"],
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
    GovernanceMitigationRequest: GovernanceMitigationRequest,
    GovernanceMitigationRequestAttributes:
      GovernanceMitigationRequestAttributes,
    GovernanceMitigationRequestData: GovernanceMitigationRequestData,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
