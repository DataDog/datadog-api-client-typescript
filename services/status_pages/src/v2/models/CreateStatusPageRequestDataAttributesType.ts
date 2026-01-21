import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the status page controlling how the status page is accessed.
 */
export type CreateStatusPageRequestDataAttributesType =
  | typeof PUBLIC
  | typeof INTERNAL
  | UnparsedObject;
export const PUBLIC = "public";
export const INTERNAL = "internal";
