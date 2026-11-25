import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type CalendarShiftUnit =
  | typeof D
  | typeof W
  | typeof MO
  | UnparsedObject;
export const D = "d";
export const W = "w";
export const MO = "mo";
