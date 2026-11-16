import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of deployment gate rule.
 */
export type DeploymentGateRuleEvaluationType =
  | typeof MONITOR
  | typeof FAULTY_DEPLOYMENT_DETECTION
  | typeof BITS_DEPLOYMENT_ANALYSIS
  | UnparsedObject;
export const MONITOR = "monitor";
export const FAULTY_DEPLOYMENT_DETECTION = "faulty_deployment_detection";
export const BITS_DEPLOYMENT_ANALYSIS = "bits_deployment_analysis";
