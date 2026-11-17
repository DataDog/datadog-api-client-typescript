import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of `HTTPTokenAuthType` object.
 */
export type HTTPTokenAuthType = typeof HTTPTOKENAUTH | UnparsedObject;
export const HTTPTOKENAUTH = "HTTPTokenAuth";
