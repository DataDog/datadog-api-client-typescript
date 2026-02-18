import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `ConnectionGroupType` object.
 */
export type ConnectionGroupType = typeof CONNECTION_GROUP | UnparsedObject;
export const CONNECTION_GROUP = "connection_group";
