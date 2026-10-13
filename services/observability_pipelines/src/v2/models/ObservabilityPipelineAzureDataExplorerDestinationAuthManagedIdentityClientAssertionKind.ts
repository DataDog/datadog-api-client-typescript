import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Azure credential kind. The value should always be `managed_identity_client_assertion`.
 */
export type ObservabilityPipelineAzureDataExplorerDestinationAuthManagedIdentityClientAssertionKind =
  typeof MANAGED_IDENTITY_CLIENT_ASSERTION | UnparsedObject;
export const MANAGED_IDENTITY_CLIENT_ASSERTION =
  "managed_identity_client_assertion";
