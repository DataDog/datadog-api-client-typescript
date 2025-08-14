import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of the `HTTPTokenAuth` object.
 */
export type HTTPTokenAuthType = typeof HTTPTOKENAUTH | UnparsedObject;
export const HTTPTOKENAUTH = "HTTPTokenAuth";
