import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type.
 */
export type AllocationDataType = typeof ALLOCATIONS | UnparsedObject;
export const ALLOCATIONS = "allocations";
