import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type 'emails'.
 */
export type EmailType = typeof EMAILS | UnparsedObject;
export const EMAILS = "emails";
