import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The version of the CycloneDX specification a BOM conforms to.
 */
export type SpecVersion =
  | typeof ONE_ZERO
  | typeof ONE_ONE
  | typeof ONE_TWO
  | typeof ONE_THREE
  | typeof ONE_FOUR
  | typeof ONE_FIVE
  | UnparsedObject;
export const ONE_ZERO = "1.0";
export const ONE_ONE = "1.1";
export const ONE_TWO = "1.2";
export const ONE_THREE = "1.3";
export const ONE_FOUR = "1.4";
export const ONE_FIVE = "1.5";
