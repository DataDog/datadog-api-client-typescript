import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The category of the link.
 */
export type AlertEventAttributesLinksItemCategory =
  | typeof RUNBOOK
  | typeof DOCUMENTATION
  | typeof DASHBOARD
  | UnparsedObject;
export const RUNBOOK = "runbook";
export const DOCUMENTATION = "documentation";
export const DASHBOARD = "dashboard";
