import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls the default data visibility for the product type. `standard` makes data visible
 * to all users with appropriate product access. `default_hide` hides data by default and
 * requires explicit grants for each dataset.
 */
export type DatasetRestrictionRestrictionMode =
  | typeof STANDARD
  | typeof DEFAULT_HIDE
  | UnparsedObject;
export const STANDARD = "standard";
export const DEFAULT_HIDE = "default_hide";
