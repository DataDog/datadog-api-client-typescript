import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The recorded result of a gate or rule evaluation.
 * - `in_progress`: The evaluation is still running.
 * - `pass`: All rules passed successfully.
 * - `fail`: One or more rules did not pass.
 */
export type DeploymentGatesEvaluationResultResponseAttributesGateStatus =
  | typeof IN_PROGRESS
  | typeof PASS
  | typeof FAIL
  | UnparsedObject;
export const IN_PROGRESS = "in_progress";
export const PASS = "pass";
export const FAIL = "fail";
