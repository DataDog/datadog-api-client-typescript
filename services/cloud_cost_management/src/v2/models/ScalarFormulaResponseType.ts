import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be scalar_response.
 */
export type ScalarFormulaResponseType = typeof SCALAR_RESPONSE | UnparsedObject;
export const SCALAR_RESPONSE = "scalar_response";
