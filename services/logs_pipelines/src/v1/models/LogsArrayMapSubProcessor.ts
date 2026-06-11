import { UnparsedObject } from "@datadog/datadog-api-client";

import { LogsArithmeticProcessor } from "./LogsArithmeticProcessor";
import { LogsAttributeRemapper } from "./LogsAttributeRemapper";
import { LogsCategoryProcessor } from "./LogsCategoryProcessor";
import { LogsStringBuilderProcessor } from "./LogsStringBuilderProcessor";

/**
 * A sub-processor used inside an array-map processor.
 * Allowed types: `attribute-remapper`, `string-builder-processor`,
 * `arithmetic-processor`, `category-processor`.
 */
export type LogsArrayMapSubProcessor =
  | LogsAttributeRemapper
  | LogsStringBuilderProcessor
  | LogsArithmeticProcessor
  | LogsCategoryProcessor
  | UnparsedObject;
