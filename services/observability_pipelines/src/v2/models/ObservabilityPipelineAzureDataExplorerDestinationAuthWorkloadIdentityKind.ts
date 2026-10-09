import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The Azure credential kind. The value should always be `workload_identity`.
 */
export type ObservabilityPipelineAzureDataExplorerDestinationAuthWorkloadIdentityKind =
  typeof WORKLOAD_IDENTITY | UnparsedObject;
export const WORKLOAD_IDENTITY = "workload_identity";
