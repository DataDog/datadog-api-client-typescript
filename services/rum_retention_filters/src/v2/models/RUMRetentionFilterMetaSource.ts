import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source of the last update to the retention filter. The value is `unknown` if the request doesn't specify a source.
 */
export type RUMRetentionFilterMetaSource =
  | typeof DEFAULT
  | typeof UI
  | typeof TERRAFORM
  | typeof UNKNOWN
  | UnparsedObject;
export const DEFAULT = "default";
export const UI = "ui";
export const TERRAFORM = "terraform";
export const UNKNOWN = "unknown";
