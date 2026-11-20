import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type PowerpackState = typeof ACTIVE | typeof ARCHIVED | UnparsedObject;
export const ACTIVE = "active";
export const ARCHIVED = "archived";
