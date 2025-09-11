import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Can be set to `uuid` to automatically generate primary keys when new items are added. Default value is `none`, which requires you to supply a primary key for each new item.
 */
export type DatastorePrimaryKeyGenerationStrategy =
  | typeof NONE
  | typeof UUID
  | UnparsedObject;
export const NONE = "none";
export const UUID = "uuid";
