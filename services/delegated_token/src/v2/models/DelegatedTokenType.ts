import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for a delegated token.
 */
export type DelegatedTokenType = typeof TOKEN | UnparsedObject;
export const TOKEN = "token";
