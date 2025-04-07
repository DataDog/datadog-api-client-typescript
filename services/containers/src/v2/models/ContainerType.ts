import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of container.
 */
export type ContainerType = typeof CONTAINER | UnparsedObject;
export const CONTAINER = "container";
