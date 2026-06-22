import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RemediationRiskLevel } from "./RemediationRiskLevel";
import { RemediationStepApprovalState } from "./RemediationStepApprovalState";

/**
 * A single execution-oriented step in a remediation plan.
 */
export class RemediationStep {
  /**
   * Fully qualified action type, for example ecs.update_service_memory.
   */
  "actionFqn"?: string;
  /**
   * Approval state for a remediation step.
   */
  "approvalState"?: RemediationStepApprovalState;
  /**
   * Human-readable description of the step.
   */
  "description"?: string;
  /**
   * Whether the step can be reversed after execution.
   */
  "reversible"?: boolean;
  /**
   * Estimated risk of a remediation step or proposed fix.
   */
  "risk"?: RemediationRiskLevel;
  /**
   * Unique ID for the step within the plan.
   */
  "stepId"?: string;
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
    actionFqn: {
      baseName: "action_fqn",
      type: "string",
    },
    approvalState: {
      baseName: "approval_state",
      type: "RemediationStepApprovalState",
    },
    description: {
      baseName: "description",
      type: "string",
    },
    reversible: {
      baseName: "reversible",
      type: "boolean",
    },
    risk: {
      baseName: "risk",
      type: "RemediationRiskLevel",
    },
    stepId: {
      baseName: "step_id",
      type: "string",
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
    return RemediationStep.attributeTypeMap;
  }

  public constructor() {}
}
