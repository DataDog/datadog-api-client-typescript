import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the status page controlling how the status page is accessed. Public pages are accessible to anyone, internal pages are accessible to authenticated users in the Datadog organization, and private pages are accessible only to users matching an allow email access policy and no deny email access policy.
 */
export type CreateStatusPageRequestDataAttributesType =
  | typeof PUBLIC
  | typeof INTERNAL
  | typeof PRIVATE
  | UnparsedObject;
export const PUBLIC = "public";
export const INTERNAL = "internal";
export const PRIVATE = "private";
