import { UnparsedObject } from "@datadog/datadog-api-client";

import { LogsArrayMapArithmeticSubProcessor } from "./LogsArrayMapArithmeticSubProcessor";
import { LogsArrayMapAttributeRemapper } from "./LogsArrayMapAttributeRemapper";
import { LogsArrayMapCategorySubProcessor } from "./LogsArrayMapCategorySubProcessor";
import { LogsArrayMapStringBuilderSubProcessor } from "./LogsArrayMapStringBuilderSubProcessor";

/**
 * A sub-processor used inside an array-map processor.
 * Allowed types: `attribute-remapper`, `string-builder-processor`,
 * `arithmetic-processor`, `category-processor`.
 */
export type LogsArrayMapSubProcessor =
  | LogsArrayMapAttributeRemapper
  | LogsArrayMapArithmeticSubProcessor
  | LogsArrayMapStringBuilderSubProcessor
  | LogsArrayMapCategorySubProcessor
  | UnparsedObject;
