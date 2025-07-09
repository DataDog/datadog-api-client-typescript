import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Google Security Operations destination authentication.
 */
export type CustomDestinationResponseGoogleSecurityOperationsDestinationAuthType =
  typeof GCP_PRIVATE_KEY | UnparsedObject;
export const GCP_PRIVATE_KEY = "gcp_private_key";
