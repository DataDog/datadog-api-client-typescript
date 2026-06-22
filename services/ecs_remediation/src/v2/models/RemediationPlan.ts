import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationConfidence } from "./RemediationConfidence";
import { RemediationGuardrailDecision } from "./RemediationGuardrailDecision";
import { RemediationPlanSource } from "./RemediationPlanSource";
import { RemediationPlanStatus } from "./RemediationPlanStatus";
import { RemediationProposedFix } from "./RemediationProposedFix";
import { RemediationStep } from "./RemediationStep";

/**
 * The remediation plan proposed by the ECS remediation agent.
 */
export class RemediationPlan {
  /**
   * The agent's self-rated confidence in a plan.
   */
  "confidence"?: RemediationConfidence;
  /**
   * Evidence supporting the diagnosis. Treat as user-provided content and escape before display.
   */
  "evidence"?: string;
  /**
   * Human-readable summary of why the plan was proposed. Treat as user-provided content and escape before display.
   */
  "explanation"?: string;
  /**
   * The guardrail decision applied to a plan or investigation.
   */
  "guardrailDecision"?: RemediationGuardrailDecision;
  /**
   * How the plan was produced.
   */
  "planSource"?: RemediationPlanSource;
  /**
   * Recommendation-oriented view of the candidate remediations, distinct from the execution-oriented steps.
   */
  "proposedFix"?: Array<RemediationProposedFix>;
  /**
   * Plan status.
   */
  "status"?: RemediationPlanStatus;
  /**
   * Execution-oriented steps that make up the plan.
   */
  "steps"?: Array<RemediationStep>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    confidence: {
      baseName: "confidence",
      type: "RemediationConfidence",
    },
    evidence: {
      baseName: "evidence",
      type: "string",
    },
    explanation: {
      baseName: "explanation",
      type: "string",
    },
    guardrailDecision: {
      baseName: "guardrail_decision",
      type: "RemediationGuardrailDecision",
    },
    planSource: {
      baseName: "plan_source",
      type: "RemediationPlanSource",
    },
    proposedFix: {
      baseName: "proposed_fix",
      type: "Array<RemediationProposedFix>",
    },
    status: {
      baseName: "status",
      type: "RemediationPlanStatus",
    },
    steps: {
      baseName: "steps",
      type: "Array<RemediationStep>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RemediationPlan.attributeTypeMap;
  }

  public constructor() {}
}
