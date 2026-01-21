import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for the Synthetics suites responses, `suites`.
 */
export type SyntheticsSuiteTypes = typeof SUITES | UnparsedObject;
export const SUITES = "suites";
