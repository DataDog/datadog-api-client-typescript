import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CloudWorkloadSecurityAgentRuleAction } from "./CloudWorkloadSecurityAgentRuleAction";
import { CloudWorkloadSecurityAgentRuleAttributes } from "./CloudWorkloadSecurityAgentRuleAttributes";
import { CloudWorkloadSecurityAgentRuleCreateAttributes } from "./CloudWorkloadSecurityAgentRuleCreateAttributes";
import { CloudWorkloadSecurityAgentRuleCreateData } from "./CloudWorkloadSecurityAgentRuleCreateData";
import { CloudWorkloadSecurityAgentRuleCreateRequest } from "./CloudWorkloadSecurityAgentRuleCreateRequest";
import { CloudWorkloadSecurityAgentRuleCreatorAttributes } from "./CloudWorkloadSecurityAgentRuleCreatorAttributes";
import { CloudWorkloadSecurityAgentRuleData } from "./CloudWorkloadSecurityAgentRuleData";
import { CloudWorkloadSecurityAgentRuleKill } from "./CloudWorkloadSecurityAgentRuleKill";
import { CloudWorkloadSecurityAgentRuleResponse } from "./CloudWorkloadSecurityAgentRuleResponse";
import { CloudWorkloadSecurityAgentRuleUpdateAttributes } from "./CloudWorkloadSecurityAgentRuleUpdateAttributes";
import { CloudWorkloadSecurityAgentRuleUpdateData } from "./CloudWorkloadSecurityAgentRuleUpdateData";
import { CloudWorkloadSecurityAgentRuleUpdateRequest } from "./CloudWorkloadSecurityAgentRuleUpdateRequest";
import { CloudWorkloadSecurityAgentRuleUpdaterAttributes } from "./CloudWorkloadSecurityAgentRuleUpdaterAttributes";
import { CloudWorkloadSecurityAgentRulesListResponse } from "./CloudWorkloadSecurityAgentRulesListResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CloudWorkloadSecurityAgentRuleType: ["agent_rule"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CloudWorkloadSecurityAgentRuleAction: CloudWorkloadSecurityAgentRuleAction,
    CloudWorkloadSecurityAgentRuleAttributes:
      CloudWorkloadSecurityAgentRuleAttributes,
    CloudWorkloadSecurityAgentRuleCreateAttributes:
      CloudWorkloadSecurityAgentRuleCreateAttributes,
    CloudWorkloadSecurityAgentRuleCreateData:
      CloudWorkloadSecurityAgentRuleCreateData,
    CloudWorkloadSecurityAgentRuleCreateRequest:
      CloudWorkloadSecurityAgentRuleCreateRequest,
    CloudWorkloadSecurityAgentRuleCreatorAttributes:
      CloudWorkloadSecurityAgentRuleCreatorAttributes,
    CloudWorkloadSecurityAgentRuleData: CloudWorkloadSecurityAgentRuleData,
    CloudWorkloadSecurityAgentRuleKill: CloudWorkloadSecurityAgentRuleKill,
    CloudWorkloadSecurityAgentRuleResponse:
      CloudWorkloadSecurityAgentRuleResponse,
    CloudWorkloadSecurityAgentRuleUpdateAttributes:
      CloudWorkloadSecurityAgentRuleUpdateAttributes,
    CloudWorkloadSecurityAgentRuleUpdateData:
      CloudWorkloadSecurityAgentRuleUpdateData,
    CloudWorkloadSecurityAgentRuleUpdateRequest:
      CloudWorkloadSecurityAgentRuleUpdateRequest,
    CloudWorkloadSecurityAgentRuleUpdaterAttributes:
      CloudWorkloadSecurityAgentRuleUpdaterAttributes,
    CloudWorkloadSecurityAgentRulesListResponse:
      CloudWorkloadSecurityAgentRulesListResponse,
  },
};
