import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource used when creating an On-Call Page.
 */
export type CreatePageRequestDataType = typeof PAGES | UnparsedObject;
export const PAGES = "pages";
