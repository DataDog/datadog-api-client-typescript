import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be scalar_request.
 */
export type ScalarFormulaRequestType = typeof SCALAR_REQUEST | UnparsedObject;
export const SCALAR_REQUEST = "scalar_request";
