import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the archive order definition.
 */
export type LogsArchiveOrderDefinitionType =
  | typeof ARCHIVE_ORDER
  | UnparsedObject;
export const ARCHIVE_ORDER = "archive_order";
