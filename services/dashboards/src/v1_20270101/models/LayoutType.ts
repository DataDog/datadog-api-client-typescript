import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type LayoutType = typeof ORDERED | typeof FREE | UnparsedObject;
export const ORDERED = "ordered";
export const FREE = "free";
