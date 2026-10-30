import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Column of strings.
 */
export type TopologyMapInlineColumnKindString = typeof STRING | UnparsedObject;
export const STRING = "string";
