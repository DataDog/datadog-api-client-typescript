import { UnparsedObject } from "@datadog/datadog-api-client";

import { EntityV3APISpecInterfaceDefinition } from "./EntityV3APISpecInterfaceDefinition";
import { EntityV3APISpecInterfaceFileRef } from "./EntityV3APISpecInterfaceFileRef";

/**
 * The API definition.
 */
export type EntityV3APISpecInterface =
  | EntityV3APISpecInterfaceFileRef
  | EntityV3APISpecInterfaceDefinition
  | UnparsedObject;
