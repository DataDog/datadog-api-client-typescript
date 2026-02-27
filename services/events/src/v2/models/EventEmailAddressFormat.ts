import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The format of events ingested through the email address.
 */
export type EventEmailAddressFormat =
  | typeof JSON
  | typeof PLAIN_TEXT
  | UnparsedObject;
export const JSON = "json";
export const PLAIN_TEXT = "plain-text";
