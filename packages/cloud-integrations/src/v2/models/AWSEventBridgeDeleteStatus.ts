import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The event source status "empty".
 */
export type AWSEventBridgeDeleteStatus = typeof EMPTY | UnparsedObject;
export const EMPTY = "empty";
