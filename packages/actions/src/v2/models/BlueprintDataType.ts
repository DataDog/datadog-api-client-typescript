import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for a blueprint.
 */
export type BlueprintDataType = typeof BLUEPRINT | UnparsedObject;
export const BLUEPRINT = "blueprint";
