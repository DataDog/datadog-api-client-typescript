import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the deployment rule.
 */
export type DeploymentRuleResponseDataAttributesType =
  | typeof FAULTY_DEPLOYMENT_DETECTION
  | typeof MONITOR
  | UnparsedObject;
export const FAULTY_DEPLOYMENT_DETECTION = "faulty_deployment_detection";
export const MONITOR = "monitor";
