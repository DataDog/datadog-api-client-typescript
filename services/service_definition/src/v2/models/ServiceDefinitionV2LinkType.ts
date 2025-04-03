import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Link type.
 */
export type ServiceDefinitionV2LinkType =
  | typeof DOC
  | typeof WIKI
  | typeof RUNBOOK
  | typeof URL
  | typeof REPO
  | typeof DASHBOARD
  | typeof ONCALL
  | typeof CODE
  | typeof LINK
  | UnparsedObject;
export const DOC = "doc";
export const WIKI = "wiki";
export const RUNBOOK = "runbook";
export const URL = "url";
export const REPO = "repo";
export const DASHBOARD = "dashboard";
export const ONCALL = "oncall";
export const CODE = "code";
export const LINK = "link";
