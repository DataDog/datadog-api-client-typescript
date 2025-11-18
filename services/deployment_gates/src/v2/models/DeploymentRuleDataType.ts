import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Deployment rule resource type.
 */
export type DeploymentRuleDataType = typeof DEPLOYMENT_RULE | UnparsedObject;
export const DEPLOYMENT_RULE = "deployment_rule";
