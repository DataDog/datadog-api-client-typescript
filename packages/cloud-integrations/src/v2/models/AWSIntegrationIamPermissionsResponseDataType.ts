import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The `AWSIntegrationIamPermissionsResponseData` `type`.
 */
export type AWSIntegrationIamPermissionsResponseDataType =
  | typeof PERMISSIONS
  | UnparsedObject;
export const PERMISSIONS = "permissions";
