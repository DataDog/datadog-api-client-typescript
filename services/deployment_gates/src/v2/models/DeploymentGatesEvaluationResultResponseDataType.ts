import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for a deployment gate evaluation result response.
 */
export type DeploymentGatesEvaluationResultResponseDataType =
  | typeof DEPLOYMENT_GATES_EVALUATION_RESULT_RESPONSE
  | UnparsedObject;
export const DEPLOYMENT_GATES_EVALUATION_RESULT_RESPONSE =
  "deployment_gates_evaluation_result_response";
