import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of Container Image pagination.
 */
export type ContainerImageMetaPageType = typeof CURSOR_LIMIT | UnparsedObject;
export const CURSOR_LIMIT = "cursor_limit";
