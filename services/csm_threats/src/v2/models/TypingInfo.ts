import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CloudWorkloadSecurityAgentPoliciesListResponse } from "./CloudWorkloadSecurityAgentPoliciesListResponse";
import { CloudWorkloadSecurityAgentPolicyAttributes } from "./CloudWorkloadSecurityAgentPolicyAttributes";
import { CloudWorkloadSecurityAgentPolicyCreateAttributes } from "./CloudWorkloadSecurityAgentPolicyCreateAttributes";
import { CloudWorkloadSecurityAgentPolicyCreateData } from "./CloudWorkloadSecurityAgentPolicyCreateData";
import { CloudWorkloadSecurityAgentPolicyCreateRequest } from "./CloudWorkloadSecurityAgentPolicyCreateRequest";
import { CloudWorkloadSecurityAgentPolicyData } from "./CloudWorkloadSecurityAgentPolicyData";
import { CloudWorkloadSecurityAgentPolicyResponse } from "./CloudWorkloadSecurityAgentPolicyResponse";
import { CloudWorkloadSecurityAgentPolicyUpdateAttributes } from "./CloudWorkloadSecurityAgentPolicyUpdateAttributes";
import { CloudWorkloadSecurityAgentPolicyUpdateData } from "./CloudWorkloadSecurityAgentPolicyUpdateData";
import { CloudWorkloadSecurityAgentPolicyUpdateRequest } from "./CloudWorkloadSecurityAgentPolicyUpdateRequest";
import { CloudWorkloadSecurityAgentPolicyUpdaterAttributes } from "./CloudWorkloadSecurityAgentPolicyUpdaterAttributes";
import { CloudWorkloadSecurityAgentPolicyVersion } from "./CloudWorkloadSecurityAgentPolicyVersion";
import { CloudWorkloadSecurityAgentRuleAction } from "./CloudWorkloadSecurityAgentRuleAction";
import { CloudWorkloadSecurityAgentRuleActionHash } from "./CloudWorkloadSecurityAgentRuleActionHash";
import { CloudWorkloadSecurityAgentRuleActionMetadata } from "./CloudWorkloadSecurityAgentRuleActionMetadata";
import { CloudWorkloadSecurityAgentRuleActionSet } from "./CloudWorkloadSecurityAgentRuleActionSet";
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
    CloudWorkloadSecurityAgentPolicyType: ["policy"],
    CloudWorkloadSecurityAgentRuleType: ["agent_rule"],
  },
  oneOfMap: {
    CloudWorkloadSecurityAgentRuleActionSetValue: [
      "string",
      "number",
      "boolean",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CloudWorkloadSecurityAgentPoliciesListResponse:
      CloudWorkloadSecurityAgentPoliciesListResponse,
    CloudWorkloadSecurityAgentPolicyAttributes:
      CloudWorkloadSecurityAgentPolicyAttributes,
    CloudWorkloadSecurityAgentPolicyCreateAttributes:
      CloudWorkloadSecurityAgentPolicyCreateAttributes,
    CloudWorkloadSecurityAgentPolicyCreateData:
      CloudWorkloadSecurityAgentPolicyCreateData,
    CloudWorkloadSecurityAgentPolicyCreateRequest:
      CloudWorkloadSecurityAgentPolicyCreateRequest,
    CloudWorkloadSecurityAgentPolicyData: CloudWorkloadSecurityAgentPolicyData,
    CloudWorkloadSecurityAgentPolicyResponse:
      CloudWorkloadSecurityAgentPolicyResponse,
    CloudWorkloadSecurityAgentPolicyUpdateAttributes:
      CloudWorkloadSecurityAgentPolicyUpdateAttributes,
    CloudWorkloadSecurityAgentPolicyUpdateData:
      CloudWorkloadSecurityAgentPolicyUpdateData,
    CloudWorkloadSecurityAgentPolicyUpdateRequest:
      CloudWorkloadSecurityAgentPolicyUpdateRequest,
    CloudWorkloadSecurityAgentPolicyUpdaterAttributes:
      CloudWorkloadSecurityAgentPolicyUpdaterAttributes,
    CloudWorkloadSecurityAgentPolicyVersion:
      CloudWorkloadSecurityAgentPolicyVersion,
    CloudWorkloadSecurityAgentRuleAction: CloudWorkloadSecurityAgentRuleAction,
    CloudWorkloadSecurityAgentRuleActionHash:
      CloudWorkloadSecurityAgentRuleActionHash,
    CloudWorkloadSecurityAgentRuleActionMetadata:
      CloudWorkloadSecurityAgentRuleActionMetadata,
    CloudWorkloadSecurityAgentRuleActionSet:
      CloudWorkloadSecurityAgentRuleActionSet,
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
