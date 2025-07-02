import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The `AWSIntegrationIamPermissionsResponseData` `type`.
 */
export type AWSIntegrationIamPermissionsResponseDataType =
  | typeof PERMISSIONS
  | UnparsedObject;
export const PERMISSIONS = "permissions";
