import { UnparsedObject } from "@datadog/datadog-api-client";

import { LogsSchemaCategoryMapper } from "./LogsSchemaCategoryMapper";
import { LogsSchemaRemapper } from "./LogsSchemaRemapper";

/**
 * Configuration of the schema processor mapper to use.
 */
export type LogsSchemaMapper =
  | LogsSchemaRemapper
  | LogsSchemaCategoryMapper
  | UnparsedObject;
