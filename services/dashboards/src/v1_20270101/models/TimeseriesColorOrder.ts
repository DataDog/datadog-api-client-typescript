import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TimeseriesColorOrder =
  | typeof MONOTONIC
  | typeof SHUFFLED
  | UnparsedObject;
export const MONOTONIC = "monotonic";
export const SHUFFLED = "shuffled";
