import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for a deployment gate rule evaluation.
 */
export type DeploymentGateRuleEvaluationDataType =
  | typeof DEPLOYMENT_GATE_RULE_EVALUATION
  | UnparsedObject;
export const DEPLOYMENT_GATE_RULE_EVALUATION =
  "deployment_gate_rule_evaluation";
