import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * API Keys resource type.
 */
export type APIKeysType = typeof API_KEYS | UnparsedObject;
export const API_KEYS = "api_keys";
