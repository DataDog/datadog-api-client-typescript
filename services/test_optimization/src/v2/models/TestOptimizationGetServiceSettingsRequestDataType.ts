import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for get service settings request.
 * The value must always be `test_optimization_get_service_settings_request`.
 */
export type TestOptimizationGetServiceSettingsRequestDataType =
  | typeof TEST_OPTIMIZATION_GET_SERVICE_SETTINGS_REQUEST
  | UnparsedObject;
export const TEST_OPTIMIZATION_GET_SERVICE_SETTINGS_REQUEST =
  "test_optimization_get_service_settings_request";
