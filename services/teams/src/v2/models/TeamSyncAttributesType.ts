import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of synchronization operation. "link" connects teams by matching names. "provision" creates new teams when no match is found.
 */
export type TeamSyncAttributesType =
  | typeof LINK
  | typeof PROVISION
  | UnparsedObject;
export const LINK = "link";
export const PROVISION = "provision";
