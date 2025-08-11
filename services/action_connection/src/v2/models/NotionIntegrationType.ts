import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of the `NotionIntegrationType` object.
 */
export type NotionIntegrationType = typeof NOTION | UnparsedObject;
export const NOTION = "Notion";
