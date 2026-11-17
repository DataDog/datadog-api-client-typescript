import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of the impacted resource.
 */
export type ChangeEventAttributesImpactedResourcesItemType =
  | typeof SERVICE
  | UnparsedObject;
export const SERVICE = "service";
