import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the component.
 */
export type CreateComponentRequestDataAttributesType =
  | typeof COMPONENT
  | typeof GROUP
  | UnparsedObject;
export const COMPONENT = "component";
export const GROUP = "group";
