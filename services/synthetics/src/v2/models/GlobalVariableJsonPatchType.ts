import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Global variable JSON Patch type.
 */
export type GlobalVariableJsonPatchType =
  | typeof GLOBAL_VARIABLES_JSON_PATCH
  | UnparsedObject;
export const GLOBAL_VARIABLES_JSON_PATCH = "global_variables_json_patch";
