import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type EventsDataExtractionExtractionType =
  | typeof GROKEXTRACTION
  | typeof REGEXEXTRACTION
  | UnparsedObject;
export const GROKEXTRACTION = "grokExtraction";
export const REGEXEXTRACTION = "regexExtraction";
