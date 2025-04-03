import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `TokenType` object.
 */
export type TokenType = typeof SECRET | UnparsedObject;
export const SECRET = "SECRET";
