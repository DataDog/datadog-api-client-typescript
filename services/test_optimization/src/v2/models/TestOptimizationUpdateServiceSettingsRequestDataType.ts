import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for update service settings request.
 * The value must always be `test_optimization_update_service_settings_request`.
 */
export type TestOptimizationUpdateServiceSettingsRequestDataType =
  | typeof TEST_OPTIMIZATION_UPDATE_SERVICE_SETTINGS_REQUEST
  | UnparsedObject;
export const TEST_OPTIMIZATION_UPDATE_SERVICE_SETTINGS_REQUEST =
  "test_optimization_update_service_settings_request";
