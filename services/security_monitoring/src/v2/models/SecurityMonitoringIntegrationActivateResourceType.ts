import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `activate_entra_id_request`.
 */
export type SecurityMonitoringIntegrationActivateResourceType =
  | typeof ACTIVATE_ENTRA_ID_REQUEST
  | UnparsedObject;
export const ACTIVATE_ENTRA_ID_REQUEST = "activate_entra_id_request";
