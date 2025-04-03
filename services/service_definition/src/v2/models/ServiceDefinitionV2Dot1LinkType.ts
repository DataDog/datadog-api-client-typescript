import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Link type.
 */
export type ServiceDefinitionV2Dot1LinkType =
  | typeof DOC
  | typeof REPO
  | typeof RUNBOOK
  | typeof DASHBOARD
  | typeof OTHER
  | UnparsedObject;
export const DOC = "doc";
export const REPO = "repo";
export const RUNBOOK = "runbook";
export const DASHBOARD = "dashboard";
export const OTHER = "other";
