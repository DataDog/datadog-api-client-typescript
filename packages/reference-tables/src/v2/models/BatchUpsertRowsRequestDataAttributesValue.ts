import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Types allowed for Reference Table row values.
 */
export type BatchUpsertRowsRequestDataAttributesValue =
  | string
  | number
  | UnparsedObject;
