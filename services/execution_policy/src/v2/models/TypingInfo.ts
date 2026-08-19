import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ExecutionPolicyActionPattern } from "./ExecutionPolicyActionPattern";
import { ExecutionPolicyAttributes } from "./ExecutionPolicyAttributes";
import { ExecutionPolicyCreateRequest } from "./ExecutionPolicyCreateRequest";
import { ExecutionPolicyCreateRequestData } from "./ExecutionPolicyCreateRequestData";
import { ExecutionPolicyKubernetesScope } from "./ExecutionPolicyKubernetesScope";
import { ExecutionPolicyKubernetesScopeRule } from "./ExecutionPolicyKubernetesScopeRule";
import { ExecutionPolicyListResponse } from "./ExecutionPolicyListResponse";
import { ExecutionPolicyListResponseMeta } from "./ExecutionPolicyListResponseMeta";
import { ExecutionPolicyListResponsePage } from "./ExecutionPolicyListResponsePage";
import { ExecutionPolicyRemoteActionRshellScope } from "./ExecutionPolicyRemoteActionRshellScope";
import { ExecutionPolicyRemoteActionRshellScopeRule } from "./ExecutionPolicyRemoteActionRshellScopeRule";
import { ExecutionPolicyResponse } from "./ExecutionPolicyResponse";
import { ExecutionPolicyResponseData } from "./ExecutionPolicyResponseData";
import { ExecutionPolicyScope } from "./ExecutionPolicyScope";
import { ExecutionPolicyScriptScope } from "./ExecutionPolicyScriptScope";
import { ExecutionPolicyScriptScopeRule } from "./ExecutionPolicyScriptScopeRule";
import { ExecutionPolicyTarget } from "./ExecutionPolicyTarget";
import { ExecutionPolicyUpdateRequest } from "./ExecutionPolicyUpdateRequest";
import { ExecutionPolicyUpdateRequestData } from "./ExecutionPolicyUpdateRequestData";
import { ExecutionPolicyWriteAttributes } from "./ExecutionPolicyWriteAttributes";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ExecutionPolicyEffect: ["allow", "deny"],
    ExecutionPolicyIntegration: [
      "INTEGRATION_KUBERNETES",
      "INTEGRATION_SCRIPT",
      "INTEGRATION_REMOTE_ACTION",
    ],
    ExecutionPolicyRemoteActionRshellAccess: ["read_only", "read_write"],
    ExecutionPolicyType: ["execution_policy"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ExecutionPolicyActionPattern: ExecutionPolicyActionPattern,
    ExecutionPolicyAttributes: ExecutionPolicyAttributes,
    ExecutionPolicyCreateRequest: ExecutionPolicyCreateRequest,
    ExecutionPolicyCreateRequestData: ExecutionPolicyCreateRequestData,
    ExecutionPolicyKubernetesScope: ExecutionPolicyKubernetesScope,
    ExecutionPolicyKubernetesScopeRule: ExecutionPolicyKubernetesScopeRule,
    ExecutionPolicyListResponse: ExecutionPolicyListResponse,
    ExecutionPolicyListResponseMeta: ExecutionPolicyListResponseMeta,
    ExecutionPolicyListResponsePage: ExecutionPolicyListResponsePage,
    ExecutionPolicyRemoteActionRshellScope:
      ExecutionPolicyRemoteActionRshellScope,
    ExecutionPolicyRemoteActionRshellScopeRule:
      ExecutionPolicyRemoteActionRshellScopeRule,
    ExecutionPolicyResponse: ExecutionPolicyResponse,
    ExecutionPolicyResponseData: ExecutionPolicyResponseData,
    ExecutionPolicyScope: ExecutionPolicyScope,
    ExecutionPolicyScriptScope: ExecutionPolicyScriptScope,
    ExecutionPolicyScriptScopeRule: ExecutionPolicyScriptScopeRule,
    ExecutionPolicyTarget: ExecutionPolicyTarget,
    ExecutionPolicyUpdateRequest: ExecutionPolicyUpdateRequest,
    ExecutionPolicyUpdateRequestData: ExecutionPolicyUpdateRequestData,
    ExecutionPolicyWriteAttributes: ExecutionPolicyWriteAttributes,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
