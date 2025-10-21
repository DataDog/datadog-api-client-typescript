import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Amazon EventBridge resource type.
 */
export type AWSEventBridgeType = typeof EVENT_BRIDGE | UnparsedObject;
export const EVENT_BRIDGE = "event_bridge";
