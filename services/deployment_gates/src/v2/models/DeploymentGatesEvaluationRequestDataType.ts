import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for a deployment gate evaluation request.
 */
export type DeploymentGatesEvaluationRequestDataType =
  | typeof DEPLOYMENT_GATES_EVALUATION_REQUEST
  | UnparsedObject;
export const DEPLOYMENT_GATES_EVALUATION_REQUEST =
  "deployment_gates_evaluation_request";
