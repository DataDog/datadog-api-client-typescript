import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Global variable type.
 */
export type GlobalVariableType = typeof GLOBAL_VARIABLES | UnparsedObject;
export const GLOBAL_VARIABLES = "global_variables";
