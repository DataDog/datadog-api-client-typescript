import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for a deployment gate evaluation response.
 */
export type DeploymentGatesEvaluationResponseDataType =
  | typeof DEPLOYMENT_GATES_EVALUATION_RESPONSE
  | UnparsedObject;
export const DEPLOYMENT_GATES_EVALUATION_RESPONSE =
  "deployment_gates_evaluation_response";
