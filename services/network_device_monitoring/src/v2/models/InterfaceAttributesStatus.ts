import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The interface status
 */
export type InterfaceAttributesStatus =
  | typeof UP
  | typeof DOWN
  | typeof WARNING
  | typeof OFF
  | UnparsedObject;
export const UP = "up";
export const DOWN = "down";
export const WARNING = "warning";
export const OFF = "off";
