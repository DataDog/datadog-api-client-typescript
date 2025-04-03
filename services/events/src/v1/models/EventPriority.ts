import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The priority of the event. For example, `normal` or `low`.
 */
export type EventPriority = typeof NORMAL | typeof LOW | UnparsedObject;
export const NORMAL = "normal";
export const LOW = "low";
