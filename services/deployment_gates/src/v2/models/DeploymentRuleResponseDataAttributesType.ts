import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the deployment rule.
 */
export type DeploymentRuleResponseDataAttributesType =
  | typeof FAULTY_DEPLOYMENT_DETECTION
  | typeof MONITOR
  | typeof BITS_DEPLOYMENT_ANALYSIS
  | UnparsedObject;
export const FAULTY_DEPLOYMENT_DETECTION = "faulty_deployment_detection";
export const MONITOR = "monitor";
export const BITS_DEPLOYMENT_ANALYSIS = "bits_deployment_analysis";
