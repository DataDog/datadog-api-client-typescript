import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of Container pagination.
 */
export type ContainerMetaPageType = typeof CURSOR_LIMIT | UnparsedObject;
export const CURSOR_LIMIT = "cursor_limit";
