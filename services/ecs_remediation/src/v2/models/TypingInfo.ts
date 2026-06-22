import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RemediationCodeSession } from "./RemediationCodeSession";
import { RemediationEcsMetadata } from "./RemediationEcsMetadata";
import { RemediationExecuteRequest } from "./RemediationExecuteRequest";
import { RemediationExecuteResponse } from "./RemediationExecuteResponse";
import { RemediationGetInvestigationResponse } from "./RemediationGetInvestigationResponse";
import { RemediationGuardrailDecision } from "./RemediationGuardrailDecision";
import { RemediationHistoryEvent } from "./RemediationHistoryEvent";
import { RemediationInvestigation } from "./RemediationInvestigation";
import { RemediationListInvestigationsResponse } from "./RemediationListInvestigationsResponse";
import { RemediationPlan } from "./RemediationPlan";
import { RemediationProblemContainer } from "./RemediationProblemContainer";
import { RemediationProblemTask } from "./RemediationProblemTask";
import { RemediationProposedFix } from "./RemediationProposedFix";
import { RemediationStep } from "./RemediationStep";
import { RemediationWorkloadSummary } from "./RemediationWorkloadSummary";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    RemediationConfidence: ["low", "medium", "high"],
    RemediationDeploymentRolloutState: ["IN_PROGRESS", "COMPLETED", "FAILED"],
    RemediationGuardrailVerdict: ["allowed", "approval_required", "denied"],
    RemediationInvestigationStatus: [
      "open",
      "approval_required",
      "executing",
      "succeeded",
      "failed",
    ],
    RemediationLaunchType: ["EC2", "FARGATE"],
    RemediationPlanSource: ["deterministic", "ai"],
    RemediationPlanStatus: ["pending", "in_progress", "completed", "failed"],
    RemediationPullRequestStatus: ["open", "closed", "merged"],
    RemediationRiskLevel: ["low", "medium", "high"],
    RemediationStepApprovalState: ["pending_approval", "approved", "rejected"],
    RemediationWorkloadType: [
      "WORKLOAD_TYPE_UNSPECIFIED",
      "SERVICE",
      "STANDALONE_TASK",
      "DAEMON",
    ],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RemediationCodeSession: RemediationCodeSession,
    RemediationEcsMetadata: RemediationEcsMetadata,
    RemediationExecuteRequest: RemediationExecuteRequest,
    RemediationExecuteResponse: RemediationExecuteResponse,
    RemediationGetInvestigationResponse: RemediationGetInvestigationResponse,
    RemediationGuardrailDecision: RemediationGuardrailDecision,
    RemediationHistoryEvent: RemediationHistoryEvent,
    RemediationInvestigation: RemediationInvestigation,
    RemediationListInvestigationsResponse:
      RemediationListInvestigationsResponse,
    RemediationPlan: RemediationPlan,
    RemediationProblemContainer: RemediationProblemContainer,
    RemediationProblemTask: RemediationProblemTask,
    RemediationProposedFix: RemediationProposedFix,
    RemediationStep: RemediationStep,
    RemediationWorkloadSummary: RemediationWorkloadSummary,
  },
};
