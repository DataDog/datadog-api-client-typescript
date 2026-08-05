import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Governance console config resource type.
 */
export type GovernanceConsoleConfigResourceType =
  | typeof GOVERNANCE_CONSOLE_CONFIG
  | UnparsedObject;
export const GOVERNANCE_CONSOLE_CONFIG = "governance_console_config";
