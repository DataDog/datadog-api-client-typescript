import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for a JSON Patch request on a Synthetic test suite, `suites_json_patch`.
 */
export type SuiteJsonPatchType = typeof SUITES_JSON_PATCH | UnparsedObject;
export const SUITES_JSON_PATCH = "suites_json_patch";
