import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { LogsArrayProcessorOperationAppend } from "./LogsArrayProcessorOperationAppend";
import { LogsArrayProcessorOperationExtractKeyValue } from "./LogsArrayProcessorOperationExtractKeyValue";
import { LogsArrayProcessorOperationLength } from "./LogsArrayProcessorOperationLength";
import { LogsArrayProcessorOperationSelect } from "./LogsArrayProcessorOperationSelect";

/**
 * Configuration of the array processor operation to perform.
 */
export type LogsArrayProcessorOperation =
  | LogsArrayProcessorOperationAppend
  | LogsArrayProcessorOperationLength
  | LogsArrayProcessorOperationSelect
  | LogsArrayProcessorOperationExtractKeyValue
  | UnparsedObject;
