import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Org connection type.
 */
export type OrgConnectionType = typeof ORG_CONNECTION | UnparsedObject;
export const ORG_CONNECTION = "org_connection";
