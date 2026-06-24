import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { GovernanceControlAttributes } from "./GovernanceControlAttributes";
import { GovernanceControlData } from "./GovernanceControlData";
import { GovernanceControlMitigationDefinition } from "./GovernanceControlMitigationDefinition";
import { GovernanceControlParameterDefinition } from "./GovernanceControlParameterDefinition";
import { GovernanceControlResponse } from "./GovernanceControlResponse";
import { GovernanceControlSupportedValue } from "./GovernanceControlSupportedValue";
import { GovernanceControlUpdateAttributes } from "./GovernanceControlUpdateAttributes";
import { GovernanceControlUpdateData } from "./GovernanceControlUpdateData";
import { GovernanceControlUpdateRequest } from "./GovernanceControlUpdateRequest";
import { GovernanceControlsResponse } from "./GovernanceControlsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    GovernanceControlResourceType: ["governance_control"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    GovernanceControlAttributes: GovernanceControlAttributes,
    GovernanceControlData: GovernanceControlData,
    GovernanceControlMitigationDefinition:
      GovernanceControlMitigationDefinition,
    GovernanceControlParameterDefinition: GovernanceControlParameterDefinition,
    GovernanceControlResponse: GovernanceControlResponse,
    GovernanceControlSupportedValue: GovernanceControlSupportedValue,
    GovernanceControlUpdateAttributes: GovernanceControlUpdateAttributes,
    GovernanceControlUpdateData: GovernanceControlUpdateData,
    GovernanceControlUpdateRequest: GovernanceControlUpdateRequest,
    GovernanceControlsResponse: GovernanceControlsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
