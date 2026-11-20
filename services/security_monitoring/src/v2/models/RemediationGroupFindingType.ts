import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Value of the findings' `@finding_type` attribute that a grouping definition covers.
 */
export type RemediationGroupFindingType =
  | typeof LIBRARY_VULNERABILITY
  | typeof HOST_AND_CONTAINER_VULNERABILITY
  | UnparsedObject;
export const LIBRARY_VULNERABILITY = "library_vulnerability";
export const HOST_AND_CONTAINER_VULNERABILITY =
  "host_and_container_vulnerability";
