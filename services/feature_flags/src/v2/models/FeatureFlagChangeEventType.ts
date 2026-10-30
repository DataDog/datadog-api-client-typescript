import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type.
 */
export type FeatureFlagChangeEventType = typeof CHANGE_EVENTS | UnparsedObject;
export const CHANGE_EVENTS = "change-events";
