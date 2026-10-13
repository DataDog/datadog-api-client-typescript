import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Azure credential kind. The value should always be `managed_identity`.
 */
export type ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityKind =
  typeof MANAGED_IDENTITY | UnparsedObject;
export const MANAGED_IDENTITY = "managed_identity";
