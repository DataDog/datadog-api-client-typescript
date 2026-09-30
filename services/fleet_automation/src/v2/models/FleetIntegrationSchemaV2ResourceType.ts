import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the integration schema resource.
 */
export type FleetIntegrationSchemaV2ResourceType =
  | typeof INTEGRATION_SCHEMA
  | UnparsedObject;
export const INTEGRATION_SCHEMA = "integration_schema";
