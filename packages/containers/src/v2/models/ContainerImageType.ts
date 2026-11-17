import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of Container Image.
 */
export type ContainerImageType = typeof CONTAINER_IMAGE | UnparsedObject;
export const CONTAINER_IMAGE = "container_image";
