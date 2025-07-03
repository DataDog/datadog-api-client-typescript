import { UnparsedObject } from "@datadog/datadog-api-client";

import { LogsArrayProcessorOperationAppend } from "./LogsArrayProcessorOperationAppend";
import { LogsArrayProcessorOperationLength } from "./LogsArrayProcessorOperationLength";
import { LogsArrayProcessorOperationSelect } from "./LogsArrayProcessorOperationSelect";

/**
 * Configuration of the array processor operation to perform.
 */
export type LogsArrayProcessorOperation =
  | LogsArrayProcessorOperationAppend
  | LogsArrayProcessorOperationLength
  | LogsArrayProcessorOperationSelect
  | UnparsedObject;
