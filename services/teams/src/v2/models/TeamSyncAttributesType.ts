import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of synchronization operation. Only "link" is supported, which links existing teams by matching names.
 */
export type TeamSyncAttributesType = typeof LINK | UnparsedObject;
export const LINK = "link";
