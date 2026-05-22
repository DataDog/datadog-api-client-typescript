import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for an entity integration configuration. Always `entity_integration_configs`.
 */
export type EntityIntegrationConfigType =
  | typeof ENTITY_INTEGRATION_CONFIGS
  | UnparsedObject;
export const ENTITY_INTEGRATION_CONFIGS = "entity_integration_configs";
