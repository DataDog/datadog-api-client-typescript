import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source of the last update to a hardcoded retention filter.
 */
export type RumHardcodedRetentionFilterMetaSource =
  | typeof DEFAULT
  | typeof UI
  | typeof TERRAFORM
  | UnparsedObject;
export const DEFAULT = "default";
export const UI = "ui";
export const TERRAFORM = "terraform";
