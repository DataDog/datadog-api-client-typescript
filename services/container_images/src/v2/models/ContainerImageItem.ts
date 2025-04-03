import { UnparsedObject } from "@datadog/datadog-api-client";

import { ContainerImage } from "./ContainerImage";
import { ContainerImageGroup } from "./ContainerImageGroup";

/**
 * Possible Container Image models.
 */
export type ContainerImageItem =
  | ContainerImage
  | ContainerImageGroup
  | UnparsedObject;
