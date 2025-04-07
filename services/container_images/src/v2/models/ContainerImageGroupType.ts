import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of Container Image Group.
 */
export type ContainerImageGroupType =
  | typeof CONTAINER_IMAGE_GROUP
  | UnparsedObject;
export const CONTAINER_IMAGE_GROUP = "container_image_group";
