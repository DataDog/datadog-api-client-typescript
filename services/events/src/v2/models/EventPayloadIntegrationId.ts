import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Integration ID sourced from integration manifests.
 */
export type EventPayloadIntegrationId = typeof CUSTOM_EVENTS | UnparsedObject;
export const CUSTOM_EVENTS = "custom-events";
