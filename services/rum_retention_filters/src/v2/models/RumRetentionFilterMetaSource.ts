import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source of the last change to a RUM retention filter.
 */
export type RumRetentionFilterMetaSource =
  | typeof DEFAULT
  | typeof UI
  | typeof TERRAFORM
  | typeof UNKNOWN
  | UnparsedObject;
export const DEFAULT = "default";
export const UI = "ui";
export const TERRAFORM = "terraform";
export const UNKNOWN = "unknown";
