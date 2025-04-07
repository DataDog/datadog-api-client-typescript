import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of Entity V3 Queue Kind object.
 */
export type EntityV3QueueKind = typeof QUEUE | UnparsedObject;
export const QUEUE = "queue";
