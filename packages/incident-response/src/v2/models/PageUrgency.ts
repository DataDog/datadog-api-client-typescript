import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * On-Call Page urgency level.
 */
export type PageUrgency = typeof LOW | typeof HIGH | UnparsedObject;
export const LOW = "low";
export const HIGH = "high";
