import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The flag property being changed.
 */
export type FlagSuggestionProperty =
  | typeof FLAG
  | typeof FLAG_NAME
  | typeof FLAG_DESCRIPTION
  | typeof JSON_SCHEMA
  | typeof DISTRIBUTION_CHANNEL
  | typeof VARIANT
  | typeof VARIANT_NAME
  | typeof VARIANT_VALUE
  | typeof ALLOCATIONS
  | typeof ROLLOUT
  | typeof ENVIRONMENT_STATUS
  | typeof DEFAULT_VARIANT
  | typeof OVERRIDE_VARIANT
  | UnparsedObject;
export const FLAG = "FLAG";
export const FLAG_NAME = "FLAG_NAME";
export const FLAG_DESCRIPTION = "FLAG_DESCRIPTION";
export const JSON_SCHEMA = "JSON_SCHEMA";
export const DISTRIBUTION_CHANNEL = "DISTRIBUTION_CHANNEL";
export const VARIANT = "VARIANT";
export const VARIANT_NAME = "VARIANT_NAME";
export const VARIANT_VALUE = "VARIANT_VALUE";
export const ALLOCATIONS = "ALLOCATIONS";
export const ROLLOUT = "ROLLOUT";
export const ENVIRONMENT_STATUS = "ENVIRONMENT_STATUS";
export const DEFAULT_VARIANT = "DEFAULT_VARIANT";
export const OVERRIDE_VARIANT = "OVERRIDE_VARIANT";
