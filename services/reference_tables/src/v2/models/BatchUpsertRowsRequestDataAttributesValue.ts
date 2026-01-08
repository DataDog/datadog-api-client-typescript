import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Types allowed for Reference Table row values.
 */
export type BatchUpsertRowsRequestDataAttributesValue =
  | string
  | number
  | UnparsedObject;
