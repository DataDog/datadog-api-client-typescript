import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The category of the link.
 */
export type AlertEventCustomAttributesLinksItemsCategory =
  | typeof RUNBOOK
  | typeof DOCUMENTATION
  | typeof DASHBOARD
  | UnparsedObject;
export const RUNBOOK = "runbook";
export const DOCUMENTATION = "documentation";
export const DASHBOARD = "dashboard";
