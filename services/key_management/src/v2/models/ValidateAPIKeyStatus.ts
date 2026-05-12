import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status of the validation. Always `ok` when both the API key and the application key are valid.
 */
export type ValidateAPIKeyStatus = typeof OK | UnparsedObject;
export const OK = "ok";
