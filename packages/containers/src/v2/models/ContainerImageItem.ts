import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { ContainerImage } from "./ContainerImage";
import { ContainerImageGroup } from "./ContainerImageGroup";

/**
 * Possible Container Image models.
 */
export type ContainerImageItem =
  | ContainerImage
  | ContainerImageGroup
  | UnparsedObject;
