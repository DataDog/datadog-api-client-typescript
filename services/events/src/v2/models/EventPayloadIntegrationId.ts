import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Integration IDs sourced from integration manifests. Only `custom-events` is supported.
 */
export type EventPayloadIntegrationId = typeof CUSTOM_EVENTS | UnparsedObject;
export const CUSTOM_EVENTS = "custom-events";
