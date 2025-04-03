import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action query type.
 */
export type ActionQueryType = typeof ACTION | UnparsedObject;
export const ACTION = "action";
