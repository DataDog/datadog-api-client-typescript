import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of the `GCPServiceAccount` object.
 */
export type GCPServiceAccountCredentialType =
  | typeof GCPSERVICEACCOUNT
  | UnparsedObject;
export const GCPSERVICEACCOUNT = "GCPServiceAccount";
