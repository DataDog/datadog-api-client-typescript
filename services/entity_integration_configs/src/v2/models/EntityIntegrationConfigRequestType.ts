import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for the entity integration configuration create or update request. Always `entity_integration_config_requests`.
 */
export type EntityIntegrationConfigRequestType =
  | typeof ENTITY_INTEGRATION_CONFIG_REQUESTS
  | UnparsedObject;
export const ENTITY_INTEGRATION_CONFIG_REQUESTS =
  "entity_integration_config_requests";
