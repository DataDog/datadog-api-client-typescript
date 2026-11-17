import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Set the sort type to group.
 */
export type GroupType = typeof GROUP | UnparsedObject;
export const GROUP = "group";
