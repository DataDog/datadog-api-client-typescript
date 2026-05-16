import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source of the last update to a permanent retention filter.
 */
export type RumPermanentRetentionFilterMetaSource =
  | typeof DEFAULT
  | typeof UI
  | typeof TERRAFORM
  | UnparsedObject;
export const DEFAULT = "default";
export const UI = "ui";
export const TERRAFORM = "terraform";
