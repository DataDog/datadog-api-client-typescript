import { UnparsedObject } from "@datadog/datadog-api-client";

import { QueryTableDatePattern } from "./QueryTableDatePattern";
import { QueryTableTimestampFormat } from "./QueryTableTimestampFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type QueryTableDateFormat =
  | QueryTableDatePattern
  | QueryTableTimestampFormat
  | UnparsedObject;
