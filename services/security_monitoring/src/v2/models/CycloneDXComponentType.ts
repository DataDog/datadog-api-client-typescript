import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the scanned component.
 */
export type CycloneDXComponentType =
  | typeof LIBRARY
  | typeof APPLICATION
  | typeof OPERATING_SYSTEM
  | UnparsedObject;
export const LIBRARY = "library";
export const APPLICATION = "application";
export const OPERATING_SYSTEM = "operating-system";
