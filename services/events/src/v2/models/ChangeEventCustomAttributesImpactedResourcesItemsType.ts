import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource's type.
 */
export type ChangeEventCustomAttributesImpactedResourcesItemsType =
  | typeof SERVICE
  | UnparsedObject;
export const SERVICE = "service";
