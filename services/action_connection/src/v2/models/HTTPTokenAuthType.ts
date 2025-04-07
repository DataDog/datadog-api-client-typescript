import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `HTTPTokenAuthType` object.
 */
export type HTTPTokenAuthType = typeof HTTPTOKENAUTH | UnparsedObject;
export const HTTPTOKENAUTH = "HTTPTokenAuth";
