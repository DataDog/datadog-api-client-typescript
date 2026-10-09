import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for a deployment gate evaluation.
 */
export type DeploymentGateEvaluationDataType =
  | typeof DEPLOYMENT_GATE_EVALUATION
  | UnparsedObject;
export const DEPLOYMENT_GATE_EVALUATION = "deployment_gate_evaluation";
