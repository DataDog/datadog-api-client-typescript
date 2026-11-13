import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for a Bits Deployment Analysis rule.
 */
export type DeploymentGatesBitsDeploymentAnalysisRuleType =
  | typeof BITS_DEPLOYMENT_ANALYSIS
  | UnparsedObject;
export const BITS_DEPLOYMENT_ANALYSIS = "bits_deployment_analysis";
