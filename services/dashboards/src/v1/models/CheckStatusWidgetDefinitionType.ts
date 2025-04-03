import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the check status widget.
 */
export type CheckStatusWidgetDefinitionType =
  | typeof CHECK_STATUS
  | UnparsedObject;
export const CHECK_STATUS = "check_status";
