import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DeploymentGatesEvaluationResultResponseAttributesGateStatus } from "./DeploymentGatesEvaluationResultResponseAttributesGateStatus";
import { DeploymentGatesRuleResponse } from "./DeploymentGatesRuleResponse";

/**
 * Attributes for a deployment gate evaluation result response.
 */
export class DeploymentGatesEvaluationResultResponseAttributes {
  /**
   * Whether the gate was evaluated in dry-run mode.
   */
  "dryRun": boolean;
  /**
   * The unique identifier of the gate evaluation.
   */
  "evaluationId": string;
  /**
   * A URL to view the evaluation details in the Datadog UI.
   */
  "evaluationUrl": string;
  /**
   * The unique identifier of the deployment gate.
   */
  "gateId": string;
  /**
   * The overall status of the gate evaluation.
   * - `in_progress`: The evaluation is still running.
   * - `pass`: All rules passed successfully and the deployment is allowed to proceed.
   * - `fail`: One or more rules did not pass; the deployment should not proceed.
   */
  "gateStatus": DeploymentGatesEvaluationResultResponseAttributesGateStatus;
  /**
   * The results of individual rule evaluations.
   */
  "rules": Array<DeploymentGatesRuleResponse>;
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
    dryRun: {
      baseName: "dry_run",
      type: "boolean",
      required: true,
    },
    evaluationId: {
      baseName: "evaluation_id",
      type: "string",
      required: true,
    },
    evaluationUrl: {
      baseName: "evaluation_url",
      type: "string",
      required: true,
    },
    gateId: {
      baseName: "gate_id",
      type: "string",
      required: true,
      format: "uuid",
    },
    gateStatus: {
      baseName: "gate_status",
      type: "DeploymentGatesEvaluationResultResponseAttributesGateStatus",
      required: true,
    },
    rules: {
      baseName: "rules",
      type: "Array<DeploymentGatesRuleResponse>",
      required: true,
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
    return DeploymentGatesEvaluationResultResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
