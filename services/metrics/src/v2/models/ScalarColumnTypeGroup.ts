import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of column present for groups.
 */
export type ScalarColumnTypeGroup = typeof GROUP | UnparsedObject;
export const GROUP = "group";
