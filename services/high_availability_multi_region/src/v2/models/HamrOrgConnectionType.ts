import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the HAMR organization connection resource.
 */
export type HamrOrgConnectionType =
  | typeof HAMR_ORG_CONNECTIONS
  | UnparsedObject;
export const HAMR_ORG_CONNECTIONS = "hamr_org_connections";
