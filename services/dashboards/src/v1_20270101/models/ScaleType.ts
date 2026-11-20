import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ScaleType =
  | typeof LINEAR
  | typeof LOG
  | typeof POW
  | typeof SQRT
  | UnparsedObject;
export const LINEAR = "linear";
export const LOG = "log";
export const POW = "pow";
export const SQRT = "sqrt";
