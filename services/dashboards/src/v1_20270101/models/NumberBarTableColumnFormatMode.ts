import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type NumberBarTableColumnFormatMode =
  | typeof NUMBER
  | typeof BAR
  | UnparsedObject;
export const NUMBER = "number";
export const BAR = "bar";
