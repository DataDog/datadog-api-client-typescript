import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type.
 */
export type AllocationDataType = typeof ALLOCATIONS | UnparsedObject;
export const ALLOCATIONS = "allocations";
