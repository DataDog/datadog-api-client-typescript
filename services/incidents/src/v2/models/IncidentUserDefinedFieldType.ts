import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The incident user defined fields type.
 */
export type IncidentUserDefinedFieldType =
  | typeof USER_DEFINED_FIELD
  | UnparsedObject;
export const USER_DEFINED_FIELD = "user_defined_field";
