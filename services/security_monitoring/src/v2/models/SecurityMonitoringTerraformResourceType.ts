import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of security monitoring resource to export to Terraform.
 */
export type SecurityMonitoringTerraformResourceType =
  | typeof SUPPRESSIONS
  | typeof CRITICAL_ASSETS
  | typeof SECURITY_FILTERS
  | typeof RULES
  | UnparsedObject;
export const SUPPRESSIONS = "suppressions";
export const CRITICAL_ASSETS = "critical_assets";
export const SECURITY_FILTERS = "security_filters";
export const RULES = "rules";
