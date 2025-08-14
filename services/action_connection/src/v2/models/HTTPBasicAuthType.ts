import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of the `HTTPBasicAuth` object.
 */
export type HTTPBasicAuthType = typeof HTTPBASICAUTH | UnparsedObject;
export const HTTPBASICAUTH = "HTTPBasicAuth";
