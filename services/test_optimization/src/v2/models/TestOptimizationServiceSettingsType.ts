import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for service settings response.
 * The value must always be `test_optimization_service_settings`.
 */
export type TestOptimizationServiceSettingsType =
  | typeof TEST_OPTIMIZATION_SERVICE_SETTINGS
  | UnparsedObject;
export const TEST_OPTIMIZATION_SERVICE_SETTINGS =
  "test_optimization_service_settings";
