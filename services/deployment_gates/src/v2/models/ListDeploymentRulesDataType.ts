import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * List deployment rule resource type.
 */
export type ListDeploymentRulesDataType =
  | typeof LIST_DEPLOYMENT_RULES
  | UnparsedObject;
export const LIST_DEPLOYMENT_RULES = "list_deployment_rules";
