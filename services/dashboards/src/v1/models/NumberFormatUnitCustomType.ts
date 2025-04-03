import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of custom unit.
 */
export type NumberFormatUnitCustomType =
  | typeof CUSTOM_UNIT_LABEL
  | UnparsedObject;
export const CUSTOM_UNIT_LABEL = "custom_unit_label";
