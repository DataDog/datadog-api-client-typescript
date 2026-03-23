import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API type for delete service settings request.
 * The value must always be `test_optimization_delete_service_settings_request`.
 */
export type TestOptimizationDeleteServiceSettingsRequestDataType =
  | typeof TEST_OPTIMIZATION_DELETE_SERVICE_SETTINGS_REQUEST
  | UnparsedObject;
export const TEST_OPTIMIZATION_DELETE_SERVICE_SETTINGS_REQUEST =
  "test_optimization_delete_service_settings_request";
