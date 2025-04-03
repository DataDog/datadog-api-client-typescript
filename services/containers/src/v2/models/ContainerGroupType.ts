import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of container group.
 */
export type ContainerGroupType = typeof CONTAINER_GROUP | UnparsedObject;
export const CONTAINER_GROUP = "container_group";
