import { UnparsedObject } from "@datadog/datadog-api-client";

import { Container } from "./Container";
import { ContainerGroup } from "./ContainerGroup";

/**
 * Possible Container models.
 */
export type ContainerItem = Container | ContainerGroup | UnparsedObject;
