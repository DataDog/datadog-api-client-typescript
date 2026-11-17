import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The definition of the `GCPServiceAccount` object.
 */
export type GCPServiceAccountCredentialType =
  | typeof GCPSERVICEACCOUNT
  | UnparsedObject;
export const GCPSERVICEACCOUNT = "GCPServiceAccount";
