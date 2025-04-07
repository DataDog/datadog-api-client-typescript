import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Encoding type. Can be given either `json` or `form`.
 */
export type WebhooksIntegrationEncoding =
  | typeof JSON
  | typeof FORM
  | UnparsedObject;
export const JSON = "json";
export const FORM = "form";
