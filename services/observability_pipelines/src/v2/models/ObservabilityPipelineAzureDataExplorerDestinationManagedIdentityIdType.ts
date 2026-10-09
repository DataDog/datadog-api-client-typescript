import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the user-assigned managed identity ID.
 */
export type ObservabilityPipelineAzureDataExplorerDestinationManagedIdentityIdType =
  typeof CLIENT_ID | typeof OBJECT_ID | typeof RESOURCE_ID | UnparsedObject;
export const CLIENT_ID = "client_id";
export const OBJECT_ID = "object_id";
export const RESOURCE_ID = "resource_id";
