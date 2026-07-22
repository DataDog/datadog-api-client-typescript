import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `entra_id_azure_app_registrations`.
 */
export type SecurityMonitoringEntraIdAzureAppRegistrationsResourceType =
  | typeof ENTRA_ID_AZURE_APP_REGISTRATIONS
  | UnparsedObject;
export const ENTRA_ID_AZURE_APP_REGISTRATIONS = "entra_id_azure_app_registrations";
