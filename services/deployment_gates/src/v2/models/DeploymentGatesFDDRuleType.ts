import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for a faulty deployment detection rule.
 */
export type DeploymentGatesFDDRuleType =
  | typeof FAULTY_DEPLOYMENT_DETECTION
  | UnparsedObject;
export const FAULTY_DEPLOYMENT_DETECTION = "faulty_deployment_detection";
