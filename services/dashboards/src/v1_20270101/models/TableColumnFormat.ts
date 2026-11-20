import { UnparsedObject } from "@datadog/datadog-api-client";

import { NumberBarTableColumnFormatBar } from "./NumberBarTableColumnFormatBar";
import { NumberBarTableColumnFormatNumber } from "./NumberBarTableColumnFormatNumber";
import { StringTableColumnFormat } from "./StringTableColumnFormat";
import { TrendTableColumnFormat } from "./TrendTableColumnFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TableColumnFormat =
  | NumberBarTableColumnFormatNumber
  | NumberBarTableColumnFormatBar
  | TrendTableColumnFormat
  | StringTableColumnFormat
  | UnparsedObject;
