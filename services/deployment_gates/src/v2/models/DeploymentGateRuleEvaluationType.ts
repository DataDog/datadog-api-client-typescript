import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of deployment gate rule.
 */
export type DeploymentGateRuleEvaluationType =
  | typeof MONITOR
  | typeof FAULTY_DEPLOYMENT_DETECTION
  | UnparsedObject;
export const MONITOR = "monitor";
export const FAULTY_DEPLOYMENT_DETECTION = "faulty_deployment_detection";
