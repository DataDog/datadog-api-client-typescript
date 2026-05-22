import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `integration_config`.
 */
export type SecurityMonitoringIntegrationConfigResourceType =
  | typeof INTEGRATION_CONFIG
  | UnparsedObject;
export const INTEGRATION_CONFIG = "integration_config";
