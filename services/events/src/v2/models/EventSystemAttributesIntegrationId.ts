import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Integration ID sourced from integration manifests.
 */
export type EventSystemAttributesIntegrationId =
  | typeof CUSTOM_EVENTS
  | UnparsedObject;
export const CUSTOM_EVENTS = "custom-events";
