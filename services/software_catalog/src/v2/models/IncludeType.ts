import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Supported include types.
 */
export type IncludeType =
  | typeof SCHEMA
  | typeof RAW_SCHEMA
  | typeof ONCALL
  | typeof INCIDENT
  | typeof RELATION
  | UnparsedObject;
export const SCHEMA = "schema";
export const RAW_SCHEMA = "raw_schema";
export const ONCALL = "oncall";
export const INCIDENT = "incident";
export const RELATION = "relation";
