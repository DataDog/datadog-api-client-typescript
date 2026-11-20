import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type OrderByOptions =
  | typeof CHANGE
  | typeof NAME
  | typeof PRESENT
  | typeof PAST
  | UnparsedObject;
export const CHANGE = "change";
export const NAME = "name";
export const PRESENT = "present";
export const PAST = "past";
