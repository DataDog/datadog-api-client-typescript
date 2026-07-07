import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for org authorized clients.
 */
export type OrgAuthorizedClientType =
  | typeof ORG_AUTHORIZED_CLIENTS
  | UnparsedObject;
export const ORG_AUTHORIZED_CLIENTS = "org_authorized_clients";
